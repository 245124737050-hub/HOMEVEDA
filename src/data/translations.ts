import { BilingualText } from '../types/remedy';

export interface UITranslations {
  brandName: string;
  navFinder: string;
  navIngredientMatcher: string;
  navSymptomChecker: string;
  navMedReminder: string;
  navDoctors: string;
  navConditions: string;
  navSwaps: string;
  navSafety: string;
  switchLangLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroQuickLabel: string;
  heroSafetyNote: string;
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillarExploreBtn: string;
  finderEyebrow: string;
  finderTitle: string;
  finderSubtitle: string;
  searchPlaceholder: string;
  clearSearch: string;
  savedFilterBtn: string;
  allConditionsLabel: string;
  step1Label: string;
  step2Label: string;
  step2Helper: string;
  clearSymptoms: string;
  selectAllSymptoms: string;
  matchingTitle: string;
  showingAllNotice: string;
  matchedSymptomsLabel: string;
  ofLabel: string;
  prepTimeSuffix: string;
  ingredientsTitle: string;
  ingredientsHint: string;
  missingBtn: string;
  usingAltBtn: string;
  altPrefix: string;
  stepsTitle: string;
  usageTitle: string;
  precautionsTitle: string;
  doctorWarningTitle: string;
  doctorWarningLead: string;
  saveRemedy: string;
  savedRemedy: string;
  noSearchResultsTitle: string;
  noSearchResultsBody: string;
  resetAllBtn: string;
  swapsEyebrow: string;
  swapsTitle: string;
  swapsSubtitle: string;
  swapsSearchPlaceholder: string;
  swapsColOriginal: string;
  swapsColSubstitute: string;
  swapsColRatio: string;
  swapsColBestFor: string;
  safetyEyebrow: string;
  safetyTitle: string;
  safetySubtitle: string;
  safetyCards: {
    title: string;
    body: string;
  }[];
  emergencyTitle: string;
  emergencyList: string[];
  footerDisclaimer: string;
  footerCopyright: string;
  menuLabel: string;
  closeLabel: string;
  remediesCountSuffix: string;
  symptomsCountSuffix: string;

  // 1. Smart Ingredient Matcher
  ingMatcherEyebrow: string;
  ingMatcherTitle: string;
  ingMatcherSubtitle: string;
  ingSearchPlaceholder: string;
  ingSelectStaples: string;
  ingClearAll: string;
  ingSelectedCount: string;
  ingReadyHeading: string;
  ingAlmostHeading: string;
  ingEmptyPromptTitle: string;
  ingEmptyPromptBody: string;
  ingNoMatchTitle: string;
  ingNoMatchBody: string;
  ingAllAvailableLabel: string;
  ingUsingSwapLabel: string;
  ingMissingOneLabel: string;
  ingViewRemedyBtn: string;
  ingHideDetailsBtn: string;
  ingOpenInFinderBtn: string;
  ingStep1ProblemLabel: string;
  ingProblemInputPlaceholder: string;
  ingStep2SelectLabel: string;
  ingRecommendedForProblem: string;
  ingOtherPantryLabel: string;
  ingLinkedProblemPrefix: string;
  ingBrowseAllBtn: string;
  ingFilterByProblemBtn: string;
  ingNeedsMoreHeading: string;
  ingMissingListLabel: string;
  finderCheckIngredientsBtn: string;

  // 2. Symptom Checker
  symCheckerEyebrow: string;
  symCheckerTitle: string;
  symCheckerSubtitle: string;
  symStepSymptoms: string;
  symStepDuration: string;
  symStepSeverity: string;
  symStepContext: string;
  symClearBtn: string;
  symDurations: { id: 'under_24h' | '1_2_days' | '3_5_days' | 'over_5_days'; label: string }[];
  symSeverities: {
    id: 'mild' | 'moderate' | 'severe';
    label: string;
    desc: string;
  }[];
  symContexts: {
    id: 'infant_under_1' | 'pregnant' | 'chronic_meds';
    label: string;
  }[];
  symEmptyTitle: string;
  symEmptyBody: string;
  symGuidanceUrgentTitle: string;
  symGuidanceUrgentBody: string;
  symGuidanceCautionTitle: string;
  symGuidanceCautionBody: string;
  symGuidanceHomeTitle: string;
  symGuidanceHomeBody: string;
  symInfantWarning: string;
  symPregnantWarning: string;
  symChronicWarning: string;
  symMatchedCareTitle: string;
  symOpenConditionBtn: string;

  // 3. Smart Medication Reminder
  medEyebrow: string;
  medTitle: string;
  medSubtitle: string;
  medSafetyBannerTitle: string;
  medSafetyBannerBody: string;
  medNotifLabel: string;
  medNotifEnableBtn: string;
  medNotifGranted: string;
  medNotifDenied: string;
  medNotifTestBtn: string;
  medSoundLabel: string;
  medFormTitle: string;
  medNameLabel: string;
  medNamePlaceholder: string;
  medDosageLabel: string;
  medDosagePlaceholder: string;
  medFreqLabel: string;
  medFreqOptions: { id: 'once' | 'twice' | 'thrice' | 'custom'; label: string }[];
  medTimesLabel: string;
  medAddTimeBtn: string;
  medMealLabel: string;
  medMealOptions: { id: 'before_food' | 'after_food' | 'anytime' | 'as_directed'; label: string }[];
  medDoctorLabel: string;
  medDoctorPlaceholder: string;
  medSubmitBtn: string;
  medDueAlertTitle: string;
  medScheduleTitle: string;
  medNoMedsTitle: string;
  medNoMedsBody: string;
  medTodayDosesTitle: string;
  medActionTaken: string;
  medActionSkipped: string;
  medActionSnooze: string;
  medSnoozedUntil: string;
  medStatusPending: string;
  medStatusTaken: string;
  medStatusSkipped: string;
  medStatusSnoozed: string;
  medPauseBtn: string;
  medResumeBtn: string;
  medDeleteBtn: string;
  medHistoryTitle: string;
  medHistoryEmpty: string;
  medHistoryClearBtn: string;
  medHistoryCols: {
    time: string;
    medicine: string;
    dosage: string;
    scheduled: string;
    status: string;
  };

  // 4. Smart Search Identification & Doctor Consultation Directory
  searchIdentifiedBasicTitle: string;
  searchIdentifiedBasicBody: string;
  searchBeyondBasicTitle: string;
  searchBeyondBasicEmergencyNote: string;
  searchSuggestedDoctorsLabel: string;
  searchConnectDoctorsBtn: string;
  searchUnrecognizedTitle: string;
  searchUnrecognizedBody: string;
  contactDoctorForConditionBtn: string;
  docEyebrow: string;
  docTitle: string;
  docSubtitle: string;
  docFilterAll: string;
  docSuggestedHeading: string;
  docSuggestedClear: string;
  docYearsExp: string;
  docLanguagesLabel: string;
  docHoursLabel: string;
  docCallBtn: string;
  docEmailBtn: string;
  docBookBtn: string;
  docModalTitle: string;
  docModalSubtitle: string;
  docFormPatientName: string;
  docFormPatientNamePlaceholder: string;
  docFormPhone: string;
  docFormPhonePlaceholder: string;
  docFormSlot: string;
  docFormSlotOptions: { id: string; label: string }[];
  docFormReason: string;
  docFormReasonPlaceholder: string;
  docFormSubmitBtn: string;
  docFormCancelBtn: string;
  docRequestsHeading: string;
  docRequestConfirmedBadge: string;
  docEmergencyCallout: string;
  stepProgressLabel: string;
  prevStepLabel: string;
  nextStepLabel: string;
  backToOverviewBtn: string;
  stepLabels: {
    overview: string;
    finder: string;
    ingredients: string;
    symptoms: string;
    doctors: string;
    med_reminder: string;
    safety: string;
  };
}

export const translations: Record<'en' | 'te', UITranslations> = {
  en: {
    brandName: 'HomeVeda',
    navFinder: 'Remedy Finder',
    navIngredientMatcher: 'Ingredients',
    navSymptomChecker: 'Symptom Check',
    navMedReminder: 'Med Reminder',
    navDoctors: 'Doctors',
    navConditions: 'Care Categories',
    navSwaps: 'Pantry Swaps',
    navSafety: 'Safety Guide',
    switchLangLabel: 'తెలుగు',
    heroEyebrow: 'Traditional Kitchen Care · Evidence-Informed Safety',
    heroTitle: 'Gentle home remedies from what is already in your kitchen.',
    heroSubtitle:
      'Select your health problem and specific symptoms to get step-by-step preparation instructions, safe usage guidance, kitchen ingredient substitutes, and clear warnings on when to see a doctor.',
    heroPrimaryCta: 'Find Your Remedy',
    heroSecondaryCta: 'View Safety Rules',
    heroQuickLabel: 'Common checks:',
    heroSafetyNote: 'For mild everyday discomfort only. Never delays urgent medical care.',
    pillarsEyebrow: 'Care Categories',
    pillarsTitle: 'Focused home care across everyday discomforts',
    pillarsSubtitle:
      'Choose a care category below or use the interactive symptom matcher to narrow down the right preparation.',
    pillarExploreBtn: 'Explore remedies',
    finderEyebrow: 'Interactive Remedy Matcher',
    finderTitle: 'Select your problem & symptoms',
    finderSubtitle:
      'Pick a condition, check the symptoms you are feeling, and swap out any ingredient missing from your kitchen.',
    searchPlaceholder: 'Search cold, cough, knee pain, acidity...',
    clearSearch: 'Clear',
    savedFilterBtn: 'Saved',
    allConditionsLabel: 'All Problems',
    step1Label: '1. Choose Health Problem',
    step2Label: '2. Refine Your Symptoms (Optional)',
    step2Helper: 'Select one or more symptoms to prioritize the best-fitting remedies:',
    clearSymptoms: 'Reset symptoms',
    selectAllSymptoms: 'Select all',
    matchingTitle: 'Recommended Home Remedies',
    showingAllNotice: 'Showing all remedies for this condition',
    matchedSymptomsLabel: 'Fits',
    ofLabel: 'of',
    prepTimeSuffix: 'min prep',
    ingredientsTitle: 'Ingredients Needed',
    ingredientsHint: 'Missing something? Tap "Not at home?" to see a safe substitute.',
    missingBtn: 'Not at home?',
    usingAltBtn: 'Using substitute',
    altPrefix: 'Substitute:',
    stepsTitle: 'Preparation Steps',
    usageTitle: 'How & When to Use',
    precautionsTitle: 'Precautions & Who Should Avoid',
    doctorWarningTitle: 'When to See a Doctor Immediately',
    doctorWarningLead: 'Stop home care and seek qualified medical attention if you notice any of these signs:',
    saveRemedy: 'Save remedy',
    savedRemedy: 'Saved',
    noSearchResultsTitle: 'No matching health problem found',
    noSearchResultsBody: 'Try searching for a simple term like cold, cough, fever, throat, knee, stomach, or headache.',
    resetAllBtn: 'Show all problems',
    swapsEyebrow: 'Kitchen Substitutions',
    swapsTitle: 'Missing an ingredient at home?',
    swapsSubtitle:
      'You do not need every herb on hand. Use these practical, safe kitchen alternatives when preparing remedies.',
    swapsSearchPlaceholder: 'Filter ingredients (e.g., honey, tulsi, ginger)...',
    swapsColOriginal: 'If you are out of',
    swapsColSubstitute: 'Use instead',
    swapsColRatio: 'Suggested amount',
    swapsColBestFor: 'Works best for',
    safetyEyebrow: 'Medical Safety First',
    safetyTitle: 'Safe boundaries for home care',
    safetySubtitle:
      'Home remedies comfort mild, everyday issues—they are never a substitute for clinical diagnosis, prescriptions, or emergency treatment.',
    safetyCards: [
      {
        title: 'Infants & Young Children',
        body: 'Never give honey to babies under 1 year old (risk of infant botulism). Avoid strong essential oils, concentrated spice decoctions, or aspirin-like herbs in children without a pediatrician’s advice.',
      },
      {
        title: 'Pregnancy & Chronic Conditions',
        body: 'If you are pregnant, breastfeeding, diabetic, hypertensive, or taking blood thinners, consult your doctor before taking concentrated herbs like fenugreek, licorice, garlic, or turmeric supplements.',
      },
      {
        title: 'Allergy & Patch Testing',
        body: 'Before applying any warm oil, turmeric paste, or aloe vera gel over a knee or skin area, test a small pea-sized amount on your inner forearm and wait 15 minutes for redness or itching.',
      },
    ],
    emergencyTitle: 'Do Not Rely on Home Remedies — Seek Medical Care Right Away If You Have:',
    emergencyList: [
      'High fever above 102°F (38.9°C), or any fever in a baby under 3 months old',
      'Difficulty breathing, wheezing, chest pain, or bluish lips',
      'Severe throat pain with inability to swallow fluids or drooling',
      'Stiff neck, sudden severe headache, confusion, or blurred vision',
      'Persistent vomiting, blood in stool/vomit, or sharp lower-right abdominal pain',
      'Hot, red, visibly swollen joint that cannot bear weight, or deep/blistering burns',
      'Symptoms that worsen or fail to improve after 48–72 hours of gentle care',
    ],
    footerDisclaimer:
      'Educational Wellness Notice: HomeVeda shares traditional household comfort practices for minor, self-limiting ailments. Content is informational only and does not constitute medical advice, diagnosis, or treatment. Always consult a licensed physician for persistent, severe, or uncertain symptoms.',
    footerCopyright: 'HomeVeda · Gentle Kitchen Care Guide',
    menuLabel: 'Menu',
    closeLabel: 'Close',
    remediesCountSuffix: 'remedies',
    symptomsCountSuffix: 'symptoms',

    // 1. Smart Ingredient Matcher
    ingMatcherEyebrow: 'Smart Ingredient Matcher',
    ingMatcherTitle: 'Find remedies from what is in your kitchen right now',
    ingMatcherSubtitle:
      'Tap the herbs, spices, and household staples you currently have at home. HomeVeda checks both direct ingredients and safe kitchen substitutes.',
    ingSearchPlaceholder: 'Filter kitchen ingredients (e.g., ginger, honey, turmeric)...',
    ingSelectStaples: 'Select common basics',
    ingClearAll: 'Clear selection',
    ingSelectedCount: 'selected',
    ingReadyHeading: 'Ready to prepare now',
    ingAlmostHeading: 'Almost ready (missing 1 item — substitute shown)',
    ingEmptyPromptTitle: 'Select ingredients from your kitchen',
    ingEmptyPromptBody:
      'Pick 2 or more ingredients on the left (or tap "Select common basics") to see which home-care remedies you can prepare immediately.',
    ingNoMatchTitle: 'No complete match yet',
    ingNoMatchBody:
      'Try adding basic items like warm water, salt, ginger, turmeric, or cumin to unlock matching home-care preparations.',
    ingAllAvailableLabel: 'All ingredients ready',
    ingUsingSwapLabel: 'Ready using substitute:',
    ingMissingOneLabel: 'Missing:',
    ingViewRemedyBtn: 'Show steps & precautions',
    ingHideDetailsBtn: 'Hide details',
    ingOpenInFinderBtn: 'Open in Remedy Finder',
    ingStep1ProblemLabel: '1. Enter or select your health problem',
    ingProblemInputPlaceholder: 'Enter problem (e.g., cold, cough, knee pain, acidity, migraine)...',
    ingStep2SelectLabel: '2. Select ingredients available at home',
    ingRecommendedForProblem: 'Relevant ingredients for',
    ingOtherPantryLabel: 'Other kitchen items',
    ingLinkedProblemPrefix: 'Showing remedies for:',
    ingBrowseAllBtn: 'Check all problems instead',
    ingFilterByProblemBtn: 'Link back to selected problem',
    ingNeedsMoreHeading: 'More remedies for this problem (additional ingredients needed)',
    ingMissingListLabel: 'Also needed:',
    finderCheckIngredientsBtn: 'Match with my kitchen ingredients',

    // 2. Symptom Checker
    symCheckerEyebrow: 'Symptom Checker',
    symCheckerTitle: 'Check symptoms, duration & severity for safety guidance',
    symCheckerSubtitle:
      'Select what you are experiencing, how long it has lasted, and how intense it feels. HomeVeda highlights safety guidance first and suggests gentle home comfort options when appropriate.',
    symStepSymptoms: '1. What symptoms are you experiencing?',
    symStepDuration: '2. How long have these lasted?',
    symStepSeverity: '3. How severe are the symptoms?',
    symStepContext: '4. Any special health context? (Optional)',
    symClearBtn: 'Reset checker',
    symDurations: [
      { id: 'under_24h', label: 'Less than 24 hours' },
      { id: '1_2_days', label: '1–2 days' },
      { id: '3_5_days', label: '3–5 days' },
      { id: 'over_5_days', label: 'More than 5 days' },
    ],
    symSeverities: [
      {
        id: 'mild',
        label: 'Mild',
        desc: 'Noticeable discomfort, still able to eat, drink, and rest normally.',
      },
      {
        id: 'moderate',
        label: 'Moderate',
        desc: 'Uncomfortable enough to disturb sleep, appetite, or daily routine.',
      },
      {
        id: 'severe',
        label: 'Severe',
        desc: 'High fever (>102°F), intense pain, shortness of breath, or inability to keep fluids down.',
      },
    ],
    symContexts: [
      { id: 'infant_under_1', label: 'Child under 1 year old' },
      { id: 'pregnant', label: 'Pregnant or breastfeeding' },
      { id: 'chronic_meds', label: 'Diabetes, high BP, or regular prescription medicine' },
    ],
    symEmptyTitle: 'Select one or more symptoms to begin',
    symEmptyBody:
      'Choose your symptoms, duration, and severity on the left to receive tailored safety guidance and matching comfort steps.',
    symGuidanceUrgentTitle: 'Medical Evaluation Strongly Recommended',
    symGuidanceUrgentBody:
      'Based on the severity or duration you selected, please do not rely on home remedies alone. Consult a doctor or visit a clinic promptly for a proper diagnosis.',
    symGuidanceCautionTitle: 'Monitor Closely & Seek Care If No Improvement Soon',
    symGuidanceCautionBody:
      'Your symptoms have lasted several days or feel moderate. Gentle home comfort can support rest and hydration, but schedule a doctor visit if there is no clear improvement within 24 hours.',
    symGuidanceHomeTitle: 'Suitable for Gentle Home Comfort & Monitoring',
    symGuidanceHomeBody:
      'Mild, short-duration symptoms can often be eased with rest, hydration, and simple kitchen care. Stop home care and see a doctor if symptoms worsen or last past 3 days.',
    symInfantWarning:
      'Infant Safety: Do not give honey, strong spices, or herbal teas to children under 1 year old. Contact a pediatrician for fever or breathing discomfort in babies.',
    symPregnantWarning:
      'Pregnancy / Nursing Caution: Avoid concentrated herbal decoctions (such as fenugreek or strong spice blends) without checking with your obstetrician.',
    symChronicWarning:
      'Chronic Medication Note: Watch honey/jaggery if diabetic, omit salt rinses/black salt if hypertensive, and avoid taking concentrated ginger/turmeric alongside blood thinners without medical advice.',
    symMatchedCareTitle: 'Related Home-Care Information',
    symOpenConditionBtn: 'See full remedies & precautions',

    // 3. Smart Medication Reminder
    medEyebrow: 'Smart Medication Reminder',
    medTitle: 'Track your doctor-prescribed medicines & timings',
    medSubtitle:
      'Organize the medicines prescribed by your doctor, receive scheduled browser and in-app alerts, and log each dose as Taken, Skipped, or Snoozed.',
    medSafetyBannerTitle: 'Strict Prescription Boundary',
    medSafetyBannerBody:
      'HomeVeda never suggests, recommends, or modifies medicines or dosages. Enter only the exact medicine name, dosage, frequency, and schedule prescribed by your licensed doctor.',
    medNotifLabel: 'Scheduled Alerts',
    medNotifEnableBtn: 'Enable Browser Notifications',
    medNotifGranted: 'Browser notifications enabled',
    medNotifDenied: 'Browser notifications blocked — in-app alerts remain active',
    medNotifTestBtn: 'Test Alert',
    medSoundLabel: 'Chime sound',
    medFormTitle: 'Add Prescribed Medicine',
    medNameLabel: 'Medicine Name (as prescribed)',
    medNamePlaceholder: 'e.g., Prescribed Antibiotic / Vitamin D3',
    medDosageLabel: 'Prescribed Dosage',
    medDosagePlaceholder: 'e.g., 1 tablet (500 mg) or 5 ml',
    medFreqLabel: 'Prescribed Frequency',
    medFreqOptions: [
      { id: 'once', label: 'Once daily' },
      { id: 'twice', label: 'Twice daily' },
      { id: 'thrice', label: '3 times daily' },
      { id: 'custom', label: 'Custom times' },
    ],
    medTimesLabel: 'Scheduled Timings',
    medAddTimeBtn: 'Add time',
    medMealLabel: 'Doctor’s Timing Instruction',
    medMealOptions: [
      { id: 'after_food', label: 'After food' },
      { id: 'before_food', label: 'Before food' },
      { id: 'anytime', label: 'Anytime / with water' },
      { id: 'as_directed', label: 'As directed by doctor' },
    ],
    medDoctorLabel: 'Prescribing Doctor / Note (Optional)',
    medDoctorPlaceholder: 'e.g., Dr. Rao — 5-day course',
    medSubmitBtn: 'Save Medication Schedule',
    medDueAlertTitle: 'Medication Dose Due Now',
    medScheduleTitle: 'Today’s Medication Schedule',
    medNoMedsTitle: 'No prescribed medicines added yet',
    medNoMedsBody:
      'Use the form on the left to add medicines prescribed by your doctor and receive timely reminders.',
    medTodayDosesTitle: 'Scheduled Doses Today',
    medActionTaken: 'Taken',
    medActionSkipped: 'Skipped',
    medActionSnooze: 'Snooze 10m',
    medSnoozedUntil: 'Snoozed until',
    medStatusPending: 'Upcoming / Pending',
    medStatusTaken: 'Taken',
    medStatusSkipped: 'Skipped',
    medStatusSnoozed: 'Snoozed',
    medPauseBtn: 'Pause',
    medResumeBtn: 'Resume',
    medDeleteBtn: 'Remove',
    medHistoryTitle: 'Medication History Log',
    medHistoryEmpty: 'No doses logged yet. Mark a scheduled dose as Taken, Skipped, or Snoozed to build your history.',
    medHistoryClearBtn: 'Clear history',
    medHistoryCols: {
      time: 'Date & Logged Time',
      medicine: 'Medicine',
      dosage: 'Dosage',
      scheduled: 'Scheduled',
      status: 'Status',
    },
    searchIdentifiedBasicTitle: 'Identified mild problem:',
    searchIdentifiedBasicBody: 'Home-care remedies are shown below. Watch the red-flag signs and consult a doctor if symptoms worsen.',
    searchBeyondBasicTitle: 'Problem Overview & Medical Caution',
    searchBeyondBasicEmergencyNote: 'If this is an acute emergency (chest pain, severe breathing trouble, fainting), call local emergency services (108 / 112) or visit the nearest hospital immediately.',
    searchSuggestedDoctorsLabel: 'Recommended Specialists to Contact:',
    searchConnectDoctorsBtn: 'Connect with Suggested Doctor',
    searchUnrecognizedTitle: 'Problem Overview & Doctor Guidance',
    searchUnrecognizedBody: 'Read the overview for your entered problem and connect with a recommended doctor below.',
    contactDoctorForConditionBtn: 'Consult a Doctor for This Condition',
    docEyebrow: 'Connected Care Network',
    docTitle: 'Connect with a doctor when you need clinical care',
    docSubtitle:
      'When your search or symptoms go beyond basic kitchen care—or if mild symptoms persist—reach out directly to a specialist below by phone, email, or callback request.',
    docFilterAll: 'All Specialists',
    docSuggestedHeading: 'Suggested for your recent check:',
    docSuggestedClear: 'Show all doctors',
    docYearsExp: 'yrs experience',
    docLanguagesLabel: 'Languages:',
    docHoursLabel: 'Hours:',
    docCallBtn: 'Call Clinic',
    docEmailBtn: 'Email',
    docBookBtn: 'Request Consult',
    docModalTitle: 'Request Doctor Consultation',
    docModalSubtitle: 'Share your contact details and symptoms so the clinic can connect with you.',
    docFormPatientName: 'Your Full Name',
    docFormPatientNamePlaceholder: 'e.g., Ramesh Kumar',
    docFormPhone: 'Phone / WhatsApp Number',
    docFormPhonePlaceholder: 'e.g., +91 98765 43210',
    docFormSlot: 'Preferred Consultation Time',
    docFormSlotOptions: [
      { id: 'asap', label: 'As soon as possible (Priority callback)' },
      { id: 'morning', label: 'Morning (9:00 AM – 12:30 PM)' },
      { id: 'afternoon', label: 'Afternoon (2:00 PM – 5:00 PM)' },
      { id: 'evening', label: 'Evening (5:00 PM – 8:00 PM)' },
    ],
    docFormReason: 'Problem / Symptoms Summary',
    docFormReasonPlaceholder: 'Briefly describe symptoms, duration, and fever reading if any...',
    docFormSubmitBtn: 'Send Consultation Request',
    docFormCancelBtn: 'Cancel',
    docRequestsHeading: 'Your Submitted Consultation Requests',
    docRequestConfirmedBadge: 'Request Logged',
    docEmergencyCallout: 'For life-threatening emergencies (chest pain, severe breathlessness, unconsciousness), call 108 / 112 immediately rather than waiting for a callback.',
    stepProgressLabel: 'Step',
    prevStepLabel: 'Previous',
    nextStepLabel: 'Next',
    backToOverviewBtn: 'Back to Start',
    stepLabels: {
      overview: 'Overview',
      finder: 'Remedy Finder',
      ingredients: 'Ingredients',
      symptoms: 'Symptom Check',
      doctors: 'Doctors',
      med_reminder: 'Med Reminder',
      safety: 'Swaps & Safety',
    },
  },
  te: {
    brandName: 'హోమ్‌వేద',
    navFinder: 'చిట్కాలు',
    navIngredientMatcher: 'పదార్థాలు',
    navSymptomChecker: 'లక్షణాల పరీక్ష',
    navMedReminder: 'మందుల అలారం',
    navDoctors: 'వైద్యులు',
    navConditions: 'విభాగాలు',
    navSwaps: 'ప్రత్యామ్నాయాలు',
    navSafety: 'భద్రత',
    switchLangLabel: 'English',
    heroEyebrow: 'సంప్రదాయ ఇంటి వైద్యం · సురక్షితమైన సూచనలు',
    heroTitle: 'మీ వంటగదిలోని వస్తువులతోనే చిన్న ఆరోగ్య సమస్యలకు సులభమైన ఇంటి చిట్కాలు.',
    heroSubtitle:
      'మీ ఆరోగ్య సమస్య మరియు లక్షణాలను ఎంచుకోండి. తయారీ విధానం, వాడే పద్ధతి, జాగ్రత్తలు, ఇంట్లో ఒక వస్తువు లేకపోతే దాని బదులు వాడదగిన ప్రత్యామ్నాయం మరియు వైద్యుడిని ఎప్పుడు కలవాలో స్పష్టంగా తెలుసుకోండి.',
    heroPrimaryCta: 'చిట్కా కనుగొనండి',
    heroSecondaryCta: 'భద్రతా నియమాలు',
    heroQuickLabel: 'సాధారణ సమస్యలు:',
    heroSafetyNote: 'తేలికపాటి రోజువారీ సమస్యలకు మాత్రమే. అత్యవసర వైద్య చికిత్సకు ప్రత్యామ్నాయం కాదు.',
    pillarsEyebrow: 'ఆరోగ్య విభాగాలు',
    pillarsTitle: 'రోజువారీ చిన్న సమస్యలకు సులభమైన ఇంటి సంరక్షణ',
    pillarsSubtitle:
      'క్రింది విభాగాన్ని ఎంచుకోండి లేదా మీ లక్షణాలకు తగిన చిట్కాను కనుగొనడానికి శోధన సాధనాన్ని ఉపయోగించండి.',
    pillarExploreBtn: 'చిట్కాలు చూడండి',
    finderEyebrow: 'లక్షణాల ఆధారిత చిట్కాల ఎంపిక',
    finderTitle: 'మీ ఆరోగ్య సమస్య & లక్షణాలను ఎంచుకోండి',
    finderSubtitle:
      'మీ సమస్యను ఎంచుకుని, మీకున్న లక్షణాలపై టిక్ చేయండి. ఇంట్లో ఏదైనా వస్తువు లేకపోతే ప్రత్యామ్నాయాన్ని చూడండి.',
    searchPlaceholder: 'జలుబు, దగ్గు, మోకాళ్ల నొప్పి, అజీర్ణం అని వెతకండి...',
    clearSearch: 'తొలగించు',
    savedFilterBtn: 'సేవ్ చేసినవి',
    allConditionsLabel: 'అన్ని సమస్యలు',
    step1Label: '1. ఆరోగ్య సమస్యను ఎంచుకోండి',
    step2Label: '2. మీ లక్షణాలను ఎంచుకోండి (ఐచ్ఛికం)',
    step2Helper: 'మీకు ఉన్న లక్షణాలను ఎంచుకుంటే వాటికి సరిపోయే చిట్కాలు ముందుగా కనిపిస్తాయి:',
    clearSymptoms: 'లక్షణాలు క్లియర్ చేయండి',
    selectAllSymptoms: 'అన్నీ ఎంచుకోండి',
    matchingTitle: 'సూచించిన ఇంటి చిట్కాలు',
    showingAllNotice: 'ఈ సమస్యకు సంబంధించిన అన్ని చిట్కాలు చూపబడుతున్నాయి',
    matchedSymptomsLabel: 'సరిపోతుంది:',
    ofLabel: '/',
    prepTimeSuffix: 'నిమి తయారీ',
    ingredientsTitle: 'కావలసిన పదార్థాలు',
    ingredientsHint: 'ఏదైనా ఇంట్లో లేదా? ప్రత్యామ్నాయం చూడటానికి "ఇంట్లో లేదా?" నొక్కండి.',
    missingBtn: 'ఇంట్లో లేదా?',
    usingAltBtn: 'ప్రత్యామ్నాయం చూపుతోంది',
    altPrefix: 'బదులుగా:',
    stepsTitle: 'తయారీ విధానం',
    usageTitle: 'వాడే విధానం & సమయం',
    precautionsTitle: 'జాగ్రత్తలు & ఎవరు వాడకూడదు',
    doctorWarningTitle: 'వెంటనే వైద్యుడిని ఎప్పుడు కలవాలి',
    doctorWarningLead: 'ఈ క్రింది లక్షణాలు కనిపిస్తే ఇంటి చిట్కాలు ఆపి, వెంటనే డాక్టర్‌ను సంప్రదించండి:',
    saveRemedy: 'సేవ్ చేయండి',
    savedRemedy: 'సేవ్ అయింది',
    noSearchResultsTitle: 'సరిపోయే సమస్య కనుగొనబడలేదు',
    noSearchResultsBody: 'జలుబు, దగ్గు, జ్వరం, గొంతు నొప్పి, మోకాళ్ల నొప్పి, కడుపు ఉబ్బరం లేదా తలనొప్పి వంటి పదాలు ప్రయత్నించండి.',
    resetAllBtn: 'అన్ని సమస్యలు చూపండి',
    swapsEyebrow: 'వంటగది ప్రత్యామ్నాయాలు',
    swapsTitle: 'ఇంట్లో ఒక పదార్థం అందుబాటులో లేదా?',
    swapsSubtitle:
      'ప్రతి మూలిక ఇంట్లో ఉండాల్సిన అవసరం లేదు. ఒక వస్తువు లేనప్పుడు సురక్షితంగా ఈ ప్రత్యామ్నాయాలను వాడవచ్చు.',
    swapsSearchPlaceholder: 'పదార్థాన్ని వెతకండి (ఉదా: తేనె, తులసి, అల్లం)...',
    swapsColOriginal: 'ఇది ఇంట్లో లేకపోతే',
    swapsColSubstitute: 'బదులుగా ఇది వాడండి',
    swapsColRatio: 'మోతాదు',
    swapsColBestFor: 'దేనికి బాగా పనిచేస్తుంది',
    safetyEyebrow: 'వైద్య భద్రత మొదట',
    safetyTitle: 'ఇంటి చిట్కాల సురక్షిత పరిమితులు',
    safetySubtitle:
      'ఇంటి చిట్కాలు చిన్న సమస్యల నుండి ఉపశమనానికి మాత్రమే — ఇవి వైద్య పరీక్షలకు లేదా మందులకు ప్రత్యామ్నాయం కావు.',
    safetyCards: [
      {
        title: 'చిన్న పిల్లలు & శిశువులు',
        body: '1 సంవత్సరం లోపు పిల్లలకు ఎట్టి పరిస్థితుల్లోనూ తేనె ఇవ్వకండి. చిన్న పిల్లలకు ఘాటైన మసాలా కషాయాలు లేదా నూనెలు ఇచ్చే ముందు పిల్లల వైద్యుడిని సంప్రదించండి.',
      },
      {
        title: 'గర్భిణీలు & దీర్ఘకాలిక వ్యాధులు',
        body: 'గర్భిణీలు, పాలిచ్చే తల్లులు, షుగర్, బీపీ లేదా రక్తం పలుచబడే మందులు వాడేవారు మెంతులు, యష్టిమధు, వెల్లుల్లి లేదా పసుపు ఎక్కువ మోతాదులో తీసుకునే ముందు డాక్టర్‌ను అడగండి.',
      },
      {
        title: 'చర్మ పరీక్ష (Patch Test)',
        body: 'మోకాలు లేదా చర్మంపై గోరువెచ్చని నూనె, పసుపు లేపనం లేదా కలబంద రాసే ముందు, మోచేతి లోపలి భాగంలో కొద్దిగా రాసి 15 నిమిషాలు ఎరుపు లేదా దురద రాకుండా చూసుకోండి.',
      },
    ],
    emergencyTitle: 'ఇంటి చిట్కాలపై ఆధారపడకండి — ఈ లక్షణాలు ఉంటే వెంటనే డాక్టర్ వద్దకు వెళ్లండి:',
    emergencyList: [
      '102°F (38.9°C) కంటే ఎక్కువ జ్వరం, లేదా 3 నెలల లోపు శిశువుకు ఏ స్థాయిలోనైనా జ్వరం',
      'శ్వాస తీసుకోవడంలో ఇబ్బంది, గురక, ఛాతీ నొప్పి లేదా పెదాలు నీలంగా మారడం',
      'నీరు కూడా మింగలేనంత తీవ్రమైన గొంతు నొప్పి',
      'మెడ బిగుసుకుపోవడం, అకస్మాత్తుగా తీవ్రమైన తలనొప్పి, మగత లేదా చూపు మసకబారడం',
      'ఆగని వాంతులు, వాంతి/మలంలో రక్తం లేదా పొత్తికడుపు కుడివైపు తీవ్రమైన నొప్పి',
      'వాపుతో ఎర్రగా ఉండి బరువు మోయలేని కీలు, లేదా లోతైన/బొబ్బలు వచ్చిన కాలిన గాయాలు',
      '48–72 గంటలు ఇంటి సంరక్షణ చేసినా తగ్గని లేదా మరింత పెరుగుతున్న లక్షణాలు',
    ],
    footerDisclaimer:
      'విద్యాపరమైన ఆరోగ్య సమాచారం: హోమ్‌వేద తేలికపాటి రోజువారీ అసౌకర్యాలకు సంప్రదాయ ఇంటి పద్ధతులను అందిస్తుంది. ఇది వైద్య సలహా లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు. తీవ్రమైన లేదా దీర్ఘకాలిక లక్షణాలకు తప్పకుండా అర్హత గల వైద్యుడిని సంప్రదించండి.',
    footerCopyright: 'హోమ్‌వేద · సురక్షిత ఇంటి సంరక్షణ మార్గదర్శి',
    menuLabel: 'మెనూ',
    closeLabel: 'మూసివేయి',
    remediesCountSuffix: 'చిట్కాలు',
    symptomsCountSuffix: 'లక్షణాలు',

    // 1. Smart Ingredient Matcher
    ingMatcherEyebrow: 'స్మార్ట్ పదార్థాల శోధన',
    ingMatcherTitle: 'ప్రస్తుతం మీ వంటగదిలో ఉన్న వస్తువులతో చిట్కాలను కనుగొనండి',
    ingMatcherSubtitle:
      'మీ ఇంట్లో ఉన్న ఆకులు, మసాలాలు మరియు వస్తువులను ఎంచుకోండి. నేరుగా సరిపోయే చిట్కాలు మరియు ప్రత్యామ్నాయాలతో తయారు చేయగల చిట్కాలను హోమ్‌వేద చూపుతుంది.',
    ingSearchPlaceholder: 'పదార్థాన్ని వెతకండి (ఉదా: అల్లం, తేనె, పసుపు)...',
    ingSelectStaples: 'సాధారణ వస్తువులు ఎంచుకోండి',
    ingClearAll: 'అన్నీ తొలగించండి',
    ingSelectedCount: 'ఎంచుకున్నవి',
    ingReadyHeading: 'ఇప్పుడే తయారు చేయదగినవి',
    ingAlmostHeading: 'దాదాపు సిద్ధం (ఒక్క వస్తువు తక్కువ — ప్రత్యామ్నాయం అందుబాటులో ఉంది)',
    ingEmptyPromptTitle: 'మీ వంటగదిలోని వస్తువులను ఎంచుకోండి',
    ingEmptyPromptBody:
      'ఎడమవైపు ఉన్న 2 లేదా అంతకంటే ఎక్కువ పదార్థాలను ఎంచుకుని, మీరు ఇప్పుడే ఏ ఇంటి చిట్కాలు తయారు చేయగలరో చూడండి.',
    ingNoMatchTitle: 'పూర్తిగా సరిపోయే చిట్కాలు ఇంకా లేవు',
    ingNoMatchBody:
      'అల్లం, పసుపు, ఉప్పు, జీలకర్ర, గోరువెచ్చని నీరు వంటి సాధారణ పదార్థాలను కూడా జోడించి ప్రయత్నించండి.',
    ingAllAvailableLabel: 'అన్ని పదార్థాలు ఉన్నాయి',
    ingUsingSwapLabel: 'ప్రత్యామ్నాయంతో సిద్ధం:',
    ingMissingOneLabel: 'లేని పదార్థం:',
    ingViewRemedyBtn: 'తయారీ & జాగ్రత్తలు చూడండి',
    ingHideDetailsBtn: 'వివరాలు మూసివేయి',
    ingOpenInFinderBtn: 'చిట్కాల విభాగంలో తెరవండి',
    ingStep1ProblemLabel: '1. మీ ఆరోగ్య సమస్యను నమోదు చేయండి లేదా ఎంచుకోండి',
    ingProblemInputPlaceholder: 'సమస్యను టైప్ చేయండి (ఉదా: జలుబు, దగ్గు, మోకాళ్ల నొప్పి, ఎసిడిటీ)...',
    ingStep2SelectLabel: '2. మీ ఇంట్లో ఉన్న పదార్థాలను ఎంచుకోండి',
    ingRecommendedForProblem: 'ఈ సమస్యకు అవసరమైన పదార్థాలు:',
    ingOtherPantryLabel: 'ఇతర వంటగది వస్తువులు',
    ingLinkedProblemPrefix: 'ఎంచుకున్న సమస్యకు చిట్కాలు:',
    ingBrowseAllBtn: 'అన్ని సమస్యల చిట్కాలు చూడండి',
    ingFilterByProblemBtn: 'ఎంచుకున్న సమస్యకు మాత్రమే చూపండి',
    ingNeedsMoreHeading: 'ఈ సమస్యకు ఇతర చిట్కాలు (మరిన్ని పదార్థాలు అవసరం)',
    ingMissingListLabel: 'ఇంకా కావలసినవి:',
    finderCheckIngredientsBtn: 'ఇంట్లో ఉన్న పదార్థాలతో సరిపోల్చండి',

    // 2. Symptom Checker
    symCheckerEyebrow: 'లక్షణాల పరీక్ష',
    symCheckerTitle: 'లక్షణాలు, వ్యవధి & తీవ్రతను బట్టి సురక్షిత సూచనలు పొందండి',
    symCheckerSubtitle:
      'మీకున్న లక్షణాలు, అవి ఎన్ని రోజులుగా ఉన్నాయి మరియు ఎంత తీవ్రంగా ఉన్నాయో ఎంచుకోండి. ముందుగా వైద్య భద్రతా సూచనలు, అవసరమైనప్పుడు సురక్షిత ఇంటి చిట్కాలు చూపబడతాయి.',
    symStepSymptoms: '1. మీకు ఏ లక్షణాలు ఉన్నాయి?',
    symStepDuration: '2. ఇవి ఎన్ని రోజులుగా ఉన్నాయి?',
    symStepSeverity: '3. లక్షణాల తీవ్రత ఎలా ఉంది?',
    symStepContext: '4. ప్రత్యేక ఆరోగ్య స్థితి ఉందా? (ఐచ్ఛికం)',
    symClearBtn: 'రీసెట్ చేయండి',
    symDurations: [
      { id: 'under_24h', label: '24 గంటల లోపు' },
      { id: '1_2_days', label: '1–2 రోజులు' },
      { id: '3_5_days', label: '3–5 రోజులు' },
      { id: 'over_5_days', label: '5 రోజులకు పైగా' },
    ],
    symSeverities: [
      {
        id: 'mild',
        label: 'తేలికపాటి',
        desc: 'చిన్న అసౌకర్యం మాత్రమే; సాధారణ పనులు, ఆహారం మరియు విశ్రాంతి తీసుకోగలరు.',
      },
      {
        id: 'moderate',
        label: 'మధ్యస్థం',
        desc: 'నిద్ర, ఆకలి లేదా రోజువారీ పనులకు కొంత ఇబ్బందిగా ఉంది.',
      },
      {
        id: 'severe',
        label: 'తీవ్రమైనది',
        desc: 'అధిక జ్వరం (>102°F), తీవ్రమైన నొప్పి, శ్వాస ఇబ్బంది లేదా నీరు కూడా నిలబడకపోవడం.',
      },
    ],
    symContexts: [
      { id: 'infant_under_1', label: '1 సంవత్సరం లోపు శిశువు' },
      { id: 'pregnant', label: 'గర్భిణీ లేదా పాలిచ్చే తల్లి' },
      { id: 'chronic_meds', label: 'షుగర్, బీపీ లేదా నిత్యం మందులు వాడేవారు' },
    ],
    symEmptyTitle: 'ప్రారంభించడానికి ఒకటి లేదా అంతకంటే ఎక్కువ లక్షణాలను ఎంచుకోండి',
    symEmptyBody:
      'మీ లక్షణాలు, రోజుల సంఖ్య మరియు తీవ్రతను ఎంచుకుంటే తగిన భద్రతా మార్గదర్శనం మరియు సంబంధిత సంరక్షణ సూచనలు కనిపిస్తాయి.',
    symGuidanceUrgentTitle: 'వెంటనే వైద్యుడిని సంప్రదించడం చాలా అవసరం',
    symGuidanceUrgentBody:
      'మీరు ఎంచుకున్న తీవ్రత లేదా రోజుల వ్యవధిని బట్టి, కేవలం ఇంటి చిట్కాలపై ఆధారపడకండి. సరైన పరీక్ష కోసం వెంటనే డాక్టర్ లేదా క్లినిక్‌ను సంప్రదించండి.',
    symGuidanceCautionTitle: 'జాగ్రత్తగా గమనించండి — త్వరగా తగ్గకపోతే డాక్టర్‌ను కలవండి',
    symGuidanceCautionBody:
      'లక్షణాలు కొన్ని రోజులుగా ఉన్నాయి లేదా మధ్యస్థ తీవ్రతతో ఉన్నాయి. విశ్రాంతి మరియు హైడ్రేషన్‌కు ఇంటి చిట్కాలు సహాయపడతాయి కానీ 24 గంటల్లో మెరుగుదల లేకపోతే వైద్యుడిని కలవండి.',
    symGuidanceHomeTitle: 'తేలికపాటి ఇంటి సంరక్షణకు అనుకూలం',
    symGuidanceHomeBody:
      'తక్కువ వ్యవధి, తేలికపాటి లక్షణాలకు విశ్రాంతి, గోరువెచ్చని ద్రవాలు మరియు సాధారణ ఇంటి చిట్కాలు ఉపశమనం ఇస్తాయి. లక్షణాలు పెరిగినా లేదా 3 రోజుల్లో తగ్గకపోయినా డాక్టర్‌ను కలవండి.',
    symInfantWarning:
      'శిశువు భద్రత: 1 సంవత్సరం లోపు పిల్లలకు తేనె, ఘాటైన మసాలాలు లేదా కషాయాలు ఇవ్వకండి. జ్వరం లేదా శ్వాస ఇబ్బంది ఉంటే వెంటనే పిల్లల వైద్యుడిని కలవండి.',
    symPregnantWarning:
      'గర్భిణీలు / పాలిచ్చే తల్లులకు సూచన: మెంతులు లేదా ఘాటైన మూలికా కషాయాలు తీసుకునే ముందు మీ వైద్యుడిని సంప్రదించండి.',
    symChronicWarning:
      'దీర్ఘకాలిక మందుల సూచన: షుగర్ ఉంటే తేనె/బెల్లం నియంత్రించండి, బీపీ ఉంటే ఉప్పు పుక్కిలింత/నల్ల ఉప్పు మానండి, రక్తం పలుచబడే మందులతో అల్లం/పసుపు ఎక్కువగా తీసుకోవద్దు.',
    symMatchedCareTitle: 'సంబంధిత ఇంటి సంరక్షణ సమాచారం',
    symOpenConditionBtn: 'పూర్తి చిట్కాలు & జాగ్రత్తలు చూడండి',

    // 3. Smart Medication Reminder
    medEyebrow: 'స్మార్ట్ మందుల అలారం',
    medTitle: 'మీ డాక్టర్ సూచించిన మందులు & సమయాలను ట్రాక్ చేయండి',
    medSubtitle:
      'మీ వైద్యుడు రాసిన మందుల వివరాలను నమోదు చేయండి, సమయానికి నోటిఫికేషన్లు పొందండి మరియు ప్రతి డోసును Taken, Skipped లేదా Snoozed గా నమోదు చేయండి.',
    medSafetyBannerTitle: 'ఖచ్చితమైన వైద్య నియమం',
    medSafetyBannerBody:
      'హోమ్‌వేద ఎప్పుడూ మందులను లేదా వాటి మోతాదులను సూచించదు మరియు మార్చదు. మీ వైద్యుడు సూచించిన ఖచ్చితమైన మందు పేరు, మోతాదు మరియు సమయాలను మాత్రమే ఇక్కడ నమోదు చేయండి.',
    medNotifLabel: 'సమయ నోటిఫికేషన్లు',
    medNotifEnableBtn: 'బ్రౌజర్ నోటిఫికేషన్లు ఆన్ చేయండి',
    medNotifGranted: 'బ్రౌజర్ నోటిఫికేషన్లు ఆన్‌లో ఉన్నాయి',
    medNotifDenied: 'బ్రౌజర్ నోటిఫికేషన్లు ఆఫ్‌లో ఉన్నాయి — యాప్‌లో అలారం పనిచేస్తుంది',
    medNotifTestBtn: 'అలారం పరీక్షించండి',
    medSoundLabel: 'అలారం శబ్దం',
    medFormTitle: 'డాక్టర్ సూచించిన మందును జోడించండి',
    medNameLabel: 'మందు పేరు (డాక్టర్ రాసినది)',
    medNamePlaceholder: 'ఉదా: సూచించిన టాబ్లెట్ / విటమిన్ D3',
    medDosageLabel: 'సూచించిన మోతాదు',
    medDosagePlaceholder: 'ఉదా: 1 టాబ్లెట్ (500 mg) లేదా 5 మి.లీ',
    medFreqLabel: 'రోజుకు ఎన్నిసార్లు',
    medFreqOptions: [
      { id: 'once', label: 'రోజుకు 1 సారి' },
      { id: 'twice', label: 'రోజుకు 2 సార్లు' },
      { id: 'thrice', label: 'రోజుకు 3 సార్లు' },
      { id: 'custom', label: 'సొంత సమయాలు' },
    ],
    medTimesLabel: 'వేసుకునే సమయాలు',
    medAddTimeBtn: 'సమయం జోడించు',
    medMealLabel: 'డాక్టర్ సూచించిన ఆహార నియమం',
    medMealOptions: [
      { id: 'after_food', label: 'భోజనం తర్వాత' },
      { id: 'before_food', label: 'భోజనానికి ముందు' },
      { id: 'anytime', label: 'ఎప్పుడైనా / నీటితో' },
      { id: 'as_directed', label: 'డాక్టర్ చెప్పిన విధంగా' },
    ],
    medDoctorLabel: 'డాక్టర్ పేరు / గమనిక (ఐచ్ఛికం)',
    medDoctorPlaceholder: 'ఉదా: డా. రావు — 5 రోజుల కోర్సు',
    medSubmitBtn: 'షెడ్యూల్ సేవ్ చేయండి',
    medDueAlertTitle: 'ఇప్పుడు మందు వేసుకునే సమయం అయింది',
    medScheduleTitle: 'ఈ రోజు మందుల షెడ్యూల్',
    medNoMedsTitle: 'ఇంకా ఏ మందులు నమోదు చేయలేదు',
    medNoMedsBody:
      'మీ డాక్టర్ సూచించిన మందుల వివరాలను ఎడమవైపు ఫారమ్‌లో నమోదు చేసి సమయానికి అలారం పొందండి.',
    medTodayDosesTitle: 'ఈ రోజు డోసులు',
    medActionTaken: 'వేసుకున్నాను (Taken)',
    medActionSkipped: 'దాటవేశాను (Skipped)',
    medActionSnooze: '10 నిమి ఆపు (Snooze)',
    medSnoozedUntil: 'తదుపరి రిమైండర్:',
    medStatusPending: 'వేసుకోవాల్సి ఉంది',
    medStatusTaken: 'వేసుకున్నారు',
    medStatusSkipped: 'దాటవేశారు',
    medStatusSnoozed: 'స్నూజ్ చేశారు',
    medPauseBtn: 'ఆపు',
    medResumeBtn: 'కొనసాగించు',
    medDeleteBtn: 'తొలగించు',
    medHistoryTitle: 'మందుల చరిత్ర (History)',
    medHistoryEmpty: 'ఇంకా చరిత్ర నమోదు కాలేదు. పైన ఉన్న డోసును Taken, Skipped లేదా Snoozed గా గుర్తించండి.',
    medHistoryClearBtn: 'చరిత్ర క్లియర్ చేయండి',
    medHistoryCols: {
      time: 'తేదీ & సమయం',
      medicine: 'మందు పేరు',
      dosage: 'మోతాదు',
      scheduled: 'సమయం',
      status: 'స్థితి',
    },
    searchIdentifiedBasicTitle: 'గుర్తించిన సాధారణ సమస్య:',
    searchIdentifiedBasicBody: 'తగిన ఇంటి చిట్కాలు క్రింద చూపబడ్డాయి. లక్షణాలు పెరిగితే తప్పకుండా వైద్యుడిని సంప్రదించండి.',
    searchBeyondBasicTitle: 'సమస్య వివరణ & వైద్య హెచ్చరిక',
    searchBeyondBasicEmergencyNote: 'ఛాతీ నొప్పి, తీవ్రమైన శ్వాస ఇబ్బంది లేదా మూర్ఛ వంటి అత్యవసర పరిస్థితి అయితే వెంటనే 108 / 112 కు కాల్ చేయండి లేదా సమీప ఆసుపత్రికి వెళ్లండి.',
    searchSuggestedDoctorsLabel: 'సంప్రదించాల్సిన నిపుణులైన వైద్యులు:',
    searchConnectDoctorsBtn: 'సూచించిన డాక్టర్‌ను సంప్రదించండి',
    searchUnrecognizedTitle: 'సమస్య వివరణ & వైద్య సలహా',
    searchUnrecognizedBody: 'మీరు నమోదు చేసిన సమస్య వివరాలను చూసి క్రింది డాక్టర్‌ను సంప్రదించండి.',
    contactDoctorForConditionBtn: 'ఈ సమస్య కోసం డాక్టర్‌ను సంప్రదించండి',
    docEyebrow: 'వైద్యుల సంప్రదింపు విభాగం',
    docTitle: 'అవసరమైనప్పుడు నిపుణులైన వైద్యులతో నేరుగా మాట్లాడండి',
    docSubtitle:
      'మీ శోధన లేదా లక్షణాలు ఇంటి చిట్కాలకు మించి ఉన్నా, లేదా తగ్గకపోయినా క్రింది వైద్యులను ఫోన్, ఇమెయిల్ లేదా కాల్‌బ్యాక్ అభ్యర్థన ద్వారా సంప్రదించండి.',
    docFilterAll: 'అన్ని విభాగాలు',
    docSuggestedHeading: 'మీ తనిఖీ ఆధారంగా సూచించిన వైద్యులు:',
    docSuggestedClear: 'అందరు వైద్యులను చూపు',
    docYearsExp: 'సం. అనుభవం',
    docLanguagesLabel: 'భాషలు:',
    docHoursLabel: 'సమయాలు:',
    docCallBtn: 'కాల్ చేయండి',
    docEmailBtn: 'ఇమెయిల్',
    docBookBtn: 'సంప్రదింపు కోరండి',
    docModalTitle: 'డాక్టర్ సంప్రదింపు అభ్యర్థన',
    docModalSubtitle: 'క్లినిక్ మిమ్మల్ని సంప్రదించడానికి మీ వివరాలు మరియు లక్షణాలను నమోదు చేయండి.',
    docFormPatientName: 'మీ పూర్తి పేరు',
    docFormPatientNamePlaceholder: 'ఉదా: రమేష్ కుమార్',
    docFormPhone: 'ఫోన్ / వాట్సాప్ నంబర్',
    docFormPhonePlaceholder: 'ఉదా: +91 98765 43210',
    docFormSlot: 'సంప్రదించడానికి అనుకూల సమయం',
    docFormSlotOptions: [
      { id: 'asap', label: 'వీలైనంత త్వరగా (అత్యవసర కాల్‌బ్యాక్)' },
      { id: 'morning', label: 'ఉదయం (9:00 AM – 12:30 PM)' },
      { id: 'afternoon', label: 'మధ్యాహ్నం (2:00 PM – 5:00 PM)' },
      { id: 'evening', label: 'సాయంత్రం (5:00 PM – 8:00 PM)' },
    ],
    docFormReason: 'సమస్య / లక్షణాల వివరణ',
    docFormReasonPlaceholder: 'లక్షణాలు, ఎన్ని రోజులుగా ఉన్నాయో క్లుప్తంగా రాయండి...',
    docFormSubmitBtn: 'అభ్యర్థన పంపండి',
    docFormCancelBtn: 'రద్దు చేయండి',
    docRequestsHeading: 'మీరు పంపిన డాక్టర్ సంప్రదింపు అభ్యర్థనలు',
    docRequestConfirmedBadge: 'నమోదు అయింది',
    docEmergencyCallout: 'ప్రాణాపాయ లక్షణాలు (ఛాతీ నొప్పి, శ్వాస అందకపోవడం, స్పృహ కోల్పోవడం) ఉంటే కాల్‌బ్యాక్ కోసం ఆగకుండా వెంటనే 108 / 112 కు కాల్ చేయండి.',
    stepProgressLabel: 'దశ',
    prevStepLabel: 'వెనుకకు',
    nextStepLabel: 'తదుపరి',
    backToOverviewBtn: 'మొదటికి వెళ్ళండి',
    stepLabels: {
      overview: 'పరిచయం',
      finder: 'చిట్కాలు',
      ingredients: 'పదార్థాలు',
      symptoms: 'లక్షణాల పరీక్ష',
      doctors: 'వైద్యులు',
      med_reminder: 'మందుల అలారం',
      safety: 'ప్రత్యామ్నాయాలు & భద్రత',
    },
  },
};

export function t(text: BilingualText, lang: 'en' | 'te'): string {
  return text[lang];
}
