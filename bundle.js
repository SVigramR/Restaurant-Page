/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/Submodules/header.js":
/*!******************************************!*\
  !*** ./src/Modules/Submodules/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTitle(id, text) {\n    const title = document.createElement('header');\n    title.setAttribute('id', id);\n    const logoText = document.createElement('h1')\n    logoText.textContent = text;\n    title.appendChild(text);\n    return title\n}\n\nfunction createBtn(id, text) {\n    const button = document.createElement('button');\n    button.setAttribute('id', id);\n    button.textContent = text;\n    return button\n}\n\nfunction createNav(id) {\n    const nav = document.createElement('nav')\n    nav.setAttribute('id', id);\n\n    const homeBtn = createBtn('home', 'Home')\n    const menuBtn = createBtn('menu', 'Menu')\n    const contactBtn = createBtn('contact', 'Contact')\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\nfunction header() {\n    const content = document.querySelector('#content')\n\n    const titleContent = createTitle('header', \"Spicy Dosa\");\n    content.appendChild(titleContent)\n\n    const navContent = createNav('nav')\n    content.appendChild(navContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/header.js?");

/***/ }),

/***/ "./src/Modules/about.js":
/*!******************************!*\
  !*** ./src/Modules/about.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/about.js?");

/***/ }),

/***/ "./src/Modules/contact.js":
/*!********************************!*\
  !*** ./src/Modules/contact.js ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/contact.js?");

/***/ }),

/***/ "./src/Modules/home.js":
/*!*****************************!*\
  !*** ./src/Modules/home.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/home.js?");

/***/ }),

/***/ "./src/Modules/init_page.js":
/*!**********************************!*\
  !*** ./src/Modules/init_page.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/init_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_init_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/init_page.js */ \"./src/Modules/init_page.js\");\n/* harmony import */ var _Modules_init_page_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Modules_init_page_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/home.js */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modules_home_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/about.js */ \"./src/Modules/about.js\");\n/* harmony import */ var _Modules_about_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modules_about_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/contact.js */ \"./src/Modules/contact.js\");\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modules_contact_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Modules_Submodules_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/Submodules/header.js */ \"./src/Modules/Submodules/header.js\");\n\n\n\n\n\n\n(0,_Modules_Submodules_header_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;