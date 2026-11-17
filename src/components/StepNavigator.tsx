import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types/remedy';
import { translations } from '../data/translations';

export type AppStepId =
  | 'overview'
  | 'finder'
  | 'ingredients'
  | 'symptoms'
  | 'doctors'
  | 'med_reminder'
  | 'safety';

export const STEP_ORDER: AppStepId[] = [
  'overview',
  'finder',
  'ingredients',
  'symptoms',
  'doctors',
  'med_reminder',
  'safety',
];

interface StepFooterNavProps {
  lang: Language;
  currentStep: AppStepId;
  onSelectStep: (step: AppStepId) => void;
}

export function StepFooterNav({ lang, currentStep, onSelectStep }: StepFooterNavProps) {
  const ui = translations[lang];
  const currentIdx = STEP_ORDER.indexOf(currentStep);
  const prevStep = currentIdx > 0 ? STEP_ORDER[currentIdx - 1] : null;
  const nextStep = currentIdx < STEP_ORDER.length - 1 ? STEP_ORDER[currentIdx + 1] : null;

  return (
    <div className="bg-[#FAF8F3] border-t border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          {prevStep ? (
            <button
              type="button"
              onClick={() => onSelectStep(prevStep)}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#D8D3C5] bg-white text-sm font-medium text-[#2A352C] hover:bg-[#F2EEE4] transition-colors whitespace-nowrap cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {ui.prevStepLabel}: {ui.stepLabels[prevStep]}
              </span>
            </button>
          ) : (
            <span className="text-xs font-medium text-[#637065] tabular-nums">
              {ui.stepProgressLabel} 1 / {STEP_ORDER.length}
            </span>
          )}
        </div>

        <div className="hidden sm:block text-xs font-medium text-[#637065] tabular-nums">
          {ui.stepProgressLabel} {currentIdx + 1} / {STEP_ORDER.length}
        </div>

        <div>
          {nextStep ? (
            <button
              type="button"
              onClick={() => onSelectStep(nextStep)}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-semibold hover:bg-[#2F4D38] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>
                {ui.nextStepLabel}: {ui.stepLabels[nextStep]}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSelectStep('overview')}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-semibold hover:bg-[#2F4D38] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{ui.backToOverviewBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
