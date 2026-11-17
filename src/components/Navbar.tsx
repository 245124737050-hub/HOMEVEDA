import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types/remedy';
import { translations } from '../data/translations';
import { AppStepId } from './StepNavigator';

interface NavbarProps {
  lang: Language;
  currentStep: AppStepId;
  onSelectStep: (step: AppStepId) => void;
  onToggleLang: () => void;
}

export function Navbar({ lang, currentStep, onSelectStep, onToggleLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ui = translations[lang];

  // Single clean top navigation links
  const navItems: { step: AppStepId; label: string }[] = [
    { step: 'finder', label: ui.navFinder },
    { step: 'ingredients', label: ui.navIngredientMatcher },
    { step: 'symptoms', label: ui.navSymptomChecker },
    { step: 'doctors', label: ui.navDoctors },
    { step: 'med_reminder', label: ui.navMedReminder },
    { step: 'safety', label: ui.navSafety },
  ];

  const handleStepClick = (step: AppStepId) => {
    onSelectStep(step);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <button
          type="button"
          onClick={() => handleStepClick('overview')}
          className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[#222B24] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E6248] rounded-sm"
        >
          {ui.brandName}
        </button>

        {/* Zone 2: Single-line navigation controls */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#4D5A4F]"
        >
          {navItems.map((item) => {
            const active = currentStep === item.step;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => handleStepClick(item.step)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E6248] rounded-sm ${
                  active
                    ? 'text-[#1D261F] underline underline-offset-4 decoration-2 decoration-[#3E6248] font-semibold'
                    : 'hover:text-[#222B24] hover:underline underline-offset-4 decoration-[#3E6248]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action (Language switcher) + mobile menu trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={lang === 'en' ? 'Switch language to Telugu' : 'Switch language to English'}
            className="min-h-[40px] px-4 py-2 rounded-lg bg-[#3E6248] text-white text-sm font-medium hover:bg-[#2F4D38] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E6248]"
          >
            {ui.switchLangLabel}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? ui.closeLabel : ui.menuLabel}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[#D8D3C5] text-[#222B24] hover:bg-[#F1EDE3] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & tablet navigation drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#FAF8F3] border-b border-[#E3DFD3] px-4 py-3 space-y-1"
        >
          {navItems.map((item) => (
            <button
              key={item.step}
              type="button"
              onClick={() => handleStepClick(item.step)}
              className={`w-full text-left flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                currentStep === item.step
                  ? 'bg-[#E8EFE8] text-[#1D261F]'
                  : 'text-[#222B24] hover:bg-[#EDE9DE]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
