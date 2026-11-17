import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  Mail,
  Phone,
  ShieldAlert,
  Stethoscope,
  X,
} from 'lucide-react';
import { Language } from '../types/remedy';
import { DOCTORS, DoctorProfile, DoctorSpecialtyId } from '../data/doctors';
import { translations } from '../data/translations';

interface ConsultationRequest {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  patientName: string;
  phone: string;
  slotLabel: string;
  reason: string;
  submittedAt: string;
}

interface DoctorDirectoryProps {
  lang: Language;
  suggestedDoctorIds: string[];
  suggestionContext: string;
  onClearSuggestion: () => void;
}

const STORAGE_REQUESTS_KEY = 'homeveda_consult_requests';

export function DoctorDirectory({
  lang,
  suggestedDoctorIds,
  suggestionContext,
  onClearSuggestion,
}: DoctorDirectoryProps) {
  const ui = translations[lang];
  const [specialtyFilter, setSpecialtyFilter] = useState<DoctorSpecialtyId | 'all'>('all');
  const [activeModalDoctor, setActiveModalDoctor] = useState<DoctorProfile | null>(null);

  // Form state
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [slotId, setSlotId] = useState('asap');
  const [reason, setReason] = useState('');
  const [formError, setFormError] = useState('');

  const [requests, setRequests] = useState<ConsultationRequest[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_REQUESTS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_REQUESTS_KEY, JSON.stringify(requests));
    } catch {
      // Ignore storage errors
    }
  }, [requests]);

  // Reset specialty filter when a new suggestion arrives
  useEffect(() => {
    if (suggestedDoctorIds.length > 0) {
      setSpecialtyFilter('all');
    }
  }, [suggestedDoctorIds]);

  const specialtyTabs: { id: DoctorSpecialtyId | 'all'; label: { en: string; te: string } }[] = [
    { id: 'all', label: { en: 'All Specialists', te: 'అన్ని విభాగాలు' } },
    { id: 'general_physician', label: { en: 'General Physician', te: 'జనరల్ ఫిజీషియన్' } },
    { id: 'ent', label: { en: 'ENT', te: 'ENT' } },
    { id: 'pulmonologist', label: { en: 'Respiratory', te: 'శ్వాసకోశ' } },
    { id: 'gastro', label: { en: 'Gastro', te: 'జీర్ణకోశ' } },
    { id: 'orthopedic', label: { en: 'Orthopedic', te: 'కీళ్లు & ఎముకలు' } },
    { id: 'pediatrician', label: { en: 'Pediatrician', te: 'పిల్లల వైద్యం' } },
  ];

  const displayedDoctors = useMemo(() => {
    let list = DOCTORS;
    if (specialtyFilter !== 'all') {
      list = list.filter((d) => d.specialtyId === specialtyFilter);
    } else if (suggestedDoctorIds.length > 0) {
      // Put suggested doctors first, then others
      const suggested = list.filter((d) => suggestedDoctorIds.includes(d.id));
      const others = list.filter((d) => !suggestedDoctorIds.includes(d.id));
      return [...suggested, ...others];
    }
    return list;
  }, [specialtyFilter, suggestedDoctorIds]);

  const openConsultModal = (doctor: DoctorProfile) => {
    setActiveModalDoctor(doctor);
    setReason(suggestionContext || '');
    setFormError('');
  };

  const handleSubmitConsult = (e: FormEvent) => {
    e.preventDefault();
    if (!activeModalDoctor) return;
    const cleanName = patientName.trim();
    const cleanPhone = phone.trim();
    const cleanReason = reason.trim();

    if (cleanName.length < 2 || cleanPhone.length < 7) {
      setFormError(
        lang === 'en'
          ? 'Please enter your name and a valid phone number.'
          : 'దయచేసి మీ పేరు మరియు సరైన ఫోన్ నంబర్ నమోదు చేయండి.'
      );
      return;
    }

    const slotObj = ui.docFormSlotOptions.find((s) => s.id === slotId);
    const newReq: ConsultationRequest = {
      id: `req_${Date.now()}`,
      doctorId: activeModalDoctor.id,
      doctorName: activeModalDoctor.name[lang],
      specialty: activeModalDoctor.specialtyLabel[lang],
      patientName: cleanName,
      phone: cleanPhone,
      slotLabel: slotObj?.label || slotId,
      reason: cleanReason || activeModalDoctor.specialtyLabel[lang],
      submittedAt: new Date().toISOString(),
    };

    setRequests((prev) => [newReq, ...prev]);
    setActiveModalDoctor(null);
    setPatientName('');
    setPhone('');
    setReason('');
    setFormError('');
  };

  return (
    <section id="doctors" className="py-12 md:py-16 bg-[#FAF8F3] border-b border-[#E3DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#3E6248] mb-2">{ui.docEyebrow}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D261F] tracking-tight [text-wrap:balance]">
            {ui.docTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#4D5A4F] leading-relaxed">
            {ui.docSubtitle}
          </p>
        </div>

        {/* Active Suggestion Banner when routed from Search, Symptom Checker, or Remedy Red Flags */}
        {suggestedDoctorIds.length > 0 && (
          <div className="rounded-2xl bg-[#EEF3EE] border border-[#B8CEBC] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Stethoscope className="w-5 h-5 text-[#2F4D38] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#1D3222]">{ui.docSuggestedHeading}</p>
                {suggestionContext && (
                  <p className="text-xs sm:text-sm text-[#35503B] mt-0.5">{suggestionContext}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClearSuggestion}
              className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-white border border-[#C6D6C8] text-xs font-medium text-[#2A4733] hover:bg-[#FAF8F3] whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer"
            >
              {ui.docSuggestedClear}
            </button>
          </div>
        )}

        {/* Specialty Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFEBE0] rounded-xl border border-[#DFDAD0] w-fit max-w-full">
          {specialtyTabs.map((tab) => {
            const active = specialtyFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSpecialtyFilter(tab.id)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-white text-[#1D261F] shadow-sm'
                    : 'text-[#4D5A4F] hover:text-[#1D261F]'
                }`}
              >
                {tab.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDoctors.map((doc) => {
            const isSuggested = suggestedDoctorIds.includes(doc.id);
            return (
              <article
                key={doc.id}
                className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between space-y-5 transition-colors ${
                  isSuggested
                    ? 'bg-white border-[#3E6248] ring-1 ring-[#3E6248]/20'
                    : 'bg-white border-[#DFDAD0]'
                }`}
              >
                <div className="space-y-3">
                  {/* Unboxed editorial metadata line */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#546156] tabular-nums">
                    <span className="font-semibold text-[#3E6248]">
                      {doc.specialtyLabel[lang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {doc.experienceYears} {ui.docYearsExp}
                    </span>
                    {isSuggested && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#7E1F20]">
                          {lang === 'en' ? 'Suggested Match' : 'సూచించిన వైద్యులు'}
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#1D261F]">
                      {doc.name[lang]}
                    </h3>
                    <p className="text-xs text-[#637065] mt-0.5">{doc.qualifications}</p>
                  </div>

                  <p className="text-sm text-[#4D5A4F] leading-relaxed">{doc.focusNote[lang]}</p>

                  <div className="pt-2 border-t border-[#EFEBE0] space-y-1.5 text-xs text-[#3B473D]">
                    <p>
                      <span className="font-medium text-[#1D261F]">{ui.docLanguagesLabel}</span>{' '}
                      {doc.languagesSpoken[lang]}
                    </p>
                    <p className="tabular-nums">
                      <span className="font-medium text-[#1D261F]">{ui.docHoursLabel}</span>{' '}
                      {doc.availability[lang]}
                    </p>
                    <p className="text-[#3E6248] font-medium">{doc.consultationMode[lang]}</p>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => openConsultModal(doc)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#3E6248] text-white text-sm font-medium hover:bg-[#2F4D38] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{ui.docBookBtn}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${doc.phone}`}
                      className="min-h-[40px] px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#D8D3C5] text-xs font-medium text-[#2A352C] hover:bg-[#EFEBE0] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#3E6248]" />
                      <span>{ui.docCallBtn}</span>
                    </a>
                    <a
                      href={`mailto:${doc.email}?subject=${encodeURIComponent(
                        `HomeVeda Consultation: ${suggestionContext || doc.specialtyLabel.en}`
                      )}`}
                      className="min-h-[40px] px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#D8D3C5] text-xs font-medium text-[#2A352C] hover:bg-[#EFEBE0] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#3E6248]" />
                      <span>{ui.docEmailBtn}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Emergency Reminder */}
        <p className="flex items-start gap-2.5 text-xs sm:text-sm text-[#7E1F20] bg-[#FDF4F3] border border-[#EBC7C4] rounded-xl px-4 py-3">
          <ShieldAlert className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
          <span>{ui.docEmergencyCallout}</span>
        </p>

        {/* Submitted Consultation Requests Log */}
        {requests.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#DFDAD0] p-5 sm:p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-[#1D261F]">
              {ui.docRequestsHeading}
            </h3>
            <div className="divide-y divide-[#EAE5D9]">
              {requests.slice(0, 5).map((req) => (
                <div
                  key={req.id}
                  className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm"
                >
                  <div className="space-y-0.5">
                    <p className="font-semibold text-[#1D261F]">
                      {req.doctorName} · <span className="font-normal text-[#4D5A4F]">{req.specialty}</span>
                    </p>
                    <p className="text-[#4D5A4F]">
                      {req.patientName} ({req.phone}) · {req.slotLabel}
                    </p>
                    {req.reason && <p className="text-xs text-[#637065]">{req.reason}</p>}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2A4733] whitespace-nowrap shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#3E6248]" />
                    <span>{ui.docRequestConfirmedBadge}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Consultation Request Modal */}
      {activeModalDoctor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consult-modal-title"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FAF8F3] rounded-2xl border border-[#DFDAD0] w-full max-w-lg p-5 sm:p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E3DFD3]">
              <div>
                <h3
                  id="consult-modal-title"
                  className="font-display text-xl font-semibold text-[#1D261F]"
                >
                  {ui.docModalTitle}
                </h3>
                <p className="text-xs text-[#3E6248] font-medium mt-0.5">
                  {activeModalDoctor.name[lang]} · {activeModalDoctor.specialtyLabel[lang]}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDoctor(null)}
                aria-label={ui.closeLabel}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl text-[#4D5A4F] hover:bg-[#EFEBE0] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#4D5A4F]">{ui.docModalSubtitle}</p>

            <form onSubmit={handleSubmitConsult} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="consult-name" className="block text-xs font-semibold text-[#2A352C]">
                  {ui.docFormPatientName}
                </label>
                <input
                  id="consult-name"
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder={ui.docFormPatientNamePlaceholder}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="consult-phone" className="block text-xs font-semibold text-[#2A352C]">
                  {ui.docFormPhone}
                </label>
                <input
                  id="consult-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={ui.docFormPhonePlaceholder}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="consult-slot" className="block text-xs font-semibold text-[#2A352C]">
                  {ui.docFormSlot}
                </label>
                <select
                  id="consult-slot"
                  value={slotId}
                  onChange={(e) => setSlotId(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
                >
                  {ui.docFormSlotOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="consult-reason" className="block text-xs font-semibold text-[#2A352C]">
                  {ui.docFormReason}
                </label>
                <textarea
                  id="consult-reason"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder={ui.docFormReasonPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8D3C5] text-sm text-[#1D261F] focus:outline-none focus:border-[#3E6248]"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-[#9E2A2B]">
                  {formError}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalDoctor(null)}
                  className="min-h-[42px] px-4 py-2 rounded-xl border border-[#D8D3C5] bg-white text-sm font-medium text-[#4D5A4F] hover:bg-[#EFEBE0] cursor-pointer"
                >
                  {ui.docFormCancelBtn}
                </button>
                <button
                  type="submit"
                  className="min-h-[42px] px-5 py-2 rounded-xl bg-[#3E6248] text-white text-sm font-semibold hover:bg-[#2F4D38] cursor-pointer"
                >
                  {ui.docFormSubmitBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
