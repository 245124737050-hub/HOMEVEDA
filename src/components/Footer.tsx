import { Language } from '../types/remedy';
import { translations } from '../data/translations';
import { AppStepId } from './StepNavigator';
import { PWAInstallButton } from './PWAInstallButton';

interface FooterProps {
  lang: Language;
  onSelectStep: (step: AppStepId) => void;
  onToggleLang: () => void;
}

export function Footer({ lang, onSelectStep, onToggleLang }: FooterProps) {
  const ui = translations[lang];

  const links: { step: AppStepId; label: string }[] = [
    { step: 'finder', label: ui.navFinder },
    { step: 'ingredients', label: ui.navIngredientMatcher },
    { step: 'symptoms', label: ui.navSymptomChecker },
    { step: 'doctors', label: ui.navDoctors },
    { step: 'med_reminder', label: ui.navMedReminder },
    { step: 'safety', label: ui.navSafety },
  ];

  return (
    <footer className="bg-[#EFEBE0] text-[#3B473D] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCD6C7]">
          <button
            type="button"
            onClick={() => onSelectStep('overview')}
            className="font-display text-xl font-semibold text-[#1D261F] text-left cursor-pointer"
          >
            {ui.brandName}
          </button>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            {links.map((item) => (
              <button
                key={item.step}
                type="button"
                onClick={() => onSelectStep(item.step)}
                className="hover:text-[#1D261F] hover:underline underline-offset-4 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={onToggleLang}
              className="font-medium text-[#3E6248] hover:underline underline-offset-4 cursor-pointer"
            >
              {ui.switchLangLabel}
            </button>
            <PWAInstallButton lang={lang} />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#4D5A4F] leading-relaxed max-w-4xl">
          {ui.footerDisclaimer}
        </p>

        <p className="text-xs text-[#637065]">{ui.footerCopyright}</p>
      </div>
    </footer>
  );
}
