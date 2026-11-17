export type Language = 'en' | 'te';

export interface BilingualText {
  en: string;
  te: string;
}

export interface SymptomOption {
  id: string;
  label: BilingualText;
}

export interface IngredientItem {
  id: string;
  name: BilingualText;
  quantity: BilingualText;
  alternative: {
    name: BilingualText;
    quantity: BilingualText;
    note: BilingualText;
  };
}

export interface Remedy {
  id: string;
  title: BilingualText;
  summary: BilingualText;
  prepTimeMinutes: number;
  reliefType: BilingualText;
  matchedSymptomIds: string[];
  ingredients: IngredientItem[];
  preparationSteps: BilingualText[];
  usageInstructions: BilingualText;
  precautions: BilingualText[];
}

export type CarePillar = 'respiratory' | 'digestive' | 'pain_skin';

export interface HealthProblem {
  id: string;
  pillar: CarePillar;
  name: BilingualText;
  shortDesc: BilingualText;
  symptoms: SymptomOption[];
  remedies: Remedy[];
  medicalRedFlags: BilingualText[];
}

export interface PantrySwapEntry {
  id: string;
  original: BilingualText;
  substitute: BilingualText;
  ratio: BilingualText;
  bestFor: BilingualText;
  caution?: BilingualText;
}

export type MedicationFrequency = 'once' | 'twice' | 'thrice' | 'custom';
export type MealTimingNote = 'before_food' | 'after_food' | 'anytime' | 'as_directed';
export type DoseActionStatus = 'taken' | 'skipped' | 'snoozed';

export interface MedicationSchedule {
  id: string;
  medicineName: string;
  dosage: string;
  frequency: MedicationFrequency;
  times: string[]; // HH:MM (24-hour format)
  mealNote: MealTimingNote;
  prescribedBy?: string;
  active: boolean;
  createdAt: string;
}

export interface MedicationHistoryEntry {
  id: string;
  medicationId: string;
  medicineName: string;
  dosage: string;
  scheduledTime: string; // HH:MM
  dateKey: string; // YYYY-MM-DD
  status: DoseActionStatus;
  actedAt: string; // ISO timestamp
}

export interface SnoozedDose {
  doseKey: string; // `${medicationId}_${dateKey}_${time}`
  medicationId: string;
  medicineName: string;
  dosage: string;
  scheduledTime: string;
  dateKey: string;
  snoozeUntilMs: number;
}

