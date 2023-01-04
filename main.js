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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 0.5em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(90deg, white, blue 30%, white 50%);\n  background-size: 300%;\n  background-position-x: 100%;\n\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 2s ease-in-out 0.5s 1 wave-animation;\n}\n\n@keyframes wave-animation {\n  0% {\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -80%;\n  }\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 20px;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #676767;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 10px;\n}\n\nbutton {\n  padding: 10px 30px;\n  margin: 0 20px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n}\n\n.reset-button {\n  padding: 5px 10px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n}\n\n.start-hidden {\n  /* opacity: 0; */\n  background-color: blue;\n}\n\n.text-box {\n  color: black;\n}\n\n.text-box-player {\n  color: green;\n}\n\n.text-box-computer {\n  color: black;\n}\n\n.text-box-end-win {\n  color: gold;\n}\n\n.text-box-end-lost {\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,oEAAoE;EACpE,qBAAqB;EACrB,2BAA2B;;EAE3B,6BAA6B;EAC7B,oCAAoC;EACpC,0BAA0B;EAC1B,iCAAiC;EACjC,+CAA+C;AACjD;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,8BAA8B;EAC9B,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,8BAA8B;EAC9B,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,yCAAyC;EACzC,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;EAC/B,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,+BAA+B;EAC/B,wCAAwC;AAC1C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ","sourcesContent":["body {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  --ship-colour: rgb(235, 232, 232);\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 0.5em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 4em;\n  background-image: linear-gradient(90deg, white, blue 30%, white 50%);\n  background-size: 300%;\n  background-position-x: 100%;\n\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  animation: 2s ease-in-out 0.5s 1 wave-animation;\n}\n\n@keyframes wave-animation {\n  0% {\n    background-position-x: 100%;\n  }\n  100% {\n    background-position-x: -80%;\n  }\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 20px;\n  background-color: rgb(149, 222, 255);\n  border: 3px solid #676767;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.inactive {\n  border: solid rgb(179, 207, 216) 1px;\n  background-color: rgb(122, 173, 197);\n}\n\n.inactive-board {\n  background-color: rgb(122, 173, 197);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship::before {\n  background-color: rgb(75, 75, 75);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.ship-single-tile {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n}\n\n.ship-start-horizontal {\n  background-color: var(--ship-colour);\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-horizontal {\n  background-color: var(--ship-colour);\n  border-left: 1px var(--ship-colour) solid;\n  border-right: 1px var(--ship-colour) solid;\n}\n\n.ship-end-horizontal {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-left: 1px var(--ship-colour) solid;\n}\n\n.ship-start-vertical {\n  background-color: var(--ship-colour);\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-middle-vertical {\n  background-color: var(--ship-colour);\n  border-top: 1px var(--ship-colour) solid;\n  border-bottom: 1px var(--ship-colour) solid;\n}\n\n.ship-end-vertical {\n  background-color: var(--ship-colour);\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  border-top: 1px var(--ship-colour) solid;\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(122, 173, 197);\n}\n\n.btn-wrapper {\n  padding: 10px;\n}\n\nbutton {\n  padding: 10px 30px;\n  margin: 0 20px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n}\n\n.reset-button {\n  padding: 5px 10px;\n  border: none;\n  border-radius: none;\n  background-color: black;\n  color: white;\n}\n\n.start-hidden {\n  /* opacity: 0; */\n  background-color: blue;\n}\n\n.text-box {\n  color: black;\n}\n\n.text-box-player {\n  color: green;\n}\n\n.text-box-computer {\n  color: black;\n}\n\n.text-box-end-win {\n  color: gold;\n}\n\n.text-box-end-lost {\n  color: red;\n}\n"],"sourceRoot":""}]);
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
  const defaultShipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
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
    if (seaLayout[x][y] !== undefined && seaLayout[x][y] !== "miss") {
      seaLayout[x][y].hit();
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
resetBtn.classList.add("reset-btn");
resetBtn.textContent = "Play Again";

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
  startBtn.classList.add("start-hidden");
  startBtn.disabled = true;
  playerTurn = true;
  randomBtn.disabled = true;
  tileClassRemover(compTiles, "inactive");
  tileClassAdder(playerTiles, "inactive");
  playerBoardDiv.classList.add("inactive-board");
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

mainDiv.appendChild(headerDiv);
mainDiv.appendChild(textBox);
mainDiv.appendChild(boardsDiv);
btnDiv.appendChild(randomBtn);
btnDiv.appendChild(startBtn);
mainDiv.appendChild(btnDiv);
document.body.appendChild(mainDiv);

//<Initial HMTL Framework/> ----------------------

refreshPlayerShips();

const gameLoop = (e) => {
  //event listener on tiles push game into next step, checks if computer ships are all sunk and then calls computer to make a turn and then checks if players ships are sunk. player clicks new tile and process continues

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
  let playerAttack = players.player.attack(pAttackX, pAttackY);
  e.target.classList.add(playerAttack);
  e.target.removeEventListener("click", tileClickEvent);
  e.target.classList.remove("clickable-tile");
  if (players.computer.gameboard.allShipsSunk()) {
    endGame(); //player wins
  }
  if (playerAttack === "hit") {
    //if player hit computer, player shoots again
    return;
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

const endGame = () => {
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
    tile.classList.remove("clickable-tile");
    tile.removeEventListener("click", tileClickEvent);
  });
  playerTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  console.log("game over");
  textBoxUpdater("gameover");
};

function computerAttack() {
  const [compAttackCoords, attackResult] = players.computer.attack();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSx1REFBdUQsUUFBUTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtLXNoaXAtY29sb3VyOiByZ2IoMjM1LCAyMzIsIDIzMik7XFxufVxcblxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFudG9uXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB3aGl0ZSwgYmx1ZSAzMCUsIHdoaXRlIDUwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYW5pbWF0aW9uOiAycyBlYXNlLWluLW91dCAwLjVzIDEgd2F2ZS1hbmltYXRpb247XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtODAlO1xcbiAgfVxcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMjIyLCAyNTUpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzY3Njc2NztcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMTg3LCAyMzksIDI1NSkgMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMjIyLCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMTc5LCAyMDcsIDIxNikgMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMTczLCAxOTcpO1xcbn1cXG5cXG4uaW5hY3RpdmUtYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMTczLCAxOTcpO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWlzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5zaGlwOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnNoaXAtc2luZ2xlLXRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNSU7XFxufVxcblxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1taWRkbGUtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItbGVmdDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItbGVmdDogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtZW5kLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNSU7XFxuICBib3JkZXItdG9wOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uY2xpY2thYmxlLXRpbGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2thYmxlLXRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgMTczLCAxOTcpO1xcbn1cXG5cXG4uYnRuLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzZXQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhcnQtaGlkZGVuIHtcXG4gIC8qIG9wYWNpdHk6IDA7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4udGV4dC1ib3gge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dC1ib3gtcGxheWVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRleHQtYm94LWNvbXB1dGVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQtYm94LWVuZC13aW4ge1xcbiAgY29sb3I6IGdvbGQ7XFxufVxcblxcbi50ZXh0LWJveC1lbmQtbG9zdCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxvRUFBb0U7RUFDcEUscUJBQXFCO0VBQ3JCLDJCQUEyQjs7RUFFM0IsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC0tc2hpcC1jb2xvdXI6IHJnYigyMzUsIDIzMiwgMjMyKTtcXG59XFxuXFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW50b25cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHdoaXRlLCBibHVlIDMwJSwgd2hpdGUgNTAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG5cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IDJzIGVhc2UtaW4tb3V0IDAuNXMgMSB3YXZlLWFuaW1hdGlvbjtcXG59XFxuXFxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC04MCU7XFxuICB9XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNjc2NzY3O1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODcsIDIzOSwgMjU1KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxNzksIDIwNywgMjE2KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5pbmFjdGl2ZS1ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5taXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnNoaXA6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uc2hpcC1zaW5nbGUtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG59XFxuXFxuLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG91cik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXNoaXAtY29sb3VyKSBzb2xpZDtcXG59XFxuXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3VyKTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tc2hpcC1jb2xvdXIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcC1lbmQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvdXIpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1JTtcXG4gIGJvcmRlci10b3A6IDFweCB2YXIoLS1zaGlwLWNvbG91cikgc29saWQ7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxNzMsIDE5Nyk7XFxufVxcblxcbi5idG4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXNldC1idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGFydC1oaWRkZW4ge1xcbiAgLyogb3BhY2l0eTogMDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi50ZXh0LWJveCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0LWJveC1wbGF5ZXIge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udGV4dC1ib3gtY29tcHV0ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dC1ib3gtZW5kLXdpbiB7XFxuICBjb2xvcjogZ29sZDtcXG59XFxuXFxuLnRleHQtYm94LWVuZC1sb3N0IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRCdWlsZGVyKCkge1xuICBjb25zdCBkZWZhdWx0U2hpcExlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV07XG4gIGxldCBwbGF5ZXJTaGlwcyA9IFtdO1xuXG4gIGxldCBzZWFMYXlvdXQ7XG5cbiAgY29uc3QgY2hlY2tTcGFjZSA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIHNlYUxheW91dFt4XVt5XSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2hpcEJ1aWxkZXIgPSAoKSA9PiB7XG4gICAgcGxheWVyU2hpcHMgPSBbXTtcbiAgICBzZWFMYXlvdXQgPSBbXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgXTtcbiAgICBkZWZhdWx0U2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgbGV0IGdvb2RQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41OyAvL1RydWUgZm9yIEhvcml6b250YWwsIEZhbHNlIGZvciBWZXJ0aWNhbFxuICAgICAgbGV0IHN0YXJ0O1xuICAgICAgbGV0IGVuZDtcbiAgICAgIC8vVGVzdCBhbGwgc2hpcCBjb29yZGluYXRlcyB0byBzZWUgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgdGhlcmUsIG90aGVyd2lzZSBmaW5kIG5ldyBzdGFydGluZyBwb2ludCBhbmQgdHJ5IGFnYWluXG4gICAgICB3aGlsZSAoIWdvb2RQbGFjZW1lbnQpIHtcbiAgICAgICAgbGV0IGdvb2RQbGFjZW1lbnRUZXN0ID0gdHJ1ZTsgLy9kZWZhdWx0IHRvIHRydWUsIGlmIHRlc3QgZmFpbHMgc2V0IGZhbHNlXG4gICAgICAgIHN0YXJ0ID0gW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIF07XG4gICAgICAgIGlmIChjaGVja1NwYWNlKHN0YXJ0WzBdLCBzdGFydFsxXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVuZCA9IHN0YXJ0O1xuICAgICAgICAgIGlmIChzaGlwTGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vaWYgc3BhY2UgaXMgbm90IGVtcHR5IG9yIG91dCBvZiBib3VuZHMgdGhlbiBiYWQgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBzdGFydFswXSArIGkgPiA5IHx8XG4gICAgICAgICAgICAgICAgICBjaGVja1NwYWNlKHN0YXJ0WzBdICsgaSwgc3RhcnRbMV0pICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGdvb2RQbGFjZW1lbnRUZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vZ29vZCBwbGFjZW1lbnQsIGFzc2lnbiBlbmRcbiAgICAgICAgICAgICAgICAgIGVuZCA9IFtzdGFydFswXSArIGksIHN0YXJ0WzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zYW1lIGZvciBvdGhlciBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBzdGFydFsxXSArIGkgPiA5IHx8XG4gICAgICAgICAgICAgICAgICBjaGVja1NwYWNlKHN0YXJ0WzBdLCBzdGFydFsxXSArIGkpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGdvb2RQbGFjZW1lbnRUZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGVuZCA9IFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ29vZFBsYWNlbWVudFRlc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBnb29kUGxhY2VtZW50ID0gZ29vZFBsYWNlbWVudFRlc3Q7XG4gICAgICB9XG5cbiAgICAgIC8vdXBkYXRlIHRoZSBzZWFMYXlvdXQgdG8gdHJhY2sgd2hlcmUgYWxsIHNoaXBzIGFyZSBsb2NhdGVkXG4gICAgICBsZXQgbmV3U2hpcCA9IHNoaXAoc3RhcnQsIGVuZCk7XG4gICAgICBuZXdTaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIHNlYUxheW91dFtjb29yZFswXV1bY29vcmRbMV1dID0gbmV3U2hpcDtcbiAgICAgIH0pO1xuICAgICAgcGxheWVyU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoc2VhTGF5b3V0W3hdW3ldICE9PSB1bmRlZmluZWQgJiYgc2VhTGF5b3V0W3hdW3ldICE9PSBcIm1pc3NcIikge1xuICAgICAgc2VhTGF5b3V0W3hdW3ldLmhpdCgpO1xuICAgICAgc2VhTGF5b3V0W3hdW3ldID0gXCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFMYXlvdXRbeF1beV0gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyU2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghcGxheWVyU2hpcHNbaV0uaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgc2hpcEJ1aWxkZXIoKTtcblxuICByZXR1cm4ge1xuICAgIHBsYXllclNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGNoZWNrU3BhY2UsXG4gICAgc2hpcEJ1aWxkZXIsXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkQnVpbGRlcjtcbiIsImNvbnN0IGdhbWVib2FyZEJ1aWxkZXIgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5cbmNvbnN0IHBsYXllckJ1aWxkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrTG9naWMgPSAoKSA9PiB7XG4gICAgLy90byBiZSByZXBsYWNlZCBsYXRlciwgaWYgdGltZSBhbGxvd3NcbiAgICBsZXQgeENvb3JkO1xuICAgIGxldCB5Q29vcmQ7XG4gICAgZG8ge1xuICAgICAgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgLy9jb21wYXJlIHRoZSBwcmV2aW91cyBsaXN0IG9mIGF0dGFja3MgdG8gdGhlIG5ldyByYW5kb21seSBnZW5lcmF0ZWQgYXR0YWNrIHVudGlsIGFuIG9yaWdpbmFsIGlzIGZvdW5kXG4gICAgfSB3aGlsZSAoXG4gICAgICBKU09OLnN0cmluZ2lmeShjb21wdXRlci5hdHRhY2tMaXN0KS5pbmRleE9mKGBbJHt4Q29vcmR9LCR7eUNvb3JkfV1gKSAhPT1cbiAgICAgIC0xXG4gICAgKTtcbiAgICByZXR1cm4gW3hDb29yZCwgeUNvb3JkXTtcbiAgfTtcblxuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgZ2FtZWJvYXJkOiBnYW1lYm9hcmRCdWlsZGVyKCksXG4gICAgdHVybjogdHJ1ZSxcbiAgICBhdHRhY2s6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfSxcbiAgICBnZXQgbmV3U2hpcHMoKSB7XG4gICAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZEJ1aWxkZXIoKTtcbiAgICB9LFxuICB9O1xuICBjb25zdCBjb21wdXRlciA9IHtcbiAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEJ1aWxkZXIoKSxcbiAgICB0dXJuOiBmYWxzZSxcbiAgICBhdHRhY2tMaXN0OiBbXSxcbiAgICBhdHRhY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IGNvbXB1dGVyQXR0YWNrTG9naWMoKTtcbiAgICAgIGNvbXB1dGVyLmF0dGFja0xpc3QucHVzaChhdHRhY2tDb29yZHMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKC4uLmF0dGFja0Nvb3Jkcyk7XG5cbiAgICAgIGxldCB4Q29tcCA9IGF0dGFja0Nvb3Jkc1swXTtcbiAgICAgIGxldCB5Q29tcCA9IGF0dGFja0Nvb3Jkc1sxXTtcbiAgICAgIGxldCB0aWxlTnVtO1xuICAgICAgaWYgKHhDb21wID09PSAwKSB7XG4gICAgICAgIHRpbGVOdW0gPSB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZU51bSA9IHhDb21wLnRvU3RyaW5nKCkgKyB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt0aWxlTnVtLCByZXN1bHRdO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJCdWlsZGVyO1xuIiwiZnVuY3Rpb24gc2hpcChzdGFydCwgZW5kKSB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtzdGFydF07XG4gIGxldCBsZW5ndGggPSAwO1xuICBsZXQgaXNWZXJ0aWNhbDtcblxuICAvL2NoZWNrIGlmIHNoaXAgaXMgMSBzcXVhcmVcbiAgaWYgKHN0YXJ0WzBdID09PSBlbmRbMF0gJiYgc3RhcnRbMV0gPT09IGVuZFsxXSkge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cbiAgLy9jaGVjayBmb3IgZGlyZWN0aW9uIG9mIHNoaXBcbiAgZWxzZSBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSkge1xuICAgIGlzVmVydGljYWwgPSBmYWxzZTtcbiAgICBsZXQgdmVydGljYWwgPSBzdGFydFsxXSArIDE7XG4gICAgd2hpbGUgKHZlcnRpY2FsIDw9IGVuZFsxXSkge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChbc3RhcnRbMF0sIHZlcnRpY2FsXSk7XG4gICAgICB2ZXJ0aWNhbCsrO1xuICAgIH1cbiAgICBsZW5ndGggPSBlbmRbMV0gLSBzdGFydFsxXSArIDE7XG4gIH0gZWxzZSB7XG4gICAgaXNWZXJ0aWNhbCA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSBzdGFydFswXSArIDE7XG4gICAgd2hpbGUgKGhvcml6b250YWwgPD0gZW5kWzBdKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFtob3Jpem9udGFsLCBzdGFydFsxXV0pO1xuICAgICAgaG9yaXpvbnRhbCsrO1xuICAgIH1cbiAgICBsZW5ndGggPSBlbmRbMF0gLSBzdGFydFswXSArIDE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IGZhbHNlLFxuICAgIGNvb3JkaW5hdGVzLFxuICAgIGlzVmVydGljYWwsXG4gICAgaGl0KCkge1xuICAgICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMTtcbiAgICAgIHJldHVybiB0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3QgcGxheWVyQnVpbGRlciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuY29uc3QgcGxheWVycyA9IHBsYXllckJ1aWxkZXIoKTtcbmxldCBwbGF5ZXJUdXJuID0gZmFsc2U7XG5sZXQgcGxheWVyVGlsZXMgPSBbXTtcbmxldCBjb21wVGlsZXMgPSBbXTtcblxuLy88SW5pdGlhbCBITVRMIEZyYW1ld29yaz4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuaGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIkJBVFRMRVNISVBcIjtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbmNvbnN0IGJvYXJkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ib2FyZHNEaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkLXdyYXBwZXJcIik7XG5cbmNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idG5EaXYuY2xhc3NMaXN0LmFkZChcImJ0bi13cmFwcGVyXCIpO1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWJ0blwiKTtcbnN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBCYXR0bGVcIjtcbmNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5yYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcInJhbmRvbS1idG5cIik7XG5yYW5kb21CdG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcInJlc2V0LWJ0blwiKTtcbnJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG5cbmNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRleHRCb3guY2xhc3NMaXN0LmFkZChcInRleHQtYm94XCIpO1xudGV4dEJveC50ZXh0Q29udGVudCA9XG4gIFwiQ2xpY2sgU3RhcnQgQmF0dGxlIHdoZW4geW91IGFyZSBoYXBweSB3aXRoIHlvdXIgc2hpcCBjb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbmNvbnN0IGNvbXBCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb21wQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIHBsYXllclRpbGVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcFRpbGVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyVGlsZXNbaV0uc2V0QXR0cmlidXRlKFwidGlsZS1udW1cIiwgaSk7XG4gIGNvbXBUaWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0aWxlLW51bVwiLCBpKTtcbiAgcGxheWVyVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gIGNvbXBUaWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJjbGlja2FibGUtdGlsZVwiKTtcbiAgLy9UaGVzZSBldmVudCBsaXN0ZW5lcnMgb24gZWFjaCB0aWxlIGRyaXZlIHRoZSBwcm9ncmVzc2lvbiBvZiB0aGUgZ2FtZSwgZWFjaCB0aW1lIG9uZSBpcyBjbGlja2VkLCB0aGUgcHJvZ3JhbSBtb3ZlcyBmb3J3YXJkIHVudGlsIHVzZXIgaW5wdXQgaXMgcmVxdWlyZWQgYWdhaW5cbiAgY29tcFRpbGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aWxlQ2xpY2tFdmVudCk7XG4gIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKHBsYXllclRpbGVzW2ldKTtcbiAgY29tcEJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXBUaWxlc1tpXSk7XG59XG5cbmJvYXJkc0Rpdi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZERpdik7XG5ib2FyZHNEaXYuYXBwZW5kQ2hpbGQoY29tcEJvYXJkRGl2KTtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWhpZGRlblwiKTtcbiAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgcmFuZG9tQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgdGlsZUNsYXNzUmVtb3Zlcihjb21wVGlsZXMsIFwiaW5hY3RpdmVcIik7XG4gIHRpbGVDbGFzc0FkZGVyKHBsYXllclRpbGVzLCBcImluYWN0aXZlXCIpO1xuICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmUtYm9hcmRcIik7XG59KTtcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXBcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1zaW5nbGUtdGlsZVwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcbiAgdGlsZUNsYXNzUmVtb3ZlcihwbGF5ZXJUaWxlcywgXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xuICB0aWxlQ2xhc3NSZW1vdmVyKHBsYXllclRpbGVzLCBcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XG4gIHRpbGVDbGFzc1JlbW92ZXIocGxheWVyVGlsZXMsIFwic2hpcC1lbmQtdmVydGljYWxcIik7XG4gIHBsYXllcnMucGxheWVyLm5ld1NoaXBzO1xuICByZWZyZXNoUGxheWVyU2hpcHMoKTtcbn0pO1xuXG5tYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5tYWluRGl2LmFwcGVuZENoaWxkKHRleHRCb3gpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChib2FyZHNEaXYpO1xuYnRuRGl2LmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG5idG5EaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xubWFpbkRpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuLy88SW5pdGlhbCBITVRMIEZyYW1ld29yay8+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxucmVmcmVzaFBsYXllclNoaXBzKCk7XG5cbmNvbnN0IGdhbWVMb29wID0gKGUpID0+IHtcbiAgLy9ldmVudCBsaXN0ZW5lciBvbiB0aWxlcyBwdXNoIGdhbWUgaW50byBuZXh0IHN0ZXAsIGNoZWNrcyBpZiBjb21wdXRlciBzaGlwcyBhcmUgYWxsIHN1bmsgYW5kIHRoZW4gY2FsbHMgY29tcHV0ZXIgdG8gbWFrZSBhIHR1cm4gYW5kIHRoZW4gY2hlY2tzIGlmIHBsYXllcnMgc2hpcHMgYXJlIHN1bmsuIHBsYXllciBjbGlja3MgbmV3IHRpbGUgYW5kIHByb2Nlc3MgY29udGludWVzXG5cbiAgLy9HZXQgY29vcmRpbmF0ZXMgb2YgdGhlIHRpbGUgY2xpY2tlZCBmcm9tIHRoZSB0aWxlLW51bWJlciwgdGlsZSM5NiBoYXMgY29vcmRpbmF0ZXMgWzYsOV1cbiAgbGV0IHRpbGVOdW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aWxlLW51bVwiKTtcbiAgbGV0IHBBdHRhY2tYO1xuICBsZXQgcEF0dGFja1k7XG4gIGlmICh0aWxlTnVtLmxlbmd0aCA9PT0gMSkge1xuICAgIHBBdHRhY2tYID0gMDtcbiAgICBwQXR0YWNrWSA9IHRpbGVOdW07XG4gIH0gZWxzZSB7XG4gICAgcEF0dGFja1ggPSB0aWxlTnVtWzBdO1xuICAgIHBBdHRhY2tZID0gdGlsZU51bVsxXTtcbiAgfVxuICAvL2NhbGwgYXR0YWNrIHdpdGggY29vcmRpbmF0ZXMgYW5kIHVwZGF0ZSB0aWxlIHRvIHJlZmxlY3QgY2hhbmdlXG4gIGxldCBwbGF5ZXJBdHRhY2sgPSBwbGF5ZXJzLnBsYXllci5hdHRhY2socEF0dGFja1gsIHBBdHRhY2tZKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChwbGF5ZXJBdHRhY2spO1xuICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGlsZUNsaWNrRXZlbnQpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlLXRpbGVcIik7XG4gIGlmIChwbGF5ZXJzLmNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGVuZEdhbWUoKTsgLy9wbGF5ZXIgd2luc1xuICB9XG4gIGlmIChwbGF5ZXJBdHRhY2sgPT09IFwiaGl0XCIpIHtcbiAgICAvL2lmIHBsYXllciBoaXQgY29tcHV0ZXIsIHBsYXllciBzaG9vdHMgYWdhaW5cbiAgICByZXR1cm47XG4gIH1cblxuICAvL3NldHVwIGZvciBjb21wdXRlcidzIHR1cm5cbiAgcGxheWVyVHVybiA9IGZhbHNlO1xuICB0ZXh0Qm94VXBkYXRlcihcInR1cm5cIik7XG4gIGNvbXBUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBwbGF5ZXJUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmUtYm9hcmRcIik7XG5cbiAgLy9TdGFydCBvZiBjb21wdXRlcnMgdHVybiwgd2l0aCBzbWFsbCBkZWxheVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb21wdXRlckF0dGFjaygpO1xuICB9LCA1MDApO1xufTtcblxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgY29tcFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGUtdGlsZVwiKTtcbiAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aWxlQ2xpY2tFdmVudCk7XG4gIH0pO1xuICBwbGF5ZXJUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhcImdhbWUgb3ZlclwiKTtcbiAgdGV4dEJveFVwZGF0ZXIoXCJnYW1lb3ZlclwiKTtcbn07XG5cbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xuICBjb25zdCBbY29tcEF0dGFja0Nvb3JkcywgYXR0YWNrUmVzdWx0XSA9IHBsYXllcnMuY29tcHV0ZXIuYXR0YWNrKCk7XG4gIC8vZ2V0IGNvcnJlY3QgdGlsZSBmcm9tIGNvbXB1dGVycyBhdHRhY2tcbiAgbGV0IHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGBkaXZbdGlsZS1udW09XCIke2NvbXBBdHRhY2tDb29yZHN9XCJdYFxuICApWzBdO1xuICB0YXJnZXRUaWxlLmNsYXNzTGlzdC5hZGQoYXR0YWNrUmVzdWx0KTtcbiAgdGFyZ2V0VGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgIGlmIChwbGF5ZXJzLnBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGVuZEdhbWUoKTsgLy9jb21wdXRlciB3aW5zXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29tcHV0ZXJBdHRhY2soKTtcbiAgICB9LCA3MDApO1xuICB9IGVsc2Uge1xuICAgIHRpbGVDbGFzc1JlbW92ZXIoY29tcFRpbGVzLCBcImluYWN0aXZlXCIpO1xuICAgIHRpbGVDbGFzc0FkZGVyKHBsYXllclRpbGVzLCBcImluYWN0aXZlXCIpO1xuICAgIHBsYXllckJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZS1ib2FyZFwiKTtcbiAgICBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICB0ZXh0Qm94VXBkYXRlcihcInR1cm5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGlsZUNsaWNrRXZlbnQoZSkge1xuICBpZiAocGxheWVyVHVybikgZ2FtZUxvb3AoZSk7XG59XG5cbmZ1bmN0aW9uIHNoaXBUaWxlVXBkYXRlcihzaGlwVG9VcGRhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGxheWVyU2hpcENvb3JkaW5hdGVzID0gc2hpcFRvVXBkYXRlLmNvb3JkaW5hdGVzW2ldO1xuICAgIGxldCB4ID0gcGxheWVyU2hpcENvb3JkaW5hdGVzWzBdO1xuICAgIGxldCB5ID0gcGxheWVyU2hpcENvb3JkaW5hdGVzWzFdO1xuICAgIGxldCB0aWxlTnVtO1xuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICB0aWxlTnVtID0geS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlTnVtID0geC50b1N0cmluZygpICsgeS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3RpbGUtbnVtPVwiJHt0aWxlTnVtfVwiXWApO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICBpZiAoc2hpcFRvVXBkYXRlLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zaW5nbGUtdGlsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsICYmIGkgPT09IDApIHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsICYmXG4gICAgICBpID09PSBzaGlwVG9VcGRhdGUuY29vcmRpbmF0ZXMubGVuZ3RoIC0gMVxuICAgICkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmIChzaGlwVG9VcGRhdGUuaXNWZXJ0aWNhbCkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XG4gICAgfSBlbHNlIGlmICghc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiYgaSA9PT0gMCkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC1ob3Jpem9udGFsXCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhc2hpcFRvVXBkYXRlLmlzVmVydGljYWwgJiZcbiAgICAgIGkgPT09IHNoaXBUb1VwZGF0ZS5jb29yZGluYXRlcy5sZW5ndGggLSAxXG4gICAgKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xuICAgIH0gZWxzZSBpZiAoIXNoaXBUb1VwZGF0ZS5pc1ZlcnRpY2FsKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS1ob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZWZyZXNoUGxheWVyU2hpcHMoKSB7XG4gIHBsYXllcnMucGxheWVyLmdhbWVib2FyZC5wbGF5ZXJTaGlwcy5mb3JFYWNoKChwbGF5ZXJTaGlwKSA9PiB7XG4gICAgc2hpcFRpbGVVcGRhdGVyKHBsYXllclNoaXApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGlsZUNsYXNzUmVtb3Zlcih0aWxlcywgY2xhc3NTdHJpbmcpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHRpbGVzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzU3RyaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aWxlQ2xhc3NBZGRlcih0aWxlcywgY2xhc3NTdHJpbmcpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHRpbGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzU3RyaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXh0Qm94VXBkYXRlcihjb21tYW5kKSB7XG4gIGlmIChjb21tYW5kID09PSBcInR1cm5cIikge1xuICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICB0ZXh0Qm94LnRleHRDb250ZW50ID0gXCJJdCdzIHlvdXIgdHVyblwiO1xuICAgICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ib3gtcGxheWVyXCIpO1xuICAgICAgdGV4dEJveC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1ib3gtY29tcHV0ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRCb3gudGV4dENvbnRlbnQgPSBcIkl0J3MgdGhlIGNvbXB1dGVyJ3MgdHVyblwiO1xuICAgICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ib3gtY29tcHV0ZXJcIik7XG4gICAgICB0ZXh0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWJveC1wbGF5ZXJcIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICB0ZXh0Qm94LnRleHRDb250ZW50ID0gXCJZb3Ugd29uISBOaWNlIHNob290aW5nLlwiO1xuICAgICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ib3gtZW5kLXdpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dEJveC50ZXh0Q29udGVudCA9IFwiWW91IGxvc3QuIEJldHRlciBsdWNrIG5leHQgdGltZS5cIjtcbiAgICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZChcInRleHQtYm94LWVuZC1sb3N0XCIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9