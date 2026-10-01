import React from 'react';
import { Volume2, VolumeX, RotateCcw, HelpCircle, CheckCircle2, User, Sparkles } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ConversationViewProps {
  messages: ChatMessage[];
  language: Language;
  isSpeaking: boolean;
  activeSpeakingId: string | null;
  onReadAloud: (text: string, messageId: string) => void;
  onStopAudio: () => void;
  onSelectQuickOption: (option: string) => void;
  onIDontKnow: () => void;
  onReset: () => void;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
  messages,
  language,
  isSpeaking,
  activeSpeakingId,
  onReadAloud,
  onStopAudio,
  onSelectQuickOption,
  onIDontKnow,
  onReset,
}) => {
  const t = UI_TRANSLATIONS[language];

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
      {/* Header bar with reset option */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200 text-xs text-stone-500">
        <span className="font-semibold text-purple-900 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>வழிகாட்டல் உரையாடல் (Guidance Stream)</span>
        </span>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-stone-600 hover:text-rose-600 transition-colors cursor-pointer font-medium"
          title={t.resetChat}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetChat}</span>
        </button>
      </div>

      {/* Message stream */}
      <div className="space-y-5">
        {messages.map((msg) => {
          const isAI = msg.sender === 'ai';
          const isCurrentlyPlaying = isSpeaking && activeSpeakingId === msg.id;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isAI ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`flex gap-3 max-w-xl sm:max-w-2xl ${
                  isAI ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-xs font-bold text-xs ${
                    isAI
                      ? 'bg-purple-700 text-white'
                      : 'bg-stone-800 text-white'
                  }`}
                >
                  {isAI ? 'penm' : <User className="w-4 h-4" />}
                </div>

                {/* Message Bubble Card */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl shadow-xs text-sm sm:text-base leading-relaxed ${
                    isAI
                      ? 'bg-white border border-purple-100 text-stone-900 rounded-tl-xs'
                      : 'bg-purple-700 text-white rounded-tr-xs'
                  }`}
                >
                  <p className="whitespace-pre-line font-normal">{msg.text}</p>

                  {/* AI Audio & Guidance bar */}
                  {isAI && (
                    <div className="mt-3 pt-3 border-t border-purple-50 flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() =>
                          isCurrentlyPlaying
                            ? onStopAudio()
                            : onReadAloud(msg.text, msg.id)
                        }
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isCurrentlyPlaying
                            ? 'bg-rose-100 text-rose-700 border border-rose-200'
                            : 'bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200'
                        }`}
                      >
                        {isCurrentlyPlaying ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>{t.stopAudio}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-purple-700" />
                            <span>{t.readAloud}</span>
                          </>
                        )}
                      </button>

                      {/* Display I don't know hint if provided */}
                      {msg.iDontKnowHint && (
                        <span className="text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          💡 {msg.iDontKnowHint}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick option buttons & "I DON'T KNOW" button for the latest AI question */}
              {isAI && msg.isQuestion && (
                <div className="mt-3 ml-12 flex flex-wrap items-center gap-2">
                  {msg.quickOptions?.map((opt, idx) => {
                    const isIDontKnowOpt =
                      opt.includes('தெரியாது') ||
                      opt.includes("don't know") ||
                      opt.includes('पता नहीं');

                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          isIDontKnowOpt ? onIDontKnow() : onSelectQuickOption(opt)
                        }
                        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                          isIDontKnowOpt
                            ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-bold hover:scale-105'
                            : 'bg-white hover:bg-purple-50 text-stone-800 hover:text-purple-900 border border-stone-200 hover:border-purple-300'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}

                  {/* Fallback prominent "I don't know" button if not in options */}
                  {!msg.quickOptions?.some(
                    (o) =>
                      o.includes('தெரியாது') ||
                      o.includes("don't know") ||
                      o.includes('पता नहीं')
                  ) && (
                    <button
                      onClick={onIDontKnow}
                      className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-all shadow-2xs hover:scale-105 cursor-pointer flex items-center gap-1.5"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                      <span>{t.iDontKnowButton}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
