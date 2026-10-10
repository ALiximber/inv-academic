/* ==========================================================
   Structure scoring — escala 0–10 (un decimal)
   Normaliza la respuesta del modelo y calcula la nota general.
   ========================================================== */

import type {
  StructureComponent,
  StructurePartResult,
  StructurePartStatus,
  StructureStatus,
} from './types';

export const SCORE_MAX = 10;

const round1 = (n: number) => Math.round(n * 10) / 10;

/** Convierte cualquier valor en una nota 0–10 válida, o null. */
export function clampScore(value: unknown): number | null {
  const n = typeof value === 'string' ? parseFloat(value) : value;
  if (typeof n !== 'number' || !Number.isFinite(n)) return null;
  return round1(Math.min(SCORE_MAX, Math.max(0, n)));
}

/** Estado de una parte a partir de su nota. */
export function partStatusFromScore(score: number): StructurePartStatus {
  if (score >= 7) return 'present';
  if (score >= 4) return 'weak';
  return 'missing';
}

const PART_STATUS_DEFAULT: Record<StructurePartStatus, number> = {
  present: 10,
  weak: 5,
  missing: 0,
};

const SECTION_STATUS_DEFAULT: Record<StructureStatus, number | null> = {
  present: 10,
  needs_review: 6,
  not_found: 0,
  needs_verification: null,
  not_applicable: null,
};

/** Una sección cuenta para la nota general si aplica y tiene calificación. */
export function isScorable(c: StructureComponent): boolean {
  return c.status !== 'not_applicable' && c.score !== null;
}

/**
 * Garantiza que cada parte y sección tenga nota coherente:
 * - parte sin nota → se deriva de su estado; con nota → el estado se alinea a ella.
 * - sección sin nota → promedio de sus partes o valor por defecto de su estado.
 */
export function normalizeStructureComponents(raw: unknown): StructureComponent[] | null {
  if (!Array.isArray(raw)) return null;

  return raw.map((item): StructureComponent => {
    const c = (item ?? {}) as Record<string, unknown>;
    const status = (c.status as StructureStatus) || 'needs_verification';

    const parts: StructurePartResult[] | undefined = Array.isArray(c.parts)
      ? (c.parts as Record<string, unknown>[])
          .filter((p) => p && typeof p.name === 'string')
          .map((p) => {
            const given = clampScore(p.score);
            const fallbackStatus = (p.status as StructurePartStatus) in PART_STATUS_DEFAULT
              ? (p.status as StructurePartStatus)
              : 'weak';
            const score = given ?? PART_STATUS_DEFAULT[fallbackStatus];
            return { name: p.name as string, status: partStatusFromScore(score), score };
          })
      : undefined;

    let score = clampScore(c.score);
    if (status === 'not_applicable') {
      score = null;
    } else if (score === null) {
      score =
        parts && parts.length
          ? round1(parts.reduce((s, p) => s + p.score, 0) / parts.length)
          : SECTION_STATUS_DEFAULT[status] ?? null;
    }

    return {
      name: String(c.name ?? ''),
      status,
      observation: String(c.observation ?? ''),
      recommendation: (c.recommendation as string) || null,
      score,
      ...(parts && parts.length ? { parts } : {}),
    };
  });
}

/** Nota general: promedio de las secciones aplicables y calificadas. */
export function computeStructureScore(components: StructureComponent[] | null | undefined): number | null {
  if (!components) return null;
  const scorable = components.filter(isScorable);
  if (!scorable.length) return null;
  return round1(scorable.reduce((s, c) => s + (c.score as number), 0) / scorable.length);
}

/** Etiqueta cualitativa y tono visual para una nota 0–10. */
export function scoreTone(score: number | null): 'ok' | 'good' | 'warn' | 'missing' | 'na' {
  if (score === null) return 'na';
  if (score >= 9) return 'ok';
  if (score >= 7) return 'good';
  if (score >= 5) return 'warn';
  return 'missing';
}

export function scoreLabel(score: number | null): string {
  if (score === null) return 'Sin calificar';
  if (score >= 9) return 'Excelente';
  if (score >= 7) return 'Bueno';
  if (score >= 5) return 'Suficiente';
  return 'Insuficiente';
}
