/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = router;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__map_json__);
/**
 * Created by sens on 2017/7/15.
 */


let mapRouter = {
    'article': getArticle,
    'index': getIndex,
    '404': get404
};
window.onhashchange = function () {
    router();
};

function router() {
    let temp = location.hash.match(/^#\/(\w+)\/?.*/);
    let path = '';
    let articleNum;
    if (temp instanceof Array) {
        path = temp[1];
        if (path.indexOf('article') === 0) {
            articleNum = +path.split('article')[1] || 1;
            path = 'article';
        }
    } else {
        path = 'index';
    }
    if (mapRouter[path]) {
        mapRouter[path](articleNum);
    } else {
        mapRouter['404']();
    }
}

function getArticle(num) {
    let fileName = 'article' + num + '.html';
    let ajax = new XMLHttpRequest();
    ajax.open('get', fileName);
    ajax.onload = function () {
        document.getElementById('j-article').innerHTML = ajax.responseText;
    };
    ajax.send();
}
function getIndex() {
    let fileName = 'list.html';
    let ajax = new XMLHttpRequest();
    ajax.open('get', fileName);
    ajax.onload = function () {
        document.getElementById('j-article').innerHTML = ajax.responseText;
    };
    ajax.send();
}
function get404() {}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "article1.html";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "article2.html";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "list.html";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_common_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_article_article1_xhtml__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_article_article1_xhtml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_article_article1_xhtml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_article_article2_xhtml__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_article_article2_xhtml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_article_article2_xhtml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_xhtml__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_xhtml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_list_xhtml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_router__ = __webpack_require__(0);






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_router__["a" /* default */])();

const App = function () {
    let dom = document.getElementById('app');
};

new App();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"index": {
		"title": "Sens的实验室"
	},
	"article": [
		{
			"title": "手机端自适应布局"
		}
	]
};

/***/ })
/******/ ]);