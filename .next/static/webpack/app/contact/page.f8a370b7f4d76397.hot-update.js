"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./app/contact/page.tsx":
/*!******************************!*\
  !*** ./app/contact/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component */ \"(app-pages-browser)/./app/contact/index.component.tsx\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"(app-pages-browser)/./app/contact/form/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst emptySelectedContact = {\n    id: null,\n    name: \"\",\n    accountNumber: \"\",\n    youOwe: null,\n    theyOwe: null,\n    status: \"Active\",\n    type: \"Customers\",\n    website: null,\n    registrationNumber: null,\n    notes: null,\n    isBillingSameAsDelivery: false,\n    organizationId: null,\n    contactPhoneNumber: [\n        {\n            countryCode: \"+60\",\n            number: \"\"\n        }\n    ],\n    contactPrimaryPerson: [\n        {\n            firstName: \"\",\n            lastName: \"\",\n            email: \"\"\n        }\n    ]\n};\nconst Contact = ()=>{\n    _s();\n    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"form\");\n    const [selectedContact, setSelectedContact] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptySelectedContact);\n    const selectedStyle = {\n        backgroundColor: \"#ECECEC\",\n        borderBottom: \"3px solid #158BB8\"\n    };\n    const onClickAddContact = ()=>{\n        setSelectedContact(emptySelectedContact);\n        setShow(\"form\");\n    };\n    // Function to handle changes in contact name or account number\n    const handleContactChange = (e)=>{\n        const { name, value } = e.target;\n        setSelectedContact({\n            ...selectedContact,\n            [name]: value\n        });\n    };\n    const handleContactAddressesChange = (fieldName, value)=>{\n        console.log(fieldName, value);\n        if (!selectedContact) {\n            return;\n        }\n        const updatedContact = {\n            ...selectedContact\n        };\n        if (fieldName.startsWith(\"contactBillingAddress\") && updatedContact.contactBillingAddress) {\n            const billingField = fieldName.split(\".\")[1];\n            if (updatedContact.contactBillingAddress[billingField]) {\n                updatedContact.contactBillingAddress[billingField] = value;\n            }\n        } else if (fieldName.startsWith(\"contactDeliveryAddress\") && updatedContact.contactDeliveryAddress) {\n            const deliveryField = fieldName.split(\".\")[1];\n            if (updatedContact.contactDeliveryAddress[deliveryField]) {\n                updatedContact.contactDeliveryAddress[deliveryField] = value;\n            }\n        }\n        setSelectedContact(updatedContact);\n    };\n    // Function to handle changes in contact name or account number\n    const handleUseAsDeliverAddressChange = ()=>{\n        setSelectedContact({\n            ...selectedContact,\n            isBillingSameAsDelivery: !(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.isBillingSameAsDelivery)\n        });\n    };\n    // Function to handle changes in primary person's details\n    const handlePrimaryPersonChange = (index, field, value)=>{\n        const updatedPrimaryPersons = [\n            ...(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.contactPrimaryPerson) || []\n        ];\n        updatedPrimaryPersons[index] = {\n            ...updatedPrimaryPersons[index],\n            [field]: value\n        };\n        setSelectedContact({\n            ...selectedContact,\n            contactPrimaryPerson: updatedPrimaryPersons\n        });\n    };\n    // Function to handle changes in phone number details\n    const handlePhoneNumberChange = (index, field, value)=>{\n        const updatedPhoneNumbers = [\n            ...(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.contactPhoneNumber) || []\n        ];\n        updatedPhoneNumbers[index] = {\n            ...updatedPhoneNumbers[index],\n            [field]: value\n        };\n        setSelectedContact({\n            ...selectedContact,\n            contactPhoneNumber: updatedPhoneNumbers\n        });\n    };\n    const onSaveDetail = ()=>{\n        console.log(selectedContact);\n    };\n    const onCancel = ()=>{\n        setShow(\"list\");\n    };\n    const componentProps = {\n        currentTab,\n        selectedStyle,\n        setCurrentTab,\n        onClickAddContact\n    };\n    const contactFormProps = {\n        selectedContact,\n        setSelectedContact,\n        setShow,\n        handleContactChange,\n        handleUseAsDeliverAddressChange,\n        handlePrimaryPersonChange,\n        handlePhoneNumberChange,\n        onSaveDetail,\n        onCancel,\n        handleContactAddressesChange\n    };\n    if (show == \"list\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...componentProps\n        }, void 0, false, {\n            fileName: \"/Users/dev/homa-FE/app/contact/page.tsx\",\n            lineNumber: 145,\n            columnNumber: 17\n        }, undefined);\n    }\n    if (show == \"form\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ...contactFormProps\n        }, void 0, false, {\n            fileName: \"/Users/dev/homa-FE/app/contact/page.tsx\",\n            lineNumber: 148,\n            columnNumber: 17\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(Contact, \"3Q+PawYwow5Ds30TOafJbcCXvUI=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0QsTUFBTW1CLHNCQUFzQjtlQUFLM0IsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUJaLGtCQUFrQixLQUFJLEVBQUU7U0FBRTtRQUM1RXVDLG1CQUFtQixDQUFDSixNQUFNLEdBQUc7WUFDekIsR0FBR0ksbUJBQW1CLENBQUNKLE1BQU07WUFDN0IsQ0FBQ0MsTUFBTSxFQUFFaEI7UUFDYjtRQUNBUCxtQkFBbUI7WUFDZixHQUFHRCxlQUFlO1lBQ2xCWixvQkFBb0J1QztRQUN4QjtJQUNKO0lBRUEsTUFBTUMsZUFBZTtRQUNqQmhCLFFBQVFDLEdBQUcsQ0FBQ2I7SUFDaEI7SUFFQSxNQUFNNkIsV0FBVztRQUNiOUIsUUFBUTtJQUNaO0lBRUEsTUFBTStCLGlCQUFpQztRQUNuQ2xDO1FBQ0FNO1FBQ0FMO1FBQ0FRO0lBQ0o7SUFFQSxNQUFNMEIsbUJBQThCO1FBQ2hDL0I7UUFDQUM7UUFDQUY7UUFDQU87UUFDQWU7UUFDQUM7UUFDQUk7UUFDQUU7UUFDQUM7UUFDQW5CO0lBQ0o7SUFFQSxJQUFJWixRQUFRLFFBQVE7UUFDaEIscUJBQVEsOERBQUN6Qix3REFBU0E7WUFBRSxHQUFHeUQsY0FBYzs7Ozs7O0lBQ3pDO0lBQ0EsSUFBSWhDLFFBQVEsUUFBUTtRQUNoQixxQkFBUSw4REFBQ3hCLDZDQUFXQTtZQUFFLEdBQUd5RCxnQkFBZ0I7Ozs7OztJQUM3QztJQUNBLHFCQUFPO0FBQ1g7R0FuSE1wQztLQUFBQTtBQXFITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGFjdC9wYWdlLnRzeD9kYTk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50UHJvcHMsIENvbnRhY3QgfSBmcm9tICcuL2luZGV4LnByb3BzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGb3JtUHJvcHMgfSBmcm9tICcuL2Zvcm0vaW5kZXgucHJvcHMnO1xuXG5jb25zdCBlbXB0eVNlbGVjdGVkQ29udGFjdDogQ29udGFjdCA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiAnJyxcbiAgICB5b3VPd2U6IG51bGwsXG4gICAgdGhleU93ZTogbnVsbCxcbiAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgIHR5cGU6ICdDdXN0b21lcnMnLFxuICAgIHdlYnNpdGU6IG51bGwsXG4gICAgcmVnaXN0cmF0aW9uTnVtYmVyOiBudWxsLFxuICAgIG5vdGVzOiBudWxsLFxuICAgIGlzQmlsbGluZ1NhbWVBc0RlbGl2ZXJ5OiBmYWxzZSxcbiAgICBvcmdhbml6YXRpb25JZDogbnVsbCxcbiAgICBjb250YWN0UGhvbmVOdW1iZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY291bnRyeUNvZGU6ICcrNjAnLFxuICAgICAgICAgICAgbnVtYmVyOiAnJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGNvbnRhY3RQcmltYXJ5UGVyc29uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoJ2FsbCcpO1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlPCdsaXN0J3wnZm9ybSc+KCdmb3JtJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ29udGFjdCwgc2V0U2VsZWN0ZWRDb250YWN0XSA9IHVzZVN0YXRlPFBhcnRpYWw8Q29udGFjdD4+KGVtcHR5U2VsZWN0ZWRDb250YWN0KVxuICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFQ0VDRUMnLFxuICAgICAgICBib3JkZXJCb3R0b206ICczcHggc29saWQgIzE1OEJCOCcsXG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xpY2tBZGRDb250YWN0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3QoZW1wdHlTZWxlY3RlZENvbnRhY3QpXG4gICAgICAgIHNldFNob3coJ2Zvcm0nKTtcbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNoYW5nZXMgaW4gY29udGFjdCBuYW1lIG9yIGFjY291bnQgbnVtYmVyXG4gICAgY29uc3QgaGFuZGxlQ29udGFjdENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0U2VsZWN0ZWRDb250YWN0KHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29udGFjdCxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDb250YWN0QWRkcmVzc2VzQ2hhbmdlID0gKGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpZWxkTmFtZSwgdmFsdWUpXG4gICAgICAgIGlmICghc2VsZWN0ZWRDb250YWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IHsgLi4uc2VsZWN0ZWRDb250YWN0IH07XG5cbiAgICAgICAgaWYgKGZpZWxkTmFtZS5zdGFydHNXaXRoKCdjb250YWN0QmlsbGluZ0FkZHJlc3MnKSAmJiB1cGRhdGVkQ29udGFjdC5jb250YWN0QmlsbGluZ0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbGxpbmdGaWVsZCA9IGZpZWxkTmFtZS5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZWRDb250YWN0LmNvbnRhY3RCaWxsaW5nQWRkcmVzc1tiaWxsaW5nRmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZENvbnRhY3QuY29udGFjdEJpbGxpbmdBZGRyZXNzW2JpbGxpbmdGaWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE5hbWUuc3RhcnRzV2l0aCgnY29udGFjdERlbGl2ZXJ5QWRkcmVzcycpICYmIHVwZGF0ZWRDb250YWN0LmNvbnRhY3REZWxpdmVyeUFkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RmllbGQgPSBmaWVsZE5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ29udGFjdC5jb250YWN0RGVsaXZlcnlBZGRyZXNzW2RlbGl2ZXJ5RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZENvbnRhY3QuY29udGFjdERlbGl2ZXJ5QWRkcmVzc1tkZWxpdmVyeUZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRDb250YWN0KHVwZGF0ZWRDb250YWN0KTtcbiAgICB9O1xuXG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2hhbmdlcyBpbiBjb250YWN0IG5hbWUgb3IgYWNjb3VudCBudW1iZXJcbiAgICBjb25zdCBoYW5kbGVVc2VBc0RlbGl2ZXJBZGRyZXNzQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3Qoe1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICAgICAgaXNCaWxsaW5nU2FtZUFzRGVsaXZlcnk6ICFzZWxlY3RlZENvbnRhY3Q/LmlzQmlsbGluZ1NhbWVBc0RlbGl2ZXJ5LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjaGFuZ2VzIGluIHByaW1hcnkgcGVyc29uJ3MgZGV0YWlsc1xuICAgIGNvbnN0IGhhbmRsZVByaW1hcnlQZXJzb25DaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkUHJpbWFyeVBlcnNvbnMgPSBbLi4uKHNlbGVjdGVkQ29udGFjdD8uY29udGFjdFByaW1hcnlQZXJzb24gfHwgW10pXTtcbiAgICAgICAgdXBkYXRlZFByaW1hcnlQZXJzb25zW2luZGV4XSA9IHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZWRQcmltYXJ5UGVyc29uc1tpbmRleF0sXG4gICAgICAgICAgICBbZmllbGRdOiB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0U2VsZWN0ZWRDb250YWN0KHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29udGFjdCxcbiAgICAgICAgICAgIGNvbnRhY3RQcmltYXJ5UGVyc29uOiB1cGRhdGVkUHJpbWFyeVBlcnNvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2hhbmdlcyBpbiBwaG9uZSBudW1iZXIgZGV0YWlsc1xuICAgIGNvbnN0IGhhbmRsZVBob25lTnVtYmVyQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFBob25lTnVtYmVycyA9IFsuLi4oc2VsZWN0ZWRDb250YWN0Py5jb250YWN0UGhvbmVOdW1iZXIgfHwgW10pXTtcbiAgICAgICAgdXBkYXRlZFBob25lTnVtYmVyc1tpbmRleF0gPSB7XG4gICAgICAgICAgICAuLi51cGRhdGVkUGhvbmVOdW1iZXJzW2luZGV4XSxcbiAgICAgICAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3Qoe1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICAgICAgY29udGFjdFBob25lTnVtYmVyOiB1cGRhdGVkUGhvbmVOdW1iZXJzLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TYXZlRGV0YWlsID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbnRhY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvdygnbGlzdCcpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wb25lbnRQcm9wczogQ29tcG9uZW50UHJvcHMgPSB7XG4gICAgICAgIGN1cnJlbnRUYWIsXG4gICAgICAgIHNlbGVjdGVkU3R5bGUsXG4gICAgICAgIHNldEN1cnJlbnRUYWIsXG4gICAgICAgIG9uQ2xpY2tBZGRDb250YWN0XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRhY3RGb3JtUHJvcHM6IEZvcm1Qcm9wcyA9IHtcbiAgICAgICAgc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3QsXG4gICAgICAgIHNldFNob3csXG4gICAgICAgIGhhbmRsZUNvbnRhY3RDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVVzZUFzRGVsaXZlckFkZHJlc3NDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVByaW1hcnlQZXJzb25DaGFuZ2UsXG4gICAgICAgIGhhbmRsZVBob25lTnVtYmVyQ2hhbmdlLFxuICAgICAgICBvblNhdmVEZXRhaWwsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBoYW5kbGVDb250YWN0QWRkcmVzc2VzQ2hhbmdlLFxuICAgIH07XG5cbiAgICBpZiAoc2hvdyA9PSAnbGlzdCcpIHtcbiAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50IHsuLi5jb21wb25lbnRQcm9wc30gLz4pO1xuICAgIH1cbiAgICBpZiAoc2hvdyA9PSAnZm9ybScpIHtcbiAgICAgICAgcmV0dXJuICg8Q29udGFjdEZvcm0gey4uLmNvbnRhY3RGb3JtUHJvcHN9IC8+KTtcbiAgICB9XG4gICAgcmV0dXJuKDw+PC8+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb21wb25lbnQiLCJDb250YWN0Rm9ybSIsImVtcHR5U2VsZWN0ZWRDb250YWN0IiwiaWQiLCJuYW1lIiwiYWNjb3VudE51bWJlciIsInlvdU93ZSIsInRoZXlPd2UiLCJzdGF0dXMiLCJ0eXBlIiwid2Vic2l0ZSIsInJlZ2lzdHJhdGlvbk51bWJlciIsIm5vdGVzIiwiaXNCaWxsaW5nU2FtZUFzRGVsaXZlcnkiLCJvcmdhbml6YXRpb25JZCIsImNvbnRhY3RQaG9uZU51bWJlciIsImNvdW50cnlDb2RlIiwibnVtYmVyIiwiY29udGFjdFByaW1hcnlQZXJzb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiQ29udGFjdCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwic2hvdyIsInNldFNob3ciLCJzZWxlY3RlZENvbnRhY3QiLCJzZXRTZWxlY3RlZENvbnRhY3QiLCJzZWxlY3RlZFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQm90dG9tIiwib25DbGlja0FkZENvbnRhY3QiLCJoYW5kbGVDb250YWN0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ29udGFjdEFkZHJlc3Nlc0NoYW5nZSIsImZpZWxkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkQ29udGFjdCIsInN0YXJ0c1dpdGgiLCJjb250YWN0QmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nRmllbGQiLCJzcGxpdCIsImNvbnRhY3REZWxpdmVyeUFkZHJlc3MiLCJkZWxpdmVyeUZpZWxkIiwiaGFuZGxlVXNlQXNEZWxpdmVyQWRkcmVzc0NoYW5nZSIsImhhbmRsZVByaW1hcnlQZXJzb25DaGFuZ2UiLCJpbmRleCIsImZpZWxkIiwidXBkYXRlZFByaW1hcnlQZXJzb25zIiwiaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UiLCJ1cGRhdGVkUGhvbmVOdW1iZXJzIiwib25TYXZlRGV0YWlsIiwib25DYW5jZWwiLCJjb21wb25lbnRQcm9wcyIsImNvbnRhY3RGb3JtUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contact/page.tsx\n"));

/***/ })

});