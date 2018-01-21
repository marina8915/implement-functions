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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_isPrime_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_isPrime_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_isPrime_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_factorial_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_factorial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_factorial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_fib_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_fib_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_fib_js__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(n) {
    var sum = 0
    if (n <= 1) {
        return false
    } else {
        for (var i = 2; i < n+1; i++) {
                if (n % i === 0) {
                    sum++
                    if (n === 2) {
                        return true
                    }
                }
                if (sum > 1){
                    return false
                }
        }
        if (sum === 1) {
            return true
        }
    }
}
console.log('isPrime')
console.log(isPrime(0))                          // false
console.log(isPrime(1))                          // false
console.log(isPrime(17))                         // true
console.log(isPrime(10000000000000))             // false


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function factorial(n) {
    if (n) {
        return n * factorial(n - 1)
    } else return 1
}

console.log('factorial')
console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function fib(n) {
    var rez = 0
    if (n <= 1) {
        rez = n
    } else {
        rez += fib(n - 1) + fib(n - 2)
    }
    return rez
}

console.log('fib')
console.log(fib(0))                              // 0
console.log(fib(1))                              // 1
console.log(fib(10))                             // 55
console.log(fib(20))                             // 6765

/***/ })
/******/ ]);