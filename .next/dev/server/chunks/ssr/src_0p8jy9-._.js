module.exports = [
"[project]/src/app/academico/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AcademicoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/genres.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$results$2f$ResultsView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/results/ResultsView.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AcademicoPage() {
    // Step state
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('genre');
    // Step 1: Genre
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customGenreName, setCustomGenreName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customGenreDesc, setCustomGenreDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Step 2: Config
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].filter((d)=>d.default).map((d)=>d.id));
    // Step 3: Input
    const [studentText, setStudentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputMethod, setInputMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('paste');
    const [fileWarnings, setFileWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Step 4: Reference
    const [referenceText, setReferenceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [refFileWarnings, setRefFileWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Step 5: Results
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // File upload handler
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file, setter, warningSetter)=>{
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await fetch('/api/extract', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Error al extraer el texto del archivo.');
                return;
            }
            setter(data.text);
            warningSetter(data.warnings || []);
            if (data.truncated) {
                setError(`El documento contiene ${data.originalLength.toLocaleString()} caracteres. ` + `Se recomienda dividir el texto en secciones para una revisión más precisa.`);
            }
        } catch  {
            setError('Error de conexión al procesar el archivo.');
        }
    }, []);
    // Toggle dimension
    const toggleDimension = (id)=>{
        if (id === 'integral') {
            // If integral is toggled, select/deselect all
            if (dimensions.includes('integral')) {
                setDimensions([]);
            } else {
                setDimensions(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].map((d)=>d.id));
            }
            return;
        }
        setDimensions((prev)=>{
            const next = prev.includes(id) ? prev.filter((d)=>d !== id) : [
                ...prev,
                id
            ];
            // If all individual dimensions selected, add integral
            const individualDims = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].filter((d)=>d.id !== 'integral').map((d)=>d.id);
            const allSelected = individualDims.every((d)=>next.includes(d));
            if (allSelected && !next.includes('integral')) {
                return [
                    ...next,
                    'integral'
                ];
            }
            if (!allSelected && next.includes('integral')) {
                return next.filter((d)=>d !== 'integral');
            }
            return next;
        });
    };
    // Run analysis
    const runAnalysis = async ()=>{
        if (!selectedGenre || !studentText.trim()) return;
        setCurrentStep('analyzing');
        setError(null);
        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reviewType: 'academic',
                    genre: selectedGenre.id,
                    customGenreName: selectedGenre.id === 'otro' ? customGenreName : null,
                    customGenreDescription: selectedGenre.id === 'otro' ? customGenreDesc : null,
                    dimensions,
                    studentText,
                    referenceText: referenceText.trim() || null,
                    briefIntention: null
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Error al analizar el texto.');
                setCurrentStep('input');
                return;
            }
            setResult(data);
            setCurrentStep('results');
        } catch  {
            setError('Error de conexión al servidor.');
            setCurrentStep('input');
        }
    };
    // New review
    const startNewReview = ()=>{
        setCurrentStep('genre');
        setResult(null);
        setStudentText('');
        setReferenceText('');
        setFileWarnings([]);
        setRefFileWarnings([]);
        setError(null);
    };
    // Re-evaluate (keep text, go to results)
    const reEvaluate = ()=>{
        setResult(null);
        setCurrentStep('input');
    };
    // Steps data
    const steps = [
        {
            key: 'genre',
            label: 'Género',
            num: 1
        },
        {
            key: 'config',
            label: 'Configuración',
            num: 2
        },
        {
            key: 'input',
            label: 'Documento',
            num: 3
        },
        {
            key: 'reference',
            label: 'Referencia',
            num: 4
        }
    ];
    const isStepCompleted = (key)=>{
        const order = [
            'genre',
            'config',
            'input',
            'reference',
            'analyzing',
            'results'
        ];
        return order.indexOf(key) < order.indexOf(currentStep);
    };
    // Results view
    if (currentStep === 'results' && result) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$results$2f$ResultsView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            result: result,
            studentText: studentText,
            reviewType: "academic",
            onNewReview: startNewReview,
            onReEvaluate: reEvaluate,
            onTextChange: setStudentText
        }, void 0, false, {
            fileName: "[project]/src/app/academico/page.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header__inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "header__logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "header__logo-icon",
                                    children: "O"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "header__logo-text",
                                    children: "ORC"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header__nav",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-small",
                                style: {
                                    color: 'var(--color-text-tertiary)'
                                },
                                children: "Revisión académica"
                            }, void 0, false, {
                                fileName: "[project]/src/app/academico/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/academico/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/academico/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        maxWidth: '900px'
                    },
                    children: [
                        currentStep !== 'analyzing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "steps mb-8",
                            children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "step",
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `step__connector ${isStepCompleted(steps[i - 1].key) ? '' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `step ${currentStep === step.key ? 'step--active' : ''} ${isStepCompleted(step.key) ? 'step--completed' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "step__number",
                                                    children: isStepCompleted(step.key) ? '✓' : step.num
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "step__label",
                                                    children: step.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step.key, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "notice notice--error mb-6 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "notice__icon",
                                    children: "⚠️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Error:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        error,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--ghost btn--sm mt-2",
                                            onClick: ()=>setError(null),
                                            style: {
                                                display: 'block'
                                            },
                                            children: "Cerrar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        currentStep === 'genre' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-2 mb-2",
                                    children: "Selecciona el tipo de texto académico"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mb-6",
                                    children: "Cada género tiene criterios de revisión específicos. Selecciona el que mejor corresponda a tu documento para una evaluación más precisa."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "genre-grid",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACADEMIC_GENRES"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `genre-card ${selectedGenre?.id === genre.id ? 'genre-card--selected' : ''}`,
                                            onClick: ()=>setSelectedGenre(genre),
                                            id: `genre-${genre.id}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "genre-card__icon",
                                                    children: genre.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "genre-card__info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "genre-card__name",
                                                            children: genre.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "genre-card__hint",
                                                            children: [
                                                                genre.description.substring(0, 60),
                                                                "…"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, genre.id, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                selectedGenre?.id === 'otro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card glass-card--compact mt-6 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    htmlFor: "custom-genre-name",
                                                    children: "Nombre del género académico"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "custom-genre-name",
                                                    className: "form-input",
                                                    type: "text",
                                                    value: customGenreName,
                                                    onChange: (e)=>setCustomGenreName(e.target.value),
                                                    placeholder: "Ej: Carta de motivación, Análisis de caso…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    htmlFor: "custom-genre-desc",
                                                    children: "Describe sus características principales (opcional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "custom-genre-desc",
                                                    className: "form-textarea",
                                                    value: customGenreDesc,
                                                    onChange: (e)=>setCustomGenreDesc(e.target.value),
                                                    placeholder: "Describe la estructura esperada, los requisitos del docente o las características del texto…",
                                                    style: {
                                                        minHeight: '120px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                selectedGenre && selectedGenre.id !== 'otro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card glass-card--compact mt-6 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "heading-4 mb-2",
                                            children: [
                                                selectedGenre.icon,
                                                " ",
                                                selectedGenre.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body mb-4",
                                            children: selectedGenre.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this),
                                        selectedGenre.structureComponents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-small mb-2",
                                                    style: {
                                                        color: 'var(--color-text-tertiary)'
                                                    },
                                                    children: "Se evaluarán los siguientes componentes estructurales:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: 'var(--space-2)'
                                                    },
                                                    children: selectedGenre.structureComponents.map((comp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "badge badge--structure",
                                                            children: comp
                                                        }, comp, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 21
                                        }, this),
                                        selectedGenre.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "notice notice--info mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "notice__icon",
                                                    children: "ℹ️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selectedGenre.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "btn btn--ghost",
                                            children: "← Inicio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary btn--lg",
                                            disabled: !selectedGenre || selectedGenre.id === 'otro' && !customGenreName.trim(),
                                            onClick: ()=>setCurrentStep('config'),
                                            id: "btn-next-config",
                                            children: "Continuar →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this),
                        currentStep === 'config' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-2 mb-2",
                                    children: "Configura la revisión"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mb-6",
                                    children: "Selecciona qué aspectos deseas revisar. La evaluación integral está activada por defecto, pero puedes desactivar dimensiones que no sean necesarias."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "config-grid",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].map((dim)=>{
                                        const isActive = dimensions.includes(dim.id);
                                        const isDisabled = dim.id === 'comprehension' && !referenceText.trim();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `config-item ${isActive ? 'config-item--active' : ''}`,
                                            onClick: ()=>!isDisabled && toggleDimension(dim.id),
                                            style: isDisabled ? {
                                                opacity: 0.5,
                                                cursor: 'not-allowed'
                                            } : {},
                                            id: `dim-${dim.id}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: "checkbox-input",
                                                    checked: isActive,
                                                    disabled: isDisabled,
                                                    onChange: ()=>{},
                                                    "aria-label": dim.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "config-item__info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "config-item__title",
                                                            children: dim.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "config-item__description",
                                                            children: dim.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, dim.id, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "notice notice--info mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "notice__icon",
                                            children: "💡"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "La dimensión «Comprensión del texto de referencia» se activará cuando adjuntes un documento de referencia en el paso 4."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--ghost",
                                            onClick: ()=>setCurrentStep('genre'),
                                            children: "← Género"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary btn--lg",
                                            disabled: dimensions.length === 0,
                                            onClick: ()=>setCurrentStep('input'),
                                            id: "btn-next-input",
                                            children: "Continuar →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this),
                        currentStep === 'input' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-2 mb-2",
                                    children: "Introduce tu documento"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mb-6",
                                    children: "Pega directamente tu texto o carga un archivo en formato DOCX, PDF o TXT."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tabs mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `tab ${inputMethod === 'paste' ? 'tab--active' : ''}`,
                                            onClick: ()=>setInputMethod('paste'),
                                            id: "tab-paste",
                                            children: "📝 Pegar texto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `tab ${inputMethod === 'file' ? 'tab--active' : ''}`,
                                            onClick: ()=>setInputMethod('file'),
                                            id: "tab-file",
                                            children: "📁 Cargar archivo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                inputMethod === 'paste' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "form-textarea form-textarea--editor",
                                            value: studentText,
                                            onChange: (e)=>setStudentText(e.target.value),
                                            placeholder: "Pega aquí tu texto…",
                                            id: "student-text-input"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-hint",
                                            children: [
                                                studentText.length.toLocaleString(),
                                                " caracteres"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-upload",
                                            onDragOver: (e)=>{
                                                e.preventDefault();
                                                e.currentTarget.classList.add('file-upload--active');
                                            },
                                            onDragLeave: (e)=>{
                                                e.currentTarget.classList.remove('file-upload--active');
                                            },
                                            onDrop: (e)=>{
                                                e.preventDefault();
                                                e.currentTarget.classList.remove('file-upload--active');
                                                const file = e.dataTransfer.files[0];
                                                if (file) handleFileUpload(file, setStudentText, setFileWarnings);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "file-upload__icon",
                                                    children: "📎"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "file-upload__text",
                                                    children: "Arrastra un archivo aquí o haz clic para seleccionar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "file-upload__formats",
                                                    children: "Formatos aceptados: DOCX, PDF (con texto extraíble), TXT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".docx,.pdf,.txt,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,text/plain",
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (file) handleFileUpload(file, setStudentText, setFileWarnings);
                                                    },
                                                    id: "student-file-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this),
                                        fileWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: fileWarnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "notice notice--warning mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "notice__icon",
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: w
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 21
                                        }, this),
                                        studentText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "file-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "file-info__name",
                                                            children: "Texto extraído correctamente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "file-info__size",
                                                            children: [
                                                                studentText.length.toLocaleString(),
                                                                " caracteres"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "file-info__remove",
                                                            onClick: ()=>{
                                                                setStudentText('');
                                                                setFileWarnings([]);
                                                            },
                                                            title: "Eliminar",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "mt-2",
                                                    style: {
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            className: "text-small",
                                                            style: {
                                                                color: 'var(--color-text-link)'
                                                            },
                                                            children: "Ver texto extraído"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            style: {
                                                                marginTop: 'var(--space-2)',
                                                                padding: 'var(--space-4)',
                                                                background: 'var(--color-bg-tertiary)',
                                                                borderRadius: 'var(--radius-md)',
                                                                fontSize: 'var(--text-xs)',
                                                                maxHeight: '300px',
                                                                overflow: 'auto',
                                                                whiteSpace: 'pre-wrap',
                                                                wordBreak: 'break-word'
                                                            },
                                                            children: [
                                                                studentText.substring(0, 2000),
                                                                studentText.length > 2000 && '…'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/academico/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--ghost",
                                            onClick: ()=>setCurrentStep('config'),
                                            children: "← Configuración"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary btn--lg",
                                            disabled: !studentText.trim(),
                                            onClick: ()=>setCurrentStep('reference'),
                                            id: "btn-next-reference",
                                            children: "Continuar →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this),
                        currentStep === 'reference' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-2 mb-2",
                                    children: "Documento de referencia (opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body mb-6",
                                    children: "Si tu trabajo se basa en una lectura específica (artículo, capítulo, etc.), adjúntalo para evaluar tu comprensión lectora. Si no tienes uno, puedes omitir este paso."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tabs mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `tab ${!referenceText ? 'tab--active' : ''}`,
                                            onClick: ()=>setReferenceText(''),
                                            children: "Sin referencia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `tab ${referenceText ? 'tab--active' : ''}`,
                                            onClick: ()=>{},
                                            children: "Con referencia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "file-upload",
                                    onDragOver: (e)=>{
                                        e.preventDefault();
                                        e.currentTarget.classList.add('file-upload--active');
                                    },
                                    onDragLeave: (e)=>{
                                        e.currentTarget.classList.remove('file-upload--active');
                                    },
                                    onDrop: (e)=>{
                                        e.preventDefault();
                                        e.currentTarget.classList.remove('file-upload--active');
                                        const file = e.dataTransfer.files[0];
                                        if (file) handleFileUpload(file, setReferenceText, setRefFileWarnings);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-upload__icon",
                                            children: "📚"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-upload__text",
                                            children: "Arrastra el documento de referencia o haz clic para seleccionar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 579,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-upload__formats",
                                            children: "DOCX, PDF (con texto extraíble), TXT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".docx,.pdf,.txt",
                                            onChange: (e)=>{
                                                const file = e.target.files?.[0];
                                                if (file) handleFileUpload(file, setReferenceText, setRefFileWarnings);
                                            },
                                            id: "reference-file-input"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-4 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-small",
                                        style: {
                                            color: 'var(--color-text-tertiary)'
                                        },
                                        children: "— o —"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/academico/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            htmlFor: "reference-text-input",
                                            children: "Pegar texto de referencia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "reference-text-input",
                                            className: "form-textarea",
                                            value: referenceText,
                                            onChange: (e)=>setReferenceText(e.target.value),
                                            placeholder: "Pega aquí el texto de referencia (artículo, capítulo, lectura)…",
                                            style: {
                                                minHeight: '200px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this),
                                        referenceText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "form-hint",
                                            children: [
                                                referenceText.length.toLocaleString(),
                                                " caracteres"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 15
                                }, this),
                                refFileWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: refFileWarnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "notice notice--warning mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "notice__icon",
                                                    children: "⚠️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: w
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academico/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 17
                                }, this),
                                !referenceText.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "notice notice--info mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "notice__icon",
                                            children: "ℹ️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sin documento de referencia, se omitirá la evaluación de comprensión lectora. El resto de la revisión funcionará normalmente."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 631,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--ghost",
                                            onClick: ()=>setCurrentStep('input'),
                                            children: "← Documento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary btn--lg",
                                            onClick: runAnalysis,
                                            id: "btn-analyze",
                                            children: "🔍 Iniciar revisión"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academico/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 544,
                            columnNumber: 13
                        }, this),
                        currentStep === 'analyzing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loading-overlay animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading-spinner"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-3",
                                    children: "Analizando tu documento…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "loading-text",
                                    children: "Esto puede tardar entre 15 y 60 segundos dependiendo de la extensión del texto."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading-progress",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loading-progress__bar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/academico/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-caption mt-4",
                                    children: [
                                        "Evaluando: ",
                                        selectedGenre?.name || 'documento'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/academico/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/academico/page.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/academico/page.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/academico/page.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/academico/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/results/ResultsView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ResultsView({ result, studentText, reviewType, onNewReview, onReEvaluate, onTextChange, originalText }) {
    // State
    const [activeObsId, setActiveObsId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [observationStatuses, setObservationStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const map = {};
        result.observations.forEach((obs)=>{
            map[obs.id] = 'pending';
        });
        return map;
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('text');
    const [categoryFilters, setCategoryFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set([
        'grammar',
        'clarity',
        'coherence',
        'structure',
        'comprehension'
    ]));
    const [priorityFilter, setPriorityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [showSidebar, setShowSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(studentText);
    const textContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const highlightRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Filtered observations
    const filteredObservations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return result.observations.filter((obs)=>{
            if (!categoryFilters.has(obs.category)) return false;
            if (priorityFilter !== 'all' && obs.priority !== priorityFilter) return false;
            return true;
        });
    }, [
        result.observations,
        categoryFilters,
        priorityFilter
    ]);
    // Matched observations (have valid positions)
    const matchedObservations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredObservations.filter((obs)=>obs.start >= 0 && obs.end >= 0), [
        filteredObservations
    ]);
    // Unmatched observations
    const unmatchedObservations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredObservations.filter((obs)=>obs.start < 0 || obs.end < 0), [
        filteredObservations
    ]);
    // Category counts
    const categoryCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = {};
        result.observations.forEach((obs)=>{
            counts[obs.category] = (counts[obs.category] || 0) + 1;
        });
        return counts;
    }, [
        result.observations
    ]);
    // Active observation
    const activeObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>result.observations.find((obs)=>obs.id === activeObsId) || null, [
        result.observations,
        activeObsId
    ]);
    // Current index
    const currentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredObservations.findIndex((obs)=>obs.id === activeObsId), [
        filteredObservations,
        activeObsId
    ]);
    // Navigate observations
    const goToObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        if (filteredObservations.length === 0) return;
        let idx = currentIndex;
        if (direction === 'next') {
            idx = idx < filteredObservations.length - 1 ? idx + 1 : 0;
        } else {
            idx = idx > 0 ? idx - 1 : filteredObservations.length - 1;
        }
        const obs = filteredObservations[idx];
        setActiveObsId(obs.id);
        scrollToHighlight(obs.id);
    }, [
        filteredObservations,
        currentIndex
    ]);
    // Scroll to highlight
    const scrollToHighlight = (obsId)=>{
        const el = highlightRefs.current.get(obsId);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };
    // Update observation status
    const updateStatus = (obsId, status)=>{
        setObservationStatuses((prev)=>({
                ...prev,
                [obsId]: status
            }));
    };
    // Toggle category filter
    const toggleCategory = (cat)=>{
        setCategoryFilters((prev)=>{
            const next = new Set(prev);
            if (next.has(cat)) {
                next.delete(cat);
            } else {
                next.add(cat);
            }
            return next;
        });
    };
    // Build highlighted text segments
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (matchedObservations.length === 0) {
            return [
                {
                    text: studentText,
                    observations: [],
                    start: 0
                }
            ];
        }
        // Sort by start position
        const sorted = [
            ...matchedObservations
        ].sort((a, b)=>a.start - b.start || a.end - b.end);
        // Build change points
        const points = new Set();
        points.add(0);
        points.add(studentText.length);
        sorted.forEach((obs)=>{
            if (obs.start >= 0 && obs.start <= studentText.length) points.add(obs.start);
            if (obs.end >= 0 && obs.end <= studentText.length) points.add(obs.end);
        });
        const sortedPoints = Array.from(points).sort((a, b)=>a - b);
        const segs = [];
        for(let i = 0; i < sortedPoints.length - 1; i++){
            const segStart = sortedPoints[i];
            const segEnd = sortedPoints[i + 1];
            const segText = studentText.substring(segStart, segEnd);
            const overlapping = sorted.filter((obs)=>obs.start < segEnd && obs.end > segStart);
            segs.push({
                text: segText,
                observations: overlapping,
                start: segStart
            });
        }
        return segs;
    }, [
        studentText,
        matchedObservations
    ]);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (activeTab === 'edit') return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                goToObs('next');
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                goToObs('prev');
            } else if (e.key === 'Escape') {
                setActiveObsId(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        goToObs,
        activeTab
    ]);
    const reviewedCount = Object.values(observationStatuses).filter((s)=>s === 'reviewed' || s === 'corrected' || s === 'dismissed').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header__inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "header__logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "header__logo-icon",
                                    children: "O"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "header__logo-text",
                                    children: "ORC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header__nav",
                            style: {
                                gap: 'var(--space-3)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-caption",
                                    children: [
                                        result.observations.length,
                                        " observaciones · ",
                                        reviewedCount,
                                        " revisadas"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn--ghost btn--sm",
                                    onClick: onReEvaluate,
                                    children: "🔄 Re-evaluar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn--ghost btn--sm",
                                    onClick: onNewReview,
                                    children: "✨ Nueva revisión"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/results/ResultsView.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            result.warnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '0 var(--space-6)'
                },
                children: result.warnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice notice--warning mb-2",
                        style: {
                            margin: 'var(--space-2) auto',
                            maxWidth: 'var(--max-width)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "notice__icon",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: w
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                style: {
                    paddingInline: 'var(--space-6)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'text' ? 'tab--active' : ''}`,
                        onClick: ()=>setActiveTab('text'),
                        id: "tab-text",
                        children: "📝 Texto con resaltados"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'feedback' ? 'tab--active' : ''}`,
                        onClick: ()=>setActiveTab('feedback'),
                        id: "tab-feedback",
                        children: "📊 Retroalimentación"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    result.structureComponents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'structure' ? 'tab--active' : ''}`,
                        onClick: ()=>setActiveTab('structure'),
                        id: "tab-structure",
                        children: "🏗️ Estructura"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'edit' ? 'tab--active' : ''}`,
                        onClick: ()=>setActiveTab('edit'),
                        id: "tab-edit",
                        children: "✏️ Editar y re-evaluar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            activeTab === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-caption",
                        style: {
                            marginRight: 'var(--space-2)',
                            whiteSpace: 'nowrap'
                        },
                        children: "Filtrar:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"]).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `filter-chip ${categoryFilters.has(cat) ? 'filter-chip--active' : ''}`,
                            onClick: ()=>toggleCategory(cat),
                            id: `filter-${cat}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        background: `var(--highlight-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][cat]}-solid)`,
                                        display: 'inline-block',
                                        flexShrink: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][cat],
                                categoryCounts[cat] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filter-chip__count",
                                    children: categoryCounts[cat]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, cat, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderLeft: '1px solid var(--color-border)',
                            height: '20px',
                            margin: '0 var(--space-2)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    [
                        'all',
                        'high',
                        'medium',
                        'low'
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `filter-chip ${priorityFilter === p ? 'filter-chip--active' : ''}`,
                            onClick: ()=>setPriorityFilter(p),
                            children: p === 'all' ? 'Todas' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][p]
                        }, p, false, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn--ghost btn--sm",
                            onClick: ()=>setShowSidebar(!showSidebar),
                            children: showSidebar ? '◀ Ocultar panel' : '▶ Mostrar panel'
                        }, void 0, false, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this),
            activeTab === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "results-layout__text",
                        ref: textContainerRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "highlighted-text",
                                children: segments.map((seg, i)=>{
                                    if (seg.observations.length === 0) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: seg.text
                                        }, i, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 330,
                                            columnNumber: 26
                                        }, this);
                                    }
                                    // Use the highest priority observation for the highlight color
                                    const primaryObs = seg.observations.sort((a, b)=>[
                                            'high',
                                            'medium',
                                            'low'
                                        ].indexOf(a.priority) - [
                                            'high',
                                            'medium',
                                            'low'
                                        ].indexOf(b.priority))[0];
                                    const isActive = seg.observations.some((o)=>o.id === activeObsId);
                                    const isReviewed = seg.observations.every((o)=>observationStatuses[o.id] !== 'pending');
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                        ref: (el)=>{
                                            if (el) {
                                                seg.observations.forEach((o)=>{
                                                    highlightRefs.current.set(o.id, el);
                                                });
                                            }
                                        },
                                        className: [
                                            'highlight-mark',
                                            `highlight-mark--${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][primaryObs.category]}`,
                                            isActive ? 'highlight-mark--active' : '',
                                            isReviewed ? 'highlight-mark--reviewed' : ''
                                        ].join(' '),
                                        onClick: ()=>{
                                            setActiveObsId(primaryObs.id);
                                            setShowSidebar(true);
                                        },
                                        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][primaryObs.category]}: ${primaryObs.explanation.substring(0, 80)}…`,
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-label": `Observación: ${primaryObs.explanation.substring(0, 60)}`,
                                        children: seg.text
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 344,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            unmatchedObservations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "heading-4 mb-4",
                                        children: [
                                            "Observaciones generales",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-caption",
                                                style: {
                                                    marginLeft: 'var(--space-2)'
                                                },
                                                children: "(no vinculadas a un fragmento específico)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                lineNumber: 379,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "obs-list",
                                        children: unmatchedObservations.map((obs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `obs-list-item ${activeObsId === obs.id ? 'obs-list-item--active' : ''}`,
                                                onClick: ()=>{
                                                    setActiveObsId(obs.id);
                                                    setShowSidebar(true);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "obs-list-item__color",
                                                        style: {
                                                            background: `var(--highlight-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][obs.category]}-solid)`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "obs-list-item__content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "obs-list-item__fragment",
                                                                children: obs.originalFragment || 'Observación general'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "obs-list-item__explanation",
                                                                children: obs.explanation
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge badge--priority-${obs.priority}`,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][obs.priority]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, obs.id, true, {
                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this),
                    showSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `results-layout__sidebar animate-slide-in-right`,
                        children: activeObs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "obs-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `badge badge--${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][activeObs.category]}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][activeObs.category]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 417,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__nav",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn--icon btn--ghost",
                                                    onClick: ()=>goToObs('prev'),
                                                    title: "Anterior",
                                                    children: "←"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "obs-panel__counter",
                                                    children: [
                                                        currentIndex + 1,
                                                        " / ",
                                                        filteredObservations.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn--icon btn--ghost",
                                                    onClick: ()=>goToObs('next'),
                                                    title: "Siguiente",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn--icon btn--ghost",
                                                    onClick: ()=>setActiveObsId(null),
                                                    title: "Cerrar",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 420,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 416,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 438,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body",
                                            style: {
                                                fontSize: 'var(--text-sm)'
                                            },
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][activeObs.category],
                                                activeObs.subcategory && activeObs.subcategory !== 'other' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-caption",
                                                    style: {
                                                        marginLeft: 'var(--space-2)'
                                                    },
                                                    children: [
                                                        "(",
                                                        activeObs.subcategory.replace(/_/g, ' '),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 439,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 437,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Fragmento original"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 451,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__fragment",
                                            children: [
                                                "“",
                                                activeObs.originalFragment,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 452,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 450,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "¿Qué ocurre?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 459,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "obs-panel__explanation",
                                            children: activeObs.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 460,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 458,
                                    columnNumber: 19
                                }, this),
                                activeObs.rule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Regla o criterio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 466,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__rule",
                                            children: activeObs.rule
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 467,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 465,
                                    columnNumber: 21
                                }, this),
                                activeObs.contextReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "¿Por qué es pertinente aquí?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 474,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "obs-panel__explanation",
                                            children: activeObs.contextReason
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 475,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 473,
                                    columnNumber: 21
                                }, this),
                                activeObs.suggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Sugerencia de mejora"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 482,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "obs-panel__explanation",
                                            children: activeObs.suggestion
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 483,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 481,
                                    columnNumber: 21
                                }, this),
                                activeObs.exampleCorrection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Posible corrección"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 490,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__suggestion",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "→ "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 25
                                                }, this),
                                                activeObs.exampleCorrection
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 491,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 489,
                                    columnNumber: 21
                                }, this),
                                activeObs.reflectionQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Para reflexionar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 500,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__reflection",
                                            children: [
                                                "💭 ",
                                                activeObs.reflectionQuestion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 501,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 499,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Nivel de confianza"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 509,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__confidence",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `obs-panel__confidence-dot obs-panel__confidence-dot--${activeObs.confidence}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 23
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIDENCE_LABELS"][activeObs.confidence],
                                                activeObs.confidence === 'low' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-caption",
                                                    style: {
                                                        marginLeft: 'var(--space-2)'
                                                    },
                                                    children: "— Esta observación puede requerir verificación manual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 510,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 508,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-panel__section-title",
                                            children: "Prioridad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 523,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `badge badge--priority-${activeObs.priority}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][activeObs.priority]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 524,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 522,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__actions",
                                    children: [
                                        'reviewed',
                                        'corrected',
                                        'dismissed'
                                    ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `btn btn--sm ${observationStatuses[activeObs.id] === status ? 'btn--primary' : 'btn--secondary'}`,
                                            onClick: ()=>updateStatus(activeObs.id, status),
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS_LABELS"][status]
                                        }, status, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 532,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 530,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 414,
                            columnNumber: 17
                        }, this) : /* No observation selected — show list */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "obs-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-panel__header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "heading-4",
                                            children: "Observaciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 550,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-caption",
                                            children: [
                                                filteredObservations.length,
                                                " total"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 551,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 549,
                                    columnNumber: 19
                                }, this),
                                filteredObservations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "empty-state",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "empty-state__icon",
                                            children: "✨"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 555,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "empty-state__title",
                                            children: "Sin observaciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 556,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "empty-state__description",
                                            children: "No se encontraron problemas en las categorías seleccionadas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 557,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 554,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-list",
                                    children: filteredObservations.map((obs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `obs-list-item ${observationStatuses[obs.id] !== 'pending' ? 'obs-list-item--reviewed' : ''}`,
                                            onClick: ()=>{
                                                setActiveObsId(obs.id);
                                                scrollToHighlight(obs.id);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-list-item__color",
                                                    style: {
                                                        background: `var(--highlight-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][obs.category]}-solid)`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-list-item__content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "obs-list-item__fragment",
                                                            children: [
                                                                "“",
                                                                obs.originalFragment.substring(0, 60),
                                                                obs.originalFragment.length > 60 ? '…' : '',
                                                                "”"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "obs-list-item__explanation",
                                                            children: [
                                                                obs.explanation.substring(0, 100),
                                                                obs.explanation.length > 100 ? '…' : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `badge badge--priority-${obs.priority}`,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][obs.priority]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, obs.id, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 564,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 562,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 548,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 412,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this),
            activeTab === 'feedback' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feedback-section container animate-fade-in-up",
                style: {
                    maxWidth: '900px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "📋 Valoración general"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 609,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__content",
                                children: result.generalFeedback.overallAssessment
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 608,
                        columnNumber: 11
                    }, this),
                    result.generalFeedback.strengths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "💪 Fortalezas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 618,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__list",
                                children: result.generalFeedback.strengths.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feedback-block__list-item",
                                        children: s
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 621,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 619,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 617,
                        columnNumber: 13
                    }, this),
                    result.generalFeedback.priorityIssues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "🔴 Problemas prioritarios"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 630,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__list",
                                children: result.generalFeedback.priorityIssues.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feedback-block__list-item",
                                        children: p
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 633,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 631,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 629,
                        columnNumber: 13
                    }, this),
                    result.generalFeedback.recommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "💡 Recomendaciones de mejora"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 642,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__list",
                                children: result.generalFeedback.recommendations.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feedback-block__list-item",
                                        children: r
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 645,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 643,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 641,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "📚 Comprensión lectora"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 653,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__content",
                                children: result.generalFeedback.readingComprehension || 'No se evaluó la correspondencia con una lectura específica. No se proporcionó documento de referencia.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, this),
                    reviewType === 'academic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "🏗️ Estructura académica"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 663,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__content",
                                children: result.generalFeedback.structureSummary || 'No se evaluó la estructura académica en esta revisión.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 664,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 662,
                        columnNumber: 13
                    }, this),
                    result.generalFeedback.nextSteps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "🎯 Próximos pasos"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 674,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__list",
                                children: result.generalFeedback.nextSteps.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feedback-block__list-item",
                                        children: n
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 677,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 675,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 673,
                        columnNumber: 13
                    }, this),
                    result.generalFeedback.limitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feedback-block",
                        style: {
                            borderColor: 'var(--color-warning-muted)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "feedback-block__title",
                                children: "⚠️ Limitaciones de la evaluación"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 686,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feedback-block__list",
                                children: result.generalFeedback.limitations.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feedback-block__list-item",
                                        children: l
                                    }, i, false, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 689,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 687,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 685,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 606,
                columnNumber: 9
            }, this),
            activeTab === 'structure' && result.structureComponents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feedback-section container animate-fade-in-up",
                style: {
                    maxWidth: '900px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "heading-2 mb-2",
                        children: "Evaluación estructural"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-body mb-6",
                        children: [
                            "Componentes estructurales del género ",
                            result.genre || 'seleccionado',
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 701,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: 0,
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "structure-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Componente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Estado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Observación"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                                lineNumber: 711,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                        lineNumber: 708,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 707,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: result.structureComponents.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontWeight: 500,
                                                        color: 'var(--color-text-primary)'
                                                    },
                                                    children: comp.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `status-indicator status-indicator--${comp.status === 'present' ? 'present' : comp.status === 'needs_review' ? 'review' : comp.status === 'not_found' ? 'missing' : comp.status === 'not_applicable' ? 'na' : 'verify'}`,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRUCTURE_STATUS_LABELS"][comp.status]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/results/ResultsView.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: comp.observation
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 23
                                                        }, this),
                                                        comp.recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-caption mt-2",
                                                            style: {
                                                                color: 'var(--color-info)'
                                                            },
                                                            children: [
                                                                "💡 ",
                                                                comp.recommendation
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/results/ResultsView.tsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/results/ResultsView.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/results/ResultsView.tsx",
                            lineNumber: 706,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 705,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 699,
                columnNumber: 9
            }, this),
            activeTab === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feedback-section container animate-fade-in-up",
                style: {
                    maxWidth: '900px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "heading-2 mb-2",
                        children: "Editar y re-evaluar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 749,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-body mb-6",
                        children: "Modifica tu texto y solicita una nueva evaluación. Las observaciones anteriores se reemplazarán con las nuevas."
                    }, void 0, false, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 750,
                        columnNumber: 11
                    }, this),
                    originalText && originalText !== editText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice notice--info mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "notice__icon",
                                children: "📝"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 758,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "El texto ha sido modificado respecto a la versión original."
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 759,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 757,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-textarea form-textarea--editor",
                                value: editText,
                                onChange: (e)=>setEditText(e.target.value),
                                id: "edit-text-input"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 764,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "form-hint",
                                children: [
                                    editText.length.toLocaleString(),
                                    " caracteres"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 770,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 763,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn--ghost",
                                onClick: ()=>setEditText(studentText),
                                children: "Restaurar texto original"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 776,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn--primary btn--lg",
                                onClick: ()=>{
                                    onTextChange(editText);
                                    onReEvaluate();
                                },
                                disabled: !editText.trim() || editText === studentText,
                                id: "btn-re-evaluate",
                                children: "🔍 Re-evaluar texto modificado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/results/ResultsView.tsx",
                                lineNumber: 782,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/results/ResultsView.tsx",
                        lineNumber: 775,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/results/ResultsView.tsx",
                lineNumber: 748,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/results/ResultsView.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/genres.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACADEMIC_GENRES",
    ()=>ACADEMIC_GENRES,
    "BRIEF_INTENTIONS",
    ()=>BRIEF_INTENTIONS,
    "REVIEW_DIMENSIONS",
    ()=>REVIEW_DIMENSIONS
]);
const ACADEMIC_GENRES = [
    {
        id: 'ensayo',
        name: 'Ensayo académico',
        icon: '📝',
        description: 'Texto argumentativo que presenta y defiende una postura sobre un tema específico.',
        structureComponents: [
            'Introducción y presentación del tema',
            'Planteamiento de tesis o idea central',
            'Desarrollo argumentativo',
            'Organización de los párrafos',
            'Uso de evidencias y fuentes',
            'Coherencia entre los argumentos',
            'Conclusión',
            'Registro académico'
        ],
        evaluationCriteria: [
            {
                name: 'Tesis clara',
                description: 'La postura central debe estar formulada de manera explícita y defendible.'
            },
            {
                name: 'Argumentación sólida',
                description: 'Los argumentos deben estar justificados con evidencias, razonamientos o fuentes.'
            },
            {
                name: 'Coherencia interna',
                description: 'Los párrafos deben estar conectados lógicamente y contribuir a la defensa de la tesis.'
            },
            {
                name: 'Conclusión articulada',
                description: 'La conclusión debe sintetizar la postura defendida sin introducir ideas nuevas sin desarrollo.'
            }
        ],
        notes: null
    },
    {
        id: 'articulo_cientifico',
        name: 'Artículo científico',
        icon: '🔬',
        description: 'Publicación que comunica resultados de una investigación original siguiendo un formato estandarizado.',
        structureComponents: [
            'Título',
            'Resumen (Abstract)',
            'Palabras clave',
            'Introducción',
            'Metodología',
            'Resultados',
            'Discusión',
            'Conclusiones',
            'Referencias bibliográficas'
        ],
        evaluationCriteria: [
            {
                name: 'Estructura IMRyD',
                description: 'El artículo sigue la estructura Introducción-Metodología-Resultados-Discusión, aunque puede variar según la disciplina.'
            },
            {
                name: 'Objetividad',
                description: 'El lenguaje debe ser impersonal y basado en datos.'
            },
            {
                name: 'Reproducibilidad',
                description: 'La metodología debe ser lo suficientemente detallada para permitir la replicación.'
            },
            {
                name: 'Coherencia con resultados',
                description: 'Las conclusiones deben derivarse lógicamente de los resultados presentados.'
            }
        ],
        notes: 'No todos los artículos científicos siguen exactamente la misma estructura. Existen variaciones según la disciplina, la revista y el formato editorial.'
    },
    {
        id: 'informe_tecnico',
        name: 'Informe técnico',
        icon: '📊',
        description: 'Documento que presenta el análisis técnico de un problema, procedimiento o situación.',
        structureComponents: [
            'Identificación del problema u objetivo',
            'Descripción del procedimiento o metodología',
            'Presentación de resultados o hallazgos',
            'Análisis e interpretación',
            'Conclusiones',
            'Recomendaciones',
            'Organización de apartados'
        ],
        evaluationCriteria: [
            {
                name: 'Claridad técnica',
                description: 'La información técnica debe presentarse de forma precisa y comprensible.'
            },
            {
                name: 'Estructura lógica',
                description: 'Los apartados deben seguir un orden coherente del problema a la solución.'
            },
            {
                name: 'Datos verificables',
                description: 'Los resultados deben estar respaldados por datos concretos.'
            }
        ],
        notes: null
    },
    {
        id: 'reporte_investigacion',
        name: 'Reporte de investigación',
        icon: '🔍',
        description: 'Documento que describe el proceso y los resultados de un estudio o investigación.',
        structureComponents: [
            'Planteamiento del problema',
            'Objetivos de investigación',
            'Marco teórico o antecedentes',
            'Metodología',
            'Resultados',
            'Análisis y discusión',
            'Conclusiones',
            'Referencias'
        ],
        evaluationCriteria: [
            {
                name: 'Coherencia metodológica',
                description: 'Los métodos deben ser congruentes con los objetivos planteados.'
            },
            {
                name: 'Fundamentación',
                description: 'El marco teórico debe sustentar la investigación realizada.'
            },
            {
                name: 'Objetividad',
                description: 'Los resultados deben presentarse sin sesgos interpretativos indebidos.'
            }
        ],
        notes: null
    },
    {
        id: 'resumen_academico',
        name: 'Resumen académico',
        icon: '📋',
        description: 'Texto breve que condensa las ideas principales de un documento más extenso.',
        structureComponents: [
            'Identificación del texto fuente',
            'Idea principal del texto',
            'Ideas secundarias relevantes',
            'Fidelidad al contenido original',
            'Brevedad y concisión'
        ],
        evaluationCriteria: [
            {
                name: 'Fidelidad',
                description: 'El resumen debe representar con precisión las ideas del texto original.'
            },
            {
                name: 'Selección de ideas',
                description: 'Debe distinguir ideas principales de secundarias e incluir las esenciales.'
            },
            {
                name: 'Concisión',
                description: 'Debe ser significativamente más breve que el texto original sin perder información clave.'
            },
            {
                name: 'No interpretación',
                description: 'No debe incluir opiniones o interpretaciones propias del redactor.'
            }
        ],
        notes: null
    },
    {
        id: 'sintesis',
        name: 'Síntesis',
        icon: '🔗',
        description: 'Texto que integra ideas de varias fuentes para construir una visión global.',
        structureComponents: [
            'Identificación de fuentes',
            'Ideas principales integradas',
            'Relaciones entre fuentes',
            'Visión global coherente',
            'Voz propia del autor'
        ],
        evaluationCriteria: [
            {
                name: 'Integración de fuentes',
                description: 'Las ideas de las distintas fuentes deben estar articuladas, no simplemente yuxtapuestas.'
            },
            {
                name: 'Aporte propio',
                description: 'La síntesis debe ofrecer una perspectiva integradora, no solo un resumen combinado.'
            },
            {
                name: 'Coherencia global',
                description: 'El texto debe leerse como un todo articulado.'
            }
        ],
        notes: null
    },
    {
        id: 'resena_critica',
        name: 'Reseña crítica',
        icon: '⚖️',
        description: 'Texto que describe y evalúa críticamente una obra, artículo o documento.',
        structureComponents: [
            'Datos de la obra reseñada',
            'Descripción del contenido',
            'Análisis crítico',
            'Valoración fundamentada',
            'Postura del reseñador',
            'Conclusión'
        ],
        evaluationCriteria: [
            {
                name: 'Descripción fiel',
                description: 'El contenido de la obra debe describirse con precisión antes de ser evaluado.'
            },
            {
                name: 'Argumentación crítica',
                description: 'Las valoraciones deben estar sustentadas con argumentos, no ser opiniones sin fundamento.'
            },
            {
                name: 'Equilibrio',
                description: 'Debe reconocer tanto fortalezas como debilidades de la obra, cuando las haya.'
            }
        ],
        notes: null
    },
    {
        id: 'monografia',
        name: 'Monografía',
        icon: '📚',
        description: 'Estudio detallado y exhaustivo sobre un tema específico, basado en fuentes documentales.',
        structureComponents: [
            'Introducción y delimitación del tema',
            'Justificación',
            'Objetivos',
            'Desarrollo temático',
            'Marco conceptual',
            'Conclusiones',
            'Bibliografía'
        ],
        evaluationCriteria: [
            {
                name: 'Profundidad',
                description: 'El tema debe tratarse con suficiente detalle y exhaustividad.'
            },
            {
                name: 'Fundamentación documental',
                description: 'Las afirmaciones deben estar respaldadas por fuentes bibliográficas.'
            },
            {
                name: 'Organización temática',
                description: 'Los apartados deben seguir un desarrollo lógico del tema.'
            }
        ],
        notes: null
    },
    {
        id: 'protocolo_investigacion',
        name: 'Protocolo de investigación',
        icon: '📐',
        description: 'Documento que planifica y describe cómo se llevará a cabo una investigación.',
        structureComponents: [
            'Título del proyecto',
            'Planteamiento del problema',
            'Pregunta de investigación',
            'Objetivos',
            'Justificación',
            'Marco teórico',
            'Hipótesis (si aplica)',
            'Metodología propuesta',
            'Cronograma',
            'Referencias'
        ],
        evaluationCriteria: [
            {
                name: 'Viabilidad',
                description: 'La metodología propuesta debe ser realizable con los recursos disponibles.'
            },
            {
                name: 'Coherencia interna',
                description: 'Debe haber congruencia entre problema, objetivos, hipótesis y metodología.'
            },
            {
                name: 'Claridad del diseño',
                description: 'El plan de trabajo debe ser comprensible y seguible.'
            }
        ],
        notes: null
    },
    {
        id: 'marco_teorico',
        name: 'Marco teórico',
        icon: '🏗️',
        description: 'Sección que establece los fundamentos conceptuales y teóricos de una investigación.',
        structureComponents: [
            'Antecedentes de investigación',
            'Bases teóricas',
            'Definición de conceptos clave',
            'Relación entre conceptos',
            'Fundamentación bibliográfica'
        ],
        evaluationCriteria: [
            {
                name: 'Pertinencia',
                description: 'Las teorías y conceptos incluidos deben ser relevantes para la investigación.'
            },
            {
                name: 'Articulación',
                description: 'Los conceptos deben estar conectados entre sí y con el problema de investigación.'
            },
            {
                name: 'Actualización',
                description: 'Las fuentes deben ser relevantes y, cuando sea posible, actualizadas.'
            }
        ],
        notes: null
    },
    {
        id: 'estado_del_arte',
        name: 'Estado del arte',
        icon: '🗺️',
        description: 'Revisión exhaustiva de la literatura existente sobre un tema de investigación.',
        structureComponents: [
            'Delimitación del tema',
            'Criterios de búsqueda',
            'Revisión de fuentes',
            'Tendencias identificadas',
            'Vacíos en la investigación',
            'Síntesis interpretativa'
        ],
        evaluationCriteria: [
            {
                name: 'Exhaustividad',
                description: 'La revisión debe cubrir las fuentes más relevantes del tema.'
            },
            {
                name: 'Organización',
                description: 'Las fuentes deben estar organizadas temática o cronológicamente.'
            },
            {
                name: 'Análisis de tendencias',
                description: 'Debe identificar patrones, coincidencias y discrepancias entre los estudios.'
            }
        ],
        notes: null
    },
    {
        id: 'reporte_practicas',
        name: 'Reporte de prácticas o laboratorio',
        icon: '🧪',
        description: 'Documento que registra los procedimientos, resultados y observaciones de una práctica experimental.',
        structureComponents: [
            'Título de la práctica',
            'Objetivo',
            'Marco teórico breve',
            'Materiales y equipo',
            'Procedimiento',
            'Resultados y datos',
            'Análisis de resultados',
            'Conclusiones',
            'Cuestionario (si aplica)'
        ],
        evaluationCriteria: [
            {
                name: 'Precisión',
                description: 'Los datos y procedimientos deben registrarse con exactitud.'
            },
            {
                name: 'Coherencia datos-conclusiones',
                description: 'Las conclusiones deben derivarse de los resultados obtenidos.'
            },
            {
                name: 'Claridad procedimental',
                description: 'El procedimiento debe ser reproducible a partir de la descripción.'
            }
        ],
        notes: null
    },
    {
        id: 'tesis',
        name: 'Tesis o proyecto de investigación',
        icon: '🎓',
        description: 'Trabajo extenso de investigación que demuestra el dominio de un tema y la capacidad investigativa del autor.',
        structureComponents: [
            'Portada',
            'Índice',
            'Resumen',
            'Introducción',
            'Planteamiento del problema',
            'Justificación',
            'Objetivos',
            'Marco teórico',
            'Marco metodológico',
            'Resultados',
            'Discusión',
            'Conclusiones',
            'Recomendaciones',
            'Referencias bibliográficas',
            'Anexos'
        ],
        evaluationCriteria: [
            {
                name: 'Coherencia integral',
                description: 'Todos los capítulos deben estar articulados entre sí.'
            },
            {
                name: 'Rigor metodológico',
                description: 'La investigación debe seguir un método sistemático y justificado.'
            },
            {
                name: 'Originalidad',
                description: 'Debe aportar conocimiento nuevo o una perspectiva original sobre el tema.'
            },
            {
                name: 'Fundamentación extensa',
                description: 'Las afirmaciones deben estar ampliamente respaldadas por la literatura.'
            }
        ],
        notes: 'Las tesis varían significativamente según la institución, el nivel académico (licenciatura, maestría, doctorado) y la disciplina.'
    },
    {
        id: 'otro',
        name: 'Otro tipo de texto',
        icon: '📄',
        description: 'Especifica el género académico y sus características particulares para una evaluación personalizada.',
        structureComponents: [],
        evaluationCriteria: [],
        notes: 'El usuario deberá describir el tipo de texto y sus requisitos específicos. El sistema aplicará criterios generales razonables basados en la descripción proporcionada.'
    }
];
const REVIEW_DIMENSIONS = [
    {
        id: 'grammar',
        name: 'Ortografía, gramática y puntuación',
        description: 'Errores ortográficos, concordancia, uso de tiempos verbales, puntuación y acentuación.',
        default: true
    },
    {
        id: 'coherence',
        name: 'Coherencia y cohesión',
        description: 'Conexión lógica entre ideas, uso de conectores, progresión temática y estructura del discurso.',
        default: true
    },
    {
        id: 'clarity',
        name: 'Claridad y precisión',
        description: 'Formulación clara de ideas, ausencia de ambigüedades y uso preciso del lenguaje.',
        default: true
    },
    {
        id: 'structure',
        name: 'Estructura del género académico',
        description: 'Presencia y adecuación de los componentes estructurales propios del tipo de texto seleccionado.',
        default: true
    },
    {
        id: 'argumentation',
        name: 'Argumentación y desarrollo de ideas',
        description: 'Solidez de los argumentos, uso de evidencias, desarrollo de ideas y fundamentación.',
        default: true
    },
    {
        id: 'comprehension',
        name: 'Comprensión del texto de referencia',
        description: 'Fidelidad a las ideas del texto fuente, interpretación correcta y diferenciación de ideas propias.',
        default: true
    },
    {
        id: 'integral',
        name: 'Retroalimentación integral',
        description: 'Evaluación completa que integra todas las dimensiones anteriores.',
        default: true
    }
];
const BRIEF_INTENTIONS = [
    {
        id: 'general',
        name: 'Revisión general',
        description: 'Revisión completa de ortografía, gramática, claridad y coherencia.'
    },
    {
        id: 'spelling',
        name: 'Ortografía y puntuación',
        description: 'Solo errores ortográficos, de acentuación y puntuación.'
    },
    {
        id: 'grammar_syntax',
        name: 'Gramática y sintaxis',
        description: 'Concordancia, tiempos verbales, orden sintáctico.'
    },
    {
        id: 'clarity_style',
        name: 'Claridad y redacción',
        description: 'Formulación de ideas, eliminación de ambigüedades y mejora de estilo.'
    },
    {
        id: 'coherence_cohesion',
        name: 'Coherencia y cohesión',
        description: 'Conexión entre ideas, uso de conectores, progresión temática.'
    },
    {
        id: 'formal',
        name: 'Registro formal',
        description: 'Adecuación del lenguaje a un contexto formal o profesional.'
    }
];
}),
"[project]/src/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ==========================================================
   ORC — Type Definitions
   ========================================================== */ /* ---- Observation Categories ---- */ __turbopack_context__.s([
    "CATEGORY_COLORS",
    ()=>CATEGORY_COLORS,
    "CATEGORY_LABELS",
    ()=>CATEGORY_LABELS,
    "CATEGORY_SHORT_LABELS",
    ()=>CATEGORY_SHORT_LABELS,
    "CONFIDENCE_LABELS",
    ()=>CONFIDENCE_LABELS,
    "PRIORITY_LABELS",
    ()=>PRIORITY_LABELS,
    "STATUS_LABELS",
    ()=>STATUS_LABELS,
    "STRUCTURE_STATUS_LABELS",
    ()=>STRUCTURE_STATUS_LABELS
]);
const CATEGORY_LABELS = {
    grammar: 'Ortografía, gramática y puntuación',
    clarity: 'Claridad, sintaxis y formulación',
    coherence: 'Coherencia, cohesión y argumentación',
    structure: 'Estructura académica',
    comprehension: 'Comprensión del documento de referencia'
};
const CATEGORY_SHORT_LABELS = {
    grammar: 'Gramática',
    clarity: 'Claridad',
    coherence: 'Coherencia',
    structure: 'Estructura',
    comprehension: 'Comprensión'
};
const CATEGORY_COLORS = {
    grammar: 'grammar',
    clarity: 'clarity',
    coherence: 'coherence',
    structure: 'structure',
    comprehension: 'comprehension'
};
const PRIORITY_LABELS = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja'
};
const CONFIDENCE_LABELS = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja'
};
const STATUS_LABELS = {
    pending: 'Pendiente',
    reviewed: 'Revisada',
    corrected: 'Corregida',
    dismissed: 'Descartada'
};
const STRUCTURE_STATUS_LABELS = {
    present: 'Presente y adecuado',
    needs_review: 'Requiere revisión',
    not_found: 'No identificado',
    not_applicable: 'No aplicable',
    needs_verification: 'Requiere verificación manual'
};
}),
];

//# sourceMappingURL=src_0p8jy9-._.js.map