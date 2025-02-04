"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inbox/page",{

/***/ "(app-pages-browser)/./app/inbox/page.tsx":
/*!****************************!*\
  !*** ./app/inbox/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InboxPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_InboxIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=InboxIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/inbox.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction EmptyState() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-border rounded-lg py-12 px-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InboxIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"w-6 h-6 text-muted-foreground\"\n                    }, void 0, false, {\n                        fileName: \"/home/project/app/inbox/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/project/app/inbox/page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-semibold text-lg mb-2\",\n                    children: \"No messages yet\"\n                }, void 0, false, {\n                    fileName: \"/home/project/app/inbox/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-muted-foreground text-sm mb-4 max-w-sm\",\n                    children: \"When you receive new messages, they'll appear here. Check back later or refresh the page.\"\n                }, void 0, false, {\n                    fileName: \"/home/project/app/inbox/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"outline\",\n                    onClick: ()=>window.location.reload(),\n                    children: \"Refresh\"\n                }, void 0, false, {\n                    fileName: \"/home/project/app/inbox/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/project/app/inbox/page.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/project/app/inbox/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = EmptyState;\nfunction InboxPage() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            try {\n                const response = await fetch(\"https://n8n-zjrvqodz.cloud-station.app/webhook/linkout_messages\");\n                if (!response.ok) throw new Error(\"Failed to fetch messages\");\n                const data = await response.json();\n                setMessages(data);\n            } catch (err) {\n                setError(err instanceof Error ? err.message : \"Failed to load messages\");\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchMessages();\n    }, []);\n    if (isLoading) return null;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-destructive p-4\",\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/project/app/inbox/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-6 max-w-4xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Unanswered messages\"\n            }, void 0, false, {\n                fileName: \"/home/project/app/inbox/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            messages.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-border rounded-lg divide-y divide-border\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"p-3 hover:bg-muted/10 transition-colors cursor-pointer\", \"flex items-start gap-4\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-sm font-medium\",\n                                children: index + 1\n                            }, void 0, false, {\n                                fileName: \"/home/project/app/inbox/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-grow min-w-0 flex items-start justify-between gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"min-w-0 flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"font-semibold truncate\",\n                                                children: message.author\n                                            }, void 0, false, {\n                                                fileName: \"/home/project/app/inbox/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-muted-foreground text-sm line-clamp-1\",\n                                                children: message.content\n                                            }, void 0, false, {\n                                                fileName: \"/home/project/app/inbox/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/project/app/inbox/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    message.category && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-shrink-0 rounded-md bg-muted/10 px-2 py-1 text-xs\",\n                                        children: message.category\n                                    }, void 0, false, {\n                                        fileName: \"/home/project/app/inbox/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/project/app/inbox/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, message.id, true, {\n                        fileName: \"/home/project/app/inbox/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/project/app/inbox/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyState, {}, void 0, false, {\n                fileName: \"/home/project/app/inbox/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/project/app/inbox/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(InboxPage, \"z/FQrXW3+csgdxGmk3BMVQPodpA=\");\n_c1 = InboxPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"EmptyState\");\n$RefreshReg$(_c1, \"InboxPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pbmJveC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDUTtBQUNPO0FBQ0o7QUFVNUMsU0FBU0s7SUFDUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTixxRkFBU0E7d0JBQUNNLFdBQVU7Ozs7Ozs7Ozs7OzhCQUV2Qiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTZCOzs7Ozs7OEJBQzNDLDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBOEM7Ozs7Ozs4QkFHM0QsOERBQUNMLHlEQUFNQTtvQkFBQ1EsU0FBUTtvQkFBVUMsU0FBUyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07OEJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNFO0tBakJTVDtBQW1CTSxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFnQjtJQUVsREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07Z0JBQ2xDLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENYLFlBQVlVO1lBQ2QsRUFBRSxPQUFPRSxLQUFLO2dCQUNaUixTQUFTUSxlQUFlSCxRQUFRRyxJQUFJQyxPQUFPLEdBQUc7WUFDaEQsU0FBVTtnQkFDUlgsYUFBYTtZQUNmO1FBQ0Y7UUFFQUc7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJSixXQUFXLE9BQU87SUFDdEIsSUFBSUUsT0FBTyxxQkFBTyw4REFBQ2Q7UUFBSUMsV0FBVTtrQkFBd0JhOzs7Ozs7SUFFekQscUJBQ0UsOERBQUNkO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDd0I7Z0JBQUd4QixXQUFVOzBCQUEwQjs7Ozs7O1lBQ3ZDUyxTQUFTZ0IsTUFBTSxHQUFHLGtCQUNqQiw4REFBQzFCO2dCQUFJQyxXQUFVOzBCQUNaUyxTQUFTaUIsR0FBRyxDQUFDLENBQUNILFNBQVNJLHNCQUN0Qiw4REFBQzVCO3dCQUVDQyxXQUFXUCw4Q0FBRUEsQ0FDWCwwREFDQTs7MENBR0YsOERBQUNNO2dDQUFJQyxXQUFVOzBDQUNaMkIsUUFBUTs7Ozs7OzBDQUVYLDhEQUFDNUI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNDO2dEQUFHRCxXQUFVOzBEQUEwQnVCLFFBQVFLLE1BQU07Ozs7OzswREFDdEQsOERBQUMxQjtnREFBRUYsV0FBVTswREFDVnVCLFFBQVFNLE9BQU87Ozs7Ozs7Ozs7OztvQ0FHbkJOLFFBQVFPLFFBQVEsa0JBQ2YsOERBQUMvQjt3Q0FBSUMsV0FBVTtrREFDWnVCLFFBQVFPLFFBQVE7Ozs7Ozs7Ozs7Ozs7dUJBbEJsQlAsUUFBUVEsRUFBRTs7Ozs7Ozs7O3FDQTBCckIsOERBQUNqQzs7Ozs7Ozs7Ozs7QUFJVDtHQTlEd0JVO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9pbmJveC9wYWdlLnRzeD8xYWNmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEluYm94SWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgbGFzdFVwZGF0ZWQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gRW1wdHlTdGF0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQtbGcgcHktMTIgcHgtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctbXV0ZWQvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgIDxJbmJveEljb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi0yXCI+Tm8gbWVzc2FnZXMgeWV0PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gbWItNCBtYXgtdy1zbVwiPlxuICAgICAgICAgIFdoZW4geW91IHJlY2VpdmUgbmV3IG1lc3NhZ2VzLCB0aGV5J2xsIGFwcGVhciBoZXJlLiBDaGVjayBiYWNrIGxhdGVyIG9yIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0+XG4gICAgICAgICAgUmVmcmVzaFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmJveFBhZ2UoKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL244bi16anJ2cW9kei5jbG91ZC1zdGF0aW9uLmFwcC93ZWJob29rL2xpbmtvdXRfbWVzc2FnZXMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TWVzc2FnZXMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9hZCBtZXNzYWdlcycpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hNZXNzYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kZXN0cnVjdGl2ZSBwLTRcIj57ZXJyb3J9PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS02IG1heC13LTR4bFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+VW5hbnN3ZXJlZCBtZXNzYWdlczwvaDE+XG4gICAgICB7bWVzc2FnZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkLWxnIGRpdmlkZS15IGRpdmlkZS1ib3JkZXJcIj5cbiAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwicC0zIGhvdmVyOmJnLW11dGVkLzEwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNyBoLTcgcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG1pbi13LTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTAgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0cnVuY2F0ZVwiPnttZXNzYWdlLmF1dGhvcn08L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc20gbGluZS1jbGFtcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuY2F0ZWdvcnkgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHJvdW5kZWQtbWQgYmctbXV0ZWQvMTAgcHgtMiBweS0xIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxFbXB0eVN0YXRlIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNuIiwiSW5ib3hJY29uIiwiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFbXB0eVN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkluYm94UGFnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hNZXNzYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnIiLCJtZXNzYWdlIiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImF1dGhvciIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/inbox/page.tsx\n"));

/***/ })

});