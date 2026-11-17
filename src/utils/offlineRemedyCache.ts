import { BilingualText, Remedy } from '../types/remedy';
import { HEALTH_PROBLEMS } from '../data/remedies';

const OFFLINE_REMEDY_CACHE_KEY = 'homeveda_offline_remedies_v1';
const OFFLINE_CACHE_BUCKET = 'homeveda-saved-remedies-v1';
const OFFLINE_CACHE_URL = '/offline-saved-remedies.json';

export interface CachedSavedRemedy {
  remedyId: string;
  problemId: string;
  problemName: BilingualText;
  medicalRedFlags: BilingualText[];
  remedy: Remedy;
  cachedAt: string;
}

/**
 * Syncs full self-contained remedy snapshots for every saved remedy ID
 * into both localStorage and the browser Cache Storage API so saved remedies
 * remain readable offline across reloads.
 */
export function syncSavedRemediesOfflineCache(savedRemedyIds: string[]): CachedSavedRemedy[] {
  const existing = getCachedSavedRemedies();
  const existingMap = new Map(existing.map((entry) => [entry.remedyId, entry]));
  const nowIso = new Date().toISOString();

  const snapshots: CachedSavedRemedy[] = [];

  for (const id of savedRemedyIds) {
    let foundProblem: (typeof HEALTH_PROBLEMS)[number] | undefined;
    let foundRemedy: Remedy | undefined;

    for (const problem of HEALTH_PROBLEMS) {
      const match = problem.remedies.find((r) => r.id === id);
      if (match) {
        foundProblem = problem;
        foundRemedy = match;
        break;
      }
    }

    if (foundProblem && foundRemedy) {
      const prev = existingMap.get(id);
      snapshots.push({
        remedyId: foundRemedy.id,
        problemId: foundProblem.id,
        problemName: foundProblem.name,
        medicalRedFlags: foundProblem.medicalRedFlags,
        remedy: foundRemedy,
        cachedAt: prev?.cachedAt || nowIso,
      });
    } else if (existingMap.has(id)) {
      // Preserve previously cached snapshot even if catalog lookup failed
      snapshots.push(existingMap.get(id)!);
    }
  }

  try {
    localStorage.setItem(OFFLINE_REMEDY_CACHE_KEY, JSON.stringify(snapshots));
  } catch {
    // Ignore storage quota errors
  }

  // Mirror snapshot payload into browser Cache Storage for Service Worker resilience
  if (typeof window !== 'undefined' && 'caches' in window) {
    window.caches
      .open(OFFLINE_CACHE_BUCKET)
      .then((cache) => {
        const response = new Response(JSON.stringify(snapshots), {
          headers: { 'Content-Type': 'application/json' },
        });
        return cache.put(OFFLINE_CACHE_URL, response);
      })
      .catch(() => {
        // Ignore Cache API errors in restricted contexts
      });
  }

  return snapshots;
}

export function getCachedSavedRemedies(): CachedSavedRemedy[] {
  try {
    const raw = localStorage.getItem(OFFLINE_REMEDY_CACHE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function hydrateSavedRemediesFromCacheStorage(): Promise<CachedSavedRemedy[]> {
  const local = getCachedSavedRemedies();
  if (local.length > 0) return local;

  if (typeof window === 'undefined' || !('caches' in window)) return [];
  try {
    const cache = await window.caches.open(OFFLINE_CACHE_BUCKET);
    const resp = await cache.match(OFFLINE_CACHE_URL);
    if (!resp) return [];
    const data = await resp.json();
    if (Array.isArray(data) && data.length > 0) {
      try {
        localStorage.setItem(OFFLINE_REMEDY_CACHE_KEY, JSON.stringify(data));
      } catch {
        // Ignore storage errors
      }
      return data;
    }
  } catch {
    // Ignore Cache API errors
  }
  return [];
}
