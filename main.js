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
  padding-bottom: 36px;
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
.body p {
  font-size: 2.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lora\";\r\n    src: url(\"../src/Lora-VariableFont_wght.ttf\") format(\"truetype\"),\r\n    url(\"../src/Lora-Italic-VariableFont_wght.ttf\") format(\"truetype\");\r\n\r\n}\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../src/Montserrat-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\nbody, html{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.hero-bg{\r\n    transition: background-size 0.3s ease;\r\n    display: flex;\r\n    height: 100vh;\r\n    background: url(\"./countryside.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n    //for when the device is minimized\r\n    //Unfortunately, some of the animations won't play properly\r\n    //This is due to the background size having to be manipulated\r\n    .hero-bg{\r\n        background-size: cover !important;\r\n    }\r\n}\r\n\r\n.about{\r\n    background:none;\r\n    background-color: #000;\r\n}\r\n.hero-text{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n}\r\n.navbar{\r\n    nav{\r\n        color: white;\r\n        font-family: \"Lora\";\r\n    }\r\n    li{\r\n        display: inline-block;\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        position: relative;\r\n        font-size: 2.2rem;\r\n        width: 2.2rem;\r\n    }\r\n    li{\r\n        &:nth-child(2), &:nth-child(3){\r\n            a::before{\r\n                content:(' /');\r\n            }\r\n        }\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        &::after{\r\n            content: '';\r\n            transition: 0.5s ease-out;\r\n            position: absolute;\r\n            display: block;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            background: white;\r\n            transform: scaleX(0);\r\n            border: solid white 1px;\r\n            transform-origin: left;\r\n        }  \r\n        &:hover::after{\r\n            transform: scaleX(1);\r\n        }\r\n        &.active{\r\n            &::after{\r\n                transform: scaleX(1);\r\n            }\r\n        }\r\n    }\r\n\r\n    li{\r\n        &:nth-child(2) , &:nth-child(3){\r\n            a::after{\r\n                left: 11%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.hero-text{\r\n    transition: background-color 0.2s ease;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n}\r\n.head{\r\n    top: 10px;\r\n    position: sticky;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.head{\r\n    margin: 15px 25px;\r\n}\r\n.logo{\r\n    font-family: \"Montserrat\";\r\n    font-size: 3rem;\r\n    color: white;\r\n    &:hover{\r\n        opacity: 0.7;\r\n    }\r\n}\r\n.footer{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    padding-bottom: 36px;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    padding-left: 25px;\r\n}\r\n.greet{\r\n    font-size: 3.5rem;\r\n    margin-bottom: 10px;\r\n}\r\n#reservation-button{\r\n    display: flex;\r\n    align-items: center;\r\n    background: none;\r\n    border: none;\r\n    outline: 1.5px #fff solid;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    width: 240px;\r\n    height: 55px;\r\n    margin-left: 5px;\r\n    transition: 0.3s ease-in-out;\r\n    \r\n    h1{\r\n        font-size: 1.9rem;\r\n        font-weight: 400;\r\n        margin-left: 10px;\r\n        margin-right: 8px;\r\n    }\r\n    svg{\r\n        display: block;\r\n        margin-top: 8px;\r\n        fill: white;\r\n    }\r\n}\r\n#reservation-button:hover{\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    svg{\r\n        fill:black;\r\n    }\r\n}\r\n.body{\r\n    color: white;\r\n    padding: 25px;\r\n    font-family: \"Montserrat\";\r\n    h1,h2{\r\n        font-weight: 300;\r\n    }\r\n    p{\r\n        font-size: 2.5rem;\r\n    }\r\n}\r\nh1{\r\n    font-size: 2.5rem;\r\n}\r\np{\r\n    font-size: 2.5rem;\r\n    width: 92%;\r\n}\r\n.menu{\r\n    transform: 0.3s ease;\r\n    height: 80%;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n}\r\n.menu-info{\r\n    height: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10%;\r\n}\r\n.menu-info h1{\r\n    font-weight: 400;\r\n    font-size: 70px;\r\n    position: relative;\r\n    transition: all 0.5s ease-out;\r\n    &::after{\r\n        content: '';\r\n        transition: transform 0.5s ease-out;\r\n        position: absolute;\r\n        display: block;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: white;\r\n        transform: scaleX(0);\r\n        // Seems to be a fix for chrome browsers\r\n        border: 1px solid white;\r\n        transform-origin: left;\r\n    }  \r\n    &.extend{\r\n        &::after{\r\n            \r\n            transform: scaleX(1);\r\n        }\r\n    }\r\n}\r\n#arrow-left, #arrow-right{\r\n    display: block;\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        cursor: pointer;\r\n        opacity: 0.7;\r\n        transform: translateX(5px);\r\n    }\r\n}\r\n#arrow-left{\r\n   position: relative;\r\n   rotate: 180deg;\r\n}\r\n#arrow-right{\r\n    margin-right: 5px;\r\n}\r\n.test{\r\n    background-color: #000;\r\n}\r\n.menu-items{\r\n    height: 110vh;\r\n    width: 100%;\r\n    background-color: #000;\r\n    font-family: \"Lora\";\r\n    padding: 125px 25px;\r\n    font-size: 2rem;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n     .menu-items{\r\n        height: 125vh !important;\r\n     }\r\n     \r\n}\r\n.placeholder{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#arrow-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n    rotate: 90deg;\r\n    animation: 1.5s linear 0s infinite alternate hover;\r\n}\r\n@keyframes hover {\r\n    from{\r\n        transform: translateX(5px);\r\n    }\r\n    to{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n.menu-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.menu-header{\r\n    border-bottom: solid white 3px;\r\n}\r\n.menu-item{\r\n    border-bottom: solid white 1px;\r\n    header{\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n.description{\r\n    font-size: 1.25rem;\r\n    color: rgb(215, 204, 204);\r\n    padding-left: 3px;\r\n}\r\n.contact-mode{\r\n    background: #000;\r\n}\r\n.contact{\r\n    padding: 33px 23px;\r\n    color: #fff;\r\n    font-family: \"montserrat\";\r\n    font-size: 1rem;\r\n    :nth-child(2), :nth-child(n+4){\r\n        padding-top: 20px;\r\n    }\r\n}\r\n.reservation-mode{\r\n    background: #000;\r\n}\r\n.reservations{\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"text text text\"\r\n    \"t1 entrance t3\"\r\n    \"t2 entrance t3\"\r\n    \"t4 t5 t5\";\r\n    \r\n    margin-top: 10px;\r\n    grid-template-rows: max-content repeat(3, 1fr);\r\n    grid-template-columns: 15% 20% 15%;\r\n    column-gap: 1.5rem;\r\n    row-gap: 0.5rem;\r\n    justify-content: center;\r\n    width: 80%;\r\n    height: 80%;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n.reservations{\r\n    >:nth-child(n+3){\r\n        border: solid #fff 1px;\r\n        &:hover{\r\n            cursor: pointer;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.table[tableId=\"1\"]{\r\n    grid-area: t1;\r\n}\r\n.table[tableId=\"2\"]{\r\n    grid-area: t2;\r\n}\r\n.table[tableId=\"3\"]{\r\n    grid-area: t3;\r\n}\r\n.table[tableId=\"4\"]{\r\n    grid-area: t4;\r\n}\r\n.reservations .entrance{\r\n    grid-area: entrance;\r\n    border-left: solid white 1px;\r\n    border-right: solid white 1px;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n.table[tableId=\"5\"]{\r\n    grid-area: t5;\r\n}\r\n.table[tableId=\"6\"]{\r\n    grid-area: t6;\r\n}\r\n.text{\r\n    grid-area: text;\r\n    margin-bottom: 2rem;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBJQUFvRDtBQUNoRyw0Q0FBNEMsd0pBQTJEO0FBQ3ZHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsNEJBQTRCLG1DQUFtQztBQUMvRztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTnFDO0FBQ0M7QUFDUTtBQUNFO0FBQ047QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRLDhEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3RkEsNkJBQWUsc0NBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFNBQVM7QUFDM0UsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2JBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNMO0FBQ0c7QUFDVjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBYztBQUNkLG9EQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVjb250cm9sbGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmF0aW9uY2hlY2tlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvTG9yYS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvTG9yYS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb3VudHJ5c2lkZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keSwgaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZXJvLWJnIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuaGVyby1iZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG59XG4uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm5hdmJhciBuYXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbn1cbi5uYXZiYXIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZiYXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIHdpZHRoOiAyLjJyZW07XG59XG4ubmF2YmFyIGxpOm50aC1jaGlsZCgyKSBhOjpiZWZvcmUsIC5uYXZiYXIgbGk6bnRoLWNoaWxkKDMpIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIC9cIjtcbn1cblxuLm5hdmJhciBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ubmF2YmFyIGE6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG4ubmF2YmFyIGEuYWN0aXZlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLm5hdmJhciBsaTpudGgtY2hpbGQoMikgYTo6YWZ0ZXIsIC5uYXZiYXIgbGk6bnRoLWNoaWxkKDMpIGE6OmFmdGVyIHtcbiAgbGVmdDogMTElO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVhZCB7XG4gIHRvcDogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbjogMTVweCAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5ncmVldCB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jcmVzZXJ2YXRpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAxLjVweCAjZmZmIHNvbGlkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uIGgxIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiNyZXNlcnZhdGlvbi1idXR0b24gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZmlsbDogd2hpdGU7XG59XG5cbiNyZXNlcnZhdGlvbi1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IGJsYWNrO1xufVxuXG4uYm9keSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuLmJvZHkgaDEsIC5ib2R5IGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ib2R5IHAge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB3aWR0aDogOTIlO1xufVxuXG4ubWVudSB7XG4gIHRyYW5zZm9ybTogMC4zcyBlYXNlO1xuICBoZWlnaHQ6IDgwJTtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51LWluZm8ge1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5tZW51LWluZm8gaDEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG4ubWVudS1pbmZvIGgxOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuLm1lbnUtaW5mbyBoMS5leHRlbmQ6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbiNhcnJvdy1sZWZ0LCAjYXJyb3ctcmlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuI2Fycm93LWxlZnQ6aG92ZXIsICNhcnJvdy1yaWdodDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbn1cblxuI2Fycm93LWxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJvdGF0ZTogMTgwZGVnO1xufVxuXG4jYXJyb3ctcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4ubWVudS1pdGVtcyB7XG4gIGhlaWdodDogMTEwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIHBhZGRpbmc6IDEyNXB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLm1lbnUtaXRlbXMge1xuICAgIGhlaWdodDogMTI1dmggIWltcG9ydGFudDtcbiAgfVxufVxuLnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhcnJvdy1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcm90YXRlOiA5MGRlZztcbiAgYW5pbWF0aW9uOiAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGUgaG92ZXI7XG59XG5cbkBrZXlmcmFtZXMgaG92ZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4ubWVudS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZW51LWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDNweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcbn1cbi5tZW51LWl0ZW0gaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogcmdiKDIxNSwgMjA0LCAyMDQpO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuLmNvbnRhY3QtbW9kZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5jb250YWN0IHtcbiAgcGFkZGluZzogMzNweCAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY29udGFjdCA6bnRoLWNoaWxkKDIpLCAuY29udGFjdCA6bnRoLWNoaWxkKG4rNCkge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnJlc2VydmF0aW9uLW1vZGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ucmVzZXJ2YXRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0ZXh0IHRleHQgdGV4dFwiIFwidDEgZW50cmFuY2UgdDNcIiBcInQyIGVudHJhbmNlIHQzXCIgXCJ0NCB0NSB0NVwiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCUgMTUlO1xuICBjb2x1bW4tZ2FwOiAxLjVyZW07XG4gIHJvdy1nYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucmVzZXJ2YXRpb25zID4gOm50aC1jaGlsZChuKzMpIHtcbiAgYm9yZGVyOiBzb2xpZCAjZmZmIDFweDtcbn1cbi5yZXNlcnZhdGlvbnMgPiA6bnRoLWNoaWxkKG4rMyk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiMVwiXSB7XG4gIGdyaWQtYXJlYTogdDE7XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiMlwiXSB7XG4gIGdyaWQtYXJlYTogdDI7XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiM1wiXSB7XG4gIGdyaWQtYXJlYTogdDM7XG59XG5cbi50YWJsZVt0YWJsZUlkPVwiNFwiXSB7XG4gIGdyaWQtYXJlYTogdDQ7XG59XG5cbi5yZXNlcnZhdGlvbnMgLmVudHJhbmNlIHtcbiAgZ3JpZC1hcmVhOiBlbnRyYW5jZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCI1XCJdIHtcbiAgZ3JpZC1hcmVhOiB0NTtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCI2XCJdIHtcbiAgZ3JpZC1hcmVhOiB0Njtcbn1cblxuLnRleHQge1xuICBncmlkLWFyZWE6IHRleHQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJIQUFBO0FBQ0o7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsK0RBQUE7QUFESjtBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0kscUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFJSTtJQUNJLGlDQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxxQkFBQTtBQUFSOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFEUjtBQUtZO0VBQ0ksYUFBQTtBQUhoQjs7QUFVUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBUFo7QUFTUTtFQUNJLG9CQUFBO0FBUFo7QUFVWTtFQUNJLG9CQUFBO0FBUmhCO0FBZVk7RUFDSSxTQUFBO0FBYmhCOztBQW1CQTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBaEJKOztBQWtCQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FB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QkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQU9KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vc3JjL0xvcmEtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLFxcclxcbiAgICB1cmwoXFxcIi4uL3NyYy9Mb3JhLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuXFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vc3JjL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5ib2R5LCBodG1se1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaGVyby1iZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2NvdW50cnlzaWRlLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgICAvL2ZvciB3aGVuIHRoZSBkZXZpY2UgaXMgbWluaW1pemVkXFxyXFxuICAgIC8vVW5mb3J0dW5hdGVseSwgc29tZSBvZiB0aGUgYW5pbWF0aW9ucyB3b24ndCBwbGF5IHByb3Blcmx5XFxyXFxuICAgIC8vVGhpcyBpcyBkdWUgdG8gdGhlIGJhY2tncm91bmQgc2l6ZSBoYXZpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcXHJcXG4gICAgLmhlcm8tYmd7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0e1xcclxcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbi5oZXJvLXRleHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5uYXZiYXJ7XFxyXFxuICAgIG5hdntcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIH1cXHJcXG4gICAgbGl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgYXtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDIuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBsaXtcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDIpLCAmOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBhOjpiZWZvcmV7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6KCcgLycpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubmF2YmFye1xcclxcbiAgICBhe1xcclxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gICAgICAgIH0gIFxcclxcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXJ7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmLmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICAmOjphZnRlcntcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpe1xcclxcbiAgICAgICAgJjpudGgtY2hpbGQoMikgLCAmOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBhOjphZnRlcntcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMTElO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVyby10ZXh0e1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbi5oZWFke1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWR7XFxyXFxuICAgIG1hcmdpbjogMTVweCAyNXB4O1xcclxcbn1cXHJcXG4ubG9nb3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcbi5ncmVldHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbiNyZXNlcnZhdGlvbi1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogMS41cHggI2ZmZiBzb2xpZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgXFxyXFxuICAgIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbiNyZXNlcnZhdGlvbi1idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgc3Zne1xcclxcbiAgICAgICAgZmlsbDpibGFjaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYm9keXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBoMSxoMntcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIH1cXHJcXG4gICAgcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxucHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiA5MiU7XFxyXFxufVxcclxcbi5tZW51e1xcclxcbiAgICB0cmFuc2Zvcm06IDAuM3MgZWFzZTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1lbnUtaW5mb3tcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcclxcbn1cXHJcXG4ubWVudS1pbmZvIGgxe1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDcwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgICAgIC8vIFNlZW1zIHRvIGJlIGEgZml4IGZvciBjaHJvbWUgYnJvd3NlcnNcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gICAgfSAgXFxyXFxuICAgICYuZXh0ZW5ke1xcclxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI2Fycm93LWxlZnQsICNhcnJvdy1yaWdodHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbiNhcnJvdy1sZWZ0e1xcclxcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICByb3RhdGU6IDE4MGRlZztcXHJcXG59XFxyXFxuI2Fycm93LXJpZ2h0e1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLnRlc3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbi5tZW51LWl0ZW1ze1xcclxcbiAgICBoZWlnaHQ6IDExMHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgcGFkZGluZzogMTI1cHggMjVweDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgICAgLm1lbnUtaXRlbXN7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEyNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICB9XFxyXFxuICAgICBcXHJcXG59XFxyXFxuLnBsYWNlaG9sZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2Fycm93LWJvdHRvbXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJvdGF0ZTogOTBkZWc7XFxyXFxuICAgIGFuaW1hdGlvbjogMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGhvdmVyO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tZW51LWhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLm1lbnUtaGVhZGVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAzcHg7XFxyXFxufVxcclxcbi5tZW51LWl0ZW17XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDIxNSwgMjA0LCAyMDQpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXHJcXG59XFxyXFxuLmNvbnRhY3QtbW9kZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG59XFxyXFxuLmNvbnRhY3R7XFxyXFxuICAgIHBhZGRpbmc6IDMzcHggMjNweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgOm50aC1jaGlsZCgyKSwgOm50aC1jaGlsZChuKzQpe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnJlc2VydmF0aW9uLW1vZGV7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcbi5yZXNlcnZhdGlvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwidGV4dCB0ZXh0IHRleHRcXFwiXFxyXFxuICAgIFxcXCJ0MSBlbnRyYW5jZSB0M1xcXCJcXHJcXG4gICAgXFxcInQyIGVudHJhbmNlIHQzXFxcIlxcclxcbiAgICBcXFwidDQgdDUgdDVcXFwiO1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgMjAlIDE1JTtcXHJcXG4gICAgY29sdW1uLWdhcDogMS41cmVtO1xcclxcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9uc3tcXHJcXG4gICAgPjpudGgtY2hpbGQobiszKXtcXHJcXG4gICAgICAgIGJvcmRlcjogc29saWQgI2ZmZiAxcHg7XFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCIxXFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDE7XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCIyXFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDI7XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCIzXFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDM7XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCI0XFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDQ7XFxyXFxufVxcclxcbi5yZXNlcnZhdGlvbnMgLmVudHJhbmNle1xcclxcbiAgICBncmlkLWFyZWE6IGVudHJhbmNlO1xcclxcbiAgICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiNVxcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQ1O1xcclxcbn1cXHJcXG4udGFibGVbdGFibGVJZD1cXFwiNlxcXCJde1xcclxcbiAgICBncmlkLWFyZWE6IHQ2O1xcclxcbn1cXHJcXG4udGV4dHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0ZXh0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIFxyXG4gICAgLy8gSWYgdGhlIHNlY29uZCBjaGlsZCAodGhhdCBpc24ndCB0aGUgbmF2YmFyKSBpcyB0aGUgYWJvdXQgYm9keSwgdGhlbiB3ZSBkb250XHJcbiAgICAvLyByZW1vdmUgYW55dGhpbmdcclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdLmNsYXNzTmFtZSA9PT0gJ2JvZHknKSByZXR1cm4gO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwMCc7XHJcbiAgICBoZXJvQmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcclxuICAgIFxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSAnZW5jaGFudMOpJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMi50ZXh0Q29udGVudCA9ICdhaG4tc2hhaG4tVEFZLyBEZWxpZ2h0ZWQnO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBcclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDEudGV4dENvbnRlbnQgPSAnQXQgZW5jaGFudMOpLCB3ZSBpbnZpdGUgeW91IHRvIGVtYmFyayBvbiBhIGpvdXJuZXkgdGhhdCB0cmFuc2NlbmRzIHRoZSBvcmRpbmFyeSBhbmQgZW1icmFjZXMgdGhlIGV4dHJhb3JkaW5hcnkuJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocDEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAyLnRleHRDb250ZW50ID0gJ1NpbmNlIG91ciBpbmNlcHRpb24gaW4gMjAxNSwgd2UgaGF2ZSB0YWtlbiBwcmlkZSBpbiBjcmFmdGluZyBhIGRpbmluZyBzYW5jdHVhcnkgdGhhdCB1bml0ZXMgdGhlIGFydGlzdHJ5IG9mIGF3YXJkLXdpbm5pbmcgZ2FzdHJvbm9teSB3aXRoIHRoZSBjb21mb3J0IG9mIGNhc3VhbCBpbmR1bGdlbmNlLic7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHAyKTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBoZXJvQmcuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgaWYoaGVyb1RleHQuY2hpbGRyZW5bMV0gPT09ICdjb250YWN0JykgcmV0dXJuIDtcclxuICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBSZXNldCB0aGUgYmFja2dyb3VuZFxyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIGhlcm9CZy5jbGFzc05hbWUgPSAnaGVyby1iZyc7XHJcbiAgICBoZXJvQmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmQgPSAnYmxhY2snO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0JztcclxuICAgIFxyXG4gICAgQXJyYXkuZnJvbShuZXcgQXJyYXkoNSkpLmZvckVhY2goKCkgPT4gY29udGFjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpKTtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdENoaWxkcmVuID0gWy4uLmNvbnRhY3QuY2hpbGRyZW5dO1xyXG4gICAgXHJcbiAgICBjb250YWN0Q2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgV2UgdmFsdWUgeW91ciBpbnF1aXJpZXMsIGZlZWRiYWNrLCBhbmQgdGhlIG9wcG9ydHVuaXR5IHRvIGNvbm5lY3QuIFdoZXRoZXIgeW91J3JlIHNlZWtpbmcgdG8gbWFrZSBhIHJlc2VydmF0aW9uLCBzaGFyZSB5b3VyIGRpbmluZyBleHBlcmllbmNlLCBvciBzaW1wbHkgd2lzaCB0byBsZWFybiBtb3JlIGFib3V0IGVuY2hhbnTDqSwgd2UncmUgaGVyZSB0byBhc3Npc3QgeW91LiBQbGVhc2UgZmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyB0aHJvdWdoIHRoZSBjaGFubmVscyBiZWxvdzpgO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IDIzMyBCdXR0b253b29kIFN0Lic7XHJcbiAgICBjb250YWN0Q2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSAnTmV3IFlvcmssIE5ZIDEwMDMzJztcclxuICAgIGNvbnRhY3RDaGlsZHJlblszXS50ZXh0Q29udGVudCA9ICAnRW1haWw6IGhlbGxvQGVuY2hhbnRlLmNvbSc7XHJcbiAgICBjb250YWN0Q2hpbGRyZW5bNF0udGV4dENvbnRlbnQgPSAnUGhvbmU6ICgxOTMpMzY4LTIxMjUnXHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iLCJpbXBvcnQgZGVmYXVsdEJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvdW50cnlzaWRlLmpwZydcclxuaW1wb3J0IGJyZWFrZmFzdFRlc3QgZnJvbSAnLi4vc3JjL2JyZWFrZmFzdC5qcGcnXHJcbmltcG9ydCBsb2FkUmVzZXJ2YXRpb25zIGZyb20gXCIuL3Jlc2VydmF0aW9ucy5qc1wiXHJcbmltcG9ydCByZXNlcnZhdGlvbkNoZWNrZXIgZnJvbSAnLi9yZXNlcnZhdGlvbmNoZWNrZXIuanMnO1xyXG5cclxuLy9qdXN0IGEgcHJlbG9hZFxyXG4obmV3IEltYWdlKCkuc3JjKSA9IGJyZWFrZmFzdFRlc3Q7XHJcbihuZXcgSW1hZ2UoKS5zcmMpID0gZGVmYXVsdEJhY2tncm91bmQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgaGVyb0JnLmNsYXNzTmFtZSA9ICdoZXJvLWJnJztcclxuICAgIGhlcm9CZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2RlZmF1bHRCYWNrZ3JvdW5kfSlgO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcblxyXG5cclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdLmNsYXNzTmFtZSA9PT0gJ2Zvb3RlcicpIHJldHVybjtcclxuICAgICAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XHJcbiAgICBcclxuICAgIGNvbnN0IGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmVldC5jbGFzc05hbWUgPSAnZ3JlZXQnO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgXHJcbiAgICBpZihob3VycyA+PSA1ICYmIGhvdXJzIDwgMTIpe1xyXG4gICAgICAgIGdyZWV0LnRleHRDb250ZW50ID0gJ0dvb2QgTW9ybmluZy4nO1xyXG4gICAgfWVsc2UgaWYoaG91cnMgPj0gMTIgJiYgaG91cnMgPCAxNyl7XHJcbiAgICAgICAgZ3JlZXQudGV4dENvbnRlbnQgPSAnR29vZCBBZnRlcm5vb24uJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdyZWV0LnRleHRDb250ZW50ID0gJ0dvb2QgRXZlbmluZy4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ3JlZXQpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24uaWQgPSAncmVzZXJ2YXRpb24tYnV0dG9uJztcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCk9PntcclxuICAgICAgICBsb2FkUmVzZXJ2YXRpb25zKCk7XHJcbiAgICAgICAgcmVzZXJ2YXRpb25DaGVja2VyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNlcnZhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzZXJ2YXRpb25UZXh0LnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgICBcclxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsJzI1Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCcxOCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsJzAgMCAyNSAxOCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCdub25lJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNYXhZTWF4IG1lZXQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCdNMjUgOUwxMCAwLjMzOTc0NlYxNy42NjAzTDI1IDlaTTAgMTAuNUgxMS41VjcuNUgwVjEwLjVaJyk7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcbiAgICBcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uVGV4dCk7XHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5hcHBlbmRDaGlsZChzdmcpO1xyXG4gICAgXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn0iLCJpbXBvcnQgYXJyb3cgZnJvbSAnLi4vc3JjL21lbnVhcnJvdy5zdmcnXHJcbmltcG9ydCBicmVha2Zhc3RJbWcgZnJvbSAnLi4vc3JjL2JyZWFrZmFzdC5qcGcnXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGlmKGhlcm9UZXh0LmNoaWxkcmVuWzFdLmNsYXNzTmFtZSA9PT0gJ21lbnUnKSByZXR1cm47IFxyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBbLi4uaGVyb0JnLmNsYXNzTGlzdF0uZmlsdGVyKGhlcm9DbGFzcyA9PiBoZXJvQ2xhc3MgIT09ICdoZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcuY2xhc3NMaXN0LmFkZCgnbWVudS1tb2RlJyk7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHticmVha2Zhc3RJbWd9KWA7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYGNlbnRlciBjZW50ZXJgO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMTAlJztcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7aGVyb0JnLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUnfSwzNTApO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSAnbWVudSc7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZCgnbWVudS1pbmZvJyk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmlnaHRBcnJvdz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICByaWdodEFycm93LnNyYyA9IGFycm93O1xyXG4gICAgcmlnaHRBcnJvdy5pZCA9ICdhcnJvdy1yaWdodCc7XHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcclxuICAgIFxyXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZWZ0QXJyb3cuc3JjID0gYXJyb3c7XHJcbiAgICBsZWZ0QXJyb3cuaWQgPSAnYXJyb3ctbGVmdCc7XHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgY291cnNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb3Vyc2VUZXh0LmNsYXNzTmFtZSA9ICdjb3Vyc2UnO1xyXG4gICAgY291cnNlVGV4dC50ZXh0Q29udGVudCA9ICdCcmVha2Zhc3QnO1xyXG4gICAgc2V0VGltZW91dCgoKT0+Y291cnNlVGV4dC5jbGFzc0xpc3QuYWRkKCdleHRlbmQnKSAsMCk7XHJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChjb3Vyc2VUZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3QgYm90dG9tQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGJvdHRvbUFycm93LnNyYyA9IGFycm93O1xyXG4gICAgYm90dG9tQXJyb3cuaWQgPSAnYXJyb3ctYm90dG9tJztcclxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGJvdHRvbUFycm93KTtcclxuICAgIFxyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xyXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQocmlnaHRBcnJvdyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUl0ZW1zLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW1zJztcclxuICAgIFxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xyXG4gICAgXHJcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxCcmVha2Zhc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnVHJ1ZmZsZSBFZ2dzIEJlbmVkaWN0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvYWNoZWQgZWdncyBvbiB0b2FzdGVkIGFydGlzYW5hbCBicmlvY2hlLCB0b3BwZWQgd2l0aCBob2xsYW5kYWlzZSBpbmZ1c2VkIHdpdGggYmxhY2sgdHJ1ZmZsZSBlc3NlbmNlLicsXHJcbiAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0Nyb2lzc2FudCBDcm9xdWUtTW9uc2lldXInLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxNicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnIEEgZmxha3kgYnV0dGVyIGNyb2lzc2FudCBsYXllcmVkIHdpdGggdGhpbmx5IHNsaWNlZCBwcm9zY2l1dHRvLCBHcnV5w6hyZSBjaGVlc2UsIGFuZCBiw6ljaGFtZWwgc2F1Y2UsIHRvYXN0ZWQgdG8gZ29sZGVuIHBlcmZlY3Rpb24uJyxcclxuICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ2hhbXBhZ25lLWluZnVzZWQgRnJ1aXQgUGFyZmFpdCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE4JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIGNvbWJpbmF0aW9uIG9mIHNlYXNvbmFsIGZydWl0cywgb3JnYW5pYyBHcmVlayB5b2d1cnQsIGFuZCB0b2FzdGVkIGFsbW9uZCBncmFub2xhLCBkcml6emxlZCB3aXRoIGNoYW1wYWduZSByZWR1Y3Rpb24uJyxcclxuICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU21va2VkIFNhbG1vbiBMb3ggUGxhdHRlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDI0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIb3VzZS1jdXJlZCBhbmQgc21va2VkIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhbiBhcnJheSBvZiBhY2NvbXBhbmltZW50cywgaW5jbHVkaW5nIGNhcGVycywgcmVkIG9uaW9uLCBkaWxsIGNyZWFtIGNoZWVzZSwgYW5kIGZyZXNoIGJhZ2Vscy4nLFxyXG4gICAgXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGl0ZW06ICdGcmVuY2ggcHJlc3MgY29mZmVlJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckNycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUm9idXN0LCBmdWxsLWJvZGllZCBicmV3IGJ1cnN0aW5nIHdpdGggcmljaCwgZmxhdm9yZnVsIG5vdGVzLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBpbml0aWFsQnJlYWtmYXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SXRlbS5jbGFzc05hbWUgPSAnbWVudS1pdGVtJztcclxuICAgIFxyXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xyXG4gICAgICAgIGl0ZW1EaXYudGV4dENvbnRlbnQgPSBpdGVtLml0ZW07XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBcclxuICAgIH0pO1xyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQobWVudSk7ICAgIFxyXG59IiwiaW1wb3J0IGJyZWFrZmFzdEltZyBmcm9tICcuLi9zcmMvYnJlYWtmYXN0LmpwZydcclxuaW1wb3J0IGx1bmNoSW1nIGZyb20gJy4uL3NyYy9sdW5jaC5qcGcnXHJcbmltcG9ydCBkaW5uZXJJbWcgZnJvbSAnLi4vc3JjL2Rpbm5lci5qcGcnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbW9kZScpO1xyXG5cclxuICAgIGNvbnN0IGluamVjdENvdXJzZSA9IChpdGVtKSA9PntcclxuICAgICAgICAvL0hpZGUgdGhlIGJhY2tncm91bmQgZm9yIHZpc3VhbCBlZmZlY3RcclxuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgICAgICBoZXJvVGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgwLDAsMCwxKWA7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdW5kZXJsaW5lIGVmZmVjdC4gVGVtcG9yYXJpbHkgaGlkZSB0aGUgdGV4dFxyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3Vyc2UnKTtcclxuICAgICAgICBjb3Vyc2UuY2xhc3NMaXN0LnJlbW92ZSgnZXh0ZW5kJyk7XHJcbiAgICAgICAgY291cnNlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbWFnZSBvYmplY3RcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIC8vIGltYWdlLnNyYyA9IGAuLi9zcmMvJHtpdGVtLmdldENvdXJzZU5hbWUoKX0uanBnYDtcclxuICAgICAgICBzd2l0Y2goaXRlbS5nZXRDb3Vyc2VOYW1lKCkpe1xyXG4gICAgICAgICAgICBjYXNlICdCcmVha2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYnJlYWtmYXN0SW1nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0x1bmNoJzpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGx1bmNoSW1nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0Rpbm5lcic6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBkaW5uZXJJbWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgcGFyc2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2Uuc3JjKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIC8vIEFkZCBzZXRUaW1lb3V0IHN1Y2ggdGhhdCBlZmZlY3RzIGNhbiBhY3R1YWxseSBwbGF5IG91dFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiJHtpbWFnZS5zcmN9XCIpYDtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMTAlJztcclxuICAgICAgICAgICAgbWVudS5zdHlsZS50cmFuc2l0aW9uID0gJzAuM3MgZWFzZSc7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgICAgICB9LCAxMDUwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBjb3Vyc2UudGV4dENvbnRlbnQgPSBpdGVtLmdldENvdXJzZU5hbWUoKTtcclxuICAgICAgICAgICAgY291cnNlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIGNvdXJzZS5jbGFzc0xpc3QuYWRkKCdleHRlbmQnKTtcclxuICAgICAgICAgICAgaGVyb1RleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoMCwwLDAsMC4zKWA7XHJcbiAgICAgICAgfSwgMTMwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSc7XHJcbiAgICAgICAgfSwgMTQ1MCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyldO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaXRlbS5nZXRDb3Vyc2VJdGVtcygpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJJdGVtID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclByaWNlID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbWVudUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVySXRlbS50ZXh0Q29udGVudCA9IGl0ZW1zW2ldLml0ZW07XHJcbiAgICAgICAgICAgIGhlYWRlclByaWNlLnRleHRDb250ZW50ID0gaXRlbXNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbXNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IFtdO1xyXG4gICAgY29uc3QgY291cnNlID0gKGNvdXJzZU5hbWUpID0+e1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZUl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3QgYWRkQ291cnNlSXRlbSA9IChpdGVtLCBwcmljZSwgZGVzY3JpcHRpb24pID0+e1xyXG4gICAgICAgICAgICBjb3Vyc2VJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGFkZEV4aXN0aW5nQ291cnNlID0gKG1lbnUpID0+e1xyXG4gICAgICAgICAgICBtZW51LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBnZXRDb3Vyc2VJdGVtcyA9ICgpID0+IGNvdXJzZUl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGdldENvdXJzZU5hbWUgPSAoKSA9PiBjb3Vyc2VOYW1lO1xyXG4gICAgICAgIHJldHVybiB7Z2V0Q291cnNlSXRlbXMsIGdldENvdXJzZU5hbWUsIGFkZENvdXJzZUl0ZW0sIGFkZEV4aXN0aW5nQ291cnNlfVxyXG5cclxuICAgIH07IFxyXG5cclxuXHJcbiAgICBsZXQgY3VycmVudCA9IDA7XHJcbiAgICBjb25zdCBjb3Vyc2VOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdXJzZScpLnRleHRDb250ZW50O1xyXG4gICAgaWYoY291cnNlTmFtZURpdiA9PT0gJ0x1bmNoJykgY3VycmVudCA9IDE7XHJcbiAgICBlbHNlIGlmKGNvdXJzZU5hbWVEaXYgPT09ICdEaW5uZXInKSBjdXJyZW50ID0gMjtcclxuXHJcblxyXG4gICAgY29uc3QgbHVuY2ggPSBjb3Vyc2UoXCJMdW5jaFwiKTtcclxuICAgIC8vIFB1bGxlZCBmcm9tIGFuIGVhcmxpZXIgdGVzdFxyXG4gICAgbHVuY2guYWRkRXhpc3RpbmdDb3Vyc2UoW3tcclxuICAgICAgICBpdGVtOiAnU2VhcmVkIFNlYSBTY2FsbG9wIFJpc290dG8nLFxyXG4gICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmZlY3RseSBzZWFyZWQgc2VhIHNjYWxsb3BzIHNlcnZlZCBhdG9wIGEgYmVkIG9mIGNyZWFteSBzYWZmcm9uLWluZnVzZWQgcmlzb3R0bywgZ2FybmlzaGVkIHdpdGggbWljcm9ncmVlbnMuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnVHJ1ZmZsZS1pbmZ1c2VkIE11c2hyb29tIFF1aWNoZScsXHJcbiAgICAgICAgcHJpY2U6ICckMjYnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBxdWljaGUgZmlsbGVkIHdpdGggYSBtZWRsZXkgb2YgdHJ1ZmZsZS1pbmZ1c2VkIG11c2hyb29tcywgYXJ0aXNhbmFsIGNoZWVzZSwgYW5kIGZyZXNoIGhlcmJzLCBhY2NvbXBhbmllZCBieSBhIHNpZGUgc2FsYWQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnVHJ1ZmZsZWQgQmVlZiBCdXJnZXInLFxyXG4gICAgICAgIHByaWNlOiAnJDI4JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZ291cm1ldCBiZWVmIGJ1cmdlciBlbGV2YXRlZCB3aXRoIHRydWZmbGUtaW5mdXNlZCBtYXlvLCBjYXJhbWVsaXplZCBzaGFsbG90cywgYW5kIGFnZWQgY2hlZGRhciBvbiBhIGJyaW9jaGUgYnVuLCBzZXJ2ZWQgd2l0aCBob3VzZS1jdXQgZnJpZXMuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnUm9hc3RlZCBUb21hdG8gQmFzaWwgRWxlZ2FuY2UnLFxyXG4gICAgICAgIHByaWNlOiAnJDEyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGFybW9uaW91cyBibGVuZCBvZiBmaXJlLXJvYXN0ZWQgdG9tYXRvZXMgYW5kIGZyZXNoIGJhc2lsLCBlbGV2YXRlZCB3aXRoIGEgZHJpenpsZSBvZiBhZ2VkIGJhbHNhbWljIGFuZCBhIGRvbGxvcCBvZiBjcsOobWUgZnJhw65jaGUuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpdGVtOiAnQ3VjdW1iZXIgTWludCBGaXp6JyxcclxuICAgICAgICBwcmljZTogJyQxMScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcgTXVkZGxlZCBjdWN1bWJlciBhbmQgbWludCBjb21iaW5lZCB3aXRoIGVsZGVyZmxvd2VyIHRvbmljIGFuZCBhIHNwbGFzaCBvZiBsaW1lIGp1aWNlLCBzZXJ2ZWQgb3ZlciBpY2UuJ1xyXG4gICAgfV0pO1xyXG5cclxuICAgIGNvbnN0IGJyZWFrZmFzdCA9IGNvdXJzZShcIkJyZWFrZmFzdFwiKTtcclxuICAgIGJyZWFrZmFzdC5hZGRFeGlzdGluZ0NvdXJzZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnVHJ1ZmZsZSBFZ2dzIEJlbmVkaWN0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvYWNoZWQgZWdncyBvbiB0b2FzdGVkIGFydGlzYW5hbCBicmlvY2hlLCB0b3BwZWQgd2l0aCBob2xsYW5kYWlzZSBpbmZ1c2VkIHdpdGggYmxhY2sgdHJ1ZmZsZSBlc3NlbmNlLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ3JvaXNzYW50IENyb3F1ZS1Nb25zaWV1cicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE2JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcgQSBmbGFreSBidXR0ZXIgY3JvaXNzYW50IGxheWVyZWQgd2l0aCB0aGlubHkgc2xpY2VkIHByb3NjaXV0dG8sIEdydXnDqHJlIGNoZWVzZSwgYW5kIGLDqWNoYW1lbCBzYXVjZSwgdG9hc3RlZCB0byBnb2xkZW4gcGVyZmVjdGlvbi4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ0NoYW1wYWduZS1pbmZ1c2VkIEZydWl0IFBhcmZhaXQnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQxOCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBkZWxpY2F0ZSBjb21iaW5hdGlvbiBvZiBzZWFzb25hbCBmcnVpdHMsIG9yZ2FuaWMgR3JlZWsgeW9ndXJ0LCBhbmQgdG9hc3RlZCBhbG1vbmQgZ3Jhbm9sYSwgZHJpenpsZWQgd2l0aCBjaGFtcGFnbmUgcmVkdWN0aW9uLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU21va2VkIFNhbG1vbiBMb3ggUGxhdHRlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDI0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIb3VzZS1jdXJlZCBhbmQgc21va2VkIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhbiBhcnJheSBvZiBhY2NvbXBhbmltZW50cywgaW5jbHVkaW5nIGNhcGVycywgcmVkIG9uaW9uLCBkaWxsIGNyZWFtIGNoZWVzZSwgYW5kIGZyZXNoIGJhZ2Vscy4nLFxyXG5cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaXRlbTogJ0ZyZW5jaCBwcmVzcyBjb2ZmZWUnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ3JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSb2J1c3QsIGZ1bGwtYm9kaWVkIGJyZXcgYnVyc3Rpbmcgd2l0aCByaWNoLCBmbGF2b3JmdWwgbm90ZXMuJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IGRpbm5lciA9IGNvdXJzZShcIkRpbm5lclwiKTtcclxuICAgIGRpbm5lci5hZGRFeGlzdGluZ0NvdXJzZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnU2VhcmVkIEZvaWUgR3JhcycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlY2FkZW50IGRlbGljYWN5LCBzZWFyZWQgdG8gcGVyZmVjdGlvbiBhbmQgYWNjb21wYW5pZWQgYnkgYSB0cnVmZmxlLWluZnVzZWQgcmVkdWN0aW9uIGFuZCBicmlvY2hlLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnRmlsZXQgTWlnbm9uJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckNDQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ByaW1lIGJlZWYgZmlsZXQgZ3JpbGxlZCB0byB5b3VyIHByZWZlcmVuY2UsIHNlcnZlZCB3aXRoIGEgcmVkIHdpbmUgcmVkdWN0aW9uIGFuZCB0cnVmZmxlLXNjZW50ZWQgbWFzaGVkIHBvdGF0b2VzLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnUGFuLVNlYXJlZCBTZWEgQmFzcycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDM4JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIGZpbGxldCBvZiBzZWEgYmFzcywgcGFuLXNlYXJlZCBhbmQgc2VydmVkIGF0b3Agc2FmZnJvbi1pbmZ1c2VkIHJpc290dG8gd2l0aCBsZW1vbiBiZXVycmUgYmxhbmMuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdUcnVmZmxlLWluZnVzZWQgUmlzb3R0bycsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDMyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGx1eHVyaW91cyBibGVuZCBvZiBBcmJvcmlvIHJpY2UsIHRydWZmbGUgb2lsLCBhbmQgcGFybWVzYW4gY2hlZXNlLCBnYXJuaXNoZWQgd2l0aCBzaGF2ZWQgdHJ1ZmZsZS4nLFxyXG5cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaXRlbTogJ0NpdHJ1cyBTcGFya2xlcicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDEwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcgQSB2aWJyYW50IGJsZW5kIG9mIGZyZXNoIGNpdHJ1cyBqdWljZXMgYW5kIHNvZGEgd2F0ZXIsIGdhcm5pc2hlZCB3aXRoIGEgdHdpc3Qgb2YgbGVtb24gYW5kIGEgc3ByaWcgb2YgdGh5bWUuJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuICAgIGNvdXJzZXMucHVzaChicmVha2Zhc3QpO1xyXG4gICAgY291cnNlcy5wdXNoKGx1bmNoKTtcclxuICAgIGNvdXJzZXMucHVzaChkaW5uZXIpO1xyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93LWxlZnQnKTtcclxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3ctcmlnaHQnKTtcclxuXHJcbiAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpPT57XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPT09IDAgPyBjb3Vyc2VzLmxlbmd0aCAtIDEgOiBjdXJyZW50IC0gMTtcclxuICAgICAgICBpbmplY3RDb3Vyc2UoY291cnNlc1tjdXJyZW50XSk7IFxyXG4gICAgfSlcclxuXHJcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCk9PntcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudCA9PT0gY291cnNlcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnQgKyAxO1xyXG4gICAgICAgIGluamVjdENvdXJzZShjb3Vyc2VzW2N1cnJlbnRdKTsgXHJcbiAgICB9KVxyXG5cclxufSIsImltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiXHJcbmltcG9ydCBpbml0aWFsTWVudUxvYWQgZnJvbSBcIi4vaW5pdGlhbExvYWQuanNcIlxyXG5pbXBvcnQgbWVudWNvbnRyb2xsZXIgZnJvbSBcIi4vbWVudWNvbnRyb2xsZXIuanNcIlxyXG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIlxyXG5cclxuY29uc3QgcmVzZXRDbGlja3MgPSAoKSA9PntcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICAgIGlmKGFjdGl2ZSAhPT0gbnVsbCApIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZXJvQmcuY2xhc3NMaXN0LmFkZCgnaGVyby1iZycpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcclxuICAgIC8vIENvZGUgZm9yIGhlYWRlclxyXG4gICAgLy9Ob3RlIHRoYXQgdGhpcyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBtYWluIGNvbnRlbnQgbGF0ZXJcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWQuY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbG9nby5ocmVmID0gJyNob21lJztcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdlbmNoYW50w6knO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGdlbmVyYXRlSG9tZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgbGkgY29udGVudHNcclxuICAgIGNvbnN0IGFib3V0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0SHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IG1lbnVIcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgY29udGFjdEhyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBcclxuICAgIC8vIExpbmtzXHJcbiAgICBhYm91dEhyZWYuaHJlZiA9ICcjYWJvdXQnO1xyXG4gICAgbWVudUhyZWYuaHJlZiA9ICcjbWVudSc7XHJcbiAgICBjb250YWN0SHJlZi5ocmVmID0gJyNjb250YWN0JztcclxuICAgIFxyXG4gICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICBhYm91dEhyZWYudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xyXG4gICAgbWVudUhyZWYudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBjb250YWN0SHJlZi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICAgIFxyXG4gICAgYWJvdXRIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGFib3V0SHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBnZW5lcmF0ZUFib3V0KCk7XHJcbiAgICB9KTtcclxuICAgIG1lbnVIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIG1lbnVIcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGluaXRpYWxNZW51TG9hZCgpO1xyXG4gICAgICAgIG1lbnVjb250cm9sbGVyKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RIcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICByZXNldENsaWNrcygpO1xyXG4gICAgICAgIGNvbnRhY3RIcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdlbmVyYXRlQ29udGFjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGNvbnRlbnQgdG8gbGlcclxuICAgIGFib3V0TGkuYXBwZW5kQ2hpbGQoYWJvdXRIcmVmKTtcclxuICAgIG1lbnVMaS5hcHBlbmRDaGlsZChtZW51SHJlZik7XHJcbiAgICBjb250YWN0TGkuYXBwZW5kQ2hpbGQoY29udGFjdEhyZWYpO1xyXG4gICAgXHJcbiAgICAvLyBBcHBlbmQgaW5kaXZpZHVhbCBsaSB0byB1bFxyXG4gICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXRMaSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGkpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpKTtcclxuICAgIFxyXG4gICAgLy8gYXBwZW5kIHVsIHRvIG5hdlxyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIFxyXG4gICAgLy9hcHBlbmQgbmF2aWdhdGlvbiBiYXJcclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBoZXJvQmcuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvQmcpO1xyXG4gICAgICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZScpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XHJcbiAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGFibGUuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKTtcclxuICAgICAgICBjb25zdCB0YWJsZUlkID0gcGFyc2VJbnQodGFibGUuZ2V0QXR0cmlidXRlKCd0YWJsZUlkJykpO1xyXG4gICAgICAgIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlZW50ZXJgLCAoKT0+e1xyXG4gICAgICAgICAgICBpZihzdGF0dXMgPT09ICdyZXNlcnZlZCcpIHRleHQudGV4dENvbnRlbnQgPSBgVGFibGUgJHt0YWJsZUlkfSBpcyByZXNlcnZlZGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlbGVhdmVgLCAoKT0+e1xyXG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0hvdmVyIG92ZXIgZWFjaCB0YWJsZSBmb3IgbW9yZS4nO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAnO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNlcnZhdGlvbnMuY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb25zJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGVudHJhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbnRyYW5jZS5jbGFzc05hbWUgPSAnZW50cmFuY2UnO1xyXG4gICAgZW50cmFuY2UudGV4dENvbnRlbnQgID0gJ1JlY2VwdGlvbic7XHJcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQoZW50cmFuY2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0hvdmVyIG92ZXIgZWFjaCB0YWJsZSBmb3IgbW9yZS4nO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XHJcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBcclxuICAgIEFycmF5LmZyb20obmV3IEFycmF5KDUpKS5mb3JFYWNoKChkdW1teUVsZW1lbnQsIGluZGV4KSA9PntcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9ICd0YWJsZSc7XHJcbiAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKCd0YWJsZUlkJyxpbmRleCsxKTtcclxuICAgICAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsJ3Jlc2VydmVkJyk7XHJcbiAgICAgICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnMpO1xyXG4gICAgXHJcbiAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcclxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9jb3VudHJ5c2lkZS5qcGcnXHJcbmltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVOYXZCYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCJcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCJcclxuXHJcbi8qXHJcbiAgICBXaXRoIHRoZSBuYXZiYXIsIHRoZSBjb250ZW50IHNob3VsZCBiZSBcclxuICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgIDx0aXRsZT5lbmNoYW50w6k8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vc3JjL3N0eWxlLmNzc1wiPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tYmcgYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJsb2dvXCI+ZW5jaGFudMOpPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI21lbnVcIj5NZW51PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFtSZXN0IG9mIGNvZGUgaGVyZV1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICovXHJcblxyXG5nZW5lcmF0ZU5hdkJhcigpO1xyXG5nZW5lcmF0ZUhvbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=