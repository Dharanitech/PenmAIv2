import React, { useState } from 'react';
import { X, CheckCircle2, Volume2, ArrowRight, Navigation, Sparkles } from 'lucide-react';
import { StepItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface StepActionGuideProps {
  isOpen: boolean;
  onClose: () => void;
  steps: StepItem[];
  language: Language;
  onSpeak: (text: string) => void;
  officialUrl: string;
}

export const StepActionGuide: React.FC<StepActionGuideProps> = ({
  isOpen,
  onClose,
  steps,
  language,
  onSpeak,
  officialUrl,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  const currentStep = steps[currentStepIndex] || steps[0];

  const handleSpeakStep = (step: StepItem) => {
    const textToSpeak = `படி ${step.stepNumber}: ${step.title[language]}. ${step.description[language]}. ${step.audioHint[language]}`;
    onSpeak(textToSpeak);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-bold">
              {t.actionStepsTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="bg-purple-50 px-6 py-3 border-b border-purple-100 flex items-center justify-between">
          {steps.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => {
                setCurrentStepIndex(idx);
                handleSpeakStep(step);
              }}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentStepIndex
                  ? 'bg-purple-700 text-white shadow-xs'
                  : idx < currentStepIndex
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-stone-200 text-stone-600'
              }`}
            >
              <span>{step.stepNumber}</span>
              <span className="hidden sm:inline">படி {step.stepNumber}</span>
            </button>
          ))}
        </div>

        {/* Content of selected step */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
                படிமுறை {currentStep.stepNumber} / {steps.length}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
                {currentStep.title[language]}
              </h2>
            </div>
            <button
              onClick={() => handleSpeakStep(currentStep)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-bold shrink-0 transition-colors shadow-2xs cursor-pointer"
              title={t.readAloud}
            >
              <Volume2 className="w-4 h-4 text-purple-700" />
              <span>{t.readAloud}</span>
            </button>
          </div>

          {/* Description */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-stone-800 text-sm sm:text-base leading-relaxed">
            {currentStep.description[language]}
          </div>

          {/* Audio hint card */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div>
              <span className="text-xs font-bold uppercase text-amber-900 block mb-0.5">
                எளிய குரல் வழிகாட்டல்:
              </span>
              <p className="text-xs sm:text-sm text-amber-950 font-medium">
                "{currentStep.audioHint[language]}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer with navigation buttons */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => {
              if (currentStepIndex > 0) {
                const prev = currentStepIndex - 1;
                setCurrentStepIndex(prev);
                handleSpeakStep(steps[prev]);
              }
            }}
            disabled={currentStepIndex === 0}
            className="px-4 py-2 rounded-xl text-stone-700 font-bold text-xs sm:text-sm disabled:opacity-30 transition-colors cursor-pointer"
          >
            முந்தைய படி
          </button>

          {currentStepIndex < steps.length - 1 ? (
            <button
              onClick={() => {
                const next = currentStepIndex + 1;
                setCurrentStepIndex(next);
                handleSpeakStep(steps[next]);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>{t.nextStep}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>{t.officialSourceBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
