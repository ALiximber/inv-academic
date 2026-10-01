'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { BRIEF_INTENTIONS } from '@/lib/genres';
import type { EvaluationResult, ExtractionResult } from '@/lib/types';
import ResultsView from '@/components/results/ResultsView';

type Step = 'input' | 'analyzing' | 'results';

export default function BrevePage() {
  const [currentStep, setCurrentStep] = useState<Step>('input');
  const [studentText, setStudentText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [intention, setIntention] = useState('general');
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previousResults, setPreviousResults] = useState<EvaluationResult[]>([]);

  const handleFileUpload = useCallback(async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/extract', { method: 'POST', body: formData });
      const data: ExtractionResult & { error?: string } = await res.json();
      if (!res.ok) {
        setError(data.error || 'Error al extraer el texto.');
        return;
      }
      setStudentText(data.text);
    } catch {
      setError('Error de conexión al procesar el archivo.');
    }
  }, []);

  const runAnalysis = async () => {
    if (!studentText.trim()) return;
    setCurrentStep('analyzing');
    setError(null);

    // Save original text for comparison
    if (!originalText) {
      setOriginalText(studentText);
    }

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewType: 'brief',
          genre: null,
          customGenreName: null,
          customGenreDescription: null,
          dimensions: [intention],
          studentText,
          referenceText: null,
          briefIntention: intention,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Error al analizar el texto.');
        setCurrentStep('input');
        return;
      }

      // Save previous result for comparison
      if (result) {
        setPreviousResults((prev) => [...prev, result]);
      }

      setResult(data);
      setCurrentStep('results');
    } catch {
      setError('Error de conexión al servidor.');
      setCurrentStep('input');
    }
  };

  const startNewReview = () => {
    setCurrentStep('input');
    setResult(null);
    setStudentText('');
    setOriginalText('');
    setPreviousResults([]);
    setError(null);
  };

  const reEvaluate = () => {
    setResult(null);
    setCurrentStep('input');
  };

  if (currentStep === 'results' && result) {
    return (
      <ResultsView
        result={result}
        studentText={studentText}
        reviewType="brief"
        onNewReview={startNewReview}
        onReEvaluate={reEvaluate}
        onTextChange={setStudentText}
        originalText={originalText !== studentText ? originalText : undefined}
        previousResults={previousResults}
      />
    );
  }

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <div className="header__logo-icon">O</div>
            <span className="header__logo-text">ORC</span>
          </Link>
          <div className="header__nav">
            <span className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>
              Revisión de textos breves
            </span>
          </div>
        </div>
      </header>

      <main className="page-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          {error && (
            <div className="notice notice--error mb-6 animate-fade-in">
              <span className="notice__icon">⚠️</span>
              <div>
                <strong>Error:</strong> {error}
                <button className="btn btn--ghost btn--sm mt-2" onClick={() => setError(null)} style={{ display: 'block' }}>
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {currentStep === 'input' && (
            <section className="animate-fade-in-up">
              <h1 className="heading-2 mb-2">Revisión de textos breves</h1>
              <p className="text-body mb-6">
                Escribe o pega tu texto para recibir retroalimentación sobre ortografía,
                gramática, claridad y coherencia. No se requiere estructura académica.
              </p>

              {/* Text Input */}
              <div className="form-group mb-6">
                <textarea
                  className="form-textarea form-textarea--editor"
                  value={studentText}
                  onChange={(e) => setStudentText(e.target.value)}
                  placeholder="Escribe o pega aquí tu texto…"
                  id="brief-text-input"
                />
                <div className="flex justify-between mt-2">
                  <span className="form-hint">
                    {studentText.length.toLocaleString()} caracteres
                  </span>
                  <label
                    className="btn btn--ghost btn--sm"
                    style={{ cursor: 'pointer' }}
                  >
                    📁 Cargar archivo
                    <input
                      type="file"
                      accept=".docx,.pdf,.txt"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file);
                      }}
                    />
                  </label>
                </div>
              </div>

              {/* Intention Selection */}
              <div className="glass-card glass-card--compact mb-6">
                <h3 className="heading-4 mb-4">Tipo de revisión</h3>
                <div className="config-grid">
                  {BRIEF_INTENTIONS.map((int) => (
                    <div
                      key={int.id}
                      className={`config-item ${intention === int.id ? 'config-item--active' : ''}`}
                      onClick={() => setIntention(int.id)}
                      id={`intention-${int.id}`}
                    >
                      <input
                        type="radio"
                        name="intention"
                        className="checkbox-input"
                        checked={intention === int.id}
                        onChange={() => setIntention(int.id)}
                        aria-label={int.name}
                      />
                      <div className="config-item__info">
                        <div className="config-item__title">{int.name}</div>
                        <div className="config-item__description">{int.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compare with original */}
              {originalText && originalText !== studentText && (
                <div className="notice notice--info mb-6">
                  <span className="notice__icon">📝</span>
                  <span>
                    Has modificado el texto desde la última revisión.
                    Puedes volver a evaluar para ver las mejoras.
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <Link href="/" className="btn btn--ghost">← Inicio</Link>
                <button
                  className="btn btn--primary btn--lg"
                  disabled={!studentText.trim()}
                  onClick={runAnalysis}
                  id="btn-brief-analyze"
                >
                  🔍 Revisar texto
                </button>
              </div>
            </section>
          )}

          {currentStep === 'analyzing' && (
            <div className="loading-overlay animate-fade-in">
              <div className="loading-spinner" />
              <h2 className="heading-3">Revisando tu texto…</h2>
              <p className="loading-text">
                Esto tomará unos segundos.
              </p>
              <div className="loading-progress">
                <div className="loading-progress__bar" />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
