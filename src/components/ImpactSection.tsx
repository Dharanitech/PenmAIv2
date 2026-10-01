import React from 'react';
import { ArrowDown, Sparkles, HeartHandshake, Quote } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ImpactSectionProps {
  language: Language;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];

  const pairs = [
    {
      oldState: language === 'ta' ? 'ஆங்கிலம் தெரியாது (No English)' : 'No English',
      arrow: '↓',
      newState: language === 'ta' ? 'தன் சொந்த தாய்மொழி (Own Language)' : 'Own Language',
      badge: 'மொழி உரிமை'
    },
    {
      oldState: language === 'ta' ? 'தொழில்நுட்ப அறிவு இல்லை (No Tech Knowledge)' : 'No Tech Knowledge',
      arrow: '↓',
      newState: language === 'ta' ? 'இயல்பான குரல் வழி உரையாடல் (Voice Access)' : 'Voice Interaction',
      badge: 'பூஜ்ஜிய தட்டச்சு'
    },
    {
      oldState: language === 'ta' ? 'கேட்க யாரும் இல்லை (No One to Ask)' : 'No One to Ask',
      arrow: '↓',
      newState: language === 'ta' ? 'அன்பான AI வழிகாட்டல் (Empathetic AI)' : 'AI Guidance',
      badge: '24/7 துணை'
    },
    {
      oldState: language === 'ta' ? 'திட்டத்தின் பெயர் தெரியாது (Don’t Know Scheme)' : 'Don’t Know Scheme',
      arrow: '↓',
      newState: language === 'ta' ? 'தேவையை சொன்னால் போதும் (Intent Discovery)' : 'Need-Based Discovery',
      badge: 'தானியங்கி பொருத்தம்'
    },
    {
      oldState: language === 'ta' ? 'படிவங்கள் புரியாது (Complex Forms)' : 'Complex Forms',
      arrow: '↓',
      newState: language === 'ta' ? 'எளிய 4-படி வழிகாட்டல் (Step-by-Step)' : 'Step-by-Step Access',
      badge: 'முழு சுதந்திரம்'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-t border-stone-200">
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          சமூக தாக்கம் (Social Impact)
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
          {t.impactTitle}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-stone-600">
          {t.impactSubtitle}
        </p>
      </div>

      {/* The 5 Transformative Bridges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {pairs.map((pair, idx) => (
          <div
            key={idx}
            className="p-4.5 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between items-center text-center group hover:border-purple-300 transition-all"
          >
            <div className="w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md inline-block mb-2">
                {pair.badge}
              </span>
              <p className="text-xs font-medium text-stone-500 line-through">
                {pair.oldState}
              </p>
            </div>

            <div className="my-2.5 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>

            <div className="w-full">
              <p className="text-xs sm:text-sm font-extrabold text-stone-900 group-hover:text-purple-900">
                {pair.newState}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Callout Card */}
      <div className="mt-12 bg-linear-to-r from-purple-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <Quote className="absolute top-4 right-6 w-20 h-20 text-white/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-sm sm:text-base italic text-purple-100 leading-relaxed font-serif">
            "{t.philosophyQuote}"
          </p>
          <div className="mt-4 pt-4 border-t border-purple-800/80 flex items-center gap-2 text-xs font-bold text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>penmAI: Her Voice. Her Language. Her Access.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
