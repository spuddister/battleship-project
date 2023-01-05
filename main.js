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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 0.5em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(\n    90deg,\n    white,\n    rgb(71, 71, 126) 30%,\n    white 50%\n  );\n  background-size: 300%;\n  background-position-x: 100%;\n  background-repeat: repeat-x;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 1.5s ease-in-out 0.5s 1 wave-animation;\n}\n\n@keyframes wave-animation {\n  0% {\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -200%;\n  }\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 20px;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #676767;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.sunk::before {\n  box-shadow: 0 0 4px 2px black;\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 10px;\n}\n\nbutton {\n  padding: 10px 30px;\n  margin: 0 20px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.hidden {\n  opacity: 0;\n  display: none;\n}\n\n.text-box {\n  color: black;\n}\n\n.text-box-player {\n  color: green;\n}\n\n.text-box-computer {\n  color: black;\n}\n\n.text-box-end-win {\n  color: gold;\n}\n\n.text-box-end-lost {\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd;;;;;GAKC;EACD,qBAAqB;EACrB,2BAA2B;EAC3B,2BAA2B;EAC3B,6BAA6B;EAC7B,oCAAoC;EACpC,0BAA0B;EAC1B,iCAAiC;EACjC,iDAAiD;AACnD;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,8BAA8B;EAC9B,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,8BAA8B;EAC9B,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,yCAAyC;EACzC,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;EAC/B,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,+BAA+B;EAC/B,wCAAwC;AAC1C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ","sourcesContent":["body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 0.5em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(\n    90deg,\n    white,\n    rgb(71, 71, 126) 30%,\n    white 50%\n  );\n  background-size: 300%;\n  background-position-x: 100%;\n  background-repeat: repeat-x;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 1.5s ease-in-out 0.5s 1 wave-animation;\n}\n\n@keyframes wave-animation {\n  0% {\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -200%;\n  }\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 20px;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #676767;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.sunk::before {\n  box-shadow: 0 0 4px 2px black;\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 10px;\n}\n\nbutton {\n  padding: 10px 30px;\n  margin: 0 20px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.hidden {\n  opacity: 0;\n  display: none;\n}\n\n.text-box {\n  color: black;\n}\n\n.text-box-player {\n  color: green;\n}\n\n.text-box-computer {\n  color: black;\n}\n\n.text-box-end-win {\n  color: gold;\n}\n\n.text-box-end-lost {\n  color: red;\n}\n"],"sourceRoot":""}]);
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
const boardsDiv = document.createElement("div");
boardsDiv.classList.add("board-wrapper");

const btnDiv = document.createElement("div");
btnDiv.classList.add("btn-wrapper");
const startBtn = document.createElement("button");
startBtn.classList.add("start-btn");
startBtn.textContent = "Start Battle";
const randomBtn = document.createElement("button");
randomBtn.classList.add("random-btn");
randomBtn.textContent = "Randomize";
const resetBtn = document.createElement("button");
resetBtn.classList.add("hidden");
resetBtn.textContent = "Reset";

const textBox = document.createElement("p");
textBox.classList.add("text-box");
textBox.textContent =
  "Click Start Battle when you are happy with your ship configuration";

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

boardsDiv.appendChild(playerBoardDiv);
boardsDiv.appendChild(compBoardDiv);

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
  textBoxUpdater("turn");
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
mainDiv.appendChild(textBox);
mainDiv.appendChild(boardsDiv);
btnDiv.appendChild(randomBtn);
btnDiv.appendChild(startBtn);
btnDiv.appendChild(resetBtn);
mainDiv.appendChild(btnDiv);
document.body.appendChild(mainDiv);

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
  textBoxUpdater("turn");
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
  textBoxUpdater("gameover");
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
    textBoxUpdater("turn");
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

function textBoxUpdater(command) {
  if (command === "turn") {
    if (playerTurn) {
      textBox.textContent = "It's your turn";
      textBox.classList.add("text-box-player");
      textBox.classList.remove("text-box-computer");
    } else {
      textBox.textContent = "It's the computer's turn";
      textBox.classList.add("text-box-computer");
      textBox.classList.remove("text-box-player");
    }
  } else if (command === "gameover") {
    if (playerTurn) {
      textBox.textContent = "You won! Nice shooting.";
      textBox.classList.add("text-box-end-win");
    } else {
      textBox.textContent = "You lost. Better luck next time.";
      textBox.classList.add("text-box-end-lost");
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLS1zaGlwLWNvbG91cjogcmdiKDIzNSwgMjMyLCAyMzIpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbnRvblxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgIHdoaXRlLFxcbiAgICByZ2IoNzEsIDcxLCAxMjYpIDMwJSxcXG4gICAgd2hpdGUgNTAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGFuaW1hdGlvbjogMS41cyBlYXNlLWluLW91dCAwLjVzIDEgd2F2ZS1hbmltYXRpb247XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjAwJTtcXG4gIH1cXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDIyMiwgMjU1KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM2NzY3Njc7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE4NywgMjM5LCAyNTUpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDIyMiwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE3OSwgMjA3LCAyMTYpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmluYWN0aXZlLWJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnN1bms6OmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDJweCBibGFjaztcXG59XFxuXFxuLm1pc3M6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uc2hpcDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5zaGlwLXNpbmdsZS10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbn1cXG5cXG4uc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLWVuZC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLmNsaWNrYWJsZS10aWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsaWNrYWJsZS10aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE3MywgMTk3KTtcXG59XFxuXFxuLmJ0bi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBtYXJnaW46IDAgMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRleHQtYm94IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQtYm94LXBsYXllciB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50ZXh0LWJveC1jb21wdXRlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0LWJveC1lbmQtd2luIHtcXG4gIGNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udGV4dC1ib3gtZW5kLWxvc3Qge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2Q7Ozs7O0dBS0M7RUFDRCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUNBQXlDO0VBQ3pDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC0tc2hpcC1jb2xvdXI6IHJnYigyMzUsIDIzMiwgMjMyKTtcXG59XFxuXFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW50b25cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB3aGl0ZSxcXG4gICAgcmdiKDcxLCA3MSwgMTI2KSAzMCUsXFxuICAgIHdoaXRlIDUwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IDEuNXMgZWFzZS1pbi1vdXQgMC41cyAxIHdhdmUtYW5pbWF0aW9uO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdhdmUtYW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwMCU7XFxuICB9XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNjc2NzY3O1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODcsIDIzOSwgMjU1KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxNzksIDIwNywgMjE2KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5pbmFjdGl2ZS1ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUge1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCAycHggYmxhY2s7XFxufVxcblxcbi5taXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnNoaXA6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uc2hpcC1zaW5nbGUtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG59XFxuXFxuLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5idG4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZXh0LWJveCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0LWJveC1wbGF5ZXIge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udGV4dC1ib3gtY29tcHV0ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dC1ib3gtZW5kLXdpbiB7XFxuICBjb2xvcjogZ29sZDtcXG59XFxuXFxuLnRleHQtYm94LWVuZC1sb3N0IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRCdWlsZGVyKCkge1xuICBjb25zdCBkZWZhdWx0U2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMiwgMV07XG4gIGxldCBwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGxldCBzZWFMYXlvdXQ7XG5cbiAgY29uc3QgY2hlY2tTcGFjZSA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIHNlYUxheW91dFt4XVt5XSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2hpcEJ1aWxkZXIgPSAoKSA9PiB7XG4gICAgcGxheWVyU2hpcHMgPSBbXTtcbiAgICBzZWFMYXlvdXQgPSBbXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgXTtcbiAgICBkZWZhdWx0U2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgbGV0IGdvb2RQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41OyAvL1RydWUgZm9yIEhvcml6b250YWwsIEZhbHNlIGZvciBWZXJ0aWNhbFxuICAgICAgbGV0IHN0YXJ0O1xuICAgICAgbGV0IGVuZDtcbiAgICAgIC8vVGVzdCBhbGwgc2hpcCBjb29yZGluYXRlcyB0byBzZWUgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgdGhlcmUsIG90aGVyd2lzZSBmaW5kIG5ldyBzdGFydGluZyBwb2ludCBhbmQgdHJ5IGFnYWluXG4gICAgICB3aGlsZSAoIWdvb2RQbGFjZW1lbnQpIHtcbiAgICAgICAgbGV0IGdvb2RQbGFjZW1lbnRUZXN0ID0gdHJ1ZTsgLy9kZWZhdWx0IHRvIHRydWUsIGlmIHRlc3QgZmFpbHMgc2V0IGZhbHNlXG4gICAgICAgIHN0YXJ0ID0gW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIF07XG4gICAgICAgIGlmIChjaGVja1NwYWNlKHN0YXJ0WzBdLCBzdGFydFsxXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgICAgICAgIGlmIChzaGlwTGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vaWYgc3BhY2UgaXMgbm90IGVtcHR5IG9yIG91dCBvZiBib3VuZHMgdGhlbiBiYWQgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBzdGFydFswXSArIGkgPiA5IHx8XG4gICAgICAgICAgICAgICAgICBjaGVja1NwYWNlKHN0YXJ0WzBdICsgaSwgc3RhcnRbMV0pICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGdvb2RQbGFjZW1lbnRUZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vZ29vZCBwbGFjZW1lbnQsIGFzc2lnbiBlbmRcbiAgICAgICAgICAgICAgICAgIGVuZCA9IFtzdGFydFswXSArIGksIHN0YXJ0WzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zYW1lIGZvciBvdGhlciBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBzdGFydFsxXSArIGkgPiA5IHx8XG4gICAgICAgICAgICAgICAgICBjaGVja1NwYWNlKHN0YXJ0WzBdLCBzdGFydFsxXSArIGkpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGdvb2RQbGFjZW1lbnRUZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGVuZCA9IFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ29vZFBsYWNlbWVudFRlc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBnb29kUGxhY2VtZW50ID0gZ29vZFBsYWNlbWVudFRlc3Q7XG4gICAgICB9XG5cbiAgICAgIC8vdXBkYXRlIHRoZSBzZWFMYXlvdXQgdG8gdHJhY2sgd2hlcmUgYWxsIHNoaXBzIGFyZSBsb2NhdGVkXG4gICAgICBsZXQgbmV3U2hpcCA9IHNoaXAoc3RhcnQsIGVuZCk7XG4gICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIHNlYUxheW91dFtjb29yZFswXV1bY29vcmRbMV1dID0gbmV3U2hpcDtcbiAgICAgIH0pO1xuICAgICAgcGxheWVyU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAodHlwZW9mIHNlYUxheW91dFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgc2VhTGF5b3V0W3hdW3ldLmhpdCgpO1xuICAgICAgaWYgKHNlYUxheW91dFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgICBsZXQgdGVtcCA9IHNlYUxheW91dFt4XVt5XTtcbiAgICAgICAgc2VhTGF5b3V0W3hdW3ldID0gXCJoaXRcIjtcbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICB9XG4gICAgICBzZWFMYXlvdXRbeF1beV0gPSBcImhpdFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYUxheW91dFt4XVt5XSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFwbGF5ZXJTaGlwc1tpXS5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBzaGlwQnVpbGRlcigpO1xuXG4gIHJldHVybiB7XG4gICAgcGxheWVyU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgY2hlY2tTcGFjZSxcbiAgICBzaGlwQnVpbGRlcixcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRCdWlsZGVyO1xuIiwiY29uc3QgZ2FtZWJvYXJkQnVpbGRlciA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcblxuY29uc3QgcGxheWVyQnVpbGRlciA9ICgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJBdHRhY2tMb2dpYyA9ICgpID0+IHtcbiAgICAvL3RvIGJlIHJlcGxhY2VkIGxhdGVyLCBpZiB0aW1lIGFsbG93c1xuICAgIGxldCB4Q29vcmQ7XG4gICAgbGV0IHlDb29yZDtcbiAgICBkbyB7XG4gICAgICB4Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAvL2NvbXBhcmUgdGhlIHByZXZpb3VzIGxpc3Qgb2YgYXR0YWNrcyB0byB0aGUgbmV3IHJhbmRvbWx5IGdlbmVyYXRlZCBhdHRhY2sgdW50aWwgYW4gb3JpZ2luYWwgaXMgZm91bmRcbiAgICB9IHdoaWxlIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXB1dGVyLmF0dGFja0xpc3QpLmluZGV4T2YoYFske3hDb29yZH0sJHt5Q29vcmR9XWApICE9PVxuICAgICAgLTFcbiAgICApO1xuICAgIHJldHVybiBbeENvb3JkLCB5Q29vcmRdO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEJ1aWxkZXIoKSxcbiAgICB0dXJuOiB0cnVlLFxuICAgIGF0dGFjazogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9LFxuICAgIGdldCBuZXdTaGlwcygpIHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkQnVpbGRlcigpO1xuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNvbXB1dGVyID0ge1xuICAgIGdhbWVib2FyZDogZ2FtZWJvYXJkQnVpbGRlcigpLFxuICAgIHR1cm46IGZhbHNlLFxuICAgIGF0dGFja0xpc3Q6IFtdLFxuICAgIGF0dGFjazogKCkgPT4ge1xuICAgICAgY29uc3QgYXR0YWNrQ29vcmRzID0gY29tcHV0ZXJBdHRhY2tMb2dpYygpO1xuICAgICAgY29tcHV0ZXIuYXR0YWNrTGlzdC5wdXNoKGF0dGFja0Nvb3Jkcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soLi4uYXR0YWNrQ29vcmRzKTtcblxuICAgICAgbGV0IHhDb21wID0gYXR0YWNrQ29vcmRzWzBdO1xuICAgICAgbGV0IHlDb21wID0gYXR0YWNrQ29vcmRzWzFdO1xuICAgICAgbGV0IHRpbGVOdW07XG4gICAgICBpZiAoeENvbXAgPT09IDApIHtcbiAgICAgICAgdGlsZU51bSA9IHlDb21wLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlTnVtID0geENvbXAudG9TdHJpbmcoKSArIHlDb21wLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3RpbGVOdW0sIHJlc3VsdF07XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGNvbXB1dGVyIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllckJ1aWxkZXI7XG4iLCJmdW5jdGlvbiBzaGlwKHN0YXJ0LCBlbmQpIHtcbiAgbGV0IGNvb3JkaW5hdGVzID0gW3N0YXJ0XTtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGxldCBpc1ZlcnRpY2FsO1xuXG4gIC8vY2hlY2sgaWYgc2hpcCBpcyAxIHNxdWFyZVxuICBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSAmJiBzdGFydFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgbGVuZ3RoID0gMTtcbiAgfVxuICAvL2NoZWNrIGZvciBkaXJlY3Rpb24gb2Ygc2hpcFxuICBlbHNlIGlmIChzdGFydFswXSA9PT0gZW5kWzBdKSB7XG4gICAgaXNWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIGxldCB2ZXJ0aWNhbCA9IHN0YXJ0WzFdICsgMTtcbiAgICB3aGlsZSAodmVydGljYWwgPD0gZW5kWzFdKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFtzdGFydFswXSwgdmVydGljYWxdKTtcbiAgICAgIHZlcnRpY2FsKys7XG4gICAgfVxuICAgIGxlbmd0aCA9IGVuZFsxXSAtIHN0YXJ0WzFdICsgMTtcbiAgfSBlbHNlIHtcbiAgICBpc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICBsZXQgaG9yaXpvbnRhbCA9IHN0YXJ0WzBdICsgMTtcbiAgICB3aGlsZSAoaG9yaXpvbnRhbCA8PSBlbmRbMF0pIHtcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2hvcml6b250YWwsIHN0YXJ0WzFdXSk7XG4gICAgICBob3Jpem9udGFsKys7XG4gICAgfVxuICAgIGxlbmd0aCA9IGVuZFswXSAtIHN0YXJ0WzBdICsgMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3VuazogZmFsc2UsXG4gICAgY29vcmRpbmF0ZXMsXG4gICAgaXNWZXJ0aWNhbCxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKyAxO1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCBwbGF5ZXJCdWlsZGVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5jb25zdCBwbGF5ZXJzID0gcGxheWVyQnVpbGRlcigpO1xubGV0IHBsYXllclR1cm4gPSBmYWxzZTtcbmxldCBwbGF5ZXJUaWxlcyA9IFtdO1xubGV0IGNvbXBUaWxlcyA9IFtdO1xuXG4vLzxJbml0aWFsIEhNVEwgRnJhbWV3b3JrPiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5oZWFkZXJUZXh0LmlubmVyVGV4dCA9IFwiQkFUVExFU0hJUFwiO1xuaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuY29uc3QgYm9hcmRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJvYXJkc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtd3JhcHBlclwiKTtcblxuY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLXdyYXBwZXJcIik7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnRuXCIpO1xuc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEJhdHRsZVwiO1xuY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnJhbmRvbUJ0bi5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLWJ0blwiKTtcbnJhbmRvbUJ0bi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCI7XG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5yZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xucmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG5cbmNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRleHRCb3guY2xhc3NMaXN0LmFkZChcInRleHQtYm94XCIpO1xudGV4dEJveC50ZXh0Q29udGVudCA9XG4gIFwiQ2xpY2sgU3RhcnQgQmF0dGxlIHdoZW4geW91IGFyZSBoYXBweSB3aXRoIHlvdXIgc2hpcCBjb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbmNvbnN0IGNvbXBCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb21wQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIHBsYXllclRpbGVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcFRpbGVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyVGlsZXNbaV0uc2V0QXR0cmlidXRlKFwidGlsZS1udW1cIiwgaSk7XG4gIGNvbXBUaWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0aWxlLW51bVwiLCBpKTtcbiAgcGxheWVyVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gIGNvbXBUaWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJjbGlja2FibGUtdGlsZVwiKTtcbiAgLy9UaGVzZSBldmVudCBsaXN0ZW5lcnMgb24gZWFjaCB0aWxlIGRyaXZlIHRoZSBwcm9ncmVzc2lvbiBvZiB0aGUgZ2FtZSwgZWFjaCB0aW1lIG9uZSBpcyBjbGlja2VkLCB0aGUgcHJvZ3JhbSBtb3ZlcyBmb3J3YXJkIHVudGlsIHVzZXIgaW5wdXQgaXMgcmVxdWlyZWQgYWdhaW5cbiAgY29tcFRpbGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aWxlQ2xpY2tFdmVudCk7XG4gIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKHBsYXllclRpbGVzW2ldKTtcbiAgY29tcEJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXBUaWxlc1tpXSk7XG59XG5cbmJvYXJkc0Rpdi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZERpdik7XG5ib2FyZHNEaXYuYXBwZW5kQ2hpbGQoY29tcEJvYXJkRGl2KTtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHJlc2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgcGxheWVyVHVybiA9IHRydWU7XG4gIHJhbmRvbUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHRpbGVDbGFzc1JlbW92ZXIoY29tcFRpbGVzLCBcImluYWN0aXZlXCIpO1xuICB0aWxlQ2xhc3NBZGRlcihwbGF5ZXJUaWxlcywgXCJpbmFjdGl2ZVwiKTtcbiAgcGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLWJvYXJkXCIpO1xuICB0ZXh0Qm94VXBkYXRlcihcInR1cm5cIik7XG59KTtcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXBcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1zaW5nbGUtdGlsZVwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1lbmQtdmVydGljYWxcIik7XG4gIHBsYXllcnMucGxheWVyLm5ld1NoaXBzO1xuICByZWZyZXNoUGxheWVyU2hpcHMoKTtcbn0pO1xucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxubWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xubWFpbkRpdi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoYm9hcmRzRGl2KTtcbmJ0bkRpdi5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuYnRuRGl2LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbmJ0bkRpdi5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5tYWluRGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4vLzxJbml0aWFsIEhNVEwgRnJhbWV3b3JrLz4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5yZWZyZXNoUGxheWVyU2hpcHMoKTtcblxuY29uc3QgZ2FtZUxvb3AgPSAoZSkgPT4ge1xuICAvL2V2ZW50IGxpc3RlbmVyIG9uIHRpbGVzIHByb2dyZXNzIGdhbWUgdGhyb3VnaCBzdGVwc1xuXG4gIC8vR2V0IGNvb3JkaW5hdGVzIG9mIHRoZSB0aWxlIGNsaWNrZWQgZnJvbSB0aGUgdGlsZS1udW1iZXIsIHRpbGUjOTYgaGFzIGNvb3JkaW5hdGVzIFs2LDldXG4gIGxldCB0aWxlTnVtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGlsZS1udW1cIik7XG4gIGxldCBwQXR0YWNrWDtcbiAgbGV0IHBBdHRhY2tZO1xuICBpZiAodGlsZU51bS5sZW5ndGggPT09IDEpIHtcbiAgICBwQXR0YWNrWCA9IDA7XG4gICAgcEF0dGFja1kgPSB0aWxlTnVtO1xuICB9IGVsc2Uge1xuICAgIHBBdHRhY2tYID0gdGlsZU51bVswXTtcbiAgICBwQXR0YWNrWSA9IHRpbGVOdW1bMV07XG4gIH1cbiAgLy9jYWxsIGF0dGFjayB3aXRoIGNvb3JkaW5hdGVzIGFuZCB1cGRhdGUgdGlsZSB0byByZWZsZWN0IGNoYW5nZVxuICBsZXQgcGxheWVyQXR0YWNrUmVzdWx0ID0gcGxheWVycy5wbGF5ZXIuYXR0YWNrKHBBdHRhY2tYLCBwQXR0YWNrWSk7XG5cbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRpbGVDbGlja0V2ZW50KTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZS10aWxlXCIpO1xuXG4gIGlmICh0eXBlb2YgcGxheWVyQXR0YWNrUmVzdWx0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy9wbGF5ZXJBdHRhY2tSZXN1bHQgaXMgcmV0dXJuZWQgYXMgdGhlIHNoaXAgb2JqZWN0IHdoZW4gYSBzaGlwIGlzIHN1bmtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgLy9hcHBseSBlZmZlY3RzIHRvIHN1bmtlbiBjb21wdXRlciBzaGlwIHRpbGVzXG4gICAgbGV0IHRhcmdldFRpbGU7XG4gICAgcGxheWVyQXR0YWNrUmVzdWx0LmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBpZiAoY29vcmRbMF0gPT09IDApIHtcbiAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgYGRpdlt0aWxlLW51bT1cIiR7Y29vcmRbMV19XCJdYFxuICAgICAgICApWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgYGRpdlt0aWxlLW51bT1cIiR7Y29vcmRbMF19JHtjb29yZFsxXX1cIl1gXG4gICAgICAgIClbMV07XG4gICAgICB9XG4gICAgICB0YXJnZXRUaWxlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBsYXllcnMuY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChwbGF5ZXJBdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIC8vaWYgcGxheWVyIGhpdCBjb21wdXRlciwgY2hlY2sgaWYgZ2FtZSBvdmVyLCBvdGhlcndpc2UgcmV0dXJuIHNvIHBsYXllciBzaG9vdHMgYWdhaW5cbiAgICBpZiAocGxheWVycy5jb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGVuZEdhbWUoKTsgLy9wbGF5ZXIgd2luc1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH1cblxuICAvL3NldHVwIGZvciBjb21wdXRlcidzIHR1cm5cbiAgcGxheWVyVHVybiA9IGZhbHNlO1xuICB0ZXh0Qm94VXBkYXRlcihcInR1cm5cIik7XG4gIGNvbXBUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBwbGF5ZXJUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmUtYm9hcmRcIik7XG5cbiAgLy9TdGFydCBvZiBjb21wdXRlcnMgdHVybiwgd2l0aCBzbWFsbCBkZWxheVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb21wdXRlckF0dGFjaygpO1xuICB9LCA1MDApO1xufTtcblxuZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgY29tcFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGUtdGlsZVwiKTtcbiAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aWxlQ2xpY2tFdmVudCk7XG4gIH0pO1xuICBwbGF5ZXJUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICB0ZXh0Qm94VXBkYXRlcihcImdhbWVvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgbGV0IFtjb21wQXR0YWNrQ29vcmRzLCBhdHRhY2tSZXN1bHRdID0gcGxheWVycy5jb21wdXRlci5hdHRhY2soKTtcbiAgaWYgKHR5cGVvZiBhdHRhY2tSZXN1bHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvL2NvbnZlcnQgc2hpcCBvYmplY3QgdG8gc3RyaW5nICdoaXQnIGZvciBzaW1wbGlmaWNhdGlvblxuICAgIGF0dGFja1Jlc3VsdCA9IFwiaGl0XCI7XG4gIH1cbiAgLy9nZXQgY29ycmVjdCB0aWxlIGZyb20gY29tcHV0ZXJzIGF0dGFja1xuICBsZXQgdGFyZ2V0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYGRpdlt0aWxlLW51bT1cIiR7Y29tcEF0dGFja0Nvb3Jkc31cIl1gXG4gIClbMF07XG4gIHRhcmdldFRpbGUuY2xhc3NMaXN0LmFkZChhdHRhY2tSZXN1bHQpO1xuICB0YXJnZXRUaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgaWYgKHBsYXllcnMucGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZW5kR2FtZSgpOyAvL2NvbXB1dGVyIHdpbnNcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21wdXRlckF0dGFjaygpO1xuICAgIH0sIDcwMCk7XG4gIH0gZWxzZSB7XG4gICAgdGlsZUNsYXNzUmVtb3Zlcihjb21wVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gICAgdGlsZUNsYXNzQWRkZXIocGxheWVyVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gICAgcGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlLWJvYXJkXCIpO1xuICAgIHBsYXllclR1cm4gPSB0cnVlO1xuICAgIHRleHRCb3hVcGRhdGVyKFwidHVyblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aWxlQ2xpY2tFdmVudChlKSB7XG4gIGlmIChwbGF5ZXJUdXJuKSBnYW1lTG9vcChlKTtcbn1cblxuZnVuY3Rpb24gc2hpcFRpbGVVcGRhdGVyKHNoaXBUb1VwZGF0ZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBUb1VwZGF0ZS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwbGF5ZXJTaGlwQ29vcmRpbmF0ZXMgPSBzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXNbaV07XG4gICAgbGV0IHggPSBwbGF5ZXJTaGlwQ29vcmRpbmF0ZXNbMF07XG4gICAgbGV0IHkgPSBwbGF5ZXJTaGlwQ29vcmRpbmF0ZXNbMV07XG4gICAgbGV0IHRpbGVOdW07XG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHRpbGVOdW0gPSB5LnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGVOdW0gPSB4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbdGlsZS1udW09XCIke3RpbGVOdW19XCJdYCk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIGlmIChzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNpbmdsZS10aWxlXCIpO1xuICAgIH0gZWxzZSBpZiAoc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiYgaSA9PT0gMCkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC12ZXJ0aWNhbFwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiZcbiAgICAgIGkgPT09IHNoaXBUb1VwZGF0ZS5jb29yZGluYXRlcy5sZW5ndGggLSAxXG4gICAgKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC12ZXJ0aWNhbFwiKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS12ZXJ0aWNhbFwiKTtcbiAgICB9IGVsc2UgaWYgKCFzaGlwVG9VcGRhdGUuaXNWZXJ0aWNhbCAmJiBpID09PSAwKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFzaGlwVG9VcGRhdGUuaXNWZXJ0aWNhbCAmJlxuICAgICAgaSA9PT0gc2hpcFRvVXBkYXRlLmNvb3JkaW5hdGVzLmxlbmd0aCAtIDFcbiAgICApIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLWhvcml6b250YWxcIik7XG4gICAgfSBlbHNlIGlmICghc2hpcFRvVXBkYXRlLmlzVmVydGljYWwpIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXAtbWlkZGxlLWhvcml6b250YWxcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hQbGF5ZXJTaGlwcygpIHtcbiAgcGxheWVycy5wbGF5ZXIuZ2FtZWJvYXJkLnBsYXllclNoaXBzLmZvckVhY2goKHBsYXllclNoaXApID0+IHtcbiAgICBzaGlwVGlsZVVwZGF0ZXIocGxheWVyU2hpcCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0aWxlQ2xhc3NSZW1vdmVyKHRpbGVzLCBjbGFzc1N0cmluZykge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdGlsZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NTdHJpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbGVDbGFzc0FkZGVyKHRpbGVzLCBjbGFzc1N0cmluZykge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdGlsZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoY2xhc3NTdHJpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRleHRCb3hVcGRhdGVyKGNvbW1hbmQpIHtcbiAgaWYgKGNvbW1hbmQgPT09IFwidHVyblwiKSB7XG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSBcIkl0J3MgeW91ciB0dXJuXCI7XG4gICAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJveC1wbGF5ZXJcIik7XG4gICAgICB0ZXh0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWJveC1jb21wdXRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dEJveC50ZXh0Q29udGVudCA9IFwiSXQncyB0aGUgY29tcHV0ZXIncyB0dXJuXCI7XG4gICAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJveC1jb21wdXRlclwiKTtcbiAgICAgIHRleHRCb3guY2xhc3NMaXN0LnJlbW92ZShcInRleHQtYm94LXBsYXllclwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSBcIllvdSB3b24hIE5pY2Ugc2hvb3RpbmcuXCI7XG4gICAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJveC1lbmQtd2luXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0Qm94LnRleHRDb250ZW50ID0gXCJZb3UgbG9zdC4gQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLlwiO1xuICAgICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ib3gtZW5kLWxvc3RcIik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=