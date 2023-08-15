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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 25px;
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
  font-size: clamp(2rem, -28.1176rem + 37.6471vw, 3.4rem);
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
}

.contact p {
  font-size: 2.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lora\";\r\n    src: url(\"../src/Lora-VariableFont_wght.ttf\") format(\"truetype\"),\r\n    url(\"../src/Lora-Italic-VariableFont_wght.ttf\") format(\"truetype\");\r\n\r\n}\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../src/Montserrat-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\nbody, html{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.hero-bg{\r\n    transition: background-size 0.3s ease;\r\n    display: flex;\r\n    height: 100vh;\r\n    background: url(\"./countryside.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n    //for when the device is minimized\r\n    //Unfortunately, some of the animations won't play properly\r\n    //This is due to the background size having to be manipulated\r\n    .hero-bg{\r\n        background-size: cover !important;\r\n    }\r\n}\r\n\r\n.about{\r\n    background:none;\r\n    background-color: #000;\r\n}\r\n.hero-text{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n}\r\n.navbar{\r\n    nav{\r\n        color: white;\r\n        font-family: \"Lora\";\r\n    }\r\n    li{\r\n        display: inline-block;\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        position: relative;\r\n        font-size: 2.2rem;\r\n        width: 2.2rem;\r\n    }\r\n    li{\r\n        &:nth-child(2), &:nth-child(3){\r\n            a::before{\r\n                content:(' /');\r\n            }\r\n        }\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        &::after{\r\n            content: '';\r\n            transition: 0.5s ease-out;\r\n            position: absolute;\r\n            display: block;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            background: white;\r\n            transform: scaleX(0);\r\n            border: solid white 1px;\r\n            transform-origin: left;\r\n        }  \r\n        &:hover::after{\r\n            transform: scaleX(1);\r\n        }\r\n        &.active{\r\n            &::after{\r\n                transform: scaleX(1);\r\n            }\r\n        }\r\n    }\r\n\r\n    li{\r\n        &:nth-child(2) , &:nth-child(3){\r\n            a::after{\r\n                left: 11%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.hero-text{\r\n    transition: background-color 0.2s ease;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n}\r\n.head{\r\n    top: 10px;\r\n    position: sticky;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.head{\r\n    margin: 15px 25px;\r\n}\r\n.logo{\r\n    font-family: \"Montserrat\";\r\n    font-size: 3rem;\r\n    color: white;\r\n    &:hover{\r\n        opacity: 0.7;\r\n    }\r\n}\r\n.footer{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    padding-bottom: 25px;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    padding-left: 25px;\r\n}\r\n.greet{\r\n    font-size: 3.5rem;\r\n    margin-bottom: 10px;\r\n}\r\n#reservation-button{\r\n    display: flex;\r\n    align-items: center;\r\n    background: none;\r\n    border: none;\r\n    outline: 1.5px #fff solid;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    width: 240px;\r\n    height: 55px;\r\n    margin-left: 5px;\r\n    transition: 0.3s ease-in-out;\r\n    \r\n    h1{\r\n        font-size: 1.9rem;\r\n        font-weight: 400;\r\n        margin-left: 10px;\r\n        margin-right: 8px;\r\n    }\r\n    svg{\r\n        display: block;\r\n        margin-top: 8px;\r\n        fill: white;\r\n    }\r\n}\r\n#reservation-button:hover{\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    svg{\r\n        fill:black;\r\n    }\r\n}\r\n.body{\r\n    color: white;\r\n    padding: 25px;\r\n    font-family: \"Montserrat\";\r\n    h1,h2{\r\n        font-weight: 300;\r\n    }\r\n}\r\nh1{\r\n    font-size: 2.5rem;\r\n}\r\np{\r\n    width: 92%;\r\n}\r\n.menu{\r\n    transform: 0.3s ease;\r\n    height: 80%;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n}\r\n.menu-info{\r\n    height: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10%;\r\n}\r\n.menu-info h1{\r\n    font-weight: 400;\r\n    font-size: 70px;\r\n    position: relative;\r\n    transition: all 0.5s ease-out;\r\n    &::after{\r\n        content: '';\r\n        transition: transform 0.5s ease-out;\r\n        position: absolute;\r\n        display: block;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: white;\r\n        transform: scaleX(0);\r\n        // Seems to be a fix for chrome browsers\r\n        border: 1px solid white;\r\n        transform-origin: left;\r\n    }  \r\n    &.extend{\r\n        &::after{\r\n            \r\n            transform: scaleX(1);\r\n        }\r\n    }\r\n}\r\n#arrow-left, #arrow-right{\r\n    display: block;\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        cursor: pointer;\r\n        opacity: 0.7;\r\n        transform: translateX(5px);\r\n    }\r\n}\r\n#arrow-left{\r\n   position: relative;\r\n   rotate: 180deg;\r\n}\r\n#arrow-right{\r\n    margin-right: 5px;\r\n}\r\n.test{\r\n    background-color: #000;\r\n}\r\n.menu-items{\r\n    height: 110vh;\r\n    width: 100%;\r\n    background-color: #000;\r\n    font-family: \"Lora\";\r\n    padding: 125px 25px;\r\n    font-size: 2rem;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n     .menu-items{\r\n        height: 125vh !important;\r\n     }\r\n     \r\n}\r\n.placeholder{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#arrow-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n    rotate: 90deg;\r\n    animation: 1.5s linear 0s infinite alternate hover;\r\n}\r\n@keyframes hover {\r\n    from{\r\n        transform: translateX(5px);\r\n    }\r\n    to{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n.menu-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: clamp(2rem, -28.1176rem + 37.6471vw, 3.4rem);\r\n    border-bottom: solid white 3px;\r\n    \r\n}\r\n.menu-item{\r\n    border-bottom: solid white 1px;\r\n    header{\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n.description{\r\n    font-size: 1.25rem;\r\n    color: rgb(215, 204, 204);\r\n    padding-left: 3px;\r\n}\r\n.contact-mode{\r\n    background: #000;\r\n}\r\n.contact{\r\n    padding: 33px 23px;\r\n    color: #fff;\r\n    font-family: \"montserrat\";\r\n    font-size: 1rem;\r\n    :nth-child(2), :nth-child(n+4){\r\n        padding-top: 20px;\r\n    }\r\n}\r\n.reservation-mode{\r\n    background: #000;\r\n}\r\n.reservations{\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"text text text\"\r\n    \"t1 entrance t3\"\r\n    \"t2 entrance t3\"\r\n    \"t4 t5 t5\";\r\n    \r\n    margin-top: 10px;\r\n    grid-template-rows: max-content repeat(3, 1fr);\r\n    grid-template-columns: 15% 20% 15%;\r\n    column-gap: 1.5rem;\r\n    row-gap: 0.5rem;\r\n    justify-content: center;\r\n    width: 80%;\r\n    height: 80%;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n.reservations{\r\n    >:nth-child(n+3){\r\n        border: solid #fff 1px;\r\n        &:hover{\r\n            cursor: pointer;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.table[tableId=\"1\"]{\r\n    grid-area: t1;\r\n}\r\n.table[tableId=\"2\"]{\r\n    grid-area: t2;\r\n}\r\n.table[tableId=\"3\"]{\r\n    grid-area: t3;\r\n}\r\n.table[tableId=\"4\"]{\r\n    grid-area: t4;\r\n}\r\n.reservations .entrance{\r\n    grid-area: entrance;\r\n    border-left: solid white 1px;\r\n    border-right: solid white 1px;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n.table[tableId=\"5\"]{\r\n    grid-area: t5;\r\n}\r\n.table[tableId=\"6\"]{\r\n    grid-area: t6;\r\n}\r\n.text{\r\n    grid-area: text;\r\n    margin-bottom: 2rem;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n}\r\n.contact p {\r\n    font-size: 2.5rem;\r\n}"],"sourceRoot":""}]);
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
    
    const greet = document.createElement('div');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBJQUFvRDtBQUNoRyw0Q0FBNEMsd0pBQTJEO0FBQ3ZHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsNEJBQTRCLG1DQUFtQztBQUMvRztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTnFDO0FBQ0M7QUFDUTtBQUNFO0FBQ047QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRLDhEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3RkEsNkJBQWUsc0NBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFNBQVM7QUFDM0UsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2JBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNMO0FBQ0c7QUFDVjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBYztBQUNkLG9EQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVjb250cm9sbGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmF0aW9uY2hlY2tlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvTG9yYS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvTG9yYS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb3VudHJ5c2lkZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keSwgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZXJvLWJnIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuaGVyby1iZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG59XG4uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm5hdmJhciBuYXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbn1cbi5uYXZiYXIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZiYXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIHdpZHRoOiAyLjJyZW07XG59XG4ubmF2YmFyIGxpOm50aC1jaGlsZCgyKSBhOjpiZWZvcmUsIC5uYXZiYXIgbGk6bnRoLWNoaWxkKDMpIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIC9cIjtcbn1cblxuLm5hdmJhciBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ubmF2YmFyIGE6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG4ubmF2YmFyIGEuYWN0aXZlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLm5hdmJhciBsaTpudGgtY2hpbGQoMikgYTo6YWZ0ZXIsIC5uYXZiYXIgbGk6bnRoLWNoaWxkKDMpIGE6OmFmdGVyIHtcbiAgbGVmdDogMTElO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVhZCB7XG4gIHRvcDogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbjogMTVweCAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5ncmVldCB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jcmVzZXJ2YXRpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAxLjVweCAjZmZmIHNvbGlkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uIGgxIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiNyZXNlcnZhdGlvbi1idXR0b24gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZmlsbDogd2hpdGU7XG59XG5cbiNyZXNlcnZhdGlvbi1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IGJsYWNrO1xufVxuXG4uYm9keSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuLmJvZHkgaDEsIC5ib2R5IGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxucCB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5tZW51IHtcbiAgdHJhbnNmb3JtOiAwLjNzIGVhc2U7XG4gIGhlaWdodDogODAlO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnUtaW5mbyB7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLm1lbnUtaW5mbyBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5tZW51LWluZm8gaDE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ubWVudS1pbmZvIGgxLmV4dGVuZDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cblxuI2Fycm93LWxlZnQsICNhcnJvdy1yaWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4jYXJyb3ctbGVmdDpob3ZlciwgI2Fycm93LXJpZ2h0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuXG4jYXJyb3ctbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcm90YXRlOiAxODBkZWc7XG59XG5cbiNhcnJvdy1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udGVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tZW51LWl0ZW1zIHtcbiAgaGVpZ2h0OiAxMTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbiAgcGFkZGluZzogMTI1cHggMjVweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAubWVudS1pdGVtcyB7XG4gICAgaGVpZ2h0OiAxMjV2aCAhaW1wb3J0YW50O1xuICB9XG59XG4ucGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Fycm93LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByb3RhdGU6IDkwZGVnO1xuICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZSBob3Zlcjtcbn1cblxuQGtleWZyYW1lcyBob3ZlciB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbi5tZW51LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAtMjguMTE3NnJlbSArIDM3LjY0NzF2dywgMy40cmVtKTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGUgM3B4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGUgMXB4O1xufVxuLm1lbnUtaXRlbSBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiByZ2IoMjE1LCAyMDQsIDIwNCk7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uY29udGFjdC1tb2RlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiAzM3B4IDIzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jb250YWN0IDpudGgtY2hpbGQoMiksIC5jb250YWN0IDpudGgtY2hpbGQobis0KSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmVzZXJ2YXRpb24tbW9kZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5yZXNlcnZhdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRleHQgdGV4dCB0ZXh0XCIgXCJ0MSBlbnRyYW5jZSB0M1wiIFwidDIgZW50cmFuY2UgdDNcIiBcInQ0IHQ1IHQ1XCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDIwJSAxNSU7XG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgcm93LWdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5yZXNlcnZhdGlvbnMgPiA6bnRoLWNoaWxkKG4rMykge1xuICBib3JkZXI6IHNvbGlkICNmZmYgMXB4O1xufVxuLnJlc2VydmF0aW9ucyA+IDpudGgtY2hpbGQobiszKTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIxXCJdIHtcbiAgZ3JpZC1hcmVhOiB0MTtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIyXCJdIHtcbiAgZ3JpZC1hcmVhOiB0Mjtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIzXCJdIHtcbiAgZ3JpZC1hcmVhOiB0Mztcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCI0XCJdIHtcbiAgZ3JpZC1hcmVhOiB0NDtcbn1cblxuLnJlc2VydmF0aW9ucyAuZW50cmFuY2Uge1xuICBncmlkLWFyZWE6IGVudHJhbmNlO1xuICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjVcIl0ge1xuICBncmlkLWFyZWE6IHQ1O1xufVxuXG4udGFibGVbdGFibGVJZD1cIjZcIl0ge1xuICBncmlkLWFyZWE6IHQ2O1xufVxuXG4udGV4dCB7XG4gIGdyaWQtYXJlYTogdGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jb250YWN0IHAge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwySEFBQTtBQUNKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLCtEQUFBO0FBREo7QUFHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFBO0VBSUk7SUFDSSxpQ0FBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0kscUJBQUE7QUFBUjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBRFI7QUFLWTtFQUNJLGFBQUE7QUFIaEI7O0FBVVE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVBaO0FBU1E7RUFDSSxvQkFBQTtBQVBaO0FBVVk7RUFDSSxvQkFBQTtBQVJoQjtBQWVZO0VBQ0ksU0FBQTtBQWJoQjs7QUFtQkE7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQWhCSjs7QUFrQkE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWlC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OztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vc3JjL0xvcmEtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLFxcclxcbiAgICB1cmwoXFxcIi4uL3NyYy9Mb3JhLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuXFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vc3JjL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5ib2R5LCBodG1se1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaGVyby1iZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2NvdW50cnlzaWRlLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgICAvL2ZvciB3aGVuIHRoZSBkZXZpY2UgaXMgbWluaW1pemVkXFxyXFxuICAgIC8vVW5mb3J0dW5hdGVseSwgc29tZSBvZiB0aGUgYW5pbWF0aW9ucyB3b24ndCBwbGF5IHByb3Blcmx5XFxyXFxuICAgIC8vVGhpcyBpcyBkdWUgdG8gdGhlIGJhY2tncm91bmQgc2l6ZSBoYXZpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcXHJcXG4gICAgLmhlcm8tYmd7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0e1xcclxcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbi5oZXJvLXRleHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5uYXZiYXJ7XFxyXFxuICAgIG5hdntcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIH1cXHJcXG4gICAgbGl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgYXtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsaXtcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDIpLCAmOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBhOjpiZWZvcmV7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6KCcgLycpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubmF2YmFye1xcclxcbiAgICBhe1xcclxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gICAgICAgIH0gIFxcclxcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXJ7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmLmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICAmOjphZnRlcntcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpe1xcclxcbiAgICAgICAgJjpudGgtY2hpbGQoMikgLCAmOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBhOjphZnRlcntcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMTElO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVyby10ZXh0e1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbi5oZWFke1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWR7XFxyXFxuICAgIG1hcmdpbjogMTVweCAyNXB4O1xcclxcbn1cXHJcXG4ubG9nb3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcbi5ncmVldHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbiNyZXNlcnZhdGlvbi1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogMS41cHggI2ZmZiBzb2xpZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgXFxyXFxuICAgIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbiNyZXNlcnZhdGlvbi1idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgc3Zne1xcclxcbiAgICAgICAgZmlsbDpibGFjaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYm9keXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBoMSxoMntcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5we1xcclxcbiAgICB3aWR0aDogOTIlO1xcclxcbn1cXHJcXG4ubWVudXtcXHJcXG4gICAgdHJhbnNmb3JtOiAwLjNzIGVhc2U7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWluZm97XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuLm1lbnUtaW5mbyBoMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICAmOjphZnRlcntcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgICAgICAvLyBTZWVtcyB0byBiZSBhIGZpeCBmb3IgY2hyb21lIGJyb3dzZXJzXFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxuICAgIH0gIFxcclxcbiAgICAmLmV4dGVuZHtcXHJcXG4gICAgICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbiNhcnJvdy1sZWZ0LCAjYXJyb3ctcmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jYXJyb3ctbGVmdHtcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgcm90YXRlOiAxODBkZWc7XFxyXFxufVxcclxcbiNhcnJvdy1yaWdodHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi50ZXN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtc3tcXHJcXG4gICAgaGVpZ2h0OiAxMTB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDEyNXB4IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gICAgIC5tZW51LWl0ZW1ze1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjV2aCAhaW1wb3J0YW50O1xcclxcbiAgICAgfVxcclxcbiAgICAgXFxyXFxufVxcclxcbi5wbGFjZWhvbGRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNhcnJvdy1ib3R0b217XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByb3RhdGU6IDkwZGVnO1xcclxcbiAgICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIGluZmluaXRlIGFsdGVybmF0ZSBob3ZlcjtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBob3ZlciB7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICB0b3tcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubWVudS1oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAtMjguMTE3NnJlbSArIDM3LjY0NzF2dywgMy40cmVtKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGUgM3B4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuLm1lbnUtaXRlbXtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGUgMXB4O1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoMjE1LCAyMDQsIDIwNCk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbn1cXHJcXG4uY29udGFjdC1tb2Rle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn1cXHJcXG4uY29udGFjdHtcXHJcXG4gICAgcGFkZGluZzogMzNweCAyM3B4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJtb250c2VycmF0XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICA6bnRoLWNoaWxkKDIpLCA6bnRoLWNoaWxkKG4rNCl7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb24tbW9kZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJ0ZXh0IHRleHQgdGV4dFxcXCJcXHJcXG4gICAgXFxcInQxIGVudHJhbmNlIHQzXFxcIlxcclxcbiAgICBcXFwidDIgZW50cmFuY2UgdDNcXFwiXFxyXFxuICAgIFxcXCJ0NCB0NSB0NVxcXCI7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCUgMTUlO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb25ze1xcclxcbiAgICA+Om50aC1jaGlsZChuKzMpe1xcclxcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmIDFweDtcXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjFcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MTtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjJcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MjtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjNcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MztcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjRcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0NDtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9ucyAuZW50cmFuY2V7XFxyXFxuICAgIGdyaWQtYXJlYTogZW50cmFuY2U7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCI1XFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDU7XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCI2XFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDY7XFxyXFxufVxcclxcbi50ZXh0e1xcclxcbiAgICBncmlkLWFyZWE6IHRleHQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4uY29udGFjdCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBcclxuICAgIC8vIElmIHRoZSBzZWNvbmQgY2hpbGQgKHRoYXQgaXNuJ3QgdGhlIG5hdmJhcikgaXMgdGhlIGFib3V0IGJvZHksIHRoZW4gd2UgZG9udFxyXG4gICAgLy8gcmVtb3ZlIGFueXRoaW5nXHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXS5jbGFzc05hbWUgPT09ICdib2R5JykgcmV0dXJuIDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAnO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ2VuY2hhbnTDqSc7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGgxKTtcclxuICAgIFxyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnYWhuLXNoYWhuLVRBWS8gRGVsaWdodGVkJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gJ0F0IGVuY2hhbnTDqSwgd2UgaW52aXRlIHlvdSB0byBlbWJhcmsgb24gYSBqb3VybmV5IHRoYXQgdHJhbnNjZW5kcyB0aGUgb3JkaW5hcnkgYW5kIGVtYnJhY2VzIHRoZSBleHRyYW9yZGluYXJ5Lic7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHAxKTtcclxuICAgIFxyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9ICdTaW5jZSBvdXIgaW5jZXB0aW9uIGluIDIwMTUsIHdlIGhhdmUgdGFrZW4gcHJpZGUgaW4gY3JhZnRpbmcgYSBkaW5pbmcgc2FuY3R1YXJ5IHRoYXQgdW5pdGVzIHRoZSBhcnRpc3RyeSBvZiBhd2FyZC13aW5uaW5nIGdhc3Ryb25vbXkgd2l0aCB0aGUgY29tZm9ydCBvZiBjYXN1YWwgaW5kdWxnZW5jZS4nO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwMik7XHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgaGVyb0JnLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdID09PSAnY29udGFjdCcpIHJldHVybiA7XHJcbiAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gUmVzZXQgdGhlIGJhY2tncm91bmRcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcuY2xhc3NOYW1lID0gJ2hlcm8tYmcnO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJztcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XHJcbiAgICBcclxuICAgIEFycmF5LmZyb20obmV3IEFycmF5KDUpKS5mb3JFYWNoKCgpID0+IGNvbnRhY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3RDaGlsZHJlbiA9IFsuLi5jb250YWN0LmNoaWxkcmVuXTtcclxuICAgIFxyXG4gICAgY29udGFjdENoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFdlIHZhbHVlIHlvdXIgaW5xdWlyaWVzLCBmZWVkYmFjaywgYW5kIHRoZSBvcHBvcnR1bml0eSB0byBjb25uZWN0LiBXaGV0aGVyIHlvdSdyZSBzZWVraW5nIHRvIG1ha2UgYSByZXNlcnZhdGlvbiwgc2hhcmUgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSwgb3Igc2ltcGx5IHdpc2ggdG8gbGVhcm4gbW9yZSBhYm91dCBlbmNoYW50w6ksIHdlJ3JlIGhlcmUgdG8gYXNzaXN0IHlvdS4gUGxlYXNlIGZlZWwgZnJlZSB0byByZWFjaCBvdXQgdG8gdXMgdGhyb3VnaCB0aGUgY2hhbm5lbHMgYmVsb3c6YDtcclxuICAgIGNvbnRhY3RDaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAyMzMgQnV0dG9ud29vZCBTdC4nO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gJ05ldyBZb3JrLCBOWSAxMDAzMyc7XHJcbiAgICBjb250YWN0Q2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSAgJ0VtYWlsOiBoZWxsb0BlbmNoYW50ZS5jb20nO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzRdLnRleHRDb250ZW50ID0gJ1Bob25lOiAoMTkzKTM2OC0yMTI1J1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiaW1wb3J0IGRlZmF1bHRCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb3VudHJ5c2lkZS5qcGcnXHJcbmltcG9ydCBicmVha2Zhc3RUZXN0IGZyb20gJy4uL3NyYy9icmVha2Zhc3QuanBnJ1xyXG5pbXBvcnQgbG9hZFJlc2VydmF0aW9ucyBmcm9tIFwiLi9yZXNlcnZhdGlvbnMuanNcIlxyXG5pbXBvcnQgcmVzZXJ2YXRpb25DaGVja2VyIGZyb20gJy4vcmVzZXJ2YXRpb25jaGVja2VyLmpzJztcclxuXHJcbi8vanVzdCBhIHByZWxvYWRcclxuKG5ldyBJbWFnZSgpLnNyYykgPSBicmVha2Zhc3RUZXN0O1xyXG4obmV3IEltYWdlKCkuc3JjKSA9IGRlZmF1bHRCYWNrZ3JvdW5kO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIGhlcm9CZy5jbGFzc05hbWUgPSAnaGVyby1iZyc7XHJcbiAgICBoZXJvQmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgXHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtkZWZhdWx0QmFja2dyb3VuZH0pYDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG5cclxuXHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlbi5sZW5ndGggPiAxKXtcclxuICAgICAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXS5jbGFzc05hbWUgPT09ICdmb290ZXInKSByZXR1cm47XHJcbiAgICAgICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXInO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JlZXQuY2xhc3NOYW1lID0gJ2dyZWV0JztcclxuICAgIFxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIFxyXG4gICAgaWYoaG91cnMgPj0gNSAmJiBob3VycyA8IDEyKXtcclxuICAgICAgICBncmVldC50ZXh0Q29udGVudCA9ICdHb29kIE1vcm5pbmcuJztcclxuICAgIH1lbHNlIGlmKGhvdXJzID49IDEyICYmIGhvdXJzIDwgMTcpe1xyXG4gICAgICAgIGdyZWV0LnRleHRDb250ZW50ID0gJ0dvb2QgQWZ0ZXJub29uLic7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBncmVldC50ZXh0Q29udGVudCA9ICdHb29kIEV2ZW5pbmcuJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdyZWV0KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmlkID0gJ3Jlc2VydmF0aW9uLWJ1dHRvbic7XHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpPT57XHJcbiAgICAgICAgbG9hZFJlc2VydmF0aW9ucygpO1xyXG4gICAgICAgIHJlc2VydmF0aW9uQ2hlY2tlcigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc2VydmF0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xyXG4gICAgXHJcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCcyNScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywnMTgnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCcwIDAgMjUgMTgnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywnbm9uZScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWF4WU1heCBtZWV0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywnTTI1IDlMMTAgMC4zMzk3NDZWMTcuNjYwM0wyNSA5Wk0wIDEwLjVIMTEuNVY3LjVIMFYxMC41WicpO1xyXG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG4gICAgXHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvblRleHQpO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcclxuICAgIFxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnV0dG9uKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59IiwiaW1wb3J0IGFycm93IGZyb20gJy4uL3NyYy9tZW51YXJyb3cuc3ZnJ1xyXG5pbXBvcnQgYnJlYWtmYXN0SW1nIGZyb20gJy4uL3NyYy9icmVha2Zhc3QuanBnJ1xyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXS5jbGFzc05hbWUgPT09ICdtZW51JykgcmV0dXJuOyBcclxuICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgWy4uLmhlcm9CZy5jbGFzc0xpc3RdLmZpbHRlcihoZXJvQ2xhc3MgPT4gaGVyb0NsYXNzICE9PSAnaGVyby1iZycpO1xyXG4gICAgaGVyb0JnLmNsYXNzTGlzdC5hZGQoJ21lbnUtbW9kZScpO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7YnJlYWtmYXN0SW1nfSlgO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGBjZW50ZXIgY2VudGVyYDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTEwJSc7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge2hlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMDAlJ30sMzUwKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgbWVudUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVJbmZvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW5mbycpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SW5mbyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJpZ2h0QXJyb3c9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmlnaHRBcnJvdy5zcmMgPSBhcnJvdztcclxuICAgIHJpZ2h0QXJyb3cuaWQgPSAnYXJyb3ctcmlnaHQnO1xyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocmlnaHRBcnJvdyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGVmdEFycm93LnNyYyA9IGFycm93O1xyXG4gICAgbGVmdEFycm93LmlkID0gJ2Fycm93LWxlZnQnO1xyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcclxuICAgIFxyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvdXJzZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY291cnNlVGV4dC5jbGFzc05hbWUgPSAnY291cnNlJztcclxuICAgIGNvdXJzZVRleHQudGV4dENvbnRlbnQgPSAnQnJlYWtmYXN0JztcclxuICAgIHNldFRpbWVvdXQoKCk9PmNvdXJzZVRleHQuY2xhc3NMaXN0LmFkZCgnZXh0ZW5kJykgLDApO1xyXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY291cnNlVGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJvdHRvbUFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBib3R0b21BcnJvdy5zcmMgPSBhcnJvdztcclxuICAgIGJvdHRvbUFycm93LmlkID0gJ2Fycm93LWJvdHRvbSc7XHJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChib3R0b21BcnJvdyk7XHJcbiAgICBcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVJdGVtcy5jbGFzc05hbWUgPSAnbWVudS1pdGVtcyc7XHJcbiAgICBcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICAgIFxyXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsQnJlYWtmYXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1RydWZmbGUgRWdncyBCZW5lZGljdCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDIyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQb2FjaGVkIGVnZ3Mgb24gdG9hc3RlZCBhcnRpc2FuYWwgYnJpb2NoZSwgdG9wcGVkIHdpdGggaG9sbGFuZGFpc2UgaW5mdXNlZCB3aXRoIGJsYWNrIHRydWZmbGUgZXNzZW5jZS4nLFxyXG4gICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdDcm9pc3NhbnQgQ3JvcXVlLU1vbnNpZXVyJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMTYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJyBBIGZsYWt5IGJ1dHRlciBjcm9pc3NhbnQgbGF5ZXJlZCB3aXRoIHRoaW5seSBzbGljZWQgcHJvc2NpdXR0bywgR3J1ecOocmUgY2hlZXNlLCBhbmQgYsOpY2hhbWVsIHNhdWNlLCB0b2FzdGVkIHRvIGdvbGRlbiBwZXJmZWN0aW9uLicsXHJcbiAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0NoYW1wYWduZS1pbmZ1c2VkIEZydWl0IFBhcmZhaXQnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxOCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBjb21iaW5hdGlvbiBvZiBzZWFzb25hbCBmcnVpdHMsIG9yZ2FuaWMgR3JlZWsgeW9ndXJ0LCBhbmQgdG9hc3RlZCBhbG1vbmQgZ3Jhbm9sYSwgZHJpenpsZWQgd2l0aCBjaGFtcGFnbmUgcmVkdWN0aW9uLicsXHJcbiAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1Ntb2tlZCBTYWxtb24gTG94IFBsYXR0ZXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQyNCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSG91c2UtY3VyZWQgYW5kIHNtb2tlZCBzYWxtb24gc2VydmVkIHdpdGggYW4gYXJyYXkgb2YgYWNjb21wYW5pbWVudHMsIGluY2x1ZGluZyBjYXBlcnMsIHJlZCBvbmlvbiwgZGlsbCBjcmVhbSBjaGVlc2UsIGFuZCBmcmVzaCBiYWdlbHMuJyxcclxuICAgIFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBpdGVtOiAnRnJlbmNoIHByZXNzIGNvZmZlZScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JvYnVzdCwgZnVsbC1ib2RpZWQgYnJldyBidXJzdGluZyB3aXRoIHJpY2gsIGZsYXZvcmZ1bCBub3Rlcy4nXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgaW5pdGlhbEJyZWFrZmFzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NOYW1lID0gJ21lbnUtaXRlbSc7XHJcbiAgICBcclxuICAgICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9ICdpdGVtJztcclxuICAgICAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gaXRlbS5pdGVtO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpdGVtRGl2KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHByaWNlKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgXHJcbiAgICB9KTtcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKG1lbnUpOyAgICBcclxufSIsImltcG9ydCBicmVha2Zhc3RJbWcgZnJvbSAnLi4vc3JjL2JyZWFrZmFzdC5qcGcnXHJcbmltcG9ydCBsdW5jaEltZyBmcm9tICcuLi9zcmMvbHVuY2guanBnJ1xyXG5pbXBvcnQgZGlubmVySW1nIGZyb20gJy4uL3NyYy9kaW5uZXIuanBnJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW1vZGUnKTtcclxuXHJcbiAgICBjb25zdCBpbmplY3RDb3Vyc2UgPSAoaXRlbSkgPT57XHJcbiAgICAgICAgLy9IaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciB2aXN1YWwgZWZmZWN0XHJcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICAgICAgaGVyb1RleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoMCwwLDAsMSlgO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHVuZGVybGluZSBlZmZlY3QuIFRlbXBvcmFyaWx5IGhpZGUgdGhlIHRleHRcclxuICAgICAgICBjb25zdCBjb3Vyc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291cnNlJyk7XHJcbiAgICAgICAgY291cnNlLmNsYXNzTGlzdC5yZW1vdmUoJ2V4dGVuZCcpO1xyXG4gICAgICAgIGNvdXJzZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgaW1hZ2Ugb2JqZWN0XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBpbWFnZS5zcmMgPSBgLi4vc3JjLyR7aXRlbS5nZXRDb3Vyc2VOYW1lKCl9LmpwZ2A7XHJcbiAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0Q291cnNlTmFtZSgpKXtcclxuICAgICAgICAgICAgY2FzZSAnQnJlYWtmYXN0JzpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGJyZWFrZmFzdEltZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdMdW5jaCc6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBsdW5jaEltZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdEaW5uZXInOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZGlubmVySW1nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHBhcnNpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlLnNyYyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyAvLyBBZGQgc2V0VGltZW91dCBzdWNoIHRoYXQgZWZmZWN0cyBjYW4gYWN0dWFsbHkgcGxheSBvdXRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7aW1hZ2Uuc3JjfVwiKWA7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTEwJSc7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjNzIGVhc2UnO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICAgICAgfSwgMTA1MCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgY291cnNlLnRleHRDb250ZW50ID0gaXRlbS5nZXRDb3Vyc2VOYW1lKCk7XHJcbiAgICAgICAgICAgIGNvdXJzZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBjb3Vyc2UuY2xhc3NMaXN0LmFkZCgnZXh0ZW5kJyk7XHJcbiAgICAgICAgICAgIGhlcm9UZXh0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2JhKDAsMCwwLDAuMylgO1xyXG4gICAgICAgIH0sIDEzMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUnO1xyXG4gICAgICAgIH0sIDE0NTApO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpXTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGl0ZW0uZ2V0Q291cnNlSXRlbXMoKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVySXRlbSA9IG1lbnVJdGVtc1tpXS5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJQcmljZSA9IG1lbnVJdGVtc1tpXS5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG1lbnVJdGVtc1tpXS5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRlckl0ZW0udGV4dENvbnRlbnQgPSBpdGVtc1tpXS5pdGVtO1xyXG4gICAgICAgICAgICBoZWFkZXJQcmljZS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLnByaWNlO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZXMgPSBbXTtcclxuICAgIGNvbnN0IGNvdXJzZSA9IChjb3Vyc2VOYW1lKSA9PntcclxuICAgICAgICBjb25zdCBjb3Vyc2VJdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFkZENvdXJzZUl0ZW0gPSAoaXRlbSwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PntcclxuICAgICAgICAgICAgY291cnNlSXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhZGRFeGlzdGluZ0NvdXJzZSA9IChtZW51KSA9PntcclxuICAgICAgICAgICAgbWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY291cnNlSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZ2V0Q291cnNlSXRlbXMgPSAoKSA9PiBjb3Vyc2VJdGVtcztcclxuICAgICAgICBjb25zdCBnZXRDb3Vyc2VOYW1lID0gKCkgPT4gY291cnNlTmFtZTtcclxuICAgICAgICByZXR1cm4ge2dldENvdXJzZUl0ZW1zLCBnZXRDb3Vyc2VOYW1lLCBhZGRDb3Vyc2VJdGVtLCBhZGRFeGlzdGluZ0NvdXJzZX1cclxuXHJcbiAgICB9OyBcclxuXHJcblxyXG4gICAgbGV0IGN1cnJlbnQgPSAwO1xyXG4gICAgY29uc3QgY291cnNlTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3Vyc2UnKS50ZXh0Q29udGVudDtcclxuICAgIGlmKGNvdXJzZU5hbWVEaXYgPT09ICdMdW5jaCcpIGN1cnJlbnQgPSAxO1xyXG4gICAgZWxzZSBpZihjb3Vyc2VOYW1lRGl2ID09PSAnRGlubmVyJykgY3VycmVudCA9IDI7XHJcblxyXG5cclxuICAgIGNvbnN0IGx1bmNoID0gY291cnNlKFwiTHVuY2hcIik7XHJcbiAgICAvLyBQdWxsZWQgZnJvbSBhbiBlYXJsaWVyIHRlc3RcclxuICAgIGx1bmNoLmFkZEV4aXN0aW5nQ291cnNlKFt7XHJcbiAgICAgICAgaXRlbTogJ1NlYXJlZCBTZWEgU2NhbGxvcCBSaXNvdHRvJyxcclxuICAgICAgICBwcmljZTogJyQzMicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0bHkgc2VhcmVkIHNlYSBzY2FsbG9wcyBzZXJ2ZWQgYXRvcCBhIGJlZCBvZiBjcmVhbXkgc2FmZnJvbi1pbmZ1c2VkIHJpc290dG8sIGdhcm5pc2hlZCB3aXRoIG1pY3JvZ3JlZW5zLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbTogJ1RydWZmbGUtaW5mdXNlZCBNdXNocm9vbSBRdWljaGUnLFxyXG4gICAgICAgIHByaWNlOiAnJDI2JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVsaWNhdGUgcXVpY2hlIGZpbGxlZCB3aXRoIGEgbWVkbGV5IG9mIHRydWZmbGUtaW5mdXNlZCBtdXNocm9vbXMsIGFydGlzYW5hbCBjaGVlc2UsIGFuZCBmcmVzaCBoZXJicywgYWNjb21wYW5pZWQgYnkgYSBzaWRlIHNhbGFkLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbTogJ1RydWZmbGVkIEJlZWYgQnVyZ2VyJyxcclxuICAgICAgICBwcmljZTogJyQyOCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGdvdXJtZXQgYmVlZiBidXJnZXIgZWxldmF0ZWQgd2l0aCB0cnVmZmxlLWluZnVzZWQgbWF5bywgY2FyYW1lbGl6ZWQgc2hhbGxvdHMsIGFuZCBhZ2VkIGNoZWRkYXIgb24gYSBicmlvY2hlIGJ1biwgc2VydmVkIHdpdGggaG91c2UtY3V0IGZyaWVzLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbTogJ1JvYXN0ZWQgVG9tYXRvIEJhc2lsIEVsZWdhbmNlJyxcclxuICAgICAgICBwcmljZTogJyQxMicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGhhcm1vbmlvdXMgYmxlbmQgb2YgZmlyZS1yb2FzdGVkIHRvbWF0b2VzIGFuZCBmcmVzaCBiYXNpbCwgZWxldmF0ZWQgd2l0aCBhIGRyaXp6bGUgb2YgYWdlZCBiYWxzYW1pYyBhbmQgYSBkb2xsb3Agb2YgY3LDqG1lIGZyYcOuY2hlLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbTogJ0N1Y3VtYmVyIE1pbnQgRml6eicsXHJcbiAgICAgICAgcHJpY2U6ICckMTEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnIE11ZGRsZWQgY3VjdW1iZXIgYW5kIG1pbnQgY29tYmluZWQgd2l0aCBlbGRlcmZsb3dlciB0b25pYyBhbmQgYSBzcGxhc2ggb2YgbGltZSBqdWljZSwgc2VydmVkIG92ZXIgaWNlLidcclxuICAgIH1dKTtcclxuXHJcbiAgICBjb25zdCBicmVha2Zhc3QgPSBjb3Vyc2UoXCJCcmVha2Zhc3RcIik7XHJcbiAgICBicmVha2Zhc3QuYWRkRXhpc3RpbmdDb3Vyc2UoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1RydWZmbGUgRWdncyBCZW5lZGljdCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDIyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQb2FjaGVkIGVnZ3Mgb24gdG9hc3RlZCBhcnRpc2FuYWwgYnJpb2NoZSwgdG9wcGVkIHdpdGggaG9sbGFuZGFpc2UgaW5mdXNlZCB3aXRoIGJsYWNrIHRydWZmbGUgZXNzZW5jZS4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0Nyb2lzc2FudCBDcm9xdWUtTW9uc2lldXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxNicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIEEgZmxha3kgYnV0dGVyIGNyb2lzc2FudCBsYXllcmVkIHdpdGggdGhpbmx5IHNsaWNlZCBwcm9zY2l1dHRvLCBHcnV5w6hyZSBjaGVlc2UsIGFuZCBiw6ljaGFtZWwgc2F1Y2UsIHRvYXN0ZWQgdG8gZ29sZGVuIHBlcmZlY3Rpb24uJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdDaGFtcGFnbmUtaW5mdXNlZCBGcnVpdCBQYXJmYWl0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMTgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVsaWNhdGUgY29tYmluYXRpb24gb2Ygc2Vhc29uYWwgZnJ1aXRzLCBvcmdhbmljIEdyZWVrIHlvZ3VydCwgYW5kIHRvYXN0ZWQgYWxtb25kIGdyYW5vbGEsIGRyaXp6bGVkIHdpdGggY2hhbXBhZ25lIHJlZHVjdGlvbi4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1Ntb2tlZCBTYWxtb24gTG94IFBsYXR0ZXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQyNCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSG91c2UtY3VyZWQgYW5kIHNtb2tlZCBzYWxtb24gc2VydmVkIHdpdGggYW4gYXJyYXkgb2YgYWNjb21wYW5pbWVudHMsIGluY2x1ZGluZyBjYXBlcnMsIHJlZCBvbmlvbiwgZGlsbCBjcmVhbSBjaGVlc2UsIGFuZCBmcmVzaCBiYWdlbHMuJyxcclxuXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGl0ZW06ICdGcmVuY2ggcHJlc3MgY29mZmVlJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckNycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUm9idXN0LCBmdWxsLWJvZGllZCBicmV3IGJ1cnN0aW5nIHdpdGggcmljaCwgZmxhdm9yZnVsIG5vdGVzLidcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBkaW5uZXIgPSBjb3Vyc2UoXCJEaW5uZXJcIik7XHJcbiAgICBkaW5uZXIuYWRkRXhpc3RpbmdDb3Vyc2UoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1NlYXJlZCBGb2llIEdyYXMnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQzMicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWNhZGVudCBkZWxpY2FjeSwgc2VhcmVkIHRvIHBlcmZlY3Rpb24gYW5kIGFjY29tcGFuaWVkIGJ5IGEgdHJ1ZmZsZS1pbmZ1c2VkIHJlZHVjdGlvbiBhbmQgYnJpb2NoZS4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0ZpbGV0IE1pZ25vbicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDQ0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcmltZSBiZWVmIGZpbGV0IGdyaWxsZWQgdG8geW91ciBwcmVmZXJlbmNlLCBzZXJ2ZWQgd2l0aCBhIHJlZCB3aW5lIHJlZHVjdGlvbiBhbmQgdHJ1ZmZsZS1zY2VudGVkIG1hc2hlZCBwb3RhdG9lcy4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1Bhbi1TZWFyZWQgU2VhIEJhc3MnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQzOCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBmaWxsZXQgb2Ygc2VhIGJhc3MsIHBhbi1zZWFyZWQgYW5kIHNlcnZlZCBhdG9wIHNhZmZyb24taW5mdXNlZCByaXNvdHRvIHdpdGggbGVtb24gYmV1cnJlIGJsYW5jLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnVHJ1ZmZsZS1pbmZ1c2VkIFJpc290dG8nLFxyXG4gICAgICAgICAgICBwcmljZTogJyQzMicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBsdXh1cmlvdXMgYmxlbmQgb2YgQXJib3JpbyByaWNlLCB0cnVmZmxlIG9pbCwgYW5kIHBhcm1lc2FuIGNoZWVzZSwgZ2FybmlzaGVkIHdpdGggc2hhdmVkIHRydWZmbGUuJyxcclxuXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGl0ZW06ICdDaXRydXMgU3BhcmtsZXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxMCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIEEgdmlicmFudCBibGVuZCBvZiBmcmVzaCBjaXRydXMganVpY2VzIGFuZCBzb2RhIHdhdGVyLCBnYXJuaXNoZWQgd2l0aCBhIHR3aXN0IG9mIGxlbW9uIGFuZCBhIHNwcmlnIG9mIHRoeW1lLidcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuXHJcbiAgICBjb3Vyc2VzLnB1c2goYnJlYWtmYXN0KTtcclxuICAgIGNvdXJzZXMucHVzaChsdW5jaCk7XHJcbiAgICBjb3Vyc2VzLnB1c2goZGlubmVyKTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1sZWZ0Jyk7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93LXJpZ2h0Jyk7XHJcblxyXG4gICAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKT0+e1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ID09PSAwID8gY291cnNlcy5sZW5ndGggLSAxIDogY3VycmVudCAtIDE7XHJcbiAgICAgICAgaW5qZWN0Q291cnNlKGNvdXJzZXNbY3VycmVudF0pOyBcclxuICAgIH0pXHJcblxyXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpPT57XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPT09IGNvdXJzZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50ICsgMTtcclxuICAgICAgICBpbmplY3RDb3Vyc2UoY291cnNlc1tjdXJyZW50XSk7IFxyXG4gICAgfSlcclxuXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGdlbmVyYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIlxyXG5pbXBvcnQgaW5pdGlhbE1lbnVMb2FkIGZyb20gXCIuL2luaXRpYWxMb2FkLmpzXCJcclxuaW1wb3J0IG1lbnVjb250cm9sbGVyIGZyb20gXCIuL21lbnVjb250cm9sbGVyLmpzXCJcclxuaW1wb3J0IGdlbmVyYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCJcclxuXHJcbmNvbnN0IHJlc2V0Q2xpY2tzID0gKCkgPT57XHJcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICBpZihhY3RpdmUgIT09IG51bGwgKSBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyb0JnLmNsYXNzTGlzdC5hZGQoJ2hlcm8tYmcnKTtcclxuXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyby10ZXh0Jyk7XHJcbiAgICAvLyBDb2RlIGZvciBoZWFkZXJcclxuICAgIC8vTm90ZSB0aGF0IHRoaXMgd2lsbCBiZSBtZXJnZWQgaW50byB0aGUgbWFpbiBjb250ZW50IGxhdGVyXHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoJ2hlYWQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxvZ28uaHJlZiA9ICcjaG9tZSc7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnZW5jaGFudMOpJztcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgcmVzZXRDbGlja3MoKTtcclxuICAgICAgICBnZW5lcmF0ZUhvbWUoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIGxpIGNvbnRlbnRzXHJcbiAgICBjb25zdCBhYm91dExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjb250YWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhYm91dEhyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCBtZW51SHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RIcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgXHJcbiAgICAvLyBMaW5rc1xyXG4gICAgYWJvdXRIcmVmLmhyZWYgPSAnI2Fib3V0JztcclxuICAgIG1lbnVIcmVmLmhyZWYgPSAnI21lbnUnO1xyXG4gICAgY29udGFjdEhyZWYuaHJlZiA9ICcjY29udGFjdCc7XHJcbiAgICBcclxuICAgIC8vIFRleHQgQ29udGVudFxyXG4gICAgYWJvdXRIcmVmLnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuICAgIG1lbnVIcmVmLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgY29udGFjdEhyZWYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBcclxuICAgIGFib3V0SHJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgcmVzZXRDbGlja3MoKTtcclxuICAgICAgICBhYm91dEhyZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVBYm91dCgpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51SHJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgcmVzZXRDbGlja3MoKTtcclxuICAgICAgICBtZW51SHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpbml0aWFsTWVudUxvYWQoKTtcclxuICAgICAgICBtZW51Y29udHJvbGxlcigpO1xyXG4gICAgfSk7XHJcbiAgICBjb250YWN0SHJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgcmVzZXRDbGlja3MoKTtcclxuICAgICAgICBjb250YWN0SHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBnZW5lcmF0ZUNvbnRhY3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBjb250ZW50IHRvIGxpXHJcbiAgICBhYm91dExpLmFwcGVuZENoaWxkKGFib3V0SHJlZik7XHJcbiAgICBtZW51TGkuYXBwZW5kQ2hpbGQobWVudUhyZWYpO1xyXG4gICAgY29udGFjdExpLmFwcGVuZENoaWxkKGNvbnRhY3RIcmVmKTtcclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIGluZGl2aWR1YWwgbGkgdG8gdWxcclxuICAgIHVsLmFwcGVuZENoaWxkKGFib3V0TGkpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudUxpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RMaSk7XHJcbiAgICBcclxuICAgIC8vIGFwcGVuZCB1bCB0byBuYXZcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBcclxuICAgIC8vYXBwZW5kIG5hdmlnYXRpb24gYmFyXHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgaGVyb0JnLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb0JnKTtcclxuICAgICAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG4gICAgdGFibGVzLmZvckVhY2godGFibGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRhYmxlLmdldEF0dHJpYnV0ZSgnc3RhdHVzJyk7XHJcbiAgICAgICAgY29uc3QgdGFibGVJZCA9IHBhcnNlSW50KHRhYmxlLmdldEF0dHJpYnV0ZSgndGFibGVJZCcpKTtcclxuICAgICAgICB0YWJsZS5hZGRFdmVudExpc3RlbmVyKGBtb3VzZWVudGVyYCwgKCk9PntcclxuICAgICAgICAgICAgaWYoc3RhdHVzID09PSAncmVzZXJ2ZWQnKSB0ZXh0LnRleHRDb250ZW50ID0gYFRhYmxlICR7dGFibGVJZH0gaXMgcmVzZXJ2ZWRgXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YWJsZS5hZGRFdmVudExpc3RlbmVyKGBtb3VzZWxlYXZlYCwgKCk9PntcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9ICdIb3ZlciBvdmVyIGVhY2ggdGFibGUgZm9yIG1vcmUuJztcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIGhlcm9CZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwJztcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9ucycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlbnRyYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW50cmFuY2UuY2xhc3NOYW1lID0gJ2VudHJhbmNlJztcclxuICAgIGVudHJhbmNlLnRleHRDb250ZW50ICA9ICdSZWNlcHRpb24nO1xyXG4gICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKGVudHJhbmNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdIb3ZlciBvdmVyIGVhY2ggdGFibGUgZm9yIG1vcmUuJztcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xyXG4gICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgXHJcbiAgICBBcnJheS5mcm9tKG5ldyBBcnJheSg1KSkuZm9yRWFjaCgoZHVtbXlFbGVtZW50LCBpbmRleCkgPT57XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YWJsZS5jbGFzc05hbWUgPSAndGFibGUnO1xyXG4gICAgICAgIHRhYmxlLnNldEF0dHJpYnV0ZSgndGFibGVJZCcsaW5kZXgrMSk7XHJcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKCdzdGF0dXMnLCdyZXNlcnZlZCcpO1xyXG4gICAgICAgIHJlc2VydmF0aW9ucy5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKTtcclxuICAgIFxyXG4gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4vY291bnRyeXNpZGUuanBnJ1xyXG5pbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGdlbmVyYXRlTmF2QmFyIGZyb20gXCIuL25hdmJhci5qc1wiXHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiXHJcblxyXG4vKlxyXG4gICAgV2l0aCB0aGUgbmF2YmFyLCB0aGUgY29udGVudCBzaG91bGQgYmUgXHJcbiAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cclxuICAgICAgICA8dGl0bGU+ZW5jaGFudMOpPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3NyYy9zdHlsZS5jc3NcIj5cclxuICAgIDwvaGVhZD5cclxuICAgIDxib2R5PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWJnIGFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibG9nb1wiPmVuY2hhbnTDqTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNtZW51XCI+TWVudTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBbUmVzdCBvZiBjb2RlIGhlcmVdXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAqL1xyXG5cclxuZ2VuZXJhdGVOYXZCYXIoKTtcclxuZ2VuZXJhdGVIb21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9