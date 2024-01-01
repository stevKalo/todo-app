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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  position: relative;\n}\n\ninput,\ntextarea,\nbutton,\nselect {\n  font: inherit;\n  border: inherit;\n  background-color: inherit;\n  color: inherit;\n}\n\n:root {\n  --primary: #6b9080;\n  --secondary: #a4c3b2;\n  --accent: #cce3de;\n  --background: #f6fff8;\n  --foreground: #eaf4f4;\n  --high: #ce5858;\n  color: var(--primary);\n  background-color: var(--background);\n  border-color: var(--secondary);\n  font-family: \"Inter\", sans-serif;\n}\n\ndiv#content {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 7vh 1fr;\n  min-height: 100vh;\n}\n\nheader {\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n  background-color: var(--primary);\n  color: var(--background);\n  padding: 15px;\n  font-size: clamp(10px, 5vw, 30px);\n}\n\nnav {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  background-color: var(--foreground);\n  padding: 15px;\n}\n\nnav > ul {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50px 5px;\n  grid-auto-rows: 50px;\n  gap: 10px;\n}\n\nul > li {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\nbutton.nav-btn {\n  background-color: var(--secondary);\n  color: var(--background);\n  padding: 10px 15px;\n  border-radius: 10px;\n  transition: 0.3s;\n}\ndiv.spacer {\n  background-color: var(--primary);\n  border-radius: 5px;\n}\n\nbutton.nav-btn:hover {\n  transform: scale(1.02);\n  background-color: var(--primary);\n}\n\n#nav-project {\n  text-align: center;\n}\n\n.main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  padding: 15px;\n}\n\n.main > ul {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 50px;\n  gap: 10px;\n}\n\n.item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  background-color: var(--accent);\n  padding: 10px;\n  border-radius: 10px;\n  transition: 0.5s;\n}\n\n.item:hover,\n.item:focus {\n  transform: scale(1.02);\n}\n\n.item-title {\n  text-align: start;\n}\n\n.item-date {\n  text-align: end;\n}\n\ndialog {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--foreground);\n  color: var(--primary);\n  padding: 15px;\n  border-radius: 10px;\n  border: 2px solid var(--secondary);\n}\n\ndialog > div > form {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 40px 50px 1fr 50px 50px;\n  align-items: start;\n  justify-items: center;\n}\n\nselect,\ninput,\ntextarea {\n  background-color: var(--background);\n  border-radius: 5px;\n  border: 2px solid var(--secondary);\n  padding: 2px;\n}\n\nbutton#save-btn {\n  grid-column: 1/2;\n}\n\nbutton#modal-close {\n  grid-column: 2/3;\n}\n\nbutton.modal-btn {\n  background-color: var(--secondary);\n  color: var(--background);\n  padding: 10px 15px;\n  border-radius: 10px;\n  transition: 0.3s;\n  grid-row: 5/6;\n  width: 50%;\n}\n\nbutton.modal-btn:hover {\n  transform: scale(1.02);\n  background-color: var(--primary);\n}\n\n#title {\n  height: 100%;\n  width: 100%;\n  font-size: 20px;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n\n#due-date {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n#project-label {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n#notes {\n  width: 100%;\n  grid-column: 1/ 3;\n  grid-row: 3/4;\n  resize: none;\n}\n\n#priority {\n  grid-column: 1/3;\n  grid-row: 4/5;\n}\n\n*::placeholder {\n  color: var(--secondary);\n  opacity: 0.7;\n}\n\n.priority-high {\n  background-color: var(--high);\n  color: var(--background);\n}\n\n#close-btn {\n  background-color: var(--secondary);\n  color: var(--background);\n  padding: 5px 10px;\n  border-radius: 10px;\n  border: 0;\n  transition: 0.3s;\n}\n\n#close-btn:hover {\n  transform: scale(1.02);\n  background-color: var(--primary);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createInfo: () => (/* binding */ createInfo),\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   createOption: () => (/* binding */ createOption)\n/* harmony export */ });\nfunction createInfo(item) {\n  const body = document.querySelector(\"body\");\n  const modal = document.createElement(\"dialog\");\n  modal.setAttribute(\"id\", \"info-modal\");\n\n  const titleInfo = document.createElement(\"h2\");\n  titleInfo.textContent = item.title;\n  titleInfo.setAttribute(\"id\", \"title-info\");\n\n  const dateInfo = document.createElement(\"date\");\n  dateInfo.textContent = item.dueDate;\n  dateInfo.setAttribute(\"id\", \"date-info\");\n\n  const projectInfo = document.createElement(\"span\");\n  projectInfo.textContent = item.project;\n  projectInfo.setAttribute(\"id\", \"project-info\");\n\n  const notesInfo = document.createElement(\"p\");\n  notesInfo.textContent = item.description;\n  notesInfo.setAttribute(\"id\", \"notes-info\");\n\n  const closeBtn = document.createElement(\"button\");\n  closeBtn.setAttribute(\"id\", \"close-btn\");\n  closeBtn.textContent = \"Close\";\n  closeBtn.addEventListener(\"click\", () => {\n    const modal = document.getElementById(\"info-modal\");\n    modal.close();\n    modal.remove();\n    // close modal\n    // remove modal from DOM\n  });\n\n  body.appendChild(modal);\n  modal.appendChild(titleInfo);\n  modal.appendChild(dateInfo);\n  modal.appendChild(projectInfo);\n  modal.appendChild(notesInfo);\n  modal.appendChild(closeBtn);\n\n  // make modal\n  // make info elements\n  // make close button\n  // add button functionality\n  // push modal to dom\n  // push elements to modal\n}\n\nfunction createItem(obj, parent) {\n  const item = document.createElement(\"li\");\n  item.classList.add(\"item\");\n  item.classList.add(`priority-${obj.priority}`);\n  item.addEventListener(\"click\", () => {\n    createInfo(obj);\n    document.getElementById(\"info-modal\").showModal();\n  });\n\n  const itemTitle = document.createElement(\"span\");\n  itemTitle.classList.add(\"item-title\");\n  itemTitle.textContent = obj.title;\n\n  const itemDate = document.createElement(\"span\");\n  itemDate.classList.add(\"item-date\");\n  itemDate.textContent = obj.dueDate;\n\n  parent.appendChild(item);\n  item.appendChild(itemTitle);\n  item.appendChild(itemDate);\n}\n\nfunction createOption(project) {\n  const projectOption = document.getElementById(\"project-options\");\n  const projectFilter = document.getElementById(\"nav-project\");\n  const autoOption = document.createElement(\"option\");\n  const filterOption = document.createElement(\"option\");\n  autoOption.value = project;\n  filterOption.value = project;\n  filterOption.textContent = project;\n  projectOption.appendChild(autoOption);\n  projectFilter.appendChild(filterOption);\n}\n\n\n//# sourceURL=webpack://todo-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.js */ \"./src/items.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n// Global Variables\nconst content = document.getElementById(\"content\");\nconst addBtn = document.getElementById(\"add-btn\");\nconst homeBtn = document.getElementById(\"home-btn\");\nconst importantBtn = document.getElementById(\"important-btn\");\nconst dialog = document.getElementById(\"todo-modal\");\nconst saveBtn = document.getElementById(\"save-btn\");\nconst closeBtn = document.getElementById(\"modal-close\");\nconst taskList = document.getElementById(\"tasks\");\nconst projectNav = document.getElementById(\"nav-project\");\n\n// Todo List Array\nlet todoList = [];\n\n// Project List Array\nlet projectList = [];\n\nfunction updateProjectList(item) {\n  projectList.push(item);\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createOption)(item);\n}\n\n// Clear Functions\nfunction modalClear() {\n  document.getElementById(\"title\").value = \"\";\n  document.getElementById(\"priority\").value = \"\";\n  document.getElementById(\"due-date\").value = \"\";\n  document.getElementById(\"notes\").value = \"\";\n  document.getElementById(\"project\").value = \"\";\n}\n\nfunction todoClear() {\n  while (taskList.firstChild) {\n    taskList.removeChild(taskList.firstChild);\n  }\n}\n\n// On Load Functions\nwindow.onload = () => {\n  const urgentSample = new _items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    \"This is an Urgent Task\",\n    \"high\",\n    \"2020-07-01\",\n    \"This is a test description for my urgent todo object\",\n    \"Test Project\",\n    false\n  );\n  updateProjectList(\"Test Project\");\n  todoList.push(urgentSample);\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(urgentSample, taskList);\n\n  const normalSample = new _items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    \"This is a Sample Task\",\n    \"\",\n    \"2020-07-02\",\n    \"This the another description of  Todo item\",\n    \"Sample Project\",\n    false\n  );\n  updateProjectList(\"Sample Project\");\n  todoList.push(normalSample);\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(normalSample, taskList);\n};\n\n// Open Modal\naddBtn.addEventListener(\"click\", () => {\n  dialog.showModal();\n});\n\n// Modal Buttons\n\n// Save Item\nsaveBtn.addEventListener(\"click\", () => {\n  const title = document.getElementById(\"title\").value;\n  const priority = document.getElementById(\"priority\").value;\n  const dueDate = document.getElementById(\"due-date\").value;\n  const description = document.getElementById(\"notes\").value;\n  const project = document.getElementById(\"project\").value;\n\n  if (project != \"\") {\n    if (!projectList.includes(project)) {\n      updateProjectList(project);\n    }\n  }\n  const todoItem = new _items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    title,\n    priority,\n    dueDate,\n    description,\n    project,\n    false\n  );\n  todoList.push(todoItem);\n  dialog.close();\n  modalClear();\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(todoItem, taskList);\n});\n\n// Close Modal\ncloseBtn.addEventListener(\"click\", () => {\n  modalClear();\n  dialog.close();\n});\n\n// Project Filtering\nprojectNav.addEventListener(\"change\", (event) => {\n  const selectedProject = event.target.value;\n  todoClear();\n  if (selectedProject != \"default\") {\n    todoList.map((item) => {\n      if (item.project == selectedProject) {\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(item, taskList);\n      }\n    });\n  } else {\n    todoList.map((item) => {\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(item, taskList);\n    });\n  }\n});\n\n// Priority Filtering\nimportantBtn.addEventListener(\"click\", () => {\n  todoClear();\n  todoList.map((item) => {\n    if (item.priority == \"high\") {\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(item, taskList);\n    }\n  });\n});\n\n// Filter Reset\nhomeBtn.addEventListener(\"click\", () => {\n  todoClear();\n  todoList.map((item) => {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(item, taskList);\n  });\n});\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem {\n  constructor(\n    title = \"\",\n    priority = \"\",\n    dueDate = \"\",\n    description = \"\",\n    project = \"\",\n    status = false\n  ) {\n    this.title = title;\n    this.priority = priority;\n    this.dueDate = dueDate;\n    this.description = description;\n    this.project = project;\n    this.status = status;\n  }\n\n  changeStatus() {\n    this.status = !this.status;\n  }\n\n  changeProp(prop, value) {\n    this[prop] = value;\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/items.js?");

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