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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_isSorted_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_isSorted_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_isSorted_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_reversePalindrome_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_reversePalindrome_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scripts_reversePalindrome_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_missing_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_missing_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scripts_missing_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_indexOf_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_indexOf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scripts_indexOf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_isBalanced_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_isBalanced_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__scripts_isBalanced_js__);









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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function isSorted(array) {
    for (var i = 1; i < array.length; i++) {
        if (array [i-1] > array[i]){
            return false
        }
    }
    return true
}

console.log('isSorted')
console.log(isSorted([]))                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
console.log(isSorted([3, 9, -3, 10]))            // false

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function reverse(str) {
    var newStr = ''
    for (var i = str.length; i >= 0; i--) {
        newStr += str.slice(i, i + 1)
    }
    return newStr
}

console.log('reverse')
console.log(reverse(''))                         // ''
console.log(reverse('abcdef'))                   // 'fedcba'

function isPalindrome(str) {
    var newStr = str.toLowerCase().replace(/\s/g,'')
    var reverseStr = reverse(newStr)
    if (newStr === reverseStr) {
        return true
    }
    return false
}

console.log('isPalindrome')
console.log(isPalindrome(''))                                // true
console.log(isPalindrome('abcdcba'))                         // true
console.log(isPalindrome('abcd'))                            // false
console.log(isPalindrome('A man a plan a canal Panama'))     // true

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function missing(arr) {
    var missingItems = []
    arr.sort(function (a, b) {
        return a > b
    })
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(i + 1) === -1) {
            missingItems.push(i + 1)
        }
    }
    return missingItems
}

console.log('missing')
console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]))               // 3
console.log(missing([1, 2, 3, 4]))               // undefined

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function indexOf(arr, el) {
    var rez = arr.findIndex(function(elem, i) {
        if (elem === el) {
            var index = i
        }
        return index >= 0
    })
    return rez
}

console.log('indexOf')
console.log(indexOf([1, 2, 3], 1))               // 0
console.log(indexOf([1, 2, 3], 4))               // -1

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function isBalanced(str) {
    var n = 0
    var j = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '{') n++
        if (str[i] === '}') j++
    }
    if (str.indexOf('{') < str.indexOf('}') && n === j && str.indexOf('{}')) {
        return true
    }
    return false
}

console.log('isBalanced')
console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // false
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false

/***/ })
/******/ ]);