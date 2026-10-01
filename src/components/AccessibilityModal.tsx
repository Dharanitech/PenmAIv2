import React from 'react';
import { X, Type, Gauge, Contrast, Volume2 } from 'lucide-react';
import { AccessibilitySettings, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  language: Language;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-purple-900 px-6 py-4 text-white flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold">
            {t.accessibilitySettings}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings options */}
        <div className="p-6 space-y-5">
          {/* Font Size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5 mb-2">
              <Type className="w-4 h-4 text-purple-700" />
              <span>{t.fontSize}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onUpdateSettings({ fontSize: 'normal' })}
                className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  settings.fontSize === 'normal'
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                }`}
              >
                சாதாரண (Default)
              </button>
              <button
                onClick={() => onUpdateSettings({ fontSize: 'large' })}
                className={`py-2 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                  settings.fontSize === 'large'
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                }`}
              >
                பெரியது (Large)
              </button>
              <button
                onClick={() => onUpdateSettings({ fontSize: 'xlarge' })}
                className={`py-2 text-base font-bold rounded-xl border transition-all cursor-pointer ${
                  settings.fontSize === 'xlarge'
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                }`}
              >
                மிகப் பெரியது (XL)
              </button>
            </div>
          </div>

          {/* Speech Speed */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-purple-700" />
                <span>{t.speechRate} ({settings.speechRate}x)</span>
              </label>
              <span className="text-xs text-purple-800 font-semibold">
                {settings.speechRate < 0.9 ? 'நிதானமாக (Slow & Clear)' : 'இயல்பான வேகம் (Normal)'}
              </span>
            </div>
            <input
              type="range"
              min="0.75"
              max="1.1"
              step="0.05"
              value={settings.speechRate}
              onChange={(e) => onUpdateSettings({ speechRate: parseFloat(e.target.value) })}
              className="w-full accent-purple-700 cursor-pointer"
            />
          </div>

          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <Contrast className="w-4 h-4 text-purple-700" />
              <div>
                <span className="text-sm font-bold text-stone-800 block">
                  {t.highContrast}
                </span>
                <span className="text-xs text-stone-500">
                  பார்வை குறைபாடுள்ளவர்களுக்கான அதிக மாறுபட்ட வண்ணங்கள்
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => onUpdateSettings({ highContrast: e.target.checked })}
              className="w-5 h-5 accent-purple-700 rounded-md cursor-pointer"
            />
          </div>

          {/* Auto Speak Toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-purple-700" />
              <div>
                <span className="text-sm font-bold text-stone-800 block">
                  {t.autoSpeak}
                </span>
                <span className="text-xs text-stone-500">
                  AI பதிலளித்தவுடன் குரல் வழியே தானாக பேசும்
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.autoSpeak}
              onChange={(e) => onUpdateSettings({ autoSpeak: e.target.checked })}
              className="w-5 h-5 accent-purple-700 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
