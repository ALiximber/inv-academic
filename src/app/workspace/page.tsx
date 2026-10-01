'use client';

import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import type {
  AcademicGenre,
  EvaluationResult,
  ExtractionResult,
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
import { ACADEMIC_GENRES, REVIEW_DIMENSIONS } from '@/lib/genres';

export default function WorkspacePage() {
  // ── Text & file
  const [studentText, setStudentText] = useState('');
  const [referenceText, setReferenceText] = useState('');
  const [fileWarnings, setFileWarnings] = useState<string[]>([]);
  const [refFileWarnings, setRefFileWarnings] = useState<string[]>([]);

  // ── Genre & config
  const [selectedGenre, setSelectedGenre] = useState<AcademicGenre | null>(null);
  const [customGenreName, setCustomGenreName] = useState('');
  const [customGenreDesc, setCustomGenreDesc] = useState('');
  const [dimensions, setDimensions] = useState<string[]>(
    REVIEW_DIMENSIONS.filter((d) => d.default).map((d) => d.id)
  );

  // ── UI state
  const [panelTab, setPanelTab] = useState<'config' | 'obs' | 'feedback' | 'structure'>('config');
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showRefSection, setShowRefSection] = useState(false);

  // ── Results
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [activeObsId, setActiveObsId] = useState<string | null>(null);
  const [observationStatuses, setObservationStatuses] = useState<Record<string, ObservationStatus>>({});
  const [categoryFilters, setCategoryFilters] = useState<Set<ObservationCategory>>(
    new Set(['grammar', 'clarity', 'coherence', 'structure', 'comprehension'])
  );
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');

  const highlightRefs = useRef<Map<string, HTMLElement>>(new Map());
  const editorRef = useRef<HTMLTextAreaElement>(null);

  // ── File upload
  const handleFileUpload = useCallback(async (
    file: File,
    setter: (t: string) => void,
    warnSetter: (w: string[]) => void
  ) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/extract', { method: 'POST', body: formData });
      const data: ExtractionResult & { error?: string } = await res.json();
      if (!res.ok) { setError(data.error || 'Error al extraer el texto.'); return; }
      setter(data.text);
      warnSetter(data.warnings || []);
    } catch { setError('Error de conexión al procesar el archivo.'); }
  }, []);

  // ── Toggle dimension
  const toggleDimension = (id: string) => {
    setDimensions((prev) => {
      const next = prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id];
      return next;
    });
  };

  // ── Run analysis
  const runAnalysis = async () => {
    if (!studentText.trim() || !selectedGenre) return;
    setAnalyzing(true);
    setError(null);
    setResult(null);
    setActiveObsId(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewType: 'academic',
          genre: selectedGenre.id,
          customGenreName: selectedGenre.id === 'otro' ? customGenreName : null,
          customGenreDescription: selectedGenre.id === 'otro' ? customGenreDesc : null,
          dimensions,
          studentText,
          referenceText: referenceText.trim() || null,
          briefIntention: null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Error al analizar el texto.'); return; }
      setResult(data);
      const map: Record<string, ObservationStatus> = {};
      data.observations.forEach((o: Observation) => { map[o.id] = 'pending'; });
      setObservationStatuses(map);
      setPanelTab('obs');
    } catch { setError('Error de conexión al servidor.'); }
    finally { setAnalyzing(false); }
  };

  // ── Filtered observations
  const filteredObs = useMemo(() => {
    if (!result) return [];
    return result.observations.filter((obs) => {
      if (!categoryFilters.has(obs.category)) return false;
      if (priorityFilter !== 'all' && obs.priority !== priorityFilter) return false;
      return true;
    });
  }, [result, categoryFilters, priorityFilter]);

  const matchedObs = useMemo(() => filteredObs.filter((o) => o.start >= 0 && o.end >= 0), [filteredObs]);
  const unmatchedObs = useMemo(() => filteredObs.filter((o) => o.start < 0 || o.end < 0), [filteredObs]);

  const activeObs = useMemo(
    () => result?.observations.find((o) => o.id === activeObsId) || null,
    [result, activeObsId]
  );
  const currentIndex = useMemo(
    () => filteredObs.findIndex((o) => o.id === activeObsId),
    [filteredObs, activeObsId]
  );

  const goToObs = useCallback((dir: 'prev' | 'next') => {
    if (!filteredObs.length) return;
    let idx = currentIndex;
    if (dir === 'next') idx = idx < filteredObs.length - 1 ? idx + 1 : 0;
    else idx = idx > 0 ? idx - 1 : filteredObs.length - 1;
    const obs = filteredObs[idx];
    setActiveObsId(obs.id);
    highlightRefs.current.get(obs.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [filteredObs, currentIndex]);

  const updateStatus = (id: string, status: ObservationStatus) => {
    setObservationStatuses((prev) => ({ ...prev, [id]: status }));
  };

  const toggleCategory = (cat: ObservationCategory) => {
    setCategoryFilters((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  // ── Build highlighted segments
  const segments = useMemo(() => {
    if (!result || matchedObs.length === 0) {
      return [{ text: studentText, observations: [] as Observation[], start: 0 }];
    }
    const sorted = [...matchedObs].sort((a, b) => a.start - b.start || a.end - b.end);
    const points = new Set<number>([0, studentText.length]);
    sorted.forEach((o) => {
      if (o.start >= 0 && o.start <= studentText.length) points.add(o.start);
      if (o.end >= 0 && o.end <= studentText.length) points.add(o.end);
    });
    const pts = Array.from(points).sort((a, b) => a - b);
    return pts.slice(0, -1).map((segStart, i) => {
      const segEnd = pts[i + 1];
      return {
        text: studentText.substring(segStart, segEnd),
        observations: sorted.filter((o) => o.start < segEnd && o.end > segStart),
        start: segStart,
      };
    });
  }, [studentText, matchedObs, result]);

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') goToObs('next');
      if (e.key === 'ArrowLeft') goToObs('prev');
      if (e.key === 'Escape') setActiveObsId(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToObs]);

  const reviewedCount = Object.values(observationStatuses).filter(
    (s) => s === 'reviewed' || s === 'corrected' || s === 'dismissed'
  ).length;

  const canAnalyze = studentText.trim().length > 0 && selectedGenre !== null && !analyzing;

  return (
    <div className="workspace">
      {/* ── Top bar ── */}
      <header className="topbar">
        <div className="topbar__brand">
          <span className="topbar__logo">Revisión Académica</span>
          <span className="topbar__sep" />
          <span className="topbar__subtitle">Revisión académica</span>
        </div>

        <div className="topbar__center">
          {result && (
            <div className="topbar__stats">
              <span className="topbar__stat">
                <span className="topbar__stat-dot topbar__stat-dot--total" />
                {result.observations.length} observaciones
              </span>
              <span className="topbar__stat">
                <span className="topbar__stat-dot topbar__stat-dot--done" />
                {reviewedCount} revisadas
              </span>
            </div>
          )}
        </div>

        <div className="topbar__actions">
          {result && (
            <button
              className="topbar__btn"
              onClick={() => { setResult(null); setActiveObsId(null); setPanelTab('config'); }}
            >
              Nueva revisión
            </button>
          )}
          <button
            className={`topbar__btn topbar__btn--primary ${canAnalyze ? '' : 'topbar__btn--disabled'}`}
            onClick={runAnalysis}
            disabled={!canAnalyze}
            id="btn-analyze"
          >
            {analyzing ? (
              <><span className="topbar__spinner" /> Analizando…</>
            ) : 'Revisar texto'}
          </button>
        </div>
      </header>

      {/* ── Error notice ── */}
      {error && (
        <div className="workspace__error">
          <span>⚠ {error}</span>
          <button className="workspace__error-close" onClick={() => setError(null)}>✕</button>
        </div>
      )}

      {/* ── Main layout ── */}
      <div className="workspace__body">

        {/* ══════════════════════════════════════════
            LEFT — Editor
        ══════════════════════════════════════════ */}
        <div className="editor-pane">
          <div className="editor-pane__toolbar">
            <span className="editor-pane__label">
              {selectedGenre ? `${selectedGenre.name}` : 'Documento sin tipo seleccionado'}
            </span>
            <span className="editor-pane__count">{studentText.length.toLocaleString()} caracteres</span>
            <label className="editor-pane__file-btn" title="Cargar archivo DOCX, PDF o TXT">
              Cargar archivo
              <input
                type="file"
                accept=".docx,.pdf,.txt"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFileUpload(f, setStudentText, setFileWarnings);
                }}
              />
            </label>
          </div>

          {fileWarnings.length > 0 && (
            <div className="editor-pane__warnings">
              {fileWarnings.map((w, i) => <div key={i} className="editor-warn">{w}</div>)}
            </div>
          )}

          {/* Highlighted view or plain editor */}
          {result ? (
            <div className="editor-pane__highlighted" id="highlighted-text">
              {segments.map((seg, i) => {
                if (seg.observations.length === 0) return <span key={i}>{seg.text}</span>;
                const primary = seg.observations.sort(
                  (a, b) => ['high', 'medium', 'low'].indexOf(a.priority) - ['high', 'medium', 'low'].indexOf(b.priority)
                )[0];
                const isActive = seg.observations.some((o) => o.id === activeObsId);
                const isReviewed = seg.observations.every((o) => observationStatuses[o.id] !== 'pending');
                return (
                  <mark
                    key={i}
                    ref={(el) => {
                      if (el) seg.observations.forEach((o) => highlightRefs.current.set(o.id, el));
                    }}
                    className={[
                      'hlmark',
                      `hlmark--${CATEGORY_COLORS[primary.category]}`,
                      isActive ? 'hlmark--active' : '',
                      isReviewed ? 'hlmark--reviewed' : '',
                    ].join(' ')}
                    onClick={() => { setActiveObsId(primary.id); setPanelTab('obs'); }}
                    title={`${CATEGORY_SHORT_LABELS[primary.category]}: ${primary.explanation.substring(0, 80)}`}
                    role="button"
                    tabIndex={0}
                  >
                    {seg.text}
                  </mark>
                );
              })}

              {/* Unmatched observations at bottom */}
              {unmatchedObs.length > 0 && (
                <div className="unmatched-section">
                  <div className="unmatched-section__title">Observaciones generales (sin fragmento exacto)</div>
                  {unmatchedObs.map((obs) => (
                    <div
                      key={obs.id}
                      className={`unmatched-item ${activeObsId === obs.id ? 'unmatched-item--active' : ''}`}
                      onClick={() => { setActiveObsId(obs.id); setPanelTab('obs'); }}
                    >
                      <span className={`unmatched-item__dot unmatched-item__dot--${CATEGORY_COLORS[obs.category]}`} />
                      <span className="unmatched-item__fragment">{obs.originalFragment || 'Observación general'}</span>
                      <span className="unmatched-item__expl">{obs.explanation.substring(0, 80)}…</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <textarea
              ref={editorRef}
              className="editor-pane__textarea"
              value={studentText}
              onChange={(e) => setStudentText(e.target.value)}
              placeholder="Escribe o pega aquí tu texto académico…"
              id="student-text-input"
              spellCheck={false}
            />
          )}

          {/* Edit mode when results visible */}
          {result && (
            <div className="editor-pane__edit-bar">
              <button
                className="editor-pane__edit-btn"
                onClick={() => { setResult(null); setActiveObsId(null); setPanelTab('config'); }}
              >
                ✏ Editar texto
              </button>
              <button className="editor-pane__edit-btn" onClick={runAnalysis} disabled={analyzing}>
                ↺ Re-evaluar
              </button>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════
            RIGHT — Config / Results panel
        ══════════════════════════════════════════ */}
        <aside className="side-panel">

          {/* Panel tabs */}
          <div className="side-panel__tabs">
            <button
              className={`side-panel__tab ${panelTab === 'config' ? 'side-panel__tab--active' : ''}`}
              onClick={() => setPanelTab('config')}
              id="panel-tab-config"
            >
              Configuración
            </button>
            <button
              className={`side-panel__tab ${panelTab === 'obs' ? 'side-panel__tab--active' : ''} ${!result ? 'side-panel__tab--disabled' : ''}`}
              onClick={() => result && setPanelTab('obs')}
              id="panel-tab-obs"
            >
              Observaciones {result ? `(${filteredObs.length})` : ''}
            </button>
            <button
              className={`side-panel__tab ${panelTab === 'feedback' ? 'side-panel__tab--active' : ''} ${!result ? 'side-panel__tab--disabled' : ''}`}
              onClick={() => result && setPanelTab('feedback')}
              id="panel-tab-feedback"
            >
              Retroalimentación
            </button>
            {result?.structureComponents && (
              <button
                className={`side-panel__tab ${panelTab === 'structure' ? 'side-panel__tab--active' : ''}`}
                onClick={() => setPanelTab('structure')}
                id="panel-tab-structure"
              >
                Estructura
              </button>
            )}
          </div>

          {/* ── CONFIG tab ── */}
          {panelTab === 'config' && (
            <div className="side-panel__body">

              {/* Genre selector */}
              <section className="cfg-section">
                <div className="cfg-section__label">Tipo de texto académico</div>
                <div className="genre-list">
                  {ACADEMIC_GENRES.map((g) => (
                    <button
                      key={g.id}
                      className={`genre-row ${selectedGenre?.id === g.id ? 'genre-row--active' : ''}`}
                      onClick={() => setSelectedGenre(g)}
                      id={`genre-${g.id}`}
                    >
                      <span className="genre-row__icon">{g.icon}</span>
                      <span className="genre-row__name">{g.name}</span>
                    </button>
                  ))}
                </div>

                {selectedGenre?.id === 'otro' && (
                  <div className="cfg-custom">
                    <input
                      className="cfg-input"
                      type="text"
                      value={customGenreName}
                      onChange={(e) => setCustomGenreName(e.target.value)}
                      placeholder="Nombre del género…"
                      id="custom-genre-name"
                    />
                    <textarea
                      className="cfg-input cfg-input--ta"
                      value={customGenreDesc}
                      onChange={(e) => setCustomGenreDesc(e.target.value)}
                      placeholder="Características principales (opcional)…"
                    />
                  </div>
                )}
              </section>

              <div className="cfg-divider" />

              {/* Dimensions */}
              <section className="cfg-section">
                <div className="cfg-section__label">Dimensiones de revisión</div>
                <div className="dim-list">
                  {REVIEW_DIMENSIONS.map((dim) => (
                    <label key={dim.id} className="dim-row" htmlFor={`dim-${dim.id}`}>
                      <input
                        type="checkbox"
                        id={`dim-${dim.id}`}
                        className="dim-row__check"
                        checked={dimensions.includes(dim.id)}
                        onChange={() => toggleDimension(dim.id)}
                      />
                      <div className="dim-row__info">
                        <span className="dim-row__name">{dim.name}</span>
                        <span className="dim-row__desc">{dim.description}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              <div className="cfg-divider" />

              {/* Reference document */}
              <section className="cfg-section">
                <button
                  className="cfg-toggle"
                  onClick={() => setShowRefSection(!showRefSection)}
                  id="toggle-reference"
                >
                  <span>Documento de referencia</span>
                  <span className="cfg-toggle__icon">{showRefSection ? '▲' : '▼'}</span>
                </button>
                {showRefSection && (
                  <div className="cfg-ref">
                    <p className="cfg-ref__hint">
                      Adjunta la lectura base de tu trabajo para evaluar comprensión lectora. Es opcional.
                    </p>
                    <label className="cfg-file-btn">
                      Cargar archivo de referencia
                      <input
                        type="file"
                        accept=".docx,.pdf,.txt"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFileUpload(f, setReferenceText, setRefFileWarnings);
                        }}
                      />
                    </label>
                    <textarea
                      className="cfg-input cfg-input--ta"
                      value={referenceText}
                      onChange={(e) => setReferenceText(e.target.value)}
                      placeholder="O pega aquí el texto de referencia…"
                      style={{ minHeight: '120px', marginTop: '8px' }}
                    />
                    {referenceText && (
                      <div className="cfg-ref__count">{referenceText.length.toLocaleString()} caracteres</div>
                    )}
                    {refFileWarnings.map((w, i) => (
                      <div key={i} className="editor-warn" style={{ marginTop: '6px' }}>{w}</div>
                    ))}
                  </div>
                )}
              </section>

              <div className="cfg-divider" />

              {/* Analyze button */}
              <section className="cfg-section">
                {!selectedGenre && (
                  <p className="cfg-hint">Selecciona un tipo de texto para continuar.</p>
                )}
                {!studentText.trim() && selectedGenre && (
                  <p className="cfg-hint">Escribe o carga el texto a revisar.</p>
                )}
                <button
                  className="cfg-analyze-btn"
                  onClick={runAnalysis}
                  disabled={!canAnalyze}
                  id="btn-analyze-panel"
                >
                  {analyzing ? (
                    <><span className="topbar__spinner" /> Analizando…</>
                  ) : 'Iniciar revisión'}
                </button>
              </section>
            </div>
          )}

          {/* ── OBSERVATIONS tab ── */}
          {panelTab === 'obs' && result && (
            <div className="side-panel__body side-panel__body--obs">

              {/* Active observation detail */}
              {activeObs ? (
                <div className="obs-detail">
                  {/* Nav header */}
                  <div className="obs-detail__header">
                    <span className={`obs-badge obs-badge--${CATEGORY_COLORS[activeObs.category]}`}>
                      {CATEGORY_SHORT_LABELS[activeObs.category]}
                    </span>
                    <div className="obs-detail__nav">
                      <button className="obs-nav-btn" onClick={() => goToObs('prev')}>←</button>
                      <span className="obs-detail__counter">{currentIndex + 1} / {filteredObs.length}</span>
                      <button className="obs-nav-btn" onClick={() => goToObs('next')}>→</button>
                      <button className="obs-nav-btn" onClick={() => setActiveObsId(null)}>✕</button>
                    </div>
                  </div>

                  {/* Fragment */}
                  <div className="obs-field">
                    <div className="obs-field__label">Fragmento</div>
                    <div className="obs-field__fragment">"{activeObs.originalFragment}"</div>
                  </div>

                  {/* Explanation */}
                  <div className="obs-field">
                    <div className="obs-field__label">Observación</div>
                    <div className="obs-field__text">{activeObs.explanation}</div>
                  </div>

                  {/* Rule */}
                  {activeObs.rule && (
                    <div className="obs-field">
                      <div className="obs-field__label">Regla aplicada</div>
                      <div className="obs-field__text">{activeObs.rule}</div>
                    </div>
                  )}

                  {/* Context reason */}
                  {activeObs.contextReason && (
                    <div className="obs-field">
                      <div className="obs-field__label">¿Por qué aquí?</div>
                      <div className="obs-field__text">{activeObs.contextReason}</div>
                    </div>
                  )}

                  {/* Suggestion */}
                  {activeObs.suggestion && (
                    <div className="obs-field">
                      <div className="obs-field__label">Sugerencia</div>
                      <div className="obs-field__text">{activeObs.suggestion}</div>
                    </div>
                  )}

                  {/* Example correction */}
                  {activeObs.exampleCorrection && (
                    <div className="obs-field">
                      <div className="obs-field__label">Posible corrección</div>
                      <div className="obs-field__correction">→ {activeObs.exampleCorrection}</div>
                    </div>
                  )}

                  {/* Reflection */}
                  {activeObs.reflectionQuestion && (
                    <div className="obs-field">
                      <div className="obs-field__label">Para reflexionar</div>
                      <div className="obs-field__reflection">💭 {activeObs.reflectionQuestion}</div>
                    </div>
                  )}

                  {/* Meta */}
                  <div className="obs-meta">
                    <span className={`obs-meta__item obs-meta__item--priority-${activeObs.priority}`}>
                      Prioridad: {PRIORITY_LABELS[activeObs.priority]}
                    </span>
                    <span className="obs-meta__item">
                      Confianza: {CONFIDENCE_LABELS[activeObs.confidence]}
                    </span>
                  </div>

                  {/* Status actions */}
                  <div className="obs-actions">
                    {(['reviewed', 'corrected', 'dismissed'] as ObservationStatus[]).map((s) => (
                      <button
                        key={s}
                        className={`obs-action-btn ${observationStatuses[activeObs.id] === s ? 'obs-action-btn--active' : ''}`}
                        onClick={() => updateStatus(activeObs.id, s)}
                      >
                        {STATUS_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Observation list */
                <div className="obs-list-pane">
                  {/* Filters */}
                  <div className="obs-filters">
                    {(Object.keys(CATEGORY_SHORT_LABELS) as ObservationCategory[]).map((cat) => (
                      <button
                        key={cat}
                        className={`obs-filter-btn ${categoryFilters.has(cat) ? 'obs-filter-btn--active' : ''}`}
                        onClick={() => toggleCategory(cat)}
                      >
                        <span
                          className="obs-filter-dot"
                          style={{ background: `var(--hl-${CATEGORY_COLORS[cat]}-solid)` }}
                        />
                        {CATEGORY_SHORT_LABELS[cat]}
                      </button>
                    ))}
                  </div>

                  <div className="obs-priority-filters">
                    {(['all', 'high', 'medium', 'low'] as const).map((p) => (
                      <button
                        key={p}
                        className={`obs-pri-btn ${priorityFilter === p ? 'obs-pri-btn--active' : ''}`}
                        onClick={() => setPriorityFilter(p)}
                      >
                        {p === 'all' ? 'Todas' : PRIORITY_LABELS[p]}
                      </button>
                    ))}
                  </div>

                  {filteredObs.length === 0 ? (
                    <div className="obs-empty">Sin observaciones en los filtros seleccionados.</div>
                  ) : (
                    <div className="obs-items">
                      {filteredObs.map((obs) => (
                        <div
                          key={obs.id}
                          className={`obs-item ${activeObsId === obs.id ? 'obs-item--active' : ''} ${observationStatuses[obs.id] !== 'pending' ? 'obs-item--done' : ''}`}
                          onClick={() => {
                            setActiveObsId(obs.id);
                            highlightRefs.current.get(obs.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                        >
                          <span
                            className="obs-item__bar"
                            style={{ background: `var(--hl-${CATEGORY_COLORS[obs.category]}-solid)` }}
                          />
                          <div className="obs-item__body">
                            <div className="obs-item__fragment">
                              "{obs.originalFragment.substring(0, 50)}{obs.originalFragment.length > 50 ? '…' : ''}"
                            </div>
                            <div className="obs-item__expl">
                              {obs.explanation.substring(0, 90)}{obs.explanation.length > 90 ? '…' : ''}
                            </div>
                            <span className={`obs-item__priority obs-item__priority--${obs.priority}`}>
                              {PRIORITY_LABELS[obs.priority]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── FEEDBACK tab ── */}
          {panelTab === 'feedback' && result && (
            <div className="side-panel__body">
              <div className="fb-block">
                <div className="fb-block__title">Valoración general</div>
                <div className="fb-block__text">{result.generalFeedback.overallAssessment}</div>
              </div>
              {result.generalFeedback.strengths.length > 0 && (
                <div className="fb-block">
                  <div className="fb-block__title">Fortalezas</div>
                  {result.generalFeedback.strengths.map((s, i) => (
                    <div key={i} className="fb-item fb-item--strength">{s}</div>
                  ))}
                </div>
              )}
              {result.generalFeedback.priorityIssues.length > 0 && (
                <div className="fb-block">
                  <div className="fb-block__title">Problemas prioritarios</div>
                  {result.generalFeedback.priorityIssues.map((p, i) => (
                    <div key={i} className="fb-item fb-item--issue">{p}</div>
                  ))}
                </div>
              )}
              {result.generalFeedback.recommendations.length > 0 && (
                <div className="fb-block">
                  <div className="fb-block__title">Recomendaciones</div>
                  {result.generalFeedback.recommendations.map((r, i) => (
                    <div key={i} className="fb-item">{r}</div>
                  ))}
                </div>
              )}
              {result.generalFeedback.nextSteps.length > 0 && (
                <div className="fb-block">
                  <div className="fb-block__title">Próximos pasos</div>
                  {result.generalFeedback.nextSteps.map((n, i) => (
                    <div key={i} className="fb-item">{n}</div>
                  ))}
                </div>
              )}
              {result.generalFeedback.readingComprehension && (
                <div className="fb-block">
                  <div className="fb-block__title">Comprensión lectora</div>
                  <div className="fb-block__text">{result.generalFeedback.readingComprehension}</div>
                </div>
              )}
              {result.generalFeedback.limitations.length > 0 && (
                <div className="fb-block fb-block--warn">
                  <div className="fb-block__title">Limitaciones</div>
                  {result.generalFeedback.limitations.map((l, i) => (
                    <div key={i} className="fb-item">{l}</div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── STRUCTURE tab ── */}
          {panelTab === 'structure' && result?.structureComponents && (
            <div className="side-panel__body">
              <div className="struct-table">
                {result.structureComponents.map((comp, i) => (
                  <div key={i} className="struct-row">
                    <div className="struct-row__name">{comp.name}</div>
                    <span className={`struct-badge struct-badge--${comp.status === 'present' ? 'ok' :
                      comp.status === 'needs_review' ? 'warn' :
                        comp.status === 'not_found' ? 'missing' : 'na'
                      }`}>
                      {STRUCTURE_STATUS_LABELS[comp.status]}
                    </span>
                    <div className="struct-row__obs">{comp.observation}</div>
                    {comp.recommendation && (
                      <div className="struct-row__rec">{comp.recommendation}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
