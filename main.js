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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 10px;\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  padding: 10px;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n}\n\n.inactive {\n  border: solid rgb(163, 231, 252) 1px;\n  background-color: rgb(148, 210, 238);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.player-tile {\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(148, 210, 238);\n}\n\n.start-btn-wrapper {\n  padding: 10px;\n}\n\n.start-btn {\n}\n\n.start-hidden {\n  /* opacity: 0; */\n  background-color: blue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;AACA;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;AACA;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n}\n\n#main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  background-color: black;\n  min-width: 100vw;\n  padding: 10px;\n}\n\n.board-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  padding: 10px;\n}\n\n.tile {\n  border: solid rgb(187, 239, 255) 1px;\n  background-color: rgb(149, 222, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  min-height: 30px;\n  position: relative;\n}\n\n.inactive {\n  border: solid rgb(163, 231, 252) 1px;\n  background-color: rgb(148, 210, 238);\n}\n\n.hit::before {\n  background-color: rgb(165, 0, 0);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.miss::before {\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  right: 7px;\n  bottom: 7px;\n  content: \"\";\n}\n\n.player-tile {\n}\n\n.clickable-tile {\n  cursor: pointer;\n}\n\n.clickable-tile:hover {\n  background-color: rgb(148, 210, 238);\n}\n\n.start-btn-wrapper {\n  padding: 10px;\n}\n\n.start-btn {\n}\n\n.start-hidden {\n  /* opacity: 0; */\n  background-color: blue;\n}\n"],"sourceRoot":""}]);
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

  let seaLayout = [
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
  console.log(seaLayout[0][0]);

  //temporarily hard code assigning ship locations for codings sake
  const shipLocations = [];
  for (let i = 0; i < 10; i++) {
    shipLocations[i] = [
      [i, 0],
      [i, defaultShipLengths[i] - 1],
    ];
  }

  //create ships and assign them coordinates from the temp locations
  //update the seaLayout to track where all ships are located
  for (let i = 0; i < shipLocations.length; i++) {
    playerShips[i] = ship(shipLocations[i][0], shipLocations[i][1]);
    playerShips[i].coordinates.forEach((coord) => {
      seaLayout[coord[0]][coord[1]] = playerShips[i];
    });
  }

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

  const checkSpace = (x, y) => {
    return seaLayout[x][y];
  };

  const shipPlacer = (shipArray) => {
    shipArray.forEach((element) => {
      let goodPlacement = false;
      let direction = Math.random() < 0.5; //True for Horizontal, False for Vertical
      let startX;
      let startY;
      //Test all ship coordinates to see if there is already a ship there, otherwise find new starting point and try again
      while (!goodPlacement) {
        let goodPlacementTest = true;
        startX = Math.floor(Math.random() * 11);
        startY = Math.floor(Math.random() * 11);
        if (checkSpace(startX, startY) === undefined) {
          //single square ships
          //for all ships bigger than 1 square
          if (element.length > 1) {
            for (let i = 1; i < element.length; i++) {
              //If Horizontal
              if (direction) {
                //if space is not empty then bad ship placement
                if (checkSpace(startX + 1, startY) !== undefined) {
                  goodPlacementTest = false;
                }
                //Else Veritcal
              } else {
                //if space is not empty then bad ship placement
                if (checkSpace(startX, startY + 1) !== undefined) {
                  goodPlacementTest = false;
                }
              }
            }
          }
        }
        goodPlacement = goodPlacementTest;
      }
    });
  };

  return {
    playerShips,
    receiveAttack,
    allShipsSunk,
    checkSpace,
  };
}

module.exports = gameboardBuilder;

//hit miss ship empty


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboardBuilder = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const playerBuilder = () => {
  const computerAttackLogic = () => {
    //replace this with something less resource consuming later if time
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

  //check if ship is 1 square
  if (start[0] === end[0] && start[1] === end[1]) {
    length = 1;
  }
  //check for direction of ship
  else if (start[0] === end[0]) {
    let vertical = start[1] + 1;
    while (vertical <= end[1]) {
      coordinates.push([start[0], vertical]);
      vertical++;
    }
    length = end[1] - start[1] + 1;
  } else {
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const playerBuilder = __webpack_require__(/*! ./player */ "./src/player.js");

/*
  Start game
  1. Ship placement function
    - possibly drag and drop
  2. Confirmation button
  End game
  1. Reset button
  2. Winner banner
*/

let players;
let playerTurn = true;
let playerTiles = [];
let compTiles = [];

//<Initial HMTL Framework> -----------------------

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
const headerDiv = document.createElement("header");
const boardsDiv = document.createElement("div");
boardsDiv.classList.add("board-wrapper");

const startBtnDiv = document.createElement("div");
startBtnDiv.classList.add("start-btn-wrapper");
const startBtn = document.createElement("button");
startBtn.setAttribute("id", "start-btn");
startBtn.textContent = "Start Battle";
startBtn.addEventListener("click", () => {
  startBtn.classList.add("start-hidden");
  buildGameHMTL();
  players = playerBuilder();
  startBtn.disabled = true;
});

mainDiv.appendChild(headerDiv);
startBtnDiv.appendChild(startBtn);
mainDiv.appendChild(startBtnDiv);
mainDiv.appendChild(boardsDiv);
document.body.appendChild(mainDiv);

//<Initial HMTL Framework ----------------------/>

const buildGameHMTL = () => {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("board");
  const compBoardDiv = document.createElement("div");
  compBoardDiv.classList.add("board");

  let i = 0;

  while (i < 100) {
    playerTiles[i] = document.createElement("div");
    compTiles[i] = document.createElement("div");
    playerTiles[i].setAttribute("tile-num", i);
    compTiles[i].setAttribute("tile-num", i);
    playerTiles[i].classList.add("tile");
    compTiles[i].classList.add("tile");
    playerTiles[i].classList.add("player-tile", "inactive");
    compTiles[i].classList.add("clickable-tile");
    //These event listeners on each tile drive the progression of the game, each time one is clicked, the program moves forward until user input is required again
    compTiles[i].addEventListener("click", tileClickEvent);
    playerBoardDiv.appendChild(playerTiles[i]);
    compBoardDiv.appendChild(compTiles[i]);
    i++;
  }

  boardsDiv.appendChild(playerBoardDiv);
  boardsDiv.appendChild(compBoardDiv);
};

const computerAttack = () => {
  const [compAttackCoords, attackResult] = players.computer.attack();
  //get correct tile from computers attack
  let targetTile = document.querySelectorAll(
    `div[tile-num="${compAttackCoords}"]`
  )[0];
  targetTile.classList.add(attackResult);
  if (attackResult === "hit") {
    if (players.player.gameboard.allShipsSunk()) {
      endGame();
    }
    setTimeout(() => {
      computerAttack();
    }, 900);
  } else {
    compTiles.forEach((tile) => {
      tile.classList.remove("inactive");
    });
    playerTiles.forEach((tile) => {
      tile.classList.add("inactive");
    });
  }
};

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
    endGame();
  }
  if (playerAttack === "hit") {
    //if player hit computer, player shoots again
    return;
  }
  playerTurn = false;
  //Start of computers turn, with small delay
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  playerTiles.forEach((tile) => {
    tile.classList.remove("inactive");
  });
  setTimeout(() => {
    computerAttack();
    playerTurn = true;
  }, 700);
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
};

function tileClickEvent(e) {
  if (playerTurn) gameLoop(e);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODcsIDIzOSwgMjU1KSAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyMjIsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE2MywgMjMxLCAyNTIpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDIxMCwgMjM4KTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYm90dG9tOiA3cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLm1pc3M6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ucGxheWVyLXRpbGUge1xcbn1cXG5cXG4uY2xpY2thYmxlLXRpbGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2thYmxlLXRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMjEwLCAyMzgpO1xcbn1cXG5cXG4uc3RhcnQtYnRuLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxufVxcblxcbi5zdGFydC1oaWRkZW4ge1xcbiAgLyogb3BhY2l0eTogMDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogc29saWQgcmdiKDE4NywgMjM5LCAyNTUpIDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDIyMiwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMTYzLCAyMzEsIDI1MikgMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMjEwLCAyMzgpO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBib3R0b206IDdweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWlzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJvdHRvbTogN3B4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5wbGF5ZXItdGlsZSB7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGlja2FibGUtdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAyMTAsIDIzOCk7XFxufVxcblxcbi5zdGFydC1idG4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG59XFxuXFxuLnN0YXJ0LWhpZGRlbiB7XFxuICAvKiBvcGFjaXR5OiAwOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZEJ1aWxkZXIoKSB7XG4gIGNvbnN0IGRlZmF1bHRTaGlwTGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTtcbiAgbGV0IHBsYXllclNoaXBzID0gW107XG5cbiAgbGV0IHNlYUxheW91dCA9IFtcbiAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgIFssICwgLCAsICwgLCAsICwgLCAsXSxcbiAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgIFssICwgLCAsICwgLCAsICwgLCAsXSxcbiAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gICAgWywgLCAsICwgLCAsICwgLCAsICxdLFxuICAgIFssICwgLCAsICwgLCAsICwgLCAsXSxcbiAgICBbLCAsICwgLCAsICwgLCAsICwgLF0sXG4gIF07XG4gIGNvbnNvbGUubG9nKHNlYUxheW91dFswXVswXSk7XG5cbiAgLy90ZW1wb3JhcmlseSBoYXJkIGNvZGUgYXNzaWduaW5nIHNoaXAgbG9jYXRpb25zIGZvciBjb2RpbmdzIHNha2VcbiAgY29uc3Qgc2hpcExvY2F0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBzaGlwTG9jYXRpb25zW2ldID0gW1xuICAgICAgW2ksIDBdLFxuICAgICAgW2ksIGRlZmF1bHRTaGlwTGVuZ3Roc1tpXSAtIDFdLFxuICAgIF07XG4gIH1cblxuICAvL2NyZWF0ZSBzaGlwcyBhbmQgYXNzaWduIHRoZW0gY29vcmRpbmF0ZXMgZnJvbSB0aGUgdGVtcCBsb2NhdGlvbnNcbiAgLy91cGRhdGUgdGhlIHNlYUxheW91dCB0byB0cmFjayB3aGVyZSBhbGwgc2hpcHMgYXJlIGxvY2F0ZWRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgcGxheWVyU2hpcHNbaV0gPSBzaGlwKHNoaXBMb2NhdGlvbnNbaV1bMF0sIHNoaXBMb2NhdGlvbnNbaV1bMV0pO1xuICAgIHBsYXllclNoaXBzW2ldLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBzZWFMYXlvdXRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IHBsYXllclNoaXBzW2ldO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHNlYUxheW91dFt4XVt5XSAhPT0gdW5kZWZpbmVkICYmIHNlYUxheW91dFt4XVt5XSAhPT0gXCJtaXNzXCIpIHtcbiAgICAgIHNlYUxheW91dFt4XVt5XS5oaXQoKTtcbiAgICAgIHNlYUxheW91dFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhTGF5b3V0W3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllclNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXBsYXllclNoaXBzW2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU3BhY2UgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBzZWFMYXlvdXRbeF1beV07XG4gIH07XG5cbiAgY29uc3Qgc2hpcFBsYWNlciA9IChzaGlwQXJyYXkpID0+IHtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGdvb2RQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41OyAvL1RydWUgZm9yIEhvcml6b250YWwsIEZhbHNlIGZvciBWZXJ0aWNhbFxuICAgICAgbGV0IHN0YXJ0WDtcbiAgICAgIGxldCBzdGFydFk7XG4gICAgICAvL1Rlc3QgYWxsIHNoaXAgY29vcmRpbmF0ZXMgdG8gc2VlIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIHRoZXJlLCBvdGhlcndpc2UgZmluZCBuZXcgc3RhcnRpbmcgcG9pbnQgYW5kIHRyeSBhZ2FpblxuICAgICAgd2hpbGUgKCFnb29kUGxhY2VtZW50KSB7XG4gICAgICAgIGxldCBnb29kUGxhY2VtZW50VGVzdCA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgICBpZiAoY2hlY2tTcGFjZShzdGFydFgsIHN0YXJ0WSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vc2luZ2xlIHNxdWFyZSBzaGlwc1xuICAgICAgICAgIC8vZm9yIGFsbCBzaGlwcyBiaWdnZXIgdGhhbiAxIHNxdWFyZVxuICAgICAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvL0lmIEhvcml6b250YWxcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vaWYgc3BhY2UgaXMgbm90IGVtcHR5IHRoZW4gYmFkIHNoaXAgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrU3BhY2Uoc3RhcnRYICsgMSwgc3RhcnRZKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBnb29kUGxhY2VtZW50VGVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0Vsc2UgVmVyaXRjYWxcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2lmIHNwYWNlIGlzIG5vdCBlbXB0eSB0aGVuIGJhZCBzaGlwIHBsYWNlbWVudFxuICAgICAgICAgICAgICAgIGlmIChjaGVja1NwYWNlKHN0YXJ0WCwgc3RhcnRZICsgMSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgZ29vZFBsYWNlbWVudFRlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29vZFBsYWNlbWVudCA9IGdvb2RQbGFjZW1lbnRUZXN0O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheWVyU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgY2hlY2tTcGFjZSxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRCdWlsZGVyO1xuXG4vL2hpdCBtaXNzIHNoaXAgZW1wdHlcbiIsImNvbnN0IGdhbWVib2FyZEJ1aWxkZXIgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5cbmNvbnN0IHBsYXllckJ1aWxkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrTG9naWMgPSAoKSA9PiB7XG4gICAgLy9yZXBsYWNlIHRoaXMgd2l0aCBzb21ldGhpbmcgbGVzcyByZXNvdXJjZSBjb25zdW1pbmcgbGF0ZXIgaWYgdGltZVxuICAgIGxldCB4Q29vcmQ7XG4gICAgbGV0IHlDb29yZDtcbiAgICBkbyB7XG4gICAgICB4Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAvL2NvbXBhcmUgdGhlIHByZXZpb3VzIGxpc3Qgb2YgYXR0YWNrcyB0byB0aGUgbmV3IHJhbmRvbWx5IGdlbmVyYXRlZCBhdHRhY2sgdW50aWwgYW4gb3JpZ2luYWwgaXMgZm91bmRcbiAgICB9IHdoaWxlIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KGNvbXB1dGVyLmF0dGFja0xpc3QpLmluZGV4T2YoYFske3hDb29yZH0sJHt5Q29vcmR9XWApICE9PVxuICAgICAgLTFcbiAgICApO1xuICAgIHJldHVybiBbeENvb3JkLCB5Q29vcmRdO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEJ1aWxkZXIoKSxcbiAgICB0dXJuOiB0cnVlLFxuICAgIGF0dGFjazogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9LFxuICB9O1xuICBjb25zdCBjb21wdXRlciA9IHtcbiAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEJ1aWxkZXIoKSxcbiAgICB0dXJuOiBmYWxzZSxcbiAgICBhdHRhY2tMaXN0OiBbXSxcbiAgICBhdHRhY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IGNvbXB1dGVyQXR0YWNrTG9naWMoKTtcbiAgICAgIGNvbXB1dGVyLmF0dGFja0xpc3QucHVzaChhdHRhY2tDb29yZHMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKC4uLmF0dGFja0Nvb3Jkcyk7XG5cbiAgICAgIGxldCB4Q29tcCA9IGF0dGFja0Nvb3Jkc1swXTtcbiAgICAgIGxldCB5Q29tcCA9IGF0dGFja0Nvb3Jkc1sxXTtcbiAgICAgIGxldCB0aWxlTnVtO1xuICAgICAgaWYgKHhDb21wID09PSAwKSB7XG4gICAgICAgIHRpbGVOdW0gPSB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZU51bSA9IHhDb21wLnRvU3RyaW5nKCkgKyB5Q29tcC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt0aWxlTnVtLCByZXN1bHRdO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJCdWlsZGVyO1xuIiwiZnVuY3Rpb24gc2hpcChzdGFydCwgZW5kKSB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtzdGFydF07XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIC8vY2hlY2sgaWYgc2hpcCBpcyAxIHNxdWFyZVxuICBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSAmJiBzdGFydFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgbGVuZ3RoID0gMTtcbiAgfVxuICAvL2NoZWNrIGZvciBkaXJlY3Rpb24gb2Ygc2hpcFxuICBlbHNlIGlmIChzdGFydFswXSA9PT0gZW5kWzBdKSB7XG4gICAgbGV0IHZlcnRpY2FsID0gc3RhcnRbMV0gKyAxO1xuICAgIHdoaWxlICh2ZXJ0aWNhbCA8PSBlbmRbMV0pIHtcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3N0YXJ0WzBdLCB2ZXJ0aWNhbF0pO1xuICAgICAgdmVydGljYWwrKztcbiAgICB9XG4gICAgbGVuZ3RoID0gZW5kWzFdIC0gc3RhcnRbMV0gKyAxO1xuICB9IGVsc2Uge1xuICAgIGxldCBob3Jpem9udGFsID0gc3RhcnRbMF0gKyAxO1xuICAgIHdoaWxlIChob3Jpem9udGFsIDw9IGVuZFswXSkge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChbaG9yaXpvbnRhbCwgc3RhcnRbMV1dKTtcbiAgICAgIGhvcml6b250YWwrKztcbiAgICB9XG4gICAgbGVuZ3RoID0gZW5kWzBdIC0gc3RhcnRbMF0gKyAxO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBzdW5rOiBmYWxzZSxcbiAgICBjb29yZGluYXRlcyxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKyAxO1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCBwbGF5ZXJCdWlsZGVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG4vKlxuICBTdGFydCBnYW1lXG4gIDEuIFNoaXAgcGxhY2VtZW50IGZ1bmN0aW9uXG4gICAgLSBwb3NzaWJseSBkcmFnIGFuZCBkcm9wXG4gIDIuIENvbmZpcm1hdGlvbiBidXR0b25cbiAgRW5kIGdhbWVcbiAgMS4gUmVzZXQgYnV0dG9uXG4gIDIuIFdpbm5lciBiYW5uZXJcbiovXG5cbmxldCBwbGF5ZXJzO1xubGV0IHBsYXllclR1cm4gPSB0cnVlO1xubGV0IHBsYXllclRpbGVzID0gW107XG5sZXQgY29tcFRpbGVzID0gW107XG5cbi8vPEluaXRpYWwgSE1UTCBGcmFtZXdvcms+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5jb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgYm9hcmRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJvYXJkc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtd3JhcHBlclwiKTtcblxuY29uc3Qgc3RhcnRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc3RhcnRCdG5EaXYuY2xhc3NMaXN0LmFkZChcInN0YXJ0LWJ0bi13cmFwcGVyXCIpO1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydC1idG5cIik7XG5zdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnQgQmF0dGxlXCI7XG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtaGlkZGVuXCIpO1xuICBidWlsZEdhbWVITVRMKCk7XG4gIHBsYXllcnMgPSBwbGF5ZXJCdWlsZGVyKCk7XG4gIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuXG5tYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5zdGFydEJ0bkRpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5tYWluRGl2LmFwcGVuZENoaWxkKHN0YXJ0QnRuRGl2KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoYm9hcmRzRGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbi8vPEluaXRpYWwgSE1UTCBGcmFtZXdvcmsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8+XG5cbmNvbnN0IGJ1aWxkR2FtZUhNVEwgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICBjb25zdCBjb21wQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IDEwMCkge1xuICAgIHBsYXllclRpbGVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wVGlsZXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllclRpbGVzW2ldLnNldEF0dHJpYnV0ZShcInRpbGUtbnVtXCIsIGkpO1xuICAgIGNvbXBUaWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0aWxlLW51bVwiLCBpKTtcbiAgICBwbGF5ZXJUaWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICBjb21wVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgcGxheWVyVGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcInBsYXllci10aWxlXCIsIFwiaW5hY3RpdmVcIik7XG4gICAgY29tcFRpbGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJjbGlja2FibGUtdGlsZVwiKTtcbiAgICAvL1RoZXNlIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIHRpbGUgZHJpdmUgdGhlIHByb2dyZXNzaW9uIG9mIHRoZSBnYW1lLCBlYWNoIHRpbWUgb25lIGlzIGNsaWNrZWQsIHRoZSBwcm9ncmFtIG1vdmVzIGZvcndhcmQgdW50aWwgdXNlciBpbnB1dCBpcyByZXF1aXJlZCBhZ2FpblxuICAgIGNvbXBUaWxlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGlsZUNsaWNrRXZlbnQpO1xuICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKHBsYXllclRpbGVzW2ldKTtcbiAgICBjb21wQm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcFRpbGVzW2ldKTtcbiAgICBpKys7XG4gIH1cblxuICBib2FyZHNEaXYuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmREaXYpO1xuICBib2FyZHNEaXYuYXBwZW5kQ2hpbGQoY29tcEJvYXJkRGl2KTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICBjb25zdCBbY29tcEF0dGFja0Nvb3JkcywgYXR0YWNrUmVzdWx0XSA9IHBsYXllcnMuY29tcHV0ZXIuYXR0YWNrKCk7XG4gIC8vZ2V0IGNvcnJlY3QgdGlsZSBmcm9tIGNvbXB1dGVycyBhdHRhY2tcbiAgbGV0IHRhcmdldFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGBkaXZbdGlsZS1udW09XCIke2NvbXBBdHRhY2tDb29yZHN9XCJdYFxuICApWzBdO1xuICB0YXJnZXRUaWxlLmNsYXNzTGlzdC5hZGQoYXR0YWNrUmVzdWx0KTtcbiAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgIGlmIChwbGF5ZXJzLnBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGVuZEdhbWUoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21wdXRlckF0dGFjaygpO1xuICAgIH0sIDkwMCk7XG4gIH0gZWxzZSB7XG4gICAgY29tcFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIHBsYXllclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBnYW1lTG9vcCA9IChlKSA9PiB7XG4gIC8vZXZlbnQgbGlzdGVuZXIgb24gdGlsZXMgcHVzaCBnYW1lIGludG8gbmV4dCBzdGVwLCBjaGVja3MgaWYgY29tcHV0ZXIgc2hpcHMgYXJlIGFsbCBzdW5rIGFuZCB0aGVuIGNhbGxzIGNvbXB1dGVyIHRvIG1ha2UgYSB0dXJuIGFuZCB0aGVuIGNoZWNrcyBpZiBwbGF5ZXJzIHNoaXBzIGFyZSBzdW5rLiBwbGF5ZXIgY2xpY2tzIG5ldyB0aWxlIGFuZCBwcm9jZXNzIGNvbnRpbnVlc1xuXG4gIC8vR2V0IGNvb3JkaW5hdGVzIG9mIHRoZSB0aWxlIGNsaWNrZWQgZnJvbSB0aGUgdGlsZS1udW1iZXIsIHRpbGUjOTYgaGFzIGNvb3JkaW5hdGVzIFs2LDldXG4gIGxldCB0aWxlTnVtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGlsZS1udW1cIik7XG4gIGxldCBwQXR0YWNrWDtcbiAgbGV0IHBBdHRhY2tZO1xuICBpZiAodGlsZU51bS5sZW5ndGggPT09IDEpIHtcbiAgICBwQXR0YWNrWCA9IDA7XG4gICAgcEF0dGFja1kgPSB0aWxlTnVtO1xuICB9IGVsc2Uge1xuICAgIHBBdHRhY2tYID0gdGlsZU51bVswXTtcbiAgICBwQXR0YWNrWSA9IHRpbGVOdW1bMV07XG4gIH1cbiAgLy9jYWxsIGF0dGFjayB3aXRoIGNvb3JkaW5hdGVzIGFuZCB1cGRhdGUgdGlsZSB0byByZWZsZWN0IGNoYW5nZVxuICBsZXQgcGxheWVyQXR0YWNrID0gcGxheWVycy5wbGF5ZXIuYXR0YWNrKHBBdHRhY2tYLCBwQXR0YWNrWSk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQocGxheWVyQXR0YWNrKTtcbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRpbGVDbGlja0V2ZW50KTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZS10aWxlXCIpO1xuICBpZiAocGxheWVycy5jb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBlbmRHYW1lKCk7XG4gIH1cbiAgaWYgKHBsYXllckF0dGFjayA9PT0gXCJoaXRcIikge1xuICAgIC8vaWYgcGxheWVyIGhpdCBjb21wdXRlciwgcGxheWVyIHNob290cyBhZ2FpblxuICAgIHJldHVybjtcbiAgfVxuICBwbGF5ZXJUdXJuID0gZmFsc2U7XG4gIC8vU3RhcnQgb2YgY29tcHV0ZXJzIHR1cm4sIHdpdGggc21hbGwgZGVsYXlcbiAgY29tcFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIHBsYXllclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbXB1dGVyQXR0YWNrKCk7XG4gICAgcGxheWVyVHVybiA9IHRydWU7XG4gIH0sIDcwMCk7XG59O1xuXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICBjb21wVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZS10aWxlXCIpO1xuICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRpbGVDbGlja0V2ZW50KTtcbiAgfSk7XG4gIHBsYXllclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xufTtcblxuZnVuY3Rpb24gdGlsZUNsaWNrRXZlbnQoZSkge1xuICBpZiAocGxheWVyVHVybikgZ2FtZUxvb3AoZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=