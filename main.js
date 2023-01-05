/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    90deg,\n    rgb(0, 0, 0) 0%,\n    darkblue 20%,\n    rgb(0, 47, 255) 50%,\n    darkblue 80%,\n    black 100%\n  );\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 3em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(\n    90deg,\n    white,\n    rgb(71, 71, 126) 30%,\n    white 50%\n  );\n  background-size: 300%;\n  background-position-x: 100%;\n  background-repeat: repeat-x;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 3s ease-in-out 1 title-animation;\n  position: absolute;\n}\n\n@keyframes title-animation {\n  0% {\n    top: -100%;\n  }\n  80% {\n    top: calc(50% - 48px);\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -200%;\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  background-color: #9c9c9c;\n  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.575);\n}\n\n.board-labels {\n  color: black;\n  padding: 1em;\n  margin: 0;\n  font-weight: 900;\n}\n\n.text-box {\n  margin: 0;\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1em;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #474747;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.sunk::before {\n  box-shadow: 0 0 4px 2px black;\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton {\n  padding: 0.5em 1em;\n  width: 18em;\n  margin: 0.5em 1em;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  font-family: \"Anton\", sans-serif;\n}\n\n.hidden {\n  opacity: 0;\n  display: none;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  padding: 0.25em;\n}\n\n.link {\n  text-decoration: none;\n  color: rgb(149, 222, 255);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: linear-gradient(\n    90deg,\n    rgb(0, 0, 0) 0%,\n    darkblue 20%,\n    rgb(0, 47, 255) 50%,\n    darkblue 80%,\n    black 100%\n  );\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 3em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(\n    90deg,\n    white,\n    rgb(71, 71, 126) 30%,\n    white 50%\n  );\n  background-size: 300%;\n  background-position-x: 100%;\n  background-repeat: repeat-x;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 3s ease-in-out 1 title-animation;\n  position: absolute;\n}\n\n@keyframes title-animation {\n  0% {\n    top: -100%;\n  }\n  80% {\n    top: calc(50% - 48px);\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -200%;\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  background-color: #9c9c9c;\n  box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.575);\n}\n\n.board-labels {\n  color: black;\n  padding: 1em;\n  margin: 0;\n  font-weight: 900;\n}\n\n.text-box {\n  margin: 0;\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1em;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #474747;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.sunk::before {\n  box-shadow: 0 0 4px 2px black;\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton {\n  padding: 0.5em 1em;\n  width: 18em;\n  margin: 0.5em 1em;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  font-family: \"Anton\", sans-serif;\n}\n\n.hidden {\n  opacity: 0;\n  display: none;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  padding: 0.25em;\n}\n\n.link {\n  text-decoration: none;\n  color: rgb(149, 222, 255);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

function gameboardBuilder() {
  const defaultShipLengths = [4, 3, 3, 2, 2, 2, 1];
  let playerShips = [];

  let seaLayout;

  const checkSpace = (x, y) => {
    return seaLayout[x][y] === undefined ? undefined : false;
  };

  const shipBuilder = () => {
    playerShips = [];
    seaLayout = [
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
      [, , , , , , , , , ,],
    ];
    defaultShipLengths.forEach((shipLength) => {
      let goodPlacement = false;
      let direction = Math.random() < 0.5; //True for Horizontal, False for Vertical
      let start;
      let end;
      //Test all ship coordinates to see if there is already a ship there, otherwise find new starting point and try again
      while (!goodPlacement) {
        let goodPlacementTest = true; //default to true, if test fails set false
        start = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        if (checkSpace(start[0], start[1]) === undefined) {
          end = start;
          if (shipLength > 1) {
            for (let i = 1; i < shipLength; i++) {
              if (direction) {
                //if space is not empty or out of bounds then bad ship placement
                if (
                  start[0] + i > 9 ||
                  checkSpace(start[0] + i, start[1]) !== undefined
                ) {
                  goodPlacementTest = false;
                } else {
                  //good placement, assign end
                  end = [start[0] + i, start[1]];
                }
              } else {
                //same for other direction
                if (
                  start[1] + i > 9 ||
                  checkSpace(start[0], start[1] + i) !== undefined
                ) {
                  goodPlacementTest = false;
                } else {
                  end = [start[0], start[1] + i];
                }
              }
            }
          }
        } else {
          goodPlacementTest = false;
        }
        goodPlacement = goodPlacementTest;
      }

      //update the seaLayout to track where all ships are located
      let newShip = ship(start, end);
      newShip.coordinates.forEach((coord) => {
        seaLayout[coord[0]][coord[1]] = newShip;
      });
      playerShips.push(newShip);
    });
  };

  const receiveAttack = (x, y) => {
    if (typeof seaLayout[x][y] === "object") {
      seaLayout[x][y].hit();
      if (seaLayout[x][y].isSunk()) {
        let temp = seaLayout[x][y];
        seaLayout[x][y] = "hit";
        return temp;
      }
      seaLayout[x][y] = "hit";
      return "hit";
    } else {
      seaLayout[x][y] = "miss";
      return "miss";
    }
  };

  const allShipsSunk = () => {
    for (let i = 0; i < playerShips.length; i++) {
      if (!playerShips[i].isSunk()) return false;
    }
    return true;
  };

  shipBuilder();

  return {
    playerShips,
    receiveAttack,
    allShipsSunk,
    checkSpace,
    shipBuilder,
  };
}

module.exports = gameboardBuilder;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboardBuilder = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const playerBuilder = () => {
  const computerAttackLogic = () => {
    //to be replaced later, if time allows
    let xCoord;
    let yCoord;
    do {
      xCoord = Math.floor(Math.random() * 10);
      yCoord = Math.floor(Math.random() * 10);
      //compare the previous list of attacks to the new randomly generated attack until an original is found
    } while (
      JSON.stringify(computer.attackList).indexOf(`[${xCoord},${yCoord}]`) !==
      -1
    );
    return [xCoord, yCoord];
  };

  const player = {
    gameboard: gameboardBuilder(),
    turn: true,
    attack: (x, y) => {
      return computer.gameboard.receiveAttack(x, y);
    },
    get newShips() {
      this.gameboard = gameboardBuilder();
    },
  };
  const computer = {
    gameboard: gameboardBuilder(),
    turn: false,
    attackList: [],
    attack: () => {
      const attackCoords = computerAttackLogic();
      computer.attackList.push(attackCoords);
      const result = player.gameboard.receiveAttack(...attackCoords);

      let xComp = attackCoords[0];
      let yComp = attackCoords[1];
      let tileNum;
      if (xComp === 0) {
        tileNum = yComp.toString();
      } else {
        tileNum = xComp.toString() + yComp.toString();
      }
      return [tileNum, result];
    },
  };

  return { player, computer };
};

module.exports = playerBuilder;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

function ship(start, end) {
  let coordinates = [start];
  let length = 0;
  let isVertical;

  //check if ship is 1 square
  if (start[0] === end[0] && start[1] === end[1]) {
    length = 1;
  }
  //check for direction of ship
  else if (start[0] === end[0]) {
    isVertical = false;
    let vertical = start[1] + 1;
    while (vertical <= end[1]) {
      coordinates.push([start[0], vertical]);
      vertical++;
    }
    length = end[1] - start[1] + 1;
  } else {
    isVertical = true;
    let horizontal = start[0] + 1;
    while (horizontal <= end[0]) {
      coordinates.push([horizontal, start[1]]);
      horizontal++;
    }
    length = end[0] - start[0] + 1;
  }

  return {
    length,
    hits: 0,
    sunk: false,
    coordinates,
    isVertical,
    hit() {
      this.hits = this.hits + 1;
      return this.hits;
    },
    isSunk() {
      if (this.hits === this.length) {
        this.sunk = true;
        return true;
      }
      return false;
    },
  };
}

module.exports = ship;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const playerBuilder = __webpack_require__(/*! ./player */ "./src/player.js");

const players = playerBuilder();
let playerTurn = false;
let playerTiles = [];
let compTiles = [];

//<Initial HMTL Framework> -----------------------

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
const headerDiv = document.createElement("header");
const headerText = document.createElement("div");
headerText.classList.add("title");
headerText.innerText = "BATTLESHIP";
headerDiv.appendChild(headerText);

const boardLabels = document.createElement("p");
boardLabels.classList.add("board-labels");
boardLabels.textContent = "PLAYER -- vs -- COMPUTER";

const card = document.createElement("div");
card.classList.add("card");
const directionsText = document.createElement("p");
directionsText.classList.add("text-box");
directionsText.textContent =
  "Click Start Battle when you are happy with your ship configuration";
const boardsDiv = document.createElement("div");
boardsDiv.classList.add("board-wrapper");
const playerBoardDiv = document.createElement("div");
playerBoardDiv.classList.add("board");
const compBoardDiv = document.createElement("div");
compBoardDiv.classList.add("board");

for (let i = 0; i < 100; i++) {
  playerTiles[i] = document.createElement("div");
  compTiles[i] = document.createElement("div");
  playerTiles[i].setAttribute("tile-num", i);
  compTiles[i].setAttribute("tile-num", i);
  playerTiles[i].classList.add("tile");
  compTiles[i].classList.add("tile");
  compTiles[i].classList.add("inactive");
  compTiles[i].classList.add("clickable-tile");
  //These event listeners on each tile drive the progression of the game, each time one is clicked, the program moves forward until user input is required again
  compTiles[i].addEventListener("click", tileClickEvent);
  playerBoardDiv.appendChild(playerTiles[i]);
  compBoardDiv.appendChild(compTiles[i]);
}

card.appendChild(directionsText);
card.appendChild(boardsDiv);
boardsDiv.appendChild(playerBoardDiv);
boardsDiv.appendChild(compBoardDiv);

const btnDiv = document.createElement("div");
btnDiv.classList.add("btn-wrapper");
const startBtn = document.createElement("button");
startBtn.classList.add("start-btn");
startBtn.textContent = "START BATTLE";
const randomBtn = document.createElement("button");
randomBtn.classList.add("random-btn");
randomBtn.textContent = "RANDOMIZE";
const resetBtn = document.createElement("button");
resetBtn.classList.add("hidden");
resetBtn.textContent = "RESET";

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  randomBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
  startBtn.disabled = true;
  playerTurn = true;
  randomBtn.disabled = true;
  tileClassRemover(compTiles, "inactive");
  tileClassAdder(playerTiles, "inactive");
  playerBoardDiv.classList.add("inactive-board");
  directionsTextUpdater("turn");
});
randomBtn.addEventListener("click", () => {
  tileClassRemover(playerTiles, "ship");
  tileClassRemover(playerTiles, "ship-single-tile");
  tileClassRemover(playerTiles, "ship-start-horizontal");
  tileClassRemover(playerTiles, "ship-middle-horizontal");
  tileClassRemover(playerTiles, "ship-end-horizontal");
  tileClassRemover(playerTiles, "ship-start-vertical");
  tileClassRemover(playerTiles, "ship-middle-vertical");
  tileClassRemover(playerTiles, "ship-end-vertical");
  players.player.newShips;
  refreshPlayerShips();
});
resetBtn.addEventListener("click", () => {
  location.reload();
});

mainDiv.appendChild(headerDiv);
mainDiv.appendChild(boardLabels);
mainDiv.appendChild(card);
btnDiv.appendChild(randomBtn);
btnDiv.appendChild(startBtn);
btnDiv.appendChild(resetBtn);
mainDiv.appendChild(btnDiv);
document.body.prepend(mainDiv);

//<Initial HMTL Framework/> ----------------------

refreshPlayerShips();

const gameLoop = (e) => {
  //event listener on tiles progress game through steps

  //Get coordinates of the tile clicked from the tile-number, tile#96 has coordinates [6,9]
  let tileNum = e.target.getAttribute("tile-num");
  let pAttackX;
  let pAttackY;
  if (tileNum.length === 1) {
    pAttackX = 0;
    pAttackY = tileNum;
  } else {
    pAttackX = tileNum[0];
    pAttackY = tileNum[1];
  }
  //call attack with coordinates and update tile to reflect change
  let playerAttackResult = players.player.attack(pAttackX, pAttackY);

  e.target.removeEventListener("click", tileClickEvent);
  e.target.classList.remove("clickable-tile");

  if (typeof playerAttackResult === "object") {
    //playerAttackResult is returned as the ship object when a ship is sunk

    e.target.classList.add("hit");
    //apply effects to sunken computer ship tiles
    let targetTile;
    playerAttackResult.coordinates.forEach((coord) => {
      if (coord[0] === 0) {
        targetTile = document.querySelectorAll(
          `div[tile-num="${coord[1]}"]`
        )[1];
      } else {
        targetTile = document.querySelectorAll(
          `div[tile-num="${coord[0]}${coord[1]}"]`
        )[1];
      }
      targetTile.classList.add("sunk");
    });

    if (players.computer.gameboard.allShipsSunk()) {
      endGame();
    }
    return;
  } else if (playerAttackResult === "hit") {
    e.target.classList.add("hit");
    //if player hit computer, check if game over, otherwise return so player shoots again
    if (players.computer.gameboard.allShipsSunk()) {
      endGame(); //player wins
    }
    return;
  } else {
    e.target.classList.add("miss");
  }

  //setup for computer's turn
  playerTurn = false;
  directionsTextUpdater("turn");
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  playerTiles.forEach((tile) => {
    tile.classList.remove("inactive");
  });
  playerBoardDiv.classList.remove("inactive-board");

  //Start of computers turn, with small delay
  setTimeout(() => {
    computerAttack();
  }, 500);
};

function endGame() {
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
    tile.classList.remove("clickable-tile");
    tile.removeEventListener("click", tileClickEvent);
  });
  playerTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  directionsTextUpdater("gameover");
}

function computerAttack() {
  let [compAttackCoords, attackResult] = players.computer.attack();
  if (typeof attackResult === "object") {
    //convert ship object to string 'hit' for simplification
    attackResult = "hit";
  }
  //get correct tile from computers attack
  let targetTile = document.querySelectorAll(
    `div[tile-num="${compAttackCoords}"]`
  )[0];
  targetTile.classList.add(attackResult);
  targetTile.classList.remove("ship");
  if (attackResult === "hit") {
    if (players.player.gameboard.allShipsSunk()) {
      endGame(); //computer wins
    }
    setTimeout(() => {
      computerAttack();
    }, 700);
  } else {
    tileClassRemover(compTiles, "inactive");
    tileClassAdder(playerTiles, "inactive");
    playerBoardDiv.classList.add("inactive-board");
    playerTurn = true;
    directionsTextUpdater("turn");
  }
}

function tileClickEvent(e) {
  if (playerTurn) gameLoop(e);
}

function shipTileUpdater(shipToUpdate) {
  for (let i = 0; i < shipToUpdate.coordinates.length; i++) {
    let playerShipCoordinates = shipToUpdate.coordinates[i];
    let x = playerShipCoordinates[0];
    let y = playerShipCoordinates[1];
    let tileNum;
    if (x === 0) {
      tileNum = y.toString();
    } else {
      tileNum = x.toString() + y.toString();
    }

    let tile = document.querySelector(`div[tile-num="${tileNum}"]`);
    tile.classList.add("ship");

    if (shipToUpdate.coordinates.length === 1) {
      tile.classList.add("ship-single-tile");
    } else if (shipToUpdate.isVertical && i === 0) {
      tile.classList.add("ship-start-vertical");
    } else if (
      shipToUpdate.isVertical &&
      i === shipToUpdate.coordinates.length - 1
    ) {
      tile.classList.add("ship-end-vertical");
    } else if (shipToUpdate.isVertical) {
      tile.classList.add("ship-middle-vertical");
    } else if (!shipToUpdate.isVertical && i === 0) {
      tile.classList.add("ship-start-horizontal");
    } else if (
      !shipToUpdate.isVertical &&
      i === shipToUpdate.coordinates.length - 1
    ) {
      tile.classList.add("ship-end-horizontal");
    } else if (!shipToUpdate.isVertical) {
      tile.classList.add("ship-middle-horizontal");
    }
  }
}

function refreshPlayerShips() {
  players.player.gameboard.playerShips.forEach((playerShip) => {
    shipTileUpdater(playerShip);
  });
}

function tileClassRemover(tiles, classString) {
  for (let index = 0; index < tiles.length; index++) {
    tiles[index].classList.remove(classString);
  }
}

function tileClassAdder(tiles, classString) {
  for (let index = 0; index < tiles.length; index++) {
    tiles[index].classList.add(classString);
  }
}

function directionsTextUpdater(command) {
  if (command === "turn") {
    if (playerTurn) {
      directionsText.textContent = "It's your turn";
      directionsText.style.color = "darkgreen";
    } else {
      directionsText.textContent = "It's the computer's turn";
      directionsText.style.color = "black";
    }
  } else if (command === "gameover") {
    if (playerTurn) {
      directionsText.textContent = "You WON! Nice shooting.";
      directionsText.style.color = "gold";
    } else {
      directionsText.textContent = "You LOSE. Better luck next time.";
      directionsText.style.color = "darkred";
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLS1zaGlwLWNvbG91cjogcmdiKDIzNSwgMjMyLCAyMzIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgcmdiKDAsIDAsIDApIDAlLFxcbiAgICBkYXJrYmx1ZSAyMCUsXFxuICAgIHJnYigwLCA0NywgMjU1KSA1MCUsXFxuICAgIGRhcmtibHVlIDgwJSxcXG4gICAgYmxhY2sgMTAwJVxcbiAgKTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogM2VtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW50b25cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB3aGl0ZSxcXG4gICAgcmdiKDcxLCA3MSwgMTI2KSAzMCUsXFxuICAgIHdoaXRlIDUwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IDNzIGVhc2UtaW4tb3V0IDEgdGl0bGUtYW5pbWF0aW9uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpdGxlLWFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIHRvcDogLTEwMCU7XFxuICB9XFxuICA4MCUge1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gNDhweCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0yMDAlO1xcbiAgfVxcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzljOWM7XFxuICBib3gtc2hhZG93OiAwIDAgMC4yNWVtIDAuMjVlbSByZ2JhKDAsIDAsIDAsIDAuNTc1KTtcXG59XFxuXFxuLmJvYXJkLWxhYmVscyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4udGV4dC1ib3gge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDIyMiwgMjU1KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM0NzQ3NDc7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE4NywgMjM5LCAyNTUpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDIyMiwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE3OSwgMjA3LCAyMTYpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmluYWN0aXZlLWJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnN1bms6OmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDJweCBibGFjaztcXG59XFxuXFxuLm1pc3M6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uc2hpcDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5zaGlwLXNpbmdsZS10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbn1cXG5cXG4uc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLWVuZC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLmNsaWNrYWJsZS10aWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsaWNrYWJsZS10aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmJ0bi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICB3aWR0aDogMThlbTtcXG4gIG1hcmdpbjogMC41ZW0gMWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbnRvblxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcblxcbi5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCOzs7Ozs7O0dBT0M7QUFDSDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2Q7Ozs7O0dBS0M7RUFDRCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC0tc2hpcC1jb2xvdXI6IHJnYigyMzUsIDIzMiwgMjMyKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgIHJnYigwLCAwLCAwKSAwJSxcXG4gICAgZGFya2JsdWUgMjAlLFxcbiAgICByZ2IoMCwgNDcsIDI1NSkgNTAlLFxcbiAgICBkYXJrYmx1ZSA4MCUsXFxuICAgIGJsYWNrIDEwMCVcXG4gICk7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFudG9uXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgd2hpdGUsXFxuICAgIHJnYig3MSwgNzEsIDEyNikgMzAlLFxcbiAgICB3aGl0ZSA1MCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYW5pbWF0aW9uOiAzcyBlYXNlLWluLW91dCAxIHRpdGxlLWFuaW1hdGlvbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0b3A6IC0xMDAlO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDQ4cHgpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjAwJTtcXG4gIH1cXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM5YzljO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMjVlbSAwLjI1ZW0gcmdiYSgwLCAwLCAwLCAwLjU3NSk7XFxufVxcblxcbi5ib2FyZC1sYWJlbHMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnRleHQtYm94IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNDc0NzQ3O1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODcsIDIzOSwgMjU1KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxNzksIDIwNywgMjE2KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5pbmFjdGl2ZS1ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUge1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCAycHggYmxhY2s7XFxufVxcblxcbi5taXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnNoaXA6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uc2hpcC1zaW5nbGUtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG59XFxuXFxuLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5idG4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgd2lkdGg6IDE4ZW07XFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW50b25cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbn1cXG5cXG4ubGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiKDE0OSwgMjIyLCAyNTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuZnVuY3Rpb24gZ2FtZWJvYXJkQnVpbGRlcigpIHtcbiAgY29uc3QgZGVmYXVsdFNoaXBMZW5ndGhzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDFdO1xuICBsZXQgcGxheWVyU2hpcHMgPSBbXTtcblxuICBsZXQgc2VhTGF5b3V0O1xuXG4gIGNvbnN0IGNoZWNrU3BhY2UgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBzZWFMYXlvdXRbeF1beV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBCdWlsZGVyID0gKCkgPT4ge1xuICAgIHBsYXllclNoaXBzID0gW107XG4gICAgc2VhTGF5b3V0ID0gW1xuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgIF07XG4gICAgZGVmYXVsdFNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgIGxldCBnb29kUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy9UcnVlIGZvciBIb3Jpem9udGFsLCBGYWxzZSBmb3IgVmVydGljYWxcbiAgICAgIGxldCBzdGFydDtcbiAgICAgIGxldCBlbmQ7XG4gICAgICAvL1Rlc3QgYWxsIHNoaXAgY29vcmRpbmF0ZXMgdG8gc2VlIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIHRoZXJlLCBvdGhlcndpc2UgZmluZCBuZXcgc3RhcnRpbmcgcG9pbnQgYW5kIHRyeSBhZ2FpblxuICAgICAgd2hpbGUgKCFnb29kUGxhY2VtZW50KSB7XG4gICAgICAgIGxldCBnb29kUGxhY2VtZW50VGVzdCA9IHRydWU7IC8vZGVmYXVsdCB0byB0cnVlLCBpZiB0ZXN0IGZhaWxzIHNldCBmYWxzZVxuICAgICAgICBzdGFydCA9IFtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBdO1xuICAgICAgICBpZiAoY2hlY2tTcGFjZShzdGFydFswXSwgc3RhcnRbMV0pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmQgPSBzdGFydDtcbiAgICAgICAgICBpZiAoc2hpcExlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2lmIHNwYWNlIGlzIG5vdCBlbXB0eSBvciBvdXQgb2YgYm91bmRzIHRoZW4gYmFkIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgc3RhcnRbMF0gKyBpID4gOSB8fFxuICAgICAgICAgICAgICAgICAgY2hlY2tTcGFjZShzdGFydFswXSArIGksIHN0YXJ0WzFdKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBnb29kUGxhY2VtZW50VGVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvL2dvb2QgcGxhY2VtZW50LCBhc3NpZ24gZW5kXG4gICAgICAgICAgICAgICAgICBlbmQgPSBbc3RhcnRbMF0gKyBpLCBzdGFydFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2FtZSBmb3Igb3RoZXIgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgc3RhcnRbMV0gKyBpID4gOSB8fFxuICAgICAgICAgICAgICAgICAgY2hlY2tTcGFjZShzdGFydFswXSwgc3RhcnRbMV0gKyBpKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBnb29kUGxhY2VtZW50VGVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBlbmQgPSBbc3RhcnRbMF0sIHN0YXJ0WzFdICsgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdvb2RQbGFjZW1lbnRUZXN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZ29vZFBsYWNlbWVudCA9IGdvb2RQbGFjZW1lbnRUZXN0O1xuICAgICAgfVxuXG4gICAgICAvL3VwZGF0ZSB0aGUgc2VhTGF5b3V0IHRvIHRyYWNrIHdoZXJlIGFsbCBzaGlwcyBhcmUgbG9jYXRlZFxuICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKHN0YXJ0LCBlbmQpO1xuICAgICAgbmV3U2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBzZWFMYXlvdXRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IG5ld1NoaXA7XG4gICAgICB9KTtcbiAgICAgIHBsYXllclNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzZWFMYXlvdXRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHNlYUxheW91dFt4XVt5XS5oaXQoKTtcbiAgICAgIGlmIChzZWFMYXlvdXRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBzZWFMYXlvdXRbeF1beV07XG4gICAgICAgIHNlYUxheW91dFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgfVxuICAgICAgc2VhTGF5b3V0W3hdW3ldID0gXCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFMYXlvdXRbeF1beV0gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyU2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghcGxheWVyU2hpcHNbaV0uaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgc2hpcEJ1aWxkZXIoKTtcblxuICByZXR1cm4ge1xuICAgIHBsYXllclNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGNoZWNrU3BhY2UsXG4gICAgc2hpcEJ1aWxkZXIsXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkQnVpbGRlcjtcbiIsImNvbnN0IGdhbWVib2FyZEJ1aWxkZXIgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5cbmNvbnN0IHBsYXllckJ1aWxkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrTG9naWMgPSAoKSA9PiB7XG4gICAgLy90byBiZSByZXBsYWNlZCBsYXRlciwgaWYgdGltZSBhbGxvd3NcbiAgICBsZXQgeENvb3JkO1xuICAgIGxldCB5Q29vcmQ7XG4gICAgZG8ge1xuICAgICAgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgLy9jb21wYXJlIHRoZSBwcmV2aW91cyBsaXN0IG9mIGF0dGFja3MgdG8gdGhlIG5ldyByYW5kb21seSBnZW5lcmF0ZWQgYXR0YWNrIHVudGlsIGFuIG9yaWdpbmFsIGlzIGZvdW5kXG4gICAgfSB3aGlsZSAoXG4gICAgICBKU09OLnN0cmluZ2lmeShjb21wdXRlci5hdHRhY2tMaXN0KS5pbmRleE9mKGBbJHt4Q29vcmR9LCR7eUNvb3JkfV1gKSAhPT1cbiAgICAgIC0xXG4gICAgKTtcbiAgICByZXR1cm4gW3hDb29yZCwgeUNvb3JkXTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgZ2FtZWJvYXJkOiBnYW1lYm9hcmRCdWlsZGVyKCksXG4gICAgdHVybjogdHJ1ZSxcbiAgICBhdHRhY2s6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfSxcbiAgICBnZXQgbmV3U2hpcHMoKSB7XG4gICAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZEJ1aWxkZXIoKTtcbiAgICB9LFxuICB9O1xuICBjb25zdCBjb21wdXRlciA9IHtcbiAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEJ1aWxkZXIoKSxcbiAgICB0dXJuOiBmYWxzZSxcbiAgICBhdHRhY2tMaXN0OiBbXSxcbiAgICBhdHRhY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IGNvbXB1dGVyQXR0YWNrTG9naWMoKTtcbiAgICAgIGNvbXB1dGVyLmF0dGFja0xpc3QucHVzaChhdHRhY2tDb29yZHMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKC4uLmF0dGFja0Nvb3Jkcyk7XG5cbiAgICAgIGxldCB4Q29tcCA9IGF0dGFja0Nvb3Jkc1swXTtcbiAgICAgIGxldCB5Q29tcCA9IGF0dGFja0Nvb3Jkc1sxXTtcbiAgICAgIGxldCB0aWxlTnVtO1xuICAgICAgaWYgKHhDb21wID09PSAwKSB7XG4gICAgICAgIHRpbGVOdW0gPSB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZU51bSA9IHhDb21wLnRvU3RyaW5nKCkgKyB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt0aWxlTnVtLCByZXN1bHRdO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJCdWlsZGVyO1xuIiwiZnVuY3Rpb24gc2hpcChzdGFydCwgZW5kKSB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtzdGFydF07XG4gIGxldCBsZW5ndGggPSAwO1xuICBsZXQgaXNWZXJ0aWNhbDtcblxuICAvL2NoZWNrIGlmIHNoaXAgaXMgMSBzcXVhcmVcbiAgaWYgKHN0YXJ0WzBdID09PSBlbmRbMF0gJiYgc3RhcnRbMV0gPT09IGVuZFsxXSkge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cbiAgLy9jaGVjayBmb3IgZGlyZWN0aW9uIG9mIHNoaXBcbiAgZWxzZSBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSkge1xuICAgIGlzVmVydGljYWwgPSBmYWxzZTtcbiAgICBsZXQgdmVydGljYWwgPSBzdGFydFsxXSArIDE7XG4gICAgd2hpbGUgKHZlcnRpY2FsIDw9IGVuZFsxXSkge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChbc3RhcnRbMF0sIHZlcnRpY2FsXSk7XG4gICAgICB2ZXJ0aWNhbCsrO1xuICAgIH1cbiAgICBsZW5ndGggPSBlbmRbMV0gLSBzdGFydFsxXSArIDE7XG4gIH0gZWxzZSB7XG4gICAgaXNWZXJ0aWNhbCA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSBzdGFydFswXSArIDE7XG4gICAgd2hpbGUgKGhvcml6b250YWwgPD0gZW5kWzBdKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFtob3Jpem9udGFsLCBzdGFydFsxXV0pO1xuICAgICAgaG9yaXpvbnRhbCsrO1xuICAgIH1cbiAgICBsZW5ndGggPSBlbmRbMF0gLSBzdGFydFswXSArIDE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IGZhbHNlLFxuICAgIGNvb3JkaW5hdGVzLFxuICAgIGlzVmVydGljYWwsXG4gICAgaGl0KCkge1xuICAgICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMTtcbiAgICAgIHJldHVybiB0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3QgcGxheWVyQnVpbGRlciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuY29uc3QgcGxheWVycyA9IHBsYXllckJ1aWxkZXIoKTtcbmxldCBwbGF5ZXJUdXJuID0gZmFsc2U7XG5sZXQgcGxheWVyVGlsZXMgPSBbXTtcbmxldCBjb21wVGlsZXMgPSBbXTtcblxuLy88SW5pdGlhbCBITVRMIEZyYW1ld29yaz4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuaGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIkJBVFRMRVNISVBcIjtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuY29uc3QgYm9hcmRMYWJlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmJvYXJkTGFiZWxzLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1sYWJlbHNcIik7XG5ib2FyZExhYmVscy50ZXh0Q29udGVudCA9IFwiUExBWUVSIC0tIHZzIC0tIENPTVBVVEVSXCI7XG5cbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbmNvbnN0IGRpcmVjdGlvbnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5kaXJlY3Rpb25zVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ib3hcIik7XG5kaXJlY3Rpb25zVGV4dC50ZXh0Q29udGVudCA9XG4gIFwiQ2xpY2sgU3RhcnQgQmF0dGxlIHdoZW4geW91IGFyZSBoYXBweSB3aXRoIHlvdXIgc2hpcCBjb25maWd1cmF0aW9uXCI7XG5jb25zdCBib2FyZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYm9hcmRzRGl2LmNsYXNzTGlzdC5hZGQoXCJib2FyZC13cmFwcGVyXCIpO1xuY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuY29uc3QgY29tcEJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbXBCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgcGxheWVyVGlsZXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wVGlsZXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJUaWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0aWxlLW51bVwiLCBpKTtcbiAgY29tcFRpbGVzW2ldLnNldEF0dHJpYnV0ZShcInRpbGUtbnVtXCIsIGkpO1xuICBwbGF5ZXJUaWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuICBjb21wVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBjb21wVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcImNsaWNrYWJsZS10aWxlXCIpO1xuICAvL1RoZXNlIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIHRpbGUgZHJpdmUgdGhlIHByb2dyZXNzaW9uIG9mIHRoZSBnYW1lLCBlYWNoIHRpbWUgb25lIGlzIGNsaWNrZWQsIHRoZSBwcm9ncmFtIG1vdmVzIGZvcndhcmQgdW50aWwgdXNlciBpbnB1dCBpcyByZXF1aXJlZCBhZ2FpblxuICBjb21wVGlsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRpbGVDbGlja0V2ZW50KTtcbiAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQocGxheWVyVGlsZXNbaV0pO1xuICBjb21wQm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcFRpbGVzW2ldKTtcbn1cblxuY2FyZC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zVGV4dCk7XG5jYXJkLmFwcGVuZENoaWxkKGJvYXJkc0Rpdik7XG5ib2FyZHNEaXYuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmREaXYpO1xuYm9hcmRzRGl2LmFwcGVuZENoaWxkKGNvbXBCb2FyZERpdik7XG5cbmNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idG5EaXYuY2xhc3NMaXN0LmFkZChcImJ0bi13cmFwcGVyXCIpO1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWJ0blwiKTtcbnN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTVEFSVCBCQVRUTEVcIjtcbmNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5yYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcInJhbmRvbS1idG5cIik7XG5yYW5kb21CdG4udGV4dENvbnRlbnQgPSBcIlJBTkRPTUlaRVwiO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbnJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSRVNFVFwiO1xuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgcmFuZG9tQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgdGlsZUNsYXNzUmVtb3Zlcihjb21wVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gIHRpbGVDbGFzc0FkZGVyKHBsYXllclRpbGVzLCBcImluYWN0aXZlXCIpO1xuICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtYm9hcmRcIik7XG4gIGRpcmVjdGlvbnNUZXh0VXBkYXRlcihcInR1cm5cIik7XG59KTtcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXBcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1zaW5nbGUtdGlsZVwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1lbmQtdmVydGljYWxcIik7XG4gIHBsYXllcnMucGxheWVyLm5ld1NoaXBzO1xuICByZWZyZXNoUGxheWVyU2hpcHMoKTtcbn0pO1xucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxubWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChib2FyZExhYmVscyk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuYnRuRGl2LmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG5idG5EaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuYnRuRGl2LmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbmRvY3VtZW50LmJvZHkucHJlcGVuZChtYWluRGl2KTtcblxuLy88SW5pdGlhbCBITVRMIEZyYW1ld29yay8+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxucmVmcmVzaFBsYXllclNoaXBzKCk7XG5cbmNvbnN0IGdhbWVMb29wID0gKGUpID0+IHtcbiAgLy9ldmVudCBsaXN0ZW5lciBvbiB0aWxlcyBwcm9ncmVzcyBnYW1lIHRocm91Z2ggc3RlcHNcblxuICAvL0dldCBjb29yZGluYXRlcyBvZiB0aGUgdGlsZSBjbGlja2VkIGZyb20gdGhlIHRpbGUtbnVtYmVyLCB0aWxlIzk2IGhhcyBjb29yZGluYXRlcyBbNiw5XVxuICBsZXQgdGlsZU51bSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpbGUtbnVtXCIpO1xuICBsZXQgcEF0dGFja1g7XG4gIGxldCBwQXR0YWNrWTtcbiAgaWYgKHRpbGVOdW0ubGVuZ3RoID09PSAxKSB7XG4gICAgcEF0dGFja1ggPSAwO1xuICAgIHBBdHRhY2tZID0gdGlsZU51bTtcbiAgfSBlbHNlIHtcbiAgICBwQXR0YWNrWCA9IHRpbGVOdW1bMF07XG4gICAgcEF0dGFja1kgPSB0aWxlTnVtWzFdO1xuICB9XG4gIC8vY2FsbCBhdHRhY2sgd2l0aCBjb29yZGluYXRlcyBhbmQgdXBkYXRlIHRpbGUgdG8gcmVmbGVjdCBjaGFuZ2VcbiAgbGV0IHBsYXllckF0dGFja1Jlc3VsdCA9IHBsYXllcnMucGxheWVyLmF0dGFjayhwQXR0YWNrWCwgcEF0dGFja1kpO1xuXG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aWxlQ2xpY2tFdmVudCk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGUtdGlsZVwiKTtcblxuICBpZiAodHlwZW9mIHBsYXllckF0dGFja1Jlc3VsdCA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vcGxheWVyQXR0YWNrUmVzdWx0IGlzIHJldHVybmVkIGFzIHRoZSBzaGlwIG9iamVjdCB3aGVuIGEgc2hpcCBpcyBzdW5rXG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIC8vYXBwbHkgZWZmZWN0cyB0byBzdW5rZW4gY29tcHV0ZXIgc2hpcCB0aWxlc1xuICAgIGxldCB0YXJnZXRUaWxlO1xuICAgIHBsYXllckF0dGFja1Jlc3VsdC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgaWYgKGNvb3JkWzBdID09PSAwKSB7XG4gICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIGBkaXZbdGlsZS1udW09XCIke2Nvb3JkWzFdfVwiXWBcbiAgICAgICAgKVsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIGBkaXZbdGlsZS1udW09XCIke2Nvb3JkWzBdfSR7Y29vcmRbMV19XCJdYFxuICAgICAgICApWzFdO1xuICAgICAgfVxuICAgICAgdGFyZ2V0VGlsZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICB9KTtcblxuICAgIGlmIChwbGF5ZXJzLmNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZW5kR2FtZSgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAocGxheWVyQXR0YWNrUmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAvL2lmIHBsYXllciBoaXQgY29tcHV0ZXIsIGNoZWNrIGlmIGdhbWUgb3Zlciwgb3RoZXJ3aXNlIHJldHVybiBzbyBwbGF5ZXIgc2hvb3RzIGFnYWluXG4gICAgaWYgKHBsYXllcnMuY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKCk7IC8vcGxheWVyIHdpbnNcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICB9XG5cbiAgLy9zZXR1cCBmb3IgY29tcHV0ZXIncyB0dXJuXG4gIHBsYXllclR1cm4gPSBmYWxzZTtcbiAgZGlyZWN0aW9uc1RleHRVcGRhdGVyKFwidHVyblwiKTtcbiAgY29tcFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIHBsYXllclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIHBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZS1ib2FyZFwiKTtcblxuICAvL1N0YXJ0IG9mIGNvbXB1dGVycyB0dXJuLCB3aXRoIHNtYWxsIGRlbGF5XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbXB1dGVyQXR0YWNrKCk7XG4gIH0sIDUwMCk7XG59O1xuXG5mdW5jdGlvbiBlbmRHYW1lKCkge1xuICBjb21wVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZS10aWxlXCIpO1xuICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRpbGVDbGlja0V2ZW50KTtcbiAgfSk7XG4gIHBsYXllclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIGRpcmVjdGlvbnNUZXh0VXBkYXRlcihcImdhbWVvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgbGV0IFtjb21wQXR0YWNrQ29vcmRzLCBhdHRhY2tSZXN1bHRdID0gcGxheWVycy5jb21wdXRlci5hdHRhY2soKTtcbiAgaWYgKHR5cGVvZiBhdHRhY2tSZXN1bHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvL2NvbnZlcnQgc2hpcCBvYmplY3QgdG8gc3RyaW5nICdoaXQnIGZvciBzaW1wbGlmaWNhdGlvblxuICAgIGF0dGFja1Jlc3VsdCA9IFwiaGl0XCI7XG4gIH1cbiAgLy9nZXQgY29ycmVjdCB0aWxlIGZyb20gY29tcHV0ZXJzIGF0dGFja1xuICBsZXQgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYGRpdlt0aWxlLW51bT1cIiR7Y29tcEF0dGFja0Nvb3Jkc31cIl1gXG4gIClbMF07XG4gIHRhcmdldFRpbGUuY2xhc3NMaXN0LmFkZChhdHRhY2tSZXN1bHQpO1xuICB0YXJnZXRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgaWYgKHBsYXllcnMucGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZW5kR2FtZSgpOyAvL2NvbXB1dGVyIHdpbnNcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21wdXRlckF0dGFjaygpO1xuICAgIH0sIDcwMCk7XG4gIH0gZWxzZSB7XG4gICAgdGlsZUNsYXNzUmVtb3Zlcihjb21wVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gICAgdGlsZUNsYXNzQWRkZXIocGxheWVyVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gICAgcGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLWJvYXJkXCIpO1xuICAgIHBsYXllclR1cm4gPSB0cnVlO1xuICAgIGRpcmVjdGlvbnNUZXh0VXBkYXRlcihcInR1cm5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGlsZUNsaWNrRXZlbnQoZSkge1xuICBpZiAocGxheWVyVHVybikgZ2FtZUxvb3AoZSk7XG59XG5cbmZ1bmN0aW9uIHNoaXBUaWxlVXBkYXRlcihzaGlwVG9VcGRhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGxheWVyU2hpcENvb3JkaW5hdGVzID0gc2hpcFRvVXBkYXRlLmNvb3JkaW5hdGVzW2ldO1xuICAgIGxldCB4ID0gcGxheWVyU2hpcENvb3JkaW5hdGVzWzBdO1xuICAgIGxldCB5ID0gcGxheWVyU2hpcENvb3JkaW5hdGVzWzFdO1xuICAgIGxldCB0aWxlTnVtO1xuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICB0aWxlTnVtID0geS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlTnVtID0geC50b1N0cmluZygpICsgeS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3RpbGUtbnVtPVwiJHt0aWxlTnVtfVwiXWApO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICBpZiAoc2hpcFRvVXBkYXRlLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zaW5nbGUtdGlsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsICYmIGkgPT09IDApIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsICYmXG4gICAgICBpID09PSBzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXMubGVuZ3RoIC0gMVxuICAgICkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmIChzaGlwVG9VcGRhdGUuaXNWZXJ0aWNhbCkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmICghc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiYgaSA9PT0gMCkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC1ob3Jpem9udGFsXCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiZcbiAgICAgIGkgPT09IHNoaXBUb1VwZGF0ZS5jb29yZGluYXRlcy5sZW5ndGggLSAxXG4gICAgKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xuICAgIH0gZWxzZSBpZiAoIXNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS1ob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZWZyZXNoUGxheWVyU2hpcHMoKSB7XG4gIHBsYXllcnMucGxheWVyLmdhbWVib2FyZC5wbGF5ZXJTaGlwcy5mb3JFYWNoKChwbGF5ZXJTaGlwKSA9PiB7XG4gICAgc2hpcFRpbGVVcGRhdGVyKHBsYXllclNoaXApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGlsZUNsYXNzUmVtb3Zlcih0aWxlcywgY2xhc3NTdHJpbmcpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHRpbGVzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzU3RyaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aWxlQ2xhc3NBZGRlcih0aWxlcywgY2xhc3NTdHJpbmcpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHRpbGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzU3RyaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXJlY3Rpb25zVGV4dFVwZGF0ZXIoY29tbWFuZCkge1xuICBpZiAoY29tbWFuZCA9PT0gXCJ0dXJuXCIpIHtcbiAgICBpZiAocGxheWVyVHVybikge1xuICAgICAgZGlyZWN0aW9uc1RleHQudGV4dENvbnRlbnQgPSBcIkl0J3MgeW91ciB0dXJuXCI7XG4gICAgICBkaXJlY3Rpb25zVGV4dC5zdHlsZS5jb2xvciA9IFwiZGFya2dyZWVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbnNUZXh0LnRleHRDb250ZW50ID0gXCJJdCdzIHRoZSBjb21wdXRlcidzIHR1cm5cIjtcbiAgICAgIGRpcmVjdGlvbnNUZXh0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcImdhbWVvdmVyXCIpIHtcbiAgICBpZiAocGxheWVyVHVybikge1xuICAgICAgZGlyZWN0aW9uc1RleHQudGV4dENvbnRlbnQgPSBcIllvdSBXT04hIE5pY2Ugc2hvb3RpbmcuXCI7XG4gICAgICBkaXJlY3Rpb25zVGV4dC5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb25zVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IExPU0UuIEJldHRlciBsdWNrIG5leHQgdGltZS5cIjtcbiAgICAgIGRpcmVjdGlvbnNUZXh0LnN0eWxlLmNvbG9yID0gXCJkYXJrcmVkXCI7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=