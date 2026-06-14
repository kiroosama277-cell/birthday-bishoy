(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
/* ════════════════════════════
   SVG ROSE BUILDER
════════════════════════════ */ function roseSVG(cx, cy, sz, petalColor, centerColor, opacity = 1) {
    const r = sz / 2;
    const numP = 5;
    let paths = '';
    for(let i = 0; i < numP; i++){
        const angle = i / numP * 360;
        const rad = angle * Math.PI / 180;
        const px = cx + Math.cos(rad) * r * 0.55;
        const py = cy + Math.sin(rad) * r * 0.55;
        paths += `<ellipse cx="${px}" cy="${py}" rx="${r * 0.7}" ry="${r * 0.42}" fill="${petalColor}" opacity="${opacity * 0.85}" transform="rotate(${angle + 20} ${px} ${py})"/>`;
    }
    const numO = 8;
    for(let i = 0; i < numO; i++){
        const angle = i / numO * 360 + 22;
        const rad = angle * Math.PI / 180;
        const px = cx + Math.cos(rad) * r * 0.88;
        const py = cy + Math.sin(rad) * r * 0.88;
        paths += `<ellipse cx="${px}" cy="${py}" rx="${r * 0.55}" ry="${r * 0.32}" fill="${petalColor}" opacity="${opacity * 0.6}" transform="rotate(${angle} ${px} ${py})"/>`;
    }
    paths += `<circle cx="${cx}" cy="${cy}" r="${r * 0.38}" fill="${centerColor}" opacity="${opacity * 0.9}"/>`;
    paths += `<circle cx="${cx}" cy="${cy}" r="${r * 0.18}" fill="#fff" opacity="${opacity * 0.2}"/>`;
    return paths;
}
/* ════════════════════════════
   GIFT BOX SVG
════════════════════════════ */ function GiftBoxSVG() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "200",
        height: "220",
        viewBox: "0 0 200 220",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            cursor: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "100",
                cy: "210",
                rx: "70",
                ry: "8",
                fill: "#000",
                opacity: ".3"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18",
                y: "98",
                width: "164",
                height: "112",
                rx: "5",
                fill: "#7a1f1f"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18",
                y: "98",
                width: "164",
                height: "112",
                rx: "5",
                fill: "url(#bGrad)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "70",
                width: "184",
                height: "36",
                rx: "5",
                fill: "#b03030"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "70",
                width: "184",
                height: "36",
                rx: "5",
                fill: "url(#lGrad)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "90",
                y: "70",
                width: "20",
                height: "140",
                fill: "#f2c4b8",
                opacity: ".8"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "80",
                width: "184",
                height: "14",
                fill: "#f2c4b8",
                opacity: ".8"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "72",
                cy: "60",
                rx: "32",
                ry: "20",
                fill: "#e8897a",
                transform: "rotate(-22 72 60)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "72",
                cy: "60",
                rx: "22",
                ry: "13",
                fill: "#7a1f1f",
                transform: "rotate(-22 72 60)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "128",
                cy: "60",
                rx: "32",
                ry: "20",
                fill: "#e8897a",
                transform: "rotate(22 128 60)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "128",
                cy: "60",
                rx: "22",
                ry: "13",
                fill: "#7a1f1f",
                transform: "rotate(22 128 60)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "100",
                cy: "68",
                rx: "16",
                ry: "11",
                fill: "#f2c4b8"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "100",
                cy: "65",
                rx: "7",
                ry: "5",
                fill: "#fff",
                opacity: ".25"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "74",
                width: "50",
                height: "7",
                rx: "3.5",
                fill: "#fff",
                opacity: ".12"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "55",
                cy: "135",
                r: "5",
                fill: "#f2c4b8",
                opacity: ".35"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "152",
                r: "5",
                fill: "#f2c4b8",
                opacity: ".35"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "145",
                cy: "133",
                r: "5",
                fill: "#f2c4b8",
                opacity: ".35"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "42",
                cy: "168",
                r: "4",
                fill: "#f2c4b8",
                opacity: ".25"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "155",
                cy: "165",
                r: "4",
                fill: "#f2c4b8",
                opacity: ".25"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "bGrad",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#fff",
                                stopOpacity: ".08"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#000",
                                stopOpacity: ".28"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "lGrad",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#fff",
                                stopOpacity: ".2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#000",
                                stopOpacity: ".1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = GiftBoxSVG;
/* ════════════════════════════
   CURSOR SVG
════════════════════════════ */ function CursorSVG() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10,17 C4,12 1,8 1,5 C1,2.5 3,1 5.5,2.5 C7.2,3.5 9,5.8 10,7.5 C11,5.8 12.8,3.5 14.5,2.5 C17,1 19,2.5 19,5 C19,8 16,12 10,17Z",
            fill: "#e8897a",
            opacity: ".85"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c1 = CursorSVG;
/* ════════════════════════════
   DOM EFFECT HELPERS
════════════════════════════ */ function spawnEl(html, x, y, cls) {
    const el = document.createElement('div');
    el.className = cls;
    el.innerHTML = html;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 3200);
}
function boom(e, type) {
    const x = e.clientX, y = e.clientY;
    if (type === 'teddy') {
        ;
        [
            '🐻',
            '💋',
            '🐻',
            '💝',
            '🤍'
        ].forEach((s, i)=>setTimeout(()=>spawnEl(s, x + (Math.random() - .5) * 180, y + (Math.random() - .5) * 110, 'pop'), i * 130));
    }
    if (type === 'heart') {
        ;
        [
            '❤️',
            '🤍',
            '💕',
            '💗',
            '💓',
            '💞'
        ].forEach((s, i)=>setTimeout(()=>spawnEl(s, x + (Math.random() - .5) * 200, y + (Math.random() - .5) * 130, 'pop'), i * 110));
    }
    if (type === 'rose') {
        for(let i = 0; i < 6; i++)setTimeout(()=>{
            const d = document.createElement('div');
            d.className = 'pop';
            const [pc, cc] = [
                [
                    '#c0463c',
                    '#6b1a1a'
                ],
                [
                    '#e8897a',
                    '#b03030'
                ],
                [
                    '#f2c4b8',
                    '#c0463c'
                ]
            ][i % 3];
            d.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48">${roseSVG(24, 24, 40, pc, cc)}</svg>`;
            d.style.left = x + (Math.random() - .5) * 200 + 'px';
            d.style.top = y + (Math.random() - .5) * 130 + 'px';
            document.body.appendChild(d);
            setTimeout(()=>d.remove(), 3200);
        }, i * 110);
    }
    if (type === 'stars') {
        for(let i = 0; i < 22; i++){
            const s = document.createElement('div');
            s.className = 'star-p';
            const angle = i / 22 * Math.PI * 2, dist = 80 + Math.random() * 170;
            s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
        background:${[
                '#c9995a',
                '#f2c4b8',
                '#fff9f6',
                '#e8897a'
            ][i % 4]};
        width:${2 + Math.random() * 5}px;height:${2 + Math.random() * 5}px;
        animation-delay:${Math.random() * .35}s;`;
            document.body.appendChild(s);
            setTimeout(()=>s.remove(), 2000);
        }
    }
    if (type === 'moon') {
        const m = document.createElement('div');
        m.className = 'moon-p';
        m.textContent = '🌙';
        m.style.left = x - 45 + 'px';
        m.style.top = y - 55 + 'px';
        document.body.appendChild(m);
        setTimeout(()=>m.remove(), 3500);
        [
            '⭐',
            '🌟',
            '✨',
            '💫'
        ].forEach((s, i)=>setTimeout(()=>spawnEl(s, x + (Math.random() - .5) * 220, y + (Math.random() - .5) * 140, 'pop'), i * 210));
    }
    if (type === 'cake') {
        spawnEl('🎂', x - 30, y - 40, 'pop');
        [
            '🎉',
            '🎊',
            '💕',
            '✨',
            '🎈',
            '🌹'
        ].forEach((s, i)=>setTimeout(()=>spawnEl(s, x + (Math.random() - .5) * 280, y + (Math.random() - .5) * 170, 'pop'), i * 95));
    }
}
function createExplosion(x, y, colors, count = 55) {
    for(let i = 0; i < count; i++){
        const el = document.createElement('div');
        const angle = i / count * Math.PI * 2 + Math.random() * 0.8;
        const velocity = 120 + Math.random() * 320;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - Math.random() * 80;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 3 + Math.random() * 9;
        const isRect = Math.random() > 0.4;
        el.className = 'confetti-p';
        el.style.cssText = `
      left:${x}px;top:${y}px;
      width:${size}px;height:${isRect ? size * 2.5 : size}px;
      background:${color};
      border-radius:${isRect ? '2px' : '50%'};
      --dx:${dx}px;--dy:${dy}px;--rot:${(Math.random() - .5) * 1080}deg;
      animation-delay:${Math.random() * .12}s;
    `;
        document.body.appendChild(el);
        setTimeout(()=>el.remove(), 2200);
    }
}
function createFlash(color) {
    const el = document.createElement('div');
    el.className = 'reveal-flash';
    el.style.background = color;
    document.body.appendChild(el);
    requestAnimationFrame(()=>{
        el.classList.add('active');
        setTimeout(()=>{
            el.classList.remove('active');
            setTimeout(()=>el.remove(), 600);
        }, 250);
    });
}
function triggerShake() {
    const main = document.getElementById('main');
    if (main) {
        main.classList.add('screen-shake');
        setTimeout(()=>main.classList.remove('screen-shake'), 600);
    }
}
function buildBgRosesHTML(id, n, colors) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (!el) return;
    const W = el.offsetWidth || 1200;
    const H = el.offsetHeight || 900;
    let svg = `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`;
    for(let i = 0; i < n; i++){
        const [pc, cc] = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.random() * W, y = Math.random() * H;
        const sz = 60 + Math.random() * 100;
        svg += roseSVG(x, y, sz, pc, cc, 0.7 + Math.random() * .3);
    }
    svg += '</svg>';
    el.innerHTML = svg;
}
/* ════════════════════════════
   FLOATING PARTICLES
════════════════════════════ */ function FloatingParticles({ count = 15, colors = [
    '#e8897a',
    '#f2c4b8',
    '#c9995a'
], type = 'petal' }) {
    _s();
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: count
    }, {
        "FloatingParticles.useRef[particles]": (_, i)=>({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 8,
                duration: 6 + Math.random() * 10,
                size: type === 'heart' ? 10 + Math.random() * 14 : type === 'sparkle' ? 6 + Math.random() * 10 : 4 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                drift: -30 + Math.random() * 60,
                startY: Math.random() * 100
            })
    }["FloatingParticles.useRef[particles]"]));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "floating-particles",
        children: particles.current.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fp fp-${type}`,
                style: {
                    left: `${p.x}%`,
                    top: `${p.startY}%`,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    width: p.size,
                    height: p.size,
                    color: p.color,
                    '--drift': `${p.drift}px`
                },
                children: [
                    type === 'heart' && '♥',
                    type === 'sparkle' && '✦',
                    type === 'star' && '⋆'
                ]
            }, p.id, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s(FloatingParticles, "aar/C9mbVSM2dHK1yiA6OJN0lSc=");
_c2 = FloatingParticles;
/* ════════════════════════════
   SEALED REVEAL CONFIG
════════════════════════════ */ const SEAL_CONFIG = {
    gift: {
        icon: '🎁',
        color: '#e8897a',
        boomType: 'teddy',
        ringColor1: 'rgba(232,137,122,0.25)',
        ringColor2: 'rgba(201,153,90,0.15)',
        glowGradient: 'radial-gradient(circle, rgba(232,137,122,0.18) 0%, rgba(192,70,60,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(232,137,122,0.35)',
        confettiColors: [
            '#e8897a',
            '#f2c4b8',
            '#c0463c',
            '#fff9f6',
            '#c9995a'
        ],
        particles: [
            '🎀',
            '✨',
            '💝',
            '🤍',
            '✦'
        ]
    },
    heart: {
        icon: '♥',
        color: '#c0463c',
        boomType: 'heart',
        ringColor1: 'rgba(192,70,60,0.3)',
        ringColor2: 'rgba(232,137,122,0.18)',
        glowGradient: 'radial-gradient(circle, rgba(192,70,60,0.2) 0%, rgba(139,42,42,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(192,70,60,0.3)',
        confettiColors: [
            '#c0463c',
            '#e8897a',
            '#f2c4b8',
            '#8b2a2a',
            '#fff9f6'
        ],
        particles: [
            '💗',
            '💕',
            '❤️',
            '🤍',
            '♥'
        ]
    },
    rose: {
        icon: '🌹',
        color: '#e8897a',
        boomType: 'rose',
        ringColor1: 'rgba(232,137,122,0.25)',
        ringColor2: 'rgba(139,42,42,0.15)',
        glowGradient: 'radial-gradient(circle, rgba(139,42,42,0.2) 0%, rgba(107,26,26,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(232,137,122,0.3)',
        confettiColors: [
            '#8b2a2a',
            '#c0463c',
            '#e8897a',
            '#f2c4b8'
        ],
        particles: [
            '🌸',
            '🌺',
            '🌷',
            '✿',
            '❀'
        ]
    },
    star: {
        icon: '✦',
        color: '#c9995a',
        boomType: 'stars',
        ringColor1: 'rgba(201,153,90,0.3)',
        ringColor2: 'rgba(232,201,138,0.18)',
        glowGradient: 'radial-gradient(circle, rgba(201,153,90,0.22) 0%, rgba(201,153,90,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(201,153,90,0.35)',
        confettiColors: [
            '#c9995a',
            '#e8c98a',
            '#f2c4b8',
            '#fff9f6',
            '#e8897a'
        ],
        particles: [
            '⭐',
            '🌟',
            '✨',
            '💫',
            '✦'
        ]
    },
    moon: {
        icon: '🌙',
        color: '#a090b8',
        boomType: 'moon',
        ringColor1: 'rgba(160,144,184,0.25)',
        ringColor2: 'rgba(201,153,90,0.12)',
        glowGradient: 'radial-gradient(circle, rgba(160,144,184,0.18) 0%, rgba(112,112,160,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(160,144,184,0.3)',
        confettiColors: [
            '#7070a0',
            '#a090b8',
            '#c9995a',
            '#e8c98a',
            '#fff9f6'
        ],
        particles: [
            '⭐',
            '🌟',
            '✨',
            '💫',
            '🌙'
        ]
    },
    cake: {
        icon: '🎂',
        color: '#e8897a',
        boomType: 'cake',
        ringColor1: 'rgba(232,137,122,0.25)',
        ringColor2: 'rgba(201,153,90,0.18)',
        glowGradient: 'radial-gradient(circle, rgba(192,70,60,0.2) 0%, rgba(201,153,90,0.06) 40%, transparent 65%)',
        flashColor: 'rgba(232,137,122,0.35)',
        confettiColors: [
            '#c0463c',
            '#e8897a',
            '#f2c4b8',
            '#c9995a',
            '#e8c98a'
        ],
        particles: [
            '🎉',
            '🎊',
            '🎈',
            '✨',
            '🥂'
        ]
    }
};
/* ════════════════════════════
   SEALED REVEAL COMPONENT
════════════════════════════ */ function SealedReveal({ type, revealed, onReveal }) {
    _s1();
    const config = SEAL_CONFIG[type];
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            className: "sealed-reveal",
            onClick: onReveal,
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: [
                    1,
                    1.4,
                    0
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                filter: [
                    'blur(0px)',
                    'blur(0px)',
                    'blur(25px)'
                ]
            },
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-ring-container ring-outer",
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 320",
                        className: "sealed-ring-svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "160",
                                cy: "160",
                                r: "150",
                                fill: "none",
                                stroke: config.ringColor1,
                                strokeWidth: "1",
                                strokeDasharray: "12 8"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "160",
                                cy: "160",
                                r: "140",
                                fill: "none",
                                stroke: config.ringColor2,
                                strokeWidth: "0.5",
                                strokeDasharray: "3 10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this),
                            [
                                0,
                                45,
                                90,
                                135,
                                180,
                                225,
                                270,
                                315
                            ].map((angle, i)=>{
                                const rad = angle * Math.PI / 180;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 160 + Math.cos(rad) * 150,
                                    cy: 160 + Math.sin(rad) * 150,
                                    r: "2",
                                    fill: config.ringColor1
                                }, i, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 24
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 287,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-ring-container ring-inner",
                    animate: {
                        rotate: -360
                    },
                    transition: {
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 320",
                        className: "sealed-ring-svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "160",
                                cy: "160",
                                r: "110",
                                fill: "none",
                                stroke: config.ringColor2,
                                strokeWidth: "0.8",
                                strokeDasharray: "6 12"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "160",
                                cy: "160",
                                r: "100",
                                fill: "none",
                                stroke: config.ringColor1,
                                strokeWidth: "0.4",
                                strokeDasharray: "2 8"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this),
                            [
                                0,
                                60,
                                120,
                                180,
                                240,
                                300
                            ].map((angle, i)=>{
                                const rad = angle * Math.PI / 180;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 160 + Math.cos(rad) * 110,
                                    cy: 160 + Math.sin(rad) * 110,
                                    r: "1.5",
                                    fill: config.ringColor2
                                }, i, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 24
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-icon",
                    style: {
                        color: config.color
                    },
                    animate: {
                        y: [
                            0,
                            -12,
                            0
                        ],
                        scale: [
                            1,
                            1.08,
                            1
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    children: config.icon
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sealed-mini-particles",
                    children: config.particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "sealed-mini-p",
                            style: {
                                '--angle': `${i / config.particles.length * 360}deg`,
                                '--distance': `${80 + Math.random() * 40}px`,
                                color: config.color
                            },
                            animate: {
                                opacity: [
                                    0,
                                    0.7,
                                    0
                                ],
                                scale: [
                                    0.5,
                                    1,
                                    0.5
                                ],
                                rotate: [
                                    0,
                                    180
                                ]
                            },
                            transition: {
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeInOut"
                            },
                            children: p
                        }, i, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-label",
                    animate: {
                        opacity: [
                            0.3,
                            0.8,
                            0.3
                        ]
                    },
                    transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sealed-label-line"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sealed-label-text",
                            children: "اضغط بلطف ✦"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sealed-label-line"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sealed-glow",
                    style: {
                        background: config.glowGradient
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 322,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-aura",
                    style: {
                        borderColor: config.color
                    },
                    animate: {
                        scale: [
                            1,
                            1.2,
                            1
                        ],
                        opacity: [
                            0.15,
                            0,
                            0.15
                        ]
                    },
                    transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "sealed-aura sealed-aura-2",
                    style: {
                        borderColor: config.color
                    },
                    animate: {
                        scale: [
                            1,
                            1.35,
                            1
                        ],
                        opacity: [
                            0.08,
                            0,
                            0.08
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 324,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 280,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_s1(SealedReveal, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c3 = SealedReveal;
/* ════════════════════════════
   ANIMATED TEXT
════════════════════════════ */ function AnimatedText({ children, className = '', delay = 0, extraStyle, revealed = true, variant = 'slideUp' }) {
    const variants = {
        slideUp: {
            hidden: {
                opacity: 0,
                y: 50,
                filter: 'blur(6px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                y: 0,
                filter: 'blur(0px)'
            }
        },
        scaleIn: {
            hidden: {
                opacity: 0,
                scale: 0.5,
                filter: 'blur(4px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                scale: 1,
                filter: 'blur(0px)'
            }
        },
        blurIn: {
            hidden: {
                opacity: 0,
                filter: 'blur(16px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                filter: 'blur(0px)'
            }
        },
        slideLeft: {
            hidden: {
                opacity: 0,
                x: 60,
                filter: 'blur(4px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                x: 0,
                filter: 'blur(0px)'
            }
        },
        slideRight: {
            hidden: {
                opacity: 0,
                x: -60,
                filter: 'blur(4px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                x: 0,
                filter: 'blur(0px)'
            }
        },
        zoomIn: {
            hidden: {
                opacity: 0,
                scale: 2,
                filter: 'blur(10px)'
            },
            visible: {
                opacity: extraStyle?.opacity ?? 1,
                scale: 1,
                filter: 'blur(0px)'
            }
        }
    };
    const v = variants[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        className: `ln ${className}`,
        style: extraStyle,
        initial: v.hidden,
        animate: revealed ? v.visible : v.hidden,
        transition: {
            duration: 1,
            delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
_c4 = AnimatedText;
function ShimmerText({ children, className = '', extraStyle, revealed = true, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        className: `ln shimmer-text ${className}`,
        style: extraStyle,
        initial: {
            opacity: 0,
            y: 50,
            scale: 0.85
        },
        animate: revealed ? {
            opacity: 1,
            y: 0,
            scale: 1
        } : {
            opacity: 0,
            y: 50,
            scale: 0.85
        },
        transition: {
            duration: 1.4,
            delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_c5 = ShimmerText;
function RevealDivider({ revealed = true, delay = 0, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `div ${className}`,
        initial: {
            opacity: 0,
            scale: 0.3
        },
        animate: revealed ? {
            opacity: 0.4,
            scale: 1
        } : {
            opacity: 0,
            scale: 0.3
        },
        transition: {
            duration: 0.8,
            delay,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: "✦"
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_c6 = RevealDivider;
/* ════════════════════════════
   ANIMATED SECTION WRAPPER
════════════════════════════ */ function AnimatedSection({ children, className, id, bgId, onClick, particleType = 'petal', particleCount = 12, particleColors, sealType, revealed, onReveal }) {
    _s2();
    const config = SEAL_CONFIG[sealType];
    const handleReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimatedSection.useCallback[handleReveal]": (e)=>{
            createExplosion(e.clientX, e.clientY, config.confettiColors, 60);
            createFlash(config.flashColor);
            boom(e, config.boomType);
            triggerShake();
            onReveal(e);
        }
    }["AnimatedSection.useCallback[handleReveal]"], [
        config,
        onReveal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        className: `sec ${className}`,
        id: id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-roses",
                id: bgId
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticles, {
                count: particleCount,
                type: particleType,
                colors: particleColors
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "deco deco-1"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "deco deco-2"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 396,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec-glow"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            onClick && revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "czone",
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 398,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SealedReveal, {
                type: sealType,
                revealed: revealed,
                onReveal: handleReveal
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec-inner",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 393,
        columnNumber: 5
    }, this);
}
_s2(AnimatedSection, "xdVDGTUPLpvTbLdUxxsbYDcJLvE=");
_c7 = AnimatedSection;
function WaveDivider({ flip = false, color = '#0e0404' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wave-divider ${flip ? 'flip' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 120",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 408,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_c8 = WaveDivider;
function NavDots() {
    _s3();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavDots.useEffect": ()=>{
            const sections = document.querySelectorAll('.sec');
            const observer = new IntersectionObserver({
                "NavDots.useEffect": (entries)=>{
                    entries.forEach({
                        "NavDots.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const idx = Array.from(sections).indexOf(entry.target);
                                if (idx >= 0) setActive(idx);
                            }
                        }
                    }["NavDots.useEffect"]);
                }
            }["NavDots.useEffect"], {
                threshold: 0.5
            });
            sections.forEach({
                "NavDots.useEffect": (s)=>observer.observe(s)
            }["NavDots.useEffect"]);
            return ({
                "NavDots.useEffect": ()=>observer.disconnect()
            })["NavDots.useEffect"];
        }
    }["NavDots.useEffect"], []);
    const scrollTo = (idx)=>{
        document.querySelectorAll('.sec')[idx]?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nav-dots",
        children: [
            0,
            1,
            2,
            3,
            4,
            5
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `nav-dot ${active === i ? 'active' : ''}`,
                onClick: ()=>scrollTo(i),
                "aria-label": `Go to section ${i + 1}`
            }, i, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 429,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_s3(NavDots, "g0++h9M18jyb+3aelILICt47jn0=");
_c9 = NavDots;
function Home() {
    _s4();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('music');
    const [giftShaking, setGiftShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [giftOpened, setGiftOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wordVisible, setWordVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w1: false,
        w2: false,
        myb: false
    });
    const [heartDrawn, setHeartDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateVisible, setDateVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateSubVisible, setDateSubVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mainVisible, setMainVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollHintVisible, setScrollHintVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicAccepted, setMusicAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false
    });
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [musicPlaying, setMusicPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleReveal]": (sectionKey, e)=>{
            setRevealed({
                "Home.useCallback[handleReveal]": (prev)=>({
                        ...prev,
                        [sectionKey]: true
                    })
            }["Home.useCallback[handleReveal]"]);
        }
    }["Home.useCallback[handleReveal]"], []);
    // ═══ MUSIC CONSENT ═══
    const acceptMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[acceptMusic]": ()=>{
            setMusicAccepted(true);
            setMusicPlaying(true);
            setStage('gift');
        }
    }["Home.useCallback[acceptMusic]"], []);
    const declineMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[declineMusic]": ()=>{
            setMusicAccepted(false);
            setStage('gift');
        }
    }["Home.useCallback[declineMusic]"], []);
    // ═══ HTML5 AUDIO ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!musicAccepted || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            const audio = new Audio('/song.mp3');
            audio.loop = true;
            audio.volume = 0.5;
            audio.play().then({
                "Home.useEffect": ()=>{
                    setMusicPlaying(true);
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": ()=>{
                    // Autoplay blocked — user needs to interact first
                    setMusicPlaying(false);
                }
            }["Home.useEffect"]);
            audioRef.current = audio;
            return ({
                "Home.useEffect": ()=>{
                    audio.pause();
                    audioRef.current = null;
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        musicAccepted
    ]);
    const toggleMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[toggleMusic]": ()=>{
            if (!audioRef.current) return;
            if (musicPlaying) {
                audioRef.current.pause();
                setMusicPlaying(false);
            } else {
                audioRef.current.play().then({
                    "Home.useCallback[toggleMusic]": ()=>setMusicPlaying(true)
                }["Home.useCallback[toggleMusic]"]).catch({
                    "Home.useCallback[toggleMusic]": ()=>{}
                }["Home.useCallback[toggleMusic]"]);
            }
        }
    }["Home.useCallback[toggleMusic]"], [
        musicPlaying
    ]);
    // ═══ LENIS SMOOTH SCROLL ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!mainVisible) return;
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.8,
                easing: {
                    "Home.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["Home.useEffect"],
                touchMultiplier: 2,
                infinite: false
            });
            lenisRef.current = lenis;
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Home.useEffect": ()=>{
                    lenis.destroy();
                    lenisRef.current = null;
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        mainVisible
    ]);
    // ═══ CUSTOM CURSOR ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleMouseMove = {
                "Home.useEffect.handleMouseMove": (e)=>{
                    if (cursorRef.current) {
                        cursorRef.current.style.left = e.clientX - 9 + 'px';
                        cursorRef.current.style.top = e.clientY - 9 + 'px';
                    }
                }
            }["Home.useEffect.handleMouseMove"];
            document.addEventListener('mousemove', handleMouseMove);
            return ({
                "Home.useEffect": ()=>document.removeEventListener('mousemove', handleMouseMove)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // ═══ GIFT OPEN ═══
    const openGift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[openGift]": ()=>{
            if (stage !== 'gift') return;
            let s = 0;
            const doShake = {
                "Home.useCallback[openGift].doShake": ()=>{
                    setGiftShaking(true);
                    setTimeout({
                        "Home.useCallback[openGift].doShake": ()=>{
                            setGiftShaking(false);
                            s++;
                            if (s < 3) {
                                setTimeout(doShake, 220);
                            } else {
                                // Gift opens — lid flies off, then roses burst
                                setGiftOpened(true);
                                setTimeout({
                                    "Home.useCallback[openGift].doShake": ()=>setStage('roses')
                                }["Home.useCallback[openGift].doShake"], 900);
                            }
                        }
                    }["Home.useCallback[openGift].doShake"], 550);
                }
            }["Home.useCallback[openGift].doShake"];
            doShake();
        }
    }["Home.useCallback[openGift]"], [
        stage
    ]);
    // ═══ ROSE HEART — Roses build a heart shape, pulse, then dissolve ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (stage !== 'roses') return;
            const container = document.getElementById('roseCanvasContainer');
            if (!container) return;
            const W = window.innerWidth, H = window.innerHeight;
            const colors = [
                [
                    '#c0463c',
                    '#6b1a1a'
                ],
                [
                    '#e8897a',
                    '#b03030'
                ],
                [
                    '#f2c4b8',
                    '#c0463c'
                ],
                [
                    '#d4706a',
                    '#8b2a2a'
                ],
                [
                    '#e8a090',
                    '#a03030'
                ],
                [
                    '#f7d6cf',
                    '#d4706a'
                ],
                [
                    '#b83830',
                    '#5a1212'
                ],
                [
                    '#d09080',
                    '#903030'
                ]
            ];
            // ── Background: warm vignette with slow breathing glow ──
            const bgDiv = document.createElement('div');
            bgDiv.style.cssText = 'position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%, #1a0808, #0e0404);opacity:0;transition:opacity 2s ease;';
            container.appendChild(bgDiv);
            requestAnimationFrame({
                "Home.useEffect": ()=>requestAnimationFrame({
                        "Home.useEffect": ()=>{
                            bgDiv.style.opacity = '1';
                        }
                    }["Home.useEffect"])
            }["Home.useEffect"]);
            // ── Warm glow behind heart that grows as roses build ──
            const heartGlow = document.createElement('div');
            heartGlow.style.cssText = `position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;border-radius:50%;
      background:radial-gradient(circle, rgba(232,137,122,0.25) 0%, rgba(192,70,60,0.12) 35%, rgba(139,42,42,0.04) 60%, transparent 80%);
      opacity:0;transition:width 3s ease, height 3s ease, opacity 2.5s ease;pointer-events:none;`;
            container.appendChild(heartGlow);
            // Start glow after a beat
            setTimeout({
                "Home.useEffect": ()=>{
                    const glowSize = Math.min(W, H) * 0.8;
                    heartGlow.style.width = glowSize + 'px';
                    heartGlow.style.height = glowSize + 'px';
                    heartGlow.style.opacity = '1';
                }
            }["Home.useEffect"], 600);
            // Generate heart-shaped positions using parametric heart curve
            const cx = W / 2, cy = H / 2 + 10;
            const scale = Math.min(W, H) / 36 // larger heart - fills more screen
            ;
            const heartRoses = [];
            // ── Layer 1: Outline roses (the heart border) - many small roses ──
            const numOutline = 90;
            for(let i = 0; i < numOutline; i++){
                const t = i / numOutline * Math.PI * 2;
                const hx = 16 * Math.pow(Math.sin(t), 3);
                const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
                const [pc, cc] = colors[Math.floor(Math.random() * colors.length)];
                const sz = 70 + Math.random() * 90;
                const jitterX = (Math.random() - .5) * sz * 0.25;
                const jitterY = (Math.random() - .5) * sz * 0.25;
                heartRoses.push({
                    x: cx + hx * scale + jitterX,
                    y: cy + hy * scale + jitterY,
                    sz,
                    pc,
                    cc,
                    op: 0.65 + Math.random() * .3,
                    angle: Math.random() * 24 - 12,
                    layer: 2
                });
            }
            // ── Layer 2: Dense fill roses (many layers inside the heart) ──
            const numFill = 100;
            for(let i = 0; i < numFill; i++){
                const t = Math.random() * Math.PI * 2;
                const r = Math.random() * 0.85 // fill deeper into the heart
                ;
                const hx = 16 * Math.pow(Math.sin(t), 3) * r;
                const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;
                const [pc, cc] = colors[Math.floor(Math.random() * colors.length)];
                const sz = 55 + Math.random() * 95;
                heartRoses.push({
                    x: cx + hx * scale + (Math.random() - .5) * sz * 0.2,
                    y: cy + hy * scale + (Math.random() - .5) * sz * 0.2,
                    sz,
                    pc,
                    cc,
                    op: 0.5 + Math.random() * .45,
                    angle: Math.random() * 24 - 12,
                    layer: 1
                });
            }
            // ── Layer 3: Scattered accent roses around the heart (dreamy feel) ──
            const numAccent = 25;
            for(let i = 0; i < numAccent; i++){
                const t = Math.random() * Math.PI * 2;
                const r = 1.0 + Math.random() * 0.35 // just outside the heart
                ;
                const hx = 16 * Math.pow(Math.sin(t), 3) * r;
                const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;
                const [pc, cc] = colors[Math.floor(Math.random() * 3)] // lighter colors for accent
                ;
                const sz = 35 + Math.random() * 55;
                heartRoses.push({
                    x: cx + hx * scale + (Math.random() - .5) * 30,
                    y: cy + hy * scale + (Math.random() - .5) * 30,
                    sz,
                    pc,
                    cc,
                    op: 0.25 + Math.random() * .3,
                    angle: Math.random() * 40 - 20,
                    layer: 3
                });
            }
            // Sort: inner fill first, then outline, then accent — builds from inside out
            heartRoses.sort({
                "Home.useEffect": (a, b)=>a.layer - b.layer || Math.random() - 0.5
            }["Home.useEffect"]);
            // Create wrapper div for the whole heart (for pulse animation)
            const heartWrapper = document.createElement('div');
            heartWrapper.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;transition:transform 0.5s cubic-bezier(.22,1,.36,1),opacity 2s ease;';
            container.appendChild(heartWrapper);
            // Create each rose element with bloom animation
            const roseEls = [];
            heartRoses.forEach({
                "Home.useEffect": (r)=>{
                    const el = document.createElement('div');
                    const bloomDelay = r.layer === 1 ? 1.0 : r.layer === 2 ? 1.2 : 0.8;
                    el.style.cssText = `
        position:absolute;
        left:${r.x - r.sz / 2}px; top:${r.y - r.sz / 2}px;
        width:${r.sz}px; height:${r.sz}px;
        opacity:0; transform:scale(0) rotate(${r.angle + 30}deg);
        transition: opacity ${bloomDelay}s ease, transform ${bloomDelay + 0.3}s cubic-bezier(.16,1,.3,1);
        pointer-events:none; filter:drop-shadow(0 0 ${r.sz * 0.15}px ${r.pc}40);
      `;
                    el.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">${roseSVG(100, 100, 180, r.pc, r.cc, r.op)}</svg>`;
                    heartWrapper.appendChild(el);
                    roseEls.push(el);
                }
            }["Home.useEffect"]);
            // ── Phase 1: Roses bloom one by one, building the heart ──
            // Slower, more deliberate pace — each rose gets more breathing room
            roseEls.forEach({
                "Home.useEffect": (el, i)=>{
                    const delay = 400 + i * 55 + Math.random() * 30;
                    setTimeout({
                        "Home.useEffect": ()=>{
                            el.style.opacity = '1';
                            el.style.transform = `scale(1) rotate(${Math.random() * 10 - 5}deg)`;
                        }
                    }["Home.useEffect"], delay);
                }
            }["Home.useEffect"]);
            // ── Phase 2: Heart pulses (beats) — more dramatic with glow ──
            const buildDone = 400 + heartRoses.length * 55 + 1200;
            setTimeout({
                "Home.useEffect": ()=>{
                    // Intensify the glow on each pulse
                    const pulseGlow = {
                        "Home.useEffect.pulseGlow": ()=>{
                            heartGlow.style.transition = 'opacity 0.3s ease';
                            heartGlow.style.opacity = '1.5';
                            setTimeout({
                                "Home.useEffect.pulseGlow": ()=>{
                                    heartGlow.style.opacity = '1';
                                }
                            }["Home.useEffect.pulseGlow"], 300);
                        }
                    }["Home.useEffect.pulseGlow"];
                    // Pulse 1 — strong
                    heartWrapper.style.transform = 'scale(1.1)';
                    pulseGlow();
                    setTimeout({
                        "Home.useEffect": ()=>{
                            heartWrapper.style.transform = 'scale(1)';
                        }
                    }["Home.useEffect"], 400);
                    // Pulse 2 — strongest
                    setTimeout({
                        "Home.useEffect": ()=>{
                            heartWrapper.style.transform = 'scale(1.15)';
                            pulseGlow();
                        }
                    }["Home.useEffect"], 800);
                    setTimeout({
                        "Home.useEffect": ()=>{
                            heartWrapper.style.transform = 'scale(1)';
                        }
                    }["Home.useEffect"], 1200);
                    // Pulse 3 — gentle, loving
                    setTimeout({
                        "Home.useEffect": ()=>{
                            heartWrapper.style.transform = 'scale(1.06)';
                        }
                    }["Home.useEffect"], 1600);
                    setTimeout({
                        "Home.useEffect": ()=>{
                            heartWrapper.style.transform = 'scale(1)';
                        }
                    }["Home.useEffect"], 1900);
                }
            }["Home.useEffect"], buildDone);
            // ── Phase 3: Heart dissolves — petals drift gently like in the wind ──
            const pulseDone = buildDone + 2800;
            setTimeout({
                "Home.useEffect": ()=>{
                    // Each rose drifts away gently — outer ones first, then inner
                    // Reverse the array so outer (accent + outline) dissolve first
                    const dissolveOrder = [
                        ...roseEls
                    ].reverse();
                    dissolveOrder.forEach({
                        "Home.useEffect": (el, i)=>{
                            const angle = Math.random() * Math.PI * 2;
                            const driftDist = 60 + Math.random() * 160;
                            const driftX = Math.cos(angle) * driftDist;
                            const driftY = Math.sin(angle) * driftDist - 30 - Math.random() * 60 // slight upward bias
                            ;
                            const delay = i * 50 + Math.random() * 200;
                            setTimeout({
                                "Home.useEffect": ()=>{
                                    el.style.transition = 'opacity 2s ease, transform 2.5s cubic-bezier(.16,1,.3,1)';
                                    el.style.opacity = '0';
                                    el.style.transform = `scale(0.3) translate(${driftX}px, ${driftY}px) rotate(${Math.random() * 90 - 45}deg)`;
                                }
                            }["Home.useEffect"], delay);
                        }
                    }["Home.useEffect"]);
                    // Fade glow and background together
                    heartGlow.style.transition = 'opacity 2s ease 0.8s';
                    heartGlow.style.opacity = '0';
                    bgDiv.style.transition = 'opacity 2s ease 1s';
                    bgDiv.style.opacity = '0';
                    // Move to text stage after gentle dissolve
                    setTimeout({
                        "Home.useEffect": ()=>setStage('text')
                    }["Home.useEffect"], 3200);
                }
            }["Home.useEffect"], pulseDone);
        }
    }["Home.useEffect"], [
        stage
    ]);
    // ═══ STAGGER TEXT ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (stage !== 'text') return;
            const t1 = setTimeout({
                "Home.useEffect.t1": ()=>setWordVisible({
                        "Home.useEffect.t1": (v)=>({
                                ...v,
                                w1: true
                            })
                    }["Home.useEffect.t1"])
            }["Home.useEffect.t1"], 150);
            const t2 = setTimeout({
                "Home.useEffect.t2": ()=>setWordVisible({
                        "Home.useEffect.t2": (v)=>({
                                ...v,
                                w2: true
                            })
                    }["Home.useEffect.t2"])
            }["Home.useEffect.t2"], 850);
            const t3 = setTimeout({
                "Home.useEffect.t3": ()=>{
                    setWordVisible({
                        "Home.useEffect.t3": (v)=>({
                                ...v,
                                myb: true
                            })
                    }["Home.useEffect.t3"]);
                    setTimeout({
                        "Home.useEffect.t3": ()=>setHeartDrawn(true)
                    }["Home.useEffect.t3"], 350);
                }
            }["Home.useEffect.t3"], 1650);
            const t4 = setTimeout({
                "Home.useEffect.t4": ()=>setStage('date')
            }["Home.useEffect.t4"], 5800);
            return ({
                "Home.useEffect": ()=>{
                    clearTimeout(t1);
                    clearTimeout(t2);
                    clearTimeout(t3);
                    clearTimeout(t4);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        stage
    ]);
    // ═══ DATE ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (stage !== 'date') return;
            const t1 = setTimeout({
                "Home.useEffect.t1": ()=>{
                    setDateVisible(true);
                    setDateSubVisible(true);
                }
            }["Home.useEffect.t1"], 200);
            const t2 = setTimeout({
                "Home.useEffect.t2": ()=>setStage('main')
            }["Home.useEffect.t2"], 2800);
            return ({
                "Home.useEffect": ()=>{
                    clearTimeout(t1);
                    clearTimeout(t2);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        stage
    ]);
    // ═══ MAIN ═══
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (stage !== 'main') return;
            setMainVisible(true);
            setScrollHintVisible(true);
            const t = setTimeout({
                "Home.useEffect.t": ()=>setScrollHintVisible(false)
            }["Home.useEffect.t"], 7000);
            setTimeout({
                "Home.useEffect": ()=>{
                    buildBgRosesHTML('bgr1', 12, [
                        [
                            '#c0463c',
                            '#6b1a1a'
                        ],
                        [
                            '#e8897a',
                            '#b03030'
                        ]
                    ]);
                    buildBgRosesHTML('bgr2', 10, [
                        [
                            '#e8897a',
                            '#c0463c'
                        ],
                        [
                            '#f2c4b8',
                            '#e8897a'
                        ]
                    ]);
                    buildBgRosesHTML('bgr3', 14, [
                        [
                            '#8b2a2a',
                            '#3d1010'
                        ],
                        [
                            '#c0463c',
                            '#6b1a1a'
                        ]
                    ]);
                    buildBgRosesHTML('bgr4', 10, [
                        [
                            '#c9995a',
                            '#6b3a1a'
                        ],
                        [
                            '#e8c98a',
                            '#c0463c'
                        ]
                    ]);
                    buildBgRosesHTML('bgr5', 12, [
                        [
                            '#7070a0',
                            '#2a2a50'
                        ],
                        [
                            '#a090b8',
                            '#4a3060'
                        ]
                    ]);
                    buildBgRosesHTML('bgr6', 16, [
                        [
                            '#c0463c',
                            '#6b1a1a'
                        ],
                        [
                            '#e8897a',
                            '#b03030'
                        ],
                        [
                            '#c9995a',
                            '#6b3a1a'
                        ]
                    ]);
                }
            }["Home.useEffect"], 100);
            return ({
                "Home.useEffect": ()=>clearTimeout(t)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        stage
    ]);
    // ════════════════════════════
    // RENDER STAGES
    // ════════════════════════════
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "cursor",
                ref: cursorRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorSVG, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 770,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 770,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `stage ${stage !== 'music' ? 'gone' : 'entering'}`,
                id: "stMusic",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "music-consent",
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 1.2,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "music-consent-icon",
                            animate: {
                                y: [
                                    0,
                                    -8,
                                    0
                                ],
                                scale: [
                                    1,
                                    1.05,
                                    1
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            children: "🎵"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 780,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "music-consent-title",
                            children: "Allow Music?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 786,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "music-consent-desc",
                            children: "This experience is better with music"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 787,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "music-consent-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "music-btn music-accept",
                                    onClick: acceptMusic,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "music-btn-icon",
                                            children: "🎶"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 790,
                                            columnNumber: 15
                                        }, this),
                                        " Yes, play music"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "music-btn music-decline",
                                    onClick: declineMusic,
                                    children: "No, silence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 788,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 774,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 773,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `stage ${stage === 'gift' ? 'entering' : 'gone'}`,
                id: "stGift",
                style: {
                    zIndex: 500
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `gift-scene ${giftShaking ? 'shake-it' : ''} ${giftOpened ? 'gift-opened' : ''}`,
                    onClick: !giftOpened ? openGift : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gift-box-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GiftBoxSVG, {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 803,
                                    columnNumber: 13
                                }, this),
                                giftOpened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gift-lid-fly",
                                    children: "🎁"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 802,
                            columnNumber: 11
                        }, this),
                        giftOpened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gift-glow-burst"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 808,
                            columnNumber: 26
                        }, this),
                        !giftOpened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "gift-label",
                            children: "tap to open ✦"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 809,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 801,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 800,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `stage ${stage === 'music' || stage === 'gift' ? 'hidden' : stage === 'roses' ? 'entering' : 'gone'}`,
                id: "stRoses",
                style: {
                    zIndex: 500
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "roseCanvasContainer",
                    style: {
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 815,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 814,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `stage ${[
                    'music',
                    'gift',
                    'roses'
                ].includes(stage) ? 'hidden' : stage === 'text' ? 'entering' : 'gone'}`,
                id: "stText",
                style: {
                    zIndex: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `wrd ${wordVisible.w1 ? 'in' : ''}`,
                        children: "Happy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `wrd ${wordVisible.w2 ? 'in' : ''}`,
                        children: "Birthday"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 821,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `myb-row ${wordVisible.myb ? 'in' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "heart-svg-draw",
                                viewBox: "0 0 380 130",
                                preserveAspectRatio: "xMidYMid meet",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: `h-path ${heartDrawn ? 'draw' : ''}`,
                                    d: "M190,112 C100,82 16,54 16,30 C16,9 42,-4 78,14 C108,28 155,58 190,80 C225,58 272,28 302,14 C338,-4 364,9 364,30 C364,54 280,82 190,112 Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "myb-txt",
                                children: "My B"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 826,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 819,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `stage ${[
                    'music',
                    'gift',
                    'roses',
                    'text'
                ].includes(stage) ? 'hidden' : stage === 'date' ? 'entering' : 'gone'}`,
                id: "stDate",
                style: {
                    zIndex: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `date-num ${dateVisible ? 'in' : ''}`,
                        children: "June 19"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `date-sub ${dateSubVisible ? 'in' : ''}`,
                        children: "his special day"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "shint",
                className: scrollHintVisible ? 'in' : '',
                children: "scroll ↓"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            mainVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `music-toggle ${musicPlaying ? 'playing' : ''}`,
                onClick: toggleMusic,
                "aria-label": musicPlaying ? 'Pause music' : 'Play music',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    children: musicPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "6",
                                y: "4",
                                width: "4",
                                height: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 841,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "14",
                                y: "4",
                                width: "4",
                                height: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 841,
                                columnNumber: 74
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "5 3 19 12 5 21 5 3",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 841,
                        columnNumber: 125
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 840,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 839,
                columnNumber: 9
            }, this),
            mainVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavDots, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 846,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "main",
                className: mainVisible ? 'in' : '',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-1",
                        id: "s1",
                        bgId: "bgr1",
                        onClick: (e)=>boom(e, 'teddy'),
                        particleType: "petal",
                        particleCount: 18,
                        particleColors: [
                            '#e8897a',
                            '#f2c4b8',
                            '#c0463c',
                            '#fff9f6'
                        ],
                        sealType: "gift",
                        revealed: revealed.s1,
                        onReveal: (e)=>handleReveal('s1', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "hero",
                                delay: 0,
                                revealed: revealed.s1,
                                variant: "slideUp",
                                children: "“Happy Birthday, Bishoy”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.2,
                                revealed: revealed.s1,
                                variant: "slideUp",
                                children: "“Today the world celebrates you — and so do I”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.35,
                                revealed: revealed.s1,
                                variant: "slideUp",
                                children: "“But honestly? Every single day feels like your birthday to me”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 858,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.5,
                                revealed: revealed.s1,
                                variant: "slideUp",
                                children: "“Because every day with you is a gift I never want to return”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 859,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s1,
                                delay: 0.65
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.8,
                                revealed: revealed.s1,
                                variant: "blurIn",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: .4,
                                    letterSpacing: '.2em'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 861,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveDivider, {
                        color: "#f5ebe4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 864,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-2",
                        id: "s2",
                        bgId: "bgr2",
                        onClick: (e)=>boom(e, 'heart'),
                        particleType: "heart",
                        particleCount: 14,
                        particleColors: [
                            '#c0463c',
                            '#e8897a',
                            '#f2c4b8',
                            '#8b2a2a'
                        ],
                        sealType: "heart",
                        revealed: revealed.s2,
                        onReveal: (e)=>handleReveal('s2', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "hero sec2-text",
                                delay: 0,
                                revealed: revealed.s2,
                                variant: "scaleIn",
                                children: "“You didn’t just walk into my life… you became it”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.2,
                                revealed: revealed.s2,
                                variant: "scaleIn",
                                className: "sec2-text",
                                children: "“Before you, I didn’t know that someone could feel like home”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 872,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.35,
                                revealed: revealed.s2,
                                variant: "scaleIn",
                                className: "sec2-text",
                                children: "“Now I can’t imagine a single day without your voice, your laugh, your presence”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 873,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.5,
                                revealed: revealed.s2,
                                variant: "scaleIn",
                                className: "sec2-text",
                                children: "“You changed everything — quietly, deeply, forever”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s2,
                                delay: 0.65,
                                className: "sec2-div"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 875,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.8,
                                revealed: revealed.s2,
                                variant: "blurIn",
                                className: "sec2-text",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: .35,
                                    letterSpacing: '.2em'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 876,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveDivider, {
                        flip: true,
                        color: "#0e0404"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-3",
                        id: "s3",
                        bgId: "bgr3",
                        onClick: (e)=>boom(e, 'rose'),
                        particleType: "petal",
                        particleCount: 16,
                        particleColors: [
                            '#8b2a2a',
                            '#c0463c',
                            '#e8897a',
                            '#f2c4b8'
                        ],
                        sealType: "rose",
                        revealed: revealed.s3,
                        onReveal: (e)=>handleReveal('s3', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "hero",
                                delay: 0,
                                revealed: revealed.s3,
                                variant: "blurIn",
                                children: "“Every moment with you feels like home”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 886,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.2,
                                revealed: revealed.s3,
                                variant: "blurIn",
                                children: "“The small moments, the silly ones, the ones no one else would understand”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 887,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.35,
                                revealed: revealed.s3,
                                variant: "blurIn",
                                children: "“Those are my favorite chapters of my life”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 888,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.5,
                                revealed: revealed.s3,
                                variant: "blurIn",
                                children: "“And you’re the reason I love the story”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 889,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s3,
                                delay: 0.65
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 890,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.8,
                                revealed: revealed.s3,
                                variant: "blurIn",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: .4,
                                    letterSpacing: '.2em'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 882,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-4",
                        id: "s4",
                        bgId: "bgr4",
                        onClick: (e)=>boom(e, 'stars'),
                        particleType: "sparkle",
                        particleCount: 20,
                        particleColors: [
                            '#c9995a',
                            '#e8c98a',
                            '#f2c4b8',
                            '#fff9f6',
                            '#e8897a'
                        ],
                        sealType: "star",
                        revealed: revealed.s4,
                        onReveal: (e)=>handleReveal('s4', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "hero",
                                delay: 0,
                                revealed: revealed.s4,
                                variant: "slideLeft",
                                children: "“You are my favorite person in every version of every story”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 899,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.2,
                                revealed: revealed.s4,
                                variant: "slideLeft",
                                children: "“In every timeline, every lifetime, every universe —”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 900,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.35,
                                revealed: revealed.s4,
                                variant: "slideLeft",
                                children: "“I’d find you. I’d choose you.”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 901,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerText, {
                                delay: 0.5,
                                revealed: revealed.s4,
                                extraStyle: {
                                    fontSize: 'clamp(1.6rem, 4.2vw, 2.6rem)'
                                },
                                children: "“Again and again and again.”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 902,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s4,
                                delay: 0.65
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 903,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.8,
                                revealed: revealed.s4,
                                variant: "blurIn",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: .4,
                                    letterSpacing: '.2em'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 895,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-5",
                        id: "s5",
                        bgId: "bgr5",
                        onClick: (e)=>boom(e, 'moon'),
                        particleType: "star",
                        particleCount: 25,
                        particleColors: [
                            '#7070a0',
                            '#a090b8',
                            '#c9995a',
                            '#e8c98a',
                            '#fff9f6'
                        ],
                        sealType: "moon",
                        revealed: revealed.s5,
                        onReveal: (e)=>handleReveal('s5', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "moon-deco",
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: revealed.s5 ? {
                                    opacity: 0.15,
                                    scale: 1
                                } : {
                                    opacity: 0,
                                    scale: 0
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.2,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                children: "🌙"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 912,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "hero arabic",
                                delay: 0,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 914,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 0.2
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "arabic",
                                delay: 0.35,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 0.45
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 918,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "arabic",
                                delay: 0.55,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "ويكفينى من هذا العمر انى حظيت بك ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 920,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 0.65
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 921,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "arabic",
                                delay: 0.8,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "متى أذنت دهرك باللقاءِ.. كأنّي لم أوطّئ ماءَ مزنِ ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 0.9
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 924,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "arabic",
                                delay: 1.05,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "ليس في الأرض كلّها مكانٌ.. يسعني غير المكانِ الذي أنت فيه ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 926,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 1.15
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 927,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                className: "arabic",
                                delay: 1.3,
                                revealed: revealed.s5,
                                variant: "slideRight",
                                children: "يا مَن أحبّك قد كفاني.. من الدّهور وجودُ عينِك ♥"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 929,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s5,
                                delay: 1.25
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 930,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 1.4,
                                revealed: revealed.s5,
                                variant: "blurIn",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: .4,
                                    letterSpacing: '.2em'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                        className: "sec-6",
                        id: "s6",
                        bgId: "bgr6",
                        onClick: (e)=>boom(e, 'cake'),
                        particleType: "heart",
                        particleCount: 22,
                        particleColors: [
                            '#c0463c',
                            '#e8897a',
                            '#f2c4b8',
                            '#c9995a',
                            '#e8c98a'
                        ],
                        sealType: "cake",
                        revealed: revealed.s6,
                        onReveal: (e)=>handleReveal('s6', e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerText, {
                                delay: 0,
                                revealed: revealed.s6,
                                extraStyle: {
                                    fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                                    fontStyle: 'italic'
                                },
                                children: "“Here’s to you, here’s to us”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 940,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s6,
                                delay: 0.2
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 941,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.35,
                                revealed: revealed.s6,
                                variant: "zoomIn",
                                children: "“To every laugh we shared, every moment we lived”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 942,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.5,
                                revealed: revealed.s6,
                                variant: "zoomIn",
                                children: "“To all the birthdays yet to come —”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 943,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 0.65,
                                revealed: revealed.s6,
                                variant: "zoomIn",
                                children: "“may I spend every single one by your side”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 944,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealDivider, {
                                revealed: revealed.s6,
                                delay: 0.75
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 945,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerText, {
                                delay: 0.85,
                                revealed: revealed.s6,
                                extraStyle: {
                                    fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                                    fontStyle: 'italic'
                                },
                                children: "“Happy Birthday, my love”"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 946,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {
                                delay: 1.1,
                                revealed: revealed.s6,
                                variant: "blurIn",
                                extraStyle: {
                                    fontSize: '.78rem',
                                    opacity: '.4',
                                    letterSpacing: '.2em',
                                    marginTop: '.8rem'
                                },
                                children: "tap gently"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 936,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "site-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "roses",
                                children: "🌹 🌸 🌹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 951,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Made with love"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 952,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 950,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(Home, "eOEqaYt/kHSCTvIFF2qnZO0Rivo=");
_c10 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "GiftBoxSVG");
__turbopack_context__.k.register(_c1, "CursorSVG");
__turbopack_context__.k.register(_c2, "FloatingParticles");
__turbopack_context__.k.register(_c3, "SealedReveal");
__turbopack_context__.k.register(_c4, "AnimatedText");
__turbopack_context__.k.register(_c5, "ShimmerText");
__turbopack_context__.k.register(_c6, "RevealDivider");
__turbopack_context__.k.register(_c7, "AnimatedSection");
__turbopack_context__.k.register(_c8, "WaveDivider");
__turbopack_context__.k.register(_c9, "NavDots");
__turbopack_context__.k.register(_c10, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_tsx_b4090435._.js.map