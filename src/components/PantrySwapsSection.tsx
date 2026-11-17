import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Language } from '../types/remedy';
import { PANTRY_SWAPS } from '../data/remedies';
import { translations } from '../data/translations';

interface PantrySwapsSectionProps {
  lang: Language;
}

export function PantrySwapsSection({ lang }: PantrySwapsSectionProps) {
  const ui = translations[lang];
  const [filterText, setFilterText] = useState('');

  const filteredSwaps = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    if (!q) return PANTRY_SWAPS;
    return PANTRY_SWAPS.filter((item) => {
      const hay = [
        item.original.en,
        item.original.te,
        item.substitute.en,
        item.substitute.te,
        item.bestFor.en,
        item.bestFor.te,
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [filterText]);

  return (
    <section id="pantry-swaps" className="py-12 md:py-16 bg-[#F4F0E6] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">{ui.swapsEyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
              {ui.swapsTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
              {ui.swapsSubtitle}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#637065] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder={ui.swapsSearchPlaceholder}
              aria-label={ui.swapsSearchPlaceholder}
              className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248] focus:ring-2 focus:ring-[#3E6248]/20"
            />
          </div>
        </div>

        {/* Clean responsive substitution table on desktop, stacked rows on mobile */}
        <div className="bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] overflow-hidden">
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3.5 bg-[#EFEBE0] border-b border-[#DFDAD0] text-xs font-semibold text-[#4D5A4F]">
            <div className="col-span-3">{ui.swapsColOriginal}</div>
            <div className="col-span-3">{ui.swapsColSubstitute}</div>
            <div className="col-span-3">{ui.swapsColRatio}</div>
            <div className="col-span-3">{ui.swapsColBestFor}</div>
          </div>

          <div className="divide-y divide-[#E6E1D5]">
            {filteredSwaps.map((swap) => (
              <div
                key={swap.id}
                className="p-4 sm:px-6 sm:py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center"
              >
                <div className="md:col-span-3">
                  <span className="md:hidden text-xs text-[#637065] block mb-0.5">
                    {ui.swapsColOriginal}
                  </span>
                  <p className="text-sm font-semibold text-[#1D261F]">{swap.original[lang]}</p>
                </div>

                <div className="md:col-span-3 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#3E6248] shrink-0 hidden md:inline" />
                  <div>
                    <span className="md:hidden text-xs text-[#637065] block mb-0.5">
                      {ui.swapsColSubstitute}
                    </span>
                    <p className="text-sm font-medium text-[#2F4D38]">{swap.substitute[lang]}</p>
                    {swap.caution && (
                      <p className="text-xs text-[#8C531E] mt-0.5">{swap.caution[lang]}</p>
                    )}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <span className="md:hidden text-xs text-[#637065] block mb-0.5">
                    {ui.swapsColRatio}
                  </span>
                  <p className="text-xs sm:text-sm text-[#3B473D] tabular-nums">
                    {swap.ratio[lang]}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <span className="md:hidden text-xs text-[#637065] block mb-0.5">
                    {ui.swapsColBestFor}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4D5A4F]">{swap.bestFor[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
