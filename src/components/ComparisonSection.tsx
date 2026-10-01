import React from 'react';
import { ArrowRight, CheckCircle2, XCircle, Mic, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ComparisonSectionProps {
  language: Language;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
          வடிவமைப்பு தத்துவம் (Design Philosophy)
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-serif">
          {t.traditionalVsPenmaiTitle}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto mt-1">
          "Don't make the woman learn the system. Make the system understand the woman."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Old Way Card */}
        <div className="bg-stone-100/90 rounded-3xl p-6 sm:p-7 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-rose-500" />
              <h3 className="font-bold text-base sm:text-lg text-stone-800">
                வழக்கமான அரசு போர்ட்டல்கள் (Old Way)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 font-medium">
              பெண் கணினி முறையையும் அதன் கடின ஆங்கில சொற்களையும் படித்து தெரிந்து கொள்ள வேண்டும்.
            </p>

            {/* Stepper */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-500 bg-white/70 p-3.5 rounded-2xl border border-stone-200">
              <span className="px-2.5 py-1 bg-stone-200 rounded-lg">1. Search</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="px-2.5 py-1 bg-stone-200 rounded-lg">2. Understand</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="px-2.5 py-1 bg-stone-200 rounded-lg">3. Fill Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="px-2.5 py-1 bg-stone-200 rounded-lg">4. Submit</span>
            </div>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-stone-600">
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✕</span>
                திட்டத்தின் பெயர் ஆங்கிலத்தில் தெரிந்திருக்க வேண்டும்
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✕</span>
                சிக்கலான தகுதி விதிகளை படித்துப் புரிந்து கொள்ள வேண்டும்
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✕</span>
                "எனக்குத் தெரியாது" என்று சொல்ல வழியே இல்லை
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-bold text-stone-500">
            முடிவு: தொழில்நுட்பம் அறியாத பெண்களுக்கு விலக்கல் (Exclusion)
          </div>
        </div>

        {/* penmAI Way Card */}
        <div className="bg-linear-to-br from-purple-900 via-purple-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-purple-400 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  penmAI அணுகுமுறை (The penmAI Way)
                </h3>
              </div>
              <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-stone-900 px-2 py-0.5 rounded-full">
                Zero Tech Barrier
              </span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200 mb-6 font-medium">
              கணினி பெண்ணின் மொழியையும் தேவைகளையும் தானாகப் புரிந்து கொள்கிறது.
            </p>

            {/* Stepper */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-stone-900 bg-white/95 p-3.5 rounded-2xl shadow-sm">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg">1. Speak 🎙️</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg">2. Understand 🧠</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg">3. Guide 🧭</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg">4. Access ✅</span>
            </div>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-purple-100">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                தன் சொந்த தாய்மொழியில் இயல்பாக பேசினால் போதும்
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                தேவையை சொன்னால் பொருத்தமான திட்டத்தை தானாக கண்டறியும்
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                "❓ எனக்குத் தெரியாது" என்பதே சரியான பதில்!
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-700/60 text-xs font-bold text-amber-300 flex items-center justify-between">
            <span>முடிவு: முதல் முறையாக சுயமாக அரசு சேவைகளை அணுகும் சுதந்திரம்!</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
