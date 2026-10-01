/* ==========================================================
   Brief Text Review Prompt Builder
   ========================================================== */

import { OBSERVATION_SCHEMA, FEEDBACK_SCHEMA, FULL_RESPONSE_SCHEMA } from './shared';

export function buildBriefPrompt(params: {
  intention: string;
  studentText: string;
}): string {
  const { intention, studentText } = params;

  const intentionDescriptions: Record<string, string> = {
    general: 'Revisión completa: ortografía, gramática, puntuación, claridad, coherencia y estilo.',
    spelling: 'Solo ortografía, acentuación y puntuación. No evalúes gramática avanzada ni estilo.',
    grammar_syntax: 'Concordancia, tiempos verbales, orden sintáctico. No evalúes estilo ni coherencia global.',
    clarity_style: 'Claridad de las ideas, eliminación de ambigüedades, mejora de formulación. No penalices errores ortográficos menores.',
    coherence_cohesion: 'Conexión entre ideas, uso de conectores, progresión temática. No evalúes ortografía.',
    formal: 'Adecuación del lenguaje a un contexto formal o profesional. Señala coloquialismos, informalidades y registro inadecuado.',
  };

  const desc = intentionDescriptions[intention] || intentionDescriptions.general;

  const dimensionMap: Record<string, string[]> = {
    general: ['grammar', 'clarity', 'coherence'],
    spelling: ['grammar'],
    grammar_syntax: ['grammar'],
    clarity_style: ['clarity'],
    coherence_cohesion: ['coherence'],
    formal: ['clarity', 'grammar'],
  };

  const activeDimensions = dimensionMap[intention] || ['grammar', 'clarity', 'coherence'];

  let prompt = `TAREA: Revisa el siguiente texto breve.

TIPO DE REVISIÓN: ${desc}

CATEGORÍAS ACTIVAS: ${activeDimensions.join(', ')}

INSTRUCCIONES IMPORTANTES:
- Este es un texto breve, NO un documento académico.
- NO apliques requisitos de estructura académica (introducción, desarrollo, conclusión, citas, etc.).
- NO penalices al usuario por no incluir elementos académicos.
- Concéntrate EXCLUSIVAMENTE en las dimensiones seleccionadas.
- El texto puede ser un párrafo, mensaje, correo, descripción o cualquier texto personal.
- Respeta la intención comunicativa del autor.
- NO generes observaciones de categoría "structure" ni "comprehension".

TEXTO A REVISAR:
---INICIO TEXTO---
${studentText}
---FIN TEXTO---

INSTRUCCIONES DE FORMATO:
${OBSERVATION_SCHEMA}

La retroalimentación general debe seguir este esquema:
{
  "overallAssessment": "<valoración general breve>",
  "strengths": ["<fortaleza concreta>", ...],
  "priorityIssues": ["<problema prioritario>", ...],
  "recommendations": ["<recomendación concreta>", ...],
  "readingComprehension": null,
  "structureSummary": null,
  "nextSteps": ["<próximo paso>", ...],
  "limitations": ["<limitación>", ...]
}

${FULL_RESPONSE_SCHEMA}

NOTAS:
- "structureComponents" debe ser null para textos breves.
- "readingComprehension" debe ser null.
- "structureSummary" debe ser null.
- Genera entre 0 y 30 observaciones, priorizando calidad sobre cantidad.
- Los fragmentos deben ser EXACTOS del texto original.
- Las posiciones deben ser correctas (0-indexed, NFC).
- NO inventes errores. Solo reporta problemas reales.`;

  return prompt;
}
