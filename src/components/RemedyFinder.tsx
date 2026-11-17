import { useMemo, useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  Clock,
  HardDrive,
  RefreshCw,
  Search,
  ShieldAlert,
  Stethoscope,
  WifiOff,
  X,
} from 'lucide-react';
import { CarePillar, HealthProblem, Language, Remedy } from '../types/remedy';
import { HEALTH_PROBLEMS } from '../data/remedies';
import { DOCTORS, identifyProblemFromSearch } from '../data/doctors';
import { CachedSavedRemedy } from '../utils/offlineRemedyCache';
import { PWAInstallButton } from './PWAInstallButton';
import { translations } from '../data/translations';

interface RemedyFinderProps {
  lang: Language;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  selectedProblemId: string;
  onSelectProblem: (problemId: string) => void;
  activePillar: CarePillar | 'all';
  onSelectPillar: (pillar: CarePillar | 'all') => void;
  savedRemedyIds: string[];
  cachedSavedRemedies: CachedSavedRemedy[];
  showSavedOnly: boolean;
  onToggleShowSavedOnly: (val: boolean) => void;
  isOnline: boolean;
  onToggleSaveRemedy: (remedyId: string) => void;
  onConnectDoctors: (doctorIds: string[], contextReason: string) => void;
  onGoToIngredients: () => void;
}

export function RemedyFinder({
  lang,
  searchQuery,
  onSearchQueryChange,
  selectedProblemId,
  onSelectProblem,
  activePillar,
  onSelectPillar,
  savedRemedyIds,
  cachedSavedRemedies,
  showSavedOnly,
  onToggleShowSavedOnly,
  isOnline,
  onToggleSaveRemedy,
  onConnectDoctors,
  onGoToIngredients,
}: RemedyFinderProps) {
  const ui = translations[lang];
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, string[]>>({});
  const [swappedIngredients, setSwappedIngredients] = useState<Record<string, boolean>>({});

  const pillarOptions: { id: CarePillar | 'all'; label: { en: string; te: string } }[] = [
    { id: 'all', label: { en: 'All Problems', te: 'అన్ని సమస్యలు' } },
    { id: 'respiratory', label: { en: 'Cold, Cough & Throat', te: 'జలుబు, దగ్గు & జ్వరం' } },
    { id: 'digestive', label: { en: 'Stomach & Hydration', te: 'కడుపు & నీరసం' } },
    { id: 'pain_skin', label: { en: 'Joints, Head & Skin', te: 'నొప్పులు & చర్మం' } },
  ];

  // Local problem identification from user search
  const searchIdentification = useMemo(
    () => identifyProblemFromSearch(searchQuery),
    [searchQuery]
  );

  // Filter problems by search query, pillar, or saved status
  const filteredProblems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return HEALTH_PROBLEMS.filter((problem) => {
      if (showSavedOnly) {
        const hasSaved = problem.remedies.some((r) => savedRemedyIds.includes(r.id));
        if (!hasSaved) return false;
      }
      if (activePillar !== 'all' && problem.pillar !== activePillar) {
        return false;
      }
      if (!q) return true;

      if (searchIdentification.kind === 'basic' && searchIdentification.problemId === problem.id) {
        return true;
      }

      const textPool = [
        problem.name.en,
        problem.name.te,
        problem.shortDesc.en,
        problem.shortDesc.te,
        ...problem.symptoms.flatMap((s) => [s.label.en, s.label.te]),
        ...problem.remedies.flatMap((r) => [
          r.title.en,
          r.title.te,
          ...r.ingredients.flatMap((i) => [i.name.en, i.name.te]),
        ]),
      ]
        .join(' ')
        .toLowerCase();

      return textPool.includes(q);
    });
  }, [searchQuery, activePillar, showSavedOnly, savedRemedyIds, searchIdentification]);

  const activeProblem: HealthProblem | undefined = useMemo(() => {
    if (filteredProblems.length === 0) return undefined;
    return (
      filteredProblems.find((p) => p.id === selectedProblemId) || filteredProblems[0]
    );
  }, [filteredProblems, selectedProblemId]);

  const currentSymptomIds = activeProblem ? selectedSymptoms[activeProblem.id] || [] : [];

  const toggleSymptom = (problemId: string, symptomId: string) => {
    setSelectedSymptoms((prev) => {
      const existing = prev[problemId] || [];
      const next = existing.includes(symptomId)
        ? existing.filter((id) => id !== symptomId)
        : [...existing, symptomId];
      return { ...prev, [problemId]: next };
    });
  };

  const clearSymptomsForProblem = (problemId: string) => {
    setSelectedSymptoms((prev) => ({ ...prev, [problemId]: [] }));
  };

  const toggleIngredientSwap = (remedyId: string, ingredientId: string) => {
    const key = `${remedyId}::${ingredientId}`;
    setSwappedIngredients((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Rank remedies by symptom fit when symptoms are selected
  const rankedRemedies: { remedy: Remedy; matchCount: number }[] = useMemo(() => {
    if (!activeProblem) return [];
    let list = activeProblem.remedies;
    if (showSavedOnly) {
      list = list.filter((r) => savedRemedyIds.includes(r.id));
    }

    return list
      .map((remedy) => {
        const matchCount =
          currentSymptomIds.length === 0
            ? remedy.matchedSymptomIds.length
            : currentSymptomIds.filter((sId) => remedy.matchedSymptomIds.includes(sId)).length;
        return { remedy, matchCount };
      })
      .sort((a, b) => b.matchCount - a.matchCount);
  }, [activeProblem, currentSymptomIds, showSavedOnly, savedRemedyIds]);

  const handleSearchInput = (nextValue: string) => {
    onSearchQueryChange(nextValue);
    const result = identifyProblemFromSearch(nextValue);
    if (result.kind === 'basic') {
      onSelectProblem(result.problemId);
    }
  };

  const resetAllFilters = () => {
    onSearchQueryChange('');
    onSelectPillar('all');
    onToggleShowSavedOnly(false);
  };

  const getDoctorsForProblem = (problemId: string) => {
    const matched = DOCTORS.filter((d) => d.handlesProblems.includes(problemId)).map((d) => d.id);
    return matched.length > 0 ? matched : ['doc_ananya'];
  };

  return (
    <section id="remedy-finder" className="py-12 md:py-16 bg-[#FAF8F3] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-8">
          <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">{ui.finderEyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
            {ui.finderTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
            {ui.finderSubtitle}
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E3DFD3]">
          {/* Problem Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#637065] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              className="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248] focus:ring-2 focus:ring-[#3E6248]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchInput('')}
                aria-label={ui.clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] flex items-center justify-center text-[#637065] hover:text-[#1D261F] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Pillar Filter Tabs + Saved Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EFEBE0] rounded-xl border border-[#DFDAD0]">
              {pillarOptions.map((opt) => {
                const isActive = activePillar === opt.id && !showSavedOnly;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      onToggleShowSavedOnly(false);
                      onSelectPillar(opt.id);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#1D261F] shadow-sm'
                        : 'text-[#4D5A4F] hover:text-[#1D261F]'
                    }`}
                  >
                    {opt.label[lang]}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onToggleShowSavedOnly(!showSavedOnly)}
              aria-pressed={showSavedOnly}
              className={`inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                showSavedOnly
                  ? 'bg-[#3E6248] text-white border-[#3E6248]'
                  : 'bg-white text-[#2F3B31] border-[#D8D3C5] hover:bg-[#F2EEE4]'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>
                {ui.savedFilterBtn} (<span className="tabular-nums">{savedRemedyIds.length}</span>)
              </span>
            </button>
          </div>
        </div>

        {/* Problem Classification Banners */}
        {!showSavedOnly && searchIdentification.kind === 'beyond_basic' && (
          <div
            role="alert"
            className="mb-8 rounded-2xl bg-[#FDF4F3] border border-[#EBC7C4] p-6 space-y-4"
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
                {searchIdentification.rule.isEmergency && (
                  <p className="text-xs sm:text-sm font-semibold text-[#7E1F20]">
                    {ui.searchBeyondBasicEmergencyNote}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-[#EBC7C4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#6B2728]">
                  {ui.searchSuggestedDoctorsLabel}
                </p>
                <p className="text-sm font-medium text-[#1D261F]">
                  {searchIdentification.suggestedDoctors
                    .map((d) => `${d.name[lang]} (${d.specialtyLabel[lang]})`)
                    .join(' · ')}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
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
                <button
                  type="button"
                  onClick={() => handleSearchInput('')}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-[#DFDAD0] bg-white text-xs sm:text-sm font-medium text-[#3B473D] hover:bg-[#FAF8F3] cursor-pointer"
                >
                  {ui.clearSearch}
                </button>
              </div>
            </div>
          </div>
        )}

        {!showSavedOnly && searchIdentification.kind === 'basic' && (
          <div className="mb-6 rounded-xl bg-[#EEF3EE] border border-[#C6D6C8] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F3826]">
              <CheckCircle2 className="w-4 h-4 text-[#3E6248] shrink-0 mt-0.5" />
              <span>
                <strong>{ui.searchIdentifiedBasicTitle}</strong> {searchIdentification.problemName[lang]} —{' '}
                {ui.searchIdentifiedBasicBody}
              </span>
            </div>
          </div>
        )}

        {/* Unified Offline Saved Remedies Vault when "Saved (N)" is selected */}
        {showSavedOnly ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3E6248]">
                  <HardDrive className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'Saved Offline via Service Worker & Local Storage'
                      : 'సర్వీస్ వర్కర్ & లోకల్ స్టోరేజ్ ద్వారా ఆఫ్‌లైన్‌లో సేవ్ చేయబడింది'}
                  </span>
                  {!isOnline && (
                    <span className="inline-flex items-center gap-1 text-[#9C6626]">
                      · <WifiOff className="w-3.5 h-3.5" />
                      {lang === 'en' ? 'Offline Active' : 'ఆఫ్‌లైన్'}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1D261F]">
                  {lang === 'en'
                    ? `Your Saved Remedies (${cachedSavedRemedies.length})`
                    : `మీరు సేవ్ చేసిన చిట్కాలు (${cachedSavedRemedies.length})`}
                </h3>
                <p className="text-xs sm:text-sm text-[#4D5A4F]">
                  {lang === 'en'
                    ? 'Every saved remedy is cached on this device so you can view ingredients, substitutes, steps, and precautions even without an internet connection.'
                    : 'ఇంటర్నెట్ కనెక్షన్ లేకపోయినా మీరు సేవ్ చేసిన చిట్కాల పదార్థాలు, ప్రత్యామ్నాయాలు, తయారీ విధానం మరియు జాగ్రత్తలను ఎప్పుడైనా చూడవచ్చు.'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <PWAInstallButton lang={lang} />
                <button
                  type="button"
                  onClick={() => onToggleShowSavedOnly(false)}
                  className="min-h-[40px] px-4 py-2 rounded-xl border border-[#D8D3C5] bg-[#FAF8F3] text-xs sm:text-sm font-medium text-[#2A352C] hover:bg-[#EFEBE0] transition-colors cursor-pointer"
                >
                  {ui.resetAllBtn}
                </button>
              </div>
            </div>

            {cachedSavedRemedies.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#DFDAD0] p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4">
                <Bookmark className="w-8 h-8 text-[#3E6248] mx-auto" />
                <div className="space-y-1.5">
                  <p className="font-display text-xl font-semibold text-[#1D261F]">
                    {lang === 'en' ? 'No saved remedies cached yet' : 'ఇంకా ఏ చిట్కాలూ సేవ్ చేయలేదు'}
                  </p>
                  <p className="text-sm text-[#546156]">
                    {lang === 'en'
                      ? 'Tap "Save remedy" on any home remedy card to store its full instructions locally for offline viewing.'
                      : 'ఏదైనా చిట్కాపై "సేవ్ చేయండి" నొక్కితే, దాని పూర్తి వివరాలు ఇంటర్నెట్ లేకుండా చూడటానికి ఈ పరికరంలో స్టోర్ అవుతాయి.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleShowSavedOnly(false)}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-medium hover:bg-[#2F4D38] transition-colors cursor-pointer"
                >
                  {ui.resetAllBtn}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cachedSavedRemedies.map((entry) => {
                  const { remedy } = entry;
                  return (
                    <article
                      key={entry.remedyId}
                      className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#EAE5D9]">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#546156] tabular-nums">
                            <span className="font-semibold text-[#3E6248]">
                              {entry.problemName[lang]}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{remedy.reliefType[lang]}</span>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {remedy.prepTimeMinutes} {ui.prepTimeSuffix}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#2B4E35]">
                              {lang === 'en' ? 'Cached offline' : 'ఆఫ్‌లైన్ సేవ్'}
                            </span>
                          </div>
                          <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#1D261F]">
                            {remedy.title[lang]}
                          </h4>
                          <p className="text-sm text-[#4D5A4F] leading-relaxed">
                            {remedy.summary[lang]}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onToggleSaveRemedy(remedy.id)}
                          aria-pressed={true}
                          className="inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-xl border bg-[#E8EFE8] border-[#3E6248] text-[#26412E] text-xs sm:text-sm font-medium hover:bg-[#DCE7DD] transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                          <span>{ui.savedRemedy}</span>
                        </button>
                      </div>

                      {/* Ingredients with interactive "Not at home?" swaps */}
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h5 className="text-sm font-semibold text-[#1D261F]">
                            {ui.ingredientsTitle}
                          </h5>
                          <p className="text-xs text-[#637065]">{ui.ingredientsHint}</p>
                        </div>
                        <div className="divide-y divide-[#ECE7DC] border border-[#E5E0D4] rounded-xl bg-[#FAF8F3]">
                          {remedy.ingredients.map((ing) => {
                            const swapKey = `${remedy.id}::${ing.id}`;
                            const isSwapped = Boolean(swappedIngredients[swapKey]);
                            return (
                              <div key={ing.id} className="p-3.5 sm:p-4 space-y-2.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                                  <div>
                                    <p className="text-sm font-semibold text-[#1D261F]">
                                      {isSwapped ? (
                                        <span className="text-[#3E6248]">
                                          {ui.altPrefix} {ing.alternative.name[lang]}
                                        </span>
                                      ) : (
                                        ing.name[lang]
                                      )}
                                    </p>
                                    <p className="text-xs text-[#546156] mt-0.5 tabular-nums">
                                      {isSwapped ? ing.alternative.quantity[lang] : ing.quantity[lang]}
                                    </p>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => toggleIngredientSwap(remedy.id, ing.id)}
                                    aria-pressed={isSwapped}
                                    className={`inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer ${
                                      isSwapped
                                        ? 'bg-[#3E6248] text-white border-[#3E6248]'
                                        : 'bg-white text-[#4D5A4F] border-[#D8D3C5] hover:border-[#3E6248] hover:text-[#1D261F]'
                                    }`}
                                  >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                    <span>{isSwapped ? ui.usingAltBtn : ui.missingBtn}</span>
                                  </button>
                                </div>

                                {isSwapped && (
                                  <p className="text-xs text-[#3C4B3E] bg-[#E8EFE8] rounded-lg px-3 py-2 leading-relaxed">
                                    {ing.alternative.note[lang]}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Preparation Steps */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-[#1D261F]">{ui.stepsTitle}</h5>
                        <ol className="space-y-3">
                          {remedy.preparationSteps.map((step, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-[#2A352C] leading-relaxed"
                            >
                              <span className="font-mono text-xs font-semibold text-[#3E6248] tabular-nums pt-0.5 shrink-0">
                                {String(index + 1).padStart(2, '0')}.
                              </span>
                              <span>{step[lang]}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Usage & Precautions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-xl bg-[#F3F6F2] p-4 space-y-1.5">
                          <h5 className="text-xs sm:text-sm font-semibold text-[#2A4733]">
                            {ui.usageTitle}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#324235] leading-relaxed">
                            {remedy.usageInstructions[lang]}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#FBF6EC] p-4 space-y-2">
                          <div className="flex items-center gap-1.5 text-[#7A4E1D]">
                            <AlertTriangle className="w-4 h-4 shrink-0" />
                            <h5 className="text-xs sm:text-sm font-semibold">
                              {ui.precautionsTitle}
                            </h5>
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-[#593E1E]">
                            {remedy.precautions.map((precaution, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <span aria-hidden="true">·</span>
                                <span>{precaution[lang]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        ) : searchIdentification.kind === 'beyond_basic' ? null : searchIdentification.kind === 'unmatched_medical' ? (
          <div className="bg-white rounded-2xl border border-[#EBC7C4] p-6 sm:p-8 max-w-3xl mx-auto space-y-5">
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

            <div className="pt-4 border-t border-[#EAE5D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#6B2728]">
                  {ui.searchSuggestedDoctorsLabel}
                </p>
                <p className="text-sm font-medium text-[#1D261F]">
                  {searchIdentification.suggestedDoctors
                    .map((d) => `${d.name[lang]} (${d.specialtyLabel[lang]})`)
                    .join(' · ')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
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
                  onClick={resetAllFilters}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl border border-[#D8D3C5] bg-[#FAF8F3] text-[#2A352C] text-sm font-medium hover:bg-[#EFEBE0] transition-colors cursor-pointer"
                >
                  {ui.resetAllBtn}
                </button>
              </div>
            </div>
          </div>
        ) : !activeProblem ? (
          <div className="bg-white rounded-2xl border border-[#DFDAD0] p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4">
            <Stethoscope className="w-8 h-8 text-[#6B4E3D] mx-auto" />
            <div className="space-y-1.5">
              <p className="font-display text-xl font-semibold text-[#1D261F]">
                {ui.noSearchResultsTitle}
              </p>
              <p className="text-sm text-[#546156]">{ui.noSearchResultsBody}</p>
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="min-h-[44px] px-5 py-2.5 rounded-xl border border-[#D8D3C5] bg-[#FAF8F3] text-[#2A352C] text-sm font-medium hover:bg-[#EFEBE0] transition-colors cursor-pointer"
            >
              {ui.resetAllBtn}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar: Step 1 (Problem Selector) + Step 2 (Symptom Multi-Selector) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Step 1: Health Problem List */}
              <div className="bg-white rounded-2xl border border-[#DFDAD0] p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-[#1D261F] mb-3">{ui.step1Label}</h3>
                <div className="space-y-1.5" role="radiogroup" aria-label={ui.step1Label}>
                  {filteredProblems.map((problem) => {
                    const isSelected = problem.id === activeProblem.id;
                    return (
                      <button
                        key={problem.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => onSelectProblem(problem.id)}
                        className={`w-full text-left min-h-[52px] px-3.5 py-2.5 rounded-xl border transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-[#E8EFE8] border-[#3E6248] text-[#18261B]'
                            : 'bg-[#FAF8F3] border-transparent hover:border-[#D8D3C5] text-[#2A352C]'
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold truncate">{problem.name[lang]}</p>
                          <p className="text-xs text-[#546156] tabular-nums mt-0.5">
                            {problem.remedies.length} {ui.remediesCountSuffix} · {problem.symptoms.length}{' '}
                            {ui.symptomsCountSuffix}
                          </p>
                        </div>
                        <span
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#3E6248] border-[#3E6248] text-white'
                              : 'border-[#B8C2B9] bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" strokeWidth={3} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Symptom Multi-Selector */}
              <div className="bg-white rounded-2xl border border-[#DFDAD0] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-[#1D261F]">{ui.step2Label}</h3>
                  {currentSymptomIds.length > 0 && (
                    <button
                      type="button"
                      onClick={() => clearSymptomsForProblem(activeProblem.id)}
                      className="text-xs font-medium text-[#3E6248] hover:underline cursor-pointer"
                    >
                      {ui.clearSymptoms}
                    </button>
                  )}
                </div>
                <p className="text-xs text-[#546156] mb-3.5 leading-relaxed">{ui.step2Helper}</p>

                <div className="space-y-2">
                  {activeProblem.symptoms.map((symptom) => {
                    const checked = currentSymptomIds.includes(symptom.id);
                    return (
                      <button
                        key={symptom.id}
                        type="button"
                        aria-pressed={checked}
                        onClick={() => toggleSymptom(activeProblem.id, symptom.id)}
                        className={`w-full text-left min-h-[44px] px-3.5 py-2.5 rounded-xl border text-sm transition-colors flex items-center gap-3 cursor-pointer ${
                          checked
                            ? 'bg-[#E8EFE8] border-[#3E6248] text-[#18261B] font-medium'
                            : 'bg-[#FAF8F3] border-[#E6E1D5] text-[#2F3B31] hover:border-[#B6C7B8]'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            checked
                              ? 'bg-[#3E6248] border-[#3E6248] text-white'
                              : 'border-[#A7B2A8] bg-white'
                          }`}
                        >
                          {checked && <Check className="w-3 h-3" strokeWidth={3} />}
                        </span>
                        <span>{symptom.label[lang]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Main Panel: Condition Overview, Red Flags & Detailed Remedies */}
            <div className="lg:col-span-8 space-y-6">
              {/* Condition Summary + Medical Red Flags Alert + Doctor Escalation CTA */}
              <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAE5D9]">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#1D261F]">
                      {activeProblem.name[lang]}
                    </h3>
                    <p className="text-sm text-[#4D5A4F] mt-1">{activeProblem.shortDesc[lang]}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectProblem(activeProblem.id);
                        onGoToIngredients();
                      }}
                      className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-[#EEF3EE] border border-[#C6D6C8] text-xs font-semibold text-[#26412E] hover:bg-[#DDE7DE] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>{ui.finderCheckIngredientsBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-xs font-medium text-[#546156] whitespace-nowrap tabular-nums">
                      {rankedRemedies.length} {ui.remediesCountSuffix}
                    </p>
                  </div>
                </div>

                {/* Clear Medical Safety Warning for this specific health problem */}
                <div
                  role="region"
                  aria-label={ui.doctorWarningTitle}
                  className="rounded-xl bg-[#FDF4F3] border border-[#EBC7C4] p-4 sm:p-5 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-[#9E2A2B] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[#7E1F20]">
                        {ui.doctorWarningTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B2728] leading-relaxed">
                        {ui.doctorWarningLead}
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#5C2021]">
                        {activeProblem.medicalRedFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span aria-hidden="true" className="text-[#9E2A2B] font-bold">
                              ·
                            </span>
                            <span>{flag[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#EBC7C4] flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        onConnectDoctors(
                          getDoctorsForProblem(activeProblem.id),
                          activeProblem.name[lang]
                        )
                      }
                      className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-xl bg-[#9E2A2B] text-white text-xs sm:text-sm font-medium hover:bg-[#7E1F20] transition-colors cursor-pointer"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>{ui.contactDoctorForConditionBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Remedies Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                <h3 className="font-display text-xl font-semibold text-[#1D261F]">
                  {ui.matchingTitle}
                </h3>
                <p className="text-xs text-[#546156]">
                  {currentSymptomIds.length === 0
                    ? ui.showingAllNotice
                    : `${currentSymptomIds.length} ${ui.symptomsCountSuffix}`}
                </p>
              </div>

              {/* Remedy Cards */}
              <div className="space-y-6">
                {rankedRemedies.map(({ remedy, matchCount }) => {
                  const isSaved = savedRemedyIds.includes(remedy.id);
                  const totalTarget =
                    currentSymptomIds.length > 0
                      ? currentSymptomIds.length
                      : activeProblem.symptoms.length;

                  return (
                    <article
                      key={remedy.id}
                      className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-6"
                    >
                      {/* Remedy Title & Unboxed Metadata */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#EAE5D9]">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#546156] tabular-nums">
                            <span className="font-medium text-[#3E6248]">
                              {remedy.reliefType[lang]}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {remedy.prepTimeMinutes} {ui.prepTimeSuffix}
                            </span>
                            {currentSymptomIds.length > 0 && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="font-semibold text-[#2B4632]">
                                  {ui.matchedSymptomsLabel} {matchCount} {ui.ofLabel} {totalTarget}
                                </span>
                              </>
                            )}
                          </div>
                          <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#1D261F]">
                            {remedy.title[lang]}
                          </h4>
                          <p className="text-sm text-[#4D5A4F] leading-relaxed">
                            {remedy.summary[lang]}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onToggleSaveRemedy(remedy.id)}
                          aria-pressed={isSaved}
                          className={`inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer ${
                            isSaved
                              ? 'bg-[#E8EFE8] border-[#3E6248] text-[#26412E]'
                              : 'bg-[#FAF8F3] border-[#D8D3C5] text-[#3B473D] hover:bg-[#EFEBE0]'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          <span>{isSaved ? ui.savedRemedy : ui.saveRemedy}</span>
                        </button>
                      </div>

                      {/* Ingredients with Interactive "Not at home?" Swap Toggles */}
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h5 className="text-sm font-semibold text-[#1D261F]">
                            {ui.ingredientsTitle}
                          </h5>
                          <p className="text-xs text-[#637065]">{ui.ingredientsHint}</p>
                        </div>

                        <div className="divide-y divide-[#ECE7DC] border border-[#E5E0D4] rounded-xl bg-[#FAF8F3]">
                          {remedy.ingredients.map((ing) => {
                            const swapKey = `${remedy.id}::${ing.id}`;
                            const isSwapped = Boolean(swappedIngredients[swapKey]);

                            return (
                              <div key={ing.id} className="p-3.5 sm:p-4 space-y-2.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                                  <div>
                                    <p className="text-sm font-semibold text-[#1D261F]">
                                      {isSwapped ? (
                                        <span className="text-[#3E6248]">
                                          {ui.altPrefix} {ing.alternative.name[lang]}
                                        </span>
                                      ) : (
                                        ing.name[lang]
                                      )}
                                    </p>
                                    <p className="text-xs text-[#546156] mt-0.5 tabular-nums">
                                      {isSwapped ? ing.alternative.quantity[lang] : ing.quantity[lang]}
                                    </p>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => toggleIngredientSwap(remedy.id, ing.id)}
                                    aria-pressed={isSwapped}
                                    className={`inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer ${
                                      isSwapped
                                        ? 'bg-[#3E6248] text-white border-[#3E6248]'
                                        : 'bg-white text-[#4D5A4F] border-[#D8D3C5] hover:border-[#3E6248] hover:text-[#1D261F]'
                                    }`}
                                  >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                    <span>{isSwapped ? ui.usingAltBtn : ui.missingBtn}</span>
                                  </button>
                                </div>

                                {isSwapped && (
                                  <p className="text-xs text-[#3C4B3E] bg-[#E8EFE8] rounded-lg px-3 py-2 leading-relaxed">
                                    {ing.alternative.note[lang]}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Preparation Steps */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-[#1D261F]">{ui.stepsTitle}</h5>
                        <ol className="space-y-3">
                          {remedy.preparationSteps.map((step, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-[#2A352C] leading-relaxed"
                            >
                              <span className="font-mono text-xs font-semibold text-[#3E6248] tabular-nums pt-0.5 shrink-0">
                                {String(index + 1).padStart(2, '0')}.
                              </span>
                              <span>{step[lang]}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Usage & Precautions Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="rounded-xl bg-[#F3F6F2] p-4 space-y-1.5">
                          <h5 className="text-xs sm:text-sm font-semibold text-[#2A4733]">
                            {ui.usageTitle}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#324235] leading-relaxed">
                            {remedy.usageInstructions[lang]}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#FBF6EC] p-4 space-y-2">
                          <div className="flex items-center gap-1.5 text-[#7A4E1D]">
                            <AlertTriangle className="w-4 h-4 shrink-0" />
                            <h5 className="text-xs sm:text-sm font-semibold">
                              {ui.precautionsTitle}
                            </h5>
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-[#593E1E]">
                            {remedy.precautions.map((precaution, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <span aria-hidden="true">·</span>
                                <span>{precaution[lang]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Quiet persistent safety reminder */}
              <p className="flex items-center gap-2 text-xs text-[#5A675C] px-1">
                <ShieldAlert className="w-4 h-4 text-[#6B4E3D] shrink-0" />
                <span>{ui.heroSafetyNote}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
