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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component */ \"(app-pages-browser)/./app/contact/index.component.tsx\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"(app-pages-browser)/./app/contact/form/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst emptySelectedContact = {\n    id: null,\n    name: \"\",\n    accountNumber: \"\",\n    youOwe: null,\n    theyOwe: null,\n    status: \"Active\",\n    type: \"Customers\",\n    website: null,\n    registrationNumber: null,\n    notes: null,\n    isBillingSameAsDelivery: false,\n    organizationId: null,\n    contactPhoneNumber: [\n        {\n            countryCode: \"+60\",\n            number: \"\"\n        }\n    ],\n    contactPrimaryPerson: [\n        {\n            firstName: \"\",\n            lastName: \"\",\n            email: \"\"\n        }\n    ],\n    contactBillingAddress: {\n        id: 0,\n        attention: \"\",\n        addressLine1: \"\",\n        addressLine2: \"\",\n        city: \"\",\n        state: \"\",\n        postalCode: \"\",\n        country: \"\"\n    },\n    contactDeliveryAddress: {\n        id: 0,\n        attention: \"\",\n        addressLine1: \"\",\n        addressLine2: \"\",\n        city: \"\",\n        state: \"\",\n        postalCode: \"\",\n        country: \"\"\n    }\n};\nconst Contact = ()=>{\n    _s();\n    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"form\");\n    const [selectedContact, setSelectedContact] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptySelectedContact);\n    const selectedStyle = {\n        backgroundColor: \"#ECECEC\",\n        borderBottom: \"3px solid #158BB8\"\n    };\n    const onClickAddContact = ()=>{\n        setSelectedContact(emptySelectedContact);\n        setShow(\"form\");\n    };\n    // Function to handle changes in contact name or account number\n    const handleContactChange = (e)=>{\n        const { name, value } = e.target;\n        setSelectedContact({\n            ...selectedContact,\n            [name]: value\n        });\n    };\n    const handleContactAddressesChange = (fieldName, value)=>{\n        const updatedContact = {\n            ...selectedContact\n        };\n        if (fieldName.startsWith(\"contactBillingAddress\") && updatedContact.contactBillingAddress) {\n            console.log(fieldName, value, selectedContact);\n            const billingField = fieldName.split(\".\")[1];\n            console.log(billingField);\n            updatedContact.contactBillingAddress[billingField] = value;\n        } else if (fieldName.startsWith(\"contactDeliveryAddress\") && updatedContact.contactDeliveryAddress) {\n            const deliveryField = fieldName.split(\".\")[1];\n            updatedContact.contactDeliveryAddress[deliveryField] = value;\n        }\n        setSelectedContact(updatedContact);\n    };\n    // Function to handle changes in contact name or account number\n    const handleUseAsDeliverAddressChange = ()=>{\n        setSelectedContact({\n            ...selectedContact,\n            isBillingSameAsDelivery: !(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.isBillingSameAsDelivery)\n        });\n    };\n    // Function to handle changes in primary person's details\n    const handlePrimaryPersonChange = (index, field, value)=>{\n        const updatedPrimaryPersons = [\n            ...(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.contactPrimaryPerson) || []\n        ];\n        updatedPrimaryPersons[index] = {\n            ...updatedPrimaryPersons[index],\n            [field]: value\n        };\n        setSelectedContact({\n            ...selectedContact,\n            contactPrimaryPerson: updatedPrimaryPersons\n        });\n    };\n    // Function to handle changes in phone number details\n    const handlePhoneNumberChange = (index, field, value)=>{\n        const updatedPhoneNumbers = [\n            ...(selectedContact === null || selectedContact === void 0 ? void 0 : selectedContact.contactPhoneNumber) || []\n        ];\n        updatedPhoneNumbers[index] = {\n            ...updatedPhoneNumbers[index],\n            [field]: value\n        };\n        setSelectedContact({\n            ...selectedContact,\n            contactPhoneNumber: updatedPhoneNumbers\n        });\n    };\n    const onSaveDetail = ()=>{\n        console.log(selectedContact);\n    };\n    const onCancel = ()=>{\n        setShow(\"list\");\n    };\n    const componentProps = {\n        currentTab,\n        selectedStyle,\n        setCurrentTab,\n        onClickAddContact\n    };\n    const contactFormProps = {\n        selectedContact,\n        setSelectedContact,\n        setShow,\n        handleContactChange,\n        handleUseAsDeliverAddressChange,\n        handlePrimaryPersonChange,\n        handlePhoneNumberChange,\n        onSaveDetail,\n        onCancel,\n        handleContactAddressesChange\n    };\n    if (show == \"list\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...componentProps\n        }, void 0, false, {\n            fileName: \"/Users/dev/homa-FE/app/contact/page.tsx\",\n            lineNumber: 159,\n            columnNumber: 17\n        }, undefined);\n    }\n    if (show == \"form\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ...contactFormProps\n        }, void 0, false, {\n            fileName: \"/Users/dev/homa-FE/app/contact/page.tsx\",\n            lineNumber: 162,\n            columnNumber: 17\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(Contact, \"3Q+PawYwow5Ds30TOafJbcCXvUI=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE1BQU0sRUFBRWQ7UUFDYjtRQUNBUCxtQkFBbUI7WUFDZixHQUFHRCxlQUFlO1lBQ2xCbEIsc0JBQXNCeUM7UUFDMUI7SUFDSjtJQUVBLHFEQUFxRDtJQUNyRCxNQUFNQywwQkFBMEIsQ0FBQ0gsT0FBZUMsT0FBZWQ7UUFDM0QsTUFBTWlCLHNCQUFzQjtlQUFLekIsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUJyQixrQkFBa0IsS0FBSSxFQUFFO1NBQUU7UUFDNUU4QyxtQkFBbUIsQ0FBQ0osTUFBTSxHQUFHO1lBQ3pCLEdBQUdJLG1CQUFtQixDQUFDSixNQUFNO1lBQzdCLENBQUNDLE1BQU0sRUFBRWQ7UUFDYjtRQUNBUCxtQkFBbUI7WUFDZixHQUFHRCxlQUFlO1lBQ2xCckIsb0JBQW9COEM7UUFDeEI7SUFDSjtJQUVBLE1BQU1DLGVBQWU7UUFDakJaLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFDaEI7SUFFQSxNQUFNMkIsV0FBVztRQUNiNUIsUUFBUTtJQUNaO0lBRUEsTUFBTTZCLGlCQUFpQztRQUNuQ2hDO1FBQ0FNO1FBQ0FMO1FBQ0FRO0lBQ0o7SUFFQSxNQUFNd0IsbUJBQThCO1FBQ2hDN0I7UUFDQUM7UUFDQUY7UUFDQU87UUFDQWE7UUFDQUM7UUFDQUk7UUFDQUU7UUFDQUM7UUFDQWpCO0lBQ0o7SUFFQSxJQUFJWixRQUFRLFFBQVE7UUFDaEIscUJBQVEsOERBQUNsQyx3REFBU0E7WUFBRSxHQUFHZ0UsY0FBYzs7Ozs7O0lBQ3pDO0lBQ0EsSUFBSTlCLFFBQVEsUUFBUTtRQUNoQixxQkFBUSw4REFBQ2pDLDZDQUFXQTtZQUFFLEdBQUdnRSxnQkFBZ0I7Ozs7OztJQUM3QztJQUNBLHFCQUFPO0FBQ1g7R0E3R01sQztLQUFBQTtBQStHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGFjdC9wYWdlLnRzeD9kYTk3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50UHJvcHMsIENvbnRhY3QgfSBmcm9tICcuL2luZGV4LnByb3BzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBGb3JtUHJvcHMgfSBmcm9tICcuL2Zvcm0vaW5kZXgucHJvcHMnO1xuXG5jb25zdCBlbXB0eVNlbGVjdGVkQ29udGFjdDogQ29udGFjdCA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiAnJyxcbiAgICB5b3VPd2U6IG51bGwsXG4gICAgdGhleU93ZTogbnVsbCxcbiAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgIHR5cGU6ICdDdXN0b21lcnMnLFxuICAgIHdlYnNpdGU6IG51bGwsXG4gICAgcmVnaXN0cmF0aW9uTnVtYmVyOiBudWxsLFxuICAgIG5vdGVzOiBudWxsLFxuICAgIGlzQmlsbGluZ1NhbWVBc0RlbGl2ZXJ5OiBmYWxzZSxcbiAgICBvcmdhbml6YXRpb25JZDogbnVsbCxcbiAgICBjb250YWN0UGhvbmVOdW1iZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY291bnRyeUNvZGU6ICcrNjAnLFxuICAgICAgICAgICAgbnVtYmVyOiAnJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGNvbnRhY3RQcmltYXJ5UGVyc29uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBjb250YWN0QmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGF0dGVudGlvbjogJycsXG4gICAgICAgIGFkZHJlc3NMaW5lMTogJycsXG4gICAgICAgIGFkZHJlc3NMaW5lMjogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHBvc3RhbENvZGU6ICcnLFxuICAgICAgICBjb3VudHJ5OicnLFxuICAgIH0sXG4gICAgY29udGFjdERlbGl2ZXJ5QWRkcmVzczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgYXR0ZW50aW9uOiAnJyxcbiAgICAgICAgYWRkcmVzc0xpbmUxOiAnJyxcbiAgICAgICAgYWRkcmVzc0xpbmUyOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgcG9zdGFsQ29kZTogJycsXG4gICAgICAgIGNvdW50cnk6JycsXG4gICAgfVxufTtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8J2xpc3QnfCdmb3JtJz4oJ2Zvcm0nKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDb250YWN0LCBzZXRTZWxlY3RlZENvbnRhY3RdID0gdXNlU3RhdGU8UGFydGlhbDxDb250YWN0Pj4oZW1wdHlTZWxlY3RlZENvbnRhY3QpXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VDRUNFQycsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzNweCBzb2xpZCAjMTU4QkI4JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DbGlja0FkZENvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkQ29udGFjdChlbXB0eVNlbGVjdGVkQ29udGFjdClcbiAgICAgICAgc2V0U2hvdygnZm9ybScpO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2hhbmdlcyBpbiBjb250YWN0IG5hbWUgb3IgYWNjb3VudCBudW1iZXJcbiAgICBjb25zdCBoYW5kbGVDb250YWN0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3Qoe1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNvbnRhY3RBZGRyZXNzZXNDaGFuZ2UgPSAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcblxuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IHsgLi4uc2VsZWN0ZWRDb250YWN0IH07XG5cbiAgICAgICAgaWYgKGZpZWxkTmFtZS5zdGFydHNXaXRoKCdjb250YWN0QmlsbGluZ0FkZHJlc3MnKSAmJiB1cGRhdGVkQ29udGFjdC5jb250YWN0QmlsbGluZ0FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpZWxkTmFtZSwgdmFsdWUsIHNlbGVjdGVkQ29udGFjdCk7XG4gICAgICAgICAgICBjb25zdCBiaWxsaW5nRmllbGQgPSBmaWVsZE5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJpbGxpbmdGaWVsZClcbiAgICAgICAgICAgIHVwZGF0ZWRDb250YWN0LmNvbnRhY3RCaWxsaW5nQWRkcmVzc1tiaWxsaW5nRmllbGRdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lLnN0YXJ0c1dpdGgoJ2NvbnRhY3REZWxpdmVyeUFkZHJlc3MnKSAmJiB1cGRhdGVkQ29udGFjdC5jb250YWN0RGVsaXZlcnlBZGRyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxpdmVyeUZpZWxkID0gZmllbGROYW1lLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICB1cGRhdGVkQ29udGFjdC5jb250YWN0RGVsaXZlcnlBZGRyZXNzW2RlbGl2ZXJ5RmllbGRdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3QodXBkYXRlZENvbnRhY3QpO1xuICAgIH07XG5cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjaGFuZ2VzIGluIGNvbnRhY3QgbmFtZSBvciBhY2NvdW50IG51bWJlclxuICAgIGNvbnN0IGhhbmRsZVVzZUFzRGVsaXZlckFkZHJlc3NDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkQ29udGFjdCh7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbnRhY3QsXG4gICAgICAgICAgICBpc0JpbGxpbmdTYW1lQXNEZWxpdmVyeTogIXNlbGVjdGVkQ29udGFjdD8uaXNCaWxsaW5nU2FtZUFzRGVsaXZlcnksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNoYW5nZXMgaW4gcHJpbWFyeSBwZXJzb24ncyBkZXRhaWxzXG4gICAgY29uc3QgaGFuZGxlUHJpbWFyeVBlcnNvbkNoYW5nZSA9IChpbmRleDogbnVtYmVyLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcmltYXJ5UGVyc29ucyA9IFsuLi4oc2VsZWN0ZWRDb250YWN0Py5jb250YWN0UHJpbWFyeVBlcnNvbiB8fCBbXSldO1xuICAgICAgICB1cGRhdGVkUHJpbWFyeVBlcnNvbnNbaW5kZXhdID0ge1xuICAgICAgICAgICAgLi4udXBkYXRlZFByaW1hcnlQZXJzb25zW2luZGV4XSxcbiAgICAgICAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBzZXRTZWxlY3RlZENvbnRhY3Qoe1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICAgICAgY29udGFjdFByaW1hcnlQZXJzb246IHVwZGF0ZWRQcmltYXJ5UGVyc29ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjaGFuZ2VzIGluIHBob25lIG51bWJlciBkZXRhaWxzXG4gICAgY29uc3QgaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkUGhvbmVOdW1iZXJzID0gWy4uLihzZWxlY3RlZENvbnRhY3Q/LmNvbnRhY3RQaG9uZU51bWJlciB8fCBbXSldO1xuICAgICAgICB1cGRhdGVkUGhvbmVOdW1iZXJzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZWRQaG9uZU51bWJlcnNbaW5kZXhdLFxuICAgICAgICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIHNldFNlbGVjdGVkQ29udGFjdCh7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbnRhY3QsXG4gICAgICAgICAgICBjb250YWN0UGhvbmVOdW1iZXI6IHVwZGF0ZWRQaG9uZU51bWJlcnMsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvblNhdmVEZXRhaWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29udGFjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93KCdsaXN0Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzOiBDb21wb25lbnRQcm9wcyA9IHtcbiAgICAgICAgY3VycmVudFRhYixcbiAgICAgICAgc2VsZWN0ZWRTdHlsZSxcbiAgICAgICAgc2V0Q3VycmVudFRhYixcbiAgICAgICAgb25DbGlja0FkZENvbnRhY3RcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFjdEZvcm1Qcm9wczogRm9ybVByb3BzID0ge1xuICAgICAgICBzZWxlY3RlZENvbnRhY3QsXG4gICAgICAgIHNldFNlbGVjdGVkQ29udGFjdCxcbiAgICAgICAgc2V0U2hvdyxcbiAgICAgICAgaGFuZGxlQ29udGFjdENoYW5nZSxcbiAgICAgICAgaGFuZGxlVXNlQXNEZWxpdmVyQWRkcmVzc0NoYW5nZSxcbiAgICAgICAgaGFuZGxlUHJpbWFyeVBlcnNvbkNoYW5nZSxcbiAgICAgICAgaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UsXG4gICAgICAgIG9uU2F2ZURldGFpbCxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIGhhbmRsZUNvbnRhY3RBZGRyZXNzZXNDaGFuZ2UsXG4gICAgfTtcblxuICAgIGlmIChzaG93ID09ICdsaXN0Jykge1xuICAgICAgICByZXR1cm4gKDxDb21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPik7XG4gICAgfVxuICAgIGlmIChzaG93ID09ICdmb3JtJykge1xuICAgICAgICByZXR1cm4gKDxDb250YWN0Rm9ybSB7Li4uY29udGFjdEZvcm1Qcm9wc30gLz4pO1xuICAgIH1cbiAgICByZXR1cm4oPD48Lz4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbXBvbmVudCIsIkNvbnRhY3RGb3JtIiwiZW1wdHlTZWxlY3RlZENvbnRhY3QiLCJpZCIsIm5hbWUiLCJhY2NvdW50TnVtYmVyIiwieW91T3dlIiwidGhleU93ZSIsInN0YXR1cyIsInR5cGUiLCJ3ZWJzaXRlIiwicmVnaXN0cmF0aW9uTnVtYmVyIiwibm90ZXMiLCJpc0JpbGxpbmdTYW1lQXNEZWxpdmVyeSIsIm9yZ2FuaXphdGlvbklkIiwiY29udGFjdFBob25lTnVtYmVyIiwiY291bnRyeUNvZGUiLCJudW1iZXIiLCJjb250YWN0UHJpbWFyeVBlcnNvbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJjb250YWN0QmlsbGluZ0FkZHJlc3MiLCJhdHRlbnRpb24iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5Iiwic3RhdGUiLCJwb3N0YWxDb2RlIiwiY291bnRyeSIsImNvbnRhY3REZWxpdmVyeUFkZHJlc3MiLCJDb250YWN0IiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJzaG93Iiwic2V0U2hvdyIsInNlbGVjdGVkQ29udGFjdCIsInNldFNlbGVjdGVkQ29udGFjdCIsInNlbGVjdGVkU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCb3R0b20iLCJvbkNsaWNrQWRkQ29udGFjdCIsImhhbmRsZUNvbnRhY3RDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVDb250YWN0QWRkcmVzc2VzQ2hhbmdlIiwiZmllbGROYW1lIiwidXBkYXRlZENvbnRhY3QiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsImJpbGxpbmdGaWVsZCIsInNwbGl0IiwiZGVsaXZlcnlGaWVsZCIsImhhbmRsZVVzZUFzRGVsaXZlckFkZHJlc3NDaGFuZ2UiLCJoYW5kbGVQcmltYXJ5UGVyc29uQ2hhbmdlIiwiaW5kZXgiLCJmaWVsZCIsInVwZGF0ZWRQcmltYXJ5UGVyc29ucyIsImhhbmRsZVBob25lTnVtYmVyQ2hhbmdlIiwidXBkYXRlZFBob25lTnVtYmVycyIsIm9uU2F2ZURldGFpbCIsIm9uQ2FuY2VsIiwiY29tcG9uZW50UHJvcHMiLCJjb250YWN0Rm9ybVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contact/page.tsx\n"));

/***/ })

});