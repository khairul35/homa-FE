"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/organization-setting/page",{

/***/ "(app-pages-browser)/./app/components/notification/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/notification/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Notification.tsx\n\nvar _s = $RefreshSig$();\n\nconst Notification = (param)=>{\n    let { message, type } = param;\n    _s();\n    const [showNotification, setShowNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setShowNotification(true);\n        const timeout = setTimeout(()=>{\n            setShowNotification(false);\n        }, 5000);\n        return ()=>clearTimeout(timeout);\n    }, [\n        message\n    ]);\n    let bgColor = \"\";\n    switch(type){\n        case \"success\":\n            bgColor = \"bg-green-500\";\n            break;\n        case \"error\":\n            bgColor = \"bg-red-500\";\n            break;\n        case \"loading\":\n            bgColor = \"bg-blue-500\";\n            break;\n        default:\n            bgColor = \"bg-gray-800\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(showNotification ? \"fixed bottom-5 right-5\" : \"hidden\", \" \").concat(bgColor, \" text-white px-4 py-2 rounded-md shadow-md\"),\n        children: message\n    }, void 0, false, {\n        fileName: \"/Users/dev/homa-FE/app/components/notification/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Notification, \"dtWb82bT/HR86rWZO5vsMFvqCM0=\");\n_c = Notification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\nvar _c;\n$RefreshReg$(_c, \"Notification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhCQUE4Qjs7O0FBRWM7QUFTNUMsTUFBTUUsZUFBNEM7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRTs7SUFDbEUsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6REMsZ0RBQVNBLENBQUM7UUFDUkssb0JBQW9CO1FBRXBCLE1BQU1DLFVBQVVDLFdBQVc7WUFDekJGLG9CQUFvQjtRQUN0QixHQUFHO1FBRUgsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHO1FBQUNKO0tBQVE7SUFFWixJQUFJTyxVQUFVO0lBQ2QsT0FBUU47UUFDTixLQUFLO1lBQ0hNLFVBQVU7WUFDVjtRQUNGLEtBQUs7WUFDSEEsVUFBVTtZQUNWO1FBQ0YsS0FBSztZQUNIQSxVQUFVO1lBQ1Y7UUFDRjtZQUNFQSxVQUFVO1lBQ1Y7SUFDSjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLEdBRVBGLE9BREZMLG1CQUFtQiwyQkFBMkIsVUFDL0MsS0FBVyxPQUFSSyxTQUFRO2tCQUVYUDs7Ozs7O0FBR1A7R0F0Q01EO0tBQUFBO0FBd0NOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9pbmRleC50c3g/YjU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL05vdGlmaWNhdGlvbi50c3hcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBNZXNzYWdlVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnbG9hZGluZyc7XG5cbnR5cGUgTm90aWZpY2F0aW9uUHJvcHMgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJztcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbjogUmVhY3QuRkM8Tm90aWZpY2F0aW9uUHJvcHM+ID0gKHsgbWVzc2FnZSwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Tm90aWZpY2F0aW9uLCBzZXRTaG93Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNob3dOb3RpZmljYXRpb24odHJ1ZSk7XG5cbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93Tm90aWZpY2F0aW9uKGZhbHNlKTtcbiAgICB9LCA1MDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH0sIFttZXNzYWdlXSk7XG5cbiAgbGV0IGJnQ29sb3IgPSAnJztcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICBiZ0NvbG9yID0gJ2JnLWdyZWVuLTUwMCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBiZ0NvbG9yID0gJ2JnLXJlZC01MDAnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICBiZ0NvbG9yID0gJ2JnLWJsdWUtNTAwJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiZ0NvbG9yID0gJ2JnLWdyYXktODAwJztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uID8gJ2ZpeGVkIGJvdHRvbS01IHJpZ2h0LTUnIDogJ2hpZGRlbidcbiAgICAgIH0gJHtiZ0NvbG9yfSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIHNoYWRvdy1tZGB9XG4gICAgPlxuICAgICAge21lc3NhZ2V9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwidHlwZSIsInNob3dOb3RpZmljYXRpb24iLCJzZXRTaG93Tm90aWZpY2F0aW9uIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJiZ0NvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/notification/index.tsx\n"));

/***/ })

});