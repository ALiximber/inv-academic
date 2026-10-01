/* ==========================================================
   ORC — Type Definitions
   ========================================================== */

/* ---- Observation Categories ---- */
export type ObservationCategory =
  | 'grammar'
  | 'clarity'
  | 'coherence'
  | 'structure'
  | 'comprehension';

export type ObservationSubcategory =
  | 'spelling'
  | 'punctuation'
  | 'agreement'
  | 'verb_tense'
  | 'syntax'
  | 'word_choice'
  | 'redundancy'
  | 'ambiguity'
  | 'formality'
  | 'precision'
  | 'cohesion'
  | 'argumentation'
  | 'logical_flow'
  | 'transition'
  | 'missing_component'
  | 'weak_component'
  | 'format'
  | 'misinterpretation'
  | 'unsupported_claim'
  | 'omission'
  | 'contradiction'
  | 'other';

export type Priority = 'high' | 'medium' | 'low';
export type Confidence = 'high' | 'medium' | 'low';
export type ObservationStatus = 'pending' | 'reviewed' | 'corrected' | 'dismissed';

/* ---- Core Observation ---- */
export interface Observation {
  id: string;
  category: ObservationCategory;
  subcategory: ObservationSubcategory;
  start: number;
  end: number;
  originalFragment: string;
  priority: Priority;
  explanation: string;
  rule: string | null;
  contextReason: string | null;
  suggestion: string | null;
  exampleCorrection: string | null;
  reflectionQuestion: string | null;
  confidence: Confidence;
  status: ObservationStatus;
}

/* ---- Structure Evaluation ---- */
export type StructureStatus =
  | 'present'
  | 'needs_review'
  | 'not_found'
  | 'not_applicable'
  | 'needs_verification';

export interface StructureComponent {
  name: string;
  status: StructureStatus;
  observation: string;
  recommendation: string | null;
}

/* ---- Feedback ---- */
export interface GeneralFeedback {
  overallAssessment: string;
  strengths: string[];
  priorityIssues: string[];
  recommendations: string[];
  readingComprehension: string | null;
  structureSummary: string | null;
  nextSteps: string[];
  limitations: string[];
}

/* ---- Evaluation Result ---- */
export interface EvaluationResult {
  id: string;
  timestamp: string;
  reviewType: 'academic' | 'brief';
  genre: string | null;
  dimensionsEvaluated: string[];
  observations: Observation[];
  structureComponents: StructureComponent[] | null;
  generalFeedback: GeneralFeedback;
  warnings: string[];
}

/* ---- Academic Genres ---- */
export interface GenreCriteria {
  name: string;
  description: string;
}

export interface AcademicGenre {
  id: string;
  name: string;
  icon: string;
  description: string;
  structureComponents: string[];
  evaluationCriteria: GenreCriteria[];
  notes: string | null;
}

/* ---- Review Configuration ---- */
export interface ReviewDimension {
  id: string;
  name: string;
  description: string;
  default: boolean;
}

export interface BriefIntention {
  id: string;
  name: string;
  description: string;
}

/* ---- API Payloads ---- */
export interface AnalysisRequest {
  reviewType: 'academic' | 'brief';
  genre: string | null;
  customGenreName: string | null;
  customGenreDescription: string | null;
  dimensions: string[];
  studentText: string;
  referenceText: string | null;
  briefIntention: string | null;
}

export interface ExtractionResult {
  text: string;
  warnings: string[];
  truncated: boolean;
  originalLength: number;
}

/* ---- Category Display Helpers ---- */
export const CATEGORY_LABELS: Record<ObservationCategory, string> = {
  grammar: 'Ortografía, gramática y puntuación',
  clarity: 'Claridad, sintaxis y formulación',
  coherence: 'Coherencia, cohesión y argumentación',
  structure: 'Estructura académica',
  comprehension: 'Comprensión del documento de referencia',
};

export const CATEGORY_SHORT_LABELS: Record<ObservationCategory, string> = {
  grammar: 'Gramática',
  clarity: 'Claridad',
  coherence: 'Coherencia',
  structure: 'Estructura',
  comprehension: 'Comprensión',
};

export const CATEGORY_COLORS: Record<ObservationCategory, string> = {
  grammar: 'grammar',
  clarity: 'clarity',
  coherence: 'coherence',
  structure: 'structure',
  comprehension: 'comprehension',
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baja',
};

export const CONFIDENCE_LABELS: Record<Confidence, string> = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baja',
};

export const STATUS_LABELS: Record<ObservationStatus, string> = {
  pending: 'Pendiente',
  reviewed: 'Revisada',
  corrected: 'Corregida',
  dismissed: 'Descartada',
};

export const STRUCTURE_STATUS_LABELS: Record<StructureStatus, string> = {
  present: 'Presente y adecuado',
  needs_review: 'Requiere revisión',
  not_found: 'No identificado',
  not_applicable: 'No aplicable',
  needs_verification: 'Requiere verificación manual',
};
