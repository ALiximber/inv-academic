/* ==========================================================
   File Extraction — DOCX, PDF, TXT
   ========================================================== */

import mammoth from 'mammoth';
import { ExtractionResult } from './types';

const MAX_TEXT_LENGTH = 100000; // ~100K characters

export async function extractText(
  buffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<ExtractionResult> {
  const warnings: string[] = [];
  let text = '';

  try {
    if (
      mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      fileName.endsWith('.docx')
    ) {
      text = await extractDocx(buffer, warnings);
    } else if (mimeType === 'application/pdf' || fileName.endsWith('.pdf')) {
      text = await extractPdf(buffer, warnings);
    } else if (mimeType === 'text/plain' || fileName.endsWith('.txt')) {
      text = buffer.toString('utf-8');
    } else {
      throw new Error(`Formato de archivo no soportado: ${mimeType || fileName}`);
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Error desconocido';
    throw new Error(`Error al extraer texto del archivo: ${msg}`);
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
    throw new Error(
      'No se pudo extraer texto del archivo. El documento puede estar vacío, contener solo imágenes, o estar protegido.'
    );
  }

  return { text, warnings, truncated, originalLength };
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfParse = require('pdf-parse') as (buf: Buffer) => Promise<{ text: string; numpages: number }>;
  const data = await pdfParse(buffer);

  if (!data.text || data.text.trim().length === 0) {
    throw new Error(
      'El PDF no contiene texto extraíble. Puede ser un documento escaneado (imagen). ' +
      'Para revisar este tipo de documentos, copia el texto manualmente o utiliza un servicio de OCR.'
    );
  }

  if (data.numpages > 1) {
    warnings.push(
      `El PDF contiene ${data.numpages} páginas. La extracción de texto puede afectar la distribución original de los elementos, ` +
      'especialmente tablas, columnas múltiples, notas al pie y encabezados.'
    );
  }

  return data.text;
}
