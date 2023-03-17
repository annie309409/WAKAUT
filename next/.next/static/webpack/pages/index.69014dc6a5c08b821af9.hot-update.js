webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./pages/place_modal.js":
/*!******************************!*\
  !*** ./pages/place_modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ci */ "./node_modules/react-icons/ci/index.esm.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_kakaoShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/kakaoShare */ "./services/kakaoShare.js");
var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\place_modal.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PlaceModal = function PlaceModal(props) {
  console.log(props.img);
  var scores = [];

  for (var i = 0; i < props.score; i++) {
    scores.push(i);
  }

  var sc = props.score ? scores.map(function (m) {
    return __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillStar"], {
      key: m,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 53
      }
    });
  }) : false;
  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    "class": "d-flex",
    title: "\uC815\uBCF4 \uC0C1\uC138\uBCF4\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6 me-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "border-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
    variant: "top",
    src: props.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\uC2DC\uC124\uD3C9\uAC00\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "\uB2E4\uB978 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC758\uACAC\uC744 \uB4E4\uB824\uC8FC\uC138\uC694"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, sc), __jsx("div", {
    className: "btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "warning",
    className: "fluid ms-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "\uCE74\uCE74\uC624 \uACF5\uC720\uD558\uAE30"))))), __jsx("div", {
    className: "right col-6 ms-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, props.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__["CiLocationOn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 36
    }
  }, props.addr)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineHighlight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 42
    }
  }, props.des)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__["CiFaceSmile"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 35
    }
  }, sc)), __jsx("div", {
    className: "brdPrev mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC8C\uC2DC\uD310 \uC81C\uBAA9",
    note: "\uC774\uACF3\uC740 \uC815\uB9D0 \uC88B\uC740\uACF3\uC785\uB2C8\uB2E4.",
    kd: "community",
    time: "2023-03-08",
    view: "255",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC8C\uC2DC\uD310 \uC81C\uBAA9",
    note: "\uC774\uACF3\uC740 \uC815\uB9D0 \uC88B\uC740\uACF3\uC785\uB2C8\uB2E4.",
    kd: "review",
    time: "2023-03-08",
    view: "255",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/board/boardlist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 44
    }
  }, "\uAC8C\uC2DC\uAE00 \uB354 \uBCF4\uAE30"))));
};

_c = PlaceModal;
/* harmony default export */ __webpack_exports__["default"] = (PlaceModal);

var _c;

$RefreshReg$(_c, "PlaceModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./services/kakao.min.js":
/*!*******************************!*\
  !*** ./services/kakao.min.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module, process) {/**
 * Kakao SDK for JavaScript - v1.43.1
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 * crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 * easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 * ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 * Kakao Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * lodash
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors
 *
 * MIT License
 *
 *
 * ua_parser
 *
 * https://github.com/html5crew/ua_parser
 *
 * Copyright HTML5 Tech. Team in Daum Communications Corp.
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */
!function (e, t) {
   true ? t(exports) : undefined;
}(this, function (e) {
  "use strict";

  var t = "object" == typeof global && global && global.Object === Object && global,
      n = "object" == typeof self && self && self.Object === Object && self,
      r = t || n || Function("return this")(),
      o = r.Symbol,
      i = Object.prototype,
      a = i.hasOwnProperty,
      c = i.toString,
      s = o ? o.toStringTag : void 0;
  var u = Object.prototype.toString;
  var l = o ? o.toStringTag : void 0;

  function d(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? function (e) {
      var t = a.call(e, s),
          n = e[s];

      try {
        e[s] = void 0;
        var r = !0;
      } catch (e) {}

      var o = c.call(e);
      return r && (t ? e[s] = n : delete e[s]), o;
    }(e) : function (e) {
      return u.call(e);
    }(e);
  }

  function p(e) {
    return null != e && "object" == typeof e;
  }

  var f = Array.isArray,
      h = /\s/;
  var m = /^\s+/;

  function v(e) {
    return e ? e.slice(0, function (e) {
      for (var t = e.length; t-- && h.test(e.charAt(t));) {
        ;
      }

      return t;
    }(e) + 1).replace(m, "") : e;
  }

  function g(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  }

  var y = /^[-+]0x[0-9a-f]+$/i,
      b = /^0b[01]+$/i,
      _ = /^0o[0-7]+$/i,
      k = parseInt;

  function w(e) {
    if ("number" == typeof e) return e;
    if (function (e) {
      return "symbol" == typeof e || p(e) && "[object Symbol]" == d(e);
    }(e)) return NaN;

    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = v(e);
    var n = b.test(e);
    return n || _.test(e) ? k(e.slice(2), n ? 2 : 8) : y.test(e) ? NaN : +e;
  }

  var S = 1 / 0;

  function x(e) {
    var t = function (e) {
      return e ? (e = w(e)) === S || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
    }(e),
        n = t % 1;

    return t == t ? n ? t - n : t : 0;
  }

  function O(e) {
    return e;
  }

  function j(e) {
    if (!g(e)) return !1;
    var t = d(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  }

  var A,
      T = r["__core-js_shared__"],
      C = (A = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : "";
  var I = Function.prototype.toString;
  var P = /^\[object .+?Constructor\]$/,
      F = Function.prototype,
      B = Object.prototype,
      E = F.toString,
      U = B.hasOwnProperty,
      R = RegExp("^" + E.call(U).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function L(e) {
    return !(!g(e) || (t = e, C && C in t)) && (j(e) ? R : P).test(function (e) {
      if (null != e) {
        try {
          return I.call(e);
        } catch (e) {}

        try {
          return e + "";
        } catch (e) {}
      }

      return "";
    }(e));
    var t;
  }

  function M(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);

      case 1:
        return e.call(t, n[0]);

      case 2:
        return e.call(t, n[0], n[1]);

      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }

    return e.apply(t, n);
  }

  var z = Date.now;

  var D,
      q,
      N,
      K = function () {
    try {
      var e = L(t = function (e, t) {
        return null == e ? void 0 : e[t];
      }(Object, "defineProperty")) ? t : void 0;
      return e({}, "", {}), e;
    } catch (e) {}

    var t;
  }(),
      H = K,
      J = H ? function (e, t) {
    return H(e, "toString", {
      configurable: !0,
      enumerable: !1,
      value: (n = t, function () {
        return n;
      }),
      writable: !0
    });
    var n;
  } : O,
      W = (D = J, q = 0, N = 0, function () {
    var e = z(),
        t = 16 - (e - N);

    if (N = e, t > 0) {
      if (++q >= 800) return arguments[0];
    } else q = 0;

    return D.apply(void 0, arguments);
  }),
      X = W;

  function $(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);) {
      ;
    }

    return e;
  }

  var G = /^(?:0|[1-9]\d*)$/;

  function V(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && G.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }

  function Y(e, t, n) {
    "__proto__" == t && H ? H(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }

  function Q(e, t) {
    return e === t || e != e && t != t;
  }

  var Z = Object.prototype.hasOwnProperty;

  function ee(e, t, n) {
    var r = e[t];
    Z.call(e, t) && Q(r, n) && (void 0 !== n || t in e) || Y(e, t, n);
  }

  var te = Math.max;

  function ne(e, t) {
    return X(function (e, t, n) {
      return t = te(void 0 === t ? e.length - 1 : t, 0), function () {
        for (var r = arguments, o = -1, i = te(r.length - t, 0), a = Array(i); ++o < i;) {
          a[o] = r[t + o];
        }

        o = -1;

        for (var c = Array(t + 1); ++o < t;) {
          c[o] = r[o];
        }

        return c[t] = n(a), M(e, this, c);
      };
    }(e, t, O), e + "");
  }

  function re(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
  }

  function oe(e) {
    return null != e && re(e.length) && !j(e);
  }

  function ie(e, t, n) {
    if (!g(n)) return !1;
    var r = typeof t;
    return !!("number" == r ? oe(n) && V(t, n.length) : "string" == r && t in n) && Q(n[t], e);
  }

  var ae = Object.prototype;

  function ce(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || ae);
  }

  function se(e) {
    return p(e) && "[object Arguments]" == d(e);
  }

  var ue = Object.prototype,
      le = ue.hasOwnProperty,
      de = ue.propertyIsEnumerable,
      pe = se(function () {
    return arguments;
  }()) ? se : function (e) {
    return p(e) && le.call(e, "callee") && !de.call(e, "callee");
  },
      fe = pe;

  var he = "object" == typeof e && e && !e.nodeType && e,
      me = he && "object" == typeof module && module && !module.nodeType && module,
      ve = me && me.exports === he ? r.Buffer : void 0,
      ge = (ve ? ve.isBuffer : void 0) || function () {
    return !1;
  },
      ye = {};

  ye["[object Float32Array]"] = ye["[object Float64Array]"] = ye["[object Int8Array]"] = ye["[object Int16Array]"] = ye["[object Int32Array]"] = ye["[object Uint8Array]"] = ye["[object Uint8ClampedArray]"] = ye["[object Uint16Array]"] = ye["[object Uint32Array]"] = !0, ye["[object Arguments]"] = ye["[object Array]"] = ye["[object ArrayBuffer]"] = ye["[object Boolean]"] = ye["[object DataView]"] = ye["[object Date]"] = ye["[object Error]"] = ye["[object Function]"] = ye["[object Map]"] = ye["[object Number]"] = ye["[object Object]"] = ye["[object RegExp]"] = ye["[object Set]"] = ye["[object String]"] = ye["[object WeakMap]"] = !1;

  var be = "object" == typeof e && e && !e.nodeType && e,
      _e = be && "object" == typeof module && module && !module.nodeType && module,
      ke = _e && _e.exports === be && t.process,
      we = function () {
    try {
      var e = _e && _e.require && _e.require("util").types;

      return e || ke && ke.binding && ke.binding("util");
    } catch (e) {}
  }(),
      Se = we && we.isTypedArray,
      xe = Se ? function (e) {
    return function (t) {
      return e(t);
    };
  }(Se) : function (e) {
    return p(e) && re(e.length) && !!ye[d(e)];
  },
      Oe = xe,
      je = Object.prototype.hasOwnProperty;

  function Ae(e, t) {
    var n = f(e),
        r = !n && fe(e),
        o = !n && !r && ge(e),
        i = !n && !r && !o && Oe(e),
        a = n || r || o || i,
        c = a ? function (e, t) {
      for (var n = -1, r = Array(e); ++n < e;) {
        r[n] = t(n);
      }

      return r;
    }(e.length, String) : [],
        s = c.length;

    for (var u in e) {
      !t && !je.call(e, u) || a && ("length" == u || o && ("offset" == u || "parent" == u) || i && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || V(u, s)) || c.push(u);
    }

    return c;
  }

  function Te(e, t) {
    return function (n) {
      return e(t(n));
    };
  }

  var Ce = Te(Object.keys, Object),
      Ie = Object.prototype.hasOwnProperty;

  function Pe(e) {
    return oe(e) ? Ae(e) : function (e) {
      if (!ce(e)) return Ce(e);
      var t = [];

      for (var n in Object(e)) {
        Ie.call(e, n) && "constructor" != n && t.push(n);
      }

      return t;
    }(e);
  }

  var Fe = Object.prototype.hasOwnProperty;

  function Be(e) {
    if (!g(e)) return function (e) {
      var t = [];
      if (null != e) for (var n in Object(e)) {
        t.push(n);
      }
      return t;
    }(e);
    var t = ce(e),
        n = [];

    for (var r in e) {
      ("constructor" != r || !t && Fe.call(e, r)) && n.push(r);
    }

    return n;
  }

  function Ee(e) {
    return oe(e) ? Ae(e, !0) : Be(e);
  }

  var Ue,
      Re = (Ue = function Ue(e, t) {
    !function (e, t, n, r) {
      var o = !n;
      n || (n = {});

      for (var i = -1, a = t.length; ++i < a;) {
        var c = t[i],
            s = r ? r(n[c], e[c], c, n, e) : void 0;
        void 0 === s && (s = e[c]), o ? Y(n, c, s) : ee(n, c, s);
      }
    }(t, Ee(t), e);
  }, ne(function (e, t) {
    var n = -1,
        r = t.length,
        o = r > 1 ? t[r - 1] : void 0,
        i = r > 2 ? t[2] : void 0;

    for (o = Ue.length > 3 && "function" == typeof o ? (r--, o) : void 0, i && ie(t[0], t[1], i) && (o = r < 3 ? void 0 : o, r = 1), e = Object(e); ++n < r;) {
      var a = t[n];
      a && Ue(e, a, n, o);
    }

    return e;
  })),
      Le = Te(Object.getPrototypeOf, Object),
      Me = Function.prototype,
      ze = Object.prototype,
      De = Me.toString,
      qe = ze.hasOwnProperty,
      Ne = De.call(Object);

  var Ke,
      He = function He(e, t, n) {
    for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
      var c = i[Ke ? a : ++r];
      if (!1 === t(o[c], c, o)) break;
    }

    return e;
  };

  var Je = function (e, t) {
    return function (n, r) {
      if (null == n) return n;
      if (!oe(n)) return e(n, r);

      for (var o = n.length, i = t ? o : -1, a = Object(n); (t ? i-- : ++i < o) && !1 !== r(a[i], i, a);) {
        ;
      }

      return n;
    };
  }(function (e, t) {
    return e && He(e, t, Pe);
  }),
      We = Je,
      Xe = Object.prototype,
      $e = Xe.hasOwnProperty,
      Ge = ne(function (e, t) {
    e = Object(e);
    var n = -1,
        r = t.length,
        o = r > 2 ? t[2] : void 0;

    for (o && ie(t[0], t[1], o) && (r = 1); ++n < r;) {
      for (var i = t[n], a = Ee(i), c = -1, s = a.length; ++c < s;) {
        var u = a[c],
            l = e[u];
        (void 0 === l || Q(l, Xe[u]) && !$e.call(e, u)) && (e[u] = i[u]);
      }
    }

    return e;
  });

  function Ve(e, t) {
    var n;
    return (f(e) ? $ : We)(e, "function" == typeof (n = t) ? n : O);
  }

  function Ye(e) {
    return "string" == typeof e || !f(e) && p(e) && "[object String]" == d(e);
  }

  function Qe(e) {
    return !0 === e || !1 === e || p(e) && "[object Boolean]" == d(e);
  }

  function Ze(e) {
    return p(e) && 1 === e.nodeType && !function (e) {
      if (!p(e) || "[object Object]" != d(e)) return !1;
      var t = Le(e);
      if (null === t) return !0;
      var n = qe.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n instanceof n && De.call(n) == Ne;
    }(e);
  }

  function et(e) {
    return "number" == typeof e && e == x(e);
  }

  function tt(e) {
    return "number" == typeof e || p(e) && "[object Number]" == d(e);
  }

  function nt(e) {
    return function (t) {
      return Object.prototype.toString.call(t) === "[object ".concat(e, "]");
    };
  }

  function rt(e) {
    return nt("Blob")(e);
  }

  function ot(e) {
    return nt("File")(e);
  }

  function it(e) {
    return nt("FileList")(e);
  }

  function at(e, t) {
    return Array.prototype.slice.call(e).map(t);
  }

  function ct(e, t) {
    return Array.prototype.slice.call(e).every(t);
  }

  function st(e, t) {
    return [e, t].reduce(function (e, t) {
      return e.filter(function (e) {
        return -1 === t.indexOf(e);
      });
    });
  }

  function ut(e) {
    return Object.keys(e || {});
  }

  function lt() {}

  function dt() {
    return Math.random().toString(36).slice(2);
  }

  function pt(e) {
    return Ze(e) ? e : Ye(e) ? document.querySelector(e) : null;
  }

  function ft(e, t, n) {
    e.addEventListener && e.addEventListener(t, n, !1);
  }

  function ht(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }

  function mt(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = t ? encodeURIComponent : function (e) {
      return e;
    },
        r = at(ut(e), function (t) {
      var r = e[t];
      return n(t) + "=" + n(p(r) ? JSON.stringify(r) : r);
    });
    return r.join("&");
  }

  function vt(e) {
    if (!f(e)) throw new Error("elements should be an Array");
    return function (t) {
      return e.indexOf(t) > -1;
    };
  }

  function gt(e) {
    if (!f(e)) throw new Error("validators should be an Array");
    return function (t) {
      return e.some(function (e) {
        return e(t);
      });
    };
  }

  var yt = function () {
    var e = {
      _data: {},
      setItem: function setItem(e, t) {
        return this._data[e] = String(t);
      },
      getItem: function getItem(e) {
        return this._data.hasOwnProperty(e) ? this._data[e] : null;
      },
      removeItem: function removeItem(e) {
        return delete this._data[e];
      },
      clear: function clear() {
        return this._data = {};
      }
    };

    try {
      return "localStorage" in window && null !== window.localStorage ? (window.localStorage.setItem("store", ""), window.localStorage.removeItem("store"), window.localStorage) : e;
    } catch (t) {
      return e;
    }
  }();

  function bt(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _t(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? bt(Object(n), !0).forEach(function (t) {
        Ot(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  function kt(e) {
    return kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, kt(e);
  }

  function wt(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function St(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ut(r.key), r);
    }
  }

  function xt(e, t, n) {
    return t && St(e.prototype, t), n && St(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }

  function Ot(e, t, n) {
    return (t = Ut(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function jt(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && Tt(e, t);
  }

  function At(e) {
    return At = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, At(e);
  }

  function Tt(e, t) {
    return Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, Tt(e, t);
  }

  function Ct(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e);
  }

  function It(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = At(e);

      if (t) {
        var o = At(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return Ct(this, n);
    };
  }

  function Pt(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

      if (null != n) {
        var r,
            o,
            i,
            a,
            c = [],
            s = !0,
            u = !1;

        try {
          if (i = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            s = !1;
          } else for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); s = !0) {
            ;
          }
        } catch (e) {
          u = !0, o = e;
        } finally {
          try {
            if (!s && null != n["return"] && (a = n["return"](), Object(a) !== a)) return;
          } finally {
            if (u) throw o;
          }
        }

        return c;
      }
    }(e, t) || Bt(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Ft(e) {
    return function (e) {
      if (Array.isArray(e)) return Et(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || Bt(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Bt(e, t) {
    if (e) {
      if ("string" == typeof e) return Et(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Et(e, t) : void 0;
    }
  }

  function Et(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, r = new Array(t); n < t; n++) {
      r[n] = e[n];
    }

    return r;
  }

  function Ut(e) {
    var t = function (e, t) {
      if ("object" != typeof e || null === e) return e;
      var n = e[Symbol.toPrimitive];

      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != typeof r) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }

      return ("string" === t ? String : Number)(e);
    }(e, "string");

    return "symbol" == typeof t ? t : String(t);
  }

  var Rt = "undefined" != typeof globalThis ? globalThis : true ? window : undefined,
      Lt = function () {
    function e(e) {
      var n = {},
          r = /(dolfin)[ \/]([\w.]+)/.exec(e) || /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(tizen)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || ["", "unknown"];
      return "webkit" === r[1] ? r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || [r[0], "safari", r[2]] : "mozilla" === r[1] ? /trident/.test(e) ? r[1] = "msie" : r[1] = "firefox" : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && (r[1] = "polaris"), n[r[1]] = !0, n.name = r[1], n.version = t(r[2]), n;
    }

    function t(e) {
      var t = {},
          n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
      return t.info = n.join("."), t.major = n[0] || "0", t.minor = n[1] || "0", t.patch = n[2] || "0", t;
    }

    function n(e) {
      return function (e) {
        if (e.match(/ipad/) || e.match(/android/) && !e.match(/mobi|mini|fennec/) || e.match(/macintosh/) && window.navigator.maxTouchPoints > 1) return !0;
        return !1;
      }(e) ? "tablet" : function (e) {
        if (e.match(/linux|windows (nt|98)|macintosh|cros/) && !e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) return !0;
        return !1;
      }(e) ? "pc" : function (e) {
        return !!e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/);
      }(e) ? "mobile" : "";
    }

    function r(e) {
      var n = {},
          r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || !!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && ["", "polaris", "0.0.0"] || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || !!/android/.test(e) && ["", "android", "0.0.0"] || !!/(windows)/.test(e) && ["", "windows", "0.0.0"] || /(mac) os x ([\w._\-]+)/.exec(e) || /(tizen)[ \/]([\w._\-]+);/.exec(e) || !!/(linux)/.test(e) && ["", "linux", "0.0.0"] || !!/webos/.test(e) && ["", "webos", "0.0.0"] || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(e) || /(bada)[ \/]([\w._\-]+)/.exec(e) || !!/bada/.test(e) && ["", "bada", "0.0.0"] || !!/(rim|blackberry|bb10)/.test(e) && ["", "blackberry", "0.0.0"] || ["", "unknown", "0.0.0"];
      return "iphone" === r[1] || "ipad" === r[1] || "ipod" === r[1] ? r[1] = "ios" : "windows" === r[1] && "98" === r[2] && (r[2] = "0.98.0"), "mac" === r[1] && true && window.navigator.maxTouchPoints > 1 && (r[1] = "ios"), "cros" === r[1] && (r[1] = "chrome"), n[r[1]] = !0, n.name = r[1], n.version = t(r[2]), n;
    }

    Array.isArray || (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    });
    var o = ["crios", "fxios", "daumapps"];

    function i(e, n) {
      var r = {},
          i = null,
          a = o;
      Array.isArray(n) ? a = o.concat(n) : "string" == typeof n && (a = o.concat([n]));

      for (var c = 0, s = a.length; c < s; c += 1) {
        var u = a[c];
        if (i = new RegExp("(" + u + ")[ \\/]([\\w._\\-]+)").exec(e)) break;
      }

      return i || (i = ["", ""]), i[1] ? (r.isApp = !0, r.name = i[1], r.version = t(i[2])) : r.isApp = !1, r;
    }

    return function (t, o) {
      var a = function (e) {
        return e ? e.toLowerCase() :  true && window.navigator && "string" == typeof window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : "";
      }(t);

      return {
        ua: a,
        browser: e(a),
        platform: n(a),
        os: r(a),
        app: i(a, o)
      };
    };
  }(),
      Mt = Lt();

  var zt,
      Dt,
      qt,
      Nt,
      Kt = "https://kauth.kakao.com",
      Ht = "https://story.kakao.com",
      Jt = "https://developers.kakao.com",
      Wt = (zt = location, Dt = zt.protocol, qt = zt.hostname, Nt = zt.port, "".concat(Dt, "//").concat(qt).concat(Nt ? ":" + Nt : "")),
      Xt = Mt,
      $t = /KAKAOTALK/i.test(Xt.ua),
      Gt = "1.43.1".concat(""),
      Vt = navigator,
      Yt = ["sdk/".concat(Gt), "os/javascript", "sdk_type/javascript", "lang/".concat(Vt.userLanguage || Vt.language), "device/".concat(Vt.platform.replace(/ /g, "_")), "origin/".concat(encodeURIComponent(Wt))].join(" "),
      Qt = {
    accountDomain: "https://accounts.kakao.com",
    authDomain: Kt,
    authorize: "".concat(Kt, "/oauth/authorize"),
    loginWidget: "".concat(Kt, "/public/widget/login/kakaoLoginWidget.html"),
    redirectUri: "JS-SDK",
    universalKakaoLink: "".concat("https://talk-apps.kakao.com", "/scheme/"),
    talkLoginScheme: "kakaokompassauth://authorize",
    talkLoginRedirectUri: "https://kapi.kakao.com/cors/afterlogin.html",
    talkInappScheme: "kakaotalk://inappbrowser",
    talkSyncpluginScheme: "kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298",
    apiRemote: "".concat("https://kapi.kakao.com", "/cors/"),
    sharerDomain: "https://sharer.kakao.com",
    pickerDomain: "https://friend-picker.kakao.com",
    appsDomain: "https://apps.kakao.com",
    talkLinkScheme: "kakaolink://send",
    talkAndroidPackage: "com.kakao.talk",
    channel: "https://pf.kakao.com",
    channelIcon: "".concat(Jt, "/assets/img/about/logos"),
    storyShare: "".concat(Ht, "/s/share"),
    storyChannelFollow: "".concat(Ht, "/s/follow"),
    storyIcon: "".concat(Jt, "/sdk/js/resources/story/icon_small.png"),
    storyPostScheme: "storylink://posting",
    naviScheme: "kakaonavi-sdk://navigate",
    naviFallback: "https://kakaonavi.kakao.com/launch/index.do"
  },
      Zt = null;

  function en() {
    return Zt;
  }

  function tn(e) {
    Zt = e;
  }

  function nn(e) {
    Error.prototype.constructor.apply(this, arguments), this.name = "KakaoError", this.message = e;
  }

  function rn(e) {
    return Re.apply(void 0, [{
      cleanup: function cleanup() {
        Ve(e, function (e) {
          return e.cleanup && e.cleanup();
        });
      }
    }].concat(Ft(e)));
  }

  function on(e) {
    Ve(e, function (e) {
      e();
    }), e.length = 0;
  }

  function an(e, t, n) {
    if (!1 === t(e)) throw new nn("Illegal argument for ".concat(n));
  }

  function cn() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (!p(e)) throw new Error("params should be an Object");
    j(t.before) && t.before(e), j(t.defaults) ? Ge(e, t.defaults(e)) : Ge(e, t.defaults);
    var r = t.required,
        o = void 0 === r ? {} : r,
        i = t.optional,
        a = void 0 === i ? {} : i,
        c = st(ut(o), ut(e));
    if (c.length > 0) throw new nn("Missing required keys: ".concat(c.join(","), " at ").concat(n));
    var s = Re({}, o, a),
        u = st(ut(e), ut(s));
    if (u.length > 0) throw new nn("Invalid parameter keys: ".concat(u.join(","), " at ").concat(n));
    return Ve(e, function (e, t) {
      an(e, s[t], '"'.concat(t, '" in ').concat(n));
    }), j(t.after) && t.after(e), e;
  }

  function sn() {
    return (Math.random().toString(36).slice(2) + en() + Date.now().toString(36)).slice(0, 60);
  }

  function un(e, t) {
    if (Xt.os.android) {
      var n = JSON.stringify({
        appKey: Zt,
        KA: Yt
      });
      return "market://details?id=".concat(e, "&referrer=").concat(n);
    }

    return Xt.os.ios ? "https://itunes.apple.com/app/id".concat(t) : location.href;
  }

  function ln(e) {
    try {
      return e();
    } catch (e) {
      throw e instanceof TypeError ? new nn("kakao.js should be loaded from a web server") : new nn("EasyXDM - ".concat(e.message));
    }
  }

  nn.prototype = new Error();
  var dn = {};

  function pn(e, t, n) {
    var r = dn[t];
    return r && r.close && !r.closed && r.close(), dn[t] = window.open(e, t, n), dn[t];
  }

  function fn(e, t, n) {
    Ve(n, function (n, r) {
      var o = t.getAttribute(n);
      null !== o && (e[r] = "true" === o || "false" === o ? "true" === o : o);
    });
  }

  function hn(e, t, n) {
    var r = document.createElement("iframe");
    r.id = r.name = e, r.src = t, r.setAttribute("style", "border:none; width:0; height:0; display:none; overflow:hidden;"), document.body.appendChild(r), n.push(function () {
      document.body.removeChild(r);
    });
  }

  function mn(e, t, n) {
    var r = function n(r) {
      var o = r.data,
          i = r.origin;

      if (o && i === t) {
        var a = JSON.parse(o);
        a.code ? e.fail(a) : e.success(a), e.always(a), ht(window, "message", n);
      }
    };

    ft(window, "message", r), n.push(function () {
      ht(window, "message", r);
    });
  }

  function vn(e, t) {
    var n = t.url,
        r = t.popupName,
        o = t.popupFeatures,
        i = Xt.browser.msie ? {} : pn("", r, o);
    return i.focus && i.focus(), gn(e, n, r), i;
  }

  function gn(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = document.createElement("form");
    r.setAttribute("accept-charset", "utf-8"), r.setAttribute("method", "post"), r.setAttribute("action", t), r.setAttribute("target", n), r.setAttribute("style", "display:none"), Ve(e, function (e, t) {
      var n = document.createElement("input");
      n.type = "hidden", n.name = t, n.value = Ye(e) ? e : JSON.stringify(e), r.appendChild(n);
    }), document.body.appendChild(r), r.submit(), document.body.removeChild(r);
  }

  var yn = {};

  var bn = {
    subscribe: function subscribe(e, t) {
      yn[e] = yn[e] || [], yn[e].push(t);
    },
    unsubscribe: function unsubscribe(e, t) {
      for (var n = yn[e], r = 0; r < n.length; r++) {
        if (n[r] === t) return void n.splice(r, 1);
      }
    },
    dispatch: function dispatch(e) {
      Ve(yn[e], function (e) {
        e();
      });
    }
  },
      _n = function () {
    function e(t, n) {
      wt(this, e), this._interval = t, this._maxCount = n, this._count = 0, this._stopped = !1, this._timeout = null;
    }

    return xt(e, [{
      key: "start",
      value: function value(e, t) {
        null !== this._timeout && this.stop(), this._count = 0, this._stopped = !1, this._doPolling(e, t);
      }
    }, {
      key: "_doPolling",
      value: function value(e, t) {
        var n = this;
        this._stopped || (this._timeout = setTimeout(function () {
          ++n._count > n._maxCount ? t() : (e(), n._doPolling(e, t));
        }, this._interval));
      }
    }, {
      key: "stop",
      value: function value() {
        this._stopped = !0, clearTimeout(this._timeout), this._timeout = null;
      }
    }]), e;
  }(),
      kn = {
    success: lt,
    fail: lt,
    always: lt
  },
      wn = _t({
    throughTalk: !0,
    persistAccessToken: !0,
    persistRefreshToken: !1
  }, kn),
      Sn = {
    success: j,
    fail: j,
    always: j,
    persistAccessToken: Qe,
    persistRefreshToken: Qe,
    approvalType: vt(["project"]),
    scope: Ye,
    throughTalk: Qe,
    plusFriendPublicId: Ye,
    channelPublicId: Ye,
    serviceTerms: Ye,
    redirectUri: Ye,
    state: Ye,
    deviceType: vt(["watch", "tv"]),
    nonce: Ye
  },
      xn = {
    optional: {
      success: j,
      fail: j,
      always: j,
      close: j,
      returnUrl: Ye,
      forceMobileLayout: Qe,
      enableBackButton: Qe
    },
    defaults: _t(_t({}, kn), {}, {
      close: lt,
      forceMobileLayout: !1,
      enableBackButton: !0
    })
  },
      On = {
    createLoginButton: {
      required: {
        container: gt([Ze, Ye])
      },
      optional: _t({
        lang: vt(["en", "kr"]),
        size: vt(["small", "medium", "large"])
      }, Sn),
      defaults: _t({
        lang: "kr",
        size: "medium"
      }, wn)
    },
    login: {
      optional: Sn,
      defaults: wn
    },
    authorize: {
      optional: {
        redirectUri: Ye,
        approvalType: vt(["project"]),
        scope: Ye,
        throughTalk: Qe,
        plusFriendPublicId: Ye,
        channelPublicId: Ye,
        serviceTerms: Ye,
        isPopup: Qe,
        state: Ye,
        autoLogin: Qe,
        deviceType: vt(["watch", "tv"]),
        prompts: Ye,
        reauthenticate: Qe,
        throughSyncplugin: Qe,
        loginHint: Ye,
        nonce: Ye,
        success: j,
        fail: j,
        always: j
      },
      defaults: _t({
        throughTalk: !0,
        isPopup: !1,
        reauthenticate: !1,
        throughSyncplugin: !0
      }, kn)
    },
    autoLogin: {
      optional: {
        success: j,
        fail: j,
        always: j
      },
      defaults: kn
    },
    issueAccessToken: {
      required: {
        code: Ye,
        redirectUri: Ye
      },
      optional: {
        success: j,
        fail: j,
        always: j
      },
      defaults: kn
    },
    selectShippingAddress: xn,
    createShippingAddress: xn,
    updateShippingAddress: _t({
      required: {
        addressId: et
      }
    }, xn)
  };

  function jn(e) {
    var t, n, r, o, i, a;
    return pn(e, "_blank", (t = 480, n = 700, r = window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0, o = window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0, i = screen.width / 2 - t / 2 + r, a = screen.height / 2 - n / 2 + o, ["width=".concat(t), "height=".concat(n), "left=".concat(i), "top=".concat(a), "scrollbars=yes", "resizable=1"].join(",")));
  }

  function An(e) {
    return "".concat(Qt.authorize, "?").concat(mt(e));
  }

  function Tn(e) {
    var t = {
      client_id: en()
    };
    return e.approvalType && (t.approval_type = e.approvalType), e.scope && (t.scope = e.scope), e.state && (t.state = e.state), t;
  }

  function Cn(e) {
    var t = {};
    return e.plusFriendPublicId && (t["extra.plus_friend_public_id"] = e.plusFriendPublicId), e.channelPublicId && (t.channel_public_id = e.channelPublicId), e.serviceTerms && (t["extra.service_terms"] = e.serviceTerms), e.autoLogin && (t.prompt = "none"), e.reauthenticate && (t.prompt = "login"), e.prompts && (t.prompt = e.prompts), e.deviceType && (t.device_type = e.deviceType), e.loginHint && (t.login_hint = e.loginHint), e.nonce && (t.nonce = e.nonce), t;
  }

  function In(e) {
    return _t(_t(_t({}, Tn(e)), Cn(e)), {}, {
      redirect_uri: e.redirectUri || Qt.redirectUri,
      response_type: "code",
      auth_tran_id: sn()
    });
  }

  function Pn(e, t) {
    return _t(_t({}, t), {}, {
      ka: Yt,
      is_popup: e.isPopup
    });
  }

  function Fn(e, t) {
    t.error ? e.fail(t) : e.success(t), e.always(t);
  }

  function Bn(e, t) {
    !function (e, t) {
      var n = e.url,
          r = e.method,
          o = e.data,
          i = new XMLHttpRequest();
      if (void 0 !== i.withCredentials) i.open(r, n), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.onreadystatechange = function () {
        i.readyState === XMLHttpRequest.DONE && 200 === i.status && t(i);
      }, i.send(o);else {
        var a = new XDomainRequest();
        a.open(r.toLowerCase(), n), a.onload = function () {
          t({
            status: a.responseText ? 200 : "error",
            response: a.responseText
          });
        }, setTimeout(function () {
          a.send(o);
        }, 0);
      }
    }({
      method: "GET",
      url: e
    }, t);
  }

  var En = new _n(1e3, 600);

  function Un(e) {
    var t,
        n,
        r = In(e),
        o = Pn(e, r),
        i = function (e) {
      var t = !(!Xt.os.ios && !Xt.os.android) && !$t,
          n = !0 === e.reauthenticate || Rn(e.prompts, "login"),
          r = !0 === e.autoLogin || Rn(e.prompts, "none");
      return !(Xt.os.android && /instagram|fb_iab/g.test(Xt.ua)) && t && !n && !0 === e.throughTalk && !r;
    }(e),
        a = Mn(e),
        c = An(o),
        s = i ? function (e, t, n) {
      var r = _t(_t({}, t), {}, {
        is_popup: !0
      }),
          o = function o() {
        return ["intent:#Intent", "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY", "launchFlags=0x08880000", "S.com.kakao.sdk.talk.appKey=".concat(en()), "S.com.kakao.sdk.talk.redirectUri=".concat(r.redirect_uri), "S.com.kakao.sdk.talk.kaHeader=".concat(Yt), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(r)))].concat(Ft(e.state ? ["S.com.kakao.sdk.talk.state=".concat(e.state)] : []), ["S.browser_fallback_url=".concat(encodeURIComponent(n)), "end;"]).join(";");
      },
          i = function i() {
        var t = An(r),
            o = e.isPopup ? t : n,
            i = "".concat(t, "&ka=").concat(encodeURIComponent(Yt)),
            a = "".concat(Qt.talkInappScheme, "?url=").concat(encodeURIComponent(i));
        return "".concat(Qt.universalKakaoLink).concat(encodeURIComponent(a), "&web=").concat(encodeURIComponent(o));
      };

      return Xt.os.android ? o() : i();
    }(e, r, c) : c,
        u = null;

    if (a ? function (e) {
      var t = _t(_t({}, e), {}, {
        is_popup: !0,
        approval_window_type: "v4_bizplugin"
      }),
          n = encodeURIComponent(mt(t));

      location.href = "".concat(Qt.talkSyncpluginScheme, "&query=").concat(n);
    }(o) : e.isPopup ? u = jn(s) : location.href = s, i || a || e.isPopup) {
      var l = (t = r.auth_tran_id, n = mt({
        client_id: en(),
        auth_tran_id: t,
        ka: Yt
      }), "".concat(Qt.authDomain, "/apiweb/code.json?").concat(n));
      En.start(function () {
        Bn(l, function (t) {
          var n = function (e, t) {
            if (200 === t.status && t.response) {
              var n = JSON.parse(t.response);
              if ("ok" === n.status && n.code) return Ln(e, {
                code: n.code
              }), !0;
              if ("error" === n.status && n.error_code && "300" !== n.error_code) return Ln(e, {
                error: n.error,
                error_description: n.error_description
              }), "700" === n.error_code && (location.href = "".concat(Qt.authDomain, "/error/network")), !0;
            }

            return !1;
          }(e, t);

          n && (En.stop(), u && u.close && u.close()), !i && u && u.closed && En.stop();
        });
      }, function () {
        Ln(e, {
          error: "timeout",
          error_description: "LOGIN_TIMEOUT"
        });
      });
    }
  }

  function Rn(e, t) {
    return !!(e && e.indexOf(t) > -1);
  }

  function Ln(e, t) {
    if (e.state && (t.state = e.state), e.redirectUri) {
      var n = e.redirectUri.indexOf("?") > -1 ? "&" : "?";
      location.href = e.redirectUri + n + mt(t);
    } else Fn(e, t);
  }

  function Mn(e) {
    return e.throughSyncplugin && $t && /ch-home/i.test(Xt.ua);
  }

  var zn = Object.freeze({
    __proto__: null,
    authorize: function authorize(e) {
      if (((e = cn(e, On.authorize, "Auth.authorize")).autoLogin || Rn(e.prompts, "none")) && !$t) return Ln(e, {
        error: "auto_login",
        error_description: "NOT_SUPPORTED_BROWSER"
      }), !1;
      Mn(e) && function (e) {
        return !1 === e.isPopup && !Rn(e.prompts, "cert") && window.kakaoweb && "function" == typeof window.kakaoweb.reqSignInLocation;
      }(e) ? function (e) {
        var t = In(e),
            n = Pn(e, t),
            r = mt(_t(_t({}, n), {}, {
          is_popup: !1,
          prompt: "none"
        }));
        return kakaoweb.reqSignInLocation(r).then(function (t) {
          var n = Object.fromEntries(new window.URL(t).searchParams);
          return "consent_required" === n.error && !Rn(e.prompts, "none") || "interaction_required" === n.error || (Ln(e, _t(_t({}, n.code && {
            code: n.code
          }), n.error && {
            error: n.error,
            error_description: n.error_description
          })), !1);
        })["catch"](function (e) {
          return !1;
        });
      }(e).then(function (t) {
        t && Un(e);
      }) : Un(e), bn.dispatch("LOGIN_START");
    }
  });

  function Dn() {
    return Xt.os.android && (2 == Xt.os.version.major && /Version\/\d+.\d+|/i.test(Xt.ua) || 4 == Xt.os.version.major && Xt.os.version.minor < 4 && /Version\/\d+.\d+|/i.test(Xt.ua) || /Version\/\d+\.\d+/i.test(Xt.ua) && (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(Xt.ua) || /; wv\)/i.test(Xt.ua)));
  }

  function qn() {
    return Xt.os.ios && $t;
  }

  var Nn = {
    exports: {}
  };
  !function (e, t) {
    e.exports = function () {
      function e(e) {
        var t = typeof e;
        return null !== e && ("object" === t || "function" === t);
      }

      function t(e) {
        return "function" == typeof e;
      }

      var n = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
          r = 0,
          o = void 0,
          i = void 0,
          a = function a(e, t) {
        b[r] = e, b[r + 1] = t, 2 === (r += 2) && (i ? i(_) : w());
      };

      function c(e) {
        i = e;
      }

      function s(e) {
        a = e;
      }

      var u = true ? window : undefined,
          l = u || {},
          d = l.MutationObserver || l.WebKitMutationObserver,
          p = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

      function h() {
        return function () {
          return process.nextTick(_);
        };
      }

      function m() {
        return void 0 !== o ? function () {
          o(_);
        } : y();
      }

      function v() {
        var e = 0,
            t = new d(_),
            n = document.createTextNode("");
        return t.observe(n, {
          characterData: !0
        }), function () {
          n.data = e = ++e % 2;
        };
      }

      function g() {
        var e = new MessageChannel();
        return e.port1.onmessage = _, function () {
          return e.port2.postMessage(0);
        };
      }

      function y() {
        var e = setTimeout;
        return function () {
          return e(_, 1);
        };
      }

      var b = new Array(1e3);

      function _() {
        for (var e = 0; e < r; e += 2) {
          (0, b[e])(b[e + 1]), b[e] = void 0, b[e + 1] = void 0;
        }

        r = 0;
      }

      function k() {
        try {
          var e = Function("return this")().require("vertx");

          return o = e.runOnLoop || e.runOnContext, m();
        } catch (e) {
          return y();
        }
      }

      var w = void 0;

      function S(e, t) {
        var n = this,
            r = new this.constructor(j);
        void 0 === r[O] && W(r);
        var o = n._state;

        if (o) {
          var i = arguments[o - 1];
          a(function () {
            return N(o, r, i, n._result);
          });
        } else D(n, r, e, t);

        return r;
      }

      function x(e) {
        var t = this;
        if (e && "object" == typeof e && e.constructor === t) return e;
        var n = new t(j);
        return R(n, e), n;
      }

      w = p ? h() : d ? v() : f ? g() : void 0 === u ? k() : y();
      var O = Math.random().toString(36).substring(2);

      function j() {}

      var A = void 0,
          T = 1,
          C = 2;

      function I() {
        return new TypeError("You cannot resolve a promise with itself");
      }

      function P() {
        return new TypeError("A promises callback cannot return that same promise.");
      }

      function F(e, t, n, r) {
        try {
          e.call(t, n, r);
        } catch (e) {
          return e;
        }
      }

      function B(e, t, n) {
        a(function (e) {
          var r = !1,
              o = F(n, t, function (n) {
            r || (r = !0, t !== n ? R(e, n) : M(e, n));
          }, function (t) {
            r || (r = !0, z(e, t));
          }, "Settle: " + (e._label || " unknown promise"));
          !r && o && (r = !0, z(e, o));
        }, e);
      }

      function E(e, t) {
        t._state === T ? M(e, t._result) : t._state === C ? z(e, t._result) : D(t, void 0, function (t) {
          return R(e, t);
        }, function (t) {
          return z(e, t);
        });
      }

      function U(e, n, r) {
        n.constructor === e.constructor && r === S && n.constructor.resolve === x ? E(e, n) : void 0 === r ? M(e, n) : t(r) ? B(e, n, r) : M(e, n);
      }

      function R(t, n) {
        if (t === n) z(t, I());else if (e(n)) {
          var r = void 0;

          try {
            r = n.then;
          } catch (e) {
            return void z(t, e);
          }

          U(t, n, r);
        } else M(t, n);
      }

      function L(e) {
        e._onerror && e._onerror(e._result), q(e);
      }

      function M(e, t) {
        e._state === A && (e._result = t, e._state = T, 0 !== e._subscribers.length && a(q, e));
      }

      function z(e, t) {
        e._state === A && (e._state = C, e._result = t, a(L, e));
      }

      function D(e, t, n, r) {
        var o = e._subscribers,
            i = o.length;
        e._onerror = null, o[i] = t, o[i + T] = n, o[i + C] = r, 0 === i && e._state && a(q, e);
      }

      function q(e) {
        var t = e._subscribers,
            n = e._state;

        if (0 !== t.length) {
          for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) {
            r = t[a], o = t[a + n], r ? N(n, r, o, i) : o(i);
          }

          e._subscribers.length = 0;
        }
      }

      function N(e, n, r, o) {
        var i = t(r),
            a = void 0,
            c = void 0,
            s = !0;

        if (i) {
          try {
            a = r(o);
          } catch (e) {
            s = !1, c = e;
          }

          if (n === a) return void z(n, P());
        } else a = o;

        n._state !== A || (i && s ? R(n, a) : !1 === s ? z(n, c) : e === T ? M(n, a) : e === C && z(n, a));
      }

      function K(e, t) {
        try {
          t(function (t) {
            R(e, t);
          }, function (t) {
            z(e, t);
          });
        } catch (t) {
          z(e, t);
        }
      }

      var H = 0;

      function J() {
        return H++;
      }

      function W(e) {
        e[O] = H++, e._state = void 0, e._result = void 0, e._subscribers = [];
      }

      function X() {
        return new Error("Array Methods must be provided an Array");
      }

      var $ = function () {
        function e(e, t) {
          this._instanceConstructor = e, this.promise = new e(j), this.promise[O] || W(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && M(this.promise, this._result))) : z(this.promise, X());
        }

        return e.prototype._enumerate = function (e) {
          for (var t = 0; this._state === A && t < e.length; t++) {
            this._eachEntry(e[t], t);
          }
        }, e.prototype._eachEntry = function (e, t) {
          var n = this._instanceConstructor,
              r = n.resolve;

          if (r === x) {
            var o = void 0,
                i = void 0,
                a = !1;

            try {
              o = e.then;
            } catch (e) {
              a = !0, i = e;
            }

            if (o === S && e._state !== A) this._settledAt(e._state, t, e._result);else if ("function" != typeof o) this._remaining--, this._result[t] = e;else if (n === ee) {
              var c = new n(j);
              a ? z(c, i) : U(c, e, o), this._willSettleAt(c, t);
            } else this._willSettleAt(new n(function (t) {
              return t(e);
            }), t);
          } else this._willSettleAt(r(e), t);
        }, e.prototype._settledAt = function (e, t, n) {
          var r = this.promise;
          r._state === A && (this._remaining--, e === C ? z(r, n) : this._result[t] = n), 0 === this._remaining && M(r, this._result);
        }, e.prototype._willSettleAt = function (e, t) {
          var n = this;
          D(e, void 0, function (e) {
            return n._settledAt(T, t, e);
          }, function (e) {
            return n._settledAt(C, t, e);
          });
        }, e;
      }();

      function G(e) {
        return new $(this, e).promise;
      }

      function V(e) {
        var t = this;
        return n(e) ? new t(function (n, r) {
          for (var o = e.length, i = 0; i < o; i++) {
            t.resolve(e[i]).then(n, r);
          }
        }) : new t(function (e, t) {
          return t(new TypeError("You must pass an array to race."));
        });
      }

      function Y(e) {
        var t = new this(j);
        return z(t, e), t;
      }

      function Q() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }

      function Z() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }

      var ee = function () {
        function e(t) {
          this[O] = J(), this._result = this._state = void 0, this._subscribers = [], j !== t && ("function" != typeof t && Q(), this instanceof e ? K(this, t) : Z());
        }

        return e.prototype["catch"] = function (e) {
          return this.then(null, e);
        }, e.prototype["finally"] = function (e) {
          var n = this,
              r = n.constructor;
          return t(e) ? n.then(function (t) {
            return r.resolve(e()).then(function () {
              return t;
            });
          }, function (t) {
            return r.resolve(e()).then(function () {
              throw t;
            });
          }) : n.then(e, e);
        }, e;
      }();

      function te() {
        var e = void 0;
        if (void 0 !== Rt) e = Rt;else if ("undefined" != typeof self) e = self;else try {
          e = Function("return this")();
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var t = e.Promise;

        if (t) {
          var n = null;

          try {
            n = Object.prototype.toString.call(t.resolve());
          } catch (e) {}

          if ("[object Promise]" === n && !t.cast) return;
        }

        e.Promise = ee;
      }

      return ee.prototype.then = S, ee.all = G, ee.race = V, ee.resolve = x, ee.reject = Y, ee._setScheduler = c, ee._setAsap = s, ee._asap = a, ee.polyfill = te, ee.Promise = ee, ee;
    }();
  }(Nn);

  var Kn = (function (e, t, n, r, o, i) {
    var a,
        c,
        s,
        u,
        l,
        d = this || e,
        p = Math.floor(1e4 * Math.random()),
        f = Function.prototype,
        h = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        m = /[\-\w]+\/\.\.\//,
        v = /([^:])\/\//g,
        g = "",
        y = {},
        b = e.easyXDM,
        _ = "easyXDM_",
        k = !1;

    function w(e, t) {
      var n = kt(e[t]);
      return "function" == n || !("object" != n || !e[t]) || "unknown" == n;
    }

    function S() {
      var e,
          t = "Shockwave Flash",
          n = "application/x-shockwave-flash";

      if (!E(navigator.plugins) && "object" == kt(navigator.plugins[t])) {
        var r = navigator.plugins[t].description;
        r && !E(navigator.mimeTypes) && navigator.mimeTypes[n] && navigator.mimeTypes[n].enabledPlugin && (c = r.match(/\d+/g));
      }

      if (!c) try {
        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c = Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), e = null;
      } catch (e) {}
      if (!c) return !1;
      var o = parseInt(c[0], 10),
          i = parseInt(c[1], 10);
      return s = o > 9 && i > 0, !0;
    }

    if (w(e, "addEventListener")) u = function u(e, t, n) {
      e.addEventListener(t, n, !1);
    }, l = function l(e, t, n) {
      e.removeEventListener(t, n, !1);
    };else {
      if (!w(e, "attachEvent")) throw new Error("Browser not supported");
      u = function u(e, t, n) {
        e.attachEvent("on" + t, n);
      }, l = function l(e, t, n) {
        e.detachEvent("on" + t, n);
      };
    }
    var x,
        O = !1,
        j = [];

    function A() {
      if (!O) {
        O = !0;

        for (var e = 0; e < j.length; e++) {
          j[e]();
        }

        j.length = 0;
      }
    }

    function T(e, t) {
      O ? e.call(t) : j.push(function () {
        e.call(t);
      });
    }

    function C(e) {
      return e.match(h)[3];
    }

    function I(e) {
      if (e.indexOf("file://") >= 0) return "file://";
      var t = e.toLowerCase().match(h);
      if (!t) return "";
      var n = t[2],
          r = t[3],
          o = t[4] || "";
      return ("http:" == n && ":80" == o || "https:" == n && ":443" == o) && (o = ""), n + "//" + r + o;
    }

    function P(e) {
      if (!(e = e.replace(v, "$1/")).match(/^(http||https):\/\//)) {
        var t = "/" === e.substring(0, 1) ? "" : n.pathname;
        "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)), e = n.protocol + "//" + n.host + t + e;
      }

      for (; m.test(e);) {
        e = e.replace(m, "");
      }

      return e;
    }

    function F(e, t) {
      var n = "",
          r = e.indexOf("#");
      -1 !== r && (n = e.substring(r), e = e.substring(0, r));
      var o = [];

      for (var a in t) {
        t.hasOwnProperty(a) && o.push(a + "=" + i(t[a]));
      }

      return e + (k ? "#" : -1 == e.indexOf("?") ? "?" : "&") + o.join("&") + n;
    }

    "readyState" in t ? (x = t.readyState, O = "complete" == x || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == x || "interactive" == x)) : O = !!t.body, O || (w(e, "addEventListener") ? u(t, "DOMContentLoaded", A) : (u(t, "readystatechange", function () {
      "complete" == t.readyState && A();
    }), t.documentElement.doScroll && e === top && function e() {
      if (!O) {
        try {
          t.documentElement.doScroll("left");
        } catch (t) {
          return void r(e, 1);
        }

        A();
      }
    }()), u(e, "load", A));

    var B = function (e) {
      for (var t, n = {}, r = (e = e.substring(1).split("&")).length; r--;) {
        n[(t = e[r].split("="))[0]] = o(t[1]);
      }

      return n;
    }(/xdm_e=/.test(n.search) ? n.search : n.hash);

    function E(e) {
      return void 0 === e;
    }

    var U,
        _R = function R() {
      var e = {},
          t = {
        a: [1, 2, 3]
      },
          n = '{"a":[1,2,3]}';
      return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (t = n.evalJSON()).a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function (e) {
        return e.evalJSON();
      }), e.stringify && e.parse ? (_R = function R() {
        return e;
      }, e) : null);
    };

    function L(e, t, n) {
      var r;

      for (var o in t) {
        t.hasOwnProperty(o) && (o in e ? "object" === kt(r = t[o]) ? L(e[o], r, n) : n || (e[o] = t[o]) : e[o] = t[o]);
      }

      return e;
    }

    function M(e) {
      var n;
      E(a) && function () {
        var e = t.body.appendChild(t.createElement("form")),
            n = e.appendChild(t.createElement("input"));
        n.name = _ + "TEST" + p, a = n !== e.elements[n.name], t.body.removeChild(e);
      }(), a ? n = t.createElement('<iframe name="' + e.props.name + '"/>') : (n = t.createElement("IFRAME")).name = e.props.name, n.id = n.name = e.props.name, delete e.props.name, "string" == typeof e.container && (e.container = t.getElementById(e.container)), e.container || (L(n.style, {
        position: "absolute",
        top: "-2000px",
        left: "0px"
      }), e.container = t.body);
      var r = e.props.src;

      if (e.props.src = "javascript:false", L(n, e.props), n.border = n.frameBorder = 0, n.allowTransparency = !0, e.container.appendChild(n), e.onLoad && u(n, "load", e.onLoad), e.usePost) {
        var o,
            i = e.container.appendChild(t.createElement("form"));
        if (i.target = n.name, i.action = r, i.method = "POST", "object" === kt(e.usePost)) for (var c in e.usePost) {
          e.usePost.hasOwnProperty(c) && (a ? o = t.createElement('<input name="' + c + '"/>') : (o = t.createElement("INPUT")).name = c, o.value = e.usePost[c], i.appendChild(o));
        }
        i.submit(), i.parentNode.removeChild(i);
      } else n.src = r;

      return e.props.src = r, n;
    }

    function z(e) {
      return e.replace(/[-[\]/{}()+.\^$|]/g, "\\$&").replace(/(\*)/g, ".$1").replace(/\?/g, ".");
    }

    function D(r) {
      var o,
          i = r.protocol;
      if (r.isHost = r.isHost || E(B.xdm_p), k = r.hash || !1, r.props || (r.props = {}), r.isHost) r.remote = P(r.remote), r.channel = r.channel || "default" + p++, r.secret = Math.random().toString(16).substring(2), E(i) && (i = I(n.href) == I(r.remote) ? "4" : w(e, "postMessage") || w(t, "postMessage") ? "1" : r.swf && w(e, "ActiveXObject") && S() ? "6" : "Gecko" === navigator.product && "frameElement" in e && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : r.remoteHelper ? "2" : "0");else if (r.channel = B.xdm_c.replace(/["'<>\\]/g, ""), r.secret = B.xdm_s, r.remote = B.xdm_e.replace(/["'<>\\]/g, ""), i = B.xdm_p, r.acl && !function (e, t) {
        "string" == typeof e && (e = [e]);

        for (var n, r = e.length; r--;) {
          if (n = "^" === e[r].substr(0, 1) && "$" === e[r].substr(e[r].length - 1, 1) ? e[r] : "^" + z(e[r]) + "$", (n = new RegExp(n)).test(t)) return !0;
        }

        return !1;
      }(r.acl, r.remote)) throw new Error("Access denied for " + r.remote);

      switch (r.protocol = i, i) {
        case "0":
          if (L(r, {
            interval: 100,
            delay: 2e3,
            useResize: !0,
            useParent: !1,
            usePolling: !1
          }, !0), r.isHost) {
            if (!r.local) {
              for (var a, s = n.protocol + "//" + n.host, u = t.body.getElementsByTagName("img"), l = u.length; l--;) {
                if ((a = u[l]).src.substring(0, s.length) === s) {
                  r.local = a.src;
                  break;
                }
              }

              r.local || (r.local = e);
            }

            var d = {
              xdm_c: r.channel,
              xdm_p: 0
            };
            r.local === e ? (r.usePolling = !0, r.useParent = !0, r.local = n.protocol + "//" + n.host + n.pathname + n.search, d.xdm_e = r.local, d.xdm_pa = 1) : d.xdm_e = P(r.local), r.container && (r.useResize = !1, d.xdm_po = 1), r.remote = F(r.remote, d);
          } else L(r, {
            useParent: !E(B.xdm_pa),
            usePolling: !E(B.xdm_po),
            useResize: !r.useParent && r.useResize
          });

          o = [new y.stack.HashTransport(r), new y.stack.ReliableBehavior({}), new y.stack.QueueBehavior({
            encode: !0,
            maxLength: 4e3 - r.remote.length
          }), new y.stack.VerifyBehavior({
            initiate: r.isHost
          })];
          break;

        case "1":
          o = [new y.stack.PostMessageTransport(r)];
          break;

        case "2":
          r.isHost && (r.remoteHelper = P(r.remoteHelper)), o = [new y.stack.NameTransport(r), new y.stack.QueueBehavior(), new y.stack.VerifyBehavior({
            initiate: r.isHost
          })];
          break;

        case "3":
          o = [new y.stack.NixTransport(r)];
          break;

        case "4":
          o = [new y.stack.SameOriginTransport(r)];
          break;

        case "5":
          o = [new y.stack.FrameElementTransport(r)];
          break;

        case "6":
          c || S(), o = [new y.stack.FlashTransport(r)];
      }

      return o.push(new y.stack.QueueBehavior({
        lazy: r.lazy,
        remove: !0
      })), o;
    }

    function q(e) {
      for (var t, n = {
        incoming: function incoming(e, t) {
          this.up.incoming(e, t);
        },
        outgoing: function outgoing(e, t) {
          this.down.outgoing(e, t);
        },
        callback: function callback(e) {
          this.up.callback(e);
        },
        init: function init() {
          this.down.init();
        },
        destroy: function destroy() {
          this.down.destroy();
        }
      }, r = 0, o = e.length; r < o; r++) {
        L(t = e[r], n, !0), 0 !== r && (t.down = e[r - 1]), r !== o - 1 && (t.up = e[r + 1]);
      }

      return t;
    }

    L(y, {
      version: "2.5.00.1",
      query: B,
      stack: {},
      apply: L,
      getJSONObject: _R,
      whenReady: T,
      noConflict: function noConflict(t) {
        return e.easyXDM = b, (g = t) && (_ = "easyXDM_" + g.replace(".", "_") + "_"), y;
      }
    }), y.DomHelper = {
      on: u,
      un: l,
      requiresJSON: function requiresJSON(n) {
        (function (e, t) {
          return !("object" != kt(e[t]) || !e[t]);
        })(e, "JSON") || t.write('<script type="text/javascript" src="' + n + '"><\/script>');
      }
    }, U = {}, y.Fn = {
      set: function set(e, t) {
        U[e] = t;
      },
      get: function get(e, t) {
        if (U.hasOwnProperty(e)) {
          var n = U[e];
          return t && delete U[e], n;
        }
      }
    }, y.Socket = function (e) {
      var t = q(D(e).concat([{
        incoming: function incoming(t, n) {
          e.onMessage(t, n);
        },
        callback: function callback(t) {
          e.onReady && e.onReady(t);
        }
      }])),
          n = I(e.remote);
      this.origin = I(e.remote), this.destroy = function () {
        t.destroy();
      }, this.postMessage = function (e) {
        t.outgoing(e, n);
      }, t.init();
    }, y.Rpc = function (e, t) {
      if (t.local) for (var n in t.local) {
        if (t.local.hasOwnProperty(n)) {
          var r = t.local[n];
          "function" == typeof r && (t.local[n] = {
            method: r
          });
        }
      }
      var o = q(D(e).concat([new y.stack.RpcBehavior(this, t), {
        callback: function callback(t) {
          e.onReady && e.onReady(t);
        }
      }]));
      this.origin = I(e.remote), this.context = e.context || null, this.destroy = function () {
        o.destroy();
      }, o.init();
    }, y.stack.SameOriginTransport = function (e) {
      var t, o, i, a;
      return t = {
        outgoing: function outgoing(e, t, n) {
          i(e), n && n();
        },
        destroy: function destroy() {
          o && (o.parentNode.removeChild(o), o = null);
        },
        onDOMReady: function onDOMReady() {
          a = I(e.remote), e.isHost ? (L(e.props, {
            src: F(e.remote, {
              xdm_e: n.protocol + "//" + n.host + n.pathname,
              xdm_c: e.channel,
              xdm_p: 4
            }),
            name: _ + e.channel + "_provider"
          }), o = M(e), y.Fn.set(e.channel, function (e) {
            return i = e, r(function () {
              t.up.callback(!0);
            }, 0), function (e) {
              t.up.incoming(e, a);
            };
          })) : (i = function () {
            var e = parent;
            if ("" !== g) for (var t = 0, n = g.split("."); t < n.length; t++) {
              e = e[n[t]];
            }
            return e.easyXDM;
          }().Fn.get(e.channel, !0)(function (e) {
            t.up.incoming(e, a);
          }), r(function () {
            t.up.callback(!0);
          }, 0));
        },
        init: function init() {
          T(t.onDOMReady, t);
        }
      };
    }, y.stack.FlashTransport = function (e) {
      var o, a, c, u, l;

      function p(e, t) {
        r(function () {
          o.up.incoming(e, c);
        }, 0);
      }

      function f(n) {
        var r = e.swf + "?host=" + e.isHost,
            o = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
        y.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), function () {
          y.stack.FlashTransport[n].swf = u = l.firstChild;

          for (var e = y.stack.FlashTransport[n].queue, t = 0; t < e.length; t++) {
            e[t]();
          }

          e.length = 0;
        }), e.swfContainer ? l = "string" == typeof e.swfContainer ? t.getElementById(e.swfContainer) : e.swfContainer : (L((l = t.createElement("div")).style, s && e.swfNoThrottle ? {
          height: "20px",
          width: "20px",
          position: "fixed",
          right: 0,
          top: 0
        } : {
          height: "1px",
          width: "1px",
          position: "absolute",
          overflow: "hidden",
          right: 0,
          top: 0
        }), t.body.appendChild(l));
        var a = "callback=flash_loaded" + i(n.replace(/[\-.]/g, "_")) + "&proto=" + d.location.protocol + "&domain=" + i(C(d.location.href)) + "&port=" + i(function (e) {
          return e.match(h)[4] || "";
        }(d.location.href)) + "&ns=" + i(g);
        l.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + o + "' data='" + r + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + r + "'></param><param name='flashvars' value='" + a + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + a + "' allowScriptAccess='always' wmode='transparent' src='" + r + "' height='1' width='1'></embed></object>";
      }

      return o = {
        outgoing: function outgoing(t, n, r) {
          u.postMessage(e.channel, t.toString()), r && r();
        },
        destroy: function destroy() {
          try {
            u.destroyChannel(e.channel);
          } catch (e) {}

          u = null, a && (a.parentNode.removeChild(a), a = null);
        },
        onDOMReady: function onDOMReady() {
          c = e.remote, y.Fn.set("flash_" + e.channel + "_init", function () {
            r(function () {
              o.up.callback(!0);
            });
          }), y.Fn.set("flash_" + e.channel + "_onMessage", p), e.swf = P(e.swf);

          var t = C(e.swf),
              i = function i() {
            y.stack.FlashTransport[t].init = !0, (u = y.stack.FlashTransport[t].swf).createChannel(e.channel, e.secret, I(e.remote), e.isHost), e.isHost && (s && e.swfNoThrottle && L(e.props, {
              position: "fixed",
              right: 0,
              top: 0,
              height: "20px",
              width: "20px"
            }), L(e.props, {
              src: F(e.remote, {
                xdm_e: I(n.href),
                xdm_c: e.channel,
                xdm_p: 6,
                xdm_s: e.secret
              }),
              name: _ + e.channel + "_provider"
            }), a = M(e));
          };

          y.stack.FlashTransport[t] && y.stack.FlashTransport[t].init ? i() : y.stack.FlashTransport[t] ? y.stack.FlashTransport[t].queue.push(i) : (y.stack.FlashTransport[t] = {
            queue: [i]
          }, f(t));
        },
        init: function init() {
          T(o.onDOMReady, o);
        }
      };
    }, y.stack.PostMessageTransport = function (t) {
      var o, i, a, c;

      function s(e) {
        if ("string" == typeof e.data) {
          var r = function (e) {
            if (e.origin) return I(e.origin);
            if (e.uri) return I(e.uri);
            if (e.domain) return n.protocol + "//" + e.domain;
            throw "Unable to retrieve the origin of the event";
          }(e);

          r == c && "string" == typeof e.data && e.data.substring(0, t.channel.length + 1) == t.channel + " " && o.up.incoming(e.data.substring(t.channel.length + 1), r);
        }
      }

      function d(n) {
        n.data == t.channel + "-ready" && (a = "postMessage" in i.contentWindow ? i.contentWindow : i.contentWindow.document, l(e, "message", d), u(e, "message", s), r(function () {
          o.up.callback(!0);
        }, 0));
      }

      return o = {
        outgoing: function outgoing(e, n, r) {
          a.postMessage(t.channel + " " + e, n || c), r && r();
        },
        destroy: function destroy() {
          l(e, "message", d), l(e, "message", s), i && (a = null, i.parentNode.removeChild(i), i = null);
        },
        onDOMReady: function onDOMReady() {
          "file://" === (c = I(t.remote)) && (c = "*"), t.isHost ? (u(e, "message", d), L(t.props, {
            src: F(t.remote, {
              xdm_e: I(n.href),
              xdm_c: t.channel,
              xdm_p: 1
            }),
            name: _ + t.channel + "_provider"
          }), i = M(t)) : (u(e, "message", s), (a = "postMessage" in e.parent ? e.parent : e.parent.document).postMessage(t.channel + "-ready", c), r(function () {
            o.up.callback(!0);
          }, 0));
        },
        init: function init() {
          T(o.onDOMReady, o);
        }
      };
    }, y.stack.FrameElementTransport = function (o) {
      var i, a, c, s;
      return i = {
        outgoing: function outgoing(e, t, n) {
          c.call(this, e), n && n();
        },
        destroy: function destroy() {
          a && (a.parentNode.removeChild(a), a = null);
        },
        onDOMReady: function onDOMReady() {
          s = I(o.remote), o.isHost ? (L(o.props, {
            src: F(o.remote, {
              xdm_e: I(n.href),
              xdm_c: o.channel,
              xdm_p: 5
            }),
            name: _ + o.channel + "_provider"
          }), (a = M(o)).fn = function (e) {
            return delete a.fn, c = e, r(function () {
              i.up.callback(!0);
            }, 0), function (e) {
              i.up.incoming(e, s);
            };
          }) : (t.referrer && I(t.referrer) != B.xdm_e && (e.top.location = B.xdm_e), c = e.frameElement.fn(function (e) {
            i.up.incoming(e, s);
          }), i.up.callback(!0));
        },
        init: function init() {
          T(i.onDOMReady, i);
        }
      };
    }, y.stack.NameTransport = function (e) {
      var t, n, o, i, a, c, s, u;

      function d(t) {
        var r = e.remoteHelper + (n ? "#_3" : "#_2") + e.channel;
        o.contentWindow.sendMessage(t, r);
      }

      function p() {
        n ? 2 != ++a && n || t.up.callback(!0) : (d("ready"), t.up.callback(!0));
      }

      function f(e) {
        t.up.incoming(e, s);
      }

      function h() {
        c && r(function () {
          c(!0);
        }, 0);
      }

      return t = {
        outgoing: function outgoing(e, t, n) {
          c = n, d(e);
        },
        destroy: function destroy() {
          o.parentNode.removeChild(o), o = null, n && (i.parentNode.removeChild(i), i = null);
        },
        onDOMReady: function onDOMReady() {
          n = e.isHost, a = 0, s = I(e.remote), e.local = P(e.local), n ? (y.Fn.set(e.channel, function (t) {
            n && "ready" === t && (y.Fn.set(e.channel, f), p());
          }), u = F(e.remote, {
            xdm_e: e.local,
            xdm_c: e.channel,
            xdm_p: 2
          }), L(e.props, {
            src: u + "#" + e.channel,
            name: _ + e.channel + "_provider"
          }), i = M(e)) : (e.remoteHelper = e.remote, y.Fn.set(e.channel, f)), o = M({
            props: {
              src: e.local + "#_4" + e.channel
            },
            onLoad: function t() {
              var n = o || this;
              l(n, "load", t), y.Fn.set(e.channel + "_load", h), function e() {
                "function" == typeof n.contentWindow.sendMessage ? p() : r(e, 50);
              }();
            }
          });
        },
        init: function init() {
          T(t.onDOMReady, t);
        }
      };
    }, y.stack.HashTransport = function (t) {
      var n, o, i, a, c, s, u, l, d, p;

      function f() {
        if (u) {
          var e = u.location.href,
              t = "",
              r = e.indexOf("#");
          -1 != r && (t = e.substring(r)), t && t != c && function (e) {
            c = e, n.up.incoming(c.substring(c.indexOf("_") + 1), p);
          }(t);
        }
      }

      function h() {
        i = setInterval(f, a);
      }

      return n = {
        outgoing: function outgoing(e, n) {
          !function (e) {
            if (l) {
              var n = t.remote + "#" + s++ + "_" + e;
              (o || !d ? l.contentWindow : l).location = n;
            }
          }(e);
        },
        destroy: function destroy() {
          e.clearInterval(i), !o && d || l.parentNode.removeChild(l), l = null;
        },
        onDOMReady: function onDOMReady() {
          if (o = t.isHost, a = t.interval, c = "#" + t.channel, s = 0, d = t.useParent, p = I(t.remote), o) {
            if (L(t.props, {
              src: t.remote,
              name: _ + t.channel + "_provider"
            }), d) t.onLoad = function () {
              u = e, h(), n.up.callback(!0);
            };else {
              var i = 0,
                  f = t.delay / 50;
              !function e() {
                if (++i > f) throw new Error("Unable to reference listenerwindow");

                try {
                  u = l.contentWindow.frames[_ + t.channel + "_consumer"];
                } catch (e) {}

                u ? (h(), n.up.callback(!0)) : r(e, 50);
              }();
            }
            l = M(t);
          } else u = e, h(), d ? (l = parent, n.up.callback(!0)) : (L(t, {
            props: {
              src: t.remote + "#" + t.channel + new Date(),
              name: _ + t.channel + "_consumer"
            },
            onLoad: function onLoad() {
              n.up.callback(!0);
            }
          }), l = M(t));
        },
        init: function init() {
          T(n.onDOMReady, n);
        }
      };
    }, y.stack.ReliableBehavior = function (e) {
      var t,
          n,
          r = 0,
          o = 0,
          i = "";
      return t = {
        incoming: function incoming(e, a) {
          var c = e.indexOf("_"),
              s = e.substring(0, c).split(",");
          e = e.substring(c + 1), s[0] == r && (i = "", n && n(!0)), e.length > 0 && (t.down.outgoing(s[1] + "," + r + "_" + i, a), o != s[1] && (o = s[1], t.up.incoming(e, a)));
        },
        outgoing: function outgoing(e, a, c) {
          i = e, n = c, t.down.outgoing(o + "," + ++r + "_" + e, a);
        }
      };
    }, y.stack.QueueBehavior = function (e) {
      var t,
          n,
          a = [],
          c = !0,
          s = "",
          u = 0,
          l = !1,
          d = !1;

      function p() {
        if (e.remove && 0 === a.length) !function (e) {
          e.up.down = e.down, e.down.up = e.up, e.up = e.down = null;
        }(t);else if (!c && 0 !== a.length && !n) {
          c = !0;
          var o = a.shift();
          t.down.outgoing(o.data, o.origin, function (e) {
            c = !1, o.callback && r(function () {
              o.callback(e);
            }, 0), p();
          });
        }
      }

      return t = {
        init: function init() {
          E(e) && (e = {}), e.maxLength && (u = e.maxLength, d = !0), e.lazy ? l = !0 : t.down.init();
        },
        callback: function callback(e) {
          c = !1;
          var n = t.up;
          p(), n.callback(e);
        },
        incoming: function incoming(n, r) {
          if (d) {
            var i = n.indexOf("_"),
                a = parseInt(n.substring(0, i), 10);
            s += n.substring(i + 1), 0 === a && (e.encode && (s = o(s)), t.up.incoming(s, r), s = "");
          } else t.up.incoming(n, r);
        },
        outgoing: function outgoing(n, r, o) {
          e.encode && (n = i(n));
          var c,
              s = [];

          if (d) {
            for (; 0 !== n.length;) {
              c = n.substring(0, u), n = n.substring(c.length), s.push(c);
            }

            for (; c = s.shift();) {
              a.push({
                data: s.length + "_" + c,
                origin: r,
                callback: 0 === s.length ? o : null
              });
            }
          } else a.push({
            data: n,
            origin: r,
            callback: o
          });

          l ? t.down.init() : p();
        },
        destroy: function destroy() {
          n = !0, t.down.destroy();
        }
      };
    }, y.stack.VerifyBehavior = function (e) {
      var t, n, r;

      function o() {
        n = Math.random().toString(16).substring(2), t.down.outgoing(n);
      }

      return t = {
        incoming: function incoming(i, a) {
          var c = i.indexOf("_");
          -1 === c ? i === n ? t.up.callback(!0) : r || (r = i, e.initiate || o(), t.down.outgoing(i)) : i.substring(0, c) === r && t.up.incoming(i.substring(c + 1), a);
        },
        outgoing: function outgoing(e, r, o) {
          t.down.outgoing(n + "_" + e, r, o);
        },
        callback: function callback(t) {
          e.initiate && o();
        }
      };
    }, y.stack.RpcBehavior = function (e, t) {
      var n,
          r = t.serializer || _R(),
          o = 0,
          i = {};

      function a(e) {
        e.jsonrpc = "2.0", n.down.outgoing(r.stringify(e));
      }

      function c(e, t) {
        var n = Array.prototype.slice;
        return function () {
          var r,
              c = arguments.length,
              s = {
            method: t
          };
          c > 0 && "function" == typeof arguments[c - 1] ? (c > 1 && "function" == typeof arguments[c - 2] ? (r = {
            success: arguments[c - 2],
            error: arguments[c - 1]
          }, s.params = n.call(arguments, 0, c - 2)) : (r = {
            success: arguments[c - 1]
          }, s.params = n.call(arguments, 0, c - 1)), i["" + ++o] = r, s.id = o) : s.params = n.call(arguments, 0), e.namedParams && 1 === s.params.length && (s.params = s.params[0]), a(s);
        };
      }

      function s(t, n, r, o) {
        if (r) {
          var _i2, _c;

          n ? (_i2 = function i(e) {
            _i2 = f, a({
              id: n,
              result: e
            });
          }, _c = function c(e, t) {
            _c = f;
            var r = {
              id: n,
              error: {
                code: -32099,
                message: e
              }
            };
            t && (r.error.data = t), a(r);
          }) : _i2 = _c = f, function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }(o) || (o = [o]);

          try {
            var s = e.context || r.scope,
                u = r.method.apply(s, o.concat([_i2, _c]));
            E(u) || _i2(u);
          } catch (e) {
            _c(e.message);
          }
        } else n && a({
          id: n,
          error: {
            code: -32601,
            message: "Procedure not found."
          }
        });
      }

      return n = {
        incoming: function incoming(e, n) {
          var o = r.parse(e);
          if (o.method) t.handle ? t.handle(o, a) : s(o.method, o.id, t.local[o.method], o.params);else {
            var c = i[o.id];
            o.error ? c.error && c.error(o.error) : c.success && c.success(o.result), delete i[o.id];
          }
        },
        init: function init() {
          if (t.remote) for (var r in t.remote) {
            t.remote.hasOwnProperty(r) && (e[r] = c(t.remote[r], r));
          }
          n.down.init();
        },
        destroy: function destroy() {
          for (var r in t.remote) {
            t.remote.hasOwnProperty(r) && e.hasOwnProperty(r) && delete e[r];
          }

          n.down.destroy();
        }
      };
    }, d.easyXDM = y;
  }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent), easyXDM.noConflict("Kakao")),
      Hn = Kn,
      Jn = function () {
    var e,
        t,
        n = n || function (e, t) {
      var n = {},
          r = n.lib = {},
          o = function o() {},
          i = r.Base = {
        extend: function extend(e) {
          o.prototype = this;
          var t = new o();
          return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
            t.$super.init.apply(this, arguments);
          }), t.init.prototype = t, t.$super = this, t;
        },
        create: function create() {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function init() {},
        mixIn: function mixIn(e) {
          for (var t in e) {
            e.hasOwnProperty(t) && (this[t] = e[t]);
          }

          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function clone() {
          return this.init.prototype.extend(this);
        }
      },
          a = r.WordArray = i.extend({
        init: function init(e, t) {
          e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
        },
        toString: function toString(e) {
          return (e || s).stringify(this);
        },
        concat: function concat(e) {
          var t = this.words,
              n = e.words,
              r = this.sigBytes;
          if (e = e.sigBytes, this.clamp(), r % 4) for (var o = 0; o < e; o++) {
            t[r + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (r + o) % 4 * 8;
          } else if (65535 < n.length) for (o = 0; o < e; o += 4) {
            t[r + o >>> 2] = n[o >>> 2];
          } else t.push.apply(t, n);
          return this.sigBytes += e, this;
        },
        clamp: function clamp() {
          var t = this.words,
              n = this.sigBytes;
          t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e.words = this.words.slice(0), e;
        },
        random: function random(t) {
          for (var n = [], r = 0; r < t; r += 4) {
            n.push(4294967296 * e.random() | 0);
          }

          return new a.init(n, t);
        }
      }),
          c = n.enc = {},
          s = c.Hex = {
        stringify: function stringify(e) {
          var t = e.words;
          e = e.sigBytes;

          for (var n = [], r = 0; r < e; r++) {
            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
          }

          return n.join("");
        },
        parse: function parse(e) {
          for (var t = e.length, n = [], r = 0; r < t; r += 2) {
            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
          }

          return new a.init(n, t / 2);
        }
      },
          u = c.Latin1 = {
        stringify: function stringify(e) {
          var t = e.words;
          e = e.sigBytes;

          for (var n = [], r = 0; r < e; r++) {
            n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
          }

          return n.join("");
        },
        parse: function parse(e) {
          for (var t = e.length, n = [], r = 0; r < t; r++) {
            n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
          }

          return new a.init(n, t);
        }
      },
          l = c.Utf8 = {
        stringify: function stringify(e) {
          try {
            return decodeURIComponent(escape(u.stringify(e)));
          } catch (e) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function parse(e) {
          return u.parse(unescape(encodeURIComponent(e)));
        }
      },
          d = r.BufferedBlockAlgorithm = i.extend({
        reset: function reset() {
          this._data = new a.init(), this._nDataBytes = 0;
        },
        _append: function _append(e) {
          "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
        },
        _process: function _process(t) {
          var n = this._data,
              r = n.words,
              o = n.sigBytes,
              i = this.blockSize,
              c = o / (4 * i);

          if (t = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * i, o = e.min(4 * t, o), t) {
            for (var s = 0; s < t; s += i) {
              this._doProcessBlock(r, s);
            }

            s = r.splice(0, t), n.sigBytes -= o;
          }

          return new a.init(s, o);
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._data = this._data.clone(), e;
        },
        _minBufferSize: 0
      });

      r.Hasher = d.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          d.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new p.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var p = n.algo = {};
      return n;
    }(Math);

    return t = (e = n).lib.WordArray, e.enc.Base64 = {
      stringify: function stringify(e) {
        var t = e.words,
            n = e.sigBytes,
            r = this._map;
        e.clamp(), e = [];

        for (var o = 0; o < n; o += 3) {
          for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; 4 > a && o + .75 * a < n; a++) {
            e.push(r.charAt(i >>> 6 * (3 - a) & 63));
          }
        }

        if (t = r.charAt(64)) for (; e.length % 4;) {
          e.push(t);
        }
        return e.join("");
      },
      parse: function parse(e) {
        var n = e.length,
            r = this._map;
        (o = r.charAt(64)) && -1 != (o = e.indexOf(o)) && (n = o);

        for (var o = [], i = 0, a = 0; a < n; a++) {
          if (a % 4) {
            var c = r.indexOf(e.charAt(a - 1)) << a % 4 * 2,
                s = r.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
            o[i >>> 2] |= (c | s) << 24 - i % 4 * 8, i++;
          }
        }

        return t.create(o, i);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, function (e) {
      function t(e, t, n, r, o, i, a) {
        return ((e = e + (t & n | ~t & r) + o + a) << i | e >>> 32 - i) + t;
      }

      function r(e, t, n, r, o, i, a) {
        return ((e = e + (t & r | n & ~r) + o + a) << i | e >>> 32 - i) + t;
      }

      function o(e, t, n, r, o, i, a) {
        return ((e = e + (t ^ n ^ r) + o + a) << i | e >>> 32 - i) + t;
      }

      function i(e, t, n, r, o, i, a) {
        return ((e = e + (n ^ (t | ~r)) + o + a) << i | e >>> 32 - i) + t;
      }

      for (var a = n, c = (u = a.lib).WordArray, s = u.Hasher, u = a.algo, l = [], d = 0; 64 > d; d++) {
        l[d] = 4294967296 * e.abs(e.sin(d + 1)) | 0;
      }

      u = u.MD5 = s.extend({
        _doReset: function _doReset() {
          this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, n) {
          for (var a = 0; 16 > a; a++) {
            var c = e[s = n + a];
            e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
          }

          a = this._hash.words;
          var s = e[n + 0],
              u = (c = e[n + 1], e[n + 2]),
              d = e[n + 3],
              p = e[n + 4],
              f = e[n + 5],
              h = e[n + 6],
              m = e[n + 7],
              v = e[n + 8],
              g = e[n + 9],
              y = e[n + 10],
              b = e[n + 11],
              _ = e[n + 12],
              k = e[n + 13],
              w = e[n + 14],
              S = e[n + 15],
              x = t(x = a[0], A = a[1], j = a[2], O = a[3], s, 7, l[0]),
              O = t(O, x, A, j, c, 12, l[1]),
              j = t(j, O, x, A, u, 17, l[2]),
              A = t(A, j, O, x, d, 22, l[3]);
          x = t(x, A, j, O, p, 7, l[4]), O = t(O, x, A, j, f, 12, l[5]), j = t(j, O, x, A, h, 17, l[6]), A = t(A, j, O, x, m, 22, l[7]), x = t(x, A, j, O, v, 7, l[8]), O = t(O, x, A, j, g, 12, l[9]), j = t(j, O, x, A, y, 17, l[10]), A = t(A, j, O, x, b, 22, l[11]), x = t(x, A, j, O, _, 7, l[12]), O = t(O, x, A, j, k, 12, l[13]), j = t(j, O, x, A, w, 17, l[14]), x = r(x, A = t(A, j, O, x, S, 22, l[15]), j, O, c, 5, l[16]), O = r(O, x, A, j, h, 9, l[17]), j = r(j, O, x, A, b, 14, l[18]), A = r(A, j, O, x, s, 20, l[19]), x = r(x, A, j, O, f, 5, l[20]), O = r(O, x, A, j, y, 9, l[21]), j = r(j, O, x, A, S, 14, l[22]), A = r(A, j, O, x, p, 20, l[23]), x = r(x, A, j, O, g, 5, l[24]), O = r(O, x, A, j, w, 9, l[25]), j = r(j, O, x, A, d, 14, l[26]), A = r(A, j, O, x, v, 20, l[27]), x = r(x, A, j, O, k, 5, l[28]), O = r(O, x, A, j, u, 9, l[29]), j = r(j, O, x, A, m, 14, l[30]), x = o(x, A = r(A, j, O, x, _, 20, l[31]), j, O, f, 4, l[32]), O = o(O, x, A, j, v, 11, l[33]), j = o(j, O, x, A, b, 16, l[34]), A = o(A, j, O, x, w, 23, l[35]), x = o(x, A, j, O, c, 4, l[36]), O = o(O, x, A, j, p, 11, l[37]), j = o(j, O, x, A, m, 16, l[38]), A = o(A, j, O, x, y, 23, l[39]), x = o(x, A, j, O, k, 4, l[40]), O = o(O, x, A, j, s, 11, l[41]), j = o(j, O, x, A, d, 16, l[42]), A = o(A, j, O, x, h, 23, l[43]), x = o(x, A, j, O, g, 4, l[44]), O = o(O, x, A, j, _, 11, l[45]), j = o(j, O, x, A, S, 16, l[46]), x = i(x, A = o(A, j, O, x, u, 23, l[47]), j, O, s, 6, l[48]), O = i(O, x, A, j, m, 10, l[49]), j = i(j, O, x, A, w, 15, l[50]), A = i(A, j, O, x, f, 21, l[51]), x = i(x, A, j, O, _, 6, l[52]), O = i(O, x, A, j, d, 10, l[53]), j = i(j, O, x, A, y, 15, l[54]), A = i(A, j, O, x, c, 21, l[55]), x = i(x, A, j, O, v, 6, l[56]), O = i(O, x, A, j, S, 10, l[57]), j = i(j, O, x, A, h, 15, l[58]), A = i(A, j, O, x, k, 21, l[59]), x = i(x, A, j, O, p, 6, l[60]), O = i(O, x, A, j, b, 10, l[61]), j = i(j, O, x, A, u, 15, l[62]), A = i(A, j, O, x, g, 21, l[63]);
          a[0] = a[0] + x | 0, a[1] = a[1] + A | 0, a[2] = a[2] + j | 0, a[3] = a[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
              n = t.words,
              r = 8 * this._nDataBytes,
              o = 8 * t.sigBytes;
          n[o >>> 5] |= 128 << 24 - o % 32;
          var i = e.floor(r / 4294967296);

          for (n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (n.length + 1), this._process(), n = (t = this._hash).words, r = 0; 4 > r; r++) {
            o = n[r], n[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
          }

          return t;
        },
        clone: function clone() {
          var e = s.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      }), a.MD5 = s._createHelper(u), a.HmacMD5 = s._createHmacHelper(u);
    }(Math), function () {
      var e,
          t = n,
          r = (e = t.lib).Base,
          o = e.WordArray,
          i = (e = t.algo).EvpKDF = r.extend({
        cfg: r.extend({
          keySize: 4,
          hasher: e.MD5,
          iterations: 1
        }),
        init: function init(e) {
          this.cfg = this.cfg.extend(e);
        },
        compute: function compute(e, t) {
          for (var n = (c = this.cfg).hasher.create(), r = o.create(), i = r.words, a = c.keySize, c = c.iterations; i.length < a;) {
            s && n.update(s);
            var s = n.update(e).finalize(t);
            n.reset();

            for (var u = 1; u < c; u++) {
              s = n.finalize(s), n.reset();
            }

            r.concat(s);
          }

          return r.sigBytes = 4 * a, r;
        }
      });

      t.EvpKDF = function (e, t, n) {
        return i.create(n).compute(e, t);
      };
    }(), n.lib.Cipher || function (e) {
      var t = (h = n).lib,
          r = t.Base,
          o = t.WordArray,
          i = t.BufferedBlockAlgorithm,
          a = h.enc.Base64,
          c = h.algo.EvpKDF,
          s = t.Cipher = i.extend({
        cfg: r.extend(),
        createEncryptor: function createEncryptor(e, t) {
          return this.create(this._ENC_XFORM_MODE, e, t);
        },
        createDecryptor: function createDecryptor(e, t) {
          return this.create(this._DEC_XFORM_MODE, e, t);
        },
        init: function init(e, t, n) {
          this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset();
        },
        reset: function reset() {
          i.reset.call(this), this._doReset();
        },
        process: function process(e) {
          return this._append(e), this._process();
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function _createHelper(e) {
          return {
            encrypt: function encrypt(t, n, r) {
              return ("string" == typeof n ? m : f).encrypt(e, t, n, r);
            },
            decrypt: function decrypt(t, n, r) {
              return ("string" == typeof n ? m : f).decrypt(e, t, n, r);
            }
          };
        }
      });
      t.StreamCipher = s.extend({
        _doFinalize: function _doFinalize() {
          return this._process(!0);
        },
        blockSize: 1
      });

      var u = h.mode = {},
          l = function l(e, t, n) {
        var r = this._iv;
        r ? this._iv = undefined : r = this._prevBlock;

        for (var o = 0; o < n; o++) {
          e[t + o] ^= r[o];
        }
      },
          d = (t.BlockCipherMode = r.extend({
        createEncryptor: function createEncryptor(e, t) {
          return this.Encryptor.create(e, t);
        },
        createDecryptor: function createDecryptor(e, t) {
          return this.Decryptor.create(e, t);
        },
        init: function init(e, t) {
          this._cipher = e, this._iv = t;
        }
      })).extend();

      d.Encryptor = d.extend({
        processBlock: function processBlock(e, t) {
          var n = this._cipher,
              r = n.blockSize;
          l.call(this, e, t, r), n.encryptBlock(e, t), this._prevBlock = e.slice(t, t + r);
        }
      }), d.Decryptor = d.extend({
        processBlock: function processBlock(e, t) {
          var n = this._cipher,
              r = n.blockSize,
              o = e.slice(t, t + r);
          n.decryptBlock(e, t), l.call(this, e, t, r), this._prevBlock = o;
        }
      }), u = u.CBC = d, d = (h.pad = {}).Pkcs7 = {
        pad: function pad(e, t) {
          for (var n, r = (n = (n = 4 * t) - e.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], a = 0; a < n; a += 4) {
            i.push(r);
          }

          n = o.create(i, n), e.concat(n);
        },
        unpad: function unpad(e) {
          e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
        }
      }, t.BlockCipher = s.extend({
        cfg: s.cfg.extend({
          mode: u,
          padding: d
        }),
        reset: function reset() {
          s.reset.call(this);
          var e = (t = this.cfg).iv,
              t = t.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;else n = t.createDecryptor, this._minBufferSize = 1;
          this._mode = n.call(t, this, e && e.words);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          this._mode.processBlock(e, t);
        },
        _doFinalize: function _doFinalize() {
          var e = this.cfg.padding;

          if (this._xformMode == this._ENC_XFORM_MODE) {
            e.pad(this._data, this.blockSize);

            var t = this._process(!0);
          } else t = this._process(!0), e.unpad(t);

          return t;
        },
        blockSize: 4
      });
      var p = t.CipherParams = r.extend({
        init: function init(e) {
          this.mixIn(e);
        },
        toString: function toString(e) {
          return (e || this.formatter).stringify(this);
        }
      }),
          f = (u = (h.format = {}).OpenSSL = {
        stringify: function stringify(e) {
          var t = e.ciphertext;
          return ((e = e.salt) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a);
        },
        parse: function parse(e) {
          var t = (e = a.parse(e)).words;

          if (1398893684 == t[0] && 1701076831 == t[1]) {
            var n = o.create(t.slice(2, 4));
            t.splice(0, 4), e.sigBytes -= 16;
          }

          return p.create({
            ciphertext: e,
            salt: n
          });
        }
      }, t.SerializableCipher = r.extend({
        cfg: r.extend({
          format: u
        }),
        encrypt: function encrypt(e, t, n, r) {
          r = this.cfg.extend(r);
          var o = e.createEncryptor(n, r);
          return t = o.finalize(t), o = o.cfg, p.create({
            ciphertext: t,
            key: n,
            iv: o.iv,
            algorithm: e,
            mode: o.mode,
            padding: o.padding,
            blockSize: e.blockSize,
            formatter: r.format
          });
        },
        decrypt: function decrypt(e, t, n, r) {
          return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext);
        },
        _parse: function _parse(e, t) {
          return "string" == typeof e ? t.parse(e, this) : e;
        }
      })),
          h = (h.kdf = {}).OpenSSL = {
        execute: function execute(e, t, n, r) {
          return r || (r = o.random(8)), e = c.create({
            keySize: t + n
          }).compute(e, r), n = o.create(e.words.slice(t), 4 * n), e.sigBytes = 4 * t, p.create({
            key: e,
            iv: n,
            salt: r
          });
        }
      },
          m = t.PasswordBasedCipher = f.extend({
        cfg: f.cfg.extend({
          kdf: h
        }),
        encrypt: function encrypt(e, t, n, r) {
          return n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize), r.iv = n.iv, (e = f.encrypt.call(this, e, t, n.key, r)).mixIn(n), e;
        },
        decrypt: function decrypt(e, t, n, r) {
          return r = this.cfg.extend(r), t = this._parse(t, r.format), n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt), r.iv = n.iv, f.decrypt.call(this, e, t, n.key, r);
        }
      });
    }(), function () {
      for (var e = n, t = e.lib.BlockCipher, r = e.algo, o = [], i = [], a = [], c = [], s = [], u = [], l = [], d = [], p = [], f = [], h = [], m = 0; 256 > m; m++) {
        h[m] = 128 > m ? m << 1 : m << 1 ^ 283;
      }

      var v = 0,
          g = 0;

      for (m = 0; 256 > m; m++) {
        var y = (y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4) >>> 8 ^ 255 & y ^ 99;
        o[v] = y, i[y] = v;
        var b = h[v],
            _ = h[b],
            k = h[_],
            w = 257 * h[y] ^ 16843008 * y;
        a[v] = w << 24 | w >>> 8, c[v] = w << 16 | w >>> 16, s[v] = w << 8 | w >>> 24, u[v] = w, w = 16843009 * k ^ 65537 * _ ^ 257 * b ^ 16843008 * v, l[y] = w << 24 | w >>> 8, d[y] = w << 16 | w >>> 16, p[y] = w << 8 | w >>> 24, f[y] = w, v ? (v = b ^ h[h[h[k ^ b]]], g ^= h[h[g]]) : v = g = 1;
      }

      var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      r = r.AES = t.extend({
        _doReset: function _doReset() {
          for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), r = this._keySchedule = [], i = 0; i < n; i++) {
            if (i < t) r[i] = e[i];else {
              var a = r[i - 1];
              i % t ? 6 < t && 4 == i % t && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = o[(a = a << 8 | a >>> 24) >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], a ^= S[i / t | 0] << 24), r[i] = r[i - t] ^ a;
            }
          }

          for (e = this._invKeySchedule = [], t = 0; t < n; t++) {
            i = n - t, a = t % 4 ? r[i] : r[i - 4], e[t] = 4 > t || 4 >= i ? a : l[o[a >>> 24]] ^ d[o[a >>> 16 & 255]] ^ p[o[a >>> 8 & 255]] ^ f[o[255 & a]];
          }
        },
        encryptBlock: function encryptBlock(e, t) {
          this._doCryptBlock(e, t, this._keySchedule, a, c, s, u, o);
        },
        decryptBlock: function decryptBlock(e, t) {
          var n = e[t + 1];
          e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, l, d, p, f, i), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
        },
        _doCryptBlock: function _doCryptBlock(e, t, n, r, o, i, a, c) {
          for (var s = this._nRounds, u = e[t] ^ n[0], l = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], p = e[t + 3] ^ n[3], f = 4, h = 1; h < s; h++) {
            var m = r[u >>> 24] ^ o[l >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & p] ^ n[f++],
                v = r[l >>> 24] ^ o[d >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & u] ^ n[f++],
                g = r[d >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & l] ^ n[f++];
            p = r[p >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & d] ^ n[f++], u = m, l = v, d = g;
          }

          m = (c[u >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & p]) ^ n[f++], v = (c[l >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & u]) ^ n[f++], g = (c[d >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & l]) ^ n[f++], p = (c[p >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & d]) ^ n[f++], e[t] = m, e[t + 1] = v, e[t + 2] = g, e[t + 3] = p;
        },
        keySize: 8
      });
      e.AES = t._createHelper(r);
    }(), n;
  }(),
      Wn = Jn;

  function Xn() {
    return en();
  }

  var $n = null;

  function Gn() {
    var e, t, n, r;
    return null === $n && (e = er(), t = yt.getItem(e), $n = t ? (n = t, r = Xn(), Wn.AES.decrypt(n, r).toString(Wn.enc.Utf8)) : null), $n;
  }

  function Vn(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    $n = e, null === e || !1 === t ? Qn(er()) : Yn(er(), e);
  }

  function Yn(e, t) {
    var n,
        r,
        o = (n = t, r = Xn(), Wn.AES.encrypt(n, r).toString());
    yt.setItem(e, o);
  }

  function Qn(e) {
    yt.removeItem(e);
  }

  var Zn = {};

  function er() {
    var e;
    return Zn.accessTokenKey || (Zn.accessTokenKey = "kakao_" + (e = "kat" + Xn(), Wn.MD5(e).toString())), Zn.accessTokenKey;
  }

  var tr = Object.freeze({
    __proto__: null,
    getAppKey: Xn,
    getAccessToken: Gn,
    setAccessToken: Vn,
    getRefreshToken: function getRefreshToken() {
      return console.error("unsupported operation: Auth.getRefreshToken()"), "";
    },
    setRefreshToken: function setRefreshToken(e) {
      console.error("unsupported operation: Auth.setRefreshToken()");
    }
  });

  function nr() {
    return "Bearer ".concat(Gn());
  }

  function rr() {
    return "KakaoAK ".concat(Xn());
  }

  var or = {
    permission: vt(["A", "F", "M"]),
    enable_share: Qe,
    android_exec_param: Ye,
    ios_exec_param: Ye,
    android_market_param: Ye,
    ios_market_param: Ye
  },
      ir = {
    secure_resource: Qe
  };

  function ar(e) {
    !1 === e.secure_resource && (console && console.warn("KakaoWarning: The secure_resource parameter is deprecated."), e.secure_resource = !0);
  }

  function cr(e) {
    if (!Ye(e)) return !1;
    if (0 === e.length || e.length > 2048) throw new nn("content length should be between 0 and 2048");
    return !0;
  }

  function sr(e) {
    return (e.header_image_url || e.header_image_width || e.header_image_height) && (delete e.header_image_url, delete e.header_image_width, delete e.header_image_height, console && console.warn("KakaoWarning: The parameters (".concat(["header_image_url", "header_image_width", "header_image_height"].join(", "), ") for header background image are deprecated."))), !0;
  }

  var ur = {
    "/v1/user/signup": {
      method: "post",
      data: {
        optional: {
          properties: p
        }
      }
    },
    "/v1/user/unlink": {
      method: "post",
      data: {}
    },
    "/v2/user/me": {
      method: "get",
      data: {
        optional: _t({
          property_keys: f
        }, ir)
      }
    },
    "/v1/user/logout": {
      method: "post",
      data: {}
    },
    "/v1/user/update_profile": {
      method: "post",
      data: {
        required: {
          properties: p
        }
      }
    },
    "/v1/user/access_token_info": {
      method: "get",
      data: {}
    },
    "/v2/user/scopes": {
      method: "get",
      data: {
        optional: {
          scopes: f
        }
      }
    },
    "/v2/user/revoke/scopes": {
      method: "post",
      data: {
        required: {
          scopes: f
        }
      }
    },
    "/v1/user/service/terms": {
      method: "get",
      data: {
        optional: {
          extra: Ye
        }
      }
    },
    "/v1/user/shipping_address": {
      method: "get",
      data: {
        optional: {
          address_id: et,
          from_updated_at: et,
          page_size: et
        }
      }
    },
    "/v1/api/talk/profile": {
      method: "get",
      data: {
        optional: ir,
        after: ar
      }
    },
    "/v1/api/talk/friends": {
      method: "get",
      data: {
        optional: _t({
          offset: et,
          limit: et,
          order: Ye,
          friend_order: Ye
        }, ir),
        after: ar
      }
    },
    "/v1/friends": {
      method: "get",
      data: {
        optional: _t({
          offset: et,
          limit: et,
          order: Ye,
          friend_order: Ye
        }, ir),
        after: ar
      }
    },
    "/v2/api/talk/memo/send": {
      method: "post",
      data: {
        required: {
          template_id: et
        },
        optional: {
          template_args: p
        }
      }
    },
    "/v2/api/talk/memo/scrap/send": {
      method: "post",
      data: {
        required: {
          request_url: Ye
        },
        optional: {
          template_id: et,
          template_args: p
        }
      }
    },
    "/v2/api/talk/memo/default/send": {
      method: "post",
      data: {
        required: {
          template_object: function template_object(e) {
            return p(e) && sr(e);
          }
        }
      }
    },
    "/v1/api/talk/friends/message/send": {
      method: "post",
      data: {
        required: {
          template_id: et,
          receiver_uuids: f,
          receiver_id_type: Ye
        },
        optional: {
          template_args: p
        },
        defaults: function defaults() {
          return {
            receiver_id_type: "uuid"
          };
        }
      }
    },
    "/v1/api/talk/friends/message/scrap/send": {
      method: "post",
      data: {
        required: {
          request_url: Ye,
          receiver_uuids: f,
          receiver_id_type: Ye
        },
        optional: {
          template_id: et,
          template_args: p
        },
        defaults: function defaults() {
          return {
            receiver_id_type: "uuid"
          };
        }
      }
    },
    "/v1/api/talk/friends/message/default/send": {
      method: "post",
      data: {
        required: {
          template_object: function template_object(e) {
            return p(e) && sr(e);
          },
          receiver_uuids: f,
          receiver_id_type: Ye
        },
        defaults: function defaults() {
          return {
            receiver_id_type: "uuid"
          };
        }
      }
    },
    "/v2/api/kakaolink/talk/template/validate": {
      method: "get",
      data: {
        required: {
          link_ver: Ye,
          template_id: et
        },
        optional: {
          template_args: p
        }
      },
      authType: rr
    },
    "/v2/api/kakaolink/talk/template/scrap": {
      method: "get",
      data: {
        required: {
          link_ver: Ye,
          request_url: Ye
        },
        optional: {
          template_id: et,
          template_args: p
        }
      },
      authType: rr
    },
    "/v2/api/kakaolink/talk/template/default": {
      method: "get",
      data: {
        required: {
          link_ver: Ye,
          template_object: p
        }
      },
      authType: rr
    },
    "/v2/api/talk/message/image/upload": {
      method: "post",
      data: {
        required: {
          file: p
        }
      },
      authType: rr
    },
    "/v2/api/talk/message/image/delete": {
      method: "delete",
      data: {
        required: {
          image_url: Ye
        }
      },
      authType: rr
    },
    "/v2/api/talk/message/image/scrap": {
      method: "post",
      data: {
        required: {
          image_url: Ye
        }
      },
      authType: rr
    },
    "/v1/api/story/profile": {
      method: "get",
      data: {
        optional: ir
      }
    },
    "/v1/api/story/isstoryuser": {
      method: "get",
      data: {}
    },
    "/v1/api/story/mystory": {
      method: "get",
      data: {
        required: {
          id: Ye
        }
      }
    },
    "/v1/api/story/mystories": {
      method: "get",
      data: {
        optional: {
          last_id: Ye
        }
      }
    },
    "/v1/api/story/linkinfo": {
      method: "get",
      data: {
        required: {
          url: Ye
        }
      }
    },
    "/v1/api/story/post/note": {
      method: "post",
      data: {
        required: {
          content: cr
        },
        optional: or
      }
    },
    "/v1/api/story/post/photo": {
      method: "post",
      data: {
        required: {
          image_url_list: function image_url_list(e) {
            return !!f(e) && ct(e, function (e) {
              if (!Ye(e)) return !1;
              if (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) throw new nn("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");
              return !0;
            });
          }
        },
        optional: _t({
          content: cr
        }, or)
      }
    },
    "/v1/api/story/post/link": {
      method: "post",
      data: {
        required: {
          link_info: p
        },
        optional: _t({
          content: cr
        }, or)
      }
    },
    "/v1/api/story/upload/multi": {
      method: "post",
      data: {}
    },
    "/v1/api/story/delete/mystory": {
      method: "delete",
      data: {
        required: {
          id: Ye
        }
      }
    },
    "/v1/api/talk/channels": {
      method: "get",
      data: {
        optional: {
          channel_public_ids: f
        }
      }
    },
    "/v1/api/talk/plusfriends": {
      method: "get",
      data: {
        optional: {
          plus_friend_public_ids: f
        }
      }
    }
  },
      lr = {
    request: {
      required: {
        url: vt(ut(ur))
      },
      optional: {
        data: p,
        files: function files(e) {
          return gt([f, it])(e) && ct(e, gt([ot, rt]));
        },
        file: ot,
        success: j,
        fail: j,
        always: j
      },
      defaults: {
        data: {},
        success: lt,
        fail: lt,
        always: lt
      }
    },
    api: ur
  },
      dr = null;

  function pr(e) {
    var t = (e = cn(e, lr.request, "API.request")).url,
        n = lr.api[t].data;
    return n && (e.data = cn(e.data, n, "API.request - ".concat(t))), dr || (dr = ln(function () {
      return new Hn.Rpc({
        remote: Qt.apiRemote
      }, {
        remote: {
          request: {}
        }
      });
    }), fr.push(function () {
      dr.destroy(), dr = null;
    })), new Nn.exports.Promise(function (t, n) {
      (function (e) {
        var t = e.url,
            n = lr.api[t],
            r = {};
        Ve(e.data, function (e, t) {
          r[t] = Ye(e) ? e : JSON.stringify(e);
        });
        var o = {
          url: t,
          method: n.method,
          headers: {
            KA: Yt,
            Authorization: (n.authType || nr)(),
            "Cache-Control": "no-cache",
            Pragma: "no-cache"
          },
          data: r
        };
        return new Nn.exports.Promise(function (n, i) {
          if (function (e) {
            return "/v1/api/story/upload/multi" === e || "/v2/api/talk/message/image/upload" === e;
          }(t) || e.data.file) {
            var a = e.files || e.data.file;
            if (!a) throw new nn("'files' parameter should be set for ".concat(t));
            (function (e) {
              var t = at(e, function (e) {
                return function (e) {
                  return new Nn.exports.Promise(function (t, n) {
                    "undefined" == typeof FileReader && n(new nn("File API is not supported for this browser."));
                    var r = new FileReader();
                    r.onload = function (e) {
                      try {
                        t((r = e.target.result, Array.prototype.slice.call(new Uint8Array(r)).reduce(function (e, t) {
                          return e + String.fromCharCode.apply(null, [t]);
                        }, "")));
                      } catch (e) {
                        n(e);
                      }

                      var r;
                    }, r.onerror = function (t) {
                      n(new nn("Cannot read file: ".concat(e.name)));
                    }, r.readAsArrayBuffer(e);
                  });
                }(e).then(function (t) {
                  return {
                    name: e.name,
                    type: e.type,
                    str: t
                  };
                });
              });
              return new Nn.exports.Promise(function (e, n) {
                Nn.exports.Promise.all(t).then(function (t) {
                  e({
                    paramName: "file",
                    data: t
                  });
                }, function (e) {
                  n(e);
                });
              });
            })(a).then(function (e) {
              var t = [];

              for (var i in r) {
                "file" !== i && t.push("".concat(i, "=").concat(encodeURIComponent(r[i])));
              }

              t.length > 0 && (o.url += "?".concat(t.join("&"))), o.file = e, n(o);
            }, function (e) {
              i(e);
            });
          } else n(o);
        });
      })(e).then(function (r) {
        dr.request(r, function (n) {
          e.success(n), e.always(n), t(n);
        }, function (t) {
          var r = function (e) {
            try {
              return JSON.parse(e.message.responseText);
            } catch (e) {
              return {
                code: -777,
                msg: "Unknown error"
              };
            }
          }(t);

          e.fail(r), e.always(r), n(r);
        });
      }, function (e) {
        n(e);
      });
    });
  }

  var fr = [];
  var hr = Object.freeze({
    __proto__: null,
    request: pr,
    cleanup: function cleanup() {
      on(fr);
    }
  });

  function mr(e, t) {
    return Re(e, {
      remote: Qt.loginWidget,
      channel: dt()
    }), ln(function () {
      var n = new Hn.Rpc(e, {
        local: {
          postResponse: t,
          getKakaoAgent: function getKakaoAgent() {
            return Yt;
          }
        },
        remote: {
          getCode: {},
          getAccessToken: {},
          setClient: {},
          setStateToken: {},
          deleteAuthCookie: {}
        }
      });
      return n.channel = e.channel, n;
    });
  }

  var vr = "_blank",
      gr = "width=380, height=520, scrollbars=yes",
      yr = /Version\/4.0/i.test(Xt.ua) || /; wv\)/i.test(Xt.ua),
      br = /naver\(inapp|daumapps|ebay/g.test(Xt.ua) || "object" === ("undefined" == typeof daumApps ? "undefined" : kt(daumApps));

  function _r() {
    return Xt.os.ios ? /safari|FxiOS|CriOS/.test(Xt.ua) || !$t : !!Xt.os.android && Xt.browser.chrome && !/opr\//i.test(Xt.ua) && Xt.browser.version.major >= 30 && (!yr || yr && br);
  }

  var kr = {
    login: function login(e, t, n, r) {
      if (_r()) {
        var o = null;

        if (Xt.os.ios) {
          var i = function (e, t) {
            t.state = e;
            var n = {
              client_id: en(),
              redirect_uri: Qt.redirectUri,
              params: JSON.stringify(t)
            };
            return "".concat(Qt.talkLoginScheme, "?").concat(mt(n));
          }(e, n),
              a = "".concat(Qt.universalKakaoLink).concat(encodeURIComponent(i), "&web=").concat(encodeURIComponent(t));

          r ? location.href = a : o = pn(a, vr, gr);
        } else if (Xt.os.android) {
          var c = function (e, t, n) {
            return ["intent:#Intent", "action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY", "launchFlags=0x08880000", "S.com.kakao.sdk.talk.appKey=".concat(en()), "S.com.kakao.sdk.talk.redirectUri=".concat(Qt.talkLoginRedirectUri), "S.com.kakao.sdk.talk.state=".concat(e), "S.com.kakao.sdk.talk.kaHeader=".concat(Yt), "S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(n))), "S.browser_fallback_url=".concat(encodeURIComponent(t)), "end;"].join(";");
          }(e, t, n);

          r ? location.href = c : Xt.browser.version.major > 40 && (!yr || yr && br) ? o = pn(c, vr, gr) : (o = pn("", vr, gr)) && (o.addEventListener("unload", function () {
            setTimeout(function () {
              o && o.location && (o.location.href = t);
            }, 10);
          }), o.location.href = c);
        }

        return o;
      }
    },
    isSupport: _r
  },
      wr = new _n(1e3, 600);

  function Sr(e) {
    var t = dt() + dt();
    if (kr.isSupport() && e.throughTalk) Tr(e, t);else if (e.redirectUri) location.href = Fr(e);else if (Xt.os.android && $t && Xt.browser.chrome && Xt.browser.version.major >= 71) {
      Tr(e, t, An(Re({}, Tn(e), Cn(e), {
        redirect_uri: Qt.talkLoginRedirectUri,
        response_type: "code",
        state: t,
        ka: Yt,
        origin: Wt
      })));
    } else {
      Xt.browser.msie && parseInt(Xt.browser.version.major) <= 9 || function (e) {
        var t = function t(n) {
          var r = n.origin,
              o = n.data;

          if (/\.kakao\.com$/.test(r) && o && "string" == typeof o) {
            var i = o.split(" ");

            if ("postResponse" === i[1]) {
              var a = JSON.parse(decodeURIComponent(i[2]));
              Br(e, a), ht(window, "message", t);
            }
          }
        };

        ft(window, "message", t), Ur.push(function () {
          ht(window, "message", t);
        });
      }(e), jn(Pr(e, t));
    }
    bn.dispatch("LOGIN_START");
  }

  var xr = null,
      Or = function Or() {
    xr && xr.close && xr.close(), xr = null;
  },
      jr = null,
      Ar = null;

  function Tr(e, t, n) {
    jr || (jr = mr({}, function (t) {
      if ("error" === t.status && t.error_code && "300" !== t.error_code && (wr.stop(), "700" === t.error_code && (location.href = "".concat(Qt.authDomain, "/error/network")), Br(e, {
        error: t.error,
        error_description: t.error_description
      })), t.status) {
        if ("ok" === t.status) {
          if (wr.stop(), Ar === t.code) return;
          Ar = t.code, jr.getAccessToken(t.code, en(), Xt.os.ios && !n ? Qt.redirectUri : Qt.talkLoginRedirectUri, e.approvalType), Or();
        } else Xt.os.ios && "about:blank" === xr.location.href && Or();
      } else Br(e, t);
    }), Ur.push(function () {
      jr.destroy(), jr = null;
    }));
    var r = "";
    if (n) e.redirectUri ? location.href = n : jn(n);else {
      r = e.redirectUri ? Fr(e) : Pr(e, t, Xt.os.ios ? Qt.redirectUri : Qt.talkLoginRedirectUri);
      var o = Re({}, Tn(e), Cn(e));
      setTimeout(function () {
        xr = kr.login(t, r, o, e.redirectUri);
      }, 500);
    }
    wr.start(function () {
      t && jr.getCode(t, en(), Yt);
    }, function () {
      Br(e, {
        error: "timeout",
        description: "Account login timed out. Please login again.",
        error_description: "Account login timed out. Please login again."
      }), e.redirectUri ? location.href = r : jn(r);
    });
  }

  var Cr = null,
      Ir = {};

  function Pr(e, t, n) {
    Cr || (Cr = mr({}, function (e) {
      var t = function (e, t) {
        if (!t[e.stateToken]) throw new nn("security error: #CST2");
        var n = t[e.stateToken];
        return delete t[e.stateToken], delete e.stateToken, n;
      }(e, Ir);

      Br(t, e);
    }), Ur.push(function () {
      Cr.destroy(), Cr = null;
    })), Ir[t] = e;
    var r = e.redirectUri ? e.redirectUri : n || "kakaojs";
    return An(Re({}, Tn(e), Cn(e), {
      redirect_uri: r,
      response_type: "code",
      state: t,
      proxy: "easyXDM_Kakao_".concat(Cr.channel, "_provider"),
      ka: Yt,
      origin: Wt
    }));
  }

  function Fr(e) {
    return An(Re({}, Tn(e), Cn(e), {
      redirect_uri: e.redirectUri,
      response_type: "code",
      ka: Yt,
      origin: Wt
    }));
  }

  function Br(e, t) {
    t.error ? "access_denied" !== t.error && Vn(null) : (Vn(t.access_token, e.persistAccessToken), bn.dispatch("LOGIN")), Fn(e, t);
  }

  var Er = null;
  var Ur = [];
  var Rr = Object.freeze({
    __proto__: null,
    createLoginButton: function createLoginButton(e) {
      var t = pt((e = cn(e, On.createLoginButton, "Auth.createLoginButton")).container);
      if (!t) throw new nn("container is required for Kakao login button: pass in element or id");
      var n = "medium" === e.size ? "02" : "small" === e.size ? "03" : "01",
          r = "".concat(Qt.authDomain, "/public/widget/login/").concat(e.lang, "/").concat(e.lang, "_").concat(n, "_medium"),
          o = "".concat(r, ".png"),
          i = "".concat(r, "_press.png");
      t.innerHTML = '<img\n    id="kakao-login-btn"\n    src='.concat(o, "\n    onmouseover=this.src='").concat(i, "'\n    onmouseout=this.src='").concat(o, '\'\n    style="cursor: pointer"\n  />');

      var a = function a() {
        Sr(e);
      };

      ft(t, "click", a), Ur.push(function () {
        ht(t, "click", a);
      });
    },
    login: function login(e) {
      Sr(e = cn(e, On.login, "Auth.login"));
    },
    loginForm: function loginForm(e) {
      e = cn(e, On.login, "Auth.loginForm");
      var t = dt() + dt(),
          n = "&prompt=login";
      e.redirectUri ? location.href = "".concat(Fr(e)).concat(n) : jn("".concat(Pr(e, t)).concat(n));
    },
    autoLogin: function autoLogin(e) {
      if (e = cn(e, On.autoLogin, "Auth.autoLogin"), qn() || Xt.os.android && $t) {
        var t = dt() + dt();
        Tr(e, t, An(Re({}, Tn(e), {
          redirect_uri: Qt.talkLoginRedirectUri,
          response_type: "code",
          state: t,
          ka: Yt,
          origin: Wt,
          prompt: "none"
        })));
      } else Fn(e, {
        error: "auto_login",
        error_description: "Kakao.Auth.autoLogin is only supported by KakaoTalk InAppBrowser",
        error_code: "400",
        status: "error"
      });

      bn.dispatch("LOGIN_START");
    },
    logout: function logout() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt;
      an(e, j, "Auth.logout"), pr({
        url: "/v1/user/logout",
        always: function always() {
          Vn(null), bn.dispatch("LOGOUT"), e(!0);
        }
      });
    },
    issueAccessToken: function issueAccessToken(e) {
      e = cn(e, On.issueAccessToken, "Auth.issueAccessToken"), Er || (Er = mr({}, function (t) {
        Br(e, t);
      }), Ur.push(function () {
        Er.destroy(), Er = null;
      })), Er.getAccessToken(e.code, en(), e.redirectUri);
    },
    cleanup: function cleanup() {
      on(Ur);
    }
  });

  function Lr(e, t) {
    zr();

    var n = sn(),
        r = _t({
      app_key: en(),
      access_token: Gn(),
      ka: Yt,
      trans_id: n,
      mobile_view: e.forceMobileLayout,
      enable_back_button: e.enableBackButton
    }, e.addressId && {
      address_id: e.addressId
    }),
        o = Qt.appsDomain + t;

    e.returnUrl ? (r.return_url = e.returnUrl, gn(r, o)) : (hn(n, "".concat(Qt.appsDomain, "/proxy?trans_id=").concat(n), Mr), mn(e, Qt.appsDomain, Mr), function (e) {
      var t = function t(n) {
        var r = n.data,
            o = n.origin;
        o !== Qt.appsDomain && o !== Qt.accountDomain || "closed" !== r || (e.close(), ht(window, "message", t));
      };

      ft(window, "message", t);
    }(e), vn(r, {
      url: o,
      popupName: "shipping_address",
      popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
    }));
  }

  var Mr = [];

  function zr() {
    on(Mr);
  }

  var Dr = rn([zn, Rr, tr, Object.freeze({
    __proto__: null,
    getStatusInfo: function getStatusInfo(e) {
      an(e, j, "Auth.getStatusInfo"), Gn() ? pr({
        url: "/v2/user/me",
        success: function success(t) {
          e({
            status: "connected",
            user: t
          });
        },
        fail: function fail() {
          e({
            status: "not_connected"
          });
        }
      }) : e({
        status: "not_connected"
      });
    }
  }), Object.freeze({
    __proto__: null,
    selectShippingAddress: function selectShippingAddress(e) {
      Lr(e = cn(e, On.selectShippingAddress, "Auth.selectShippingAddress"), "/user/address");
    },
    createShippingAddress: function createShippingAddress(e) {
      Lr(e = cn(e, On.createShippingAddress, "Auth.createShippingAddress"), "/user/create/address");
    },
    updateShippingAddress: function updateShippingAddress(e) {
      Lr(e = cn(e, On.updateShippingAddress, "Auth.updateShippingAddress"), "/user/edit/address");
    },
    cleanup: zr
  })]),
      qr = rn([hr]);

  function Nr(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }

  function Kr(e) {
    return e.replace(/[A-Z]/g, function (e) {
      return "_".concat(e.toLowerCase());
    });
  }

  function Hr(e) {
    return p(e) ? JSON.stringify(e) : e;
  }

  function Jr(e, t) {
    return pr({
      url: e,
      data: t
    });
  }

  function Wr(e, t, n) {
    return cn(e, t, 'parameter "'.concat(n, '" in Share')), !0;
  }

  function Xr(e) {
    return ut(e).reduce(function (t, n) {
      return t[Kr(n)] = e[n], t;
    }, {});
  }

  var $r = {
    optional: {
      webUrl: Ye,
      mobileWebUrl: Ye,
      androidExecutionParams: Ye,
      androidExecParams: Ye,
      iosExecutionParams: Ye,
      iosExecParams: Ye
    },
    builder: Vr
  },
      Gr = {
    required: {
      item: Ye,
      itemOp: Ye
    }
  };

  function Vr(e) {
    var t = Xr(e);
    return t.android_exec_params && (t.android_execution_params = t.android_exec_params, delete t.android_exec_params), t.ios_exec_params && (t.ios_execution_params = t.ios_exec_params, delete t.ios_exec_params), t;
  }

  function Yr(e) {
    return {
      title: e.title,
      link: Vr(e.link)
    };
  }

  function Qr(e) {
    var t = Xr(e);
    return t.link = Vr(t.link), t;
  }

  var Zr = {
    headerLink: $r,
    link: $r,
    button: {
      required: {
        title: Ye,
        link: function link(e) {
          Wr(e, $r, "link");
        }
      },
      builder: Yr
    },
    buttons: {
      optional: {
        0: function _(e) {
          Wr(e, Zr.button, "button");
        },
        1: function _(e) {
          Wr(e, Zr.button, "button");
        }
      },
      builder: function builder(e) {
        return at(e, Yr);
      }
    },
    content: {
      required: {
        title: Ye,
        imageUrl: Ye,
        link: function link(e) {
          Wr(e, $r, "link");
        }
      },
      optional: {
        imageWidth: et,
        imageHeight: et,
        description: Ye
      },
      builder: Qr
    },
    contents: {
      optional: {
        0: function _(e) {
          Wr(e, Zr.content, "content");
        },
        1: function _(e) {
          Wr(e, Zr.content, "content");
        },
        2: function _(e) {
          Wr(e, Zr.content, "content");
        }
      },
      builder: function builder(e) {
        return at(e, Qr);
      }
    },
    commerce: {
      required: {
        regularPrice: et
      },
      optional: {
        discountPrice: et,
        discountRate: et,
        fixedDiscountPrice: et,
        currencyUnit: Ye,
        currencyUnitPosition: vt([0, 1]),
        productName: Ye
      },
      builder: Xr
    },
    social: {
      optional: {
        likeCount: et,
        commentCount: et,
        sharedCount: et,
        viewCount: et,
        subscriberCount: et
      },
      builder: Xr
    },
    itemContent: {
      optional: {
        profileText: Ye,
        profileImageUrl: Ye,
        titleImageUrl: Ye,
        titleImageText: Ye,
        titleImageCategory: Ye,
        items: function items(e) {
          return f(e) && e.length < 6 && ct(e, function (e) {
            return Wr(e, Gr, "items.item");
          });
        },
        sum: Ye,
        sumOp: Ye
      },
      builder: function builder(e) {
        var t = Xr(e);
        return t.items && (t.items = at(t.items, function (e) {
          return Xr(e);
        })), t;
      }
    }
  };
  var eo = {
    create: function create(e, t, n) {
      var r = Zr[t];
      if (r) return e = cn(e, r, 'parameter "'.concat(t, '" in ').concat(n || "Share")), r.builder(e);
    }
  },
      to = "4.0",
      no = xt(function e(t, n) {
    wt(this, e), this.appkey = en(), this.appver = "1.0", this.linkver = to, this.extras = _t(_t({
      KA: Yt
    }, t.extras), t.serverCallbackArgs && {
      lcba: Hr(t.serverCallbackArgs)
    }), this.template_json = n.template_msg, this.template_args = n.template_args, this.template_id = n.template_id;
  });
  var ro = xt(function e(t) {
    var n = this;
    wt(this, e), this.link_ver = to, this.template_object = _t({
      object_type: t.objectType
    }, t.buttonTitle && {
      button_title: t.buttonTitle
    }), Ve(t, function (e, t) {
      var r = eo.create(e, t, "defaultObject");
      r && (n.template_object[Kr(t)] = r);
    });
  }),
      oo = {
    FeedLink: ro,
    CommerceLink: ro,
    ListLink: function (e) {
      jt(n, e);
      var t = It(n);

      function n(e) {
        var r;
        return wt(this, n), (r = t.call(this, e)).template_object.header_title = e.headerTitle, console && (e.headerImageUrl || e.headerImageWidth || e.headerImageHeight) && console.warn("KakaoWarning: The parameters (".concat(["headerImageUrl", "headerImageWidth", "headerImageHeight"].join(", "), ") for header background image are deprecated.")), r;
      }

      return xt(n);
    }(ro),
    LocationLink: function (e) {
      jt(n, e);
      var t = It(n);

      function n(e) {
        var r;
        wt(this, n);
        var o = (r = t.call(this, e)).template_object;
        return o.address = e.address || "", o.address_title = e.addressTitle || "", r;
      }

      return xt(n);
    }(ro),
    TextLink: function (e) {
      jt(n, e);
      var t = It(n);

      function n(e) {
        var r;
        return wt(this, n), (r = t.call(this, e)).template_object.text = e.text || "", r;
      }

      return xt(n);
    }(ro)
  },
      io = xt(function e(t) {
    wt(this, e), this.link_ver = to, this.request_url = t.requestUrl, t.templateId && (this.template_id = t.templateId), t.templateArgs && (this.template_args = t.templateArgs);
  }),
      ao = xt(function e(t) {
    wt(this, e), this.link_ver = to, this.template_id = t.templateId, this.template_args = t.templateArgs;
  });

  var co = {
    send: function send(e, t, n) {
      var r = vn(_t({
        app_key: en(),
        ka: Yt,
        validation_action: t,
        validation_params: JSON.stringify(n)
      }, e.serverCallbackArgs && {
        lcba: Hr(e.serverCallbackArgs)
      }), {
        url: "".concat(Qt.sharerDomain, "/picker/link"),
        popupName: "kakao_link_web_sharer",
        popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
      });
      e.callback && function (e, t) {
        if (Xt.browser.msie) return void (console && console.warn("KakaoWarning: The callback parameter does not support the IE browser."));

        var n = function n(e) {
          "sent" === e.data && e.origin === Qt.sharerDomain && t();
        };

        ft(window, "message", n);
        var r = setInterval(function () {
          e.closed && (clearInterval(r), ht(window, "message", n));
        }, 1e3);
      }(r, e.callback);
    }
  },
      so = function () {
    var e = Lt(),
        t = e.os,
        n = ["opr/"],
        r = ["firefox", "KAKAOTALK"];

    function o(e) {
      window.top.location.href = e;
    }

    function i(e, t, n) {
      var r = new Date().getTime();
      return setTimeout(function () {
        var o = new Date().getTime();
        a() && o - r < e + 100 && n(t);
      }, e);
    }

    function a() {
      for (var e = ["hidden", "webkitHidden"], t = 0, n = e.length; t < n; t++) {
        if (void 0 !== document[e[t]]) return !document[e[t]];
      }

      return !0;
    }

    function c(e) {
      setTimeout(function () {
        (function (e) {
          var t = document.createElement("iframe");
          return t.id = e, t.style.border = "none", t.style.width = "0", t.style.height = "0", t.style.display = "none", t.style.overflow = "hidden", document.body.appendChild(t), t;
        })("appLauncher").src = e;
      }, 100);
    }

    return function (s) {
      var u,
          l,
          d,
          p,
          f = "function" == typeof s.willInvokeApp ? s.willInvokeApp : function () {},
          h = "function" == typeof s.onAppMissing ? s.onAppMissing : o,
          m = "function" == typeof s.onUnsupportedEnvironment ? s.onUnsupportedEnvironment : function () {};
      f(), t.android ? (l = e.browser.chrome && +e.browser.version.major >= 25, d = new RegExp(n.join("|"), "i"), p = new RegExp(r.join("|"), "i"), (l && !d.test(e.ua) || p.test(e.ua)) && s.intentURI && !s.useUrlScheme ? function (t) {
        e.browser.chrome ? n() : setTimeout(n, 100);

        function n() {
          top.location.href = t;
        }
      }(s.intentURI) : s.storeURL && (u = s.urlScheme, i(300, s.storeURL, h), c(u))) : t.ios && s.storeURL ? function (t, n, r, o) {
        var s = i(5e3, n, r);
        parseInt(e.os.version.major, 10) < 8 ? function (e) {
          window.addEventListener("pagehide", function t() {
            a() && (clearTimeout(e), window.removeEventListener("pagehide", t));
          });
        }(s) : function (e) {
          document.addEventListener("visibilitychange", function t() {
            a() && (clearTimeout(e), document.removeEventListener("visibilitychange", t));
          });
        }(s);
        parseInt(e.os.version.major, 10) > 8 && e.os.ios ? (void 0 === o ? o = t : clearTimeout(s), function (e) {
          window.top.location.href = e;
        }(o)) : c(t);
      }(s.urlScheme, s.storeURL, h, s.universalLink) : setTimeout(function () {
        m();
      }, 100);
    };
  }(),
      uo = new _n(100, 100),
      lo = "362057947";

  function po(e, t) {
    var n = function (e, t) {
      var n = new no(e, t);
      if (JSON.stringify(n).length > 1e4) throw new nn("Failed to send message because it exceeds the message size limit. Please contact the app administrator.");
      return mt(n);
    }(t, e);

    !function (e, t, n) {
      var r = (Xt.os.ios ? Qt.talkLinkScheme : "") + "?" + e,
          o = "intent://link?".concat(e, "#Intent;scheme=kakaolink"),
          i = "intent:kakaolink://send?".concat(e, "#Intent"),
          a = [/instagram|fb_iab/g.test(Xt.ua) ? o : i, "launchFlags=0x14008000", "".concat(!0 === n ? "package=".concat(Qt.talkAndroidPackage, ";") : "", "end;")].join(";"),
          c = {
        urlScheme: r,
        intentURI: a,
        appName: "KakaoTalk",
        storeURL: un(Qt.talkAndroidPackage, lo),
        onUnsupportedEnvironment: function onUnsupportedEnvironment() {
          t(r);
        }
      };
      (!n || qn() || Dn()) && (c.onAppMissing = lt);
      qn() && (c.universalLink = void 0);

      try {
        so(c);
      } catch (e) {}
    }(n, t.fail, t.installTalk);
    var r = {
      template_msg: e.template_msg || {},
      warning_msg: e.warning_msg || {},
      argument_msg: e.argument_msg || {}
    };
    t.success(r), t.always(r);
  }

  var fo = {
    send: function send(e, t, n) {
      var r = null;

      if (Xt.browser.iphone && /version/.test(Xt.ua.toLowerCase())) {
        var o = null;
        r = function r(e) {
          o = e;
        }, uo.start(function () {
          null !== o && (uo.stop(), po(o, e));
        }, function () {
          var t = {
            error: "timeout",
            error_description: "LINK_TIMEOUT"
          };
          e.fail(t), e.always(t);
        });
      } else r = po;

      return Jr(t, n).then(function (t) {
        r(t, e);
      }, function (e) {
        var t,
            n = JSON.stringify(_t({
          name: "KAPIError"
        }, e));
        location.href = "".concat(Qt.sharerDomain, "/picker/failed?app_key=").concat(en(), "&error=").concat((t = n, window.btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")));
      });
    }
  },
      ho = {
    success: j,
    fail: j,
    always: j,
    callback: j,
    installTalk: Qe,
    throughTalk: Qe,
    extras: p,
    serverCallbackArgs: gt([function (e) {
      try {
        JSON.parse(e);
      } catch (e) {
        return !1;
      }

      return !0;
    }, p])
  },
      mo = {
    success: lt,
    fail: lt,
    always: lt,
    installTalk: !1,
    throughTalk: !0
  };

  function vo(e) {
    if (!f(e)) return !1;
    if (e.length > 2) throw new nn('Illegal argument for "buttons" in Share: size of buttons should be up to 2');
    return !0;
  }

  var go = {
    required: {
      objectType: function objectType(e) {
        return "feed" === e;
      },
      content: p
    },
    optional: Re({
      itemContent: p,
      social: p,
      buttonTitle: Ye,
      buttons: vo
    }, ho),
    defaults: mo
  },
      yo = {
    required: {
      objectType: function objectType(e) {
        return "list" === e;
      },
      headerTitle: Ye,
      headerLink: p,
      contents: function contents(e) {
        if (!f(e)) return !1;
        if (e.length < 2 || e.length > 3) throw new nn('Illegal argument for "contents" in Share: size of contents should be more than 1 and up to 3');
        return !0;
      }
    },
    optional: Re({
      buttonTitle: Ye,
      buttons: vo,
      headerImageUrl: Ye,
      headerImageWidth: et,
      headerImageHeight: et
    }, ho),
    defaults: mo
  },
      bo = {
    required: {
      objectType: function objectType(e) {
        return "commerce" === e;
      },
      content: p,
      commerce: p
    },
    optional: Re({
      buttonTitle: Ye,
      buttons: vo
    }, ho),
    defaults: mo
  },
      _o = {
    required: {
      objectType: function objectType(e) {
        return "location" === e;
      },
      content: p,
      address: Ye
    },
    optional: Re({
      addressTitle: Ye,
      social: p,
      buttonTitle: Ye,
      buttons: vo
    }, ho),
    defaults: mo
  },
      ko = {
    required: {
      objectType: function objectType(e) {
        return "text" === e;
      },
      text: Ye,
      link: p
    },
    optional: Re({
      buttonTitle: Ye,
      buttons: vo
    }, ho),
    defaults: mo
  },
      wo = {
    required: {
      requestUrl: Ye
    },
    optional: Re({
      templateId: et,
      templateArgs: p
    }, ho),
    defaults: Re({
      templateArgs: {}
    }, mo)
  },
      So = {
    required: {
      templateId: et
    },
    optional: Re({
      templateArgs: p
    }, ho),
    defaults: Re({
      templateArgs: {}
    }, mo)
  };

  function xo(e) {
    return Ge({
      required: Re({
        container: gt([Ze, Ye])
      }, e.required)
    }, e);
  }

  var Oo = {
    defaultObjectTypes: ["feed", "list", "commerce", "location", "text"],
    sendFeed: go,
    createFeedButton: xo(go),
    sendList: yo,
    createListButton: xo(yo),
    sendCommerce: bo,
    createCommerceButton: xo(bo),
    sendLocation: _o,
    createLocationButton: xo(_o),
    sendText: ko,
    createTextButton: xo(ko),
    sendScrap: wo,
    createScrapButton: xo(wo),
    sendCustom: So,
    createCustomButton: xo(So),
    uploadImage: {
      required: {
        file: p
      }
    },
    deleteImage: {
      required: {
        imageUrl: Ye
      }
    },
    scrapImage: {
      required: {
        imageUrl: Ye
      }
    }
  };

  function jo(e, t) {
    var n = pt(e.container);
    if (!n) throw new nn("container is required for KakaoTalk sharing: pass in element or id");

    var r = function r(n) {
      n.preventDefault(), n.stopPropagation(), To(e, t);
    };

    ft(n, "click", r), Co.push(function () {
      ht(n, "click", r);
    });
  }

  var Ao = {
    "default": {
      makeLinkFunc: function makeLinkFunc(e) {
        return new (0, oo["".concat(Nr(e.objectType), "Link")])(e);
      },
      requestUrl: "/v2/api/kakaolink/talk/template/default"
    },
    scrap: {
      makeLinkFunc: function makeLinkFunc(e) {
        return new io(e);
      },
      requestUrl: "/v2/api/kakaolink/talk/template/scrap"
    },
    custom: {
      makeLinkFunc: function makeLinkFunc(e) {
        return new ao(e);
      },
      requestUrl: "/v2/api/kakaolink/talk/template/validate"
    }
  };

  function To(e, t) {
    var n = Ao[t],
        r = n.makeLinkFunc,
        o = n.requestUrl,
        i = r(e),
        a = /opr\/|opt\/|huawei/g.test(Xt.ua),
        c = Xt.os.ios && "tablet" === Xt.platform;
    $t || !a && e.throughTalk && ("mobile" === Xt.platform || c) ? fo.send(e, o, i) : co.send(e, t, i);
  }

  var Co = [];
  var Io = rn([Object.freeze({
    __proto__: null,
    createDefaultButton: function createDefaultButton(e) {
      if (!e.objectType || !vt(Oo.defaultObjectTypes)(e.objectType)) throw new nn("objectType should be one of (".concat(Oo.defaultObjectTypes.join(", "), ")"));
      jo(e = cn(e, Oo["create".concat(Nr(e.objectType), "Button")], "Share.createDefaultButton"), "default");
    },
    sendDefault: function sendDefault(e) {
      if (!e.objectType || !vt(Oo.defaultObjectTypes)(e.objectType)) throw new nn("objectType should be one of (".concat(Oo.defaultObjectTypes.join(", "), ")"));
      To(e = cn(e, Oo["send".concat(Nr(e.objectType))], "Share.sendDefault"), "default");
    },
    createScrapButton: function createScrapButton(e) {
      jo(e = cn(e, Oo.createScrapButton, "Share.createScrapButton"), "scrap");
    },
    sendScrap: function sendScrap(e) {
      To(e = cn(e, Oo.sendScrap, "Share.sendScrap"), "scrap");
    },
    createCustomButton: function createCustomButton(e) {
      jo(e = cn(e, Oo.createCustomButton, "Share.createCustomButton"), "custom");
    },
    sendCustom: function sendCustom(e) {
      To(e = cn(e, Oo.sendCustom, "Share.sendCustom"), "custom");
    },
    cleanup: function cleanup() {
      on(Co);
    }
  }), Object.freeze({
    __proto__: null,
    uploadImage: function uploadImage(e) {
      return Jr("/v2/api/talk/message/image/upload", {
        file: (e = cn(e, Oo.uploadImage, "Share.uploadImage")).file
      });
    },
    deleteImage: function deleteImage(e) {
      return Jr("/v2/api/talk/message/image/delete", {
        image_url: (e = cn(e, Oo.deleteImage, "Share.deleteImage")).imageUrl
      });
    },
    scrapImage: function scrapImage(e) {
      return Jr("/v2/api/talk/message/image/scrap", {
        image_url: (e = cn(e, Oo.scrapImage, "Share.scrapImage")).imageUrl
      });
    }
  })]),
      Po = "width=350, height=510";

  function Fo(e, t, n) {
    var r = document.createElement("a");
    r.setAttribute("href", "#");
    var o = document.createElement("img");
    return o.setAttribute("src", t), o.setAttribute("title", n), o.setAttribute("alt", n), e.supportMultipleDensities && o.setAttribute("srcset", [t.replace(".png", "_2X.png 2x"), t.replace(".png", "_3X.png 3x")].join(", ")), r.appendChild(o), r;
  }

  function Bo(e, t) {
    return mt(_t({
      api_ver: e,
      kakao_agent: Yt,
      app_key: en(),
      referer: Wt + location.pathname + location.search
    }, t && {
      lang: t
    }));
  }

  var Eo = ["small", "large"],
      Uo = ["yellow", "mono"],
      Ro = ["pc", "mobile"],
      Lo = ["consult", "question"],
      Mo = ["ko", "en", "ja"],
      zo = {
    createAddChannelButton: {
      required: {
        container: gt([Ze, Ye]),
        channelPublicId: Ye
      },
      optional: {
        size: vt(Eo),
        lang: vt(Mo),
        supportMultipleDensities: Qe
      },
      defaults: {
        size: Eo[0],
        supportMultipleDensities: !1
      }
    },
    addChannel: {
      required: {
        channelPublicId: Ye
      },
      optional: {
        lang: vt(Mo)
      }
    },
    createChatButton: {
      required: {
        container: gt([Ze, Ye]),
        channelPublicId: Ye
      },
      optional: {
        size: vt(Eo),
        color: vt(Uo),
        shape: vt(Ro),
        title: vt(Lo),
        lang: vt(Mo),
        supportMultipleDensities: Qe
      },
      defaults: {
        size: Eo[0],
        color: Uo[0],
        shape: Ro[0],
        title: Lo[0],
        supportMultipleDensities: !1
      }
    },
    chat: {
      required: {
        channelPublicId: Ye
      },
      optional: {
        lang: vt(Mo)
      }
    }
  };

  function Do(e) {
    var t = "".concat(Qt.channel, "/").concat(e.channelPublicId, "/friend");
    null !== en() && (t += "?".concat(Bo("1.1", e.lang))), pn(t, "channel_add_social_plugin", Po);
  }

  function qo(e) {
    var t = "".concat(Qt.channel, "/").concat(e.channelPublicId, "/chat");
    null !== en() && (t += "?".concat(Bo("1.1", e.lang))), pn(t, "channel_chat_social_plugin", Po);
  }

  var No = [];
  var Ko = rn([Object.freeze({
    __proto__: null,
    createAddChannelButton: function createAddChannelButton(e) {
      var t = pt(e.container);
      if (!t) throw new nn("container is required for Channel.createAddChannelButton: pass in element or id");
      fn(e, t, {
        channelPublicId: "data-channel-public-id",
        size: "data-size",
        supportMultipleDensities: "data-support-multiple-densities"
      });

      var n = function (e) {
        var t = "friendadd_".concat(e.size, "_yellow_rect.png");
        return "".concat(Qt.channelIcon, "/channel/").concat(t);
      }(e = cn(e, zo.createAddChannelButton, "Channel.createAddChannelButton")),
          r = Fo(e, n, "카카오톡 채널 추가 버튼");

      t.appendChild(r);

      var o = function o(t) {
        t.preventDefault(), Do(e);
      };

      ft(r, "click", o), No.push(function () {
        ht(r, "click", o), t.removeChild(r);
      });
    },
    addChannel: function addChannel(e) {
      Do(e = cn(e, zo.addChannel, "Channel.addChannel"));
    },
    createChatButton: function createChatButton(e) {
      var t = pt(e.container);
      if (!t) throw new nn("container is required for Channel.createChatButton: pass in element or id");
      fn(e, t, {
        channelPublicId: "data-channel-public-id",
        size: "data-size",
        color: "data-color",
        shape: "data-shape",
        title: "data-title",
        supportMultipleDensities: "data-support-multiple-densities"
      });

      var n = function (e) {
        var t = "".concat(e.title, "_").concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
        return "".concat(Qt.channelIcon, "/channel/").concat(t);
      }(e = cn(e, zo.createChatButton, "Channel.createChatButton")),
          r = Fo(e, n, "카카오톡 채널 1:1 채팅 버튼");

      t.appendChild(r);

      var o = function o(t) {
        t.preventDefault(), qo(e);
      };

      ft(r, "click", o), No.push(function () {
        ht(r, "click", o), t.removeChild(r);
      });
    },
    chat: function chat(e) {
      qo(e = cn(e, zo.chat, "Channel.chat"));
    },
    cleanup: function cleanup() {
      on(No);
    }
  })]),
      Ho = {
    createAddFriendButton: {
      required: {
        container: gt([Ze, Ye]),
        plusFriendId: Ye
      },
      optional: {
        size: vt(["small", "large"]),
        color: vt(["yellow", "black"]),
        shape: vt(["rect", "round"]),
        supportMultipleDensities: Qe
      },
      defaults: {
        size: "small",
        color: "yellow",
        shape: "rect",
        supportMultipleDensities: !1
      }
    },
    addFriend: {
      required: {
        plusFriendId: Ye
      }
    },
    createChatButton: {
      required: {
        container: gt([Ze, Ye]),
        plusFriendId: Ye
      },
      optional: {
        size: vt(["small", "large"]),
        color: vt(["yellow", "mono"]),
        shape: vt(["pc", "mobile"]),
        title: vt(["consult", "question"]),
        supportMultipleDensities: Qe
      },
      defaults: {
        size: "small",
        color: "yellow",
        shape: "pc",
        title: "consult",
        supportMultipleDensities: !1
      }
    },
    chat: {
      required: {
        plusFriendId: Ye
      }
    }
  };

  function Jo() {
    console && console.warn("KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.");
  }

  function Wo(e) {
    var t = "".concat(Qt.channel, "/").concat(e.plusFriendId, "/friend");
    null !== en() && (t += "?".concat(Bo("1.0"))), pn(t, "plus_friend_add_social_plugin", Po);
  }

  function Xo(e) {
    var t = "".concat(Qt.channel, "/").concat(e.plusFriendId, "/chat");
    null !== en() && (t += "?".concat(Bo("1.0"))), pn(t, "plus_friend_chat_social_plugin", Po);
  }

  var $o = [];
  var Go = rn([Object.freeze({
    __proto__: null,
    createAddFriendButton: function createAddFriendButton(e) {
      Jo();
      var t = pt(e.container);
      if (!t) throw new nn("container is required for PlusFriend.createAddFriendButton: pass in element or id");
      fn(e, t, {
        plusFriendId: "data-plusfriend-id",
        size: "data-size",
        color: "data-color",
        shape: "data-shape",
        supportMultipleDensities: "data-support-multiple-densities"
      });

      var n = function (e) {
        var t = "friendadd_".concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
        return "".concat(Qt.channelIcon, "/plusfriend/").concat(t);
      }(e = cn(e, Ho.createAddFriendButton, "PlusFriend.createAddFriendButton")),
          r = Fo(e, n, "플러스친구 친구 추가 버튼");

      t.appendChild(r);

      var o = function o(t) {
        t.preventDefault(), Wo(e);
      };

      ft(r, "click", o), $o.push(function () {
        ht(r, "click", o), t.removeChild(r);
      });
    },
    addFriend: function addFriend(e) {
      Jo(), Wo(e = cn(e, Ho.addFriend, "PlusFriend.addFriend"));
    },
    createChatButton: function createChatButton(e) {
      Jo();
      var t = pt(e.container);
      if (!t) throw new nn("container is required for PlusFriend.createChatButton: pass in element or id");
      fn(e, t, {
        plusFriendId: "data-plusfriend-id",
        size: "data-size",
        color: "data-color",
        shape: "data-shape",
        title: "data-title",
        supportMultipleDensities: "data-support-multiple-densities"
      });

      var n = function (e) {
        var t = "".concat(e.title, "_").concat(e.size, "_").concat(e.color, "_").concat(e.shape, ".png");
        return "".concat(Qt.channelIcon, "/plusfriend/").concat(t);
      }(e = cn(e, Ho.createChatButton, "PlusFriend.createChatButton")),
          r = Fo(e, n, "플러스친구 1:1 채팅 버튼");

      t.appendChild(r);

      var o = function o(t) {
        t.preventDefault(), Xo(e);
      };

      ft(r, "click", o), $o.push(function () {
        ht(r, "click", o), t.removeChild(r);
      });
    },
    chat: function chat(e) {
      Jo(), Xo(e = cn(e, Ho.chat, "PlusFriend.chat"));
    },
    cleanup: function cleanup() {
      on($o);
    }
  })]),
      Vo = {
    required: {
      title: Ye
    },
    optional: {
      desc: Ye,
      name: Ye,
      images: f,
      type: Ye
    },
    defaults: {
      type: "website"
    },
    after: function after(e) {
      e.images && (e.imageurl = e.images, delete e.images);
    }
  },
      Yo = {
    createShareButton: {
      required: {
        container: gt([Ze, Ye])
      },
      optional: {
        url: Ye,
        text: Ye
      },
      defaults: {
        url: location.href
      }
    },
    share: {
      optional: {
        url: Ye,
        text: Ye
      },
      defaults: {
        url: location.href
      }
    },
    open: {
      optional: {
        url: Ye,
        text: Ye,
        urlInfo: function urlInfo(e) {
          return p(e) && !!cn(e, Vo, "Story.open");
        },
        install: Qe
      },
      defaults: {
        url: location.href,
        install: !1
      }
    },
    createFollowButton: {
      required: {
        container: gt([Ze, Ye]),
        id: Ye
      },
      optional: {
        showFollowerCount: Qe,
        type: vt(["horizontal", "vertical"])
      },
      defaults: {
        showFollowerCount: !0,
        type: "horizontal"
      },
      after: function after(e) {
        "@" !== e.id[0] && (e.id = "@".concat(e.id));
      }
    }
  };

  function Qo(e) {
    var t = Re({
      url: e.url
    }, ei());
    e.text && (t.text = e.text), pn("".concat(Qt.storyShare, "?").concat(mt(t)), "kakaostory_social_plugin", "width=670, height=800, scrollbars=yes");
  }

  var Zo = 0;

  function ei() {
    var e = {
      kakao_agent: Yt
    };
    return null !== en() && (e.app_key = en()), e;
  }

  var ti = [];
  var ni = rn([Object.freeze({
    __proto__: null,
    createShareButton: function createShareButton(e) {
      var t = pt(e.container);
      if (!t) throw new nn("container is required for Story.createShareButton: pass in element or id");
      fn(e, t, {
        url: "data-url"
      }), e = cn(e, Yo.createShareButton, "Story.createShareButton");

      var n = function (e, t) {
        var n = document.createElement("a");
        n.setAttribute("href", "#");
        var r = document.createElement("img");
        return r.setAttribute("src", e), r.setAttribute("title", t), r.setAttribute("alt", t), n.appendChild(r), n;
      }(Qt.storyIcon, "카카오스토리 웹 공유 버튼");

      t.appendChild(n);

      var r = function r(t) {
        t.preventDefault(), Qo(e);
      };

      ft(n, "click", r), ti.push(function () {
        ht(n, "click", r), t.removeChild(n);
      });
    },
    share: function share(e) {
      Qo(e = cn(e, Yo.share, "Story.share"));
    },
    open: function open(e) {
      var t = function (e) {
        var t = location.hostname || "",
            n = Re({
          apiver: "1.0",
          appver: Gt,
          appid: t,
          appname: t,
          post: e.text ? "".concat(e.text, "\n").concat(e.url) : e.url
        }, ei());
        e.urlInfo && (n.urlinfo = JSON.stringify(e.urlInfo), n.appname = e.urlInfo.name || n.appname);
        return "".concat(Qt.storyPostScheme, "?").concat(mt(n));
      }(e = cn(e, Yo.open, "Story.open")),
          n = {
        urlScheme: t,
        intentURI: ["intent:".concat(t, "#Intent"), "".concat(e.install ? "package=com.kakao.story;" : "", "end;")].join(";"),
        appName: "KakaoStory",
        storeURL: un("com.kakao.story", "486244601"),
        onUnsupportedEnvironment: function onUnsupportedEnvironment() {
          e.fail && e.fail();
        }
      };

      try {
        so(n);
      } catch (e) {}
    },
    createFollowButton: function createFollowButton(e) {
      var t = pt(e.container);
      if (!t) throw new nn("container is required for Story.createFollowButton: pass in element or id");
      fn(e, t, {
        id: "data-id",
        showFollowerCount: "data-show-follower-count",
        type: "data-type"
      });

      var n = function (e) {
        var t = Zo++,
            n = e.showFollowerCount && "horizontal" === e.type ? 85 : 59,
            r = e.showFollowerCount && "vertical" === e.type ? 46 : 20,
            o = document.createElement("iframe");
        o.src = function (e, t) {
          var n = Re({
            id: e.id,
            type: e.type,
            hideFollower: !e.showFollowerCount,
            frameId: t
          }, ei());
          return "".concat(Qt.storyChannelFollow, "?").concat(mt(n));
        }(e, t), o.setAttribute("frameborder", "0"), o.setAttribute("marginwidth", "0"), o.setAttribute("marginheight", "0"), o.setAttribute("scrolling", "no"), o.setAttribute("style", "width:".concat(n, "px; height:").concat(r, "px;"));

        var i = function i(e) {
          if (e.data && /\.kakao\.com$/.test(e.origin) && "string" == typeof e.data) {
            var i = Pt(at(e.data.split(","), function (e) {
              return parseInt(e, 10);
            }), 3),
                a = i[0],
                c = i[1],
                s = i[2];
            a === t && (n !== c && (o.style.width = "".concat(c, "px")), r !== s && (o.style.height = "".concat(s, "px")));
          }
        };

        return {
          iframe$: o,
          messageHandler: i
        };
      }(e = cn(e, Yo.createFollowButton, "Story.createFollowButton")),
          r = n.iframe$,
          o = n.messageHandler;

      t.appendChild(r), ft(window, "message", o), ti.push(function () {
        ht(window, "message", o), t.removeChild(r);
      });
    },
    cleanup: function cleanup() {
      on(ti);
    }
  })]),
      ri = ["wgs84", "katec"],
      oi = {
    required: {
      name: Ye,
      x: tt,
      y: tt
    },
    optional: {
      rpflag: Ye,
      cid: Ye
    }
  },
      ii = {
    start: {
      required: {
        name: Ye,
        x: tt,
        y: tt
      },
      optional: {
        coordType: vt(ri),
        vehicleType: vt([1, 2, 3, 4, 5, 6, 7]),
        rpOption: vt([1, 2, 3, 4, 5, 6, 8, 100]),
        routeInfo: Qe,
        sX: tt,
        sY: tt,
        sAngle: tt,
        returnUri: Ye,
        rpflag: Ye,
        cid: Ye,
        guideId: tt,
        viaPoints: function viaPoints(e) {
          if (f(e)) {
            if (e.length > 3) throw new nn("Invalid parameter keys: via points should not be exceed 3. at Navi.start");
            return Ve(e, function (e) {
              return cn(e, oi, "Navi.start");
            }), !0;
          }

          return !1;
        }
      },
      defaults: {
        coordType: "katec",
        vehicleType: 1,
        rpOption: 100,
        routeInfo: !1
      }
    },
    share: {
      required: {
        name: Ye,
        x: tt,
        y: tt
      },
      optional: {
        coordType: vt(ri),
        rpflag: Ye,
        cid: Ye,
        guideId: tt
      },
      defaults: {
        coordType: "katec"
      }
    }
  };

  function ai() {
    return {
      appkey: en(),
      apiver: "1.0",
      extras: {
        KA: Yt
      }
    };
  }

  function ci(e, t) {
    var n = {
      urlScheme: e,
      intentURI: ["intent:".concat(e, "#Intent"), "S.browser_fallback_url=".concat(encodeURIComponent(t)), "end;"].join(";"),
      storeURL: t,
      universalLink: t
    };

    try {
      so(n);
    } catch (e) {}
  }

  var si = rn([Object.freeze({
    __proto__: null,
    start: function start(e) {
      var t = mt(function (e) {
        var t = {
          name: e.name,
          x: e.x,
          y: e.y,
          rpflag: e.rpflag,
          cid: e.cid,
          guide_id: e.guideId
        },
            n = {
          coord_type: e.coordType,
          vehicle_type: e.vehicleType,
          rpoption: e.rpOption,
          route_info: e.routeInfo,
          s_x: e.sX,
          s_y: e.sY,
          s_angle: e.sAngle,
          return_uri: e.returnUri
        };
        return _t(_t({}, ai()), {}, {
          param: {
            destination: t,
            option: n,
            via_list: e.viaPoints
          }
        });
      }(e = cn(e, ii.start, "Navi.start")));
      ci("".concat(Qt.naviScheme, "?").concat(t), "".concat(Qt.naviFallback, "?").concat(t));
    },
    share: function share(e) {
      var t = mt(function (e) {
        var t = {
          name: e.name,
          x: e.x,
          y: e.y,
          rpflag: e.rpflag,
          cid: e.cid,
          guide_id: e.guideId
        },
            n = {
          route_info: !0,
          coord_type: e.coordType
        };
        return _t(_t({}, ai()), {}, {
          param: {
            destination: t,
            option: n
          }
        });
      }(e = cn(e, ii.share, "Navi.share")));
      ci("".concat(Qt.naviScheme, "?").concat(t), "".concat(Qt.naviFallback, "?").concat(t));
    }
  })]);

  function ui(e) {
    return et(e) && e > 0 && e < 101;
  }

  function li(e) {
    if (e.maxPickableCount < e.minPickableCount) throw new nn('"minPickableCount" should not larger than "maxPickableCount"');
  }

  function di(e) {
    var t = {
      required: {
        reason: vt(["msgBlocked", "registered", "unregistered", "notFriend", "custom"])
      },
      optional: {
        message: Ye,
        uuids: f
      },
      after: function after(e) {
        if (!("custom" !== e.reason || e.message && e.uuids)) throw new nn('"message" and "uuids" must be set for "custom" option in disableSelectOption');
      }
    };
    return f(e) && ct(e, function (e) {
      return p(e) && !!cn(e, t, "disableSelectOption");
    });
  }

  function pi(e) {
    if ("chatMember" === e.selectionType) {
      var t = e.chatFilters;
      if (t.indexOf("open") > -1) throw new nn('"open" is not allowed in "chatFilters"');
      if ((t.indexOf("direct") > -1 || t.indexOf("multi") > -1) && -1 === t.indexOf("regular")) throw new nn('"regular" should be included in "chatFilters"');
    }
  }

  var fi = ["none", "invitable", "registered"],
      hi = ["talk", "story", "talkstory"],
      mi = ["chat", "chatMember"],
      vi = ["regular", "direct", "multi", "open"],
      gi = ["all", "ios", "android"],
      yi = {
    returnUrl: Ye,
    success: j,
    fail: j,
    always: j,
    friendFilter: vt(fi),
    serviceTypeFilter: vt(hi),
    title: Ye,
    enableSearch: Qe,
    countryCodeFilters: f,
    usingOsFilter: vt(gi),
    showMyProfile: Qe,
    showFavorite: Qe,
    disableSelectOptions: di,
    displayAllProfile: Qe,
    enableBackButton: Qe
  },
      bi = {
    success: lt,
    fail: lt,
    always: lt
  },
      _i = {
    optional: {
      friendFilter: vt(fi),
      serviceTypeFilter: vt(hi),
      countryCodeFilters: f,
      usingOsFilter: vt(gi),
      showMyProfile: Qe,
      showFavorite: Qe,
      showPickedFriend: Qe
    }
  },
      ki = {
    optional: {
      selectionType: vt(mi),
      chatFilters: function chatFilters(e) {
        return f(e) && ct(e, function (e) {
          return vt(vi)(e);
        });
      }
    },
    defaults: {
      selectionType: mi[0],
      chatFilters: [vi[0]]
    },
    after: pi
  },
      wi = {
    selectFriend: {
      optional: yi,
      defaults: bi
    },
    selectFriends: {
      optional: _t(_t({}, yi), {}, {
        showPickedFriend: Qe,
        maxPickableCount: ui,
        minPickableCount: ui
      }),
      defaults: bi,
      after: li
    },
    selectChat: {
      optional: {
        returnUrl: Ye,
        success: j,
        fail: j,
        always: j,
        selectionType: vt(mi),
        chatFilters: function chatFilters(e) {
          return f(e) && ct(e, function (e) {
            return vt(vi)(e);
          });
        },
        title: Ye,
        enableSearch: Qe,
        disableSelectOptions: di,
        displayAllProfile: Qe,
        maxPickableCount: ui,
        minPickableCount: ui,
        enableBackButton: Qe
      },
      defaults: {
        success: lt,
        fail: lt,
        always: lt,
        selectionType: mi[0],
        chatFilters: [vi[0]]
      },
      after: function after(e) {
        li(e), pi(e);
      }
    },
    select: {
      optional: {
        returnUrl: Ye,
        success: j,
        fail: j,
        always: j,
        title: Ye,
        enableSearch: Qe,
        disableSelectOptions: di,
        displayAllProfile: Qe,
        maxPickableCount: ui,
        minPickableCount: ui,
        enableBackButton: Qe,
        friendsParams: function friendsParams(e) {
          return p(e) && !!cn(e, _i, "Picker.select");
        },
        chatParams: function chatParams(e) {
          return p(e) && !!cn(e, ki, "Picker.select");
        }
      },
      defaults: {
        success: lt,
        fail: lt,
        always: lt
      },
      after: li
    }
  };

  function Si(e, t, n) {
    ji();

    var r = sn(),
        o = _t(_t({
      transId: r,
      appKey: en(),
      ka: Yt
    }, Gn() && {
      token: Gn()
    }), function (e) {
      ["countryCodeFilters", "chatFilters"].forEach(function (t) {
        void 0 !== e[t] && (e[t] = e[t].join(","));
      }), e.disableSelectOptions && (e.disableSelectOptions = JSON.stringify(e.disableSelectOptions));
      return e;
    }(t)),
        i = Qt.pickerDomain + n;

    e.returnUrl ? (o.returnUrl = e.returnUrl, gn(o, i)) : (hn(r, "".concat(Qt.pickerDomain, "/proxy?transId=").concat(r), Oi), mn(e, Qt.pickerDomain, Oi), vn(o, {
      url: i,
      popupName: "friend_picker",
      popupFeatures: "location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"
    }));
  }

  function xi(e) {
    var t = _t({}, e);

    return ["returnUrl", "success", "fail", "always", "friendsParams", "chatParams"].forEach(function (e) {
      t[e] && delete t[e];
    }), t;
  }

  var Oi = [];

  function ji() {
    on(Oi);
  }

  var Ai = rn([Object.freeze({
    __proto__: null,
    selectFriends: function selectFriends(e) {
      Si(e = cn(e, wi.selectFriends, "Picker.selectFriends"), xi(e), "/select/multiple");
    },
    selectFriend: function selectFriend(e) {
      Si(e = cn(e, wi.selectFriend, "Picker.selectFriend"), xi(e), "/select/single");
    },
    selectChat: function selectChat(e) {
      Si(e = cn(e, wi.selectChat, "Picker.selectChat"), xi(e), "/chat/select");
    },
    select: function select(e) {
      Si(e = cn(e, wi.select, "Picker.select"), _t(_t(_t({}, xi(e)), e.friendsParams), e.chatParams), "/tab/select");
    },
    cleanup: ji
  })]);

  function Ti() {
    return null !== en();
  }

   true && (window.Kakao = e), "function" == typeof window.kakaoAsyncInit && setTimeout(function () {
    window.kakaoAsyncInit();
  }, 0), e.VERSION = Gt, e.cleanup = function () {
    var e = this;
    Object.keys(this).filter(function (t) {
      return p(e[t]);
    }).forEach(function (t) {
      return e[t].cleanup();
    }), tn(null);
  }, e.init = function (e) {
    if (Xt.browser.msie && Xt.browser.version.major < 9) throw new nn("Kakao.init: Unsupported browser");
    if (Ti()) throw new nn("Kakao.init: Already initialized");
    if (!Ye(e)) throw new nn("Kakao.init: App key must be provided");
    tn(e), this.Auth = Dr, this.API = qr, this.Share = Io, this.Link = Io, this.Channel = Ko, this.PlusFriend = Go, this.Story = ni, this.Navi = si, this.Picker = Ai;
  }, e.isInitialized = Ti, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module), __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _services_kakao_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/kakao.min.js */ "./services/kakao.min.js");
/* harmony import */ var _services_kakao_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_kakao_min_js__WEBPACK_IMPORTED_MODULE_0__);

_services_kakao_min_js__WEBPACK_IMPORTED_MODULE_0__["KaKao"].init('69823228c875a5a95558c4f4b78b0ae9'); // 사용하려는 앱의 JavaScript 키 입력

function kakaoShare(_ref) {
  var addr = _ref['addr'],
      title = _ref['title'],
      des = _ref['des'],
      img = _ref['img'],
      likes = _ref['likes'];
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: addr,
    addressTitle: title,
    content: {
      title: title,
      description: des,
      imageUrl: img,
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'http://localhost:3010/',
        webUrl: 'http://localhost:3010/'
      }
    },
    social: {
      likeCount: likes // commentCount: comments,
      // sharedCount: shares,

    },
    buttons: [{
      title: '웹으로 보기',
      link: {
        mobileWebUrl: 'http://localhost:3010/',
        webUrl: 'http://localhost:3010/'
      }
    }]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (kakaoShare);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxhY2VfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2tha2FvLm1pbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJQbGFjZU1vZGFsIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaW1nIiwic2NvcmVzIiwiaSIsInNjb3JlIiwicHVzaCIsInNjIiwibWFwIiwibSIsImxnU2hvdyIsInNldExnU2hvdyIsInRpdGxlIiwiYWRkciIsImRlcyIsImUiLCJ0IiwiZXhwb3J0cyIsImdsb2JhbCIsIk9iamVjdCIsIm4iLCJzZWxmIiwiciIsIkZ1bmN0aW9uIiwibyIsIlN5bWJvbCIsInByb3RvdHlwZSIsImEiLCJoYXNPd25Qcm9wZXJ0eSIsImMiLCJ0b1N0cmluZyIsInMiLCJ0b1N0cmluZ1RhZyIsInUiLCJsIiwiZCIsImNhbGwiLCJwIiwiZiIsIkFycmF5IiwiaXNBcnJheSIsImgiLCJ2Iiwic2xpY2UiLCJsZW5ndGgiLCJ0ZXN0IiwiY2hhckF0IiwicmVwbGFjZSIsImciLCJ5IiwiYiIsIl8iLCJrIiwicGFyc2VJbnQiLCJ3IiwiTmFOIiwidmFsdWVPZiIsIlMiLCJ4IiwiTyIsImoiLCJBIiwiVCIsIkMiLCJleGVjIiwia2V5cyIsIklFX1BST1RPIiwiSSIsIlAiLCJGIiwiQiIsIkUiLCJVIiwiUiIsIlJlZ0V4cCIsIkwiLCJNIiwiYXBwbHkiLCJ6IiwiRGF0ZSIsIm5vdyIsIkQiLCJxIiwiTiIsIksiLCJIIiwiSiIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiVyIsImFyZ3VtZW50cyIsIlgiLCIkIiwiRyIsIlYiLCJZIiwiUSIsIloiLCJlZSIsInRlIiwiTWF0aCIsIm1heCIsIm5lIiwicmUiLCJvZSIsImllIiwiYWUiLCJjZSIsImNvbnN0cnVjdG9yIiwic2UiLCJ1ZSIsImxlIiwiZGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInBlIiwiZmUiLCJoZSIsIm5vZGVUeXBlIiwibWUiLCJtb2R1bGUiLCJ2ZSIsIkJ1ZmZlciIsImdlIiwiaXNCdWZmZXIiLCJ5ZSIsImJlIiwiX2UiLCJrZSIsInByb2Nlc3MiLCJ3ZSIsInJlcXVpcmUiLCJ0eXBlcyIsImJpbmRpbmciLCJTZSIsImlzVHlwZWRBcnJheSIsInhlIiwiT2UiLCJqZSIsIkFlIiwiU3RyaW5nIiwiVGUiLCJDZSIsIkllIiwiUGUiLCJGZSIsIkJlIiwiRWUiLCJVZSIsIlJlIiwiTGUiLCJnZXRQcm90b3R5cGVPZiIsIk1lIiwiemUiLCJEZSIsInFlIiwiTmUiLCJLZSIsIkhlIiwiSmUiLCJXZSIsIlhlIiwiJGUiLCJHZSIsIlZlIiwiWWUiLCJRZSIsIlplIiwiZXQiLCJ0dCIsIm50IiwiY29uY2F0IiwicnQiLCJvdCIsIml0IiwiYXQiLCJjdCIsImV2ZXJ5Iiwic3QiLCJyZWR1Y2UiLCJmaWx0ZXIiLCJpbmRleE9mIiwidXQiLCJsdCIsImR0IiwicmFuZG9tIiwicHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqb2luIiwidnQiLCJFcnJvciIsImd0Iiwic29tZSIsInl0IiwiX2RhdGEiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJjbGVhciIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImJ0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX3QiLCJmb3JFYWNoIiwiT3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5Iiwia3QiLCJpdGVyYXRvciIsInd0IiwiVHlwZUVycm9yIiwiU3QiLCJVdCIsImtleSIsInh0IiwianQiLCJjcmVhdGUiLCJUdCIsIkF0Iiwic2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiQ3QiLCJSZWZlcmVuY2VFcnJvciIsIkl0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJQdCIsIm5leHQiLCJkb25lIiwiQnQiLCJGdCIsIkV0IiwiZnJvbSIsIm5hbWUiLCJ0b1ByaW1pdGl2ZSIsIk51bWJlciIsIlJ0IiwiZ2xvYmFsVGhpcyIsIkx0IiwidmVyc2lvbiIsInNwbGl0IiwiaW5mbyIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsIm1hdGNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJpc0FwcCIsInRvTG93ZXJDYXNlIiwidXNlckFnZW50IiwidWEiLCJicm93c2VyIiwicGxhdGZvcm0iLCJvcyIsImFwcCIsIk10IiwienQiLCJEdCIsInF0IiwiTnQiLCJLdCIsIkh0IiwiSnQiLCJXdCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJYdCIsIiR0IiwiR3QiLCJWdCIsIll0IiwidXNlckxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJRdCIsImFjY291bnREb21haW4iLCJhdXRoRG9tYWluIiwiYXV0aG9yaXplIiwibG9naW5XaWRnZXQiLCJyZWRpcmVjdFVyaSIsInVuaXZlcnNhbEtha2FvTGluayIsInRhbGtMb2dpblNjaGVtZSIsInRhbGtMb2dpblJlZGlyZWN0VXJpIiwidGFsa0luYXBwU2NoZW1lIiwidGFsa1N5bmNwbHVnaW5TY2hlbWUiLCJhcGlSZW1vdGUiLCJzaGFyZXJEb21haW4iLCJwaWNrZXJEb21haW4iLCJhcHBzRG9tYWluIiwidGFsa0xpbmtTY2hlbWUiLCJ0YWxrQW5kcm9pZFBhY2thZ2UiLCJjaGFubmVsIiwiY2hhbm5lbEljb24iLCJzdG9yeVNoYXJlIiwic3RvcnlDaGFubmVsRm9sbG93Iiwic3RvcnlJY29uIiwic3RvcnlQb3N0U2NoZW1lIiwibmF2aVNjaGVtZSIsIm5hdmlGYWxsYmFjayIsIlp0IiwiZW4iLCJ0biIsIm5uIiwibWVzc2FnZSIsInJuIiwiY2xlYW51cCIsIm9uIiwiYW4iLCJjbiIsImJlZm9yZSIsImRlZmF1bHRzIiwicmVxdWlyZWQiLCJvcHRpb25hbCIsImFmdGVyIiwic24iLCJ1biIsImFuZHJvaWQiLCJhcHBLZXkiLCJLQSIsImlvcyIsImhyZWYiLCJsbiIsImRuIiwicG4iLCJjbG9zZSIsImNsb3NlZCIsIm9wZW4iLCJmbiIsImdldEF0dHJpYnV0ZSIsImhuIiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3JjIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJtbiIsImRhdGEiLCJvcmlnaW4iLCJwYXJzZSIsImNvZGUiLCJmYWlsIiwic3VjY2VzcyIsImFsd2F5cyIsInZuIiwidXJsIiwicG9wdXBOYW1lIiwicG9wdXBGZWF0dXJlcyIsIm1zaWUiLCJmb2N1cyIsImduIiwidHlwZSIsInN1Ym1pdCIsInluIiwiYm4iLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSIsInNwbGljZSIsImRpc3BhdGNoIiwiX24iLCJfaW50ZXJ2YWwiLCJfbWF4Q291bnQiLCJfY291bnQiLCJfc3RvcHBlZCIsIl90aW1lb3V0Iiwic3RvcCIsIl9kb1BvbGxpbmciLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwia24iLCJ3biIsInRocm91Z2hUYWxrIiwicGVyc2lzdEFjY2Vzc1Rva2VuIiwicGVyc2lzdFJlZnJlc2hUb2tlbiIsIlNuIiwiYXBwcm92YWxUeXBlIiwic2NvcGUiLCJwbHVzRnJpZW5kUHVibGljSWQiLCJjaGFubmVsUHVibGljSWQiLCJzZXJ2aWNlVGVybXMiLCJzdGF0ZSIsImRldmljZVR5cGUiLCJub25jZSIsInhuIiwicmV0dXJuVXJsIiwiZm9yY2VNb2JpbGVMYXlvdXQiLCJlbmFibGVCYWNrQnV0dG9uIiwiT24iLCJjcmVhdGVMb2dpbkJ1dHRvbiIsImNvbnRhaW5lciIsImxhbmciLCJzaXplIiwibG9naW4iLCJpc1BvcHVwIiwiYXV0b0xvZ2luIiwicHJvbXB0cyIsInJlYXV0aGVudGljYXRlIiwidGhyb3VnaFN5bmNwbHVnaW4iLCJsb2dpbkhpbnQiLCJpc3N1ZUFjY2Vzc1Rva2VuIiwic2VsZWN0U2hpcHBpbmdBZGRyZXNzIiwiY3JlYXRlU2hpcHBpbmdBZGRyZXNzIiwidXBkYXRlU2hpcHBpbmdBZGRyZXNzIiwiYWRkcmVzc0lkIiwiam4iLCJzY3JlZW5MZWZ0Iiwic2NyZWVuWCIsInNjcmVlblRvcCIsInNjcmVlblkiLCJzY3JlZW4iLCJ3aWR0aCIsImhlaWdodCIsIkFuIiwiVG4iLCJjbGllbnRfaWQiLCJhcHByb3ZhbF90eXBlIiwiQ24iLCJjaGFubmVsX3B1YmxpY19pZCIsInByb21wdCIsImRldmljZV90eXBlIiwibG9naW5faGludCIsIkluIiwicmVkaXJlY3RfdXJpIiwicmVzcG9uc2VfdHlwZSIsImF1dGhfdHJhbl9pZCIsIlBuIiwia2EiLCJpc19wb3B1cCIsIkZuIiwiZXJyb3IiLCJCbiIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwic2VuZCIsIlhEb21haW5SZXF1ZXN0Iiwib25sb2FkIiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2UiLCJFbiIsIlVuIiwiUm4iLCJNbiIsImFwcHJvdmFsX3dpbmRvd190eXBlIiwic3RhcnQiLCJMbiIsImVycm9yX2NvZGUiLCJlcnJvcl9kZXNjcmlwdGlvbiIsInpuIiwiZnJlZXplIiwia2FrYW93ZWIiLCJyZXFTaWduSW5Mb2NhdGlvbiIsInRoZW4iLCJmcm9tRW50cmllcyIsIlVSTCIsInNlYXJjaFBhcmFtcyIsIkRuIiwicW4iLCJObiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiVWludDhDbGFtcGVkQXJyYXkiLCJpbXBvcnRTY3JpcHRzIiwiTWVzc2FnZUNoYW5uZWwiLCJuZXh0VGljayIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvcnQyIiwicG9zdE1lc3NhZ2UiLCJydW5Pbkxvb3AiLCJydW5PbkNvbnRleHQiLCJfc3RhdGUiLCJfcmVzdWx0Iiwic3Vic3RyaW5nIiwiX2xhYmVsIiwicmVzb2x2ZSIsIl9vbmVycm9yIiwiX3N1YnNjcmliZXJzIiwiX2luc3RhbmNlQ29uc3RydWN0b3IiLCJwcm9taXNlIiwiX3JlbWFpbmluZyIsIl9lbnVtZXJhdGUiLCJfZWFjaEVudHJ5IiwiX3NldHRsZWRBdCIsIl93aWxsU2V0dGxlQXQiLCJQcm9taXNlIiwiY2FzdCIsImFsbCIsInJhY2UiLCJyZWplY3QiLCJfc2V0U2NoZWR1bGVyIiwiX3NldEFzYXAiLCJfYXNhcCIsInBvbHlmaWxsIiwiS24iLCJmbG9vciIsImVhc3lYRE0iLCJwbHVnaW5zIiwiZGVzY3JpcHRpb24iLCJtaW1lVHlwZXMiLCJlbmFibGVkUGx1Z2luIiwiQWN0aXZlWE9iamVjdCIsIkdldFZhcmlhYmxlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsInBhdGhuYW1lIiwibGFzdEluZGV4T2YiLCJob3N0IiwiZG9jdW1lbnRFbGVtZW50IiwiZG9TY3JvbGwiLCJ0b3AiLCJzZWFyY2giLCJoYXNoIiwidG9KU09OIiwiZXZhbEpTT04iLCJlbGVtZW50cyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXIiLCJmcmFtZUJvcmRlciIsImFsbG93VHJhbnNwYXJlbmN5Iiwib25Mb2FkIiwidXNlUG9zdCIsInRhcmdldCIsImFjdGlvbiIsInBhcmVudE5vZGUiLCJpc0hvc3QiLCJ4ZG1fcCIsInJlbW90ZSIsInNlY3JldCIsInN3ZiIsInByb2R1Y3QiLCJyZW1vdGVIZWxwZXIiLCJ4ZG1fYyIsInhkbV9zIiwieGRtX2UiLCJhY2wiLCJzdWJzdHIiLCJpbnRlcnZhbCIsImRlbGF5IiwidXNlUmVzaXplIiwidXNlUGFyZW50IiwidXNlUG9sbGluZyIsImxvY2FsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ4ZG1fcGEiLCJ4ZG1fcG8iLCJzdGFjayIsIkhhc2hUcmFuc3BvcnQiLCJSZWxpYWJsZUJlaGF2aW9yIiwiUXVldWVCZWhhdmlvciIsImVuY29kZSIsIm1heExlbmd0aCIsIlZlcmlmeUJlaGF2aW9yIiwiaW5pdGlhdGUiLCJQb3N0TWVzc2FnZVRyYW5zcG9ydCIsIk5hbWVUcmFuc3BvcnQiLCJOaXhUcmFuc3BvcnQiLCJTYW1lT3JpZ2luVHJhbnNwb3J0IiwiRnJhbWVFbGVtZW50VHJhbnNwb3J0IiwiRmxhc2hUcmFuc3BvcnQiLCJsYXp5IiwicmVtb3ZlIiwiaW5jb21pbmciLCJ1cCIsIm91dGdvaW5nIiwiZG93biIsImNhbGxiYWNrIiwiaW5pdCIsImRlc3Ryb3kiLCJxdWVyeSIsImdldEpTT05PYmplY3QiLCJ3aGVuUmVhZHkiLCJub0NvbmZsaWN0IiwiRG9tSGVscGVyIiwicmVxdWlyZXNKU09OIiwid3JpdGUiLCJzZXQiLCJnZXQiLCJTb2NrZXQiLCJvbk1lc3NhZ2UiLCJvblJlYWR5IiwiUnBjIiwiUnBjQmVoYXZpb3IiLCJjb250ZXh0Iiwib25ET01SZWFkeSIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJxdWV1ZSIsInN3ZkNvbnRhaW5lciIsInN3Zk5vVGhyb3R0bGUiLCJyaWdodCIsIm92ZXJmbG93IiwiaW5uZXJIVE1MIiwiZGVzdHJveUNoYW5uZWwiLCJjcmVhdGVDaGFubmVsIiwidXJpIiwiZG9tYWluIiwiY29udGVudFdpbmRvdyIsInJlZmVycmVyIiwiZnJhbWVFbGVtZW50Iiwic2VuZE1lc3NhZ2UiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmcmFtZXMiLCJzaGlmdCIsInNlcmlhbGl6ZXIiLCJqc29ucnBjIiwicGFyYW1zIiwibmFtZWRQYXJhbXMiLCJyZXN1bHQiLCJoYW5kbGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJIbiIsIkpuIiwibGliIiwiQmFzZSIsImV4dGVuZCIsIm1peEluIiwiJHN1cGVyIiwiY2xvbmUiLCJXb3JkQXJyYXkiLCJ3b3JkcyIsInNpZ0J5dGVzIiwiY2xhbXAiLCJjZWlsIiwiZW5jIiwiSGV4IiwiTGF0aW4xIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsIlV0ZjgiLCJlc2NhcGUiLCJ1bmVzY2FwZSIsIkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0iLCJyZXNldCIsIl9uRGF0YUJ5dGVzIiwiX2FwcGVuZCIsIl9wcm9jZXNzIiwiYmxvY2tTaXplIiwiX21pbkJ1ZmZlclNpemUiLCJtaW4iLCJfZG9Qcm9jZXNzQmxvY2siLCJIYXNoZXIiLCJjZmciLCJfZG9SZXNldCIsInVwZGF0ZSIsImZpbmFsaXplIiwiX2RvRmluYWxpemUiLCJfY3JlYXRlSGVscGVyIiwiX2NyZWF0ZUhtYWNIZWxwZXIiLCJITUFDIiwiYWxnbyIsIkJhc2U2NCIsIl9tYXAiLCJhYnMiLCJzaW4iLCJNRDUiLCJfaGFzaCIsIkhtYWNNRDUiLCJFdnBLREYiLCJrZXlTaXplIiwiaGFzaGVyIiwiaXRlcmF0aW9ucyIsImNvbXB1dGUiLCJDaXBoZXIiLCJjcmVhdGVFbmNyeXB0b3IiLCJfRU5DX1hGT1JNX01PREUiLCJjcmVhdGVEZWNyeXB0b3IiLCJfREVDX1hGT1JNX01PREUiLCJfeGZvcm1Nb2RlIiwiX2tleSIsIml2U2l6ZSIsImVuY3J5cHQiLCJkZWNyeXB0IiwiU3RyZWFtQ2lwaGVyIiwibW9kZSIsIl9pdiIsInVuZGVmaW5lZCIsIl9wcmV2QmxvY2siLCJCbG9ja0NpcGhlck1vZGUiLCJFbmNyeXB0b3IiLCJEZWNyeXB0b3IiLCJfY2lwaGVyIiwicHJvY2Vzc0Jsb2NrIiwiZW5jcnlwdEJsb2NrIiwiZGVjcnlwdEJsb2NrIiwiQ0JDIiwicGFkIiwiUGtjczciLCJ1bnBhZCIsIkJsb2NrQ2lwaGVyIiwicGFkZGluZyIsIml2IiwiX21vZGUiLCJDaXBoZXJQYXJhbXMiLCJmb3JtYXR0ZXIiLCJmb3JtYXQiLCJPcGVuU1NMIiwiY2lwaGVydGV4dCIsInNhbHQiLCJTZXJpYWxpemFibGVDaXBoZXIiLCJhbGdvcml0aG0iLCJfcGFyc2UiLCJrZGYiLCJleGVjdXRlIiwiUGFzc3dvcmRCYXNlZENpcGhlciIsIkFFUyIsIl9uUm91bmRzIiwiX2tleVNjaGVkdWxlIiwiX2ludktleVNjaGVkdWxlIiwiX2RvQ3J5cHRCbG9jayIsIlduIiwiWG4iLCIkbiIsIkduIiwiZXIiLCJWbiIsIlFuIiwiWW4iLCJabiIsImFjY2Vzc1Rva2VuS2V5IiwidHIiLCJnZXRBcHBLZXkiLCJnZXRBY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwic2V0UmVmcmVzaFRva2VuIiwibnIiLCJyciIsIm9yIiwicGVybWlzc2lvbiIsImVuYWJsZV9zaGFyZSIsImFuZHJvaWRfZXhlY19wYXJhbSIsImlvc19leGVjX3BhcmFtIiwiYW5kcm9pZF9tYXJrZXRfcGFyYW0iLCJpb3NfbWFya2V0X3BhcmFtIiwiaXIiLCJzZWN1cmVfcmVzb3VyY2UiLCJhciIsIndhcm4iLCJjciIsInNyIiwiaGVhZGVyX2ltYWdlX3VybCIsImhlYWRlcl9pbWFnZV93aWR0aCIsImhlYWRlcl9pbWFnZV9oZWlnaHQiLCJ1ciIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eV9rZXlzIiwic2NvcGVzIiwiZXh0cmEiLCJhZGRyZXNzX2lkIiwiZnJvbV91cGRhdGVkX2F0IiwicGFnZV9zaXplIiwib2Zmc2V0IiwibGltaXQiLCJvcmRlciIsImZyaWVuZF9vcmRlciIsInRlbXBsYXRlX2lkIiwidGVtcGxhdGVfYXJncyIsInJlcXVlc3RfdXJsIiwidGVtcGxhdGVfb2JqZWN0IiwicmVjZWl2ZXJfdXVpZHMiLCJyZWNlaXZlcl9pZF90eXBlIiwibGlua192ZXIiLCJhdXRoVHlwZSIsImZpbGUiLCJpbWFnZV91cmwiLCJsYXN0X2lkIiwiY29udGVudCIsImltYWdlX3VybF9saXN0IiwibGlua19pbmZvIiwiY2hhbm5lbF9wdWJsaWNfaWRzIiwicGx1c19mcmllbmRfcHVibGljX2lkcyIsImxyIiwicmVxdWVzdCIsImZpbGVzIiwiYXBpIiwiZHIiLCJwciIsImZyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJQcmFnbWEiLCJGaWxlUmVhZGVyIiwiVWludDhBcnJheSIsIm9uZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0ciIsInBhcmFtTmFtZSIsIm1zZyIsImhyIiwibXIiLCJwb3N0UmVzcG9uc2UiLCJnZXRLYWthb0FnZW50IiwiZ2V0Q29kZSIsInNldENsaWVudCIsInNldFN0YXRlVG9rZW4iLCJkZWxldGVBdXRoQ29va2llIiwidnIiLCJnciIsInlyIiwiYnIiLCJkYXVtQXBwcyIsIl9yIiwiY2hyb21lIiwia3IiLCJpc1N1cHBvcnQiLCJ3ciIsIlNyIiwiVHIiLCJGciIsIkJyIiwiVXIiLCJQciIsInhyIiwiT3IiLCJqciIsIkFyIiwiQ3IiLCJJciIsInN0YXRlVG9rZW4iLCJwcm94eSIsImFjY2Vzc190b2tlbiIsIkVyIiwiUnIiLCJsb2dpbkZvcm0iLCJsb2dvdXQiLCJMciIsInpyIiwiYXBwX2tleSIsInRyYW5zX2lkIiwibW9iaWxlX3ZpZXciLCJlbmFibGVfYmFja19idXR0b24iLCJyZXR1cm5fdXJsIiwiTXIiLCJEciIsImdldFN0YXR1c0luZm8iLCJ1c2VyIiwicXIiLCJOciIsInRvVXBwZXJDYXNlIiwiS3IiLCJIciIsIkpyIiwiV3IiLCJYciIsIiRyIiwid2ViVXJsIiwibW9iaWxlV2ViVXJsIiwiYW5kcm9pZEV4ZWN1dGlvblBhcmFtcyIsImFuZHJvaWRFeGVjUGFyYW1zIiwiaW9zRXhlY3V0aW9uUGFyYW1zIiwiaW9zRXhlY1BhcmFtcyIsImJ1aWxkZXIiLCJWciIsIkdyIiwiaXRlbSIsIml0ZW1PcCIsImFuZHJvaWRfZXhlY19wYXJhbXMiLCJhbmRyb2lkX2V4ZWN1dGlvbl9wYXJhbXMiLCJpb3NfZXhlY19wYXJhbXMiLCJpb3NfZXhlY3V0aW9uX3BhcmFtcyIsIllyIiwibGluayIsIlFyIiwiWnIiLCJoZWFkZXJMaW5rIiwiYnV0dG9uIiwiYnV0dG9ucyIsImltYWdlVXJsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiY29udGVudHMiLCJjb21tZXJjZSIsInJlZ3VsYXJQcmljZSIsImRpc2NvdW50UHJpY2UiLCJkaXNjb3VudFJhdGUiLCJmaXhlZERpc2NvdW50UHJpY2UiLCJjdXJyZW5jeVVuaXQiLCJjdXJyZW5jeVVuaXRQb3NpdGlvbiIsInByb2R1Y3ROYW1lIiwic29jaWFsIiwibGlrZUNvdW50IiwiY29tbWVudENvdW50Iiwic2hhcmVkQ291bnQiLCJ2aWV3Q291bnQiLCJzdWJzY3JpYmVyQ291bnQiLCJpdGVtQ29udGVudCIsInByb2ZpbGVUZXh0IiwicHJvZmlsZUltYWdlVXJsIiwidGl0bGVJbWFnZVVybCIsInRpdGxlSW1hZ2VUZXh0IiwidGl0bGVJbWFnZUNhdGVnb3J5IiwiaXRlbXMiLCJzdW0iLCJzdW1PcCIsImVvIiwidG8iLCJubyIsImFwcGtleSIsImFwcHZlciIsImxpbmt2ZXIiLCJleHRyYXMiLCJzZXJ2ZXJDYWxsYmFja0FyZ3MiLCJsY2JhIiwidGVtcGxhdGVfanNvbiIsInRlbXBsYXRlX21zZyIsInJvIiwib2JqZWN0X3R5cGUiLCJvYmplY3RUeXBlIiwiYnV0dG9uVGl0bGUiLCJidXR0b25fdGl0bGUiLCJvbyIsIkZlZWRMaW5rIiwiQ29tbWVyY2VMaW5rIiwiTGlzdExpbmsiLCJoZWFkZXJfdGl0bGUiLCJoZWFkZXJUaXRsZSIsImhlYWRlckltYWdlVXJsIiwiaGVhZGVySW1hZ2VXaWR0aCIsImhlYWRlckltYWdlSGVpZ2h0IiwiTG9jYXRpb25MaW5rIiwiYWRkcmVzcyIsImFkZHJlc3NfdGl0bGUiLCJhZGRyZXNzVGl0bGUiLCJUZXh0TGluayIsInRleHQiLCJpbyIsInJlcXVlc3RVcmwiLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVBcmdzIiwiYW8iLCJjbyIsInZhbGlkYXRpb25fYWN0aW9uIiwidmFsaWRhdGlvbl9wYXJhbXMiLCJzbyIsImdldFRpbWUiLCJkaXNwbGF5Iiwid2lsbEludm9rZUFwcCIsIm9uQXBwTWlzc2luZyIsIm9uVW5zdXBwb3J0ZWRFbnZpcm9ubWVudCIsImludGVudFVSSSIsInVzZVVybFNjaGVtZSIsInN0b3JlVVJMIiwidXJsU2NoZW1lIiwidW5pdmVyc2FsTGluayIsInVvIiwibG8iLCJwbyIsImFwcE5hbWUiLCJpbnN0YWxsVGFsayIsIndhcm5pbmdfbXNnIiwiYXJndW1lbnRfbXNnIiwiZm8iLCJpcGhvbmUiLCJidG9hIiwiaG8iLCJtbyIsInZvIiwiZ28iLCJ5byIsImJvIiwiX28iLCJrbyIsIndvIiwiU28iLCJ4byIsIk9vIiwiZGVmYXVsdE9iamVjdFR5cGVzIiwic2VuZEZlZWQiLCJjcmVhdGVGZWVkQnV0dG9uIiwic2VuZExpc3QiLCJjcmVhdGVMaXN0QnV0dG9uIiwic2VuZENvbW1lcmNlIiwiY3JlYXRlQ29tbWVyY2VCdXR0b24iLCJzZW5kTG9jYXRpb24iLCJjcmVhdGVMb2NhdGlvbkJ1dHRvbiIsInNlbmRUZXh0IiwiY3JlYXRlVGV4dEJ1dHRvbiIsInNlbmRTY3JhcCIsImNyZWF0ZVNjcmFwQnV0dG9uIiwic2VuZEN1c3RvbSIsImNyZWF0ZUN1c3RvbUJ1dHRvbiIsInVwbG9hZEltYWdlIiwiZGVsZXRlSW1hZ2UiLCJzY3JhcEltYWdlIiwiam8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvIiwiQ28iLCJBbyIsIm1ha2VMaW5rRnVuYyIsInNjcmFwIiwiY3VzdG9tIiwiSW8iLCJjcmVhdGVEZWZhdWx0QnV0dG9uIiwic2VuZERlZmF1bHQiLCJQbyIsIkZvIiwic3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzIiwiQm8iLCJhcGlfdmVyIiwia2FrYW9fYWdlbnQiLCJyZWZlcmVyIiwiRW8iLCJVbyIsIlJvIiwiTG8iLCJNbyIsInpvIiwiY3JlYXRlQWRkQ2hhbm5lbEJ1dHRvbiIsImFkZENoYW5uZWwiLCJjcmVhdGVDaGF0QnV0dG9uIiwiY29sb3IiLCJzaGFwZSIsImNoYXQiLCJEbyIsInFvIiwiTm8iLCJLbyIsIkhvIiwiY3JlYXRlQWRkRnJpZW5kQnV0dG9uIiwicGx1c0ZyaWVuZElkIiwiYWRkRnJpZW5kIiwiSm8iLCJXbyIsIlhvIiwiJG8iLCJHbyIsIlZvIiwiZGVzYyIsImltYWdlcyIsImltYWdldXJsIiwiWW8iLCJjcmVhdGVTaGFyZUJ1dHRvbiIsInNoYXJlIiwidXJsSW5mbyIsImluc3RhbGwiLCJjcmVhdGVGb2xsb3dCdXR0b24iLCJzaG93Rm9sbG93ZXJDb3VudCIsIlFvIiwiZWkiLCJabyIsInRpIiwibmkiLCJhcGl2ZXIiLCJhcHBpZCIsImFwcG5hbWUiLCJwb3N0IiwidXJsaW5mbyIsImhpZGVGb2xsb3dlciIsImZyYW1lSWQiLCJpZnJhbWUkIiwibWVzc2FnZUhhbmRsZXIiLCJyaSIsIm9pIiwicnBmbGFnIiwiY2lkIiwiaWkiLCJjb29yZFR5cGUiLCJ2ZWhpY2xlVHlwZSIsInJwT3B0aW9uIiwicm91dGVJbmZvIiwic1giLCJzWSIsInNBbmdsZSIsInJldHVyblVyaSIsImd1aWRlSWQiLCJ2aWFQb2ludHMiLCJhaSIsImNpIiwic2kiLCJndWlkZV9pZCIsImNvb3JkX3R5cGUiLCJ2ZWhpY2xlX3R5cGUiLCJycG9wdGlvbiIsInJvdXRlX2luZm8iLCJzX3giLCJzX3kiLCJzX2FuZ2xlIiwicmV0dXJuX3VyaSIsInBhcmFtIiwiZGVzdGluYXRpb24iLCJvcHRpb24iLCJ2aWFfbGlzdCIsInVpIiwibGkiLCJtYXhQaWNrYWJsZUNvdW50IiwibWluUGlja2FibGVDb3VudCIsImRpIiwicmVhc29uIiwidXVpZHMiLCJwaSIsInNlbGVjdGlvblR5cGUiLCJjaGF0RmlsdGVycyIsImZpIiwiaGkiLCJtaSIsInZpIiwiZ2kiLCJ5aSIsImZyaWVuZEZpbHRlciIsInNlcnZpY2VUeXBlRmlsdGVyIiwiZW5hYmxlU2VhcmNoIiwiY291bnRyeUNvZGVGaWx0ZXJzIiwidXNpbmdPc0ZpbHRlciIsInNob3dNeVByb2ZpbGUiLCJzaG93RmF2b3JpdGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9ucyIsImRpc3BsYXlBbGxQcm9maWxlIiwiYmkiLCJfaSIsInNob3dQaWNrZWRGcmllbmQiLCJraSIsIndpIiwic2VsZWN0RnJpZW5kIiwic2VsZWN0RnJpZW5kcyIsInNlbGVjdENoYXQiLCJzZWxlY3QiLCJmcmllbmRzUGFyYW1zIiwiY2hhdFBhcmFtcyIsIlNpIiwiamkiLCJ0cmFuc0lkIiwidG9rZW4iLCJPaSIsInhpIiwiQWkiLCJUaSIsIktha2FvIiwia2FrYW9Bc3luY0luaXQiLCJWRVJTSU9OIiwiQXV0aCIsIkFQSSIsIlNoYXJlIiwiTGluayIsIkNoYW5uZWwiLCJQbHVzRnJpZW5kIiwiU3RvcnkiLCJOYXZpIiwiUGlja2VyIiwiaXNJbml0aWFsaXplZCIsIkthS2FvIiwia2FrYW9TaGFyZSIsImxpa2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SyxDQUFDSyxLQUFOLENBQVkxSSxXQUFaLENBQXdCO0FBQ3hCeEYsY0FBVSxFQUFFLFVBRFk7QUFFeEJhLFdBQU8sRUFBRTU2QixJQUZlO0FBR3hCODZCLGdCQUFZLEVBQUUvNkIsS0FIVTtBQUl4Qm14QixXQUFPLEVBQUU7QUFDTG54QixXQUFLLEVBQUVBLEtBREY7QUFFTGtnQixpQkFBVyxFQUFDaGdCLEdBRlA7QUFHTHMzQixjQUFRLEVBQUNsNEIsR0FISjtBQUlMNDNCLFVBQUksRUFBRTtBQUNOO0FBQ0FmLG9CQUFZLEVBQUUsd0JBRlI7QUFHTkQsY0FBTSxFQUFFO0FBSEY7QUFKRCxLQUplO0FBY3hCa0MsVUFBTSxFQUFFO0FBQ0pDLGVBQVMsRUFBRXVRLEtBRFAsQ0FFSjtBQUNBOztBQUhJLEtBZGdCO0FBbUJ4QnJSLFdBQU8sRUFBRSxDQUNMO0FBQ0F2M0IsV0FBSyxFQUFFLFFBRFA7QUFFQWszQixVQUFJLEVBQUU7QUFDRmYsb0JBQVksRUFBRSx3QkFEWjtBQUVGRCxjQUFNLEVBQUU7QUFGTjtBQUZOLEtBREs7QUFuQmUsR0FBeEI7QUE2Qkg7O0FBRWN5Uyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OTAxNGRjNmE1YzA4YjgyMWFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xyXG5pbXBvcnQge0NhcmQsQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge0FpRmlsbFN0YXIsQWlPdXRsaW5lSGlnaGxpZ2h0fSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHtDaUxvY2F0aW9uT24sIENpUGhvbmUsIENpRmFjZVNtaWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGtha2FvU2hhcmUgZnJvbSAnLi4vc2VydmljZXMva2FrYW9TaGFyZSc7XHJcblxyXG5jb25zdCBQbGFjZU1vZGFsPShwcm9wcyk9PntcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmltZyk7XHJcbiAgICBsZXQgc2NvcmVzPVtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTxwcm9wcy5zY29yZTsgaSsrKSBzY29yZXMucHVzaChpKTtcclxuICAgIGNvbnN0IHNjPSAocHJvcHMuc2NvcmUpID8gc2NvcmVzLm1hcChtPT57cmV0dXJuIDxBaUZpbGxTdGFyIGtleT17bX0gLz59KTogZmFsc2U7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgbGdTaG93PXtwcm9wcy5sZ1Nob3d9IHNldExnU2hvdz17cHJvcHMuc2V0TGdTaG93fSBjbGFzcz0nZC1mbGV4JyB0aXRsZT1cIuygleuztCDsg4HshLjrs7TquLBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQgY29sLTYgbWUtMSc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2JvcmRlci0wJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwcm9wcy5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPuyLnOyEpO2PieqwgO2VmOq4sDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PuuLpOuluCDsgqzsmqnsnpDsl5Dqsowg7J2Y6rKs7J2EIOuTpOugpOyjvOyEuOyalDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3NjfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT0nZmx1aWQnPuymkOqyqOywvuq4sCDstpTqsIA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2FybmluZ1wiIGNsYXNzTmFtZT0nZmx1aWQgbXMtMic+7Lm07Lm07JikIOqzteycoO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQgY29sLTYgbXMtMSc+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD48Q2lMb2NhdGlvbk9uIC8+PHNwYW4+e3Byb3BzLmFkZHJ9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxBaU91dGxpbmVIaWdobGlnaHQgLz48c3Bhbj57cHJvcHMuZGVzfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48Q2lGYWNlU21pbGUgLz48c3Bhbj57c2N9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmRQcmV2IG1iLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPVwi6rKM7Iuc7YyQIOygnOuqqVwiIG5vdGU9XCLsnbTqs7PsnYAg7KCV66eQIOyii+ydgOqzs+yeheuLiOuLpC5cIiBrZD1cImNvbW11bml0eVwiIHRpbWU9XCIyMDIzLTAzLTA4XCIgdmlldz1cIjI1NVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT1cIuqyjOyLnO2MkCDsoJzrqqlcIiBub3RlPVwi7J206rOz7J2AIOygleunkCDsoovsnYDqs7PsnoXri4jri6QuXCIga2Q9XCJyZXZpZXdcIiB0aW1lPVwiMjAyMy0wMy0wOFwiIHZpZXc9XCIyNTVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIj4gPExpbmsgaHJlZj1cIi9ib2FyZC9ib2FyZGxpc3RcIj7qsozsi5zquIAg642UIOuztOq4sDwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGFjZU1vZGFsOyIsIi8qKlxyXG4gKiBLYWthbyBTREsgZm9yIEphdmFTY3JpcHQgLSB2MS40My4xXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE3IEtha2FvIENvcnAuXHJcbiAqXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKlxyXG4gKlxyXG4gKiBPU1MgTm90aWNlIHwgS2FrYW9TREstSmF2YXNjcmlwdFxyXG4gKlxyXG4gKiBUaGlzIGFwcGxpY2F0aW9uIGlzIENvcHlyaWdodCDCqSBLYWthbyBDb3JwLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBUaGUgZm9sbG93aW5nIHNldHMgZm9ydGggYXR0cmlidXRpb24gbm90aWNlcyBmb3IgdGhpcmQgcGFydHkgc29mdHdhcmUgdGhhdCBtYXkgYmUgY29udGFpbmVkIGluIHRoaXMgYXBwbGljYXRpb24uXHJcbiAqIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIHBsZWFzZSBjb250YWN0IHVzIGF0IG9wZW5zb3VyY2VAa2FrYW9jb3JwLmNvbVxyXG4gKlxyXG4gKlxyXG4gKiBjcnlwdG8tanNcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2JyaXgvY3J5cHRvLWpzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVmZiBNb3R0XHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTYgRXZhbiBWb3NiZXJnXHJcbiAqXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqXHJcbiAqIGVhc3lYRE1cclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL295dmluZGtpbnNleS9lYXN5WERNL1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAwOS0yMDExIMOYeXZpbmQgU2VhbiBLaW5zZXksIG95dmluZEBraW5zZXkubm9cclxuICpcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICpcclxuICogRVM2LVByb21pc2VcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9yc1xyXG4gKlxyXG4gKiBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKlxyXG4gKiBLYWthbyBXZWIyQXBwIExpYnJhcnlcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2tha2FvL3dlYjJhcHBcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTUgS2FrYW8gQ29ycC4gaHR0cDovL3d3dy5rYWthb2NvcnAuY29tXHJcbiAqXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqXHJcbiAqIGxvZGFzaFxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqXHJcbiAqIHVhX3BhcnNlclxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaHRtbDVjcmV3L3VhX3BhcnNlclxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgSFRNTDUgVGVjaC4gVGVhbSBpbiBEYXVtIENvbW11bmljYXRpb25zIENvcnAuXHJcbiAqXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqXHJcbiAqIGBgYGBgYGBgYGBcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICogQ29weXJpZ2h0IChjKVxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcclxuICogYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXHJcbiAqICdTb2Z0d2FyZScpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuICogd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4gKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cclxuICogcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXHJcbiAqIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxyXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxyXG4gKiBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxyXG4gKiBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxyXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICogYGBgYGBgYGBgYFxyXG4gKi9cclxuXHJcbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoKGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5LYWthbz1lLktha2FvfHx7fSl9KHRoaXMsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbCYmZ2xvYmFsLk9iamVjdD09PU9iamVjdCYmZ2xvYmFsLG49XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLHI9dHx8bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLG89ci5TeW1ib2wsaT1PYmplY3QucHJvdG90eXBlLGE9aS5oYXNPd25Qcm9wZXJ0eSxjPWkudG9TdHJpbmcscz1vP28udG9TdHJpbmdUYWc6dm9pZCAwO3ZhciB1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGw9bz9vLnRvU3RyaW5nVGFnOnZvaWQgMDtmdW5jdGlvbiBkKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMD09PWU/XCJbb2JqZWN0IFVuZGVmaW5lZF1cIjpcIltvYmplY3QgTnVsbF1cIjpsJiZsIGluIE9iamVjdChlKT9mdW5jdGlvbihlKXt2YXIgdD1hLmNhbGwoZSxzKSxuPWVbc107dHJ5e2Vbc109dm9pZCAwO3ZhciByPSEwfWNhdGNoKGUpe312YXIgbz1jLmNhbGwoZSk7cmV0dXJuIHImJih0P2Vbc109bjpkZWxldGUgZVtzXSksb30oZSk6ZnVuY3Rpb24oZSl7cmV0dXJuIHUuY2FsbChlKX0oZSl9ZnVuY3Rpb24gcChlKXtyZXR1cm4gbnVsbCE9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9dmFyIGY9QXJyYXkuaXNBcnJheSxoPS9cXHMvO3ZhciBtPS9eXFxzKy87ZnVuY3Rpb24gdihlKXtyZXR1cm4gZT9lLnNsaWNlKDAsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUubGVuZ3RoO3QtLSYmaC50ZXN0KGUuY2hhckF0KHQpKTspO3JldHVybiB0fShlKSsxKS5yZXBsYWNlKG0sXCJcIik6ZX1mdW5jdGlvbiBnKGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBudWxsIT1lJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX12YXIgeT0vXlstK10weFswLTlhLWZdKyQvaSxiPS9eMGJbMDFdKyQvaSxfPS9eMG9bMC03XSskL2ksaz1wYXJzZUludDtmdW5jdGlvbiB3KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGZ1bmN0aW9uKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxwKGUpJiZcIltvYmplY3QgU3ltYm9sXVwiPT1kKGUpfShlKSlyZXR1cm4gTmFOO2lmKGcoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9Zyh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPXYoZSk7dmFyIG49Yi50ZXN0KGUpO3JldHVybiBufHxfLnRlc3QoZSk/ayhlLnNsaWNlKDIpLG4/Mjo4KTp5LnRlc3QoZSk/TmFOOitlfXZhciBTPTEvMDtmdW5jdGlvbiB4KGUpe3ZhciB0PWZ1bmN0aW9uKGUpe3JldHVybiBlPyhlPXcoZSkpPT09U3x8ZT09PS0xLzA/MTc5NzY5MzEzNDg2MjMxNTdlMjkyKihlPDA/LTE6MSk6ZT09ZT9lOjA6MD09PWU/ZTowfShlKSxuPXQlMTtyZXR1cm4gdD09dD9uP3Qtbjp0OjB9ZnVuY3Rpb24gTyhlKXtyZXR1cm4gZX1mdW5jdGlvbiBqKGUpe2lmKCFnKGUpKXJldHVybiExO3ZhciB0PWQoZSk7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgUHJveHldXCI9PXR9dmFyIEEsVD1yW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLEM9KEE9L1teLl0rJC8uZXhlYyhUJiZULmtleXMmJlQua2V5cy5JRV9QUk9UT3x8XCJcIikpP1wiU3ltYm9sKHNyYylfMS5cIitBOlwiXCI7dmFyIEk9RnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBQPS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sRj1GdW5jdGlvbi5wcm90b3R5cGUsQj1PYmplY3QucHJvdG90eXBlLEU9Ri50b1N0cmluZyxVPUIuaGFzT3duUHJvcGVydHksUj1SZWdFeHAoXCJeXCIrRS5jYWxsKFUpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIik7ZnVuY3Rpb24gTChlKXtyZXR1cm4hKCFnKGUpfHwodD1lLEMmJkMgaW4gdCkpJiYoaihlKT9SOlApLnRlc3QoZnVuY3Rpb24oZSl7aWYobnVsbCE9ZSl7dHJ5e3JldHVybiBJLmNhbGwoZSl9Y2F0Y2goZSl7fXRyeXtyZXR1cm4gZStcIlwifWNhdGNoKGUpe319cmV0dXJuXCJcIn0oZSkpO3ZhciB0fWZ1bmN0aW9uIE0oZSx0LG4pe3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBlLmNhbGwodCk7Y2FzZSAxOnJldHVybiBlLmNhbGwodCxuWzBdKTtjYXNlIDI6cmV0dXJuIGUuY2FsbCh0LG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiBlLmNhbGwodCxuWzBdLG5bMV0sblsyXSl9cmV0dXJuIGUuYXBwbHkodCxuKX12YXIgej1EYXRlLm5vdzt2YXIgRCxxLE4sSz1mdW5jdGlvbigpe3RyeXt2YXIgZT1MKHQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX0oT2JqZWN0LFwiZGVmaW5lUHJvcGVydHlcIikpP3Q6dm9pZCAwO3JldHVybiBlKHt9LFwiXCIse30pLGV9Y2F0Y2goZSl7fXZhciB0fSgpLEg9SyxKPUg/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gSChlLFwidG9TdHJpbmdcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6KG49dCxmdW5jdGlvbigpe3JldHVybiBufSksd3JpdGFibGU6ITB9KTt2YXIgbn06TyxXPShEPUoscT0wLE49MCxmdW5jdGlvbigpe3ZhciBlPXooKSx0PTE2LShlLU4pO2lmKE49ZSx0PjApe2lmKCsrcT49ODAwKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSBxPTA7cmV0dXJuIEQuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9KSxYPVc7ZnVuY3Rpb24gJChlLHQpe2Zvcih2YXIgbj0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDsrK248ciYmITEhPT10KGVbbl0sbixlKTspO3JldHVybiBlfXZhciBHPS9eKD86MHxbMS05XVxcZCopJC87ZnVuY3Rpb24gVihlLHQpe3ZhciBuPXR5cGVvZiBlO3JldHVybiEhKHQ9bnVsbD09dD85MDA3MTk5MjU0NzQwOTkxOnQpJiYoXCJudW1iZXJcIj09bnx8XCJzeW1ib2xcIiE9biYmRy50ZXN0KGUpKSYmZT4tMSYmZSUxPT0wJiZlPHR9ZnVuY3Rpb24gWShlLHQsbil7XCJfX3Byb3RvX19cIj09dCYmSD9IKGUsdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6bix3cml0YWJsZTohMH0pOmVbdF09bn1mdW5jdGlvbiBRKGUsdCl7cmV0dXJuIGU9PT10fHxlIT1lJiZ0IT10fXZhciBaPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gZWUoZSx0LG4pe3ZhciByPWVbdF07Wi5jYWxsKGUsdCkmJlEocixuKSYmKHZvaWQgMCE9PW58fHQgaW4gZSl8fFkoZSx0LG4pfXZhciB0ZT1NYXRoLm1heDtmdW5jdGlvbiBuZShlLHQpe3JldHVybiBYKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdD10ZSh2b2lkIDA9PT10P2UubGVuZ3RoLTE6dCwwKSxmdW5jdGlvbigpe2Zvcih2YXIgcj1hcmd1bWVudHMsbz0tMSxpPXRlKHIubGVuZ3RoLXQsMCksYT1BcnJheShpKTsrK288aTspYVtvXT1yW3Qrb107bz0tMTtmb3IodmFyIGM9QXJyYXkodCsxKTsrK288dDspY1tvXT1yW29dO3JldHVybiBjW3RdPW4oYSksTShlLHRoaXMsYyl9fShlLHQsTyksZStcIlwiKX1mdW5jdGlvbiByZShlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmZT4tMSYmZSUxPT0wJiZlPD05MDA3MTk5MjU0NzQwOTkxfWZ1bmN0aW9uIG9lKGUpe3JldHVybiBudWxsIT1lJiZyZShlLmxlbmd0aCkmJiFqKGUpfWZ1bmN0aW9uIGllKGUsdCxuKXtpZighZyhuKSlyZXR1cm4hMTt2YXIgcj10eXBlb2YgdDtyZXR1cm4hIShcIm51bWJlclwiPT1yP29lKG4pJiZWKHQsbi5sZW5ndGgpOlwic3RyaW5nXCI9PXImJnQgaW4gbikmJlEoblt0XSxlKX12YXIgYWU9T2JqZWN0LnByb3RvdHlwZTtmdW5jdGlvbiBjZShlKXt2YXIgdD1lJiZlLmNvbnN0cnVjdG9yO3JldHVybiBlPT09KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQucHJvdG90eXBlfHxhZSl9ZnVuY3Rpb24gc2UoZSl7cmV0dXJuIHAoZSkmJlwiW29iamVjdCBBcmd1bWVudHNdXCI9PWQoZSl9dmFyIHVlPU9iamVjdC5wcm90b3R5cGUsbGU9dWUuaGFzT3duUHJvcGVydHksZGU9dWUucHJvcGVydHlJc0VudW1lcmFibGUscGU9c2UoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT9zZTpmdW5jdGlvbihlKXtyZXR1cm4gcChlKSYmbGUuY2FsbChlLFwiY2FsbGVlXCIpJiYhZGUuY2FsbChlLFwiY2FsbGVlXCIpfSxmZT1wZTt2YXIgaGU9XCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJiFlLm5vZGVUeXBlJiZlLG1lPWhlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUmJiFtb2R1bGUubm9kZVR5cGUmJm1vZHVsZSx2ZT1tZSYmbWUuZXhwb3J0cz09PWhlP3IuQnVmZmVyOnZvaWQgMCxnZT0odmU/dmUuaXNCdWZmZXI6dm9pZCAwKXx8ZnVuY3Rpb24oKXtyZXR1cm4hMX0seWU9e307eWVbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09eWVbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09eWVbXCJbb2JqZWN0IEludDhBcnJheV1cIl09eWVbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPXllW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT15ZVtcIltvYmplY3QgVWludDhBcnJheV1cIl09eWVbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT15ZVtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPXllW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09ITAseWVbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09eWVbXCJbb2JqZWN0IEFycmF5XVwiXT15ZVtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPXllW1wiW29iamVjdCBCb29sZWFuXVwiXT15ZVtcIltvYmplY3QgRGF0YVZpZXddXCJdPXllW1wiW29iamVjdCBEYXRlXVwiXT15ZVtcIltvYmplY3QgRXJyb3JdXCJdPXllW1wiW29iamVjdCBGdW5jdGlvbl1cIl09eWVbXCJbb2JqZWN0IE1hcF1cIl09eWVbXCJbb2JqZWN0IE51bWJlcl1cIl09eWVbXCJbb2JqZWN0IE9iamVjdF1cIl09eWVbXCJbb2JqZWN0IFJlZ0V4cF1cIl09eWVbXCJbb2JqZWN0IFNldF1cIl09eWVbXCJbb2JqZWN0IFN0cmluZ11cIl09eWVbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPSExO3ZhciBiZT1cIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmIWUubm9kZVR5cGUmJmUsX2U9YmUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLGtlPV9lJiZfZS5leHBvcnRzPT09YmUmJnQucHJvY2Vzcyx3ZT1mdW5jdGlvbigpe3RyeXt2YXIgZT1fZSYmX2UucmVxdWlyZSYmX2UucmVxdWlyZShcInV0aWxcIikudHlwZXM7cmV0dXJuIGV8fGtlJiZrZS5iaW5kaW5nJiZrZS5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaChlKXt9fSgpLFNlPXdlJiZ3ZS5pc1R5cGVkQXJyYXkseGU9U2U/ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX0oU2UpOmZ1bmN0aW9uKGUpe3JldHVybiBwKGUpJiZyZShlLmxlbmd0aCkmJiEheWVbZChlKV19LE9lPXhlLGplPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gQWUoZSx0KXt2YXIgbj1mKGUpLHI9IW4mJmZlKGUpLG89IW4mJiFyJiZnZShlKSxpPSFuJiYhciYmIW8mJk9lKGUpLGE9bnx8cnx8b3x8aSxjPWE/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49LTEscj1BcnJheShlKTsrK248ZTspcltuXT10KG4pO3JldHVybiByfShlLmxlbmd0aCxTdHJpbmcpOltdLHM9Yy5sZW5ndGg7Zm9yKHZhciB1IGluIGUpIXQmJiFqZS5jYWxsKGUsdSl8fGEmJihcImxlbmd0aFwiPT11fHxvJiYoXCJvZmZzZXRcIj09dXx8XCJwYXJlbnRcIj09dSl8fGkmJihcImJ1ZmZlclwiPT11fHxcImJ5dGVMZW5ndGhcIj09dXx8XCJieXRlT2Zmc2V0XCI9PXUpfHxWKHUscykpfHxjLnB1c2godSk7cmV0dXJuIGN9ZnVuY3Rpb24gVGUoZSx0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGUodChuKSl9fXZhciBDZT1UZShPYmplY3Qua2V5cyxPYmplY3QpLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gUGUoZSl7cmV0dXJuIG9lKGUpP0FlKGUpOmZ1bmN0aW9uKGUpe2lmKCFjZShlKSlyZXR1cm4gQ2UoZSk7dmFyIHQ9W107Zm9yKHZhciBuIGluIE9iamVjdChlKSlJZS5jYWxsKGUsbikmJlwiY29uc3RydWN0b3JcIiE9biYmdC5wdXNoKG4pO3JldHVybiB0fShlKX12YXIgRmU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBCZShlKXtpZighZyhlKSlyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9W107aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gT2JqZWN0KGUpKXQucHVzaChuKTtyZXR1cm4gdH0oZSk7dmFyIHQ9Y2UoZSksbj1bXTtmb3IodmFyIHIgaW4gZSkoXCJjb25zdHJ1Y3RvclwiIT1yfHwhdCYmRmUuY2FsbChlLHIpKSYmbi5wdXNoKHIpO3JldHVybiBufWZ1bmN0aW9uIEVlKGUpe3JldHVybiBvZShlKT9BZShlLCEwKTpCZShlKX12YXIgVWUsUmU9KFVlPWZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPSFuO258fChuPXt9KTtmb3IodmFyIGk9LTEsYT10Lmxlbmd0aDsrK2k8YTspe3ZhciBjPXRbaV0scz1yP3IobltjXSxlW2NdLGMsbixlKTp2b2lkIDA7dm9pZCAwPT09cyYmKHM9ZVtjXSksbz9ZKG4sYyxzKTplZShuLGMscyl9fSh0LEVlKHQpLGUpfSxuZSgoZnVuY3Rpb24oZSx0KXt2YXIgbj0tMSxyPXQubGVuZ3RoLG89cj4xP3Rbci0xXTp2b2lkIDAsaT1yPjI/dFsyXTp2b2lkIDA7Zm9yKG89VWUubGVuZ3RoPjMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8/KHItLSxvKTp2b2lkIDAsaSYmaWUodFswXSx0WzFdLGkpJiYobz1yPDM/dm9pZCAwOm8scj0xKSxlPU9iamVjdChlKTsrK248cjspe3ZhciBhPXRbbl07YSYmVWUoZSxhLG4sbyl9cmV0dXJuIGV9KSkpLExlPVRlKE9iamVjdC5nZXRQcm90b3R5cGVPZixPYmplY3QpLE1lPUZ1bmN0aW9uLnByb3RvdHlwZSx6ZT1PYmplY3QucHJvdG90eXBlLERlPU1lLnRvU3RyaW5nLHFlPXplLmhhc093blByb3BlcnR5LE5lPURlLmNhbGwoT2JqZWN0KTt2YXIgS2UsSGU9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0tMSxvPU9iamVjdChlKSxpPW4oZSksYT1pLmxlbmd0aDthLS07KXt2YXIgYz1pW0tlP2E6KytyXTtpZighMT09PXQob1tjXSxjLG8pKWJyZWFrfXJldHVybiBlfTt2YXIgSmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24obixyKXtpZihudWxsPT1uKXJldHVybiBuO2lmKCFvZShuKSlyZXR1cm4gZShuLHIpO2Zvcih2YXIgbz1uLmxlbmd0aCxpPXQ/bzotMSxhPU9iamVjdChuKTsodD9pLS06KytpPG8pJiYhMSE9PXIoYVtpXSxpLGEpOyk7cmV0dXJuIG59fSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmSGUoZSx0LFBlKX0pKSxXZT1KZSxYZT1PYmplY3QucHJvdG90eXBlLCRlPVhlLmhhc093blByb3BlcnR5LEdlPW5lKChmdW5jdGlvbihlLHQpe2U9T2JqZWN0KGUpO3ZhciBuPS0xLHI9dC5sZW5ndGgsbz1yPjI/dFsyXTp2b2lkIDA7Zm9yKG8mJmllKHRbMF0sdFsxXSxvKSYmKHI9MSk7KytuPHI7KWZvcih2YXIgaT10W25dLGE9RWUoaSksYz0tMSxzPWEubGVuZ3RoOysrYzxzOyl7dmFyIHU9YVtjXSxsPWVbdV07KHZvaWQgMD09PWx8fFEobCxYZVt1XSkmJiEkZS5jYWxsKGUsdSkpJiYoZVt1XT1pW3VdKX1yZXR1cm4gZX0pKTtmdW5jdGlvbiBWZShlLHQpe3ZhciBuO3JldHVybihmKGUpPyQ6V2UpKGUsXCJmdW5jdGlvblwiPT10eXBlb2Yobj10KT9uOk8pfWZ1bmN0aW9uIFllKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHwhZihlKSYmcChlKSYmXCJbb2JqZWN0IFN0cmluZ11cIj09ZChlKX1mdW5jdGlvbiBRZShlKXtyZXR1cm4hMD09PWV8fCExPT09ZXx8cChlKSYmXCJbb2JqZWN0IEJvb2xlYW5dXCI9PWQoZSl9ZnVuY3Rpb24gWmUoZSl7cmV0dXJuIHAoZSkmJjE9PT1lLm5vZGVUeXBlJiYhZnVuY3Rpb24oZSl7aWYoIXAoZSl8fFwiW29iamVjdCBPYmplY3RdXCIhPWQoZSkpcmV0dXJuITE7dmFyIHQ9TGUoZSk7aWYobnVsbD09PXQpcmV0dXJuITA7dmFyIG49cWUuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIG4mJkRlLmNhbGwobik9PU5lfShlKX1mdW5jdGlvbiBldChlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmZT09eChlKX1mdW5jdGlvbiB0dChlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZXx8cChlKSYmXCJbb2JqZWN0IE51bWJlcl1cIj09ZChlKX1mdW5jdGlvbiBudChlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KT09PVwiW29iamVjdCBcIi5jb25jYXQoZSxcIl1cIil9fWZ1bmN0aW9uIHJ0KGUpe3JldHVybiBudChcIkJsb2JcIikoZSl9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIG50KFwiRmlsZVwiKShlKX1mdW5jdGlvbiBpdChlKXtyZXR1cm4gbnQoXCJGaWxlTGlzdFwiKShlKX1mdW5jdGlvbiBhdChlLHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKS5tYXAodCl9ZnVuY3Rpb24gY3QoZSx0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkuZXZlcnkodCl9ZnVuY3Rpb24gc3QoZSx0KXtyZXR1cm5bZSx0XS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4tMT09PXQuaW5kZXhPZihlKX0pKX0pKX1mdW5jdGlvbiB1dChlKXtyZXR1cm4gT2JqZWN0LmtleXMoZXx8e30pfWZ1bmN0aW9uIGx0KCl7fWZ1bmN0aW9uIGR0KCl7cmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpfWZ1bmN0aW9uIHB0KGUpe3JldHVybiBaZShlKT9lOlllKGUpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk6bnVsbH1mdW5jdGlvbiBmdChlLHQsbil7ZS5hZGRFdmVudExpc3RlbmVyJiZlLmFkZEV2ZW50TGlzdGVuZXIodCxuLCExKX1mdW5jdGlvbiBodChlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLCExKX1mdW5jdGlvbiBtdChlKXt2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLG49dD9lbmNvZGVVUklDb21wb25lbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHI9YXQodXQoZSksKGZ1bmN0aW9uKHQpe3ZhciByPWVbdF07cmV0dXJuIG4odCkrXCI9XCIrbihwKHIpP0pTT04uc3RyaW5naWZ5KHIpOnIpfSkpO3JldHVybiByLmpvaW4oXCImXCIpfWZ1bmN0aW9uIHZ0KGUpe2lmKCFmKGUpKXRocm93IG5ldyBFcnJvcihcImVsZW1lbnRzIHNob3VsZCBiZSBhbiBBcnJheVwiKTtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUuaW5kZXhPZih0KT4tMX19ZnVuY3Rpb24gZ3QoZSl7aWYoIWYoZSkpdGhyb3cgbmV3IEVycm9yKFwidmFsaWRhdG9ycyBzaG91bGQgYmUgYW4gQXJyYXlcIik7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlKHQpfSkpfX12YXIgeXQ9ZnVuY3Rpb24oKXt2YXIgZT17X2RhdGE6e30sc2V0SXRlbTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9kYXRhW2VdPVN0cmluZyh0KX0sZ2V0SXRlbTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShlKT90aGlzLl9kYXRhW2VdOm51bGx9LHJlbW92ZUl0ZW06ZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSB0aGlzLl9kYXRhW2VdfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhPXt9fX07dHJ5e3JldHVyblwibG9jYWxTdG9yYWdlXCJpbiB3aW5kb3cmJm51bGwhPT13aW5kb3cubG9jYWxTdG9yYWdlPyh3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZVwiLFwiXCIpLHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInN0b3JlXCIpLHdpbmRvdy5sb2NhbFN0b3JhZ2UpOmV9Y2F0Y2godCl7cmV0dXJuIGV9fSgpO2Z1bmN0aW9uIGJ0KGUsdCl7dmFyIG49T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYocj1yLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn1mdW5jdGlvbiBfdChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9idChPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe090KGUsdCxuW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG4pKTpidChPYmplY3QobikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBrdChlKXtyZXR1cm4ga3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sa3QoZSl9ZnVuY3Rpb24gd3QoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIFN0KGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFV0KHIua2V5KSxyKX19ZnVuY3Rpb24geHQoZSx0LG4pe3JldHVybiB0JiZTdChlLnByb3RvdHlwZSx0KSxuJiZTdChlLG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwicHJvdG90eXBlXCIse3dyaXRhYmxlOiExfSksZX1mdW5jdGlvbiBPdChlLHQsbil7cmV0dXJuKHQ9VXQodCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1uLGV9ZnVuY3Rpb24ganQoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwicHJvdG90eXBlXCIse3dyaXRhYmxlOiExfSksdCYmVHQoZSx0KX1mdW5jdGlvbiBBdChlKXtyZXR1cm4gQXQ9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSl9LEF0KGUpfWZ1bmN0aW9uIFR0KGUsdCl7cmV0dXJuIFR0PU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0sVHQoZSx0KX1mdW5jdGlvbiBDdChlLHQpe2lmKHQmJihcIm9iamVjdFwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdCkpcmV0dXJuIHQ7aWYodm9pZCAwIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlfShlKX1mdW5jdGlvbiBJdChlKXt2YXIgdD1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciBuLHI9QXQoZSk7aWYodCl7dmFyIG89QXQodGhpcykuY29uc3RydWN0b3I7bj1SZWZsZWN0LmNvbnN0cnVjdChyLGFyZ3VtZW50cyxvKX1lbHNlIG49ci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIEN0KHRoaXMsbil9fWZ1bmN0aW9uIFB0KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe3ZhciBuPW51bGw9PWU/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZlW1N5bWJvbC5pdGVyYXRvcl18fGVbXCJAQGl0ZXJhdG9yXCJdO2lmKG51bGwhPW4pe3ZhciByLG8saSxhLGM9W10scz0hMCx1PSExO3RyeXtpZihpPShuPW4uY2FsbChlKSkubmV4dCwwPT09dCl7aWYoT2JqZWN0KG4pIT09bilyZXR1cm47cz0hMX1lbHNlIGZvcig7IShzPShyPWkuY2FsbChuKSkuZG9uZSkmJihjLnB1c2goci52YWx1ZSksYy5sZW5ndGghPT10KTtzPSEwKTt9Y2F0Y2goZSl7dT0hMCxvPWV9ZmluYWxseXt0cnl7aWYoIXMmJm51bGwhPW4ucmV0dXJuJiYoYT1uLnJldHVybigpLE9iamVjdChhKSE9PWEpKXJldHVybn1maW5hbGx5e2lmKHUpdGhyb3cgb319cmV0dXJuIGN9fShlLHQpfHxCdChlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gRnQoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIEV0KGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fEJ0KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIEJ0KGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIEV0KGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9FdChlLHQpOnZvaWQgMH19ZnVuY3Rpb24gRXQoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn1mdW5jdGlvbiBVdChlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgbj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09bil7dmFyIHI9bi5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiByO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDpTdHJpbmcodCl9dmFyIFJ0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fSxMdD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIG49e30scj0vKGRvbGZpbilbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8oZWRnZSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8oY2hyb21lKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8Lyh0aXplbilbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8ob3BlcmEpKD86Lip2ZXJzaW9uKT9bIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8od2Via2l0KSg/Oi4qdmVyc2lvbik/WyBcXC9dKFtcXHcuXSspLy5leGVjKGUpfHwvKG1zaWUpIChbXFx3Ll0rKS8uZXhlYyhlKXx8ZS5pbmRleE9mKFwiY29tcGF0aWJsZVwiKTwwJiYvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKSk/Ly5leGVjKGUpfHxbXCJcIixcInVua25vd25cIl07cmV0dXJuXCJ3ZWJraXRcIj09PXJbMV0/cj0vKGlwaG9uZXxpcGFkfGlwb2QpW1xcU1xcc10qb3MgKFtcXHcuX1xcLV0rKSBsaWtlLy5leGVjKGUpfHwvKGFuZHJvaWQpWyBcXC9dKFtcXHcuX1xcLV0rKTsvLmV4ZWMoZSl8fFtyWzBdLFwic2FmYXJpXCIsclsyXV06XCJtb3ppbGxhXCI9PT1yWzFdPy90cmlkZW50Ly50ZXN0KGUpP3JbMV09XCJtc2llXCI6clsxXT1cImZpcmVmb3hcIjovcG9sYXJpc3xuYXRlYnJvd3NlcnwoWzAxMHwwMTF8MDE2fDAxN3wwMTh8MDE5XXszfVxcZHszLDR9XFxkezR9JCkvLnRlc3QoZSkmJihyWzFdPVwicG9sYXJpc1wiKSxuW3JbMV1dPSEwLG4ubmFtZT1yWzFdLG4udmVyc2lvbj10KHJbMl0pLG59ZnVuY3Rpb24gdChlKXt2YXIgdD17fSxuPWU/ZS5zcGxpdCgvXFwufC18Xy8pOltcIjBcIixcIjBcIixcIjBcIl07cmV0dXJuIHQuaW5mbz1uLmpvaW4oXCIuXCIpLHQubWFqb3I9blswXXx8XCIwXCIsdC5taW5vcj1uWzFdfHxcIjBcIix0LnBhdGNoPW5bMl18fFwiMFwiLHR9ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZS5tYXRjaCgvaXBhZC8pfHxlLm1hdGNoKC9hbmRyb2lkLykmJiFlLm1hdGNoKC9tb2JpfG1pbml8ZmVubmVjLyl8fGUubWF0Y2goL21hY2ludG9zaC8pJiZ3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjEpcmV0dXJuITA7cmV0dXJuITF9KGUpP1widGFibGV0XCI6ZnVuY3Rpb24oZSl7aWYoZS5tYXRjaCgvbGludXh8d2luZG93cyAobnR8OTgpfG1hY2ludG9zaHxjcm9zLykmJiFlLm1hdGNoKC9hbmRyb2lkfG1vYmlsZXxwb2xhcmlzfGxndGVsZWNvbXx1emFyZHxuYXRlYnJvd3NlcnxrdGY7fHNrdDsvKSlyZXR1cm4hMDtyZXR1cm4hMX0oZSk/XCJwY1wiOmZ1bmN0aW9uKGUpe3JldHVybiEhZS5tYXRjaCgvaXAoaG9uZXxvZCl8YW5kcm9pZC4rbW9iaWxlfHdpbmRvd3MgKGNlfHBob25lKXxibGFja2JlcnJ5fGJiMTB8c3ltYmlhbnx3ZWJvc3xmaXJlZm94LitmZW5uZWN8b3BlcmEgbShvYnxpbilpfHRpemVuLittb2JpbGV8cG9sYXJpc3xpZW1vYmlsZXxsZ3RlbGVjb218bm9raWF8c29ueWVyaWNzc29ufGRvbGZpbnx1emFyZHxuYXRlYnJvd3NlcnxrdGY7fHNrdDsvKX0oZSk/XCJtb2JpbGVcIjpcIlwifWZ1bmN0aW9uIHIoZSl7dmFyIG49e30scj0vKGlwaG9uZXxpcGFkfGlwb2QpW1xcU1xcc10qb3MgKFtcXHcuX1xcLV0rKSBsaWtlLy5leGVjKGUpfHwhIS9wb2xhcmlzfG5hdGVicm93c2VyfChbMDEwfDAxMXwwMTZ8MDE3fDAxOHwwMTldezN9XFxkezMsNH1cXGR7NH0kKS8udGVzdChlKSYmW1wiXCIsXCJwb2xhcmlzXCIsXCIwLjAuMFwiXXx8Lyh3aW5kb3dzKSg/OiBudCB8IHBob25lKD86IG9zKXswLDF9IHwgKShbXFx3Ll9cXC1dKykvLmV4ZWMoZSl8fC8oYW5kcm9pZClbIFxcL10oW1xcdy5fXFwtXSspOy8uZXhlYyhlKXx8ISEvYW5kcm9pZC8udGVzdChlKSYmW1wiXCIsXCJhbmRyb2lkXCIsXCIwLjAuMFwiXXx8ISEvKHdpbmRvd3MpLy50ZXN0KGUpJiZbXCJcIixcIndpbmRvd3NcIixcIjAuMC4wXCJdfHwvKG1hYykgb3MgeCAoW1xcdy5fXFwtXSspLy5leGVjKGUpfHwvKHRpemVuKVsgXFwvXShbXFx3Ll9cXC1dKyk7Ly5leGVjKGUpfHwhIS8obGludXgpLy50ZXN0KGUpJiZbXCJcIixcImxpbnV4XCIsXCIwLjAuMFwiXXx8ISEvd2Vib3MvLnRlc3QoZSkmJltcIlwiLFwid2Vib3NcIixcIjAuMC4wXCJdfHwvKGNyb3MpKD86XFxzW1xcd10rXFxzKShbXFxkLl9cXC1dKykvLmV4ZWMoZSl8fC8oYmFkYSlbIFxcL10oW1xcdy5fXFwtXSspLy5leGVjKGUpfHwhIS9iYWRhLy50ZXN0KGUpJiZbXCJcIixcImJhZGFcIixcIjAuMC4wXCJdfHwhIS8ocmltfGJsYWNrYmVycnl8YmIxMCkvLnRlc3QoZSkmJltcIlwiLFwiYmxhY2tiZXJyeVwiLFwiMC4wLjBcIl18fFtcIlwiLFwidW5rbm93blwiLFwiMC4wLjBcIl07cmV0dXJuXCJpcGhvbmVcIj09PXJbMV18fFwiaXBhZFwiPT09clsxXXx8XCJpcG9kXCI9PT1yWzFdP3JbMV09XCJpb3NcIjpcIndpbmRvd3NcIj09PXJbMV0mJlwiOThcIj09PXJbMl0mJihyWzJdPVwiMC45OC4wXCIpLFwibWFjXCI9PT1yWzFdJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjEmJihyWzFdPVwiaW9zXCIpLFwiY3Jvc1wiPT09clsxXSYmKHJbMV09XCJjaHJvbWVcIiksbltyWzFdXT0hMCxuLm5hbWU9clsxXSxuLnZlcnNpb249dChyWzJdKSxufUFycmF5LmlzQXJyYXl8fChBcnJheS5pc0FycmF5PWZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0pO3ZhciBvPVtcImNyaW9zXCIsXCJmeGlvc1wiLFwiZGF1bWFwcHNcIl07ZnVuY3Rpb24gaShlLG4pe3ZhciByPXt9LGk9bnVsbCxhPW87QXJyYXkuaXNBcnJheShuKT9hPW8uY29uY2F0KG4pOlwic3RyaW5nXCI9PXR5cGVvZiBuJiYoYT1vLmNvbmNhdChbbl0pKTtmb3IodmFyIGM9MCxzPWEubGVuZ3RoO2M8cztjKz0xKXt2YXIgdT1hW2NdO2lmKGk9bmV3IFJlZ0V4cChcIihcIit1K1wiKVsgXFxcXC9dKFtcXFxcdy5fXFxcXC1dKylcIikuZXhlYyhlKSlicmVha31yZXR1cm4gaXx8KGk9W1wiXCIsXCJcIl0pLGlbMV0/KHIuaXNBcHA9ITAsci5uYW1lPWlbMV0sci52ZXJzaW9uPXQoaVsyXSkpOnIuaXNBcHA9ITEscn1yZXR1cm4gZnVuY3Rpb24odCxvKXt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gZT9lLnRvTG93ZXJDYXNlKCk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmXCJzdHJpbmdcIj09dHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50P3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk6XCJcIn0odCk7cmV0dXJue3VhOmEsYnJvd3NlcjplKGEpLHBsYXRmb3JtOm4oYSksb3M6cihhKSxhcHA6aShhLG8pfX19KCksTXQ9THQoKTt2YXIgenQsRHQscXQsTnQsS3Q9XCJodHRwczovL2thdXRoLmtha2FvLmNvbVwiLEh0PVwiaHR0cHM6Ly9zdG9yeS5rYWthby5jb21cIixKdD1cImh0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb21cIixXdD0oenQ9bG9jYXRpb24sRHQ9enQucHJvdG9jb2wscXQ9enQuaG9zdG5hbWUsTnQ9enQucG9ydCxcIlwiLmNvbmNhdChEdCxcIi8vXCIpLmNvbmNhdChxdCkuY29uY2F0KE50P1wiOlwiK050OlwiXCIpKSxYdD1NdCwkdD0vS0FLQU9UQUxLL2kudGVzdChYdC51YSksR3Q9XCIxLjQzLjFcIi5jb25jYXQoXCJcIiksVnQ9bmF2aWdhdG9yLFl0PVtcInNkay9cIi5jb25jYXQoR3QpLFwib3MvamF2YXNjcmlwdFwiLFwic2RrX3R5cGUvamF2YXNjcmlwdFwiLFwibGFuZy9cIi5jb25jYXQoVnQudXNlckxhbmd1YWdlfHxWdC5sYW5ndWFnZSksXCJkZXZpY2UvXCIuY29uY2F0KFZ0LnBsYXRmb3JtLnJlcGxhY2UoLyAvZyxcIl9cIikpLFwib3JpZ2luL1wiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoV3QpKV0uam9pbihcIiBcIiksUXQ9e2FjY291bnREb21haW46XCJodHRwczovL2FjY291bnRzLmtha2FvLmNvbVwiLGF1dGhEb21haW46S3QsYXV0aG9yaXplOlwiXCIuY29uY2F0KEt0LFwiL29hdXRoL2F1dGhvcml6ZVwiKSxsb2dpbldpZGdldDpcIlwiLmNvbmNhdChLdCxcIi9wdWJsaWMvd2lkZ2V0L2xvZ2luL2tha2FvTG9naW5XaWRnZXQuaHRtbFwiKSxyZWRpcmVjdFVyaTpcIkpTLVNES1wiLHVuaXZlcnNhbEtha2FvTGluazpcIlwiLmNvbmNhdChcImh0dHBzOi8vdGFsay1hcHBzLmtha2FvLmNvbVwiLFwiL3NjaGVtZS9cIiksdGFsa0xvZ2luU2NoZW1lOlwia2FrYW9rb21wYXNzYXV0aDovL2F1dGhvcml6ZVwiLHRhbGtMb2dpblJlZGlyZWN0VXJpOlwiaHR0cHM6Ly9rYXBpLmtha2FvLmNvbS9jb3JzL2FmdGVybG9naW4uaHRtbFwiLHRhbGtJbmFwcFNjaGVtZTpcImtha2FvdGFsazovL2luYXBwYnJvd3NlclwiLHRhbGtTeW5jcGx1Z2luU2NoZW1lOlwia2FrYW90YWxrOi8vYml6cGx1Z2luP3BsdWdpbl9pZD02MDExMjYzYjc0ZmMyYjQ5YzczYTcyOThcIixhcGlSZW1vdGU6XCJcIi5jb25jYXQoXCJodHRwczovL2thcGkua2FrYW8uY29tXCIsXCIvY29ycy9cIiksc2hhcmVyRG9tYWluOlwiaHR0cHM6Ly9zaGFyZXIua2FrYW8uY29tXCIscGlja2VyRG9tYWluOlwiaHR0cHM6Ly9mcmllbmQtcGlja2VyLmtha2FvLmNvbVwiLGFwcHNEb21haW46XCJodHRwczovL2FwcHMua2FrYW8uY29tXCIsdGFsa0xpbmtTY2hlbWU6XCJrYWthb2xpbms6Ly9zZW5kXCIsdGFsa0FuZHJvaWRQYWNrYWdlOlwiY29tLmtha2FvLnRhbGtcIixjaGFubmVsOlwiaHR0cHM6Ly9wZi5rYWthby5jb21cIixjaGFubmVsSWNvbjpcIlwiLmNvbmNhdChKdCxcIi9hc3NldHMvaW1nL2Fib3V0L2xvZ29zXCIpLHN0b3J5U2hhcmU6XCJcIi5jb25jYXQoSHQsXCIvcy9zaGFyZVwiKSxzdG9yeUNoYW5uZWxGb2xsb3c6XCJcIi5jb25jYXQoSHQsXCIvcy9mb2xsb3dcIiksc3RvcnlJY29uOlwiXCIuY29uY2F0KEp0LFwiL3Nkay9qcy9yZXNvdXJjZXMvc3RvcnkvaWNvbl9zbWFsbC5wbmdcIiksc3RvcnlQb3N0U2NoZW1lOlwic3RvcnlsaW5rOi8vcG9zdGluZ1wiLG5hdmlTY2hlbWU6XCJrYWthb25hdmktc2RrOi8vbmF2aWdhdGVcIixuYXZpRmFsbGJhY2s6XCJodHRwczovL2tha2FvbmF2aS5rYWthby5jb20vbGF1bmNoL2luZGV4LmRvXCJ9LFp0PW51bGw7ZnVuY3Rpb24gZW4oKXtyZXR1cm4gWnR9ZnVuY3Rpb24gdG4oZSl7WnQ9ZX1mdW5jdGlvbiBubihlKXtFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMubmFtZT1cIktha2FvRXJyb3JcIix0aGlzLm1lc3NhZ2U9ZX1mdW5jdGlvbiBybihlKXtyZXR1cm4gUmUuYXBwbHkodm9pZCAwLFt7Y2xlYW51cDpmdW5jdGlvbigpe1ZlKGUsKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsZWFudXAmJmUuY2xlYW51cCgpfSkpfX1dLmNvbmNhdChGdChlKSkpfWZ1bmN0aW9uIG9uKGUpe1ZlKGUsKGZ1bmN0aW9uKGUpe2UoKX0pKSxlLmxlbmd0aD0wfWZ1bmN0aW9uIGFuKGUsdCxuKXtpZighMT09PXQoZSkpdGhyb3cgbmV3IG5uKFwiSWxsZWdhbCBhcmd1bWVudCBmb3IgXCIuY29uY2F0KG4pKX1mdW5jdGlvbiBjbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLG49YXJndW1lbnRzLmxlbmd0aD4yP2FyZ3VtZW50c1syXTp2b2lkIDA7aWYoIXAoZSkpdGhyb3cgbmV3IEVycm9yKFwicGFyYW1zIHNob3VsZCBiZSBhbiBPYmplY3RcIik7aih0LmJlZm9yZSkmJnQuYmVmb3JlKGUpLGoodC5kZWZhdWx0cyk/R2UoZSx0LmRlZmF1bHRzKGUpKTpHZShlLHQuZGVmYXVsdHMpO3ZhciByPXQucmVxdWlyZWQsbz12b2lkIDA9PT1yP3t9OnIsaT10Lm9wdGlvbmFsLGE9dm9pZCAwPT09aT97fTppLGM9c3QodXQobyksdXQoZSkpO2lmKGMubGVuZ3RoPjApdGhyb3cgbmV3IG5uKFwiTWlzc2luZyByZXF1aXJlZCBrZXlzOiBcIi5jb25jYXQoYy5qb2luKFwiLFwiKSxcIiBhdCBcIikuY29uY2F0KG4pKTt2YXIgcz1SZSh7fSxvLGEpLHU9c3QodXQoZSksdXQocykpO2lmKHUubGVuZ3RoPjApdGhyb3cgbmV3IG5uKFwiSW52YWxpZCBwYXJhbWV0ZXIga2V5czogXCIuY29uY2F0KHUuam9pbihcIixcIiksXCIgYXQgXCIpLmNvbmNhdChuKSk7cmV0dXJuIFZlKGUsKGZ1bmN0aW9uKGUsdCl7YW4oZSxzW3RdLCdcIicuY29uY2F0KHQsJ1wiIGluICcpLmNvbmNhdChuKSl9KSksaih0LmFmdGVyKSYmdC5hZnRlcihlKSxlfWZ1bmN0aW9uIHNuKCl7cmV0dXJuKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpK2VuKCkrRGF0ZS5ub3coKS50b1N0cmluZygzNikpLnNsaWNlKDAsNjApfWZ1bmN0aW9uIHVuKGUsdCl7aWYoWHQub3MuYW5kcm9pZCl7dmFyIG49SlNPTi5zdHJpbmdpZnkoe2FwcEtleTpadCxLQTpZdH0pO3JldHVyblwibWFya2V0Oi8vZGV0YWlscz9pZD1cIi5jb25jYXQoZSxcIiZyZWZlcnJlcj1cIikuY29uY2F0KG4pfXJldHVybiBYdC5vcy5pb3M/XCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vYXBwL2lkXCIuY29uY2F0KHQpOmxvY2F0aW9uLmhyZWZ9ZnVuY3Rpb24gbG4oZSl7dHJ5e3JldHVybiBlKCl9Y2F0Y2goZSl7dGhyb3cgZSBpbnN0YW5jZW9mIFR5cGVFcnJvcj9uZXcgbm4oXCJrYWthby5qcyBzaG91bGQgYmUgbG9hZGVkIGZyb20gYSB3ZWIgc2VydmVyXCIpOm5ldyBubihcIkVhc3lYRE0gLSBcIi5jb25jYXQoZS5tZXNzYWdlKSl9fW5uLnByb3RvdHlwZT1uZXcgRXJyb3I7dmFyIGRuPXt9O2Z1bmN0aW9uIHBuKGUsdCxuKXt2YXIgcj1kblt0XTtyZXR1cm4gciYmci5jbG9zZSYmIXIuY2xvc2VkJiZyLmNsb3NlKCksZG5bdF09d2luZG93Lm9wZW4oZSx0LG4pLGRuW3RdfWZ1bmN0aW9uIGZuKGUsdCxuKXtWZShuLChmdW5jdGlvbihuLHIpe3ZhciBvPXQuZ2V0QXR0cmlidXRlKG4pO251bGwhPT1vJiYoZVtyXT1cInRydWVcIj09PW98fFwiZmFsc2VcIj09PW8/XCJ0cnVlXCI9PT1vOm8pfSkpfWZ1bmN0aW9uIGhuKGUsdCxuKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3IuaWQ9ci5uYW1lPWUsci5zcmM9dCxyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJib3JkZXI6bm9uZTsgd2lkdGg6MDsgaGVpZ2h0OjA7IGRpc3BsYXk6bm9uZTsgb3ZlcmZsb3c6aGlkZGVuO1wiKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpLG4ucHVzaCgoZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpfSkpfWZ1bmN0aW9uIG1uKGUsdCxuKXt2YXIgcj1mdW5jdGlvbiBuKHIpe3ZhciBvPXIuZGF0YSxpPXIub3JpZ2luO2lmKG8mJmk9PT10KXt2YXIgYT1KU09OLnBhcnNlKG8pO2EuY29kZT9lLmZhaWwoYSk6ZS5zdWNjZXNzKGEpLGUuYWx3YXlzKGEpLGh0KHdpbmRvdyxcIm1lc3NhZ2VcIixuKX19O2Z0KHdpbmRvdyxcIm1lc3NhZ2VcIixyKSxuLnB1c2goKGZ1bmN0aW9uKCl7aHQod2luZG93LFwibWVzc2FnZVwiLHIpfSkpfWZ1bmN0aW9uIHZuKGUsdCl7dmFyIG49dC51cmwscj10LnBvcHVwTmFtZSxvPXQucG9wdXBGZWF0dXJlcyxpPVh0LmJyb3dzZXIubXNpZT97fTpwbihcIlwiLHIsbyk7cmV0dXJuIGkuZm9jdXMmJmkuZm9jdXMoKSxnbihlLG4sciksaX1mdW5jdGlvbiBnbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpcIlwiLHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7ci5zZXRBdHRyaWJ1dGUoXCJhY2NlcHQtY2hhcnNldFwiLFwidXRmLThcIiksci5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIixcInBvc3RcIiksci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIix0KSxyLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLG4pLHIuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImRpc3BsYXk6bm9uZVwiKSxWZShlLChmdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtuLnR5cGU9XCJoaWRkZW5cIixuLm5hbWU9dCxuLnZhbHVlPVllKGUpP2U6SlNPTi5zdHJpbmdpZnkoZSksci5hcHBlbmRDaGlsZChuKX0pKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpLHIuc3VibWl0KCksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyKX12YXIgeW49e307dmFyIGJuPXtzdWJzY3JpYmU6ZnVuY3Rpb24oZSx0KXt5bltlXT15bltlXXx8W10seW5bZV0ucHVzaCh0KX0sdW5zdWJzY3JpYmU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49eW5bZV0scj0wO3I8bi5sZW5ndGg7cisrKWlmKG5bcl09PT10KXJldHVybiB2b2lkIG4uc3BsaWNlKHIsMSl9LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe1ZlKHluW2VdLChmdW5jdGlvbihlKXtlKCl9KSl9fSxfbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt3dCh0aGlzLGUpLHRoaXMuX2ludGVydmFsPXQsdGhpcy5fbWF4Q291bnQ9bix0aGlzLl9jb3VudD0wLHRoaXMuX3N0b3BwZWQ9ITEsdGhpcy5fdGltZW91dD1udWxsfXJldHVybiB4dChlLFt7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe251bGwhPT10aGlzLl90aW1lb3V0JiZ0aGlzLnN0b3AoKSx0aGlzLl9jb3VudD0wLHRoaXMuX3N0b3BwZWQ9ITEsdGhpcy5fZG9Qb2xsaW5nKGUsdCl9fSx7a2V5OlwiX2RvUG9sbGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt0aGlzLl9zdG9wcGVkfHwodGhpcy5fdGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpeysrbi5fY291bnQ+bi5fbWF4Q291bnQ/dCgpOihlKCksbi5fZG9Qb2xsaW5nKGUsdCkpfSksdGhpcy5faW50ZXJ2YWwpKX19LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9zdG9wcGVkPSEwLGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KSx0aGlzLl90aW1lb3V0PW51bGx9fV0pLGV9KCksa249e3N1Y2Nlc3M6bHQsZmFpbDpsdCxhbHdheXM6bHR9LHduPV90KHt0aHJvdWdoVGFsazohMCxwZXJzaXN0QWNjZXNzVG9rZW46ITAscGVyc2lzdFJlZnJlc2hUb2tlbjohMX0sa24pLFNuPXtzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqLHBlcnNpc3RBY2Nlc3NUb2tlbjpRZSxwZXJzaXN0UmVmcmVzaFRva2VuOlFlLGFwcHJvdmFsVHlwZTp2dChbXCJwcm9qZWN0XCJdKSxzY29wZTpZZSx0aHJvdWdoVGFsazpRZSxwbHVzRnJpZW5kUHVibGljSWQ6WWUsY2hhbm5lbFB1YmxpY0lkOlllLHNlcnZpY2VUZXJtczpZZSxyZWRpcmVjdFVyaTpZZSxzdGF0ZTpZZSxkZXZpY2VUeXBlOnZ0KFtcIndhdGNoXCIsXCJ0dlwiXSksbm9uY2U6WWV9LHhuPXtvcHRpb25hbDp7c3VjY2VzczpqLGZhaWw6aixhbHdheXM6aixjbG9zZTpqLHJldHVyblVybDpZZSxmb3JjZU1vYmlsZUxheW91dDpRZSxlbmFibGVCYWNrQnV0dG9uOlFlfSxkZWZhdWx0czpfdChfdCh7fSxrbikse30se2Nsb3NlOmx0LGZvcmNlTW9iaWxlTGF5b3V0OiExLGVuYWJsZUJhY2tCdXR0b246ITB9KX0sT249e2NyZWF0ZUxvZ2luQnV0dG9uOntyZXF1aXJlZDp7Y29udGFpbmVyOmd0KFtaZSxZZV0pfSxvcHRpb25hbDpfdCh7bGFuZzp2dChbXCJlblwiLFwia3JcIl0pLHNpemU6dnQoW1wic21hbGxcIixcIm1lZGl1bVwiLFwibGFyZ2VcIl0pfSxTbiksZGVmYXVsdHM6X3Qoe2xhbmc6XCJrclwiLHNpemU6XCJtZWRpdW1cIn0sd24pfSxsb2dpbjp7b3B0aW9uYWw6U24sZGVmYXVsdHM6d259LGF1dGhvcml6ZTp7b3B0aW9uYWw6e3JlZGlyZWN0VXJpOlllLGFwcHJvdmFsVHlwZTp2dChbXCJwcm9qZWN0XCJdKSxzY29wZTpZZSx0aHJvdWdoVGFsazpRZSxwbHVzRnJpZW5kUHVibGljSWQ6WWUsY2hhbm5lbFB1YmxpY0lkOlllLHNlcnZpY2VUZXJtczpZZSxpc1BvcHVwOlFlLHN0YXRlOlllLGF1dG9Mb2dpbjpRZSxkZXZpY2VUeXBlOnZ0KFtcIndhdGNoXCIsXCJ0dlwiXSkscHJvbXB0czpZZSxyZWF1dGhlbnRpY2F0ZTpRZSx0aHJvdWdoU3luY3BsdWdpbjpRZSxsb2dpbkhpbnQ6WWUsbm9uY2U6WWUsc3VjY2VzczpqLGZhaWw6aixhbHdheXM6an0sZGVmYXVsdHM6X3Qoe3Rocm91Z2hUYWxrOiEwLGlzUG9wdXA6ITEscmVhdXRoZW50aWNhdGU6ITEsdGhyb3VnaFN5bmNwbHVnaW46ITB9LGtuKX0sYXV0b0xvZ2luOntvcHRpb25hbDp7c3VjY2VzczpqLGZhaWw6aixhbHdheXM6an0sZGVmYXVsdHM6a259LGlzc3VlQWNjZXNzVG9rZW46e3JlcXVpcmVkOntjb2RlOlllLHJlZGlyZWN0VXJpOlllfSxvcHRpb25hbDp7c3VjY2VzczpqLGZhaWw6aixhbHdheXM6an0sZGVmYXVsdHM6a259LHNlbGVjdFNoaXBwaW5nQWRkcmVzczp4bixjcmVhdGVTaGlwcGluZ0FkZHJlc3M6eG4sdXBkYXRlU2hpcHBpbmdBZGRyZXNzOl90KHtyZXF1aXJlZDp7YWRkcmVzc0lkOmV0fX0seG4pfTtmdW5jdGlvbiBqbihlKXt2YXIgdCxuLHIsbyxpLGE7cmV0dXJuIHBuKGUsXCJfYmxhbmtcIiwodD00ODAsbj03MDAscj13aW5kb3cuc2NyZWVuTGVmdD93aW5kb3cuc2NyZWVuTGVmdDp3aW5kb3cuc2NyZWVuWD93aW5kb3cuc2NyZWVuWDowLG89d2luZG93LnNjcmVlblRvcD93aW5kb3cuc2NyZWVuVG9wOndpbmRvdy5zY3JlZW5ZP3dpbmRvdy5zY3JlZW5ZOjAsaT1zY3JlZW4ud2lkdGgvMi10LzIrcixhPXNjcmVlbi5oZWlnaHQvMi1uLzIrbyxbXCJ3aWR0aD1cIi5jb25jYXQodCksXCJoZWlnaHQ9XCIuY29uY2F0KG4pLFwibGVmdD1cIi5jb25jYXQoaSksXCJ0b3A9XCIuY29uY2F0KGEpLFwic2Nyb2xsYmFycz15ZXNcIixcInJlc2l6YWJsZT0xXCJdLmpvaW4oXCIsXCIpKSl9ZnVuY3Rpb24gQW4oZSl7cmV0dXJuXCJcIi5jb25jYXQoUXQuYXV0aG9yaXplLFwiP1wiKS5jb25jYXQobXQoZSkpfWZ1bmN0aW9uIFRuKGUpe3ZhciB0PXtjbGllbnRfaWQ6ZW4oKX07cmV0dXJuIGUuYXBwcm92YWxUeXBlJiYodC5hcHByb3ZhbF90eXBlPWUuYXBwcm92YWxUeXBlKSxlLnNjb3BlJiYodC5zY29wZT1lLnNjb3BlKSxlLnN0YXRlJiYodC5zdGF0ZT1lLnN0YXRlKSx0fWZ1bmN0aW9uIENuKGUpe3ZhciB0PXt9O3JldHVybiBlLnBsdXNGcmllbmRQdWJsaWNJZCYmKHRbXCJleHRyYS5wbHVzX2ZyaWVuZF9wdWJsaWNfaWRcIl09ZS5wbHVzRnJpZW5kUHVibGljSWQpLGUuY2hhbm5lbFB1YmxpY0lkJiYodC5jaGFubmVsX3B1YmxpY19pZD1lLmNoYW5uZWxQdWJsaWNJZCksZS5zZXJ2aWNlVGVybXMmJih0W1wiZXh0cmEuc2VydmljZV90ZXJtc1wiXT1lLnNlcnZpY2VUZXJtcyksZS5hdXRvTG9naW4mJih0LnByb21wdD1cIm5vbmVcIiksZS5yZWF1dGhlbnRpY2F0ZSYmKHQucHJvbXB0PVwibG9naW5cIiksZS5wcm9tcHRzJiYodC5wcm9tcHQ9ZS5wcm9tcHRzKSxlLmRldmljZVR5cGUmJih0LmRldmljZV90eXBlPWUuZGV2aWNlVHlwZSksZS5sb2dpbkhpbnQmJih0LmxvZ2luX2hpbnQ9ZS5sb2dpbkhpbnQpLGUubm9uY2UmJih0Lm5vbmNlPWUubm9uY2UpLHR9ZnVuY3Rpb24gSW4oZSl7cmV0dXJuIF90KF90KF90KHt9LFRuKGUpKSxDbihlKSkse30se3JlZGlyZWN0X3VyaTplLnJlZGlyZWN0VXJpfHxRdC5yZWRpcmVjdFVyaSxyZXNwb25zZV90eXBlOlwiY29kZVwiLGF1dGhfdHJhbl9pZDpzbigpfSl9ZnVuY3Rpb24gUG4oZSx0KXtyZXR1cm4gX3QoX3Qoe30sdCkse30se2thOll0LGlzX3BvcHVwOmUuaXNQb3B1cH0pfWZ1bmN0aW9uIEZuKGUsdCl7dC5lcnJvcj9lLmZhaWwodCk6ZS5zdWNjZXNzKHQpLGUuYWx3YXlzKHQpfWZ1bmN0aW9uIEJuKGUsdCl7IWZ1bmN0aW9uKGUsdCl7dmFyIG49ZS51cmwscj1lLm1ldGhvZCxvPWUuZGF0YSxpPW5ldyBYTUxIdHRwUmVxdWVzdDtpZih2b2lkIDAhPT1pLndpdGhDcmVkZW50aWFscylpLm9wZW4ocixuKSxpLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSxpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2kucmVhZHlTdGF0ZT09PVhNTEh0dHBSZXF1ZXN0LkRPTkUmJjIwMD09PWkuc3RhdHVzJiZ0KGkpfSxpLnNlbmQobyk7ZWxzZXt2YXIgYT1uZXcgWERvbWFpblJlcXVlc3Q7YS5vcGVuKHIudG9Mb3dlckNhc2UoKSxuKSxhLm9ubG9hZD1mdW5jdGlvbigpe3Qoe3N0YXR1czphLnJlc3BvbnNlVGV4dD8yMDA6XCJlcnJvclwiLHJlc3BvbnNlOmEucmVzcG9uc2VUZXh0fSl9LHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7YS5zZW5kKG8pfSksMCl9fSh7bWV0aG9kOlwiR0VUXCIsdXJsOmV9LHQpfXZhciBFbj1uZXcgX24oMWUzLDYwMCk7ZnVuY3Rpb24gVW4oZSl7dmFyIHQsbixyPUluKGUpLG89UG4oZSxyKSxpPWZ1bmN0aW9uKGUpe3ZhciB0PSEoIVh0Lm9zLmlvcyYmIVh0Lm9zLmFuZHJvaWQpJiYhJHQsbj0hMD09PWUucmVhdXRoZW50aWNhdGV8fFJuKGUucHJvbXB0cyxcImxvZ2luXCIpLHI9ITA9PT1lLmF1dG9Mb2dpbnx8Um4oZS5wcm9tcHRzLFwibm9uZVwiKTtyZXR1cm4hKFh0Lm9zLmFuZHJvaWQmJi9pbnN0YWdyYW18ZmJfaWFiL2cudGVzdChYdC51YSkpJiZ0JiYhbiYmITA9PT1lLnRocm91Z2hUYWxrJiYhcn0oZSksYT1NbihlKSxjPUFuKG8pLHM9aT9mdW5jdGlvbihlLHQsbil7dmFyIHI9X3QoX3Qoe30sdCkse30se2lzX3BvcHVwOiEwfSksbz1mdW5jdGlvbigpe3JldHVybltcImludGVudDojSW50ZW50XCIsXCJhY3Rpb249Y29tLmtha2FvLnRhbGsuaW50ZW50LmFjdGlvbi5DQVBSSV9MT0dHRURfSU5fQUNUSVZJVFlcIixcImxhdW5jaEZsYWdzPTB4MDg4ODAwMDBcIixcIlMuY29tLmtha2FvLnNkay50YWxrLmFwcEtleT1cIi5jb25jYXQoZW4oKSksXCJTLmNvbS5rYWthby5zZGsudGFsay5yZWRpcmVjdFVyaT1cIi5jb25jYXQoci5yZWRpcmVjdF91cmkpLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsua2FIZWFkZXI9XCIuY29uY2F0KFl0KSxcIlMuY29tLmtha2FvLnNkay50YWxrLmV4dHJhcGFyYW1zPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocikpKV0uY29uY2F0KEZ0KGUuc3RhdGU/W1wiUy5jb20ua2FrYW8uc2RrLnRhbGsuc3RhdGU9XCIuY29uY2F0KGUuc3RhdGUpXTpbXSksW1wiUy5icm93c2VyX2ZhbGxiYWNrX3VybD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG4pKSxcImVuZDtcIl0pLmpvaW4oXCI7XCIpfSxpPWZ1bmN0aW9uKCl7dmFyIHQ9QW4ociksbz1lLmlzUG9wdXA/dDpuLGk9XCJcIi5jb25jYXQodCxcIiZrYT1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChZdCkpLGE9XCJcIi5jb25jYXQoUXQudGFsa0luYXBwU2NoZW1lLFwiP3VybD1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChpKSk7cmV0dXJuXCJcIi5jb25jYXQoUXQudW5pdmVyc2FsS2FrYW9MaW5rKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGEpLFwiJndlYj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChvKSl9O3JldHVybiBYdC5vcy5hbmRyb2lkP28oKTppKCl9KGUscixjKTpjLHU9bnVsbDtpZihhP2Z1bmN0aW9uKGUpe3ZhciB0PV90KF90KHt9LGUpLHt9LHtpc19wb3B1cDohMCxhcHByb3ZhbF93aW5kb3dfdHlwZTpcInY0X2JpenBsdWdpblwifSksbj1lbmNvZGVVUklDb21wb25lbnQobXQodCkpO2xvY2F0aW9uLmhyZWY9XCJcIi5jb25jYXQoUXQudGFsa1N5bmNwbHVnaW5TY2hlbWUsXCImcXVlcnk9XCIpLmNvbmNhdChuKX0obyk6ZS5pc1BvcHVwP3U9am4ocyk6bG9jYXRpb24uaHJlZj1zLGl8fGF8fGUuaXNQb3B1cCl7dmFyIGw9KHQ9ci5hdXRoX3RyYW5faWQsbj1tdCh7Y2xpZW50X2lkOmVuKCksYXV0aF90cmFuX2lkOnQsa2E6WXR9KSxcIlwiLmNvbmNhdChRdC5hdXRoRG9tYWluLFwiL2FwaXdlYi9jb2RlLmpzb24/XCIpLmNvbmNhdChuKSk7RW4uc3RhcnQoKGZ1bmN0aW9uKCl7Qm4obCwoZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24oZSx0KXtpZigyMDA9PT10LnN0YXR1cyYmdC5yZXNwb25zZSl7dmFyIG49SlNPTi5wYXJzZSh0LnJlc3BvbnNlKTtpZihcIm9rXCI9PT1uLnN0YXR1cyYmbi5jb2RlKXJldHVybiBMbihlLHtjb2RlOm4uY29kZX0pLCEwO2lmKFwiZXJyb3JcIj09PW4uc3RhdHVzJiZuLmVycm9yX2NvZGUmJlwiMzAwXCIhPT1uLmVycm9yX2NvZGUpcmV0dXJuIExuKGUse2Vycm9yOm4uZXJyb3IsZXJyb3JfZGVzY3JpcHRpb246bi5lcnJvcl9kZXNjcmlwdGlvbn0pLFwiNzAwXCI9PT1uLmVycm9yX2NvZGUmJihsb2NhdGlvbi5ocmVmPVwiXCIuY29uY2F0KFF0LmF1dGhEb21haW4sXCIvZXJyb3IvbmV0d29ya1wiKSksITB9cmV0dXJuITF9KGUsdCk7biYmKEVuLnN0b3AoKSx1JiZ1LmNsb3NlJiZ1LmNsb3NlKCkpLCFpJiZ1JiZ1LmNsb3NlZCYmRW4uc3RvcCgpfSkpfSksKGZ1bmN0aW9uKCl7TG4oZSx7ZXJyb3I6XCJ0aW1lb3V0XCIsZXJyb3JfZGVzY3JpcHRpb246XCJMT0dJTl9USU1FT1VUXCJ9KX0pKX19ZnVuY3Rpb24gUm4oZSx0KXtyZXR1cm4hIShlJiZlLmluZGV4T2YodCk+LTEpfWZ1bmN0aW9uIExuKGUsdCl7aWYoZS5zdGF0ZSYmKHQuc3RhdGU9ZS5zdGF0ZSksZS5yZWRpcmVjdFVyaSl7dmFyIG49ZS5yZWRpcmVjdFVyaS5pbmRleE9mKFwiP1wiKT4tMT9cIiZcIjpcIj9cIjtsb2NhdGlvbi5ocmVmPWUucmVkaXJlY3RVcmkrbittdCh0KX1lbHNlIEZuKGUsdCl9ZnVuY3Rpb24gTW4oZSl7cmV0dXJuIGUudGhyb3VnaFN5bmNwbHVnaW4mJiR0JiYvY2gtaG9tZS9pLnRlc3QoWHQudWEpfXZhciB6bj1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxhdXRob3JpemU6ZnVuY3Rpb24oZSl7aWYoKChlPWNuKGUsT24uYXV0aG9yaXplLFwiQXV0aC5hdXRob3JpemVcIikpLmF1dG9Mb2dpbnx8Um4oZS5wcm9tcHRzLFwibm9uZVwiKSkmJiEkdClyZXR1cm4gTG4oZSx7ZXJyb3I6XCJhdXRvX2xvZ2luXCIsZXJyb3JfZGVzY3JpcHRpb246XCJOT1RfU1VQUE9SVEVEX0JST1dTRVJcIn0pLCExO01uKGUpJiZmdW5jdGlvbihlKXtyZXR1cm4hMT09PWUuaXNQb3B1cCYmIVJuKGUucHJvbXB0cyxcImNlcnRcIikmJndpbmRvdy5rYWthb3dlYiYmXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93Lmtha2Fvd2ViLnJlcVNpZ25JbkxvY2F0aW9ufShlKT9mdW5jdGlvbihlKXt2YXIgdD1JbihlKSxuPVBuKGUsdCkscj1tdChfdChfdCh7fSxuKSx7fSx7aXNfcG9wdXA6ITEscHJvbXB0Olwibm9uZVwifSkpO3JldHVybiBrYWthb3dlYi5yZXFTaWduSW5Mb2NhdGlvbihyKS50aGVuKChmdW5jdGlvbih0KXt2YXIgbj1PYmplY3QuZnJvbUVudHJpZXMobmV3IHdpbmRvdy5VUkwodCkuc2VhcmNoUGFyYW1zKTtyZXR1cm5cImNvbnNlbnRfcmVxdWlyZWRcIj09PW4uZXJyb3ImJiFSbihlLnByb21wdHMsXCJub25lXCIpfHxcImludGVyYWN0aW9uX3JlcXVpcmVkXCI9PT1uLmVycm9yfHwoTG4oZSxfdChfdCh7fSxuLmNvZGUmJntjb2RlOm4uY29kZX0pLG4uZXJyb3ImJntlcnJvcjpuLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOm4uZXJyb3JfZGVzY3JpcHRpb259KSksITEpfSkpLmNhdGNoKChmdW5jdGlvbihlKXtyZXR1cm4hMX0pKX0oZSkudGhlbigoZnVuY3Rpb24odCl7dCYmVW4oZSl9KSk6VW4oZSksYm4uZGlzcGF0Y2goXCJMT0dJTl9TVEFSVFwiKX19KTtmdW5jdGlvbiBEbigpe3JldHVybiBYdC5vcy5hbmRyb2lkJiYoMj09WHQub3MudmVyc2lvbi5tYWpvciYmL1ZlcnNpb25cXC9cXGQrLlxcZCt8L2kudGVzdChYdC51YSl8fDQ9PVh0Lm9zLnZlcnNpb24ubWFqb3ImJlh0Lm9zLnZlcnNpb24ubWlub3I8NCYmL1ZlcnNpb25cXC9cXGQrLlxcZCt8L2kudGVzdChYdC51YSl8fC9WZXJzaW9uXFwvXFxkK1xcLlxcZCsvaS50ZXN0KFh0LnVhKSYmKC9DaHJvbWVcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXC5cXGQrIE1vYmlsZS9pLnRlc3QoWHQudWEpfHwvOyB3dlxcKS9pLnRlc3QoWHQudWEpKSl9ZnVuY3Rpb24gcW4oKXtyZXR1cm4gWHQub3MuaW9zJiYkdH12YXIgTm49e2V4cG9ydHM6e319OyFmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIG51bGwhPT1lJiYoXCJvYmplY3RcIj09PXR8fFwiZnVuY3Rpb25cIj09PXQpfWZ1bmN0aW9uIHQoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX12YXIgbj1BcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxyPTAsbz12b2lkIDAsaT12b2lkIDAsYT1mdW5jdGlvbihlLHQpe2Jbcl09ZSxiW3IrMV09dCwyPT09KHIrPTIpJiYoaT9pKF8pOncoKSl9O2Z1bmN0aW9uIGMoZSl7aT1lfWZ1bmN0aW9uIHMoZSl7YT1lfXZhciB1PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCxsPXV8fHt9LGQ9bC5NdXRhdGlvbk9ic2VydmVyfHxsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIscD1cInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSxmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGltcG9ydFNjcmlwdHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXNzYWdlQ2hhbm5lbDtmdW5jdGlvbiBoKCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHByb2Nlc3MubmV4dFRpY2soXyl9fWZ1bmN0aW9uIG0oKXtyZXR1cm4gdm9pZCAwIT09bz9mdW5jdGlvbigpe28oXyl9OnkoKX1mdW5jdGlvbiB2KCl7dmFyIGU9MCx0PW5ldyBkKF8pLG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7cmV0dXJuIHQub2JzZXJ2ZShuLHtjaGFyYWN0ZXJEYXRhOiEwfSksZnVuY3Rpb24oKXtuLmRhdGE9ZT0rK2UlMn19ZnVuY3Rpb24gZygpe3ZhciBlPW5ldyBNZXNzYWdlQ2hhbm5lbDtyZXR1cm4gZS5wb3J0MS5vbm1lc3NhZ2U9XyxmdW5jdGlvbigpe3JldHVybiBlLnBvcnQyLnBvc3RNZXNzYWdlKDApfX1mdW5jdGlvbiB5KCl7dmFyIGU9c2V0VGltZW91dDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZShfLDEpfX12YXIgYj1uZXcgQXJyYXkoMWUzKTtmdW5jdGlvbiBfKCl7Zm9yKHZhciBlPTA7ZTxyO2UrPTIpKDAsYltlXSkoYltlKzFdKSxiW2VdPXZvaWQgMCxiW2UrMV09dm9pZCAwO3I9MH1mdW5jdGlvbiBrKCl7dHJ5e3ZhciBlPUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKS5yZXF1aXJlKFwidmVydHhcIik7cmV0dXJuIG89ZS5ydW5Pbkxvb3B8fGUucnVuT25Db250ZXh0LG0oKX1jYXRjaChlKXtyZXR1cm4geSgpfX12YXIgdz12b2lkIDA7ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPXRoaXMscj1uZXcgdGhpcy5jb25zdHJ1Y3RvcihqKTt2b2lkIDA9PT1yW09dJiZXKHIpO3ZhciBvPW4uX3N0YXRlO2lmKG8pe3ZhciBpPWFyZ3VtZW50c1tvLTFdO2EoKGZ1bmN0aW9uKCl7cmV0dXJuIE4obyxyLGksbi5fcmVzdWx0KX0pKX1lbHNlIEQobixyLGUsdCk7cmV0dXJuIHJ9ZnVuY3Rpb24geChlKXt2YXIgdD10aGlzO2lmKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmNvbnN0cnVjdG9yPT09dClyZXR1cm4gZTt2YXIgbj1uZXcgdChqKTtyZXR1cm4gUihuLGUpLG59dz1wP2goKTpkP3YoKTpmP2coKTp2b2lkIDA9PT11P2soKTp5KCk7dmFyIE89TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO2Z1bmN0aW9uIGooKXt9dmFyIEE9dm9pZCAwLFQ9MSxDPTI7ZnVuY3Rpb24gSSgpe3JldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKX1mdW5jdGlvbiBQKCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpfWZ1bmN0aW9uIEYoZSx0LG4scil7dHJ5e2UuY2FsbCh0LG4scil9Y2F0Y2goZSl7cmV0dXJuIGV9fWZ1bmN0aW9uIEIoZSx0LG4pe2EoKGZ1bmN0aW9uKGUpe3ZhciByPSExLG89RihuLHQsKGZ1bmN0aW9uKG4pe3J8fChyPSEwLHQhPT1uP1IoZSxuKTpNKGUsbikpfSksKGZ1bmN0aW9uKHQpe3J8fChyPSEwLHooZSx0KSl9KSxcIlNldHRsZTogXCIrKGUuX2xhYmVsfHxcIiB1bmtub3duIHByb21pc2VcIikpOyFyJiZvJiYocj0hMCx6KGUsbykpfSksZSl9ZnVuY3Rpb24gRShlLHQpe3QuX3N0YXRlPT09VD9NKGUsdC5fcmVzdWx0KTp0Ll9zdGF0ZT09PUM/eihlLHQuX3Jlc3VsdCk6RCh0LHZvaWQgMCwoZnVuY3Rpb24odCl7cmV0dXJuIFIoZSx0KX0pLChmdW5jdGlvbih0KXtyZXR1cm4geihlLHQpfSkpfWZ1bmN0aW9uIFUoZSxuLHIpe24uY29uc3RydWN0b3I9PT1lLmNvbnN0cnVjdG9yJiZyPT09UyYmbi5jb25zdHJ1Y3Rvci5yZXNvbHZlPT09eD9FKGUsbik6dm9pZCAwPT09cj9NKGUsbik6dChyKT9CKGUsbixyKTpNKGUsbil9ZnVuY3Rpb24gUih0LG4pe2lmKHQ9PT1uKXoodCxJKCkpO2Vsc2UgaWYoZShuKSl7dmFyIHI9dm9pZCAwO3RyeXtyPW4udGhlbn1jYXRjaChlKXtyZXR1cm4gdm9pZCB6KHQsZSl9VSh0LG4scil9ZWxzZSBNKHQsbil9ZnVuY3Rpb24gTChlKXtlLl9vbmVycm9yJiZlLl9vbmVycm9yKGUuX3Jlc3VsdCkscShlKX1mdW5jdGlvbiBNKGUsdCl7ZS5fc3RhdGU9PT1BJiYoZS5fcmVzdWx0PXQsZS5fc3RhdGU9VCwwIT09ZS5fc3Vic2NyaWJlcnMubGVuZ3RoJiZhKHEsZSkpfWZ1bmN0aW9uIHooZSx0KXtlLl9zdGF0ZT09PUEmJihlLl9zdGF0ZT1DLGUuX3Jlc3VsdD10LGEoTCxlKSl9ZnVuY3Rpb24gRChlLHQsbixyKXt2YXIgbz1lLl9zdWJzY3JpYmVycyxpPW8ubGVuZ3RoO2UuX29uZXJyb3I9bnVsbCxvW2ldPXQsb1tpK1RdPW4sb1tpK0NdPXIsMD09PWkmJmUuX3N0YXRlJiZhKHEsZSl9ZnVuY3Rpb24gcShlKXt2YXIgdD1lLl9zdWJzY3JpYmVycyxuPWUuX3N0YXRlO2lmKDAhPT10Lmxlbmd0aCl7Zm9yKHZhciByPXZvaWQgMCxvPXZvaWQgMCxpPWUuX3Jlc3VsdCxhPTA7YTx0Lmxlbmd0aDthKz0zKXI9dFthXSxvPXRbYStuXSxyP04obixyLG8saSk6byhpKTtlLl9zdWJzY3JpYmVycy5sZW5ndGg9MH19ZnVuY3Rpb24gTihlLG4scixvKXt2YXIgaT10KHIpLGE9dm9pZCAwLGM9dm9pZCAwLHM9ITA7aWYoaSl7dHJ5e2E9cihvKX1jYXRjaChlKXtzPSExLGM9ZX1pZihuPT09YSlyZXR1cm4gdm9pZCB6KG4sUCgpKX1lbHNlIGE9bztuLl9zdGF0ZSE9PUF8fChpJiZzP1IobixhKTohMT09PXM/eihuLGMpOmU9PT1UP00obixhKTplPT09QyYmeihuLGEpKX1mdW5jdGlvbiBLKGUsdCl7dHJ5e3QoKGZ1bmN0aW9uKHQpe1IoZSx0KX0pLChmdW5jdGlvbih0KXt6KGUsdCl9KSl9Y2F0Y2godCl7eihlLHQpfX12YXIgSD0wO2Z1bmN0aW9uIEooKXtyZXR1cm4gSCsrfWZ1bmN0aW9uIFcoZSl7ZVtPXT1IKyssZS5fc3RhdGU9dm9pZCAwLGUuX3Jlc3VsdD12b2lkIDAsZS5fc3Vic2NyaWJlcnM9W119ZnVuY3Rpb24gWCgpe3JldHVybiBuZXcgRXJyb3IoXCJBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXlcIil9dmFyICQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3Rvcj1lLHRoaXMucHJvbWlzZT1uZXcgZShqKSx0aGlzLnByb21pc2VbT118fFcodGhpcy5wcm9taXNlKSxuKHQpPyh0aGlzLmxlbmd0aD10Lmxlbmd0aCx0aGlzLl9yZW1haW5pbmc9dC5sZW5ndGgsdGhpcy5fcmVzdWx0PW5ldyBBcnJheSh0aGlzLmxlbmd0aCksMD09PXRoaXMubGVuZ3RoP00odGhpcy5wcm9taXNlLHRoaXMuX3Jlc3VsdCk6KHRoaXMubGVuZ3RoPXRoaXMubGVuZ3RofHwwLHRoaXMuX2VudW1lcmF0ZSh0KSwwPT09dGhpcy5fcmVtYWluaW5nJiZNKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpKSk6eih0aGlzLnByb21pc2UsWCgpKX1yZXR1cm4gZS5wcm90b3R5cGUuX2VudW1lcmF0ZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0aGlzLl9zdGF0ZT09PUEmJnQ8ZS5sZW5ndGg7dCsrKXRoaXMuX2VhY2hFbnRyeShlW3RdLHQpfSxlLnByb3RvdHlwZS5fZWFjaEVudHJ5PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcixyPW4ucmVzb2x2ZTtpZihyPT09eCl7dmFyIG89dm9pZCAwLGk9dm9pZCAwLGE9ITE7dHJ5e289ZS50aGVufWNhdGNoKGUpe2E9ITAsaT1lfWlmKG89PT1TJiZlLl9zdGF0ZSE9PUEpdGhpcy5fc2V0dGxlZEF0KGUuX3N0YXRlLHQsZS5fcmVzdWx0KTtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhpcy5fcmVtYWluaW5nLS0sdGhpcy5fcmVzdWx0W3RdPWU7ZWxzZSBpZihuPT09ZWUpe3ZhciBjPW5ldyBuKGopO2E/eihjLGkpOlUoYyxlLG8pLHRoaXMuX3dpbGxTZXR0bGVBdChjLHQpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBuKChmdW5jdGlvbih0KXtyZXR1cm4gdChlKX0pKSx0KX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChyKGUpLHQpfSxlLnByb3RvdHlwZS5fc2V0dGxlZEF0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLnByb21pc2U7ci5fc3RhdGU9PT1BJiYodGhpcy5fcmVtYWluaW5nLS0sZT09PUM/eihyLG4pOnRoaXMuX3Jlc3VsdFt0XT1uKSwwPT09dGhpcy5fcmVtYWluaW5nJiZNKHIsdGhpcy5fcmVzdWx0KX0sZS5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdD1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7RChlLHZvaWQgMCwoZnVuY3Rpb24oZSl7cmV0dXJuIG4uX3NldHRsZWRBdChULHQsZSl9KSwoZnVuY3Rpb24oZSl7cmV0dXJuIG4uX3NldHRsZWRBdChDLHQsZSl9KSl9LGV9KCk7ZnVuY3Rpb24gRyhlKXtyZXR1cm4gbmV3ICQodGhpcyxlKS5wcm9taXNlfWZ1bmN0aW9uIFYoZSl7dmFyIHQ9dGhpcztyZXR1cm4gbihlKT9uZXcgdCgoZnVuY3Rpb24obixyKXtmb3IodmFyIG89ZS5sZW5ndGgsaT0wO2k8bztpKyspdC5yZXNvbHZlKGVbaV0pLnRoZW4obixyKX0pKTpuZXcgdCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdChuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiKSl9KSl9ZnVuY3Rpb24gWShlKXt2YXIgdD1uZXcgdGhpcyhqKTtyZXR1cm4geih0LGUpLHR9ZnVuY3Rpb24gUSgpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIpfWZ1bmN0aW9uIFooKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpfXZhciBlZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dGhpc1tPXT1KKCksdGhpcy5fcmVzdWx0PXRoaXMuX3N0YXRlPXZvaWQgMCx0aGlzLl9zdWJzY3JpYmVycz1bXSxqIT09dCYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJlEoKSx0aGlzIGluc3RhbmNlb2YgZT9LKHRoaXMsdCk6WigpKX1yZXR1cm4gZS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxlLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMscj1uLmNvbnN0cnVjdG9yO3JldHVybiB0KGUpP24udGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIHIucmVzb2x2ZShlKCkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KSl9KSwoZnVuY3Rpb24odCl7cmV0dXJuIHIucmVzb2x2ZShlKCkpLnRoZW4oKGZ1bmN0aW9uKCl7dGhyb3cgdH0pKX0pKTpuLnRoZW4oZSxlKX0sZX0oKTtmdW5jdGlvbiB0ZSgpe3ZhciBlPXZvaWQgMDtpZih2b2lkIDAhPT1SdCllPVJ0O2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpZT1zZWxmO2Vsc2UgdHJ5e2U9RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcInBvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudFwiKX12YXIgdD1lLlByb21pc2U7aWYodCl7dmFyIG49bnVsbDt0cnl7bj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodC5yZXNvbHZlKCkpfWNhdGNoKGUpe31pZihcIltvYmplY3QgUHJvbWlzZV1cIj09PW4mJiF0LmNhc3QpcmV0dXJufWUuUHJvbWlzZT1lZX1yZXR1cm4gZWUucHJvdG90eXBlLnRoZW49UyxlZS5hbGw9RyxlZS5yYWNlPVYsZWUucmVzb2x2ZT14LGVlLnJlamVjdD1ZLGVlLl9zZXRTY2hlZHVsZXI9YyxlZS5fc2V0QXNhcD1zLGVlLl9hc2FwPWEsZWUucG9seWZpbGw9dGUsZWUuUHJvbWlzZT1lZSxlZX0oKX0oTm4pO3ZhciBLbj0oZnVuY3Rpb24oZSx0LG4scixvLGkpe3ZhciBhLGMscyx1LGwsZD10aGlzfHxlLHA9TWF0aC5mbG9vcigxZTQqTWF0aC5yYW5kb20oKSksZj1GdW5jdGlvbi5wcm90b3R5cGUsaD0vXigoaHR0cC4/OilcXC9cXC8oW146XFwvXFxzXSspKDpcXGQrKSopLyxtPS9bXFwtXFx3XStcXC9cXC5cXC5cXC8vLHY9LyhbXjpdKVxcL1xcLy9nLGc9XCJcIix5PXt9LGI9ZS5lYXN5WERNLF89XCJlYXN5WERNX1wiLGs9ITE7ZnVuY3Rpb24gdyhlLHQpe3ZhciBuPWt0KGVbdF0pO3JldHVyblwiZnVuY3Rpb25cIj09bnx8IShcIm9iamVjdFwiIT1ufHwhZVt0XSl8fFwidW5rbm93blwiPT1ufWZ1bmN0aW9uIFMoKXt2YXIgZSx0PVwiU2hvY2t3YXZlIEZsYXNoXCIsbj1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCI7aWYoIUUobmF2aWdhdG9yLnBsdWdpbnMpJiZcIm9iamVjdFwiPT1rdChuYXZpZ2F0b3IucGx1Z2luc1t0XSkpe3ZhciByPW5hdmlnYXRvci5wbHVnaW5zW3RdLmRlc2NyaXB0aW9uO3ImJiFFKG5hdmlnYXRvci5taW1lVHlwZXMpJiZuYXZpZ2F0b3IubWltZVR5cGVzW25dJiZuYXZpZ2F0b3IubWltZVR5cGVzW25dLmVuYWJsZWRQbHVnaW4mJihjPXIubWF0Y2goL1xcZCsvZykpfWlmKCFjKXRyeXtlPW5ldyBBY3RpdmVYT2JqZWN0KFwiU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2hcIiksYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLkdldFZhcmlhYmxlKFwiJHZlcnNpb25cIikubWF0Y2goLyhcXGQrKSwoXFxkKyksKFxcZCspLChcXGQrKS8pLDEpLGU9bnVsbH1jYXRjaChlKXt9aWYoIWMpcmV0dXJuITE7dmFyIG89cGFyc2VJbnQoY1swXSwxMCksaT1wYXJzZUludChjWzFdLDEwKTtyZXR1cm4gcz1vPjkmJmk+MCwhMH1pZih3KGUsXCJhZGRFdmVudExpc3RlbmVyXCIpKXU9ZnVuY3Rpb24oZSx0LG4pe2UuYWRkRXZlbnRMaXN0ZW5lcih0LG4sITEpfSxsPWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLCExKX07ZWxzZXtpZighdyhlLFwiYXR0YWNoRXZlbnRcIikpdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlciBub3Qgc3VwcG9ydGVkXCIpO3U9ZnVuY3Rpb24oZSx0LG4pe2UuYXR0YWNoRXZlbnQoXCJvblwiK3Qsbil9LGw9ZnVuY3Rpb24oZSx0LG4pe2UuZGV0YWNoRXZlbnQoXCJvblwiK3Qsbil9fXZhciB4LE89ITEsaj1bXTtmdW5jdGlvbiBBKCl7aWYoIU8pe089ITA7Zm9yKHZhciBlPTA7ZTxqLmxlbmd0aDtlKyspaltlXSgpO2oubGVuZ3RoPTB9fWZ1bmN0aW9uIFQoZSx0KXtPP2UuY2FsbCh0KTpqLnB1c2goKGZ1bmN0aW9uKCl7ZS5jYWxsKHQpfSkpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuIGUubWF0Y2goaClbM119ZnVuY3Rpb24gSShlKXtpZihlLmluZGV4T2YoXCJmaWxlOi8vXCIpPj0wKXJldHVyblwiZmlsZTovL1wiO3ZhciB0PWUudG9Mb3dlckNhc2UoKS5tYXRjaChoKTtpZighdClyZXR1cm5cIlwiO3ZhciBuPXRbMl0scj10WzNdLG89dFs0XXx8XCJcIjtyZXR1cm4oXCJodHRwOlwiPT1uJiZcIjo4MFwiPT1vfHxcImh0dHBzOlwiPT1uJiZcIjo0NDNcIj09bykmJihvPVwiXCIpLG4rXCIvL1wiK3Irb31mdW5jdGlvbiBQKGUpe2lmKCEoZT1lLnJlcGxhY2UodixcIiQxL1wiKSkubWF0Y2goL14oaHR0cHx8aHR0cHMpOlxcL1xcLy8pKXt2YXIgdD1cIi9cIj09PWUuc3Vic3RyaW5nKDAsMSk/XCJcIjpuLnBhdGhuYW1lO1wiL1wiIT09dC5zdWJzdHJpbmcodC5sZW5ndGgtMSkmJih0PXQuc3Vic3RyaW5nKDAsdC5sYXN0SW5kZXhPZihcIi9cIikrMSkpLGU9bi5wcm90b2NvbCtcIi8vXCIrbi5ob3N0K3QrZX1mb3IoO20udGVzdChlKTspZT1lLnJlcGxhY2UobSxcIlwiKTtyZXR1cm4gZX1mdW5jdGlvbiBGKGUsdCl7dmFyIG49XCJcIixyPWUuaW5kZXhPZihcIiNcIik7LTEhPT1yJiYobj1lLnN1YnN0cmluZyhyKSxlPWUuc3Vic3RyaW5nKDAscikpO3ZhciBvPVtdO2Zvcih2YXIgYSBpbiB0KXQuaGFzT3duUHJvcGVydHkoYSkmJm8ucHVzaChhK1wiPVwiK2kodFthXSkpO3JldHVybiBlKyhrP1wiI1wiOi0xPT1lLmluZGV4T2YoXCI/XCIpP1wiP1wiOlwiJlwiKStvLmpvaW4oXCImXCIpK259XCJyZWFkeVN0YXRlXCJpbiB0Pyh4PXQucmVhZHlTdGF0ZSxPPVwiY29tcGxldGVcIj09eHx8fm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSYmKFwibG9hZGVkXCI9PXh8fFwiaW50ZXJhY3RpdmVcIj09eCkpOk89ISF0LmJvZHksT3x8KHcoZSxcImFkZEV2ZW50TGlzdGVuZXJcIik/dSh0LFwiRE9NQ29udGVudExvYWRlZFwiLEEpOih1KHQsXCJyZWFkeXN0YXRlY2hhbmdlXCIsKGZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiPT10LnJlYWR5U3RhdGUmJkEoKX0pKSx0LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCYmZT09PXRvcCYmZnVuY3Rpb24gZSgpe2lmKCFPKXt0cnl7dC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKHQpe3JldHVybiB2b2lkIHIoZSwxKX1BKCl9fSgpKSx1KGUsXCJsb2FkXCIsQSkpO3ZhciBCPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPXt9LHI9KGU9ZS5zdWJzdHJpbmcoMSkuc3BsaXQoXCImXCIpKS5sZW5ndGg7ci0tOyluWyh0PWVbcl0uc3BsaXQoXCI9XCIpKVswXV09byh0WzFdKTtyZXR1cm4gbn0oL3hkbV9lPS8udGVzdChuLnNlYXJjaCk/bi5zZWFyY2g6bi5oYXNoKTtmdW5jdGlvbiBFKGUpe3JldHVybiB2b2lkIDA9PT1lfXZhciBVLFI9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PXthOlsxLDIsM119LG49J3tcImFcIjpbMSwyLDNdfSc7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEpTT04mJlwiZnVuY3Rpb25cIj09dHlwZW9mIEpTT04uc3RyaW5naWZ5JiZKU09OLnN0cmluZ2lmeSh0KS5yZXBsYWNlKC9cXHMvZyxcIlwiKT09PW4/SlNPTjooT2JqZWN0LnRvSlNPTiYmT2JqZWN0LnRvSlNPTih0KS5yZXBsYWNlKC9cXHMvZyxcIlwiKT09PW4mJihlLnN0cmluZ2lmeT1PYmplY3QudG9KU09OKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTdHJpbmcucHJvdG90eXBlLmV2YWxKU09OJiYodD1uLmV2YWxKU09OKCkpLmEmJjM9PT10LmEubGVuZ3RoJiYzPT09dC5hWzJdJiYoZS5wYXJzZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5ldmFsSlNPTigpfSksZS5zdHJpbmdpZnkmJmUucGFyc2U/KFI9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sZSk6bnVsbCl9O2Z1bmN0aW9uIEwoZSx0LG4pe3ZhciByO2Zvcih2YXIgbyBpbiB0KXQuaGFzT3duUHJvcGVydHkobykmJihvIGluIGU/XCJvYmplY3RcIj09PWt0KHI9dFtvXSk/TChlW29dLHIsbik6bnx8KGVbb109dFtvXSk6ZVtvXT10W29dKTtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3ZhciBuO0UoYSkmJmZ1bmN0aW9uKCl7dmFyIGU9dC5ib2R5LmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImZvcm1cIikpLG49ZS5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7bi5uYW1lPV8rXCJURVNUXCIrcCxhPW4hPT1lLmVsZW1lbnRzW24ubmFtZV0sdC5ib2R5LnJlbW92ZUNoaWxkKGUpfSgpLGE/bj10LmNyZWF0ZUVsZW1lbnQoJzxpZnJhbWUgbmFtZT1cIicrZS5wcm9wcy5uYW1lKydcIi8+Jyk6KG49dC5jcmVhdGVFbGVtZW50KFwiSUZSQU1FXCIpKS5uYW1lPWUucHJvcHMubmFtZSxuLmlkPW4ubmFtZT1lLnByb3BzLm5hbWUsZGVsZXRlIGUucHJvcHMubmFtZSxcInN0cmluZ1wiPT10eXBlb2YgZS5jb250YWluZXImJihlLmNvbnRhaW5lcj10LmdldEVsZW1lbnRCeUlkKGUuY29udGFpbmVyKSksZS5jb250YWluZXJ8fChMKG4uc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCItMjAwMHB4XCIsbGVmdDpcIjBweFwifSksZS5jb250YWluZXI9dC5ib2R5KTt2YXIgcj1lLnByb3BzLnNyYztpZihlLnByb3BzLnNyYz1cImphdmFzY3JpcHQ6ZmFsc2VcIixMKG4sZS5wcm9wcyksbi5ib3JkZXI9bi5mcmFtZUJvcmRlcj0wLG4uYWxsb3dUcmFuc3BhcmVuY3k9ITAsZS5jb250YWluZXIuYXBwZW5kQ2hpbGQobiksZS5vbkxvYWQmJnUobixcImxvYWRcIixlLm9uTG9hZCksZS51c2VQb3N0KXt2YXIgbyxpPWUuY29udGFpbmVyLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImZvcm1cIikpO2lmKGkudGFyZ2V0PW4ubmFtZSxpLmFjdGlvbj1yLGkubWV0aG9kPVwiUE9TVFwiLFwib2JqZWN0XCI9PT1rdChlLnVzZVBvc3QpKWZvcih2YXIgYyBpbiBlLnVzZVBvc3QpZS51c2VQb3N0Lmhhc093blByb3BlcnR5KGMpJiYoYT9vPXQuY3JlYXRlRWxlbWVudCgnPGlucHV0IG5hbWU9XCInK2MrJ1wiLz4nKToobz10LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKSkubmFtZT1jLG8udmFsdWU9ZS51c2VQb3N0W2NdLGkuYXBwZW5kQ2hpbGQobykpO2kuc3VibWl0KCksaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfWVsc2Ugbi5zcmM9cjtyZXR1cm4gZS5wcm9wcy5zcmM9cixufWZ1bmN0aW9uIHooZSl7cmV0dXJuIGUucmVwbGFjZSgvWy1bXFxdL3t9KCkrLlxcXiR8XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoLyhcXCopL2csXCIuJDFcIikucmVwbGFjZSgvXFw/L2csXCIuXCIpfWZ1bmN0aW9uIEQocil7dmFyIG8saT1yLnByb3RvY29sO2lmKHIuaXNIb3N0PXIuaXNIb3N0fHxFKEIueGRtX3ApLGs9ci5oYXNofHwhMSxyLnByb3BzfHwoci5wcm9wcz17fSksci5pc0hvc3Qpci5yZW1vdGU9UChyLnJlbW90ZSksci5jaGFubmVsPXIuY2hhbm5lbHx8XCJkZWZhdWx0XCIrcCsrLHIuc2VjcmV0PU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygyKSxFKGkpJiYoaT1JKG4uaHJlZik9PUkoci5yZW1vdGUpP1wiNFwiOncoZSxcInBvc3RNZXNzYWdlXCIpfHx3KHQsXCJwb3N0TWVzc2FnZVwiKT9cIjFcIjpyLnN3ZiYmdyhlLFwiQWN0aXZlWE9iamVjdFwiKSYmUygpP1wiNlwiOlwiR2Vja29cIj09PW5hdmlnYXRvci5wcm9kdWN0JiZcImZyYW1lRWxlbWVudFwiaW4gZSYmLTE9PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIldlYktpdFwiKT9cIjVcIjpyLnJlbW90ZUhlbHBlcj9cIjJcIjpcIjBcIik7ZWxzZSBpZihyLmNoYW5uZWw9Qi54ZG1fYy5yZXBsYWNlKC9bXCInPD5cXFxcXS9nLFwiXCIpLHIuc2VjcmV0PUIueGRtX3Msci5yZW1vdGU9Qi54ZG1fZS5yZXBsYWNlKC9bXCInPD5cXFxcXS9nLFwiXCIpLGk9Qi54ZG1fcCxyLmFjbCYmIWZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPVtlXSk7Zm9yKHZhciBuLHI9ZS5sZW5ndGg7ci0tOylpZihuPVwiXlwiPT09ZVtyXS5zdWJzdHIoMCwxKSYmXCIkXCI9PT1lW3JdLnN1YnN0cihlW3JdLmxlbmd0aC0xLDEpP2Vbcl06XCJeXCIreihlW3JdKStcIiRcIiwobj1uZXcgUmVnRXhwKG4pKS50ZXN0KHQpKXJldHVybiEwO3JldHVybiExfShyLmFjbCxyLnJlbW90ZSkpdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZCBmb3IgXCIrci5yZW1vdGUpO3N3aXRjaChyLnByb3RvY29sPWksaSl7Y2FzZVwiMFwiOmlmKEwocix7aW50ZXJ2YWw6MTAwLGRlbGF5OjJlMyx1c2VSZXNpemU6ITAsdXNlUGFyZW50OiExLHVzZVBvbGxpbmc6ITF9LCEwKSxyLmlzSG9zdCl7aWYoIXIubG9jYWwpe2Zvcih2YXIgYSxzPW4ucHJvdG9jb2wrXCIvL1wiK24uaG9zdCx1PXQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKSxsPXUubGVuZ3RoO2wtLTspaWYoKGE9dVtsXSkuc3JjLnN1YnN0cmluZygwLHMubGVuZ3RoKT09PXMpe3IubG9jYWw9YS5zcmM7YnJlYWt9ci5sb2NhbHx8KHIubG9jYWw9ZSl9dmFyIGQ9e3hkbV9jOnIuY2hhbm5lbCx4ZG1fcDowfTtyLmxvY2FsPT09ZT8oci51c2VQb2xsaW5nPSEwLHIudXNlUGFyZW50PSEwLHIubG9jYWw9bi5wcm90b2NvbCtcIi8vXCIrbi5ob3N0K24ucGF0aG5hbWUrbi5zZWFyY2gsZC54ZG1fZT1yLmxvY2FsLGQueGRtX3BhPTEpOmQueGRtX2U9UChyLmxvY2FsKSxyLmNvbnRhaW5lciYmKHIudXNlUmVzaXplPSExLGQueGRtX3BvPTEpLHIucmVtb3RlPUYoci5yZW1vdGUsZCl9ZWxzZSBMKHIse3VzZVBhcmVudDohRShCLnhkbV9wYSksdXNlUG9sbGluZzohRShCLnhkbV9wbyksdXNlUmVzaXplOiFyLnVzZVBhcmVudCYmci51c2VSZXNpemV9KTtvPVtuZXcgeS5zdGFjay5IYXNoVHJhbnNwb3J0KHIpLG5ldyB5LnN0YWNrLlJlbGlhYmxlQmVoYXZpb3Ioe30pLG5ldyB5LnN0YWNrLlF1ZXVlQmVoYXZpb3Ioe2VuY29kZTohMCxtYXhMZW5ndGg6NGUzLXIucmVtb3RlLmxlbmd0aH0pLG5ldyB5LnN0YWNrLlZlcmlmeUJlaGF2aW9yKHtpbml0aWF0ZTpyLmlzSG9zdH0pXTticmVhaztjYXNlXCIxXCI6bz1bbmV3IHkuc3RhY2suUG9zdE1lc3NhZ2VUcmFuc3BvcnQocildO2JyZWFrO2Nhc2VcIjJcIjpyLmlzSG9zdCYmKHIucmVtb3RlSGVscGVyPVAoci5yZW1vdGVIZWxwZXIpKSxvPVtuZXcgeS5zdGFjay5OYW1lVHJhbnNwb3J0KHIpLG5ldyB5LnN0YWNrLlF1ZXVlQmVoYXZpb3IsbmV3IHkuc3RhY2suVmVyaWZ5QmVoYXZpb3Ioe2luaXRpYXRlOnIuaXNIb3N0fSldO2JyZWFrO2Nhc2VcIjNcIjpvPVtuZXcgeS5zdGFjay5OaXhUcmFuc3BvcnQocildO2JyZWFrO2Nhc2VcIjRcIjpvPVtuZXcgeS5zdGFjay5TYW1lT3JpZ2luVHJhbnNwb3J0KHIpXTticmVhaztjYXNlXCI1XCI6bz1bbmV3IHkuc3RhY2suRnJhbWVFbGVtZW50VHJhbnNwb3J0KHIpXTticmVhaztjYXNlXCI2XCI6Y3x8UygpLG89W25ldyB5LnN0YWNrLkZsYXNoVHJhbnNwb3J0KHIpXX1yZXR1cm4gby5wdXNoKG5ldyB5LnN0YWNrLlF1ZXVlQmVoYXZpb3Ioe2xhenk6ci5sYXp5LHJlbW92ZTohMH0pKSxvfWZ1bmN0aW9uIHEoZSl7Zm9yKHZhciB0LG49e2luY29taW5nOmZ1bmN0aW9uKGUsdCl7dGhpcy51cC5pbmNvbWluZyhlLHQpfSxvdXRnb2luZzpmdW5jdGlvbihlLHQpe3RoaXMuZG93bi5vdXRnb2luZyhlLHQpfSxjYWxsYmFjazpmdW5jdGlvbihlKXt0aGlzLnVwLmNhbGxiYWNrKGUpfSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5kb3duLmluaXQoKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZG93bi5kZXN0cm95KCl9fSxyPTAsbz1lLmxlbmd0aDtyPG87cisrKUwodD1lW3JdLG4sITApLDAhPT1yJiYodC5kb3duPWVbci0xXSksciE9PW8tMSYmKHQudXA9ZVtyKzFdKTtyZXR1cm4gdH1MKHkse3ZlcnNpb246XCIyLjUuMDAuMVwiLHF1ZXJ5OkIsc3RhY2s6e30sYXBwbHk6TCxnZXRKU09OT2JqZWN0OlIsd2hlblJlYWR5OlQsbm9Db25mbGljdDpmdW5jdGlvbih0KXtyZXR1cm4gZS5lYXN5WERNPWIsKGc9dCkmJihfPVwiZWFzeVhETV9cIitnLnJlcGxhY2UoXCIuXCIsXCJfXCIpK1wiX1wiKSx5fX0pLHkuRG9tSGVscGVyPXtvbjp1LHVuOmwscmVxdWlyZXNKU09OOmZ1bmN0aW9uKG4peyhmdW5jdGlvbihlLHQpe3JldHVybiEoXCJvYmplY3RcIiE9a3QoZVt0XSl8fCFlW3RdKX0pKGUsXCJKU09OXCIpfHx0LndyaXRlKCc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCInK24rJ1wiPjxcXC9zY3JpcHQ+Jyl9fSxVPXt9LHkuRm49e3NldDpmdW5jdGlvbihlLHQpe1VbZV09dH0sZ2V0OmZ1bmN0aW9uKGUsdCl7aWYoVS5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIG49VVtlXTtyZXR1cm4gdCYmZGVsZXRlIFVbZV0sbn19fSx5LlNvY2tldD1mdW5jdGlvbihlKXt2YXIgdD1xKEQoZSkuY29uY2F0KFt7aW5jb21pbmc6ZnVuY3Rpb24odCxuKXtlLm9uTWVzc2FnZSh0LG4pfSxjYWxsYmFjazpmdW5jdGlvbih0KXtlLm9uUmVhZHkmJmUub25SZWFkeSh0KX19XSkpLG49SShlLnJlbW90ZSk7dGhpcy5vcmlnaW49SShlLnJlbW90ZSksdGhpcy5kZXN0cm95PWZ1bmN0aW9uKCl7dC5kZXN0cm95KCl9LHRoaXMucG9zdE1lc3NhZ2U9ZnVuY3Rpb24oZSl7dC5vdXRnb2luZyhlLG4pfSx0LmluaXQoKX0seS5ScGM9ZnVuY3Rpb24oZSx0KXtpZih0LmxvY2FsKWZvcih2YXIgbiBpbiB0LmxvY2FsKWlmKHQubG9jYWwuaGFzT3duUHJvcGVydHkobikpe3ZhciByPXQubG9jYWxbbl07XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHQubG9jYWxbbl09e21ldGhvZDpyfSl9dmFyIG89cShEKGUpLmNvbmNhdChbbmV3IHkuc3RhY2suUnBjQmVoYXZpb3IodGhpcyx0KSx7Y2FsbGJhY2s6ZnVuY3Rpb24odCl7ZS5vblJlYWR5JiZlLm9uUmVhZHkodCl9fV0pKTt0aGlzLm9yaWdpbj1JKGUucmVtb3RlKSx0aGlzLmNvbnRleHQ9ZS5jb250ZXh0fHxudWxsLHRoaXMuZGVzdHJveT1mdW5jdGlvbigpe28uZGVzdHJveSgpfSxvLmluaXQoKX0seS5zdGFjay5TYW1lT3JpZ2luVHJhbnNwb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG8saSxhO3JldHVybiB0PXtvdXRnb2luZzpmdW5jdGlvbihlLHQsbil7aShlKSxuJiZuKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtvJiYoby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLG89bnVsbCl9LG9uRE9NUmVhZHk6ZnVuY3Rpb24oKXthPUkoZS5yZW1vdGUpLGUuaXNIb3N0PyhMKGUucHJvcHMse3NyYzpGKGUucmVtb3RlLHt4ZG1fZTpuLnByb3RvY29sK1wiLy9cIituLmhvc3Qrbi5wYXRobmFtZSx4ZG1fYzplLmNoYW5uZWwseGRtX3A6NH0pLG5hbWU6XytlLmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLG89TShlKSx5LkZuLnNldChlLmNoYW5uZWwsKGZ1bmN0aW9uKGUpe3JldHVybiBpPWUscigoZnVuY3Rpb24oKXt0LnVwLmNhbGxiYWNrKCEwKX0pLDApLGZ1bmN0aW9uKGUpe3QudXAuaW5jb21pbmcoZSxhKX19KSkpOihpPWZ1bmN0aW9uKCl7dmFyIGU9cGFyZW50O2lmKFwiXCIhPT1nKWZvcih2YXIgdD0wLG49Zy5zcGxpdChcIi5cIik7dDxuLmxlbmd0aDt0KyspZT1lW25bdF1dO3JldHVybiBlLmVhc3lYRE19KCkuRm4uZ2V0KGUuY2hhbm5lbCwhMCkoKGZ1bmN0aW9uKGUpe3QudXAuaW5jb21pbmcoZSxhKX0pKSxyKChmdW5jdGlvbigpe3QudXAuY2FsbGJhY2soITApfSksMCkpfSxpbml0OmZ1bmN0aW9uKCl7VCh0Lm9uRE9NUmVhZHksdCl9fX0seS5zdGFjay5GbGFzaFRyYW5zcG9ydD1mdW5jdGlvbihlKXt2YXIgbyxhLGMsdSxsO2Z1bmN0aW9uIHAoZSx0KXtyKChmdW5jdGlvbigpe28udXAuaW5jb21pbmcoZSxjKX0pLDApfWZ1bmN0aW9uIGYobil7dmFyIHI9ZS5zd2YrXCI/aG9zdD1cIitlLmlzSG9zdCxvPVwiZWFzeVhETV9zd2ZfXCIrTWF0aC5mbG9vcigxZTQqTWF0aC5yYW5kb20oKSk7eS5Gbi5zZXQoXCJmbGFzaF9sb2FkZWRcIituLnJlcGxhY2UoL1tcXC0uXS9nLFwiX1wiKSwoZnVuY3Rpb24oKXt5LnN0YWNrLkZsYXNoVHJhbnNwb3J0W25dLnN3Zj11PWwuZmlyc3RDaGlsZDtmb3IodmFyIGU9eS5zdGFjay5GbGFzaFRyYW5zcG9ydFtuXS5xdWV1ZSx0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSgpO2UubGVuZ3RoPTB9KSksZS5zd2ZDb250YWluZXI/bD1cInN0cmluZ1wiPT10eXBlb2YgZS5zd2ZDb250YWluZXI/dC5nZXRFbGVtZW50QnlJZChlLnN3ZkNvbnRhaW5lcik6ZS5zd2ZDb250YWluZXI6KEwoKGw9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5zdHlsZSxzJiZlLnN3Zk5vVGhyb3R0bGU/e2hlaWdodDpcIjIwcHhcIix3aWR0aDpcIjIwcHhcIixwb3NpdGlvbjpcImZpeGVkXCIscmlnaHQ6MCx0b3A6MH06e2hlaWdodDpcIjFweFwiLHdpZHRoOlwiMXB4XCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLG92ZXJmbG93OlwiaGlkZGVuXCIscmlnaHQ6MCx0b3A6MH0pLHQuYm9keS5hcHBlbmRDaGlsZChsKSk7dmFyIGE9XCJjYWxsYmFjaz1mbGFzaF9sb2FkZWRcIitpKG4ucmVwbGFjZSgvW1xcLS5dL2csXCJfXCIpKStcIiZwcm90bz1cIitkLmxvY2F0aW9uLnByb3RvY29sK1wiJmRvbWFpbj1cIitpKEMoZC5sb2NhdGlvbi5ocmVmKSkrXCImcG9ydD1cIitpKGZ1bmN0aW9uKGUpe3JldHVybiBlLm1hdGNoKGgpWzRdfHxcIlwifShkLmxvY2F0aW9uLmhyZWYpKStcIiZucz1cIitpKGcpO2wuaW5uZXJIVE1MPVwiPG9iamVjdCBoZWlnaHQ9JzIwJyB3aWR0aD0nMjAnIHR5cGU9J2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyBpZD0nXCIrbytcIicgZGF0YT0nXCIrcitcIic+PHBhcmFtIG5hbWU9J2FsbG93U2NyaXB0QWNjZXNzJyB2YWx1ZT0nYWx3YXlzJz48L3BhcmFtPjxwYXJhbSBuYW1lPSd3bW9kZScgdmFsdWU9J3RyYW5zcGFyZW50Jz48cGFyYW0gbmFtZT0nbW92aWUnIHZhbHVlPSdcIityK1wiJz48L3BhcmFtPjxwYXJhbSBuYW1lPSdmbGFzaHZhcnMnIHZhbHVlPSdcIithK1wiJz48L3BhcmFtPjxlbWJlZCB0eXBlPSdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcgRmxhc2hWYXJzPSdcIithK1wiJyBhbGxvd1NjcmlwdEFjY2Vzcz0nYWx3YXlzJyB3bW9kZT0ndHJhbnNwYXJlbnQnIHNyYz0nXCIrcitcIicgaGVpZ2h0PScxJyB3aWR0aD0nMSc+PC9lbWJlZD48L29iamVjdD5cIn1yZXR1cm4gbz17b3V0Z29pbmc6ZnVuY3Rpb24odCxuLHIpe3UucG9zdE1lc3NhZ2UoZS5jaGFubmVsLHQudG9TdHJpbmcoKSksciYmcigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dHJ5e3UuZGVzdHJveUNoYW5uZWwoZS5jaGFubmVsKX1jYXRjaChlKXt9dT1udWxsLGEmJihhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksYT1udWxsKX0sb25ET01SZWFkeTpmdW5jdGlvbigpe2M9ZS5yZW1vdGUseS5Gbi5zZXQoXCJmbGFzaF9cIitlLmNoYW5uZWwrXCJfaW5pdFwiLChmdW5jdGlvbigpe3IoKGZ1bmN0aW9uKCl7by51cC5jYWxsYmFjayghMCl9KSl9KSkseS5Gbi5zZXQoXCJmbGFzaF9cIitlLmNoYW5uZWwrXCJfb25NZXNzYWdlXCIscCksZS5zd2Y9UChlLnN3Zik7dmFyIHQ9QyhlLnN3ZiksaT1mdW5jdGlvbigpe3kuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF0uaW5pdD0hMCwodT15LnN0YWNrLkZsYXNoVHJhbnNwb3J0W3RdLnN3ZikuY3JlYXRlQ2hhbm5lbChlLmNoYW5uZWwsZS5zZWNyZXQsSShlLnJlbW90ZSksZS5pc0hvc3QpLGUuaXNIb3N0JiYocyYmZS5zd2ZOb1Rocm90dGxlJiZMKGUucHJvcHMse3Bvc2l0aW9uOlwiZml4ZWRcIixyaWdodDowLHRvcDowLGhlaWdodDpcIjIwcHhcIix3aWR0aDpcIjIwcHhcIn0pLEwoZS5wcm9wcyx7c3JjOkYoZS5yZW1vdGUse3hkbV9lOkkobi5ocmVmKSx4ZG1fYzplLmNoYW5uZWwseGRtX3A6Nix4ZG1fczplLnNlY3JldH0pLG5hbWU6XytlLmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLGE9TShlKSl9O3kuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF0mJnkuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF0uaW5pdD9pKCk6eS5zdGFjay5GbGFzaFRyYW5zcG9ydFt0XT95LnN0YWNrLkZsYXNoVHJhbnNwb3J0W3RdLnF1ZXVlLnB1c2goaSk6KHkuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF09e3F1ZXVlOltpXX0sZih0KSl9LGluaXQ6ZnVuY3Rpb24oKXtUKG8ub25ET01SZWFkeSxvKX19fSx5LnN0YWNrLlBvc3RNZXNzYWdlVHJhbnNwb3J0PWZ1bmN0aW9uKHQpe3ZhciBvLGksYSxjO2Z1bmN0aW9uIHMoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSl7dmFyIHI9ZnVuY3Rpb24oZSl7aWYoZS5vcmlnaW4pcmV0dXJuIEkoZS5vcmlnaW4pO2lmKGUudXJpKXJldHVybiBJKGUudXJpKTtpZihlLmRvbWFpbilyZXR1cm4gbi5wcm90b2NvbCtcIi8vXCIrZS5kb21haW47dGhyb3dcIlVuYWJsZSB0byByZXRyaWV2ZSB0aGUgb3JpZ2luIG9mIHRoZSBldmVudFwifShlKTtyPT1jJiZcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiZlLmRhdGEuc3Vic3RyaW5nKDAsdC5jaGFubmVsLmxlbmd0aCsxKT09dC5jaGFubmVsK1wiIFwiJiZvLnVwLmluY29taW5nKGUuZGF0YS5zdWJzdHJpbmcodC5jaGFubmVsLmxlbmd0aCsxKSxyKX19ZnVuY3Rpb24gZChuKXtuLmRhdGE9PXQuY2hhbm5lbCtcIi1yZWFkeVwiJiYoYT1cInBvc3RNZXNzYWdlXCJpbiBpLmNvbnRlbnRXaW5kb3c/aS5jb250ZW50V2luZG93OmkuY29udGVudFdpbmRvdy5kb2N1bWVudCxsKGUsXCJtZXNzYWdlXCIsZCksdShlLFwibWVzc2FnZVwiLHMpLHIoKGZ1bmN0aW9uKCl7by51cC5jYWxsYmFjayghMCl9KSwwKSl9cmV0dXJuIG89e291dGdvaW5nOmZ1bmN0aW9uKGUsbixyKXthLnBvc3RNZXNzYWdlKHQuY2hhbm5lbCtcIiBcIitlLG58fGMpLHImJnIoKX0sZGVzdHJveTpmdW5jdGlvbigpe2woZSxcIm1lc3NhZ2VcIixkKSxsKGUsXCJtZXNzYWdlXCIscyksaSYmKGE9bnVsbCxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksaT1udWxsKX0sb25ET01SZWFkeTpmdW5jdGlvbigpe1wiZmlsZTovL1wiPT09KGM9SSh0LnJlbW90ZSkpJiYoYz1cIipcIiksdC5pc0hvc3Q/KHUoZSxcIm1lc3NhZ2VcIixkKSxMKHQucHJvcHMse3NyYzpGKHQucmVtb3RlLHt4ZG1fZTpJKG4uaHJlZikseGRtX2M6dC5jaGFubmVsLHhkbV9wOjF9KSxuYW1lOl8rdC5jaGFubmVsK1wiX3Byb3ZpZGVyXCJ9KSxpPU0odCkpOih1KGUsXCJtZXNzYWdlXCIscyksKGE9XCJwb3N0TWVzc2FnZVwiaW4gZS5wYXJlbnQ/ZS5wYXJlbnQ6ZS5wYXJlbnQuZG9jdW1lbnQpLnBvc3RNZXNzYWdlKHQuY2hhbm5lbCtcIi1yZWFkeVwiLGMpLHIoKGZ1bmN0aW9uKCl7by51cC5jYWxsYmFjayghMCl9KSwwKSl9LGluaXQ6ZnVuY3Rpb24oKXtUKG8ub25ET01SZWFkeSxvKX19fSx5LnN0YWNrLkZyYW1lRWxlbWVudFRyYW5zcG9ydD1mdW5jdGlvbihvKXt2YXIgaSxhLGMscztyZXR1cm4gaT17b3V0Z29pbmc6ZnVuY3Rpb24oZSx0LG4pe2MuY2FsbCh0aGlzLGUpLG4mJm4oKX0sZGVzdHJveTpmdW5jdGlvbigpe2EmJihhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksYT1udWxsKX0sb25ET01SZWFkeTpmdW5jdGlvbigpe3M9SShvLnJlbW90ZSksby5pc0hvc3Q/KEwoby5wcm9wcyx7c3JjOkYoby5yZW1vdGUse3hkbV9lOkkobi5ocmVmKSx4ZG1fYzpvLmNoYW5uZWwseGRtX3A6NX0pLG5hbWU6XytvLmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLChhPU0obykpLmZuPWZ1bmN0aW9uKGUpe3JldHVybiBkZWxldGUgYS5mbixjPWUscigoZnVuY3Rpb24oKXtpLnVwLmNhbGxiYWNrKCEwKX0pLDApLGZ1bmN0aW9uKGUpe2kudXAuaW5jb21pbmcoZSxzKX19KToodC5yZWZlcnJlciYmSSh0LnJlZmVycmVyKSE9Qi54ZG1fZSYmKGUudG9wLmxvY2F0aW9uPUIueGRtX2UpLGM9ZS5mcmFtZUVsZW1lbnQuZm4oKGZ1bmN0aW9uKGUpe2kudXAuaW5jb21pbmcoZSxzKX0pKSxpLnVwLmNhbGxiYWNrKCEwKSl9LGluaXQ6ZnVuY3Rpb24oKXtUKGkub25ET01SZWFkeSxpKX19fSx5LnN0YWNrLk5hbWVUcmFuc3BvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixvLGksYSxjLHMsdTtmdW5jdGlvbiBkKHQpe3ZhciByPWUucmVtb3RlSGVscGVyKyhuP1wiI18zXCI6XCIjXzJcIikrZS5jaGFubmVsO28uY29udGVudFdpbmRvdy5zZW5kTWVzc2FnZSh0LHIpfWZ1bmN0aW9uIHAoKXtuPzIhPSsrYSYmbnx8dC51cC5jYWxsYmFjayghMCk6KGQoXCJyZWFkeVwiKSx0LnVwLmNhbGxiYWNrKCEwKSl9ZnVuY3Rpb24gZihlKXt0LnVwLmluY29taW5nKGUscyl9ZnVuY3Rpb24gaCgpe2MmJnIoKGZ1bmN0aW9uKCl7YyghMCl9KSwwKX1yZXR1cm4gdD17b3V0Z29pbmc6ZnVuY3Rpb24oZSx0LG4pe2M9bixkKGUpfSxkZXN0cm95OmZ1bmN0aW9uKCl7by5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLG89bnVsbCxuJiYoaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpLGk9bnVsbCl9LG9uRE9NUmVhZHk6ZnVuY3Rpb24oKXtuPWUuaXNIb3N0LGE9MCxzPUkoZS5yZW1vdGUpLGUubG9jYWw9UChlLmxvY2FsKSxuPyh5LkZuLnNldChlLmNoYW5uZWwsKGZ1bmN0aW9uKHQpe24mJlwicmVhZHlcIj09PXQmJih5LkZuLnNldChlLmNoYW5uZWwsZikscCgpKX0pKSx1PUYoZS5yZW1vdGUse3hkbV9lOmUubG9jYWwseGRtX2M6ZS5jaGFubmVsLHhkbV9wOjJ9KSxMKGUucHJvcHMse3NyYzp1K1wiI1wiK2UuY2hhbm5lbCxuYW1lOl8rZS5jaGFubmVsK1wiX3Byb3ZpZGVyXCJ9KSxpPU0oZSkpOihlLnJlbW90ZUhlbHBlcj1lLnJlbW90ZSx5LkZuLnNldChlLmNoYW5uZWwsZikpLG89TSh7cHJvcHM6e3NyYzplLmxvY2FsK1wiI180XCIrZS5jaGFubmVsfSxvbkxvYWQ6ZnVuY3Rpb24gdCgpe3ZhciBuPW98fHRoaXM7bChuLFwibG9hZFwiLHQpLHkuRm4uc2V0KGUuY2hhbm5lbCtcIl9sb2FkXCIsaCksZnVuY3Rpb24gZSgpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uY29udGVudFdpbmRvdy5zZW5kTWVzc2FnZT9wKCk6cihlLDUwKX0oKX19KX0saW5pdDpmdW5jdGlvbigpe1QodC5vbkRPTVJlYWR5LHQpfX19LHkuc3RhY2suSGFzaFRyYW5zcG9ydD1mdW5jdGlvbih0KXt2YXIgbixvLGksYSxjLHMsdSxsLGQscDtmdW5jdGlvbiBmKCl7aWYodSl7dmFyIGU9dS5sb2NhdGlvbi5ocmVmLHQ9XCJcIixyPWUuaW5kZXhPZihcIiNcIik7LTEhPXImJih0PWUuc3Vic3RyaW5nKHIpKSx0JiZ0IT1jJiZmdW5jdGlvbihlKXtjPWUsbi51cC5pbmNvbWluZyhjLnN1YnN0cmluZyhjLmluZGV4T2YoXCJfXCIpKzEpLHApfSh0KX19ZnVuY3Rpb24gaCgpe2k9c2V0SW50ZXJ2YWwoZixhKX1yZXR1cm4gbj17b3V0Z29pbmc6ZnVuY3Rpb24oZSxuKXshZnVuY3Rpb24oZSl7aWYobCl7dmFyIG49dC5yZW1vdGUrXCIjXCIrcysrK1wiX1wiK2U7KG98fCFkP2wuY29udGVudFdpbmRvdzpsKS5sb2NhdGlvbj1ufX0oZSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtlLmNsZWFySW50ZXJ2YWwoaSksIW8mJmR8fGwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKSxsPW51bGx9LG9uRE9NUmVhZHk6ZnVuY3Rpb24oKXtpZihvPXQuaXNIb3N0LGE9dC5pbnRlcnZhbCxjPVwiI1wiK3QuY2hhbm5lbCxzPTAsZD10LnVzZVBhcmVudCxwPUkodC5yZW1vdGUpLG8pe2lmKEwodC5wcm9wcyx7c3JjOnQucmVtb3RlLG5hbWU6Xyt0LmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLGQpdC5vbkxvYWQ9ZnVuY3Rpb24oKXt1PWUsaCgpLG4udXAuY2FsbGJhY2soITApfTtlbHNle3ZhciBpPTAsZj10LmRlbGF5LzUwOyFmdW5jdGlvbiBlKCl7aWYoKytpPmYpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlZmVyZW5jZSBsaXN0ZW5lcndpbmRvd1wiKTt0cnl7dT1sLmNvbnRlbnRXaW5kb3cuZnJhbWVzW18rdC5jaGFubmVsK1wiX2NvbnN1bWVyXCJdfWNhdGNoKGUpe311PyhoKCksbi51cC5jYWxsYmFjayghMCkpOnIoZSw1MCl9KCl9bD1NKHQpfWVsc2UgdT1lLGgoKSxkPyhsPXBhcmVudCxuLnVwLmNhbGxiYWNrKCEwKSk6KEwodCx7cHJvcHM6e3NyYzp0LnJlbW90ZStcIiNcIit0LmNoYW5uZWwrbmV3IERhdGUsbmFtZTpfK3QuY2hhbm5lbCtcIl9jb25zdW1lclwifSxvbkxvYWQ6ZnVuY3Rpb24oKXtuLnVwLmNhbGxiYWNrKCEwKX19KSxsPU0odCkpfSxpbml0OmZ1bmN0aW9uKCl7VChuLm9uRE9NUmVhZHksbil9fX0seS5zdGFjay5SZWxpYWJsZUJlaGF2aW9yPWZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wLG89MCxpPVwiXCI7cmV0dXJuIHQ9e2luY29taW5nOmZ1bmN0aW9uKGUsYSl7dmFyIGM9ZS5pbmRleE9mKFwiX1wiKSxzPWUuc3Vic3RyaW5nKDAsYykuc3BsaXQoXCIsXCIpO2U9ZS5zdWJzdHJpbmcoYysxKSxzWzBdPT1yJiYoaT1cIlwiLG4mJm4oITApKSxlLmxlbmd0aD4wJiYodC5kb3duLm91dGdvaW5nKHNbMV0rXCIsXCIrcitcIl9cIitpLGEpLG8hPXNbMV0mJihvPXNbMV0sdC51cC5pbmNvbWluZyhlLGEpKSl9LG91dGdvaW5nOmZ1bmN0aW9uKGUsYSxjKXtpPWUsbj1jLHQuZG93bi5vdXRnb2luZyhvK1wiLFwiKyArK3IrXCJfXCIrZSxhKX19fSx5LnN0YWNrLlF1ZXVlQmVoYXZpb3I9ZnVuY3Rpb24oZSl7dmFyIHQsbixhPVtdLGM9ITAscz1cIlwiLHU9MCxsPSExLGQ9ITE7ZnVuY3Rpb24gcCgpe2lmKGUucmVtb3ZlJiYwPT09YS5sZW5ndGgpIWZ1bmN0aW9uKGUpe2UudXAuZG93bj1lLmRvd24sZS5kb3duLnVwPWUudXAsZS51cD1lLmRvd249bnVsbH0odCk7ZWxzZSBpZighYyYmMCE9PWEubGVuZ3RoJiYhbil7Yz0hMDt2YXIgbz1hLnNoaWZ0KCk7dC5kb3duLm91dGdvaW5nKG8uZGF0YSxvLm9yaWdpbiwoZnVuY3Rpb24oZSl7Yz0hMSxvLmNhbGxiYWNrJiZyKChmdW5jdGlvbigpe28uY2FsbGJhY2soZSl9KSwwKSxwKCl9KSl9fXJldHVybiB0PXtpbml0OmZ1bmN0aW9uKCl7RShlKSYmKGU9e30pLGUubWF4TGVuZ3RoJiYodT1lLm1heExlbmd0aCxkPSEwKSxlLmxhenk/bD0hMDp0LmRvd24uaW5pdCgpfSxjYWxsYmFjazpmdW5jdGlvbihlKXtjPSExO3ZhciBuPXQudXA7cCgpLG4uY2FsbGJhY2soZSl9LGluY29taW5nOmZ1bmN0aW9uKG4scil7aWYoZCl7dmFyIGk9bi5pbmRleE9mKFwiX1wiKSxhPXBhcnNlSW50KG4uc3Vic3RyaW5nKDAsaSksMTApO3MrPW4uc3Vic3RyaW5nKGkrMSksMD09PWEmJihlLmVuY29kZSYmKHM9byhzKSksdC51cC5pbmNvbWluZyhzLHIpLHM9XCJcIil9ZWxzZSB0LnVwLmluY29taW5nKG4scil9LG91dGdvaW5nOmZ1bmN0aW9uKG4scixvKXtlLmVuY29kZSYmKG49aShuKSk7dmFyIGMscz1bXTtpZihkKXtmb3IoOzAhPT1uLmxlbmd0aDspYz1uLnN1YnN0cmluZygwLHUpLG49bi5zdWJzdHJpbmcoYy5sZW5ndGgpLHMucHVzaChjKTtmb3IoO2M9cy5zaGlmdCgpOylhLnB1c2goe2RhdGE6cy5sZW5ndGgrXCJfXCIrYyxvcmlnaW46cixjYWxsYmFjazowPT09cy5sZW5ndGg/bzpudWxsfSl9ZWxzZSBhLnB1c2goe2RhdGE6bixvcmlnaW46cixjYWxsYmFjazpvfSk7bD90LmRvd24uaW5pdCgpOnAoKX0sZGVzdHJveTpmdW5jdGlvbigpe249ITAsdC5kb3duLmRlc3Ryb3koKX19fSx5LnN0YWNrLlZlcmlmeUJlaGF2aW9yPWZ1bmN0aW9uKGUpe3ZhciB0LG4scjtmdW5jdGlvbiBvKCl7bj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMiksdC5kb3duLm91dGdvaW5nKG4pfXJldHVybiB0PXtpbmNvbWluZzpmdW5jdGlvbihpLGEpe3ZhciBjPWkuaW5kZXhPZihcIl9cIik7LTE9PT1jP2k9PT1uP3QudXAuY2FsbGJhY2soITApOnJ8fChyPWksZS5pbml0aWF0ZXx8bygpLHQuZG93bi5vdXRnb2luZyhpKSk6aS5zdWJzdHJpbmcoMCxjKT09PXImJnQudXAuaW5jb21pbmcoaS5zdWJzdHJpbmcoYysxKSxhKX0sb3V0Z29pbmc6ZnVuY3Rpb24oZSxyLG8pe3QuZG93bi5vdXRnb2luZyhuK1wiX1wiK2UscixvKX0sY2FsbGJhY2s6ZnVuY3Rpb24odCl7ZS5pbml0aWF0ZSYmbygpfX19LHkuc3RhY2suUnBjQmVoYXZpb3I9ZnVuY3Rpb24oZSx0KXt2YXIgbixyPXQuc2VyaWFsaXplcnx8UigpLG89MCxpPXt9O2Z1bmN0aW9uIGEoZSl7ZS5qc29ucnBjPVwiMi4wXCIsbi5kb3duLm91dGdvaW5nKHIuc3RyaW5naWZ5KGUpKX1mdW5jdGlvbiBjKGUsdCl7dmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlO3JldHVybiBmdW5jdGlvbigpe3ZhciByLGM9YXJndW1lbnRzLmxlbmd0aCxzPXttZXRob2Q6dH07Yz4wJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhcmd1bWVudHNbYy0xXT8oYz4xJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhcmd1bWVudHNbYy0yXT8ocj17c3VjY2Vzczphcmd1bWVudHNbYy0yXSxlcnJvcjphcmd1bWVudHNbYy0xXX0scy5wYXJhbXM9bi5jYWxsKGFyZ3VtZW50cywwLGMtMikpOihyPXtzdWNjZXNzOmFyZ3VtZW50c1tjLTFdfSxzLnBhcmFtcz1uLmNhbGwoYXJndW1lbnRzLDAsYy0xKSksaVtcIlwiKyArK29dPXIscy5pZD1vKTpzLnBhcmFtcz1uLmNhbGwoYXJndW1lbnRzLDApLGUubmFtZWRQYXJhbXMmJjE9PT1zLnBhcmFtcy5sZW5ndGgmJihzLnBhcmFtcz1zLnBhcmFtc1swXSksYShzKX19ZnVuY3Rpb24gcyh0LG4scixvKXtpZihyKXt2YXIgaSxjO24/KGk9ZnVuY3Rpb24oZSl7aT1mLGEoe2lkOm4scmVzdWx0OmV9KX0sYz1mdW5jdGlvbihlLHQpe2M9Zjt2YXIgcj17aWQ6bixlcnJvcjp7Y29kZTotMzIwOTksbWVzc2FnZTplfX07dCYmKHIuZXJyb3IuZGF0YT10KSxhKHIpfSk6aT1jPWYsZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfShvKXx8KG89W29dKTt0cnl7dmFyIHM9ZS5jb250ZXh0fHxyLnNjb3BlLHU9ci5tZXRob2QuYXBwbHkocyxvLmNvbmNhdChbaSxjXSkpO0UodSl8fGkodSl9Y2F0Y2goZSl7YyhlLm1lc3NhZ2UpfX1lbHNlIG4mJmEoe2lkOm4sZXJyb3I6e2NvZGU6LTMyNjAxLG1lc3NhZ2U6XCJQcm9jZWR1cmUgbm90IGZvdW5kLlwifX0pfXJldHVybiBuPXtpbmNvbWluZzpmdW5jdGlvbihlLG4pe3ZhciBvPXIucGFyc2UoZSk7aWYoby5tZXRob2QpdC5oYW5kbGU/dC5oYW5kbGUobyxhKTpzKG8ubWV0aG9kLG8uaWQsdC5sb2NhbFtvLm1ldGhvZF0sby5wYXJhbXMpO2Vsc2V7dmFyIGM9aVtvLmlkXTtvLmVycm9yP2MuZXJyb3ImJmMuZXJyb3Ioby5lcnJvcik6Yy5zdWNjZXNzJiZjLnN1Y2Nlc3Moby5yZXN1bHQpLGRlbGV0ZSBpW28uaWRdfX0saW5pdDpmdW5jdGlvbigpe2lmKHQucmVtb3RlKWZvcih2YXIgciBpbiB0LnJlbW90ZSl0LnJlbW90ZS5oYXNPd25Qcm9wZXJ0eShyKSYmKGVbcl09Yyh0LnJlbW90ZVtyXSxyKSk7bi5kb3duLmluaXQoKX0sZGVzdHJveTpmdW5jdGlvbigpe2Zvcih2YXIgciBpbiB0LnJlbW90ZSl0LnJlbW90ZS5oYXNPd25Qcm9wZXJ0eShyKSYmZS5oYXNPd25Qcm9wZXJ0eShyKSYmZGVsZXRlIGVbcl07bi5kb3duLmRlc3Ryb3koKX19fSxkLmVhc3lYRE09eX0od2luZG93LGRvY3VtZW50LGxvY2F0aW9uLHdpbmRvdy5zZXRUaW1lb3V0LGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUklDb21wb25lbnQpLGVhc3lYRE0ubm9Db25mbGljdChcIktha2FvXCIpKSxIbj1LbixKbj1mdW5jdGlvbigpe3ZhciBlLHQsbj1ufHxmdW5jdGlvbihlLHQpe3ZhciBuPXt9LHI9bi5saWI9e30sbz1mdW5jdGlvbigpe30saT1yLkJhc2U9e2V4dGVuZDpmdW5jdGlvbihlKXtvLnByb3RvdHlwZT10aGlzO3ZhciB0PW5ldyBvO3JldHVybiBlJiZ0Lm1peEluKGUpLHQuaGFzT3duUHJvcGVydHkoXCJpbml0XCIpfHwodC5pbml0PWZ1bmN0aW9uKCl7dC4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSx0LmluaXQucHJvdG90eXBlPXQsdC4kc3VwZXI9dGhpcyx0fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dGVuZCgpO3JldHVybiBlLmluaXQuYXBwbHkoZSxhcmd1bWVudHMpLGV9LGluaXQ6ZnVuY3Rpb24oKXt9LG1peEluOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKWUuaGFzT3duUHJvcGVydHkodCkmJih0aGlzW3RdPWVbdF0pO2UuaGFzT3duUHJvcGVydHkoXCJ0b1N0cmluZ1wiKSYmKHRoaXMudG9TdHJpbmc9ZS50b1N0cmluZyl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpfX0sYT1yLldvcmRBcnJheT1pLmV4dGVuZCh7aW5pdDpmdW5jdGlvbihlLHQpe2U9dGhpcy53b3Jkcz1lfHxbXSx0aGlzLnNpZ0J5dGVzPW51bGwhPXQ/dDo0KmUubGVuZ3RofSx0b1N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4oZXx8cykuc3RyaW5naWZ5KHRoaXMpfSxjb25jYXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy53b3JkcyxuPWUud29yZHMscj10aGlzLnNpZ0J5dGVzO2lmKGU9ZS5zaWdCeXRlcyx0aGlzLmNsYW1wKCksciU0KWZvcih2YXIgbz0wO288ZTtvKyspdFtyK28+Pj4yXXw9KG5bbz4+PjJdPj4+MjQtbyU0KjgmMjU1KTw8MjQtKHIrbyklNCo4O2Vsc2UgaWYoNjU1MzU8bi5sZW5ndGgpZm9yKG89MDtvPGU7bys9NCl0W3Irbz4+PjJdPW5bbz4+PjJdO2Vsc2UgdC5wdXNoLmFwcGx5KHQsbik7cmV0dXJuIHRoaXMuc2lnQnl0ZXMrPWUsdGhpc30sY2xhbXA6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLndvcmRzLG49dGhpcy5zaWdCeXRlczt0W24+Pj4yXSY9NDI5NDk2NzI5NTw8MzItbiU0KjgsdC5sZW5ndGg9ZS5jZWlsKG4vNCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGU9aS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBlLndvcmRzPXRoaXMud29yZHMuc2xpY2UoMCksZX0scmFuZG9tOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1bXSxyPTA7cjx0O3IrPTQpbi5wdXNoKDQyOTQ5NjcyOTYqZS5yYW5kb20oKXwwKTtyZXR1cm4gbmV3IGEuaW5pdChuLHQpfX0pLGM9bi5lbmM9e30scz1jLkhleD17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PWUud29yZHM7ZT1lLnNpZ0J5dGVzO2Zvcih2YXIgbj1bXSxyPTA7cjxlO3IrKyl7dmFyIG89dFtyPj4+Ml0+Pj4yNC1yJTQqOCYyNTU7bi5wdXNoKChvPj4+NCkudG9TdHJpbmcoMTYpKSxuLnB1c2goKDE1Jm8pLnRvU3RyaW5nKDE2KSl9cmV0dXJuIG4uam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUubGVuZ3RoLG49W10scj0wO3I8dDtyKz0yKW5bcj4+PjNdfD1wYXJzZUludChlLnN1YnN0cihyLDIpLDE2KTw8MjQtciU4KjQ7cmV0dXJuIG5ldyBhLmluaXQobix0LzIpfX0sdT1jLkxhdGluMT17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PWUud29yZHM7ZT1lLnNpZ0J5dGVzO2Zvcih2YXIgbj1bXSxyPTA7cjxlO3IrKyluLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh0W3I+Pj4yXT4+PjI0LXIlNCo4JjI1NSkpO3JldHVybiBuLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmxlbmd0aCxuPVtdLHI9MDtyPHQ7cisrKW5bcj4+PjJdfD0oMjU1JmUuY2hhckNvZGVBdChyKSk8PDI0LXIlNCo4O3JldHVybiBuZXcgYS5pbml0KG4sdCl9fSxsPWMuVXRmOD17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh1LnN0cmluZ2lmeShlKSkpfWNhdGNoKGUpe3Rocm93IEVycm9yKFwiTWFsZm9ybWVkIFVURi04IGRhdGFcIil9fSxwYXJzZTpmdW5jdGlvbihlKXtyZXR1cm4gdS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZSkpKX19LGQ9ci5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtPWkuZXh0ZW5kKHtyZXNldDpmdW5jdGlvbigpe3RoaXMuX2RhdGE9bmV3IGEuaW5pdCx0aGlzLl9uRGF0YUJ5dGVzPTB9LF9hcHBlbmQ6ZnVuY3Rpb24oZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWwucGFyc2UoZSkpLHRoaXMuX2RhdGEuY29uY2F0KGUpLHRoaXMuX25EYXRhQnl0ZXMrPWUuc2lnQnl0ZXN9LF9wcm9jZXNzOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX2RhdGEscj1uLndvcmRzLG89bi5zaWdCeXRlcyxpPXRoaXMuYmxvY2tTaXplLGM9by8oNCppKTtpZih0PShjPXQ/ZS5jZWlsKGMpOmUubWF4KCgwfGMpLXRoaXMuX21pbkJ1ZmZlclNpemUsMCkpKmksbz1lLm1pbig0KnQsbyksdCl7Zm9yKHZhciBzPTA7czx0O3MrPWkpdGhpcy5fZG9Qcm9jZXNzQmxvY2socixzKTtzPXIuc3BsaWNlKDAsdCksbi5zaWdCeXRlcy09b31yZXR1cm4gbmV3IGEuaW5pdChzLG8pfSxjbG9uZTpmdW5jdGlvbigpe3ZhciBlPWkuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gZS5fZGF0YT10aGlzLl9kYXRhLmNsb25lKCksZX0sX21pbkJ1ZmZlclNpemU6MH0pO3IuSGFzaGVyPWQuZXh0ZW5kKHtjZmc6aS5leHRlbmQoKSxpbml0OmZ1bmN0aW9uKGUpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChlKSx0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7ZC5yZXNldC5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9hcHBlbmQoZSksdGhpcy5fcHJvY2VzcygpLHRoaXN9LGZpbmFsaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZ0aGlzLl9hcHBlbmQoZSksdGhpcy5fZG9GaW5hbGl6ZSgpfSxibG9ja1NpemU6MTYsX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtyZXR1cm4gbmV3IGUuaW5pdChuKS5maW5hbGl6ZSh0KX19LF9jcmVhdGVIbWFjSGVscGVyOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgcC5ITUFDLmluaXQoZSxuKS5maW5hbGl6ZSh0KX19fSk7dmFyIHA9bi5hbGdvPXt9O3JldHVybiBufShNYXRoKTtyZXR1cm4gdD0oZT1uKS5saWIuV29yZEFycmF5LGUuZW5jLkJhc2U2ND17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PWUud29yZHMsbj1lLnNpZ0J5dGVzLHI9dGhpcy5fbWFwO2UuY2xhbXAoKSxlPVtdO2Zvcih2YXIgbz0wO288bjtvKz0zKWZvcih2YXIgaT0odFtvPj4+Ml0+Pj4yNC1vJTQqOCYyNTUpPDwxNnwodFtvKzE+Pj4yXT4+PjI0LShvKzEpJTQqOCYyNTUpPDw4fHRbbysyPj4+Ml0+Pj4yNC0obysyKSU0KjgmMjU1LGE9MDs0PmEmJm8rLjc1KmE8bjthKyspZS5wdXNoKHIuY2hhckF0KGk+Pj42KigzLWEpJjYzKSk7aWYodD1yLmNoYXJBdCg2NCkpZm9yKDtlLmxlbmd0aCU0OyllLnB1c2godCk7cmV0dXJuIGUuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oZSl7dmFyIG49ZS5sZW5ndGgscj10aGlzLl9tYXA7KG89ci5jaGFyQXQoNjQpKSYmLTEhPShvPWUuaW5kZXhPZihvKSkmJihuPW8pO2Zvcih2YXIgbz1bXSxpPTAsYT0wO2E8bjthKyspaWYoYSU0KXt2YXIgYz1yLmluZGV4T2YoZS5jaGFyQXQoYS0xKSk8PGElNCoyLHM9ci5pbmRleE9mKGUuY2hhckF0KGEpKT4+PjYtYSU0KjI7b1tpPj4+Ml18PShjfHMpPDwyNC1pJTQqOCxpKyt9cmV0dXJuIHQuY3JlYXRlKG8saSl9LF9tYXA6XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwifSxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsdCxuLHIsbyxpLGEpe3JldHVybigoZT1lKyh0Jm58fnQmcikrbythKTw8aXxlPj4+MzItaSkrdH1mdW5jdGlvbiByKGUsdCxuLHIsbyxpLGEpe3JldHVybigoZT1lKyh0JnJ8biZ+cikrbythKTw8aXxlPj4+MzItaSkrdH1mdW5jdGlvbiBvKGUsdCxuLHIsbyxpLGEpe3JldHVybigoZT1lKyh0Xm5ecikrbythKTw8aXxlPj4+MzItaSkrdH1mdW5jdGlvbiBpKGUsdCxuLHIsbyxpLGEpe3JldHVybigoZT1lKyhuXih0fH5yKSkrbythKTw8aXxlPj4+MzItaSkrdH1mb3IodmFyIGE9bixjPSh1PWEubGliKS5Xb3JkQXJyYXkscz11Lkhhc2hlcix1PWEuYWxnbyxsPVtdLGQ9MDs2ND5kO2QrKylsW2RdPTQyOTQ5NjcyOTYqZS5hYnMoZS5zaW4oZCsxKSl8MDt1PXUuTUQ1PXMuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IGMuaW5pdChbMTczMjU4NDE5Myw0MDIzMjMzNDE3LDI1NjIzODMxMDIsMjcxNzMzODc4XSl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbihlLG4pe2Zvcih2YXIgYT0wOzE2PmE7YSsrKXt2YXIgYz1lW3M9bithXTtlW3NdPTE2NzExOTM1JihjPDw4fGM+Pj4yNCl8NDI3ODI1NTM2MCYoYzw8MjR8Yz4+PjgpfWE9dGhpcy5faGFzaC53b3Jkczt2YXIgcz1lW24rMF0sdT0oYz1lW24rMV0sZVtuKzJdKSxkPWVbbiszXSxwPWVbbis0XSxmPWVbbis1XSxoPWVbbis2XSxtPWVbbis3XSx2PWVbbis4XSxnPWVbbis5XSx5PWVbbisxMF0sYj1lW24rMTFdLF89ZVtuKzEyXSxrPWVbbisxM10sdz1lW24rMTRdLFM9ZVtuKzE1XSx4PXQoeD1hWzBdLEE9YVsxXSxqPWFbMl0sTz1hWzNdLHMsNyxsWzBdKSxPPXQoTyx4LEEsaixjLDEyLGxbMV0pLGo9dChqLE8seCxBLHUsMTcsbFsyXSksQT10KEEsaixPLHgsZCwyMixsWzNdKTt4PXQoeCxBLGosTyxwLDcsbFs0XSksTz10KE8seCxBLGosZiwxMixsWzVdKSxqPXQoaixPLHgsQSxoLDE3LGxbNl0pLEE9dChBLGosTyx4LG0sMjIsbFs3XSkseD10KHgsQSxqLE8sdiw3LGxbOF0pLE89dChPLHgsQSxqLGcsMTIsbFs5XSksaj10KGosTyx4LEEseSwxNyxsWzEwXSksQT10KEEsaixPLHgsYiwyMixsWzExXSkseD10KHgsQSxqLE8sXyw3LGxbMTJdKSxPPXQoTyx4LEEsaixrLDEyLGxbMTNdKSxqPXQoaixPLHgsQSx3LDE3LGxbMTRdKSx4PXIoeCxBPXQoQSxqLE8seCxTLDIyLGxbMTVdKSxqLE8sYyw1LGxbMTZdKSxPPXIoTyx4LEEsaixoLDksbFsxN10pLGo9cihqLE8seCxBLGIsMTQsbFsxOF0pLEE9cihBLGosTyx4LHMsMjAsbFsxOV0pLHg9cih4LEEsaixPLGYsNSxsWzIwXSksTz1yKE8seCxBLGoseSw5LGxbMjFdKSxqPXIoaixPLHgsQSxTLDE0LGxbMjJdKSxBPXIoQSxqLE8seCxwLDIwLGxbMjNdKSx4PXIoeCxBLGosTyxnLDUsbFsyNF0pLE89cihPLHgsQSxqLHcsOSxsWzI1XSksaj1yKGosTyx4LEEsZCwxNCxsWzI2XSksQT1yKEEsaixPLHgsdiwyMCxsWzI3XSkseD1yKHgsQSxqLE8sayw1LGxbMjhdKSxPPXIoTyx4LEEsaix1LDksbFsyOV0pLGo9cihqLE8seCxBLG0sMTQsbFszMF0pLHg9byh4LEE9cihBLGosTyx4LF8sMjAsbFszMV0pLGosTyxmLDQsbFszMl0pLE89byhPLHgsQSxqLHYsMTEsbFszM10pLGo9byhqLE8seCxBLGIsMTYsbFszNF0pLEE9byhBLGosTyx4LHcsMjMsbFszNV0pLHg9byh4LEEsaixPLGMsNCxsWzM2XSksTz1vKE8seCxBLGoscCwxMSxsWzM3XSksaj1vKGosTyx4LEEsbSwxNixsWzM4XSksQT1vKEEsaixPLHgseSwyMyxsWzM5XSkseD1vKHgsQSxqLE8sayw0LGxbNDBdKSxPPW8oTyx4LEEsaixzLDExLGxbNDFdKSxqPW8oaixPLHgsQSxkLDE2LGxbNDJdKSxBPW8oQSxqLE8seCxoLDIzLGxbNDNdKSx4PW8oeCxBLGosTyxnLDQsbFs0NF0pLE89byhPLHgsQSxqLF8sMTEsbFs0NV0pLGo9byhqLE8seCxBLFMsMTYsbFs0Nl0pLHg9aSh4LEE9byhBLGosTyx4LHUsMjMsbFs0N10pLGosTyxzLDYsbFs0OF0pLE89aShPLHgsQSxqLG0sMTAsbFs0OV0pLGo9aShqLE8seCxBLHcsMTUsbFs1MF0pLEE9aShBLGosTyx4LGYsMjEsbFs1MV0pLHg9aSh4LEEsaixPLF8sNixsWzUyXSksTz1pKE8seCxBLGosZCwxMCxsWzUzXSksaj1pKGosTyx4LEEseSwxNSxsWzU0XSksQT1pKEEsaixPLHgsYywyMSxsWzU1XSkseD1pKHgsQSxqLE8sdiw2LGxbNTZdKSxPPWkoTyx4LEEsaixTLDEwLGxbNTddKSxqPWkoaixPLHgsQSxoLDE1LGxbNThdKSxBPWkoQSxqLE8seCxrLDIxLGxbNTldKSx4PWkoeCxBLGosTyxwLDYsbFs2MF0pLE89aShPLHgsQSxqLGIsMTAsbFs2MV0pLGo9aShqLE8seCxBLHUsMTUsbFs2Ml0pLEE9aShBLGosTyx4LGcsMjEsbFs2M10pO2FbMF09YVswXSt4fDAsYVsxXT1hWzFdK0F8MCxhWzJdPWFbMl0ranwwLGFbM109YVszXStPfDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZGF0YSxuPXQud29yZHMscj04KnRoaXMuX25EYXRhQnl0ZXMsbz04KnQuc2lnQnl0ZXM7bltvPj4+NV18PTEyODw8MjQtbyUzMjt2YXIgaT1lLmZsb29yKHIvNDI5NDk2NzI5Nik7Zm9yKG5bMTUrKG8rNjQ+Pj45PDw0KV09MTY3MTE5MzUmKGk8PDh8aT4+PjI0KXw0Mjc4MjU1MzYwJihpPDwyNHxpPj4+OCksblsxNCsobys2ND4+Pjk8PDQpXT0xNjcxMTkzNSYocjw8OHxyPj4+MjQpfDQyNzgyNTUzNjAmKHI8PDI0fHI+Pj44KSx0LnNpZ0J5dGVzPTQqKG4ubGVuZ3RoKzEpLHRoaXMuX3Byb2Nlc3MoKSxuPSh0PXRoaXMuX2hhc2gpLndvcmRzLHI9MDs0PnI7cisrKW89bltyXSxuW3JdPTE2NzExOTM1JihvPDw4fG8+Pj4yNCl8NDI3ODI1NTM2MCYobzw8MjR8bz4+PjgpO3JldHVybiB0fSxjbG9uZTpmdW5jdGlvbigpe3ZhciBlPXMuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gZS5faGFzaD10aGlzLl9oYXNoLmNsb25lKCksZX19KSxhLk1ENT1zLl9jcmVhdGVIZWxwZXIodSksYS5IbWFjTUQ1PXMuX2NyZWF0ZUhtYWNIZWxwZXIodSl9KE1hdGgpLGZ1bmN0aW9uKCl7dmFyIGUsdD1uLHI9KGU9dC5saWIpLkJhc2Usbz1lLldvcmRBcnJheSxpPShlPXQuYWxnbykuRXZwS0RGPXIuZXh0ZW5kKHtjZmc6ci5leHRlbmQoe2tleVNpemU6NCxoYXNoZXI6ZS5NRDUsaXRlcmF0aW9uczoxfSksaW5pdDpmdW5jdGlvbihlKXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQoZSl9LGNvbXB1dGU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49KGM9dGhpcy5jZmcpLmhhc2hlci5jcmVhdGUoKSxyPW8uY3JlYXRlKCksaT1yLndvcmRzLGE9Yy5rZXlTaXplLGM9Yy5pdGVyYXRpb25zO2kubGVuZ3RoPGE7KXtzJiZuLnVwZGF0ZShzKTt2YXIgcz1uLnVwZGF0ZShlKS5maW5hbGl6ZSh0KTtuLnJlc2V0KCk7Zm9yKHZhciB1PTE7dTxjO3UrKylzPW4uZmluYWxpemUocyksbi5yZXNldCgpO3IuY29uY2F0KHMpfXJldHVybiByLnNpZ0J5dGVzPTQqYSxyfX0pO3QuRXZwS0RGPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaS5jcmVhdGUobikuY29tcHV0ZShlLHQpfX0oKSxuLmxpYi5DaXBoZXJ8fGZ1bmN0aW9uKGUpe3ZhciB0PShoPW4pLmxpYixyPXQuQmFzZSxvPXQuV29yZEFycmF5LGk9dC5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtLGE9aC5lbmMuQmFzZTY0LGM9aC5hbGdvLkV2cEtERixzPXQuQ2lwaGVyPWkuZXh0ZW5kKHtjZmc6ci5leHRlbmQoKSxjcmVhdGVFbmNyeXB0b3I6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jcmVhdGUodGhpcy5fRU5DX1hGT1JNX01PREUsZSx0KX0sY3JlYXRlRGVjcnlwdG9yOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0RFQ19YRk9STV9NT0RFLGUsdCl9LGluaXQ6ZnVuY3Rpb24oZSx0LG4pe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChuKSx0aGlzLl94Zm9ybU1vZGU9ZSx0aGlzLl9rZXk9dCx0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7aS5yZXNldC5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX0scHJvY2VzczpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fYXBwZW5kKGUpLHRoaXMuX3Byb2Nlc3MoKX0sZmluYWxpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJnRoaXMuX2FwcGVuZChlKSx0aGlzLl9kb0ZpbmFsaXplKCl9LGtleVNpemU6NCxpdlNpemU6NCxfRU5DX1hGT1JNX01PREU6MSxfREVDX1hGT1JNX01PREU6MixfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGUpe3JldHVybntlbmNyeXB0OmZ1bmN0aW9uKHQsbixyKXtyZXR1cm4oXCJzdHJpbmdcIj09dHlwZW9mIG4/bTpmKS5lbmNyeXB0KGUsdCxuLHIpfSxkZWNyeXB0OmZ1bmN0aW9uKHQsbixyKXtyZXR1cm4oXCJzdHJpbmdcIj09dHlwZW9mIG4/bTpmKS5kZWNyeXB0KGUsdCxuLHIpfX19fSk7dC5TdHJlYW1DaXBoZXI9cy5leHRlbmQoe19kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3Byb2Nlc3MoITApfSxibG9ja1NpemU6MX0pO3ZhciB1PWgubW9kZT17fSxsPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLl9pdjtyP3RoaXMuX2l2PXVuZGVmaW5lZDpyPXRoaXMuX3ByZXZCbG9jaztmb3IodmFyIG89MDtvPG47bysrKWVbdCtvXV49cltvXX0sZD0odC5CbG9ja0NpcGhlck1vZGU9ci5leHRlbmQoe2NyZWF0ZUVuY3J5cHRvcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLkVuY3J5cHRvci5jcmVhdGUoZSx0KX0sY3JlYXRlRGVjcnlwdG9yOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuRGVjcnlwdG9yLmNyZWF0ZShlLHQpfSxpbml0OmZ1bmN0aW9uKGUsdCl7dGhpcy5fY2lwaGVyPWUsdGhpcy5faXY9dH19KSkuZXh0ZW5kKCk7ZC5FbmNyeXB0b3I9ZC5leHRlbmQoe3Byb2Nlc3NCbG9jazpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuX2NpcGhlcixyPW4uYmxvY2tTaXplO2wuY2FsbCh0aGlzLGUsdCxyKSxuLmVuY3J5cHRCbG9jayhlLHQpLHRoaXMuX3ByZXZCbG9jaz1lLnNsaWNlKHQsdCtyKX19KSxkLkRlY3J5cHRvcj1kLmV4dGVuZCh7cHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5fY2lwaGVyLHI9bi5ibG9ja1NpemUsbz1lLnNsaWNlKHQsdCtyKTtuLmRlY3J5cHRCbG9jayhlLHQpLGwuY2FsbCh0aGlzLGUsdCxyKSx0aGlzLl9wcmV2QmxvY2s9b319KSx1PXUuQ0JDPWQsZD0oaC5wYWQ9e30pLlBrY3M3PXtwYWQ6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4scj0obj0obj00KnQpLWUuc2lnQnl0ZXMlbik8PDI0fG48PDE2fG48PDh8bixpPVtdLGE9MDthPG47YSs9NClpLnB1c2gocik7bj1vLmNyZWF0ZShpLG4pLGUuY29uY2F0KG4pfSx1bnBhZDpmdW5jdGlvbihlKXtlLnNpZ0J5dGVzLT0yNTUmZS53b3Jkc1tlLnNpZ0J5dGVzLTE+Pj4yXX19LHQuQmxvY2tDaXBoZXI9cy5leHRlbmQoe2NmZzpzLmNmZy5leHRlbmQoe21vZGU6dSxwYWRkaW5nOmR9KSxyZXNldDpmdW5jdGlvbigpe3MucmVzZXQuY2FsbCh0aGlzKTt2YXIgZT0odD10aGlzLmNmZykuaXYsdD10Lm1vZGU7aWYodGhpcy5feGZvcm1Nb2RlPT10aGlzLl9FTkNfWEZPUk1fTU9ERSl2YXIgbj10LmNyZWF0ZUVuY3J5cHRvcjtlbHNlIG49dC5jcmVhdGVEZWNyeXB0b3IsdGhpcy5fbWluQnVmZmVyU2l6ZT0xO3RoaXMuX21vZGU9bi5jYWxsKHQsdGhpcyxlJiZlLndvcmRzKX0sX2RvUHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKGUsdCl7dGhpcy5fbW9kZS5wcm9jZXNzQmxvY2soZSx0KX0sX2RvRmluYWxpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmNmZy5wYWRkaW5nO2lmKHRoaXMuX3hmb3JtTW9kZT09dGhpcy5fRU5DX1hGT1JNX01PREUpe2UucGFkKHRoaXMuX2RhdGEsdGhpcy5ibG9ja1NpemUpO3ZhciB0PXRoaXMuX3Byb2Nlc3MoITApfWVsc2UgdD10aGlzLl9wcm9jZXNzKCEwKSxlLnVucGFkKHQpO3JldHVybiB0fSxibG9ja1NpemU6NH0pO3ZhciBwPXQuQ2lwaGVyUGFyYW1zPXIuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKGUpe3RoaXMubWl4SW4oZSl9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybihlfHx0aGlzLmZvcm1hdHRlcikuc3RyaW5naWZ5KHRoaXMpfX0pLGY9KHU9KGguZm9ybWF0PXt9KS5PcGVuU1NMPXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jaXBoZXJ0ZXh0O3JldHVybigoZT1lLnNhbHQpP28uY3JlYXRlKFsxMzk4ODkzNjg0LDE3MDEwNzY4MzFdKS5jb25jYXQoZSkuY29uY2F0KHQpOnQpLnRvU3RyaW5nKGEpfSxwYXJzZTpmdW5jdGlvbihlKXt2YXIgdD0oZT1hLnBhcnNlKGUpKS53b3JkcztpZigxMzk4ODkzNjg0PT10WzBdJiYxNzAxMDc2ODMxPT10WzFdKXt2YXIgbj1vLmNyZWF0ZSh0LnNsaWNlKDIsNCkpO3Quc3BsaWNlKDAsNCksZS5zaWdCeXRlcy09MTZ9cmV0dXJuIHAuY3JlYXRlKHtjaXBoZXJ0ZXh0OmUsc2FsdDpufSl9fSx0LlNlcmlhbGl6YWJsZUNpcGhlcj1yLmV4dGVuZCh7Y2ZnOnIuZXh0ZW5kKHtmb3JtYXQ6dX0pLGVuY3J5cHQ6ZnVuY3Rpb24oZSx0LG4scil7cj10aGlzLmNmZy5leHRlbmQocik7dmFyIG89ZS5jcmVhdGVFbmNyeXB0b3IobixyKTtyZXR1cm4gdD1vLmZpbmFsaXplKHQpLG89by5jZmcscC5jcmVhdGUoe2NpcGhlcnRleHQ6dCxrZXk6bixpdjpvLml2LGFsZ29yaXRobTplLG1vZGU6by5tb2RlLHBhZGRpbmc6by5wYWRkaW5nLGJsb2NrU2l6ZTplLmJsb2NrU2l6ZSxmb3JtYXR0ZXI6ci5mb3JtYXR9KX0sZGVjcnlwdDpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gcj10aGlzLmNmZy5leHRlbmQociksdD10aGlzLl9wYXJzZSh0LHIuZm9ybWF0KSxlLmNyZWF0ZURlY3J5cHRvcihuLHIpLmZpbmFsaXplKHQuY2lwaGVydGV4dCl9LF9wYXJzZTpmdW5jdGlvbihlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3QucGFyc2UoZSx0aGlzKTplfX0pKSxoPShoLmtkZj17fSkuT3BlblNTTD17ZXhlY3V0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gcnx8KHI9by5yYW5kb20oOCkpLGU9Yy5jcmVhdGUoe2tleVNpemU6dCtufSkuY29tcHV0ZShlLHIpLG49by5jcmVhdGUoZS53b3Jkcy5zbGljZSh0KSw0Km4pLGUuc2lnQnl0ZXM9NCp0LHAuY3JlYXRlKHtrZXk6ZSxpdjpuLHNhbHQ6cn0pfX0sbT10LlBhc3N3b3JkQmFzZWRDaXBoZXI9Zi5leHRlbmQoe2NmZzpmLmNmZy5leHRlbmQoe2tkZjpofSksZW5jcnlwdDpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbj0ocj10aGlzLmNmZy5leHRlbmQocikpLmtkZi5leGVjdXRlKG4sZS5rZXlTaXplLGUuaXZTaXplKSxyLml2PW4uaXYsKGU9Zi5lbmNyeXB0LmNhbGwodGhpcyxlLHQsbi5rZXkscikpLm1peEluKG4pLGV9LGRlY3J5cHQ6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHI9dGhpcy5jZmcuZXh0ZW5kKHIpLHQ9dGhpcy5fcGFyc2UodCxyLmZvcm1hdCksbj1yLmtkZi5leGVjdXRlKG4sZS5rZXlTaXplLGUuaXZTaXplLHQuc2FsdCksci5pdj1uLml2LGYuZGVjcnlwdC5jYWxsKHRoaXMsZSx0LG4ua2V5LHIpfX0pfSgpLGZ1bmN0aW9uKCl7Zm9yKHZhciBlPW4sdD1lLmxpYi5CbG9ja0NpcGhlcixyPWUuYWxnbyxvPVtdLGk9W10sYT1bXSxjPVtdLHM9W10sdT1bXSxsPVtdLGQ9W10scD1bXSxmPVtdLGg9W10sbT0wOzI1Nj5tO20rKyloW21dPTEyOD5tP208PDE6bTw8MV4yODM7dmFyIHY9MCxnPTA7Zm9yKG09MDsyNTY+bTttKyspe3ZhciB5PSh5PWdeZzw8MV5nPDwyXmc8PDNeZzw8NCk+Pj44XjI1NSZ5Xjk5O29bdl09eSxpW3ldPXY7dmFyIGI9aFt2XSxfPWhbYl0saz1oW19dLHc9MjU3KmhbeV1eMTY4NDMwMDgqeTthW3ZdPXc8PDI0fHc+Pj44LGNbdl09dzw8MTZ8dz4+PjE2LHNbdl09dzw8OHx3Pj4+MjQsdVt2XT13LHc9MTY4NDMwMDkqa142NTUzNypfXjI1NypiXjE2ODQzMDA4KnYsbFt5XT13PDwyNHx3Pj4+OCxkW3ldPXc8PDE2fHc+Pj4xNixwW3ldPXc8PDh8dz4+PjI0LGZbeV09dyx2Pyh2PWJeaFtoW2hba15iXV1dLGdePWhbaFtnXV0pOnY9Zz0xfXZhciBTPVswLDEsMiw0LDgsMTYsMzIsNjQsMTI4LDI3LDU0XTtyPXIuQUVTPXQuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe2Zvcih2YXIgZT0obj10aGlzLl9rZXkpLndvcmRzLHQ9bi5zaWdCeXRlcy80LG49NCooKHRoaXMuX25Sb3VuZHM9dCs2KSsxKSxyPXRoaXMuX2tleVNjaGVkdWxlPVtdLGk9MDtpPG47aSsrKWlmKGk8dClyW2ldPWVbaV07ZWxzZXt2YXIgYT1yW2ktMV07aSV0PzY8dCYmND09aSV0JiYoYT1vW2E+Pj4yNF08PDI0fG9bYT4+PjE2JjI1NV08PDE2fG9bYT4+PjgmMjU1XTw8OHxvWzI1NSZhXSk6KGE9b1soYT1hPDw4fGE+Pj4yNCk+Pj4yNF08PDI0fG9bYT4+PjE2JjI1NV08PDE2fG9bYT4+PjgmMjU1XTw8OHxvWzI1NSZhXSxhXj1TW2kvdHwwXTw8MjQpLHJbaV09cltpLXRdXmF9Zm9yKGU9dGhpcy5faW52S2V5U2NoZWR1bGU9W10sdD0wO3Q8bjt0KyspaT1uLXQsYT10JTQ/cltpXTpyW2ktNF0sZVt0XT00PnR8fDQ+PWk/YTpsW29bYT4+PjI0XV1eZFtvW2E+Pj4xNiYyNTVdXV5wW29bYT4+PjgmMjU1XV1eZltvWzI1NSZhXV19LGVuY3J5cHRCbG9jazpmdW5jdGlvbihlLHQpe3RoaXMuX2RvQ3J5cHRCbG9jayhlLHQsdGhpcy5fa2V5U2NoZWR1bGUsYSxjLHMsdSxvKX0sZGVjcnlwdEJsb2NrOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZVt0KzFdO2VbdCsxXT1lW3QrM10sZVt0KzNdPW4sdGhpcy5fZG9DcnlwdEJsb2NrKGUsdCx0aGlzLl9pbnZLZXlTY2hlZHVsZSxsLGQscCxmLGkpLG49ZVt0KzFdLGVbdCsxXT1lW3QrM10sZVt0KzNdPW59LF9kb0NyeXB0QmxvY2s6ZnVuY3Rpb24oZSx0LG4scixvLGksYSxjKXtmb3IodmFyIHM9dGhpcy5fblJvdW5kcyx1PWVbdF1eblswXSxsPWVbdCsxXV5uWzFdLGQ9ZVt0KzJdXm5bMl0scD1lW3QrM11eblszXSxmPTQsaD0xO2g8cztoKyspe3ZhciBtPXJbdT4+PjI0XV5vW2w+Pj4xNiYyNTVdXmlbZD4+PjgmMjU1XV5hWzI1NSZwXV5uW2YrK10sdj1yW2w+Pj4yNF1eb1tkPj4+MTYmMjU1XV5pW3A+Pj44JjI1NV1eYVsyNTUmdV1ebltmKytdLGc9cltkPj4+MjRdXm9bcD4+PjE2JjI1NV1eaVt1Pj4+OCYyNTVdXmFbMjU1JmxdXm5bZisrXTtwPXJbcD4+PjI0XV5vW3U+Pj4xNiYyNTVdXmlbbD4+PjgmMjU1XV5hWzI1NSZkXV5uW2YrK10sdT1tLGw9dixkPWd9bT0oY1t1Pj4+MjRdPDwyNHxjW2w+Pj4xNiYyNTVdPDwxNnxjW2Q+Pj44JjI1NV08PDh8Y1syNTUmcF0pXm5bZisrXSx2PShjW2w+Pj4yNF08PDI0fGNbZD4+PjE2JjI1NV08PDE2fGNbcD4+PjgmMjU1XTw8OHxjWzI1NSZ1XSlebltmKytdLGc9KGNbZD4+PjI0XTw8MjR8Y1twPj4+MTYmMjU1XTw8MTZ8Y1t1Pj4+OCYyNTVdPDw4fGNbMjU1JmxdKV5uW2YrK10scD0oY1twPj4+MjRdPDwyNHxjW3U+Pj4xNiYyNTVdPDwxNnxjW2w+Pj44JjI1NV08PDh8Y1syNTUmZF0pXm5bZisrXSxlW3RdPW0sZVt0KzFdPXYsZVt0KzJdPWcsZVt0KzNdPXB9LGtleVNpemU6OH0pO2UuQUVTPXQuX2NyZWF0ZUhlbHBlcihyKX0oKSxufSgpLFduPUpuO2Z1bmN0aW9uIFhuKCl7cmV0dXJuIGVuKCl9dmFyICRuPW51bGw7ZnVuY3Rpb24gR24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09PSRuJiYoZT1lcigpLHQ9eXQuZ2V0SXRlbShlKSwkbj10PyhuPXQscj1YbigpLFduLkFFUy5kZWNyeXB0KG4scikudG9TdHJpbmcoV24uZW5jLlV0ZjgpKTpudWxsKSwkbn1mdW5jdGlvbiBWbihlKXt2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdOyRuPWUsbnVsbD09PWV8fCExPT09dD9RbihlcigpKTpZbihlcigpLGUpfWZ1bmN0aW9uIFluKGUsdCl7dmFyIG4scixvPShuPXQscj1YbigpLFduLkFFUy5lbmNyeXB0KG4scikudG9TdHJpbmcoKSk7eXQuc2V0SXRlbShlLG8pfWZ1bmN0aW9uIFFuKGUpe3l0LnJlbW92ZUl0ZW0oZSl9dmFyIFpuPXt9O2Z1bmN0aW9uIGVyKCl7dmFyIGU7cmV0dXJuIFpuLmFjY2Vzc1Rva2VuS2V5fHwoWm4uYWNjZXNzVG9rZW5LZXk9XCJrYWthb19cIisoZT1cImthdFwiK1huKCksV24uTUQ1KGUpLnRvU3RyaW5nKCkpKSxabi5hY2Nlc3NUb2tlbktleX12YXIgdHI9T2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsZ2V0QXBwS2V5OlhuLGdldEFjY2Vzc1Rva2VuOkduLHNldEFjY2Vzc1Rva2VuOlZuLGdldFJlZnJlc2hUb2tlbjpmdW5jdGlvbigpe3JldHVybiBjb25zb2xlLmVycm9yKFwidW5zdXBwb3J0ZWQgb3BlcmF0aW9uOiBBdXRoLmdldFJlZnJlc2hUb2tlbigpXCIpLFwiXCJ9LHNldFJlZnJlc2hUb2tlbjpmdW5jdGlvbihlKXtjb25zb2xlLmVycm9yKFwidW5zdXBwb3J0ZWQgb3BlcmF0aW9uOiBBdXRoLnNldFJlZnJlc2hUb2tlbigpXCIpfX0pO2Z1bmN0aW9uIG5yKCl7cmV0dXJuXCJCZWFyZXIgXCIuY29uY2F0KEduKCkpfWZ1bmN0aW9uIHJyKCl7cmV0dXJuXCJLYWthb0FLIFwiLmNvbmNhdChYbigpKX12YXIgb3I9e3Blcm1pc3Npb246dnQoW1wiQVwiLFwiRlwiLFwiTVwiXSksZW5hYmxlX3NoYXJlOlFlLGFuZHJvaWRfZXhlY19wYXJhbTpZZSxpb3NfZXhlY19wYXJhbTpZZSxhbmRyb2lkX21hcmtldF9wYXJhbTpZZSxpb3NfbWFya2V0X3BhcmFtOlllfSxpcj17c2VjdXJlX3Jlc291cmNlOlFlfTtmdW5jdGlvbiBhcihlKXshMT09PWUuc2VjdXJlX3Jlc291cmNlJiYoY29uc29sZSYmY29uc29sZS53YXJuKFwiS2FrYW9XYXJuaW5nOiBUaGUgc2VjdXJlX3Jlc291cmNlIHBhcmFtZXRlciBpcyBkZXByZWNhdGVkLlwiKSxlLnNlY3VyZV9yZXNvdXJjZT0hMCl9ZnVuY3Rpb24gY3IoZSl7aWYoIVllKGUpKXJldHVybiExO2lmKDA9PT1lLmxlbmd0aHx8ZS5sZW5ndGg+MjA0OCl0aHJvdyBuZXcgbm4oXCJjb250ZW50IGxlbmd0aCBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCAyMDQ4XCIpO3JldHVybiEwfWZ1bmN0aW9uIHNyKGUpe3JldHVybihlLmhlYWRlcl9pbWFnZV91cmx8fGUuaGVhZGVyX2ltYWdlX3dpZHRofHxlLmhlYWRlcl9pbWFnZV9oZWlnaHQpJiYoZGVsZXRlIGUuaGVhZGVyX2ltYWdlX3VybCxkZWxldGUgZS5oZWFkZXJfaW1hZ2Vfd2lkdGgsZGVsZXRlIGUuaGVhZGVyX2ltYWdlX2hlaWdodCxjb25zb2xlJiZjb25zb2xlLndhcm4oXCJLYWthb1dhcm5pbmc6IFRoZSBwYXJhbWV0ZXJzIChcIi5jb25jYXQoW1wiaGVhZGVyX2ltYWdlX3VybFwiLFwiaGVhZGVyX2ltYWdlX3dpZHRoXCIsXCJoZWFkZXJfaW1hZ2VfaGVpZ2h0XCJdLmpvaW4oXCIsIFwiKSxcIikgZm9yIGhlYWRlciBiYWNrZ3JvdW5kIGltYWdlIGFyZSBkZXByZWNhdGVkLlwiKSkpLCEwfXZhciB1cj17XCIvdjEvdXNlci9zaWdudXBcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e29wdGlvbmFsOntwcm9wZXJ0aWVzOnB9fX0sXCIvdjEvdXNlci91bmxpbmtcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e319LFwiL3YyL3VzZXIvbWVcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6X3Qoe3Byb3BlcnR5X2tleXM6Zn0saXIpfX0sXCIvdjEvdXNlci9sb2dvdXRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e319LFwiL3YxL3VzZXIvdXBkYXRlX3Byb2ZpbGVcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntwcm9wZXJ0aWVzOnB9fX0sXCIvdjEvdXNlci9hY2Nlc3NfdG9rZW5faW5mb1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOnt9fSxcIi92Mi91c2VyL3Njb3Blc1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDp7c2NvcGVzOmZ9fX0sXCIvdjIvdXNlci9yZXZva2Uvc2NvcGVzXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7c2NvcGVzOmZ9fX0sXCIvdjEvdXNlci9zZXJ2aWNlL3Rlcm1zXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOntleHRyYTpZZX19fSxcIi92MS91c2VyL3NoaXBwaW5nX2FkZHJlc3NcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6e2FkZHJlc3NfaWQ6ZXQsZnJvbV91cGRhdGVkX2F0OmV0LHBhZ2Vfc2l6ZTpldH19fSxcIi92MS9hcGkvdGFsay9wcm9maWxlXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOmlyLGFmdGVyOmFyfX0sXCIvdjEvYXBpL3RhbGsvZnJpZW5kc1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDpfdCh7b2Zmc2V0OmV0LGxpbWl0OmV0LG9yZGVyOlllLGZyaWVuZF9vcmRlcjpZZX0saXIpLGFmdGVyOmFyfX0sXCIvdjEvZnJpZW5kc1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDpfdCh7b2Zmc2V0OmV0LGxpbWl0OmV0LG9yZGVyOlllLGZyaWVuZF9vcmRlcjpZZX0saXIpLGFmdGVyOmFyfX0sXCIvdjIvYXBpL3RhbGsvbWVtby9zZW5kXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7dGVtcGxhdGVfaWQ6ZXR9LG9wdGlvbmFsOnt0ZW1wbGF0ZV9hcmdzOnB9fX0sXCIvdjIvYXBpL3RhbGsvbWVtby9zY3JhcC9zZW5kXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7cmVxdWVzdF91cmw6WWV9LG9wdGlvbmFsOnt0ZW1wbGF0ZV9pZDpldCx0ZW1wbGF0ZV9hcmdzOnB9fX0sXCIvdjIvYXBpL3RhbGsvbWVtby9kZWZhdWx0L3NlbmRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOnt0ZW1wbGF0ZV9vYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJnNyKGUpfX19fSxcIi92MS9hcGkvdGFsay9mcmllbmRzL21lc3NhZ2Uvc2VuZFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e3RlbXBsYXRlX2lkOmV0LHJlY2VpdmVyX3V1aWRzOmYscmVjZWl2ZXJfaWRfdHlwZTpZZX0sb3B0aW9uYWw6e3RlbXBsYXRlX2FyZ3M6cH0sZGVmYXVsdHM6ZnVuY3Rpb24oKXtyZXR1cm57cmVjZWl2ZXJfaWRfdHlwZTpcInV1aWRcIn19fX0sXCIvdjEvYXBpL3RhbGsvZnJpZW5kcy9tZXNzYWdlL3NjcmFwL3NlbmRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntyZXF1ZXN0X3VybDpZZSxyZWNlaXZlcl91dWlkczpmLHJlY2VpdmVyX2lkX3R5cGU6WWV9LG9wdGlvbmFsOnt0ZW1wbGF0ZV9pZDpldCx0ZW1wbGF0ZV9hcmdzOnB9LGRlZmF1bHRzOmZ1bmN0aW9uKCl7cmV0dXJue3JlY2VpdmVyX2lkX3R5cGU6XCJ1dWlkXCJ9fX19LFwiL3YxL2FwaS90YWxrL2ZyaWVuZHMvbWVzc2FnZS9kZWZhdWx0L3NlbmRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOnt0ZW1wbGF0ZV9vYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJnNyKGUpfSxyZWNlaXZlcl91dWlkczpmLHJlY2VpdmVyX2lkX3R5cGU6WWV9LGRlZmF1bHRzOmZ1bmN0aW9uKCl7cmV0dXJue3JlY2VpdmVyX2lkX3R5cGU6XCJ1dWlkXCJ9fX19LFwiL3YyL2FwaS9rYWthb2xpbmsvdGFsay90ZW1wbGF0ZS92YWxpZGF0ZVwiOnttZXRob2Q6XCJnZXRcIixkYXRhOntyZXF1aXJlZDp7bGlua192ZXI6WWUsdGVtcGxhdGVfaWQ6ZXR9LG9wdGlvbmFsOnt0ZW1wbGF0ZV9hcmdzOnB9fSxhdXRoVHlwZTpycn0sXCIvdjIvYXBpL2tha2FvbGluay90YWxrL3RlbXBsYXRlL3NjcmFwXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e3JlcXVpcmVkOntsaW5rX3ZlcjpZZSxyZXF1ZXN0X3VybDpZZX0sb3B0aW9uYWw6e3RlbXBsYXRlX2lkOmV0LHRlbXBsYXRlX2FyZ3M6cH19LGF1dGhUeXBlOnJyfSxcIi92Mi9hcGkva2FrYW9saW5rL3RhbGsvdGVtcGxhdGUvZGVmYXVsdFwiOnttZXRob2Q6XCJnZXRcIixkYXRhOntyZXF1aXJlZDp7bGlua192ZXI6WWUsdGVtcGxhdGVfb2JqZWN0OnB9fSxhdXRoVHlwZTpycn0sXCIvdjIvYXBpL3RhbGsvbWVzc2FnZS9pbWFnZS91cGxvYWRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntmaWxlOnB9fSxhdXRoVHlwZTpycn0sXCIvdjIvYXBpL3RhbGsvbWVzc2FnZS9pbWFnZS9kZWxldGVcIjp7bWV0aG9kOlwiZGVsZXRlXCIsZGF0YTp7cmVxdWlyZWQ6e2ltYWdlX3VybDpZZX19LGF1dGhUeXBlOnJyfSxcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL3NjcmFwXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7aW1hZ2VfdXJsOlllfX0sYXV0aFR5cGU6cnJ9LFwiL3YxL2FwaS9zdG9yeS9wcm9maWxlXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOmlyfX0sXCIvdjEvYXBpL3N0b3J5L2lzc3Rvcnl1c2VyXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e319LFwiL3YxL2FwaS9zdG9yeS9teXN0b3J5XCI6e21ldGhvZDpcImdldFwiLGRhdGE6e3JlcXVpcmVkOntpZDpZZX19fSxcIi92MS9hcGkvc3RvcnkvbXlzdG9yaWVzXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOntsYXN0X2lkOlllfX19LFwiL3YxL2FwaS9zdG9yeS9saW5raW5mb1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntyZXF1aXJlZDp7dXJsOlllfX19LFwiL3YxL2FwaS9zdG9yeS9wb3N0L25vdGVcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntjb250ZW50OmNyfSxvcHRpb25hbDpvcn19LFwiL3YxL2FwaS9zdG9yeS9wb3N0L3Bob3RvXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7aW1hZ2VfdXJsX2xpc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuISFmKGUpJiZjdChlLChmdW5jdGlvbihlKXtpZighWWUoZSkpcmV0dXJuITE7aWYoLyhodHRwfGZ0cHxodHRwcyk6XFwvXFwvW1xcdy1dKyhcXC5bXFx3LV0rKSsoW1xcdy4sQD9ePSUmYW1wOzpcXC9+KyMtXSpbXFx3QD9ePSUmYW1wO1xcL34rIy1dKT8vLnRlc3QoZSkpdGhyb3cgbmV3IG5uKFwidXJsIGluIGltYWdlX3VybF9saXN0IHNob3VsZCBiZSBhIGthZ2UgdXJsLCBvYnRhaW5lZCBmcm9tICcvdjEvYXBpL3N0b3J5L3VwbG9hZC9tdWx0aScuXCIpO3JldHVybiEwfSkpfX0sb3B0aW9uYWw6X3Qoe2NvbnRlbnQ6Y3J9LG9yKX19LFwiL3YxL2FwaS9zdG9yeS9wb3N0L2xpbmtcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntsaW5rX2luZm86cH0sb3B0aW9uYWw6X3Qoe2NvbnRlbnQ6Y3J9LG9yKX19LFwiL3YxL2FwaS9zdG9yeS91cGxvYWQvbXVsdGlcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e319LFwiL3YxL2FwaS9zdG9yeS9kZWxldGUvbXlzdG9yeVwiOnttZXRob2Q6XCJkZWxldGVcIixkYXRhOntyZXF1aXJlZDp7aWQ6WWV9fX0sXCIvdjEvYXBpL3RhbGsvY2hhbm5lbHNcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6e2NoYW5uZWxfcHVibGljX2lkczpmfX19LFwiL3YxL2FwaS90YWxrL3BsdXNmcmllbmRzXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOntwbHVzX2ZyaWVuZF9wdWJsaWNfaWRzOmZ9fX19LGxyPXtyZXF1ZXN0OntyZXF1aXJlZDp7dXJsOnZ0KHV0KHVyKSl9LG9wdGlvbmFsOntkYXRhOnAsZmlsZXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGd0KFtmLGl0XSkoZSkmJmN0KGUsZ3QoW290LHJ0XSkpfSxmaWxlOm90LHN1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmp9LGRlZmF1bHRzOntkYXRhOnt9LHN1Y2Nlc3M6bHQsZmFpbDpsdCxhbHdheXM6bHR9fSxhcGk6dXJ9LGRyPW51bGw7ZnVuY3Rpb24gcHIoZSl7dmFyIHQ9KGU9Y24oZSxsci5yZXF1ZXN0LFwiQVBJLnJlcXVlc3RcIikpLnVybCxuPWxyLmFwaVt0XS5kYXRhO3JldHVybiBuJiYoZS5kYXRhPWNuKGUuZGF0YSxuLFwiQVBJLnJlcXVlc3QgLSBcIi5jb25jYXQodCkpKSxkcnx8KGRyPWxuKChmdW5jdGlvbigpe3JldHVybiBuZXcgSG4uUnBjKHtyZW1vdGU6UXQuYXBpUmVtb3RlfSx7cmVtb3RlOntyZXF1ZXN0Ont9fX0pfSkpLGZyLnB1c2goKGZ1bmN0aW9uKCl7ZHIuZGVzdHJveSgpLGRyPW51bGx9KSkpLG5ldyBObi5leHBvcnRzLlByb21pc2UoKGZ1bmN0aW9uKHQsbil7KGZ1bmN0aW9uKGUpe3ZhciB0PWUudXJsLG49bHIuYXBpW3RdLHI9e307VmUoZS5kYXRhLChmdW5jdGlvbihlLHQpe3JbdF09WWUoZSk/ZTpKU09OLnN0cmluZ2lmeShlKX0pKTt2YXIgbz17dXJsOnQsbWV0aG9kOm4ubWV0aG9kLGhlYWRlcnM6e0tBOll0LEF1dGhvcml6YXRpb246KG4uYXV0aFR5cGV8fG5yKSgpLFwiQ2FjaGUtQ29udHJvbFwiOlwibm8tY2FjaGVcIixQcmFnbWE6XCJuby1jYWNoZVwifSxkYXRhOnJ9O3JldHVybiBuZXcgTm4uZXhwb3J0cy5Qcm9taXNlKChmdW5jdGlvbihuLGkpe2lmKGZ1bmN0aW9uKGUpe3JldHVyblwiL3YxL2FwaS9zdG9yeS91cGxvYWQvbXVsdGlcIj09PWV8fFwiL3YyL2FwaS90YWxrL21lc3NhZ2UvaW1hZ2UvdXBsb2FkXCI9PT1lfSh0KXx8ZS5kYXRhLmZpbGUpe3ZhciBhPWUuZmlsZXN8fGUuZGF0YS5maWxlO2lmKCFhKXRocm93IG5ldyBubihcIidmaWxlcycgcGFyYW1ldGVyIHNob3VsZCBiZSBzZXQgZm9yIFwiLmNvbmNhdCh0KSk7KGZ1bmN0aW9uKGUpe3ZhciB0PWF0KGUsKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbmV3IE5uLmV4cG9ydHMuUHJvbWlzZSgoZnVuY3Rpb24odCxuKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgRmlsZVJlYWRlciYmbihuZXcgbm4oXCJGaWxlIEFQSSBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIGJyb3dzZXIuXCIpKTt2YXIgcj1uZXcgRmlsZVJlYWRlcjtyLm9ubG9hZD1mdW5jdGlvbihlKXt0cnl7dCgocj1lLnRhcmdldC5yZXN1bHQsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobmV3IFVpbnQ4QXJyYXkocikpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZStTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsW3RdKX0pLFwiXCIpKSl9Y2F0Y2goZSl7bihlKX12YXIgcn0sci5vbmVycm9yPWZ1bmN0aW9uKHQpe24obmV3IG5uKFwiQ2Fubm90IHJlYWQgZmlsZTogXCIuY29uY2F0KGUubmFtZSkpKX0sci5yZWFkQXNBcnJheUJ1ZmZlcihlKX0pKX0oZSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJue25hbWU6ZS5uYW1lLHR5cGU6ZS50eXBlLHN0cjp0fX0pKX0pKTtyZXR1cm4gbmV3IE5uLmV4cG9ydHMuUHJvbWlzZSgoZnVuY3Rpb24oZSxuKXtObi5leHBvcnRzLlByb21pc2UuYWxsKHQpLnRoZW4oKGZ1bmN0aW9uKHQpe2Uoe3BhcmFtTmFtZTpcImZpbGVcIixkYXRhOnR9KX0pLChmdW5jdGlvbihlKXtuKGUpfSkpfSkpfSkoYSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHQ9W107Zm9yKHZhciBpIGluIHIpXCJmaWxlXCIhPT1pJiZ0LnB1c2goXCJcIi5jb25jYXQoaSxcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChyW2ldKSkpO3QubGVuZ3RoPjAmJihvLnVybCs9XCI/XCIuY29uY2F0KHQuam9pbihcIiZcIikpKSxvLmZpbGU9ZSxuKG8pfSksKGZ1bmN0aW9uKGUpe2koZSl9KSl9ZWxzZSBuKG8pfSkpfSkoZSkudGhlbigoZnVuY3Rpb24ocil7ZHIucmVxdWVzdChyLChmdW5jdGlvbihuKXtlLnN1Y2Nlc3MobiksZS5hbHdheXMobiksdChuKX0pLChmdW5jdGlvbih0KXt2YXIgcj1mdW5jdGlvbihlKXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoZS5tZXNzYWdlLnJlc3BvbnNlVGV4dCl9Y2F0Y2goZSl7cmV0dXJue2NvZGU6LTc3Nyxtc2c6XCJVbmtub3duIGVycm9yXCJ9fX0odCk7ZS5mYWlsKHIpLGUuYWx3YXlzKHIpLG4ocil9KSl9KSwoZnVuY3Rpb24oZSl7bihlKX0pKX0pKX12YXIgZnI9W107dmFyIGhyPU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLHJlcXVlc3Q6cHIsY2xlYW51cDpmdW5jdGlvbigpe29uKGZyKX19KTtmdW5jdGlvbiBtcihlLHQpe3JldHVybiBSZShlLHtyZW1vdGU6UXQubG9naW5XaWRnZXQsY2hhbm5lbDpkdCgpfSksbG4oKGZ1bmN0aW9uKCl7dmFyIG49bmV3IEhuLlJwYyhlLHtsb2NhbDp7cG9zdFJlc3BvbnNlOnQsZ2V0S2FrYW9BZ2VudDpmdW5jdGlvbigpe3JldHVybiBZdH19LHJlbW90ZTp7Z2V0Q29kZTp7fSxnZXRBY2Nlc3NUb2tlbjp7fSxzZXRDbGllbnQ6e30sc2V0U3RhdGVUb2tlbjp7fSxkZWxldGVBdXRoQ29va2llOnt9fX0pO3JldHVybiBuLmNoYW5uZWw9ZS5jaGFubmVsLG59KSl9dmFyIHZyPVwiX2JsYW5rXCIsZ3I9XCJ3aWR0aD0zODAsIGhlaWdodD01MjAsIHNjcm9sbGJhcnM9eWVzXCIseXI9L1ZlcnNpb25cXC80LjAvaS50ZXN0KFh0LnVhKXx8Lzsgd3ZcXCkvaS50ZXN0KFh0LnVhKSxicj0vbmF2ZXJcXChpbmFwcHxkYXVtYXBwc3xlYmF5L2cudGVzdChYdC51YSl8fFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRhdW1BcHBzP1widW5kZWZpbmVkXCI6a3QoZGF1bUFwcHMpKTtmdW5jdGlvbiBfcigpe3JldHVybiBYdC5vcy5pb3M/L3NhZmFyaXxGeGlPU3xDcmlPUy8udGVzdChYdC51YSl8fCEkdDohIVh0Lm9zLmFuZHJvaWQmJihYdC5icm93c2VyLmNocm9tZSYmIS9vcHJcXC8vaS50ZXN0KFh0LnVhKSYmWHQuYnJvd3Nlci52ZXJzaW9uLm1ham9yPj0zMCYmKCF5cnx8eXImJmJyKSl9dmFyIGtyPXtsb2dpbjpmdW5jdGlvbihlLHQsbixyKXtpZihfcigpKXt2YXIgbz1udWxsO2lmKFh0Lm9zLmlvcyl7dmFyIGk9ZnVuY3Rpb24oZSx0KXt0LnN0YXRlPWU7dmFyIG49e2NsaWVudF9pZDplbigpLHJlZGlyZWN0X3VyaTpRdC5yZWRpcmVjdFVyaSxwYXJhbXM6SlNPTi5zdHJpbmdpZnkodCl9O3JldHVyblwiXCIuY29uY2F0KFF0LnRhbGtMb2dpblNjaGVtZSxcIj9cIikuY29uY2F0KG10KG4pKX0oZSxuKSxhPVwiXCIuY29uY2F0KFF0LnVuaXZlcnNhbEtha2FvTGluaykuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChpKSxcIiZ3ZWI9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQodCkpO3I/bG9jYXRpb24uaHJlZj1hOm89cG4oYSx2cixncil9ZWxzZSBpZihYdC5vcy5hbmRyb2lkKXt2YXIgYz1mdW5jdGlvbihlLHQsbil7cmV0dXJuW1wiaW50ZW50OiNJbnRlbnRcIixcImFjdGlvbj1jb20ua2FrYW8udGFsay5pbnRlbnQuYWN0aW9uLkNBUFJJX0xPR0dFRF9JTl9BQ1RJVklUWVwiLFwibGF1bmNoRmxhZ3M9MHgwODg4MDAwMFwiLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsuYXBwS2V5PVwiLmNvbmNhdChlbigpKSxcIlMuY29tLmtha2FvLnNkay50YWxrLnJlZGlyZWN0VXJpPVwiLmNvbmNhdChRdC50YWxrTG9naW5SZWRpcmVjdFVyaSksXCJTLmNvbS5rYWthby5zZGsudGFsay5zdGF0ZT1cIi5jb25jYXQoZSksXCJTLmNvbS5rYWthby5zZGsudGFsay5rYUhlYWRlcj1cIi5jb25jYXQoWXQpLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsuZXh0cmFwYXJhbXM9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpLFwiUy5icm93c2VyX2ZhbGxiYWNrX3VybD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHQpKSxcImVuZDtcIl0uam9pbihcIjtcIil9KGUsdCxuKTtyP2xvY2F0aW9uLmhyZWY9YzpYdC5icm93c2VyLnZlcnNpb24ubWFqb3I+NDAmJigheXJ8fHlyJiZicik/bz1wbihjLHZyLGdyKToobz1wbihcIlwiLHZyLGdyKSkmJihvLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe28mJm8ubG9jYXRpb24mJihvLmxvY2F0aW9uLmhyZWY9dCl9KSwxMCl9KSksby5sb2NhdGlvbi5ocmVmPWMpfXJldHVybiBvfX0saXNTdXBwb3J0Ol9yfSx3cj1uZXcgX24oMWUzLDYwMCk7ZnVuY3Rpb24gU3IoZSl7dmFyIHQ9ZHQoKStkdCgpO2lmKGtyLmlzU3VwcG9ydCgpJiZlLnRocm91Z2hUYWxrKVRyKGUsdCk7ZWxzZSBpZihlLnJlZGlyZWN0VXJpKWxvY2F0aW9uLmhyZWY9RnIoZSk7ZWxzZSBpZihYdC5vcy5hbmRyb2lkJiYkdCYmWHQuYnJvd3Nlci5jaHJvbWUmJlh0LmJyb3dzZXIudmVyc2lvbi5tYWpvcj49NzEpe1RyKGUsdCxBbihSZSh7fSxUbihlKSxDbihlKSx7cmVkaXJlY3RfdXJpOlF0LnRhbGtMb2dpblJlZGlyZWN0VXJpLHJlc3BvbnNlX3R5cGU6XCJjb2RlXCIsc3RhdGU6dCxrYTpZdCxvcmlnaW46V3R9KSkpfWVsc2V7WHQuYnJvd3Nlci5tc2llJiZwYXJzZUludChYdC5icm93c2VyLnZlcnNpb24ubWFqb3IpPD05fHxmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbiB0KG4pe3ZhciByPW4ub3JpZ2luLG89bi5kYXRhO2lmKC9cXC5rYWthb1xcLmNvbSQvLnRlc3QocikmJm8mJlwic3RyaW5nXCI9PXR5cGVvZiBvKXt2YXIgaT1vLnNwbGl0KFwiIFwiKTtpZihcInBvc3RSZXNwb25zZVwiPT09aVsxXSl7dmFyIGE9SlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoaVsyXSkpO0JyKGUsYSksaHQod2luZG93LFwibWVzc2FnZVwiLHQpfX19O2Z0KHdpbmRvdyxcIm1lc3NhZ2VcIix0KSxVci5wdXNoKChmdW5jdGlvbigpe2h0KHdpbmRvdyxcIm1lc3NhZ2VcIix0KX0pKX0oZSksam4oUHIoZSx0KSl9Ym4uZGlzcGF0Y2goXCJMT0dJTl9TVEFSVFwiKX12YXIgeHI9bnVsbCxPcj1mdW5jdGlvbigpe3hyJiZ4ci5jbG9zZSYmeHIuY2xvc2UoKSx4cj1udWxsfSxqcj1udWxsLEFyPW51bGw7ZnVuY3Rpb24gVHIoZSx0LG4pe2pyfHwoanI9bXIoe30sKGZ1bmN0aW9uKHQpe2lmKFwiZXJyb3JcIj09PXQuc3RhdHVzJiZ0LmVycm9yX2NvZGUmJlwiMzAwXCIhPT10LmVycm9yX2NvZGUmJih3ci5zdG9wKCksXCI3MDBcIj09PXQuZXJyb3JfY29kZSYmKGxvY2F0aW9uLmhyZWY9XCJcIi5jb25jYXQoUXQuYXV0aERvbWFpbixcIi9lcnJvci9uZXR3b3JrXCIpKSxCcihlLHtlcnJvcjp0LmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOnQuZXJyb3JfZGVzY3JpcHRpb259KSksdC5zdGF0dXMpaWYoXCJva1wiPT09dC5zdGF0dXMpe2lmKHdyLnN0b3AoKSxBcj09PXQuY29kZSlyZXR1cm47QXI9dC5jb2RlLGpyLmdldEFjY2Vzc1Rva2VuKHQuY29kZSxlbigpLFh0Lm9zLmlvcyYmIW4/UXQucmVkaXJlY3RVcmk6UXQudGFsa0xvZ2luUmVkaXJlY3RVcmksZS5hcHByb3ZhbFR5cGUpLE9yKCl9ZWxzZSBYdC5vcy5pb3MmJlwiYWJvdXQ6YmxhbmtcIj09PXhyLmxvY2F0aW9uLmhyZWYmJk9yKCk7ZWxzZSBCcihlLHQpfSkpLFVyLnB1c2goKGZ1bmN0aW9uKCl7anIuZGVzdHJveSgpLGpyPW51bGx9KSkpO3ZhciByPVwiXCI7aWYobillLnJlZGlyZWN0VXJpP2xvY2F0aW9uLmhyZWY9bjpqbihuKTtlbHNle3I9ZS5yZWRpcmVjdFVyaT9GcihlKTpQcihlLHQsWHQub3MuaW9zP1F0LnJlZGlyZWN0VXJpOlF0LnRhbGtMb2dpblJlZGlyZWN0VXJpKTt2YXIgbz1SZSh7fSxUbihlKSxDbihlKSk7c2V0VGltZW91dCgoZnVuY3Rpb24oKXt4cj1rci5sb2dpbih0LHIsbyxlLnJlZGlyZWN0VXJpKX0pLDUwMCl9d3Iuc3RhcnQoKGZ1bmN0aW9uKCl7dCYmanIuZ2V0Q29kZSh0LGVuKCksWXQpfSksKGZ1bmN0aW9uKCl7QnIoZSx7ZXJyb3I6XCJ0aW1lb3V0XCIsZGVzY3JpcHRpb246XCJBY2NvdW50IGxvZ2luIHRpbWVkIG91dC4gUGxlYXNlIGxvZ2luIGFnYWluLlwiLGVycm9yX2Rlc2NyaXB0aW9uOlwiQWNjb3VudCBsb2dpbiB0aW1lZCBvdXQuIFBsZWFzZSBsb2dpbiBhZ2Fpbi5cIn0pLGUucmVkaXJlY3RVcmk/bG9jYXRpb24uaHJlZj1yOmpuKHIpfSkpfXZhciBDcj1udWxsLElyPXt9O2Z1bmN0aW9uIFByKGUsdCxuKXtDcnx8KENyPW1yKHt9LChmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKCF0W2Uuc3RhdGVUb2tlbl0pdGhyb3cgbmV3IG5uKFwic2VjdXJpdHkgZXJyb3I6ICNDU1QyXCIpO3ZhciBuPXRbZS5zdGF0ZVRva2VuXTtyZXR1cm4gZGVsZXRlIHRbZS5zdGF0ZVRva2VuXSxkZWxldGUgZS5zdGF0ZVRva2VuLG59KGUsSXIpO0JyKHQsZSl9KSksVXIucHVzaCgoZnVuY3Rpb24oKXtDci5kZXN0cm95KCksQ3I9bnVsbH0pKSksSXJbdF09ZTt2YXIgcj1lLnJlZGlyZWN0VXJpP2UucmVkaXJlY3RVcmk6bnx8XCJrYWthb2pzXCI7cmV0dXJuIEFuKFJlKHt9LFRuKGUpLENuKGUpLHtyZWRpcmVjdF91cmk6cixyZXNwb25zZV90eXBlOlwiY29kZVwiLHN0YXRlOnQscHJveHk6XCJlYXN5WERNX0tha2FvX1wiLmNvbmNhdChDci5jaGFubmVsLFwiX3Byb3ZpZGVyXCIpLGthOll0LG9yaWdpbjpXdH0pKX1mdW5jdGlvbiBGcihlKXtyZXR1cm4gQW4oUmUoe30sVG4oZSksQ24oZSkse3JlZGlyZWN0X3VyaTplLnJlZGlyZWN0VXJpLHJlc3BvbnNlX3R5cGU6XCJjb2RlXCIsa2E6WXQsb3JpZ2luOld0fSkpfWZ1bmN0aW9uIEJyKGUsdCl7dC5lcnJvcj9cImFjY2Vzc19kZW5pZWRcIiE9PXQuZXJyb3ImJlZuKG51bGwpOihWbih0LmFjY2Vzc190b2tlbixlLnBlcnNpc3RBY2Nlc3NUb2tlbiksYm4uZGlzcGF0Y2goXCJMT0dJTlwiKSksRm4oZSx0KX12YXIgRXI9bnVsbDt2YXIgVXI9W107dmFyIFJyPU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGNyZWF0ZUxvZ2luQnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PXB0KChlPWNuKGUsT24uY3JlYXRlTG9naW5CdXR0b24sXCJBdXRoLmNyZWF0ZUxvZ2luQnV0dG9uXCIpKS5jb250YWluZXIpO2lmKCF0KXRocm93IG5ldyBubihcImNvbnRhaW5lciBpcyByZXF1aXJlZCBmb3IgS2FrYW8gbG9naW4gYnV0dG9uOiBwYXNzIGluIGVsZW1lbnQgb3IgaWRcIik7dmFyIG49XCJtZWRpdW1cIj09PWUuc2l6ZT9cIjAyXCI6XCJzbWFsbFwiPT09ZS5zaXplP1wiMDNcIjpcIjAxXCIscj1cIlwiLmNvbmNhdChRdC5hdXRoRG9tYWluLFwiL3B1YmxpYy93aWRnZXQvbG9naW4vXCIpLmNvbmNhdChlLmxhbmcsXCIvXCIpLmNvbmNhdChlLmxhbmcsXCJfXCIpLmNvbmNhdChuLFwiX21lZGl1bVwiKSxvPVwiXCIuY29uY2F0KHIsXCIucG5nXCIpLGk9XCJcIi5jb25jYXQocixcIl9wcmVzcy5wbmdcIik7dC5pbm5lckhUTUw9JzxpbWdcXG4gICAgaWQ9XCJrYWthby1sb2dpbi1idG5cIlxcbiAgICBzcmM9Jy5jb25jYXQobyxcIlxcbiAgICBvbm1vdXNlb3Zlcj10aGlzLnNyYz0nXCIpLmNvbmNhdChpLFwiJ1xcbiAgICBvbm1vdXNlb3V0PXRoaXMuc3JjPSdcIikuY29uY2F0KG8sJ1xcJ1xcbiAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiXFxuICAvPicpO3ZhciBhPWZ1bmN0aW9uKCl7U3IoZSl9O2Z0KHQsXCJjbGlja1wiLGEpLFVyLnB1c2goKGZ1bmN0aW9uKCl7aHQodCxcImNsaWNrXCIsYSl9KSl9LGxvZ2luOmZ1bmN0aW9uKGUpe1NyKGU9Y24oZSxPbi5sb2dpbixcIkF1dGgubG9naW5cIikpfSxsb2dpbkZvcm06ZnVuY3Rpb24oZSl7ZT1jbihlLE9uLmxvZ2luLFwiQXV0aC5sb2dpbkZvcm1cIik7dmFyIHQ9ZHQoKStkdCgpLG49XCImcHJvbXB0PWxvZ2luXCI7ZS5yZWRpcmVjdFVyaT9sb2NhdGlvbi5ocmVmPVwiXCIuY29uY2F0KEZyKGUpKS5jb25jYXQobik6am4oXCJcIi5jb25jYXQoUHIoZSx0KSkuY29uY2F0KG4pKX0sYXV0b0xvZ2luOmZ1bmN0aW9uKGUpe2lmKGU9Y24oZSxPbi5hdXRvTG9naW4sXCJBdXRoLmF1dG9Mb2dpblwiKSxxbigpfHxYdC5vcy5hbmRyb2lkJiYkdCl7dmFyIHQ9ZHQoKStkdCgpO1RyKGUsdCxBbihSZSh7fSxUbihlKSx7cmVkaXJlY3RfdXJpOlF0LnRhbGtMb2dpblJlZGlyZWN0VXJpLHJlc3BvbnNlX3R5cGU6XCJjb2RlXCIsc3RhdGU6dCxrYTpZdCxvcmlnaW46V3QscHJvbXB0Olwibm9uZVwifSkpKX1lbHNlIEZuKGUse2Vycm9yOlwiYXV0b19sb2dpblwiLGVycm9yX2Rlc2NyaXB0aW9uOlwiS2FrYW8uQXV0aC5hdXRvTG9naW4gaXMgb25seSBzdXBwb3J0ZWQgYnkgS2FrYW9UYWxrIEluQXBwQnJvd3NlclwiLGVycm9yX2NvZGU6XCI0MDBcIixzdGF0dXM6XCJlcnJvclwifSk7Ym4uZGlzcGF0Y2goXCJMT0dJTl9TVEFSVFwiKX0sbG9nb3V0OmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmx0O2FuKGUsaixcIkF1dGgubG9nb3V0XCIpLHByKHt1cmw6XCIvdjEvdXNlci9sb2dvdXRcIixhbHdheXM6ZnVuY3Rpb24oKXtWbihudWxsKSxibi5kaXNwYXRjaChcIkxPR09VVFwiKSxlKCEwKX19KX0saXNzdWVBY2Nlc3NUb2tlbjpmdW5jdGlvbihlKXtlPWNuKGUsT24uaXNzdWVBY2Nlc3NUb2tlbixcIkF1dGguaXNzdWVBY2Nlc3NUb2tlblwiKSxFcnx8KEVyPW1yKHt9LChmdW5jdGlvbih0KXtCcihlLHQpfSkpLFVyLnB1c2goKGZ1bmN0aW9uKCl7RXIuZGVzdHJveSgpLEVyPW51bGx9KSkpLEVyLmdldEFjY2Vzc1Rva2VuKGUuY29kZSxlbigpLGUucmVkaXJlY3RVcmkpfSxjbGVhbnVwOmZ1bmN0aW9uKCl7b24oVXIpfX0pO2Z1bmN0aW9uIExyKGUsdCl7enIoKTt2YXIgbj1zbigpLHI9X3Qoe2FwcF9rZXk6ZW4oKSxhY2Nlc3NfdG9rZW46R24oKSxrYTpZdCx0cmFuc19pZDpuLG1vYmlsZV92aWV3OmUuZm9yY2VNb2JpbGVMYXlvdXQsZW5hYmxlX2JhY2tfYnV0dG9uOmUuZW5hYmxlQmFja0J1dHRvbn0sZS5hZGRyZXNzSWQmJnthZGRyZXNzX2lkOmUuYWRkcmVzc0lkfSksbz1RdC5hcHBzRG9tYWluK3Q7ZS5yZXR1cm5Vcmw/KHIucmV0dXJuX3VybD1lLnJldHVyblVybCxnbihyLG8pKTooaG4obixcIlwiLmNvbmNhdChRdC5hcHBzRG9tYWluLFwiL3Byb3h5P3RyYW5zX2lkPVwiKS5jb25jYXQobiksTXIpLG1uKGUsUXQuYXBwc0RvbWFpbixNciksZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24gdChuKXt2YXIgcj1uLmRhdGEsbz1uLm9yaWdpbjtvIT09UXQuYXBwc0RvbWFpbiYmbyE9PVF0LmFjY291bnREb21haW58fFwiY2xvc2VkXCIhPT1yfHwoZS5jbG9zZSgpLGh0KHdpbmRvdyxcIm1lc3NhZ2VcIix0KSl9O2Z0KHdpbmRvdyxcIm1lc3NhZ2VcIix0KX0oZSksdm4ocix7dXJsOm8scG9wdXBOYW1lOlwic2hpcHBpbmdfYWRkcmVzc1wiLHBvcHVwRmVhdHVyZXM6XCJsb2NhdGlvbj1ubyxyZXNpemFibGU9bm8sc3RhdHVzPW5vLHNjcm9sbGJhcnM9bm8sd2lkdGg9NDYwLGhlaWdodD02MDhcIn0pKX12YXIgTXI9W107ZnVuY3Rpb24genIoKXtvbihNcil9dmFyIERyPXJuKFt6bixScix0cixPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxnZXRTdGF0dXNJbmZvOmZ1bmN0aW9uKGUpe2FuKGUsaixcIkF1dGguZ2V0U3RhdHVzSW5mb1wiKSxHbigpP3ByKHt1cmw6XCIvdjIvdXNlci9tZVwiLHN1Y2Nlc3M6ZnVuY3Rpb24odCl7ZSh7c3RhdHVzOlwiY29ubmVjdGVkXCIsdXNlcjp0fSl9LGZhaWw6ZnVuY3Rpb24oKXtlKHtzdGF0dXM6XCJub3RfY29ubmVjdGVkXCJ9KX19KTplKHtzdGF0dXM6XCJub3RfY29ubmVjdGVkXCJ9KX19KSxPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxzZWxlY3RTaGlwcGluZ0FkZHJlc3M6ZnVuY3Rpb24oZSl7THIoZT1jbihlLE9uLnNlbGVjdFNoaXBwaW5nQWRkcmVzcyxcIkF1dGguc2VsZWN0U2hpcHBpbmdBZGRyZXNzXCIpLFwiL3VzZXIvYWRkcmVzc1wiKX0sY3JlYXRlU2hpcHBpbmdBZGRyZXNzOmZ1bmN0aW9uKGUpe0xyKGU9Y24oZSxPbi5jcmVhdGVTaGlwcGluZ0FkZHJlc3MsXCJBdXRoLmNyZWF0ZVNoaXBwaW5nQWRkcmVzc1wiKSxcIi91c2VyL2NyZWF0ZS9hZGRyZXNzXCIpfSx1cGRhdGVTaGlwcGluZ0FkZHJlc3M6ZnVuY3Rpb24oZSl7THIoZT1jbihlLE9uLnVwZGF0ZVNoaXBwaW5nQWRkcmVzcyxcIkF1dGgudXBkYXRlU2hpcHBpbmdBZGRyZXNzXCIpLFwiL3VzZXIvZWRpdC9hZGRyZXNzXCIpfSxjbGVhbnVwOnpyfSldKSxxcj1ybihbaHJdKTtmdW5jdGlvbiBOcihlKXtyZXR1cm4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfWZ1bmN0aW9uIEtyKGUpe3JldHVybiBlLnJlcGxhY2UoL1tBLVpdL2csKGZ1bmN0aW9uKGUpe3JldHVyblwiX1wiLmNvbmNhdChlLnRvTG93ZXJDYXNlKCkpfSkpfWZ1bmN0aW9uIEhyKGUpe3JldHVybiBwKGUpP0pTT04uc3RyaW5naWZ5KGUpOmV9ZnVuY3Rpb24gSnIoZSx0KXtyZXR1cm4gcHIoe3VybDplLGRhdGE6dH0pfWZ1bmN0aW9uIFdyKGUsdCxuKXtyZXR1cm4gY24oZSx0LCdwYXJhbWV0ZXIgXCInLmNvbmNhdChuLCdcIiBpbiBTaGFyZScpKSwhMH1mdW5jdGlvbiBYcihlKXtyZXR1cm4gdXQoZSkucmVkdWNlKChmdW5jdGlvbih0LG4pe3JldHVybiB0W0tyKG4pXT1lW25dLHR9KSx7fSl9dmFyICRyPXtvcHRpb25hbDp7d2ViVXJsOlllLG1vYmlsZVdlYlVybDpZZSxhbmRyb2lkRXhlY3V0aW9uUGFyYW1zOlllLGFuZHJvaWRFeGVjUGFyYW1zOlllLGlvc0V4ZWN1dGlvblBhcmFtczpZZSxpb3NFeGVjUGFyYW1zOlllfSxidWlsZGVyOlZyfSxHcj17cmVxdWlyZWQ6e2l0ZW06WWUsaXRlbU9wOlllfX07ZnVuY3Rpb24gVnIoZSl7dmFyIHQ9WHIoZSk7cmV0dXJuIHQuYW5kcm9pZF9leGVjX3BhcmFtcyYmKHQuYW5kcm9pZF9leGVjdXRpb25fcGFyYW1zPXQuYW5kcm9pZF9leGVjX3BhcmFtcyxkZWxldGUgdC5hbmRyb2lkX2V4ZWNfcGFyYW1zKSx0Lmlvc19leGVjX3BhcmFtcyYmKHQuaW9zX2V4ZWN1dGlvbl9wYXJhbXM9dC5pb3NfZXhlY19wYXJhbXMsZGVsZXRlIHQuaW9zX2V4ZWNfcGFyYW1zKSx0fWZ1bmN0aW9uIFlyKGUpe3JldHVybnt0aXRsZTplLnRpdGxlLGxpbms6VnIoZS5saW5rKX19ZnVuY3Rpb24gUXIoZSl7dmFyIHQ9WHIoZSk7cmV0dXJuIHQubGluaz1Wcih0LmxpbmspLHR9dmFyIFpyPXtoZWFkZXJMaW5rOiRyLGxpbms6JHIsYnV0dG9uOntyZXF1aXJlZDp7dGl0bGU6WWUsbGluazpmdW5jdGlvbihlKXtXcihlLCRyLFwibGlua1wiKX19LGJ1aWxkZXI6WXJ9LGJ1dHRvbnM6e29wdGlvbmFsOnswOmZ1bmN0aW9uKGUpe1dyKGUsWnIuYnV0dG9uLFwiYnV0dG9uXCIpfSwxOmZ1bmN0aW9uKGUpe1dyKGUsWnIuYnV0dG9uLFwiYnV0dG9uXCIpfX0sYnVpbGRlcjpmdW5jdGlvbihlKXtyZXR1cm4gYXQoZSxZcil9fSxjb250ZW50OntyZXF1aXJlZDp7dGl0bGU6WWUsaW1hZ2VVcmw6WWUsbGluazpmdW5jdGlvbihlKXtXcihlLCRyLFwibGlua1wiKX19LG9wdGlvbmFsOntpbWFnZVdpZHRoOmV0LGltYWdlSGVpZ2h0OmV0LGRlc2NyaXB0aW9uOlllfSxidWlsZGVyOlFyfSxjb250ZW50czp7b3B0aW9uYWw6ezA6ZnVuY3Rpb24oZSl7V3IoZSxaci5jb250ZW50LFwiY29udGVudFwiKX0sMTpmdW5jdGlvbihlKXtXcihlLFpyLmNvbnRlbnQsXCJjb250ZW50XCIpfSwyOmZ1bmN0aW9uKGUpe1dyKGUsWnIuY29udGVudCxcImNvbnRlbnRcIil9fSxidWlsZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBhdChlLFFyKX19LGNvbW1lcmNlOntyZXF1aXJlZDp7cmVndWxhclByaWNlOmV0fSxvcHRpb25hbDp7ZGlzY291bnRQcmljZTpldCxkaXNjb3VudFJhdGU6ZXQsZml4ZWREaXNjb3VudFByaWNlOmV0LGN1cnJlbmN5VW5pdDpZZSxjdXJyZW5jeVVuaXRQb3NpdGlvbjp2dChbMCwxXSkscHJvZHVjdE5hbWU6WWV9LGJ1aWxkZXI6WHJ9LHNvY2lhbDp7b3B0aW9uYWw6e2xpa2VDb3VudDpldCxjb21tZW50Q291bnQ6ZXQsc2hhcmVkQ291bnQ6ZXQsdmlld0NvdW50OmV0LHN1YnNjcmliZXJDb3VudDpldH0sYnVpbGRlcjpYcn0saXRlbUNvbnRlbnQ6e29wdGlvbmFsOntwcm9maWxlVGV4dDpZZSxwcm9maWxlSW1hZ2VVcmw6WWUsdGl0bGVJbWFnZVVybDpZZSx0aXRsZUltYWdlVGV4dDpZZSx0aXRsZUltYWdlQ2F0ZWdvcnk6WWUsaXRlbXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSkmJmUubGVuZ3RoPDYmJmN0KGUsKGZ1bmN0aW9uKGUpe3JldHVybiBXcihlLEdyLFwiaXRlbXMuaXRlbVwiKX0pKX0sc3VtOlllLHN1bU9wOlllfSxidWlsZGVyOmZ1bmN0aW9uKGUpe3ZhciB0PVhyKGUpO3JldHVybiB0Lml0ZW1zJiYodC5pdGVtcz1hdCh0Lml0ZW1zLChmdW5jdGlvbihlKXtyZXR1cm4gWHIoZSl9KSkpLHR9fX07dmFyIGVvPXtjcmVhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVpyW3RdO2lmKHIpcmV0dXJuIGU9Y24oZSxyLCdwYXJhbWV0ZXIgXCInLmNvbmNhdCh0LCdcIiBpbiAnKS5jb25jYXQobnx8XCJTaGFyZVwiKSksci5idWlsZGVyKGUpfX0sdG89XCI0LjBcIixubz14dCgoZnVuY3Rpb24gZSh0LG4pe3d0KHRoaXMsZSksdGhpcy5hcHBrZXk9ZW4oKSx0aGlzLmFwcHZlcj1cIjEuMFwiLHRoaXMubGlua3Zlcj10byx0aGlzLmV4dHJhcz1fdChfdCh7S0E6WXR9LHQuZXh0cmFzKSx0LnNlcnZlckNhbGxiYWNrQXJncyYme2xjYmE6SHIodC5zZXJ2ZXJDYWxsYmFja0FyZ3MpfSksdGhpcy50ZW1wbGF0ZV9qc29uPW4udGVtcGxhdGVfbXNnLHRoaXMudGVtcGxhdGVfYXJncz1uLnRlbXBsYXRlX2FyZ3MsdGhpcy50ZW1wbGF0ZV9pZD1uLnRlbXBsYXRlX2lkfSkpO3ZhciBybz14dCgoZnVuY3Rpb24gZSh0KXt2YXIgbj10aGlzO3d0KHRoaXMsZSksdGhpcy5saW5rX3Zlcj10byx0aGlzLnRlbXBsYXRlX29iamVjdD1fdCh7b2JqZWN0X3R5cGU6dC5vYmplY3RUeXBlfSx0LmJ1dHRvblRpdGxlJiZ7YnV0dG9uX3RpdGxlOnQuYnV0dG9uVGl0bGV9KSxWZSh0LChmdW5jdGlvbihlLHQpe3ZhciByPWVvLmNyZWF0ZShlLHQsXCJkZWZhdWx0T2JqZWN0XCIpO3ImJihuLnRlbXBsYXRlX29iamVjdFtLcih0KV09cil9KSl9KSksb289e0ZlZWRMaW5rOnJvLENvbW1lcmNlTGluazpybyxMaXN0TGluazpmdW5jdGlvbihlKXtqdChuLGUpO3ZhciB0PUl0KG4pO2Z1bmN0aW9uIG4oZSl7dmFyIHI7cmV0dXJuIHd0KHRoaXMsbiksKHI9dC5jYWxsKHRoaXMsZSkpLnRlbXBsYXRlX29iamVjdC5oZWFkZXJfdGl0bGU9ZS5oZWFkZXJUaXRsZSxjb25zb2xlJiYoZS5oZWFkZXJJbWFnZVVybHx8ZS5oZWFkZXJJbWFnZVdpZHRofHxlLmhlYWRlckltYWdlSGVpZ2h0KSYmY29uc29sZS53YXJuKFwiS2FrYW9XYXJuaW5nOiBUaGUgcGFyYW1ldGVycyAoXCIuY29uY2F0KFtcImhlYWRlckltYWdlVXJsXCIsXCJoZWFkZXJJbWFnZVdpZHRoXCIsXCJoZWFkZXJJbWFnZUhlaWdodFwiXS5qb2luKFwiLCBcIiksXCIpIGZvciBoZWFkZXIgYmFja2dyb3VuZCBpbWFnZSBhcmUgZGVwcmVjYXRlZC5cIikpLHJ9cmV0dXJuIHh0KG4pfShybyksTG9jYXRpb25MaW5rOmZ1bmN0aW9uKGUpe2p0KG4sZSk7dmFyIHQ9SXQobik7ZnVuY3Rpb24gbihlKXt2YXIgcjt3dCh0aGlzLG4pO3ZhciBvPShyPXQuY2FsbCh0aGlzLGUpKS50ZW1wbGF0ZV9vYmplY3Q7cmV0dXJuIG8uYWRkcmVzcz1lLmFkZHJlc3N8fFwiXCIsby5hZGRyZXNzX3RpdGxlPWUuYWRkcmVzc1RpdGxlfHxcIlwiLHJ9cmV0dXJuIHh0KG4pfShybyksVGV4dExpbms6ZnVuY3Rpb24oZSl7anQobixlKTt2YXIgdD1JdChuKTtmdW5jdGlvbiBuKGUpe3ZhciByO3JldHVybiB3dCh0aGlzLG4pLChyPXQuY2FsbCh0aGlzLGUpKS50ZW1wbGF0ZV9vYmplY3QudGV4dD1lLnRleHR8fFwiXCIscn1yZXR1cm4geHQobil9KHJvKX0saW89eHQoKGZ1bmN0aW9uIGUodCl7d3QodGhpcyxlKSx0aGlzLmxpbmtfdmVyPXRvLHRoaXMucmVxdWVzdF91cmw9dC5yZXF1ZXN0VXJsLHQudGVtcGxhdGVJZCYmKHRoaXMudGVtcGxhdGVfaWQ9dC50ZW1wbGF0ZUlkKSx0LnRlbXBsYXRlQXJncyYmKHRoaXMudGVtcGxhdGVfYXJncz10LnRlbXBsYXRlQXJncyl9KSksYW89eHQoKGZ1bmN0aW9uIGUodCl7d3QodGhpcyxlKSx0aGlzLmxpbmtfdmVyPXRvLHRoaXMudGVtcGxhdGVfaWQ9dC50ZW1wbGF0ZUlkLHRoaXMudGVtcGxhdGVfYXJncz10LnRlbXBsYXRlQXJnc30pKTt2YXIgY289e3NlbmQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXZuKF90KHthcHBfa2V5OmVuKCksa2E6WXQsdmFsaWRhdGlvbl9hY3Rpb246dCx2YWxpZGF0aW9uX3BhcmFtczpKU09OLnN0cmluZ2lmeShuKX0sZS5zZXJ2ZXJDYWxsYmFja0FyZ3MmJntsY2JhOkhyKGUuc2VydmVyQ2FsbGJhY2tBcmdzKX0pLHt1cmw6XCJcIi5jb25jYXQoUXQuc2hhcmVyRG9tYWluLFwiL3BpY2tlci9saW5rXCIpLHBvcHVwTmFtZTpcImtha2FvX2xpbmtfd2ViX3NoYXJlclwiLHBvcHVwRmVhdHVyZXM6XCJsb2NhdGlvbj1ubyxyZXNpemFibGU9bm8sc3RhdHVzPW5vLHNjcm9sbGJhcnM9bm8sd2lkdGg9NDYwLGhlaWdodD02MDhcIn0pO2UuY2FsbGJhY2smJmZ1bmN0aW9uKGUsdCl7aWYoWHQuYnJvd3Nlci5tc2llKXJldHVybiB2b2lkKGNvbnNvbGUmJmNvbnNvbGUud2FybihcIktha2FvV2FybmluZzogVGhlIGNhbGxiYWNrIHBhcmFtZXRlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBJRSBicm93c2VyLlwiKSk7dmFyIG49ZnVuY3Rpb24oZSl7XCJzZW50XCI9PT1lLmRhdGEmJmUub3JpZ2luPT09UXQuc2hhcmVyRG9tYWluJiZ0KCl9O2Z0KHdpbmRvdyxcIm1lc3NhZ2VcIixuKTt2YXIgcj1zZXRJbnRlcnZhbCgoZnVuY3Rpb24oKXtlLmNsb3NlZCYmKGNsZWFySW50ZXJ2YWwociksaHQod2luZG93LFwibWVzc2FnZVwiLG4pKX0pLDFlMyl9KHIsZS5jYWxsYmFjayl9fSxzbz1mdW5jdGlvbigpe3ZhciBlPUx0KCksdD1lLm9zLG49W1wib3ByL1wiXSxyPVtcImZpcmVmb3hcIixcIktBS0FPVEFMS1wiXTtmdW5jdGlvbiBvKGUpe3dpbmRvdy50b3AubG9jYXRpb24uaHJlZj1lfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpe3ZhciBvPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2EoKSYmby1yPGUrMTAwJiZuKHQpfSksZSl9ZnVuY3Rpb24gYSgpe2Zvcih2YXIgZT1bXCJoaWRkZW5cIixcIndlYmtpdEhpZGRlblwiXSx0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWlmKHZvaWQgMCE9PWRvY3VtZW50W2VbdF1dKXJldHVybiFkb2N1bWVudFtlW3RdXTtyZXR1cm4hMH1mdW5jdGlvbiBjKGUpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7KGZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7cmV0dXJuIHQuaWQ9ZSx0LnN0eWxlLmJvcmRlcj1cIm5vbmVcIix0LnN0eWxlLndpZHRoPVwiMFwiLHQuc3R5bGUuaGVpZ2h0PVwiMFwiLHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KSx0fShcImFwcExhdW5jaGVyXCIpKS5zcmM9ZX0pLDEwMCl9cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciB1LGwsZCxwLGY9XCJmdW5jdGlvblwiPT10eXBlb2Ygcy53aWxsSW52b2tlQXBwP3Mud2lsbEludm9rZUFwcDpmdW5jdGlvbigpe30saD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLm9uQXBwTWlzc2luZz9zLm9uQXBwTWlzc2luZzpvLG09XCJmdW5jdGlvblwiPT10eXBlb2Ygcy5vblVuc3VwcG9ydGVkRW52aXJvbm1lbnQ/cy5vblVuc3VwcG9ydGVkRW52aXJvbm1lbnQ6ZnVuY3Rpb24oKXt9O2YoKSx0LmFuZHJvaWQ/KGw9ZS5icm93c2VyLmNocm9tZSYmK2UuYnJvd3Nlci52ZXJzaW9uLm1ham9yPj0yNSxkPW5ldyBSZWdFeHAobi5qb2luKFwifFwiKSxcImlcIikscD1uZXcgUmVnRXhwKHIuam9pbihcInxcIiksXCJpXCIpLChsJiYhZC50ZXN0KGUudWEpfHxwLnRlc3QoZS51YSkpJiZzLmludGVudFVSSSYmIXMudXNlVXJsU2NoZW1lP2Z1bmN0aW9uKHQpe2UuYnJvd3Nlci5jaHJvbWU/bigpOnNldFRpbWVvdXQobiwxMDApO2Z1bmN0aW9uIG4oKXt0b3AubG9jYXRpb24uaHJlZj10fX0ocy5pbnRlbnRVUkkpOnMuc3RvcmVVUkwmJih1PXMudXJsU2NoZW1lLGkoMzAwLHMuc3RvcmVVUkwsaCksYyh1KSkpOnQuaW9zJiZzLnN0b3JlVVJMP2Z1bmN0aW9uKHQsbixyLG8pe3ZhciBzPWkoNWUzLG4scik7cGFyc2VJbnQoZS5vcy52ZXJzaW9uLm1ham9yLDEwKTw4P2Z1bmN0aW9uKGUpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwoZnVuY3Rpb24gdCgpe2EoKSYmKGNsZWFyVGltZW91dChlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsdCkpfSkpfShzKTpmdW5jdGlvbihlKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLChmdW5jdGlvbiB0KCl7YSgpJiYoY2xlYXJUaW1lb3V0KGUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdCkpfSkpfShzKTtwYXJzZUludChlLm9zLnZlcnNpb24ubWFqb3IsMTApPjgmJmUub3MuaW9zPyh2b2lkIDA9PT1vP289dDpjbGVhclRpbWVvdXQocyksZnVuY3Rpb24oZSl7d2luZG93LnRvcC5sb2NhdGlvbi5ocmVmPWV9KG8pKTpjKHQpfShzLnVybFNjaGVtZSxzLnN0b3JlVVJMLGgscy51bml2ZXJzYWxMaW5rKTpzZXRUaW1lb3V0KChmdW5jdGlvbigpe20oKX0pLDEwMCl9fSgpLHVvPW5ldyBfbigxMDAsMTAwKSxsbz1cIjM2MjA1Nzk0N1wiO2Z1bmN0aW9uIHBvKGUsdCl7dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgbm8oZSx0KTtpZihKU09OLnN0cmluZ2lmeShuKS5sZW5ndGg+MWU0KXRocm93IG5ldyBubihcIkZhaWxlZCB0byBzZW5kIG1lc3NhZ2UgYmVjYXVzZSBpdCBleGNlZWRzIHRoZSBtZXNzYWdlIHNpemUgbGltaXQuIFBsZWFzZSBjb250YWN0IHRoZSBhcHAgYWRtaW5pc3RyYXRvci5cIik7cmV0dXJuIG10KG4pfSh0LGUpOyFmdW5jdGlvbihlLHQsbil7dmFyIHI9KFh0Lm9zLmlvcz9RdC50YWxrTGlua1NjaGVtZTpcIlwiKStcIj9cIitlLG89XCJpbnRlbnQ6Ly9saW5rP1wiLmNvbmNhdChlLFwiI0ludGVudDtzY2hlbWU9a2FrYW9saW5rXCIpLGk9XCJpbnRlbnQ6a2FrYW9saW5rOi8vc2VuZD9cIi5jb25jYXQoZSxcIiNJbnRlbnRcIiksYT1bL2luc3RhZ3JhbXxmYl9pYWIvZy50ZXN0KFh0LnVhKT9vOmksXCJsYXVuY2hGbGFncz0weDE0MDA4MDAwXCIsXCJcIi5jb25jYXQoITA9PT1uP1wicGFja2FnZT1cIi5jb25jYXQoUXQudGFsa0FuZHJvaWRQYWNrYWdlLFwiO1wiKTpcIlwiLFwiZW5kO1wiKV0uam9pbihcIjtcIiksYz17dXJsU2NoZW1lOnIsaW50ZW50VVJJOmEsYXBwTmFtZTpcIktha2FvVGFsa1wiLHN0b3JlVVJMOnVuKFF0LnRhbGtBbmRyb2lkUGFja2FnZSxsbyksb25VbnN1cHBvcnRlZEVudmlyb25tZW50OmZ1bmN0aW9uKCl7dChyKX19Oyghbnx8cW4oKXx8RG4oKSkmJihjLm9uQXBwTWlzc2luZz1sdCk7cW4oKSYmKGMudW5pdmVyc2FsTGluaz12b2lkIDApO3RyeXtzbyhjKX1jYXRjaChlKXt9fShuLHQuZmFpbCx0Lmluc3RhbGxUYWxrKTt2YXIgcj17dGVtcGxhdGVfbXNnOmUudGVtcGxhdGVfbXNnfHx7fSx3YXJuaW5nX21zZzplLndhcm5pbmdfbXNnfHx7fSxhcmd1bWVudF9tc2c6ZS5hcmd1bWVudF9tc2d8fHt9fTt0LnN1Y2Nlc3MociksdC5hbHdheXMocil9dmFyIGZvPXtzZW5kOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1udWxsO2lmKFh0LmJyb3dzZXIuaXBob25lJiYvdmVyc2lvbi8udGVzdChYdC51YS50b0xvd2VyQ2FzZSgpKSl7dmFyIG89bnVsbDtyPWZ1bmN0aW9uKGUpe289ZX0sdW8uc3RhcnQoKGZ1bmN0aW9uKCl7bnVsbCE9PW8mJih1by5zdG9wKCkscG8obyxlKSl9KSwoZnVuY3Rpb24oKXt2YXIgdD17ZXJyb3I6XCJ0aW1lb3V0XCIsZXJyb3JfZGVzY3JpcHRpb246XCJMSU5LX1RJTUVPVVRcIn07ZS5mYWlsKHQpLGUuYWx3YXlzKHQpfSkpfWVsc2Ugcj1wbztyZXR1cm4gSnIodCxuKS50aGVuKChmdW5jdGlvbih0KXtyKHQsZSl9KSwoZnVuY3Rpb24oZSl7dmFyIHQsbj1KU09OLnN0cmluZ2lmeShfdCh7bmFtZTpcIktBUElFcnJvclwifSxlKSk7bG9jYXRpb24uaHJlZj1cIlwiLmNvbmNhdChRdC5zaGFyZXJEb21haW4sXCIvcGlja2VyL2ZhaWxlZD9hcHBfa2V5PVwiKS5jb25jYXQoZW4oKSxcIiZlcnJvcj1cIikuY29uY2F0KCh0PW4sd2luZG93LmJ0b2EodCkucmVwbGFjZSgvXFwrL2csXCItXCIpLnJlcGxhY2UoL1xcLy9nLFwiX1wiKS5yZXBsYWNlKC89L2csXCJcIikpKX0pKX19LGhvPXtzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqLGNhbGxiYWNrOmosaW5zdGFsbFRhbGs6UWUsdGhyb3VnaFRhbGs6UWUsZXh0cmFzOnAsc2VydmVyQ2FsbGJhY2tBcmdzOmd0KFtmdW5jdGlvbihlKXt0cnl7SlNPTi5wYXJzZShlKX1jYXRjaChlKXtyZXR1cm4hMX1yZXR1cm4hMH0scF0pfSxtbz17c3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdCxpbnN0YWxsVGFsazohMSx0aHJvdWdoVGFsazohMH07ZnVuY3Rpb24gdm8oZSl7aWYoIWYoZSkpcmV0dXJuITE7aWYoZS5sZW5ndGg+Mil0aHJvdyBuZXcgbm4oJ0lsbGVnYWwgYXJndW1lbnQgZm9yIFwiYnV0dG9uc1wiIGluIFNoYXJlOiBzaXplIG9mIGJ1dHRvbnMgc2hvdWxkIGJlIHVwIHRvIDInKTtyZXR1cm4hMH12YXIgZ289e3JlcXVpcmVkOntvYmplY3RUeXBlOmZ1bmN0aW9uKGUpe3JldHVyblwiZmVlZFwiPT09ZX0sY29udGVudDpwfSxvcHRpb25hbDpSZSh7aXRlbUNvbnRlbnQ6cCxzb2NpYWw6cCxidXR0b25UaXRsZTpZZSxidXR0b25zOnZvfSxobyksZGVmYXVsdHM6bW99LHlvPXtyZXF1aXJlZDp7b2JqZWN0VHlwZTpmdW5jdGlvbihlKXtyZXR1cm5cImxpc3RcIj09PWV9LGhlYWRlclRpdGxlOlllLGhlYWRlckxpbms6cCxjb250ZW50czpmdW5jdGlvbihlKXtpZighZihlKSlyZXR1cm4hMTtpZihlLmxlbmd0aDwyfHxlLmxlbmd0aD4zKXRocm93IG5ldyBubignSWxsZWdhbCBhcmd1bWVudCBmb3IgXCJjb250ZW50c1wiIGluIFNoYXJlOiBzaXplIG9mIGNvbnRlbnRzIHNob3VsZCBiZSBtb3JlIHRoYW4gMSBhbmQgdXAgdG8gMycpO3JldHVybiEwfX0sb3B0aW9uYWw6UmUoe2J1dHRvblRpdGxlOlllLGJ1dHRvbnM6dm8saGVhZGVySW1hZ2VVcmw6WWUsaGVhZGVySW1hZ2VXaWR0aDpldCxoZWFkZXJJbWFnZUhlaWdodDpldH0saG8pLGRlZmF1bHRzOm1vfSxibz17cmVxdWlyZWQ6e29iamVjdFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJjb21tZXJjZVwiPT09ZX0sY29udGVudDpwLGNvbW1lcmNlOnB9LG9wdGlvbmFsOlJlKHtidXR0b25UaXRsZTpZZSxidXR0b25zOnZvfSxobyksZGVmYXVsdHM6bW99LF9vPXtyZXF1aXJlZDp7b2JqZWN0VHlwZTpmdW5jdGlvbihlKXtyZXR1cm5cImxvY2F0aW9uXCI9PT1lfSxjb250ZW50OnAsYWRkcmVzczpZZX0sb3B0aW9uYWw6UmUoe2FkZHJlc3NUaXRsZTpZZSxzb2NpYWw6cCxidXR0b25UaXRsZTpZZSxidXR0b25zOnZvfSxobyksZGVmYXVsdHM6bW99LGtvPXtyZXF1aXJlZDp7b2JqZWN0VHlwZTpmdW5jdGlvbihlKXtyZXR1cm5cInRleHRcIj09PWV9LHRleHQ6WWUsbGluazpwfSxvcHRpb25hbDpSZSh7YnV0dG9uVGl0bGU6WWUsYnV0dG9uczp2b30saG8pLGRlZmF1bHRzOm1vfSx3bz17cmVxdWlyZWQ6e3JlcXVlc3RVcmw6WWV9LG9wdGlvbmFsOlJlKHt0ZW1wbGF0ZUlkOmV0LHRlbXBsYXRlQXJnczpwfSxobyksZGVmYXVsdHM6UmUoe3RlbXBsYXRlQXJnczp7fX0sbW8pfSxTbz17cmVxdWlyZWQ6e3RlbXBsYXRlSWQ6ZXR9LG9wdGlvbmFsOlJlKHt0ZW1wbGF0ZUFyZ3M6cH0saG8pLGRlZmF1bHRzOlJlKHt0ZW1wbGF0ZUFyZ3M6e319LG1vKX07ZnVuY3Rpb24geG8oZSl7cmV0dXJuIEdlKHtyZXF1aXJlZDpSZSh7Y29udGFpbmVyOmd0KFtaZSxZZV0pfSxlLnJlcXVpcmVkKX0sZSl9dmFyIE9vPXtkZWZhdWx0T2JqZWN0VHlwZXM6W1wiZmVlZFwiLFwibGlzdFwiLFwiY29tbWVyY2VcIixcImxvY2F0aW9uXCIsXCJ0ZXh0XCJdLHNlbmRGZWVkOmdvLGNyZWF0ZUZlZWRCdXR0b246eG8oZ28pLHNlbmRMaXN0OnlvLGNyZWF0ZUxpc3RCdXR0b246eG8oeW8pLHNlbmRDb21tZXJjZTpibyxjcmVhdGVDb21tZXJjZUJ1dHRvbjp4byhibyksc2VuZExvY2F0aW9uOl9vLGNyZWF0ZUxvY2F0aW9uQnV0dG9uOnhvKF9vKSxzZW5kVGV4dDprbyxjcmVhdGVUZXh0QnV0dG9uOnhvKGtvKSxzZW5kU2NyYXA6d28sY3JlYXRlU2NyYXBCdXR0b246eG8od28pLHNlbmRDdXN0b206U28sY3JlYXRlQ3VzdG9tQnV0dG9uOnhvKFNvKSx1cGxvYWRJbWFnZTp7cmVxdWlyZWQ6e2ZpbGU6cH19LGRlbGV0ZUltYWdlOntyZXF1aXJlZDp7aW1hZ2VVcmw6WWV9fSxzY3JhcEltYWdlOntyZXF1aXJlZDp7aW1hZ2VVcmw6WWV9fX07ZnVuY3Rpb24gam8oZSx0KXt2YXIgbj1wdChlLmNvbnRhaW5lcik7aWYoIW4pdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBLYWthb1RhbGsgc2hhcmluZzogcGFzcyBpbiBlbGVtZW50IG9yIGlkXCIpO3ZhciByPWZ1bmN0aW9uKG4pe24ucHJldmVudERlZmF1bHQoKSxuLnN0b3BQcm9wYWdhdGlvbigpLFRvKGUsdCl9O2Z0KG4sXCJjbGlja1wiLHIpLENvLnB1c2goKGZ1bmN0aW9uKCl7aHQobixcImNsaWNrXCIscil9KSl9dmFyIEFvPXtkZWZhdWx0OnttYWtlTGlua0Z1bmM6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldygwLG9vW1wiXCIuY29uY2F0KE5yKGUub2JqZWN0VHlwZSksXCJMaW5rXCIpXSkoZSl9LHJlcXVlc3RVcmw6XCIvdjIvYXBpL2tha2FvbGluay90YWxrL3RlbXBsYXRlL2RlZmF1bHRcIn0sc2NyYXA6e21ha2VMaW5rRnVuYzpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGlvKGUpfSxyZXF1ZXN0VXJsOlwiL3YyL2FwaS9rYWthb2xpbmsvdGFsay90ZW1wbGF0ZS9zY3JhcFwifSxjdXN0b206e21ha2VMaW5rRnVuYzpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGFvKGUpfSxyZXF1ZXN0VXJsOlwiL3YyL2FwaS9rYWthb2xpbmsvdGFsay90ZW1wbGF0ZS92YWxpZGF0ZVwifX07ZnVuY3Rpb24gVG8oZSx0KXt2YXIgbj1Bb1t0XSxyPW4ubWFrZUxpbmtGdW5jLG89bi5yZXF1ZXN0VXJsLGk9cihlKSxhPS9vcHJcXC98b3B0XFwvfGh1YXdlaS9nLnRlc3QoWHQudWEpLGM9WHQub3MuaW9zJiZcInRhYmxldFwiPT09WHQucGxhdGZvcm07JHR8fCFhJiZlLnRocm91Z2hUYWxrJiYoXCJtb2JpbGVcIj09PVh0LnBsYXRmb3JtfHxjKT9mby5zZW5kKGUsbyxpKTpjby5zZW5kKGUsdCxpKX12YXIgQ289W107dmFyIElvPXJuKFtPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVEZWZhdWx0QnV0dG9uOmZ1bmN0aW9uKGUpe2lmKCFlLm9iamVjdFR5cGV8fCF2dChPby5kZWZhdWx0T2JqZWN0VHlwZXMpKGUub2JqZWN0VHlwZSkpdGhyb3cgbmV3IG5uKFwib2JqZWN0VHlwZSBzaG91bGQgYmUgb25lIG9mIChcIi5jb25jYXQoT28uZGVmYXVsdE9iamVjdFR5cGVzLmpvaW4oXCIsIFwiKSxcIilcIikpO2pvKGU9Y24oZSxPb1tcImNyZWF0ZVwiLmNvbmNhdChOcihlLm9iamVjdFR5cGUpLFwiQnV0dG9uXCIpXSxcIlNoYXJlLmNyZWF0ZURlZmF1bHRCdXR0b25cIiksXCJkZWZhdWx0XCIpfSxzZW5kRGVmYXVsdDpmdW5jdGlvbihlKXtpZighZS5vYmplY3RUeXBlfHwhdnQoT28uZGVmYXVsdE9iamVjdFR5cGVzKShlLm9iamVjdFR5cGUpKXRocm93IG5ldyBubihcIm9iamVjdFR5cGUgc2hvdWxkIGJlIG9uZSBvZiAoXCIuY29uY2F0KE9vLmRlZmF1bHRPYmplY3RUeXBlcy5qb2luKFwiLCBcIiksXCIpXCIpKTtUbyhlPWNuKGUsT29bXCJzZW5kXCIuY29uY2F0KE5yKGUub2JqZWN0VHlwZSkpXSxcIlNoYXJlLnNlbmREZWZhdWx0XCIpLFwiZGVmYXVsdFwiKX0sY3JlYXRlU2NyYXBCdXR0b246ZnVuY3Rpb24oZSl7am8oZT1jbihlLE9vLmNyZWF0ZVNjcmFwQnV0dG9uLFwiU2hhcmUuY3JlYXRlU2NyYXBCdXR0b25cIiksXCJzY3JhcFwiKX0sc2VuZFNjcmFwOmZ1bmN0aW9uKGUpe1RvKGU9Y24oZSxPby5zZW5kU2NyYXAsXCJTaGFyZS5zZW5kU2NyYXBcIiksXCJzY3JhcFwiKX0sY3JlYXRlQ3VzdG9tQnV0dG9uOmZ1bmN0aW9uKGUpe2pvKGU9Y24oZSxPby5jcmVhdGVDdXN0b21CdXR0b24sXCJTaGFyZS5jcmVhdGVDdXN0b21CdXR0b25cIiksXCJjdXN0b21cIil9LHNlbmRDdXN0b206ZnVuY3Rpb24oZSl7VG8oZT1jbihlLE9vLnNlbmRDdXN0b20sXCJTaGFyZS5zZW5kQ3VzdG9tXCIpLFwiY3VzdG9tXCIpfSxjbGVhbnVwOmZ1bmN0aW9uKCl7b24oQ28pfX0pLE9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLHVwbG9hZEltYWdlOmZ1bmN0aW9uKGUpe3JldHVybiBKcihcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL3VwbG9hZFwiLHtmaWxlOihlPWNuKGUsT28udXBsb2FkSW1hZ2UsXCJTaGFyZS51cGxvYWRJbWFnZVwiKSkuZmlsZX0pfSxkZWxldGVJbWFnZTpmdW5jdGlvbihlKXtyZXR1cm4gSnIoXCIvdjIvYXBpL3RhbGsvbWVzc2FnZS9pbWFnZS9kZWxldGVcIix7aW1hZ2VfdXJsOihlPWNuKGUsT28uZGVsZXRlSW1hZ2UsXCJTaGFyZS5kZWxldGVJbWFnZVwiKSkuaW1hZ2VVcmx9KX0sc2NyYXBJbWFnZTpmdW5jdGlvbihlKXtyZXR1cm4gSnIoXCIvdjIvYXBpL3RhbGsvbWVzc2FnZS9pbWFnZS9zY3JhcFwiLHtpbWFnZV91cmw6KGU9Y24oZSxPby5zY3JhcEltYWdlLFwiU2hhcmUuc2NyYXBJbWFnZVwiKSkuaW1hZ2VVcmx9KX19KV0pLFBvPVwid2lkdGg9MzUwLCBoZWlnaHQ9NTEwXCI7ZnVuY3Rpb24gRm8oZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiI1wiKTt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO3JldHVybiBvLnNldEF0dHJpYnV0ZShcInNyY1wiLHQpLG8uc2V0QXR0cmlidXRlKFwidGl0bGVcIixuKSxvLnNldEF0dHJpYnV0ZShcImFsdFwiLG4pLGUuc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzJiZvLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLFt0LnJlcGxhY2UoXCIucG5nXCIsXCJfMlgucG5nIDJ4XCIpLHQucmVwbGFjZShcIi5wbmdcIixcIl8zWC5wbmcgM3hcIildLmpvaW4oXCIsIFwiKSksci5hcHBlbmRDaGlsZChvKSxyfWZ1bmN0aW9uIEJvKGUsdCl7cmV0dXJuIG10KF90KHthcGlfdmVyOmUsa2FrYW9fYWdlbnQ6WXQsYXBwX2tleTplbigpLHJlZmVyZXI6V3QrbG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNofSx0JiZ7bGFuZzp0fSkpfXZhciBFbz1bXCJzbWFsbFwiLFwibGFyZ2VcIl0sVW89W1wieWVsbG93XCIsXCJtb25vXCJdLFJvPVtcInBjXCIsXCJtb2JpbGVcIl0sTG89W1wiY29uc3VsdFwiLFwicXVlc3Rpb25cIl0sTW89W1wia29cIixcImVuXCIsXCJqYVwiXSx6bz17Y3JlYXRlQWRkQ2hhbm5lbEJ1dHRvbjp7cmVxdWlyZWQ6e2NvbnRhaW5lcjpndChbWmUsWWVdKSxjaGFubmVsUHVibGljSWQ6WWV9LG9wdGlvbmFsOntzaXplOnZ0KEVvKSxsYW5nOnZ0KE1vKSxzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6UWV9LGRlZmF1bHRzOntzaXplOkVvWzBdLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczohMX19LGFkZENoYW5uZWw6e3JlcXVpcmVkOntjaGFubmVsUHVibGljSWQ6WWV9LG9wdGlvbmFsOntsYW5nOnZ0KE1vKX19LGNyZWF0ZUNoYXRCdXR0b246e3JlcXVpcmVkOntjb250YWluZXI6Z3QoW1plLFllXSksY2hhbm5lbFB1YmxpY0lkOlllfSxvcHRpb25hbDp7c2l6ZTp2dChFbyksY29sb3I6dnQoVW8pLHNoYXBlOnZ0KFJvKSx0aXRsZTp2dChMbyksbGFuZzp2dChNbyksc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlFlfSxkZWZhdWx0czp7c2l6ZTpFb1swXSxjb2xvcjpVb1swXSxzaGFwZTpSb1swXSx0aXRsZTpMb1swXSxzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6ITF9fSxjaGF0OntyZXF1aXJlZDp7Y2hhbm5lbFB1YmxpY0lkOlllfSxvcHRpb25hbDp7bGFuZzp2dChNbyl9fX07ZnVuY3Rpb24gRG8oZSl7dmFyIHQ9XCJcIi5jb25jYXQoUXQuY2hhbm5lbCxcIi9cIikuY29uY2F0KGUuY2hhbm5lbFB1YmxpY0lkLFwiL2ZyaWVuZFwiKTtudWxsIT09ZW4oKSYmKHQrPVwiP1wiLmNvbmNhdChCbyhcIjEuMVwiLGUubGFuZykpKSxwbih0LFwiY2hhbm5lbF9hZGRfc29jaWFsX3BsdWdpblwiLFBvKX1mdW5jdGlvbiBxbyhlKXt2YXIgdD1cIlwiLmNvbmNhdChRdC5jaGFubmVsLFwiL1wiKS5jb25jYXQoZS5jaGFubmVsUHVibGljSWQsXCIvY2hhdFwiKTtudWxsIT09ZW4oKSYmKHQrPVwiP1wiLmNvbmNhdChCbyhcIjEuMVwiLGUubGFuZykpKSxwbih0LFwiY2hhbm5lbF9jaGF0X3NvY2lhbF9wbHVnaW5cIixQbyl9dmFyIE5vPVtdO3ZhciBLbz1ybihbT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlQWRkQ2hhbm5lbEJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBDaGFubmVsLmNyZWF0ZUFkZENoYW5uZWxCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse2NoYW5uZWxQdWJsaWNJZDpcImRhdGEtY2hhbm5lbC1wdWJsaWMtaWRcIixzaXplOlwiZGF0YS1zaXplXCIsc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlwiZGF0YS1zdXBwb3J0LW11bHRpcGxlLWRlbnNpdGllc1wifSk7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQ9XCJmcmllbmRhZGRfXCIuY29uY2F0KGUuc2l6ZSxcIl95ZWxsb3dfcmVjdC5wbmdcIik7cmV0dXJuXCJcIi5jb25jYXQoUXQuY2hhbm5lbEljb24sXCIvY2hhbm5lbC9cIikuY29uY2F0KHQpfShlPWNuKGUsem8uY3JlYXRlQWRkQ2hhbm5lbEJ1dHRvbixcIkNoYW5uZWwuY3JlYXRlQWRkQ2hhbm5lbEJ1dHRvblwiKSkscj1GbyhlLG4sXCLsubTsubTsmKTthqEg7LGE64SQIOy2lOqwgCDrsoTtirxcIik7dC5hcHBlbmRDaGlsZChyKTt2YXIgbz1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksRG8oZSl9O2Z0KHIsXCJjbGlja1wiLG8pLE5vLnB1c2goKGZ1bmN0aW9uKCl7aHQocixcImNsaWNrXCIsbyksdC5yZW1vdmVDaGlsZChyKX0pKX0sYWRkQ2hhbm5lbDpmdW5jdGlvbihlKXtEbyhlPWNuKGUsem8uYWRkQ2hhbm5lbCxcIkNoYW5uZWwuYWRkQ2hhbm5lbFwiKSl9LGNyZWF0ZUNoYXRCdXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9cHQoZS5jb250YWluZXIpO2lmKCF0KXRocm93IG5ldyBubihcImNvbnRhaW5lciBpcyByZXF1aXJlZCBmb3IgQ2hhbm5lbC5jcmVhdGVDaGF0QnV0dG9uOiBwYXNzIGluIGVsZW1lbnQgb3IgaWRcIik7Zm4oZSx0LHtjaGFubmVsUHVibGljSWQ6XCJkYXRhLWNoYW5uZWwtcHVibGljLWlkXCIsc2l6ZTpcImRhdGEtc2l6ZVwiLGNvbG9yOlwiZGF0YS1jb2xvclwiLHNoYXBlOlwiZGF0YS1zaGFwZVwiLHRpdGxlOlwiZGF0YS10aXRsZVwiLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczpcImRhdGEtc3VwcG9ydC1tdWx0aXBsZS1kZW5zaXRpZXNcIn0pO3ZhciBuPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCIuY29uY2F0KGUudGl0bGUsXCJfXCIpLmNvbmNhdChlLnNpemUsXCJfXCIpLmNvbmNhdChlLmNvbG9yLFwiX1wiKS5jb25jYXQoZS5zaGFwZSxcIi5wbmdcIik7cmV0dXJuXCJcIi5jb25jYXQoUXQuY2hhbm5lbEljb24sXCIvY2hhbm5lbC9cIikuY29uY2F0KHQpfShlPWNuKGUsem8uY3JlYXRlQ2hhdEJ1dHRvbixcIkNoYW5uZWwuY3JlYXRlQ2hhdEJ1dHRvblwiKSkscj1GbyhlLG4sXCLsubTsubTsmKTthqEg7LGE64SQIDE6MSDssYTtjIUg67KE7Yq8XCIpO3QuYXBwZW5kQ2hpbGQocik7dmFyIG89ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHFvKGUpfTtmdChyLFwiY2xpY2tcIixvKSxOby5wdXNoKChmdW5jdGlvbigpe2h0KHIsXCJjbGlja1wiLG8pLHQucmVtb3ZlQ2hpbGQocil9KSl9LGNoYXQ6ZnVuY3Rpb24oZSl7cW8oZT1jbihlLHpvLmNoYXQsXCJDaGFubmVsLmNoYXRcIikpfSxjbGVhbnVwOmZ1bmN0aW9uKCl7b24oTm8pfX0pXSksSG89e2NyZWF0ZUFkZEZyaWVuZEJ1dHRvbjp7cmVxdWlyZWQ6e2NvbnRhaW5lcjpndChbWmUsWWVdKSxwbHVzRnJpZW5kSWQ6WWV9LG9wdGlvbmFsOntzaXplOnZ0KFtcInNtYWxsXCIsXCJsYXJnZVwiXSksY29sb3I6dnQoW1wieWVsbG93XCIsXCJibGFja1wiXSksc2hhcGU6dnQoW1wicmVjdFwiLFwicm91bmRcIl0pLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczpRZX0sZGVmYXVsdHM6e3NpemU6XCJzbWFsbFwiLGNvbG9yOlwieWVsbG93XCIsc2hhcGU6XCJyZWN0XCIsc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOiExfX0sYWRkRnJpZW5kOntyZXF1aXJlZDp7cGx1c0ZyaWVuZElkOlllfX0sY3JlYXRlQ2hhdEJ1dHRvbjp7cmVxdWlyZWQ6e2NvbnRhaW5lcjpndChbWmUsWWVdKSxwbHVzRnJpZW5kSWQ6WWV9LG9wdGlvbmFsOntzaXplOnZ0KFtcInNtYWxsXCIsXCJsYXJnZVwiXSksY29sb3I6dnQoW1wieWVsbG93XCIsXCJtb25vXCJdKSxzaGFwZTp2dChbXCJwY1wiLFwibW9iaWxlXCJdKSx0aXRsZTp2dChbXCJjb25zdWx0XCIsXCJxdWVzdGlvblwiXSksc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlFlfSxkZWZhdWx0czp7c2l6ZTpcInNtYWxsXCIsY29sb3I6XCJ5ZWxsb3dcIixzaGFwZTpcInBjXCIsdGl0bGU6XCJjb25zdWx0XCIsc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOiExfX0sY2hhdDp7cmVxdWlyZWQ6e3BsdXNGcmllbmRJZDpZZX19fTtmdW5jdGlvbiBKbygpe2NvbnNvbGUmJmNvbnNvbGUud2FybihcIktha2FvV2FybmluZzogS2FrYW8uUGx1c0ZyaWVuZCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIEtha2FvLkNoYW5uZWwgaW5zdGVhZC5cIil9ZnVuY3Rpb24gV28oZSl7dmFyIHQ9XCJcIi5jb25jYXQoUXQuY2hhbm5lbCxcIi9cIikuY29uY2F0KGUucGx1c0ZyaWVuZElkLFwiL2ZyaWVuZFwiKTtudWxsIT09ZW4oKSYmKHQrPVwiP1wiLmNvbmNhdChCbyhcIjEuMFwiKSkpLHBuKHQsXCJwbHVzX2ZyaWVuZF9hZGRfc29jaWFsX3BsdWdpblwiLFBvKX1mdW5jdGlvbiBYbyhlKXt2YXIgdD1cIlwiLmNvbmNhdChRdC5jaGFubmVsLFwiL1wiKS5jb25jYXQoZS5wbHVzRnJpZW5kSWQsXCIvY2hhdFwiKTtudWxsIT09ZW4oKSYmKHQrPVwiP1wiLmNvbmNhdChCbyhcIjEuMFwiKSkpLHBuKHQsXCJwbHVzX2ZyaWVuZF9jaGF0X3NvY2lhbF9wbHVnaW5cIixQbyl9dmFyICRvPVtdO3ZhciBHbz1ybihbT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlQWRkRnJpZW5kQnV0dG9uOmZ1bmN0aW9uKGUpe0pvKCk7dmFyIHQ9cHQoZS5jb250YWluZXIpO2lmKCF0KXRocm93IG5ldyBubihcImNvbnRhaW5lciBpcyByZXF1aXJlZCBmb3IgUGx1c0ZyaWVuZC5jcmVhdGVBZGRGcmllbmRCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse3BsdXNGcmllbmRJZDpcImRhdGEtcGx1c2ZyaWVuZC1pZFwiLHNpemU6XCJkYXRhLXNpemVcIixjb2xvcjpcImRhdGEtY29sb3JcIixzaGFwZTpcImRhdGEtc2hhcGVcIixzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6XCJkYXRhLXN1cHBvcnQtbXVsdGlwbGUtZGVuc2l0aWVzXCJ9KTt2YXIgbj1mdW5jdGlvbihlKXt2YXIgdD1cImZyaWVuZGFkZF9cIi5jb25jYXQoZS5zaXplLFwiX1wiKS5jb25jYXQoZS5jb2xvcixcIl9cIikuY29uY2F0KGUuc2hhcGUsXCIucG5nXCIpO3JldHVyblwiXCIuY29uY2F0KFF0LmNoYW5uZWxJY29uLFwiL3BsdXNmcmllbmQvXCIpLmNvbmNhdCh0KX0oZT1jbihlLEhvLmNyZWF0ZUFkZEZyaWVuZEJ1dHRvbixcIlBsdXNGcmllbmQuY3JlYXRlQWRkRnJpZW5kQnV0dG9uXCIpKSxyPUZvKGUsbixcIu2UjOufrOyKpOy5nOq1rCDsuZzqtawg7LaU6rCAIOuyhO2KvFwiKTt0LmFwcGVuZENoaWxkKHIpO3ZhciBvPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxXbyhlKX07ZnQocixcImNsaWNrXCIsbyksJG8ucHVzaCgoZnVuY3Rpb24oKXtodChyLFwiY2xpY2tcIixvKSx0LnJlbW92ZUNoaWxkKHIpfSkpfSxhZGRGcmllbmQ6ZnVuY3Rpb24oZSl7Sm8oKSxXbyhlPWNuKGUsSG8uYWRkRnJpZW5kLFwiUGx1c0ZyaWVuZC5hZGRGcmllbmRcIikpfSxjcmVhdGVDaGF0QnV0dG9uOmZ1bmN0aW9uKGUpe0pvKCk7dmFyIHQ9cHQoZS5jb250YWluZXIpO2lmKCF0KXRocm93IG5ldyBubihcImNvbnRhaW5lciBpcyByZXF1aXJlZCBmb3IgUGx1c0ZyaWVuZC5jcmVhdGVDaGF0QnV0dG9uOiBwYXNzIGluIGVsZW1lbnQgb3IgaWRcIik7Zm4oZSx0LHtwbHVzRnJpZW5kSWQ6XCJkYXRhLXBsdXNmcmllbmQtaWRcIixzaXplOlwiZGF0YS1zaXplXCIsY29sb3I6XCJkYXRhLWNvbG9yXCIsc2hhcGU6XCJkYXRhLXNoYXBlXCIsdGl0bGU6XCJkYXRhLXRpdGxlXCIsc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlwiZGF0YS1zdXBwb3J0LW11bHRpcGxlLWRlbnNpdGllc1wifSk7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIi5jb25jYXQoZS50aXRsZSxcIl9cIikuY29uY2F0KGUuc2l6ZSxcIl9cIikuY29uY2F0KGUuY29sb3IsXCJfXCIpLmNvbmNhdChlLnNoYXBlLFwiLnBuZ1wiKTtyZXR1cm5cIlwiLmNvbmNhdChRdC5jaGFubmVsSWNvbixcIi9wbHVzZnJpZW5kL1wiKS5jb25jYXQodCl9KGU9Y24oZSxIby5jcmVhdGVDaGF0QnV0dG9uLFwiUGx1c0ZyaWVuZC5jcmVhdGVDaGF0QnV0dG9uXCIpKSxyPUZvKGUsbixcIu2UjOufrOyKpOy5nOq1rCAxOjEg7LGE7YyFIOuyhO2KvFwiKTt0LmFwcGVuZENoaWxkKHIpO3ZhciBvPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxYbyhlKX07ZnQocixcImNsaWNrXCIsbyksJG8ucHVzaCgoZnVuY3Rpb24oKXtodChyLFwiY2xpY2tcIixvKSx0LnJlbW92ZUNoaWxkKHIpfSkpfSxjaGF0OmZ1bmN0aW9uKGUpe0pvKCksWG8oZT1jbihlLEhvLmNoYXQsXCJQbHVzRnJpZW5kLmNoYXRcIikpfSxjbGVhbnVwOmZ1bmN0aW9uKCl7b24oJG8pfX0pXSksVm89e3JlcXVpcmVkOnt0aXRsZTpZZX0sb3B0aW9uYWw6e2Rlc2M6WWUsbmFtZTpZZSxpbWFnZXM6Zix0eXBlOlllfSxkZWZhdWx0czp7dHlwZTpcIndlYnNpdGVcIn0sYWZ0ZXI6ZnVuY3Rpb24oZSl7ZS5pbWFnZXMmJihlLmltYWdldXJsPWUuaW1hZ2VzLGRlbGV0ZSBlLmltYWdlcyl9fSxZbz17Y3JlYXRlU2hhcmVCdXR0b246e3JlcXVpcmVkOntjb250YWluZXI6Z3QoW1plLFllXSl9LG9wdGlvbmFsOnt1cmw6WWUsdGV4dDpZZX0sZGVmYXVsdHM6e3VybDpsb2NhdGlvbi5ocmVmfX0sc2hhcmU6e29wdGlvbmFsOnt1cmw6WWUsdGV4dDpZZX0sZGVmYXVsdHM6e3VybDpsb2NhdGlvbi5ocmVmfX0sb3Blbjp7b3B0aW9uYWw6e3VybDpZZSx0ZXh0OlllLHVybEluZm86ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJiEhY24oZSxWbyxcIlN0b3J5Lm9wZW5cIil9LGluc3RhbGw6UWV9LGRlZmF1bHRzOnt1cmw6bG9jYXRpb24uaHJlZixpbnN0YWxsOiExfX0sY3JlYXRlRm9sbG93QnV0dG9uOntyZXF1aXJlZDp7Y29udGFpbmVyOmd0KFtaZSxZZV0pLGlkOlllfSxvcHRpb25hbDp7c2hvd0ZvbGxvd2VyQ291bnQ6UWUsdHlwZTp2dChbXCJob3Jpem9udGFsXCIsXCJ2ZXJ0aWNhbFwiXSl9LGRlZmF1bHRzOntzaG93Rm9sbG93ZXJDb3VudDohMCx0eXBlOlwiaG9yaXpvbnRhbFwifSxhZnRlcjpmdW5jdGlvbihlKXtcIkBcIiE9PWUuaWRbMF0mJihlLmlkPVwiQFwiLmNvbmNhdChlLmlkKSl9fX07ZnVuY3Rpb24gUW8oZSl7dmFyIHQ9UmUoe3VybDplLnVybH0sZWkoKSk7ZS50ZXh0JiYodC50ZXh0PWUudGV4dCkscG4oXCJcIi5jb25jYXQoUXQuc3RvcnlTaGFyZSxcIj9cIikuY29uY2F0KG10KHQpKSxcImtha2Fvc3Rvcnlfc29jaWFsX3BsdWdpblwiLFwid2lkdGg9NjcwLCBoZWlnaHQ9ODAwLCBzY3JvbGxiYXJzPXllc1wiKX12YXIgWm89MDtmdW5jdGlvbiBlaSgpe3ZhciBlPXtrYWthb19hZ2VudDpZdH07cmV0dXJuIG51bGwhPT1lbigpJiYoZS5hcHBfa2V5PWVuKCkpLGV9dmFyIHRpPVtdO3ZhciBuaT1ybihbT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlU2hhcmVCdXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9cHQoZS5jb250YWluZXIpO2lmKCF0KXRocm93IG5ldyBubihcImNvbnRhaW5lciBpcyByZXF1aXJlZCBmb3IgU3RvcnkuY3JlYXRlU2hhcmVCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse3VybDpcImRhdGEtdXJsXCJ9KSxlPWNuKGUsWW8uY3JlYXRlU2hhcmVCdXR0b24sXCJTdG9yeS5jcmVhdGVTaGFyZUJ1dHRvblwiKTt2YXIgbj1mdW5jdGlvbihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiI1wiKTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO3JldHVybiByLnNldEF0dHJpYnV0ZShcInNyY1wiLGUpLHIuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0KSxyLnNldEF0dHJpYnV0ZShcImFsdFwiLHQpLG4uYXBwZW5kQ2hpbGQociksbn0oUXQuc3RvcnlJY29uLFwi7Lm07Lm07Jik7Iqk7Yag66asIOybuSDqs7XsnKAg67KE7Yq8XCIpO3QuYXBwZW5kQ2hpbGQobik7dmFyIHI9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLFFvKGUpfTtmdChuLFwiY2xpY2tcIixyKSx0aS5wdXNoKChmdW5jdGlvbigpe2h0KG4sXCJjbGlja1wiLHIpLHQucmVtb3ZlQ2hpbGQobil9KSl9LHNoYXJlOmZ1bmN0aW9uKGUpe1FvKGU9Y24oZSxZby5zaGFyZSxcIlN0b3J5LnNoYXJlXCIpKX0sb3BlbjpmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD1sb2NhdGlvbi5ob3N0bmFtZXx8XCJcIixuPVJlKHthcGl2ZXI6XCIxLjBcIixhcHB2ZXI6R3QsYXBwaWQ6dCxhcHBuYW1lOnQscG9zdDplLnRleHQ/XCJcIi5jb25jYXQoZS50ZXh0LFwiXFxuXCIpLmNvbmNhdChlLnVybCk6ZS51cmx9LGVpKCkpO2UudXJsSW5mbyYmKG4udXJsaW5mbz1KU09OLnN0cmluZ2lmeShlLnVybEluZm8pLG4uYXBwbmFtZT1lLnVybEluZm8ubmFtZXx8bi5hcHBuYW1lKTtyZXR1cm5cIlwiLmNvbmNhdChRdC5zdG9yeVBvc3RTY2hlbWUsXCI/XCIpLmNvbmNhdChtdChuKSl9KGU9Y24oZSxZby5vcGVuLFwiU3Rvcnkub3BlblwiKSksbj17dXJsU2NoZW1lOnQsaW50ZW50VVJJOltcImludGVudDpcIi5jb25jYXQodCxcIiNJbnRlbnRcIiksXCJcIi5jb25jYXQoZS5pbnN0YWxsP1wicGFja2FnZT1jb20ua2FrYW8uc3Rvcnk7XCI6XCJcIixcImVuZDtcIildLmpvaW4oXCI7XCIpLGFwcE5hbWU6XCJLYWthb1N0b3J5XCIsc3RvcmVVUkw6dW4oXCJjb20ua2FrYW8uc3RvcnlcIixcIjQ4NjI0NDYwMVwiKSxvblVuc3VwcG9ydGVkRW52aXJvbm1lbnQ6ZnVuY3Rpb24oKXtlLmZhaWwmJmUuZmFpbCgpfX07dHJ5e3NvKG4pfWNhdGNoKGUpe319LGNyZWF0ZUZvbGxvd0J1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBTdG9yeS5jcmVhdGVGb2xsb3dCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse2lkOlwiZGF0YS1pZFwiLHNob3dGb2xsb3dlckNvdW50OlwiZGF0YS1zaG93LWZvbGxvd2VyLWNvdW50XCIsdHlwZTpcImRhdGEtdHlwZVwifSk7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQ9Wm8rKyxuPWUuc2hvd0ZvbGxvd2VyQ291bnQmJlwiaG9yaXpvbnRhbFwiPT09ZS50eXBlPzg1OjU5LHI9ZS5zaG93Rm9sbG93ZXJDb3VudCYmXCJ2ZXJ0aWNhbFwiPT09ZS50eXBlPzQ2OjIwLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtvLnNyYz1mdW5jdGlvbihlLHQpe3ZhciBuPVJlKHtpZDplLmlkLHR5cGU6ZS50eXBlLGhpZGVGb2xsb3dlcjohZS5zaG93Rm9sbG93ZXJDb3VudCxmcmFtZUlkOnR9LGVpKCkpO3JldHVyblwiXCIuY29uY2F0KFF0LnN0b3J5Q2hhbm5lbEZvbGxvdyxcIj9cIikuY29uY2F0KG10KG4pKX0oZSx0KSxvLnNldEF0dHJpYnV0ZShcImZyYW1lYm9yZGVyXCIsXCIwXCIpLG8uc2V0QXR0cmlidXRlKFwibWFyZ2lud2lkdGhcIixcIjBcIiksby5zZXRBdHRyaWJ1dGUoXCJtYXJnaW5oZWlnaHRcIixcIjBcIiksby5zZXRBdHRyaWJ1dGUoXCJzY3JvbGxpbmdcIixcIm5vXCIpLG8uc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIndpZHRoOlwiLmNvbmNhdChuLFwicHg7IGhlaWdodDpcIikuY29uY2F0KHIsXCJweDtcIikpO3ZhciBpPWZ1bmN0aW9uKGUpe2lmKGUuZGF0YSYmL1xcLmtha2FvXFwuY29tJC8udGVzdChlLm9yaWdpbikmJlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEpe3ZhciBpPVB0KGF0KGUuZGF0YS5zcGxpdChcIixcIiksKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlLDEwKX0pKSwzKSxhPWlbMF0sYz1pWzFdLHM9aVsyXTthPT09dCYmKG4hPT1jJiYoby5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChjLFwicHhcIikpLHIhPT1zJiYoby5zdHlsZS5oZWlnaHQ9XCJcIi5jb25jYXQocyxcInB4XCIpKSl9fTtyZXR1cm57aWZyYW1lJDpvLG1lc3NhZ2VIYW5kbGVyOml9fShlPWNuKGUsWW8uY3JlYXRlRm9sbG93QnV0dG9uLFwiU3RvcnkuY3JlYXRlRm9sbG93QnV0dG9uXCIpKSxyPW4uaWZyYW1lJCxvPW4ubWVzc2FnZUhhbmRsZXI7dC5hcHBlbmRDaGlsZChyKSxmdCh3aW5kb3csXCJtZXNzYWdlXCIsbyksdGkucHVzaCgoZnVuY3Rpb24oKXtodCh3aW5kb3csXCJtZXNzYWdlXCIsbyksdC5yZW1vdmVDaGlsZChyKX0pKX0sY2xlYW51cDpmdW5jdGlvbigpe29uKHRpKX19KV0pLHJpPVtcIndnczg0XCIsXCJrYXRlY1wiXSxvaT17cmVxdWlyZWQ6e25hbWU6WWUseDp0dCx5OnR0fSxvcHRpb25hbDp7cnBmbGFnOlllLGNpZDpZZX19LGlpPXtzdGFydDp7cmVxdWlyZWQ6e25hbWU6WWUseDp0dCx5OnR0fSxvcHRpb25hbDp7Y29vcmRUeXBlOnZ0KHJpKSx2ZWhpY2xlVHlwZTp2dChbMSwyLDMsNCw1LDYsN10pLHJwT3B0aW9uOnZ0KFsxLDIsMyw0LDUsNiw4LDEwMF0pLHJvdXRlSW5mbzpRZSxzWDp0dCxzWTp0dCxzQW5nbGU6dHQscmV0dXJuVXJpOlllLHJwZmxhZzpZZSxjaWQ6WWUsZ3VpZGVJZDp0dCx2aWFQb2ludHM6ZnVuY3Rpb24oZSl7aWYoZihlKSl7aWYoZS5sZW5ndGg+Myl0aHJvdyBuZXcgbm4oXCJJbnZhbGlkIHBhcmFtZXRlciBrZXlzOiB2aWEgcG9pbnRzIHNob3VsZCBub3QgYmUgZXhjZWVkIDMuIGF0IE5hdmkuc3RhcnRcIik7cmV0dXJuIFZlKGUsKGZ1bmN0aW9uKGUpe3JldHVybiBjbihlLG9pLFwiTmF2aS5zdGFydFwiKX0pKSwhMH1yZXR1cm4hMX19LGRlZmF1bHRzOntjb29yZFR5cGU6XCJrYXRlY1wiLHZlaGljbGVUeXBlOjEscnBPcHRpb246MTAwLHJvdXRlSW5mbzohMX19LHNoYXJlOntyZXF1aXJlZDp7bmFtZTpZZSx4OnR0LHk6dHR9LG9wdGlvbmFsOntjb29yZFR5cGU6dnQocmkpLHJwZmxhZzpZZSxjaWQ6WWUsZ3VpZGVJZDp0dH0sZGVmYXVsdHM6e2Nvb3JkVHlwZTpcImthdGVjXCJ9fX07ZnVuY3Rpb24gYWkoKXtyZXR1cm57YXBwa2V5OmVuKCksYXBpdmVyOlwiMS4wXCIsZXh0cmFzOntLQTpZdH19fWZ1bmN0aW9uIGNpKGUsdCl7dmFyIG49e3VybFNjaGVtZTplLGludGVudFVSSTpbXCJpbnRlbnQ6XCIuY29uY2F0KGUsXCIjSW50ZW50XCIpLFwiUy5icm93c2VyX2ZhbGxiYWNrX3VybD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHQpKSxcImVuZDtcIl0uam9pbihcIjtcIiksc3RvcmVVUkw6dCx1bml2ZXJzYWxMaW5rOnR9O3RyeXtzbyhuKX1jYXRjaChlKXt9fXZhciBzaT1ybihbT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsc3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bXQoZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6ZS5uYW1lLHg6ZS54LHk6ZS55LHJwZmxhZzplLnJwZmxhZyxjaWQ6ZS5jaWQsZ3VpZGVfaWQ6ZS5ndWlkZUlkfSxuPXtjb29yZF90eXBlOmUuY29vcmRUeXBlLHZlaGljbGVfdHlwZTplLnZlaGljbGVUeXBlLHJwb3B0aW9uOmUucnBPcHRpb24scm91dGVfaW5mbzplLnJvdXRlSW5mbyxzX3g6ZS5zWCxzX3k6ZS5zWSxzX2FuZ2xlOmUuc0FuZ2xlLHJldHVybl91cmk6ZS5yZXR1cm5Vcml9O3JldHVybiBfdChfdCh7fSxhaSgpKSx7fSx7cGFyYW06e2Rlc3RpbmF0aW9uOnQsb3B0aW9uOm4sdmlhX2xpc3Q6ZS52aWFQb2ludHN9fSl9KGU9Y24oZSxpaS5zdGFydCxcIk5hdmkuc3RhcnRcIikpKTtjaShcIlwiLmNvbmNhdChRdC5uYXZpU2NoZW1lLFwiP1wiKS5jb25jYXQodCksXCJcIi5jb25jYXQoUXQubmF2aUZhbGxiYWNrLFwiP1wiKS5jb25jYXQodCkpfSxzaGFyZTpmdW5jdGlvbihlKXt2YXIgdD1tdChmdW5jdGlvbihlKXt2YXIgdD17bmFtZTplLm5hbWUseDplLngseTplLnkscnBmbGFnOmUucnBmbGFnLGNpZDplLmNpZCxndWlkZV9pZDplLmd1aWRlSWR9LG49e3JvdXRlX2luZm86ITAsY29vcmRfdHlwZTplLmNvb3JkVHlwZX07cmV0dXJuIF90KF90KHt9LGFpKCkpLHt9LHtwYXJhbTp7ZGVzdGluYXRpb246dCxvcHRpb246bn19KX0oZT1jbihlLGlpLnNoYXJlLFwiTmF2aS5zaGFyZVwiKSkpO2NpKFwiXCIuY29uY2F0KFF0Lm5hdmlTY2hlbWUsXCI/XCIpLmNvbmNhdCh0KSxcIlwiLmNvbmNhdChRdC5uYXZpRmFsbGJhY2ssXCI/XCIpLmNvbmNhdCh0KSl9fSldKTtmdW5jdGlvbiB1aShlKXtyZXR1cm4gZXQoZSkmJmU+MCYmZTwxMDF9ZnVuY3Rpb24gbGkoZSl7aWYoZS5tYXhQaWNrYWJsZUNvdW50PGUubWluUGlja2FibGVDb3VudCl0aHJvdyBuZXcgbm4oJ1wibWluUGlja2FibGVDb3VudFwiIHNob3VsZCBub3QgbGFyZ2VyIHRoYW4gXCJtYXhQaWNrYWJsZUNvdW50XCInKX1mdW5jdGlvbiBkaShlKXt2YXIgdD17cmVxdWlyZWQ6e3JlYXNvbjp2dChbXCJtc2dCbG9ja2VkXCIsXCJyZWdpc3RlcmVkXCIsXCJ1bnJlZ2lzdGVyZWRcIixcIm5vdEZyaWVuZFwiLFwiY3VzdG9tXCJdKX0sb3B0aW9uYWw6e21lc3NhZ2U6WWUsdXVpZHM6Zn0sYWZ0ZXI6ZnVuY3Rpb24oZSl7aWYoIShcImN1c3RvbVwiIT09ZS5yZWFzb258fGUubWVzc2FnZSYmZS51dWlkcykpdGhyb3cgbmV3IG5uKCdcIm1lc3NhZ2VcIiBhbmQgXCJ1dWlkc1wiIG11c3QgYmUgc2V0IGZvciBcImN1c3RvbVwiIG9wdGlvbiBpbiBkaXNhYmxlU2VsZWN0T3B0aW9uJyl9fTtyZXR1cm4gZihlKSYmY3QoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJiEhY24oZSx0LFwiZGlzYWJsZVNlbGVjdE9wdGlvblwiKX0pKX1mdW5jdGlvbiBwaShlKXtpZihcImNoYXRNZW1iZXJcIj09PWUuc2VsZWN0aW9uVHlwZSl7dmFyIHQ9ZS5jaGF0RmlsdGVycztpZih0LmluZGV4T2YoXCJvcGVuXCIpPi0xKXRocm93IG5ldyBubignXCJvcGVuXCIgaXMgbm90IGFsbG93ZWQgaW4gXCJjaGF0RmlsdGVyc1wiJyk7aWYoKHQuaW5kZXhPZihcImRpcmVjdFwiKT4tMXx8dC5pbmRleE9mKFwibXVsdGlcIik+LTEpJiYtMT09PXQuaW5kZXhPZihcInJlZ3VsYXJcIikpdGhyb3cgbmV3IG5uKCdcInJlZ3VsYXJcIiBzaG91bGQgYmUgaW5jbHVkZWQgaW4gXCJjaGF0RmlsdGVyc1wiJyl9fXZhciBmaT1bXCJub25lXCIsXCJpbnZpdGFibGVcIixcInJlZ2lzdGVyZWRcIl0saGk9W1widGFsa1wiLFwic3RvcnlcIixcInRhbGtzdG9yeVwiXSxtaT1bXCJjaGF0XCIsXCJjaGF0TWVtYmVyXCJdLHZpPVtcInJlZ3VsYXJcIixcImRpcmVjdFwiLFwibXVsdGlcIixcIm9wZW5cIl0sZ2k9W1wiYWxsXCIsXCJpb3NcIixcImFuZHJvaWRcIl0seWk9e3JldHVyblVybDpZZSxzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqLGZyaWVuZEZpbHRlcjp2dChmaSksc2VydmljZVR5cGVGaWx0ZXI6dnQoaGkpLHRpdGxlOlllLGVuYWJsZVNlYXJjaDpRZSxjb3VudHJ5Q29kZUZpbHRlcnM6Zix1c2luZ09zRmlsdGVyOnZ0KGdpKSxzaG93TXlQcm9maWxlOlFlLHNob3dGYXZvcml0ZTpRZSxkaXNhYmxlU2VsZWN0T3B0aW9uczpkaSxkaXNwbGF5QWxsUHJvZmlsZTpRZSxlbmFibGVCYWNrQnV0dG9uOlFlfSxiaT17c3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdH0sX2k9e29wdGlvbmFsOntmcmllbmRGaWx0ZXI6dnQoZmkpLHNlcnZpY2VUeXBlRmlsdGVyOnZ0KGhpKSxjb3VudHJ5Q29kZUZpbHRlcnM6Zix1c2luZ09zRmlsdGVyOnZ0KGdpKSxzaG93TXlQcm9maWxlOlFlLHNob3dGYXZvcml0ZTpRZSxzaG93UGlja2VkRnJpZW5kOlFlfX0sa2k9e29wdGlvbmFsOntzZWxlY3Rpb25UeXBlOnZ0KG1pKSxjaGF0RmlsdGVyczpmdW5jdGlvbihlKXtyZXR1cm4gZihlKSYmY3QoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIHZ0KHZpKShlKX0pKX19LGRlZmF1bHRzOntzZWxlY3Rpb25UeXBlOm1pWzBdLGNoYXRGaWx0ZXJzOlt2aVswXV19LGFmdGVyOnBpfSx3aT17c2VsZWN0RnJpZW5kOntvcHRpb25hbDp5aSxkZWZhdWx0czpiaX0sc2VsZWN0RnJpZW5kczp7b3B0aW9uYWw6X3QoX3Qoe30seWkpLHt9LHtzaG93UGlja2VkRnJpZW5kOlFlLG1heFBpY2thYmxlQ291bnQ6dWksbWluUGlja2FibGVDb3VudDp1aX0pLGRlZmF1bHRzOmJpLGFmdGVyOmxpfSxzZWxlY3RDaGF0OntvcHRpb25hbDp7cmV0dXJuVXJsOlllLHN1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmosc2VsZWN0aW9uVHlwZTp2dChtaSksY2hhdEZpbHRlcnM6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSkmJmN0KGUsKGZ1bmN0aW9uKGUpe3JldHVybiB2dCh2aSkoZSl9KSl9LHRpdGxlOlllLGVuYWJsZVNlYXJjaDpRZSxkaXNhYmxlU2VsZWN0T3B0aW9uczpkaSxkaXNwbGF5QWxsUHJvZmlsZTpRZSxtYXhQaWNrYWJsZUNvdW50OnVpLG1pblBpY2thYmxlQ291bnQ6dWksZW5hYmxlQmFja0J1dHRvbjpRZX0sZGVmYXVsdHM6e3N1Y2Nlc3M6bHQsZmFpbDpsdCxhbHdheXM6bHQsc2VsZWN0aW9uVHlwZTptaVswXSxjaGF0RmlsdGVyczpbdmlbMF1dfSxhZnRlcjpmdW5jdGlvbihlKXtsaShlKSxwaShlKX19LHNlbGVjdDp7b3B0aW9uYWw6e3JldHVyblVybDpZZSxzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqLHRpdGxlOlllLGVuYWJsZVNlYXJjaDpRZSxkaXNhYmxlU2VsZWN0T3B0aW9uczpkaSxkaXNwbGF5QWxsUHJvZmlsZTpRZSxtYXhQaWNrYWJsZUNvdW50OnVpLG1pblBpY2thYmxlQ291bnQ6dWksZW5hYmxlQmFja0J1dHRvbjpRZSxmcmllbmRzUGFyYW1zOmZ1bmN0aW9uKGUpe3JldHVybiBwKGUpJiYhIWNuKGUsX2ksXCJQaWNrZXIuc2VsZWN0XCIpfSxjaGF0UGFyYW1zOmZ1bmN0aW9uKGUpe3JldHVybiBwKGUpJiYhIWNuKGUsa2ksXCJQaWNrZXIuc2VsZWN0XCIpfX0sZGVmYXVsdHM6e3N1Y2Nlc3M6bHQsZmFpbDpsdCxhbHdheXM6bHR9LGFmdGVyOmxpfX07ZnVuY3Rpb24gU2koZSx0LG4pe2ppKCk7dmFyIHI9c24oKSxvPV90KF90KHt0cmFuc0lkOnIsYXBwS2V5OmVuKCksa2E6WXR9LEduKCkmJnt0b2tlbjpHbigpfSksZnVuY3Rpb24oZSl7W1wiY291bnRyeUNvZGVGaWx0ZXJzXCIsXCJjaGF0RmlsdGVyc1wiXS5mb3JFYWNoKChmdW5jdGlvbih0KXt2b2lkIDAhPT1lW3RdJiYoZVt0XT1lW3RdLmpvaW4oXCIsXCIpKX0pKSxlLmRpc2FibGVTZWxlY3RPcHRpb25zJiYoZS5kaXNhYmxlU2VsZWN0T3B0aW9ucz1KU09OLnN0cmluZ2lmeShlLmRpc2FibGVTZWxlY3RPcHRpb25zKSk7cmV0dXJuIGV9KHQpKSxpPVF0LnBpY2tlckRvbWFpbituO2UucmV0dXJuVXJsPyhvLnJldHVyblVybD1lLnJldHVyblVybCxnbihvLGkpKTooaG4ocixcIlwiLmNvbmNhdChRdC5waWNrZXJEb21haW4sXCIvcHJveHk/dHJhbnNJZD1cIikuY29uY2F0KHIpLE9pKSxtbihlLFF0LnBpY2tlckRvbWFpbixPaSksdm4obyx7dXJsOmkscG9wdXBOYW1lOlwiZnJpZW5kX3BpY2tlclwiLHBvcHVwRmVhdHVyZXM6XCJsb2NhdGlvbj1ubyxyZXNpemFibGU9bm8sc3RhdHVzPW5vLHNjcm9sbGJhcnM9bm8sd2lkdGg9NDYwLGhlaWdodD02MDhcIn0pKX1mdW5jdGlvbiB4aShlKXt2YXIgdD1fdCh7fSxlKTtyZXR1cm5bXCJyZXR1cm5VcmxcIixcInN1Y2Nlc3NcIixcImZhaWxcIixcImFsd2F5c1wiLFwiZnJpZW5kc1BhcmFtc1wiLFwiY2hhdFBhcmFtc1wiXS5mb3JFYWNoKChmdW5jdGlvbihlKXt0W2VdJiZkZWxldGUgdFtlXX0pKSx0fXZhciBPaT1bXTtmdW5jdGlvbiBqaSgpe29uKE9pKX12YXIgQWk9cm4oW09iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLHNlbGVjdEZyaWVuZHM6ZnVuY3Rpb24oZSl7U2koZT1jbihlLHdpLnNlbGVjdEZyaWVuZHMsXCJQaWNrZXIuc2VsZWN0RnJpZW5kc1wiKSx4aShlKSxcIi9zZWxlY3QvbXVsdGlwbGVcIil9LHNlbGVjdEZyaWVuZDpmdW5jdGlvbihlKXtTaShlPWNuKGUsd2kuc2VsZWN0RnJpZW5kLFwiUGlja2VyLnNlbGVjdEZyaWVuZFwiKSx4aShlKSxcIi9zZWxlY3Qvc2luZ2xlXCIpfSxzZWxlY3RDaGF0OmZ1bmN0aW9uKGUpe1NpKGU9Y24oZSx3aS5zZWxlY3RDaGF0LFwiUGlja2VyLnNlbGVjdENoYXRcIikseGkoZSksXCIvY2hhdC9zZWxlY3RcIil9LHNlbGVjdDpmdW5jdGlvbihlKXtTaShlPWNuKGUsd2kuc2VsZWN0LFwiUGlja2VyLnNlbGVjdFwiKSxfdChfdChfdCh7fSx4aShlKSksZS5mcmllbmRzUGFyYW1zKSxlLmNoYXRQYXJhbXMpLFwiL3RhYi9zZWxlY3RcIil9LGNsZWFudXA6aml9KV0pO2Z1bmN0aW9uIFRpKCl7cmV0dXJuIG51bGwhPT1lbigpfVwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmKHdpbmRvdy5LYWthbz1lKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cua2FrYW9Bc3luY0luaXQmJnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7d2luZG93Lmtha2FvQXN5bmNJbml0KCl9KSwwKSxlLlZFUlNJT049R3QsZS5jbGVhbnVwPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBwKGVbdF0pfSkpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdLmNsZWFudXAoKX0pKSx0bihudWxsKX0sZS5pbml0PWZ1bmN0aW9uKGUpe2lmKFh0LmJyb3dzZXIubXNpZSYmWHQuYnJvd3Nlci52ZXJzaW9uLm1ham9yPDkpdGhyb3cgbmV3IG5uKFwiS2FrYW8uaW5pdDogVW5zdXBwb3J0ZWQgYnJvd3NlclwiKTtpZihUaSgpKXRocm93IG5ldyBubihcIktha2FvLmluaXQ6IEFscmVhZHkgaW5pdGlhbGl6ZWRcIik7aWYoIVllKGUpKXRocm93IG5ldyBubihcIktha2FvLmluaXQ6IEFwcCBrZXkgbXVzdCBiZSBwcm92aWRlZFwiKTt0bihlKSx0aGlzLkF1dGg9RHIsdGhpcy5BUEk9cXIsdGhpcy5TaGFyZT1Jbyx0aGlzLkxpbms9SW8sdGhpcy5DaGFubmVsPUtvLHRoaXMuUGx1c0ZyaWVuZD1Hbyx0aGlzLlN0b3J5PW5pLHRoaXMuTmF2aT1zaSx0aGlzLlBpY2tlcj1BaX0sZS5pc0luaXRpYWxpemVkPVRpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkpOyIsImltcG9ydCB7S2FLYW99IGZyb20gJy4uL3NlcnZpY2VzL2tha2FvLm1pbi5qcyc7IFxyXG5cclxuS2FLYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTsgLy8g7IKs7Jqp7ZWY66Ck64qUIOyVseydmCBKYXZhU2NyaXB0IO2CpCDsnoXroKVcclxuXHJcbmZ1bmN0aW9uIGtha2FvU2hhcmUoeydhZGRyJzphZGRyLCAndGl0bGUnOnRpdGxlLCAnZGVzJzpkZXMsICdpbWcnOmltZywgJ2xpa2VzJzpsaWtlc30pIHtcclxuICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICBhZGRyZXNzOiBhZGRyLFxyXG4gICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgIGltYWdlVXJsOmltZyxcclxuICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNvY2lhbDoge1xyXG4gICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtha2FvU2hhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==