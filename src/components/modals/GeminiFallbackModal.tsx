'use client';

import React from 'react';

interface GeminiFallbackModalProps {
  isOpen: boolean;
  fileName: string;
  targetLabel: string;
  reason?: string;
  loading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function GeminiFallbackModal({
  isOpen,
  fileName,
  targetLabel,
  reason,
  loading,
  onConfirm,
  onCancel,
}: GeminiFallbackModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="fallback-modal-title">
      <div className="modal-backdrop" onClick={loading ? undefined : onCancel} />
      <div className="modal-card">
        <div className="modal-icon-badge">
          ✨
        </div>

        <h3 id="fallback-modal-title" className="modal-title">
          ¿Procesar con Gemini?
        </h3>

        <div className="modal-body">
          <p className="modal-desc">
            No se pudo extraer texto de forma local de <strong>{fileName}</strong> para <em>{targetLabel}</em>.
          </p>
          {reason && (
            <p className="modal-reason">
              {reason}
            </p>
          )}
          <div className="modal-info-box">
            <span className="modal-info-icon">ℹ️</span>
            <div>
              ¿Deseas enviar el archivo directamente a <strong>Gemini</strong> para que transcriba su contenido mediante visión inteligente y OCR?
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="topbar__spinner" style={{ width: 14, height: 14, borderTopColor: '#fff' }} />
                <span>Extrayendo con Gemini…</span>
              </>
            ) : (
              <>
                <span>✨ Extraer con Gemini</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
