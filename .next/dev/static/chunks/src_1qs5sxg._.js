(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/workspace/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/genres.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function WorkspacePage() {
    _s();
    // ── Text & file
    const [studentText, setStudentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [referenceText, setReferenceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileWarnings, setFileWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [refFileWarnings, setRefFileWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ── Genre & config
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customGenreName, setCustomGenreName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customGenreDesc, setCustomGenreDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].filter({
        "WorkspacePage.useState": (d)=>d.default
    }["WorkspacePage.useState"]).map({
        "WorkspacePage.useState": (d)=>d.id
    }["WorkspacePage.useState"]));
    // ── UI state
    const [panelTab, setPanelTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('config');
    const [analyzing, setAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRefSection, setShowRefSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Results
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeObsId, setActiveObsId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [observationStatuses, setObservationStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [categoryFilters, setCategoryFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        'grammar',
        'clarity',
        'coherence',
        'structure',
        'comprehension'
    ]));
    const [priorityFilter, setPriorityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const highlightRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── File upload
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspacePage.useCallback[handleFileUpload]": async (file, setter, warnSetter)=>{
            const formData = new FormData();
            formData.append('file', file);
            try {
                const res = await fetch('/api/extract', {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (!res.ok) {
                    setError(data.error || 'Error al extraer el texto.');
                    return;
                }
                setter(data.text);
                warnSetter(data.warnings || []);
            } catch  {
                setError('Error de conexión al procesar el archivo.');
            }
        }
    }["WorkspacePage.useCallback[handleFileUpload]"], []);
    // ── Toggle dimension
    const toggleDimension = (id)=>{
        setDimensions((prev)=>{
            const next = prev.includes(id) ? prev.filter((d)=>d !== id) : [
                ...prev,
                id
            ];
            return next;
        });
    };
    // ── Run analysis
    const runAnalysis = async ()=>{
        if (!studentText.trim() || !selectedGenre) return;
        setAnalyzing(true);
        setError(null);
        setResult(null);
        setActiveObsId(null);
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
                return;
            }
            setResult(data);
            const map = {};
            data.observations.forEach((o)=>{
                map[o.id] = 'pending';
            });
            setObservationStatuses(map);
            setPanelTab('obs');
        } catch  {
            setError('Error de conexión al servidor.');
        } finally{
            setAnalyzing(false);
        }
    };
    // ── Filtered observations
    const filteredObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[filteredObs]": ()=>{
            if (!result) return [];
            return result.observations.filter({
                "WorkspacePage.useMemo[filteredObs]": (obs)=>{
                    if (!categoryFilters.has(obs.category)) return false;
                    if (priorityFilter !== 'all' && obs.priority !== priorityFilter) return false;
                    return true;
                }
            }["WorkspacePage.useMemo[filteredObs]"]);
        }
    }["WorkspacePage.useMemo[filteredObs]"], [
        result,
        categoryFilters,
        priorityFilter
    ]);
    const matchedObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[matchedObs]": ()=>filteredObs.filter({
                "WorkspacePage.useMemo[matchedObs]": (o)=>o.start >= 0 && o.end >= 0
            }["WorkspacePage.useMemo[matchedObs]"])
    }["WorkspacePage.useMemo[matchedObs]"], [
        filteredObs
    ]);
    const unmatchedObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[unmatchedObs]": ()=>filteredObs.filter({
                "WorkspacePage.useMemo[unmatchedObs]": (o)=>o.start < 0 || o.end < 0
            }["WorkspacePage.useMemo[unmatchedObs]"])
    }["WorkspacePage.useMemo[unmatchedObs]"], [
        filteredObs
    ]);
    const activeObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[activeObs]": ()=>result?.observations.find({
                "WorkspacePage.useMemo[activeObs]": (o)=>o.id === activeObsId
            }["WorkspacePage.useMemo[activeObs]"]) || null
    }["WorkspacePage.useMemo[activeObs]"], [
        result,
        activeObsId
    ]);
    const currentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[currentIndex]": ()=>filteredObs.findIndex({
                "WorkspacePage.useMemo[currentIndex]": (o)=>o.id === activeObsId
            }["WorkspacePage.useMemo[currentIndex]"])
    }["WorkspacePage.useMemo[currentIndex]"], [
        filteredObs,
        activeObsId
    ]);
    const goToObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkspacePage.useCallback[goToObs]": (dir)=>{
            if (!filteredObs.length) return;
            let idx = currentIndex;
            if (dir === 'next') idx = idx < filteredObs.length - 1 ? idx + 1 : 0;
            else idx = idx > 0 ? idx - 1 : filteredObs.length - 1;
            const obs = filteredObs[idx];
            setActiveObsId(obs.id);
            highlightRefs.current.get(obs.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }["WorkspacePage.useCallback[goToObs]"], [
        filteredObs,
        currentIndex
    ]);
    const updateStatus = (id, status)=>{
        setObservationStatuses((prev)=>({
                ...prev,
                [id]: status
            }));
    };
    const toggleCategory = (cat)=>{
        setCategoryFilters((prev)=>{
            const next = new Set(prev);
            next.has(cat) ? next.delete(cat) : next.add(cat);
            return next;
        });
    };
    // ── Build highlighted segments
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkspacePage.useMemo[segments]": ()=>{
            if (!result || matchedObs.length === 0) {
                return [
                    {
                        text: studentText,
                        observations: [],
                        start: 0
                    }
                ];
            }
            const sorted = [
                ...matchedObs
            ].sort({
                "WorkspacePage.useMemo[segments].sorted": (a, b)=>a.start - b.start || a.end - b.end
            }["WorkspacePage.useMemo[segments].sorted"]);
            const points = new Set([
                0,
                studentText.length
            ]);
            sorted.forEach({
                "WorkspacePage.useMemo[segments]": (o)=>{
                    if (o.start >= 0 && o.start <= studentText.length) points.add(o.start);
                    if (o.end >= 0 && o.end <= studentText.length) points.add(o.end);
                }
            }["WorkspacePage.useMemo[segments]"]);
            const pts = Array.from(points).sort({
                "WorkspacePage.useMemo[segments].pts": (a, b)=>a - b
            }["WorkspacePage.useMemo[segments].pts"]);
            return pts.slice(0, -1).map({
                "WorkspacePage.useMemo[segments]": (segStart, i)=>{
                    const segEnd = pts[i + 1];
                    return {
                        text: studentText.substring(segStart, segEnd),
                        observations: sorted.filter({
                            "WorkspacePage.useMemo[segments]": (o)=>o.start < segEnd && o.end > segStart
                        }["WorkspacePage.useMemo[segments]"]),
                        start: segStart
                    };
                }
            }["WorkspacePage.useMemo[segments]"]);
        }
    }["WorkspacePage.useMemo[segments]"], [
        studentText,
        matchedObs,
        result
    ]);
    // keyboard nav
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkspacePage.useEffect": ()=>{
            const handler = {
                "WorkspacePage.useEffect.handler": (e)=>{
                    if (e.target.tagName === 'TEXTAREA') return;
                    if (e.key === 'ArrowRight') goToObs('next');
                    if (e.key === 'ArrowLeft') goToObs('prev');
                    if (e.key === 'Escape') setActiveObsId(null);
                }
            }["WorkspacePage.useEffect.handler"];
            window.addEventListener('keydown', handler);
            return ({
                "WorkspacePage.useEffect": ()=>window.removeEventListener('keydown', handler)
            })["WorkspacePage.useEffect"];
        }
    }["WorkspacePage.useEffect"], [
        goToObs
    ]);
    const reviewedCount = Object.values(observationStatuses).filter((s)=>s === 'reviewed' || s === 'corrected' || s === 'dismissed').length;
    const canAnalyze = studentText.trim().length > 0 && selectedGenre !== null && !analyzing;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "workspace",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar__brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "topbar__logo",
                                children: "Revisión Académica"
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "topbar__sep"
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "topbar__subtitle",
                                children: "Revisión académica"
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar__center",
                        children: result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "topbar__stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "topbar__stat",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "topbar__stat-dot topbar__stat-dot--total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        result.observations.length,
                                        " observaciones"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "topbar__stat",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "topbar__stat-dot topbar__stat-dot--done"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        reviewedCount,
                                        " revisadas"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/workspace/page.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar__actions",
                        children: [
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "topbar__btn",
                                onClick: ()=>{
                                    setResult(null);
                                    setActiveObsId(null);
                                    setPanelTab('config');
                                },
                                children: "Nueva revisión"
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `topbar__btn topbar__btn--primary ${canAnalyze ? '' : 'topbar__btn--disabled'}`,
                                onClick: runAnalysis,
                                disabled: !canAnalyze,
                                id: "btn-analyze",
                                children: analyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "topbar__spinner"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        " Analizando…"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this) : 'Revisar texto'
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/workspace/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "workspace__error",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "⚠ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "workspace__error-close",
                        onClick: ()=>setError(null),
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/workspace/page.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "workspace__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "editor-pane",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor-pane__toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editor-pane__label",
                                        children: selectedGenre ? `${selectedGenre.name}` : 'Documento sin tipo seleccionado'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "editor-pane__count",
                                        children: [
                                            studentText.length.toLocaleString(),
                                            " caracteres"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "editor-pane__file-btn",
                                        title: "Cargar archivo DOCX, PDF o TXT",
                                        children: [
                                            "Cargar archivo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".docx,.pdf,.txt",
                                                style: {
                                                    display: 'none'
                                                },
                                                onChange: (e)=>{
                                                    const f = e.target.files?.[0];
                                                    if (f) handleFileUpload(f, setStudentText, setFileWarnings);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            fileWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor-pane__warnings",
                                children: fileWarnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "editor-warn",
                                        children: w
                                    }, i, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 43
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor-pane__highlighted",
                                id: "highlighted-text",
                                children: [
                                    segments.map((seg, i)=>{
                                        if (seg.observations.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: seg.text
                                        }, i, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 59
                                        }, this);
                                        const primary = seg.observations.sort((a, b)=>[
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                            ref: (el)=>{
                                                if (el) seg.observations.forEach((o)=>highlightRefs.current.set(o.id, el));
                                            },
                                            className: [
                                                'hlmark',
                                                `hlmark--${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][primary.category]}`,
                                                isActive ? 'hlmark--active' : '',
                                                isReviewed ? 'hlmark--reviewed' : ''
                                            ].join(' '),
                                            onClick: ()=>{
                                                setActiveObsId(primary.id);
                                                setPanelTab('obs');
                                            },
                                            title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][primary.category]}: ${primary.explanation.substring(0, 80)}`,
                                            role: "button",
                                            tabIndex: 0,
                                            children: seg.text
                                        }, i, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    unmatchedObs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "unmatched-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "unmatched-section__title",
                                                children: "Observaciones generales (sin fragmento exacto)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            unmatchedObs.map((obs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `unmatched-item ${activeObsId === obs.id ? 'unmatched-item--active' : ''}`,
                                                    onClick: ()=>{
                                                        setActiveObsId(obs.id);
                                                        setPanelTab('obs');
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `unmatched-item__dot unmatched-item__dot--${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][obs.category]}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "unmatched-item__fragment",
                                                            children: obs.originalFragment || 'Observación general'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "unmatched-item__expl",
                                                            children: [
                                                                obs.explanation.substring(0, 80),
                                                                "…"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, obs.id, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: editorRef,
                                className: "editor-pane__textarea",
                                value: studentText,
                                onChange: (e)=>setStudentText(e.target.value),
                                placeholder: "Escribe o pega aquí tu texto académico…",
                                id: "student-text-input",
                                spellCheck: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor-pane__edit-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "editor-pane__edit-btn",
                                        onClick: ()=>{
                                            setResult(null);
                                            setActiveObsId(null);
                                            setPanelTab('config');
                                        },
                                        children: "✏ Editar texto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "editor-pane__edit-btn",
                                        onClick: runAnalysis,
                                        disabled: analyzing,
                                        children: "↺ Re-evaluar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "side-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-panel__tabs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `side-panel__tab ${panelTab === 'config' ? 'side-panel__tab--active' : ''}`,
                                        onClick: ()=>setPanelTab('config'),
                                        id: "panel-tab-config",
                                        children: "Configuración"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `side-panel__tab ${panelTab === 'obs' ? 'side-panel__tab--active' : ''} ${!result ? 'side-panel__tab--disabled' : ''}`,
                                        onClick: ()=>result && setPanelTab('obs'),
                                        id: "panel-tab-obs",
                                        children: [
                                            "Observaciones ",
                                            result ? `(${filteredObs.length})` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `side-panel__tab ${panelTab === 'feedback' ? 'side-panel__tab--active' : ''} ${!result ? 'side-panel__tab--disabled' : ''}`,
                                        onClick: ()=>result && setPanelTab('feedback'),
                                        id: "panel-tab-feedback",
                                        children: "Retroalimentación"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    result?.structureComponents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `side-panel__tab ${panelTab === 'structure' ? 'side-panel__tab--active' : ''}`,
                                        onClick: ()=>setPanelTab('structure'),
                                        id: "panel-tab-structure",
                                        children: "Estructura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            panelTab === 'config' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-panel__body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "cfg-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cfg-section__label",
                                                children: "Tipo de texto académico"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "genre-list",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACADEMIC_GENRES"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `genre-row ${selectedGenre?.id === g.id ? 'genre-row--active' : ''}`,
                                                        onClick: ()=>setSelectedGenre(g),
                                                        id: `genre-${g.id}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "genre-row__icon",
                                                                children: g.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "genre-row__name",
                                                                children: g.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, g.id, true, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            selectedGenre?.id === 'otro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cfg-custom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "cfg-input",
                                                        type: "text",
                                                        value: customGenreName,
                                                        onChange: (e)=>setCustomGenreName(e.target.value),
                                                        placeholder: "Nombre del género…",
                                                        id: "custom-genre-name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "cfg-input cfg-input--ta",
                                                        value: customGenreDesc,
                                                        onChange: (e)=>setCustomGenreDesc(e.target.value),
                                                        placeholder: "Características principales (opcional)…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cfg-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "cfg-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cfg-section__label",
                                                children: "Dimensiones de revisión"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dim-list",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$genres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_DIMENSIONS"].map((dim)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "dim-row",
                                                        htmlFor: `dim-${dim.id}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                id: `dim-${dim.id}`,
                                                                className: "dim-row__check",
                                                                checked: dimensions.includes(dim.id),
                                                                onChange: ()=>toggleDimension(dim.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "dim-row__info",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "dim-row__name",
                                                                        children: dim.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                                        lineNumber: 461,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "dim-row__desc",
                                                                        children: dim.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                                        lineNumber: 462,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, dim.id, true, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cfg-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "cfg-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cfg-toggle",
                                                onClick: ()=>setShowRefSection(!showRefSection),
                                                id: "toggle-reference",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Documento de referencia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cfg-toggle__icon",
                                                        children: showRefSection ? '▲' : '▼'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 17
                                            }, this),
                                            showRefSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cfg-ref",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "cfg-ref__hint",
                                                        children: "Adjunta la lectura base de tu trabajo para evaluar comprensión lectora. Es opcional."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "cfg-file-btn",
                                                        children: [
                                                            "Cargar archivo de referencia",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: ".docx,.pdf,.txt",
                                                                style: {
                                                                    display: 'none'
                                                                },
                                                                onChange: (e)=>{
                                                                    const f = e.target.files?.[0];
                                                                    if (f) handleFileUpload(f, setReferenceText, setRefFileWarnings);
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "cfg-input cfg-input--ta",
                                                        value: referenceText,
                                                        onChange: (e)=>setReferenceText(e.target.value),
                                                        placeholder: "O pega aquí el texto de referencia…",
                                                        style: {
                                                            minHeight: '120px',
                                                            marginTop: '8px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 21
                                                    }, this),
                                                    referenceText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cfg-ref__count",
                                                        children: [
                                                            referenceText.length.toLocaleString(),
                                                            " caracteres"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/workspace/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 23
                                                    }, this),
                                                    refFileWarnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "editor-warn",
                                                            style: {
                                                                marginTop: '6px'
                                                            },
                                                            children: w
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cfg-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "cfg-section",
                                        children: [
                                            !selectedGenre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cfg-hint",
                                                children: "Selecciona un tipo de texto para continuar."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 19
                                            }, this),
                                            !studentText.trim() && selectedGenre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "cfg-hint",
                                                children: "Escribe o carga el texto a revisar."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cfg-analyze-btn",
                                                onClick: runAnalysis,
                                                disabled: !canAnalyze,
                                                id: "btn-analyze-panel",
                                                children: analyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "topbar__spinner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Analizando…"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 21
                                                }, this) : 'Iniciar revisión'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            panelTab === 'obs' && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-panel__body side-panel__body--obs",
                                children: activeObs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-detail",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-detail__header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `obs-badge obs-badge--${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][activeObs.category]}`,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][activeObs.category]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-detail__nav",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "obs-nav-btn",
                                                            onClick: ()=>goToObs('prev'),
                                                            children: "←"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "obs-detail__counter",
                                                            children: [
                                                                currentIndex + 1,
                                                                " / ",
                                                                filteredObs.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "obs-nav-btn",
                                                            onClick: ()=>goToObs('next'),
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "obs-nav-btn",
                                                            onClick: ()=>setActiveObsId(null),
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Fragmento"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__fragment",
                                                    children: [
                                                        '"',
                                                        activeObs.originalFragment,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Observación"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__text",
                                                    children: activeObs.explanation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 19
                                        }, this),
                                        activeObs.rule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Regla aplicada"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__text",
                                                    children: activeObs.rule
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 21
                                        }, this),
                                        activeObs.contextReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "¿Por qué aquí?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__text",
                                                    children: activeObs.contextReason
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 21
                                        }, this),
                                        activeObs.suggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Sugerencia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__text",
                                                    children: activeObs.suggestion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 589,
                                            columnNumber: 21
                                        }, this),
                                        activeObs.exampleCorrection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Posible corrección"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__correction",
                                                    children: [
                                                        "→ ",
                                                        activeObs.exampleCorrection
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 21
                                        }, this),
                                        activeObs.reflectionQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__label",
                                                    children: "Para reflexionar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "obs-field__reflection",
                                                    children: [
                                                        "💭 ",
                                                        activeObs.reflectionQuestion
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `obs-meta__item obs-meta__item--priority-${activeObs.priority}`,
                                                    children: [
                                                        "Prioridad: ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][activeObs.priority]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "obs-meta__item",
                                                    children: [
                                                        "Confianza: ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIDENCE_LABELS"][activeObs.confidence]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-actions",
                                            children: [
                                                'reviewed',
                                                'corrected',
                                                'dismissed'
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `obs-action-btn ${observationStatuses[activeObs.id] === s ? 'obs-action-btn--active' : ''}`,
                                                    onClick: ()=>updateStatus(activeObs.id, s),
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_LABELS"][s]
                                                }, s, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 17
                                }, this) : /* Observation list */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "obs-list-pane",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-filters",
                                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"]).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `obs-filter-btn ${categoryFilters.has(cat) ? 'obs-filter-btn--active' : ''}`,
                                                    onClick: ()=>toggleCategory(cat),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "obs-filter-dot",
                                                            style: {
                                                                background: `var(--hl-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][cat]}-solid)`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 25
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_SHORT_LABELS"][cat]
                                                    ]
                                                }, cat, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-priority-filters",
                                            children: [
                                                'all',
                                                'high',
                                                'medium',
                                                'low'
                                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `obs-pri-btn ${priorityFilter === p ? 'obs-pri-btn--active' : ''}`,
                                                    onClick: ()=>setPriorityFilter(p),
                                                    children: p === 'all' ? 'Todas' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][p]
                                                }, p, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 19
                                        }, this),
                                        filteredObs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-empty",
                                            children: "Sin observaciones en los filtros seleccionados."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 667,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "obs-items",
                                            children: filteredObs.map((obs)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `obs-item ${activeObsId === obs.id ? 'obs-item--active' : ''} ${observationStatuses[obs.id] !== 'pending' ? 'obs-item--done' : ''}`,
                                                    onClick: ()=>{
                                                        setActiveObsId(obs.id);
                                                        highlightRefs.current.get(obs.id)?.scrollIntoView({
                                                            behavior: 'smooth',
                                                            block: 'center'
                                                        });
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "obs-item__bar",
                                                            style: {
                                                                background: `var(--hl-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][obs.category]}-solid)`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "obs-item__body",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "obs-item__fragment",
                                                                    children: [
                                                                        '"',
                                                                        obs.originalFragment.substring(0, 50),
                                                                        obs.originalFragment.length > 50 ? '…' : '',
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "obs-item__expl",
                                                                    children: [
                                                                        obs.explanation.substring(0, 90),
                                                                        obs.explanation.length > 90 ? '…' : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `obs-item__priority obs-item__priority--${obs.priority}`,
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_LABELS"][obs.priority]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/workspace/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, obs.id, true, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 636,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            panelTab === 'feedback' && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-panel__body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Valoración general"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__text",
                                                children: result.generalFeedback.overallAssessment
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this),
                                    result.generalFeedback.strengths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Fortalezas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this),
                                            result.generalFeedback.strengths.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fb-item fb-item--strength",
                                                    children: s
                                                }, i, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 17
                                    }, this),
                                    result.generalFeedback.priorityIssues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Problemas prioritarios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 720,
                                                columnNumber: 19
                                            }, this),
                                            result.generalFeedback.priorityIssues.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fb-item fb-item--issue",
                                                    children: p
                                                }, i, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 719,
                                        columnNumber: 17
                                    }, this),
                                    result.generalFeedback.recommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Recomendaciones"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 728,
                                                columnNumber: 19
                                            }, this),
                                            result.generalFeedback.recommendations.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fb-item",
                                                    children: r
                                                }, i, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 727,
                                        columnNumber: 17
                                    }, this),
                                    result.generalFeedback.nextSteps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Próximos pasos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 736,
                                                columnNumber: 19
                                            }, this),
                                            result.generalFeedback.nextSteps.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fb-item",
                                                    children: n
                                                }, i, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this),
                                    result.generalFeedback.readingComprehension && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Comprensión lectora"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__text",
                                                children: result.generalFeedback.readingComprehension
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 17
                                    }, this),
                                    result.generalFeedback.limitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fb-block fb-block--warn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fb-block__title",
                                                children: "Limitaciones"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/workspace/page.tsx",
                                                lineNumber: 750,
                                                columnNumber: 19
                                            }, this),
                                            result.generalFeedback.limitations.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fb-item",
                                                    children: l
                                                }, i, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/workspace/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this),
                            panelTab === 'structure' && result?.structureComponents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-panel__body",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "struct-table",
                                    children: result.structureComponents.map((comp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "struct-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "struct-row__name",
                                                    children: comp.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `struct-badge struct-badge--${comp.status === 'present' ? 'ok' : comp.status === 'needs_review' ? 'warn' : comp.status === 'not_found' ? 'missing' : 'na'}`,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRUCTURE_STATUS_LABELS"][comp.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "struct-row__obs",
                                                    children: comp.observation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 21
                                                }, this),
                                                comp.recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "struct-row__rec",
                                                    children: comp.recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/workspace/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/workspace/page.tsx",
                                            lineNumber: 764,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/workspace/page.tsx",
                                    lineNumber: 762,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/workspace/page.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/workspace/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/workspace/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/workspace/page.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(WorkspacePage, "9XHKPS5vJaICeROk2iFuowfau+A=");
_c = WorkspacePage;
var _c;
__turbopack_context__.k.register(_c, "WorkspacePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/genres.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1qs5sxg._.js.map