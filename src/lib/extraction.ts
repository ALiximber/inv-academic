/* ==========================================================
   File Extraction — DOCX, PDF, TXT
   Supports local extraction (unpdf, mammoth) + Gemini fallback
   ========================================================== */

import mammoth from 'mammoth';
import { extractText as extractPdfText } from 'unpdf';
import { ExtractionResult } from './types';
import { extractTextWithGemini } from './gemini';

const MAX_TEXT_LENGTH = 100000; // ~100K characters

export class LocalExtractionError extends Error {
  canFallbackToGemini: boolean;
  constructor(message: string, canFallbackToGemini = true) {
    super(message);
    this.name = 'LocalExtractionError';
    this.canFallbackToGemini = canFallbackToGemini;
  }
}

export interface ExtractOptions {
  useGemini?: boolean;
}

export async function extractText(
  buffer: Buffer,
  fileName: string,
  mimeType: string,
  options?: ExtractOptions
): Promise<ExtractionResult> {
  const warnings: string[] = [];
  let text = '';
  const extractedVia: 'local' | 'gemini' = options?.useGemini ? 'gemini' : 'local';

  // Si el usuario autorizó procesar con Gemini
  if (options?.useGemini) {
    try {
      text = await extractTextWithGemini(buffer, mimeType, fileName);
      warnings.push('Texto extraído exitosamente mediante Gemini (visión y OCR inteligente).');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error al procesar con Gemini';
      throw new Error(`Error al procesar el archivo con Gemini: ${msg}`);
    }
  } else {
    // Intento de extracción local
    try {
      const lowerName = fileName.toLowerCase();
      if (
        mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        lowerName.endsWith('.docx')
      ) {
        text = await extractDocx(buffer, warnings);
      } else if (mimeType === 'application/pdf' || lowerName.endsWith('.pdf')) {
        text = await extractPdf(buffer, warnings);
      } else if (mimeType === 'text/plain' || lowerName.endsWith('.txt')) {
        text = buffer.toString('utf-8');
      } else {
        throw new LocalExtractionError(
          `Formato de archivo no soportado localmente: ${mimeType || fileName}.`,
          false
        );
      }
    } catch (error) {
      if (error instanceof LocalExtractionError) {
        throw error;
      }
      const msg = error instanceof Error ? error.message : 'Error desconocido';
      throw new LocalExtractionError(
        `No se pudo extraer texto de forma local: ${msg}`,
        true
      );
    }
  }

  // Normalize
  text = text.normalize('NFC');

  // Check length
  const originalLength = text.length;
  const truncated = text.length > MAX_TEXT_LENGTH;

  if (truncated) {
    warnings.push(
      `El documento contiene ${originalLength.toLocaleString()} caracteres, lo que excede el límite de ${MAX_TEXT_LENGTH.toLocaleString()}. ` +
      `Se recomienda dividir el texto en secciones más pequeñas para una revisión más precisa. ` +
      `Solo se analizarán los primeros ${MAX_TEXT_LENGTH.toLocaleString()} caracteres.`
    );
    text = text.substring(0, MAX_TEXT_LENGTH);
  }

  if (text.trim().length === 0) {
    throw new LocalExtractionError(
      'El archivo no contiene texto extraíble localmente. Puede ser un documento escaneado (imagen) o estar protegido.',
      true
    );
  }

  return { text, warnings, truncated, originalLength, extractedVia };
}

async function extractDocx(buffer: Buffer, warnings: string[]): Promise<string> {
  const result = await mammoth.extractRawText({ buffer });

  if (result.messages && result.messages.length > 0) {
    const importantMessages = result.messages.filter(
      (m) => m.type === 'warning' || m.type === 'error'
    );
    if (importantMessages.length > 0) {
      warnings.push(
        'El archivo DOCX contiene elementos que pueden no haberse extraído correctamente: ' +
        'tablas, imágenes, encabezados especiales, notas al pie o formatos complejos pueden haberse simplificado o perdido.'
      );
    }
  }

  return result.value;
}

async function extractPdf(buffer: Buffer, warnings: string[]): Promise<string> {
  const uint8Array = new Uint8Array(buffer);
  const { text, totalPages } = await extractPdfText(uint8Array, { mergePages: true });

  if (!text || text.trim().length === 0) {
    throw new LocalExtractionError(
      'El PDF no contiene texto digital extraíble. Puede tratarse de un documento escaneado (imagen).',
      true
    );
  }

  if (totalPages > 1) {
    warnings.push(
      `El PDF contiene ${totalPages} páginas. La extracción de texto puede afectar la distribución original de los elementos, ` +
      'especialmente tablas, columnas múltiples, notas al pie y encabezados.'
    );
  }

  return text;
}
