import { ArrowUpRight } from 'lucide-react';
import { CarePillar, Language } from '../types/remedy';
import { translations } from '../data/translations';
import { IllustrationFrame } from './IllustrationFrame';

interface CategoryShowcaseProps {
  lang: Language;
  onSelectPillar: (pillar: CarePillar) => void;
}

interface PillarCardData {
  id: CarePillar;
  image: string;
  title: { en: string; te: string };
  desc: { en: string; te: string };
  examples: { en: string; te: string };
}

const PILLARS: PillarCardData[] = [
  {
    id: 'respiratory',
    image: '/src/assets/images/remedy_respiratory_care_1794844178154.jpg',
    title: { en: 'Respiratory & Fever Care', te: 'జలుబు, దగ్గు & జ్వర సంరక్షణ' },
    desc: {
      en: 'Warm tulsi-ginger infusions, soothing honey blends, saltwater gargles, and gentle tepid sponging.',
      te: 'తులసి-అల్లం కషాయాలు, తేనె చిట్కాలు, ఉప్పు నీటి పుక్కిలింతలు మరియు తడిపట్టీ సంరక్షణ.',
    },
    examples: {
      en: 'Cold · Cough · Mild Fever · Sore Throat',
      te: 'జలుబు · దగ్గు · తేలికపాటి జ్వరం · గొంతు నొప్పి',
    },
  },
  {
    id: 'digestive',
    image: '/src/assets/images/remedy_digestive_care_1794844178800.jpg',
    title: { en: 'Digestive & Hydration Care', te: 'జీర్ణక్రియ & శరీర చల్లదనం' },
    desc: {
      en: 'Roasted ajwain water, cooling buttermilk with cumin, fennel teas, and balanced homemade electrolytes.',
      te: 'వాము నీరు, జీలకర్ర మజ్జిగ, సోంపు కషాయం మరియు ఇంట్లోనే చేసుకునే ఓఆర్ఎస్.',
    },
    examples: {
      en: 'Indigestion · Gas · Acidity · Fatigue',
      te: 'అజీర్ణం · గ్యాస్ · ఎసిడిటీ · నీరసం',
    },
  },
  {
    id: 'pain_skin',
    image: '/src/assets/images/remedy_pain_relief_1794844178570.jpg',
    title: { en: 'Joint, Headache & Skin Relief', te: 'కీళ్ల నొప్పి, తలనొప్పి & చర్మ సంరక్షణ' },
    desc: {
      en: 'Warm sesame-garlic massage, turmeric compresses, clove tooth care, and cool water + aloe for mild burns.',
      te: 'నువ్వుల నూనె మర్దన, పసుపు కాపడం, లవంగం సంరక్షణ మరియు కలబంద ప్రథమ చికిత్స.',
    },
    examples: {
      en: 'Knee Pain · Headache · Toothache · Minor Burns',
      te: 'మోకాళ్ల నొప్పి · తలనొప్పి · పంటి నొప్పి · చిన్న గాయాలు',
    },
  },
];

export function CategoryShowcase({ lang, onSelectPillar }: CategoryShowcaseProps) {
  const ui = translations[lang];

  const handleClick = (pillar: CarePillar) => {
    onSelectPillar(pillar);
  };

  return (
    <section id="care-categories" className="py-12 md:py-16 bg-[#F4F0E6] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">{ui.pillarsEyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
            {ui.pillarsTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
            {ui.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => handleClick(pillar.id)}
              className="group text-left bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] overflow-hidden hover:border-[#7B9982] transition-colors flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E6248]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE7DA] border-b border-[#E5E0D5]">
                <IllustrationFrame
                  src={pillar.image}
                  alt={pillar.title[lang]}
                  fallbackTitle={pillar.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-[#6B4E3D] font-medium">{pillar.examples[lang]}</p>
                  <h3 className="font-display text-lg font-semibold text-[#1D261F] group-hover:text-[#3E6248] transition-colors">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-sm text-[#4D5A4F] leading-relaxed">{pillar.desc[lang]}</p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3E6248]">
                  <span>{ui.pillarExploreBtn}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
