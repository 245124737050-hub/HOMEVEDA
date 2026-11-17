import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Language } from '../types/remedy';
import { translations } from '../data/translations';
import { HEALTH_PROBLEMS } from '../data/remedies';
import { IllustrationFrame } from './IllustrationFrame';
import { AppStepId } from './StepNavigator';

interface HeroSectionProps {
  lang: Language;
  onSelectProblem: (problemId: string) => void;
  onSelectStep: (step: AppStepId) => void;
}

const HERO_IMAGE = '/src/assets/images/hero_botanical_remedies_1794844178379.jpg';

export function HeroSection({ lang, onSelectProblem, onSelectStep }: HeroSectionProps) {
  const ui = translations[lang];
  const quickProblems = HEALTH_PROBLEMS.slice(0, 8);

  return (
    <section id="top" className="border-b border-[#E3DFD3] bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left column: Value proposition & quick jumps */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-medium text-[#3E6248] tracking-wide">
                {ui.heroEyebrow}
              </p>
              <h1
                className="font-display font-semibold text-[#1D261F] leading-[1.14] tracking-tight [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.25rem)' }}
              >
                {ui.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-[#4B584D] leading-relaxed max-w-[60ch]">
                {ui.heroSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {/* Primary CTA + safety anchor */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectStep('finder')}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-[#3E6248] text-white font-medium text-sm sm:text-base hover:bg-[#2F4D38] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E6248]"
                >
                  <span>{ui.heroPrimaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectStep('safety')}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-medium text-[#6B4E3D] hover:text-[#222B24] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{ui.heroSecondaryCta}</span>
                </button>
              </div>

              {/* Interactive quick-select buttons for common problems */}
              <div className="pt-4 border-t border-[#E3DFD3]">
                <p className="text-xs font-medium text-[#5A675C] mb-3">{ui.heroQuickLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {quickProblems.map((problem) => (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => onSelectProblem(problem.id)}
                      className="min-h-[40px] px-3.5 py-2 rounded-lg bg-[#F2EEE4] border border-[#DDD7C8] text-xs sm:text-sm font-medium text-[#2A352C] hover:bg-[#E7EDE6] hover:border-[#B6C7B8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {problem.name[lang]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Full-height botanical illustration */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#DFDAD0] bg-[#F2EEE4]">
              <IllustrationFrame
                src={HERO_IMAGE}
                alt={
                  lang === 'en'
                    ? 'Botanical illustration of tulsi, ginger, turmeric, honey, and herbal tea in a mortar and pestle'
                    : 'తులసి, అల్లం, పసుపు, తేనె మరియు మూలికా కషాయం చిత్రం'
                }
                fallbackTitle={ui.brandName}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
