/* ==========================================================
   Fragment Matcher
   Validates and recovers observation positions against
   the actual student text.
   ========================================================== */

import { normalizeText, collapseWhitespace, stripDiacritics } from './textNormalization';
import { Observation } from '@/lib/types';

interface MatchResult {
  start: number;
  end: number;
  matched: boolean;
  method: 'exact_position' | 'exact_search' | 'fuzzy_search' | 'unmatched';
}

/**
 * Validate that the observation's start/end positions correspond to
 * the actual fragment in the text. If not, attempt recovery.
 */
export function validateAndRecoverFragment(
  observation: Observation,
  normalizedText: string
): MatchResult {
  const { start, end, originalFragment } = observation;

  // 1. Try exact position match
  if (start >= 0 && end <= normalizedText.length && start < end) {
    const textAtPosition = normalizedText.substring(start, end);
    if (textAtPosition === originalFragment) {
      return { start, end, matched: true, method: 'exact_position' };
    }
  }

  // 2. Try exact text search (fragment may exist elsewhere)
  const exactIndex = normalizedText.indexOf(originalFragment);
  if (exactIndex !== -1) {
    return {
      start: exactIndex,
      end: exactIndex + originalFragment.length,
      matched: true,
      method: 'exact_search',
    };
  }

  // 3. Try fuzzy search with collapsed whitespace
  const collapsedFragment = collapseWhitespace(originalFragment);
  const collapsedText = collapseWhitespace(normalizedText);

  if (collapsedFragment.length >= 5) {
    const fuzzyIndex = collapsedText.indexOf(collapsedFragment);
    if (fuzzyIndex !== -1) {
      // Map collapsed position back to original text position
      const mapped = mapCollapsedToOriginal(normalizedText, collapsedFragment, fuzzyIndex);
      if (mapped) {
        return { ...mapped, matched: true, method: 'fuzzy_search' };
      }
    }
  }

  // 4. Try case-insensitive + diacritic-insensitive search
  const strippedFragment = stripDiacritics(originalFragment.toLowerCase());
  const strippedText = stripDiacritics(normalizedText.toLowerCase());
  const strippedIndex = strippedText.indexOf(strippedFragment);
  if (strippedIndex !== -1) {
    return {
      start: strippedIndex,
      end: strippedIndex + originalFragment.length,
      matched: true,
      method: 'fuzzy_search',
    };
  }

  // 5. Try substring match (find the longest matching substring)
  if (originalFragment.length >= 15) {
    const substringResult = findLongestSubstringMatch(normalizedText, originalFragment);
    if (substringResult && substringResult.matchLength >= originalFragment.length * 0.7) {
      return {
        start: substringResult.start,
        end: substringResult.end,
        matched: true,
        method: 'fuzzy_search',
      };
    }
  }

  // Failed to locate
  return { start: -1, end: -1, matched: false, method: 'unmatched' };
}

/**
 * Map a position in collapsed text back to the original text.
 */
function mapCollapsedToOriginal(
  originalText: string,
  fragment: string,
  _collapsedIndex: number
): { start: number; end: number } | null {
  // Search for the fragment in the original with flexible whitespace
  const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = escapedFragment.replace(/ /g, '\\s+');
  const regex = new RegExp(pattern);
  const match = originalText.match(regex);
  if (match && match.index !== undefined) {
    return {
      start: match.index,
      end: match.index + match[0].length,
    };
  }
  return null;
}

/**
 * Find the longest matching substring between the fragment and the text.
 */
function findLongestSubstringMatch(
  text: string,
  fragment: string
): { start: number; end: number; matchLength: number } | null {
  // Use a sliding window approach with the beginning of the fragment
  const minLength = Math.floor(fragment.length * 0.5);
  let bestMatch: { start: number; end: number; matchLength: number } | null = null;

  for (let len = fragment.length; len >= minLength; len--) {
    const sub = fragment.substring(0, len);
    const idx = text.indexOf(sub);
    if (idx !== -1) {
      bestMatch = { start: idx, end: idx + len, matchLength: len };
      break;
    }
  }

  return bestMatch;
}

/**
 * Process all observations: validate positions and mark unmatched ones.
 */
export function validateAllObservations(
  observations: Observation[],
  text: string
): { validated: Observation[]; unmatched: Observation[] } {
  const normalizedText = normalizeText(text);
  const validated: Observation[] = [];
  const unmatched: Observation[] = [];

  for (const obs of observations) {
    const result = validateAndRecoverFragment(obs, normalizedText);
    if (result.matched) {
      validated.push({
        ...obs,
        start: result.start,
        end: result.end,
      });
    } else {
      unmatched.push(obs);
    }
  }

  return { validated, unmatched };
}
