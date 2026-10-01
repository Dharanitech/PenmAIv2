import { Language } from '../types';

export interface SpeechRecognitionHandlers {
  onStart?: () => void;
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

const LANG_CODE_MAP: Record<Language, string> = {
  ta: 'ta-IN',
  en: 'en-IN',
  hi: 'hi-IN',
};

class SpeechService {
  private recognition: any = null;
  private isListening = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public isRecognitionSupported(): boolean {
    return typeof window !== 'undefined' && 
      ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  public isSynthesisSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public startListening(lang: Language, handlers: SpeechRecognitionHandlers): boolean {
    if (!this.isRecognitionSupported()) {
      handlers.onError?.('Speech recognition is not supported in this browser.');
      return false;
    }

    try {
      this.stopListening();
      this.stopSpeaking();

      const SpeechRecognitionConstructor = 
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognitionConstructor();
      
      this.recognition.lang = LANG_CODE_MAP[lang];
      this.recognition.interimResults = true;
      this.recognition.continuous = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isListening = true;
        handlers.onStart?.();
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const transcript = finalTranscript || interimTranscript;
        if (transcript.trim()) {
          handlers.onResult(transcript.trim());
        }
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        console.warn('Speech recognition event error:', event.error);
        handlers.onError?.(event.error || 'Speech error');
      };

      this.recognition.onend = () => {
        this.isListening = false;
        handlers.onEnd?.();
      };

      this.recognition.start();
      return true;
    } catch (err: any) {
      this.isListening = false;
      handlers.onError?.(err?.message || 'Could not start microphone');
      return false;
    }
  }

  public stopListening(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  public speak(
    text: string, 
    lang: Language, 
    options?: { rate?: number; onEnd?: () => void; onStart?: () => void }
  ): void {
    if (!this.isSynthesisSupported()) return;

    try {
      window.speechSynthesis.cancel();

      // Clean text of markdown/emojis for smoother speech synthesis
      const cleanText = text
        .replace(/[#*_~`\[\]()]/g, '')
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
        .trim();

      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = LANG_CODE_MAP[lang];
      utterance.rate = options?.rate || (lang === 'ta' ? 0.9 : 1.0); // Natural pacing for Tamil
      utterance.pitch = 1.05; // Friendly warm pitch

      // Try to find a matching voice in the browser
      const voices = window.speechSynthesis.getVoices();
      const targetLang = LANG_CODE_MAP[lang];
      const matchedVoice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => {
        options?.onStart?.();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        options?.onEnd?.();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        this.currentUtterance = null;
        options?.onEnd?.();
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis failed:', err);
      options?.onEnd?.();
    }
  }

  public stopSpeaking(): void {
    if (this.isSynthesisSupported()) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public isCurrentlySpeaking(): boolean {
    return this.isSynthesisSupported() ? window.speechSynthesis.speaking : false;
  }
}

export const speechService = new SpeechService();
