/* ==========================================================
   Academic Review Prompt Builder
   ========================================================== */

import { AcademicGenre } from '@/lib/types';
import { OBSERVATION_SCHEMA, STRUCTURE_SCHEMA, FEEDBACK_SCHEMA, FULL_RESPONSE_SCHEMA } from './shared';

export function buildAcademicPrompt(params: {
  genre: AcademicGenre;
  customGenreName?: string | null;
  customGenreDescription?: string | null;
  dimensions: string[];
  studentText: string;
  referenceText?: string | null;
}): string {
  const { genre, customGenreName, customGenreDescription, dimensions, studentText, referenceText } = params;

  const isCustomOrGeneric = genre.id === 'generico' || genre.id === 'otro';
  const genreName = isCustomOrGeneric && customGenreName ? customGenreName : genre.name;
  const genreDesc = isCustomOrGeneric && customGenreDescription ? customGenreDescription : genre.description;

  let prompt = `TAREA: Revisa el siguiente texto académico de tipo "${genreName}".

DESCRIPCIÓN DEL GÉNERO: ${genreDesc}
`;

  // Structure components (sections + internal parts)
  if (genre.structure.length > 0) {
    const multi = genre.structure.length > 1;
    const renderVariant = (v: AcademicGenre['structure'][number]) =>
      v.sections
        .map((s, i) => {
          const flags = [s.optional ? 'opcional' : null, s.note || null].filter(Boolean).join('; ');
          const head = `${i + 1}. ${s.name}${flags ? ` (${flags})` : ''}`;
          const parts = s.parts?.length ? `\n${s.parts.map((p) => `   - ${p}`).join('\n')}` : '';
          return head + parts;
        })
        .join('\n');

    prompt += `
COMPONENTES ESTRUCTURALES ESPERADOS PARA ESTE GÉNERO (cada sección con sus partes internas):
${genre.structure
  .map((v) => (multi ? `MODALIDAD "${v.label}":\n${renderVariant(v)}` : renderVariant(v)))
  .join('\n\n')}

INSTRUCCIONES PARA LA EVALUACIÓN ESTRUCTURAL:
- Genera un componente en "structureComponents" por cada SECCIÓN (usa exactamente el nombre indicado).
- Si la sección tiene partes internas, incluye el arreglo "parts" con el estado ("present", "weak" o "missing") y la calificación "score" (0–10) de cada una, usando exactamente los nombres indicados.
- Incluye siempre la calificación "score" (0–10) de cada sección, siguiendo la rúbrica del esquema.
- Las secciones marcadas como opcionales o condicionales que no apliquen deben tener status "not_applicable".${multi ? '\n- Este género tiene varias modalidades: identifica cuál corresponde al texto, evalúa SOLO esa modalidad y menciona cuál elegiste en "structureSummary".' : ''}
`;
  }

  // Evaluation criteria
  if (genre.evaluationCriteria.length > 0) {
    prompt += `
CRITERIOS DE EVALUACIÓN ESPECÍFICOS:
${genre.evaluationCriteria.map(c => `- ${c.name}: ${c.description}`).join('\n')}
`;
  }

  // Notes
  if (genre.notes) {
    prompt += `
NOTA IMPORTANTE: ${genre.notes}
`;
  }

  // Custom or generic genre handling
  if (isCustomOrGeneric) {
    prompt += `
INSTRUCCIONES PARA TEXTO GENÉRICO / GÉNERO PERSONALIZADO:
- El usuario ha seleccionado un texto de tipo genérico o no estándar.
- Aplica criterios generales y equilibrados de calidad de redacción (coherencia, cohesión, claridad expositiva, solidez de ideas y corrección gramatical/ortográfica).
- Evalúa los componentes básicos (introducción o inicio, desarrollo o cuerpo, y conclusión o cierre).
- Si el usuario describió características o requisitos específicos, úsalos como guía prioritaria.
`;
  }

  // Dimensions to evaluate
  prompt += `
DIMENSIONES A EVALUAR:
${dimensions.map(d => `- ${d}`).join('\n')}

Si una dimensión no está seleccionada, NO generes observaciones de esa categoría.
`;

  // Reference document
  if (referenceText) {
    prompt += `
DOCUMENTO DE REFERENCIA (proporcionado por el estudiante):
---INICIO REFERENCIA---
${referenceText}
---FIN REFERENCIA---

INSTRUCCIONES PARA EVALUACIÓN DE COMPRENSIÓN:
- Evalúa si el estudiante identifica correctamente las ideas principales de la referencia.
- Verifica si interpreta adecuadamente los argumentos del autor.
- Comprueba si distingue ideas principales y secundarias.
- Verifica si las explicaciones se corresponden con el documento.
- Revisa si las síntesis y paráfrasis conservan el significado.
- Identifica afirmaciones que contradicen el texto de referencia.
- Señala omisiones de información relevante.
- Verifica si diferencia las afirmaciones del autor de sus propias interpretaciones.
- Fundamenta tus observaciones en fragmentos específicos de la referencia cuando sea posible.
- NO asumas que todas las afirmaciones deben aparecer literalmente en la fuente.
- PERMITE paráfrasis, interpretaciones justificables y aportaciones propias claramente diferenciadas.
`;
  } else {
    prompt += `
NO se proporcionó documento de referencia. Omite la evaluación de comprensión lectora.
En la retroalimentación, indica que no se evaluó la correspondencia con una lectura específica.
No inventes un diagnóstico de comprensión lectora.
`;
  }

  // Student text
  prompt += `
TEXTO DEL ESTUDIANTE A REVISAR:
---INICIO TEXTO---
${studentText}
---FIN TEXTO---

INSTRUCCIONES DE FORMATO:
${OBSERVATION_SCHEMA}

${STRUCTURE_SCHEMA}

${FEEDBACK_SCHEMA}

${FULL_RESPONSE_SCHEMA}

RECORDATORIOS FINALES:
- Los fragmentos deben ser EXACTOS, copiados del texto del estudiante.
- Las posiciones deben ser correctas para el texto normalizado a NFC.
- No inventes errores. Solo reporta problemas reales.
- Las sugerencias estilísticas NO son errores gramaticales. Usa confidence "low" cuando sea una preferencia.
- Si el texto es demasiado extenso para un análisis exhaustivo, prioriza los problemas más importantes y menciona en "warnings" que la evaluación puede no ser exhaustiva.
- Incluye componentes estructurales SOLO si la dimensión "structure" está activada.
- Genera entre 0 y 50 observaciones, priorizando calidad sobre cantidad.`;

  return prompt;
}
