/* ==========================================================
   API Route: /api/analyze
   Main analysis endpoint
   ========================================================== */

import { NextRequest, NextResponse } from 'next/server';
import { analyzeText } from '@/lib/gemini';
import { buildAcademicPrompt } from '@/lib/prompts/academic';
import { buildBriefPrompt } from '@/lib/prompts/brief';
import { ACADEMIC_GENRES } from '@/lib/genres';
import { normalizeText } from '@/utils/textNormalization';
import { validateAllObservations } from '@/utils/fragmentMatcher';
import type { AnalysisRequest, EvaluationResult } from '@/lib/types';

export const maxDuration = 120; // Allow up to 2 minutes for Gemini

export async function POST(request: NextRequest) {
  try {
    const body: AnalysisRequest = await request.json();

    // Validate input
    if (!body.studentText || body.studentText.trim().length === 0) {
      return NextResponse.json(
        { error: 'No se proporcionó texto para revisar.' },
        { status: 400 }
      );
    }

    if (!body.reviewType || !['academic', 'brief'].includes(body.reviewType)) {
      return NextResponse.json(
        { error: 'Tipo de revisión no válido.' },
        { status: 400 }
      );
    }

    // Normalize text
    const normalizedStudentText = normalizeText(body.studentText);
    const normalizedReferenceText = body.referenceText
      ? normalizeText(body.referenceText)
      : null;

    let prompt: string;
    let genreName: string | null = null;

    if (body.reviewType === 'academic') {
      // Find genre
      const genre = ACADEMIC_GENRES.find((g) => g.id === body.genre);
      if (!genre) {
        return NextResponse.json(
          { error: 'Género académico no válido.' },
          { status: 400 }
        );
      }

      genreName = genre.id === 'otro' && body.customGenreName
        ? body.customGenreName
        : genre.name;

      prompt = buildAcademicPrompt({
        genre,
        customGenreName: body.customGenreName,
        customGenreDescription: body.customGenreDescription,
        dimensions: body.dimensions || [],
        studentText: normalizedStudentText,
        referenceText: normalizedReferenceText,
      });
    } else {
      prompt = buildBriefPrompt({
        intention: body.briefIntention || 'general',
        studentText: normalizedStudentText,
      });
    }

    // Call Gemini
    const result = await analyzeText(prompt, normalizedStudentText);

    // Validate observation positions
    const { validated, unmatched } = validateAllObservations(
      result.observations,
      normalizedStudentText
    );

    // Add warnings for unmatched observations
    const warnings = [...result.warnings];
    if (unmatched.length > 0) {
      warnings.push(
        `${unmatched.length} observación(es) no pudieron vincularse con un fragmento específico del texto. Se mostrarán como observaciones generales.`
      );
    }

    // Build final result
    const finalResult: EvaluationResult = {
      ...result,
      reviewType: body.reviewType,
      genre: genreName,
      dimensionsEvaluated: body.dimensions || [],
      observations: [
        ...validated.map((obs) => ({ ...obs, status: 'pending' as const })),
        ...unmatched.map((obs) => ({
          ...obs,
          start: -1,
          end: -1,
          status: 'pending' as const,
        })),
      ],
      warnings,
    };

    return NextResponse.json(finalResult);
  } catch (error) {
    console.error('Analysis error:', error);
    const message = error instanceof Error ? error.message : 'Error interno del servidor';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
