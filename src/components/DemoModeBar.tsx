import React from 'react';
import { Play, SkipForward, RotateCcw, Check, Sparkles, User, Info } from 'lucide-react';
import { Language } from '../types';

interface DemoModeBarProps {
  language: Language;
  currentStep: number;
  totalSteps: number;
  onNextStep: () => void;
  onRestartDemo: () => void;
  onExitDemo: () => void;
  stepDescription: string;
}

export const DemoModeBar: React.FC<DemoModeBarProps> = ({
  language,
  currentStep,
  totalSteps,
  onNextStep,
  onRestartDemo,
  onExitDemo,
  stepDescription,
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[94%] bg-stone-900/95 text-white backdrop-blur-md px-4 py-3.5 rounded-2xl shadow-2xl border border-amber-400/80 animate-bounce-short">
      <div className="flex items-center justify-between gap-3">
        {/* Scenario avatar & label */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
            60s
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>JUDGE DEMO: லட்சுமி (Lakshmi, 32, Homemaker)</span>
            </div>
            <p className="text-[11px] text-stone-300 truncate max-w-xs">
              {stepDescription}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {currentStep < totalSteps ? (
            <button
              onClick={onNextStep}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <span>அடுத்த படி ({currentStep}/{totalSteps})</span>
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onRestartDemo}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>மறுபடி தொடங்கு</span>
            </button>
          )}

          <button
            onClick={onExitDemo}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors text-xs font-semibold cursor-pointer"
            title="வெளியேறு (Exit)"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
