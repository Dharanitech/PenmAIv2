import React, { useState } from 'react';
import { X, Volume2, Sparkles, BookOpen, Check } from 'lucide-react';
import { JARGON_TERMS } from '../data/glossary';
import { JargonTerm, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface JargonTranslatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSpeak: (text: string) => void;
}

export const JargonTranslatorModal: React.FC<JargonTranslatorModalProps> = ({
  isOpen,
  onClose,
  language,
  onSpeak,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [selectedTerm, setSelectedTerm] = useState<JargonTerm>(JARGON_TERMS[0]);

  if (!isOpen) return null;

  const handleSpeak = (term: JargonTerm) => {
    setSelectedTerm(term);
    const textToSpeak = `${term.localizedTerm[language]}. ${term.simpleExplanation[language]}. உதாரணம்: ${term.realWorldExample[language]}`;
    onSpeak(textToSpeak);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-purple-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-purple-800 via-purple-700 to-indigo-800 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {t.explainThisTitle}
              </h3>
              <p className="text-xs text-purple-200">
                penmAI translates digital complexity into simple human language.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content split view */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left term list */}
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              குழப்பும் சொற்களைத் தொடுங்கள் (Select Term):
            </p>
            <div className="space-y-1.5 max-h-72 md:max-h-full overflow-y-auto pr-1">
              {JARGON_TERMS.map((term) => {
                const isSelected = selectedTerm.id === term.id;
                return (
                  <button
                    key={term.id}
                    onClick={() => {
                      setSelectedTerm(term);
                      handleSpeak(term);
                    }}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-purple-50 border-purple-400 shadow-2xs font-bold text-purple-950'
                        : 'bg-stone-50/70 border-stone-200 hover:border-purple-200 text-stone-700'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">
                      {term.localizedTerm[language]}
                    </span>
                    <Volume2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right explanation panel */}
          <div className="md:col-span-7 bg-purple-50/50 border border-purple-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block">
                    எளிய விளக்கம் (Simple Meaning):
                  </span>
                  <h4 className="text-xl font-extrabold text-stone-900 mt-1 font-serif">
                    {selectedTerm.localizedTerm[language]}
                  </h4>
                </div>
                <button
                  onClick={() => handleSpeak(selectedTerm)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shrink-0 transition-colors shadow-xs cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{t.readAloud}</span>
                </button>
              </div>

              {/* Simple explanation */}
              <div className="bg-white p-4 rounded-2xl border border-purple-100 text-stone-800 text-sm leading-relaxed shadow-2xs">
                {selectedTerm.simpleExplanation[language]}
              </div>

              {/* Real world analogy */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                  எளிய உதாரணம் (Real-life Example):
                </span>
                <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl text-xs sm:text-sm text-stone-800 font-medium">
                  "{selectedTerm.realWorldExample[language]}"
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] text-stone-500">
              💡 இணைய படிவங்களில் இதுபோன்ற சொற்களைக் கண்டால் பயப்பட வேண்டாம்.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
