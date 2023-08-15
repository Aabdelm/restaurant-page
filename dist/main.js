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
  font-size: clamp(2.5rem, -12.5588rem + 18.8235vw, 4rem);
}
.body h2 {
  font-size: clamp(1.5rem, -9.0412rem + 13.1765vw, 2.2rem);
}
.body h1 {
  font-size: clamp(2.5rem, -12.5588rem + 18.8235vw, 3.7rem);
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
.menu-items header {
  font-size: clamp(2rem, -28.1176rem + 37.6471vw, 3.7rem);
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
  font-size: clamp(1.25rem, -10.0441rem + 14.1176vw, 2rem);
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lora\";\r\n    src: url(\"../src/Lora-VariableFont_wght.ttf\") format(\"truetype\"),\r\n    url(\"../src/Lora-Italic-VariableFont_wght.ttf\") format(\"truetype\");\r\n\r\n}\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../src/Montserrat-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\nbody, html{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.hero-bg{\r\n    transition: background-size 0.3s ease;\r\n    display: flex;\r\n    height: 100vh;\r\n    background: url(\"./countryside.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n    //for when the device is minimized\r\n    //Unfortunately, some of the animations won't play properly\r\n    //This is due to the background size having to be manipulated\r\n    .hero-bg{\r\n        background-size: cover !important;\r\n    }\r\n}\r\n\r\n.about{\r\n    background:none;\r\n    background-color: #000;\r\n}\r\n.hero-text{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n}\r\n.navbar{\r\n    nav{\r\n        color: white;\r\n        font-family: \"Lora\";\r\n    }\r\n    li{\r\n        display: inline-block;\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        position: relative;\r\n        font-size: 2.2rem;\r\n        width: 2.2rem;\r\n    }\r\n    li{\r\n        &:nth-child(2), &:nth-child(3){\r\n            a::before{\r\n                content:(' /');\r\n            }\r\n        }\r\n    }\r\n}\r\n.navbar{\r\n    a{\r\n        &::after{\r\n            content: '';\r\n            transition: 0.5s ease-out;\r\n            position: absolute;\r\n            display: block;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            background: white;\r\n            transform: scaleX(0);\r\n            border: solid white 1px;\r\n            transform-origin: left;\r\n        }  \r\n        &:hover::after{\r\n            transform: scaleX(1);\r\n        }\r\n        &.active{\r\n            &::after{\r\n                transform: scaleX(1);\r\n            }\r\n        }\r\n    }\r\n\r\n    li{\r\n        &:nth-child(2) , &:nth-child(3){\r\n            a::after{\r\n                left: 11%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.hero-text{\r\n    transition: background-color 0.2s ease;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n}\r\n.head{\r\n    top: 10px;\r\n    position: sticky;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.head{\r\n    margin: 15px 25px;\r\n}\r\n.logo{\r\n    font-family: \"Montserrat\";\r\n    font-size: 3rem;\r\n    color: white;\r\n    &:hover{\r\n        opacity: 0.7;\r\n    }\r\n}\r\n.footer{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    padding-bottom: 36px;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    padding-left: 25px;\r\n}\r\n.greet{\r\n    font-size: 3.5rem;\r\n    margin-bottom: 10px;\r\n}\r\n#reservation-button{\r\n    display: flex;\r\n    align-items: center;\r\n    background: none;\r\n    border: none;\r\n    outline: 1.5px #fff solid;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n    width: 240px;\r\n    height: 55px;\r\n    margin-left: 5px;\r\n    transition: 0.3s ease-in-out;\r\n    \r\n    h1{\r\n        font-size: 1.9rem;\r\n        font-weight: 400;\r\n        margin-left: 10px;\r\n        margin-right: 8px;\r\n    }\r\n    svg{\r\n        display: block;\r\n        margin-top: 8px;\r\n        fill: white;\r\n    }\r\n}\r\n#reservation-button:hover{\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    svg{\r\n        fill:black;\r\n    }\r\n}\r\n.body{\r\n    color: white;\r\n    padding: 25px;\r\n    font-family: \"Montserrat\";\r\n    h1,h2{\r\n        font-weight: 300;\r\n    }\r\n    p{\r\n        font-size: clamp(2.5rem, -12.5588rem + 18.8235vw, 4rem);\r\n    }\r\n    h2{\r\n        font-size: clamp(1.5rem, -9.0412rem + 13.1765vw, 2.2rem);\r\n    }\r\n    h1{\r\n        font-size: clamp(2.5rem, -12.5588rem + 18.8235vw, 3.7rem);\r\n    }\r\n}\r\np{\r\n    \r\n    width: 92%;\r\n}\r\n.menu{\r\n    transform: 0.3s ease;\r\n    height: 80%;\r\n    font-family: \"Lora\";\r\n    color: white;\r\n}\r\n.menu-info{\r\n    height: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 10%;\r\n}\r\n.menu-info h1{\r\n    font-weight: 400;\r\n    font-size: 70px;\r\n    position: relative;\r\n    transition: all 0.5s ease-out;\r\n    &::after{\r\n        content: '';\r\n        transition: transform 0.5s ease-out;\r\n        position: absolute;\r\n        display: block;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: white;\r\n        transform: scaleX(0);\r\n        // Seems to be a fix for chrome browsers\r\n        border: 1px solid white;\r\n        transform-origin: left;\r\n    }  \r\n    &.extend{\r\n        &::after{\r\n            \r\n            transform: scaleX(1);\r\n        }\r\n    }\r\n}\r\n#arrow-left, #arrow-right{\r\n    display: block;\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    &:hover{\r\n        cursor: pointer;\r\n        opacity: 0.7;\r\n        transform: translateX(5px);\r\n    }\r\n}\r\n#arrow-left{\r\n   position: relative;\r\n   rotate: 180deg;\r\n}\r\n#arrow-right{\r\n    margin-right: 5px;\r\n}\r\n.test{\r\n    background-color: #000;\r\n}\r\n.menu-items{\r\n    height: 110vh;\r\n    width: 100%;\r\n    background-color: #000;\r\n    font-family: \"Lora\";\r\n    padding: 125px 25px;\r\n    font-size: 2rem;\r\n    header{\r\n        font-size: clamp(2rem, -28.1176rem + 37.6471vw, 3.7rem);\r\n    }\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n     .menu-items{\r\n        height: 125vh !important;\r\n     }\r\n     \r\n}\r\n.placeholder{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#arrow-bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n    rotate: 90deg;\r\n    animation: 1.5s linear 0s infinite alternate hover;\r\n}\r\n@keyframes hover {\r\n    from{\r\n        transform: translateX(5px);\r\n    }\r\n    to{\r\n        transform: translateX(0);\r\n    }\r\n}\r\n.menu-header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.menu-header{\r\n    border-bottom: solid white 3px;\r\n}\r\n.menu-item{\r\n    border-bottom: solid white 1px;\r\n    header{\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n.description{\r\n    font-size: clamp(1.25rem, -10.0441rem + 14.1176vw, 2rem);\r\n    color: rgb(215, 204, 204);\r\n    padding-left: 3px;\r\n}\r\n.contact-mode{\r\n    background: #000;\r\n}\r\n.contact{\r\n    padding: 33px 23px;\r\n    color: #fff;\r\n    font-family: \"montserrat\";\r\n    font-size: 1rem;\r\n    :nth-child(2), :nth-child(n+4){\r\n        padding-top: 20px;\r\n    }\r\n}\r\n.reservation-mode{\r\n    background: #000;\r\n}\r\n.reservations{\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"text text text\"\r\n    \"t1 entrance t3\"\r\n    \"t2 entrance t3\"\r\n    \"t4 t5 t5\";\r\n    \r\n    margin-top: 10px;\r\n    grid-template-rows: max-content repeat(3, 1fr);\r\n    grid-template-columns: 15% 20% 15%;\r\n    column-gap: 1.5rem;\r\n    row-gap: 0.5rem;\r\n    justify-content: center;\r\n    width: 80%;\r\n    height: 80%;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n.reservations{\r\n    >:nth-child(n+3){\r\n        border: solid #fff 1px;\r\n        &:hover{\r\n            cursor: pointer;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.table[tableId=\"1\"]{\r\n    grid-area: t1;\r\n}\r\n.table[tableId=\"2\"]{\r\n    grid-area: t2;\r\n}\r\n.table[tableId=\"3\"]{\r\n    grid-area: t3;\r\n}\r\n.table[tableId=\"4\"]{\r\n    grid-area: t4;\r\n}\r\n.reservations .entrance{\r\n    grid-area: entrance;\r\n    border-left: solid white 1px;\r\n    border-right: solid white 1px;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n.table[tableId=\"5\"]{\r\n    grid-area: t5;\r\n}\r\n.table[tableId=\"6\"]{\r\n    grid-area: t6;\r\n}\r\n.text{\r\n    grid-area: text;\r\n    margin-bottom: 2rem;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBJQUFvRDtBQUNoRyw0Q0FBNEMsd0pBQTJEO0FBQ3ZHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsNEJBQTRCLG1DQUFtQztBQUMvRztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxN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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7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dC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51Y29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNlcnZhdGlvbmNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0xvcmEtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0xvcmEtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vY291bnRyeXNpZGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJvZHksIGh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVyby1iZyB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmhlcm8tYmcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuLmFib3V0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5uYXZiYXIgbmF2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG59XG4ubmF2YmFyIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2YmFyIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB3aWR0aDogMi4ycmVtO1xufVxuLm5hdmJhciBsaTpudGgtY2hpbGQoMikgYTo6YmVmb3JlLCAubmF2YmFyIGxpOm50aC1jaGlsZCgzKSBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiAvXCI7XG59XG5cbi5uYXZiYXIgYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuLm5hdmJhciBhOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLm5hdmJhciBhLmFjdGl2ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cbi5uYXZiYXIgbGk6bnRoLWNoaWxkKDIpIGE6OmFmdGVyLCAubmF2YmFyIGxpOm50aC1jaGlsZCgzKSBhOjphZnRlciB7XG4gIGxlZnQ6IDExJTtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlYWQge1xuICB0b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWQge1xuICBtYXJnaW46IDE1cHggMjVweDtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uZ3JlZXQge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogMS41cHggI2ZmZiBzb2xpZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuI3Jlc2VydmF0aW9uLWJ1dHRvbiBoMSB7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4jcmVzZXJ2YXRpb24tYnV0dG9uIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jcmVzZXJ2YXRpb24tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlciBzdmcge1xuICBmaWxsOiBibGFjaztcbn1cblxuLmJvZHkge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5ib2R5IGgxLCAuYm9keSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYm9keSBwIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIC0xMi41NTg4cmVtICsgMTguODIzNXZ3LCA0cmVtKTtcbn1cbi5ib2R5IGgyIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIC05LjA0MTJyZW0gKyAxMy4xNzY1dncsIDIuMnJlbSk7XG59XG4uYm9keSBoMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi41cmVtLCAtMTIuNTU4OHJlbSArIDE4LjgyMzV2dywgMy43cmVtKTtcbn1cblxucCB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5tZW51IHtcbiAgdHJhbnNmb3JtOiAwLjNzIGVhc2U7XG4gIGhlaWdodDogODAlO1xuICBmb250LWZhbWlseTogXCJMb3JhXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnUtaW5mbyB7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLm1lbnUtaW5mbyBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5tZW51LWluZm8gaDE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ubWVudS1pbmZvIGgxLmV4dGVuZDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cblxuI2Fycm93LWxlZnQsICNhcnJvdy1yaWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4jYXJyb3ctbGVmdDpob3ZlciwgI2Fycm93LXJpZ2h0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuXG4jYXJyb3ctbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcm90YXRlOiAxODBkZWc7XG59XG5cbiNhcnJvdy1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udGVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tZW51LWl0ZW1zIHtcbiAgaGVpZ2h0OiAxMTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIjtcbiAgcGFkZGluZzogMTI1cHggMjVweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLm1lbnUtaXRlbXMgaGVhZGVyIHtcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAtMjguMTE3NnJlbSArIDM3LjY0NzF2dywgMy43cmVtKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLm1lbnUtaXRlbXMge1xuICAgIGhlaWdodDogMTI1dmggIWltcG9ydGFudDtcbiAgfVxufVxuLnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhcnJvdy1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcm90YXRlOiA5MGRlZztcbiAgYW5pbWF0aW9uOiAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGUgaG92ZXI7XG59XG5cbkBrZXlmcmFtZXMgaG92ZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4ubWVudS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZW51LWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDNweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcbn1cbi5tZW51LWl0ZW0gaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAtMTAuMDQ0MXJlbSArIDE0LjExNzZ2dywgMnJlbSk7XG4gIGNvbG9yOiByZ2IoMjE1LCAyMDQsIDIwNCk7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uY29udGFjdC1tb2RlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiAzM3B4IDIzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jb250YWN0IDpudGgtY2hpbGQoMiksIC5jb250YWN0IDpudGgtY2hpbGQobis0KSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmVzZXJ2YXRpb24tbW9kZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5yZXNlcnZhdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRleHQgdGV4dCB0ZXh0XCIgXCJ0MSBlbnRyYW5jZSB0M1wiIFwidDIgZW50cmFuY2UgdDNcIiBcInQ0IHQ1IHQ1XCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDIwJSAxNSU7XG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgcm93LWdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5yZXNlcnZhdGlvbnMgPiA6bnRoLWNoaWxkKG4rMykge1xuICBib3JkZXI6IHNvbGlkICNmZmYgMXB4O1xufVxuLnJlc2VydmF0aW9ucyA+IDpudGgtY2hpbGQobiszKTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIxXCJdIHtcbiAgZ3JpZC1hcmVhOiB0MTtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIyXCJdIHtcbiAgZ3JpZC1hcmVhOiB0Mjtcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCIzXCJdIHtcbiAgZ3JpZC1hcmVhOiB0Mztcbn1cblxuLnRhYmxlW3RhYmxlSWQ9XCI0XCJdIHtcbiAgZ3JpZC1hcmVhOiB0NDtcbn1cblxuLnJlc2VydmF0aW9ucyAuZW50cmFuY2Uge1xuICBncmlkLWFyZWE6IGVudHJhbmNlO1xuICBib3JkZXItbGVmdDogc29saWQgd2hpdGUgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlIDFweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGFibGVbdGFibGVJZD1cIjVcIl0ge1xuICBncmlkLWFyZWE6IHQ1O1xufVxuXG4udGFibGVbdGFibGVJZD1cIjZcIl0ge1xuICBncmlkLWFyZWE6IHQ2O1xufVxuXG4udGV4dCB7XG4gIGdyaWQtYXJlYTogdGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkhBQUE7QUFDSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSwrREFBQTtBQURKO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUlJO0lBQ0ksaUNBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLHFCQUFBO0FBQVI7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURSO0FBS1k7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OEJBQUE7QUFGSjtBQUdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQURSOztBQUlBO0VBQ0ksd0RBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGtGQUNBO0VBS0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLSTtFQUNJLHNCQUFBO0FBRlI7QUFHUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQURaOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBS0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9zcmMvTG9yYS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksXFxyXFxuICAgIHVybChcXFwiLi4vc3JjL0xvcmEtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG5cXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9zcmMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmJvZHksIGh0bWx7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5oZXJvLWJne1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vY291bnRyeXNpZGUuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAgIC8vZm9yIHdoZW4gdGhlIGRldmljZSBpcyBtaW5pbWl6ZWRcXHJcXG4gICAgLy9VbmZvcnR1bmF0ZWx5LCBzb21lIG9mIHRoZSBhbmltYXRpb25zIHdvbid0IHBsYXkgcHJvcGVybHlcXHJcXG4gICAgLy9UaGlzIGlzIGR1ZSB0byB0aGUgYmFja2dyb3VuZCBzaXplIGhhdmluZyB0byBiZSBtYW5pcHVsYXRlZFxcclxcbiAgICAuaGVyby1iZ3tcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXR7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuLmhlcm8tdGV4dHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuLm5hdmJhcntcXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgICBsaXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubmF2YmFye1xcclxcbiAgICBhe1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMi4ycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIGxpe1xcclxcbiAgICAgICAgJjpudGgtY2hpbGQoMiksICY6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGE6OmJlZm9yZXtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDooJyAvJyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5uYXZiYXJ7XFxyXFxuICAgIGF7XFxyXFxuICAgICAgICAmOjphZnRlcntcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICAgICAgfSAgXFxyXFxuICAgICAgICAmOmhvdmVyOjphZnRlcntcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICYuYWN0aXZle1xcclxcbiAgICAgICAgICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGl7XFxyXFxuICAgICAgICAmOm50aC1jaGlsZCgyKSAsICY6bnRoLWNoaWxkKDMpe1xcclxcbiAgICAgICAgICAgIGE6OmFmdGVye1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMSU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHR7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG59XFxyXFxuLmhlYWR7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XFxyXFxufVxcclxcbi5sb2dve1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuLmdyZWV0e1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiAxLjVweCAjZmZmIHNvbGlkO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBcXHJcXG4gICAgaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIHN2Z3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBmaWxsOmJsYWNrO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5ib2R5e1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxyXFxuICAgIGgxLGgye1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgfVxcclxcbiAgICBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIC0xMi41NTg4cmVtICsgMTguODIzNXZ3LCA0cmVtKTtcXHJcXG4gICAgfVxcclxcbiAgICBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAtOS4wNDEycmVtICsgMTMuMTc2NXZ3LCAyLjJyZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIC0xMi41NTg4cmVtICsgMTguODIzNXZ3LCAzLjdyZW0pO1xcclxcbiAgICB9XFxyXFxufVxcclxcbnB7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogOTIlO1xcclxcbn1cXHJcXG4ubWVudXtcXHJcXG4gICAgdHJhbnNmb3JtOiAwLjNzIGVhc2U7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWluZm97XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuLm1lbnUtaW5mbyBoMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbiAgICAmOjphZnRlcntcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgICAgICAvLyBTZWVtcyB0byBiZSBhIGZpeCBmb3IgY2hyb21lIGJyb3dzZXJzXFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxuICAgIH0gIFxcclxcbiAgICAmLmV4dGVuZHtcXHJcXG4gICAgICAgICY6OmFmdGVye1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbiNhcnJvdy1sZWZ0LCAjYXJyb3ctcmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jYXJyb3ctbGVmdHtcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgcm90YXRlOiAxODBkZWc7XFxyXFxufVxcclxcbiNhcnJvdy1yaWdodHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi50ZXN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtc3tcXHJcXG4gICAgaGVpZ2h0OiAxMTB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDEyNXB4IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAtMjguMTE3NnJlbSArIDM3LjY0NzF2dywgMy43cmVtKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgICAgLm1lbnUtaXRlbXN7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEyNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICB9XFxyXFxuICAgICBcXHJcXG59XFxyXFxuLnBsYWNlaG9sZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2Fycm93LWJvdHRvbXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJvdGF0ZTogOTBkZWc7XFxyXFxuICAgIGFuaW1hdGlvbjogMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGhvdmVyO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tZW51LWhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLm1lbnUtaGVhZGVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZSAzcHg7XFxyXFxufVxcclxcbi5tZW51LWl0ZW17XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlIDFweDtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbntcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAtMTAuMDQ0MXJlbSArIDE0LjExNzZ2dywgMnJlbSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjE1LCAyMDQsIDIwNCk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbn1cXHJcXG4uY29udGFjdC1tb2Rle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn1cXHJcXG4uY29udGFjdHtcXHJcXG4gICAgcGFkZGluZzogMzNweCAyM3B4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJtb250c2VycmF0XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICA6bnRoLWNoaWxkKDIpLCA6bnRoLWNoaWxkKG4rNCl7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb24tbW9kZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJ0ZXh0IHRleHQgdGV4dFxcXCJcXHJcXG4gICAgXFxcInQxIGVudHJhbmNlIHQzXFxcIlxcclxcbiAgICBcXFwidDIgZW50cmFuY2UgdDNcXFwiXFxyXFxuICAgIFxcXCJ0NCB0NSB0NVxcXCI7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCUgMTUlO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4ucmVzZXJ2YXRpb25ze1xcclxcbiAgICA+Om50aC1jaGlsZChuKzMpe1xcclxcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmIDFweDtcXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjFcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MTtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjJcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MjtcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjNcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0MztcXHJcXG59XFxyXFxuLnRhYmxlW3RhYmxlSWQ9XFxcIjRcXFwiXXtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0NDtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9ucyAuZW50cmFuY2V7XFxyXFxuICAgIGdyaWQtYXJlYTogZW50cmFuY2U7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCB3aGl0ZSAxcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCI1XFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDU7XFxyXFxufVxcclxcbi50YWJsZVt0YWJsZUlkPVxcXCI2XFxcIl17XFxyXFxuICAgIGdyaWQtYXJlYTogdDY7XFxyXFxufVxcclxcbi50ZXh0e1xcclxcbiAgICBncmlkLWFyZWE6IHRleHQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgXHJcbiAgICAvLyBJZiB0aGUgc2Vjb25kIGNoaWxkICh0aGF0IGlzbid0IHRoZSBuYXZiYXIpIGlzIHRoZSBhYm91dCBib2R5LCB0aGVuIHdlIGRvbnRcclxuICAgIC8vIHJlbW92ZSBhbnl0aGluZ1xyXG4gICAgaWYoaGVyb1RleHQuY2hpbGRyZW5bMV0uY2xhc3NOYW1lID09PSAnYm9keScpIHJldHVybiA7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwJztcclxuICAgIGhlcm9CZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBcclxuICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdlbmNoYW50w6knO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChoMSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGgyLnRleHRDb250ZW50ID0gJ2Fobi1zaGFobi1UQVkvIERlbGlnaHRlZCc7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGgyKTtcclxuICAgIFxyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwMS50ZXh0Q29udGVudCA9ICdBdCBlbmNoYW50w6ksIHdlIGludml0ZSB5b3UgdG8gZW1iYXJrIG9uIGEgam91cm5leSB0aGF0IHRyYW5zY2VuZHMgdGhlIG9yZGluYXJ5IGFuZCBlbWJyYWNlcyB0aGUgZXh0cmFvcmRpbmFyeS4nO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSAnU2luY2Ugb3VyIGluY2VwdGlvbiBpbiAyMDE1LCB3ZSBoYXZlIHRha2VuIHByaWRlIGluIGNyYWZ0aW5nIGEgZGluaW5nIHNhbmN0dWFyeSB0aGF0IHVuaXRlcyB0aGUgYXJ0aXN0cnkgb2YgYXdhcmQtd2lubmluZyBnYXN0cm9ub215IHdpdGggdGhlIGNvbWZvcnQgb2YgY2FzdWFsIGluZHVsZ2VuY2UuJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocDIpO1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGhlcm9CZy5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XHJcbiAgICBpZihoZXJvVGV4dC5jaGlsZHJlblsxXSA9PT0gJ2NvbnRhY3QnKSByZXR1cm4gO1xyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIFJlc2V0IHRoZSBiYWNrZ3JvdW5kXHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1iZycpO1xyXG4gICAgaGVyb0JnLmNsYXNzTmFtZSA9ICdoZXJvLWJnJztcclxuICAgIGhlcm9CZy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZCA9ICdibGFjayc7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xyXG4gICAgXHJcbiAgICBBcnJheS5mcm9tKG5ldyBBcnJheSg1KSkuZm9yRWFjaCgoKSA9PiBjb250YWN0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWN0Q2hpbGRyZW4gPSBbLi4uY29udGFjdC5jaGlsZHJlbl07XHJcbiAgICBcclxuICAgIGNvbnRhY3RDaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBXZSB2YWx1ZSB5b3VyIGlucXVpcmllcywgZmVlZGJhY2ssIGFuZCB0aGUgb3Bwb3J0dW5pdHkgdG8gY29ubmVjdC4gV2hldGhlciB5b3UncmUgc2Vla2luZyB0byBtYWtlIGEgcmVzZXJ2YXRpb24sIHNoYXJlIHlvdXIgZGluaW5nIGV4cGVyaWVuY2UsIG9yIHNpbXBseSB3aXNoIHRvIGxlYXJuIG1vcmUgYWJvdXQgZW5jaGFudMOpLCB3ZSdyZSBoZXJlIHRvIGFzc2lzdCB5b3UuIFBsZWFzZSBmZWVsIGZyZWUgdG8gcmVhY2ggb3V0IHRvIHVzIHRocm91Z2ggdGhlIGNoYW5uZWxzIGJlbG93OmA7XHJcbiAgICBjb250YWN0Q2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSAnQWRkcmVzczogMjMzIEJ1dHRvbndvb2QgU3QuJztcclxuICAgIGNvbnRhY3RDaGlsZHJlblsyXS50ZXh0Q29udGVudCA9ICdOZXcgWW9yaywgTlkgMTAwMzMnO1xyXG4gICAgY29udGFjdENoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gICdFbWFpbDogaGVsbG9AZW5jaGFudGUuY29tJztcclxuICAgIGNvbnRhY3RDaGlsZHJlbls0XS50ZXh0Q29udGVudCA9ICdQaG9uZTogKDE5MykzNjgtMjEyNSdcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufSIsImltcG9ydCBkZWZhdWx0QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY291bnRyeXNpZGUuanBnJ1xyXG5pbXBvcnQgYnJlYWtmYXN0VGVzdCBmcm9tICcuLi9zcmMvYnJlYWtmYXN0LmpwZydcclxuaW1wb3J0IGxvYWRSZXNlcnZhdGlvbnMgZnJvbSBcIi4vcmVzZXJ2YXRpb25zLmpzXCJcclxuaW1wb3J0IHJlc2VydmF0aW9uQ2hlY2tlciBmcm9tICcuL3Jlc2VydmF0aW9uY2hlY2tlci5qcyc7XHJcblxyXG4vL2p1c3QgYSBwcmVsb2FkXHJcbihuZXcgSW1hZ2UoKS5zcmMpID0gYnJlYWtmYXN0VGVzdDtcclxuKG5ldyBJbWFnZSgpLnNyYykgPSBkZWZhdWx0QmFja2dyb3VuZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcuY2xhc3NOYW1lID0gJ2hlcm8tYmcnO1xyXG4gICAgaGVyb0JnLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIFxyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7ZGVmYXVsdEJhY2tncm91bmR9KWA7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuXHJcblxyXG4gICAgaWYoaGVyb1RleHQuY2hpbGRyZW4ubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgaWYoaGVyb1RleHQuY2hpbGRyZW5bMV0uY2xhc3NOYW1lID09PSAnZm9vdGVyJykgcmV0dXJuO1xyXG4gICAgICAgIGhlcm9UZXh0LnJlbW92ZUNoaWxkKGhlcm9UZXh0LmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJztcclxuICAgIFxyXG4gICAgY29uc3QgZ3JlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyZWV0LmNsYXNzTmFtZSA9ICdncmVldCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBcclxuICAgIGlmKGhvdXJzID49IDUgJiYgaG91cnMgPCAxMil7XHJcbiAgICAgICAgZ3JlZXQudGV4dENvbnRlbnQgPSAnR29vZCBNb3JuaW5nLic7XHJcbiAgICB9ZWxzZSBpZihob3VycyA+PSAxMiAmJiBob3VycyA8IDE3KXtcclxuICAgICAgICBncmVldC50ZXh0Q29udGVudCA9ICdHb29kIEFmdGVybm9vbi4nO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZ3JlZXQudGV4dENvbnRlbnQgPSAnR29vZCBFdmVuaW5nLic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChncmVldCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5pZCA9ICdyZXNlcnZhdGlvbi1idXR0b24nO1xyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKT0+e1xyXG4gICAgICAgIGxvYWRSZXNlcnZhdGlvbnMoKTtcclxuICAgICAgICByZXNlcnZhdGlvbkNoZWNrZXIoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICByZXNlcnZhdGlvblRleHQudGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zJztcclxuICAgIFxyXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywnMjUnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsJzE4Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywnMCAwIDI1IDE4Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsJ25vbmUnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1heFlNYXggbWVldCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsJ00yNSA5TDEwIDAuMzM5NzQ2VjE3LjY2MDNMMjUgOVpNMCAxMC41SDExLjVWNy41SDBWMTAuNVonKTtcclxuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcclxuICAgIFxyXG4gICAgcmVzZXJ2YXRpb25CdXR0b24uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25UZXh0KTtcclxuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFwcGVuZENoaWxkKHN2Zyk7XHJcbiAgICBcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkJ1dHRvbik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufSIsImltcG9ydCBhcnJvdyBmcm9tICcuLi9zcmMvbWVudWFycm93LnN2ZydcclxuaW1wb3J0IGJyZWFrZmFzdEltZyBmcm9tICcuLi9zcmMvYnJlYWtmYXN0LmpwZydcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgaWYoaGVyb1RleHQuY2hpbGRyZW5bMV0uY2xhc3NOYW1lID09PSAnbWVudScpIHJldHVybjsgXHJcbiAgICBoZXJvVGV4dC5yZW1vdmVDaGlsZChoZXJvVGV4dC5jaGlsZHJlblsxXSk7XHJcblxyXG4gICAgY29uc3QgaGVyb0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcclxuICAgIFsuLi5oZXJvQmcuY2xhc3NMaXN0XS5maWx0ZXIoaGVyb0NsYXNzID0+IGhlcm9DbGFzcyAhPT0gJ2hlcm8tYmcnKTtcclxuICAgIGhlcm9CZy5jbGFzc0xpc3QuYWRkKCdtZW51LW1vZGUnKTtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JyZWFrZmFzdEltZ30pYDtcclxuICAgIGhlcm9CZy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2VudGVyIGNlbnRlcmA7XHJcbiAgICBoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzExMCUnO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtoZXJvQmcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSd9LDM1MCk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SW5mby5jbGFzc0xpc3QuYWRkKCdtZW51LWluZm8nKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUluZm8pO1xyXG4gICAgXHJcbiAgICBjb25zdCByaWdodEFycm93PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJpZ2h0QXJyb3cuc3JjID0gYXJyb3c7XHJcbiAgICByaWdodEFycm93LmlkID0gJ2Fycm93LXJpZ2h0JztcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxlZnRBcnJvdy5zcmMgPSBhcnJvdztcclxuICAgIGxlZnRBcnJvdy5pZCA9ICdhcnJvdy1sZWZ0JztcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb3Vyc2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvdXJzZVRleHQuY2xhc3NOYW1lID0gJ2NvdXJzZSc7XHJcbiAgICBjb3Vyc2VUZXh0LnRleHRDb250ZW50ID0gJ0JyZWFrZmFzdCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT5jb3Vyc2VUZXh0LmNsYXNzTGlzdC5hZGQoJ2V4dGVuZCcpICwwKTtcclxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGNvdXJzZVRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBib3R0b21BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYm90dG9tQXJyb3cuc3JjID0gYXJyb3c7XHJcbiAgICBib3R0b21BcnJvdy5pZCA9ICdhcnJvdy1ib3R0b20nO1xyXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoYm90dG9tQXJyb3cpO1xyXG4gICAgXHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XHJcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbXMuY2xhc3NOYW1lID0gJ21lbnUtaXRlbXMnO1xyXG4gICAgXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBtZW51SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XHJcbiAgICBcclxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbEJyZWFrZmFzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdUcnVmZmxlIEVnZ3MgQmVuZWRpY3QnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQyMicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9hY2hlZCBlZ2dzIG9uIHRvYXN0ZWQgYXJ0aXNhbmFsIGJyaW9jaGUsIHRvcHBlZCB3aXRoIGhvbGxhbmRhaXNlIGluZnVzZWQgd2l0aCBibGFjayB0cnVmZmxlIGVzc2VuY2UuJyxcclxuICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ3JvaXNzYW50IENyb3F1ZS1Nb25zaWV1cicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE2JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcgQSBmbGFreSBidXR0ZXIgY3JvaXNzYW50IGxheWVyZWQgd2l0aCB0aGlubHkgc2xpY2VkIHByb3NjaXV0dG8sIEdydXnDqHJlIGNoZWVzZSwgYW5kIGLDqWNoYW1lbCBzYXVjZSwgdG9hc3RlZCB0byBnb2xkZW4gcGVyZmVjdGlvbi4nLFxyXG4gICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdDaGFtcGFnbmUtaW5mdXNlZCBGcnVpdCBQYXJmYWl0JyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMTgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVsaWNhdGUgY29tYmluYXRpb24gb2Ygc2Vhc29uYWwgZnJ1aXRzLCBvcmdhbmljIEdyZWVrIHlvZ3VydCwgYW5kIHRvYXN0ZWQgYWxtb25kIGdyYW5vbGEsIGRyaXp6bGVkIHdpdGggY2hhbXBhZ25lIHJlZHVjdGlvbi4nLFxyXG4gICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdTbW9rZWQgU2FsbW9uIExveCBQbGF0dGVyJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hvdXNlLWN1cmVkIGFuZCBzbW9rZWQgc2FsbW9uIHNlcnZlZCB3aXRoIGFuIGFycmF5IG9mIGFjY29tcGFuaW1lbnRzLCBpbmNsdWRpbmcgY2FwZXJzLCByZWQgb25pb24sIGRpbGwgY3JlYW0gY2hlZXNlLCBhbmQgZnJlc2ggYmFnZWxzLicsXHJcbiAgICBcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgaXRlbTogJ0ZyZW5jaCBwcmVzcyBjb2ZmZWUnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ3JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSb2J1c3QsIGZ1bGwtYm9kaWVkIGJyZXcgYnVyc3Rpbmcgd2l0aCByaWNoLCBmbGF2b3JmdWwgbm90ZXMuJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIGluaXRpYWxCcmVha2Zhc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0nO1xyXG4gICAgXHJcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbURpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgICAgICAgaXRlbURpdi50ZXh0Q29udGVudCA9IGl0ZW0uaXRlbTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbURpdik7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcmljZSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIFxyXG4gICAgfSk7XHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChtZW51KTsgICAgXHJcbn0iLCJpbXBvcnQgYnJlYWtmYXN0SW1nIGZyb20gJy4uL3NyYy9icmVha2Zhc3QuanBnJ1xyXG5pbXBvcnQgbHVuY2hJbWcgZnJvbSAnLi4vc3JjL2x1bmNoLmpwZydcclxuaW1wb3J0IGRpbm5lckltZyBmcm9tICcuLi9zcmMvZGlubmVyLmpwZydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1tb2RlJyk7XHJcblxyXG4gICAgY29uc3QgaW5qZWN0Q291cnNlID0gKGl0ZW0pID0+e1xyXG4gICAgICAgIC8vSGlkZSB0aGUgYmFja2dyb3VuZCBmb3IgdmlzdWFsIGVmZmVjdFxyXG4gICAgICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgICAgIGhlcm9UZXh0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2JhKDAsMCwwLDEpYDtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB1bmRlcmxpbmUgZWZmZWN0LiBUZW1wb3JhcmlseSBoaWRlIHRoZSB0ZXh0XHJcbiAgICAgICAgY29uc3QgY291cnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdXJzZScpO1xyXG4gICAgICAgIGNvdXJzZS5jbGFzc0xpc3QucmVtb3ZlKCdleHRlbmQnKTtcclxuICAgICAgICBjb3Vyc2Uuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGltYWdlIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gaW1hZ2Uuc3JjID0gYC4uL3NyYy8ke2l0ZW0uZ2V0Q291cnNlTmFtZSgpfS5qcGdgO1xyXG4gICAgICAgIHN3aXRjaChpdGVtLmdldENvdXJzZU5hbWUoKSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0JyZWFrZmFzdCc6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBicmVha2Zhc3RJbWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnTHVuY2gnOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gbHVuY2hJbWc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRGlubmVyJzpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGRpbm5lckltZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBwYXJzaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5zcmMpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gLy8gQWRkIHNldFRpbWVvdXQgc3VjaCB0aGF0IGVmZmVjdHMgY2FuIGFjdHVhbGx5IHBsYXkgb3V0XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIke2ltYWdlLnNyY31cIilgO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRTaXplID0gJzExMCUnO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4zcyBlYXNlJztcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgICAgIH0sIDEwNTApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGNvdXJzZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0Q291cnNlTmFtZSgpO1xyXG4gICAgICAgICAgICBjb3Vyc2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgY291cnNlLmNsYXNzTGlzdC5hZGQoJ2V4dGVuZCcpO1xyXG4gICAgICAgICAgICBoZXJvVGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgwLDAsMCwwLjMpYDtcclxuICAgICAgICB9LCAxMzAwKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMDAlJztcclxuICAgICAgICB9LCAxNDUwKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKV07XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpdGVtLmdldENvdXJzZUl0ZW1zKCk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckl0ZW0gPSBtZW51SXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyUHJpY2UgPSBtZW51SXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLnByaWNlJylcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBtZW51SXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICBoZWFkZXJJdGVtLnRleHRDb250ZW50ID0gaXRlbXNbaV0uaXRlbTtcclxuICAgICAgICAgICAgaGVhZGVyUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtc1tpXS5wcmljZTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtc1tpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2VzID0gW107XHJcbiAgICBjb25zdCBjb3Vyc2UgPSAoY291cnNlTmFtZSkgPT57XHJcbiAgICAgICAgY29uc3QgY291cnNlSXRlbXMgPSBbXTtcclxuICAgICAgICBjb25zdCBhZGRDb3Vyc2VJdGVtID0gKGl0ZW0sIHByaWNlLCBkZXNjcmlwdGlvbikgPT57XHJcbiAgICAgICAgICAgIGNvdXJzZUl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWRkRXhpc3RpbmdDb3Vyc2UgPSAobWVudSkgPT57XHJcbiAgICAgICAgICAgIG1lbnUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdXJzZUl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdldENvdXJzZUl0ZW1zID0gKCkgPT4gY291cnNlSXRlbXM7XHJcbiAgICAgICAgY29uc3QgZ2V0Q291cnNlTmFtZSA9ICgpID0+IGNvdXJzZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHtnZXRDb3Vyc2VJdGVtcywgZ2V0Q291cnNlTmFtZSwgYWRkQ291cnNlSXRlbSwgYWRkRXhpc3RpbmdDb3Vyc2V9XHJcblxyXG4gICAgfTsgXHJcblxyXG5cclxuICAgIGxldCBjdXJyZW50ID0gMDtcclxuICAgIGNvbnN0IGNvdXJzZU5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291cnNlJykudGV4dENvbnRlbnQ7XHJcbiAgICBpZihjb3Vyc2VOYW1lRGl2ID09PSAnTHVuY2gnKSBjdXJyZW50ID0gMTtcclxuICAgIGVsc2UgaWYoY291cnNlTmFtZURpdiA9PT0gJ0Rpbm5lcicpIGN1cnJlbnQgPSAyO1xyXG5cclxuXHJcbiAgICBjb25zdCBsdW5jaCA9IGNvdXJzZShcIkx1bmNoXCIpO1xyXG4gICAgLy8gUHVsbGVkIGZyb20gYW4gZWFybGllciB0ZXN0XHJcbiAgICBsdW5jaC5hZGRFeGlzdGluZ0NvdXJzZShbe1xyXG4gICAgICAgIGl0ZW06ICdTZWFyZWQgU2VhIFNjYWxsb3AgUmlzb3R0bycsXHJcbiAgICAgICAgcHJpY2U6ICckMzInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUGVyZmVjdGx5IHNlYXJlZCBzZWEgc2NhbGxvcHMgc2VydmVkIGF0b3AgYSBiZWQgb2YgY3JlYW15IHNhZmZyb24taW5mdXNlZCByaXNvdHRvLCBnYXJuaXNoZWQgd2l0aCBtaWNyb2dyZWVucy4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGl0ZW06ICdUcnVmZmxlLWluZnVzZWQgTXVzaHJvb20gUXVpY2hlJyxcclxuICAgICAgICBwcmljZTogJyQyNicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIHF1aWNoZSBmaWxsZWQgd2l0aCBhIG1lZGxleSBvZiB0cnVmZmxlLWluZnVzZWQgbXVzaHJvb21zLCBhcnRpc2FuYWwgY2hlZXNlLCBhbmQgZnJlc2ggaGVyYnMsIGFjY29tcGFuaWVkIGJ5IGEgc2lkZSBzYWxhZC4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGl0ZW06ICdUcnVmZmxlZCBCZWVmIEJ1cmdlcicsXHJcbiAgICAgICAgcHJpY2U6ICckMjgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBnb3VybWV0IGJlZWYgYnVyZ2VyIGVsZXZhdGVkIHdpdGggdHJ1ZmZsZS1pbmZ1c2VkIG1heW8sIGNhcmFtZWxpemVkIHNoYWxsb3RzLCBhbmQgYWdlZCBjaGVkZGFyIG9uIGEgYnJpb2NoZSBidW4sIHNlcnZlZCB3aXRoIGhvdXNlLWN1dCBmcmllcy4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGl0ZW06ICdSb2FzdGVkIFRvbWF0byBCYXNpbCBFbGVnYW5jZScsXHJcbiAgICAgICAgcHJpY2U6ICckMTInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBoYXJtb25pb3VzIGJsZW5kIG9mIGZpcmUtcm9hc3RlZCB0b21hdG9lcyBhbmQgZnJlc2ggYmFzaWwsIGVsZXZhdGVkIHdpdGggYSBkcml6emxlIG9mIGFnZWQgYmFsc2FtaWMgYW5kIGEgZG9sbG9wIG9mIGNyw6htZSBmcmHDrmNoZS4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGl0ZW06ICdDdWN1bWJlciBNaW50IEZpenonLFxyXG4gICAgICAgIHByaWNlOiAnJDExJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJyBNdWRkbGVkIGN1Y3VtYmVyIGFuZCBtaW50IGNvbWJpbmVkIHdpdGggZWxkZXJmbG93ZXIgdG9uaWMgYW5kIGEgc3BsYXNoIG9mIGxpbWUganVpY2UsIHNlcnZlZCBvdmVyIGljZS4nXHJcbiAgICB9XSk7XHJcblxyXG4gICAgY29uc3QgYnJlYWtmYXN0ID0gY291cnNlKFwiQnJlYWtmYXN0XCIpO1xyXG4gICAgYnJlYWtmYXN0LmFkZEV4aXN0aW5nQ291cnNlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdUcnVmZmxlIEVnZ3MgQmVuZWRpY3QnLFxyXG4gICAgICAgICAgICBwcmljZTogJyQyMicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9hY2hlZCBlZ2dzIG9uIHRvYXN0ZWQgYXJ0aXNhbmFsIGJyaW9jaGUsIHRvcHBlZCB3aXRoIGhvbGxhbmRhaXNlIGluZnVzZWQgd2l0aCBibGFjayB0cnVmZmxlIGVzc2VuY2UuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdDcm9pc3NhbnQgQ3JvcXVlLU1vbnNpZXVyJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMTYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJyBBIGZsYWt5IGJ1dHRlciBjcm9pc3NhbnQgbGF5ZXJlZCB3aXRoIHRoaW5seSBzbGljZWQgcHJvc2NpdXR0bywgR3J1ecOocmUgY2hlZXNlLCBhbmQgYsOpY2hhbWVsIHNhdWNlLCB0b2FzdGVkIHRvIGdvbGRlbiBwZXJmZWN0aW9uLicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtOiAnQ2hhbXBhZ25lLWluZnVzZWQgRnJ1aXQgUGFyZmFpdCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDE4JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGRlbGljYXRlIGNvbWJpbmF0aW9uIG9mIHNlYXNvbmFsIGZydWl0cywgb3JnYW5pYyBHcmVlayB5b2d1cnQsIGFuZCB0b2FzdGVkIGFsbW9uZCBncmFub2xhLCBkcml6emxlZCB3aXRoIGNoYW1wYWduZSByZWR1Y3Rpb24uJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdTbW9rZWQgU2FsbW9uIExveCBQbGF0dGVyJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMjQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hvdXNlLWN1cmVkIGFuZCBzbW9rZWQgc2FsbW9uIHNlcnZlZCB3aXRoIGFuIGFycmF5IG9mIGFjY29tcGFuaW1lbnRzLCBpbmNsdWRpbmcgY2FwZXJzLCByZWQgb25pb24sIGRpbGwgY3JlYW0gY2hlZXNlLCBhbmQgZnJlc2ggYmFnZWxzLicsXHJcblxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBpdGVtOiAnRnJlbmNoIHByZXNzIGNvZmZlZScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnJDcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JvYnVzdCwgZnVsbC1ib2RpZWQgYnJldyBidXJzdGluZyB3aXRoIHJpY2gsIGZsYXZvcmZ1bCBub3Rlcy4nXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgZGlubmVyID0gY291cnNlKFwiRGlubmVyXCIpO1xyXG4gICAgZGlubmVyLmFkZEV4aXN0aW5nQ291cnNlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdTZWFyZWQgRm9pZSBHcmFzJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMzInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVjYWRlbnQgZGVsaWNhY3ksIHNlYXJlZCB0byBwZXJmZWN0aW9uIGFuZCBhY2NvbXBhbmllZCBieSBhIHRydWZmbGUtaW5mdXNlZCByZWR1Y3Rpb24gYW5kIGJyaW9jaGUuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdGaWxldCBNaWdub24nLFxyXG4gICAgICAgICAgICBwcmljZTogJyQ0NCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJpbWUgYmVlZiBmaWxldCBncmlsbGVkIHRvIHlvdXIgcHJlZmVyZW5jZSwgc2VydmVkIHdpdGggYSByZWQgd2luZSByZWR1Y3Rpb24gYW5kIHRydWZmbGUtc2NlbnRlZCBtYXNoZWQgcG90YXRvZXMuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW06ICdQYW4tU2VhcmVkIFNlYSBCYXNzJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMzgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgZGVsaWNhdGUgZmlsbGV0IG9mIHNlYSBiYXNzLCBwYW4tc2VhcmVkIGFuZCBzZXJ2ZWQgYXRvcCBzYWZmcm9uLWluZnVzZWQgcmlzb3R0byB3aXRoIGxlbW9uIGJldXJyZSBibGFuYy4nLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbTogJ1RydWZmbGUtaW5mdXNlZCBSaXNvdHRvJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMzInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgbHV4dXJpb3VzIGJsZW5kIG9mIEFyYm9yaW8gcmljZSwgdHJ1ZmZsZSBvaWwsIGFuZCBwYXJtZXNhbiBjaGVlc2UsIGdhcm5pc2hlZCB3aXRoIHNoYXZlZCB0cnVmZmxlLicsXHJcblxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBpdGVtOiAnQ2l0cnVzIFNwYXJrbGVyJyxcclxuICAgICAgICAgICAgcHJpY2U6ICckMTAnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJyBBIHZpYnJhbnQgYmxlbmQgb2YgZnJlc2ggY2l0cnVzIGp1aWNlcyBhbmQgc29kYSB3YXRlciwgZ2FybmlzaGVkIHdpdGggYSB0d2lzdCBvZiBsZW1vbiBhbmQgYSBzcHJpZyBvZiB0aHltZS4nXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY291cnNlcy5wdXNoKGJyZWFrZmFzdCk7XHJcbiAgICBjb3Vyc2VzLnB1c2gobHVuY2gpO1xyXG4gICAgY291cnNlcy5wdXNoKGRpbm5lcik7XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3ctbGVmdCcpO1xyXG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1yaWdodCcpO1xyXG5cclxuICAgIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCk9PntcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudCA9PT0gMCA/IGNvdXJzZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnQgLSAxO1xyXG4gICAgICAgIGluamVjdENvdXJzZShjb3Vyc2VzW2N1cnJlbnRdKTsgXHJcbiAgICB9KVxyXG5cclxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoKT0+e1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ID09PSBjb3Vyc2VzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudCArIDE7XHJcbiAgICAgICAgaW5qZWN0Q291cnNlKGNvdXJzZXNbY3VycmVudF0pOyBcclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IGdlbmVyYXRlSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCJcclxuaW1wb3J0IGluaXRpYWxNZW51TG9hZCBmcm9tIFwiLi9pbml0aWFsTG9hZC5qc1wiXHJcbmltcG9ydCBtZW51Y29udHJvbGxlciBmcm9tIFwiLi9tZW51Y29udHJvbGxlci5qc1wiXHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcblxyXG5jb25zdCByZXNldENsaWNrcyA9ICgpID0+e1xyXG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgaWYoYWN0aXZlICE9PSBudWxsICkgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlcm9CZy5jbGFzc0xpc3QuYWRkKCdoZXJvLWJnJyk7XHJcblxyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGV4dCcpO1xyXG4gICAgLy8gQ29kZSBmb3IgaGVhZGVyXHJcbiAgICAvL05vdGUgdGhhdCB0aGlzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhlIG1haW4gY29udGVudCBsYXRlclxyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsb2dvLmhyZWYgPSAnI2hvbWUnO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ2VuY2hhbnTDqSc7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIHJlc2V0Q2xpY2tzKCk7XHJcbiAgICAgICAgZ2VuZXJhdGVIb21lKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBsaSBjb250ZW50c1xyXG4gICAgY29uc3QgYWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBtZW51TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgY29udGFjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWJvdXRIcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgbWVudUhyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCBjb250YWN0SHJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIFxyXG4gICAgLy8gTGlua3NcclxuICAgIGFib3V0SHJlZi5ocmVmID0gJyNhYm91dCc7XHJcbiAgICBtZW51SHJlZi5ocmVmID0gJyNtZW51JztcclxuICAgIGNvbnRhY3RIcmVmLmhyZWYgPSAnI2NvbnRhY3QnO1xyXG4gICAgXHJcbiAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgIGFib3V0SHJlZi50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgICBtZW51SHJlZi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIGNvbnRhY3RIcmVmLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gICAgXHJcbiAgICBhYm91dEhyZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIHJlc2V0Q2xpY2tzKCk7XHJcbiAgICAgICAgYWJvdXRIcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdlbmVyYXRlQWJvdXQoKTtcclxuICAgIH0pO1xyXG4gICAgbWVudUhyZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIHJlc2V0Q2xpY2tzKCk7XHJcbiAgICAgICAgbWVudUhyZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaW5pdGlhbE1lbnVMb2FkKCk7XHJcbiAgICAgICAgbWVudWNvbnRyb2xsZXIoKTtcclxuICAgIH0pO1xyXG4gICAgY29udGFjdEhyZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIHJlc2V0Q2xpY2tzKCk7XHJcbiAgICAgICAgY29udGFjdEhyZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVDb250YWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgY29udGVudCB0byBsaVxyXG4gICAgYWJvdXRMaS5hcHBlbmRDaGlsZChhYm91dEhyZWYpO1xyXG4gICAgbWVudUxpLmFwcGVuZENoaWxkKG1lbnVIcmVmKTtcclxuICAgIGNvbnRhY3RMaS5hcHBlbmRDaGlsZChjb250YWN0SHJlZik7XHJcbiAgICBcclxuICAgIC8vIEFwcGVuZCBpbmRpdmlkdWFsIGxpIHRvIHVsXHJcbiAgICB1bC5hcHBlbmRDaGlsZChhYm91dExpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKG1lbnVMaSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0TGkpO1xyXG4gICAgXHJcbiAgICAvLyBhcHBlbmQgdWwgdG8gbmF2XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgXHJcbiAgICAvL2FwcGVuZCBuYXZpZ2F0aW9uIGJhclxyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgXHJcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGhlcm9CZy5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm9CZyk7XHJcbiAgICAgICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcclxuICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoJ3N0YXR1cycpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlSWQgPSBwYXJzZUludCh0YWJsZS5nZXRBdHRyaWJ1dGUoJ3RhYmxlSWQnKSk7XHJcbiAgICAgICAgdGFibGUuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VlbnRlcmAsICgpPT57XHJcbiAgICAgICAgICAgIGlmKHN0YXR1cyA9PT0gJ3Jlc2VydmVkJykgdGV4dC50ZXh0Q29udGVudCA9IGBUYWJsZSAke3RhYmxlSWR9IGlzIHJlc2VydmVkYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFibGUuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VsZWF2ZWAsICgpPT57XHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSAnSG92ZXIgb3ZlciBlYWNoIHRhYmxlIGZvciBtb3JlLic7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlcm9CZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XHJcbiAgICBoZXJvQmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaGVyb0JnLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwMCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xyXG4gICAgaGVyb1RleHQucmVtb3ZlQ2hpbGQoaGVyb1RleHQuY2hpbGRyZW5bMV0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc2VydmF0aW9ucy5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbnMnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZW50cmFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVudHJhbmNlLmNsYXNzTmFtZSA9ICdlbnRyYW5jZSc7XHJcbiAgICBlbnRyYW5jZS50ZXh0Q29udGVudCAgPSAnUmVjZXB0aW9uJztcclxuICAgIHJlc2VydmF0aW9ucy5hcHBlbmRDaGlsZChlbnRyYW5jZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSAnSG92ZXIgb3ZlciBlYWNoIHRhYmxlIGZvciBtb3JlLic7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuICAgIHJlc2VydmF0aW9ucy5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIFxyXG4gICAgQXJyYXkuZnJvbShuZXcgQXJyYXkoNSkpLmZvckVhY2goKGR1bW15RWxlbWVudCwgaW5kZXgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gJ3RhYmxlJztcclxuICAgICAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ3RhYmxlSWQnLGluZGV4KzEpO1xyXG4gICAgICAgIHRhYmxlLnNldEF0dHJpYnV0ZSgnc3RhdHVzJywncmVzZXJ2ZWQnKTtcclxuICAgICAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKHJlc2VydmF0aW9ucyk7XHJcbiAgICBcclxuICAgIFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2NvdW50cnlzaWRlLmpwZydcclxuaW1wb3J0IGdlbmVyYXRlSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBnZW5lcmF0ZU5hdkJhciBmcm9tIFwiLi9uYXZiYXIuanNcIlxyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIlxyXG5cclxuLypcclxuICAgIFdpdGggdGhlIG5hdmJhciwgdGhlIGNvbnRlbnQgc2hvdWxkIGJlIFxyXG4gICAgPCFET0NUWVBFIGh0bWw+XHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgPHRpdGxlPmVuY2hhbnTDqTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9zcmMvc3R5bGUuY3NzXCI+XHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1iZyBhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImxvZ29cIj5lbmNoYW50w6k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjbWVudVwiPk1lbnU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgW1Jlc3Qgb2YgY29kZSBoZXJlXVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gKi9cclxuXHJcbmdlbmVyYXRlTmF2QmFyKCk7XHJcbmdlbmVyYXRlSG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==