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

  const genreName = genre.id === 'otro' && customGenreName ? customGenreName : genre.name;
  const genreDesc = genre.id === 'otro' && customGenreDescription ? customGenreDescription : genre.description;

  let prompt = `TAREA: Revisa el siguiente texto académico de tipo "${genreName}".

DESCRIPCIÓN DEL GÉNERO: ${genreDesc}
`;

  // Structure components
  if (genre.structureComponents.length > 0) {
    prompt += `
COMPONENTES ESTRUCTURALES ESPERADOS PARA ESTE GÉNERO:
${genre.structureComponents.map((c, i) => `${i + 1}. ${c}`).join('\n')}
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

  // Custom genre handling
  if (genre.id === 'otro') {
    prompt += `
INSTRUCCIONES PARA GÉNERO PERSONALIZADO:
- El usuario ha indicado un tipo de texto no estándar. Aplica criterios generales razonables.
- Evalúa la coherencia, claridad, gramática y organización del texto.
- Si el usuario describió características específicas, úsalas como guía.
- Advierte al usuario cuando necesites una plantilla, rúbrica o norma institucional para evaluar requisitos específicos.
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
