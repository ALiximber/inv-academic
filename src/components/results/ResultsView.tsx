'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import type {
  EvaluationResult,
  Observation,
  ObservationCategory,
  ObservationStatus,
  Priority,
} from '@/lib/types';
import {
  CATEGORY_LABELS,
  CATEGORY_SHORT_LABELS,
  CATEGORY_COLORS,
  PRIORITY_LABELS,
  CONFIDENCE_LABELS,
  STATUS_LABELS,
  STRUCTURE_STATUS_LABELS,
} from '@/lib/types';

interface ResultsViewProps {
  result: EvaluationResult;
  studentText: string;
  reviewType: 'academic' | 'brief';
  onNewReview: () => void;
  onReEvaluate: () => void;
  onTextChange: (text: string) => void;
  originalText?: string;
  previousResults?: EvaluationResult[];
}

export default function ResultsView({
  result,
  studentText,
  reviewType,
  onNewReview,
  onReEvaluate,
  onTextChange,
  originalText,
}: ResultsViewProps) {
  // State
  const [activeObsId, setActiveObsId] = useState<string | null>(null);
  const [observationStatuses, setObservationStatuses] = useState<Record<string, ObservationStatus>>(
    () => {
      const map: Record<string, ObservationStatus> = {};
      result.observations.forEach((obs) => { map[obs.id] = 'pending'; });
      return map;
    }
  );
  const [activeTab, setActiveTab] = useState<'text' | 'feedback' | 'structure' | 'edit'>('text');
  const [categoryFilters, setCategoryFilters] = useState<Set<ObservationCategory>>(
    new Set(['grammar', 'clarity', 'coherence', 'structure', 'comprehension'])
  );
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');
  const [showSidebar, setShowSidebar] = useState(true);
  const [editText, setEditText] = useState(studentText);

  const textContainerRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Filtered observations
  const filteredObservations = useMemo(() => {
    return result.observations.filter((obs) => {
      if (!categoryFilters.has(obs.category)) return false;
      if (priorityFilter !== 'all' && obs.priority !== priorityFilter) return false;
      return true;
    });
  }, [result.observations, categoryFilters, priorityFilter]);

  // Matched observations (have valid positions)
  const matchedObservations = useMemo(
    () => filteredObservations.filter((obs) => obs.start >= 0 && obs.end >= 0),
    [filteredObservations]
  );

  // Unmatched observations
  const unmatchedObservations = useMemo(
    () => filteredObservations.filter((obs) => obs.start < 0 || obs.end < 0),
    [filteredObservations]
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    result.observations.forEach((obs) => {
      counts[obs.category] = (counts[obs.category] || 0) + 1;
    });
    return counts;
  }, [result.observations]);

  // Active observation
  const activeObs = useMemo(
    () => result.observations.find((obs) => obs.id === activeObsId) || null,
    [result.observations, activeObsId]
  );

  // Current index
  const currentIndex = useMemo(
    () => filteredObservations.findIndex((obs) => obs.id === activeObsId),
    [filteredObservations, activeObsId]
  );

  // Navigate observations
  const goToObs = useCallback(
    (direction: 'prev' | 'next') => {
      if (filteredObservations.length === 0) return;
      let idx = currentIndex;
      if (direction === 'next') {
        idx = idx < filteredObservations.length - 1 ? idx + 1 : 0;
      } else {
        idx = idx > 0 ? idx - 1 : filteredObservations.length - 1;
      }
      const obs = filteredObservations[idx];
      setActiveObsId(obs.id);
      scrollToHighlight(obs.id);
    },
    [filteredObservations, currentIndex]
  );

  // Scroll to highlight
  const scrollToHighlight = (obsId: string) => {
    const el = highlightRefs.current.get(obsId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Update observation status
  const updateStatus = (obsId: string, status: ObservationStatus) => {
    setObservationStatuses((prev) => ({ ...prev, [obsId]: status }));
  };

  // Toggle category filter
  const toggleCategory = (cat: ObservationCategory) => {
    setCategoryFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  // Build highlighted text segments
  const segments = useMemo(() => {
    if (matchedObservations.length === 0) {
      return [{ text: studentText, observations: [] as Observation[], start: 0 }];
    }

    // Sort by start position
    const sorted = [...matchedObservations].sort((a, b) => a.start - b.start || a.end - b.end);

    // Build change points
    const points = new Set<number>();
    points.add(0);
    points.add(studentText.length);
    sorted.forEach((obs) => {
      if (obs.start >= 0 && obs.start <= studentText.length) points.add(obs.start);
      if (obs.end >= 0 && obs.end <= studentText.length) points.add(obs.end);
    });

    const sortedPoints = Array.from(points).sort((a, b) => a - b);
    const segs: { text: string; observations: Observation[]; start: number }[] = [];

    for (let i = 0; i < sortedPoints.length - 1; i++) {
      const segStart = sortedPoints[i];
      const segEnd = sortedPoints[i + 1];
      const segText = studentText.substring(segStart, segEnd);
      const overlapping = sorted.filter(
        (obs) => obs.start < segEnd && obs.end > segStart
      );
      segs.push({ text: segText, observations: overlapping, start: segStart });
    }

    return segs;
  }, [studentText, matchedObservations]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'edit') return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToObs('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToObs('prev');
      } else if (e.key === 'Escape') {
        setActiveObsId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToObs, activeTab]);

  const reviewedCount = Object.values(observationStatuses).filter(
    (s) => s === 'reviewed' || s === 'corrected' || s === 'dismissed'
  ).length;

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <div className="header__logo-icon">O</div>
            <span className="header__logo-text">ORC</span>
          </Link>
          <div className="header__nav" style={{ gap: 'var(--space-3)' }}>
            <span className="text-caption">
              {result.observations.length} observaciones · {reviewedCount} revisadas
            </span>
            <button className="btn btn--ghost btn--sm" onClick={onReEvaluate}>
              🔄 Re-evaluar
            </button>
            <button className="btn btn--ghost btn--sm" onClick={onNewReview}>
              ✨ Nueva revisión
            </button>
          </div>
        </div>
      </header>

      {/* Warnings */}
      {result.warnings.length > 0 && (
        <div style={{ padding: '0 var(--space-6)' }}>
          {result.warnings.map((w, i) => (
            <div key={i} className="notice notice--warning mb-2" style={{ margin: 'var(--space-2) auto', maxWidth: 'var(--max-width)' }}>
              <span className="notice__icon">⚠️</span>
              <span>{w}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tabs */}
      <div className="tabs" style={{ paddingInline: 'var(--space-6)' }}>
        <button
          className={`tab ${activeTab === 'text' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('text')}
          id="tab-text"
        >
          📝 Texto con resaltados
        </button>
        <button
          className={`tab ${activeTab === 'feedback' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('feedback')}
          id="tab-feedback"
        >
          📊 Retroalimentación
        </button>
        {result.structureComponents && (
          <button
            className={`tab ${activeTab === 'structure' ? 'tab--active' : ''}`}
            onClick={() => setActiveTab('structure')}
            id="tab-structure"
          >
            🏗️ Estructura
          </button>
        )}
        <button
          className={`tab ${activeTab === 'edit' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('edit')}
          id="tab-edit"
        >
          ✏️ Editar y re-evaluar
        </button>
      </div>

      {/* Filter Bar */}
      {activeTab === 'text' && (
        <div className="filter-bar">
          <span className="text-caption" style={{ marginRight: 'var(--space-2)', whiteSpace: 'nowrap' }}>
            Filtrar:
          </span>
          {(Object.keys(CATEGORY_SHORT_LABELS) as ObservationCategory[]).map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${categoryFilters.has(cat) ? 'filter-chip--active' : ''}`}
              onClick={() => toggleCategory(cat)}
              id={`filter-${cat}`}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: `var(--highlight-${CATEGORY_COLORS[cat]}-solid)`,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              {CATEGORY_SHORT_LABELS[cat]}
              {categoryCounts[cat] && (
                <span className="filter-chip__count">{categoryCounts[cat]}</span>
              )}
            </button>
          ))}
          <div style={{ borderLeft: '1px solid var(--color-border)', height: '20px', margin: '0 var(--space-2)' }} />
          {(['all', 'high', 'medium', 'low'] as const).map((p) => (
            <button
              key={p}
              className={`filter-chip ${priorityFilter === p ? 'filter-chip--active' : ''}`}
              onClick={() => setPriorityFilter(p)}
            >
              {p === 'all' ? 'Todas' : PRIORITY_LABELS[p]}
            </button>
          ))}
          <div style={{ marginLeft: 'auto' }}>
            <button
              className="btn btn--ghost btn--sm"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? '◀ Ocultar panel' : '▶ Mostrar panel'}
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {activeTab === 'text' && (
        <div className="results-layout">
          {/* Highlighted Text */}
          <div className="results-layout__text" ref={textContainerRef}>
            <div className="highlighted-text">
              {segments.map((seg, i) => {
                if (seg.observations.length === 0) {
                  return <span key={i}>{seg.text}</span>;
                }

                // Use the highest priority observation for the highlight color
                const primaryObs = seg.observations.sort(
                  (a, b) => (['high', 'medium', 'low'].indexOf(a.priority) - ['high', 'medium', 'low'].indexOf(b.priority))
                )[0];

                const isActive = seg.observations.some((o) => o.id === activeObsId);
                const isReviewed = seg.observations.every(
                  (o) => observationStatuses[o.id] !== 'pending'
                );

                return (
                  <mark
                    key={i}
                    ref={(el) => {
                      if (el) {
                        seg.observations.forEach((o) => {
                          highlightRefs.current.set(o.id, el);
                        });
                      }
                    }}
                    className={[
                      'highlight-mark',
                      `highlight-mark--${CATEGORY_COLORS[primaryObs.category]}`,
                      isActive ? 'highlight-mark--active' : '',
                      isReviewed ? 'highlight-mark--reviewed' : '',
                    ].join(' ')}
                    onClick={() => {
                      setActiveObsId(primaryObs.id);
                      setShowSidebar(true);
                    }}
                    title={`${CATEGORY_SHORT_LABELS[primaryObs.category]}: ${primaryObs.explanation.substring(0, 80)}…`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Observación: ${primaryObs.explanation.substring(0, 60)}`}
                  >
                    {seg.text}
                  </mark>
                );
              })}
            </div>

            {/* Unmatched observations */}
            {unmatchedObservations.length > 0 && (
              <div className="mt-8">
                <h3 className="heading-4 mb-4">
                  Observaciones generales
                  <span className="text-caption" style={{ marginLeft: 'var(--space-2)' }}>
                    (no vinculadas a un fragmento específico)
                  </span>
                </h3>
                <div className="obs-list">
                  {unmatchedObservations.map((obs) => (
                    <div
                      key={obs.id}
                      className={`obs-list-item ${activeObsId === obs.id ? 'obs-list-item--active' : ''}`}
                      onClick={() => { setActiveObsId(obs.id); setShowSidebar(true); }}
                    >
                      <div
                        className="obs-list-item__color"
                        style={{ background: `var(--highlight-${CATEGORY_COLORS[obs.category]}-solid)` }}
                      />
                      <div className="obs-list-item__content">
                        <div className="obs-list-item__fragment">
                          {obs.originalFragment || 'Observación general'}
                        </div>
                        <div className="obs-list-item__explanation">{obs.explanation}</div>
                      </div>
                      <span className={`badge badge--priority-${obs.priority}`}>
                        {PRIORITY_LABELS[obs.priority]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Observation Panel (Sidebar) */}
          {showSidebar && (
            <aside className={`results-layout__sidebar animate-slide-in-right`}>
              {activeObs ? (
                <div className="obs-panel">
                  {/* Navigation */}
                  <div className="obs-panel__header">
                    <span className={`badge badge--${CATEGORY_COLORS[activeObs.category]}`}>
                      {CATEGORY_SHORT_LABELS[activeObs.category]}
                    </span>
                    <div className="obs-panel__nav">
                      <button className="btn btn--icon btn--ghost" onClick={() => goToObs('prev')} title="Anterior">
                        ←
                      </button>
                      <span className="obs-panel__counter">
                        {currentIndex + 1} / {filteredObservations.length}
                      </span>
                      <button className="btn btn--icon btn--ghost" onClick={() => goToObs('next')} title="Siguiente">
                        →
                      </button>
                      <button className="btn btn--icon btn--ghost" onClick={() => setActiveObsId(null)} title="Cerrar">
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="obs-panel__section">
                    <div className="obs-panel__section-title">Categoría</div>
                    <p className="text-body" style={{ fontSize: 'var(--text-sm)' }}>
                      {CATEGORY_LABELS[activeObs.category]}
                      {activeObs.subcategory && activeObs.subcategory !== 'other' && (
                        <span className="text-caption" style={{ marginLeft: 'var(--space-2)' }}>
                          ({activeObs.subcategory.replace(/_/g, ' ')})
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Original Fragment */}
                  <div className="obs-panel__section">
                    <div className="obs-panel__section-title">Fragmento original</div>
                    <div className="obs-panel__fragment">
                      &ldquo;{activeObs.originalFragment}&rdquo;
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="obs-panel__section">
                    <div className="obs-panel__section-title">¿Qué ocurre?</div>
                    <p className="obs-panel__explanation">{activeObs.explanation}</p>
                  </div>

                  {/* Rule */}
                  {activeObs.rule && (
                    <div className="obs-panel__section">
                      <div className="obs-panel__section-title">Regla o criterio</div>
                      <div className="obs-panel__rule">{activeObs.rule}</div>
                    </div>
                  )}

                  {/* Context Reason */}
                  {activeObs.contextReason && (
                    <div className="obs-panel__section">
                      <div className="obs-panel__section-title">¿Por qué es pertinente aquí?</div>
                      <p className="obs-panel__explanation">{activeObs.contextReason}</p>
                    </div>
                  )}

                  {/* Suggestion */}
                  {activeObs.suggestion && (
                    <div className="obs-panel__section">
                      <div className="obs-panel__section-title">Sugerencia de mejora</div>
                      <p className="obs-panel__explanation">{activeObs.suggestion}</p>
                    </div>
                  )}

                  {/* Example Correction */}
                  {activeObs.exampleCorrection && (
                    <div className="obs-panel__section">
                      <div className="obs-panel__section-title">Posible corrección</div>
                      <div className="obs-panel__suggestion">
                        <strong>→ </strong>{activeObs.exampleCorrection}
                      </div>
                    </div>
                  )}

                  {/* Reflection Question */}
                  {activeObs.reflectionQuestion && (
                    <div className="obs-panel__section">
                      <div className="obs-panel__section-title">Para reflexionar</div>
                      <div className="obs-panel__reflection">
                        💭 {activeObs.reflectionQuestion}
                      </div>
                    </div>
                  )}

                  {/* Confidence */}
                  <div className="obs-panel__section">
                    <div className="obs-panel__section-title">Nivel de confianza</div>
                    <div className="obs-panel__confidence">
                      <span className={`obs-panel__confidence-dot obs-panel__confidence-dot--${activeObs.confidence}`} />
                      {CONFIDENCE_LABELS[activeObs.confidence]}
                      {activeObs.confidence === 'low' && (
                        <span className="text-caption" style={{ marginLeft: 'var(--space-2)' }}>
                          — Esta observación puede requerir verificación manual
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="obs-panel__section">
                    <div className="obs-panel__section-title">Prioridad</div>
                    <span className={`badge badge--priority-${activeObs.priority}`}>
                      {PRIORITY_LABELS[activeObs.priority]}
                    </span>
                  </div>

                  {/* Status Actions */}
                  <div className="obs-panel__actions">
                    {(['reviewed', 'corrected', 'dismissed'] as ObservationStatus[]).map((status) => (
                      <button
                        key={status}
                        className={`btn btn--sm ${
                          observationStatuses[activeObs.id] === status
                            ? 'btn--primary'
                            : 'btn--secondary'
                        }`}
                        onClick={() => updateStatus(activeObs.id, status)}
                      >
                        {STATUS_LABELS[status]}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* No observation selected — show list */
                <div className="obs-panel">
                  <div className="obs-panel__header">
                    <span className="heading-4">Observaciones</span>
                    <span className="text-caption">{filteredObservations.length} total</span>
                  </div>
                  {filteredObservations.length === 0 ? (
                    <div className="empty-state">
                      <div className="empty-state__icon">✨</div>
                      <div className="empty-state__title">Sin observaciones</div>
                      <div className="empty-state__description">
                        No se encontraron problemas en las categorías seleccionadas.
                      </div>
                    </div>
                  ) : (
                    <div className="obs-list">
                      {filteredObservations.map((obs) => (
                        <div
                          key={obs.id}
                          className={`obs-list-item ${
                            observationStatuses[obs.id] !== 'pending' ? 'obs-list-item--reviewed' : ''
                          }`}
                          onClick={() => {
                            setActiveObsId(obs.id);
                            scrollToHighlight(obs.id);
                          }}
                        >
                          <div
                            className="obs-list-item__color"
                            style={{
                              background: `var(--highlight-${CATEGORY_COLORS[obs.category]}-solid)`,
                            }}
                          />
                          <div className="obs-list-item__content">
                            <div className="obs-list-item__fragment">
                              &ldquo;{obs.originalFragment.substring(0, 60)}
                              {obs.originalFragment.length > 60 ? '…' : ''}&rdquo;
                            </div>
                            <div className="obs-list-item__explanation">
                              {obs.explanation.substring(0, 100)}
                              {obs.explanation.length > 100 ? '…' : ''}
                            </div>
                          </div>
                          <span className={`badge badge--priority-${obs.priority}`}>
                            {PRIORITY_LABELS[obs.priority]}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </aside>
          )}
        </div>
      )}

      {/* Feedback Tab */}
      {activeTab === 'feedback' && (
        <div className="feedback-section container animate-fade-in-up" style={{ maxWidth: '900px' }}>
          {/* Overall Assessment */}
          <div className="feedback-block">
            <h3 className="feedback-block__title">📋 Valoración general</h3>
            <div className="feedback-block__content">
              {result.generalFeedback.overallAssessment}
            </div>
          </div>

          {/* Strengths */}
          {result.generalFeedback.strengths.length > 0 && (
            <div className="feedback-block">
              <h3 className="feedback-block__title">💪 Fortalezas</h3>
              <div className="feedback-block__list">
                {result.generalFeedback.strengths.map((s, i) => (
                  <div key={i} className="feedback-block__list-item">{s}</div>
                ))}
              </div>
            </div>
          )}

          {/* Priority Issues */}
          {result.generalFeedback.priorityIssues.length > 0 && (
            <div className="feedback-block">
              <h3 className="feedback-block__title">🔴 Problemas prioritarios</h3>
              <div className="feedback-block__list">
                {result.generalFeedback.priorityIssues.map((p, i) => (
                  <div key={i} className="feedback-block__list-item">{p}</div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {result.generalFeedback.recommendations.length > 0 && (
            <div className="feedback-block">
              <h3 className="feedback-block__title">💡 Recomendaciones de mejora</h3>
              <div className="feedback-block__list">
                {result.generalFeedback.recommendations.map((r, i) => (
                  <div key={i} className="feedback-block__list-item">{r}</div>
                ))}
              </div>
            </div>
          )}

          {/* Reading Comprehension */}
          <div className="feedback-block">
            <h3 className="feedback-block__title">📚 Comprensión lectora</h3>
            <div className="feedback-block__content">
              {result.generalFeedback.readingComprehension ||
                'No se evaluó la correspondencia con una lectura específica. No se proporcionó documento de referencia.'}
            </div>
          </div>

          {/* Structure Summary */}
          {reviewType === 'academic' && (
            <div className="feedback-block">
              <h3 className="feedback-block__title">🏗️ Estructura académica</h3>
              <div className="feedback-block__content">
                {result.generalFeedback.structureSummary ||
                  'No se evaluó la estructura académica en esta revisión.'}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {result.generalFeedback.nextSteps.length > 0 && (
            <div className="feedback-block">
              <h3 className="feedback-block__title">🎯 Próximos pasos</h3>
              <div className="feedback-block__list">
                {result.generalFeedback.nextSteps.map((n, i) => (
                  <div key={i} className="feedback-block__list-item">{n}</div>
                ))}
              </div>
            </div>
          )}

          {/* Limitations */}
          {result.generalFeedback.limitations.length > 0 && (
            <div className="feedback-block" style={{ borderColor: 'var(--color-warning-muted)' }}>
              <h3 className="feedback-block__title">⚠️ Limitaciones de la evaluación</h3>
              <div className="feedback-block__list">
                {result.generalFeedback.limitations.map((l, i) => (
                  <div key={i} className="feedback-block__list-item">{l}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Structure Tab */}
      {activeTab === 'structure' && result.structureComponents && (
        <div className="feedback-section container animate-fade-in-up" style={{ maxWidth: '900px' }}>
          <h2 className="heading-2 mb-2">Evaluación estructural</h2>
          <p className="text-body mb-6">
            Componentes estructurales del género {result.genre || 'seleccionado'}.
          </p>

          <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="structure-table">
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Estado</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                {result.structureComponents.map((comp, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      {comp.name}
                    </td>
                    <td>
                      <span className={`status-indicator status-indicator--${
                        comp.status === 'present' ? 'present' :
                        comp.status === 'needs_review' ? 'review' :
                        comp.status === 'not_found' ? 'missing' :
                        comp.status === 'not_applicable' ? 'na' : 'verify'
                      }`}>
                        {STRUCTURE_STATUS_LABELS[comp.status]}
                      </span>
                    </td>
                    <td>
                      <div>{comp.observation}</div>
                      {comp.recommendation && (
                        <div className="text-caption mt-2" style={{ color: 'var(--color-info)' }}>
                          💡 {comp.recommendation}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Tab */}
      {activeTab === 'edit' && (
        <div className="feedback-section container animate-fade-in-up" style={{ maxWidth: '900px' }}>
          <h2 className="heading-2 mb-2">Editar y re-evaluar</h2>
          <p className="text-body mb-6">
            Modifica tu texto y solicita una nueva evaluación. Las observaciones anteriores
            se reemplazarán con las nuevas.
          </p>

          {/* Comparison */}
          {originalText && originalText !== editText && (
            <div className="notice notice--info mb-4">
              <span className="notice__icon">📝</span>
              <span>El texto ha sido modificado respecto a la versión original.</span>
            </div>
          )}

          <div className="form-group mb-6">
            <textarea
              className="form-textarea form-textarea--editor"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              id="edit-text-input"
            />
            <span className="form-hint">
              {editText.length.toLocaleString()} caracteres
            </span>
          </div>

          <div className="flex justify-between">
            <button
              className="btn btn--ghost"
              onClick={() => setEditText(studentText)}
            >
              Restaurar texto original
            </button>
            <button
              className="btn btn--primary btn--lg"
              onClick={() => {
                onTextChange(editText);
                onReEvaluate();
              }}
              disabled={!editText.trim() || editText === studentText}
              id="btn-re-evaluate"
            >
              🔍 Re-evaluar texto modificado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
