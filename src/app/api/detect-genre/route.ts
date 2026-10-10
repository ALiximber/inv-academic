/* ==========================================================
   API Route: /api/detect-genre
   Detects document genre among the 7 supported types
   ========================================================== */

import { NextRequest, NextResponse } from 'next/server';
import { detectDocumentGenre } from '@/lib/gemini';
import { findGenreById } from '@/lib/genres';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const text = body.text;

    if (!text || typeof text !== 'string' || text.trim().length < 20) {
      return NextResponse.json(
        { error: 'Proporciona al menos 20 caracteres para detectar el tipo de documento.' },
        { status: 400 }
      );
    }

    const detection = await detectDocumentGenre(text);
    const genre = findGenreById(detection.genreId) || null;

    return NextResponse.json({
      genreId: detection.genreId,
      genre,
      confidence: detection.confidence,
      reason: detection.reason,
    });
  } catch (error) {
    console.error('Detect genre error:', error);
    const message = error instanceof Error ? error.message : 'Error interno al detectar el tipo de documento';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
