"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjscap_project"] = self["webpackChunkjscap_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./items/noom-peerapong-2uwFEAGUm6E-unsplash 1.png */ \"./src/items/noom-peerapong-2uwFEAGUm6E-unsplash 1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./items/contact-back.png */ \"./src/items/contact-back.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@300;500&family=Rubik+Glitch&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  font-family: 'Dosis', sans-serif;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  background-color: rgba(0, 0, 0, 0.876);\\r\\n  padding: 1rem;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  z-index: 100;\\r\\n  margin-bottom: 2rem;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.nav-item a {\\r\\n  color: white;\\r\\n  transition: ease-in-out 0.5s;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n  margin-top: 8rem;\\r\\n  text-align: center;\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.main-content p {\\r\\n  font-family: 'Rubik Glitch', cursive;\\r\\n  text-align: center;\\r\\n  margin-left: 2rem;\\r\\n  font-size: 3rem;\\r\\n  text-transform: uppercase;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      -225deg,\\r\\n      white 0%,\\r\\n      black 12%,\\r\\n      red 29%,\\r\\n      #a15f46 67%,\\r\\n      white 80%,\\r\\n      white 100%\\r\\n    );\\r\\n  background-size: 200% auto;\\r\\n  color: #fff;\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  animation: textclip 6s linear infinite;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n@keyframes textclip {\\r\\n  to {\\r\\n    background-position: 200% center;\\r\\n  }\\r\\n}\\r\\n\\r\\n.popup-coments-wrapper {\\r\\n  display: none;\\r\\n  background: rgba(0, 0, 0, 0.5);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 200;\\r\\n}\\r\\n\\r\\n.popup-close {\\r\\n  position: absolute;\\r\\n  top: 5%;\\r\\n  z-index: 500;\\r\\n  left: 75%;\\r\\n  font-size: 30px;\\r\\n  font-weight: bold;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.pop-up-contents {\\r\\n  max-width: 800px;\\r\\n  margin: 2% auto;\\r\\n  padding: 20px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.card-section {\\r\\n  display: grid;\\r\\n  grid-template-columns: 33.3% 33.3% 33.3%;\\r\\n  grid-template-rows: 50% 50%;\\r\\n  gap: 10px;\\r\\n  justify-content: space-between;\\r\\n  padding: 3rem;\\r\\n  margin-top: 0.5rem;\\r\\n  margin-bottom: 12rem;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  max-height: 300px;\\r\\n  white-space: nowrap;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n.likes p {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 4px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background: red;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background: white;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  margin-bottom: auto;\\r\\n  position: fixed;\\r\\n  bottom: 0%;\\r\\n  background-color: black;\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.about {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  padding-bottom: 12rem;\\r\\n  background-color: white;\\r\\n  margin-bottom: 8rem;\\r\\n}\\r\\n\\r\\n.about-us {\\r\\n  padding: 8rem;\\r\\n  border: solid black 2px;\\r\\n  border-radius: 6px;\\r\\n  margin: 3rem;\\r\\n  text-align: center;\\r\\n  font-family: inherit;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.about-team {\\r\\n  font-family: 'Rubik Glitch', cursive;\\r\\n  text-align: center;\\r\\n\\r\\n  /* margin-left: 2rem; */\\r\\n  font-size: 3rem;\\r\\n  margin-top: 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n  text-transform: uppercase;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      -225deg,\\r\\n      white 0%,\\r\\n      black 12%,\\r\\n      red 29%,\\r\\n      #a15f46 67%,\\r\\n      white 80%,\\r\\n      white 100%\\r\\n    );\\r\\n  background-size: 200% auto;\\r\\n  color: #fff;\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  animation: textclip 6s linear infinite;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.cards-bio {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 40px;\\r\\n  top: 245%;\\r\\n  left: 27%;\\r\\n}\\r\\n\\r\\n.bio-card {\\r\\n  display: none;\\r\\n  padding: 3rem;\\r\\n}\\r\\n\\r\\n.contact-us {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  padding: 4rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  border-bottom: 2px solid red;\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n.contact-us > p {\\r\\n  text-align: center;\\r\\n  color: white;\\r\\n  letter-spacing: 4px;\\r\\n}\\r\\n\\r\\n.profiles {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  font-size: 20px;\\r\\n  padding: 3rem;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.people {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.people a {\\r\\n  color: red;\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.nav-item a:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.people p {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.profile-name {\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.footer > p {\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.non-show {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#about:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jscap-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://jscap-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://jscap-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://jscap-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jscap-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jscap-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get.js */ \"./src/modules/get.js\");\n/* harmony import */ var _modules_counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counters.js */ \"./src/modules/counters.js\");\n/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/nav.js */ \"./src/modules/nav.js\");\n\r\n\r\n\r\n\r\n\r\n_modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showList(); // switch to list section as default.\r\ndocument.getElementById('home').addEventListener('click', () => {\r\n  _modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showList(); // switch to list section.\r\n});\r\ndocument.getElementById('contact').addEventListener('click', () => {\r\n  _modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showcontact(); // switch to contact section.\r\n});\r\ndocument.getElementById('about').addEventListener('click', () => {\r\n  _modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showabout(); // switch about section.\r\n});\r\n\r\n// making sure the widow is loaded then all data is provided.\r\nwindow.onload = async () => {\r\n  await _modules_get_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getShows();\r\n  setTimeout(() => {\r\n    _modules_counters_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].itemsCounter();\r\n  }, '5000');\r\n};\r\n\n\n//# sourceURL=webpack://jscap-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddMovies)\n/* harmony export */ });\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\r\n\r\nclass AddMovies {\r\n  // this function is for adding shows to the website\r\n  static addlist = (list, id) => {\r\n    // creating html elements and getting the section id\r\n    const shows = document.getElementById('show-cards');\r\n    const container = document.createElement('div');\r\n    const showImg = document.createElement('img');\r\n    const cardHouse = document.createElement('div');\r\n    const title = document.createElement('h5');\r\n    const description = document.createElement('div');\r\n    const button = document.createElement('a');\r\n    const likesHouse = document.createElement('div');\r\n    const likesP = document.createElement('p');\r\n    const icon = document.createElement('i');\r\n    const num = document.createElement('span');\r\n    const likeText = document.createElement('span');\r\n\r\n    // adding classes to different elements\r\n\r\n    container.classList.add('card');\r\n    showImg.classList.add('card-img-top');\r\n    cardHouse.classList.add('card-body');\r\n    title.classList.add('card-title');\r\n    description.classList.add('card-text');\r\n    likesHouse.classList.add('likes');\r\n    button.classList.add('btn', 'btn-primary');\r\n    container.setAttribute('style', 'width: 100%;');\r\n    icon.classList.add('fa-regular', 'fa-heart');\r\n\r\n    // assigning api variables to deferent elements\r\n\r\n    showImg.src = list.image.medium;\r\n    showImg.alt = 'show image';\r\n    title.innerText = list.name;\r\n    let sum = list.summary;\r\n    sum = sum.replace(/^\"(.*)\"$/, '$1');\r\n    description.innerHTML = `${sum}`;\r\n    likeText.innerText = 'likes';\r\n    button.href = list.show;\r\n    button.innerText = 'comments';\r\n\r\n    // appending elements with each other\r\n    likesP.appendChild(icon);\r\n    likesP.appendChild(likeText);\r\n    likesP.appendChild(num);\r\n    likesHouse.appendChild(likesP);\r\n    cardHouse.appendChild(title);\r\n    cardHouse.appendChild(description);\r\n    cardHouse.appendChild(likesHouse);\r\n    cardHouse.appendChild(button);\r\n    container.appendChild(showImg);\r\n    container.appendChild(cardHouse);\r\n    shows.appendChild(container);\r\n\r\n    // added like feature to specific show\r\n    _postLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likeupdate(id, num);\r\n    icon.addEventListener('click', () => {\r\n      _postLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likecolor(icon);\r\n      _postLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likeupdate(id, num);\r\n    });\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jscap-project/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Counters)\n/* harmony export */ });\nclass Counters {\r\n  static itemsCounter = () => {\r\n    const items = document.getElementById('show-cards');\r\n    const directChildren = items.children.length;\r\n    document.getElementById('itemcount').innerText = directChildren;\r\n    return directChildren;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jscap-project/./src/modules/counters.js?");

/***/ }),

/***/ "./src/modules/get.js":
/*!****************************!*\
  !*** ./src/modules/get.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Get)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\r\n\r\nclass Get {\r\n  static getShows = async () => {\r\n    // assignees the method to GET\r\n    const options = { method: 'GET' };\r\n    // listed the id's of different shows\r\n    const premier = [169, 6, 541, 172, 1871, 3282];\r\n    // fatches the data of each id and add's it to the list\r\n    premier.forEach((id) => {\r\n      const apperlist = async () => {\r\n        await fetch(`https://api.tvmaze.com/shows/${id}`, options)\r\n          .then((res) => res.json())\r\n          .then((data) => _add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addlist(data, id));\r\n      };\r\n      apperlist();\r\n    });\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jscap-project/./src/modules/get.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Showsection)\n/* harmony export */ });\nclass Showsection {\r\n  // shows only list section\r\n  static showList = () => {\r\n    document.getElementById('show-cards').classList.remove('non-show');\r\n    document.getElementById('about-section').classList.add('non-show');\r\n    document.getElementById('contact-section').classList.add('non-show');\r\n  };\r\n\r\n  // shows only about section\r\n  static showabout = () => {\r\n    document.getElementById('about-section').classList.remove('non-show');\r\n    document.getElementById('show-cards').classList.add('non-show');\r\n    document.getElementById('contact-section').classList.add('non-show');\r\n  };\r\n\r\n  // shows only contact section\r\n  static showcontact = () => {\r\n    document.getElementById('contact-section').classList.remove('non-show');\r\n    document.getElementById('show-cards').classList.add('non-show');\r\n    document.getElementById('about-section').classList.add('non-show');\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jscap-project/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostLikes)\n/* harmony export */ });\nclass PostLikes {\r\n  // posting the likes from the server on the website\r\n  static likePost = async (id, num) => {\r\n    const GET = {\r\n      method: 'GET',\r\n      headers: { 'Content-Type': 'application/json' },\r\n    };\r\n\r\n    await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',\r\n      GET,\r\n    )\r\n      .then((response) => response.json())\r\n      .then((data) => data.forEach((showsLikes) => {\r\n        if (showsLikes.item_id - 1000 === id - 1000) {\r\n          num.innerText = showsLikes.likes;\r\n        }\r\n      }))\r\n      .catch(new Error('refresh page'));\r\n  };\r\n  // changing the color of the like icon when clicked\r\n\r\n  static likecolor = (icon) => {\r\n    icon.style.color = 'red';\r\n  };\r\n  // updating the likes in the server and posting them again on the website\r\n\r\n  static likeupdate = async (id, num) => {\r\n    const options = {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n        Authorization: 'Basic Og==',\r\n      },\r\n      body: `{\"item_id\":\"${id}\"}`,\r\n    };\r\n\r\n    await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',\r\n      options,\r\n    ).catch(new Error('refresh page'));\r\n\r\n    const GET = {\r\n      method: 'GET',\r\n      headers: { 'Content-Type': 'application/json' },\r\n    };\r\n\r\n    await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',\r\n      GET,\r\n    )\r\n      .then((response) => response.json())\r\n      .then((data) => data.forEach((showsLikes) => {\r\n        if (Number(showsLikes.item_id) === Number(id)) {\r\n          num.innerText = showsLikes.likes;\r\n        }\r\n      }))\r\n      .catch(new Error('refresh page'));\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://jscap-project/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/items/contact-back.png":
/*!************************************!*\
  !*** ./src/items/contact-back.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b046353b55b950735ec.png\";\n\n//# sourceURL=webpack://jscap-project/./src/items/contact-back.png?");

/***/ }),

/***/ "./src/items/noom-peerapong-2uwFEAGUm6E-unsplash 1.png":
/*!*************************************************************!*\
  !*** ./src/items/noom-peerapong-2uwFEAGUm6E-unsplash 1.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e2eea5db4d13629251a.png\";\n\n//# sourceURL=webpack://jscap-project/./src/items/noom-peerapong-2uwFEAGUm6E-unsplash_1.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);