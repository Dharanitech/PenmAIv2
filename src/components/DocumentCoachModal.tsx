import React, { useState } from 'react';
import { X, CheckSquare, Square, Volume2, Info, FileCheck, HelpCircle } from 'lucide-react';
import { DocumentItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface DocumentCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: DocumentItem[];
  language: Language;
  onSpeak: (text: string) => void;
}

export const DocumentCoachModal: React.FC<DocumentCoachModalProps> = ({
  isOpen,
  onClose,
  documents,
  language,
  onSpeak,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const [selectedDocId, setSelectedDocId] = useState<string | null>(
    documents[0]?.id || null
  );

  if (!isOpen) return null;

  const toggleCheck = (id: string) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExplain = (doc: DocumentItem) => {
    setSelectedDocId(doc.id);
    const textToSpeak = `${doc.name[language]}. ${doc.description[language]}. ${t.howToFindDoc}: ${doc.howToFind[language]}`;
    onSpeak(textToSpeak);
  };

  const selectedDoc = documents.find((d) => d.id === selectedDocId) || documents[0];
  const readyCount = documents.filter((d) => checkedMap[d.id]).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-purple-800 to-indigo-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-bold">
              {t.documentsTitle} ({readyCount}/{documents.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list & coach view */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs sm:text-sm text-stone-600">
            உங்களிடம் ஏற்கனவே கையில் உள்ள ஆவணங்களை டிக் செய்யுங்கள். தெரியாத ஆவணங்களை தொட்டு விளக்கம் கேட்கலாம்.
          </p>

          {/* Checklist items */}
          <div className="space-y-3">
            {documents.map((doc) => {
              const isChecked = !!checkedMap[doc.id];
              const isSelected = selectedDoc?.id === doc.id;

              return (
                <div
                  key={doc.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50/60 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleCheck(doc.id)}
                    className="flex items-start gap-3 text-left flex-1 cursor-pointer"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm sm:text-base font-bold ${
                            isChecked ? 'line-through text-stone-500' : 'text-stone-900'
                          }`}
                        >
                          {doc.name[language]}
                        </span>
                        {doc.isMandatory && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-rose-100 text-rose-800 rounded-sm">
                            கட்டாயம்
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {doc.description[language]}
                      </p>
                    </div>
                  </button>

                  {/* Speaker Button to explain document */}
                  <button
                    onClick={() => handleExplain(doc)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-bold shrink-0 transition-colors cursor-pointer"
                    title={t.explainDocument}
                  >
                    <Volume2 className="w-3.5 h-3.5 text-purple-700" />
                    <span className="hidden sm:inline">விளக்கம்</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Coach detail card for currently selected document */}
          {selectedDoc && (
            <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>ஆவண உதவி வழிகாட்டி: {selectedDoc.name[language]}</span>
                </span>
                <button
                  onClick={() => handleExplain(selectedDoc)}
                  className="text-xs font-bold text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>குரல் வழியே கேள்</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-stone-800">
                <strong className="text-stone-900">எதற்கு தேவை:</strong> {selectedDoc.description[language]}
              </p>
              <p className="text-xs sm:text-sm text-amber-950 font-medium bg-white/70 p-2.5 rounded-xl border border-amber-200">
                🔍 <strong>{t.howToFindDoc}:</strong> {selectedDoc.howToFind[language]}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-between items-center">
          <span className="text-xs text-stone-500 font-medium">
            ஆவணங்கள் தயாராக இருந்தால் விண்ணப்பிப்பது மிக எளிது.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
