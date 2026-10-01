/* ==========================================================
   Text Normalization Utilities
   Handles Unicode normalization to ensure consistent
   character indexing between backend and frontend.
   ========================================================== */

/**
 * Normalize text to NFC form for consistent character indexing.
 * This is critical because Gemini may return positions based on
 * a different normalization form than JavaScript uses.
 */
export function normalizeText(text: string): string {
  return text.normalize('NFC');
}

/**
 * Count the actual "visible" characters, handling surrogate pairs
 * (emojis, etc.) correctly.
 */
export function countGraphemes(text: string): number {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('es', { granularity: 'grapheme' });
    return [...segmenter.segment(text)].length;
  }
  // Fallback: count code points (not perfect for combined emojis)
  return [...text].length;
}

/**
 * Collapse multiple whitespace characters into single spaces
 * and trim, for fuzzy matching purposes only.
 */
export function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Remove diacritical marks for fuzzy comparison.
 * Only used for matching, not for display.
 */
export function stripDiacritics(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
