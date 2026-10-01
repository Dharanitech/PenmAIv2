import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  ExternalLink, 
  FileText, 
  Navigation, 
  Volume2, 
  PhoneCall, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';
import { GovResource, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ResourceMatchCardProps {
  resource: GovResource;
  language: Language;
  onOpenDocuments: () => void;
  onOpenSteps: () => void;
  onReadAloud: (text: string) => void;
  onOpenJargonModal: () => void;
}

export const ResourceMatchCard: React.FC<ResourceMatchCardProps> = ({
  resource,
  language,
  onOpenDocuments,
  onOpenSteps,
  onReadAloud,
  onOpenJargonModal,
}) => {
  const t = UI_TRANSLATIONS[language];

  const handleReadAloud = () => {
    const textToRead = `${resource.name[language]}. ${t.whyThisFits}: ${resource.whyRelevant[language]}. ${t.eligibilityTitle}: ${resource.eligibility[language].join('. ')}`;
    onReadAloud(textToRead);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 my-8 animate-fadeIn">
      <div className="bg-white rounded-3xl border-2 border-purple-200 shadow-xl overflow-hidden">
        {/* Top Header Badge */}
        <div className="bg-linear-to-r from-purple-700 via-purple-800 to-indigo-800 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌟</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-200">
              {t.matchedTitle}
            </span>
          </div>
          <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.verifiedOfficialBadge}</span>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Department */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200 mb-2">
              {resource.badge[language]}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug font-serif">
              {resource.name[language]}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-medium text-stone-500">
              {resource.department[language]}
            </p>
          </div>

          {/* Simple Summary */}
          <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-stone-800 text-sm sm:text-base leading-relaxed">
            {resource.simpleSummary[language]}
          </div>

          {/* "Why is this relevant to you?" section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>{t.whyThisFits}</span>
            </h3>
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-stone-800 text-sm sm:text-base font-medium">
              {resource.whyRelevant[language]}
            </div>
          </div>

          {/* Eligibility breakdown */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
              {t.eligibilityTitle}
            </h3>
            <ul className="space-y-2.5">
              {resource.eligibility[language].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer & Trust info */}
          <div className="text-xs text-stone-500 bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <p>{resource.disclaimer[language]}</p>
              {resource.supportHelpline && (
                <p className="mt-1 font-semibold text-stone-700 flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
                  <span>உதவி எண் (Helpline): {resource.supportHelpline}</span>
                </p>
              )}
            </div>
          </div>

          {/* Core Access Actions - "ACTION, NOT JUST INFORMATION" */}
          <div className="pt-4 border-t border-stone-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              அடுத்ததாக நீங்கள் செய்ய வேண்டியவை (Next Actions):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Audio Listen */}
              <button
                onClick={handleReadAloud}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-950 font-bold text-sm transition-all shadow-xs cursor-pointer border border-purple-200"
              >
                <Volume2 className="w-4 h-4 text-purple-700" />
                <span>{t.readAloud}</span>
              </button>

              {/* View Documents Checklist */}
              <button
                onClick={onOpenDocuments}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-md shadow-indigo-100 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.documentsTitle}</span>
              </button>

              {/* Step by step action guide */}
              <button
                onClick={onOpenSteps}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-stone-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{t.actionStepsTitle}</span>
              </button>

              {/* Official Source Link */}
              <a
                href={resource.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-all shadow-md shadow-emerald-100 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.officialSourceBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
