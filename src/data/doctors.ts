import { BilingualText } from '../types/remedy';
import { HEALTH_PROBLEMS } from './remedies';

export type DoctorSpecialtyId =
  | 'general_physician'
  | 'ent'
  | 'pulmonologist'
  | 'gastro'
  | 'orthopedic'
  | 'pediatrician';

export interface DoctorProfile {
  id: string;
  name: BilingualText;
  specialtyId: DoctorSpecialtyId;
  specialtyLabel: BilingualText;
  qualifications: string;
  experienceYears: number;
  languagesSpoken: BilingualText;
  availability: BilingualText;
  consultationMode: BilingualText;
  phone: string;
  email: string;
  handlesProblems: string[];
  focusNote: BilingualText;
}

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'doc_ananya',
    name: { en: 'Dr. Ananya Sharma', te: 'డా. అనన్య శర్మ' },
    specialtyId: 'general_physician',
    specialtyLabel: { en: 'General Physician', te: 'జనరల్ ఫిజీషియన్' },
    qualifications: 'MBBS, MD (General Medicine)',
    experienceYears: 12,
    languagesSpoken: { en: 'English, Telugu, Hindi', te: 'తెలుగు, ఇంగ్లీష్, హిందీ' },
    availability: { en: 'Mon–Sat · 9:00 AM – 7:00 PM', te: 'సోమ–శని · ఉ. 9:00 – రా. 7:00' },
    consultationMode: { en: 'Video & Clinic Consult', te: 'వీడియో & క్లినిక్ సంప్రదింపు' },
    phone: '+91-40-2355-0142',
    email: 'dr.ananya@homeveda-care.example',
    handlesProblems: ['fever', 'cold', 'headache', 'fatigue_dehydration', 'minor_burns_skin', 'sleeplessness', 'dry_skin_heels'],
    focusNote: {
      en: 'High fever, viral infections, thyroid/diabetes/BP checks, migraine evaluation, and general care.',
      te: 'అధిక జ్వరం, వైరల్ ఇన్ఫెక్షన్లు, థైరాయిడ్/షుగర్/బీపీ పరీక్షలు, తలనొప్పి మరియు సాధారణ వైద్యం.',
    },
  },
  {
    id: 'doc_karthik',
    name: { en: 'Dr. Karthik Reddy', te: 'డా. కార్తీక్ రెడ్డి' },
    specialtyId: 'ent',
    specialtyLabel: { en: 'ENT Specialist', te: 'చెవి, ముక్కు, గొంతు వైద్యులు (ENT)' },
    qualifications: 'MBBS, MS (ENT)',
    experienceYears: 10,
    languagesSpoken: { en: 'Telugu, English', te: 'తెలుగు, ఇంగ్లీష్' },
    availability: { en: 'Mon–Sat · 10:00 AM – 6:30 PM', te: 'సోమ–శని · ఉ. 10:00 – సా. 6:30' },
    consultationMode: { en: 'Video & Clinic Consult', te: 'వీడియో & క్లినిక్ సంప్రదింపు' },
    phone: '+91-40-2355-0188',
    email: 'dr.karthik@homeveda-care.example',
    handlesProblems: ['throat_pain', 'cold', 'headache', 'toothache', 'mouth_ulcers'],
    focusNote: {
      en: 'Severe tonsillitis, swallowing pain, sinus infections, earache, ringing ears, and mouth sores.',
      te: 'తీవ్రమైన టాన్సిల్స్ వాపు, మింగడంలో నొప్పి, సైనస్, చెవి నొప్పి మరియు దీర్ఘకాలిక నోటి పుండ్లు.',
    },
  },
  {
    id: 'doc_prakash',
    name: { en: 'Dr. Prakash Rao', te: 'డా. ప్రకాష్ రావు' },
    specialtyId: 'pulmonologist',
    specialtyLabel: { en: 'Chest & Respiratory Specialist', te: 'శ్వాసకోశ వైద్య నిపుణులు' },
    qualifications: 'MBBS, MD (Pulmonary Medicine)',
    experienceYears: 14,
    languagesSpoken: { en: 'Telugu, English', te: 'తెలుగు, ఇంగ్లీష్' },
    availability: { en: 'Daily · 8:30 AM – 8:00 PM', te: 'ప్రతిరోజూ · ఉ. 8:30 – రా. 8:00' },
    consultationMode: { en: 'Priority Video & Clinic', te: 'ప్రాధాన్య వీడియో & క్లినిక్' },
    phone: '+91-40-2355-0219',
    email: 'dr.prakash@homeveda-care.example',
    handlesProblems: ['cough', 'cold', 'fever'],
    focusNote: {
      en: 'Persistent cough (>2 weeks), wheezing, asthma flare-ups, chest tightness, and breathing difficulty.',
      te: 'దీర్ఘకాలిక దగ్గు, ఆయాసం, ఉబ్బసం (ఆస్తమా), ఛాతీ బిగుతు మరియు శ్వాస ఇబ్బందులు.',
    },
  },
  {
    id: 'doc_meenakshi',
    name: { en: 'Dr. Meenakshi Devi', te: 'డా. మీనాక్షి దేవి' },
    specialtyId: 'gastro',
    specialtyLabel: { en: 'Gastroenterologist', te: 'జీర్ణకోశ వ్యాధుల నిపుణులు' },
    qualifications: 'MBBS, MD, DM (Gastroenterology)',
    experienceYears: 11,
    languagesSpoken: { en: 'Telugu, English, Tamil', te: 'తెలుగు, ఇంగ్లీష్, తమిళం' },
    availability: { en: 'Mon–Fri · 10:00 AM – 5:30 PM', te: 'సోమ–శుక్ర · ఉ. 10:00 – సా. 5:30' },
    consultationMode: { en: 'Video & Clinic Consult', te: 'వీడియో & క్లినిక్ సంప్రదింపు' },
    phone: '+91-40-2355-0264',
    email: 'dr.meenakshi@homeveda-care.example',
    handlesProblems: ['indigestion', 'fatigue_dehydration', 'constipation', 'mild_diarrhea'],
    focusNote: {
      en: 'Severe abdominal pain, persistent vomiting, ulcers, piles, jaundice, and chronic bowel changes.',
      te: 'తీవ్రమైన కడుపు నొప్పి, ఆగని వాంతులు, అల్సర్లు, పైల్స్, పచ్చకామెర్లు మరియు దీర్ఘకాలిక జీర్ణ సమస్యలు.',
    },
  },
  {
    id: 'doc_vikram',
    name: { en: 'Dr. Vikram Verma', te: 'డా. విక్రమ్ వర్మ' },
    specialtyId: 'orthopedic',
    specialtyLabel: { en: 'Orthopedic Specialist', te: 'ఎముకలు & కీళ్ల వైద్యులు (Ortho)' },
    qualifications: 'MBBS, MS (Orthopedics)',
    experienceYears: 13,
    languagesSpoken: { en: 'English, Telugu, Hindi', te: 'తెలుగు, ఇంగ్లీష్, హిందీ' },
    availability: { en: 'Mon–Sat · 9:30 AM – 6:00 PM', te: 'సోమ–శని · ఉ. 9:30 – సా. 6:00' },
    consultationMode: { en: 'Video & Clinic Consult', te: 'వీడియో & క్లినిక్ సంప్రదింపు' },
    phone: '+91-40-2355-0305',
    email: 'dr.vikram@homeveda-care.example',
    handlesProblems: ['knee_pain', 'minor_burns_skin', 'muscle_cramps'],
    focusNote: {
      en: 'Acute joint swelling, sciatica/back pain, ligament injuries, fractures, and arthritis care.',
      te: 'తీవ్రమైన కీళ్ల వాపు, నడుము నొప్పి/సయాటికా, ఎముకల గాయాలు మరియు ఆర్థరైటిస్ చికిత్స.',
    },
  },
  {
    id: 'doc_padma',
    name: { en: 'Dr. Padma Lakshmi', te: 'డా. పద్మలక్ష్మి' },
    specialtyId: 'pediatrician',
    specialtyLabel: { en: 'Pediatrician (Child Care)', te: 'పిల్లల వైద్య నిపుణులు (Pediatrician)' },
    qualifications: 'MBBS, MD (Pediatrics)',
    experienceYears: 15,
    languagesSpoken: { en: 'Telugu, English', te: 'తెలుగు, ఇంగ్లీష్' },
    availability: { en: 'Daily · 9:00 AM – 7:30 PM', te: 'ప్రతిరోజూ · ఉ. 9:00 – రా. 7:30' },
    consultationMode: { en: 'Priority Video & Clinic', te: 'ప్రాధాన్య వీడియో & క్లినిక్' },
    phone: '+91-40-2355-0350',
    email: 'dr.padma@homeveda-care.example',
    handlesProblems: ['fever', 'cold', 'cough', 'throat_pain', 'fatigue_dehydration', 'mild_diarrhea'],
    focusNote: {
      en: 'Infant & child fevers, pediatric cough/breathing checks, ear infections, and child dehydration.',
      te: 'శిశువులు మరియు చిన్న పిల్లల జ్వరం, దగ్గు, శ్వాస సమస్యలు మరియు డీహైడ్రేషన్ సంరక్షణ.',
    },
  },
];

export interface BeyondBasicRule {
  id: string;
  keywords: string[];
  conditionTitle: BilingualText;
  problemDescription: BilingualText;
  cautionMessage: BilingualText;
  isEmergency?: boolean;
  recommendedSpecialties: DoctorSpecialtyId[];
}

export const BEYOND_BASIC_RULES: BeyondBasicRule[] = [
  // Cardiac & Chest
  {
    id: 'bb_chest_pain',
    keywords: ['chest pain', 'angina', 'heart attack', 'cardiac arrest', 'chest tightness', 'ఛాతీ నొప్పి', 'గుండెపోటు'],
    conditionTitle: { en: 'Chest Pain or Angina', te: 'ఛాతీ నొప్పి లేదా గుండె నొప్పి' },
    problemDescription: {
      en: 'Chest pain or angina occurs when heart muscle receives reduced oxygen-rich blood through narrowed coronary arteries, or from chest-wall inflammation, acid reflux spasms, or lung-lining irritation. Cardiac chest pain often feels like squeezing pressure radiating to the arm, jaw, or back.',
      te: 'గుండె కండరాలకు రక్త ప్రసరణ తగ్గడం, రక్తనాళాల్లో అడ్డంకి, ఛాతీ కండరాల వాపు లేదా ఊపిరితిత్తుల పొర ఒత్తిడి వల్ల ఛాతీ నొప్పి వస్తుంది. ఇది భుజం, దవడ లేదా వీపుకు పాకితే అత్యవసర పరిస్థితి కావచ్చు.',
    },
    cautionMessage: {
      en: 'Do not wait or take herbal drinks for chest pain. Seek emergency medical care (ECG & evaluation) immediately.',
      te: 'ఛాతీ నొప్పిని నిర్లక్ష్యం చేయకండి. వెంటనే ఆసుపత్రికి వెళ్లి ECG మరియు వైద్య పరీక్షలు చేయించుకోండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pulmonologist'],
  },
  {
    id: 'bb_palpitations',
    keywords: ['palpitation', 'palpitations', 'arrhythmia', 'irregular heartbeat', 'racing heart', 'గుండె దడ'],
    conditionTitle: { en: 'Heart Palpitations / Arrhythmia', te: 'గుండె దడ లేదా అసమాన హృదయ స్పందన' },
    problemDescription: {
      en: 'Palpitations feel like your heart is fluttering, pounding, skipping beats, or racing too fast. They can result from electrical rhythm disturbances (arrhythmia), thyroid overactivity, anemia, dehydration, caffeine/stimulants, or acute stress.',
      te: 'గుండె వేగంగా కొట్టుకోవడం, దడగా ఉండటం లేదా స్పందనలో తేడా రావడాన్ని గుండె దడ (Palpitations) అంటారు. ఇది గుండె లయ లోపం, థైరాయిడ్, రక్తహీనత లేదా డీహైడ్రేషన్ వల్ల కలగవచ్చు.',
    },
    cautionMessage: {
      en: 'Consult a physician for a pulse and ECG check—seek emergency care right away if accompanied by dizziness or fainting.',
      te: 'ECG పరీక్ష కోసం డాక్టర్‌ను కలవండి; కళ్ళు తిరగడం లేదా ఆయాసం ఉంటే వెంటనే ఆసుపత్రికి వెళ్లండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },

  // Respiratory
  {
    id: 'bb_asthma',
    keywords: ['asthma', 'wheezing', 'inhaler', 'ఆస్తమా', 'ఉబ్బసం'],
    conditionTitle: { en: 'Asthma & Airway Wheezing', te: 'ఆస్తమా (ఉబ్బసం) మరియు గురక శ్వాస' },
    problemDescription: {
      en: 'Asthma is a chronic inflammatory airway condition where bronchial tubes become hypersensitive to triggers like dust, pollen, cold air, or viral colds—causing airway lining swelling, muscle tightening, excess mucus, and a whistling wheeze.',
      te: 'ఆస్తమా అనేది శ్వాసనాళాల దీర్ఘకాలిక వాపు వ్యాధి. దుమ్ము, పుప్పొడి, చల్లని గాలి లేదా అలర్జీల వల్ల శ్వాసనాళాలు వాచి కుంచించుకుపోవడం వల్ల శ్వాస పీల్చేటప్పుడు గురక మరియు ఆయాసం వస్తాయి.',
    },
    cautionMessage: {
      en: 'Keep prescribed rescue inhalers accessible and consult a pulmonologist if nighttime coughing or wheezing increases.',
      te: 'సూచించిన ఇన్హేలర్ దగ్గర ఉంచుకోండి; ఆయాసం పెరిగితే శ్వాసకోశ నిపుణుడిని సంప్రదించండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['pulmonologist', 'general_physician'],
  },
  {
    id: 'bb_breathing',
    keywords: ['shortness of breath', 'breathless', 'breathlessness', 'difficulty breathing', 'suffocation', 'dyspnea', 'శ్వాస అందకపోవడం', 'ఆయాసం'],
    conditionTitle: { en: 'Shortness of Breath (Dyspnea)', te: 'శ్వాస తీసుకోవడంలో ఇబ్బంది / ఆయాసం' },
    problemDescription: {
      en: 'Shortness of breath is the sensation of not getting enough air into the lungs. It can stem from bronchial constriction, fluid in lung air sacs, low blood oxygen/hemoglobin (anemia), or reduced cardiac pumping efficiency.',
      te: 'ఊపిరితిత్తులకు సరిపడా గాలి అందనట్లు అనిపించడాన్ని ఆయాసం అంటారు. ఇది శ్వాసనాళాల అడ్డంకి, ఊపిరితిత్తుల్లో నీరు/ఇన్ఫెక్షన్, రక్తహీనత లేదా గుండె బలహీనత వల్ల రావచ్చు.',
    },
    cautionMessage: {
      en: 'Measure oxygen levels if possible and seek prompt medical evaluation—or emergency care if breathing feels labored at rest.',
      te: 'విశ్రాంతి సమయంలో కూడా ఆయాసం వస్తుంటే వెంటనే వైద్య సహాయం లేదా ఆసుపత్రి సేవలు పొందండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['pulmonologist', 'general_physician'],
  },
  {
    id: 'bb_bronchitis',
    keywords: ['bronchitis', 'chest congestion severe', 'బ్రాంకైటిస్'],
    conditionTitle: { en: 'Acute or Chronic Bronchitis', te: 'బ్రాంకైటిస్ (శ్వాసనాళాల వాపు)' },
    problemDescription: {
      en: 'Bronchitis is inflammation of the bronchial tubes that carry air to and from your lungs. Swollen tube linings secrete thick, sticky mucus, leading to a deep chesty cough, fatigue, and mild chest soreness lasting over 1–3 weeks.',
      te: 'ఊపిరితిత్తులకు గాలిని తీసుకెళ్లే ప్రధాన శ్వాసనాళాలలో వాపు రావడాన్ని బ్రాంకైటిస్ అంటారు. దీనివల్ల లోపల చిక్కటి కఫం పేరుకుపోయి లోతైన దగ్గు, ఛాతీ బరువు మరియు అలసట వస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult a pulmonologist or physician to examine lung sounds and rule out secondary bacterial infection.',
      te: 'ఛాతీ పరీక్ష చేయించుకుని తగిన చికిత్స పొందడానికి శ్వాసకోశ లేదా జనరల్ డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['pulmonologist', 'general_physician'],
  },
  {
    id: 'bb_pneumonia',
    keywords: ['pneumonia', 'lung infection', 'pleurisy', 'coughing blood', 'న్యుమోనియా'],
    conditionTitle: { en: 'Pneumonia (Lung Infection)', te: 'న్యుమోనియా (ఊపిరితిత్తుల ఇన్ఫెక్షన్)' },
    problemDescription: {
      en: 'Pneumonia is a serious infection (bacterial, viral, or fungal) in which the tiny air sacs (alveoli) inside one or both lungs fill with fluid or pus—causing high fever, shaking chills, rapid breathing, sharp chest pain when coughing, and low blood oxygen.',
      te: 'న్యుమోనియా అనేది ఊపిరితిత్తుల లోపలి గాలి గదులలో బ్యాక్టీరియా లేదా వైరస్ వల్ల ఇన్ఫెక్షన్ చేరి ద్రవం లేదా చీము నిండే పరిస్థితి. దీనివల్ల అధిక జ్వరం, చలి వణుకు, దగ్గినప్పుడు ఛాతీ నొప్పి మరియు ఆయాసం వస్తాయి.',
    },
    cautionMessage: {
      en: 'Pneumonia needs chest X-ray diagnosis, pulse-oximetry monitoring, and prescribed antibiotic or antiviral therapy.',
      te: 'న్యుమోనియాకు ఛాతీ ఎక్స్-రే మరియు డాక్టర్ సూచించిన పూర్తి మందుల కోర్సు తప్పనిసరి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['pulmonologist', 'general_physician'],
  },
  {
    id: 'bb_tuberculosis',
    keywords: ['tuberculosis', 'tb cough', 'tb', 'క్షయ', 'టీబీ'],
    conditionTitle: { en: 'Tuberculosis (TB)', te: 'క్షయ వ్యాధి (Tuberculosis / TB)' },
    problemDescription: {
      en: 'Tuberculosis is a contagious bacterial infection caused by Mycobacterium tuberculosis that primarily affects the lungs. Classic signs include a persistent cough lasting over 2–3 weeks, evening fevers, drenching night sweats, appetite loss, and unexplained weight loss.',
      te: 'క్షయ (TB) అనేది మైకోబ్యాక్టీరియం ట్యూబర్‌కులోసిస్ బ్యాక్టీరియా వల్ల ప్రధానంగా ఊపిరితిత్తులకు సోకే ఇన్ఫెక్షన్. 2 వారాలకు పైగా దగ్గు, సాయంత్రపు జ్వరం, రాత్రి చెమటలు మరియు బరువు తగ్గడం దీని ముఖ్య లక్షణాలు.',
    },
    cautionMessage: {
      en: 'Get sputum and chest X-ray testing through a pulmonologist or physician—TB is fully treatable with a complete supervised medicine course.',
      te: 'కఫం పరీక్ష మరియు ఎక్స్-రే కోసం వెంటనే డాక్టర్‌ను కలవండి; క్రమమైన మందులతో టీబీ పూర్తిగా నయమవుతుంది.',
    },
    recommendedSpecialties: ['pulmonologist', 'general_physician'],
  },
  {
    id: 'bb_copd',
    keywords: ['copd', 'emphysema', 'smoker cough', 'సీఓపీడీ'],
    conditionTitle: { en: 'COPD (Chronic Obstructive Pulmonary Disease)', te: 'COPD (దీర్ఘకాలిక ఊపిరితిత్తుల అడ్డంకి వ్యాధి)' },
    problemDescription: {
      en: 'COPD is a progressive lung condition involving long-term airway narrowing and damaged lung air sacs—typically caused by prolonged smoke, biomass fuel, or dust exposure—resulting in daily breathlessness during exertion and chronic phlegm.',
      te: 'పొగతాగడం లేదా దుమ్ము, పొగ పీల్చడం వల్ల ఊపిరితిత్తుల గాలి మార్గాలు దీర్ఘకాలికంగా దెబ్బతిని కుంచించుకుపోవడాన్ని COPD అంటారు. దీనివల్ల నడిచినప్పుడు ఆయాసం మరియు నిరంతర కఫం ఉంటాయి.',
    },
    cautionMessage: {
      en: 'Consult a pulmonologist for spirometry lung-function testing and tailored bronchodilator inhalers.',
      te: 'ఊపిరితిత్తుల సామర్థ్య పరీక్ష (Spirometry) మరియు ఇన్హేలర్ల కోసం శ్వాసకోశ నిపుణుడిని కలవండి.',
    },
    recommendedSpecialties: ['pulmonologist'],
  },

  // Viral, Mosquito-Borne & Systemic Infections
  {
    id: 'bb_covid',
    keywords: ['covid', 'covid 19', 'covid-19', 'coronavirus', 'sars-cov', 'కోవిడ్', 'కరోనా'],
    conditionTitle: { en: 'COVID-19 Viral Infection', te: 'కోవిడ్-19 వైరల్ ఇన్ఫెక్షన్' },
    problemDescription: {
      en: 'COVID-19 is an acute respiratory illness caused by the SARS-CoV-2 coronavirus. It commonly causes fever, dry cough, profound fatigue, body aches, sore throat, and temporary loss of taste or smell, with occasional drops in blood oxygen levels.',
      te: 'కోవిడ్-19 అనేది SARS-CoV-2 వైరస్ వల్ల వచ్చే శ్వాసకోశ ఇన్ఫెక్షన్. ఇందులో జ్వరం, పొడి దగ్గు, తీవ్ర అలసట, ఒళ్ళు నొప్పులు, గొంతు నొప్పి మరియు రుచి/వాసన తగ్గడం వంటి లక్షణాలు కనిపిస్తాయి.',
    },
    cautionMessage: {
      en: 'Isolate to protect family members, monitor oxygen saturation (SpO2), and contact a physician if fever persists or SpO2 drops below 94%.',
      te: 'ఇతరులకు వ్యాపించకుండా జాగ్రత్త పడి, పల్స్ ఆక్సీమీటర్‌తో ఆక్సిజన్ (SpO2) చూసుకుంటూ డాక్టర్ సలహా తీసుకోండి.',
    },
    recommendedSpecialties: ['general_physician', 'pulmonologist'],
  },
  {
    id: 'bb_flu',
    keywords: ['influenza', 'swine flu', 'h1n1', 'viral flu', 'ఫ్లూ', 'ఇన్ఫ్లుయెంజా'],
    conditionTitle: { en: 'Influenza (Seasonal / Viral Flu)', te: 'ఇన్ఫ్లుయెంజా (వైరల్ ఫ్లూ)' },
    problemDescription: {
      en: 'Influenza is an acute respiratory infection caused by influenza A or B viruses. Unlike a mild common cold, flu hits abruptly with high fever, severe muscle and joint aches, chills, exhaustion, and a dry cough.',
      te: 'ఇన్ఫ్లుయెంజా అనేది వైరస్ వల్ల వచ్చే తీవ్రమైన జలుబు జ్వరం. సాధారణ జలుబు లాగా కాకుండా ఇందులో అకస్మాత్తుగా అధిక జ్వరం, తీవ్రమైన ఒళ్ళు నొప్పులు, చలి మరియు అలసట వస్తాయి.',
    },
    cautionMessage: {
      en: 'Rest and stay hydrated, and consult a physician within 48 hours—especially for elderly adults, pregnant women, or young children.',
      te: 'తగినంత విశ్రాంతి తీసుకుంటూ, జ్వరం తీవ్రంగా ఉంటే లేదా చిన్న పిల్లలు/పెద్దవారిలో కనిపిస్తే డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_dengue',
    keywords: ['dengue', 'platelet', 'డెంగ్యూ'],
    conditionTitle: { en: 'Dengue Fever', te: 'డెంగ్యూ జ్వరం' },
    problemDescription: {
      en: 'Dengue is a mosquito-borne viral infection transmitted by Aedes mosquitoes. It causes sudden high fever, severe joint and muscle pains ("breakbone fever"), pain behind the eyes, skin rash, nausea, and a drop in blood platelet counts.',
      te: 'డెంగ్యూ అనేది ఏడిస్ దోమ కాటు ద్వారా వచ్చే వైరల్ జ్వరం. ఇందులో అకస్మాత్తుగా అధిక జ్వరం, కీళ్లు మరియు కండరాలలో తీవ్రమైన నొప్పులు, కళ్ల వెనుక నొప్పి, చర్మంపై దద్దుర్లు మరియు రక్తంలో ప్లేట్‌లెట్లు తగ్గడం ఉంటాయి.',
    },
    cautionMessage: {
      en: 'Avoid aspirin/ibuprofen and get regular CBC platelet blood counts under a physician’s supervision.',
      te: 'స్వంతంగా పెయిన్ కిల్లర్లు వాడకండి; రక్త పరీక్షలు (CBC/ప్లేట్‌లెట్లు) మరియు డాక్టర్ పర్యవేక్షణ తప్పనిసరి.',
    },
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_chikungunya',
    keywords: ['chikungunya', 'చికున్‌గున్యా'],
    conditionTitle: { en: 'Chikungunya', te: 'చికున్‌గున్యా' },
    problemDescription: {
      en: 'Chikungunya is a mosquito-borne viral disease transmitted by infected Aedes mosquitoes. It triggers sudden fever followed by prominent, symmetric swelling and stiffness in multiple joints (wrists, ankles, fingers, knees) that can linger for weeks.',
      te: 'చికున్‌గున్యా దోమ కాటు ద్వారా వ్యాపించే వైరల్ జ్వరం. ఇందులో జ్వరంతో పాటు చేతి మణికట్లు, వేళ్లు, మోకాళ్లు మరియు మడమల కీళ్లలో తీవ్రమైన నొప్పి మరియు వాపు వస్తాయి.',
    },
    cautionMessage: {
      en: 'Get blood confirmation and physician-guided pain/inflammation management rather than forceful joint massage.',
      te: 'రక్త పరీక్ష చేయించుకుని డాక్టర్ సూచించిన చికిత్స తీసుకోండి; వాచిన కీళ్లను గట్టిగా రుద్దకండి.',
    },
    recommendedSpecialties: ['general_physician', 'orthopedic'],
  },
  {
    id: 'bb_typhoid',
    keywords: ['typhoid', 'salmonella', 'టైఫాయిడ్'],
    conditionTitle: { en: 'Typhoid Fever', te: 'టైఫాయిడ్ జ్వరం' },
    problemDescription: {
      en: 'Typhoid is a systemic bacterial infection caused by Salmonella Typhi spread through contaminated food or water. It causes a sustained step-wise fever, weakness, dull headache, abdominal discomfort, and loss of appetite.',
      te: 'టైఫాయిడ్ అనేది కలుషిత నీరు లేదా ఆహారం ద్వారా సాల్మొనెల్లా బ్యాక్టీరియా వల్ల వచ్చే జ్వరం. ఇందులో రోజురోజుకూ పెరిగే నిరంతర జ్వరం, తీవ్రమైన నీరసం, తలనొప్పి మరియు కడుపు నొప్పి ఉంటాయి.',
    },
    cautionMessage: {
      en: 'Typhoid requires blood testing and a complete prescribed antibiotic course; home remedies cannot eliminate the bacteria.',
      te: 'టైఫాయిడ్ తగ్గడానికి రక్త పరీక్ష తర్వాత డాక్టర్ ఇచ్చే పూర్తి యాంటీబయాటిక్ కోర్సు వాడాలి.',
    },
    recommendedSpecialties: ['general_physician', 'gastro'],
  },
  {
    id: 'bb_malaria',
    keywords: ['malaria', 'మలేరియా'],
    conditionTitle: { en: 'Malaria', te: 'మలేరియా' },
    problemDescription: {
      en: 'Malaria is a parasitic blood infection spread by Anopheles mosquitoes. The parasites multiply inside red blood cells and rupture them in cycles, causing intense shivering chills, high fever spikes, headache, and heavy sweating.',
      te: 'మలేరియా అనేది ఆడ అనాఫిలిస్ దోమ కాటు ద్వారా రక్తంలోకి చేరే పరాన్నజీవి వల్ల వచ్చే వ్యాధి. ఇందులో చలితో కూడిన వణుకు, తీవ్రమైన జ్వరం మరియు చెమటలు మళ్లీ మళ్లీ వస్తాయి.',
    },
    cautionMessage: {
      en: 'Get a rapid malaria blood smear test immediately so targeted antimalarial medicine can be started safely.',
      te: 'వెంటనే మలేరియా రక్త పరీక్ష చేయించి డాక్టర్ ఇచ్చే ప్రత్యేక మందులు తీసుకోండి.',
    },
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_high_fever',
    keywords: ['high fever', '102', '103', '104', 'febrile seizure', 'అధిక జ్వరం'],
    conditionTitle: { en: 'High Fever (>102°F / 38.9°C)', te: 'అధిక జ్వరం (>102°F / 38.9°C)' },
    problemDescription: {
      en: 'A temperature above 102°F reflects a strong immune response to bacterial or viral infection (such as pneumonia, UTI, dengue, or typhoid). Prolonged high fever accelerates fluid loss and can trigger febrile seizures in young children.',
      te: 'శరీర ఉష్ణోగ్రత 102°F పైగా ఉండటం తీవ్రమైన బ్యాక్టీరియా లేదా వైరల్ ఇన్ఫెక్షన్ (న్యుమోనియా, డెంగ్యూ, UTI మొదలైనవి) కు సంకేతం. దీనివల్ల డీహైడ్రేషన్ మరియు చిన్న పిల్లల్లో ఫిట్స్ వచ్చే అవకాశం ఉంది.',
    },
    cautionMessage: {
      en: 'Consult a physician promptly to find and treat the underlying infection rather than relying on sponging alone.',
      te: 'తడిపట్టీలపై మాత్రమే ఆధారపడకుండా వెంటనే వైద్యుడిని సంప్రదించి జ్వరానికి కారణాన్ని పరీక్షించండి.',
    },
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_infant_fever',
    keywords: ['baby fever', 'infant fever', 'newborn fever', 'శిశువు జ్వరం'],
    conditionTitle: { en: 'Infant or Newborn Fever', te: 'శిశువు లేదా పసిపిల్లల జ్వరం' },
    problemDescription: {
      en: 'Babies under 3–12 months have immature immune systems, so even a mild fever can be the only early sign of an ear infection, urinary infection, or blood/lung infection that progresses rapidly.',
      te: 'పసిపిల్లలలో రోగనిరోధక శక్తి పూర్తిగా అభివృద్ధి చెందదు కాబట్టి చిన్న జ్వరం కూడా చెవి, మూత్ర లేదా ఇతర తీవ్రమైన ఇన్ఫెక్షన్లకు మొదటి సంకేతంగా ఉండవచ్చు.',
    },
    cautionMessage: {
      en: 'Do NOT give herbal decoctions, spices, or honey to infants. Contact a pediatrician immediately.',
      te: 'పసిపిల్లలకు కషాయాలు, తేనె లేదా మసాలాలు ఇవ్వకండి. వెంటనే పిల్లల వైద్యుడిని (Pediatrician) కలవండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['pediatrician'],
  },
  {
    id: 'bb_heatstroke',
    keywords: ['heatstroke', 'sunstroke', 'heat stroke', 'sun stroke', 'వడదెబ్బ'],
    conditionTitle: { en: 'Heatstroke / Sunstroke', te: 'వడదెబ్బ (Heatstroke / Sunstroke)' },
    problemDescription: {
      en: 'Heatstroke happens when the body’s temperature-regulation system fails during extreme heat exposure—causing core temperature to climb dangerously above 104°F with hot dry or flushed skin, confusion, throbbing headache, nausea, or fainting.',
      te: 'ఎండ మరియు అధిక వేడికి శరీర ఉష్ణోగ్రత నియంత్రణ వ్యవస్థ దెబ్బతిన్నప్పుడు వడదెబ్బ తగులుతుంది. శరీరం విపరీతంగా వేడెక్కడం, తల తిరగడం, వాంతులు, మగత లేదా స్పృహ తప్పడం దీని లక్షణాలు.',
    },
    cautionMessage: {
      en: 'Move to shade, cool the body with damp cloths/fans, and seek urgent medical care if confusion or fainting occurs.',
      te: 'వెంటనే నీడలోకి వెళ్లి చల్లని తడి గుడ్డతో తుడవండి; మగత లేదా వాంతులు ఉంటే ఆసుపత్రికి తీసుకెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },

  // Digestive, Liver & Urinary
  {
    id: 'bb_jaundice',
    keywords: ['jaundice', 'yellow eyes', 'bilirubin', 'పచ్చకామెర్లు', 'కామెర్లు'],
    conditionTitle: { en: 'Jaundice (High Bilirubin)', te: 'పచ్చకామెర్లు (Jaundice)' },
    problemDescription: {
      en: 'Jaundice causes yellowing of the whites of the eyes and skin due to excess bilirubin accumulating in the bloodstream—typically from viral hepatitis (A, B, E), liver inflammation, bile duct obstruction, or red blood cell breakdown, often with dark tea-colored urine.',
      te: 'రక్తంలో బిలిరుబిన్ స్థాయి పెరిగి కళ్లు మరియు చర్మం పసుపు రంగులోకి మారడాన్ని పచ్చకామెర్లు అంటారు. ఇది వైరల్ హెపటైటిస్, కాలేయ వాపు లేదా పిత్త నాళాల్లో అడ్డంకి వల్ల వస్తుంది; మూత్రం ముదురు పసుపుగా రావచ్చు.',
    },
    cautionMessage: {
      en: 'Avoid unverified herbal pastes or fatty foods; liver function blood tests (LFT) and doctor supervision are essential.',
      te: 'నాటు మందులు మరియు నూనె పదార్థాలు తీసుకోకండి. LFT రక్త పరీక్ష మరియు వైద్యుడి పర్యవేక్షణ తప్పనిసరి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_hepatitis_liver',
    keywords: ['hepatitis', 'fatty liver', 'cirrhosis', 'liver pain', 'liver inflammation', 'హెపటైటిస్', 'ఫ్యాటీ లివర్', 'కాలేయ'],
    conditionTitle: { en: 'Fatty Liver or Hepatitis', te: 'ఫ్యాటీ లివర్ లేదా కాలేయ వాపు (Hepatitis)' },
    problemDescription: {
      en: 'Fatty liver disease involves excess fat buildup inside liver cells (linked to metabolism, diabetes, or alcohol), while hepatitis is active viral or autoimmune liver inflammation—both impair toxin filtering and enzyme balance over time.',
      te: 'కాలేయ కణాలలో అదనపు కొవ్వు పేరుకుపోవడాన్ని ఫ్యాటీ లివర్ అని, వైరస్ లేదా ఇతర కారణాల వల్ల కాలేయం వాపును హెపటైటిస్ అని అంటారు. ఇవి కాలేయం యొక్క సాధారణ పనితీరును ప్రభావితం చేస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult a gastroenterologist for liver ultrasound and enzyme testing before taking herbal supplements, as some herbs stress the liver.',
      te: 'స్వంత మూలికా మందులు కాలేయంపై భారం వేయగలవు కాబట్టి గ్యాస్ట్రోఎంటరాలజిస్ట్ ద్వారా స్కాన్ & రక్త పరీక్ష చేయించండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_pancreatitis',
    keywords: ['pancreatitis', 'pancreas', 'పాంక్రియాటైటిస్'],
    conditionTitle: { en: 'Pancreatitis', te: 'పాంక్రియాటైటిస్ (క్లోమగ్రంథి వాపు)' },
    problemDescription: {
      en: 'Pancreatitis is painful inflammation of the pancreas caused when digestive enzymes activate prematurely inside the organ—producing severe upper abdominal pain that radiates straight through to the back, accompanied by nausea and vomiting.',
      te: 'జీర్ణ ఎంజైమ్‌లు క్లోమగ్రంథి లోపలే చురుకుగా మారి గ్రంథిని దెబ్బతీయడం వల్ల పాంక్రియాటైటిస్ వస్తుంది. ఇందులో పై కడుపులో తీవ్రమైన నొప్పి వచ్చి వీపు వరకు పాకుతుంది మరియు వాంతులు అవుతాయి.',
    },
    cautionMessage: {
      en: 'Pancreatitis is an acute medical condition requiring hospital evaluation, IV hydration, and enzyme blood tests.',
      te: 'ఇది ఆసుపత్రిలో చేరి చికిత్స తీసుకోవాల్సిన అత్యవసర పరిస్థితి. వెంటనే వైద్యుడిని సంప్రదించండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['gastro'],
  },
  {
    id: 'bb_appendicitis',
    keywords: ['appendicitis', 'appendix', 'lower right abdominal', 'అపెండిసైటిస్', 'అపెండిక్స్'],
    conditionTitle: { en: 'Appendicitis', te: 'అపెండిసైటిస్ (అపెండిక్స్ వాపు)' },
    problemDescription: {
      en: 'Appendicitis occurs when the appendix—a narrow pouch attached to the large intestine—becomes blocked and inflamed. Pain typically starts dull around the navel and shifts to sharp, worsening tenderness in the lower-right abdomen with fever or nausea.',
      te: 'పెద్దపేగుకు అనుబంధంగా ఉండే అపెండిక్స్ నాళం మూసుకుపోయి వాపు రావడాన్ని అపెండిసైటిస్ అంటారు. నొప్పి బొడ్డు దగ్గర మొదలై క్రమంగా కుడివైపు క్రింది కడుపులో తీవ్రంగా మారుతుంది.',
    },
    cautionMessage: {
      en: 'This is a surgical emergency. Do not apply heat pads or take laxatives—visit the nearest emergency hospital immediately.',
      te: 'కడుపుపై వేడి కాపడం పెట్టకండి, విరేచన మందులు వేసుకోకండి. వెంటనే అత్యవసర ఆసుపత్రికి వెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_kidney_stone',
    keywords: ['kidney stone', 'renal stone', 'ureter stone', 'flank pain', 'కిడ్నీ స్టోన్', 'మూత్రపిండంలో రాళ్లు'],
    conditionTitle: { en: 'Kidney Stones (Renal Calculi)', te: 'కిడ్నీలో రాళ్లు (Kidney Stones)' },
    problemDescription: {
      en: 'Kidney stones are hard crystal deposits (calcium oxalate, uric acid, or struvite) that form when urine minerals concentrate. As a stone travels down the narrow ureter tube, it causes intense wave-like pain in the flank/back radiating to the groin, often with painful urination or pink urine.',
      te: 'మూత్రంలో ఖనిజాలు మరియు లవణాలు స్ఫటికాలుగా గడ్డకట్టడం వల్ల కిడ్నీలో రాళ్లు ఏర్పడతాయి. రాయి మూత్రనాళంలోకి కదిలినప్పుడు నడుము ప్రక్క భాగం నుండి పొత్తికడుపు వరకు తీవ్రమైన నొప్పి మరియు మూత్రం మంట కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Get an abdominal ultrasound to measure stone size and check for urine blockage rather than relying only on herbal juices.',
      te: 'రాయి పరిమాణం మరియు మూత్ర ప్రవాహ అడ్డంకిని తెలుసుకోవడానికి అల్ట్రాసౌండ్ స్కాన్ చేయించి డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'gastro'],
  },
  {
    id: 'bb_gallstone',
    keywords: ['gallstone', 'gallbladder', 'biliary', 'పిత్తాశయ', 'గాల్ బ్లాడర్'],
    conditionTitle: { en: 'Gallstones (Cholelithiasis)', te: 'పిత్తాశయంలో రాళ్లు (Gallstones)' },
    problemDescription: {
      en: 'Gallstones are hardened deposits of cholesterol or bile pigments inside the gallbladder beneath the right ribcage. When a stone blocks the bile duct—especially after fatty meals—it triggers sharp upper-right abdominal pain radiating to the right shoulder blade.',
      te: 'పిత్తాశయంలో కొలెస్ట్రాల్ లేదా పిత్తరసం గడ్డకట్టడం వల్ల రాళ్లు ఏర్పడతాయి. ముఖ్యంగా నూనె/కొవ్వు ఆహారం తిన్న తర్వాత కుడివైపు పై కడుపులో తీవ్రమైన నొప్పి వచ్చి కుడి భుజానికి పాకవచ్చు.',
    },
    cautionMessage: {
      en: 'Avoid fatty meals and home oil/lemon flushes; consult a gastroenterologist for ultrasound evaluation.',
      te: 'నూనె పదార్థాలు మరియు ఇంటి ఆయిల్ ఫ్లష్‌లు చేయకండి; గ్యాస్ట్రోఎంటరాలజిస్ట్ ద్వారా స్కాన్ చేయించుకోండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_ulcer',
    keywords: ['ulcer', 'stomach ulcer', 'peptic ulcer', 'duodenal ulcer', 'h pylori', 'gastritis', 'blood in vomit', 'vomiting blood', 'అల్సర్', 'కడుపు పుండు', 'వాంతుల్లో రక్తం'],
    conditionTitle: { en: 'Peptic Ulcer or Severe Gastritis', te: 'పెప్టిక్ అల్సర్ (కడుపు పుండు) లేదా తీవ్రమైన గ్యాస్ట్రైటిస్' },
    problemDescription: {
      en: 'A peptic ulcer is an open sore in the stomach or upper small intestine lining caused when stomach acid wears away the protective mucus layer—most often due to H. pylori bacteria or frequent painkiller (NSAID) use, resulting in gnawing upper-belly burning.',
      te: 'H. pylori బ్యాక్టీరియా లేదా నొప్పి మాత్రల వల్ల కడుపు లోపలి రక్షణ పొర దెబ్బతిని పుండు ఏర్పడటాన్ని పెప్టిక్ అల్సర్ అంటారు. దీనివల్ల ఖాళీ కడుపులో లేదా తిన్న తర్వాత మంట మరియు నొప్పి వస్తుంది.',
    },
    cautionMessage: {
      en: 'Avoid spicy kitchen remedies like ginger, pepper, or lemon which irritate ulcers; consult a gastroenterologist.',
      te: 'అల్లం, మిరియాలు, నిమ్మ వంటి ఘాటు పదార్థాలు పుండు మంటను పెంచుతాయి. గ్యాస్ట్రో డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_piles',
    keywords: ['piles', 'hemorrhoid', 'hemorrhoids', 'rectal bleeding', 'blood in stool', 'పైల్స్', 'మొలలు', 'మలంలో రక్తం'],
    conditionTitle: { en: 'Piles (Hemorrhoids)', te: 'పైల్స్ (మొలలు)' },
    problemDescription: {
      en: 'Piles (hemorrhoids) are swollen, stretched blood vessels in the lower rectum and anus caused by chronic straining, hard stools, pregnancy pressure, or prolonged sitting—causing painless bright red bleeding, itching, or swollen lumps.',
      te: 'దీర్ఘకాలిక మలబద్ధకం, ఎక్కువసేపు కూర్చోవడం లేదా గర్భధారణ ఒత్తిడి వల్ల మలద్వారంలోని రక్తనాళాలు వాచి ఉబ్బడాన్ని పైల్స్ (మొలలు) అంటారు. ఇవి మలవిసర్జన సమయంలో రక్తస్రావం లేదా వాపును కలిగిస్తాయి.',
    },
    cautionMessage: {
      en: 'Avoid harsh irritant laxatives; consult a gastroenterologist for safe medical diagnosis and soothing treatment.',
      te: 'ఘాటైన విరేచన చిట్కాలు వాడకండి; సరైన చికిత్స కోసం గ్యాస్ట్రోఎంటరాలజిస్ట్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_fissure',
    keywords: ['fissure', 'anal fissure', 'anal tear', 'మలద్వార చీలిక'],
    conditionTitle: { en: 'Anal Fissure', te: 'ఆనల్ ఫిషర్ (మలద్వార చీలిక)' },
    problemDescription: {
      en: 'An anal fissure is a small, sharp tear in the thin lining of the lower anal canal, typically caused by passing unusually hard or dry stools. It produces sharp stinging pain during and after bowel movements along with streaks of bright red blood.',
      te: 'గట్టి మలం వెళ్లడం వల్ల మలద్వారపు సున్నితమైన పొరలో చిన్న చీలిక రావడాన్ని ఫిషర్ అంటారు. దీనివల్ల మలవిసర్జన సమయంలో మరియు తర్వాత తీవ్రమైన కోసినట్లు నొప్పి మరియు కొద్దిగా రక్తం వస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult a gastroenterologist for safe stool-softening guidance and prescription healing ointments.',
      te: 'మలం మెత్తబడే ఆహార నియమాలు మరియు సరైన వైద్య లేపనాల కోసం గ్యాస్ట్రో డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician'],
  },
  {
    id: 'bb_ibs_colitis',
    keywords: ['ibs', 'irritable bowel', 'colitis', 'crohn', 'celiac', 'inflammatory bowel', 'ఐబీఎస్', 'కోలైటిస్'],
    conditionTitle: { en: 'IBS, Colitis, or Chronic Bowel Disorder', te: 'IBS, కోలైటిస్ లేదా దీర్ఘకాలిక పేగు సమస్య' },
    problemDescription: {
      en: 'Irritable Bowel Syndrome (IBS) involves oversensitive gut nerves and altered bowel contractions causing recurring cramps, bloating, and alternating diarrhea or constipation. Colitis/IBD involves actual immune inflammation and ulceration of the colon lining.',
      te: 'IBS అంటే పేగు నరాల సున్నితత్వం వల్ల పదేపదే కడుపు నొప్పి, ఉబ్బరం మరియు మలవిసర్జన మార్పులు రావడం. కోలైటిస్ అంటే పెద్దపేగు లోపల వాపు లేదా పుండ్లు పడటం.',
    },
    cautionMessage: {
      en: 'Chronic bowel symptoms over 2+ weeks or weight loss/mucus require stool tests and evaluation by a gastroenterologist.',
      te: '2 వారాలకు పైగా ఉన్న పేగు సమస్యలు లేదా రక్తం/జిగురు ఉంటే గ్యాస్ట్రోఎంటరాలజిస్ట్‌ను కలవండి.',
    },
    recommendedSpecialties: ['gastro'],
  },
  {
    id: 'bb_hernia',
    keywords: ['hernia', 'inguinal', 'umbilical bulge', 'హెర్నియా'],
    conditionTitle: { en: 'Abdominal or Inguinal Hernia', te: 'హెర్నియా (కడుపు కండరాల వాపు)' },
    problemDescription: {
      en: 'A hernia occurs when internal fat or a loop of intestine pushes through a weakened spot in the abdominal or groin muscle wall—forming a noticeable bulge that often enlarges when coughing, standing, or lifting heavy objects.',
      te: 'కడుపు లేదా గజ్జల కండరాల గోడ బలహీనపడిన చోటు నుండి లోపలి కణజాలం లేదా పేగు భాగం బయటకు పొడుచుకు రావడాన్ని హెర్నియా అంటారు. దగ్గినప్పుడు లేదా బరువు ఎత్తినప్పుడు ఈ వాపు స్పష్టంగా కనిపిస్తుంది.',
    },
    cautionMessage: {
      en: 'Herbs cannot repair a muscle wall defect. Consult a physician/surgeon—seek emergency care if the bulge becomes hard, red, or acutely painful.',
      te: 'వాపు గట్టిగా, ఎర్రగా మారి తీవ్రమైన నొప్పి వస్తే వెంటనే ఆసుపత్రికి వెళ్లండి; సాధారణ పరీక్ష కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'gastro'],
  },
  {
    id: 'bb_food_poisoning',
    keywords: ['food poisoning', 'persistent vomiting', 'severe stomach', 'severe abdominal', 'dysentery', 'ఫుడ్ పాయిజనింగ్', 'ఆగని వాంతులు'],
    conditionTitle: { en: 'Food Poisoning or Dysentery', te: 'ఫుడ్ పాయిజనింగ్ లేదా రక్త విరేచనాలు' },
    problemDescription: {
      en: 'Food poisoning is an acute gut illness caused by eating food or water contaminated with bacteria, viruses, or bacterial toxins. It triggers sudden nausea, forceful vomiting, severe stomach cramps, and frequent watery or bloody stools.',
      te: 'కలుషిత ఆహారం లేదా నీటిలోని బ్యాక్టీరియా/విషపదార్థాల వల్ల అకస్మాత్తుగా వాంతులు, కడుపు మెలిపెట్టినట్లు నొప్పి మరియు తీవ్రమైన విరేచనాలు రావడాన్ని ఫుడ్ పాయిజనింగ్ అంటారు.',
    },
    cautionMessage: {
      en: 'If fluids will not stay down, stools contain blood, or dizziness develops, visit a clinic promptly for IV hydration and testing.',
      te: 'నీరు కూడా కడుపులో నిలవకపోయినా, మలంలో రక్తం ఉన్నా వెంటనే వైద్య సహాయం తీసుకోండి.',
    },
    recommendedSpecialties: ['gastro', 'general_physician', 'pediatrician'],
  },
  {
    id: 'bb_uti',
    keywords: ['uti', 'urinary', 'burning urine', 'painful urination', 'urine infection', 'cystitis', 'మూత్రం మంట', 'యూరిన్ ఇన్ఫెక్షన్'],
    conditionTitle: { en: 'Urinary Tract Infection (UTI)', te: 'మూత్రాశయ ఇన్ఫెక్షన్ (UTI)' },
    problemDescription: {
      en: 'A UTI is a bacterial infection (most commonly E. coli) that enters the urethra and multiplies inside the bladder—inflaming the urinary lining and causing burning urination, frequent urgent small voids, cloudy urine, and lower pelvic discomfort.',
      te: 'మూత్రనాళం ద్వారా బ్యాక్టీరియా మూత్రాశయంలోకి చేరి ఇన్ఫెక్షన్ కలిగించడాన్ని UTI అంటారు. దీనివల్ల మూత్రం పోసేటప్పుడు మంట, తరచుగా వెళ్లాలనిపించడం మరియు పొత్తికడుపు నొప్పి కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Untreated UTIs can ascend to the kidneys. Consult a physician for a urine test and targeted antibiotics.',
      te: 'చికిత్స చేయకపోతే ఈ ఇన్ఫెక్షన్ కిడ్నీలకు చేరే ప్రమాదం ఉంది; మూత్ర పరీక్ష కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'gastro'],
  },
  {
    id: 'bb_kidney_disease',
    keywords: ['kidney failure', 'creatinine', 'ckd', 'nephritis', 'dialysis', 'protein in urine', 'కిడ్నీ ఫెయిల్యూర్', 'క్రియాటినిన్'],
    conditionTitle: { en: 'Kidney Dysfunction / Elevated Creatinine', te: 'కిడ్నీ పనితీరు లోపం / క్రియాటినిన్ పెరుగుదల' },
    problemDescription: {
      en: 'Kidney dysfunction happens when the kidney filtering units (nephrons) lose capacity to clear waste products like creatinine and excess fluid from blood—often linked to uncontrolled diabetes, high blood pressure, or autoimmune inflammation.',
      te: 'రక్తంలోని వ్యర్థాలను మరియు అదనపు నీటిని వడపోసే కిడ్నీ సామర్థ్యం తగ్గడాన్ని కిడ్నీ లోపం అంటారు. దీనివల్ల రక్తంలో క్రియాటినిన్ పెరిగి కాళ్ల వాపు మరియు నీరసం రావచ్చు.',
    },
    cautionMessage: {
      en: 'NEVER take unregulated herbs or high-potassium mixtures with kidney issues—they can worsen creatinine. Consult a doctor immediately.',
      te: 'కిడ్నీ సమస్య ఉన్నవారు నాటు మందులు లేదా ఆకురసాలు అస్సలు వాడకండి; వెంటనే వైద్యుడిని సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },

  // Neurological & Head
  {
    id: 'bb_migraine',
    keywords: ['migraine', 'cluster headache', 'severe headache', 'aura headache', 'మైగ్రేన్', 'పార్శ్వపు తలనొప్పి'],
    conditionTitle: { en: 'Migraine Headache', te: 'మైగ్రేన్ (పార్శ్వపు తలనొప్పి)' },
    problemDescription: {
      en: 'Migraine is a recurring neurological disorder driven by trigeminal nerve and brain blood-vessel hypersensitivity—producing throbbing pain (usually one-sided), nausea, sensitivity to bright light and sound, and sometimes flashing visual auras.',
      te: 'మైగ్రేన్ అనేది మెదడు నాడులు మరియు రక్తనాళాల సున్నితత్వం వల్ల వచ్చే తీవ్రమైన తలనొప్పి. సాధారణంగా తల ఒకవైపు కొట్టుకున్నట్లు నొప్పి, వెలుతురు/శబ్దం భరించలేకపోవడం మరియు వికారం ఉంటాయి.',
    },
    cautionMessage: {
      en: 'Simple herbal teas rarely relieve acute migraines. Consult a physician for targeted migraine treatment and trigger control.',
      te: 'సాధారణ కషాయాలు మైగ్రేన్ నొప్పిని తగ్గించలేవు; సరైన చికిత్స కోసం వైద్యుడిని సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician', 'ent'],
  },
  {
    id: 'bb_vertigo',
    keywords: ['vertigo', 'bppv', 'dizzy', 'dizziness', 'room spinning', 'కళ్ళు తిరగడం', 'తల తిరగడం'],
    conditionTitle: { en: 'Vertigo & Balance Dizziness', te: 'వర్టిగో (చుట్టూ తిరుగుతున్నట్లు అనిపించడం)' },
    problemDescription: {
      en: 'Vertigo creates the false sensation that you or the room is spinning. It most often comes from displaced inner-ear calcium crystals (BPPV), inner-ear viral inflammation, fluid imbalance, or blood-pressure/nerve changes.',
      te: 'లోపలి చెవిలో బ్యాలెన్స్ కణాలు స్థానభ్రంశం చెందడం (BPPV), చెవి లోపల వాపు లేదా బీపీ మార్పుల వల్ల చుట్టూ ఉన్న వస్తువులు తిరుగుతున్నట్లు అనిపించడాన్ని వర్టిగో అంటారు.',
    },
    cautionMessage: {
      en: 'Sit or lie safely to avoid falls and see an ENT specialist or physician to diagnose the inner-ear cause.',
      te: 'పడిపోకుండా జాగ్రత్తగా కూర్చుని ENT లేదా జనరల్ డాక్టర్ ద్వారా చెవి మరియు బీపీ పరీక్ష చేయించుకోండి.',
    },
    recommendedSpecialties: ['ent', 'general_physician'],
  },
  {
    id: 'bb_stroke',
    keywords: ['stroke', 'paralysis', 'brain hemorrhage', 'slurred speech', 'face droop', 'పక్షవాతం', 'స్ట్రోక్'],
    conditionTitle: { en: 'Stroke or Sudden Paralysis', te: 'పక్షవాతం (Stroke) లేదా అకస్మాత్తు బలహీనత' },
    problemDescription: {
      en: 'A stroke occurs when blood supply to part of the brain is blocked by a clot (ischemic) or ruptured vessel (hemorrhagic)—starving brain tissue of oxygen and causing sudden facial drooping, arm/leg weakness, slurred speech, or vision loss.',
      te: 'మెదడుకు వెళ్లే రక్తనాళం గడ్డకట్టడం లేదా చిట్లడం వల్ల రక్త ప్రసరణ ఆగిపోవడాన్ని స్ట్రోక్ (పక్షవాతం) అంటారు. దీనివల్ల ముఖం వంకరపోవడం, ఒకవైపు చెయ్యి/కాలు బలహీనపడటం, మాట తడబడటం వస్తాయి.',
    },
    cautionMessage: {
      en: 'MEDICAL EMERGENCY: Every minute counts (F.A.S.T.). Call emergency services (108 / 112) immediately.',
      te: 'ఇది అత్యంత ప్రమాదకరమైన వైద్య అత్యవసర పరిస్థితి. ఒక్క నిమిషం కూడా ఆలస్యం చేయకుండా 108 కు కాల్ చేసి ఆసుపత్రికి వెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_epilepsy',
    keywords: ['epilepsy', 'seizure', 'seizures', 'convulsion', 'fits', 'మూర్ఛ', 'ఫిట్స్'],
    conditionTitle: { en: 'Epilepsy / Seizures', te: 'మూర్ఛ వ్యాధి (Epilepsy / Fits)' },
    problemDescription: {
      en: 'A seizure happens when sudden, abnormal bursts of electrical activity fire across brain neurons—causing involuntary shaking, muscle stiffening, staring spells, or brief loss of consciousness.',
      te: 'మెదడులోని నాడీ కణాలలో అకస్మాత్తుగా అసాధారణ విద్యుత్ సంకేతాలు ఏర్పడటం వల్ల శరీరం వణకడం, కండరాలు బిగుసుకుపోవడం లేదా స్పృహ తప్పడాన్ని మూర్ఛ (Seizure / Fits) అంటారు.',
    },
    cautionMessage: {
      en: 'Do NOT put spoons, onions, or keys in the person’s mouth; turn them gently onto one side and seek urgent medical care.',
      te: 'ఫిట్స్ వచ్చినప్పుడు నోట్లో ఇనుప వస్తువులు లేదా ఉల్లిపాయలు పెట్టకండి; పక్కకు తిప్పి వెంటనే వైద్య సహాయం తీసుకోండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_meningitis',
    keywords: ['meningitis', 'stiff neck', 'brain fever', 'మెదడు వాపు', 'మెనింజైటిస్'],
    conditionTitle: { en: 'Meningitis (Brain Lining Inflammation)', te: 'మెనింజైటిస్ (మెదడు పొరల వాపు)' },
    problemDescription: {
      en: 'Meningitis is inflammation of the protective membranes surrounding the brain and spinal cord, caused by viral or bacterial infection—typically producing sudden high fever, severe headache, painful neck stiffness, light sensitivity, and confusion.',
      te: 'మెదడు మరియు వెన్నుపాము చుట్టూ ఉండే రక్షణ పొరలకు వైరస్ లేదా బ్యాక్టీరియా వల్ల వాపు రావడాన్ని మెనింజైటిస్ అంటారు. తీవ్రమైన జ్వరం, మెడ బిగుసుకుపోవడం, తలనొప్పి మరియు మగత దీని లక్షణాలు.',
    },
    cautionMessage: {
      en: 'Seek emergency hospital evaluation immediately if fever occurs alongside a stiff neck or drowsiness.',
      te: 'జ్వరంతో పాటు మెడ బిగుసుకుపోవడం లేదా మగత ఉంటే వెంటనే అత్యవసర ఆసుపత్రికి వెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_parkinsons_tremor',
    keywords: ['parkinson', 'tremor', 'shaking hands', 'వణుకు', 'పార్కిన్సన్'],
    conditionTitle: { en: 'Parkinson’s Disease or Nerve Tremors', te: 'పార్కిన్సన్ వ్యాధి లేదా చేతుల వణుకు' },
    problemDescription: {
      en: 'Parkinson’s and essential tremors stem from nerve-signaling changes in the brain’s movement control centers (dopamine pathways), gradually causing resting hand tremors, muscle stiffness, slowed movement, or balance shifts.',
      te: 'మెదడులో కదలికలను నియంత్రించే డోపమైన్ నాడీ కణాలు తగ్గడం వల్ల చేతులు వణకడం, కండరాలు బిగుసుకుపోవడం మరియు నడక నెమ్మదించడం (పార్కిన్సన్) వంటి మార్పులు కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Consult a physician or neurologist for formal movement assessment and targeted dopamine-supporting medication.',
      te: 'సరైన నాడీ పరీక్ష మరియు మందుల కోసం జనరల్ ఫిజీషియన్ లేదా న్యూరాలజిస్ట్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_bells_palsy',
    keywords: ['bell palsy', "bell's palsy", 'facial paralysis', 'face droop', 'ముఖ పక్షవాతం'],
    conditionTitle: { en: 'Bell’s Palsy (Facial Nerve Weakness)', te: 'బెల్స్ పాల్సీ (ముఖ నరాల బలహీనత)' },
    problemDescription: {
      en: 'Bell’s palsy is sudden, temporary weakness or paralysis of muscles on one side of the face caused by swelling of the 7th cranial (facial) nerve—often making it difficult to close one eye fully or smile evenly.',
      te: 'ముఖ కదలికలను నియంత్రించే 7వ ముఖ నాడిలో వాపు రావడం వల్ల ముఖం ఒకవైపు బలహీనపడటాన్ని బెల్స్ పాల్సీ అంటారు. దీనివల్ల ఒక కన్ను పూర్తిగా మూయలేకపోవడం మరియు నవ్వినప్పుడు మూతి వంకరపోవడం కనిపిస్తాయి.',
    },
    cautionMessage: {
      en: 'Seek prompt physician evaluation within 48–72 hours (early steroid/eye-protection care greatly improves recovery) and rule out stroke.',
      te: '48 గంటలలోపే డాక్టర్‌ను కలవడం వల్ల త్వరగా కోలుకునే అవకాశం పెరుగుతుంది; కంటికి రక్షణ అవసరం.',
    },
    recommendedSpecialties: ['general_physician', 'ent'],
  },

  // ENT, Dental & Eye
  {
    id: 'bb_ear_infection',
    keywords: ['ear pain', 'earache', 'ear infection', 'otitis', 'ear discharge', 'చెవి నొప్పి', 'చెవి చీము'],
    conditionTitle: { en: 'Ear Infection (Otitis) or Earache', te: 'చెవి ఇన్ఫెక్షన్ లేదా చెవి నొప్పి' },
    problemDescription: {
      en: 'Ear infections arise when fluid traps behind the eardrum (otitis media) or bacteria/fungi grow in the moist ear canal (swimmer’s ear)—causing throbbing ear pain, muffled hearing, fullness, or fluid drainage.',
      te: 'కర్ణభేరి వెనుక ద్రవం చేరడం లేదా చెవి రంధ్రంలో బ్యాక్టీరియా/ఫంగస్ పెరగడం వల్ల చెవిలో తీవ్రమైన నొప్పి, చెవి దిబ్బడ మరియు చీము లేదా నీరు కారడం జరుగుతాయి.',
    },
    cautionMessage: {
      en: 'NEVER pour hot oil, garlic juice, or kitchen drops into the ear. See an ENT doctor for an otoscope check.',
      te: 'చెవిలో వేడి నూనె, వెల్లుల్లి రసం లేదా ఇంటి చుక్కలు అస్సలు వేయకండి. ENT డాక్టర్‌తో పరీక్ష చేయించుకోండి.',
    },
    recommendedSpecialties: ['ent', 'pediatrician'],
  },
  {
    id: 'bb_tinnitus_hearing',
    keywords: ['tinnitus', 'ringing ear', 'hearing loss', 'earwax', 'ear wax', 'చెవిలో మోత', 'వినపడకపోవడం'],
    conditionTitle: { en: 'Tinnitus (Ringing Ears), Earwax, or Hearing Loss', te: 'చెవిలో మోత (Tinnitus), గుబిలి లేదా వినికిడి లోపం' },
    problemDescription: {
      en: 'Ringing in the ears (tinnitus) and sudden muffled hearing often result from hardened earwax pressing against the eardrum, inner-ear hair-cell stress from loud noise, eustachian tube pressure, or age-related auditory nerve changes.',
      te: 'చెవిలో గుబిలి గట్టిపడి కర్ణభేరిని నొక్కడం, పెద్ద శబ్దాల వల్ల లోపలి చెవి కణాల ఒత్తిడి లేదా నాళాల అడ్డంకి వల్ల చెవిలో శబ్దాలు రావడం (Tinnitus) మరియు వినికిడి తగ్గడం జరుగుతాయి.',
    },
    cautionMessage: {
      en: 'Avoid cotton buds or sharp objects inside the ear canal; visit an ENT specialist for safe wax removal and hearing testing.',
      te: 'చెవిలో పుల్లలు లేదా ఇయర్ బడ్స్ పెట్టకండి; సురక్షిత పరీక్ష కోసం ENT వైద్యుడిని కలవండి.',
    },
    recommendedSpecialties: ['ent'],
  },
  {
    id: 'bb_tonsillitis',
    keywords: ['tonsils', 'tonsillitis', 'pus on throat', 'cant swallow', "can't swallow", 'టాన్సిల్స్', 'మింగలేకపోవడం'],
    conditionTitle: { en: 'Tonsillitis', te: 'టాన్సిలైటిస్ (టాన్సిల్స్ వాపు)' },
    problemDescription: {
      en: 'Tonsillitis is viral or bacterial (Group A Strep) inflammation of the two oval lymph pads at the back of the throat—making them bright red, swollen, sometimes dotted with white pus patches, and very painful when swallowing.',
      te: 'గొంతు వెనుక ఉండే టాన్సిల్స్ గ్రంథులకు వైరస్ లేదా బ్యాక్టీరియా ఇన్ఫెక్షన్ సోకి ఎర్రగా వాచిపోవడాన్ని టాన్సిలైటిస్ అంటారు. వీటిపై తెల్లటి మచ్చలు ఏర్పడి మింగడం చాలా కష్టమవుతుంది.',
    },
    cautionMessage: {
      en: 'Strep tonsillitis requires targeted antibiotics to prevent complications; consult an ENT specialist or pediatrician.',
      te: 'మింగలేనంత నొప్పి, జ్వరం లేదా టాన్సిల్స్‌పై తెల్లటి చీము ఉంటే ENT లేదా పిల్లల డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['ent', 'pediatrician'],
  },
  {
    id: 'bb_sinusitis',
    keywords: ['sinusitis', 'sinus infection', 'nasal polyp', 'deviated septum', 'సైనసైటిస్', 'సైనస్'],
    conditionTitle: { en: 'Acute or Chronic Sinusitis', te: 'సైనసైటిస్ (సైనస్ వాపు)' },
    problemDescription: {
      en: 'Sinusitis occurs when the air-filled cavities around the nose, cheeks, and forehead become swollen and blocked—trapping thick mucus and creating throbbing facial pressure when bending forward, nasal blockage, and post-nasal drip.',
      te: 'ముక్కు, బుగ్గలు మరియు నుదిటి వెనుక ఉండే గాలి గదులు (సైనస్) వాచి కఫంతో నిండిపోవడాన్ని సైనసైటిస్ అంటారు. దీనివల్ల ముఖంలో బరువు, తల వంచినప్పుడు నొప్పి మరియు ముక్కు దిబ్బడ వస్తాయి.',
    },
    cautionMessage: {
      en: 'If facial swelling, green/yellow discharge with fever, or symptoms >10 days persist, consult an ENT specialist.',
      te: '10 రోజులకు పైగా ముఖం నొప్పి లేదా జ్వరం ఉంటే ENT వైద్యుడిని సంప్రదించండి.',
    },
    recommendedSpecialties: ['ent', 'general_physician'],
  },
  {
    id: 'bb_conjunctivitis',
    keywords: ['pink eye', 'conjunctivitis', 'eye infection', 'red eye', 'eye discharge', 'కండ్లకలక', 'కళ్ళు ఎర్రగా'],
    conditionTitle: { en: 'Conjunctivitis (Pink Eye)', te: 'కండ్లకలక (Conjunctivitis)' },
    problemDescription: {
      en: 'Conjunctivitis is inflammation of the clear membrane covering the white of the eye and inner eyelids, triggered by viruses, bacteria, or allergens—causing bloodshot redness, gritty burning, watery or sticky pus discharge, and crusted lashes.',
      te: 'కంటి తెల్లగుడ్డుపై ఉండే పొరలో వైరస్, బ్యాక్టీరియా లేదా అలర్జీ వల్ల వాపు రావడాన్ని కండ్లకలక అంటారు. దీనివల్ల కళ్ళు ఎర్రబడటం, మంట, నీరు లేదా పుసి కారడం జరుగుతాయి.',
    },
    cautionMessage: {
      en: 'Do NOT put rose water, honey, or kitchen drops into eyes. Wash hands often and consult a doctor for sterile eye drops.',
      te: 'కళ్ళలో తేనె, గులాబీ నీరు లేదా ఇంటి చుక్కలు వేయకండి. స్టెరైల్ కంటి చుక్కల కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_cataract_glaucoma',
    keywords: ['cataract', 'glaucoma', 'blurred vision', 'eye pressure', 'eye pain', 'కంటిశుక్లం', 'గ్లాకోమా', 'కంటి నొప్పి'],
    conditionTitle: { en: 'Cataract, Glaucoma, or Blurred Vision', te: 'కంటిశుక్లం (Cataract), గ్లాకోమా లేదా చూపు మసకబారడం' },
    problemDescription: {
      en: 'A cataract is gradual clouding of the eye’s natural focusing lens causing hazy glare-sensitive vision, while glaucoma involves elevated fluid pressure inside the eyeball slowly pressing on the optic nerve—requiring dilated slit-lamp eye tests.',
      te: 'కంటి లోపలి లెన్స్ మసకబారడాన్ని కంటిశుక్లం (Cataract) అంటారు; కంటి లోపల ద్రవ ఒత్తిడి పెరిగి దృష్టి నరాన్ని దెబ్బతీయడాన్ని గ్లాకోమా అంటారు. వీటికి కంటి పరీక్షలు అవసరం.',
    },
    cautionMessage: {
      en: 'Sudden eye pain with halos around lights or vision loss is urgent—consult a physician/eye specialist right away.',
      te: 'అకస్మాత్తుగా కంటి నొప్పి, లైట్ల చుట్టూ వలయాలు లేదా చూపు తగ్గితే వెంటనే కంటి/వైద్య నిపుణుడిని కలవండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_stye_dental',
    keywords: ['gingivitis', 'bleeding gums', 'gum bleeding', 'wisdom tooth', 'root canal', 'tooth cavity', 'చిగుళ్ల రక్తం', 'పిప్పి పన్ను'],
    conditionTitle: { en: 'Gum Bleeding (Gingivitis) or Dental Abscess', te: 'చిగుళ్ల నుండి రక్తం కారడం లేదా లోతైన పంటి ఇన్ఫెక్షన్' },
    problemDescription: {
      en: 'Gingivitis is gum inflammation caused by bacterial plaque buildup along the gumline, making gums puffy and bleed easily. Deep cavities or impacted wisdom teeth can trap bacteria in tooth roots, forming painful jaw swelling or abscesses.',
      te: 'దంతాల చిగుళ్ల వద్ద బ్యాక్టీరియా పేరుకుపోవడం వల్ల చిగుళ్లు వాచి రక్తం కారడాన్ని జింజివైటిస్ అంటారు. లోతైన పిప్పి పన్ను లేదా జ్ఞాన దంతం వల్ల దవడ వాపు లేదా చీము ఏర్పడవచ్చు.',
    },
    cautionMessage: {
      en: 'Seek dental/ENT evaluation promptly if jaw swelling, fever, or pus appears around a tooth.',
      te: 'దవడ వాపు, జ్వరం లేదా పంటి వద్ద చీము కనిపిస్తే వెంటనే దంత లేదా ENT డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['ent', 'general_physician'],
  },

  // Endocrine, Metabolic & Blood
  {
    id: 'bb_diabetes',
    keywords: ['diabetes', 'diabetic', 'blood sugar', 'high sugar', 'glucose', 'insulin', 'hba1c', 'షుగర్', 'డయాబెటిస్', 'మధుమేహం'],
    conditionTitle: { en: 'Diabetes Mellitus (High Blood Sugar)', te: 'డయాబెటిస్ (మధుమేహం / షుగర్ వ్యాధి)' },
    problemDescription: {
      en: 'Diabetes is a metabolic condition where blood glucose stays elevated because the pancreas produces insufficient insulin (Type 1) or body cells resist insulin signals (Type 2). Over time, high glucose silently strains nerves, kidneys, eyes, and blood vessels.',
      te: 'ఇన్సులిన్ లోపం లేదా ఇన్సులిన్ సరిగ్గా పనిచేయకపోవడం వల్ల రక్తంలో చక్కెర స్థాయిలు పెరిగే స్థితిని డయాబెటిస్ అంటారు. నియంత్రించకపోతే ఇది నరాలు, కళ్ళు, కిడ్నీలు మరియు గుండెపై ప్రభావం చూపుతుంది.',
    },
    cautionMessage: {
      en: 'Never replace prescribed diabetes medication with herbal seeds/juices. Monitor fasting/HbA1c levels with your physician.',
      te: 'మెంతులు లేదా కషాయాల కోసం డాక్టర్ ఇచ్చిన షుగర్ మందులను ఆపకండి; క్రమం తప్పకుండా HbA1c పరీక్ష చేయించుకోండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_high_bp',
    keywords: ['hypertension', 'high bp', 'high blood pressure', 'blood pressure', 'అధిక రక్తపోటు', 'హై బీపీ'],
    conditionTitle: { en: 'Hypertension (High Blood Pressure)', te: 'అధిక రక్తపోటు (High BP)' },
    problemDescription: {
      en: 'Hypertension occurs when the force of blood pushing against artery walls stays persistently high (above 130/80–140/90 mmHg), forcing the heart to pump harder and gradually stiffening vessels—often without early warning signs.',
      te: 'రక్తనాళాల గోడలపై రక్త ఒత్తిడి నిరంతరం ఎక్కువగా ఉండటాన్ని హై బీపీ (Hypertension) అంటారు. ఇది గుండెపై అదనపు భారం వేసి, కాలక్రమేణా రక్తనాళాలను దెబ్బతీస్తుంది.',
    },
    cautionMessage: {
      en: 'Take prescribed BP medicines consistently and consult your doctor immediately if BP exceeds 180/120 or causes headache/chest pain.',
      te: 'బీపీ మందులను క్రమంగా వాడుతూ, రీడింగ్ బాగా ఎక్కువైనా లేదా తలనొప్పి/ఛాతీ నొప్పి వచ్చినా వెంటనే డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_low_bp',
    keywords: ['hypotension', 'low bp', 'low blood pressure', 'లో బీపీ', 'తక్కువ రక్తపోటు'],
    conditionTitle: { en: 'Hypotension (Low Blood Pressure)', te: 'తక్కువ రక్తపోటు (Low BP)' },
    problemDescription: {
      en: 'Low blood pressure happens when arterial pressure drops too low (often under 90/60 mmHg) to deliver brisk blood flow to the brain—caused by dehydration, prolonged standing, anemia, or medication effects, leading to lightheadedness or fainting.',
      te: 'రక్తపోటు 90/60 కంటే తగ్గి మెదడుకు రక్త ప్రసరణ నెమ్మదించడాన్ని లో బీపీ అంటారు. డీహైడ్రేషన్, రక్తహీనత లేదా మందుల ప్రభావం వల్ల తల తిరగడం, కళ్ళు బైర్లు కమ్మడం వస్తాయి.',
    },
    cautionMessage: {
      en: 'Lie down with legs slightly elevated if dizzy, and consult a physician to find out whether fluids, anemia, or heart meds are behind it.',
      te: 'తల తిరిగినప్పుడు కాళ్లు కొద్దిగా పైకి ఎత్తి పడుకోండి; కారణం తెలుసుకోవడానికి డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_thyroid',
    keywords: ['thyroid', 'hypothyroid', 'hyperthyroid', 'tsh', 'goiter', 'థైరాయిడ్'],
    conditionTitle: { en: 'Thyroid Disorder (Hypo / Hyperthyroidism)', te: 'థైరాయిడ్ సమస్య' },
    problemDescription: {
      en: 'The butterfly-shaped thyroid gland in the neck controls metabolic speed. Hypothyroidism slows metabolism causing fatigue, weight gain, dry skin, and cold sensitivity; hyperthyroidism speeds it up causing weight loss, sweating, tremors, and rapid pulse.',
      te: 'గొంతులోని థైరాయిడ్ గ్రంథి శరీర జీవక్రియ వేగాన్ని నియంత్రిస్తుంది. హార్మోన్లు తగ్గితే నీరసం, బరువు పెరగడం; పెరిగితే బరువు తగ్గడం, గుండె దడ, చెమటలు రావడం జరుగుతాయి.',
    },
    cautionMessage: {
      en: 'Thyroid hormone replacement or control requires TSH/T4 blood tests and exact medical dosing.',
      te: 'థైరాయిడ్ నియంత్రణకు TSH రక్త పరీక్ష మరియు డాక్టర్ సూచించిన ఖచ్చితమైన మందులు అవసరం.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_pcos',
    keywords: ['pcod', 'pcos', 'irregular period', 'missed period', 'menstrual', 'ovarian cyst', 'పీసీఓడీ', 'పీసీఓఎస్', 'నెలసరి'],
    conditionTitle: { en: 'PCOS / PCOD or Irregular Periods', te: 'PCOS / PCOD లేదా నెలసరి సమస్యలు' },
    problemDescription: {
      en: 'PCOS/PCOD is an endocrine condition where insulin resistance and higher androgen hormones disrupt normal egg release—leading to irregular or missed periods, small fluid-filled ovarian follicles, stubborn acne, and weight fluctuations.',
      te: 'ఇన్సులిన్ నిరోధకత మరియు హార్మోన్ల అసమతుల్యత వల్ల అండోత్సర్గం సరిగ్గా జరగకపోవడాన్ని PCOS/PCOD అంటారు. దీనివల్ల నెలసరి ఆలస్యం కావడం, అండాశయంలో నీటి తిత్తులు మరియు మొటిమలు వస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult a physician or gynecologist for pelvic ultrasound and hormone panels alongside balanced nutrition.',
      te: 'హార్మోన్ పరీక్షలు, స్కాన్ మరియు సరైన వైద్య సలహా కోసం డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_anemia',
    keywords: ['anemia', 'anaemia', 'hemoglobin', 'low hb', 'iron deficiency', 'రక్తహీనత', 'హిమోగ్లోబిన్'],
    conditionTitle: { en: 'Anemia (Low Hemoglobin)', te: 'రక్తహీనత (తక్కువ హిమోగ్లోబిన్)' },
    problemDescription: {
      en: 'Anemia develops when red blood cells or hemoglobin drop below healthy levels—commonly from iron, vitamin B12, or folate deficiency, or blood loss—reducing oxygen delivery to muscles and brain and causing pallor, breathlessness, and fatigue.',
      te: 'ఇనుము, విటమిన్ B12 లేదా ఫోలేట్ లోపం వల్ల శరీరంలో ఎర్ర రక్త కణాలు లేదా హిమోగ్లోబిన్ తగ్గిపోవడాన్ని రక్తహీనత అంటారు. దీనివల్ల ఆక్సిజన్ సరఫరా తగ్గి అలసట, పాలిపోవడం మరియు తల తిరగడం వస్తాయి.',
    },
    cautionMessage: {
      en: 'Get a CBC and iron/B12 blood panel so your doctor can prescribe the right therapeutic supplement strength.',
      te: 'ఏ లోపం వల్ల రక్తహీనత వచ్చిందో తెలుసుకోవడానికి రక్త పరీక్ష చేయించి డాక్టర్ ఇచ్చే మందులు వాడండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_cholesterol',
    keywords: ['cholesterol', 'triglyceride', 'lipid', 'కొలెస్ట్రాల్'],
    conditionTitle: { en: 'High Cholesterol / Lipid Imbalance', te: 'అధిక కొలెస్ట్రాల్ (Cholesterol)' },
    problemDescription: {
      en: 'High cholesterol means excess waxy LDL fats and triglycerides circulate in your blood—gradually forming fatty plaques inside artery walls (atherosclerosis) that narrow blood flow to the heart and brain over years.',
      te: 'రక్తంలో LDL చెడు కొలెస్ట్రాల్ మరియు ట్రైగ్లిజరైడ్లు ఎక్కువగా ఉండటం వల్ల రక్తనాళాల లోపల కొవ్వు పేరుకుపోయి రక్త ప్రవాహం తగ్గే ప్రమాదం ఉంటుంది.',
    },
    cautionMessage: {
      en: 'Track fasting lipid profile panels with your physician to assess cardiovascular risk and whether medication is needed.',
      te: 'లిపిడ్ ప్రొఫైల్ రక్త పరీక్ష చేయించుకుని వైద్యుడి సలహా మేరకు ఆహారం మరియు మందులు పాటించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_vitamin_deficiency',
    keywords: ['vitamin d', 'vitamin b12', 'calcium deficiency', 'deficiency', 'విటమిన్ లోపం'],
    conditionTitle: { en: 'Vitamin D, B12, or Calcium Deficiency', te: 'విటమిన్ D, B12 లేదా కాల్షియం లోపం' },
    problemDescription: {
      en: 'Vitamin D and calcium deficiencies weaken bone mineralization and trigger muscle aches, while low vitamin B12 impairs nerve insulation and red blood cell production—causing hand/foot tingling ("pins and needles"), memory fog, and fatigue.',
      te: 'విటమిన్ D మరియు కాల్షియం తగ్గితే ఎముకలు బలహీనపడి కండరాల నొప్పులు వస్తాయి; విటమిన్ B12 లోపం వల్ల కాళ్లు, చేతులలో తిమ్మిరి మరియు అలసట కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Blood level testing ensures you receive safe, accurate supplementation instead of guessing doses.',
      te: 'రక్త పరీక్ష ద్వారా లోపాన్ని నిర్ధారించుకుని డాక్టర్ సూచించిన మోతాదులో విటమిన్లు తీసుకోండి.',
    },
    recommendedSpecialties: ['general_physician', 'orthopedic'],
  },

  // Orthopedic & Musculoskeletal
  {
    id: 'bb_arthritis',
    keywords: ['arthritis', 'osteoarthritis', 'rheumatoid', 'swollen knee', 'swollen joint', 'ఆర్థరైటిస్', 'కీళ్ల వాపు'],
    conditionTitle: { en: 'Arthritis & Chronic Joint Inflammation', te: 'ఆర్థరైటిస్ (దీర్ఘకాలిక కీళ్ల వాపు & అరుగుదల)' },
    problemDescription: {
      en: 'Osteoarthritis develops when protective joint cartilage gradually wears down so bones rub closely, while rheumatoid arthritis is an autoimmune attack inflaming the joint lining—both causing stiffness, swelling, warmth, and limited joint motion.',
      te: 'కీళ్ల మధ్య మృదులాస్థి అరిగిపోవడం (ఆస్టియో ఆర్థరైటిస్) లేదా రోగనిరోధక వ్యవస్థ కీళ్ల పొరపై దాడి చేయడం (రుమటాయిడ్) వల్ల కీళ్లు వాచి బిగుతుగా మారతాయి.',
    },
    cautionMessage: {
      en: 'Never massage an acutely hot, red, swollen joint. Consult an orthopedic doctor for X-rays or arthritis blood tests.',
      te: 'ఎర్రగా వేడిగా వాచిన కీలుపై మర్దన చేయకండి. ఆర్థోపెడిక్ డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['orthopedic', 'general_physician'],
  },
  {
    id: 'bb_gout',
    keywords: ['gout', 'uric acid', 'big toe pain', 'గౌట్', 'యూరిక్ యాసిడ్'],
    conditionTitle: { en: 'Gout (Uric Acid Crystal Arthritis)', te: 'గౌట్ (యూరిక్ యాసిడ్ కీళ్ల నొప్పి)' },
    problemDescription: {
      en: 'Gout is a painful inflammatory arthritis triggered when excess uric acid in the blood forms sharp, needle-like crystals inside a joint—most classically causing sudden overnight redness, heat, and intense swelling in the base of the big toe, ankle, or knee.',
      te: 'రక్తంలో యూరిక్ యాసిడ్ ఎక్కువై కీళ్లలో (ముఖ్యంగా కాలి బొటనవేలు లేదా చీలమండ వద్ద) సూదిలాంటి స్ఫటికాలుగా పేరుకుపోవడం వల్ల అకస్మాత్తుగా ఎరుపు, వేడి మరియు భరించలేని నొప్పి వస్తుంది.',
    },
    cautionMessage: {
      en: 'Avoid applying hot oils during a gout flare and see a doctor for serum uric acid testing and flare control.',
      te: 'గౌట్ వాపు ఉన్నప్పుడు వేడి నూనె రాయకండి; యూరిక్ యాసిడ్ రక్త పరీక్ష కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['orthopedic', 'general_physician'],
  },
  {
    id: 'bb_sciatica',
    keywords: ['sciatica', 'slip disc', 'herniated disc', 'pinched nerve', 'సయాటికా', 'స్లిప్ డిస్క్'],
    conditionTitle: { en: 'Sciatica or Slipped Disc', te: 'సయాటికా లేదా స్లిప్ డిస్క్' },
    problemDescription: {
      en: 'Sciatica happens when a bulging or herniated spinal disc (or tight piriformis muscle) compresses the large sciatic nerve root in the lower spine—sending sharp, shooting, burning pain or electric tingling down one buttock, thigh, and calf.',
      te: 'వెన్నుపూసల మధ్య ఉండే డిస్క్ పక్కకు జరిగి సయాటిక్ నరాన్ని నొక్కడం వల్ల నడుము నుండి పిరుదు, తొడ మరియు కాలి వరకు కరెంట్ షాక్ లాంటి లేదా మంటతో కూడిన నొప్పి పాకుతుంది.',
    },
    cautionMessage: {
      en: 'Consult an orthopedic specialist promptly—especially if leg weakness, foot drop, or numbness appears.',
      te: 'కాలిలో తిమ్మిరి లేదా బలహీనత కనిపిస్తే వెంటనే ఆర్థోపెడిక్ వైద్యుడిని సంప్రదించండి.',
    },
    recommendedSpecialties: ['orthopedic'],
  },
  {
    id: 'bb_back_spondylosis',
    keywords: ['back pain', 'lower back', 'spondylosis', 'cervical', 'spine pain', 'నడుము నొప్పి', 'వెన్నునొప్పి', 'స్పాండిలోసిస్'],
    conditionTitle: { en: 'Persistent Back Pain or Spondylosis', te: 'నడుము నొప్పి లేదా స్పాండిలోసిస్' },
    problemDescription: {
      en: 'Persistent back pain and cervical/lumbar spondylosis arise from age-related wear in spinal discs and facet joints, deep muscle spasm, or nerve-root crowding—causing neck/back stiffness, headaches at the skull base, or arm/leg heaviness.',
      te: 'వెన్నుపూసల డిస్క్‌లు అరిగిపోవడం, కండరాల బిగుతు లేదా నరాలపై ఒత్తిడి వల్ల దీర్ఘకాలిక మెడ నొప్పి (సర్వైకల్ స్పాండిలోసిస్) మరియు నడుము నొప్పి కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Seek orthopedic evaluation and guided physiotherapy rather than forceful back cracking or heavy lifting.',
      te: 'బరువులు ఎత్తడం లేదా గట్టి మర్దనలు ఆపి ఆర్థోపెడిక్ డాక్టర్ మరియు ఫిజియోథెరపీ సలహా తీసుకోండి.',
    },
    recommendedSpecialties: ['orthopedic', 'general_physician'],
  },
  {
    id: 'bb_fracture_sprain',
    keywords: ['fracture', 'broken bone', 'sprain', 'ligament', 'acl', 'meniscus', 'dislocation', 'cannot walk', "can't walk", 'ఎముక', 'బెణుకు', 'నడవలేక'],
    conditionTitle: { en: 'Fracture, Severe Sprain, or Ligament Tear', te: 'ఎముక పగులు (Fracture) లేదా లిగమెంట్ బెణుకు' },
    problemDescription: {
      en: 'A sprain involves stretched or torn stabilizing ligaments around a joint, while a fracture is a structural crack or break in bone—typically after a fall, twist, or impact, resulting in rapid swelling, bruising, deformity, or inability to bear weight.',
      te: 'కీలు దగ్గర కండర బంధాలు (లిగమెంట్లు) సాగడం/చిరగడాన్ని బెణుకు అని, ఎముక విరగడాన్ని ఫ్రాక్చర్ అని అంటారు. దెబ్బ తగిలిన తర్వాత వాపు, రంగు మారడం మరియు అడుగు వేయలేకపోవడం ఉంటాయి.',
    },
    cautionMessage: {
      en: 'Immobilize the limb, NEVER massage it, and get an X-ray and orthopedic evaluation right away.',
      te: 'గాయమైన చోట మర్దన చేయకండి. ఎముక కదలకుండా ఉంచి వెంటనే ఎక్స్-రే మరియు ఆర్థోపెడిక్ పరీక్ష చేయించండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['orthopedic'],
  },
  {
    id: 'bb_shoulder_carpal_heel',
    keywords: ['frozen shoulder', 'carpal tunnel', 'plantar fasciitis', 'heel spur', 'tennis elbow', 'bursitis', 'tendonitis', 'ఫ్రోజెన్ షోల్డర్', 'కార్పల్ టన్నెల్'],
    conditionTitle: { en: 'Tendonitis, Frozen Shoulder, Carpal Tunnel, or Heel Spur', te: 'టెండనైటిస్, ఫ్రోజెన్ షోల్డర్, కార్పల్ టన్నెల్ లేదా మడమ నొప్పి' },
    problemDescription: {
      en: 'These conditions are localized soft-tissue or nerve-entrapment disorders: frozen shoulder thickens the shoulder capsule; carpal tunnel pinches a wrist nerve causing finger numbness; and plantar fasciitis/tendonitis inflame overused fibrous bands at the heel or elbow.',
      te: 'భుజం కీలు గట్టిపడటం (Frozen shoulder), మణికట్టు వద్ద నరం ఒత్తిడికి గురై వేళ్లు తిమ్మిరెక్కడం (Carpal tunnel), లేదా అరికాలి స్నాయువు వాపు (Plantar fasciitis) వల్ల ఈ కీళ్ల/స్నాయువుల నొప్పులు వస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult an orthopedic specialist for targeted stretches, ergonomic splints, or anti-inflammatory treatment.',
      te: 'సరైన వ్యాయామాలు, సపోర్ట్ మరియు చికిత్స కోసం ఆర్థోపెడిక్ డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['orthopedic'],
  },

  // Skin, Hair & Viral Rashes
  {
    id: 'bb_ringworm',
    keywords: ['ringworm', 'fungal', 'tinea', 'athlete foot', 'jock itch', 'తామర', 'ఫంగల్'],
    conditionTitle: { en: 'Fungal Skin Infection (Ringworm / Tinea)', te: 'తామర (Ringworm / ఫంగల్ ఇన్ఫెక్షన్)' },
    problemDescription: {
      en: 'Ringworm (tinea) is a contagious surface fungal infection caused by dermatophyte fungi feeding on skin keratin in warm, damp areas. It creates distinct circular, raised, scaly, intensely itchy red rings with clearer skin in the middle.',
      te: 'తేమ మరియు చెమట ఉండే చర్మ భాగాలలో ఫంగస్ పెరగడం వల్ల వలయాకారంలో ఎర్రటి అంచులతో, తీవ్రమైన దురదతో కూడిన మచ్చలు (తామర) ఏర్పడతాయి.',
    },
    cautionMessage: {
      en: 'Do NOT apply garlic paste (causes chemical burns) or over-the-counter steroid creams (worsens fungus). See a doctor for proper antifungals.',
      te: 'తామరపై వెల్లుల్లి రసం లేదా తెలియని స్టెరాయిడ్ క్రీములు రాయకండి; సరైన యాంటీ-ఫంగల్ మందుల కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_eczema',
    keywords: ['eczema', 'dermatitis', 'atopic', 'ఎగ్జిమా', 'చర్మపు పొర వాపు'],
    conditionTitle: { en: 'Eczema (Atopic Dermatitis)', te: 'ఎగ్జిమా (చర్మపు వాపు & పొడి దురద)' },
    problemDescription: {
      en: 'Eczema is a chronic skin-barrier condition where the skin loses moisture easily and overreacts to soaps, dust, or dry air—causing red, cracked, leathery, intensely itchy patches (often behind knees, elbows, or hands).',
      te: 'చర్మపు రక్షణ పొర బలహీనపడి తేమను కోల్పోవడం వల్ల సబ్బులు, దుమ్ముకు చర్మం ఎర్రగా, పొడిగా మారి పగిలి తీవ్రమైన దురద రావడాన్ని ఎగ్జిమా అంటారు.',
    },
    cautionMessage: {
      en: 'Use fragrance-free moisturizers and consult a physician for safe flare-control creams rather than irritating spices.',
      te: 'సువాసన లేని మాయిశ్చరైజర్లు వాడుతూ సరైన వైద్య క్రీముల కోసం డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_psoriasis',
    keywords: ['psoriasis', 'silvery scale', 'సోరియాసిస్'],
    conditionTitle: { en: 'Psoriasis', te: 'సోరియాసిస్ (Psoriasis)' },
    problemDescription: {
      en: 'Psoriasis is an immune-mediated skin condition that speeds up skin-cell turnover by nearly 10x—causing new cells to pile rapidly on the surface as thick, well-defined red plaques topped with silvery-white scales (commonly on elbows, knees, or scalp).',
      te: 'రోగనిరోధక వ్యవస్థలో మార్పుల వల్ల చర్మ కణాలు సాధారణం కంటే చాలా వేగంగా పెరిగి, మోచేతులు, మోకాళ్లు లేదా తలపై వెండి రంగు పొలుసులతో కూడిన ఎర్రటి మందపాటి మచ్చలు ఏర్పడటాన్ని సోరియాసిస్ అంటారు.',
    },
    cautionMessage: {
      en: 'Scrubbing scales or applying harsh herbs can flare plaques (Koebner effect). Consult a physician for dermatological care.',
      te: 'పొలుసులను గట్టిగా రుద్దకండి; సరైన వైద్య చికిత్స కోసం డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_hives_allergy',
    keywords: ['hives', 'urticaria', 'skin allergy', 'allergy', 'rash', 'దద్దుర్లు', 'అలర్జీ'],
    conditionTitle: { en: 'Hives (Urticaria) or Allergic Skin Rash', te: 'దద్దుర్లు (Hives) లేదా చర్మ అలర్జీ' },
    problemDescription: {
      en: 'Hives and allergic rashes happen when skin mast cells release histamine in response to foods, medicines, insect stings, heat, or contact allergens—producing sudden raised, pale-red, itchy welts that shift shape and location.',
      te: 'ఆహారం, మందులు, కీటకాలు లేదా వేడి వల్ల చర్మంలోని హిస్టామిన్ విడుదలై అకస్మాత్తుగా ఎత్తైన, దురదతో కూడిన ఎర్రటి దద్దుర్లు (Hives) రావడాన్ని చర్మ అలర్జీ అంటారు.',
    },
    cautionMessage: {
      en: 'EMERGENCY WARNING: If a rash appears with swollen lips/tongue, hoarse voice, or breathing trouble (anaphylaxis), go to an ER immediately.',
      te: 'దద్దుర్లతో పాటు పెదాలు/నాలుక వాపు లేదా శ్వాస అందకపోతే వెంటనే అత్యవసర ఆసుపత్రికి వెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_acne',
    keywords: ['acne', 'pimples', 'pimple', 'blackhead', 'cystic acne', 'మొటిమలు'],
    conditionTitle: { en: 'Acne & Cystic Pimples', te: 'మొటిమలు (Acne)' },
    problemDescription: {
      en: 'Acne forms when skin pores (hair follicles) get plugged by excess oil (sebum) and shed skin cells, allowing Cutibacterium acnes bacteria inside the pore to trigger inflamed whiteheads, blackheads, or deep tender cysts.',
      te: 'చర్మ రంధ్రాలు అధిక నూనె (సెబమ్) మరియు మృతకణాలతో మూసుకుపోయి, వాటిలో బ్యాక్టీరియా పెరగడం వల్ల ఎర్రటి పొక్కులు లేదా నొప్పిగా ఉండే మొటిమలు ఏర్పడతాయి.',
    },
    cautionMessage: {
      en: 'Never apply undiluted lemon juice, toothpaste, or baking soda to pimples—they burn and scar skin. Consult a doctor for safe topical care.',
      te: 'మొటిమలపై నిమ్మరసం, టూత్‌పేస్ట్ లేదా బేకింగ్ సోడా రాయకండి; అవి చర్మాన్ని దెబ్బతీసి మచ్చలు కలిగిస్తాయి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_dandruff',
    keywords: ['dandruff', 'seborrheic', 'flaky scalp', 'చుండ్రు'],
    conditionTitle: { en: 'Dandruff (Seborrheic Dermatitis)', te: 'చుండ్రు (Dandruff)' },
    problemDescription: {
      en: 'Dandruff occurs when Malassezia yeast naturally living on the scalp overgrows in scalp oil, producing oleic acid that irritates sensitive scalp skin into shedding visible white or yellowish oily flakes with itching.',
      te: 'తల చర్మంపై ఉండే నూనెలో మాలాసెజియా అనే సహజ ఫంగస్ ఎక్కువగా పెరిగి చర్మాన్ని చికాకుపరచడం వల్ల తలలో దురద మరియు తెల్లటి/పసుపు పొలుసులు (చుండ్రు) రాలుతాయి.',
    },
    cautionMessage: {
      en: 'Heavy oiling can sometimes feed scalp yeast further; consult a doctor for targeted medicated ketoconazole/zinc washes if flaking persists.',
      te: 'తలపై నూనె ఎక్కువగా ఉంచడం కొన్నిసార్లు చుండ్రును పెంచవచ్చు; తగ్గకపోతే డాక్టర్ సూచించే మెడికేటెడ్ షాంపూ వాడండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_hair_fall',
    keywords: ['hair fall', 'hair loss', 'alopecia', 'baldness', 'thinning hair', 'జుట్టు రాలడం', 'బట్టతల'],
    conditionTitle: { en: 'Hair Fall / Alopecia', te: 'జుట్టు రాలడం (Hair Fall / Alopecia)' },
    problemDescription: {
      en: 'Excessive hair shedding or patchy thinning commonly stems from disrupted hair-growth cycles due to iron/ferritin or vitamin D/B12 deficiency, thyroid imbalance, post-illness stress (telogen effluvium), PCOS, or hereditary follicle sensitivity.',
      te: 'ఇనుము/విటమిన్ లోపాలు, థైరాయిడ్, జ్వరం తర్వాత వచ్చే ఒత్తిడి, PCOS లేదా వంశపారంపర్య కారణాల వల్ల జుట్టు కుదుళ్ల పెరుగుదల చక్రం దెబ్బతిని జుట్టు అధికంగా రాలడం జరుగుతుంది.',
    },
    cautionMessage: {
      en: 'Consult a physician for iron, thyroid, and vitamin blood checks rather than relying solely on topical oils.',
      te: 'రక్త పరీక్షల ద్వారా (ఐరన్, థైరాయిడ్, విటమిన్లు) జుట్టు రాలడానికి అసలు కారణాన్ని తెలుసుకుని చికిత్స తీసుకోండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_vitiligo_scabies',
    keywords: ['vitiligo', 'white patch', 'scabies', 'boil', 'abscess', 'బొల్లి', 'గజ్జి', 'గడ్డ'],
    conditionTitle: { en: 'Vitiligo, Scabies, or Skin Abscess', te: 'బొల్లి (Vitiligo), గజ్జి (Scabies) లేదా చీము గడ్డ' },
    problemDescription: {
      en: 'Vitiligo causes loss of pigment-producing melanocytes creating smooth white patches; scabies is a contagious microscopic mite burrow causing intense nighttime itching; and a boil/abscess is a deep pocket of bacterial pus inside an infected hair follicle.',
      te: 'చర్మంలో రంగు కణాలు తగ్గి తెల్ల మచ్చలు రావడాన్ని బొల్లి (Vitiligo), సూక్ష్మ పరాన్నజీవి వల్ల రాత్రి దురద రావడాన్ని గజ్జి (Scabies), లోతైన బ్యాక్టీరియా వాపును చీము గడ్డ అంటారు.',
    },
    cautionMessage: {
      en: 'Never squeeze a deep boil or apply caustic herbs to white patches. Consult a physician for proper medical care.',
      te: 'చీము గడ్డలను పిండకండి, తెల్ల మచ్చలపై ఘాటైన లేపనాలు రాయకండి. వైద్యుడిని సంప్రదించండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_chickenpox',
    keywords: ['chickenpox', 'chicken pox', 'varicella', 'ఆటలమ్మ'],
    conditionTitle: { en: 'Chickenpox (Varicella)', te: 'ఆటలమ్మ (Chickenpox)' },
    problemDescription: {
      en: 'Chickenpox is a highly contagious viral illness caused by the varicella-zoster virus. After mild fever and fatigue, crops of itchy red spots rapidly turn into clear fluid-filled blisters ("dewdrops on a rose petal") across the trunk, face, and scalp before crusting.',
      te: 'ఆటలమ్మ అనేది వేరిసెల్లా-జోస్టర్ వైరస్ వల్ల వచ్చే అంటువ్యాధి. జ్వరం తర్వాత శరీరంపై దురదతో కూడిన ఎర్రటి పొక్కులు వచ్చి వాటిలో నీరు చేరి తర్వాత ఎండిపోతాయి.',
    },
    cautionMessage: {
      en: 'Do not scratch blisters or give aspirin to children. Isolate and consult a physician/pediatrician.',
      te: 'పొక్కులను గీరకండి; పిల్లలకు ఆస్పిరిన్ ఇవ్వకండి. ఇతరులకు అంటకుండా ఉంటూ వైద్యుడి సలహా తీసుకోండి.',
    },
    recommendedSpecialties: ['pediatrician', 'general_physician'],
  },
  {
    id: 'bb_shingles',
    keywords: ['shingles', 'herpes zoster', 'షింగిల్స్'],
    conditionTitle: { en: 'Shingles (Herpes Zoster)', te: 'షింగిల్స్ (సర్పి / Herpes Zoster)' },
    problemDescription: {
      en: 'Shingles happens when dormant varicella-zoster virus reactivates along a single sensory nerve pathway years after chickenpox—producing burning or tingling nerve pain followed by a strip of fluid blisters along one side of the torso or face.',
      te: 'చిన్నప్పుడు వచ్చిన ఆటలమ్మ వైరస్ నరాలలో ఉండి మళ్లీ తిరగబెట్టడం వల్ల శరీరంలో ఒకవైపు మాత్రమే నరం వెంట మంట నొప్పి మరియు నీటి పొక్కుల వరుస రావడాన్ని షింగిల్స్ అంటారు.',
    },
    cautionMessage: {
      en: 'Starting prescription antiviral medicine within 72 hours markedly reduces long-term nerve pain—contact a physician quickly.',
      te: '72 గంటలలోపు డాక్టర్ ఇచ్చే యాంటీ-వైరల్ మందులు వాడితే దీర్ఘకాలిక నరాల నొప్పి తగ్గుతుంది. వెంటనే డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_measles_mumps',
    keywords: ['measles', 'mumps', 'rubella', 'తట్టు', 'గవదబిళ్ళలు'],
    conditionTitle: { en: 'Measles or Mumps', te: 'తట్టు (Measles) లేదా గవదబిళ్ళలు (Mumps)' },
    problemDescription: {
      en: 'Measles is an airborne viral infection causing high fever, red watery eyes, cough, and a blotchy red rash spreading downward from the hairline. Mumps is a viral infection swelling the salivary (parotid) glands beneath the ears and jaw.',
      te: 'తట్టు వ్యాధిలో అధిక జ్వరం, కళ్ళు ఎర్రబడటం మరియు ముఖం నుండి శరీరానికి ఎర్రటి దద్దుర్లు వస్తాయి. గవదబిళ్ళలలో చెవి క్రింద దవడ ప్రక్కన లాలాజల గ్రంథులు వాస్తాయి.',
    },
    cautionMessage: {
      en: 'Consult a pediatrician or physician right away to monitor hydration and prevent ear/lung complications.',
      te: 'నీరసం లేదా ఇతర సమస్యలు రాకుండా వెంటనే పిల్లల డాక్టర్ లేదా జనరల్ డాక్టర్‌ను సంప్రదించండి.',
    },
    recommendedSpecialties: ['pediatrician', 'general_physician'],
  },

  // Wounds, Bites, Vascular & Mental Health
  {
    id: 'bb_deep_burn',
    keywords: ['deep burn', 'blister burn', 'chemical burn', 'electrical burn', 'బొబ్బల కాలిన గాయం', 'లోతైన కాలిన గాయం'],
    conditionTitle: { en: 'Deep or Blistering Burn', te: 'బొబ్బలు వచ్చిన లేదా లోతైన కాలిన గాయం' },
    problemDescription: {
      en: 'Second- or third-degree burns damage deeper dermal skin layers, forming painful fluid blisters or pale/charred tissue. Breaking blisters or applying unsterile household pastes risks severe bacterial infection and permanent scarring.',
      te: 'చర్మపు లోపలి పొరల వరకు కాలినప్పుడు నొప్పిగా ఉండే నీటి బొబ్బలు ఏర్పడతాయి లేదా చర్మం తెల్లగా/నల్లగా మారుతుంది. వీటిపై ఇంటి లేపనాలు రాస్తే ఇన్ఫెక్షన్ మరియు మచ్చలు వచ్చే ప్రమాదం ఎక్కువ.',
    },
    cautionMessage: {
      en: 'Run cool (not ice) water gently for 15 minutes, do NOT pop blisters or apply toothpaste/turmeric, and visit a clinic immediately.',
      te: 'చల్లని నీటితో కడిగి, బొబ్బలను చిదమకుండా మరియు టూత్‌పేస్ట్/పసుపు రాయకుండా వెంటనే డాక్టర్ వద్దకు వెళ్లండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_deep_cut_bleeding',
    keywords: ['deep cut', 'heavy bleeding', 'bleeding', 'stitches', 'లోతైన గాయం', 'రక్తస్రావం'],
    conditionTitle: { en: 'Deep Cut or Uncontrolled Bleeding', te: 'లోతైన కోత లేదా ఆగని రక్తస్రావం' },
    problemDescription: {
      en: 'Deep lacerations or wounds that gape open or bleed steadily can involve severed blood vessels, tendons, or deep contamination that need sterile irrigation, stitches, and tetanus protection.',
      te: 'లోతైన కోత గాయాలు మరియు ఆగని రక్తస్రావంలో రక్తనాళాలు లేదా స్నాయువులు దెబ్బతినే అవకాశం ఉంటుంది; వీటికి శుభ్రమైన డ్రెస్సింగ్, కుట్లు మరియు టెటనస్ ఇంజెక్షన్ అవసరం.',
    },
    cautionMessage: {
      en: 'Press firmly with clean cloth and seek urgent medical care—do not pack deep wounds with turmeric or coffee powder.',
      te: 'శుభ్రమైన వస్త్రంతో నొక్కి పట్టి వెంటనే ఆసుపత్రికి వెళ్లండి; కోత లోపల పసుపు లేదా పొడులు వేయకండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_animal_bite',
    keywords: ['dog bite', 'cat bite', 'monkey bite', 'animal bite', 'snake bite', 'scorpion sting', 'కుక్క కాటు', 'పాము కాటు', 'తేలు కుట్టు'],
    conditionTitle: { en: 'Animal Bite, Snake Bite, or Venomous Sting', te: 'జంతువు కాటు, పాము కాటు లేదా విషపు కుట్టు' },
    problemDescription: {
      en: 'Dog, cat, or monkey bites inject deep bacteria and carry risk of fatal rabies virus infection even from minor scratches. Snake bites and scorpion stings can deliver toxins affecting nerves, blood clotting, or heart rhythm.',
      te: 'కుక్క, పిల్లి లేదా కోతి కాటు ద్వారా లోతైన బ్యాక్టీరియాతో పాటు ప్రమాదకరమైన రేబిస్ వైరస్ సోకే అవకాశం ఉంటుంది. పాము/తేలు కాటులో విషం నాడీ మరియు రక్త వ్యవస్థపై ప్రభావం చూపుతుంది.',
    },
    cautionMessage: {
      en: 'Wash animal bites thoroughly with soap & running water for 15 minutes and go straight to a hospital for rabies/tetanus vaccines or antivenom.',
      te: 'సబ్బు నీటితో 15 నిమిషాలు శుభ్రంగా కడిగి, ఆలస్యం చేయకుండా ఆసుపత్రిలో రేబిస్/యాంటీ-వెనమ్ ఇంజెక్షన్లు తీసుకోండి.',
    },
    isEmergency: true,
    recommendedSpecialties: ['general_physician', 'pediatrician'],
  },
  {
    id: 'bb_varicose_hydrocele',
    keywords: ['varicose', 'varicose veins', 'dvt', 'blood clot', 'వెరికోస్', 'రక్తం గడ్డ'],
    conditionTitle: { en: 'Varicose Veins or Deep Vein Clot (DVT)', te: 'వెరికోస్ వెయిన్స్ లేదా రక్తనాళాల్లో గడ్డ (DVT)' },
    problemDescription: {
      en: 'Varicose veins develop when tiny one-way valves inside leg veins weaken, allowing blood to pool and bulge veins blue under the skin. A deep vein thrombosis (DVT) is a dangerous clot inside a deep leg vein causing sudden one-sided calf swelling and warmth.',
      te: 'కాళ్లలోని సిరల కవాటాలు బలహీనపడి రక్తం కిందకు చేరడం వల్ల వెరికోస్ వెయిన్స్ నీలంగా ఉబ్బుతాయి. లోతైన సిరలో రక్తం గడ్డకడితే (DVT) ఒక కాలు అకస్మాత్తుగా వాచి వేడిగా నొప్పిగా ఉంటుంది.',
    },
    cautionMessage: {
      en: 'Avoid vigorous calf massage if one leg is suddenly swollen and warm; get a Doppler ultrasound via a physician.',
      te: 'ఒక్కసారిగా ఒక కాలు వాచి వేడిగా ఉంటే మర్దన చేయకండి; వెంటనే డాప్లర్ స్కాన్ కోసం డాక్టర్‌ను కలవండి.',
    },
    recommendedSpecialties: ['general_physician', 'orthopedic'],
  },
  {
    id: 'bb_sleep_apnea',
    keywords: ['sleep apnea', 'snoring severe', 'choking sleep', 'స్లీప్ అప్నియా'],
    conditionTitle: { en: 'Sleep Apnea', te: 'స్లీప్ అప్నియా (నిద్రలో శ్వాస ఆగిపోవడం)' },
    problemDescription: {
      en: 'Obstructive sleep apnea happens when relaxed throat tissues repeatedly collapse during sleep, briefly blocking the airway—causing loud snoring, gasping awakenings, morning headaches, and severe daytime drowsiness.',
      te: 'నిద్రలో గొంతు కండరాలు వదులై గాలి మార్గాన్ని తాత్కాలికంగా మూసివేయడం వల్ల బిగ్గరగా గురక, మధ్యలో ఊపిరి ఆగినట్లు మెలకువ రావడం మరియు పగటిపూట విపరీతమైన మగత (స్లీప్ అప్నియా) కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'Consult an ENT specialist or pulmonologist for airway examination and sleep evaluation.',
      te: 'గొంతు మార్గ పరీక్ష మరియు నిద్ర పరీక్ష కోసం ENT లేదా శ్వాసకోశ నిపుణుడిని కలవండి.',
    },
    recommendedSpecialties: ['ent', 'pulmonologist'],
  },
  {
    id: 'bb_anxiety_depression',
    keywords: ['anxiety', 'panic attack', 'depression', 'mental stress', 'ఆందోళన', 'డిప్రెషన్'],
    conditionTitle: { en: 'Anxiety, Panic Attacks, or Depression', te: 'తీవ్రమైన ఆందోళన (Anxiety) లేదా డిప్రెషన్' },
    problemDescription: {
      en: 'Anxiety disorders and depression involve imbalances in brain stress circuits and neurotransmitters (like serotonin and norepinephrine)—producing persistent worry, sudden racing-heart panic episodes, emotional exhaustion, or loss of interest lasting weeks.',
      te: 'మెదడులోని నాడీ రసాయనాలు మరియు ఒత్తిడి ప్రతిస్పందన వ్యవస్థలో అసమతుల్యత వల్ల నిరంతర భయం, అకస్మాత్తు గుండె దడ (పానిక్ అటాక్), లేదా వారాల తరబడి మానసిక కుంగుబాటు (డిప్రెషన్) కలుగుతాయి.',
    },
    cautionMessage: {
      en: 'You do not have to manage this alone—speak with a physician or mental health professional for evidence-based counseling and support.',
      te: 'దీనిని ఒంటరిగా భరించాల్సిన అవసరం లేదు; సరైన సలహా మరియు చికిత్స కోసం వైద్యుడితో మాట్లాడండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
  {
    id: 'bb_cancer_tumor',
    keywords: ['cancer', 'tumor', 'tumour', 'carcinoma', 'leukemia', 'lymphoma', 'క్యాన్సర్', 'కణితి'],
    conditionTitle: { en: 'Tumor, Mass, or Oncologic Evaluation', te: 'కణితి (Tumor) లేదా క్యాన్సర్ సంబంధిత పరీక్ష' },
    problemDescription: {
      en: 'A tumor or suspected malignancy involves abnormal, uncontrolled growth of body cells forming a lump or affecting blood/organ tissue—requiring imaging (CT/MRI/ultrasound), biopsy, and specialist oncology workup to determine whether a growth is benign or malignant.',
      te: 'శరీర కణాలు అసాధారణంగా, అదుపులేకుండా పెరిగి కణితిగా లేదా కణజాల మార్పుగా మారడాన్ని ట్యూమర్ లేదా క్యాన్సర్ అంటారు. అది సాధారణ గడ్డా లేక హానికరమైనదా అని నిర్ధారించడానికి బయాప్సీ మరియు స్కానింగ్ అవసరం.',
    },
    cautionMessage: {
      en: 'Never substitute unverified herbal regimens for clinical biopsy and oncology evaluation. Consult a physician promptly.',
      te: 'నిర్ధారణ పరీక్షలు మరియు నిపుణుల వైద్య చికిత్సకు బదులుగా నాటు మందులు వాడకండి; వెంటనే వైద్యుడిని కలవండి.',
    },
    recommendedSpecialties: ['general_physician'],
  },
];

// Medical suffix/root analyzer so even uncommon medical terms get a distinct, accurate explanation
const MEDICAL_SUFFIX_PATTERNS: {
  suffix: string;
  meaningEn: (root: string, full: string) => string;
  meaningTe: (root: string, full: string) => string;
  specialties: DoctorSpecialtyId[];
}[] = [
  {
    suffix: 'itis',
    meaningEn: (root, full) =>
      `"${full}" refers to active inflammation or swelling of the "${root}" tissue/organ, typically triggered by infection, immune irritation, or localized physical strain.`,
    meaningTe: (root, full) =>
      `"${full}" అంటే "${root}" భాగంలో వచ్చిన వాపు లేదా ఇన్ఫెక్షన్. ఇది సాధారణంగా బ్యాక్టీరియా/వైరస్ ఇన్ఫెక్షన్, అలర్జీ లేదా కణజాల ఒత్తిడి వల్ల కలుగుతుంది.`,
    specialties: ['general_physician'],
  },
  {
    suffix: 'algia',
    meaningEn: (root, full) =>
      `"${full}" describes localized nerve or tissue pain centered around the "${root}" area, which can come from nerve compression, muscle tension, or inflammation.`,
    meaningTe: (root, full) =>
      `"${full}" అంటే "${root}" భాగంలో లేదా దానికి సంబంధించిన నరాలలో వచ్చే నొప్పి. నరాల ఒత్తిడి లేదా కండరాల వాపు దీనికి కారణం కావచ్చు.`,
    specialties: ['general_physician', 'orthopedic'],
  },
  {
    suffix: 'pathy',
    meaningEn: (root, full) =>
      `"${full}" indicates a functional disorder or damage affecting the "${root}" system (such as nerves, muscles, or organs), often tied to metabolic, vascular, or nutritional causes.`,
    meaningTe: (root, full) =>
      `"${full}" అంటే "${root}" వ్యవస్థ లేదా కణజాలం పనితీరులో వచ్చిన లోపం. పోషక లోపాలు, రక్త ప్రసరణ లేదా జీవక్రియ కారణాలు దీనికి దారితీయవచ్చు.`,
    specialties: ['general_physician'],
  },
  {
    suffix: 'emia',
    meaningEn: (fullRoot, full) =>
      `"${full}" refers to an abnormal level or presence of "${fullRoot}" components in the bloodstream, diagnosed directly through targeted blood laboratory panels.`,
    meaningTe: (fullRoot, full) =>
      `"${full}" అంటే రక్తంలో "${fullRoot}" సంబంధిత పదార్థాల స్థాయిలో వచ్చిన అసమతుల్యత. దీనిని ఖచ్చితమైన రక్త పరీక్షల ద్వారా నిర్ధారిస్తారు.`,
    specialties: ['general_physician'],
  },
  {
    suffix: 'osis',
    meaningEn: (root, full) =>
      `"${full}" denotes an ongoing structural, cellular, or degenerative change involving the "${root}" tissue rather than a short-lived minor irritation.`,
    meaningTe: (root, full) =>
      `"${full}" అంటే "${root}" భాగంలో దీర్ఘకాలికంగా కణజాలం లేదా నిర్మాణంలో వచ్చే మార్పు.`,
    specialties: ['general_physician'],
  },
  {
    suffix: 'oma',
    meaningEn: (root, full) =>
      `"${full}" refers to a localized tissue swelling, nodule, or cellular growth involving "${root}" cells that requires physical exam or imaging to classify safely.`,
    meaningTe: (root, full) =>
      `"${full}" అంటే "${root}" కణజాలంలో ఏర్పడిన గడ్డ లేదా పెరుగుదల. దీని స్వభావాన్ని స్కాన్ లేదా పరీక్ష ద్వారా వైద్యులు నిర్ధారిస్తారు.`,
    specialties: ['general_physician'],
  },
];

interface AnatomicalHint {
  terms: string[];
  descEn: (q: string) => string;
  descTe: (q: string) => string;
  specialties: DoctorSpecialtyId[];
}

const ANATOMICAL_FALLBACK_HINTS: AnatomicalHint[] = [
  {
    terms: ['eye', 'vision', 'sight', 'eyelid', 'retina', 'cornea', 'pupil', 'కన్ను', 'కళ్ళ', 'చూపు'],
    descEn: (q) =>
      `"${q}" involves the delicate structures of the eye, eyelid, or visual pathway. Conditions affecting the eye—such as surface irritation, blocked eyelid glands, pressure shifts, or retinal/lens changes—require sterile examination before using any drops.`,
    descTe: (q) =>
      `"${q}" అనేది కన్ను, కనురెప్ప లేదా దృష్టికి సంబంధించిన సమస్య. కంటి ఉపరితల వాపు, గ్రంథుల అడ్డంకి లేదా కంటి ఒత్తిడి మార్పులకు శుభ్రమైన వైద్య పరీక్ష తప్పనిసరి.`,
    specialties: ['general_physician', 'ent'],
  },
  {
    terms: ['heart', 'cardiac', 'pulse', 'artery', 'vein', 'coronary', 'గుండె', 'రక్తనాళ'],
    descEn: (q) =>
      `"${q}" relates to the heart or blood vessels. Cardiovascular symptoms involve blood-flow regulation, electrical heartbeat signaling, or vascular pressure and require prompt clinical vitals and ECG/imaging evaluation.`,
    descTe: (q) =>
      `"${q}" అనేది గుండె లేదా రక్తనాళాలకు సంబంధించిన సమస్య. ఇది రక్త ప్రసరణ, హృదయ స్పందన లయ లేదా రక్తపోటుకు సంబంధించినది కాబట్టి తక్షణ వైద్య పరీక్ష అవసరం.`,
    specialties: ['general_physician'],
  },
  {
    terms: ['lung', 'breath', 'bronch', 'respirat', 'trachea', 'pulmonary', 'ఊపిరితిత్తు', 'శ్వాస'],
    descEn: (q) =>
      `"${q}" affects the lungs or respiratory airways. Breathing or chest-airway concerns can reflect bronchial inflammation, mucus trapping, allergen sensitivity, or lower airway infection requiring lung listening and oxygen checks.`,
    descTe: (q) =>
      `"${q}" అనేది ఊపిరితిత్తులు లేదా శ్వాసనాళాలకు సంబంధించిన సమస్య. శ్వాసనాళాల వాపు, కఫం నిల్వ లేదా అలర్జీ వల్ల కలగవచ్చు కనుక శ్వాసకోశ నిపుణుడి పరీక్ష అవసరం.`,
    specialties: ['pulmonologist', 'general_physician'],
  },
  {
    terms: ['stomach', 'belly', 'abdomen', 'gut', 'liver', 'pancreas', 'colon', 'intestin', 'esophag', 'bowel', 'కడుపు', 'జీర్ణ', 'కాలేయ'],
    descEn: (q) =>
      `"${q}" centers on the digestive tract or abdominal organs (stomach, intestines, liver, or gallbladder). Symptoms in this region can reflect mucosal irritation, digestive enzyme imbalance, infection, or organ inflammation best assessed by a gastroenterologist.`,
    descTe: (q) =>
      `"${q}" అనేది జీర్ణాశయం, పేగులు, కాలేయం లేదా కడుపు అవయవాలకు సంబంధించిన సమస్య. పేగు పొర వాపు, ఎంజైమ్ లోపం లేదా ఇన్ఫెక్షన్ కోసం గ్యాస్ట్రోఎంటరాలజిస్ట్ పరీక్ష అవసరం.`,
    specialties: ['gastro', 'general_physician'],
  },
  {
    terms: ['bone', 'joint', 'shoulder', 'elbow', 'wrist', 'ankle', 'hip', 'heel', 'foot', 'leg', 'arm', 'finger', 'spine', 'rib', 'tendon', 'ligament', 'cartilage', 'కీలు', 'ఎముక', 'నడుము', 'భుజం', 'కాలు', 'మడమ'],
    descEn: (q) =>
      `"${q}" affects the bones, joints, tendons, ligaments, or supporting nerves. Pain, stiffness, swelling, or restricted motion here typically comes from mechanical strain, cartilage wear, tendon inflammation, or nerve compression.`,
    descTe: (q) =>
      `"${q}" అనేది ఎముకలు, కీళ్లు, స్నాయువులు లేదా కండరాలకు సంబంధించిన సమస్య. కండరాల ఒత్తిడి, కీళ్ల అరుగుదల లేదా నరాల నొక్కుడు దీనికి కారణం కావచ్చు.`,
    specialties: ['orthopedic', 'general_physician'],
  },
  {
    terms: ['skin', 'itch', 'spot', 'mole', 'bump', 'wart', 'nail', 'scalp', 'pore', 'dermat', 'చర్మం', 'దురద', 'మచ్చ', 'గడ్డ'],
    descEn: (q) =>
      `"${q}" is a dermatological concern affecting the skin, scalp, or nails. Persistent surface lesions, itching, discoloration, or bumps can arise from localized fungal/bacterial microbes, contact allergies, or immune skin inflammation.`,
    descTe: (q) =>
      `"${q}" అనేది చర్మం, గోర్లు లేదా తల చర్మానికి సంబంధించిన సమస్య. ఇది ఫంగల్/బ్యాక్టీరియా ఇన్ఫెక్షన్లు, అలర్జీలు లేదా చర్మ రోగనిరోధక ప్రతిస్పందన వల్ల కలగవచ్చు.`,
    specialties: ['general_physician'],
  },
  {
    terms: ['ear', 'nose', 'throat', 'voice', 'jaw', 'gum', 'tongue', 'sinus', 'nasal', 'చెవి', 'ముక్కు', 'గొంతు', 'దవడ'],
    descEn: (q) =>
      `"${q}" involves the ear, nose, throat, or oral cavity. Problems in these interconnected passages commonly stem from sinus pressure, localized bacterial/viral infection, vocal cord strain, or middle-ear fluid.`,
    descTe: (q) =>
      `"${q}" అనేది చెవి, ముక్కు, గొంతు లేదా నోటి భాగాలకు సంబంధించిన సమస్య. సైనస్ ఒత్తిడి, లోపలి చెవి ద్రవం లేదా ఇన్ఫెక్షన్ కోసం ENT వైద్యుడి పరీక్ష అవసరం.`,
    specialties: ['ent', 'general_physician'],
  },
  {
    terms: ['brain', 'nerve', 'neuro', 'memory', 'numb', 'tingling', 'spasm', 'head', 'నరాల', 'మెదడు', 'తిమ్మిరి'],
    descEn: (q) =>
      `"${q}" relates to the nervous system or nerve pathways. Sensations like numbness, tingling, weakness, coordination shifts, or localized nerve pain arise when nerve signaling is irritated, compressed, or vitamin-depleted.`,
    descTe: (q) =>
      `"${q}" అనేది మెదడు లేదా నాడీ వ్యవస్థకు సంబంధించిన సమస్య. తిమ్మిరి, సూదులు గుచ్చినట్లు ఉండటం లేదా బలహీనత నరాల ఒత్తిడి లేదా విటమిన్ లోపాల వల్ల కలగవచ్చు.`,
    specialties: ['general_physician', 'orthopedic'],
  },
  {
    terms: ['urine', 'urinary', 'kidney', 'bladder', 'pelvic', 'prostate', 'period', 'ovary', 'uterus', 'మూత్ర', 'కిడ్నీ', 'గర్భ'],
    descEn: (q) =>
      `"${q}" affects the urinary tract, kidneys, or pelvic organs. Issues in this system commonly involve urinary infections, mineral crystals, hormonal shifts, or pelvic inflammation that require urine, blood, or ultrasound evaluation.`,
    descTe: (q) =>
      `"${q}" అనేది మూత్రాశయం, కిడ్నీలు లేదా పొత్తికడుపు అవయవాలకు సంబంధించిన సమస్య. దీనికి మూత్ర పరీక్ష, రక్త పరీక్ష లేదా అల్ట్రాసౌండ్ స్కాన్ అవసరం.`,
    specialties: ['general_physician', 'gastro'],
  },
  {
    terms: ['child', 'baby', 'infant', 'toddler', 'kid', 'పిల్ల', 'శిశువు', 'పాప', 'బాబు'],
    descEn: (q) =>
      `"${q}" concerns a baby or child. Pediatric symptoms develop faster and respond differently than adult ailments, so a pediatrician should evaluate hydration, temperature, and weight-appropriate treatment safely.`,
    descTe: (q) =>
      `"${q}" అనేది చిన్న పిల్లలకు సంబంధించిన సమస్య. పిల్లల ఆరోగ్య స్థితి త్వరగా మారుతుంది కాబట్టి పిల్లల వైద్యుడి (Pediatrician) పర్యవేక్షణలో చికిత్స తీసుకోవాలి.`,
    specialties: ['pediatrician', 'general_physician'],
  },
];

export type SearchIdentificationResult =
  | { kind: 'empty' }
  | { kind: 'beyond_basic'; rule: BeyondBasicRule; suggestedDoctors: DoctorProfile[] }
  | {
      kind: 'basic';
      problemId: string;
      problemName: BilingualText;
      suggestedDoctors: DoctorProfile[];
    }
  | {
      kind: 'unmatched_medical';
      query: string;
      briefDescription: BilingualText;
      cautionMessage: BilingualText;
      suggestedDoctors: DoctorProfile[];
    };

const BASIC_PROBLEM_ALIASES: Record<string, string[]> = {
  cold: [
    'cold',
    'common cold',
    'runny nose',
    'blocked nose',
    'stuffy nose',
    'nasal congestion',
    'sneezing',
    'head cold',
    'jalubu',
    'జలుబు',
    'ముక్కు దిబ్బడ',
  ],
  cough: [
    'cough',
    'dry cough',
    'wet cough',
    'mucus cough',
    'productive cough',
    'chesty cough',
    'tickly cough',
    'coughing',
    'daggu',
    'దగ్గు',
    'పొడి దగ్గు',
    'కఫం దగ్గు',
  ],
  fever: [
    'fever',
    'mild fever',
    'low fever',
    'low grade fever',
    'low-grade fever',
    'body temperature',
    'jwaram',
    'జ్వరం',
    'తేలికపాటి జ్వరం',
  ],
  throat_pain: [
    'throat pain',
    'sore throat',
    'scratchy throat',
    'throat irritation',
    'painful throat',
    'throat soreness',
    'dry throat',
    'gontu noppi',
    'గొంతు నొప్పి',
    'గొంతు గరగర',
  ],
  knee_pain: [
    'knee pain',
    'joint pain',
    'mild knee pain',
    'stiff knee',
    'knee stiffness',
    'joint stiffness',
    'achy knees',
    'mokalla noppi',
    'మోకాళ్ల నొప్పి',
    'కీళ్ల నొప్పి',
  ],
  indigestion: [
    'indigestion',
    'gas',
    'acidity',
    'bloating',
    'bloated',
    'stomach ache',
    'stomach pain',
    'upset stomach',
    'mild acidity',
    'acid reflux',
    'heartburn',
    'burping',
    'belching',
    'heavy stomach',
    'ajeernam',
    'అజీర్ణం',
    'గ్యాస్',
    'ఎసిడిటీ',
    'కడుపు ఉబ్బరం',
  ],
  headache: [
    'headache',
    'head pain',
    'head ache',
    'tension headache',
    'sinus pressure',
    'sinus headache',
    'forehead pain',
    'heavy head',
    'sinus',
    'talanoppi',
    'తలనొప్పి',
    'సైనస్ భారం',
  ],
  toothache: [
    'toothache',
    'tooth ache',
    'tooth pain',
    'dental pain',
    'gum pain',
    'gum discomfort',
    'sore gums',
    'sensitive tooth',
    'panti noppi',
    'పంటి నొప్పి',
    'చిగుళ్ల నొప్పి',
    'చిగుళ్ల వాపు',
  ],
  minor_burns_skin: [
    'minor burn',
    'minor burns',
    'kitchen burn',
    'small burn',
    'mild burn',
    'burn',
    'burns',
    'scrape',
    'scrapes',
    'minor cut',
    'small cut',
    'surface scrape',
    'skin scrape',
    'cut',
    'చిన్న కాలిన గాయాలు',
    'కాలిన గాయం',
    'చర్మపు గీతలు',
  ],
  fatigue_dehydration: [
    'fatigue',
    'dehydration',
    'mild dehydration',
    'tired',
    'tiredness',
    'weakness',
    'low energy',
    'exhaustion',
    'heat fatigue',
    'neerasam',
    'నీరసం',
    'డీహైడ్రేషన్',
  ],
  constipation: [
    'constipation',
    'mild constipation',
    'hard stool',
    'hard stools',
    'irregular bowel',
    'malabaddakam',
    'మలబద్ధకం',
  ],
  mild_diarrhea: [
    'diarrhea',
    'diarrhoea',
    'mild diarrhea',
    'loose motions',
    'loose motion',
    'watery stool',
    'loose stools',
    'upset tummy',
    'virechanalu',
    'విరేచనాలు',
  ],
  muscle_cramps: [
    'muscle cramp',
    'muscle cramps',
    'cramp',
    'cramps',
    'leg cramp',
    'calf cramp',
    'body ache',
    'body pain',
    'muscle ache',
    'muscle soreness',
    'ollu noppulu',
    'కండరాల నొప్పి',
    'ఒళ్ళు నొప్పులు',
  ],
  sleeplessness: [
    'sleeplessness',
    'insomnia',
    'cant sleep',
    "can't sleep",
    'trouble sleeping',
    'poor sleep',
    'restless sleep',
    'stress',
    'mild stress',
    'nidralemi',
    'నిద్రలేమి',
    'ఒత్తిడి',
  ],
  mouth_ulcers: [
    'mouth ulcer',
    'mouth ulcers',
    'canker sore',
    'canker sores',
    'oral ulcer',
    'tongue ulcer',
    'lip ulcer',
    'mouth sore',
    'noti pundlu',
    'నోటి పుండ్లు',
    'బొబ్బలు',
  ],
  dry_skin_heels: [
    'dry skin',
    'cracked heels',
    'cracked heel',
    'chapped skin',
    'rough heels',
    'flaky skin',
    'podi charmam',
    'పొడి చర్మం',
    'పగిలిన మడమలు',
  ],
};

function matchesKeywordExactOrPhrase(query: string, kw: string): number {
  if (query === kw) return kw.length + 100;
  // Use word boundaries for Latin keywords so "pain" doesn't collide with "chest pain"
  if (/^[a-z0-9\s'-]+$/i.test(kw)) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (regex.test(query)) return kw.length + 20;
    return 0;
  }
  // Telugu / non-ASCII substring match
  return query.includes(kw) ? kw.length + 20 : 0;
}

function scoreBasicHealthProblem(q: string, problem: (typeof HEALTH_PROBLEMS)[number]): number {
  const normalizedId = problem.id.replace(/_/g, ' ');
  if (q === problem.id || q === normalizedId) return 220;

  const nameEn = problem.name.en.toLowerCase();
  const nameTe = problem.name.te.toLowerCase();
  if (q === nameEn || q === nameTe) return 220;

  let score = 0;

  // Check curated aliases & bilingual synonyms first
  const aliases = BASIC_PROBLEM_ALIASES[problem.id] || [];
  for (const alias of aliases) {
    const aliasScore = matchesKeywordExactOrPhrase(q, alias.toLowerCase());
    if (aliasScore > score) score = aliasScore;
  }

  // Check problem name words / substring
  if (q.length >= 3) {
    if (nameEn.includes(q) || nameTe.includes(q)) {
      score = Math.max(score, q.length + 30);
    }
    const nameWords = nameEn.split(/[^a-z0-9]+/).filter((w) => w.length >= 3);
    for (const word of nameWords) {
      if (q === word) {
        score = Math.max(score, word.length + 40);
      } else if (new RegExp(`\\b${word}\\b`, 'i').test(q)) {
        score = Math.max(score, word.length + 15);
      }
    }
  }

  // Prefix typing support (e.g., "headac", "indiges", "constip", "tootha", "sleeple")
  if (q.length >= 4 && !/\s/.test(q)) {
    const prefixCandidates = [
      ...aliases.map((a) => a.toLowerCase()),
      ...nameEn.split(/[^a-z0-9]+/).filter((w) => w.length >= 4),
    ];
    for (const cand of prefixCandidates) {
      if (cand.startsWith(q)) {
        score = Math.max(score, 16 + q.length);
      }
    }
  }

  // Check symptom labels
  if (q.length >= 3) {
    for (const s of problem.symptoms) {
      const sEn = s.label.en.toLowerCase();
      const sTe = s.label.te.toLowerCase();
      if (sEn === q || sTe === q) {
        score = Math.max(score, q.length + 25);
      } else if (sEn.includes(q) || sTe.includes(q)) {
        score = Math.max(score, 18);
      }
    }
  }

  // Low-priority fallback: description & remedy titles (only when 4+ chars)
  if (score === 0 && q.length >= 4) {
    const descAndRemedies = [
      problem.shortDesc.en,
      problem.shortDesc.te,
      ...problem.remedies.flatMap((r) => [r.title.en, r.title.te]),
    ]
      .join(' ')
      .toLowerCase();
    if (descAndRemedies.includes(q)) {
      score = 8;
    }
  }

  return score;
}

export function identifyProblemFromSearch(rawQuery: string): SearchIdentificationResult {
  const cleanQuery = rawQuery.trim();
  const q = cleanQuery.toLowerCase();
  if (!q) return { kind: 'empty' };

  const isOralUlcerQuery =
    (/\b(mouth|oral|tongue|lip|cheek|canker)\b/i.test(q) || q.includes('నోటి')) &&
    !/\b(stomach|peptic|duodenal|gastric)\b/i.test(q);
  const isTeluguSinusPressure = q.includes('తలనొప్పి') || q.includes('సైనస్ భారం');

  // 1. Score all specific non-basic condition profiles and pick the highest-specificity match
  let bestRule: BeyondBasicRule | null = null;
  let bestScore = 0;

  for (const rule of BEYOND_BASIC_RULES) {
    if (rule.id === 'bb_ulcer' && isOralUlcerQuery) continue;
    for (const kw of rule.keywords) {
      if (rule.id === 'bb_sinusitis' && kw === 'సైనస్' && isTeluguSinusPressure) continue;
      const score = matchesKeywordExactOrPhrase(q, kw);
      if (score > bestScore) {
        bestScore = score;
        bestRule = rule;
      }
    }
  }

  if (bestRule && bestScore > 0) {
    const suggestedDoctors = DOCTORS.filter((doc) =>
      bestRule!.recommendedSpecialties.includes(doc.specialtyId)
    );
    return {
      kind: 'beyond_basic',
      rule: bestRule,
      suggestedDoctors,
    };
  }

  // 2. Score all 16 basic household health problems and select the strongest match
  let matchedBasic: (typeof HEALTH_PROBLEMS)[number] | null = null;
  let bestBasicScore = 0;

  for (const problem of HEALTH_PROBLEMS) {
    const score = scoreBasicHealthProblem(q, problem);
    if (score > bestBasicScore) {
      bestBasicScore = score;
      matchedBasic = problem;
    }
  }

  if (matchedBasic && bestBasicScore > 0) {
    const suggestedDoctors = DOCTORS.filter((doc) =>
      doc.handlesProblems.includes(matchedBasic!.id)
    );
    return {
      kind: 'basic',
      problemId: matchedBasic.id,
      problemName: matchedBasic.name,
      suggestedDoctors,
    };
  }

  // 3. Check clinical suffix/root patterns (e.g., -itis, -algia, -pathy, -emia, -osis, -oma)
  const suffixMatch = MEDICAL_SUFFIX_PATTERNS.find(
    (pat) => q.length > pat.suffix.length + 2 && q.endsWith(pat.suffix)
  );
  if (suffixMatch) {
    const rootWord = cleanQuery.slice(0, cleanQuery.length - suffixMatch.suffix.length);
    const anatomical = ANATOMICAL_FALLBACK_HINTS.find((h) =>
      h.terms.some((term) => q.includes(term))
    );
    const specialties = anatomical ? anatomical.specialties : suffixMatch.specialties;
    return {
      kind: 'unmatched_medical',
      query: cleanQuery,
      briefDescription: {
        en: suffixMatch.meaningEn(rootWord, cleanQuery),
        te: suffixMatch.meaningTe(rootWord, cleanQuery),
      },
      cautionMessage: {
        en: `Avoid self-treating "${cleanQuery}" without an examination. Connect with a recommended specialist below.`,
        te: `"${cleanQuery}" సమస్యకు స్వంత ప్రయోగాలు చేయకుండా క్రింది వైద్యుడిని సంప్రదించండి.`,
      },
      suggestedDoctors: DOCTORS.filter((doc) => specialties.includes(doc.specialtyId)),
    };
  }

  // 4. Anatomical / region-specific explanation
  const hint = ANATOMICAL_FALLBACK_HINTS.find((h) =>
    h.terms.some((term) => q.includes(term))
  );
  if (hint) {
    return {
      kind: 'unmatched_medical',
      query: cleanQuery,
      briefDescription: {
        en: hint.descEn(cleanQuery),
        te: hint.descTe(cleanQuery),
      },
      cautionMessage: {
        en: `Avoid self-treating "${cleanQuery}" with unverified mixtures. Connect with the suggested specialist below for an accurate checkup.`,
        te: `"${cleanQuery}" సమస్యకు స్వంత ప్రయోగాలు చేయకుండా క్రింది నిపుణుడిని సంప్రదించి సరైన పరీక్ష చేయించుకోండి.`,
      },
      suggestedDoctors: DOCTORS.filter((doc) => hint.specialties.includes(doc.specialtyId)),
    };
  }

  // 5. General problem-focused explanation tailored specifically to the entered term
  return {
    kind: 'unmatched_medical',
    query: cleanQuery,
    briefDescription: {
      en: `"${cleanQuery}" is a distinct medical condition or symptom pattern whose root cause—whether localized inflammation, infection, vascular/nerve involvement, or hormonal/organ imbalance—is evaluated through physical examination and targeted diagnostic testing.`,
      te: `"${cleanQuery}" అనేది ఇన్ఫెక్షన్, కణజాల వాపు, నరాలు/రక్తనాళాల మార్పులు లేదా హార్మోన్/అవయవ లోపాల వల్ల కలిగే ప్రత్యేక ఆరోగ్య సమస్య. దీని అసలు కారణాన్ని వైద్య పరీక్ష మరియు అవసరమైన రిపోర్టుల ద్వారా నిర్ధారిస్తారు.`,
    },
    cautionMessage: {
      en: `Please avoid guessing with unverified DIY remedies for "${cleanQuery}". Share your symptom duration and connect directly with a doctor below.`,
      te: `"${cleanQuery}" కోసం అనుమానాస్పద చిట్కాలు ప్రయత్నించకండి. లక్షణాలు ఎన్ని రోజులుగా ఉన్నాయో తెలిపి క్రింది వైద్యుడిని సంప్రదించండి.`,
    },
    suggestedDoctors: DOCTORS.filter(
      (doc) => doc.specialtyId === 'general_physician' || doc.specialtyId === 'pediatrician'
    ),
  };
}
