/* ==========================================================
   API Route: /api/extract
   File text extraction endpoint
   ========================================================== */

import { NextRequest, NextResponse } from 'next/server';
import { extractText } from '@/lib/extraction';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No se proporcionó un archivo.' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'El archivo excede el tamaño máximo de 10 MB.' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
      'text/plain',
    ];

    const fileName = file.name.toLowerCase();
    const isAllowed =
      allowedTypes.includes(file.type) ||
      fileName.endsWith('.docx') ||
      fileName.endsWith('.pdf') ||
      fileName.endsWith('.txt');

    if (!isAllowed) {
      return NextResponse.json(
        {
          error:
            'Formato de archivo no soportado. Se aceptan archivos DOCX, PDF (con texto extraíble) y TXT.',
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await extractText(buffer, file.name, file.type);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Extraction error:', error);
    const message = error instanceof Error ? error.message : 'Error al procesar el archivo';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
