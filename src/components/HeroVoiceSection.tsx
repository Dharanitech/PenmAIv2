import React, { useState } from 'react';
import { Mic, MicOff, Send, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeroVoiceSectionProps {
  language: Language;
  isListening: boolean;
  isProcessing: boolean;
  currentTranscript: string;
  onStartListening: () => void;
  onStopListening: () => void;
  onSubmitText: (text: string) => void;
  onSelectSample: (sampleText: string) => void;
}

export const HeroVoiceSection: React.FC<HeroVoiceSectionProps> = ({
  language,
  isListening,
  isProcessing,
  currentTranscript,
  onStartListening,
  onStopListening,
  onSubmitText,
  onSelectSample,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && !isProcessing) {
      onSubmitText(textInput.trim());
      setTextInput('');
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-linear-to-b from-purple-50/70 via-stone-50 to-white">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Challenge Statement Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 text-purple-900 border border-purple-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>{t.tagline}</span>
        </div>

        {/* Hero Hook: The core philosophy */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight max-w-3xl mx-auto font-serif">
          {t.heroHeadline}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-purple-800 font-medium">
          {t.heroSubheadline}
        </p>

        {/* The simple guiding prompt */}
        <div className="mt-8 mb-6 inline-block bg-white px-6 py-3 rounded-2xl shadow-sm border border-purple-100">
          <span className="text-xl sm:text-2xl font-bold text-stone-800">
            "{t.heroSpeechPrompt}"
          </span>
        </div>

        {/* Central Voice Button Area */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring during listening */}
            {isListening && (
              <div className="absolute w-36 h-36 rounded-full bg-purple-400/30 animate-ping pointer-events-none" />
            )}
            {isListening && (
              <div className="absolute w-28 h-28 rounded-full bg-purple-500/20 animate-pulse-ring pointer-events-none" />
            )}

            <button
              onClick={isListening ? onStopListening : onStartListening}
              disabled={isProcessing}
              className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer ${
                isListening
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-300'
                  : 'bg-linear-to-tr from-purple-700 via-purple-600 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-purple-300'
              } ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-label={isListening ? t.stopSpeaking : t.startSpeaking}
            >
              {isListening ? (
                <MicOff className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
              ) : (
                <Mic className="w-10 h-10 sm:w-12 sm:h-12" />
              )}
            </button>
          </div>

          {/* Action text under microphone */}
          <div className="mt-4">
            <span className="text-base sm:text-lg font-bold text-purple-900 block">
              {isListening ? t.stopSpeaking : t.startSpeaking}
            </span>
            <span className="text-xs text-stone-500">
              {isListening ? t.listening : '(Touch microphone and speak)'}
            </span>
          </div>

          {/* Real-time sound wave animation when listening */}
          {isListening && (
            <div className="mt-4 flex items-center justify-center gap-1.5 h-10">
              <span className="w-1.5 bg-purple-600 rounded-full animate-voice-bar-1" />
              <span className="w-1.5 bg-purple-600 rounded-full animate-voice-bar-2" />
              <span className="w-1.5 bg-purple-600 rounded-full animate-voice-bar-3" />
              <span className="w-1.5 bg-purple-600 rounded-full animate-voice-bar-4" />
              <span className="w-1.5 bg-purple-600 rounded-full animate-voice-bar-5" />
            </div>
          )}

          {/* Live speech transcript preview */}
          {currentTranscript && (
            <div className="mt-4 max-w-lg bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-xl text-stone-800 text-sm font-medium animate-fadeIn">
              <span className="text-xs font-bold text-amber-800 block mb-0.5">
                {isListening ? 'கேட்ட வார்த்தை (Recognized):' : 'உங்கள் பேச்சு:'}
              </span>
              "{currentTranscript}"
            </div>
          )}

          {/* Processing spinner indicator */}
          {isProcessing && (
            <div className="mt-4 flex items-center gap-2 text-purple-700 font-semibold text-sm">
              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
              <span>{t.processing}</span>
            </div>
          )}
        </div>

        {/* Divider / Text fallback toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px bg-stone-200 w-16 sm:w-28" />
          <button
            onClick={() => setShowTextInput(!showTextInput)}
            className="text-xs font-semibold text-purple-700 hover:text-purple-900 bg-white px-3 py-1 rounded-full border border-purple-200 shadow-xs cursor-pointer hover:bg-purple-50 transition-colors"
          >
            {showTextInput ? 'குரல் முறைக்கு திரும்புக (Voice mode)' : t.typeNeed}
          </button>
          <div className="h-px bg-stone-200 w-16 sm:w-28" />
        </div>

        {/* Text Input Drawer */}
        {showTextInput && (
          <form onSubmit={handleTextSubmit} className="mt-4 max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={t.typePlaceholder}
              disabled={isProcessing}
              className="flex-1 px-4 py-3 rounded-xl border border-stone-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-hidden text-sm bg-white shadow-xs"
            />
            <button
              type="submit"
              disabled={!textInput.trim() || isProcessing}
              className="px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm flex items-center gap-1.5 shadow-sm disabled:opacity-50 transition-all cursor-pointer"
            >
              <span>{t.send}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* One-tap spoken sample phrases */}
        <div className="mt-8 max-w-2xl mx-auto text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5 text-center">
            {t.quickSamplesTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {t.samples.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSample(sample)}
                className="group p-3 rounded-xl bg-white hover:bg-purple-50/80 border border-stone-200 hover:border-purple-300 text-left text-xs sm:text-sm text-stone-700 hover:text-purple-950 transition-all shadow-2xs hover:shadow-xs flex items-center justify-between gap-2 cursor-pointer"
              >
                <span className="line-clamp-2 font-medium">"{sample}"</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-700 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
