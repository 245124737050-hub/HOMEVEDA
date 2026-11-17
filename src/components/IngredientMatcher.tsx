import { useMemo, useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  RefreshCw,
  Search,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import { HealthProblem, Language, Remedy } from '../types/remedy';
import { HEALTH_PROBLEMS } from '../data/remedies';
import { INGREDIENT_PANTRY_MAP, PANTRY_OPTIONS } from '../data/pantryCatalog';
import { identifyProblemFromSearch } from '../data/doctors';
import { translations } from '../data/translations';

interface IngredientMatcherProps {
  lang: Language;
  enteredProblemQuery: string;
  onEnteredProblemQueryChange: (query: string) => void;
  selectedProblemId: string;
  onSelectProblem: (problemId: string) => void;
  onJumpToProblem: (problemId: string) => void;
  onConnectDoctors: (doctorIds: string[], contextReason: string) => void;
}

interface EvaluatedRemedy {
  problem: HealthProblem;
  remedy: Remedy;
  status: 'ready' | 'almost' | 'needs_more';
  usedSwaps: { original: string; swap: string }[];
  missingIngredients: { name: string; alternative: string }[];
}

export function IngredientMatcher({
  lang,
  enteredProblemQuery,
  onEnteredProblemQueryChange,
  selectedProblemId,
  onSelectProblem,
  onJumpToProblem,
  onConnectDoctors,
}: IngredientMatcherProps) {
  const ui = translations[lang];
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'water',
    'salt',
    'ginger',
    'turmeric',
  ]);
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [scopeAllProblems, setScopeAllProblems] = useState(false);

  const searchIdentification = useMemo(
    () => identifyProblemFromSearch(enteredProblemQuery),
    [enteredProblemQuery]
  );

  // Active linked problem (synced from Remedy Finder or selected directly here)
  const linkedProblem: HealthProblem = useMemo(() => {
    return HEALTH_PROBLEMS.find((p) => p.id === selectedProblemId) || HEALTH_PROBLEMS[0];
  }, [selectedProblemId]);

  const isBlockedNonBasic =
    !scopeAllProblems &&
    (searchIdentification.kind === 'beyond_basic' ||
      searchIdentification.kind === 'unmatched_medical');

  // Identify which pantry items are actually used (primary or substitute) in the linked problem
  const relevantPantryIdSet = useMemo(() => {
    const ids = new Set<string>();
    for (const remedy of linkedProblem.remedies) {
      for (const ing of remedy.ingredients) {
        const mapping = INGREDIENT_PANTRY_MAP[ing.id];
        if (!mapping) continue;
        mapping.primary.forEach((id) => ids.add(id));
        mapping.alternatives.forEach((id) => ids.add(id));
      }
    }
    return ids;
  }, [linkedProblem]);

  const { relevantPantryOptions, otherPantryOptions } = useMemo(() => {
    const q = ingredientSearch.trim().toLowerCase();
    const filtered = !q
      ? PANTRY_OPTIONS
      : PANTRY_OPTIONS.filter(
          (opt) => opt.label.en.toLowerCase().includes(q) || opt.label.te.toLowerCase().includes(q)
        );

    if (scopeAllProblems) {
      return {
        relevantPantryOptions: filtered,
        otherPantryOptions: [] as typeof PANTRY_OPTIONS,
      };
    }

    return {
      relevantPantryOptions: filtered.filter((opt) => relevantPantryIdSet.has(opt.id)),
      otherPantryOptions: filtered.filter((opt) => !relevantPantryIdSet.has(opt.id)),
    };
  }, [ingredientSearch, scopeAllProblems, relevantPantryIdSet]);

  const handleProblemTextChange = (val: string) => {
    onEnteredProblemQueryChange(val);
    setScopeAllProblems(false);
    const idResult = identifyProblemFromSearch(val);
    if (idResult.kind === 'basic') {
      onSelectProblem(idResult.problemId);
    }
  };

  const handleProblemDropdownChange = (problemId: string) => {
    onEnteredProblemQueryChange('');
    onSelectProblem(problemId);
    setScopeAllProblems(false);
  };

  const toggleIngredient = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectCommonStaples = () => {
    const staples = PANTRY_OPTIONS.filter((o) => o.isStaple).map((o) => o.id);
    setSelectedIds(staples);
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const matches = useMemo(() => {
    if (isBlockedNonBasic) {
      return {
        ready: [] as EvaluatedRemedy[],
        almost: [] as EvaluatedRemedy[],
        needsMore: [] as EvaluatedRemedy[],
      };
    }

    const problemsToEvaluate = scopeAllProblems ? HEALTH_PROBLEMS : [linkedProblem];
    const ready: EvaluatedRemedy[] = [];
    const almost: EvaluatedRemedy[] = [];
    const needsMore: EvaluatedRemedy[] = [];

    for (const problem of problemsToEvaluate) {
      for (const remedy of problem.remedies) {
        const usedSwaps: { original: string; swap: string }[] = [];
        const missingIngredients: { name: string; alternative: string }[] = [];

        for (const ing of remedy.ingredients) {
          const mapping = INGREDIENT_PANTRY_MAP[ing.id];
          if (!mapping) {
            missingIngredients.push({
              name: ing.name[lang],
              alternative: ing.alternative.name[lang],
            });
            continue;
          }

          const hasDirect = mapping.primary.every((pId) => selectedIds.includes(pId));
          if (hasDirect) continue;

          const hasAlt = mapping.alternatives.some((aId) => selectedIds.includes(aId));
          if (hasAlt) {
            usedSwaps.push({
              original: ing.name[lang],
              swap: ing.alternative.name[lang],
            });
          } else {
            missingIngredients.push({
              name: ing.name[lang],
              alternative: ing.alternative.name[lang],
            });
          }
        }

        if (missingIngredients.length === 0) {
          ready.push({ problem, remedy, status: 'ready', usedSwaps, missingIngredients });
        } else if (missingIngredients.length === 1 && remedy.ingredients.length >= 2) {
          almost.push({ problem, remedy, status: 'almost', usedSwaps, missingIngredients });
        } else if (!scopeAllProblems) {
          needsMore.push({ problem, remedy, status: 'needs_more', usedSwaps, missingIngredients });
        }
      }
    }

    return {
      ready: ready.sort((a, b) => a.usedSwaps.length - b.usedSwaps.length),
      almost,
      needsMore,
    };
  }, [selectedIds, lang, scopeAllProblems, linkedProblem, isBlockedNonBasic]);

  const handleOpenInFinder = (problemId: string) => {
    onJumpToProblem(problemId);
  };

  const renderPantryButton = (option: (typeof PANTRY_OPTIONS)[number]) => {
    const isSelected = selectedIds.includes(option.id);
    return (
      <button
        key={option.id}
        type="button"
        aria-pressed={isSelected}
        onClick={() => toggleIngredient(option.id)}
        className={`min-h-[44px] px-3 py-2 rounded-xl border text-left text-xs sm:text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
          isSelected
            ? 'bg-[#E8EFE8] border-[#3E6248] text-[#18261B] font-medium'
            : 'bg-white border-[#E4DFD2] text-[#2F3B31] hover:border-[#B6C7B8]'
        }`}
      >
        <span
          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
            isSelected
              ? 'bg-[#3E6248] border-[#3E6248] text-white'
              : 'border-[#A7B2A8] bg-white'
          }`}
        >
          {isSelected && <Check className="w-3 h-3" strokeWidth={3} />}
        </span>
        <span className="truncate">{option.label[lang]}</span>
      </button>
    );
  };

  const renderRemedyCard = (item: EvaluatedRemedy) => {
    const isExpanded = expandedId === item.remedy.id;

    return (
      <div
        key={item.remedy.id}
        className="bg-white rounded-2xl border border-[#DFDAD0] p-5 space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#546156] tabular-nums">
              <span className="font-medium text-[#3E6248]">{item.problem.name[lang]}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {item.remedy.prepTimeMinutes} {ui.prepTimeSuffix}
              </span>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-semibold text-[#1D261F]">
              {item.remedy.title[lang]}
            </h4>
            <p className="text-sm text-[#4D5A4F]">{item.remedy.summary[lang]}</p>
          </div>

          <button
            type="button"
            onClick={() => setExpandedId(isExpanded ? null : item.remedy.id)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl border border-[#D8D3C5] bg-[#FAF8F3] text-xs font-medium text-[#2A352C] hover:bg-[#EFEBE0] transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer"
          >
            <span>{isExpanded ? ui.ingHideDetailsBtn : ui.ingViewRemedyBtn}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Status notice: Direct vs Substitute vs Missing 1 vs Missing Multiple */}
        {item.status === 'ready' && item.usedSwaps.length === 0 && (
          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2B4E35]">
            <Check className="w-4 h-4 shrink-0" />
            <span>{ui.ingAllAvailableLabel}</span>
          </p>
        )}

        {item.usedSwaps.length > 0 && (
          <div className="rounded-xl bg-[#EEF3EE] px-3.5 py-2.5 text-xs text-[#26412E] space-y-1">
            {item.usedSwaps.map((s, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <RefreshCw className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>
                  <strong>{ui.ingUsingSwapLabel}</strong> {s.swap} ({s.original})
                </span>
              </p>
            ))}
          </div>
        )}

        {item.status === 'almost' && item.missingIngredients.length > 0 && (
          <div className="rounded-xl bg-[#FBF6EC] px-3.5 py-2.5 text-xs text-[#6B471B] space-y-1">
            {item.missingIngredients.map((m, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>
                  <strong>{ui.ingMissingOneLabel}</strong> {m.name} — {ui.altPrefix} {m.alternative}
                </span>
              </p>
            ))}
          </div>
        )}

        {item.status === 'needs_more' && item.missingIngredients.length > 0 && (
          <div className="rounded-xl bg-[#F4F0E6] px-3.5 py-2.5 text-xs text-[#4D5A4F]">
            <strong>{ui.ingMissingListLabel}</strong>{' '}
            {item.missingIngredients.map((m) => m.name).join(', ')}
          </div>
        )}

        {isExpanded && (
          <div className="pt-4 border-t border-[#EAE5D9] space-y-4">
            <div>
              <h5 className="text-xs font-semibold text-[#1D261F] mb-2">{ui.stepsTitle}</h5>
              <ol className="space-y-2">
                {item.remedy.preparationSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2A352C]">
                    <span className="font-mono text-xs font-semibold text-[#3E6248] tabular-nums pt-0.5">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{step[lang]}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-xl bg-[#F3F6F2] p-3.5">
                <p className="font-semibold text-[#2A4733] mb-1">{ui.usageTitle}</p>
                <p className="text-[#324235] leading-relaxed">
                  {item.remedy.usageInstructions[lang]}
                </p>
              </div>
              <div className="rounded-xl bg-[#FBF6EC] p-3.5">
                <p className="font-semibold text-[#7A4E1D] mb-1">{ui.precautionsTitle}</p>
                <p className="text-[#593E1E] leading-relaxed">
                  {item.remedy.precautions[0]?.[lang]}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleOpenInFinder(item.problem.id)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#3E6248] hover:underline cursor-pointer"
            >
              <span>{ui.ingOpenInFinderBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="ingredient-matcher" className="py-12 md:py-16 bg-[#F4F0E6] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">
            {ui.ingMatcherEyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
            {ui.ingMatcherTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
            {ui.ingMatcherSubtitle}
          </p>
        </div>

        {/* Step 1: Linked Health Problem Input & Picker */}
        <div className="bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] p-4 sm:p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-[#1D261F]">{ui.ingStep1ProblemLabel}</h3>
            <button
              type="button"
              onClick={() => setScopeAllProblems((prev) => !prev)}
              className="text-xs font-medium text-[#3E6248] hover:underline text-left sm:text-right cursor-pointer"
            >
              {scopeAllProblems ? ui.ingFilterByProblemBtn : ui.ingBrowseAllBtn}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Free-text problem entry (synced with Remedy Finder) */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-[#637065] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={enteredProblemQuery}
                onChange={(e) => handleProblemTextChange(e.target.value)}
                placeholder={ui.ingProblemInputPlaceholder}
                aria-label={ui.ingProblemInputPlaceholder}
                className="w-full min-h-[44px] pl-10 pr-10 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248]"
              />
              {enteredProblemQuery && (
                <button
                  type="button"
                  onClick={() => handleProblemTextChange('')}
                  aria-label={ui.clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] flex items-center justify-center text-[#637065] hover:text-[#1D261F] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Direct dropdown of all 16 basic health problems */}
            <div className="md:col-span-5">
              <select
                aria-label={ui.step1Label}
                value={linkedProblem.id}
                onChange={(e) => handleProblemDropdownChange(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm font-medium text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
              >
                {HEALTH_PROBLEMS.map((prob) => (
                  <option key={prob.id} value={prob.id}>
                    {prob.name[lang]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {!scopeAllProblems && !isBlockedNonBasic && (
            <p className="text-xs sm:text-sm text-[#2A4733]">
              <span className="font-semibold">{ui.ingLinkedProblemPrefix}</span>{' '}
              <span className="font-semibold underline decoration-[#3E6248]/40 underline-offset-4">
                {linkedProblem.name[lang]}
              </span>{' '}
              — <span className="text-[#4D5A4F]">{linkedProblem.shortDesc[lang]}</span>
            </p>
          )}
        </div>

        {/* Beyond-Basic or Unmatched Problem Caution & Doctor Guidance */}
        {searchIdentification.kind === 'beyond_basic' && !scopeAllProblems ? (
          <div
            role="alert"
            className="rounded-2xl bg-[#FDF4F3] border border-[#EBC7C4] p-6 space-y-4"
          >
            <div className="flex items-start gap-3">
              <AlertOctagon className="w-6 h-6 text-[#9E2A2B] shrink-0 mt-0.5" />
              <div className="space-y-2.5 flex-1">
                <p className="text-xs font-semibold text-[#9E2A2B]">{ui.searchBeyondBasicTitle}</p>
                <h3 className="font-display text-xl font-semibold text-[#5C191A]">
                  {searchIdentification.rule.conditionTitle[lang]}
                </h3>
                <p className="text-sm text-[#2A352C] bg-white/80 border border-[#EBC7C4] rounded-xl p-3.5 leading-relaxed">
                  {searchIdentification.rule.problemDescription[lang]}
                </p>
                <p className="text-sm font-medium text-[#5C2021] leading-relaxed">
                  {searchIdentification.rule.cautionMessage[lang]}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EBC7C4] flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#1D261F] font-medium">
                {searchIdentification.suggestedDoctors
                  .map((d) => `${d.name[lang]} (${d.specialtyLabel[lang]})`)
                  .join(' · ')}
              </p>
              <button
                type="button"
                onClick={() =>
                  onConnectDoctors(
                    searchIdentification.suggestedDoctors.map((d) => d.id),
                    searchIdentification.rule.conditionTitle[lang]
                  )
                }
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#9E2A2B] text-white text-sm font-semibold hover:bg-[#7E1F20] transition-colors cursor-pointer"
              >
                <Stethoscope className="w-4 h-4" />
                <span>{ui.searchConnectDoctorsBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : searchIdentification.kind === 'unmatched_medical' && !scopeAllProblems ? (
          <div className="bg-white rounded-2xl border border-[#EBC7C4] p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Stethoscope className="w-6 h-6 text-[#9E2A2B] shrink-0 mt-0.5" />
              <div className="space-y-2.5 flex-1">
                <p className="text-xs font-semibold text-[#9E2A2B]">{ui.searchUnrecognizedTitle}</p>
                <h3 className="font-display text-xl font-semibold text-[#1D261F]">
                  {searchIdentification.query}
                </h3>
                <p className="text-sm text-[#2A352C] bg-[#FAF8F3] border border-[#E6E1D5] rounded-xl p-4 leading-relaxed">
                  {searchIdentification.briefDescription[lang]}
                </p>
                <p className="text-sm text-[#5C2021] leading-relaxed">
                  {searchIdentification.cautionMessage[lang]}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EAE5D9] flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#1D261F] font-medium">
                {searchIdentification.suggestedDoctors
                  .map((d) => `${d.name[lang]} (${d.specialtyLabel[lang]})`)
                  .join(' · ')}
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onConnectDoctors(
                      searchIdentification.suggestedDoctors.map((d) => d.id),
                      searchIdentification.query
                    )
                  }
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-semibold hover:bg-[#2F4D38] transition-colors cursor-pointer"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>{ui.searchConnectDoctorsBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleProblemTextChange('')}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-[#D8D3C5] bg-[#FAF8F3] text-sm font-medium text-[#2A352C] hover:bg-[#EFEBE0] cursor-pointer"
                >
                  {ui.clearSearch}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step 2 Left: Available Ingredients Checklist */}
            <div className="lg:col-span-5 bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] p-4 sm:p-5 space-y-4">
              <h3 className="text-sm font-semibold text-[#1D261F]">{ui.ingStep2SelectLabel}</h3>

              <div className="relative">
                <Search className="w-4 h-4 text-[#637065] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={ingredientSearch}
                  onChange={(e) => setIngredientSearch(e.target.value)}
                  placeholder={ui.ingSearchPlaceholder}
                  aria-label={ui.ingSearchPlaceholder}
                  className="w-full min-h-[42px] pl-10 pr-4 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-medium text-[#4D5A4F] tabular-nums">
                  {selectedIds.length} {ui.ingSelectedCount}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={selectCommonStaples}
                    className="font-medium text-[#3E6248] hover:underline cursor-pointer"
                  >
                    {ui.ingSelectStaples}
                  </button>
                  {selectedIds.length > 0 && (
                    <button
                      type="button"
                      onClick={clearSelection}
                      className="font-medium text-[#6B4E3D] hover:underline cursor-pointer"
                    >
                      {ui.ingClearAll}
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                {relevantPantryOptions.length > 0 && (
                  <div className="space-y-2">
                    {!scopeAllProblems && (
                      <p className="text-xs font-semibold text-[#3E6248]">
                        {ui.ingRecommendedForProblem} {linkedProblem.name[lang]}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                      {relevantPantryOptions.map(renderPantryButton)}
                    </div>
                  </div>
                )}

                {otherPantryOptions.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-[#E4DFD2]">
                    <p className="text-xs font-medium text-[#637065]">{ui.ingOtherPantryLabel}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
                      {otherPantryOptions.map(renderPantryButton)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 Right: Matching Home Remedies for Linked Problem */}
            <div className="lg:col-span-7 space-y-6">
              {selectedIds.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#DFDAD0] p-8 text-center">
                  <Sparkles className="w-7 h-7 text-[#3E6248] mx-auto mb-3" />
                  <h3 className="font-display text-lg font-semibold text-[#1D261F] mb-1">
                    {ui.ingEmptyPromptTitle}
                  </h3>
                  <p className="text-sm text-[#546156] max-w-md mx-auto">
                    {ui.ingEmptyPromptBody}
                  </p>
                </div>
              ) : matches.ready.length === 0 &&
                matches.almost.length === 0 &&
                matches.needsMore.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#DFDAD0] p-8 text-center">
                  <h3 className="font-display text-lg font-semibold text-[#1D261F] mb-1">
                    {ui.ingNoMatchTitle}
                  </h3>
                  <p className="text-sm text-[#546156] max-w-md mx-auto mb-4">
                    {ui.ingNoMatchBody}
                  </p>
                  <button
                    type="button"
                    onClick={selectCommonStaples}
                    className="min-h-[42px] px-4 py-2 rounded-xl bg-[#3E6248] text-white text-sm font-medium hover:bg-[#2F4D38] transition-colors cursor-pointer"
                  >
                    {ui.ingSelectStaples}
                  </button>
                </div>
              ) : (
                <>
                  {matches.ready.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl font-semibold text-[#1D261F]">
                          {ui.ingReadyHeading}
                        </h3>
                        <span className="text-xs font-medium text-[#3E6248] tabular-nums">
                          {matches.ready.length} {ui.remediesCountSuffix}
                        </span>
                      </div>
                      <div className="space-y-4">{matches.ready.map(renderRemedyCard)}</div>
                    </div>
                  )}

                  {matches.almost.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold text-[#4A3B2B]">
                          {ui.ingAlmostHeading}
                        </h3>
                        <span className="text-xs font-medium text-[#6B4E3D] tabular-nums">
                          {matches.almost.length} {ui.remediesCountSuffix}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {(scopeAllProblems ? matches.almost.slice(0, 4) : matches.almost).map(
                          renderRemedyCard
                        )}
                      </div>
                    </div>
                  )}

                  {!scopeAllProblems && matches.needsMore.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold text-[#4D5A4F]">
                          {ui.ingNeedsMoreHeading}
                        </h3>
                        <span className="text-xs font-medium text-[#637065] tabular-nums">
                          {matches.needsMore.length} {ui.remediesCountSuffix}
                        </span>
                      </div>
                      <div className="space-y-4">{matches.needsMore.map(renderRemedyCard)}</div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
