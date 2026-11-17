import { AlertOctagon, Baby, HeartPulse, Sparkles } from 'lucide-react';
import { Language } from '../types/remedy';
import { translations } from '../data/translations';

interface SafetyGuideSectionProps {
  lang: Language;
}

export function SafetyGuideSection({ lang }: SafetyGuideSectionProps) {
  const ui = translations[lang];
  const icons = [Baby, HeartPulse, Sparkles];

  return (
    <section id="safety-guide" className="py-12 md:py-16 bg-[#FAF8F3] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#6B4E3D] mb-2">{ui.safetyEyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
            {ui.safetyTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
            {ui.safetySubtitle}
          </p>
        </div>

        {/* 3 Key Household Safety Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ui.safetyCards.map((card, idx) => {
            const Icon = icons[idx] || HeartPulse;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF3EE] text-[#3E6248] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1D261F]">{card.title}</h3>
                <p className="text-sm text-[#4D5A4F] leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>

        {/* Emergency Red Flags Banner */}
        <div
          role="region"
          aria-label={ui.emergencyTitle}
          className="rounded-2xl bg-[#FDF4F3] border border-[#EBC7C4] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F9E3E1] text-[#9E2A2B] flex items-center justify-center shrink-0">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[#7E1F20]">
                {ui.emergencyTitle}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-[#5C2021]">
                {ui.emergencyList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span aria-hidden="true" className="text-[#9E2A2B] font-bold">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
