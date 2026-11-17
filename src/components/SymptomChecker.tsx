import { useMemo, useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ShieldAlert,
  Stethoscope,
} from 'lucide-react';
import { BilingualText, Language } from '../types/remedy';
import { HEALTH_PROBLEMS } from '../data/remedies';
import { DOCTORS } from '../data/doctors';
import { translations } from '../data/translations';

interface SymptomCheckerProps {
  lang: Language;
  onJumpToProblem: (problemId: string) => void;
  onConnectDoctors: (doctorIds: string[], contextReason: string) => void;
}

interface CheckerSymptom {
  id: string;
  label: BilingualText;
  linkedProblemIds: string[];
  isRedFlag?: boolean;
}

const CHECKER_SYMPTOMS: CheckerSymptom[] = [
  {
    id: 'sc_runny_blocked_nose',
    label: { en: 'Runny or blocked nose / sneezing', te: 'ముక్కు కారడం / దిబ్బడ / తుమ్ములు' },
    linkedProblemIds: ['cold'],
  },
  {
    id: 'sc_dry_wet_cough',
    label: { en: 'Dry tickly cough or mucus cough', te: 'పొడి దగ్గు లేదా కఫం దగ్గు' },
    linkedProblemIds: ['cough'],
  },
  {
    id: 'sc_sore_throat',
    label: { en: 'Throat pain or scratchiness', te: 'గొంతు నొప్పి లేదా గరగర' },
    linkedProblemIds: ['throat_pain'],
  },
  {
    id: 'sc_low_fever',
    label: { en: 'Warm body / mild fever (<101°F)', te: 'తేలికపాటి జ్వరం (<101°F)' },
    linkedProblemIds: ['fever'],
  },
  {
    id: 'sc_high_fever',
    label: { en: 'High fever (102°F / 38.9°C or above)', te: 'అధిక జ్వరం (102°F / 38.9°C పైగా)' },
    linkedProblemIds: ['fever'],
    isRedFlag: true,
  },
  {
    id: 'sc_breathing_chest',
    label: { en: 'Difficulty breathing, wheezing, or chest pain', te: 'శ్వాస అందకపోవడం లేదా ఛాతీ నొప్పి' },
    linkedProblemIds: ['cough', 'cold'],
    isRedFlag: true,
  },
  {
    id: 'sc_bloating_acidity',
    label: { en: 'Gas, bloating, or sour heartburn', te: 'గ్యాస్, కడుపు ఉబ్బరం లేదా ఎసిడిటీ' },
    linkedProblemIds: ['indigestion'],
  },
  {
    id: 'sc_head_sinus',
    label: { en: 'Headache, neck tension, or sinus heaviness', te: 'తలనొప్పి, మెడ బిగుతు లేదా సైనస్ భారం' },
    linkedProblemIds: ['headache'],
  },
  {
    id: 'sc_knee_joint',
    label: { en: 'Knee stiffness or mild joint soreness', te: 'మోకాళ్ల బిగుతు లేదా కీళ్ల నొప్పి' },
    linkedProblemIds: ['knee_pain'],
  },
  {
    id: 'sc_tooth_gum',
    label: { en: 'Toothache or tender gums', te: 'పంటి నొప్పి లేదా చిగుళ్ల వాపు' },
    linkedProblemIds: ['toothache'],
  },
  {
    id: 'sc_mild_burn',
    label: { en: 'Minor red burn or surface graze', te: 'చిన్న కాలిన మంట లేదా చర్మపు గీత' },
    linkedProblemIds: ['minor_burns_skin'],
  },
  {
    id: 'sc_fatigue_thirst',
    label: { en: 'Fatigue, dry mouth, or heat tiredness', te: 'నీరసం, నోరు ఎండిపోవడం లేదా ఎండ అలసట' },
    linkedProblemIds: ['fatigue_dehydration'],
  },
  {
    id: 'sc_constipation',
    label: { en: 'Hard stools / mild constipation', te: 'గట్టి మలవిసర్జన / తేలికపాటి మలబద్ధకం' },
    linkedProblemIds: ['constipation'],
  },
  {
    id: 'sc_mild_diarrhea',
    label: { en: 'Mild loose motions / upset stomach', te: 'తేలికపాటి నీళ్ల విరేచనాలు' },
    linkedProblemIds: ['mild_diarrhea'],
  },
  {
    id: 'sc_muscle_cramps',
    label: { en: 'Calf cramps or tired aching muscles', te: 'పిక్కలు పట్టేయడం లేదా కండరాల నొప్పి' },
    linkedProblemIds: ['muscle_cramps'],
  },
  {
    id: 'sc_sleepless',
    label: { en: 'Difficulty sleeping or mild evening stress', te: 'నిద్ర పట్టకపోవడం లేదా తేలికపాటి ఒత్తిడి' },
    linkedProblemIds: ['sleeplessness'],
  },
  {
    id: 'sc_mouth_ulcer',
    label: { en: 'Mouth ulcer / stinging cheek sore', te: 'నోటి పుండు లేదా నాలుక మంట' },
    linkedProblemIds: ['mouth_ulcers'],
  },
  {
    id: 'sc_dry_heels',
    label: { en: 'Dry flaky skin or cracked heels', te: 'పొడి చర్మం లేదా పగిలిన మడమలు' },
    linkedProblemIds: ['dry_skin_heels'],
  },
];

export function SymptomChecker({
  lang,
  onJumpToProblem,
  onConnectDoctors,
}: SymptomCheckerProps) {
  const ui = translations[lang];
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [duration, setDuration] = useState<'under_24h' | '1_2_days' | '3_5_days' | 'over_5_days'>(
    '1_2_days'
  );
  const [severity, setSeverity] = useState<'mild' | 'moderate' | 'severe'>('mild');
  const [contexts, setContexts] = useState<('infant_under_1' | 'pregnant' | 'chronic_meds')[]>([]);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleContext = (id: 'infant_under_1' | 'pregnant' | 'chronic_meds') => {
    setContexts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecker = () => {
    setSelectedSymptoms([]);
    setDuration('1_2_days');
    setSeverity('mild');
    setContexts([]);
  };

  const evaluation = useMemo(() => {
    if (selectedSymptoms.length === 0) return null;

    const chosenObjs = CHECKER_SYMPTOMS.filter((s) => selectedSymptoms.includes(s.id));
    const hasRedFlagSymptom = chosenObjs.some((s) => s.isRedFlag);
    const hasFeverAndLong =
      (selectedSymptoms.includes('sc_low_fever') || selectedSymptoms.includes('sc_high_fever')) &&
      (duration === '3_5_days' || duration === 'over_5_days');

    let triageLevel: 'urgent' | 'caution' | 'home' = 'home';
    if (
      severity === 'severe' ||
      hasRedFlagSymptom ||
      duration === 'over_5_days' ||
      hasFeverAndLong ||
      contexts.includes('infant_under_1')
    ) {
      triageLevel = 'urgent';
    } else if (severity === 'moderate' || duration === '3_5_days') {
      triageLevel = 'caution';
    }

    // Gather matched health problems
    const problemCounts: Record<string, number> = {};
    for (const s of chosenObjs) {
      for (const pId of s.linkedProblemIds) {
        problemCounts[pId] = (problemCounts[pId] || 0) + 1;
      }
    }

    const matchedProblems = Object.entries(problemCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([pId]) => HEALTH_PROBLEMS.find((p) => p.id === pId))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));

    // Match recommended doctors based on selected problems + context
    const suggestedDoctorIds = new Set<string>();
    if (contexts.includes('infant_under_1')) {
      suggestedDoctorIds.add('doc_padma');
    }
    for (const prob of matchedProblems) {
      for (const doc of DOCTORS) {
        if (doc.handlesProblems.includes(prob.id)) {
          suggestedDoctorIds.add(doc.id);
        }
      }
    }
    if (suggestedDoctorIds.size === 0) {
      suggestedDoctorIds.add('doc_ananya');
    }

    const summaryText = chosenObjs.map((c) => c.label[lang]).join(', ');

    return {
      triageLevel,
      hasRedFlagSymptom,
      matchedProblems,
      suggestedDoctorIds: Array.from(suggestedDoctorIds),
      summaryText,
    };
  }, [selectedSymptoms, duration, severity, contexts, lang]);

  const handleOpenProblem = (problemId: string) => {
    onJumpToProblem(problemId);
  };

  return (
    <section id="symptom-checker" className="py-12 md:py-16 bg-[#FAF8F3] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">
              {ui.symCheckerEyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
              {ui.symCheckerTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
              {ui.symCheckerSubtitle}
            </p>
          </div>

          {selectedSymptoms.length > 0 && (
            <button
              type="button"
              onClick={resetChecker}
              className="min-h-[40px] px-4 py-2 rounded-xl border border-[#D8D3C5] bg-white text-xs sm:text-sm font-medium text-[#4D5A4F] hover:bg-[#F2EEE4] whitespace-nowrap shrink-0 self-start cursor-pointer"
            >
              {ui.symClearBtn}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Symptom, Duration, Severity, and Context Inputs */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-6">
            {/* Step 1: Symptoms */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1D261F]">{ui.symStepSymptoms}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CHECKER_SYMPTOMS.map((sym) => {
                  const isSelected = selectedSymptoms.includes(sym.id);
                  return (
                    <button
                      key={sym.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`min-h-[46px] px-3.5 py-2.5 rounded-xl border text-left text-xs sm:text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? sym.isRedFlag
                            ? 'bg-[#FDF4F3] border-[#9E2A2B] text-[#6B1A1B] font-medium'
                            : 'bg-[#E8EFE8] border-[#3E6248] text-[#18261B] font-medium'
                          : 'bg-[#FAF8F3] border-[#E6E1D5] text-[#2F3B31] hover:border-[#B6C7B8]'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? sym.isRedFlag
                              ? 'bg-[#9E2A2B] border-[#9E2A2B] text-white'
                              : 'bg-[#3E6248] border-[#3E6248] text-white'
                            : 'border-[#A7B2A8] bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" strokeWidth={3} />}
                      </span>
                      <span>{sym.label[lang]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div className="space-y-3 pt-4 border-t border-[#EAE5D9]">
              <h3 className="text-sm font-semibold text-[#1D261F]">{ui.symStepDuration}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="radiogroup">
                {ui.symDurations.map((opt) => {
                  const active = duration === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setDuration(opt.id)}
                      className={`min-h-[44px] px-3 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#3E6248] border-[#3E6248] text-white'
                          : 'bg-[#FAF8F3] border-[#E6E1D5] text-[#2F3B31] hover:border-[#B6C7B8]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Severity */}
            <div className="space-y-3 pt-4 border-t border-[#EAE5D9]">
              <h3 className="text-sm font-semibold text-[#1D261F]">{ui.symStepSeverity}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" role="radiogroup">
                {ui.symSeverities.map((opt) => {
                  const active = severity === opt.id;
                  const isSevere = opt.id === 'severe';
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setSeverity(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-colors cursor-pointer space-y-1 ${
                        active
                          ? isSevere
                            ? 'bg-[#FDF4F3] border-[#9E2A2B] text-[#6B1A1B]'
                            : 'bg-[#E8EFE8] border-[#3E6248] text-[#18261B]'
                          : 'bg-[#FAF8F3] border-[#E6E1D5] text-[#2F3B31] hover:border-[#B6C7B8]'
                      }`}
                    >
                      <p className="text-sm font-semibold">{opt.label}</p>
                      <p className="text-xs opacity-85 leading-relaxed">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Special Health Context */}
            <div className="space-y-3 pt-4 border-t border-[#EAE5D9]">
              <h3 className="text-sm font-semibold text-[#1D261F]">{ui.symStepContext}</h3>
              <div className="flex flex-wrap gap-2">
                {ui.symContexts.map((ctx) => {
                  const checked = contexts.includes(ctx.id);
                  return (
                    <button
                      key={ctx.id}
                      type="button"
                      aria-pressed={checked}
                      onClick={() => toggleContext(ctx.id)}
                      className={`min-h-[42px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer ${
                        checked
                          ? 'bg-[#FBF6EC] border-[#9C6626] text-[#593E1E] font-medium'
                          : 'bg-[#FAF8F3] border-[#E6E1D5] text-[#3B473D] hover:border-[#C5B9A5]'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          checked
                            ? 'bg-[#9C6626] border-[#9C6626] text-white'
                            : 'border-[#A7B2A8] bg-white'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3" strokeWidth={3} />}
                      </span>
                      <span>{ctx.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Guidance & Safety Evaluation Output */}
          <div className="lg:col-span-5 space-y-5">
            {!evaluation ? (
              <div className="bg-white rounded-2xl border border-[#DFDAD0] p-8 text-center">
                <Stethoscope className="w-8 h-8 text-[#3E6248] mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-[#1D261F] mb-1.5">
                  {ui.symEmptyTitle}
                </h3>
                <p className="text-sm text-[#546156] leading-relaxed">{ui.symEmptyBody}</p>
              </div>
            ) : (
              <>
                {/* Triage Safety Guidance Panel */}
                {evaluation.triageLevel === 'urgent' && (
                  <div
                    role="alert"
                    className="rounded-2xl bg-[#FDF4F3] border border-[#EBC7C4] p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertOctagon className="w-6 h-6 text-[#9E2A2B] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h3 className="font-display text-lg font-semibold text-[#7E1F20]">
                          {ui.symGuidanceUrgentTitle}
                        </h3>
                        <p className="text-sm text-[#5C2021] leading-relaxed">
                          {ui.symGuidanceUrgentBody}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onConnectDoctors(evaluation.suggestedDoctorIds, evaluation.summaryText)
                      }
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#9E2A2B] text-white text-sm font-semibold hover:bg-[#7E1F20] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>{ui.searchConnectDoctorsBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {evaluation.triageLevel === 'caution' && (
                  <div
                    role="status"
                    className="rounded-2xl bg-[#FBF6EC] border border-[#E6D3B1] p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-[#9C6626] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h3 className="font-display text-lg font-semibold text-[#6B471B]">
                          {ui.symGuidanceCautionTitle}
                        </h3>
                        <p className="text-sm text-[#593E1E] leading-relaxed">
                          {ui.symGuidanceCautionBody}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onConnectDoctors(evaluation.suggestedDoctorIds, evaluation.summaryText)
                      }
                      className="w-full min-h-[42px] px-4 py-2 rounded-xl bg-[#7A4E1D] text-white text-xs sm:text-sm font-semibold hover:bg-[#5E3B14] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>{ui.searchConnectDoctorsBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {evaluation.triageLevel === 'home' && (
                  <div
                    role="status"
                    className="rounded-2xl bg-[#EEF3EE] border border-[#C6D6C8] p-5 sm:p-6 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#3E6248] shrink-0 mt-0.5" />
                      <div className="space-y-1.5">
                        <h3 className="font-display text-lg font-semibold text-[#1F3826]">
                          {ui.symGuidanceHomeTitle}
                        </h3>
                        <p className="text-sm text-[#2D4734] leading-relaxed">
                          {ui.symGuidanceHomeBody}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Context-Specific Safety Notes */}
                {contexts.length > 0 && (
                  <div className="rounded-2xl bg-white border border-[#DFDAD0] p-5 space-y-2.5">
                    {contexts.includes('infant_under_1') && (
                      <p className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B2728]">
                        <ShieldAlert className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                        <span>{ui.symInfantWarning}</span>
                      </p>
                    )}
                    {contexts.includes('pregnant') && (
                      <p className="flex items-start gap-2.5 text-xs sm:text-sm text-[#593E1E]">
                        <AlertTriangle className="w-4 h-4 text-[#9C6626] shrink-0 mt-0.5" />
                        <span>{ui.symPregnantWarning}</span>
                      </p>
                    )}
                    {contexts.includes('chronic_meds') && (
                      <p className="flex items-start gap-2.5 text-xs sm:text-sm text-[#593E1E]">
                        <AlertTriangle className="w-4 h-4 text-[#9C6626] shrink-0 mt-0.5" />
                        <span>{ui.symChronicWarning}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* Related Home Care Information (shown only when triage is home or caution, not urgent) */}
                {evaluation.triageLevel !== 'urgent' && evaluation.matchedProblems.length > 0 && (
                  <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 space-y-4">
                    <h3 className="text-sm font-semibold text-[#1D261F]">
                      {ui.symMatchedCareTitle}
                    </h3>
                    <div className="divide-y divide-[#EAE5D9]">
                      {evaluation.matchedProblems.map((prob) => (
                        <div key={prob.id} className="py-3 first:pt-0 last:pb-0 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-display text-base font-semibold text-[#1D261F]">
                                {prob.name[lang]}
                              </p>
                              <p className="text-xs text-[#4D5A4F] mt-0.5">{prob.shortDesc[lang]}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleOpenProblem(prob.id)}
                              className="inline-flex items-center gap-1 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#EEF3EE] text-xs font-medium text-[#2A4733] hover:bg-[#DCE6DD] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                            >
                              <span>{ui.symOpenConditionBtn}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs text-[#7E1F20]">
                            <strong>{ui.doctorWarningTitle}:</strong> {prob.medicalRedFlags[0]?.[lang]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
