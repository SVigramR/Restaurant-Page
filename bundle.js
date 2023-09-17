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

/***/ "./src/Modules/Submodules/footer.js":
/*!******************************************!*\
  !*** ./src/Modules/Submodules/footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createfooter(id, text) {\n    const footerContent = document.createElement('footer')\n    footerContent.setAttribute('id',id)\n    const footerText = document.createElement('h3')\n    footerText.textContent = text\n    footerContent.appendChild(footerText)\n    return footerContent\n}\n\nfunction footer() {\n    const content = document.querySelector('#content')\n\n    const newFooter = createfooter('footer', 'Made by @SVigramR')\n    content.appendChild(newFooter)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/footer.js?");

/***/ }),

/***/ "./src/Modules/Submodules/header.js":
/*!******************************************!*\
  !*** ./src/Modules/Submodules/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTitle(id, text) {\n    const title = document.createElement('header');\n    title.setAttribute('id', id);\n    const logoText = document.createElement('h1')\n    logoText.textContent = text;\n    title.appendChild(logoText);\n    return title\n}\n\nfunction createBtn(id, text) {\n    const button = document.createElement('button');\n    button.setAttribute('id', id);\n    button.textContent = text;\n    return button\n}\n\nfunction createNav(id) {\n    const nav = document.createElement('nav')\n    nav.setAttribute('id', id);\n\n    const homeBtn = createBtn('home', 'Home')\n    const menuBtn = createBtn('menu', 'Menu')\n    const contactBtn = createBtn('contact', 'Contact')\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\nfunction header() {\n    const content = document.querySelector('#content')\n\n    const titleContent = createTitle('header', \"Spicy Dosa\");\n    content.appendChild(titleContent)\n\n    const navContent = createNav('nav')\n    content.appendChild(navContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/header.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createPassage(id, text) {\n    const passage = document.createElement('p');\n    passage.setAttribute('id', id);\n    passage.textContent = text;\n    return passage;\n}\n\nfunction createheading(id, text) {\n    const heading = document.createElement('h2');\n    heading.setAttribute('id', id);\n    heading.textContent = text;\n    return heading;\n}\n\nfunction homePage() {\n    const content = document.querySelector('#content')\n    const main = document.createElement('main');\n\n    const headOne = createheading('head-1', 'Welcome to Spicy Dosa - A Century of Dosa Excellence!')\n    main.appendChild(headOne)\n    const headTwo = createheading('head-2', 'Discover the Essence of South Indian Cuisine')\n    main.appendChild(headTwo)\n    const passageOne = createPassage('pass-1', 'At Spicy Dosa, we take pride in introducing you to the exquisite world of dosa, a beloved South Indian delicacy that has captured hearts and palates for generations. Our journey began a century ago, and today, we continue the tradition of serving the finest dosas, crafted with passion and heritage.')\n    main.appendChild(passageOne)\n\n    const headthree = createheading('head-3', 'A Culinary Marvel')\n    main.appendChild(headthree)\n    const passageTwo = createPassage('pass-2', 'Dosa, a thin savory pancake, is a marvel in South Indian cuisine. Our dosas are a true labor of love, prepared from a meticulously fermented batter of ground black lentils and rice. Each dosa embodies the perfect balance of flavors and textures, making every bite a delightful experience.')\n    main.appendChild(passageTwo)\n\n    const headFour = createheading('head-4', 'Innovation Amidst Tradition')\n    main.appendChild(headFour)\n    const passageThree = createPassage('pass-3', 'Creating a name out of this simple yet cherished dish is a continuous journey of creativity and dedication. At Spicy Dosa, we embrace both tradition and innovation. Our menu boasts a diverse range of dosas, from time-honored classics to our own signature creations, each with a unique twist that will tantalize your taste buds.')\n    main.appendChild(passageThree)\n\n    const headFive = createheading('head-5', 'A Legacy of Flavor')\n    main.appendChild(headFive)\n    const passageFour = createPassage('pass-4', 'Our roots trace back to Chennai, where a humble diner transformed into a sprawling restaurant. Throughout the years, we owe our success to the unwavering dedication of our predecessors. They ensured that our doors remained open during challenging times, preserving the authenticity and quality of our food.')\n    main.appendChild(passageFour)\n\n    const headSix = createheading('head-6', '100 Years of Culinary Heritage')\n    main.appendChild(headSix)\n    const passageFive = createPassage('pass-5', \"Today, it's our honor to continue this rich legacy. Spicy Dosa is more than a restaurant; it's a testament to a century of dedication to serving exceptional dosas. We cherish our heritage and are determined to carry it forward for generations to come.\")\n    main.appendChild(passageFive)\n\n    const headSeven = createheading('head-7', 'Your Journey Begins Here')\n    main.appendChild(headSeven)\n    const passageSix = createPassage('pass-6', 'As we look to the future, our mission is clear: to successfully run the restaurant and expand our reach. We envision multiple chains and franchises across the globe, all proudly carrying the Spicy Dosa name.')\n    main.appendChild(passageSix)\n\n    const headEight = createheading('head-8', 'Visit Us and Be Transformed')\n    main.appendChild(headEight)\n    const passageSeven = createPassage('pass-7', \"We invite you to embark on a gastronomic journey with us. Come and savor the magic of dosa at Spicy Dosa. We are confident that once you've experienced our dosas, you'll return time and again, becoming a part of our extended family.\")\n    main.appendChild(passageSeven)\n    const passageEight = createPassage('pass-8', \"Join us as we continue our legacy of flavor, innovation, and tradition. Spicy Dosa welcomes you with open arms and a plateful of mouthwatering dosas. Your adventure in South Indian cuisine awaits!\")\n    main.appendChild(passageEight)\n\n    const headNine = createheading('head-9', 'Spicy Dosa - Where Every Dosa Tells a Story')\n    main.appendChild(headNine)\n    const headTen = createheading('head-10', 'Discover our menu, explore our flavors, and become a part of our legacy.')\n    main.appendChild(headTen)\n\n    content.appendChild(main)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home.js */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/about.js */ \"./src/Modules/about.js\");\n/* harmony import */ var _Modules_about_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modules_about_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/contact.js */ \"./src/Modules/contact.js\");\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Modules_Submodules_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/Submodules/header.js */ \"./src/Modules/Submodules/header.js\");\n/* harmony import */ var _Modules_Submodules_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/Submodules/footer.js */ \"./src/Modules/Submodules/footer.js\");\n\n\n\n\n\n\nfunction init() {\n    (0,_Modules_Submodules_header_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    ;(0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_Modules_Submodules_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n}\n\ninit()\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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