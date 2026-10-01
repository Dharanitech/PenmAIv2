import React from 'react';
import { Volume2, Sparkles, HelpCircle, Settings2, PlayCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenJargonModal: () => void;
  onOpenAccessibilityModal: () => void;
  onTriggerDemo: () => void;
  isDemoActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenJargonModal,
  onOpenAccessibilityModal,
  onTriggerDemo,
  isDemoActive,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand logo & tagline */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-purple-700 via-purple-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-purple-200">
            <span className="font-extrabold text-xl tracking-tight">p</span>
            <span className="font-bold text-xs uppercase bg-amber-400 text-stone-900 px-1 py-0.5 rounded-sm ml-0.5">AI</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-purple-950 font-serif">
                penm<span className="text-purple-600">AI</span>
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                பெண்மை + AI
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Demo CTA for judges */}
          <button
            onClick={onTriggerDemo}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer ${
              isDemoActive
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
            }`}
            title={t.demoLabel}
          >
            <PlayCircle className="w-4 h-4 text-amber-700" />
            <span className="hidden md:inline">{t.tryDemoBtn}</span>
            <span className="md:hidden">Demo</span>
          </button>

          {/* Digital Jargon Translator */}
          <button
            onClick={onOpenJargonModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer"
            title={t.explainThisTitle}
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span className="hidden lg:inline">{t.explainThisBtn}</span>
            <span className="lg:hidden">அகராதி</span>
          </button>

          {/* Language Switcher Buttons */}
          <div className="flex items-center p-0.5 bg-stone-100 rounded-xl border border-stone-200">
            <button
              onClick={() => onLanguageChange('ta')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'ta'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-purple-700'
              }`}
            >
              தமிழ்
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-purple-700'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-purple-700'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Accessibility Settings trigger */}
          <button
            onClick={onOpenAccessibilityModal}
            className="p-2 rounded-xl text-stone-600 hover:bg-stone-100 hover:text-purple-700 transition-colors cursor-pointer border border-transparent hover:border-stone-200"
            aria-label={t.accessibilitySettings}
            title={t.accessibilitySettings}
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
