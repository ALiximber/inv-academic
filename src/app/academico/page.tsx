'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ACADEMIC_GENRES, REVIEW_DIMENSIONS } from '@/lib/genres';
import type { AcademicGenre, EvaluationResult, ExtractionResult } from '@/lib/types';
import ResultsView from '@/components/results/ResultsView';

type Step = 'genre' | 'config' | 'input' | 'reference' | 'analyzing' | 'results';

export default function AcademicoPage() {
  // Step state
  const [currentStep, setCurrentStep] = useState<Step>('genre');

  // Step 1: Genre
  const [selectedGenre, setSelectedGenre] = useState<AcademicGenre | null>(null);
  const [customGenreName, setCustomGenreName] = useState('');
  const [customGenreDesc, setCustomGenreDesc] = useState('');

  // Step 2: Config
  const [dimensions, setDimensions] = useState<string[]>(
    REVIEW_DIMENSIONS.filter((d) => d.default).map((d) => d.id)
  );

  // Step 3: Input
  const [studentText, setStudentText] = useState('');
  const [inputMethod, setInputMethod] = useState<'paste' | 'file'>('paste');
  const [fileWarnings, setFileWarnings] = useState<string[]>([]);

  // Step 4: Reference
  const [referenceText, setReferenceText] = useState('');
  const [refFileWarnings, setRefFileWarnings] = useState<string[]>([]);

  // Step 5: Results
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // File upload handler
  const handleFileUpload = useCallback(async (
    file: File,
    setter: (text: string) => void,
    warningSetter: (warnings: string[]) => void
  ) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/extract', { method: 'POST', body: formData });
      const data: ExtractionResult & { error?: string } = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al extraer el texto del archivo.');
        return;
      }

      setter(data.text);
      warningSetter(data.warnings || []);

      if (data.truncated) {
        setError(
          `El documento contiene ${data.originalLength.toLocaleString()} caracteres. ` +
          `Se recomienda dividir el texto en secciones para una revisión más precisa.`
        );
      }
    } catch {
      setError('Error de conexión al procesar el archivo.');
    }
  }, []);

  // Toggle dimension
  const toggleDimension = (id: string) => {
    if (id === 'integral') {
      // If integral is toggled, select/deselect all
      if (dimensions.includes('integral')) {
        setDimensions([]);
      } else {
        setDimensions(REVIEW_DIMENSIONS.map((d) => d.id));
      }
      return;
    }

    setDimensions((prev) => {
      const next = prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id];
      // If all individual dimensions selected, add integral
      const individualDims = REVIEW_DIMENSIONS.filter(d => d.id !== 'integral').map(d => d.id);
      const allSelected = individualDims.every(d => next.includes(d));
      if (allSelected && !next.includes('integral')) {
        return [...next, 'integral'];
      }
      if (!allSelected && next.includes('integral')) {
        return next.filter(d => d !== 'integral');
      }
      return next;
    });
  };

  // Run analysis
  const runAnalysis = async () => {
    if (!selectedGenre || !studentText.trim()) return;

    setCurrentStep('analyzing');
    setError(null);

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

      if (!res.ok) {
        setError(data.error || 'Error al analizar el texto.');
        setCurrentStep('input');
        return;
      }

      setResult(data);
      setCurrentStep('results');
    } catch {
      setError('Error de conexión al servidor.');
      setCurrentStep('input');
    }
  };

  // New review
  const startNewReview = () => {
    setCurrentStep('genre');
    setResult(null);
    setStudentText('');
    setReferenceText('');
    setFileWarnings([]);
    setRefFileWarnings([]);
    setError(null);
  };

  // Re-evaluate (keep text, go to results)
  const reEvaluate = () => {
    setResult(null);
    setCurrentStep('input');
  };

  // Steps data
  const steps = [
    { key: 'genre', label: 'Género', num: 1 },
    { key: 'config', label: 'Configuración', num: 2 },
    { key: 'input', label: 'Documento', num: 3 },
    { key: 'reference', label: 'Referencia', num: 4 },
  ];

  const isStepCompleted = (key: string) => {
    const order = ['genre', 'config', 'input', 'reference', 'analyzing', 'results'];
    return order.indexOf(key) < order.indexOf(currentStep);
  };

  // Results view
  if (currentStep === 'results' && result) {
    return (
      <ResultsView
        result={result}
        studentText={studentText}
        reviewType="academic"
        onNewReview={startNewReview}
        onReEvaluate={reEvaluate}
        onTextChange={setStudentText}
      />
    );
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <div className="header__logo-icon">O</div>
            <span className="header__logo-text">ORC</span>
          </Link>
          <div className="header__nav">
            <span className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>
              Revisión académica
            </span>
          </div>
        </div>
      </header>

      <main className="page-content">
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Progress Steps */}
          {currentStep !== 'analyzing' && (
            <nav className="steps mb-8">
              {steps.map((step, i) => (
                <div key={step.key} className="step" style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div className={`step__connector ${isStepCompleted(steps[i - 1].key) ? '' : ''}`} />}
                  <div
                    className={`step ${
                      currentStep === step.key ? 'step--active' : ''
                    } ${isStepCompleted(step.key) ? 'step--completed' : ''}`}
                  >
                    <div className="step__number">{isStepCompleted(step.key) ? '✓' : step.num}</div>
                    <span className="step__label">{step.label}</span>
                  </div>
                </div>
              ))}
            </nav>
          )}

          {/* Error */}
          {error && (
            <div className="notice notice--error mb-6 animate-fade-in">
              <span className="notice__icon">⚠️</span>
              <div>
                <strong>Error:</strong> {error}
                <button
                  className="btn btn--ghost btn--sm mt-2"
                  onClick={() => setError(null)}
                  style={{ display: 'block' }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Genre Selection */}
          {currentStep === 'genre' && (
            <section className="animate-fade-in-up">
              <h1 className="heading-2 mb-2">Selecciona el tipo de texto académico</h1>
              <p className="text-body mb-6">
                Cada género tiene criterios de revisión específicos. Selecciona el que mejor
                corresponda a tu documento para una evaluación más precisa.
              </p>

              <div className="genre-grid">
                {ACADEMIC_GENRES.map((genre) => (
                  <div
                    key={genre.id}
                    className={`genre-card ${selectedGenre?.id === genre.id ? 'genre-card--selected' : ''}`}
                    onClick={() => setSelectedGenre(genre)}
                    id={`genre-${genre.id}`}
                  >
                    <span className="genre-card__icon">{genre.icon}</span>
                    <div className="genre-card__info">
                      <div className="genre-card__name">{genre.name}</div>
                      <div className="genre-card__hint">{genre.description.substring(0, 60)}…</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom genre inputs */}
              {selectedGenre?.id === 'otro' && (
                <div className="glass-card glass-card--compact mt-6 animate-fade-in">
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="custom-genre-name">
                      Nombre del género académico
                    </label>
                    <input
                      id="custom-genre-name"
                      className="form-input"
                      type="text"
                      value={customGenreName}
                      onChange={(e) => setCustomGenreName(e.target.value)}
                      placeholder="Ej: Carta de motivación, Análisis de caso…"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="custom-genre-desc">
                      Describe sus características principales (opcional)
                    </label>
                    <textarea
                      id="custom-genre-desc"
                      className="form-textarea"
                      value={customGenreDesc}
                      onChange={(e) => setCustomGenreDesc(e.target.value)}
                      placeholder="Describe la estructura esperada, los requisitos del docente o las características del texto…"
                      style={{ minHeight: '120px' }}
                    />
                  </div>
                </div>
              )}

              {/* Selected genre info */}
              {selectedGenre && selectedGenre.id !== 'otro' && (
                <div className="glass-card glass-card--compact mt-6 animate-fade-in">
                  <h3 className="heading-4 mb-2">
                    {selectedGenre.icon} {selectedGenre.name}
                  </h3>
                  <p className="text-body mb-4">{selectedGenre.description}</p>
                  {selectedGenre.structureComponents.length > 0 && (
                    <>
                      <p className="text-small mb-2" style={{ color: 'var(--color-text-tertiary)' }}>
                        Se evaluarán los siguientes componentes estructurales:
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                        {selectedGenre.structureComponents.map((comp) => (
                          <span key={comp} className="badge badge--structure">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  {selectedGenre.notes && (
                    <div className="notice notice--info mt-4">
                      <span className="notice__icon">ℹ️</span>
                      <span>{selectedGenre.notes}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Link href="/" className="btn btn--ghost">← Inicio</Link>
                <button
                  className="btn btn--primary btn--lg"
                  disabled={
                    !selectedGenre ||
                    (selectedGenre.id === 'otro' && !customGenreName.trim())
                  }
                  onClick={() => setCurrentStep('config')}
                  id="btn-next-config"
                >
                  Continuar →
                </button>
              </div>
            </section>
          )}

          {/* Step 2: Review Configuration */}
          {currentStep === 'config' && (
            <section className="animate-fade-in-up">
              <h1 className="heading-2 mb-2">Configura la revisión</h1>
              <p className="text-body mb-6">
                Selecciona qué aspectos deseas revisar. La evaluación integral está activada
                por defecto, pero puedes desactivar dimensiones que no sean necesarias.
              </p>

              <div className="config-grid">
                {REVIEW_DIMENSIONS.map((dim) => {
                  const isActive = dimensions.includes(dim.id);
                  const isDisabled =
                    dim.id === 'comprehension' && !referenceText.trim();

                  return (
                    <div
                      key={dim.id}
                      className={`config-item ${isActive ? 'config-item--active' : ''}`}
                      onClick={() => !isDisabled && toggleDimension(dim.id)}
                      style={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                      id={`dim-${dim.id}`}
                    >
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={isActive}
                        disabled={isDisabled}
                        onChange={() => {}}
                        aria-label={dim.name}
                      />
                      <div className="config-item__info">
                        <div className="config-item__title">{dim.name}</div>
                        <div className="config-item__description">{dim.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="notice notice--info mt-6">
                <span className="notice__icon">💡</span>
                <span>
                  La dimensión «Comprensión del texto de referencia» se activará cuando
                  adjuntes un documento de referencia en el paso 4.
                </span>
              </div>

              <div className="flex justify-between mt-8">
                <button className="btn btn--ghost" onClick={() => setCurrentStep('genre')}>
                  ← Género
                </button>
                <button
                  className="btn btn--primary btn--lg"
                  disabled={dimensions.length === 0}
                  onClick={() => setCurrentStep('input')}
                  id="btn-next-input"
                >
                  Continuar →
                </button>
              </div>
            </section>
          )}

          {/* Step 3: Document Input */}
          {currentStep === 'input' && (
            <section className="animate-fade-in-up">
              <h1 className="heading-2 mb-2">Introduce tu documento</h1>
              <p className="text-body mb-6">
                Pega directamente tu texto o carga un archivo en formato DOCX, PDF o TXT.
              </p>

              {/* Input method tabs */}
              <div className="tabs mb-6">
                <button
                  className={`tab ${inputMethod === 'paste' ? 'tab--active' : ''}`}
                  onClick={() => setInputMethod('paste')}
                  id="tab-paste"
                >
                  📝 Pegar texto
                </button>
                <button
                  className={`tab ${inputMethod === 'file' ? 'tab--active' : ''}`}
                  onClick={() => setInputMethod('file')}
                  id="tab-file"
                >
                  📁 Cargar archivo
                </button>
              </div>

              {inputMethod === 'paste' ? (
                <div className="form-group">
                  <textarea
                    className="form-textarea form-textarea--editor"
                    value={studentText}
                    onChange={(e) => setStudentText(e.target.value)}
                    placeholder="Pega aquí tu texto…"
                    id="student-text-input"
                  />
                  <span className="form-hint">
                    {studentText.length.toLocaleString()} caracteres
                  </span>
                </div>
              ) : (
                <div>
                  <div
                    className="file-upload"
                    onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('file-upload--active'); }}
                    onDragLeave={(e) => { e.currentTarget.classList.remove('file-upload--active'); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('file-upload--active');
                      const file = e.dataTransfer.files[0];
                      if (file) handleFileUpload(file, setStudentText, setFileWarnings);
                    }}
                  >
                    <div className="file-upload__icon">📎</div>
                    <div className="file-upload__text">
                      Arrastra un archivo aquí o haz clic para seleccionar
                    </div>
                    <div className="file-upload__formats">
                      Formatos aceptados: DOCX, PDF (con texto extraíble), TXT
                    </div>
                    <input
                      type="file"
                      accept=".docx,.pdf,.txt,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,text/plain"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, setStudentText, setFileWarnings);
                      }}
                      id="student-file-input"
                    />
                  </div>

                  {fileWarnings.length > 0 && (
                    <div className="mt-4">
                      {fileWarnings.map((w, i) => (
                        <div key={i} className="notice notice--warning mb-2">
                          <span className="notice__icon">⚠️</span>
                          <span>{w}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {studentText && (
                    <div className="mt-4">
                      <div className="file-info">
                        <span className="file-info__name">Texto extraído correctamente</span>
                        <span className="file-info__size">
                          {studentText.length.toLocaleString()} caracteres
                        </span>
                        <button
                          className="file-info__remove"
                          onClick={() => { setStudentText(''); setFileWarnings([]); }}
                          title="Eliminar"
                        >
                          ✕
                        </button>
                      </div>
                      <details className="mt-2" style={{ cursor: 'pointer' }}>
                        <summary className="text-small" style={{ color: 'var(--color-text-link)' }}>
                          Ver texto extraído
                        </summary>
                        <pre style={{
                          marginTop: 'var(--space-2)',
                          padding: 'var(--space-4)',
                          background: 'var(--color-bg-tertiary)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--text-xs)',
                          maxHeight: '300px',
                          overflow: 'auto',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}>
                          {studentText.substring(0, 2000)}
                          {studentText.length > 2000 && '…'}
                        </pre>
                      </details>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button className="btn btn--ghost" onClick={() => setCurrentStep('config')}>
                  ← Configuración
                </button>
                <button
                  className="btn btn--primary btn--lg"
                  disabled={!studentText.trim()}
                  onClick={() => setCurrentStep('reference')}
                  id="btn-next-reference"
                >
                  Continuar →
                </button>
              </div>
            </section>
          )}

          {/* Step 4: Reference Document */}
          {currentStep === 'reference' && (
            <section className="animate-fade-in-up">
              <h1 className="heading-2 mb-2">Documento de referencia (opcional)</h1>
              <p className="text-body mb-6">
                Si tu trabajo se basa en una lectura específica (artículo, capítulo, etc.),
                adjúntalo para evaluar tu comprensión lectora. Si no tienes uno, puedes
                omitir este paso.
              </p>

              <div className="tabs mb-6">
                <button
                  className={`tab ${!referenceText ? 'tab--active' : ''}`}
                  onClick={() => setReferenceText('')}
                >
                  Sin referencia
                </button>
                <button
                  className={`tab ${referenceText ? 'tab--active' : ''}`}
                  onClick={() => {}}
                >
                  Con referencia
                </button>
              </div>

              <div
                className="file-upload"
                onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('file-upload--active'); }}
                onDragLeave={(e) => { e.currentTarget.classList.remove('file-upload--active'); }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.remove('file-upload--active');
                  const file = e.dataTransfer.files[0];
                  if (file) handleFileUpload(file, setReferenceText, setRefFileWarnings);
                }}
              >
                <div className="file-upload__icon">📚</div>
                <div className="file-upload__text">
                  Arrastra el documento de referencia o haz clic para seleccionar
                </div>
                <div className="file-upload__formats">
                  DOCX, PDF (con texto extraíble), TXT
                </div>
                <input
                  type="file"
                  accept=".docx,.pdf,.txt"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file, setReferenceText, setRefFileWarnings);
                  }}
                  id="reference-file-input"
                />
              </div>

              <div className="text-center mt-4 mb-4">
                <span className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>— o —</span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reference-text-input">
                  Pegar texto de referencia
                </label>
                <textarea
                  id="reference-text-input"
                  className="form-textarea"
                  value={referenceText}
                  onChange={(e) => setReferenceText(e.target.value)}
                  placeholder="Pega aquí el texto de referencia (artículo, capítulo, lectura)…"
                  style={{ minHeight: '200px' }}
                />
                {referenceText && (
                  <span className="form-hint">
                    {referenceText.length.toLocaleString()} caracteres
                  </span>
                )}
              </div>

              {refFileWarnings.length > 0 && (
                <div className="mt-4">
                  {refFileWarnings.map((w, i) => (
                    <div key={i} className="notice notice--warning mb-2">
                      <span className="notice__icon">⚠️</span>
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              )}

              {!referenceText.trim() && (
                <div className="notice notice--info mt-4">
                  <span className="notice__icon">ℹ️</span>
                  <span>
                    Sin documento de referencia, se omitirá la evaluación de comprensión lectora.
                    El resto de la revisión funcionará normalmente.
                  </span>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button className="btn btn--ghost" onClick={() => setCurrentStep('input')}>
                  ← Documento
                </button>
                <button
                  className="btn btn--primary btn--lg"
                  onClick={runAnalysis}
                  id="btn-analyze"
                >
                  🔍 Iniciar revisión
                </button>
              </div>
            </section>
          )}

          {/* Analyzing State */}
          {currentStep === 'analyzing' && (
            <div className="loading-overlay animate-fade-in">
              <div className="loading-spinner" />
              <h2 className="heading-3">Analizando tu documento…</h2>
              <p className="loading-text">
                Esto puede tardar entre 15 y 60 segundos dependiendo de la extensión del texto.
              </p>
              <div className="loading-progress">
                <div className="loading-progress__bar" />
              </div>
              <p className="text-caption mt-4">
                Evaluando: {selectedGenre?.name || 'documento'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
