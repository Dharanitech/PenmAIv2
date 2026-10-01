import React from 'react';
import { ShieldAlert, ShieldCheck, Lock, ExternalLink, Heart } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface TrustSafetyFooterProps {
  language: Language;
}

export const TrustSafetyFooter: React.FC<TrustSafetyFooterProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="mt-16 bg-stone-900 text-stone-300 py-10 px-4 sm:px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Trust & Safety Banner */}
        <div className="bg-stone-800/90 border border-stone-700/80 rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {t.trustBadge}
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {t.trustSub}
              </p>
              <p className="mt-2 text-[11px] text-amber-300 font-medium">
                ⚠️ {t.disclaimerNotice}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                முழு தனியுரிமை பாதுகாப்பு (Zero Sensitive Data)
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {t.privacyNotice}
              </p>
              <p className="mt-2 text-[11px] text-stone-400">
                penmAI வங்கி கணக்கு எண், பாஸ்வேர்ட், அல்லது ஓடிபி (OTP) எதையும் சேமிப்பதில்லை.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-800 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white font-serif">penmAI</span>
            <span>•</span>
            <span>பெண்மை + AI</span>
            <span>•</span>
            <span>The Invisible Woman Accessibility Initiative</span>
          </div>

          <div className="flex items-center gap-1 text-stone-400">
            <span>Built with care for every woman finding her independent voice</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
