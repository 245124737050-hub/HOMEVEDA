import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import {
  AlarmClock,
  Bell,
  BellRing,
  Check,
  Clock,
  Pause,
  Play,
  Plus,
  ShieldAlert,
  SkipForward,
  Trash2,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import {
  DoseActionStatus,
  Language,
  MealTimingNote,
  MedicationFrequency,
  MedicationHistoryEntry,
  MedicationSchedule,
  SnoozedDose,
} from '../types/remedy';
import { translations } from '../data/translations';

interface MedicationReminderProps {
  lang: Language;
  onDueCountChange?: (count: number) => void;
}

const STORAGE_SCHEDULES_KEY = 'homeveda_med_schedules';
const STORAGE_HISTORY_KEY = 'homeveda_med_history';
const STORAGE_SNOOZES_KEY = 'homeveda_med_snoozes';
const SNOOZE_MINUTES = 10;

function getTodayDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getCurrentHHMM(date = new Date()): string {
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

function formatTimeDisplay(hhmm: string): string {
  const [hStr, mStr] = hhmm.split(':');
  const h = Number(hStr);
  if (Number.isNaN(h)) return hhmm;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mStr} ${suffix}`;
}

function formatMsToDisplay(ms: number): string {
  const d = new Date(ms);
  return formatTimeDisplay(getCurrentHHMM(d));
}

function playGentleChime() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    gain1.gain.setValueAtTime(0.08, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.45);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659.25, now + 0.18); // E5
    gain2.gain.setValueAtTime(0.08, now + 0.18);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.18);
    osc2.stop(now + 0.7);
  } catch {
    // Audio playback blocked or unavailable
  }
}

const DEFAULT_TIMES_BY_FREQ: Record<MedicationFrequency, string[]> = {
  once: ['08:00'],
  twice: ['08:00', '20:00'],
  thrice: ['08:00', '14:00', '20:00'],
  custom: ['09:00'],
};

interface DueAlertItem {
  doseKey: string;
  medicationId: string;
  medicineName: string;
  dosage: string;
  scheduledTime: string;
  dateKey: string;
  mealNote: MealTimingNote;
  isTest?: boolean;
}

export function MedicationReminder({ lang, onDueCountChange }: MedicationReminderProps) {
  const ui = translations[lang];

  const [schedules, setSchedules] = useState<MedicationSchedule[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SCHEDULES_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [history, setHistory] = useState<MedicationHistoryEntry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_HISTORY_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [snoozes, setSnoozes] = useState<SnoozedDose[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SNOOZES_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Form state (user enters exact doctor-prescribed values)
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState<MedicationFrequency>('twice');
  const [times, setTimes] = useState<string[]>(DEFAULT_TIMES_BY_FREQ.twice);
  const [mealNote, setMealNote] = useState<MealTimingNote>('after_food');
  const [prescribedBy, setPrescribedBy] = useState('');

  // Notification & sound state
  const [notifPermission, setNotifPermission] = useState<NotificationPermission | 'unsupported'>(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) return 'unsupported';
    return Notification.permission;
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [dueAlerts, setDueAlerts] = useState<DueAlertItem[]>([]);

  useEffect(() => {
    onDueCountChange?.(dueAlerts.length);
  }, [dueAlerts.length, onDueCountChange]);

  // Track which dose triggers have already alerted in this minute/snooze cycle
  const firedTriggersRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SCHEDULES_KEY, JSON.stringify(schedules));
    } catch {
      // Ignore storage errors
    }
  }, [schedules]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
    } catch {
      // Ignore storage errors
    }
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SNOOZES_KEY, JSON.stringify(snoozes));
    } catch {
      // Ignore storage errors
    }
  }, [snoozes]);

  const sendSystemNotification = useCallback(
    (title: string, body: string) => {
      if (soundEnabled) {
        playGentleChime();
      }
      if (
        typeof window !== 'undefined' &&
        'Notification' in window &&
        Notification.permission === 'granted'
      ) {
        try {
          new Notification(title, {
            body,
            tag: `homeveda-med-${Date.now()}`,
          });
        } catch {
          // Ignore browser notification errors in restricted iframes
        }
      }
    },
    [soundEnabled]
  );

  // Automatic scheduler checking every 10 seconds
  useEffect(() => {
    const checkDueDoses = () => {
      const now = new Date();
      const todayKey = getTodayDateKey(now);
      const currentHHMM = getCurrentHHMM(now);
      const nowMs = now.getTime();

      // 1. Check scheduled active doses matching current HH:MM
      for (const med of schedules) {
        if (!med.active) continue;
        for (const time of med.times) {
          const doseKey = `${med.id}_${todayKey}_${time}`;
          const alreadyLoggedFinal = history.some(
            (h) =>
              h.medicationId === med.id &&
              h.dateKey === todayKey &&
              h.scheduledTime === time &&
              (h.status === 'taken' || h.status === 'skipped')
          );
          if (alreadyLoggedFinal) continue;

          const activeSnooze = snoozes.find((s) => s.doseKey === doseKey);
          if (activeSnooze) {
            if (nowMs >= activeSnooze.snoozeUntilMs) {
              const snoozeTriggerId = `${doseKey}_snooze_${activeSnooze.snoozeUntilMs}`;
              if (!firedTriggersRef.current.has(snoozeTriggerId)) {
                firedTriggersRef.current.add(snoozeTriggerId);
                setDueAlerts((prev) =>
                  prev.some((a) => a.doseKey === doseKey)
                    ? prev
                    : [
                        {
                          doseKey,
                          medicationId: med.id,
                          medicineName: med.medicineName,
                          dosage: med.dosage,
                          scheduledTime: time,
                          dateKey: todayKey,
                          mealNote: med.mealNote,
                        },
                        ...prev,
                      ]
                );
                sendSystemNotification(
                  `${ui.medDueAlertTitle}: ${med.medicineName}`,
                  `${med.dosage} · ${formatTimeDisplay(time)}`
                );
              }
            }
            continue;
          }

          if (time === currentHHMM) {
            const triggerId = `${doseKey}_${currentHHMM}`;
            if (!firedTriggersRef.current.has(triggerId)) {
              firedTriggersRef.current.add(triggerId);
              setDueAlerts((prev) =>
                prev.some((a) => a.doseKey === doseKey)
                  ? prev
                  : [
                      {
                        doseKey,
                        medicationId: med.id,
                        medicineName: med.medicineName,
                        dosage: med.dosage,
                        scheduledTime: time,
                        dateKey: todayKey,
                        mealNote: med.mealNote,
                      },
                      ...prev,
                    ]
              );
              sendSystemNotification(
                `${ui.medDueAlertTitle}: ${med.medicineName}`,
                `${med.dosage} · ${formatTimeDisplay(time)}`
              );
            }
          }
        }
      }
    };

    checkDueDoses();
    const timer = window.setInterval(checkDueDoses, 10000);
    return () => window.clearInterval(timer);
  }, [schedules, history, snoozes, sendSystemNotification, ui.medDueAlertTitle]);

  const handleRequestNotificationPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setNotifPermission('unsupported');
      return;
    }
    try {
      const result = await Notification.requestPermission();
      setNotifPermission(result);
    } catch {
      setNotifPermission('denied');
    }
  };

  const handleTestNotification = () => {
    const sampleMed = schedules[0];
    const title = sampleMed
      ? `${ui.medDueAlertTitle}: ${sampleMed.medicineName}`
      : `${ui.medDueAlertTitle} (${ui.brandName})`;
    const body = sampleMed
      ? `${sampleMed.dosage} · ${formatTimeDisplay(sampleMed.times[0] || '08:00')}`
      : lang === 'en'
      ? 'Sample scheduled reminder preview'
      : 'నమూనా మందుల అలారం పరీక్ష';

    sendSystemNotification(title, body);

    const testKey = `test_${Date.now()}`;
    setDueAlerts((prev) => [
      {
        doseKey: testKey,
        medicationId: sampleMed?.id || 'test',
        medicineName: sampleMed?.medicineName || (lang === 'en' ? 'Sample Prescribed Dose' : 'నమూనా మందు'),
        dosage: sampleMed?.dosage || (lang === 'en' ? 'As prescribed' : 'సూచించిన మోతాదు'),
        scheduledTime: getCurrentHHMM(),
        dateKey: getTodayDateKey(),
        mealNote: sampleMed?.mealNote || 'as_directed',
        isTest: true,
      },
      ...prev,
    ]);
  };

  const handleFrequencyChange = (nextFreq: MedicationFrequency) => {
    setFrequency(nextFreq);
    if (nextFreq !== 'custom') {
      setTimes(DEFAULT_TIMES_BY_FREQ[nextFreq]);
    }
  };

  const handleTimeChange = (idx: number, val: string) => {
    setTimes((prev) => prev.map((tVal, i) => (i === idx ? val : tVal)));
  };

  const handleAddCustomTime = () => {
    setTimes((prev) => [...prev, '12:00']);
  };

  const handleRemoveTime = (idx: number) => {
    if (times.length <= 1) return;
    setTimes((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddMedication = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = medicineName.trim();
    const trimmedDosage = dosage.trim();
    const cleanTimes = Array.from(new Set(times.filter(Boolean))).sort();

    if (!trimmedName || !trimmedDosage || cleanTimes.length === 0) return;

    const newItem: MedicationSchedule = {
      id: `med_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      medicineName: trimmedName,
      dosage: trimmedDosage,
      frequency,
      times: cleanTimes,
      mealNote,
      prescribedBy: prescribedBy.trim() || undefined,
      active: true,
      createdAt: new Date().toISOString(),
    };

    setSchedules((prev) => [newItem, ...prev]);
    setMedicineName('');
    setDosage('');
    setPrescribedBy('');
    setFrequency('twice');
    setTimes(DEFAULT_TIMES_BY_FREQ.twice);
  };

  const handleDoseAction = (
    med: { id: string; medicineName: string; dosage: string },
    scheduledTime: string,
    action: DoseActionStatus,
    dateKey = getTodayDateKey()
  ) => {
    const doseKey = `${med.id}_${dateKey}_${scheduledTime}`;

    // Remove from active alerts
    setDueAlerts((prev) => prev.filter((a) => a.doseKey !== doseKey));

    if (action === 'snoozed') {
      const snoozeUntilMs = Date.now() + SNOOZE_MINUTES * 60 * 1000;
      setSnoozes((prev) => [
        ...prev.filter((s) => s.doseKey !== doseKey),
        {
          doseKey,
          medicationId: med.id,
          medicineName: med.medicineName,
          dosage: med.dosage,
          scheduledTime,
          dateKey,
          snoozeUntilMs,
        },
      ]);
    } else {
      // Taken or skipped clears any active snooze
      setSnoozes((prev) => prev.filter((s) => s.doseKey !== doseKey));
    }

    const entry: MedicationHistoryEntry = {
      id: `hist_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      medicationId: med.id,
      medicineName: med.medicineName,
      dosage: med.dosage,
      scheduledTime,
      dateKey,
      status: action,
      actedAt: new Date().toISOString(),
    };
    setHistory((prev) => [entry, ...prev]);
  };

  const togglePauseMed = (medId: string) => {
    setSchedules((prev) =>
      prev.map((m) => (m.id === medId ? { ...m, active: !m.active } : m))
    );
  };

  const deleteMed = (medId: string) => {
    setSchedules((prev) => prev.filter((m) => m.id !== medId));
    setSnoozes((prev) => prev.filter((s) => s.medicationId !== medId));
    setDueAlerts((prev) => prev.filter((a) => a.medicationId !== medId));
  };

  const todayKey = getTodayDateKey();

  // Build flat sorted list of today's scheduled doses
  const todayDoses = useMemo(() => {
    const list: {
      doseKey: string;
      med: MedicationSchedule;
      time: string;
      finalStatus?: DoseActionStatus;
      snoozeInfo?: SnoozedDose;
    }[] = [];

    for (const med of schedules) {
      for (const time of med.times) {
        const doseKey = `${med.id}_${todayKey}_${time}`;
        const latestFinal = history.find(
          (h) =>
            h.medicationId === med.id &&
            h.dateKey === todayKey &&
            h.scheduledTime === time &&
            (h.status === 'taken' || h.status === 'skipped')
        );
        const activeSnooze = snoozes.find((s) => s.doseKey === doseKey);
        list.push({
          doseKey,
          med,
          time,
          finalStatus: latestFinal?.status,
          snoozeInfo: activeSnooze,
        });
      }
    }

    return list.sort((a, b) => a.time.localeCompare(b.time));
  }, [schedules, history, snoozes, todayKey]);

  const getMealLabel = (note: MealTimingNote) =>
    ui.medMealOptions.find((m) => m.id === note)?.label || '';

  return (
    <section id="medication-reminder" className="py-12 md:py-16 bg-[#F4F0E6] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header & Notification Permission Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">{ui.medEyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
              {ui.medTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
              {ui.medSubtitle}
            </p>
          </div>

          {/* Notification & Sound Controls */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {notifPermission === 'default' && (
              <button
                type="button"
                onClick={handleRequestNotificationPermission}
                className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 rounded-xl bg-[#3E6248] text-white text-xs sm:text-sm font-medium hover:bg-[#2F4D38] transition-colors cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>{ui.medNotifEnableBtn}</span>
              </button>
            )}

            {notifPermission === 'granted' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2A4733] px-2">
                <BellRing className="w-4 h-4 text-[#3E6248]" />
                <span>{ui.medNotifGranted}</span>
              </span>
            )}

            {(notifPermission === 'denied' || notifPermission === 'unsupported') && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B4E3D] px-2">
                <Bell className="w-4 h-4" />
                <span>{ui.medNotifDenied}</span>
              </span>
            )}

            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              aria-pressed={soundEnabled}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-2 rounded-xl bg-white border border-[#D8D3C5] text-xs font-medium text-[#3B473D] hover:bg-[#FAF8F3] cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#3E6248]" /> : <VolumeX className="w-4 h-4" />}
              <span>{ui.medSoundLabel}</span>
            </button>

            <button
              type="button"
              onClick={handleTestNotification}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-xs font-medium text-[#1D261F] hover:border-[#3E6248] cursor-pointer"
            >
              <AlarmClock className="w-4 h-4 text-[#3E6248]" />
              <span>{ui.medNotifTestBtn}</span>
            </button>
          </div>
        </div>

        {/* Strict Prescription Safety Boundary Banner */}
        <div
          role="note"
          className="rounded-2xl bg-[#FDF4F3] border border-[#EBC7C4] p-4 sm:p-5 flex items-start gap-3"
        >
          <ShieldAlert className="w-5 h-5 text-[#9E2A2B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-[#7E1F20]">{ui.medSafetyBannerTitle}</h3>
            <p className="text-xs sm:text-sm text-[#5C2021] leading-relaxed">
              {ui.medSafetyBannerBody}
            </p>
          </div>
        </div>

        {/* Active Due Medication Alert Banner(s) */}
        {dueAlerts.length > 0 && (
          <div className="space-y-3" role="alert" aria-live="assertive">
            {dueAlerts.map((alert) => (
              <div
                key={alert.doseKey}
                className="rounded-2xl bg-[#253B2B] text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <BellRing className="w-5 h-5 text-[#B6D7BE] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-[#C5DFCA]">{ui.medDueAlertTitle}</p>
                    <p className="font-display text-lg font-semibold">
                      {alert.medicineName} — {alert.dosage}
                    </p>
                    <p className="text-xs text-[#DCE8DE] tabular-nums">
                      {formatTimeDisplay(alert.scheduledTime)} · {getMealLabel(alert.mealNote)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {alert.isTest ? (
                    <button
                      type="button"
                      onClick={() =>
                        setDueAlerts((prev) => prev.filter((a) => a.doseKey !== alert.doseKey))
                      }
                      className="min-h-[40px] px-4 py-2 rounded-xl bg-white text-[#1D261F] text-xs font-semibold hover:bg-[#EEF3EE] cursor-pointer"
                    >
                      {ui.closeLabel}
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleDoseAction(
                            {
                              id: alert.medicationId,
                              medicineName: alert.medicineName,
                              dosage: alert.dosage,
                            },
                            alert.scheduledTime,
                            'taken',
                            alert.dateKey
                          )
                        }
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-[#4E7E5B] hover:bg-[#5B926A] text-white text-xs font-semibold cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{ui.medActionTaken}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleDoseAction(
                            {
                              id: alert.medicationId,
                              medicineName: alert.medicineName,
                              dosage: alert.dosage,
                            },
                            alert.scheduledTime,
                            'snoozed',
                            alert.dateKey
                          )
                        }
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-medium cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{ui.medActionSnooze}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleDoseAction(
                            {
                              id: alert.medicationId,
                              medicineName: alert.medicineName,
                              dosage: alert.dosage,
                            },
                            alert.scheduledTime,
                            'skipped',
                            alert.dateKey
                          )
                        }
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium cursor-pointer"
                      >
                        <SkipForward className="w-3.5 h-3.5" />
                        <span>{ui.medActionSkipped}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main 2-Column Workspace: Add Form + Today's Schedule & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Add Doctor-Prescribed Medicine Form */}
          <form
            onSubmit={handleAddMedication}
            className="lg:col-span-5 bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-[#1D261F]">
              {ui.medFormTitle}
            </h3>

            <div className="space-y-1.5">
              <label htmlFor="med-name" className="block text-xs font-semibold text-[#2A352C]">
                {ui.medNameLabel}
              </label>
              <input
                id="med-name"
                type="text"
                required
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                placeholder={ui.medNamePlaceholder}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="med-dosage" className="block text-xs font-semibold text-[#2A352C]">
                {ui.medDosageLabel}
              </label>
              <input
                id="med-dosage"
                type="text"
                required
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                placeholder={ui.medDosagePlaceholder}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248]"
              />
            </div>

            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-[#2A352C]">{ui.medFreqLabel}</span>
              <div className="grid grid-cols-2 gap-2" role="radiogroup">
                {ui.medFreqOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={frequency === opt.id}
                    onClick={() => handleFrequencyChange(opt.id)}
                    className={`min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
                      frequency === opt.id
                        ? 'bg-[#3E6248] border-[#3E6248] text-white'
                        : 'bg-white border-[#D8D3C5] text-[#2F3B31] hover:border-[#3E6248]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scheduled Timings */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2A352C]">{ui.medTimesLabel}</span>
                {frequency === 'custom' && (
                  <button
                    type="button"
                    onClick={handleAddCustomTime}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#3E6248] hover:underline cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{ui.medAddTimeBtn}</span>
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {times.map((tVal, idx) => (
                  <div key={idx} className="inline-flex items-center gap-1">
                    <input
                      type="time"
                      required
                      value={tVal}
                      onChange={(e) => handleTimeChange(idx, e.target.value)}
                      aria-label={`${ui.medTimesLabel} ${idx + 1}`}
                      className="min-h-[42px] px-3 py-1.5 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] tabular-nums focus:outline-none focus:border-[#3E6248]"
                    />
                    {frequency === 'custom' && times.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTime(idx)}
                        aria-label={ui.medDeleteBtn}
                        className="min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg text-[#6B4E3D] hover:bg-[#EFEBE0] cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="med-meal" className="block text-xs font-semibold text-[#2A352C]">
                {ui.medMealLabel}
              </label>
              <select
                id="med-meal"
                value={mealNote}
                onChange={(e) => setMealNote(e.target.value as MealTimingNote)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
              >
                {ui.medMealOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="med-doctor" className="block text-xs font-semibold text-[#2A352C]">
                {ui.medDoctorLabel}
              </label>
              <input
                id="med-doctor"
                type="text"
                value={prescribedBy}
                onChange={(e) => setPrescribedBy(e.target.value)}
                placeholder={ui.medDoctorPlaceholder}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] placeholder:text-[#788479] focus:outline-none focus:border-[#3E6248]"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[46px] px-5 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-semibold hover:bg-[#2F4D38] transition-colors cursor-pointer"
            >
              {ui.medSubmitBtn}
            </button>
          </form>

          {/* Right: Today's Doses, Manage Schedules & History Log */}
          <div className="lg:col-span-7 space-y-6">
            {/* Today's Scheduled Doses */}
            <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1D261F]">
                  {ui.medTodayDosesTitle}
                </h3>
                <span className="text-xs text-[#546156] tabular-nums">{todayKey}</span>
              </div>

              {schedules.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <AlarmClock className="w-8 h-8 text-[#7B9982] mx-auto" />
                  <p className="font-display text-base font-semibold text-[#1D261F]">
                    {ui.medNoMedsTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#546156] max-w-md mx-auto">
                    {ui.medNoMedsBody}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#EAE5D9]">
                  {todayDoses.map(({ doseKey, med, time, finalStatus, snoozeInfo }) => (
                    <div
                      key={doseKey}
                      className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#546156] tabular-nums">
                          <span className="font-semibold text-[#1D261F]">
                            {formatTimeDisplay(time)}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{getMealLabel(med.mealNote)}</span>
                          {!med.active && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#8C531E] font-medium">{ui.medPauseBtn}</span>
                            </>
                          )}
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-[#1D261F]">
                          {med.medicineName}{' '}
                          <span className="font-normal text-[#4D5A4F]">— {med.dosage}</span>
                        </p>
                        {med.prescribedBy && (
                          <p className="text-xs text-[#637065]">{med.prescribedBy}</p>
                        )}
                      </div>

                      {/* Dose Status or Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {finalStatus === 'taken' ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2A4733] bg-[#E8EFE8] px-3 py-1.5 rounded-lg">
                            <Check className="w-3.5 h-3.5" />
                            <span>{ui.medStatusTaken}</span>
                          </span>
                        ) : finalStatus === 'skipped' ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B4E3D] bg-[#F2EEE4] px-3 py-1.5 rounded-lg">
                            <SkipForward className="w-3.5 h-3.5" />
                            <span>{ui.medStatusSkipped}</span>
                          </span>
                        ) : (
                          <>
                            {snoozeInfo && (
                              <span className="text-xs font-medium text-[#7A4E1D] bg-[#FBF6EC] px-2.5 py-1 rounded-lg tabular-nums">
                                {ui.medSnoozedUntil} {formatMsToDisplay(snoozeInfo.snoozeUntilMs)}
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => handleDoseAction(med, time, 'taken')}
                              className="inline-flex items-center gap-1 min-h-[38px] px-3 py-1.5 rounded-lg bg-[#3E6248] text-white text-xs font-medium hover:bg-[#2F4D38] cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>{ui.medActionTaken}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDoseAction(med, time, 'snoozed')}
                              className="inline-flex items-center gap-1 min-h-[38px] px-3 py-1.5 rounded-lg border border-[#D8D3C5] bg-[#FAF8F3] text-xs font-medium text-[#3B473D] hover:bg-[#EFEBE0] cursor-pointer"
                            >
                              <Clock className="w-3.5 h-3.5" />
                              <span>{ui.medActionSnooze}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDoseAction(med, time, 'skipped')}
                              className="inline-flex items-center gap-1 min-h-[38px] px-3 py-1.5 rounded-lg border border-[#D8D3C5] bg-white text-xs font-medium text-[#6B4E3D] hover:bg-[#FBF6EC] cursor-pointer"
                            >
                              <SkipForward className="w-3.5 h-3.5" />
                              <span>{ui.medActionSkipped}</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Saved Prescriptions Management Row */}
              {schedules.length > 0 && (
                <div className="pt-4 border-t border-[#EAE5D9] space-y-2.5">
                  <p className="text-xs font-semibold text-[#4D5A4F]">{ui.medScheduleTitle}</p>
                  <div className="space-y-2">
                    {schedules.map((med) => (
                      <div
                        key={med.id}
                        className="flex flex-wrap items-center justify-between gap-2 text-xs bg-[#FAF8F3] border border-[#E6E1D5] rounded-xl px-3.5 py-2.5"
                      >
                        <div className="min-w-0">
                          <span className="font-semibold text-[#1D261F]">{med.medicineName}</span>
                          <span className="text-[#546156] mx-1.5">·</span>
                          <span className="text-[#4D5A4F]">{med.dosage}</span>
                          <span className="text-[#546156] mx-1.5">·</span>
                          <span className="text-[#3E6248] tabular-nums">
                            {med.times.map(formatTimeDisplay).join(', ')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => togglePauseMed(med.id)}
                            className="inline-flex items-center gap-1 min-h-[32px] px-2.5 py-1 rounded-lg border border-[#D8D3C5] bg-white text-[#3B473D] hover:bg-[#EFEBE0] cursor-pointer"
                          >
                            {med.active ? (
                              <>
                                <Pause className="w-3 h-3" />
                                <span>{ui.medPauseBtn}</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3 h-3" />
                                <span>{ui.medResumeBtn}</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteMed(med.id)}
                            aria-label={`${ui.medDeleteBtn} ${med.medicineName}`}
                            className="inline-flex items-center gap-1 min-h-[32px] px-2.5 py-1 rounded-lg border border-[#EBC7C4] bg-[#FDF4F3] text-[#7E1F20] hover:bg-[#F9E3E1] cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>{ui.medDeleteBtn}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Medication History Log */}
            <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-[#1D261F]">
                  {ui.medHistoryTitle}
                </h3>
                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setHistory([])}
                    className="text-xs font-medium text-[#6B4E3D] hover:underline cursor-pointer"
                  >
                    {ui.medHistoryClearBtn}
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <p className="text-xs sm:text-sm text-[#546156] py-2">{ui.medHistoryEmpty}</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#E6E1D5] text-xs text-[#546156]">
                        <th className="py-2 pr-3 font-medium">{ui.medHistoryCols.time}</th>
                        <th className="py-2 pr-3 font-medium">{ui.medHistoryCols.medicine}</th>
                        <th className="py-2 pr-3 font-medium">{ui.medHistoryCols.dosage}</th>
                        <th className="py-2 pr-3 font-medium">{ui.medHistoryCols.scheduled}</th>
                        <th className="py-2 font-medium">{ui.medHistoryCols.status}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EFEBE0]">
                      {history.slice(0, 20).map((entry) => {
                        const actedDate = new Date(entry.actedAt);
                        const actedTime = actedDate.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        });
                        return (
                          <tr key={entry.id}>
                            <td className="py-2.5 pr-3 text-xs text-[#4D5A4F] tabular-nums whitespace-nowrap">
                              {entry.dateKey} · {actedTime}
                            </td>
                            <td className="py-2.5 pr-3 font-medium text-[#1D261F]">
                              {entry.medicineName}
                            </td>
                            <td className="py-2.5 pr-3 text-[#4D5A4F]">{entry.dosage}</td>
                            <td className="py-2.5 pr-3 text-[#4D5A4F] tabular-nums whitespace-nowrap">
                              {formatTimeDisplay(entry.scheduledTime)}
                            </td>
                            <td className="py-2.5 whitespace-nowrap">
                              {entry.status === 'taken' && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2A4733]">
                                  <Check className="w-3.5 h-3.5" />
                                  {ui.medStatusTaken}
                                </span>
                              )}
                              {entry.status === 'skipped' && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#6B4E3D]">
                                  <SkipForward className="w-3.5 h-3.5" />
                                  {ui.medStatusSkipped}
                                </span>
                              )}
                              {entry.status === 'snoozed' && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9C6626]">
                                  <Clock className="w-3.5 h-3.5" />
                                  {ui.medStatusSnoozed}
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
