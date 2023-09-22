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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Norse-Bold.otf */ \"./src/Fonts/Norse-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: norse-bold;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    font-weight: 900;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#content {\n    background-color: aquamarine; \n    display: flex;\n    flex-direction: column;\n    width: auto;\n    min-height: 100vh;\n    text-align: center;\n    margin: 0;\n}\n\n#header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n    background-color: black;\n}\n\nheader h1 {\n    font-family: norse-bold;\n    color: aqua;\n    font-size: 4rem;\n    font-weight: 900;\n}\n\n#nav {\n    display: flex;\n    justify-content: flex-start;\n    gap: 10px;\n}\n\nbutton {\n    border: none;\n    background-color: black;\n    color: aqua;\n    font-size: 2rem;\n    border-radius: 5px;\n    padding: 1rem;\n}\n\nbutton:hover {\n    transform: scale(1.1);\n    color: aquamarine;\n}\n\nmain {\n    flex: 1;\n    margin: 2rem;\n}\n\nmain h2 {\n    margin: 1rem;\n}\n\nmain p {\n    font-size: large;\n    text-align: justify;\n    margin: 0 10rem;\n}\n\n#para-1, #para-2, #para-3, #para-4, #para-5, #para-6, #para-7, #para-8, #para-9, #para-10 {\n    text-align: center;\n}\n\nimg {\n    width: 10rem;\n    height: 10rem;\n}\n\n#passage-2, #passage-3, #passage-4, #passage-5, #passage-6 {\n    text-align: center;\n}\n\n#footer {\n    color: aqua;\n    background-color: black;\n    padding: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submodules/text.js */ \"./src/Modules/Submodules/text.js\");\n/* harmony import */ var _Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submodules/delete.js */ \"./src/Modules/Submodules/delete.js\");\n/* harmony import */ var _Submodules_traditional_dosa_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Submodules/traditional-dosa.jpeg */ \"./src/Modules/Submodules/traditional-dosa.jpeg\");\n/* harmony import */ var _Submodules_masala_dosa_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Submodules/masala-dosa.jpg */ \"./src/Modules/Submodules/masala-dosa.jpg\");\n/* harmony import */ var _Submodules_paneer_dosa_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Submodules/paneer-dosa.jpeg */ \"./src/Modules/Submodules/paneer-dosa.jpeg\");\n/* harmony import */ var _Submodules_spinach_cheese_dosa_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submodules/spinach-cheese-dosa.jpeg */ \"./src/Modules/Submodules/spinach-cheese-dosa.jpeg\");\n/* harmony import */ var _Submodules_chilli_cheese_dosa_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Submodules/chilli-cheese-dosa.jpeg */ \"./src/Modules/Submodules/chilli-cheese-dosa.jpeg\");\n/* harmony import */ var _Submodules_ghee_roast_dosa_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Submodules/ghee-roast-dosa.jpeg */ \"./src/Modules/Submodules/ghee-roast-dosa.jpeg\");\n/* harmony import */ var _Submodules_chocolate_dosa_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Submodules/chocolate-dosa.jpeg */ \"./src/Modules/Submodules/chocolate-dosa.jpeg\");\n/* harmony import */ var _Submodules_chefs_special_dosa_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Submodules/chefs-special-dosa.jpeg */ \"./src/Modules/Submodules/chefs-special-dosa.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\nfunction menuPage() {\n    (0,_Submodules_delete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const main = document.querySelector('main')\n\n    const paraZero = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-0', \"Welcome to the heart of our culinary journey. At Spicy Dosa, we bring you an array of dosa creations that showcase the essence of South Indian cuisine, all meticulously prepared with the finest ingredients and a touch of tradition. Explore our menu and get ready to embark on a delightful gastronomic adventure.\")\n    main.appendChild(paraZero)\n\n    const headOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-1', \"1. Traditional Dosa\")\n    main.appendChild(headOne)\n    const imageOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-1', _Submodules_traditional_dosa_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'Traditional Dosa')\n    main.appendChild(imageOne)\n    const paraOne = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-1', \"Our homage to the classic dosa. Thin, crispy, and served with a variety of chutneys and sambar.\")\n    main.appendChild(paraOne)\n\n    const headTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-2', \"2. Masala Dosa\")\n    main.appendChild(headTwo)\n    const imageTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-2', _Submodules_masala_dosa_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Masala Dosa\")\n    main.appendChild(imageTwo)\n    const paraTwo = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-2', \"A beloved favorite, featuring a delicious spiced potato filling wrapped in a golden dosa.\")\n    main.appendChild(paraTwo)\n\n    const headThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-3', \"3. Paneer Dosa\")\n    main.appendChild(headThree)\n    const imageThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-3', _Submodules_paneer_dosa_jpeg__WEBPACK_IMPORTED_MODULE_4__, \"Paneer Dosa\")\n    main.appendChild(imageThree)\n    const paraThree = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-3', \"Indulge in the creamy goodness of paneer, blended with aromatic spices, and encased in a dosa.\")\n    main.appendChild(paraThree)\n\n    const headFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-4', \"4. Spinach and Cheese Dosa\")\n    main.appendChild(headFour)\n    const imageFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-4', _Submodules_spinach_cheese_dosa_jpeg__WEBPACK_IMPORTED_MODULE_5__, \"Spinach and Cheese Dosa\" )\n    main.appendChild(imageFour)\n    const paraFour = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-4', \"A fusion of flavors that combines the healthiness of spinach with the richness of cheese.\")\n    main.appendChild(paraFour)\n\n    const headFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-5', \"5. Chilli Cheese Dosa\")\n    main.appendChild(headFive)\n    const imageFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-5', _Submodules_chilli_cheese_dosa_jpeg__WEBPACK_IMPORTED_MODULE_6__, \"Chilli Cheese Dosa\")\n    main.appendChild(imageFive)\n    const paraFive = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-5', \"For the spice lovers! A zesty combination of green chillies and melted cheese.\")\n    main.appendChild(paraFive)\n\n    const headSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-6', \"6. Ghee Roast Dosa\")\n    main.appendChild(headSix)\n    const imageSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-6', _Submodules_ghee_roast_dosa_jpeg__WEBPACK_IMPORTED_MODULE_7__, \"Ghee Roast Dosa\")\n    main.appendChild(imageSix)\n    const paraSix = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-6', \"Experience the heavenly aroma and rich taste of ghee in every bite.\")\n    main.appendChild(paraSix)\n\n    const headSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-7', \"7. Chocolate Dosa\")\n    main.appendChild(headSeven)\n    const imageSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-7', _Submodules_chocolate_dosa_jpeg__WEBPACK_IMPORTED_MODULE_8__, \"Chocolate Dosa\")\n    main.appendChild(imageSeven)\n    const paraSeven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-7', \"A sweet twist on tradition, this dosa is a dessert lover's dream.\")\n    main.appendChild(paraSeven)\n\n    const headEight = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-8', \"8. Special Chef's Dosa\")\n    main.appendChild(headEight)\n    const imageEight = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('image-8', _Submodules_chefs_special_dosa_jpeg__WEBPACK_IMPORTED_MODULE_9__, \"Special Chef's Dosa\")\n    main.appendChild(imageEight)\n    const paraEight = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-8', \"Our chef's special creation that changes regularly. Ask your server for today's surprise.\")\n    main.appendChild(paraEight)\n\n    const headNine = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-9', \"Accompaniments:\")\n    main.appendChild(headNine)\n    const paraNine = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-9', \"Coconut Chutney\")\n    paraNine.innerHTML += \"<br>Tomato Chutney\"\n    paraNine.innerHTML += \"<br>Mint Chutney\"\n    paraNine.innerHTML += \"<br>Sambar\"\n    main.appendChild(paraNine)\n\n    const headTen = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-10', \"Beverages:\")\n    main.appendChild(headTen)\n    const paraTen = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-10', \"Fresh Fruit Juices\")\n    paraTen.innerHTML += \"<br>South Indian Filter Coffee\"\n    paraTen.innerHTML += \"<br>Masala Chai\"\n    main.appendChild(paraTen)\n\n    const headEleven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-11', \"Visit Spicy Dosa Today!\")\n    main.appendChild(headEleven)\n    const paraEleven = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createPassage)('para-11', \"Our menu is designed to cater to diverse tastes, ensuring there's something for everyone. Whether you're a dosa aficionado or trying it for the first time, we guarantee an unforgettable dining experience.\")\n    paraEleven.innerHTML += \"<br>Join us at Spicy Dosa, where every dosa tells a story of flavor, innovation, and tradition. We look forward to serving you and adding a new chapter to your love for dosas.\"\n    main.appendChild(paraEleven)\n\n    const headTwelve = (0,_Submodules_text_js__WEBPACK_IMPORTED_MODULE_0__.createheading)('header-12', \"Spicy Dosa - Where Tradition Meets Innovation on Your Plate\")\n    main.appendChild(headTwelve)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home.js */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/menu.js */ \"./src/Modules/menu.js\");\n/* harmony import */ var _Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/contact.js */ \"./src/Modules/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n(0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst content = document.querySelector('#content');\n\ncontent.addEventListener('click', function(event) {\n    if (event.target.id === 'home') {\n        clearPage();\n        (0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (event.target.id === 'menu') {\n        (0,_Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (event.target.id === 'contact') {\n        (0,_Modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n});\n\nfunction clearPage() {\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/Fonts/Norse-Bold.otf":
/*!**********************************!*\
  !*** ./src/Fonts/Norse-Bold.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5efe60ef5042faec1224.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Fonts/Norse-Bold.otf?");

/***/ }),

/***/ "./src/Modules/Submodules/chefs-special-dosa.jpeg":
/*!********************************************************!*\
  !*** ./src/Modules/Submodules/chefs-special-dosa.jpeg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68b194a547cee71ecd8e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/chefs-special-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/chilli-cheese-dosa.jpeg":
/*!********************************************************!*\
  !*** ./src/Modules/Submodules/chilli-cheese-dosa.jpeg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f9761b891d6ec38d90d.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/chilli-cheese-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/chocolate-dosa.jpeg":
/*!****************************************************!*\
  !*** ./src/Modules/Submodules/chocolate-dosa.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06d268acce8efe1d8c8b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/chocolate-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/ghee-roast-dosa.jpeg":
/*!*****************************************************!*\
  !*** ./src/Modules/Submodules/ghee-roast-dosa.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6abce54aa66c10be0e60.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/ghee-roast-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/masala-dosa.jpg":
/*!************************************************!*\
  !*** ./src/Modules/Submodules/masala-dosa.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"072342cccebc850b3a36.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/masala-dosa.jpg?");

/***/ }),

/***/ "./src/Modules/Submodules/paneer-dosa.jpeg":
/*!*************************************************!*\
  !*** ./src/Modules/Submodules/paneer-dosa.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4851354793c21e019dcf.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/paneer-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/spinach-cheese-dosa.jpeg":
/*!*********************************************************!*\
  !*** ./src/Modules/Submodules/spinach-cheese-dosa.jpeg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"728d2698ca4123b6d65c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/spinach-cheese-dosa.jpeg?");

/***/ }),

/***/ "./src/Modules/Submodules/traditional-dosa.jpeg":
/*!******************************************************!*\
  !*** ./src/Modules/Submodules/traditional-dosa.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a313d554fcc461255134.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/Submodules/traditional-dosa.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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