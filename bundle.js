/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/Submodules/delete.js":
/*!******************************************!*\
  !*** ./src/Modules/Submodules/delete.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction deleteMainContent() {\n    const main = document.querySelector('main')\n    while (main.firstChild) {\n        main.removeChild(main.firstChild);\n} \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteMainContent);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/delete.js?");

/***/ }),

/***/ "./src/Modules/Submodules/onload.js":
/*!******************************************!*\
  !*** ./src/Modules/Submodules/onload.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home */ \"./src/Modules/home.js\");\n\n\nfunction createTitleAndNav(id, text) {\n    const title = document.createElement('header');\n    title.setAttribute('id', id);\n    const logoText = document.createElement('h1')\n    logoText.textContent = text;\n    title.appendChild(logoText);\n\n    const nav = document.createElement('nav')\n    nav.setAttribute('id', \"nav\");\n    const homeBtn = createBtn('home', 'Home')\n    const menuBtn = createBtn('menu', 'Menu')\n    const contactBtn = createBtn('contact', 'Contact')\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    title.appendChild(nav)\n\n    return title\n}\n\nfunction createBtn(id, text) {\n    const button = document.createElement('button');\n    button.setAttribute('id', id);\n    button.textContent = text;\n    return button\n}\n\n\nfunction header() {\n    const content = document.querySelector('#content')\n\n    const titleContent = createTitleAndNav('header', \"Spicy Dosa\");\n    content.appendChild(titleContent)\n}\n\nfunction createfooter(id, text) {\n    const footerContent = document.createElement('footer')\n    footerContent.setAttribute('id',id)\n    const footerText = document.createElement('h3')\n    footerText.textContent = text\n    footerContent.appendChild(footerText)\n    return footerContent\n}\n\nfunction footer() {\n    const content = document.querySelector('#content')\n\n    const newFooter = createfooter('footer', 'Made by @SVigramR')\n    content.appendChild(newFooter)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/onload.js?");

/***/ }),

/***/ "./src/Modules/Submodules/text.js":
/*!****************************************!*\
  !*** ./src/Modules/Submodules/text.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   createPassage: () => (/* binding */ createPassage),\n/* harmony export */   createheading: () => (/* binding */ createheading)\n/* harmony export */ });\nfunction createPassage(id, text) {\n    const passage = document.createElement('p');\n    passage.setAttribute('id', id);\n    passage.textContent = text;\n    return passage;\n}\n\nfunction createheading(id, text) {\n    const heading = document.createElement('h2');\n    heading.setAttribute('id', id);\n    heading.textContent = text;\n    return heading;\n}\n\nfunction createImage(id, source, alt) {\n    const image = document.createElement('img');\n    image.setAttribute('id', id);\n    image.setAttribute('src', source);\n    image.setAttribute('alt', alt);\n    return image;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/text.js?");

/***/ }),

/***/ "./src/Modules/contact.js":
/*!********************************!*\
  !*** ./src/Modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submodules/text.js */ \"./src/Modules/Submodules/text.js\");\n/* harmony import */ var _Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submodules/delete.js */ \"./src/Modules/Submodules/delete.js\");\n\n\n\nfunction contactPage() {\n    (0,_Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const main = document.querySelector('main')\n    const passageOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-1', \"Thank you for considering Spicy Dosa for your culinary adventure in South Indian cuisine. We're delighted to be a part of your gastronomic journey. Feel free to reach out to us with any inquiries or to plan your visit. Here's how you can get in touch:\")\n    main.appendChild(passageOne)\n\n    const headingOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-1', 'Address:')\n    main.appendChild(headingOne)\n    const passageTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-2', \"Spicy Dosa Restaurant\")\n    passageTwo.innerHTML += \"<br>[Insert Address Here]\"\n    passageTwo.innerHTML += \"<br>Chennai, India [Insert ZIP Code]\"\n    main.appendChild(passageTwo)\n\n    const headingTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-2', 'Phone:')\n    main.appendChild(headingTwo)\n    const passageThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-3', \"Customer Service: +91-XXXXXXXXXX\")\n    passageThree.innerHTML += \"<br>Reservation: +91-XXXXXXXXXX\";\n    main.appendChild(passageThree)\n    \n    const headingThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-3', 'Email:')\n    main.appendChild(headingThree)\n    const passageFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-4', 'General Inquiries: info@spicydosa.com')\n    passageFour.innerHTML += '<br>Reservations: reservations@spicydosa.com'\n    main.appendChild(passageFour)\n\n    const headingFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-4', 'Connect with Us Online:')\n    main.appendChild(headingFour)\n    const passageFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-5', 'Website: www.spicydosa.com')\n    passageFive.innerHTML += \"<br>Facebook: www.facebook.com/SpicyDosa\"\n    passageFive.innerHTML += \"<br>Instagram: www.instagram.com/SpicyDosa\"\n    passageFive.innerHTML += \"<br>Twitter: www.twitter.com/SpicyDosa\"\n    main.appendChild(passageFive)\n\n    const headingFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-5', 'Operating Hours:')\n    main.appendChild(headingFive)\n    const passageSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-6', 'Monday - Sunday: 7:00 AM - 10:00 PM')\n    main.appendChild(passageSix)\n\n    const headingSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-6', 'Your Feedback Matters:')\n    main.appendChild(headingSix)\n    const passageSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('passage-7', \"At Spicy Dosa, we value your feedback and strive to provide the best dining experience. Please don't hesitate to share your thoughts with us. Your comments and suggestions help us continually enhance our offerings and service.\")\n    passageSeven.innerHTML += \"<br>We look forward to welcoming you to Spicy Dosa, where every dosa tells a story, and every visit is a culinary journey. Join us, and let's create delicious memories together!\"\n    main.appendChild(passageSeven)\n\n    const headingSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('heading-7', 'Spicy Dosa - Where Tradition and Innovation Meet on Your Plate')\n    main.appendChild(headingSeven)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/contact.js?");

/***/ }),

/***/ "./src/Modules/home.js":
/*!*****************************!*\
  !*** ./src/Modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submodules/text.js */ \"./src/Modules/Submodules/text.js\");\n/* harmony import */ var _Submodules_onload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submodules/onload.js */ \"./src/Modules/Submodules/onload.js\");\n\n\n\nfunction homePage() {\n    (0,_Submodules_onload_js__WEBPACK_IMPORTED_MODULE_1__.header)()\n    const content = document.querySelector('#content')\n    const main = document.createElement('main')\n\n    const headOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-1', 'Welcome to Spicy Dosa - A Century of Dosa Excellence!')\n    main.appendChild(headOne)\n    const headTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-2', 'Discover the Essence of South Indian Cuisine')\n    main.appendChild(headTwo)\n    const passageOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-1', 'At Spicy Dosa, we take pride in introducing you to the exquisite world of dosa, a beloved South Indian delicacy that has captured hearts and palates for generations. Our journey began a century ago, and today, we continue the tradition of serving the finest dosas, crafted with passion and heritage.')\n    main.appendChild(passageOne)\n\n    const headthree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-3', 'A Culinary Marvel')\n    main.appendChild(headthree)\n    const passageTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-2', 'Dosa, a thin savory pancake, is a marvel in South Indian cuisine. Our dosas are a true labor of love, prepared from a meticulously fermented batter of ground black lentils and rice. Each dosa embodies the perfect balance of flavors and textures, making every bite a delightful experience.')\n    main.appendChild(passageTwo)\n\n    const headFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-4', 'Innovation Amidst Tradition')\n    main.appendChild(headFour)\n    const passageThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-3', 'Creating a name out of this simple yet cherished dish is a continuous journey of creativity and dedication. At Spicy Dosa, we embrace both tradition and innovation. Our menu boasts a diverse range of dosas, from time-honored classics to our own signature creations, each with a unique twist that will tantalize your taste buds.')\n    main.appendChild(passageThree)\n\n    const headFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-5', 'A Legacy of Flavor')\n    main.appendChild(headFive)\n    const passageFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-4', 'Our roots trace back to Chennai, where a humble diner transformed into a sprawling restaurant. Throughout the years, we owe our success to the unwavering dedication of our predecessors. They ensured that our doors remained open during challenging times, preserving the authenticity and quality of our food.')\n    main.appendChild(passageFour)\n\n    const headSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-6', '100 Years of Culinary Heritage')\n    main.appendChild(headSix)\n    const passageFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-5', \"Today, it's our honor to continue this rich legacy. Spicy Dosa is more than a restaurant; it's a testament to a century of dedication to serving exceptional dosas. We cherish our heritage and are determined to carry it forward for generations to come.\")\n    main.appendChild(passageFive)\n\n    const headSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-7', 'Your Journey Begins Here')\n    main.appendChild(headSeven)\n    const passageSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-6', 'As we look to the future, our mission is clear: to successfully run the restaurant and expand our reach. We envision multiple chains and franchises across the globe, all proudly carrying the Spicy Dosa name.')\n    main.appendChild(passageSix)\n\n    const headEight = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-8', 'Visit Us and Be Transformed')\n    main.appendChild(headEight)\n    const passageSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-7', \"We invite you to embark on a gastronomic journey with us. Come and savor the magic of dosa at Spicy Dosa. We are confident that once you've experienced our dosas, you'll return time and again, becoming a part of our extended family.\")\n    main.appendChild(passageSeven)\n    const passageEight = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('pass-8', \"Join us as we continue our legacy of flavor, innovation, and tradition. Spicy Dosa welcomes you with open arms and a plateful of mouthwatering dosas. Your adventure in South Indian cuisine awaits!\")\n    main.appendChild(passageEight)\n\n    const headNine = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-9', 'Spicy Dosa - Where Every Dosa Tells a Story')\n    main.appendChild(headNine)\n    const headTen = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('head-10', 'Discover our menu, explore our flavors, and become a part of our legacy.')\n    main.appendChild(headTen)\n\n    content.appendChild(main)\n\n    ;(0,_Submodules_onload_js__WEBPACK_IMPORTED_MODULE_1__.footer)()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/home.js?");

/***/ }),

/***/ "./src/Modules/menu.js":
/*!*****************************!*\
  !*** ./src/Modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submodules/text.js */ \"./src/Modules/Submodules/text.js\");\n/* harmony import */ var _Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submodules/delete.js */ \"./src/Modules/Submodules/delete.js\");\n/* harmony import */ var _Submodules_masala_dosa_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Submodules/masala-dosa.jpg */ \"./src/Modules/Submodules/masala-dosa.jpg\");\n\n\n\n\nfunction menuPage() {\n    (0,_Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const main = document.querySelector('main')\n    \n    const imageOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-1', _Submodules_masala_dosa_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Traditional Dosa')\n    main.appendChild(imageOne)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home.js */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/menu.js */ \"./src/Modules/menu.js\");\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/contact.js */ \"./src/Modules/contact.js\");\n\n\n\n\n(0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst content = document.querySelector('#content');\n\ncontent.addEventListener('click', function(event) {\n    if (event.target.id === 'home') {\n        clearPage();\n        (0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (event.target.id === 'menu') {\n        (0,_Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (event.target.id === 'contact') {\n        (0,_Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n});\n\nfunction clearPage() {\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/Modules/Submodules/masala-dosa.jpg":
/*!************************************************!*\
  !*** ./src/Modules/Submodules/masala-dosa.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"072342cccebc850b3a36.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/masala-dosa.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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