'use client';

import { useState } from 'react';
import type { StructureComponent, StructurePartStatus, StructureStatus } from '@/lib/types';
import { STRUCTURE_STATUS_LABELS } from '@/lib/types';
import { SCORE_MAX, computeStructureScore, scoreLabel, scoreTone } from '@/lib/structure-score';

type Tone = 'ok' | 'warn' | 'missing' | 'verify' | 'na';

const STATUS_TONE: Record<StructureStatus, Tone> = {
  present: 'ok',
  needs_review: 'warn',
  not_found: 'missing',
  needs_verification: 'verify',
  not_applicable: 'na',
};

const TONE_ORDER: Tone[] = ['ok', 'warn', 'missing', 'verify', 'na'];

const TONE_LEGEND: Record<Tone, string> = {
  ok: 'Adecuadas',
  warn: 'Por revisar',
  missing: 'No identificadas',
  verify: 'Por verificar',
  na: 'No aplican',
};

const PART_LABELS: Record<StructurePartStatus, string> = {
  present: 'Presente',
  weak: 'Débil',
  missing: 'Ausente',
};

function StatusIcon({ tone }: { tone: Tone }) {
  const common = {
    width: 12,
    height: 12,
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (tone) {
    case 'ok':
      return (
        <svg {...common}>
          <path d="M3 8.5l3.2 3.2L13 4.8" />
        </svg>
      );
    case 'warn':
      return (
        <svg {...common}>
          <path d="M8 3.5v5.5M8 12v.2" />
        </svg>
      );
    case 'missing':
      return (
        <svg {...common}>
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      );
    case 'verify':
      return (
        <svg {...common}>
          <path d="M6 6.2a2 2 0 113 1.7c-.7.5-1 .9-1 1.6M8 12v.2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 8h8" />
        </svg>
      );
  }
}

function PartIcon({ status }: { status: StructurePartStatus }) {
  const tone: Tone = status === 'present' ? 'ok' : status === 'weak' ? 'warn' : 'missing';
  return <StatusIcon tone={tone} />;
}

interface StructureResultsProps {
  components: StructureComponent[];
  genreName?: string | null;
  summary?: string | null;
  /** Nota general (0–10). Si no se entrega, se calcula a partir de las secciones. */
  score?: number | null;
}

const fmt = (n: number | null | undefined) => (n === null || n === undefined ? '–' : n.toFixed(1));

/**
 * Vista visual del resultado de la evaluación estructural:
 * calificación general, barra segmentada y línea de tiempo de secciones con sus partes calificadas.
 */
export default function StructureResults({ components, genreName, summary, score }: StructureResultsProps) {
  // Las secciones que ya están bien cuentan como colapsadas por defecto.
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});

  const applicable = components.filter((c) => c.status !== 'not_applicable');
  const okCount = applicable.filter((c) => c.status === 'present').length;
  const overall = score ?? computeStructureScore(components);
  const overallTone = scoreTone(overall);

  const counts = TONE_ORDER.map((tone) => ({
    tone,
    n: components.filter((c) => STATUS_TONE[c.status] === tone).length,
  })).filter((c) => c.n > 0);

  const isOpen = (i: number, status: StructureStatus) =>
    openMap[i] ?? status !== 'present';

  return (
    <div className="sres" id="structure-results">
      {/* ── Summary ── */}
      <div className="sres__summary">
        <div className={`sres__score sres__score--${overallTone}`}>
          <span className="sres__score-num">{fmt(overall)}</span>
          <span className="sres__score-max">/{SCORE_MAX}</span>
        </div>
        <div className="sres__summary-body">
          <div className="sres__summary-title">
            Calificación de estructura · {scoreLabel(overall)}
          </div>
          <div className="sres__summary-sub">
            {okCount} de {applicable.length} secciones adecuadas{genreName ? ` · ${genreName}` : ''}
          </div>
          <div
            className="sres__meter"
            role="meter"
            aria-valuemin={0}
            aria-valuemax={SCORE_MAX}
            aria-valuenow={overall ?? 0}
            aria-label="Calificación general de la estructura"
          >
            <span
              className={`sres__meter-fill sres__meter-fill--${overallTone}`}
              style={{ width: `${((overall ?? 0) / SCORE_MAX) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div
        className="sres__bar"
        role="img"
        aria-label={`Estado de las secciones: ${counts.map((c) => `${c.n} ${TONE_LEGEND[c.tone].toLowerCase()}`).join(', ')}`}
      >
        {counts.map((c) => (
          <span
            key={c.tone}
            className={`sres__bar-seg sres__bar-seg--${c.tone}`}
            style={{ flexGrow: c.n }}
          />
        ))}
      </div>
      <div className="sres__legend">
        {counts.map((c) => (
          <span key={c.tone} className="sres__legend-item">
            <span className={`sres__dot sres__dot--${c.tone}`} />
            {c.n} {TONE_LEGEND[c.tone].toLowerCase()}
          </span>
        ))}
      </div>

      {summary && <p className="sres__text">{summary}</p>}

      {/* ── Timeline ── */}
      <ol className="sres__rail">
        {components.map((comp, i) => {
          const tone = STATUS_TONE[comp.status] ?? 'verify';
          const open = isOpen(i, comp.status);
          const hasBody = !!(comp.observation || comp.recommendation || comp.parts?.length);
          return (
            <li
              key={`${comp.name}-${i}`}
              className={`sres__item sres__item--${tone}`}
              style={{ ['--i' as string]: i } as React.CSSProperties}
            >
              <span className="sres__node" aria-hidden="true">
                <StatusIcon tone={tone} />
              </span>
              <div className="sres__card">
                <button
                  type="button"
                  className="sres__head"
                  onClick={() => setOpenMap((m) => ({ ...m, [i]: !open }))}
                  aria-expanded={open}
                  disabled={!hasBody}
                >
                  <span className="sres__name">{comp.name}</span>
                  {comp.score !== null && comp.score !== undefined && (
                    <span
                      className={`sres__pts sres__pts--${scoreTone(comp.score)}`}
                      title={`Calificación: ${fmt(comp.score)} de ${SCORE_MAX}`}
                    >
                      {fmt(comp.score)}
                      <small>/{SCORE_MAX}</small>
                    </span>
                  )}
                  <span className={`sres__badge sres__badge--${tone}`}>
                    {STRUCTURE_STATUS_LABELS[comp.status]}
                  </span>
                  {hasBody && (
                    <svg
                      className={`sres__chev ${open ? 'sres__chev--open' : ''}`}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                  )}
                </button>

                {open && hasBody && (
                  <div className="sres__body">
                    {comp.parts && comp.parts.length > 0 && (
                      <ul className="sres__parts">
                        {comp.parts.map((p) => (
                          <li
                            key={p.name}
                            className={`sres__part sres__part--${p.status}`}
                            title={`${PART_LABELS[p.status]} · ${fmt(p.score)}/${SCORE_MAX}`}
                          >
                            <PartIcon status={p.status} />
                            <span className="sres__part-name">{p.name}</span>
                            <span className="sres__part-score">{fmt(p.score)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {comp.observation && <p className="sres__obs">{comp.observation}</p>}
                    {comp.recommendation && (
                      <p className="sres__rec">{comp.recommendation}</p>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
