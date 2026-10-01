# ORC — Observatorio de Revisión y Comprensión

Herramienta de revisión de textos académicos en español potenciada por IA. Analiza redacciones estudiantiles e identifica observaciones sobre gramática, claridad, coherencia, estructura y comprensión lectora, con retroalimentación detallada y navegación interactiva de errores.

---

## Características

- **Revisión académica por género**: ensayo, resumen, reseña, informe y más. También soporta géneros personalizados.
- **Dimensiones configurables**: el docente o estudiante elige qué aspectos revisar (gramática, coherencia, estructura, etc.).
- **Resaltado interactivo**: los fragmentos con observaciones se marcan directamente en el texto; al hacer clic se muestra el detalle.
- **Panel de observaciones**: filtra por categoría y prioridad, navega con teclado (← →) y marca cada observación como revisada, corregida o descartada.
- **Retroalimentación general**: valoración global, fortalezas, problemas prioritarios, recomendaciones y próximos pasos.
- **Evaluación estructural**: cuando aplica, detecta y evalúa los componentes estructurales del género seleccionado.
- **Documento de referencia opcional**: permite adjuntar la lectura base para evaluar comprensión lectora.
- **Carga de archivos**: acepta `.docx`, `.pdf` y `.txt` tanto para el texto del estudiante como para el de referencia.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 + TypeScript |
| Estilos | CSS vanilla |
| IA | Google Gemini (`@google/genai`) |
| Extracción de docs | `mammoth` (DOCX), `pdf-parse` (PDF) |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── workspace/        # Página principal del espacio de trabajo
│   ├── academico/        # Ruta de revisión académica
│   ├── breve/            # Ruta de revisión breve
│   ├── api/
│   │   ├── analyze/      # Endpoint POST /api/analyze
│   │   └── extract/      # Endpoint POST /api/extract (archivos)
│   └── globals.css       # Estilos globales
├── components/
│   └── results/          # Componentes de visualización de resultados
└── lib/
    ├── gemini.ts         # Cliente de la API de Gemini
    ├── genres.ts         # Géneros académicos y dimensiones de revisión
    ├── types.ts          # Tipos TypeScript del dominio
    ├── extraction.ts     # Lógica de extracción de texto desde archivos
    └── prompts/
        ├── shared.ts     # Instrucciones del sistema y esquemas JSON
        ├── academic.ts   # Prompt de revisión académica
        └── brief.ts      # Prompt de revisión breve
```

---

## Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar la API key

Crea un archivo `.env.local` en la raíz del proyecto:

```env
GEMINI_API_KEY=tu_api_key_aqui
```

Obtén tu clave en [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## Uso

1. Ve a `/workspace` (o a la ruta de inicio).
2. **Configura** el tipo de texto académico y las dimensiones de revisión en el panel derecho.
3. **(Opcional)** Adjunta un documento de referencia para evaluar comprensión lectora.
4. **Escribe o carga** el texto del estudiante en el editor izquierdo.
5. Haz clic en **"Iniciar revisión"** o **"Revisar texto"**.
6. Explora las observaciones: haz clic en los fragmentos resaltados o navega desde el panel lateral.

---

## Costos estimados de la API (Gemini 3.6 Flash)

| Periodo | Input | Output | ~Costo por análisis |
|---|---|---|---|
| Hasta dic 2026 (introductorio) | $0.75 / 1M tokens | $3.75 / 1M tokens | ~$0.006 USD |
| Desde ene 2027 (estándar) | $1.50 / 1M tokens | $7.50 / 1M tokens | ~$0.011 USD |

> Un análisis típico consume ~1,600 tokens de entrada y ~1,200 de salida. Con textos largos (>1,000 palabras) el costo puede duplicarse.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el bundle de producción |
| `npm run start` | Inicia el servidor en modo producción |

---

## Licencia

Proyecto personal. Uso interno.
