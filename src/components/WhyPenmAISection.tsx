import React from 'react';
import { Mic, Brain, HelpCircle, Compass } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface WhyPenmAISectionProps {
  language: Language;
}

export const WhyPenmAISection: React.FC<WhyPenmAISectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];

  const cards = [
    {
      icon: <Mic className="w-6 h-6 text-purple-600" />,
      title: language === 'ta' ? 'குரல் வழி முதல் உரிமை (Voice First)' : 'Voice First Access',
      subtitle: language === 'ta' ? 'அவள் தாய்மொழியில் இயல்பாக பேசினாலே போதும்.' : 'Speak naturally in your mother tongue.',
      description: language === 'ta' 
        ? 'எழுத்து தெரியாத, தட்டச்சு செய்யத் தெரியாத பெண்களும் தயக்கமின்றி குரல் மூலம் பேசலாம்.'
        : 'Zero typing required. Designed for women who have never typed on a mobile or computer before.'
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: language === 'ta' ? 'தேவைக்கேற்ப வழிகாட்டல் (Intent First)' : 'Intent First Discovery',
      subtitle: language === 'ta' ? 'சிக்கலான திட்டப் பெயர்கள் தெரிய வேண்டியதில்லை.' : 'Describe your problem, not the scheme name.',
      description: language === 'ta'
        ? '"எனக்கு தையல் வேலை பயிற்சி வேண்டும்" என்று தன் தேவையை சொன்னால் போதும், பொருத்தமான திட்டத்தை penmAI கண்டுபிடிக்கும்.'
        : 'She simply speaks her real-life need. penmAI identifies the exact matching government scheme.'
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-amber-600" />,
      title: language === 'ta' ? 'கேள்விக்கு பயமில்லை (Zero-Knowledge UX)' : 'Zero-Knowledge UX',
      subtitle: language === 'ta' ? '"எனக்குத் தெரியாது" என்பதே சரியான பதில்!' : '"I don’t know" is a valid answer.',
      description: language === 'ta'
        ? 'வருமானமோ ஆவணமோ தெரியாவிட்டால் திகைக்க வேண்டாம். அதை எங்கு கண்டுபிடிப்பது என்று penmAI அன்புடன் சொல்லித்தரும்.'
        : 'If she doesn’t know her annual income or category, penmAI explains where to look on her Aadhaar or ration card.'
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      title: language === 'ta' ? 'செயல் வழிகாட்டல் (Action Guidance)' : 'Action Guidance',
      subtitle: language === 'ta' ? 'தகவலோடு நிற்காமல், அடுத்த படியையும் கையில் தரும்.' : 'Don’t just tell. Guide the next step.',
      description: language === 'ta'
        ? 'தேவையான ஆவணங்களை சரிபார்த்து, அருகிலுள்ள மையம் மற்றும் அதிகாரப்பூர்வ இணையதளம் வரை உடன் செல்லும்.'
        : 'Interactive document checklist and 4 plain-language action steps to complete real-world access.'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto border-t border-stone-200">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
          {t.whyPenmaiTitle}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
          "பெண்மை" (பெண்மையின் வலிமை) + "AI" (செயற்கை நுண்ணறிவு) = தன்னாட்சி பெற்ற பெண்.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-stone-200 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                {card.title}
              </h3>
              <p className="text-xs font-semibold text-purple-700 mt-1 mb-3">
                {card.subtitle}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
