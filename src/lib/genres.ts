import { AcademicGenre, ReviewDimension, BriefIntention, StructureSection, StructureVariant } from './types';

/* ==========================================================
   Academic Genres — Each has specific structure + criteria
   ========================================================== */

/** Envuelve una lista de secciones en una única modalidad de estructura. */
const single = (sections: StructureSection[]): StructureVariant[] => [
  { id: 'main', label: 'Estructura', sections },
];

const RAW_GENRES: Array<Omit<AcademicGenre, 'structureComponents'>> = [
  {
    id: 'ensayo',
    name: 'Ensayo',
    icon: '',
    description: 'Texto argumentativo que presenta, sustenta y defiende una tesis o postura crítica sobre un tema específico.',
    structure: single([
      {
        name: 'Introducción',
        parts: [
          'Exordio o motivación',
          'Contextualización y delimitación temática',
          'Problemática',
          'Tesis',
          'Objetivo y organización del texto',
        ],
      },
      {
        name: 'Cuerpo o desarrollo',
        parts: [
          'Argumentación (pretensión, respaldo y garantía)',
          'Contraste teórico y contraargumentación',
        ],
      },
      {
        name: 'Conclusión',
        parts: ['Síntesis de argumentos', 'Proyecciones', 'Peroración'],
      },
      { name: 'Referencias bibliográficas' },
    ]),
    evaluationCriteria: [
      { name: 'Tesis clara', description: 'La postura central debe estar formulada de manera explícita, debatible y defendible.' },
      { name: 'Argumentación sólida', description: 'Los argumentos deben estar justificados con evidencias, razonamientos o fuentes confiables.' },
      { name: 'Coherencia interna', description: 'Los párrafos deben estar conectados lógicamente y orientados a sustentar la tesis.' },
      { name: 'Conclusión articulada', description: 'La conclusión debe sintetizar las ideas clave sin introducir elementos inconexos sin desarrollo.' },
    ],
    notes: null,
  },
  {
    id: 'tesis',
    name: 'Tesis',
    icon: '',
    description: 'Investigación académica extensa y rigurosa que demuestra dominio conceptual, metodológico y capacidad analítica.',
    structure: single([
      {
        name: 'Secciones preliminares',
        parts: [
          'Portada',
          'Dedicatoria / agradecimientos',
          'Índice general',
          'Resumen (abstract)',
          'Palabras clave',
        ],
      },
      {
        name: 'Introducción',
        parts: [
          'Contextualización',
          'Justificación',
          'Estado del arte',
          'Vacíos de investigación',
          'Aportes',
        ],
      },
      {
        name: 'Marco teórico referencial',
        parts: [
          'Antecedentes',
          'Marco conceptual',
          'Fundamentos normativos / históricos',
        ],
      },
      {
        name: 'Objetivos e hipótesis',
        parts: ['Objetivo general', 'Objetivos específicos', 'Hipótesis'],
      },
      {
        name: 'Marco metodológico',
        parts: [
          'Diseño de estudio',
          'Población y muestra',
          'Instrumentos / materiales',
          'Procedimiento',
          'Estrategia analítica',
        ],
      },
      { name: 'Resultados' },
      { name: 'Discusión' },
      {
        name: 'Propuesta de transformación',
        optional: true,
        note: 'En tesis aplicadas o de posgrado',
      },
      {
        name: 'Conclusiones y recomendaciones',
        parts: ['Conclusiones', 'Recomendaciones'],
      },
      {
        name: 'Referencias bibliográficas y anexos',
        parts: ['Referencias bibliográficas', 'Anexos'],
      },
    ]),
    evaluationCriteria: [
      { name: 'Rigor metodológico', description: 'Diseño investigativo coherente, sistemático y congruente con los objetivos planteados.' },
      { name: 'Coherencia integral', description: 'Conexión lógica entre problema, marco teórico, metodología y resultados.' },
      { name: 'Aporte y originalidad', description: 'Fundamentación clara de la relevancia y aportación al campo disciplinar.' },
      { name: 'Fundamentación bibliográfica', description: 'Uso exhaustivo, pertinente y actualizado de fuentes académicas.' },
    ],
    notes: 'Las tesis varían según la institución educativa, nivel académico (licenciatura, maestría, doctorado) y disciplina.',
  },
  {
    id: 'monografia',
    name: 'Monografía',
    icon: '',
    description: 'Estudio documental profundo y delimitado sobre un tema específico con base en fuentes bibliográficas.',
    structure: single([
      {
        name: 'Secciones preliminares',
        parts: ['Portada', 'Índice'],
      },
      {
        name: 'Introducción',
        parts: [
          'Presentación y delimitación del tema',
          'Pertinencia / justificación',
          'Metodología documental',
          'Orden de los apartados',
        ],
      },
      {
        name: 'Desarrollo',
        note: 'Núcleo expositivo organizado en subtemas mediante subtítulos',
      },
      {
        name: 'Conclusión',
        parts: [
          'Síntesis del recorrido',
          'Deducciones principales',
          'Postura del autor',
          'Proyecciones',
        ],
      },
      { name: 'Referencias bibliográficas' },
      { name: 'Anexos' },
    ]),
    evaluationCriteria: [
      { name: 'Profundidad temática', description: 'Tratamiento exhaustivo y focalizado del tema seleccionado.' },
      { name: 'Fundamentación documental', description: 'Afirmaciones respaldadas de forma rigurosa en literatura académica pertinente.' },
      { name: 'Organización temática', description: 'Progresión temática lógica y fluida a lo largo de las secciones.' },
    ],
    notes: null,
  },
  {
    id: 'resena',
    name: 'Reseña',
    icon: '',
    description: 'Texto que resume, analiza y valora críticamente una obra, libro, artículo o documento académico.',
    structure: single([
      {
        name: 'Ficha técnica e introducción',
        parts: ['Datos de la obra', 'Línea temática'],
      },
      { name: 'Resumen expositivo o sinopsis' },
      {
        name: 'Análisis del contenido',
        parts: ['Aciertos', 'Desaciertos', 'Aportes'],
      },
      {
        name: 'Conclusión y ponderación',
        parts: ['Balance global', 'Recomendación al lector'],
      },
    ]),
    evaluationCriteria: [
      { name: 'Fidelidad descriptiva', description: 'Representación fiel y contextualizada de las ideas de la obra reseñada antes de su valoración.' },
      { name: 'Fundamentación crítica', description: 'Valoraciones sustentadas en argumentos y criterios objetivos, evitando juicios arbitrarios.' },
      { name: 'Equilibrio y ponderación', description: 'Reconocimiento fundamentado tanto de aciertos como de limitaciones de la obra.' },
    ],
    notes: null,
  },
  {
    id: 'informe',
    name: 'Informe',
    icon: '',
    description: 'Documento que expone de forma clara y estructurada los resultados, procedimientos o diagnóstico de un trabajo, práctica o proyecto.',
    structure: [
      {
        id: 'aula',
        label: 'Informe académico (aula)',
        sections: [
          { name: 'Título' },
          { name: 'Índice' },
          { name: 'Introducción' },
          { name: 'Desarrollo o cuerpo' },
          { name: 'Conclusiones' },
          { name: 'Bibliografía' },
        ],
      },
      {
        id: 'investigacion',
        label: 'Reporte científico (investigación)',
        sections: [
          {
            name: 'Título y resumen',
            parts: ['Título', 'Resumen (abstract)', 'Palabras clave'],
          },
          {
            name: 'Introducción',
            parts: ['Problema', 'Antecedentes', 'Objetivos / hipótesis'],
          },
          {
            name: 'Método',
            parts: [
              'Diseño',
              'Muestra / participantes',
              'Instrumentos',
              'Procedimiento',
              'Análisis',
            ],
          },
          { name: 'Resultados' },
          { name: 'Discusión' },
          {
            name: 'Bibliografía y anexos',
            parts: ['Bibliografía', 'Anexos'],
          },
        ],
      },
    ],
    evaluationCriteria: [
      { name: 'Claridad y precisión técnica', description: 'Información directa, precisa y sin ambigüedades.' },
      { name: 'Estructura lógica', description: 'Desarrollo ordenado desde los antecedentes hasta los resultados y conclusiones.' },
      { name: 'Datos y evidencias verificables', description: 'Resultados fundamentados en registros, mediciones o evidencias concretas.' },
    ],
    notes: null,
  },
  {
    id: 'protocolo_investigacion',
    name: 'Protocolo de investigación',
    icon: '',
    description: 'Documento de planeación que formula el problema, justificación, diseño teórico y metodológico de una investigación futura.',
    structure: single([
      { name: 'Introducción' },
      { name: 'Justificación' },
      { name: 'Marco teórico' },
      {
        name: 'Planteamiento del problema',
        parts: ['Pregunta de investigación'],
      },
      { name: 'Hipótesis' },
      {
        name: 'Objetivos',
        parts: ['Objetivo general', 'Objetivos específicos'],
      },
      {
        name: 'Material y métodos',
        parts: [
          'Tipo de estudio',
          'Universo / población y muestra (inclusión, exclusión, eliminación y muestreo)',
          'Variables (definición y operacionalización)',
          'Técnica (procedimiento, estandarización / calibración y validación)',
          'Diseño estadístico',
        ],
      },
      {
        name: 'Recursos',
        parts: ['Humanos', 'Materiales', 'Financiamiento'],
      },
      { name: 'Cronograma de actividades' },
      {
        name: 'Aspectos éticos y legales',
        parts: ['Comité de ética', 'Consentimiento informado'],
      },
      { name: 'Referencias' },
      { name: 'Anexos' },
    ]),
    evaluationCriteria: [
      { name: 'Coherencia interna', description: 'Congruencia estricta entre problema, objetivos, hipótesis y metodología propuesta.' },
      { name: 'Viabilidad y pertinencia', description: 'Factibilidad real de la investigación en tiempo, recursos y método.' },
      { name: 'Claridad del diseño metodológico', description: 'Detalle suficiente para comprender y replicar los procedimientos proyectados.' },
    ],
    notes: null,
  },
  {
    id: 'generico',
    name: 'Texto genérico',
    icon: '',
    description: 'Escrito o trabajo general sin una estructura académica rígida. Se revisa redacción, coherencia, claridad, argumentación y ortografía.',
    structure: single([
      { name: 'Introducción o planteamiento inicial' },
      { name: 'Desarrollo y progresión de ideas' },
      { name: 'Cierre, conclusión o síntesis' },
    ]),
    evaluationCriteria: [
      { name: 'Claridad y fluidez', description: 'Expresión precisa de las ideas, libre de ambigüedades y con registro adecuado.' },
      { name: 'Coherencia y cohesión', description: 'Conexión lógica entre oraciones y párrafos con uso adecuado de conectores.' },
      { name: 'Corrección lingüística', description: 'Cumplimiento riguroso de las normas ortográficas, sintácticas y gramaticales.' },
    ],
    notes: 'Aplica criterios generales de calidad y redacción. Si deseas requisitos particulares o una rúbrica específica, puedes detallarlos.',
  },
];

/** Aplana las secciones de todas las modalidades (sin duplicados). */
function flattenSections(structure: StructureVariant[]): string[] {
  const names: string[] = [];
  for (const variant of structure) {
    for (const section of variant.sections) {
      if (!names.includes(section.name)) names.push(section.name);
    }
  }
  return names;
}

export const ACADEMIC_GENRES: AcademicGenre[] = RAW_GENRES.map((g) => ({
  ...g,
  structureComponents: flattenSections(g.structure),
}));

/**
 * Helper to find a genre by ID, supporting backwards-compatible aliases.
 */
export function findGenreById(id: string | null | undefined): AcademicGenre | undefined {
  if (!id) return undefined;
  if (id === 'otro' || id === 'personalizado') {
    return ACADEMIC_GENRES.find((g) => g.id === 'generico');
  }
  if (id === 'informe_tecnico' || id === 'reporte_investigacion' || id === 'reporte_practicas') {
    return ACADEMIC_GENRES.find((g) => g.id === 'informe');
  }
  if (id === 'resena_critica') {
    return ACADEMIC_GENRES.find((g) => g.id === 'resena');
  }
  return ACADEMIC_GENRES.find((g) => g.id === id);
}

/* ==========================================================
   Review Dimensions (Academic Module)
   ========================================================== */

export const REVIEW_DIMENSIONS: ReviewDimension[] = [
  {
    id: 'grammar',
    name: 'Ortografía, gramática y puntuación',
    description: 'Errores ortográficos, concordancia, uso de tiempos verbales, puntuación y acentuación.',
    default: true,
  },
  {
    id: 'coherence',
    name: 'Coherencia y cohesión',
    description: 'Conexión lógica entre ideas, uso de conectores, progresión temática y estructura del discurso.',
    default: true,
  },
  {
    id: 'clarity',
    name: 'Claridad y precisión',
    description: 'Formulación clara de ideas, ausencia de ambigüedades y uso preciso del lenguaje.',
    default: true,
  },
  {
    id: 'structure',
    name: 'Estructura del género académico',
    description: 'Presencia y adecuación de los componentes estructurales propios del tipo de texto seleccionado.',
    default: true,
  },
  {
    id: 'argumentation',
    name: 'Argumentación y desarrollo de ideas',
    description: 'Solidez de los argumentos, uso de evidencias, desarrollo de ideas y fundamentación.',
    default: true,
  },
  {
    id: 'comprehension',
    name: 'Comprensión del texto de referencia',
    description: 'Fidelidad a las ideas del texto fuente, interpretación correcta y diferenciación de ideas propias.',
    default: true,
  },
  {
    id: 'integral',
    name: 'Retroalimentación integral',
    description: 'Evaluación completa que integra todas las dimensiones anteriores.',
    default: true,
  },
];

/* ==========================================================
   Brief Intentions
   ========================================================== */

export const BRIEF_INTENTIONS: BriefIntention[] = [
  { id: 'general', name: 'Revisión general', description: 'Revisión completa de ortografía, gramática, claridad y coherencia.' },
  { id: 'spelling', name: 'Ortografía y puntuación', description: 'Solo errores ortográficos, de acentuación y puntuación.' },
  { id: 'grammar_syntax', name: 'Gramática y sintaxis', description: 'Concordancia, tiempos verbales, orden sintáctico.' },
  { id: 'clarity_style', name: 'Claridad y redacción', description: 'Formulación de ideas, eliminación de ambigüedades y mejora de estilo.' },
  { id: 'coherence_cohesion', name: 'Coherencia y cohesión', description: 'Conexión entre ideas, uso de conectores, progresión temática.' },
  { id: 'formal', name: 'Registro formal', description: 'Adecuación del lenguaje a un contexto formal o profesional.' },
];
