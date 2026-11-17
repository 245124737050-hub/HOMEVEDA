import { useEffect, useState } from 'react';
import { ArrowRight, BellRing, Bookmark, WifiOff } from 'lucide-react';
import { CarePillar, Language } from './types/remedy';
import { HEALTH_PROBLEMS } from './data/remedies';
import { translations } from './data/translations';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import {
  CachedSavedRemedy,
  getCachedSavedRemedies,
  hydrateSavedRemediesFromCacheStorage,
  syncSavedRemediesOfflineCache,
} from './utils/offlineRemedyCache';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { RemedyFinder } from './components/RemedyFinder';
import { IngredientMatcher } from './components/IngredientMatcher';
import { SymptomChecker } from './components/SymptomChecker';
import { MedicationReminder } from './components/MedicationReminder';
import { DoctorDirectory } from './components/DoctorDirectory';
import { PantrySwapsSection } from './components/PantrySwapsSection';
import { SafetyGuideSection } from './components/SafetyGuideSection';
import { StepFooterNav, AppStepId } from './components/StepNavigator';
import { Footer } from './components/Footer';

const STORAGE_LANG_KEY = 'homeveda_lang';
const STORAGE_SAVED_KEY = 'homeveda_saved_remedies';

export default function App() {
  const isOnline = useOnlineStatus();

  const [lang, setLang] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_LANG_KEY);
      return stored === 'te' ? 'te' : 'en';
    } catch {
      return 'en';
    }
  });

  const [currentStep, setCurrentStep] = useState<AppStepId>('overview');
  const [dueMedCount, setDueMedCount] = useState<number>(0);

  const [activePillar, setActivePillar] = useState<CarePillar | 'all'>('all');
  const [selectedProblemId, setSelectedProblemId] = useState<string>(HEALTH_PROBLEMS[0].id);
  const [enteredProblemQuery, setEnteredProblemQuery] = useState<string>('');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  // Doctor suggestion routing state
  const [suggestedDoctorIds, setSuggestedDoctorIds] = useState<string[]>([]);
  const [suggestionContext, setSuggestionContext] = useState<string>('');

  const [savedRemedyIds, setSavedRemedyIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SAVED_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
      // Fallback: recover IDs from full offline remedy snapshot cache if present
      const cached = getCachedSavedRemedies();
      return cached.map((item) => item.remedyId);
    } catch {
      return [];
    }
  });

  const [cachedSavedRemedies, setCachedSavedRemedies] = useState<CachedSavedRemedy[]>(() =>
    getCachedSavedRemedies()
  );

  const ui = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // Ignore storage failures
    }
  }, [lang]);

  // Hydrate from browser Cache Storage if localStorage was empty on startup
  useEffect(() => {
    if (savedRemedyIds.length === 0) {
      hydrateSavedRemediesFromCacheStorage().then((hydrated) => {
        if (hydrated.length > 0) {
          setSavedRemedyIds(hydrated.map((entry) => entry.remedyId));
          setCachedSavedRemedies(hydrated);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist saved IDs AND full offline remedy snapshots to localStorage + Cache Storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(savedRemedyIds));
    } catch {
      // Ignore storage failures
    }
    const snapshots = syncSavedRemediesOfflineCache(savedRemedyIds);
    setCachedSavedRemedies(snapshots);
  }, [savedRemedyIds]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  const handleSelectStep = (step: AppStepId) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSavedOffline = () => {
    setShowSavedOnly(true);
    setEnteredProblemQuery('');
    handleSelectStep('finder');
  };

  const handleSelectProblemFromExternal = (problemId: string) => {
    setActivePillar('all');
    setEnteredProblemQuery('');
    setShowSavedOnly(false);
    setSelectedProblemId(problemId);
    handleSelectStep('finder');
  };

  const handleSelectPillar = (pillar: CarePillar | 'all', switchToFinder = false) => {
    setActivePillar(pillar);
    setEnteredProblemQuery('');
    setShowSavedOnly(false);
    if (pillar !== 'all') {
      const firstMatch = HEALTH_PROBLEMS.find((p) => p.pillar === pillar);
      if (firstMatch) {
        setSelectedProblemId(firstMatch.id);
      }
    }
    if (switchToFinder) {
      handleSelectStep('finder');
    }
  };

  const handleToggleSaveRemedy = (remedyId: string) => {
    setSavedRemedyIds((prev) =>
      prev.includes(remedyId) ? prev.filter((id) => id !== remedyId) : [...prev, remedyId]
    );
  };

  const handleConnectDoctors = (doctorIds: string[], contextReason: string) => {
    setSuggestedDoctorIds(doctorIds);
    setSuggestionContext(contextReason);
    handleSelectStep('doctors');
  };

  const handleClearDoctorSuggestion = () => {
    setSuggestedDoctorIds([]);
    setSuggestionContext('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#222B24]">
      <Navbar
        lang={lang}
        currentStep={currentStep}
        onSelectStep={handleSelectStep}
        onToggleLang={handleToggleLang}
      />

      <main className="flex-1 flex flex-col">
        {/* Offline status banner with quick shortcut to locally cached Saved Remedies */}
        {!isOnline && (
          <div
            role="status"
            className="bg-[#FBF6EC] border-b border-[#E6D3B1]"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#593E1E]">
                <WifiOff className="w-4 h-4 shrink-0 text-[#9C6626]" />
                <span>
                  {lang === 'en'
                    ? 'Offline Mode — HomeVeda & your saved remedies are cached locally and available without internet.'
                    : 'ఆఫ్‌లైన్ మోడ్ — ఇంటర్నెట్ లేకపోయినా హోమ్‌వేద మరియు మీరు సేవ్ చేసిన చిట్కాలు ఇక్కడ అందుబాటులో ఉన్నాయి.'}
                </span>
              </div>
              <button
                type="button"
                onClick={handleOpenSavedOffline}
                className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 py-1.5 rounded-lg bg-[#7A4E1D] text-white text-xs font-semibold hover:bg-[#5E3B14] transition-colors whitespace-nowrap cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>
                  {ui.savedFilterBtn} ({savedRemedyIds.length})
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Global banner if a scheduled medication dose becomes due while browsing other steps */}
        {dueMedCount > 0 && currentStep !== 'med_reminder' && (
          <div className="bg-[#FDF4F3] border-b border-[#EBC7C4]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#7E1F20]">
                <BellRing className="w-4 h-4 shrink-0 text-[#9E2A2B]" />
                <span>
                  {lang === 'en'
                    ? `${dueMedCount} prescribed medication reminder${dueMedCount > 1 ? 's' : ''} due now.`
                    : `ప్రస్తుతం ${dueMedCount} మందు వేసుకునే సమయం అయింది.`}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleSelectStep('med_reminder')}
                className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 py-1.5 rounded-lg bg-[#9E2A2B] text-white text-xs font-semibold hover:bg-[#7E1F20] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{ui.navMedReminder}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Active Step Content */}
        <div className="flex-1">
          {currentStep === 'overview' && (
            <>
              <HeroSection
                lang={lang}
                onSelectProblem={handleSelectProblemFromExternal}
                onSelectStep={handleSelectStep}
              />
              <CategoryShowcase
                lang={lang}
                onSelectPillar={(pillar) => handleSelectPillar(pillar, true)}
              />
            </>
          )}

          {currentStep === 'finder' && (
            <RemedyFinder
              lang={lang}
              searchQuery={enteredProblemQuery}
              onSearchQueryChange={setEnteredProblemQuery}
              selectedProblemId={selectedProblemId}
              onSelectProblem={setSelectedProblemId}
              activePillar={activePillar}
              onSelectPillar={(pillar) => handleSelectPillar(pillar, false)}
              savedRemedyIds={savedRemedyIds}
              cachedSavedRemedies={cachedSavedRemedies}
              showSavedOnly={showSavedOnly}
              onToggleShowSavedOnly={setShowSavedOnly}
              isOnline={isOnline}
              onToggleSaveRemedy={handleToggleSaveRemedy}
              onConnectDoctors={handleConnectDoctors}
              onGoToIngredients={() => handleSelectStep('ingredients')}
            />
          )}

          {currentStep === 'ingredients' && (
            <IngredientMatcher
              lang={lang}
              enteredProblemQuery={enteredProblemQuery}
              onEnteredProblemQueryChange={setEnteredProblemQuery}
              selectedProblemId={selectedProblemId}
              onSelectProblem={setSelectedProblemId}
              onJumpToProblem={handleSelectProblemFromExternal}
              onConnectDoctors={handleConnectDoctors}
            />
          )}

          {currentStep === 'symptoms' && (
            <SymptomChecker
              lang={lang}
              onJumpToProblem={handleSelectProblemFromExternal}
              onConnectDoctors={handleConnectDoctors}
            />
          )}

          {currentStep === 'doctors' && (
            <DoctorDirectory
              lang={lang}
              suggestedDoctorIds={suggestedDoctorIds}
              suggestionContext={suggestionContext}
              onClearSuggestion={handleClearDoctorSuggestion}
            />
          )}

          {/* Keep MedicationReminder always mounted so its background timer & notifications run continuously */}
          <div className={currentStep === 'med_reminder' ? 'block' : 'hidden'}>
            <MedicationReminder lang={lang} onDueCountChange={setDueMedCount} />
          </div>

          {currentStep === 'safety' && (
            <>
              <PantrySwapsSection lang={lang} />
              <SafetyGuideSection lang={lang} />
            </>
          )}
        </div>

        {/* Bottom Previous / Next Step navigation */}
        <StepFooterNav
          lang={lang}
          currentStep={currentStep}
          onSelectStep={handleSelectStep}
        />
      </main>

      <Footer lang={lang} onSelectStep={handleSelectStep} onToggleLang={handleToggleLang} />
    </div>
  );
}
