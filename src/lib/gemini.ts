/* ==========================================================
   Gemini API Client
   ========================================================== */

import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTIONS } from './prompts/shared';
import { EvaluationResult, Observation } from './types';

let ai: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'tu_api_key_aqui') {
      throw new Error('GEMINI_API_KEY no está configurada. Agrega tu clave en el archivo .env.local');
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function analyzeText(prompt: string, studentText: string): Promise<EvaluationResult> {
  const client = getAI();

  let response;
  let retries = 5;
  let delay = 2000; // start with 2 seconds

  while (retries > 0) {
    try {
      response = await client.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTIONS,
          temperature: 0.3,
          topP: 0.9,
          responseMimeType: 'application/json',
        },
      });
      break; // success
    } catch (error: any) {
      const isRetryable = error?.status === 503 || error?.status === 429;
      retries--;

      if (!isRetryable || retries === 0) {
        throw error;
      }

      console.warn(`[Gemini API] Error ${error?.status}. Retrying in ${delay}ms... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // exponential backoff
    }
  }

  if (!response) {
    throw new Error('No se pudo obtener respuesta del modelo.');
  }

  const text = response.text;
  if (!text) {
    throw new Error('Gemini no devolvió una respuesta válida.');
  }

  let parsed;
  try {
    // Clean potential markdown code fences
    let cleaned = text.trim();
    if (cleaned.startsWith('```json')) {
      cleaned = cleaned.slice(7);
    }
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.slice(3);
    }
    if (cleaned.endsWith('```')) {
      cleaned = cleaned.slice(0, -3);
    }
    parsed = JSON.parse(cleaned.trim());
  } catch {
    throw new Error('La respuesta de Gemini no es un JSON válido. Intenta de nuevo.');
  }

  // Validate and normalize observations
  const observations: Observation[] = (parsed.observations || []).map(
    (obs: Record<string, unknown>, index: number) => ({
      id: obs.id || `obs-${String(index + 1).padStart(3, '0')}`,
      category: obs.category || 'grammar',
      subcategory: obs.subcategory || 'other',
      start: typeof obs.start === 'number' ? obs.start : -1,
      end: typeof obs.end === 'number' ? obs.end : -1,
      originalFragment: (obs.originalFragment as string) || '',
      priority: obs.priority || 'medium',
      explanation: (obs.explanation as string) || '',
      rule: obs.rule || null,
      contextReason: obs.contextReason || null,
      suggestion: obs.suggestion || null,
      exampleCorrection: obs.exampleCorrection || null,
      reflectionQuestion: obs.reflectionQuestion || null,
      confidence: obs.confidence || 'medium',
      status: 'pending' as const,
    })
  );

  const result: EvaluationResult = {
    id: `eval-${Date.now()}`,
    timestamp: new Date().toISOString(),
    reviewType: 'academic',
    genre: null,
    dimensionsEvaluated: [],
    observations,
    structureComponents: parsed.structureComponents || null,
    generalFeedback: {
      overallAssessment: parsed.generalFeedback?.overallAssessment || 'No se generó valoración.',
      strengths: parsed.generalFeedback?.strengths || [],
      priorityIssues: parsed.generalFeedback?.priorityIssues || [],
      recommendations: parsed.generalFeedback?.recommendations || [],
      readingComprehension: parsed.generalFeedback?.readingComprehension || null,
      structureSummary: parsed.generalFeedback?.structureSummary || null,
      nextSteps: parsed.generalFeedback?.nextSteps || [],
      limitations: parsed.generalFeedback?.limitations || [],
    },
    warnings: parsed.warnings || [],
  };

  return result;
}

export interface GenreDetectionResult {
  genreId: 'ensayo' | 'tesis' | 'monografia' | 'resena' | 'informe' | 'protocolo_investigacion' | 'generico';
  confidence: 'high' | 'medium' | 'low';
  reason: string;
}

export async function detectDocumentGenre(sampleText: string): Promise<GenreDetectionResult> {
  const client = getAI();
  const trimmed = sampleText.trim().slice(0, 4000);

  const prompt = `TAREA: Clasifica el siguiente texto académico o escrito en EXACTAMENTE UNO de los siguientes 7 tipos permitidos:

1. "ensayo": Texto argumentativo que defiende una postura o tesis personal con reflexiones y justificaciones.
2. "tesis": Trabajo extenso y formal de titulación o investigación (con capítulos, objetivos, marco teórico, metodología, resultados).
3. "monografia": Estudio documental exhaustivo sobre un tema delimitado basado en revisión bibliográfica.
4. "resena": Evaluación, crítica o juicio razonado de un libro, artículo, obra o documento.
5. "informe": Documento estructurado que describe procedimientos, actividades, diagnóstico o resultados de una práctica o proyecto.
6. "protocolo_investigacion": Plan de trabajo o proyecto de investigación previa (planteamiento del problema, objetivos, hipótesis, cronograma, metodología proyectada).
7. "generico": Escrito general, texto libre o cualquier documento que no corresponda con claridad a una estructura de las anteriores.

TEXTO A CLASIFICAR:
---INICIO---
${trimmed}
---FIN---

INSTRUCCIONES:
- Responde EXCLUSIVAMENTE con un JSON válido.
- Selecciona el tipo más adecuado entre los 7 indicados.
- Formato:
{
  "genreId": "ensayo" | "tesis" | "monografia" | "resena" | "informe" | "protocolo_investigacion" | "generico",
  "confidence": "high" | "medium" | "low",
  "reason": "<Explicación breve de 1 o 2 oraciones en español del motivo de la clasificación>"
}`;

  let retries = 3;
  let delay = 1500;
  let response;

  while (retries > 0) {
    try {
      response = await client.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        config: {
          temperature: 0.1,
          responseMimeType: 'application/json',
        },
      });
      break;
    } catch (error: any) {
      const isRetryable = error?.status === 503 || error?.status === 429;
      retries--;
      if (!isRetryable || retries === 0) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  if (!response?.text) {
    return {
      genreId: 'generico',
      confidence: 'low',
      reason: 'No se pudo clasificar el documento con precisión; se asigna texto genérico.',
    };
  }

  try {
    let cleaned = response.text.trim();
    if (cleaned.startsWith('```json')) cleaned = cleaned.slice(7);
    if (cleaned.startsWith('```')) cleaned = cleaned.slice(3);
    if (cleaned.endsWith('```')) cleaned = cleaned.slice(0, -3);

    const parsed = JSON.parse(cleaned.trim());
    const validIds = ['ensayo', 'tesis', 'monografia', 'resena', 'informe', 'protocolo_investigacion', 'generico'];
    const genreId = validIds.includes(parsed.genreId) ? parsed.genreId : 'generico';

    return {
      genreId: genreId as GenreDetectionResult['genreId'],
      confidence: parsed.confidence || 'medium',
      reason: parsed.reason || 'Clasificado según los componentes y el estilo del texto.',
    };
  } catch {
    return {
      genreId: 'generico',
      confidence: 'low',
      reason: 'Se clasificó como texto genérico por defecto.',
    };
  }
}

