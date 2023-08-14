/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Lora-VariableFont_wght.ttf */ "./src/Lora-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Lora-Italic-VariableFont_wght.ttf */ "./src/Lora-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Montserrat-VariableFont_wght.ttf */ "./src/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./countryside.jpg */ "./src/countryside.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lora";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: white;
}

body, html {
  width: 100%;
  height: 100%;
}

.hero-bg {
  transition: background-size 0.3s ease;
  display: flex;
  height: 100vh;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 1100px) {
  .hero-bg {
    background-size: cover !important;
  }
}
.about {
  background: none;
  background-color: #000;
}

.hero-text {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.navbar nav {
  color: white;
  font-family: "Lora";
}
.navbar li {
  display: inline-block;
}

.navbar a {
  position: relative;
  font-size: 2.2rem;
  width: 2.2rem;
}
.navbar li:nth-child(2) a::before, .navbar li:nth-child(3) a::before {
  content: " /";
}

.navbar a::after {
  content: "";
  transition: 0.5s ease-out;
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  transform: scaleX(0);
  border: solid white 1px;
  transform-origin: left;
}
.navbar a:hover::after {
  transform: scaleX(1);
}
.navbar a.active::after {
  transform: scaleX(1);
}
.navbar li:nth-child(2) a::after, .navbar li:nth-child(3) a::after {
  left: 11%;
}

.hero-text {
  transition: background-color 0.2s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.head {
  top: 10px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head {
  margin: 15px 25px;
}

.logo {
  font-family: "Montserrat";
  font-size: 3rem;
  color: white;
}
.logo:hover {
  opacity: 0.7;
}

.footer {
  position: relative;
  top: 55%;
  font-family: "Lora";
  color: white;
  padding-left: 25px;
}

.greet {
  font-size: 3.5rem;
  margin-bottom: 10px;
}

#reservation-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: 1.5px #fff solid;
  font-family: "Lora";
  color: white;
  width: 240px;
  height: 55px;
  margin-left: 5px;
  transition: 0.3s ease-in-out;
}
#reservation-button h1 {
  font-size: 1.9rem;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 8px;
}
#reservation-button svg {
  display: block;
  margin-top: 8px;
  fill: white;
}

#reservation-button:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}
#reservation-button:hover svg {
  fill: black;
}

.body {
  color: white;
  padding: 25px;
  font-family: "Montserrat";
}
.body h1, .body h2 {
  font-weight: 300;
}

h1 {
  font-size: 2.5rem;
}

p {
  font-size: 2.5rem;
  width: 92%;
}

.menu {
  transform: 0.3s ease;
  height: 80%;
  font-family: "Lora";
  color: white;
}

.menu-info {
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10%;
}

.menu-info h1 {
  font-weight: 400;
  font-size: 70px;
  position: relative;
  transition: all 0.5s ease-out;
}
.menu-info h1::after {
  content: "";
  transition: transform 0.5s ease-out;
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  transform: scaleX(0);
  border: 1px solid white;
  transform-origin: left;
}
.menu-info h1.extend::after {
  transform: scaleX(1);
}

#arrow-left, #arrow-right {
  display: block;
  position: relative;
  transition: all 0.3s ease;
}
#arrow-left:hover, #arrow-right:hover {
  cursor: pointer;
  opacity: 0.7;
  transform: translateX(5px);
}

#arrow-left {
  position: relative;
  rotate: 180deg;
}

#arrow-right {
  margin-right: 5px;
}

.test {
  background-color: #000;
}

.menu-items {
  height: 110vh;
  width: 100%;
  background-color: #000;
  font-family: "Lora";
  padding: 125px 25px;
  font-size: 2rem;
}

@media only screen and (max-width: 1100px) {
  .menu-items {
    height: 125vh !important;
  }
}
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
}

#arrow-bottom {
  position: absolute;
  bottom: 0;
  rotate: 90deg;
  animation: 1.5s linear 0s infinite alternate hover;
}

@keyframes hover {
  from {
    transform: translateX(5px);
  }
  to {
    transform: translateX(0);
  }
}
.menu-header {
  display: flex;
  justify-content: space-between;
}

.menu-header {
  border-bottom: solid white 3px;
}

.menu-item {
  border-bottom: solid white 1px;
}
.menu-item header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.description {
  font-size: 1.25rem;
  color: rgb(215, 204, 204);
  padding-left: 3px;
}

.contact-mode {
  background: #000;
}

.contact {
  padding: 33px 23px;
  color: #fff;
  font-family: "montserrat";
  font-size: 1rem;
}
.contact :nth-child(2), .contact :nth-child(n+4) {
  padding-top: 20px;
}

.reservation-mode {
  background: #000;
}

.reservations {
  display: grid;
  grid-template-areas: "text text text" "t1 entrance t3" "t2 entrance t3" "t4 t5 t5";
  margin-top: 10px;
  grid-template-rows: max-content repeat(3, 1fr);
  grid-template-columns: 15% 20% 15%;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  justify-content: center;
  width: 80%;
  height: 80%;
  align-self: center;
  justify-self: center;
}

.reservations > :nth-child(n+3) {
  border: solid #fff 1px;
}
.reservations > :nth-child(n+3):hover {
  cursor: pointer;
  background-color: #fff;
}

.table[tableId="1"] {
  grid-area: t1;
}

.table[tableId="2"] {
  grid-area: t2;
}

.table[tableId="3"] {
  grid-area: t3;
}

.table[tableId="4"] {
  grid-area: t4;
}

.reservations .entrance {
  grid-area: entrance;
  border-left: solid white 1px;
  border-right: solid white 1px;
  border-top: none;
  border-bottom: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.table[tableId="5"] {
  grid-area: t5;
}

.table[tableId="6"] {
  grid-area: t6;
}

.text {
  grid-area: text;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lora\";\r\n    src: url(\"../src/Lora-VariableFont_wght.ttf\") format(\"truetype\"),\r\n    url(\"../src/Lora-Italic-VariableFont_wght.ttf\") format(\"truetype\");\r\n\r\n}\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../src/Montserrat-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\nbody, html{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.hero-bg{\r\n    transition: background-size 0.3s ease;\r\n    display: flex;\r\n    height: 100vh;\r\n    background: url(\"./countryside.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n    //for when the device is minimized\r\n    //Unfortunately, some of the animations won't play properly\r\n    //This is due to the background size having to be manipulated\r\n    .hero-bg{\r\n        background-size: cover !important;\r\n    }\r\n}\r\n\r\n.about{\r\n    background:none;\r\n    background-color: #000;\r\n}\r\n.hero-text{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n}\r\n.navbar{\r\n    nav{\r\n        color: white;\r\n        font-family: \"Lora\";\r\n    }\r\n    li{\r\n        display: inline-block;\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        position: relative;\r\n        font-size: 2.2rem;\r\n        width: 2.2rem;\r\n    }\r\n    li{\r\n        &:nth-child(2), &:nth-child(3){\r\n            a::before{\r\n                content:(' /');\r\n            }\r\n        }\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        &::after{\r\n            content: '';\r\n            transition: 0.5s ease-out;\r\n            position: absolute;\r\n            display: block;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            background: white;\r\n            transform: scaleX(0);\r\n            border: solid white 1px;\r\n            transform-origin: left;\r\n        }  \r\n        &:hover::after{\r\n            transform: scaleX(1);\r\n        }\r\n        &.active{\r\n            &::after{\r\n                transform: scaleX(1);\r\n            }\r\n        }\r\n    }\r\n\r\n    li{\r\n        &:nth-child(2) , &:nth-child(3){\r\n            a::after{\r\n                left: 11%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.hero-text{\r\n    transition: background-color 0.2s ease;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n}\r\n.head{\r\n    top: 10px;\r\n    position: sticky;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.head{\r\n    margin: 15px 25px;\r\n}\r\n.logo{\r\n    font-family: \"Montserrat\";\r\n    font-size: 3rem;\r\n    color: white;\r\n    &:hover{\r\n        opacity: 0.7;\r\n    }\r\n}\r\n.footer{\r\n    position: relative;\r\n    top: 55%;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    padding-left: 25px;\r\n}\r\n.greet{\r\n    font-size: 3.5rem;\r\n    margin-bottom: 10px;\r\n}\r\n#reservation-button{\r\n    display: flex;\r\n    align-items: center;\r\n    background: none;\r\n    border: none;\r\n    outline: 1.5px #fff solid;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    width: 240px;\r\n    height: 55px;\r\n    margin-left: 5px;\r\n    transition: 0.3s ease-in-out;\r\n    \r\n    h1{\r\n        font-size: 1.9rem;\r\n        font-weight: 400;\r\n        margin-left: 10px;\r\n        margin-right: 8px;\r\n    }\r\n    svg{\r\n        display: block;\r\n        margin-top: 8px;\r\n        fill: white;\r\n    }\r\n}\r\n#reservation-button:hover{\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    svg{\r\n        fill:black;\r\n    }\r\n}\r\n.body{\r\n    color: white;\r\n    padding: 25px;\r\n    font-family: \"Montserrat\";\r\n    h1,h2{\r\n        font-weight: 300;\r\n    }\r\n}\r\nh1{\r\n    font-size: 2.5rem;\r\n}\r\np{\r\n    font-size: 2.5rem;\r\n    width: 92%;\r\n}\r\n.menu{\r\n    transform: 0.3s ease;\r\n    height: 80%;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n}\r\n.menu-info{\r\n    height: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10%;\r\n}\r\n.menu-info h1{\r\n    font-weight: 400;\r\n    font-size: 70px;\r\n    position: relative;\r\n    transition: all 0.5s ease-out;\r\n    &::after{\r\n        content: '';\r\n        transition: transform 0.5s ease-out;\r\n        position: absolute;\r\n        display: block;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: white;\r\n        transform: scaleX(0);\r\n        // Seems to be a fix for chrome browsers\r\n        border: 1px solid white;\r\n        transform-origin: left;\r\n    }  \r\n    &.extend{\r\n        &::after{\r\n            \r\n            transform: scaleX(1);\r\n        }\r\n    }\r\n}\r\n#arrow-left, #arrow-right{\r\n    display: block;\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        cursor: pointer;\r\n        opacity: 0.7;\r\n        transform: translateX(5px);\r\n    }\r\n}\r\n#arrow-left{\r\n   position: relative;\r\n   rotate: 180deg;\r\n}\r\n#arrow-right{\r\n    margin-right: 5px;\r\n}\r\n.test{\r\n    background-color: #000;\r\n}\r\n.menu-items{\r\n    height: 110vh;\r\n    width: 100%;\r\n    background-color: #000;\r\n    font-family: \"Lora\";\r\n    padding: 125px 25px;\r\n    font-size: 2rem;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n     .menu-items{\r\n        height: 125vh !important;\r\n     }\r\n     \r\n}\r\n.placeholder{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#arrow-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n    rotate: 90deg;\r\n    animation: 1.5s linear 0s infinite alternate hover;\r\n}\r\n@keyframes hover {\r\n    from{\r\n        transform: translateX(5px);\r\n    }\r\n    to{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n.menu-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.menu-header{\r\n    border-bottom: solid white 3px;\r\n}\r\n.menu-item{\r\n    border-bottom: solid white 1px;\r\n    header{\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n.description{\r\n    font-size: 1.25rem;\r\n    color: rgb(215, 204, 204);\r\n    padding-left: 3px;\r\n}\r\n.contact-mode{\r\n    background: #000;\r\n}\r\n.contact{\r\n    padding: 33px 23px;\r\n    color: #fff;\r\n    font-family: \"montserrat\";\r\n    font-size: 1rem;\r\n    :nth-child(2), :nth-child(n+4){\r\n        padding-top: 20px;\r\n    }\r\n}\r\n.reservation-mode{\r\n    background: #000;\r\n}\r\n.reservations{\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"text text text\"\r\n    \"t1 entrance t3\"\r\n    \"t2 entrance t3\"\r\n    \"t4 t5 t5\";\r\n    \r\n    margin-top: 10px;\r\n    grid-template-rows: max-content repeat(3, 1fr);\r\n    grid-template-columns: 15% 20% 15%;\r\n    column-gap: 1.5rem;\r\n    row-gap: 0.5rem;\r\n    justify-content: center;\r\n    width: 80%;\r\n    height: 80%;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n.reservations{\r\n    >:nth-child(n+3){\r\n        border: solid #fff 1px;\r\n        &:hover{\r\n            cursor: pointer;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.table[tableId=\"1\"]{\r\n    grid-area: t1;\r\n}\r\n.table[tableId=\"2\"]{\r\n    grid-area: t2;\r\n}\r\n.table[tableId=\"3\"]{\r\n    grid-area: t3;\r\n}\r\n.table[tableId=\"4\"]{\r\n    grid-area: t4;\r\n}\r\n.reservations .entrance{\r\n    grid-area: entrance;\r\n    border-left: solid white 1px;\r\n    border-right: solid white 1px;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n.table[tableId=\"5\"]{\r\n    grid-area: t5;\r\n}\r\n.table[tableId=\"6\"]{\r\n    grid-area: t6;\r\n}\r\n.text{\r\n    grid-area: text;\r\n    margin-bottom: 2rem;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const heroText = document.querySelector('.hero-text');
    const heroBg = document.querySelector('.hero-bg');
    
    // If the second child (that isn't the navbar) is the about body, then we dont
    // remove anything
    if(heroText.children[1].className === 'body') return ;
    heroBg.style.background = '#000';
    heroBg.removeAttribute('style');
    
    heroText.removeChild(heroText.children[1]);
    const body = document.createElement('div');
    body.classList.add('body');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'enchanté';
    body.appendChild(h1);
    
    const h2 = document.createElement('h2');
    h2.textContent = 'ahn-shahn-TAY/ Delighted';
    body.appendChild(h2);
    
    const p1 = document.createElement('p');
    p1.textContent = 'At enchanté, we invite you to embark on a journey that transcends the ordinary and embraces the extraordinary.';
    body.appendChild(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = 'Since our inception in 2015, we have taken pride in crafting a dining sanctuary that unites the artistry of award-winning gastronomy with the comfort of casual indulgence.';
    body.appendChild(p2);
    
    heroText.appendChild(body);
    heroBg.classList.add('about');
    
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const heroText = document.querySelector('.hero-text');
    if(heroText.children[1] === 'contact') return ;
    heroText.removeChild(heroText.children[1]);
    
    
    // Reset the background
    const heroBg = document.querySelector('.hero-bg');
    heroBg.className = 'hero-bg';
    heroBg.removeAttribute('style');
    heroBg.style.background = 'black';
    
    const contact = document.createElement('div');
    contact.className = 'contact';
    
    Array.from(new Array(5)).forEach(() => contact.appendChild(document.createElement('p')));
    
    const contactChildren = [...contact.children];
    
    contactChildren[0].textContent = `We value your inquiries, feedback, and the opportunity to connect. Whether you're seeking to make a reservation, share your dining experience, or simply wish to learn more about enchanté, we're here to assist you. Please feel free to reach out to us through the channels below:`;
    contactChildren[1].textContent = 'Address: 233 Buttonwood St.';
    contactChildren[2].textContent = 'New York, NY 10033';
    contactChildren[3].textContent =  'Email: hello@enchante.com';
    contactChildren[4].textContent = 'Phone: (193)368-2125'
    
    heroText.appendChild(contact);
    
    
    
    
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_countryside_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/countryside.jpg */ "./src/countryside.jpg");
/* harmony import */ var _src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/breakfast.jpg */ "./src/breakfast.jpg");
/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservations.js */ "./src/reservations.js");
/* harmony import */ var _reservationchecker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservationchecker.js */ "./src/reservationchecker.js");





//just a preload
(new Image().src) = _src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__;
(new Image().src) = _src_countryside_jpg__WEBPACK_IMPORTED_MODULE_0__;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const heroText = document.querySelector('.hero-text');
    const heroBg = document.querySelector('.hero-bg');
    heroBg.className = 'hero-bg';
    heroBg.removeAttribute('style');
    
    heroBg.style.background = `url(${_src_countryside_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    heroBg.style.backgroundPosition = 'center center';
    heroBg.style.backgroundSize = 'cover';


    if(heroText.children.length > 1){
        if(heroText.children[1].className === 'footer') return;
        heroText.removeChild(heroText.children[1]);
    }

    const footer = document.createElement('div');
    footer.className = 'footer';
    
    const greet = document.createElement('greet');
    greet.className = 'greet';
    
    const date = new Date();
    const hours = date.getHours();
    
    if(hours >= 5 && hours < 12){
        greet.textContent = 'Good Morning.';
    }else if(hours >= 12 && hours < 17){
        greet.textContent = 'Good Afternoon.';
    }else{
        greet.textContent = 'Good Evening.';
    }
    
    footer.appendChild(greet);
    
    const reservationButton = document.createElement('button');
    reservationButton.type = 'button';
    reservationButton.id = 'reservation-button';
    reservationButton.addEventListener(`click`, ()=>{
        (0,_reservations_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_reservationchecker_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })
    
    const reservationText = document.createElement('h1');
    reservationText.textContent = 'Reservations';
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width','25');
    svg.setAttribute('height','18');
    svg.setAttribute('viewBox','0 0 25 18');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill','none');
    svg.setAttribute('preserveAspectRatio', 'xMaxYMax meet');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d','M25 9L10 0.339746V17.6603L25 9ZM0 10.5H11.5V7.5H0V10.5Z');
    svg.appendChild(path);
    
    reservationButton.appendChild(reservationText);
    reservationButton.appendChild(svg);
    
    footer.appendChild(reservationButton);
    
    
    heroText.appendChild(footer);
}

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_menuarrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/menuarrow.svg */ "./src/menuarrow.svg");
/* harmony import */ var _src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/breakfast.jpg */ "./src/breakfast.jpg");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const heroText = document.querySelector('.hero-text');
    if(heroText.children[1].className === 'menu') return; 
    heroText.removeChild(heroText.children[1]);

    const heroBg = document.querySelector('.hero-bg');
    [...heroBg.classList].filter(heroClass => heroClass !== 'hero-bg');
    heroBg.classList.add('menu-mode');
    heroBg.style.background = `url(${_src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    heroBg.style.backgroundPosition = `center center`;
    heroBg.style.backgroundRepeat = 'no-repeat';
    heroBg.style.backgroundSize = '110%';
    setTimeout(()=> {heroBg.style.backgroundSize = '100%'},350);
    const menu = document.createElement('div');
    menu.className = 'menu';
    
    
    
    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');
    menu.appendChild(menuInfo);
    
    const rightArrow= document.createElement('img');
    rightArrow.src = _src_menuarrow_svg__WEBPACK_IMPORTED_MODULE_0__;
    rightArrow.id = 'arrow-right';
    menuInfo.appendChild(rightArrow);
    
    const leftArrow = document.createElement('img');
    leftArrow.src = _src_menuarrow_svg__WEBPACK_IMPORTED_MODULE_0__;
    leftArrow.id = 'arrow-left';
    menuInfo.appendChild(leftArrow);
    
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    
    const courseText = document.createElement('h1');
    courseText.className = 'course';
    courseText.textContent = 'Breakfast';
    setTimeout(()=>courseText.classList.add('extend') ,0);
    placeholder.appendChild(courseText);
    
    const bottomArrow = document.createElement('img');
    bottomArrow.src = _src_menuarrow_svg__WEBPACK_IMPORTED_MODULE_0__;
    bottomArrow.id = 'arrow-bottom';
    placeholder.appendChild(bottomArrow);
    
    menuInfo.appendChild(placeholder);
    menuInfo.appendChild(rightArrow);
    
    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';
    
    menu.appendChild(menuItems);
    
    const menuHeader = document.createElement('div');
    menuHeader.textContent = 'Menu';
    menuHeader.classList.add('menu-header');
    
    menuItems.appendChild(menuHeader);
    
    const initialBreakfast = [
        {
            item: 'Truffle Eggs Benedict',
            price: '$22',
            description: 'Poached eggs on toasted artisanal brioche, topped with hollandaise infused with black truffle essence.',
    
        },
        {
            item: 'Croissant Croque-Monsieur',
            price: '$16',
            description: ' A flaky butter croissant layered with thinly sliced prosciutto, Gruyère cheese, and béchamel sauce, toasted to golden perfection.',
    
        },
        {
            item: 'Champagne-infused Fruit Parfait',
            price: '$18',
            description: 'A delicate combination of seasonal fruits, organic Greek yogurt, and toasted almond granola, drizzled with champagne reduction.',
    
        },
        {
            item: 'Smoked Salmon Lox Platter',
            price: '$24',
            description: 'House-cured and smoked salmon served with an array of accompaniments, including capers, red onion, dill cream cheese, and fresh bagels.',
    
        },{
            item: 'French press coffee',
            price: '$7',
            description: 'Robust, full-bodied brew bursting with rich, flavorful notes.'
        }
    ];
    
    initialBreakfast.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
    
        menuItems.appendChild(menuItem);
    
        const header = document.createElement('header');
        menuItem.appendChild(header);
    
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = item.item;
        header.appendChild(itemDiv);
        
    
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = item.price;
        header.appendChild(price);
    
        const description = document.createElement('div');
        description.textContent = item.description;
        description.classList.add('description');
        menuItem.appendChild(description);
    
    });
    heroText.appendChild(menu);    
}

/***/ }),

/***/ "./src/menucontroller.js":
/*!*******************************!*\
  !*** ./src/menucontroller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/breakfast.jpg */ "./src/breakfast.jpg");
/* harmony import */ var _src_lunch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/lunch.jpg */ "./src/lunch.jpg");
/* harmony import */ var _src_dinner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/dinner.jpg */ "./src/dinner.jpg");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const menu = document.querySelector('.menu-mode');

    const injectCourse = (item) =>{
        //Hide the background for visual effect
        const heroText = document.querySelector('.hero-text');
        heroText.style.backgroundColor = `rgba(0,0,0,1)`;

        // Remove the underline effect. Temporarily hide the text
        const course = document.querySelector('.course');
        course.classList.remove('extend');
        course.style.opacity = '0';

        // Create a new image object
        const image = new Image();
        // image.src = `../src/${item.getCourseName()}.jpg`;
        switch(item.getCourseName()){
            case 'Breakfast':
                image.src = _src_breakfast_jpg__WEBPACK_IMPORTED_MODULE_0__;
                break;
            case 'Lunch':
                image.src = _src_lunch_jpg__WEBPACK_IMPORTED_MODULE_1__;
                break;
            case 'Dinner':
                image.src = _src_dinner_jpg__WEBPACK_IMPORTED_MODULE_2__;
                break;
            default:
                console.log("Error parsing");
                break;
        };
        console.log(image.src);
        

        

        // // Add setTimeout such that effects can actually play out
        setTimeout(() => {
            menu.style.background = `url("${image.src}")`;
            menu.style.backgroundSize = '110%';
            menu.style.transition = '0.3s ease';
            menu.style.backgroundPosition = 'center center';
            menu.style.backgroundRepeat = 'no-repeat';
        }, 1050);

        setTimeout(()=>{
            course.textContent = item.getCourseName();
            course.style.opacity = '1';
            course.classList.add('extend');
            heroText.style.backgroundColor = `rgba(0,0,0,0.3)`;
        }, 1300);
        
        setTimeout(() => {
            menu.style.backgroundSize = '100%';
        }, 1450);

        const menuItems = [...document.querySelectorAll('.menu-item')];
        const items = item.getCourseItems();
        for(let i=0; i < items.length; i++){
            const headerItem = menuItems[i].querySelector('.item');
            const headerPrice = menuItems[i].querySelector('.price')
            const description = menuItems[i].querySelector('.description');

            headerItem.textContent = items[i].item;
            headerPrice.textContent = items[i].price;
            description.textContent = items[i].description;
        }

    };

    const courses = [];
    const course = (courseName) =>{
        const courseItems = [];
        const addCourseItem = (item, price, description) =>{
            courseItems.push({
                item: item,
                price: price,
                description: description
            })
        };
        const addExistingCourse = (menu) =>{
            menu.forEach(item => {
                courseItems.push(item);
            })
        }
        const getCourseItems = () => courseItems;
        const getCourseName = () => courseName;
        return {getCourseItems, getCourseName, addCourseItem, addExistingCourse}

    }; 


    let current = 0;
    const courseNameDiv = document.querySelector('.course').textContent;
    if(courseNameDiv === 'Lunch') current = 1;
    else if(courseNameDiv === 'Dinner') current = 2;


    const lunch = course("Lunch");
    // Pulled from an earlier test
    lunch.addExistingCourse([{
        item: 'Seared Sea Scallop Risotto',
        price: '$32',
        description: 'Perfectly seared sea scallops served atop a bed of creamy saffron-infused risotto, garnished with microgreens.'
    },
    {
        item: 'Truffle-infused Mushroom Quiche',
        price: '$26',
        description: 'A delicate quiche filled with a medley of truffle-infused mushrooms, artisanal cheese, and fresh herbs, accompanied by a side salad.'
    },
    {
        item: 'Truffled Beef Burger',
        price: '$28',
        description: 'A gourmet beef burger elevated with truffle-infused mayo, caramelized shallots, and aged cheddar on a brioche bun, served with house-cut fries.'
    },
    {
        item: 'Roasted Tomato Basil Elegance',
        price: '$12',
        description: 'A harmonious blend of fire-roasted tomatoes and fresh basil, elevated with a drizzle of aged balsamic and a dollop of crème fraîche.'
    },
    {
        item: 'Cucumber Mint Fizz',
        price: '$11',
        description: ' Muddled cucumber and mint combined with elderflower tonic and a splash of lime juice, served over ice.'
    }]);

    const breakfast = course("Breakfast");
    breakfast.addExistingCourse([
        {
            item: 'Truffle Eggs Benedict',
            price: '$22',
            description: 'Poached eggs on toasted artisanal brioche, topped with hollandaise infused with black truffle essence.',

        },
        {
            item: 'Croissant Croque-Monsieur',
            price: '$16',
            description: ' A flaky butter croissant layered with thinly sliced prosciutto, Gruyère cheese, and béchamel sauce, toasted to golden perfection.',

        },
        {
            item: 'Champagne-infused Fruit Parfait',
            price: '$18',
            description: 'A delicate combination of seasonal fruits, organic Greek yogurt, and toasted almond granola, drizzled with champagne reduction.',

        },
        {
            item: 'Smoked Salmon Lox Platter',
            price: '$24',
            description: 'House-cured and smoked salmon served with an array of accompaniments, including capers, red onion, dill cream cheese, and fresh bagels.',

        },{
            item: 'French press coffee',
            price: '$7',
            description: 'Robust, full-bodied brew bursting with rich, flavorful notes.'
        }
    ]);

    const dinner = course("Dinner");
    dinner.addExistingCourse([
        {
            item: 'Seared Foie Gras',
            price: '$32',
            description: 'A decadent delicacy, seared to perfection and accompanied by a truffle-infused reduction and brioche.',

        },
        {
            item: 'Filet Mignon',
            price: '$44',
            description: 'Prime beef filet grilled to your preference, served with a red wine reduction and truffle-scented mashed potatoes.',

        },
        {
            item: 'Pan-Seared Sea Bass',
            price: '$38',
            description: 'A delicate fillet of sea bass, pan-seared and served atop saffron-infused risotto with lemon beurre blanc.',

        },
        {
            item: 'Truffle-infused Risotto',
            price: '$32',
            description: 'A luxurious blend of Arborio rice, truffle oil, and parmesan cheese, garnished with shaved truffle.',

        },{
            item: 'Citrus Sparkler',
            price: '$10',
            description: ' A vibrant blend of fresh citrus juices and soda water, garnished with a twist of lemon and a sprig of thyme.'
        }
    ]);

    courses.push(breakfast);
    courses.push(lunch);
    courses.push(dinner);

    const previous = document.getElementById('arrow-left');
    const next = document.getElementById('arrow-right');

    previous.addEventListener(`click`, ()=>{
        current = current === 0 ? courses.length - 1 : current - 1;
        injectCourse(courses[current]); 
    })

    next.addEventListener(`click`, ()=>{
        current = current === courses.length - 1 ? 0 : current + 1;
        injectCourse(courses[current]); 
    })

}

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialLoad.js */ "./src/initialLoad.js");
/* harmony import */ var _menucontroller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menucontroller.js */ "./src/menucontroller.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






const resetClicks = () =>{
    const active = document.querySelector('.active');
    if(active !== null ) active.classList.remove('active');
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const content = document.getElementById('content');

    const heroBg = document.createElement('div');
    heroBg.classList.add('hero-bg');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');
    // Code for header
    //Note that this will be merged into the main content later
    const head = document.createElement('div');
    head.classList.add('head');
    
    const logo = document.createElement('a');
    logo.href = '#home';
    logo.classList.add('logo');
    logo.textContent = 'enchanté';
    head.appendChild(logo);
    logo.addEventListener('click', ()=> {
        resetClicks();
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    
    const ul = document.createElement('ul');
    
    // Create li contents
    const aboutLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');
    
    const aboutHref = document.createElement('a');
    const menuHref = document.createElement('a');
    const contactHref = document.createElement('a');
    
    // Links
    aboutHref.href = '#about';
    menuHref.href = '#menu';
    contactHref.href = '#contact';
    
    // Text Content
    aboutHref.textContent = 'About';
    menuHref.textContent = 'Menu';
    contactHref.textContent = 'Contact';
    
    aboutHref.addEventListener('click', ()=>{
        resetClicks();
        aboutHref.classList.add('active');
        (0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    menuHref.addEventListener('click', ()=>{
        resetClicks();
        menuHref.classList.add('active');
        (0,_initialLoad_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_menucontroller_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    contactHref.addEventListener('click', ()=>{
        resetClicks();
        contactHref.classList.add('active');
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });

    // Append content to li
    aboutLi.appendChild(aboutHref);
    menuLi.appendChild(menuHref);
    contactLi.appendChild(contactHref);
    
    // Append individual li to ul
    ul.appendChild(aboutLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    // append ul to nav
    navbar.appendChild(ul);
    
    //append navigation bar
    head.appendChild(navbar);
    
    heroText.appendChild(head);
    heroBg.appendChild(heroText);
    content.appendChild(heroBg);
        
}

/***/ }),

/***/ "./src/reservationchecker.js":
/*!***********************************!*\
  !*** ./src/reservationchecker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const tables = document.querySelectorAll('.table');
    const text = document.querySelector('.text');
    tables.forEach(table => {
        const status = table.getAttribute('status');
        const tableId = parseInt(table.getAttribute('tableId'));
        table.addEventListener(`mouseenter`, ()=>{
            if(status === 'reserved') text.textContent = `Table ${tableId} is reserved`
        })
        table.addEventListener(`mouseleave`, ()=>{
            text.textContent = 'Hover over each table for more.';
        })
    });
}

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const heroBg = document.querySelector('.hero-bg');
    heroBg.removeAttribute('style');
    heroBg.style.background = '#000';
    
    const heroText = document.querySelector('.hero-text');
    heroText.removeChild(heroText.children[1]);
    
    const reservations = document.createElement('div');
    reservations.classList.add('reservations');
    
    const entrance = document.createElement('div');
    entrance.className = 'entrance';
    entrance.textContent  = 'Reception';
    reservations.appendChild(entrance);
    
    const text = document.createElement('div');
    text.textContent = 'Hover over each table for more.';
    text.classList.add('text');
    reservations.appendChild(text);
    
    Array.from(new Array(5)).forEach((dummyElement, index) =>{
        const table = document.createElement('div');
        table.className = 'table';
        table.setAttribute('tableId',index+1);
        table.setAttribute('status','reserved');
        reservations.appendChild(table);
    });
    
    heroText.appendChild(reservations);
    
    
}

/***/ }),

/***/ "./src/Lora-Italic-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/Lora-Italic-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e57ca7e1d79b1440d81c.ttf";

/***/ }),

/***/ "./src/Lora-VariableFont_wght.ttf":
/*!****************************************!*\
  !*** ./src/Lora-VariableFont_wght.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a653a05dd1cd5925a30.ttf";

/***/ }),

/***/ "./src/Montserrat-VariableFont_wght.ttf":
/*!**********************************************!*\
  !*** ./src/Montserrat-VariableFont_wght.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faa3eef13649db02044.ttf";

/***/ }),

/***/ "./src/breakfast.jpg":
/*!***************************!*\
  !*** ./src/breakfast.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17764be643b3420a2345.jpg";

/***/ }),

/***/ "./src/countryside.jpg":
/*!*****************************!*\
  !*** ./src/countryside.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd45a43f6d8d549ee678.jpg";

/***/ }),

/***/ "./src/dinner.jpg":
/*!************************!*\
  !*** ./src/dinner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cc6e68fa78d0c9a8a17.jpg";

/***/ }),

/***/ "./src/lunch.jpg":
/*!***********************!*\
  !*** ./src/lunch.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "879549b52b3f7d8d73a6.jpg";

/***/ }),

/***/ "./src/menuarrow.svg":
/*!***************************!*\
  !*** ./src/menuarrow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18fb5f77c070b5ef8dfa.svg";

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
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _countryside_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countryside.jpg */ "./src/countryside.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






/*
    With the navbar, the content should be 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>enchanté</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <div id="content">
            <div class="hero-bg about">
                <div class="hero-text">
                    <div class="head">
                        <a href="" class="logo">enchanté</a>
                        <nav class="navbar">
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    [Rest of code here]
                </div>
            </div>
        </div>
    </body>
    </html>
 */

(0,_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBJQUFvRDtBQUNoRyw0Q0FBNEMsd0pBQTJEO0FBQ3ZHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsNEJBQTRCLG1DQUFtQztBQUMvRztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcs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QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak5xQztBQUNDO0FBQ1E7QUFDRTtBQUNOO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBZSxzQ0FBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSw4REFBYztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxTQUFTO0FBQzNFLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNiQSw2QkFBZSxzQ0FBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDTDtBQUNHO0FBQ1Y7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQWM7QUFDZCxvREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51Y29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNlcnZhdGlvbmNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0xvcmEtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0xvcmEtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vY291bnRyeXNpZGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJvZHksIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVyby1iZyB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmhlcm8tYmcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuLmFib3V0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5uYXZiYXIgbmF2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG59XG4ubmF2YmFyIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2YmFyIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB3aWR0aDogMi4ycmVtO1xufVxuLm5hdmJhciBsaTpudGgtY2hpbGQoMikgYTo6YmVmb3JlLCAubmF2YmFyIGxpOm50aC1jaGlsZCgzKSBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiAvXCI7XG59XG5cbi5uYXZiYXIgYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuLm5hdmJhciBhOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLm5hdmJhciBhLmFjdGl2ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cbi5uYXZiYXIgbGk6bnRoLWNoaWxkKDIpIGE6OmFmdGVyLCAubmF2YmFyIGxpOm50aC1jaGlsZCgzKSBhOjphZnRlciB7XG4gIGxlZnQ6IDExJTtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlYWQge1xuICB0b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWQge1xuICBtYXJnaW46IDE1cHggMjVweDtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTUlO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uZ3JlZXQge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogMS41cHggI2ZmZiBzb2xpZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuI3Jlc2VydmF0aW9uLWJ1dHRvbiBoMSB7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jcmVzZXJ2YXRpb24tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlciBzdmcge1xuICBmaWxsOiBibGFjaztcbn1cblxuLmJvZHkge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5ib2R5IGgxLCAuYm9keSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbnAge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLm1lbnUge1xuICB0cmFuc2Zvcm06IDAuM3MgZWFzZTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVudS1pbmZvIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4ubWVudS1pbmZvIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuLm1lbnUtaW5mbyBoMTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cbi5tZW51LWluZm8gaDEuZXh0ZW5kOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4jYXJyb3ctbGVmdCwgI2Fycm93LXJpZ2h0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiNhcnJvdy1sZWZ0OmhvdmVyLCAjYXJyb3ctcmlnaHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG59XG5cbiNhcnJvdy1sZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByb3RhdGU6IDE4MGRlZztcbn1cblxuI2Fycm93LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50ZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1lbnUtaXRlbXMge1xuICBoZWlnaHQ6IDExMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBwYWRkaW5nOiAxMjVweCAyNXB4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5tZW51LWl0ZW1zIHtcbiAgICBoZWlnaHQ6IDEyNXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYXJyb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJvdGF0ZTogOTBkZWc7XG4gIGFuaW1hdGlvbjogMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGhvdmVyO1xufVxuXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLm1lbnUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWVudS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAzcHg7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAxcHg7XG59XG4ubWVudS1pdGVtIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHJnYigyMTUsIDIwNCwgMjA0KTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5jb250YWN0LW1vZGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4uY29udGFjdCB7XG4gIHBhZGRpbmc6IDMzcHggMjNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbnRhY3QgOm50aC1jaGlsZCgyKSwgLmNvbnRhY3QgOm50aC1jaGlsZChuKzQpIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5yZXNlcnZhdGlvbi1tb2RlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLnJlc2VydmF0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGV4dCB0ZXh0IHRleHRcIiBcInQxIGVudHJhbmNlIHQzXCIgXCJ0MiBlbnRyYW5jZSB0M1wiIFwidDQgdDUgdDVcIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgMjAlIDE1JTtcbiAgY29sdW1uLWdhcDogMS41cmVtO1xuICByb3ctZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnJlc2VydmF0aW9ucyA+IDpudGgtY2hpbGQobiszKSB7XG4gIGJvcmRlcjogc29saWQgI2ZmZiAxcHg7XG59XG4ucmVzZXJ2YXRpb25zID4gOm50aC1jaGlsZChuKzMpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjFcIl0ge1xuICBncmlkLWFyZWE6IHQxO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjJcIl0ge1xuICBncmlkLWFyZWE6IHQyO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjNcIl0ge1xuICBncmlkLWFyZWE6IHQzO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjRcIl0ge1xuICBncmlkLWFyZWE6IHQ0O1xufVxuXG4ucmVzZXJ2YXRpb25zIC5lbnRyYW5jZSB7XG4gIGdyaWQtYXJlYTogZW50cmFuY2U7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiNVwiXSB7XG4gIGdyaWQtYXJlYTogdDU7XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiNlwiXSB7XG4gIGdyaWQtYXJlYTogdDY7XG59XG5cbi50ZXh0IHtcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwySEFBQTtBQUNKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLCtEQUFBO0FBREo7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtF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QTtFQUNJLGFBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBT0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9zcmMvTG9yYS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksXFxyXFxuICAgIHVybChcXFwiLi4vc3JjL0xvcmEtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG5cXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9zcmMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmJvZHksIGh0bWx7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5oZXJvLWJne1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vY291bnRyeXNpZGUuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAgIC8vZm9yIHdoZW4gdGhlIGRldmljZSBpcyBtaW5pbWl6ZWRcXHJcXG4gICAgLy9VbmZvcnR1bmF0ZWx5LCBzb21lIG9mIHRoZSBhbmltYXRpb25zIHdvbid0IHBsYXkgcHJvcGVybHlcXHJcXG4gICAgLy9UaGlzIGlzIGR1ZSB0byB0aGUgYmFja2dyb3VuZCBzaXplIGhhdmluZyB0byBiZSBtYW5pcHVsYXRlZFxcclxcbiAgICAuaGVyby1iZ3tcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXR7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuLmhlcm8tdGV4dHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgICBsaXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubmF2YmFye1xcclxcbiAgICBhe1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMi4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGxpe1xcclxcbiAgICAgICAgJjpudGgtY2hpbGQoMiksICY6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGE6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDooJyAvJyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5uYXZiYXJ7XFxyXFxuICAgIGF7XFxyXFxuICAgICAgICAmOjphZnRlcntcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICAgICAgfSAgXFxyXFxuICAgICAgICAmOmhvdmVyOjphZnRlcntcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYuYWN0aXZle1xcclxcbiAgICAgICAgICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGl7XFxyXFxuICAgICAgICAmOm50aC1jaGlsZCgyKSAsICY6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGE6OmFmdGVye1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHR7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG59XFxyXFxuLmhlYWR7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XFxyXFxufVxcclxcbi5sb2dve1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNTUlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuLmdyZWV0e1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiAxLjVweCAjZmZmIHNvbGlkO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBcXHJcXG4gICAgaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIHN2Z3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBmaWxsOmJsYWNrO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5ib2R5e1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxyXFxuICAgIGgxLGgye1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcbnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB3aWR0aDogOTIlO1xcclxcbn1cXHJcXG4ubWVudXtcXHJcXG4gICAgdHJhbnNmb3JtOiAwLjNzIGVhc2U7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWluZm97XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuLm1lbnUtaW5mbyBoMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICAmOjphZnRlcntcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgICAgICAvLyBTZWVtcyB0byBiZSBhIGZpeCBmb3IgY2hyb21lIGJyb3dzZXJzXFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxuICAgIH0gIFxcclxcbiAgICAmLmV4dGVuZHtcXHJcXG4gICAgICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbiNhcnJvdy1sZWZ0LCAjYXJyb3ctcmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jYXJyb3ctbGVmdHtcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgcm90YXRlOiAxODBkZWc7XFxyXFxufVxcclxcbiNhcnJvdy1yaWdodHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi50ZXN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtc3tcXHJcXG4gICAgaGVpZ2h0OiAxMTB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDEyNXB4IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gICAgIC5tZW51LWl0ZW1ze1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjV2aCAhaW1wb3J0YW50O1xcclxcbiAgICAgfVxcclxcbiAgICAgXFxyXFxufVxcclxcbi5wbGFjZWhvbGRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNhcnJvdy1ib3R0b217XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByb3RhdGU6IDkwZGVnO1xcclxcbiAgICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZSBob3ZlcjtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBob3ZlciB7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICB0b3tcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWVudS1oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5tZW51LWhlYWRlcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGUgM3B4O1xcclxcbn1cXHJcXG4ubWVudS1pdGVte1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYigyMTUsIDIwNCwgMjA0KTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxufVxcclxcbi5jb250YWN0LW1vZGV7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcbi5jb250YWN0e1xcclxcbiAgICBwYWRkaW5nOiAzM3B4IDIzcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIDpudGgtY2hpbGQoMiksIDpudGgtY2hpbGQobis0KXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5yZXNlcnZhdGlvbi1tb2Rle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb25ze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRleHQgdGV4dCB0ZXh0XFxcIlxcclxcbiAgICBcXFwidDEgZW50cmFuY2UgdDNcXFwiXFxyXFxuICAgIFxcXCJ0MiBlbnRyYW5jZSB0M1xcXCJcXHJcXG4gICAgXFxcInQ0IHQ1IHQ1XFxcIjtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDIwJSAxNSU7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogMC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbi5yZXNlcnZhdGlvbnN7XFxyXFxuICAgID46bnRoLWNoaWxkKG4rMyl7XFxyXFxuICAgICAgICBib3JkZXI6IHNvbGlkICNmZmYgMXB4O1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiMVxcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQxO1xcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiMlxcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQyO1xcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiM1xcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQzO1xcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiNFxcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQ0O1xcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb25zIC5lbnRyYW5jZXtcXHJcXG4gICAgZ3JpZC1hcmVhOiBlbnRyYW5jZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjVcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0NTtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjZcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0NjtcXHJcXG59XFxyXFxuLnRleHR7XFxyXFxuICAgIGdyaWQtYXJlYTogdGV4dDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBcclxuICAgIC8vIElmIHRoZSBzZWNvbmQgY2hpbGQgKHRoYXQgaXNuJ3QgdGhlIG5hdmJhcikgaXMgdGhlIGFib3V0IGJvZHksIHRoZW4gd2UgZG9udFxyXG4gICAgLy8gcmVtb3ZlIGFueXRoaW5nXHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXS5jbGFzc05hbWUgPT09ICdib2R5JykgcmV0dXJuIDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAnO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ2VuY2hhbnTDqSc7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGgxKTtcclxuICAgIFxyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnYWhuLXNoYWhuLVRBWS8gRGVsaWdodGVkJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gJ0F0IGVuY2hhbnTDqSwgd2UgaW52aXRlIHlvdSB0byBlbWJhcmsgb24gYSBqb3VybmV5IHRoYXQgdHJhbnNjZW5kcyB0aGUgb3JkaW5hcnkgYW5kIGVtYnJhY2VzIHRoZSBleHRyYW9yZGluYXJ5Lic7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHAxKTtcclxuICAgIFxyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9ICdTaW5jZSBvdXIgaW5jZXB0aW9uIGluIDIwMTUsIHdlIGhhdmUgdGFrZW4gcHJpZGUgaW4gY3JhZnRpbmcgYSBkaW5pbmcgc2FuY3R1YXJ5IHRoYXQgdW5pdGVzIHRoZSBhcnRpc3RyeSBvZiBhd2FyZC13aW5uaW5nIGdhc3Ryb25vbXkgd2l0aCB0aGUgY29tZm9ydCBvZiBjYXN1YWwgaW5kdWxnZW5jZS4nO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwMik7XHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgaGVyb0JnLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdID09PSAnY29udGFjdCcpIHJldHVybiA7XHJcbiAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gUmVzZXQgdGhlIGJhY2tncm91bmRcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcuY2xhc3NOYW1lID0gJ2hlcm8tYmcnO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJztcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XHJcbiAgICBcclxuICAgIEFycmF5LmZyb20obmV3IEFycmF5KDUpKS5mb3JFYWNoKCgpID0+IGNvbnRhY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3RDaGlsZHJlbiA9IFsuLi5jb250YWN0LmNoaWxkcmVuXTtcclxuICAgIFxyXG4gICAgY29udGFjdENoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFdlIHZhbHVlIHlvdXIgaW5xdWlyaWVzLCBmZWVkYmFjaywgYW5kIHRoZSBvcHBvcnR1bml0eSB0byBjb25uZWN0LiBXaGV0aGVyIHlvdSdyZSBzZWVraW5nIHRvIG1ha2UgYSByZXNlcnZhdGlvbiwgc2hhcmUgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSwgb3Igc2ltcGx5IHdpc2ggdG8gbGVhcm4gbW9yZSBhYm91dCBlbmNoYW50w6ksIHdlJ3JlIGhlcmUgdG8gYXNzaXN0IHlvdS4gUGxlYXNlIGZlZWwgZnJlZSB0byByZWFjaCBvdXQgdG8gdXMgdGhyb3VnaCB0aGUgY2hhbm5lbHMgYmVsb3c6YDtcclxuICAgIGNvbnRhY3RDaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAyMzMgQnV0dG9ud29vZCBTdC4nO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gJ05ldyBZb3JrLCBOWSAxMDAzMyc7XHJcbiAgICBjb250YWN0Q2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSAgJ0VtYWlsOiBoZWxsb0BlbmNoYW50ZS5jb20nO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzRdLnRleHRDb250ZW50ID0gJ1Bob25lOiAoMTkzKTM2OC0yMTI1J1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiaW1wb3J0IGRlZmF1bHRCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb3VudHJ5c2lkZS5qcGcnXHJcbmltcG9ydCBicmVha2Zhc3RUZXN0IGZyb20gJy4uL3NyYy9icmVha2Zhc3QuanBnJ1xyXG5pbXBvcnQgbG9hZFJlc2VydmF0aW9ucyBmcm9tIFwiLi9yZXNlcnZhdGlvbnMuanNcIlxyXG5pbXBvcnQgcmVzZXJ2YXRpb25DaGVja2VyIGZyb20gJy4vcmVzZXJ2YXRpb25jaGVja2VyLmpzJztcclxuXHJcbi8vanVzdCBhIHByZWxvYWRcclxuKG5ldyBJbWFnZSgpLnNyYykgPSBicmVha2Zhc3RUZXN0O1xyXG4obmV3IEltYWdlKCkuc3JjKSA9IGRlZmF1bHRCYWNrZ3JvdW5kO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIGhlcm9CZy5jbGFzc05hbWUgPSAnaGVyby1iZyc7XHJcbiAgICBoZXJvQmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgXHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtkZWZhdWx0QmFja2dyb3VuZH0pYDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG5cclxuXHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlbi5sZW5ndGggPiAxKXtcclxuICAgICAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXS5jbGFzc05hbWUgPT09ICdmb290ZXInKSByZXR1cm47XHJcbiAgICAgICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXInO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2dyZWV0Jyk7XHJcbiAgICBncmVldC5jbGFzc05hbWUgPSAnZ3JlZXQnO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgXHJcbiAgICBpZihob3VycyA+PSA1ICYmIGhvdXJzIDwgMTIpe1xyXG4gICAgICAgIGdyZWV0LnRleHRDb250ZW50ID0gJ0dvb2QgTW9ybmluZy4nO1xyXG4gICAgfWVsc2UgaWYoaG91cnMgPj0gMTIgJiYgaG91cnMgPCAxNyl7XHJcbiAgICAgICAgZ3JlZXQudGV4dENvbnRlbnQgPSAnR29vZCBBZnRlcm5vb24uJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdyZWV0LnRleHRDb250ZW50ID0gJ0dvb2QgRXZlbmluZy4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ3JlZXQpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24uaWQgPSAncmVzZXJ2YXRpb24tYnV0dG9uJztcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCk9PntcclxuICAgICAgICBsb2FkUmVzZXJ2YXRpb25zKCk7XHJcbiAgICAgICAgcmVzZXJ2YXRpb25DaGVja2VyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNlcnZhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzZXJ2YXRpb25UZXh0LnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgICBcclxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsJzI1Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCcxOCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsJzAgMCAyNSAxOCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCdub25lJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNYXhZTWF4IG1lZXQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCdNMjUgOUwxMCAwLjMzOTc0NlYxNy42NjAzTDI1IDlaTTAgMTAuNUgxMS41VjcuNUgwVjEwLjVaJyk7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcbiAgICBcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uVGV4dCk7XHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5hcHBlbmRDaGlsZChzdmcpO1xyXG4gICAgXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn0iLCJpbXBvcnQgYXJyb3cgZnJvbSAnLi4vc3JjL21lbnVhcnJvdy5zdmcnXHJcbmltcG9ydCBicmVha2Zhc3RJbWcgZnJvbSAnLi4vc3JjL2JyZWFrZmFzdC5qcGcnXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdLmNsYXNzTmFtZSA9PT0gJ21lbnUnKSByZXR1cm47IFxyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBbLi4uaGVyb0JnLmNsYXNzTGlzdF0uZmlsdGVyKGhlcm9DbGFzcyA9PiBoZXJvQ2xhc3MgIT09ICdoZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcuY2xhc3NMaXN0LmFkZCgnbWVudS1tb2RlJyk7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHticmVha2Zhc3RJbWd9KWA7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYGNlbnRlciBjZW50ZXJgO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMTAlJztcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7aGVyb0JnLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUnfSwzNTApO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSAnbWVudSc7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZCgnbWVudS1pbmZvJyk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmlnaHRBcnJvdz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICByaWdodEFycm93LnNyYyA9IGFycm93O1xyXG4gICAgcmlnaHRBcnJvdy5pZCA9ICdhcnJvdy1yaWdodCc7XHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcclxuICAgIFxyXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZWZ0QXJyb3cuc3JjID0gYXJyb3c7XHJcbiAgICBsZWZ0QXJyb3cuaWQgPSAnYXJyb3ctbGVmdCc7XHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgY291cnNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb3Vyc2VUZXh0LmNsYXNzTmFtZSA9ICdjb3Vyc2UnO1xyXG4gICAgY291cnNlVGV4dC50ZXh0Q29udGVudCA9ICdCcmVha2Zhc3QnO1xyXG4gICAgc2V0VGltZW91dCgoKT0+Y291cnNlVGV4dC5jbGFzc0xpc3QuYWRkKCdleHRlbmQnKSAsMCk7XHJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChjb3Vyc2VUZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3QgYm90dG9tQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGJvdHRvbUFycm93LnNyYyA9IGFycm93O1xyXG4gICAgYm90dG9tQXJyb3cuaWQgPSAnYXJyb3ctYm90dG9tJztcclxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGJvdHRvbUFycm93KTtcclxuICAgIFxyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocmlnaHRBcnJvdyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUl0ZW1zLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW1zJztcclxuICAgIFxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xyXG4gICAgXHJcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxCcmVha2Zhc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnVHJ1ZmZsZSBFZ2dzIEJlbmVkaWN0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvYWNoZWQgZWdncyBvbiB0b2FzdGVkIGFydGlzYW5hbCBicmlvY2hlLCB0b3BwZWQgd2l0aCBob2xsYW5kYWlzZSBpbmZ1c2VkIHdpdGggYmxhY2sgdHJ1ZmZsZSBlc3NlbmNlLicsXHJcbiAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0Nyb2lzc2FudCBDcm9xdWUtTW9uc2lldXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxNicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIEEgZmxha3kgYnV0dGVyIGNyb2lzc2FudCBsYXllcmVkIHdpdGggdGhpbmx5IHNsaWNlZCBwcm9zY2l1dHRvLCBHcnV5w6hyZSBjaGVlc2UsIGFuZCBiw6ljaGFtZWwgc2F1Y2UsIHRvYXN0ZWQgdG8gZ29sZGVuIHBlcmZlY3Rpb24uJyxcclxuICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ2hhbXBhZ25lLWluZnVzZWQgRnJ1aXQgUGFyZmFpdCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE4JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIGNvbWJpbmF0aW9uIG9mIHNlYXNvbmFsIGZydWl0cywgb3JnYW5pYyBHcmVlayB5b2d1cnQsIGFuZCB0b2FzdGVkIGFsbW9uZCBncmFub2xhLCBkcml6emxlZCB3aXRoIGNoYW1wYWduZSByZWR1Y3Rpb24uJyxcclxuICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU21va2VkIFNhbG1vbiBMb3ggUGxhdHRlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDI0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIb3VzZS1jdXJlZCBhbmQgc21va2VkIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhbiBhcnJheSBvZiBhY2NvbXBhbmltZW50cywgaW5jbHVkaW5nIGNhcGVycywgcmVkIG9uaW9uLCBkaWxsIGNyZWFtIGNoZWVzZSwgYW5kIGZyZXNoIGJhZ2Vscy4nLFxyXG4gICAgXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGl0ZW06ICdGcmVuY2ggcHJlc3MgY29mZmVlJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckNycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUm9idXN0LCBmdWxsLWJvZGllZCBicmV3IGJ1cnN0aW5nIHdpdGggcmljaCwgZmxhdm9yZnVsIG5vdGVzLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBpbml0aWFsQnJlYWtmYXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbS5jbGFzc05hbWUgPSAnbWVudS1pdGVtJztcclxuICAgIFxyXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xyXG4gICAgICAgIGl0ZW1EaXYudGV4dENvbnRlbnQgPSBpdGVtLml0ZW07XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBcclxuICAgIH0pO1xyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQobWVudSk7ICAgIFxyXG59IiwiaW1wb3J0IGJyZWFrZmFzdEltZyBmcm9tICcuLi9zcmMvYnJlYWtmYXN0LmpwZydcclxuaW1wb3J0IGx1bmNoSW1nIGZyb20gJy4uL3NyYy9sdW5jaC5qcGcnXHJcbmltcG9ydCBkaW5uZXJJbWcgZnJvbSAnLi4vc3JjL2Rpbm5lci5qcGcnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbW9kZScpO1xyXG5cclxuICAgIGNvbnN0IGluamVjdENvdXJzZSA9IChpdGVtKSA9PntcclxuICAgICAgICAvL0hpZGUgdGhlIGJhY2tncm91bmQgZm9yIHZpc3VhbCBlZmZlY3RcclxuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgICAgICBoZXJvVGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgwLDAsMCwxKWA7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdW5kZXJsaW5lIGVmZmVjdC4gVGVtcG9yYXJpbHkgaGlkZSB0aGUgdGV4dFxyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3Vyc2UnKTtcclxuICAgICAgICBjb3Vyc2UuY2xhc3NMaXN0LnJlbW92ZSgnZXh0ZW5kJyk7XHJcbiAgICAgICAgY291cnNlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbWFnZSBvYmplY3RcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIGltYWdlLnNyYyA9IGAuLi9zcmMvJHtpdGVtLmdldENvdXJzZU5hbWUoKX0uanBnYDtcclxuICAgICAgICBzd2l0Y2goaXRlbS5nZXRDb3Vyc2VOYW1lKCkpe1xyXG4gICAgICAgICAgICBjYXNlICdCcmVha2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYnJlYWtmYXN0SW1nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0x1bmNoJzpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGx1bmNoSW1nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0Rpbm5lcic6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBkaW5uZXJJbWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcGFyc2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2Uuc3JjKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIC8vIEFkZCBzZXRUaW1lb3V0IHN1Y2ggdGhhdCBlZmZlY3RzIGNhbiBhY3R1YWxseSBwbGF5IG91dFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiJHtpbWFnZS5zcmN9XCIpYDtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMTAlJztcclxuICAgICAgICAgICAgbWVudS5zdHlsZS50cmFuc2l0aW9uID0gJzAuM3MgZWFzZSc7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgICAgICB9LCAxMDUwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBjb3Vyc2UudGV4dENvbnRlbnQgPSBpdGVtLmdldENvdXJzZU5hbWUoKTtcclxuICAgICAgICAgICAgY291cnNlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIGNvdXJzZS5jbGFzc0xpc3QuYWRkKCdleHRlbmQnKTtcclxuICAgICAgICAgICAgaGVyb1RleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoMCwwLDAsMC4zKWA7XHJcbiAgICAgICAgfSwgMTMwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSc7XHJcbiAgICAgICAgfSwgMTQ1MCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyldO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaXRlbS5nZXRDb3Vyc2VJdGVtcygpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJJdGVtID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclByaWNlID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVySXRlbS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLml0ZW07XHJcbiAgICAgICAgICAgIGhlYWRlclByaWNlLnRleHRDb250ZW50ID0gaXRlbXNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbXNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IFtdO1xyXG4gICAgY29uc3QgY291cnNlID0gKGNvdXJzZU5hbWUpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZUl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3QgYWRkQ291cnNlSXRlbSA9IChpdGVtLCBwcmljZSwgZGVzY3JpcHRpb24pID0+e1xyXG4gICAgICAgICAgICBjb3Vyc2VJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFkZEV4aXN0aW5nQ291cnNlID0gKG1lbnUpID0+e1xyXG4gICAgICAgICAgICBtZW51LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBnZXRDb3Vyc2VJdGVtcyA9ICgpID0+IGNvdXJzZUl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGdldENvdXJzZU5hbWUgPSAoKSA9PiBjb3Vyc2VOYW1lO1xyXG4gICAgICAgIHJldHVybiB7Z2V0Q291cnNlSXRlbXMsIGdldENvdXJzZU5hbWUsIGFkZENvdXJzZUl0ZW0sIGFkZEV4aXN0aW5nQ291cnNlfVxyXG5cclxuICAgIH07IFxyXG5cclxuXHJcbiAgICBsZXQgY3VycmVudCA9IDA7XHJcbiAgICBjb25zdCBjb3Vyc2VOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdXJzZScpLnRleHRDb250ZW50O1xyXG4gICAgaWYoY291cnNlTmFtZURpdiA9PT0gJ0x1bmNoJykgY3VycmVudCA9IDE7XHJcbiAgICBlbHNlIGlmKGNvdXJzZU5hbWVEaXYgPT09ICdEaW5uZXInKSBjdXJyZW50ID0gMjtcclxuXHJcblxyXG4gICAgY29uc3QgbHVuY2ggPSBjb3Vyc2UoXCJMdW5jaFwiKTtcclxuICAgIC8vIFB1bGxlZCBmcm9tIGFuIGVhcmxpZXIgdGVzdFxyXG4gICAgbHVuY2guYWRkRXhpc3RpbmdDb3Vyc2UoW3tcclxuICAgICAgICBpdGVtOiAnU2VhcmVkIFNlYSBTY2FsbG9wIFJpc290dG8nLFxyXG4gICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmZlY3RseSBzZWFyZWQgc2VhIHNjYWxsb3BzIHNlcnZlZCBhdG9wIGEgYmVkIG9mIGNyZWFteSBzYWZmcm9uLWluZnVzZWQgcmlzb3R0bywgZ2FybmlzaGVkIHdpdGggbWljcm9ncmVlbnMuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnVHJ1ZmZsZS1pbmZ1c2VkIE11c2hyb29tIFF1aWNoZScsXHJcbiAgICAgICAgcHJpY2U6ICckMjYnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBxdWljaGUgZmlsbGVkIHdpdGggYSBtZWRsZXkgb2YgdHJ1ZmZsZS1pbmZ1c2VkIG11c2hyb29tcywgYXJ0aXNhbmFsIGNoZWVzZSwgYW5kIGZyZXNoIGhlcmJzLCBhY2NvbXBhbmllZCBieSBhIHNpZGUgc2FsYWQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnVHJ1ZmZsZWQgQmVlZiBCdXJnZXInLFxyXG4gICAgICAgIHByaWNlOiAnJDI4JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZ291cm1ldCBiZWVmIGJ1cmdlciBlbGV2YXRlZCB3aXRoIHRydWZmbGUtaW5mdXNlZCBtYXlvLCBjYXJhbWVsaXplZCBzaGFsbG90cywgYW5kIGFnZWQgY2hlZGRhciBvbiBhIGJyaW9jaGUgYnVuLCBzZXJ2ZWQgd2l0aCBob3VzZS1jdXQgZnJpZXMuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnUm9hc3RlZCBUb21hdG8gQmFzaWwgRWxlZ2FuY2UnLFxyXG4gICAgICAgIHByaWNlOiAnJDEyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGFybW9uaW91cyBibGVuZCBvZiBmaXJlLXJvYXN0ZWQgdG9tYXRvZXMgYW5kIGZyZXNoIGJhc2lsLCBlbGV2YXRlZCB3aXRoIGEgZHJpenpsZSBvZiBhZ2VkIGJhbHNhbWljIGFuZCBhIGRvbGxvcCBvZiBjcsOobWUgZnJhw65jaGUuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnQ3VjdW1iZXIgTWludCBGaXp6JyxcclxuICAgICAgICBwcmljZTogJyQxMScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcgTXVkZGxlZCBjdWN1bWJlciBhbmQgbWludCBjb21iaW5lZCB3aXRoIGVsZGVyZmxvd2VyIHRvbmljIGFuZCBhIHNwbGFzaCBvZiBsaW1lIGp1aWNlLCBzZXJ2ZWQgb3ZlciBpY2UuJ1xyXG4gICAgfV0pO1xyXG5cclxuICAgIGNvbnN0IGJyZWFrZmFzdCA9IGNvdXJzZShcIkJyZWFrZmFzdFwiKTtcclxuICAgIGJyZWFrZmFzdC5hZGRFeGlzdGluZ0NvdXJzZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnVHJ1ZmZsZSBFZ2dzIEJlbmVkaWN0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvYWNoZWQgZWdncyBvbiB0b2FzdGVkIGFydGlzYW5hbCBicmlvY2hlLCB0b3BwZWQgd2l0aCBob2xsYW5kYWlzZSBpbmZ1c2VkIHdpdGggYmxhY2sgdHJ1ZmZsZSBlc3NlbmNlLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ3JvaXNzYW50IENyb3F1ZS1Nb25zaWV1cicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE2JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcgQSBmbGFreSBidXR0ZXIgY3JvaXNzYW50IGxheWVyZWQgd2l0aCB0aGlubHkgc2xpY2VkIHByb3NjaXV0dG8sIEdydXnDqHJlIGNoZWVzZSwgYW5kIGLDqWNoYW1lbCBzYXVjZSwgdG9hc3RlZCB0byBnb2xkZW4gcGVyZmVjdGlvbi4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0NoYW1wYWduZS1pbmZ1c2VkIEZydWl0IFBhcmZhaXQnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxOCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBjb21iaW5hdGlvbiBvZiBzZWFzb25hbCBmcnVpdHMsIG9yZ2FuaWMgR3JlZWsgeW9ndXJ0LCBhbmQgdG9hc3RlZCBhbG1vbmQgZ3Jhbm9sYSwgZHJpenpsZWQgd2l0aCBjaGFtcGFnbmUgcmVkdWN0aW9uLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU21va2VkIFNhbG1vbiBMb3ggUGxhdHRlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDI0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIb3VzZS1jdXJlZCBhbmQgc21va2VkIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhbiBhcnJheSBvZiBhY2NvbXBhbmltZW50cywgaW5jbHVkaW5nIGNhcGVycywgcmVkIG9uaW9uLCBkaWxsIGNyZWFtIGNoZWVzZSwgYW5kIGZyZXNoIGJhZ2Vscy4nLFxyXG5cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaXRlbTogJ0ZyZW5jaCBwcmVzcyBjb2ZmZWUnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ3JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSb2J1c3QsIGZ1bGwtYm9kaWVkIGJyZXcgYnVyc3Rpbmcgd2l0aCByaWNoLCBmbGF2b3JmdWwgbm90ZXMuJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IGRpbm5lciA9IGNvdXJzZShcIkRpbm5lclwiKTtcclxuICAgIGRpbm5lci5hZGRFeGlzdGluZ0NvdXJzZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU2VhcmVkIEZvaWUgR3JhcycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlY2FkZW50IGRlbGljYWN5LCBzZWFyZWQgdG8gcGVyZmVjdGlvbiBhbmQgYWNjb21wYW5pZWQgYnkgYSB0cnVmZmxlLWluZnVzZWQgcmVkdWN0aW9uIGFuZCBicmlvY2hlLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnRmlsZXQgTWlnbm9uJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckNDQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ByaW1lIGJlZWYgZmlsZXQgZ3JpbGxlZCB0byB5b3VyIHByZWZlcmVuY2UsIHNlcnZlZCB3aXRoIGEgcmVkIHdpbmUgcmVkdWN0aW9uIGFuZCB0cnVmZmxlLXNjZW50ZWQgbWFzaGVkIHBvdGF0b2VzLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnUGFuLVNlYXJlZCBTZWEgQmFzcycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDM4JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIGZpbGxldCBvZiBzZWEgYmFzcywgcGFuLXNlYXJlZCBhbmQgc2VydmVkIGF0b3Agc2FmZnJvbi1pbmZ1c2VkIHJpc290dG8gd2l0aCBsZW1vbiBiZXVycmUgYmxhbmMuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdUcnVmZmxlLWluZnVzZWQgUmlzb3R0bycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGx1eHVyaW91cyBibGVuZCBvZiBBcmJvcmlvIHJpY2UsIHRydWZmbGUgb2lsLCBhbmQgcGFybWVzYW4gY2hlZXNlLCBnYXJuaXNoZWQgd2l0aCBzaGF2ZWQgdHJ1ZmZsZS4nLFxyXG5cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaXRlbTogJ0NpdHJ1cyBTcGFya2xlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDEwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcgQSB2aWJyYW50IGJsZW5kIG9mIGZyZXNoIGNpdHJ1cyBqdWljZXMgYW5kIHNvZGEgd2F0ZXIsIGdhcm5pc2hlZCB3aXRoIGEgdHdpc3Qgb2YgbGVtb24gYW5kIGEgc3ByaWcgb2YgdGh5bWUuJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvdXJzZXMucHVzaChicmVha2Zhc3QpO1xyXG4gICAgY291cnNlcy5wdXNoKGx1bmNoKTtcclxuICAgIGNvdXJzZXMucHVzaChkaW5uZXIpO1xyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93LWxlZnQnKTtcclxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3ctcmlnaHQnKTtcclxuXHJcbiAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpPT57XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPT09IDAgPyBjb3Vyc2VzLmxlbmd0aCAtIDEgOiBjdXJyZW50IC0gMTtcclxuICAgICAgICBpbmplY3RDb3Vyc2UoY291cnNlc1tjdXJyZW50XSk7IFxyXG4gICAgfSlcclxuXHJcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCk9PntcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudCA9PT0gY291cnNlcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnQgKyAxO1xyXG4gICAgICAgIGluamVjdENvdXJzZShjb3Vyc2VzW2N1cnJlbnRdKTsgXHJcbiAgICB9KVxyXG5cclxufSIsImltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiXHJcbmltcG9ydCBpbml0aWFsTWVudUxvYWQgZnJvbSBcIi4vaW5pdGlhbExvYWQuanNcIlxyXG5pbXBvcnQgbWVudWNvbnRyb2xsZXIgZnJvbSBcIi4vbWVudWNvbnRyb2xsZXIuanNcIlxyXG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIlxyXG5cclxuY29uc3QgcmVzZXRDbGlja3MgPSAoKSA9PntcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICAgIGlmKGFjdGl2ZSAhPT0gbnVsbCApIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZXJvQmcuY2xhc3NMaXN0LmFkZCgnaGVyby1iZycpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcclxuICAgIC8vIENvZGUgZm9yIGhlYWRlclxyXG4gICAgLy9Ob3RlIHRoYXQgdGhpcyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBtYWluIGNvbnRlbnQgbGF0ZXJcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWQuY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbG9nby5ocmVmID0gJyNob21lJztcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdlbmNoYW50w6knO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGdlbmVyYXRlSG9tZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgbGkgY29udGVudHNcclxuICAgIGNvbnN0IGFib3V0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0SHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IG1lbnVIcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgY29udGFjdEhyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBcclxuICAgIC8vIExpbmtzXHJcbiAgICBhYm91dEhyZWYuaHJlZiA9ICcjYWJvdXQnO1xyXG4gICAgbWVudUhyZWYuaHJlZiA9ICcjbWVudSc7XHJcbiAgICBjb250YWN0SHJlZi5ocmVmID0gJyNjb250YWN0JztcclxuICAgIFxyXG4gICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICBhYm91dEhyZWYudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xyXG4gICAgbWVudUhyZWYudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBjb250YWN0SHJlZi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICAgIFxyXG4gICAgYWJvdXRIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGFib3V0SHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBnZW5lcmF0ZUFib3V0KCk7XHJcbiAgICB9KTtcclxuICAgIG1lbnVIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIG1lbnVIcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGluaXRpYWxNZW51TG9hZCgpO1xyXG4gICAgICAgIG1lbnVjb250cm9sbGVyKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGNvbnRhY3RIcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdlbmVyYXRlQ29udGFjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGNvbnRlbnQgdG8gbGlcclxuICAgIGFib3V0TGkuYXBwZW5kQ2hpbGQoYWJvdXRIcmVmKTtcclxuICAgIG1lbnVMaS5hcHBlbmRDaGlsZChtZW51SHJlZik7XHJcbiAgICBjb250YWN0TGkuYXBwZW5kQ2hpbGQoY29udGFjdEhyZWYpO1xyXG4gICAgXHJcbiAgICAvLyBBcHBlbmQgaW5kaXZpZHVhbCBsaSB0byB1bFxyXG4gICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXRMaSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGkpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpKTtcclxuICAgIFxyXG4gICAgLy8gYXBwZW5kIHVsIHRvIG5hdlxyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIFxyXG4gICAgLy9hcHBlbmQgbmF2aWdhdGlvbiBiYXJcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBoZXJvQmcuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvQmcpO1xyXG4gICAgICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZScpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XHJcbiAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGFibGUuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKTtcclxuICAgICAgICBjb25zdCB0YWJsZUlkID0gcGFyc2VJbnQodGFibGUuZ2V0QXR0cmlidXRlKCd0YWJsZUlkJykpO1xyXG4gICAgICAgIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlZW50ZXJgLCAoKT0+e1xyXG4gICAgICAgICAgICBpZihzdGF0dXMgPT09ICdyZXNlcnZlZCcpIHRleHQudGV4dENvbnRlbnQgPSBgVGFibGUgJHt0YWJsZUlkfSBpcyByZXNlcnZlZGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlbGVhdmVgLCAoKT0+e1xyXG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0hvdmVyIG92ZXIgZWFjaCB0YWJsZSBmb3IgbW9yZS4nO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAnO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNlcnZhdGlvbnMuY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGVudHJhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbnRyYW5jZS5jbGFzc05hbWUgPSAnZW50cmFuY2UnO1xyXG4gICAgZW50cmFuY2UudGV4dENvbnRlbnQgID0gJ1JlY2VwdGlvbic7XHJcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQoZW50cmFuY2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0hvdmVyIG92ZXIgZWFjaCB0YWJsZSBmb3IgbW9yZS4nO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XHJcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBcclxuICAgIEFycmF5LmZyb20obmV3IEFycmF5KDUpKS5mb3JFYWNoKChkdW1teUVsZW1lbnQsIGluZGV4KSA9PntcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9ICd0YWJsZSc7XHJcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKCd0YWJsZUlkJyxpbmRleCsxKTtcclxuICAgICAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsJ3Jlc2VydmVkJyk7XHJcbiAgICAgICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnMpO1xyXG4gICAgXHJcbiAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9jb3VudHJ5c2lkZS5qcGcnXHJcbmltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVOYXZCYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCJcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCJcclxuXHJcbi8qXHJcbiAgICBXaXRoIHRoZSBuYXZiYXIsIHRoZSBjb250ZW50IHNob3VsZCBiZSBcclxuICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgIDx0aXRsZT5lbmNoYW50w6k8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vc3JjL3N0eWxlLmNzc1wiPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tYmcgYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJsb2dvXCI+ZW5jaGFudMOpPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI21lbnVcIj5NZW51PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFtSZXN0IG9mIGNvZGUgaGVyZV1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICovXHJcblxyXG5nZW5lcmF0ZU5hdkJhcigpO1xyXG5nZW5lcmF0ZUhvbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=