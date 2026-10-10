'use client';

import { useState } from 'react';
import type { AcademicGenre } from '@/lib/types';

interface GenreStructureMapProps {
  genre: AcademicGenre;
}

/**
 * Mapa visual de la estructura esperada de un género académico:
 * línea de tiempo numerada con cada sección y sus partes internas.
 * Si el género tiene varias modalidades (p. ej. Informe) muestra un selector.
 */
export default function GenreStructureMap({ genre }: GenreStructureMapProps) {
  const [variantId, setVariantId] = useState(genre.structure[0]?.id ?? '');
  const variant = genre.structure.find((v) => v.id === variantId) ?? genre.structure[0];

  if (!variant) return null;

  const partCount = variant.sections.reduce((n, s) => n + (s.parts?.length ?? 0), 0);

  return (
    <div className="smap" id={`structure-map-${genre.id}`}>
      <div className="smap__meta">
        <span>
          <strong>{variant.sections.length}</strong> secciones
        </span>
        {partCount > 0 && (
          <>
            <span className="smap__meta-dot" aria-hidden="true" />
            <span>
              <strong>{partCount}</strong> elementos
            </span>
          </>
        )}
      </div>

      {genre.structure.length > 1 && (
        <div className="smap__tabs" role="tablist" aria-label="Modalidad del documento">
          {genre.structure.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={v.id === variant.id}
              className={`smap__tab ${v.id === variant.id ? 'smap__tab--active' : ''}`}
              onClick={() => setVariantId(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      <ol className="smap__rail" key={variant.id}>
        {variant.sections.map((section, i) => (
          <li
            key={section.name}
            className={`smap__item ${section.optional ? 'smap__item--optional' : ''}`}
            style={{ ['--i' as string]: i } as React.CSSProperties}
          >
            <span className="smap__node" aria-hidden="true">
              {i + 1}
            </span>
            <div className="smap__card">
              <div className="smap__head">
                <span className="smap__name">{section.name}</span>
                {section.optional && <span className="smap__tag">Opcional</span>}
              </div>
              {section.note && <p className="smap__note">{section.note}</p>}
              {section.parts && section.parts.length > 0 && (
                <ul className="smap__parts">
                  {section.parts.map((part) => (
                    <li key={part} className="smap__part">
                      {part}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
