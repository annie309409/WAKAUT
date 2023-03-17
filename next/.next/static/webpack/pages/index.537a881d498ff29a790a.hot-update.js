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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _place_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place_modal */ "./pages/place_modal.js");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/workaut.png */ "./assets/workaut.png?04d8");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_workaut_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/map-icon.png */ "./assets/map-icon.png");
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _services_kakaoShare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/kakaoShare */ "./services/kakaoShare.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Map = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")).then(function (module) {
    return module.Map;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")];
    },
    modules: ["index.js -> " + "react-kakao-maps-sdk"]
  }
});
_c2 = Map;
var MapMarker = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")).then(function (module) {
    return module.MapMarker;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")];
    },
    modules: ["index.js -> " + "react-kakao-maps-sdk"]
  }
});
_c4 = MapMarker;
function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      lgShow = _useState2[0],
      setLgShow = _useState2[1];

  var addr = '경기도 부천시 소사로482';
  var title = '부천 종합 운동장';
  var des = '#에어로빅 #줌바 #조깅';
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "d-flex mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uBD80\uCC9C \uC885\uD569 \uC6B4\uB3D9\uC7A5",
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 49
      }
    }),
    note: "\uACBD\uAE30\uB3C4 \uBD80\uCC9C\uC2DC \uC18C\uC0AC\uB85C482",
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uBD80\uCC9C \uC885\uD569 \uC6B4\uB3D9\uC7A5",
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 49
      }
    }),
    note: "\uACBD\uAE30\uB3C4 \uBD80\uCC9C\uC2DC \uC18C\uC0AC\uB85C482",
    col: "bg-danger",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uBD80\uCC9C \uC885\uD569 \uC6B4\uB3D9\uC7A5",
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 49
      }
    }),
    note: "\uACBD\uAE30\uB3C4 \uBD80\uCC9C\uC2DC \uC18C\uC0AC\uB85C482",
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uBD80\uCC9C \uC885\uD569 \uC6B4\uB3D9\uC7A5",
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 49
      }
    }),
    note: "\uACBD\uAE30\uB3C4 \uBD80\uCC9C\uC2DC \uC18C\uC0AC\uB85C482",
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "right col-6 ms-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(Map, {
    center: {
      lat: 33.5563,
      lng: 126.79581
    },
    style: {
      width: "100%",
      height: "800px"
    },
    level: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(MapMarker, {
    position: {
      lat: 33.55635,
      lng: 126.795841
    },
    image: {
      src: "".concat(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a),
      // 마커이미지의 주소입니다
      size: {
        width: 64,
        height: 69
      },
      // 마커이미지의 크기입니다
      options: {
        offset: {
          x: 27,
          y: 69
        } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      }
    },
    onMouseOver: function onMouseOver() {
      return setIsOpen(true);
    },
    onMouseOut: function onMouseOut() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, isOpen && __jsx("div", {
    style: {
      padding: "5px",
      color: "#000"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "\uBD80\uCC9C \uC885\uD569\uC6B4\uB3D9\uC7A5")))), __jsx(_place_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    score: 3,
    addr: addr,
    title: title,
    des: des,
    img: _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }));
}

_s(Index, "ThSgeLJmLtDkJGV0MtPdJGifJt4=");

_c5 = Index;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, {
  title: '주변에서 운동해요! WAKAUT!',
  description: '신개념 운동 플랫폼 워크아웃!'
});

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Map$dynamic");
$RefreshReg$(_c2, "Map");
$RefreshReg$(_c3, "MapMarker$dynamic");
$RefreshReg$(_c4, "MapMarker");
$RefreshReg$(_c5, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2tha2FvLm1pbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJNYXAiLCJkeW5hbWljIiwidGhlbiIsIm1vZHVsZSIsInNzciIsIk1hcE1hcmtlciIsIkluZGV4IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJhZGRyIiwidGl0bGUiLCJkZXMiLCJsYXQiLCJsbmciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm1hcGljb24iLCJzaXplIiwib3B0aW9ucyIsIm9mZnNldCIsIngiLCJ5IiwicGFkZGluZyIsImNvbG9yIiwiaW1nIiwiZ2V0TGF5b3V0IiwiZGVzY3JpcHRpb24iLCJlIiwidCIsImV4cG9ydHMiLCJnbG9iYWwiLCJPYmplY3QiLCJuIiwic2VsZiIsInIiLCJGdW5jdGlvbiIsIm8iLCJTeW1ib2wiLCJpIiwicHJvdG90eXBlIiwiYSIsImhhc093blByb3BlcnR5IiwiYyIsInRvU3RyaW5nIiwicyIsInRvU3RyaW5nVGFnIiwidSIsImwiLCJkIiwiY2FsbCIsInAiLCJmIiwiQXJyYXkiLCJpc0FycmF5IiwiaCIsIm0iLCJ2Iiwic2xpY2UiLCJsZW5ndGgiLCJ0ZXN0IiwiY2hhckF0IiwicmVwbGFjZSIsImciLCJiIiwiXyIsImsiLCJwYXJzZUludCIsInciLCJOYU4iLCJ2YWx1ZU9mIiwiUyIsIk8iLCJqIiwiQSIsIlQiLCJDIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsIkkiLCJQIiwiRiIsIkIiLCJFIiwiVSIsIlIiLCJSZWdFeHAiLCJMIiwiTSIsImFwcGx5IiwieiIsIkRhdGUiLCJub3ciLCJEIiwicSIsIk4iLCJLIiwiSCIsIkoiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsIlciLCJhcmd1bWVudHMiLCJYIiwiJCIsIkciLCJWIiwiWSIsIlEiLCJaIiwiZWUiLCJ0ZSIsIk1hdGgiLCJtYXgiLCJuZSIsInJlIiwib2UiLCJpZSIsImFlIiwiY2UiLCJjb25zdHJ1Y3RvciIsInNlIiwidWUiLCJsZSIsImRlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJwZSIsImZlIiwiaGUiLCJub2RlVHlwZSIsIm1lIiwidmUiLCJCdWZmZXIiLCJnZSIsImlzQnVmZmVyIiwieWUiLCJiZSIsIl9lIiwia2UiLCJwcm9jZXNzIiwid2UiLCJyZXF1aXJlIiwidHlwZXMiLCJiaW5kaW5nIiwiU2UiLCJpc1R5cGVkQXJyYXkiLCJ4ZSIsIk9lIiwiamUiLCJBZSIsIlN0cmluZyIsInB1c2giLCJUZSIsIkNlIiwiSWUiLCJQZSIsIkZlIiwiQmUiLCJFZSIsIlVlIiwiUmUiLCJMZSIsImdldFByb3RvdHlwZU9mIiwiTWUiLCJ6ZSIsIkRlIiwicWUiLCJOZSIsIktlIiwiSGUiLCJKZSIsIldlIiwiWGUiLCIkZSIsIkdlIiwiVmUiLCJZZSIsIlFlIiwiWmUiLCJldCIsInR0IiwibnQiLCJjb25jYXQiLCJydCIsIm90IiwiaXQiLCJhdCIsIm1hcCIsImN0IiwiZXZlcnkiLCJzdCIsInJlZHVjZSIsImZpbHRlciIsImluZGV4T2YiLCJ1dCIsImx0IiwiZHQiLCJyYW5kb20iLCJwdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImh0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm10IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJ2dCIsIkVycm9yIiwiZ3QiLCJzb21lIiwieXQiLCJfZGF0YSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiYnQiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfdCIsImZvckVhY2giLCJPdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJrdCIsIml0ZXJhdG9yIiwid3QiLCJUeXBlRXJyb3IiLCJTdCIsIlV0Iiwia2V5IiwieHQiLCJqdCIsImNyZWF0ZSIsIlR0IiwiQXQiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJDdCIsIlJlZmVyZW5jZUVycm9yIiwiSXQiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsIlB0IiwibmV4dCIsImRvbmUiLCJCdCIsIkZ0IiwiRXQiLCJmcm9tIiwibmFtZSIsInRvUHJpbWl0aXZlIiwiTnVtYmVyIiwiUnQiLCJnbG9iYWxUaGlzIiwiTHQiLCJ2ZXJzaW9uIiwic3BsaXQiLCJpbmZvIiwibWFqb3IiLCJtaW5vciIsInBhdGNoIiwibWF0Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsImlzQXBwIiwidG9Mb3dlckNhc2UiLCJ1c2VyQWdlbnQiLCJ1YSIsImJyb3dzZXIiLCJwbGF0Zm9ybSIsIm9zIiwiYXBwIiwiTXQiLCJ6dCIsIkR0IiwicXQiLCJOdCIsIkt0IiwiSHQiLCJKdCIsIld0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsIlh0IiwiJHQiLCJHdCIsIlZ0IiwiWXQiLCJ1c2VyTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsIlF0IiwiYWNjb3VudERvbWFpbiIsImF1dGhEb21haW4iLCJhdXRob3JpemUiLCJsb2dpbldpZGdldCIsInJlZGlyZWN0VXJpIiwidW5pdmVyc2FsS2FrYW9MaW5rIiwidGFsa0xvZ2luU2NoZW1lIiwidGFsa0xvZ2luUmVkaXJlY3RVcmkiLCJ0YWxrSW5hcHBTY2hlbWUiLCJ0YWxrU3luY3BsdWdpblNjaGVtZSIsImFwaVJlbW90ZSIsInNoYXJlckRvbWFpbiIsInBpY2tlckRvbWFpbiIsImFwcHNEb21haW4iLCJ0YWxrTGlua1NjaGVtZSIsInRhbGtBbmRyb2lkUGFja2FnZSIsImNoYW5uZWwiLCJjaGFubmVsSWNvbiIsInN0b3J5U2hhcmUiLCJzdG9yeUNoYW5uZWxGb2xsb3ciLCJzdG9yeUljb24iLCJzdG9yeVBvc3RTY2hlbWUiLCJuYXZpU2NoZW1lIiwibmF2aUZhbGxiYWNrIiwiWnQiLCJlbiIsInRuIiwibm4iLCJtZXNzYWdlIiwicm4iLCJjbGVhbnVwIiwib24iLCJhbiIsImNuIiwiYmVmb3JlIiwiZGVmYXVsdHMiLCJyZXF1aXJlZCIsIm9wdGlvbmFsIiwiYWZ0ZXIiLCJzbiIsInVuIiwiYW5kcm9pZCIsImFwcEtleSIsIktBIiwiaW9zIiwiaHJlZiIsImxuIiwiZG4iLCJwbiIsImNsb3NlIiwiY2xvc2VkIiwib3BlbiIsImZuIiwiZ2V0QXR0cmlidXRlIiwiaG4iLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsIm1uIiwiZGF0YSIsIm9yaWdpbiIsInBhcnNlIiwiY29kZSIsImZhaWwiLCJzdWNjZXNzIiwiYWx3YXlzIiwidm4iLCJ1cmwiLCJwb3B1cE5hbWUiLCJwb3B1cEZlYXR1cmVzIiwibXNpZSIsImZvY3VzIiwiZ24iLCJ0eXBlIiwic3VibWl0IiwieW4iLCJibiIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwic3BsaWNlIiwiZGlzcGF0Y2giLCJfbiIsIl9pbnRlcnZhbCIsIl9tYXhDb3VudCIsIl9jb3VudCIsIl9zdG9wcGVkIiwiX3RpbWVvdXQiLCJzdG9wIiwiX2RvUG9sbGluZyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJrbiIsInduIiwidGhyb3VnaFRhbGsiLCJwZXJzaXN0QWNjZXNzVG9rZW4iLCJwZXJzaXN0UmVmcmVzaFRva2VuIiwiU24iLCJhcHByb3ZhbFR5cGUiLCJzY29wZSIsInBsdXNGcmllbmRQdWJsaWNJZCIsImNoYW5uZWxQdWJsaWNJZCIsInNlcnZpY2VUZXJtcyIsInN0YXRlIiwiZGV2aWNlVHlwZSIsIm5vbmNlIiwieG4iLCJyZXR1cm5VcmwiLCJmb3JjZU1vYmlsZUxheW91dCIsImVuYWJsZUJhY2tCdXR0b24iLCJPbiIsImNyZWF0ZUxvZ2luQnV0dG9uIiwiY29udGFpbmVyIiwibGFuZyIsImxvZ2luIiwiaXNQb3B1cCIsImF1dG9Mb2dpbiIsInByb21wdHMiLCJyZWF1dGhlbnRpY2F0ZSIsInRocm91Z2hTeW5jcGx1Z2luIiwibG9naW5IaW50IiwiaXNzdWVBY2Nlc3NUb2tlbiIsInNlbGVjdFNoaXBwaW5nQWRkcmVzcyIsImNyZWF0ZVNoaXBwaW5nQWRkcmVzcyIsInVwZGF0ZVNoaXBwaW5nQWRkcmVzcyIsImFkZHJlc3NJZCIsImpuIiwic2NyZWVuTGVmdCIsInNjcmVlblgiLCJzY3JlZW5Ub3AiLCJzY3JlZW5ZIiwic2NyZWVuIiwiQW4iLCJUbiIsImNsaWVudF9pZCIsImFwcHJvdmFsX3R5cGUiLCJDbiIsImNoYW5uZWxfcHVibGljX2lkIiwicHJvbXB0IiwiZGV2aWNlX3R5cGUiLCJsb2dpbl9oaW50IiwiSW4iLCJyZWRpcmVjdF91cmkiLCJyZXNwb25zZV90eXBlIiwiYXV0aF90cmFuX2lkIiwiUG4iLCJrYSIsImlzX3BvcHVwIiwiRm4iLCJlcnJvciIsIkJuIiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJzZW5kIiwiWERvbWFpblJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsIkVuIiwiVW4iLCJSbiIsIk1uIiwiYXBwcm92YWxfd2luZG93X3R5cGUiLCJzdGFydCIsIkxuIiwiZXJyb3JfY29kZSIsImVycm9yX2Rlc2NyaXB0aW9uIiwiem4iLCJmcmVlemUiLCJrYWthb3dlYiIsInJlcVNpZ25JbkxvY2F0aW9uIiwiZnJvbUVudHJpZXMiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJEbiIsInFuIiwiTm4iLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiaW1wb3J0U2NyaXB0cyIsIk1lc3NhZ2VDaGFubmVsIiwibmV4dFRpY2siLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwicnVuT25Mb29wIiwicnVuT25Db250ZXh0IiwiX3N0YXRlIiwiX3Jlc3VsdCIsInN1YnN0cmluZyIsIl9sYWJlbCIsInJlc29sdmUiLCJfb25lcnJvciIsIl9zdWJzY3JpYmVycyIsIl9pbnN0YW5jZUNvbnN0cnVjdG9yIiwicHJvbWlzZSIsIl9yZW1haW5pbmciLCJfZW51bWVyYXRlIiwiX2VhY2hFbnRyeSIsIl9zZXR0bGVkQXQiLCJfd2lsbFNldHRsZUF0IiwiUHJvbWlzZSIsImNhc3QiLCJhbGwiLCJyYWNlIiwicmVqZWN0IiwiX3NldFNjaGVkdWxlciIsIl9zZXRBc2FwIiwiX2FzYXAiLCJwb2x5ZmlsbCIsIktuIiwiZmxvb3IiLCJlYXN5WERNIiwicGx1Z2lucyIsIm1pbWVUeXBlcyIsImVuYWJsZWRQbHVnaW4iLCJBY3RpdmVYT2JqZWN0IiwiR2V0VmFyaWFibGUiLCJhdHRhY2hFdmVudCIsImRldGFjaEV2ZW50IiwicGF0aG5hbWUiLCJsYXN0SW5kZXhPZiIsImhvc3QiLCJkb2N1bWVudEVsZW1lbnQiLCJkb1Njcm9sbCIsInRvcCIsInNlYXJjaCIsImhhc2giLCJ0b0pTT04iLCJldmFsSlNPTiIsImVsZW1lbnRzIiwicHJvcHMiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYm9yZGVyIiwiZnJhbWVCb3JkZXIiLCJhbGxvd1RyYW5zcGFyZW5jeSIsIm9uTG9hZCIsInVzZVBvc3QiLCJ0YXJnZXQiLCJhY3Rpb24iLCJwYXJlbnROb2RlIiwiaXNIb3N0IiwieGRtX3AiLCJyZW1vdGUiLCJzZWNyZXQiLCJzd2YiLCJwcm9kdWN0IiwicmVtb3RlSGVscGVyIiwieGRtX2MiLCJ4ZG1fcyIsInhkbV9lIiwiYWNsIiwic3Vic3RyIiwiaW50ZXJ2YWwiLCJkZWxheSIsInVzZVJlc2l6ZSIsInVzZVBhcmVudCIsInVzZVBvbGxpbmciLCJsb2NhbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwieGRtX3BhIiwieGRtX3BvIiwic3RhY2siLCJIYXNoVHJhbnNwb3J0IiwiUmVsaWFibGVCZWhhdmlvciIsIlF1ZXVlQmVoYXZpb3IiLCJlbmNvZGUiLCJtYXhMZW5ndGgiLCJWZXJpZnlCZWhhdmlvciIsImluaXRpYXRlIiwiUG9zdE1lc3NhZ2VUcmFuc3BvcnQiLCJOYW1lVHJhbnNwb3J0IiwiTml4VHJhbnNwb3J0IiwiU2FtZU9yaWdpblRyYW5zcG9ydCIsIkZyYW1lRWxlbWVudFRyYW5zcG9ydCIsIkZsYXNoVHJhbnNwb3J0IiwibGF6eSIsInJlbW92ZSIsImluY29taW5nIiwidXAiLCJvdXRnb2luZyIsImRvd24iLCJjYWxsYmFjayIsImluaXQiLCJkZXN0cm95IiwicXVlcnkiLCJnZXRKU09OT2JqZWN0Iiwid2hlblJlYWR5Iiwibm9Db25mbGljdCIsIkRvbUhlbHBlciIsInJlcXVpcmVzSlNPTiIsIndyaXRlIiwic2V0IiwiZ2V0IiwiU29ja2V0Iiwib25NZXNzYWdlIiwib25SZWFkeSIsIlJwYyIsIlJwY0JlaGF2aW9yIiwiY29udGV4dCIsIm9uRE9NUmVhZHkiLCJwYXJlbnQiLCJmaXJzdENoaWxkIiwicXVldWUiLCJzd2ZDb250YWluZXIiLCJzd2ZOb1Rocm90dGxlIiwicmlnaHQiLCJvdmVyZmxvdyIsImlubmVySFRNTCIsImRlc3Ryb3lDaGFubmVsIiwiY3JlYXRlQ2hhbm5lbCIsInVyaSIsImRvbWFpbiIsImNvbnRlbnRXaW5kb3ciLCJyZWZlcnJlciIsImZyYW1lRWxlbWVudCIsInNlbmRNZXNzYWdlIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZnJhbWVzIiwic2hpZnQiLCJzZXJpYWxpemVyIiwianNvbnJwYyIsInBhcmFtcyIsIm5hbWVkUGFyYW1zIiwicmVzdWx0IiwiaGFuZGxlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiSG4iLCJKbiIsImxpYiIsIkJhc2UiLCJleHRlbmQiLCJtaXhJbiIsIiRzdXBlciIsImNsb25lIiwiV29yZEFycmF5Iiwid29yZHMiLCJzaWdCeXRlcyIsImNsYW1wIiwiY2VpbCIsImVuYyIsIkhleCIsIkxhdGluMSIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJVdGY4IiwiZXNjYXBlIiwidW5lc2NhcGUiLCJCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIiwicmVzZXQiLCJfbkRhdGFCeXRlcyIsIl9hcHBlbmQiLCJfcHJvY2VzcyIsImJsb2NrU2l6ZSIsIl9taW5CdWZmZXJTaXplIiwibWluIiwiX2RvUHJvY2Vzc0Jsb2NrIiwiSGFzaGVyIiwiY2ZnIiwiX2RvUmVzZXQiLCJ1cGRhdGUiLCJmaW5hbGl6ZSIsIl9kb0ZpbmFsaXplIiwiX2NyZWF0ZUhlbHBlciIsIl9jcmVhdGVIbWFjSGVscGVyIiwiSE1BQyIsImFsZ28iLCJCYXNlNjQiLCJfbWFwIiwiYWJzIiwic2luIiwiTUQ1IiwiX2hhc2giLCJIbWFjTUQ1IiwiRXZwS0RGIiwia2V5U2l6ZSIsImhhc2hlciIsIml0ZXJhdGlvbnMiLCJjb21wdXRlIiwiQ2lwaGVyIiwiY3JlYXRlRW5jcnlwdG9yIiwiX0VOQ19YRk9STV9NT0RFIiwiY3JlYXRlRGVjcnlwdG9yIiwiX0RFQ19YRk9STV9NT0RFIiwiX3hmb3JtTW9kZSIsIl9rZXkiLCJpdlNpemUiLCJlbmNyeXB0IiwiZGVjcnlwdCIsIlN0cmVhbUNpcGhlciIsIm1vZGUiLCJfaXYiLCJ1bmRlZmluZWQiLCJfcHJldkJsb2NrIiwiQmxvY2tDaXBoZXJNb2RlIiwiRW5jcnlwdG9yIiwiRGVjcnlwdG9yIiwiX2NpcGhlciIsInByb2Nlc3NCbG9jayIsImVuY3J5cHRCbG9jayIsImRlY3J5cHRCbG9jayIsIkNCQyIsInBhZCIsIlBrY3M3IiwidW5wYWQiLCJCbG9ja0NpcGhlciIsIml2IiwiX21vZGUiLCJDaXBoZXJQYXJhbXMiLCJmb3JtYXR0ZXIiLCJmb3JtYXQiLCJPcGVuU1NMIiwiY2lwaGVydGV4dCIsInNhbHQiLCJTZXJpYWxpemFibGVDaXBoZXIiLCJhbGdvcml0aG0iLCJfcGFyc2UiLCJrZGYiLCJleGVjdXRlIiwiUGFzc3dvcmRCYXNlZENpcGhlciIsIkFFUyIsIl9uUm91bmRzIiwiX2tleVNjaGVkdWxlIiwiX2ludktleVNjaGVkdWxlIiwiX2RvQ3J5cHRCbG9jayIsIlduIiwiWG4iLCIkbiIsIkduIiwiZXIiLCJWbiIsIlFuIiwiWW4iLCJabiIsImFjY2Vzc1Rva2VuS2V5IiwidHIiLCJnZXRBcHBLZXkiLCJnZXRBY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwiY29uc29sZSIsInNldFJlZnJlc2hUb2tlbiIsIm5yIiwicnIiLCJvciIsInBlcm1pc3Npb24iLCJlbmFibGVfc2hhcmUiLCJhbmRyb2lkX2V4ZWNfcGFyYW0iLCJpb3NfZXhlY19wYXJhbSIsImFuZHJvaWRfbWFya2V0X3BhcmFtIiwiaW9zX21hcmtldF9wYXJhbSIsImlyIiwic2VjdXJlX3Jlc291cmNlIiwiYXIiLCJ3YXJuIiwiY3IiLCJzciIsImhlYWRlcl9pbWFnZV91cmwiLCJoZWFkZXJfaW1hZ2Vfd2lkdGgiLCJoZWFkZXJfaW1hZ2VfaGVpZ2h0IiwidXIiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlfa2V5cyIsInNjb3BlcyIsImV4dHJhIiwiYWRkcmVzc19pZCIsImZyb21fdXBkYXRlZF9hdCIsInBhZ2Vfc2l6ZSIsImxpbWl0Iiwib3JkZXIiLCJmcmllbmRfb3JkZXIiLCJ0ZW1wbGF0ZV9pZCIsInRlbXBsYXRlX2FyZ3MiLCJyZXF1ZXN0X3VybCIsInRlbXBsYXRlX29iamVjdCIsInJlY2VpdmVyX3V1aWRzIiwicmVjZWl2ZXJfaWRfdHlwZSIsImxpbmtfdmVyIiwiYXV0aFR5cGUiLCJmaWxlIiwiaW1hZ2VfdXJsIiwibGFzdF9pZCIsImNvbnRlbnQiLCJpbWFnZV91cmxfbGlzdCIsImxpbmtfaW5mbyIsImNoYW5uZWxfcHVibGljX2lkcyIsInBsdXNfZnJpZW5kX3B1YmxpY19pZHMiLCJsciIsInJlcXVlc3QiLCJmaWxlcyIsImFwaSIsImRyIiwicHIiLCJmciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiUHJhZ21hIiwiRmlsZVJlYWRlciIsIlVpbnQ4QXJyYXkiLCJvbmVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHIiLCJwYXJhbU5hbWUiLCJtc2ciLCJociIsIm1yIiwicG9zdFJlc3BvbnNlIiwiZ2V0S2FrYW9BZ2VudCIsImdldENvZGUiLCJzZXRDbGllbnQiLCJzZXRTdGF0ZVRva2VuIiwiZGVsZXRlQXV0aENvb2tpZSIsInZyIiwiZ3IiLCJ5ciIsImJyIiwiZGF1bUFwcHMiLCJfciIsImNocm9tZSIsImtyIiwiaXNTdXBwb3J0Iiwid3IiLCJTciIsIlRyIiwiRnIiLCJCciIsIlVyIiwiUHIiLCJ4ciIsIk9yIiwianIiLCJBciIsIkNyIiwiSXIiLCJzdGF0ZVRva2VuIiwicHJveHkiLCJhY2Nlc3NfdG9rZW4iLCJFciIsIlJyIiwibG9naW5Gb3JtIiwibG9nb3V0IiwiTHIiLCJ6ciIsImFwcF9rZXkiLCJ0cmFuc19pZCIsIm1vYmlsZV92aWV3IiwiZW5hYmxlX2JhY2tfYnV0dG9uIiwicmV0dXJuX3VybCIsIk1yIiwiRHIiLCJnZXRTdGF0dXNJbmZvIiwidXNlciIsInFyIiwiTnIiLCJ0b1VwcGVyQ2FzZSIsIktyIiwiSHIiLCJKciIsIldyIiwiWHIiLCIkciIsIndlYlVybCIsIm1vYmlsZVdlYlVybCIsImFuZHJvaWRFeGVjdXRpb25QYXJhbXMiLCJhbmRyb2lkRXhlY1BhcmFtcyIsImlvc0V4ZWN1dGlvblBhcmFtcyIsImlvc0V4ZWNQYXJhbXMiLCJidWlsZGVyIiwiVnIiLCJHciIsIml0ZW0iLCJpdGVtT3AiLCJhbmRyb2lkX2V4ZWNfcGFyYW1zIiwiYW5kcm9pZF9leGVjdXRpb25fcGFyYW1zIiwiaW9zX2V4ZWNfcGFyYW1zIiwiaW9zX2V4ZWN1dGlvbl9wYXJhbXMiLCJZciIsImxpbmsiLCJRciIsIlpyIiwiaGVhZGVyTGluayIsImJ1dHRvbiIsImJ1dHRvbnMiLCJpbWFnZVVybCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImNvbnRlbnRzIiwiY29tbWVyY2UiLCJyZWd1bGFyUHJpY2UiLCJkaXNjb3VudFByaWNlIiwiZGlzY291bnRSYXRlIiwiZml4ZWREaXNjb3VudFByaWNlIiwiY3VycmVuY3lVbml0IiwiY3VycmVuY3lVbml0UG9zaXRpb24iLCJwcm9kdWN0TmFtZSIsInNvY2lhbCIsImxpa2VDb3VudCIsImNvbW1lbnRDb3VudCIsInNoYXJlZENvdW50Iiwidmlld0NvdW50Iiwic3Vic2NyaWJlckNvdW50IiwiaXRlbUNvbnRlbnQiLCJwcm9maWxlVGV4dCIsInByb2ZpbGVJbWFnZVVybCIsInRpdGxlSW1hZ2VVcmwiLCJ0aXRsZUltYWdlVGV4dCIsInRpdGxlSW1hZ2VDYXRlZ29yeSIsIml0ZW1zIiwic3VtIiwic3VtT3AiLCJlbyIsInRvIiwibm8iLCJhcHBrZXkiLCJhcHB2ZXIiLCJsaW5rdmVyIiwiZXh0cmFzIiwic2VydmVyQ2FsbGJhY2tBcmdzIiwibGNiYSIsInRlbXBsYXRlX2pzb24iLCJ0ZW1wbGF0ZV9tc2ciLCJybyIsIm9iamVjdF90eXBlIiwib2JqZWN0VHlwZSIsImJ1dHRvblRpdGxlIiwiYnV0dG9uX3RpdGxlIiwib28iLCJGZWVkTGluayIsIkNvbW1lcmNlTGluayIsIkxpc3RMaW5rIiwiaGVhZGVyX3RpdGxlIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJJbWFnZVVybCIsImhlYWRlckltYWdlV2lkdGgiLCJoZWFkZXJJbWFnZUhlaWdodCIsIkxvY2F0aW9uTGluayIsImFkZHJlc3MiLCJhZGRyZXNzX3RpdGxlIiwiYWRkcmVzc1RpdGxlIiwiVGV4dExpbmsiLCJ0ZXh0IiwiaW8iLCJyZXF1ZXN0VXJsIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlQXJncyIsImFvIiwiY28iLCJ2YWxpZGF0aW9uX2FjdGlvbiIsInZhbGlkYXRpb25fcGFyYW1zIiwic28iLCJnZXRUaW1lIiwiZGlzcGxheSIsIndpbGxJbnZva2VBcHAiLCJvbkFwcE1pc3NpbmciLCJvblVuc3VwcG9ydGVkRW52aXJvbm1lbnQiLCJpbnRlbnRVUkkiLCJ1c2VVcmxTY2hlbWUiLCJzdG9yZVVSTCIsInVybFNjaGVtZSIsInVuaXZlcnNhbExpbmsiLCJ1byIsImxvIiwicG8iLCJhcHBOYW1lIiwiaW5zdGFsbFRhbGsiLCJ3YXJuaW5nX21zZyIsImFyZ3VtZW50X21zZyIsImZvIiwiaXBob25lIiwiYnRvYSIsImhvIiwibW8iLCJ2byIsImdvIiwieW8iLCJibyIsIl9vIiwia28iLCJ3byIsIlNvIiwieG8iLCJPbyIsImRlZmF1bHRPYmplY3RUeXBlcyIsInNlbmRGZWVkIiwiY3JlYXRlRmVlZEJ1dHRvbiIsInNlbmRMaXN0IiwiY3JlYXRlTGlzdEJ1dHRvbiIsInNlbmRDb21tZXJjZSIsImNyZWF0ZUNvbW1lcmNlQnV0dG9uIiwic2VuZExvY2F0aW9uIiwiY3JlYXRlTG9jYXRpb25CdXR0b24iLCJzZW5kVGV4dCIsImNyZWF0ZVRleHRCdXR0b24iLCJzZW5kU2NyYXAiLCJjcmVhdGVTY3JhcEJ1dHRvbiIsInNlbmRDdXN0b20iLCJjcmVhdGVDdXN0b21CdXR0b24iLCJ1cGxvYWRJbWFnZSIsImRlbGV0ZUltYWdlIiwic2NyYXBJbWFnZSIsImpvIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJUbyIsIkNvIiwiQW8iLCJtYWtlTGlua0Z1bmMiLCJzY3JhcCIsImN1c3RvbSIsIklvIiwiY3JlYXRlRGVmYXVsdEJ1dHRvbiIsInNlbmREZWZhdWx0IiwiUG8iLCJGbyIsInN1cHBvcnRNdWx0aXBsZURlbnNpdGllcyIsIkJvIiwiYXBpX3ZlciIsImtha2FvX2FnZW50IiwicmVmZXJlciIsIkVvIiwiVW8iLCJSbyIsIkxvIiwiTW8iLCJ6byIsImNyZWF0ZUFkZENoYW5uZWxCdXR0b24iLCJhZGRDaGFubmVsIiwiY3JlYXRlQ2hhdEJ1dHRvbiIsInNoYXBlIiwiY2hhdCIsIkRvIiwicW8iLCJObyIsIktvIiwiSG8iLCJjcmVhdGVBZGRGcmllbmRCdXR0b24iLCJwbHVzRnJpZW5kSWQiLCJhZGRGcmllbmQiLCJKbyIsIldvIiwiWG8iLCIkbyIsIkdvIiwiVm8iLCJkZXNjIiwiaW1hZ2VzIiwiaW1hZ2V1cmwiLCJZbyIsImNyZWF0ZVNoYXJlQnV0dG9uIiwic2hhcmUiLCJ1cmxJbmZvIiwiaW5zdGFsbCIsImNyZWF0ZUZvbGxvd0J1dHRvbiIsInNob3dGb2xsb3dlckNvdW50IiwiUW8iLCJlaSIsIlpvIiwidGkiLCJuaSIsImFwaXZlciIsImFwcGlkIiwiYXBwbmFtZSIsInBvc3QiLCJ1cmxpbmZvIiwiaGlkZUZvbGxvd2VyIiwiZnJhbWVJZCIsImlmcmFtZSQiLCJtZXNzYWdlSGFuZGxlciIsInJpIiwib2kiLCJycGZsYWciLCJjaWQiLCJpaSIsImNvb3JkVHlwZSIsInZlaGljbGVUeXBlIiwicnBPcHRpb24iLCJyb3V0ZUluZm8iLCJzWCIsInNZIiwic0FuZ2xlIiwicmV0dXJuVXJpIiwiZ3VpZGVJZCIsInZpYVBvaW50cyIsImFpIiwiY2kiLCJzaSIsImd1aWRlX2lkIiwiY29vcmRfdHlwZSIsInZlaGljbGVfdHlwZSIsInJwb3B0aW9uIiwicm91dGVfaW5mbyIsInNfeCIsInNfeSIsInNfYW5nbGUiLCJyZXR1cm5fdXJpIiwicGFyYW0iLCJkZXN0aW5hdGlvbiIsIm9wdGlvbiIsInZpYV9saXN0IiwidWkiLCJsaSIsIm1heFBpY2thYmxlQ291bnQiLCJtaW5QaWNrYWJsZUNvdW50IiwiZGkiLCJyZWFzb24iLCJ1dWlkcyIsInBpIiwic2VsZWN0aW9uVHlwZSIsImNoYXRGaWx0ZXJzIiwiZmkiLCJoaSIsIm1pIiwidmkiLCJnaSIsInlpIiwiZnJpZW5kRmlsdGVyIiwic2VydmljZVR5cGVGaWx0ZXIiLCJlbmFibGVTZWFyY2giLCJjb3VudHJ5Q29kZUZpbHRlcnMiLCJ1c2luZ09zRmlsdGVyIiwic2hvd015UHJvZmlsZSIsInNob3dGYXZvcml0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25zIiwiZGlzcGxheUFsbFByb2ZpbGUiLCJiaSIsIl9pIiwic2hvd1BpY2tlZEZyaWVuZCIsImtpIiwid2kiLCJzZWxlY3RGcmllbmQiLCJzZWxlY3RGcmllbmRzIiwic2VsZWN0Q2hhdCIsInNlbGVjdCIsImZyaWVuZHNQYXJhbXMiLCJjaGF0UGFyYW1zIiwiU2kiLCJqaSIsInRyYW5zSWQiLCJ0b2tlbiIsIk9pIiwieGkiLCJBaSIsIlRpIiwiS2FrYW8iLCJrYWthb0FzeW5jSW5pdCIsIlZFUlNJT04iLCJBdXRoIiwiQVBJIiwiU2hhcmUiLCJMaW5rIiwiQ2hhbm5lbCIsIlBsdXNGcmllbmQiLCJTdG9yeSIsIk5hdmkiLCJQaWNrZXIiLCJpc0luaXRpYWxpemVkIiwiS2FLYW8iLCJrYWthb1NoYXJlIiwibGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxxS0FBK0JDLElBQS9CLENBQW9DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNILEdBQW5CO0FBQUEsR0FBcEMsQ0FBTjtBQUFBLENBQUQsRUFBb0U7QUFDbkZJLEtBQUcsRUFBRSxLQUQ4RTtBQUFBO0FBQUE7QUFBQSxrQ0FBdEQscUZBQXNEO0FBQUE7QUFBQSwrQkFBdEQsc0JBQXNEO0FBQUE7QUFBQSxDQUFwRSxDQUFuQjtNQUFNSixHO0FBR04sSUFBTUssU0FBUyxHQUFHSixtREFBTyxPQUFDO0FBQUEsU0FBTSxxS0FBK0JDLElBQS9CLENBQW9DLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNFLFNBQW5CO0FBQUEsR0FBcEMsQ0FBTjtBQUFBLENBQUQsRUFBMEU7QUFDL0ZELEtBQUcsRUFBRSxLQUQwRjtBQUFBO0FBQUE7QUFBQSxrQ0FBNUQscUZBQTREO0FBQUE7QUFBQSwrQkFBNUQsc0JBQTREO0FBQUE7QUFBQSxDQUExRSxDQUF6QjtNQUFNQyxTO0FBSVMsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZCQyxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFckJHLE1BRnFCO0FBQUEsTUFFYkMsU0FGYTs7QUFHNUIsTUFBSUMsSUFBSSxHQUFHLGdCQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFdBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUcsZUFBVjtBQUVBLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxrQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMsOENBQVo7QUFBd0IsVUFBTSxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQztBQUFvRCxRQUFJLEVBQUMsNkRBQXpEO0FBQTBFLE9BQUcsRUFBQyxjQUE5RTtBQUE2RixhQUFTLEVBQUUscUJBQUk7QUFBRUgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUFnQixLQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLDhDQUFaO0FBQXdCLFVBQU0sRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEM7QUFBb0QsUUFBSSxFQUFDLDZEQUF6RDtBQUEwRSxPQUFHLEVBQUMsV0FBOUU7QUFBMEYsYUFBUyxFQUFFLHFCQUFJO0FBQUVBLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFBZ0IsS0FBM0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyw4Q0FBWjtBQUF3QixVQUFNLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWhDO0FBQW9ELFFBQUksRUFBQyw2REFBekQ7QUFBMEUsT0FBRyxFQUFDLGNBQTlFO0FBQTZGLGFBQVMsRUFBRSxxQkFBSTtBQUFFQSxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQWdCLEtBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMsOENBQVo7QUFBd0IsVUFBTSxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQztBQUFvRCxRQUFJLEVBQUMsNkRBQXpEO0FBQTBFLE9BQUcsRUFBQyxjQUE5RTtBQUE2RixhQUFTLEVBQUUscUJBQUk7QUFBRUEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUFnQixLQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQU9JO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLEdBQUQ7QUFBSyxVQUFNLEVBQUU7QUFBRUksU0FBRyxFQUFFLE9BQVA7QUFBZ0JDLFNBQUcsRUFBRTtBQUFyQixLQUFiO0FBQStDLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQXREO0FBQTJGLFNBQUssRUFBRSxDQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFO0FBQUVILFNBQUcsRUFBRSxRQUFQO0FBQWlCQyxTQUFHLEVBQUU7QUFBdEIsS0FBckI7QUFBMEQsU0FBSyxFQUFFO0FBQ3pERyxTQUFHLFlBQUtDLDJEQUFMLENBRHNEO0FBQ3RDO0FBQ25CQyxVQUFJLEVBQUU7QUFDRkosYUFBSyxFQUFFLEVBREw7QUFFRkMsY0FBTSxFQUFFO0FBRk4sT0FGbUQ7QUFLdEQ7QUFDSEksYUFBTyxFQUFFO0FBQ0xDLGNBQU0sRUFBRTtBQUNSQyxXQUFDLEVBQUUsRUFESztBQUVSQyxXQUFDLEVBQUU7QUFGSyxTQURILENBSUY7O0FBSkU7QUFOZ0QsS0FBakU7QUFZUSxlQUFXLEVBQUU7QUFBQSxhQUFNaEIsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBWnJCO0FBYVEsY0FBVSxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBYnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlTUQsTUFBTSxJQUFJO0FBQUssU0FBSyxFQUFFO0FBQUVrQixhQUFPLEVBQUUsS0FBWDtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFmaEIsQ0FESixDQURBLENBUEosRUE0QkksTUFBQyxvREFBRDtBQUFZLFVBQU0sRUFBRWpCLE1BQXBCO0FBQTRCLGFBQVMsRUFBRUMsU0FBdkM7QUFBa0QsU0FBSyxFQUFFLENBQXpEO0FBQTRELFFBQUksRUFBRUMsSUFBbEU7QUFBd0UsU0FBSyxFQUFFQyxLQUEvRTtBQUFzRixPQUFHLEVBQUVDLEdBQTNGO0FBQWdHLE9BQUcsRUFBRWMsMERBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkosQ0FESjtBQWdDSDs7R0F2Q3VCdEIsSzs7TUFBQUEsSztBQXlDeEJ1Qiw2RUFBUyxDQUFDdkIsS0FBRCxFQUFPO0FBQUNPLE9BQUssRUFBQyxvQkFBUDtBQUE0QmlCLGFBQVcsRUFBQztBQUF4QyxDQUFQLENBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxDQUFDLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBcURBLENBQUMsQ0FBQ0MsT0FBRCxDQUF0RCxHQUFnRSxTQUFoRTtBQUF1TSxDQUFyTixDQUFzTixJQUF0TixFQUE0TixVQUFTRixDQUFULEVBQVc7QUFBQzs7QUFBYSxNQUFJQyxDQUFDLEdBQUMsWUFBVSxPQUFPRSxNQUFqQixJQUF5QkEsTUFBekIsSUFBaUNBLE1BQU0sQ0FBQ0MsTUFBUCxLQUFnQkEsTUFBakQsSUFBeURELE1BQS9EO0FBQUEsTUFBc0VFLENBQUMsR0FBQyxZQUFVLE9BQU9DLElBQWpCLElBQXVCQSxJQUF2QixJQUE2QkEsSUFBSSxDQUFDRixNQUFMLEtBQWNBLE1BQTNDLElBQW1ERSxJQUEzSDtBQUFBLE1BQWdJQyxDQUFDLEdBQUNOLENBQUMsSUFBRUksQ0FBSCxJQUFNRyxRQUFRLENBQUMsYUFBRCxDQUFSLEVBQXhJO0FBQUEsTUFBa0tDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDRyxNQUF0SztBQUFBLE1BQTZLQyxDQUFDLEdBQUNQLE1BQU0sQ0FBQ1EsU0FBdEw7QUFBQSxNQUFnTUMsQ0FBQyxHQUFDRixDQUFDLENBQUNHLGNBQXBNO0FBQUEsTUFBbU5DLENBQUMsR0FBQ0osQ0FBQyxDQUFDSyxRQUF2TjtBQUFBLE1BQWdPQyxDQUFDLEdBQUNSLENBQUMsR0FBQ0EsQ0FBQyxDQUFDUyxXQUFILEdBQWUsS0FBSyxDQUF2UDtBQUF5UCxNQUFJQyxDQUFDLEdBQUNmLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBdkI7QUFBZ0MsTUFBSUksQ0FBQyxHQUFDWCxDQUFDLEdBQUNBLENBQUMsQ0FBQ1MsV0FBSCxHQUFlLEtBQUssQ0FBM0I7O0FBQTZCLFdBQVNHLENBQVQsQ0FBV3JCLENBQVgsRUFBYTtBQUFDLFdBQU8sUUFBTUEsQ0FBTixHQUFRLEtBQUssQ0FBTCxLQUFTQSxDQUFULEdBQVcsb0JBQVgsR0FBZ0MsZUFBeEMsR0FBd0RvQixDQUFDLElBQUVBLENBQUMsSUFBSWhCLE1BQU0sQ0FBQ0osQ0FBRCxDQUFkLEdBQWtCLFVBQVNBLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQ1ksQ0FBQyxDQUFDUyxJQUFGLENBQU90QixDQUFQLEVBQVNpQixDQUFULENBQU47QUFBQSxVQUFrQlosQ0FBQyxHQUFDTCxDQUFDLENBQUNpQixDQUFELENBQXJCOztBQUF5QixVQUFHO0FBQUNqQixTQUFDLENBQUNpQixDQUFELENBQUQsR0FBSyxLQUFLLENBQVY7QUFBWSxZQUFJVixDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVMsT0FBekIsQ0FBeUIsT0FBTVAsQ0FBTixFQUFRLENBQUU7O0FBQUEsVUFBSVMsQ0FBQyxHQUFDTSxDQUFDLENBQUNPLElBQUYsQ0FBT3RCLENBQVAsQ0FBTjtBQUFnQixhQUFPTyxDQUFDLEtBQUdOLENBQUMsR0FBQ0QsQ0FBQyxDQUFDaUIsQ0FBRCxDQUFELEdBQUtaLENBQU4sR0FBUSxPQUFPTCxDQUFDLENBQUNpQixDQUFELENBQXBCLENBQUQsRUFBMEJSLENBQWpDO0FBQW1DLEtBQTNILENBQTRIVCxDQUE1SCxDQUFsQixHQUFpSixVQUFTQSxDQUFULEVBQVc7QUFBQyxhQUFPbUIsQ0FBQyxDQUFDRyxJQUFGLENBQU90QixDQUFQLENBQVA7QUFBaUIsS0FBN0IsQ0FBOEJBLENBQTlCLENBQWhOO0FBQWlQOztBQUFBLFdBQVN1QixDQUFULENBQVd2QixDQUFYLEVBQWE7QUFBQyxXQUFPLFFBQU1BLENBQU4sSUFBUyxZQUFVLE9BQU9BLENBQWpDO0FBQW1DOztBQUFBLE1BQUl3QixDQUFDLEdBQUNDLEtBQUssQ0FBQ0MsT0FBWjtBQUFBLE1BQW9CQyxDQUFDLEdBQUMsSUFBdEI7QUFBMkIsTUFBSUMsQ0FBQyxHQUFDLE1BQU47O0FBQWEsV0FBU0MsQ0FBVCxDQUFXN0IsQ0FBWCxFQUFhO0FBQUMsV0FBT0EsQ0FBQyxHQUFDQSxDQUFDLENBQUM4QixLQUFGLENBQVEsQ0FBUixFQUFVLFVBQVM5QixDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK0IsTUFBWixFQUFtQjlCLENBQUMsTUFBSTBCLENBQUMsQ0FBQ0ssSUFBRixDQUFPaEMsQ0FBQyxDQUFDaUMsTUFBRixDQUFTaEMsQ0FBVCxDQUFQLENBQXhCO0FBQTZDO0FBQTdDOztBQUE4QyxhQUFPQSxDQUFQO0FBQVMsS0FBbkUsQ0FBb0VELENBQXBFLElBQXVFLENBQWpGLEVBQW9Ga0MsT0FBcEYsQ0FBNEZOLENBQTVGLEVBQThGLEVBQTlGLENBQUQsR0FBbUc1QixDQUEzRztBQUE2Rzs7QUFBQSxXQUFTbUMsQ0FBVCxDQUFXbkMsQ0FBWCxFQUFhO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLE9BQU9ELENBQWI7QUFBZSxXQUFPLFFBQU1BLENBQU4sS0FBVSxZQUFVQyxDQUFWLElBQWEsY0FBWUEsQ0FBbkMsQ0FBUDtBQUE2Qzs7QUFBQSxNQUFJUCxDQUFDLEdBQUMsb0JBQU47QUFBQSxNQUEyQjBDLENBQUMsR0FBQyxZQUE3QjtBQUFBLE1BQTBDQyxDQUFDLEdBQUMsYUFBNUM7QUFBQSxNQUEwREMsQ0FBQyxHQUFDQyxRQUE1RDs7QUFBcUUsV0FBU0MsQ0FBVCxDQUFXeEMsQ0FBWCxFQUFhO0FBQUMsUUFBRyxZQUFVLE9BQU9BLENBQXBCLEVBQXNCLE9BQU9BLENBQVA7QUFBUyxRQUFHLFVBQVNBLENBQVQsRUFBVztBQUFDLGFBQU0sWUFBVSxPQUFPQSxDQUFqQixJQUFvQnVCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNLHFCQUFtQnFCLENBQUMsQ0FBQ3JCLENBQUQsQ0FBcEQ7QUFBd0QsS0FBcEUsQ0FBcUVBLENBQXJFLENBQUgsRUFBMkUsT0FBT3lDLEdBQVA7O0FBQVcsUUFBR04sQ0FBQyxDQUFDbkMsQ0FBRCxDQUFKLEVBQVE7QUFBQyxVQUFJQyxDQUFDLEdBQUMsY0FBWSxPQUFPRCxDQUFDLENBQUMwQyxPQUFyQixHQUE2QjFDLENBQUMsQ0FBQzBDLE9BQUYsRUFBN0IsR0FBeUMxQyxDQUEvQztBQUFpREEsT0FBQyxHQUFDbUMsQ0FBQyxDQUFDbEMsQ0FBRCxDQUFELEdBQUtBLENBQUMsR0FBQyxFQUFQLEdBQVVBLENBQVo7QUFBYzs7QUFBQSxRQUFHLFlBQVUsT0FBT0QsQ0FBcEIsRUFBc0IsT0FBTyxNQUFJQSxDQUFKLEdBQU1BLENBQU4sR0FBUSxDQUFDQSxDQUFoQjtBQUFrQkEsS0FBQyxHQUFDNkIsQ0FBQyxDQUFDN0IsQ0FBRCxDQUFIO0FBQU8sUUFBSUssQ0FBQyxHQUFDK0IsQ0FBQyxDQUFDSixJQUFGLENBQU9oQyxDQUFQLENBQU47QUFBZ0IsV0FBT0ssQ0FBQyxJQUFFZ0MsQ0FBQyxDQUFDTCxJQUFGLENBQU9oQyxDQUFQLENBQUgsR0FBYXNDLENBQUMsQ0FBQ3RDLENBQUMsQ0FBQzhCLEtBQUYsQ0FBUSxDQUFSLENBQUQsRUFBWXpCLENBQUMsR0FBQyxDQUFELEdBQUcsQ0FBaEIsQ0FBZCxHQUFpQ1gsQ0FBQyxDQUFDc0MsSUFBRixDQUFPaEMsQ0FBUCxJQUFVeUMsR0FBVixHQUFjLENBQUN6QyxDQUF2RDtBQUF5RDs7QUFBQSxNQUFJMkMsQ0FBQyxHQUFDLElBQUUsQ0FBUjs7QUFBVSxXQUFTbEQsQ0FBVCxDQUFXTyxDQUFYLEVBQWE7QUFBQyxRQUFJQyxDQUFDLEdBQUMsVUFBU0QsQ0FBVCxFQUFXO0FBQUMsYUFBT0EsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ3dDLENBQUMsQ0FBQ3hDLENBQUQsQ0FBSixNQUFXMkMsQ0FBWCxJQUFjM0MsQ0FBQyxLQUFHLENBQUMsQ0FBRCxHQUFHLENBQXJCLEdBQXVCLHlCQUF1QkEsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFDLENBQUwsR0FBTyxDQUE5QixDQUF2QixHQUF3REEsQ0FBQyxJQUFFQSxDQUFILEdBQUtBLENBQUwsR0FBTyxDQUFoRSxHQUFrRSxNQUFJQSxDQUFKLEdBQU1BLENBQU4sR0FBUSxDQUFsRjtBQUFvRixLQUFoRyxDQUFpR0EsQ0FBakcsQ0FBTjtBQUFBLFFBQTBHSyxDQUFDLEdBQUNKLENBQUMsR0FBQyxDQUE5Rzs7QUFBZ0gsV0FBT0EsQ0FBQyxJQUFFQSxDQUFILEdBQUtJLENBQUMsR0FBQ0osQ0FBQyxHQUFDSSxDQUFILEdBQUtKLENBQVgsR0FBYSxDQUFwQjtBQUFzQjs7QUFBQSxXQUFTMkMsQ0FBVCxDQUFXNUMsQ0FBWCxFQUFhO0FBQUMsV0FBT0EsQ0FBUDtBQUFTOztBQUFBLFdBQVM2QyxDQUFULENBQVc3QyxDQUFYLEVBQWE7QUFBQyxRQUFHLENBQUNtQyxDQUFDLENBQUNuQyxDQUFELENBQUwsRUFBUyxPQUFNLENBQUMsQ0FBUDtBQUFTLFFBQUlDLENBQUMsR0FBQ29CLENBQUMsQ0FBQ3JCLENBQUQsQ0FBUDtBQUFXLFdBQU0sdUJBQXFCQyxDQUFyQixJQUF3QixnQ0FBOEJBLENBQXRELElBQXlELDRCQUEwQkEsQ0FBbkYsSUFBc0Ysb0JBQWtCQSxDQUE5RztBQUFnSDs7QUFBQSxNQUFJNkMsQ0FBSjtBQUFBLE1BQU1DLENBQUMsR0FBQ3hDLENBQUMsQ0FBQyxvQkFBRCxDQUFUO0FBQUEsTUFBZ0N5QyxDQUFDLEdBQUMsQ0FBQ0YsQ0FBQyxHQUFDLFNBQVNHLElBQVQsQ0FBY0YsQ0FBQyxJQUFFQSxDQUFDLENBQUNHLElBQUwsSUFBV0gsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLFFBQWxCLElBQTRCLEVBQTFDLENBQUgsSUFBa0QsbUJBQWlCTCxDQUFuRSxHQUFxRSxFQUF2RztBQUEwRyxNQUFJTSxDQUFDLEdBQUM1QyxRQUFRLENBQUNJLFNBQVQsQ0FBbUJJLFFBQXpCO0FBQWtDLE1BQUlxQyxDQUFDLEdBQUMsNkJBQU47QUFBQSxNQUFvQ0MsQ0FBQyxHQUFDOUMsUUFBUSxDQUFDSSxTQUEvQztBQUFBLE1BQXlEMkMsQ0FBQyxHQUFDbkQsTUFBTSxDQUFDUSxTQUFsRTtBQUFBLE1BQTRFNEMsQ0FBQyxHQUFDRixDQUFDLENBQUN0QyxRQUFoRjtBQUFBLE1BQXlGeUMsQ0FBQyxHQUFDRixDQUFDLENBQUN6QyxjQUE3RjtBQUFBLE1BQTRHNEMsQ0FBQyxHQUFDQyxNQUFNLENBQUMsTUFBSUgsQ0FBQyxDQUFDbEMsSUFBRixDQUFPbUMsQ0FBUCxFQUFVdkIsT0FBVixDQUFrQixxQkFBbEIsRUFBd0MsTUFBeEMsRUFBZ0RBLE9BQWhELENBQXdELHdEQUF4RCxFQUFpSCxPQUFqSCxDQUFKLEdBQThILEdBQS9ILENBQXBIOztBQUF3UCxXQUFTMEIsQ0FBVCxDQUFXNUQsQ0FBWCxFQUFhO0FBQUMsV0FBTSxFQUFFLENBQUNtQyxDQUFDLENBQUNuQyxDQUFELENBQUYsS0FBUUMsQ0FBQyxHQUFDRCxDQUFGLEVBQUlnRCxDQUFDLElBQUVBLENBQUMsSUFBSS9DLENBQXBCLENBQUYsS0FBMkIsQ0FBQzRDLENBQUMsQ0FBQzdDLENBQUQsQ0FBRCxHQUFLMEQsQ0FBTCxHQUFPTCxDQUFSLEVBQVdyQixJQUFYLENBQWdCLFVBQVNoQyxDQUFULEVBQVc7QUFBQyxVQUFHLFFBQU1BLENBQVQsRUFBVztBQUFDLFlBQUc7QUFBQyxpQkFBT29ELENBQUMsQ0FBQzlCLElBQUYsQ0FBT3RCLENBQVAsQ0FBUDtBQUFpQixTQUFyQixDQUFxQixPQUFNQSxDQUFOLEVBQVEsQ0FBRTs7QUFBQSxZQUFHO0FBQUMsaUJBQU9BLENBQUMsR0FBQyxFQUFUO0FBQVksU0FBaEIsQ0FBZ0IsT0FBTUEsQ0FBTixFQUFRLENBQUU7QUFBQzs7QUFBQSxhQUFNLEVBQU47QUFBUyxLQUEzRixDQUE0RkEsQ0FBNUYsQ0FBaEIsQ0FBakM7QUFBaUosUUFBSUMsQ0FBSjtBQUFNOztBQUFBLFdBQVM0RCxDQUFULENBQVc3RCxDQUFYLEVBQWFDLENBQWIsRUFBZUksQ0FBZixFQUFpQjtBQUFDLFlBQU9BLENBQUMsQ0FBQzBCLE1BQVQ7QUFBaUIsV0FBSyxDQUFMO0FBQU8sZUFBTy9CLENBQUMsQ0FBQ3NCLElBQUYsQ0FBT3JCLENBQVAsQ0FBUDs7QUFBaUIsV0FBSyxDQUFMO0FBQU8sZUFBT0QsQ0FBQyxDQUFDc0IsSUFBRixDQUFPckIsQ0FBUCxFQUFTSSxDQUFDLENBQUMsQ0FBRCxDQUFWLENBQVA7O0FBQXNCLFdBQUssQ0FBTDtBQUFPLGVBQU9MLENBQUMsQ0FBQ3NCLElBQUYsQ0FBT3JCLENBQVAsRUFBU0ksQ0FBQyxDQUFDLENBQUQsQ0FBVixFQUFjQSxDQUFDLENBQUMsQ0FBRCxDQUFmLENBQVA7O0FBQTJCLFdBQUssQ0FBTDtBQUFPLGVBQU9MLENBQUMsQ0FBQ3NCLElBQUYsQ0FBT3JCLENBQVAsRUFBU0ksQ0FBQyxDQUFDLENBQUQsQ0FBVixFQUFjQSxDQUFDLENBQUMsQ0FBRCxDQUFmLEVBQW1CQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixDQUFQO0FBQS9HOztBQUErSSxXQUFPTCxDQUFDLENBQUM4RCxLQUFGLENBQVE3RCxDQUFSLEVBQVVJLENBQVYsQ0FBUDtBQUFvQjs7QUFBQSxNQUFJMEQsQ0FBQyxHQUFDQyxJQUFJLENBQUNDLEdBQVg7O0FBQWUsTUFBSUMsQ0FBSjtBQUFBLE1BQU1DLENBQU47QUFBQSxNQUFRQyxDQUFSO0FBQUEsTUFBVUMsQ0FBQyxHQUFDLFlBQVU7QUFBQyxRQUFHO0FBQUMsVUFBSXJFLENBQUMsR0FBQzRELENBQUMsQ0FBQzNELENBQUMsR0FBQyxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQU8sUUFBTUQsQ0FBTixHQUFRLEtBQUssQ0FBYixHQUFlQSxDQUFDLENBQUNDLENBQUQsQ0FBdkI7QUFBMkIsT0FBekMsQ0FBMENHLE1BQTFDLEVBQWlELGdCQUFqRCxDQUFILENBQUQsR0FBd0VILENBQXhFLEdBQTBFLEtBQUssQ0FBckY7QUFBdUYsYUFBT0QsQ0FBQyxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxDQUFELEVBQVlBLENBQW5CO0FBQXFCLEtBQWhILENBQWdILE9BQU1BLENBQU4sRUFBUSxDQUFFOztBQUFBLFFBQUlDLENBQUo7QUFBTSxHQUEzSSxFQUFaO0FBQUEsTUFBMEpxRSxDQUFDLEdBQUNELENBQTVKO0FBQUEsTUFBOEpFLENBQUMsR0FBQ0QsQ0FBQyxHQUFDLFVBQVN0RSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFdBQU9xRSxDQUFDLENBQUN0RSxDQUFELEVBQUcsVUFBSCxFQUFjO0FBQUN3RSxrQkFBWSxFQUFDLENBQUMsQ0FBZjtBQUFpQkMsZ0JBQVUsRUFBQyxDQUFDLENBQTdCO0FBQStCQyxXQUFLLEdBQUVyRSxDQUFDLEdBQUNKLENBQUYsRUFBSSxZQUFVO0FBQUMsZUFBT0ksQ0FBUDtBQUFTLE9BQTFCLENBQXBDO0FBQWdFc0UsY0FBUSxFQUFDLENBQUM7QUFBMUUsS0FBZCxDQUFSO0FBQW9HLFFBQUl0RSxDQUFKO0FBQU0sR0FBekgsR0FBMEh1QyxDQUEzUjtBQUFBLE1BQTZSZ0MsQ0FBQyxJQUFFVixDQUFDLEdBQUNLLENBQUYsRUFBSUosQ0FBQyxHQUFDLENBQU4sRUFBUUMsQ0FBQyxHQUFDLENBQVYsRUFBWSxZQUFVO0FBQUMsUUFBSXBFLENBQUMsR0FBQytELENBQUMsRUFBUDtBQUFBLFFBQVU5RCxDQUFDLEdBQUMsTUFBSUQsQ0FBQyxHQUFDb0UsQ0FBTixDQUFaOztBQUFxQixRQUFHQSxDQUFDLEdBQUNwRSxDQUFGLEVBQUlDLENBQUMsR0FBQyxDQUFULEVBQVc7QUFBQyxVQUFHLEVBQUVrRSxDQUFGLElBQUssR0FBUixFQUFZLE9BQU9VLFNBQVMsQ0FBQyxDQUFELENBQWhCO0FBQW9CLEtBQTVDLE1BQWlEVixDQUFDLEdBQUMsQ0FBRjs7QUFBSSxXQUFPRCxDQUFDLENBQUNKLEtBQUYsQ0FBUSxLQUFLLENBQWIsRUFBZWUsU0FBZixDQUFQO0FBQWlDLEdBQXBJLENBQTlSO0FBQUEsTUFBb2FDLENBQUMsR0FBQ0YsQ0FBdGE7O0FBQXdhLFdBQVNHLENBQVQsQ0FBVy9FLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsU0FBSSxJQUFJSSxDQUFDLEdBQUMsQ0FBQyxDQUFQLEVBQVNFLENBQUMsR0FBQyxRQUFNUCxDQUFOLEdBQVEsQ0FBUixHQUFVQSxDQUFDLENBQUMrQixNQUEzQixFQUFrQyxFQUFFMUIsQ0FBRixHQUFJRSxDQUFKLElBQU8sQ0FBQyxDQUFELEtBQUtOLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDSyxDQUFELENBQUYsRUFBTUEsQ0FBTixFQUFRTCxDQUFSLENBQS9DO0FBQTJEO0FBQTNEOztBQUE0RCxXQUFPQSxDQUFQO0FBQVM7O0FBQUEsTUFBSWdGLENBQUMsR0FBQyxrQkFBTjs7QUFBeUIsV0FBU0MsQ0FBVCxDQUFXakYsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFJSSxDQUFDLEdBQUMsT0FBT0wsQ0FBYjtBQUFlLFdBQU0sQ0FBQyxFQUFFQyxDQUFDLEdBQUMsUUFBTUEsQ0FBTixHQUFRLGdCQUFSLEdBQXlCQSxDQUE3QixDQUFELEtBQW1DLFlBQVVJLENBQVYsSUFBYSxZQUFVQSxDQUFWLElBQWEyRSxDQUFDLENBQUNoRCxJQUFGLENBQU9oQyxDQUFQLENBQTdELEtBQXlFQSxDQUFDLEdBQUMsQ0FBQyxDQUE1RSxJQUErRUEsQ0FBQyxHQUFDLENBQUYsSUFBSyxDQUFwRixJQUF1RkEsQ0FBQyxHQUFDQyxDQUEvRjtBQUFpRzs7QUFBQSxXQUFTaUYsQ0FBVCxDQUFXbEYsQ0FBWCxFQUFhQyxDQUFiLEVBQWVJLENBQWYsRUFBaUI7QUFBQyxtQkFBYUosQ0FBYixJQUFnQnFFLENBQWhCLEdBQWtCQSxDQUFDLENBQUN0RSxDQUFELEVBQUdDLENBQUgsRUFBSztBQUFDdUUsa0JBQVksRUFBQyxDQUFDLENBQWY7QUFBaUJDLGdCQUFVLEVBQUMsQ0FBQyxDQUE3QjtBQUErQkMsV0FBSyxFQUFDckUsQ0FBckM7QUFBdUNzRSxjQUFRLEVBQUMsQ0FBQztBQUFqRCxLQUFMLENBQW5CLEdBQTZFM0UsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBS0ksQ0FBbEY7QUFBb0Y7O0FBQUEsV0FBUzhFLENBQVQsQ0FBV25GLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsV0FBT0QsQ0FBQyxLQUFHQyxDQUFKLElBQU9ELENBQUMsSUFBRUEsQ0FBSCxJQUFNQyxDQUFDLElBQUVBLENBQXZCO0FBQXlCOztBQUFBLE1BQUltRixDQUFDLEdBQUNoRixNQUFNLENBQUNRLFNBQVAsQ0FBaUJFLGNBQXZCOztBQUFzQyxXQUFTdUUsRUFBVCxDQUFZckYsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFFBQUlFLENBQUMsR0FBQ1AsQ0FBQyxDQUFDQyxDQUFELENBQVA7QUFBV21GLEtBQUMsQ0FBQzlELElBQUYsQ0FBT3RCLENBQVAsRUFBU0MsQ0FBVCxLQUFha0YsQ0FBQyxDQUFDNUUsQ0FBRCxFQUFHRixDQUFILENBQWQsS0FBc0IsS0FBSyxDQUFMLEtBQVNBLENBQVQsSUFBWUosQ0FBQyxJQUFJRCxDQUF2QyxLQUEyQ2tGLENBQUMsQ0FBQ2xGLENBQUQsRUFBR0MsQ0FBSCxFQUFLSSxDQUFMLENBQTVDO0FBQW9EOztBQUFBLE1BQUlpRixFQUFFLEdBQUNDLElBQUksQ0FBQ0MsR0FBWjs7QUFBZ0IsV0FBU0MsRUFBVCxDQUFZekYsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsV0FBTzZFLENBQUMsQ0FBQyxVQUFTOUUsQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDLGFBQU9KLENBQUMsR0FBQ3FGLEVBQUUsQ0FBQyxLQUFLLENBQUwsS0FBU3JGLENBQVQsR0FBV0QsQ0FBQyxDQUFDK0IsTUFBRixHQUFTLENBQXBCLEdBQXNCOUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBSixFQUFnQyxZQUFVO0FBQUMsYUFBSSxJQUFJTSxDQUFDLEdBQUNzRSxTQUFOLEVBQWdCcEUsQ0FBQyxHQUFDLENBQUMsQ0FBbkIsRUFBcUJFLENBQUMsR0FBQzJFLEVBQUUsQ0FBQy9FLENBQUMsQ0FBQ3dCLE1BQUYsR0FBUzlCLENBQVYsRUFBWSxDQUFaLENBQXpCLEVBQXdDWSxDQUFDLEdBQUNZLEtBQUssQ0FBQ2QsQ0FBRCxDQUFuRCxFQUF1RCxFQUFFRixDQUFGLEdBQUlFLENBQTNEO0FBQThERSxXQUFDLENBQUNKLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNOLENBQUMsR0FBQ1EsQ0FBSCxDQUFOO0FBQTlEOztBQUEwRUEsU0FBQyxHQUFDLENBQUMsQ0FBSDs7QUFBSyxhQUFJLElBQUlNLENBQUMsR0FBQ1UsS0FBSyxDQUFDeEIsQ0FBQyxHQUFDLENBQUgsQ0FBZixFQUFxQixFQUFFUSxDQUFGLEdBQUlSLENBQXpCO0FBQTRCYyxXQUFDLENBQUNOLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNFLENBQUQsQ0FBTjtBQUE1Qjs7QUFBc0MsZUFBT00sQ0FBQyxDQUFDZCxDQUFELENBQUQsR0FBS0ksQ0FBQyxDQUFDUSxDQUFELENBQU4sRUFBVWdELENBQUMsQ0FBQzdELENBQUQsRUFBRyxJQUFILEVBQVFlLENBQVIsQ0FBbEI7QUFBNkIsT0FBcE07QUFBcU0sS0FBck4sQ0FBc05mLENBQXROLEVBQXdOQyxDQUF4TixFQUEwTjJDLENBQTFOLENBQUQsRUFBOE41QyxDQUFDLEdBQUMsRUFBaE8sQ0FBUjtBQUE0Tzs7QUFBQSxXQUFTMEYsRUFBVCxDQUFZMUYsQ0FBWixFQUFjO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLElBQW9CQSxDQUFDLEdBQUMsQ0FBQyxDQUF2QixJQUEwQkEsQ0FBQyxHQUFDLENBQUYsSUFBSyxDQUEvQixJQUFrQ0EsQ0FBQyxJQUFFLGdCQUEzQztBQUE0RDs7QUFBQSxXQUFTMkYsRUFBVCxDQUFZM0YsQ0FBWixFQUFjO0FBQUMsV0FBTyxRQUFNQSxDQUFOLElBQVMwRixFQUFFLENBQUMxRixDQUFDLENBQUMrQixNQUFILENBQVgsSUFBdUIsQ0FBQ2MsQ0FBQyxDQUFDN0MsQ0FBRCxDQUFoQztBQUFvQzs7QUFBQSxXQUFTNEYsRUFBVCxDQUFZNUYsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFFBQUcsQ0FBQzhCLENBQUMsQ0FBQzlCLENBQUQsQ0FBTCxFQUFTLE9BQU0sQ0FBQyxDQUFQO0FBQVMsUUFBSUUsQ0FBQyxHQUFDLE9BQU9OLENBQWI7QUFBZSxXQUFNLENBQUMsRUFBRSxZQUFVTSxDQUFWLEdBQVlvRixFQUFFLENBQUN0RixDQUFELENBQUYsSUFBTzRFLENBQUMsQ0FBQ2hGLENBQUQsRUFBR0ksQ0FBQyxDQUFDMEIsTUFBTCxDQUFwQixHQUFpQyxZQUFVeEIsQ0FBVixJQUFhTixDQUFDLElBQUlJLENBQXJELENBQUQsSUFBMEQ4RSxDQUFDLENBQUM5RSxDQUFDLENBQUNKLENBQUQsQ0FBRixFQUFNRCxDQUFOLENBQWpFO0FBQTBFOztBQUFBLE1BQUk2RixFQUFFLEdBQUN6RixNQUFNLENBQUNRLFNBQWQ7O0FBQXdCLFdBQVNrRixFQUFULENBQVk5RixDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUNELENBQUMsSUFBRUEsQ0FBQyxDQUFDK0YsV0FBWDtBQUF1QixXQUFPL0YsQ0FBQyxNQUFJLGNBQVksT0FBT0MsQ0FBbkIsSUFBc0JBLENBQUMsQ0FBQ1csU0FBeEIsSUFBbUNpRixFQUF2QyxDQUFSO0FBQW1EOztBQUFBLFdBQVNHLEVBQVQsQ0FBWWhHLENBQVosRUFBYztBQUFDLFdBQU91QixDQUFDLENBQUN2QixDQUFELENBQUQsSUFBTSx3QkFBc0JxQixDQUFDLENBQUNyQixDQUFELENBQXBDO0FBQXdDOztBQUFBLE1BQUlpRyxFQUFFLEdBQUM3RixNQUFNLENBQUNRLFNBQWQ7QUFBQSxNQUF3QnNGLEVBQUUsR0FBQ0QsRUFBRSxDQUFDbkYsY0FBOUI7QUFBQSxNQUE2Q3FGLEVBQUUsR0FBQ0YsRUFBRSxDQUFDRyxvQkFBbkQ7QUFBQSxNQUF3RUMsRUFBRSxHQUFDTCxFQUFFLENBQUMsWUFBVTtBQUFDLFdBQU9uQixTQUFQO0FBQWlCLEdBQTVCLEVBQUQsQ0FBRixHQUFtQ21CLEVBQW5DLEdBQXNDLFVBQVNoRyxDQUFULEVBQVc7QUFBQyxXQUFPdUIsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELElBQU1rRyxFQUFFLENBQUM1RSxJQUFILENBQVF0QixDQUFSLEVBQVUsUUFBVixDQUFOLElBQTJCLENBQUNtRyxFQUFFLENBQUM3RSxJQUFILENBQVF0QixDQUFSLEVBQVUsUUFBVixDQUFuQztBQUF1RCxHQUFwTDtBQUFBLE1BQXFMc0csRUFBRSxHQUFDRCxFQUF4TDs7QUFBMkwsTUFBSUUsRUFBRSxHQUFDLFlBQVUsT0FBT3ZHLENBQWpCLElBQW9CQSxDQUFwQixJQUF1QixDQUFDQSxDQUFDLENBQUN3RyxRQUExQixJQUFvQ3hHLENBQTNDO0FBQUEsTUFBNkN5RyxFQUFFLEdBQUNGLEVBQUUsSUFBRSxZQUFVLE9BQU9uSSxNQUFyQixJQUE2QkEsTUFBN0IsSUFBcUMsQ0FBQ0EsTUFBTSxDQUFDb0ksUUFBN0MsSUFBdURwSSxNQUF2RztBQUFBLE1BQThHc0ksRUFBRSxHQUFDRCxFQUFFLElBQUVBLEVBQUUsQ0FBQ3ZHLE9BQUgsS0FBYXFHLEVBQWpCLEdBQW9CaEcsQ0FBQyxDQUFDb0csTUFBdEIsR0FBNkIsS0FBSyxDQUFuSjtBQUFBLE1BQXFKQyxFQUFFLEdBQUMsQ0FBQ0YsRUFBRSxHQUFDQSxFQUFFLENBQUNHLFFBQUosR0FBYSxLQUFLLENBQXJCLEtBQXlCLFlBQVU7QUFBQyxXQUFNLENBQUMsQ0FBUDtBQUFTLEdBQXJNO0FBQUEsTUFBc01DLEVBQUUsR0FBQyxFQUF6TTs7QUFBNE1BLElBQUUsQ0FBQyx1QkFBRCxDQUFGLEdBQTRCQSxFQUFFLENBQUMsdUJBQUQsQ0FBRixHQUE0QkEsRUFBRSxDQUFDLG9CQUFELENBQUYsR0FBeUJBLEVBQUUsQ0FBQyxxQkFBRCxDQUFGLEdBQTBCQSxFQUFFLENBQUMscUJBQUQsQ0FBRixHQUEwQkEsRUFBRSxDQUFDLHFCQUFELENBQUYsR0FBMEJBLEVBQUUsQ0FBQyw0QkFBRCxDQUFGLEdBQWlDQSxFQUFFLENBQUMsc0JBQUQsQ0FBRixHQUEyQkEsRUFBRSxDQUFDLHNCQUFELENBQUYsR0FBMkIsQ0FBQyxDQUF2UCxFQUF5UEEsRUFBRSxDQUFDLG9CQUFELENBQUYsR0FBeUJBLEVBQUUsQ0FBQyxnQkFBRCxDQUFGLEdBQXFCQSxFQUFFLENBQUMsc0JBQUQsQ0FBRixHQUEyQkEsRUFBRSxDQUFDLGtCQUFELENBQUYsR0FBdUJBLEVBQUUsQ0FBQyxtQkFBRCxDQUFGLEdBQXdCQSxFQUFFLENBQUMsZUFBRCxDQUFGLEdBQW9CQSxFQUFFLENBQUMsZ0JBQUQsQ0FBRixHQUFxQkEsRUFBRSxDQUFDLG1CQUFELENBQUYsR0FBd0JBLEVBQUUsQ0FBQyxjQUFELENBQUYsR0FBbUJBLEVBQUUsQ0FBQyxpQkFBRCxDQUFGLEdBQXNCQSxFQUFFLENBQUMsaUJBQUQsQ0FBRixHQUFzQkEsRUFBRSxDQUFDLGlCQUFELENBQUYsR0FBc0JBLEVBQUUsQ0FBQyxjQUFELENBQUYsR0FBbUJBLEVBQUUsQ0FBQyxpQkFBRCxDQUFGLEdBQXNCQSxFQUFFLENBQUMsa0JBQUQsQ0FBRixHQUF1QixDQUFDLENBQXhrQjs7QUFBMGtCLE1BQUlDLEVBQUUsR0FBQyxZQUFVLE9BQU8vRyxDQUFqQixJQUFvQkEsQ0FBcEIsSUFBdUIsQ0FBQ0EsQ0FBQyxDQUFDd0csUUFBMUIsSUFBb0N4RyxDQUEzQztBQUFBLE1BQTZDZ0gsRUFBRSxHQUFDRCxFQUFFLElBQUUsWUFBVSxPQUFPM0ksTUFBckIsSUFBNkJBLE1BQTdCLElBQXFDLENBQUNBLE1BQU0sQ0FBQ29JLFFBQTdDLElBQXVEcEksTUFBdkc7QUFBQSxNQUE4RzZJLEVBQUUsR0FBQ0QsRUFBRSxJQUFFQSxFQUFFLENBQUM5RyxPQUFILEtBQWE2RyxFQUFqQixJQUFxQjlHLENBQUMsQ0FBQ2lILE9BQXhJO0FBQUEsTUFBZ0pDLEVBQUUsR0FBQyxZQUFVO0FBQUMsUUFBRztBQUFDLFVBQUluSCxDQUFDLEdBQUNnSCxFQUFFLElBQUVBLEVBQUUsQ0FBQ0ksT0FBUCxJQUFnQkosRUFBRSxDQUFDSSxPQUFILENBQVcsTUFBWCxFQUFtQkMsS0FBekM7O0FBQStDLGFBQU9ySCxDQUFDLElBQUVpSCxFQUFFLElBQUVBLEVBQUUsQ0FBQ0ssT0FBUCxJQUFnQkwsRUFBRSxDQUFDSyxPQUFILENBQVcsTUFBWCxDQUExQjtBQUE2QyxLQUFoRyxDQUFnRyxPQUFNdEgsQ0FBTixFQUFRLENBQUU7QUFBQyxHQUF0SCxFQUFuSjtBQUFBLE1BQTRRdUgsRUFBRSxHQUFDSixFQUFFLElBQUVBLEVBQUUsQ0FBQ0ssWUFBdFI7QUFBQSxNQUFtU0MsRUFBRSxHQUFDRixFQUFFLEdBQUMsVUFBU3ZILENBQVQsRUFBVztBQUFDLFdBQU8sVUFBU0MsQ0FBVCxFQUFXO0FBQUMsYUFBT0QsQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBWSxLQUEvQjtBQUFnQyxHQUE1QyxDQUE2Q3NILEVBQTdDLENBQUQsR0FBa0QsVUFBU3ZILENBQVQsRUFBVztBQUFDLFdBQU91QixDQUFDLENBQUN2QixDQUFELENBQUQsSUFBTTBGLEVBQUUsQ0FBQzFGLENBQUMsQ0FBQytCLE1BQUgsQ0FBUixJQUFvQixDQUFDLENBQUMrRSxFQUFFLENBQUN6RixDQUFDLENBQUNyQixDQUFELENBQUYsQ0FBL0I7QUFBc0MsR0FBNVk7QUFBQSxNQUE2WTBILEVBQUUsR0FBQ0QsRUFBaFo7QUFBQSxNQUFtWkUsRUFBRSxHQUFDdkgsTUFBTSxDQUFDUSxTQUFQLENBQWlCRSxjQUF2YTs7QUFBc2IsV0FBUzhHLEVBQVQsQ0FBWTVILENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFFBQUlJLENBQUMsR0FBQ21CLENBQUMsQ0FBQ3hCLENBQUQsQ0FBUDtBQUFBLFFBQVdPLENBQUMsR0FBQyxDQUFDRixDQUFELElBQUlpRyxFQUFFLENBQUN0RyxDQUFELENBQW5CO0FBQUEsUUFBdUJTLENBQUMsR0FBQyxDQUFDSixDQUFELElBQUksQ0FBQ0UsQ0FBTCxJQUFRcUcsRUFBRSxDQUFDNUcsQ0FBRCxDQUFuQztBQUFBLFFBQXVDVyxDQUFDLEdBQUMsQ0FBQ04sQ0FBRCxJQUFJLENBQUNFLENBQUwsSUFBUSxDQUFDRSxDQUFULElBQVlpSCxFQUFFLENBQUMxSCxDQUFELENBQXZEO0FBQUEsUUFBMkRhLENBQUMsR0FBQ1IsQ0FBQyxJQUFFRSxDQUFILElBQU1FLENBQU4sSUFBU0UsQ0FBdEU7QUFBQSxRQUF3RUksQ0FBQyxHQUFDRixDQUFDLEdBQUMsVUFBU2IsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUlJLENBQUMsR0FBQyxDQUFDLENBQVAsRUFBU0UsQ0FBQyxHQUFDa0IsS0FBSyxDQUFDekIsQ0FBRCxDQUFwQixFQUF3QixFQUFFSyxDQUFGLEdBQUlMLENBQTVCO0FBQStCTyxTQUFDLENBQUNGLENBQUQsQ0FBRCxHQUFLSixDQUFDLENBQUNJLENBQUQsQ0FBTjtBQUEvQjs7QUFBeUMsYUFBT0UsQ0FBUDtBQUFTLEtBQWhFLENBQWlFUCxDQUFDLENBQUMrQixNQUFuRSxFQUEwRThGLE1BQTFFLENBQUQsR0FBbUYsRUFBOUo7QUFBQSxRQUFpSzVHLENBQUMsR0FBQ0YsQ0FBQyxDQUFDZ0IsTUFBcks7O0FBQTRLLFNBQUksSUFBSVosQ0FBUixJQUFhbkIsQ0FBYjtBQUFlLE9BQUNDLENBQUQsSUFBSSxDQUFDMEgsRUFBRSxDQUFDckcsSUFBSCxDQUFRdEIsQ0FBUixFQUFVbUIsQ0FBVixDQUFMLElBQW1CTixDQUFDLEtBQUcsWUFBVU0sQ0FBVixJQUFhVixDQUFDLEtBQUcsWUFBVVUsQ0FBVixJQUFhLFlBQVVBLENBQTFCLENBQWQsSUFBNENSLENBQUMsS0FBRyxZQUFVUSxDQUFWLElBQWEsZ0JBQWNBLENBQTNCLElBQThCLGdCQUFjQSxDQUEvQyxDQUE3QyxJQUFnRzhELENBQUMsQ0FBQzlELENBQUQsRUFBR0YsQ0FBSCxDQUFwRyxDQUFwQixJQUFnSUYsQ0FBQyxDQUFDK0csSUFBRixDQUFPM0csQ0FBUCxDQUFoSTtBQUFmOztBQUF5SixXQUFPSixDQUFQO0FBQVM7O0FBQUEsV0FBU2dILEVBQVQsQ0FBWS9ILENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFdBQU8sVUFBU0ksQ0FBVCxFQUFXO0FBQUMsYUFBT0wsQ0FBQyxDQUFDQyxDQUFDLENBQUNJLENBQUQsQ0FBRixDQUFSO0FBQWUsS0FBbEM7QUFBbUM7O0FBQUEsTUFBSTJILEVBQUUsR0FBQ0QsRUFBRSxDQUFDM0gsTUFBTSxDQUFDOEMsSUFBUixFQUFhOUMsTUFBYixDQUFUO0FBQUEsTUFBOEI2SCxFQUFFLEdBQUM3SCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJFLGNBQWxEOztBQUFpRSxXQUFTb0gsRUFBVCxDQUFZbEksQ0FBWixFQUFjO0FBQUMsV0FBTzJGLEVBQUUsQ0FBQzNGLENBQUQsQ0FBRixHQUFNNEgsRUFBRSxDQUFDNUgsQ0FBRCxDQUFSLEdBQVksVUFBU0EsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDOEYsRUFBRSxDQUFDOUYsQ0FBRCxDQUFOLEVBQVUsT0FBT2dJLEVBQUUsQ0FBQ2hJLENBQUQsQ0FBVDtBQUFhLFVBQUlDLENBQUMsR0FBQyxFQUFOOztBQUFTLFdBQUksSUFBSUksQ0FBUixJQUFhRCxNQUFNLENBQUNKLENBQUQsQ0FBbkI7QUFBdUJpSSxVQUFFLENBQUMzRyxJQUFILENBQVF0QixDQUFSLEVBQVVLLENBQVYsS0FBYyxpQkFBZUEsQ0FBN0IsSUFBZ0NKLENBQUMsQ0FBQzZILElBQUYsQ0FBT3pILENBQVAsQ0FBaEM7QUFBdkI7O0FBQWlFLGFBQU9KLENBQVA7QUFBUyxLQUF0SCxDQUF1SEQsQ0FBdkgsQ0FBbkI7QUFBNkk7O0FBQUEsTUFBSW1JLEVBQUUsR0FBQy9ILE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkUsY0FBeEI7O0FBQXVDLFdBQVNzSCxFQUFULENBQVlwSSxDQUFaLEVBQWM7QUFBQyxRQUFHLENBQUNtQyxDQUFDLENBQUNuQyxDQUFELENBQUwsRUFBUyxPQUFPLFVBQVNBLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQyxFQUFOO0FBQVMsVUFBRyxRQUFNRCxDQUFULEVBQVcsS0FBSSxJQUFJSyxDQUFSLElBQWFELE1BQU0sQ0FBQ0osQ0FBRCxDQUFuQjtBQUF1QkMsU0FBQyxDQUFDNkgsSUFBRixDQUFPekgsQ0FBUDtBQUF2QjtBQUFpQyxhQUFPSixDQUFQO0FBQVMsS0FBMUUsQ0FBMkVELENBQTNFLENBQVA7QUFBcUYsUUFBSUMsQ0FBQyxHQUFDNkYsRUFBRSxDQUFDOUYsQ0FBRCxDQUFSO0FBQUEsUUFBWUssQ0FBQyxHQUFDLEVBQWQ7O0FBQWlCLFNBQUksSUFBSUUsQ0FBUixJQUFhUCxDQUFiO0FBQWUsT0FBQyxpQkFBZU8sQ0FBZixJQUFrQixDQUFDTixDQUFELElBQUlrSSxFQUFFLENBQUM3RyxJQUFILENBQVF0QixDQUFSLEVBQVVPLENBQVYsQ0FBdkIsS0FBc0NGLENBQUMsQ0FBQ3lILElBQUYsQ0FBT3ZILENBQVAsQ0FBdEM7QUFBZjs7QUFBK0QsV0FBT0YsQ0FBUDtBQUFTOztBQUFBLFdBQVNnSSxFQUFULENBQVlySSxDQUFaLEVBQWM7QUFBQyxXQUFPMkYsRUFBRSxDQUFDM0YsQ0FBRCxDQUFGLEdBQU00SCxFQUFFLENBQUM1SCxDQUFELEVBQUcsQ0FBQyxDQUFKLENBQVIsR0FBZW9JLEVBQUUsQ0FBQ3BJLENBQUQsQ0FBeEI7QUFBNEI7O0FBQUEsTUFBSXNJLEVBQUo7QUFBQSxNQUFPQyxFQUFFLElBQUVELEVBQUUsR0FBQyxZQUFTdEksQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxLQUFDLFVBQVNELENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWVFLENBQWYsRUFBaUI7QUFBQyxVQUFJRSxDQUFDLEdBQUMsQ0FBQ0osQ0FBUDtBQUFTQSxPQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFMLENBQUQ7O0FBQVUsV0FBSSxJQUFJTSxDQUFDLEdBQUMsQ0FBQyxDQUFQLEVBQVNFLENBQUMsR0FBQ1osQ0FBQyxDQUFDOEIsTUFBakIsRUFBd0IsRUFBRXBCLENBQUYsR0FBSUUsQ0FBNUIsR0FBK0I7QUFBQyxZQUFJRSxDQUFDLEdBQUNkLENBQUMsQ0FBQ1UsQ0FBRCxDQUFQO0FBQUEsWUFBV00sQ0FBQyxHQUFDVixDQUFDLEdBQUNBLENBQUMsQ0FBQ0YsQ0FBQyxDQUFDVSxDQUFELENBQUYsRUFBTWYsQ0FBQyxDQUFDZSxDQUFELENBQVAsRUFBV0EsQ0FBWCxFQUFhVixDQUFiLEVBQWVMLENBQWYsQ0FBRixHQUFvQixLQUFLLENBQXZDO0FBQXlDLGFBQUssQ0FBTCxLQUFTaUIsQ0FBVCxLQUFhQSxDQUFDLEdBQUNqQixDQUFDLENBQUNlLENBQUQsQ0FBaEIsR0FBcUJOLENBQUMsR0FBQ3lFLENBQUMsQ0FBQzdFLENBQUQsRUFBR1UsQ0FBSCxFQUFLRSxDQUFMLENBQUYsR0FBVW9FLEVBQUUsQ0FBQ2hGLENBQUQsRUFBR1UsQ0FBSCxFQUFLRSxDQUFMLENBQWxDO0FBQTBDO0FBQUMsS0FBekosQ0FBMEpoQixDQUExSixFQUE0Sm9JLEVBQUUsQ0FBQ3BJLENBQUQsQ0FBOUosRUFBa0tELENBQWxLLENBQUQ7QUFBc0ssR0FBdkwsRUFBd0x5RixFQUFFLENBQUUsVUFBU3pGLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsUUFBSUksQ0FBQyxHQUFDLENBQUMsQ0FBUDtBQUFBLFFBQVNFLENBQUMsR0FBQ04sQ0FBQyxDQUFDOEIsTUFBYjtBQUFBLFFBQW9CdEIsQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBRixHQUFJTixDQUFDLENBQUNNLENBQUMsR0FBQyxDQUFILENBQUwsR0FBVyxLQUFLLENBQXRDO0FBQUEsUUFBd0NJLENBQUMsR0FBQ0osQ0FBQyxHQUFDLENBQUYsR0FBSU4sQ0FBQyxDQUFDLENBQUQsQ0FBTCxHQUFTLEtBQUssQ0FBeEQ7O0FBQTBELFNBQUlRLENBQUMsR0FBQzZILEVBQUUsQ0FBQ3ZHLE1BQUgsR0FBVSxDQUFWLElBQWEsY0FBWSxPQUFPdEIsQ0FBaEMsSUFBbUNGLENBQUMsSUFBR0UsQ0FBdkMsSUFBMEMsS0FBSyxDQUFqRCxFQUFtREUsQ0FBQyxJQUFFaUYsRUFBRSxDQUFDM0YsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQLEVBQVdVLENBQVgsQ0FBTCxLQUFxQkYsQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBRixHQUFJLEtBQUssQ0FBVCxHQUFXRSxDQUFiLEVBQWVGLENBQUMsR0FBQyxDQUF0QyxDQUFuRCxFQUE0RlAsQ0FBQyxHQUFDSSxNQUFNLENBQUNKLENBQUQsQ0FBeEcsRUFBNEcsRUFBRUssQ0FBRixHQUFJRSxDQUFoSCxHQUFtSDtBQUFDLFVBQUlNLENBQUMsR0FBQ1osQ0FBQyxDQUFDSSxDQUFELENBQVA7QUFBV1EsT0FBQyxJQUFFeUgsRUFBRSxDQUFDdEksQ0FBRCxFQUFHYSxDQUFILEVBQUtSLENBQUwsRUFBT0ksQ0FBUCxDQUFMO0FBQWU7O0FBQUEsV0FBT1QsQ0FBUDtBQUFTLEdBQWpPLENBQTVMLENBQVQ7QUFBQSxNQUEwYXdJLEVBQUUsR0FBQ1QsRUFBRSxDQUFDM0gsTUFBTSxDQUFDcUksY0FBUixFQUF1QnJJLE1BQXZCLENBQS9hO0FBQUEsTUFBOGNzSSxFQUFFLEdBQUNsSSxRQUFRLENBQUNJLFNBQTFkO0FBQUEsTUFBb2UrSCxFQUFFLEdBQUN2SSxNQUFNLENBQUNRLFNBQTllO0FBQUEsTUFBd2ZnSSxFQUFFLEdBQUNGLEVBQUUsQ0FBQzFILFFBQTlmO0FBQUEsTUFBdWdCNkgsRUFBRSxHQUFDRixFQUFFLENBQUM3SCxjQUE3Z0I7QUFBQSxNQUE0aEJnSSxFQUFFLEdBQUNGLEVBQUUsQ0FBQ3RILElBQUgsQ0FBUWxCLE1BQVIsQ0FBL2hCOztBQUEraUIsTUFBSTJJLEVBQUo7QUFBQSxNQUFPQyxFQUFFLEdBQUMsU0FBSEEsRUFBRyxDQUFTaEosQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDLFNBQUksSUFBSUUsQ0FBQyxHQUFDLENBQUMsQ0FBUCxFQUFTRSxDQUFDLEdBQUNMLE1BQU0sQ0FBQ0osQ0FBRCxDQUFqQixFQUFxQlcsQ0FBQyxHQUFDTixDQUFDLENBQUNMLENBQUQsQ0FBeEIsRUFBNEJhLENBQUMsR0FBQ0YsQ0FBQyxDQUFDb0IsTUFBcEMsRUFBMkNsQixDQUFDLEVBQTVDLEdBQWdEO0FBQUMsVUFBSUUsQ0FBQyxHQUFDSixDQUFDLENBQUNvSSxFQUFFLEdBQUNsSSxDQUFELEdBQUcsRUFBRU4sQ0FBUixDQUFQO0FBQWtCLFVBQUcsQ0FBQyxDQUFELEtBQUtOLENBQUMsQ0FBQ1EsQ0FBQyxDQUFDTSxDQUFELENBQUYsRUFBTUEsQ0FBTixFQUFRTixDQUFSLENBQVQsRUFBb0I7QUFBTTs7QUFBQSxXQUFPVCxDQUFQO0FBQVMsR0FBaEk7O0FBQWlJLE1BQUlpSixFQUFFLEdBQUMsVUFBU2pKLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsV0FBTyxVQUFTSSxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFVBQUcsUUFBTUYsQ0FBVCxFQUFXLE9BQU9BLENBQVA7QUFBUyxVQUFHLENBQUNzRixFQUFFLENBQUN0RixDQUFELENBQU4sRUFBVSxPQUFPTCxDQUFDLENBQUNLLENBQUQsRUFBR0UsQ0FBSCxDQUFSOztBQUFjLFdBQUksSUFBSUUsQ0FBQyxHQUFDSixDQUFDLENBQUMwQixNQUFSLEVBQWVwQixDQUFDLEdBQUNWLENBQUMsR0FBQ1EsQ0FBRCxHQUFHLENBQUMsQ0FBdEIsRUFBd0JJLENBQUMsR0FBQ1QsTUFBTSxDQUFDQyxDQUFELENBQXBDLEVBQXdDLENBQUNKLENBQUMsR0FBQ1UsQ0FBQyxFQUFGLEdBQUssRUFBRUEsQ0FBRixHQUFJRixDQUFYLEtBQWUsQ0FBQyxDQUFELEtBQUtGLENBQUMsQ0FBQ00sQ0FBQyxDQUFDRixDQUFELENBQUYsRUFBTUEsQ0FBTixFQUFRRSxDQUFSLENBQTdEO0FBQXlFO0FBQXpFOztBQUEwRSxhQUFPUixDQUFQO0FBQVMsS0FBcEo7QUFBcUosR0FBbkssQ0FBcUssVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxXQUFPRCxDQUFDLElBQUVnSixFQUFFLENBQUNoSixDQUFELEVBQUdDLENBQUgsRUFBS2lJLEVBQUwsQ0FBWjtBQUFxQixHQUF4TSxDQUFQO0FBQUEsTUFBa05nQixFQUFFLEdBQUNELEVBQXJOO0FBQUEsTUFBd05FLEVBQUUsR0FBQy9JLE1BQU0sQ0FBQ1EsU0FBbE87QUFBQSxNQUE0T3dJLEVBQUUsR0FBQ0QsRUFBRSxDQUFDckksY0FBbFA7QUFBQSxNQUFpUXVJLEVBQUUsR0FBQzVELEVBQUUsQ0FBRSxVQUFTekYsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0QsS0FBQyxHQUFDSSxNQUFNLENBQUNKLENBQUQsQ0FBUjtBQUFZLFFBQUlLLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBQSxRQUFTRSxDQUFDLEdBQUNOLENBQUMsQ0FBQzhCLE1BQWI7QUFBQSxRQUFvQnRCLENBQUMsR0FBQ0YsQ0FBQyxHQUFDLENBQUYsR0FBSU4sQ0FBQyxDQUFDLENBQUQsQ0FBTCxHQUFTLEtBQUssQ0FBcEM7O0FBQXNDLFNBQUlRLENBQUMsSUFBRW1GLEVBQUUsQ0FBQzNGLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxFQUFXUSxDQUFYLENBQUwsS0FBcUJGLENBQUMsR0FBQyxDQUF2QixDQUFKLEVBQThCLEVBQUVGLENBQUYsR0FBSUUsQ0FBbEM7QUFBcUMsV0FBSSxJQUFJSSxDQUFDLEdBQUNWLENBQUMsQ0FBQ0ksQ0FBRCxDQUFQLEVBQVdRLENBQUMsR0FBQ3dILEVBQUUsQ0FBQzFILENBQUQsQ0FBZixFQUFtQkksQ0FBQyxHQUFDLENBQUMsQ0FBdEIsRUFBd0JFLENBQUMsR0FBQ0osQ0FBQyxDQUFDa0IsTUFBaEMsRUFBdUMsRUFBRWhCLENBQUYsR0FBSUUsQ0FBM0MsR0FBOEM7QUFBQyxZQUFJRSxDQUFDLEdBQUNOLENBQUMsQ0FBQ0UsQ0FBRCxDQUFQO0FBQUEsWUFBV0ssQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDbUIsQ0FBRCxDQUFkO0FBQWtCLFNBQUMsS0FBSyxDQUFMLEtBQVNDLENBQVQsSUFBWStELENBQUMsQ0FBQy9ELENBQUQsRUFBRytILEVBQUUsQ0FBQ2hJLENBQUQsQ0FBTCxDQUFELElBQVksQ0FBQ2lJLEVBQUUsQ0FBQzlILElBQUgsQ0FBUXRCLENBQVIsRUFBVW1CLENBQVYsQ0FBMUIsTUFBMENuQixDQUFDLENBQUNtQixDQUFELENBQUQsR0FBS1IsQ0FBQyxDQUFDUSxDQUFELENBQWhEO0FBQXFEO0FBQTNKOztBQUEySixXQUFPbkIsQ0FBUDtBQUFTLEdBQXRPLENBQXRROztBQUErZSxXQUFTc0osRUFBVCxDQUFZdEosQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsUUFBSUksQ0FBSjtBQUFNLFdBQU0sQ0FBQ21CLENBQUMsQ0FBQ3hCLENBQUQsQ0FBRCxHQUFLK0UsQ0FBTCxHQUFPbUUsRUFBUixFQUFZbEosQ0FBWixFQUFjLGNBQVksUUFBT0ssQ0FBQyxHQUFDSixDQUFULENBQVosR0FBd0JJLENBQXhCLEdBQTBCdUMsQ0FBeEMsQ0FBTjtBQUFpRDs7QUFBQSxXQUFTMkcsRUFBVCxDQUFZdkosQ0FBWixFQUFjO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLElBQW9CLENBQUN3QixDQUFDLENBQUN4QixDQUFELENBQUYsSUFBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBUixJQUFhLHFCQUFtQnFCLENBQUMsQ0FBQ3JCLENBQUQsQ0FBM0Q7QUFBK0Q7O0FBQUEsV0FBU3dKLEVBQVQsQ0FBWXhKLENBQVosRUFBYztBQUFDLFdBQU0sQ0FBQyxDQUFELEtBQUtBLENBQUwsSUFBUSxDQUFDLENBQUQsS0FBS0EsQ0FBYixJQUFnQnVCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNLHNCQUFvQnFCLENBQUMsQ0FBQ3JCLENBQUQsQ0FBakQ7QUFBcUQ7O0FBQUEsV0FBU3lKLEVBQVQsQ0FBWXpKLENBQVosRUFBYztBQUFDLFdBQU91QixDQUFDLENBQUN2QixDQUFELENBQUQsSUFBTSxNQUFJQSxDQUFDLENBQUN3RyxRQUFaLElBQXNCLENBQUMsVUFBU3hHLENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQ3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRixJQUFPLHFCQUFtQnFCLENBQUMsQ0FBQ3JCLENBQUQsQ0FBOUIsRUFBa0MsT0FBTSxDQUFDLENBQVA7QUFBUyxVQUFJQyxDQUFDLEdBQUN1SSxFQUFFLENBQUN4SSxDQUFELENBQVI7QUFBWSxVQUFHLFNBQU9DLENBQVYsRUFBWSxPQUFNLENBQUMsQ0FBUDtBQUFTLFVBQUlJLENBQUMsR0FBQ3dJLEVBQUUsQ0FBQ3ZILElBQUgsQ0FBUXJCLENBQVIsRUFBVSxhQUFWLEtBQTBCQSxDQUFDLENBQUM4RixXQUFsQztBQUE4QyxhQUFNLGNBQVksT0FBTzFGLENBQW5CLElBQXNCQSxDQUFDLFlBQVlBLENBQW5DLElBQXNDdUksRUFBRSxDQUFDdEgsSUFBSCxDQUFRakIsQ0FBUixLQUFZeUksRUFBeEQ7QUFBMkQsS0FBak0sQ0FBa005SSxDQUFsTSxDQUE5QjtBQUFtTzs7QUFBQSxXQUFTMEosRUFBVCxDQUFZMUosQ0FBWixFQUFjO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLElBQW9CQSxDQUFDLElBQUVQLENBQUMsQ0FBQ08sQ0FBRCxDQUE5QjtBQUFrQzs7QUFBQSxXQUFTMkosRUFBVCxDQUFZM0osQ0FBWixFQUFjO0FBQUMsV0FBTSxZQUFVLE9BQU9BLENBQWpCLElBQW9CdUIsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELElBQU0scUJBQW1CcUIsQ0FBQyxDQUFDckIsQ0FBRCxDQUFwRDtBQUF3RDs7QUFBQSxXQUFTNEosRUFBVCxDQUFZNUosQ0FBWixFQUFjO0FBQUMsV0FBTyxVQUFTQyxDQUFULEVBQVc7QUFBQyxhQUFPRyxNQUFNLENBQUNRLFNBQVAsQ0FBaUJJLFFBQWpCLENBQTBCTSxJQUExQixDQUErQnJCLENBQS9CLE1BQW9DLFdBQVc0SixNQUFYLENBQWtCN0osQ0FBbEIsRUFBb0IsR0FBcEIsQ0FBM0M7QUFBb0UsS0FBdkY7QUFBd0Y7O0FBQUEsV0FBUzhKLEVBQVQsQ0FBWTlKLENBQVosRUFBYztBQUFDLFdBQU80SixFQUFFLENBQUMsTUFBRCxDQUFGLENBQVc1SixDQUFYLENBQVA7QUFBcUI7O0FBQUEsV0FBUytKLEVBQVQsQ0FBWS9KLENBQVosRUFBYztBQUFDLFdBQU80SixFQUFFLENBQUMsTUFBRCxDQUFGLENBQVc1SixDQUFYLENBQVA7QUFBcUI7O0FBQUEsV0FBU2dLLEVBQVQsQ0FBWWhLLENBQVosRUFBYztBQUFDLFdBQU80SixFQUFFLENBQUMsVUFBRCxDQUFGLENBQWU1SixDQUFmLENBQVA7QUFBeUI7O0FBQUEsV0FBU2lLLEVBQVQsQ0FBWWpLLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFdBQU93QixLQUFLLENBQUNiLFNBQU4sQ0FBZ0JrQixLQUFoQixDQUFzQlIsSUFBdEIsQ0FBMkJ0QixDQUEzQixFQUE4QmtLLEdBQTlCLENBQWtDakssQ0FBbEMsQ0FBUDtBQUE0Qzs7QUFBQSxXQUFTa0ssRUFBVCxDQUFZbkssQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsV0FBT3dCLEtBQUssQ0FBQ2IsU0FBTixDQUFnQmtCLEtBQWhCLENBQXNCUixJQUF0QixDQUEyQnRCLENBQTNCLEVBQThCb0ssS0FBOUIsQ0FBb0NuSyxDQUFwQyxDQUFQO0FBQThDOztBQUFBLFdBQVNvSyxFQUFULENBQVlySyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxXQUFNLENBQUNELENBQUQsRUFBR0MsQ0FBSCxFQUFNcUssTUFBTixDQUFjLFVBQVN0SyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGFBQU9ELENBQUMsQ0FBQ3VLLE1BQUYsQ0FBVSxVQUFTdkssQ0FBVCxFQUFXO0FBQUMsZUFBTSxDQUFDLENBQUQsS0FBS0MsQ0FBQyxDQUFDdUssT0FBRixDQUFVeEssQ0FBVixDQUFYO0FBQXdCLE9BQTlDLENBQVA7QUFBd0QsS0FBcEYsQ0FBTjtBQUE2Rjs7QUFBQSxXQUFTeUssRUFBVCxDQUFZekssQ0FBWixFQUFjO0FBQUMsV0FBT0ksTUFBTSxDQUFDOEMsSUFBUCxDQUFZbEQsQ0FBQyxJQUFFLEVBQWYsQ0FBUDtBQUEwQjs7QUFBQSxXQUFTMEssRUFBVCxHQUFhLENBQUU7O0FBQUEsV0FBU0MsRUFBVCxHQUFhO0FBQUMsV0FBT3BGLElBQUksQ0FBQ3FGLE1BQUwsR0FBYzVKLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJjLEtBQTNCLENBQWlDLENBQWpDLENBQVA7QUFBMkM7O0FBQUEsV0FBUytJLEVBQVQsQ0FBWTdLLENBQVosRUFBYztBQUFDLFdBQU95SixFQUFFLENBQUN6SixDQUFELENBQUYsR0FBTUEsQ0FBTixHQUFRdUosRUFBRSxDQUFDdkosQ0FBRCxDQUFGLEdBQU04SyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIvSyxDQUF2QixDQUFOLEdBQWdDLElBQS9DO0FBQW9EOztBQUFBLFdBQVNnTCxFQUFULENBQVloTCxDQUFaLEVBQWNDLENBQWQsRUFBZ0JJLENBQWhCLEVBQWtCO0FBQUNMLEtBQUMsQ0FBQ2lMLGdCQUFGLElBQW9CakwsQ0FBQyxDQUFDaUwsZ0JBQUYsQ0FBbUJoTCxDQUFuQixFQUFxQkksQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QixDQUFwQjtBQUErQzs7QUFBQSxXQUFTNkssRUFBVCxDQUFZbEwsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDTCxLQUFDLENBQUNtTCxtQkFBRixJQUF1Qm5MLENBQUMsQ0FBQ21MLG1CQUFGLENBQXNCbEwsQ0FBdEIsRUFBd0JJLENBQXhCLEVBQTBCLENBQUMsQ0FBM0IsQ0FBdkI7QUFBcUQ7O0FBQUEsV0FBUytLLEVBQVQsQ0FBWXBMLENBQVosRUFBYztBQUFDLFFBQUlDLENBQUMsR0FBQyxFQUFFNEUsU0FBUyxDQUFDOUMsTUFBVixHQUFpQixDQUFqQixJQUFvQixLQUFLLENBQUwsS0FBUzhDLFNBQVMsQ0FBQyxDQUFELENBQXhDLEtBQThDQSxTQUFTLENBQUMsQ0FBRCxDQUE3RDtBQUFBLFFBQWlFeEUsQ0FBQyxHQUFDSixDQUFDLEdBQUNvTCxrQkFBRCxHQUFvQixVQUFTckwsQ0FBVCxFQUFXO0FBQUMsYUFBT0EsQ0FBUDtBQUFTLEtBQTdHO0FBQUEsUUFBOEdPLENBQUMsR0FBQzBKLEVBQUUsQ0FBQ1EsRUFBRSxDQUFDekssQ0FBRCxDQUFILEVBQVEsVUFBU0MsQ0FBVCxFQUFXO0FBQUMsVUFBSU0sQ0FBQyxHQUFDUCxDQUFDLENBQUNDLENBQUQsQ0FBUDtBQUFXLGFBQU9JLENBQUMsQ0FBQ0osQ0FBRCxDQUFELEdBQUssR0FBTCxHQUFTSSxDQUFDLENBQUNrQixDQUFDLENBQUNoQixDQUFELENBQUQsR0FBSytLLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEwsQ0FBZixDQUFMLEdBQXVCQSxDQUF4QixDQUFqQjtBQUE0QyxLQUEzRSxDQUFsSDtBQUFnTSxXQUFPQSxDQUFDLENBQUNpTCxJQUFGLENBQU8sR0FBUCxDQUFQO0FBQW1COztBQUFBLFdBQVNDLEVBQVQsQ0FBWXpMLENBQVosRUFBYztBQUFDLFFBQUcsQ0FBQ3dCLENBQUMsQ0FBQ3hCLENBQUQsQ0FBTCxFQUFTLE1BQU0sSUFBSTBMLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQStDLFdBQU8sVUFBU3pMLENBQVQsRUFBVztBQUFDLGFBQU9ELENBQUMsQ0FBQ3dLLE9BQUYsQ0FBVXZLLENBQVYsSUFBYSxDQUFDLENBQXJCO0FBQXVCLEtBQTFDO0FBQTJDOztBQUFBLFdBQVMwTCxFQUFULENBQVkzTCxDQUFaLEVBQWM7QUFBQyxRQUFHLENBQUN3QixDQUFDLENBQUN4QixDQUFELENBQUwsRUFBUyxNQUFNLElBQUkwTCxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUFpRCxXQUFPLFVBQVN6TCxDQUFULEVBQVc7QUFBQyxhQUFPRCxDQUFDLENBQUM0TCxJQUFGLENBQVEsVUFBUzVMLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQVksT0FBaEMsQ0FBUDtBQUEwQyxLQUE3RDtBQUE4RDs7QUFBQSxNQUFJNEwsRUFBRSxHQUFDLFlBQVU7QUFBQyxRQUFJN0wsQ0FBQyxHQUFDO0FBQUM4TCxXQUFLLEVBQUMsRUFBUDtBQUFVQyxhQUFPLEVBQUMsaUJBQVMvTCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQU8sS0FBSzZMLEtBQUwsQ0FBVzlMLENBQVgsSUFBYzZILE1BQU0sQ0FBQzVILENBQUQsQ0FBM0I7QUFBK0IsT0FBL0Q7QUFBZ0UrTCxhQUFPLEVBQUMsaUJBQVNoTSxDQUFULEVBQVc7QUFBQyxlQUFPLEtBQUs4TCxLQUFMLENBQVdoTCxjQUFYLENBQTBCZCxDQUExQixJQUE2QixLQUFLOEwsS0FBTCxDQUFXOUwsQ0FBWCxDQUE3QixHQUEyQyxJQUFsRDtBQUF1RCxPQUEzSTtBQUE0SWlNLGdCQUFVLEVBQUMsb0JBQVNqTSxDQUFULEVBQVc7QUFBQyxlQUFPLE9BQU8sS0FBSzhMLEtBQUwsQ0FBVzlMLENBQVgsQ0FBZDtBQUE0QixPQUEvTDtBQUFnTWtNLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS0osS0FBTCxHQUFXLEVBQWxCO0FBQXFCO0FBQXRPLEtBQU47O0FBQThPLFFBQUc7QUFBQyxhQUFNLGtCQUFpQkssTUFBakIsSUFBeUIsU0FBT0EsTUFBTSxDQUFDQyxZQUF2QyxJQUFxREQsTUFBTSxDQUFDQyxZQUFQLENBQW9CTCxPQUFwQixDQUE0QixPQUE1QixFQUFvQyxFQUFwQyxHQUF3Q0ksTUFBTSxDQUFDQyxZQUFQLENBQW9CSCxVQUFwQixDQUErQixPQUEvQixDQUF4QyxFQUFnRkUsTUFBTSxDQUFDQyxZQUE1SSxJQUEwSnBNLENBQWhLO0FBQWtLLEtBQXRLLENBQXNLLE9BQU1DLENBQU4sRUFBUTtBQUFDLGFBQU9ELENBQVA7QUFBUztBQUFDLEdBQWxiLEVBQVA7O0FBQTRiLFdBQVNxTSxFQUFULENBQVlyTSxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFJSSxDQUFDLEdBQUNELE1BQU0sQ0FBQzhDLElBQVAsQ0FBWWxELENBQVosQ0FBTjs7QUFBcUIsUUFBR0ksTUFBTSxDQUFDa00scUJBQVYsRUFBZ0M7QUFBQyxVQUFJL0wsQ0FBQyxHQUFDSCxNQUFNLENBQUNrTSxxQkFBUCxDQUE2QnRNLENBQTdCLENBQU47QUFBc0NDLE9BQUMsS0FBR00sQ0FBQyxHQUFDQSxDQUFDLENBQUNnSyxNQUFGLENBQVUsVUFBU3RLLENBQVQsRUFBVztBQUFDLGVBQU9HLE1BQU0sQ0FBQ21NLHdCQUFQLENBQWdDdk0sQ0FBaEMsRUFBa0NDLENBQWxDLEVBQXFDd0UsVUFBNUM7QUFBdUQsT0FBN0UsQ0FBTCxDQUFELEVBQXVGcEUsQ0FBQyxDQUFDeUgsSUFBRixDQUFPaEUsS0FBUCxDQUFhekQsQ0FBYixFQUFlRSxDQUFmLENBQXZGO0FBQXlHOztBQUFBLFdBQU9GLENBQVA7QUFBUzs7QUFBQSxXQUFTbU0sRUFBVCxDQUFZeE0sQ0FBWixFQUFjO0FBQUMsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM0RSxTQUFTLENBQUM5QyxNQUF4QixFQUErQjlCLENBQUMsRUFBaEMsRUFBbUM7QUFBQyxVQUFJSSxDQUFDLEdBQUMsUUFBTXdFLFNBQVMsQ0FBQzVFLENBQUQsQ0FBZixHQUFtQjRFLFNBQVMsQ0FBQzVFLENBQUQsQ0FBNUIsR0FBZ0MsRUFBdEM7QUFBeUNBLE9BQUMsR0FBQyxDQUFGLEdBQUlvTSxFQUFFLENBQUNqTSxNQUFNLENBQUNDLENBQUQsQ0FBUCxFQUFXLENBQUMsQ0FBWixDQUFGLENBQWlCb00sT0FBakIsQ0FBMEIsVUFBU3hNLENBQVQsRUFBVztBQUFDeU0sVUFBRSxDQUFDMU0sQ0FBRCxFQUFHQyxDQUFILEVBQUtJLENBQUMsQ0FBQ0osQ0FBRCxDQUFOLENBQUY7QUFBYSxPQUFuRCxDQUFKLEdBQTBERyxNQUFNLENBQUN1TSx5QkFBUCxHQUFpQ3ZNLE1BQU0sQ0FBQ3dNLGdCQUFQLENBQXdCNU0sQ0FBeEIsRUFBMEJJLE1BQU0sQ0FBQ3VNLHlCQUFQLENBQWlDdE0sQ0FBakMsQ0FBMUIsQ0FBakMsR0FBZ0dnTSxFQUFFLENBQUNqTSxNQUFNLENBQUNDLENBQUQsQ0FBUCxDQUFGLENBQWNvTSxPQUFkLENBQXVCLFVBQVN4TSxDQUFULEVBQVc7QUFBQ0csY0FBTSxDQUFDeU0sY0FBUCxDQUFzQjdNLENBQXRCLEVBQXdCQyxDQUF4QixFQUEwQkcsTUFBTSxDQUFDbU0sd0JBQVAsQ0FBZ0NsTSxDQUFoQyxFQUFrQ0osQ0FBbEMsQ0FBMUI7QUFBZ0UsT0FBbkcsQ0FBMUo7QUFBZ1E7O0FBQUEsV0FBT0QsQ0FBUDtBQUFTOztBQUFBLFdBQVM4TSxFQUFULENBQVk5TSxDQUFaLEVBQWM7QUFBQyxXQUFPOE0sRUFBRSxHQUFDLGNBQVksT0FBT3BNLE1BQW5CLElBQTJCLFlBQVUsT0FBT0EsTUFBTSxDQUFDcU0sUUFBbkQsR0FBNEQsVUFBUy9NLENBQVQsRUFBVztBQUFDLGFBQU8sT0FBT0EsQ0FBZDtBQUFnQixLQUF4RixHQUF5RixVQUFTQSxDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLElBQUUsY0FBWSxPQUFPVSxNQUF0QixJQUE4QlYsQ0FBQyxDQUFDK0YsV0FBRixLQUFnQnJGLE1BQTlDLElBQXNEVixDQUFDLEtBQUdVLE1BQU0sQ0FBQ0UsU0FBakUsR0FBMkUsUUFBM0UsR0FBb0YsT0FBT1osQ0FBbEc7QUFBb0csS0FBNU0sRUFBNk04TSxFQUFFLENBQUM5TSxDQUFELENBQXROO0FBQTBOOztBQUFBLFdBQVNnTixFQUFULENBQVloTixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFHLEVBQUVELENBQUMsWUFBWUMsQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSWdOLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlEOztBQUFBLFdBQVNDLEVBQVQsQ0FBWWxOLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFNBQUksSUFBSUksQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDSixDQUFDLENBQUM4QixNQUFoQixFQUF1QjFCLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxVQUFJRSxDQUFDLEdBQUNOLENBQUMsQ0FBQ0ksQ0FBRCxDQUFQO0FBQVdFLE9BQUMsQ0FBQ2tFLFVBQUYsR0FBYWxFLENBQUMsQ0FBQ2tFLFVBQUYsSUFBYyxDQUFDLENBQTVCLEVBQThCbEUsQ0FBQyxDQUFDaUUsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVWpFLENBQVYsS0FBY0EsQ0FBQyxDQUFDb0UsUUFBRixHQUFXLENBQUMsQ0FBMUIsQ0FBaEQsRUFBNkV2RSxNQUFNLENBQUN5TSxjQUFQLENBQXNCN00sQ0FBdEIsRUFBd0JtTixFQUFFLENBQUM1TSxDQUFDLENBQUM2TSxHQUFILENBQTFCLEVBQWtDN00sQ0FBbEMsQ0FBN0U7QUFBa0g7QUFBQzs7QUFBQSxXQUFTOE0sRUFBVCxDQUFZck4sQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFdBQU9KLENBQUMsSUFBRWlOLEVBQUUsQ0FBQ2xOLENBQUMsQ0FBQ1ksU0FBSCxFQUFhWCxDQUFiLENBQUwsRUFBcUJJLENBQUMsSUFBRTZNLEVBQUUsQ0FBQ2xOLENBQUQsRUFBR0ssQ0FBSCxDQUExQixFQUFnQ0QsTUFBTSxDQUFDeU0sY0FBUCxDQUFzQjdNLENBQXRCLEVBQXdCLFdBQXhCLEVBQW9DO0FBQUMyRSxjQUFRLEVBQUMsQ0FBQztBQUFYLEtBQXBDLENBQWhDLEVBQW1GM0UsQ0FBMUY7QUFBNEY7O0FBQUEsV0FBUzBNLEVBQVQsQ0FBWTFNLENBQVosRUFBY0MsQ0FBZCxFQUFnQkksQ0FBaEIsRUFBa0I7QUFBQyxXQUFNLENBQUNKLENBQUMsR0FBQ2tOLEVBQUUsQ0FBQ2xOLENBQUQsQ0FBTCxLQUFZRCxDQUFaLEdBQWNJLE1BQU0sQ0FBQ3lNLGNBQVAsQ0FBc0I3TSxDQUF0QixFQUF3QkMsQ0FBeEIsRUFBMEI7QUFBQ3lFLFdBQUssRUFBQ3JFLENBQVA7QUFBU29FLGdCQUFVLEVBQUMsQ0FBQyxDQUFyQjtBQUF1QkQsa0JBQVksRUFBQyxDQUFDLENBQXJDO0FBQXVDRyxjQUFRLEVBQUMsQ0FBQztBQUFqRCxLQUExQixDQUFkLEdBQTZGM0UsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBS0ksQ0FBbEcsRUFBb0dMLENBQTFHO0FBQTRHOztBQUFBLFdBQVNzTixFQUFULENBQVl0TixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFHLGNBQVksT0FBT0EsQ0FBbkIsSUFBc0IsU0FBT0EsQ0FBaEMsRUFBa0MsTUFBTSxJQUFJZ04sU0FBSixDQUFjLG9EQUFkLENBQU47QUFBMEVqTixLQUFDLENBQUNZLFNBQUYsR0FBWVIsTUFBTSxDQUFDbU4sTUFBUCxDQUFjdE4sQ0FBQyxJQUFFQSxDQUFDLENBQUNXLFNBQW5CLEVBQTZCO0FBQUNtRixpQkFBVyxFQUFDO0FBQUNyQixhQUFLLEVBQUMxRSxDQUFQO0FBQVMyRSxnQkFBUSxFQUFDLENBQUMsQ0FBbkI7QUFBcUJILG9CQUFZLEVBQUMsQ0FBQztBQUFuQztBQUFiLEtBQTdCLENBQVosRUFBOEZwRSxNQUFNLENBQUN5TSxjQUFQLENBQXNCN00sQ0FBdEIsRUFBd0IsV0FBeEIsRUFBb0M7QUFBQzJFLGNBQVEsRUFBQyxDQUFDO0FBQVgsS0FBcEMsQ0FBOUYsRUFBaUoxRSxDQUFDLElBQUV1TixFQUFFLENBQUN4TixDQUFELEVBQUdDLENBQUgsQ0FBdEo7QUFBNEo7O0FBQUEsV0FBU3dOLEVBQVQsQ0FBWXpOLENBQVosRUFBYztBQUFDLFdBQU95TixFQUFFLEdBQUNyTixNQUFNLENBQUNzTixjQUFQLEdBQXNCdE4sTUFBTSxDQUFDcUksY0FBUCxDQUFzQmtGLElBQXRCLEVBQXRCLEdBQW1ELFVBQVMzTixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLENBQUM0TixTQUFGLElBQWF4TixNQUFNLENBQUNxSSxjQUFQLENBQXNCekksQ0FBdEIsQ0FBcEI7QUFBNkMsS0FBL0csRUFBZ0h5TixFQUFFLENBQUN6TixDQUFELENBQXpIO0FBQTZIOztBQUFBLFdBQVN3TixFQUFULENBQVl4TixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxXQUFPdU4sRUFBRSxHQUFDcE4sTUFBTSxDQUFDc04sY0FBUCxHQUFzQnROLE1BQU0sQ0FBQ3NOLGNBQVAsQ0FBc0JDLElBQXRCLEVBQXRCLEdBQW1ELFVBQVMzTixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGFBQU9ELENBQUMsQ0FBQzROLFNBQUYsR0FBWTNOLENBQVosRUFBY0QsQ0FBckI7QUFBdUIsS0FBM0YsRUFBNEZ3TixFQUFFLENBQUN4TixDQUFELEVBQUdDLENBQUgsQ0FBckc7QUFBMkc7O0FBQUEsV0FBUzROLEVBQVQsQ0FBWTdOLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFFBQUdBLENBQUMsS0FBRyxZQUFVLE9BQU9BLENBQWpCLElBQW9CLGNBQVksT0FBT0EsQ0FBMUMsQ0FBSixFQUFpRCxPQUFPQSxDQUFQO0FBQVMsUUFBRyxLQUFLLENBQUwsS0FBU0EsQ0FBWixFQUFjLE1BQU0sSUFBSWdOLFNBQUosQ0FBYywwREFBZCxDQUFOO0FBQWdGLFdBQU8sVUFBU2pOLENBQVQsRUFBVztBQUFDLFVBQUcsS0FBSyxDQUFMLEtBQVNBLENBQVosRUFBYyxNQUFNLElBQUk4TixjQUFKLENBQW1CLDJEQUFuQixDQUFOO0FBQXNGLGFBQU85TixDQUFQO0FBQVMsS0FBekgsQ0FBMEhBLENBQTFILENBQVA7QUFBb0k7O0FBQUEsV0FBUytOLEVBQVQsQ0FBWS9OLENBQVosRUFBYztBQUFDLFFBQUlDLENBQUMsR0FBQyxZQUFVO0FBQUMsVUFBRyxlQUFhLE9BQU8rTixPQUFwQixJQUE2QixDQUFDQSxPQUFPLENBQUNDLFNBQXpDLEVBQW1ELE9BQU0sQ0FBQyxDQUFQO0FBQVMsVUFBR0QsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxJQUFyQixFQUEwQixPQUFNLENBQUMsQ0FBUDtBQUFTLFVBQUcsY0FBWSxPQUFPQyxLQUF0QixFQUE0QixPQUFNLENBQUMsQ0FBUDs7QUFBUyxVQUFHO0FBQUMsZUFBT0MsT0FBTyxDQUFDeE4sU0FBUixDQUFrQjhCLE9BQWxCLENBQTBCcEIsSUFBMUIsQ0FBK0IwTSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JHLE9BQWxCLEVBQTBCLEVBQTFCLEVBQThCLFlBQVUsQ0FBRSxDQUExQyxDQUEvQixHQUE2RSxDQUFDLENBQXJGO0FBQXVGLE9BQTNGLENBQTJGLE9BQU1wTyxDQUFOLEVBQVE7QUFBQyxlQUFNLENBQUMsQ0FBUDtBQUFTO0FBQUMsS0FBN1AsRUFBTjs7QUFBc1EsV0FBTyxZQUFVO0FBQUMsVUFBSUssQ0FBSjtBQUFBLFVBQU1FLENBQUMsR0FBQ2tOLEVBQUUsQ0FBQ3pOLENBQUQsQ0FBVjs7QUFBYyxVQUFHQyxDQUFILEVBQUs7QUFBQyxZQUFJUSxDQUFDLEdBQUNnTixFQUFFLENBQUMsSUFBRCxDQUFGLENBQVMxSCxXQUFmO0FBQTJCMUYsU0FBQyxHQUFDMk4sT0FBTyxDQUFDQyxTQUFSLENBQWtCMU4sQ0FBbEIsRUFBb0JzRSxTQUFwQixFQUE4QnBFLENBQTlCLENBQUY7QUFBbUMsT0FBcEUsTUFBeUVKLENBQUMsR0FBQ0UsQ0FBQyxDQUFDdUQsS0FBRixDQUFRLElBQVIsRUFBYWUsU0FBYixDQUFGOztBQUEwQixhQUFPZ0osRUFBRSxDQUFDLElBQUQsRUFBTXhOLENBQU4sQ0FBVDtBQUFrQixLQUFySjtBQUFzSjs7QUFBQSxXQUFTZ08sRUFBVCxDQUFZck8sQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsV0FBTyxVQUFTRCxDQUFULEVBQVc7QUFBQyxVQUFHeUIsS0FBSyxDQUFDQyxPQUFOLENBQWMxQixDQUFkLENBQUgsRUFBb0IsT0FBT0EsQ0FBUDtBQUFTLEtBQXpDLENBQTBDQSxDQUExQyxLQUE4QyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQUlJLENBQUMsR0FBQyxRQUFNTCxDQUFOLEdBQVEsSUFBUixHQUFhLGVBQWEsT0FBT1UsTUFBcEIsSUFBNEJWLENBQUMsQ0FBQ1UsTUFBTSxDQUFDcU0sUUFBUixDQUE3QixJQUFnRC9NLENBQUMsQ0FBQyxZQUFELENBQXBFOztBQUFtRixVQUFHLFFBQU1LLENBQVQsRUFBVztBQUFDLFlBQUlFLENBQUo7QUFBQSxZQUFNRSxDQUFOO0FBQUEsWUFBUUUsQ0FBUjtBQUFBLFlBQVVFLENBQVY7QUFBQSxZQUFZRSxDQUFDLEdBQUMsRUFBZDtBQUFBLFlBQWlCRSxDQUFDLEdBQUMsQ0FBQyxDQUFwQjtBQUFBLFlBQXNCRSxDQUFDLEdBQUMsQ0FBQyxDQUF6Qjs7QUFBMkIsWUFBRztBQUFDLGNBQUdSLENBQUMsR0FBQyxDQUFDTixDQUFDLEdBQUNBLENBQUMsQ0FBQ2lCLElBQUYsQ0FBT3RCLENBQVAsQ0FBSCxFQUFjc08sSUFBaEIsRUFBcUIsTUFBSXJPLENBQTVCLEVBQThCO0FBQUMsZ0JBQUdHLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLEtBQVlBLENBQWYsRUFBaUI7QUFBT1ksYUFBQyxHQUFDLENBQUMsQ0FBSDtBQUFLLFdBQTVELE1BQWlFLE9BQUssRUFBRUEsQ0FBQyxHQUFDLENBQUNWLENBQUMsR0FBQ0ksQ0FBQyxDQUFDVyxJQUFGLENBQU9qQixDQUFQLENBQUgsRUFBY2tPLElBQWxCLE1BQTBCeE4sQ0FBQyxDQUFDK0csSUFBRixDQUFPdkgsQ0FBQyxDQUFDbUUsS0FBVCxHQUFnQjNELENBQUMsQ0FBQ2dCLE1BQUYsS0FBVzlCLENBQXJELENBQUwsRUFBNkRnQixDQUFDLEdBQUMsQ0FBQyxDQUFoRTtBQUFrRTtBQUFsRTtBQUFvRSxTQUF6SSxDQUF5SSxPQUFNakIsQ0FBTixFQUFRO0FBQUNtQixXQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtWLENBQUMsR0FBQ1QsQ0FBUDtBQUFTLFNBQTNKLFNBQWtLO0FBQUMsY0FBRztBQUFDLGdCQUFHLENBQUNpQixDQUFELElBQUksUUFBTVosQ0FBQyxVQUFYLEtBQXFCUSxDQUFDLEdBQUNSLENBQUMsVUFBRCxFQUFGLEVBQWFELE1BQU0sQ0FBQ1MsQ0FBRCxDQUFOLEtBQVlBLENBQTlDLENBQUgsRUFBb0Q7QUFBTyxXQUEvRCxTQUFzRTtBQUFDLGdCQUFHTSxDQUFILEVBQUssTUFBTVYsQ0FBTjtBQUFRO0FBQUM7O0FBQUEsZUFBT00sQ0FBUDtBQUFTO0FBQUMsS0FBMVksQ0FBMllmLENBQTNZLEVBQTZZQyxDQUE3WSxDQUE5QyxJQUErYnVPLEVBQUUsQ0FBQ3hPLENBQUQsRUFBR0MsQ0FBSCxDQUFqYyxJQUF3YyxZQUFVO0FBQUMsWUFBTSxJQUFJZ04sU0FBSixDQUFjLDJJQUFkLENBQU47QUFBaUssS0FBNUssRUFBL2M7QUFBOG5COztBQUFBLFdBQVN3QixFQUFULENBQVl6TyxDQUFaLEVBQWM7QUFBQyxXQUFPLFVBQVNBLENBQVQsRUFBVztBQUFDLFVBQUd5QixLQUFLLENBQUNDLE9BQU4sQ0FBYzFCLENBQWQsQ0FBSCxFQUFvQixPQUFPME8sRUFBRSxDQUFDMU8sQ0FBRCxDQUFUO0FBQWEsS0FBN0MsQ0FBOENBLENBQTlDLEtBQWtELFVBQVNBLENBQVQsRUFBVztBQUFDLFVBQUcsZUFBYSxPQUFPVSxNQUFwQixJQUE0QixRQUFNVixDQUFDLENBQUNVLE1BQU0sQ0FBQ3FNLFFBQVIsQ0FBbkMsSUFBc0QsUUFBTS9NLENBQUMsQ0FBQyxZQUFELENBQWhFLEVBQStFLE9BQU95QixLQUFLLENBQUNrTixJQUFOLENBQVczTyxDQUFYLENBQVA7QUFBcUIsS0FBaEgsQ0FBaUhBLENBQWpILENBQWxELElBQXVLd08sRUFBRSxDQUFDeE8sQ0FBRCxDQUF6SyxJQUE4SyxZQUFVO0FBQUMsWUFBTSxJQUFJaU4sU0FBSixDQUFjLHNJQUFkLENBQU47QUFBNEosS0FBdkssRUFBckw7QUFBK1Y7O0FBQUEsV0FBU3VCLEVBQVQsQ0FBWXhPLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFFBQUdELENBQUgsRUFBSztBQUFDLFVBQUcsWUFBVSxPQUFPQSxDQUFwQixFQUFzQixPQUFPME8sRUFBRSxDQUFDMU8sQ0FBRCxFQUFHQyxDQUFILENBQVQ7QUFBZSxVQUFJSSxDQUFDLEdBQUNELE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBakIsQ0FBMEJNLElBQTFCLENBQStCdEIsQ0FBL0IsRUFBa0M4QixLQUFsQyxDQUF3QyxDQUF4QyxFQUEwQyxDQUFDLENBQTNDLENBQU47QUFBb0QsYUFBTSxhQUFXekIsQ0FBWCxJQUFjTCxDQUFDLENBQUMrRixXQUFoQixLQUE4QjFGLENBQUMsR0FBQ0wsQ0FBQyxDQUFDK0YsV0FBRixDQUFjNkksSUFBOUMsR0FBb0QsVUFBUXZPLENBQVIsSUFBVyxVQUFRQSxDQUFuQixHQUFxQm9CLEtBQUssQ0FBQ2tOLElBQU4sQ0FBVzNPLENBQVgsQ0FBckIsR0FBbUMsZ0JBQWNLLENBQWQsSUFBaUIsMkNBQTJDMkIsSUFBM0MsQ0FBZ0QzQixDQUFoRCxDQUFqQixHQUFvRXFPLEVBQUUsQ0FBQzFPLENBQUQsRUFBR0MsQ0FBSCxDQUF0RSxHQUE0RSxLQUFLLENBQTlLO0FBQWdMO0FBQUM7O0FBQUEsV0FBU3lPLEVBQVQsQ0FBWTFPLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLEtBQUMsUUFBTUEsQ0FBTixJQUFTQSxDQUFDLEdBQUNELENBQUMsQ0FBQytCLE1BQWQsTUFBd0I5QixDQUFDLEdBQUNELENBQUMsQ0FBQytCLE1BQTVCOztBQUFvQyxTQUFJLElBQUkxQixDQUFDLEdBQUMsQ0FBTixFQUFRRSxDQUFDLEdBQUMsSUFBSWtCLEtBQUosQ0FBVXhCLENBQVYsQ0FBZCxFQUEyQkksQ0FBQyxHQUFDSixDQUE3QixFQUErQkksQ0FBQyxFQUFoQztBQUFtQ0UsT0FBQyxDQUFDRixDQUFELENBQUQsR0FBS0wsQ0FBQyxDQUFDSyxDQUFELENBQU47QUFBbkM7O0FBQTZDLFdBQU9FLENBQVA7QUFBUzs7QUFBQSxXQUFTNE0sRUFBVCxDQUFZbk4sQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLFVBQVNELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBRyxZQUFVLE9BQU9ELENBQWpCLElBQW9CLFNBQU9BLENBQTlCLEVBQWdDLE9BQU9BLENBQVA7QUFBUyxVQUFJSyxDQUFDLEdBQUNMLENBQUMsQ0FBQ1UsTUFBTSxDQUFDbU8sV0FBUixDQUFQOztBQUE0QixVQUFHLEtBQUssQ0FBTCxLQUFTeE8sQ0FBWixFQUFjO0FBQUMsWUFBSUUsQ0FBQyxHQUFDRixDQUFDLENBQUNpQixJQUFGLENBQU90QixDQUFQLEVBQVNDLENBQUMsSUFBRSxTQUFaLENBQU47QUFBNkIsWUFBRyxZQUFVLE9BQU9NLENBQXBCLEVBQXNCLE9BQU9BLENBQVA7QUFBUyxjQUFNLElBQUkwTSxTQUFKLENBQWMsOENBQWQsQ0FBTjtBQUFvRTs7QUFBQSxhQUFNLENBQUMsYUFBV2hOLENBQVgsR0FBYTRILE1BQWIsR0FBb0JpSCxNQUFyQixFQUE2QjlPLENBQTdCLENBQU47QUFBc0MsS0FBeFEsQ0FBeVFBLENBQXpRLEVBQTJRLFFBQTNRLENBQU47O0FBQTJSLFdBQU0sWUFBVSxPQUFPQyxDQUFqQixHQUFtQkEsQ0FBbkIsR0FBcUI0SCxNQUFNLENBQUM1SCxDQUFELENBQWpDO0FBQXFDOztBQUFBLE1BQUk4TyxFQUFFLEdBQUMsZUFBYSxPQUFPQyxVQUFwQixHQUErQkEsVUFBL0IsR0FBMEMsT0FBMkI3QyxNQUEzQixHQUFrQyxTQUFuRjtBQUFBLE1BQXNKOEMsRUFBRSxHQUFDLFlBQVU7QUFBQyxhQUFTalAsQ0FBVCxDQUFXQSxDQUFYLEVBQWE7QUFBQyxVQUFJSyxDQUFDLEdBQUMsRUFBTjtBQUFBLFVBQVNFLENBQUMsR0FBQyx3QkFBd0IwQyxJQUF4QixDQUE2QmpELENBQTdCLEtBQWlDLHNCQUFzQmlELElBQXRCLENBQTJCakQsQ0FBM0IsQ0FBakMsSUFBZ0Usd0JBQXdCaUQsSUFBeEIsQ0FBNkJqRCxDQUE3QixDQUFoRSxJQUFpRyx1QkFBdUJpRCxJQUF2QixDQUE0QmpELENBQTVCLENBQWpHLElBQWlJLHFDQUFxQ2lELElBQXJDLENBQTBDakQsQ0FBMUMsQ0FBakksSUFBK0ssc0NBQXNDaUQsSUFBdEMsQ0FBMkNqRCxDQUEzQyxDQUEvSyxJQUE4TixrQkFBa0JpRCxJQUFsQixDQUF1QmpELENBQXZCLENBQTlOLElBQXlQQSxDQUFDLENBQUN3SyxPQUFGLENBQVUsWUFBVixJQUF3QixDQUF4QixJQUEyQixnQ0FBZ0N2SCxJQUFoQyxDQUFxQ2pELENBQXJDLENBQXBSLElBQTZULENBQUMsRUFBRCxFQUFJLFNBQUosQ0FBeFU7QUFBdVYsYUFBTSxhQUFXTyxDQUFDLENBQUMsQ0FBRCxDQUFaLEdBQWdCQSxDQUFDLEdBQUMsK0NBQStDMEMsSUFBL0MsQ0FBb0RqRCxDQUFwRCxLQUF3RCw2QkFBNkJpRCxJQUE3QixDQUFrQ2pELENBQWxDLENBQXhELElBQThGLENBQUNPLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTSxRQUFOLEVBQWVBLENBQUMsQ0FBQyxDQUFELENBQWhCLENBQWhILEdBQXFJLGNBQVlBLENBQUMsQ0FBQyxDQUFELENBQWIsR0FBaUIsVUFBVXlCLElBQVYsQ0FBZWhDLENBQWYsSUFBa0JPLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSyxNQUF2QixHQUE4QkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLFNBQXBELEdBQThELGtFQUFrRXlCLElBQWxFLENBQXVFaEMsQ0FBdkUsTUFBNEVPLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSyxTQUFqRixDQUFuTSxFQUErUkYsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUQsR0FBUSxDQUFDLENBQXhTLEVBQTBTRixDQUFDLENBQUN1TyxJQUFGLEdBQU9yTyxDQUFDLENBQUMsQ0FBRCxDQUFsVCxFQUFzVEYsQ0FBQyxDQUFDNk8sT0FBRixHQUFValAsQ0FBQyxDQUFDTSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQWpVLEVBQXdVRixDQUE5VTtBQUFnVjs7QUFBQSxhQUFTSixDQUFULENBQVdELENBQVgsRUFBYTtBQUFDLFVBQUlDLENBQUMsR0FBQyxFQUFOO0FBQUEsVUFBU0ksQ0FBQyxHQUFDTCxDQUFDLEdBQUNBLENBQUMsQ0FBQ21QLEtBQUYsQ0FBUSxRQUFSLENBQUQsR0FBbUIsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsQ0FBL0I7QUFBNkMsYUFBT2xQLENBQUMsQ0FBQ21QLElBQUYsR0FBTy9PLENBQUMsQ0FBQ21MLElBQUYsQ0FBTyxHQUFQLENBQVAsRUFBbUJ2TCxDQUFDLENBQUNvUCxLQUFGLEdBQVFoUCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU0sR0FBakMsRUFBcUNKLENBQUMsQ0FBQ3FQLEtBQUYsR0FBUWpQLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTSxHQUFuRCxFQUF1REosQ0FBQyxDQUFDc1AsS0FBRixHQUFRbFAsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNLEdBQXJFLEVBQXlFSixDQUFoRjtBQUFrRjs7QUFBQSxhQUFTSSxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLGFBQU8sVUFBU0EsQ0FBVCxFQUFXO0FBQUMsWUFBR0EsQ0FBQyxDQUFDd1AsS0FBRixDQUFRLE1BQVIsS0FBaUJ4UCxDQUFDLENBQUN3UCxLQUFGLENBQVEsU0FBUixLQUFvQixDQUFDeFAsQ0FBQyxDQUFDd1AsS0FBRixDQUFRLGtCQUFSLENBQXRDLElBQW1FeFAsQ0FBQyxDQUFDd1AsS0FBRixDQUFRLFdBQVIsS0FBc0JyRCxNQUFNLENBQUNzRCxTQUFQLENBQWlCQyxjQUFqQixHQUFnQyxDQUE1SCxFQUE4SCxPQUFNLENBQUMsQ0FBUDtBQUFTLGVBQU0sQ0FBQyxDQUFQO0FBQVMsT0FBNUosQ0FBNkoxUCxDQUE3SixJQUFnSyxRQUFoSyxHQUF5SyxVQUFTQSxDQUFULEVBQVc7QUFBQyxZQUFHQSxDQUFDLENBQUN3UCxLQUFGLENBQVEsc0NBQVIsS0FBaUQsQ0FBQ3hQLENBQUMsQ0FBQ3dQLEtBQUYsQ0FBUSw4REFBUixDQUFyRCxFQUE2SCxPQUFNLENBQUMsQ0FBUDtBQUFTLGVBQU0sQ0FBQyxDQUFQO0FBQVMsT0FBM0osQ0FBNEp4UCxDQUE1SixJQUErSixJQUEvSixHQUFvSyxVQUFTQSxDQUFULEVBQVc7QUFBQyxlQUFNLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDd1AsS0FBRixDQUFRLDZNQUFSLENBQVI7QUFBK04sT0FBM08sQ0FBNE94UCxDQUE1TyxJQUErTyxRQUEvTyxHQUF3UCxFQUE1a0I7QUFBK2tCOztBQUFBLGFBQVNPLENBQVQsQ0FBV1AsQ0FBWCxFQUFhO0FBQUMsVUFBSUssQ0FBQyxHQUFDLEVBQU47QUFBQSxVQUFTRSxDQUFDLEdBQUMsK0NBQStDMEMsSUFBL0MsQ0FBb0RqRCxDQUFwRCxLQUF3RCxDQUFDLENBQUMsa0VBQWtFZ0MsSUFBbEUsQ0FBdUVoQyxDQUF2RSxDQUFGLElBQTZFLENBQUMsRUFBRCxFQUFJLFNBQUosRUFBYyxPQUFkLENBQXJJLElBQTZKLHFEQUFxRGlELElBQXJELENBQTBEakQsQ0FBMUQsQ0FBN0osSUFBMk4sNkJBQTZCaUQsSUFBN0IsQ0FBa0NqRCxDQUFsQyxDQUEzTixJQUFpUSxDQUFDLENBQUMsVUFBVWdDLElBQVYsQ0FBZWhDLENBQWYsQ0FBRixJQUFxQixDQUFDLEVBQUQsRUFBSSxTQUFKLEVBQWMsT0FBZCxDQUF0UixJQUE4UyxDQUFDLENBQUMsWUFBWWdDLElBQVosQ0FBaUJoQyxDQUFqQixDQUFGLElBQXVCLENBQUMsRUFBRCxFQUFJLFNBQUosRUFBYyxPQUFkLENBQXJVLElBQTZWLHlCQUF5QmlELElBQXpCLENBQThCakQsQ0FBOUIsQ0FBN1YsSUFBK1gsMkJBQTJCaUQsSUFBM0IsQ0FBZ0NqRCxDQUFoQyxDQUEvWCxJQUFtYSxDQUFDLENBQUMsVUFBVWdDLElBQVYsQ0FBZWhDLENBQWYsQ0FBRixJQUFxQixDQUFDLEVBQUQsRUFBSSxPQUFKLEVBQVksT0FBWixDQUF4YixJQUE4YyxDQUFDLENBQUMsUUFBUWdDLElBQVIsQ0FBYWhDLENBQWIsQ0FBRixJQUFtQixDQUFDLEVBQUQsRUFBSSxPQUFKLEVBQVksT0FBWixDQUFqZSxJQUF1ZixpQ0FBaUNpRCxJQUFqQyxDQUFzQ2pELENBQXRDLENBQXZmLElBQWlpQix5QkFBeUJpRCxJQUF6QixDQUE4QmpELENBQTlCLENBQWppQixJQUFta0IsQ0FBQyxDQUFDLE9BQU9nQyxJQUFQLENBQVloQyxDQUFaLENBQUYsSUFBa0IsQ0FBQyxFQUFELEVBQUksTUFBSixFQUFXLE9BQVgsQ0FBcmxCLElBQTBtQixDQUFDLENBQUMsd0JBQXdCZ0MsSUFBeEIsQ0FBNkJoQyxDQUE3QixDQUFGLElBQW1DLENBQUMsRUFBRCxFQUFJLFlBQUosRUFBaUIsT0FBakIsQ0FBN29CLElBQXdxQixDQUFDLEVBQUQsRUFBSSxTQUFKLEVBQWMsT0FBZCxDQUFuckI7QUFBMHNCLGFBQU0sYUFBV08sQ0FBQyxDQUFDLENBQUQsQ0FBWixJQUFpQixXQUFTQSxDQUFDLENBQUMsQ0FBRCxDQUEzQixJQUFnQyxXQUFTQSxDQUFDLENBQUMsQ0FBRCxDQUExQyxHQUE4Q0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLEtBQW5ELEdBQXlELGNBQVlBLENBQUMsQ0FBQyxDQUFELENBQWIsSUFBa0IsU0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBMUIsS0FBZ0NBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSyxRQUFyQyxDQUF6RCxFQUF3RyxVQUFRQSxDQUFDLENBQUMsQ0FBRCxDQUFULFlBQTBDNEwsTUFBTSxDQUFDc0QsU0FBUCxDQUFpQkMsY0FBakIsR0FBZ0MsQ0FBMUUsS0FBOEVuUCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssS0FBbkYsQ0FBeEcsRUFBa00sV0FBU0EsQ0FBQyxDQUFDLENBQUQsQ0FBVixLQUFnQkEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLFFBQXJCLENBQWxNLEVBQWlPRixDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBRCxHQUFRLENBQUMsQ0FBMU8sRUFBNE9GLENBQUMsQ0FBQ3VPLElBQUYsR0FBT3JPLENBQUMsQ0FBQyxDQUFELENBQXBQLEVBQXdQRixDQUFDLENBQUM2TyxPQUFGLEdBQVVqUCxDQUFDLENBQUNNLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBblEsRUFBMFFGLENBQWhSO0FBQWtSOztBQUFBb0IsU0FBSyxDQUFDQyxPQUFOLEtBQWdCRCxLQUFLLENBQUNDLE9BQU4sR0FBYyxVQUFTMUIsQ0FBVCxFQUFXO0FBQUMsYUFBTSxxQkFBbUJJLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBakIsQ0FBMEJNLElBQTFCLENBQStCdEIsQ0FBL0IsQ0FBekI7QUFBMkQsS0FBckc7QUFBdUcsUUFBSVMsQ0FBQyxHQUFDLENBQUMsT0FBRCxFQUFTLE9BQVQsRUFBaUIsVUFBakIsQ0FBTjs7QUFBbUMsYUFBU0UsQ0FBVCxDQUFXWCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFVBQUlFLENBQUMsR0FBQyxFQUFOO0FBQUEsVUFBU0ksQ0FBQyxHQUFDLElBQVg7QUFBQSxVQUFnQkUsQ0FBQyxHQUFDSixDQUFsQjtBQUFvQmdCLFdBQUssQ0FBQ0MsT0FBTixDQUFjckIsQ0FBZCxJQUFpQlEsQ0FBQyxHQUFDSixDQUFDLENBQUNvSixNQUFGLENBQVN4SixDQUFULENBQW5CLEdBQStCLFlBQVUsT0FBT0EsQ0FBakIsS0FBcUJRLENBQUMsR0FBQ0osQ0FBQyxDQUFDb0osTUFBRixDQUFTLENBQUN4SixDQUFELENBQVQsQ0FBdkIsQ0FBL0I7O0FBQXFFLFdBQUksSUFBSVUsQ0FBQyxHQUFDLENBQU4sRUFBUUUsQ0FBQyxHQUFDSixDQUFDLENBQUNrQixNQUFoQixFQUF1QmhCLENBQUMsR0FBQ0UsQ0FBekIsRUFBMkJGLENBQUMsSUFBRSxDQUE5QixFQUFnQztBQUFDLFlBQUlJLENBQUMsR0FBQ04sQ0FBQyxDQUFDRSxDQUFELENBQVA7QUFBVyxZQUFHSixDQUFDLEdBQUMsSUFBSWdELE1BQUosQ0FBVyxNQUFJeEMsQ0FBSixHQUFNLHNCQUFqQixFQUF5QzhCLElBQXpDLENBQThDakQsQ0FBOUMsQ0FBTCxFQUFzRDtBQUFNOztBQUFBLGFBQU9XLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBTCxDQUFELEVBQWVBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTUosQ0FBQyxDQUFDb1AsS0FBRixHQUFRLENBQUMsQ0FBVCxFQUFXcFAsQ0FBQyxDQUFDcU8sSUFBRixHQUFPak8sQ0FBQyxDQUFDLENBQUQsQ0FBbkIsRUFBdUJKLENBQUMsQ0FBQzJPLE9BQUYsR0FBVWpQLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUF4QyxJQUFnREosQ0FBQyxDQUFDb1AsS0FBRixHQUFRLENBQUMsQ0FBeEUsRUFBMEVwUCxDQUFqRjtBQUFtRjs7QUFBQSxXQUFPLFVBQVNOLENBQVQsRUFBV1EsQ0FBWCxFQUFhO0FBQUMsVUFBSUksQ0FBQyxHQUFDLFVBQVNiLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsR0FBQ0EsQ0FBQyxDQUFDNFAsV0FBRixFQUFELEdBQWlCLFNBQTRCekQsTUFBTSxDQUFDc0QsU0FBbkMsSUFBOEMsWUFBVSxPQUFPdEQsTUFBTSxDQUFDc0QsU0FBUCxDQUFpQkksU0FBaEYsR0FBMEYxRCxNQUFNLENBQUNzRCxTQUFQLENBQWlCSSxTQUFqQixDQUEyQkQsV0FBM0IsRUFBMUYsR0FBbUksRUFBNUo7QUFBK0osT0FBM0ssQ0FBNEszUCxDQUE1SyxDQUFOOztBQUFxTCxhQUFNO0FBQUM2UCxVQUFFLEVBQUNqUCxDQUFKO0FBQU1rUCxlQUFPLEVBQUMvUCxDQUFDLENBQUNhLENBQUQsQ0FBZjtBQUFtQm1QLGdCQUFRLEVBQUMzUCxDQUFDLENBQUNRLENBQUQsQ0FBN0I7QUFBaUNvUCxVQUFFLEVBQUMxUCxDQUFDLENBQUNNLENBQUQsQ0FBckM7QUFBeUNxUCxXQUFHLEVBQUN2UCxDQUFDLENBQUNFLENBQUQsRUFBR0osQ0FBSDtBQUE5QyxPQUFOO0FBQTJELEtBQXJRO0FBQXNRLEdBQXhrRyxFQUF6SjtBQUFBLE1BQW91RzBQLEVBQUUsR0FBQ2xCLEVBQUUsRUFBenVHOztBQUE0dUcsTUFBSW1CLEVBQUo7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBVUMsRUFBVjtBQUFBLE1BQWFDLEVBQWI7QUFBQSxNQUFnQkMsRUFBRSxHQUFDLHlCQUFuQjtBQUFBLE1BQTZDQyxFQUFFLEdBQUMseUJBQWhEO0FBQUEsTUFBMEVDLEVBQUUsR0FBQyw4QkFBN0U7QUFBQSxNQUE0R0MsRUFBRSxJQUFFUCxFQUFFLEdBQUNRLFFBQUgsRUFBWVAsRUFBRSxHQUFDRCxFQUFFLENBQUNTLFFBQWxCLEVBQTJCUCxFQUFFLEdBQUNGLEVBQUUsQ0FBQ1UsUUFBakMsRUFBMENQLEVBQUUsR0FBQ0gsRUFBRSxDQUFDVyxJQUFoRCxFQUFxRCxHQUFHbEgsTUFBSCxDQUFVd0csRUFBVixFQUFhLElBQWIsRUFBbUJ4RyxNQUFuQixDQUEwQnlHLEVBQTFCLEVBQThCekcsTUFBOUIsQ0FBcUMwRyxFQUFFLEdBQUMsTUFBSUEsRUFBTCxHQUFRLEVBQS9DLENBQXZELENBQTlHO0FBQUEsTUFBeU5TLEVBQUUsR0FBQ2IsRUFBNU47QUFBQSxNQUErTmMsRUFBRSxHQUFDLGFBQWFqUCxJQUFiLENBQWtCZ1AsRUFBRSxDQUFDbEIsRUFBckIsQ0FBbE87QUFBQSxNQUEyUG9CLEVBQUUsR0FBQyxTQUFTckgsTUFBVCxDQUFnQixFQUFoQixDQUE5UDtBQUFBLE1BQWtSc0gsRUFBRSxHQUFDMUIsU0FBclI7QUFBQSxNQUErUjJCLEVBQUUsR0FBQyxDQUFDLE9BQU92SCxNQUFQLENBQWNxSCxFQUFkLENBQUQsRUFBbUIsZUFBbkIsRUFBbUMscUJBQW5DLEVBQXlELFFBQVFySCxNQUFSLENBQWVzSCxFQUFFLENBQUNFLFlBQUgsSUFBaUJGLEVBQUUsQ0FBQ0csUUFBbkMsQ0FBekQsRUFBc0csVUFBVXpILE1BQVYsQ0FBaUJzSCxFQUFFLENBQUNuQixRQUFILENBQVk5TixPQUFaLENBQW9CLElBQXBCLEVBQXlCLEdBQXpCLENBQWpCLENBQXRHLEVBQXNKLFVBQVUySCxNQUFWLENBQWlCd0Isa0JBQWtCLENBQUNzRixFQUFELENBQW5DLENBQXRKLEVBQWdNbkYsSUFBaE0sQ0FBcU0sR0FBck0sQ0FBbFM7QUFBQSxNQUE0ZStGLEVBQUUsR0FBQztBQUFDQyxpQkFBYSxFQUFDLDRCQUFmO0FBQTRDQyxjQUFVLEVBQUNqQixFQUF2RDtBQUEwRGtCLGFBQVMsRUFBQyxHQUFHN0gsTUFBSCxDQUFVMkcsRUFBVixFQUFhLGtCQUFiLENBQXBFO0FBQXFHbUIsZUFBVyxFQUFDLEdBQUc5SCxNQUFILENBQVUyRyxFQUFWLEVBQWEsNENBQWIsQ0FBakg7QUFBNEtvQixlQUFXLEVBQUMsUUFBeEw7QUFBaU1DLHNCQUFrQixFQUFDLEdBQUdoSSxNQUFILENBQVUsNkJBQVYsRUFBd0MsVUFBeEMsQ0FBcE47QUFBd1FpSSxtQkFBZSxFQUFDLDhCQUF4UjtBQUF1VEMsd0JBQW9CLEVBQUMsNkNBQTVVO0FBQTBYQyxtQkFBZSxFQUFDLDBCQUExWTtBQUFxYUMsd0JBQW9CLEVBQUMsMERBQTFiO0FBQXFmQyxhQUFTLEVBQUMsR0FBR3JJLE1BQUgsQ0FBVSx3QkFBVixFQUFtQyxRQUFuQyxDQUEvZjtBQUE0aUJzSSxnQkFBWSxFQUFDLDBCQUF6akI7QUFBb2xCQyxnQkFBWSxFQUFDLGlDQUFqbUI7QUFBbW9CQyxjQUFVLEVBQUMsd0JBQTlvQjtBQUF1cUJDLGtCQUFjLEVBQUMsa0JBQXRyQjtBQUF5c0JDLHNCQUFrQixFQUFDLGdCQUE1dEI7QUFBNnVCQyxXQUFPLEVBQUMsc0JBQXJ2QjtBQUE0d0JDLGVBQVcsRUFBQyxHQUFHNUksTUFBSCxDQUFVNkcsRUFBVixFQUFhLHlCQUFiLENBQXh4QjtBQUFnMEJnQyxjQUFVLEVBQUMsR0FBRzdJLE1BQUgsQ0FBVTRHLEVBQVYsRUFBYSxVQUFiLENBQTMwQjtBQUFvMkJrQyxzQkFBa0IsRUFBQyxHQUFHOUksTUFBSCxDQUFVNEcsRUFBVixFQUFhLFdBQWIsQ0FBdjNCO0FBQWk1Qm1DLGFBQVMsRUFBQyxHQUFHL0ksTUFBSCxDQUFVNkcsRUFBVixFQUFhLHdDQUFiLENBQTM1QjtBQUFrOUJtQyxtQkFBZSxFQUFDLHFCQUFsK0I7QUFBdy9CQyxjQUFVLEVBQUMsMEJBQW5nQztBQUE4aENDLGdCQUFZLEVBQUM7QUFBM2lDLEdBQS9lO0FBQUEsTUFBeWtEQyxFQUFFLEdBQUMsSUFBNWtEOztBQUFpbEQsV0FBU0MsRUFBVCxHQUFhO0FBQUMsV0FBT0QsRUFBUDtBQUFVOztBQUFBLFdBQVNFLEVBQVQsQ0FBWWxULENBQVosRUFBYztBQUFDZ1QsTUFBRSxHQUFDaFQsQ0FBSDtBQUFLOztBQUFBLFdBQVNtVCxFQUFULENBQVluVCxDQUFaLEVBQWM7QUFBQzBMLFNBQUssQ0FBQzlLLFNBQU4sQ0FBZ0JtRixXQUFoQixDQUE0QmpDLEtBQTVCLENBQWtDLElBQWxDLEVBQXVDZSxTQUF2QyxHQUFrRCxLQUFLK0osSUFBTCxHQUFVLFlBQTVELEVBQXlFLEtBQUt3RSxPQUFMLEdBQWFwVCxDQUF0RjtBQUF3Rjs7QUFBQSxXQUFTcVQsRUFBVCxDQUFZclQsQ0FBWixFQUFjO0FBQUMsV0FBT3VJLEVBQUUsQ0FBQ3pFLEtBQUgsQ0FBUyxLQUFLLENBQWQsRUFBZ0IsQ0FBQztBQUFDd1AsYUFBTyxFQUFDLG1CQUFVO0FBQUNoSyxVQUFFLENBQUN0SixDQUFELEVBQUksVUFBU0EsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLENBQUMsQ0FBQ3NULE9BQUYsSUFBV3RULENBQUMsQ0FBQ3NULE9BQUYsRUFBbEI7QUFBOEIsU0FBOUMsQ0FBRjtBQUFtRDtBQUF2RSxLQUFELEVBQTJFekosTUFBM0UsQ0FBa0Y0RSxFQUFFLENBQUN6TyxDQUFELENBQXBGLENBQWhCLENBQVA7QUFBaUg7O0FBQUEsV0FBU3VULEVBQVQsQ0FBWXZULENBQVosRUFBYztBQUFDc0osTUFBRSxDQUFDdEosQ0FBRCxFQUFJLFVBQVNBLENBQVQsRUFBVztBQUFDQSxPQUFDO0FBQUcsS0FBcEIsQ0FBRixFQUF5QkEsQ0FBQyxDQUFDK0IsTUFBRixHQUFTLENBQWxDO0FBQW9DOztBQUFBLFdBQVN5UixFQUFULENBQVl4VCxDQUFaLEVBQWNDLENBQWQsRUFBZ0JJLENBQWhCLEVBQWtCO0FBQUMsUUFBRyxDQUFDLENBQUQsS0FBS0osQ0FBQyxDQUFDRCxDQUFELENBQVQsRUFBYSxNQUFNLElBQUltVCxFQUFKLENBQU8sd0JBQXdCdEosTUFBeEIsQ0FBK0J4SixDQUEvQixDQUFQLENBQU47QUFBZ0Q7O0FBQUEsV0FBU29ULEVBQVQsR0FBYTtBQUFDLFFBQUl6VCxDQUFDLEdBQUM2RSxTQUFTLENBQUM5QyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTOEMsU0FBUyxDQUFDLENBQUQsQ0FBdEMsR0FBMENBLFNBQVMsQ0FBQyxDQUFELENBQW5ELEdBQXVELEVBQTdEO0FBQUEsUUFBZ0U1RSxDQUFDLEdBQUM0RSxTQUFTLENBQUM5QyxNQUFWLEdBQWlCLENBQWpCLEdBQW1COEMsU0FBUyxDQUFDLENBQUQsQ0FBNUIsR0FBZ0MsS0FBSyxDQUF2RztBQUFBLFFBQXlHeEUsQ0FBQyxHQUFDd0UsU0FBUyxDQUFDOUMsTUFBVixHQUFpQixDQUFqQixHQUFtQjhDLFNBQVMsQ0FBQyxDQUFELENBQTVCLEdBQWdDLEtBQUssQ0FBaEo7QUFBa0osUUFBRyxDQUFDdEQsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFMLEVBQVMsTUFBTSxJQUFJMEwsS0FBSixDQUFVLDRCQUFWLENBQU47QUFBOEM3SSxLQUFDLENBQUM1QyxDQUFDLENBQUN5VCxNQUFILENBQUQsSUFBYXpULENBQUMsQ0FBQ3lULE1BQUYsQ0FBUzFULENBQVQsQ0FBYixFQUF5QjZDLENBQUMsQ0FBQzVDLENBQUMsQ0FBQzBULFFBQUgsQ0FBRCxHQUFjdEssRUFBRSxDQUFDckosQ0FBRCxFQUFHQyxDQUFDLENBQUMwVCxRQUFGLENBQVczVCxDQUFYLENBQUgsQ0FBaEIsR0FBa0NxSixFQUFFLENBQUNySixDQUFELEVBQUdDLENBQUMsQ0FBQzBULFFBQUwsQ0FBN0Q7QUFBNEUsUUFBSXBULENBQUMsR0FBQ04sQ0FBQyxDQUFDMlQsUUFBUjtBQUFBLFFBQWlCblQsQ0FBQyxHQUFDLEtBQUssQ0FBTCxLQUFTRixDQUFULEdBQVcsRUFBWCxHQUFjQSxDQUFqQztBQUFBLFFBQW1DSSxDQUFDLEdBQUNWLENBQUMsQ0FBQzRULFFBQXZDO0FBQUEsUUFBZ0RoVCxDQUFDLEdBQUMsS0FBSyxDQUFMLEtBQVNGLENBQVQsR0FBVyxFQUFYLEdBQWNBLENBQWhFO0FBQUEsUUFBa0VJLENBQUMsR0FBQ3NKLEVBQUUsQ0FBQ0ksRUFBRSxDQUFDaEssQ0FBRCxDQUFILEVBQU9nSyxFQUFFLENBQUN6SyxDQUFELENBQVQsQ0FBdEU7QUFBb0YsUUFBR2UsQ0FBQyxDQUFDZ0IsTUFBRixHQUFTLENBQVosRUFBYyxNQUFNLElBQUlvUixFQUFKLENBQU8sMEJBQTBCdEosTUFBMUIsQ0FBaUM5SSxDQUFDLENBQUN5SyxJQUFGLENBQU8sR0FBUCxDQUFqQyxFQUE2QyxNQUE3QyxFQUFxRDNCLE1BQXJELENBQTREeEosQ0FBNUQsQ0FBUCxDQUFOO0FBQTZFLFFBQUlZLENBQUMsR0FBQ3NILEVBQUUsQ0FBQyxFQUFELEVBQUk5SCxDQUFKLEVBQU1JLENBQU4sQ0FBUjtBQUFBLFFBQWlCTSxDQUFDLEdBQUNrSixFQUFFLENBQUNJLEVBQUUsQ0FBQ3pLLENBQUQsQ0FBSCxFQUFPeUssRUFBRSxDQUFDeEosQ0FBRCxDQUFULENBQXJCO0FBQW1DLFFBQUdFLENBQUMsQ0FBQ1ksTUFBRixHQUFTLENBQVosRUFBYyxNQUFNLElBQUlvUixFQUFKLENBQU8sMkJBQTJCdEosTUFBM0IsQ0FBa0MxSSxDQUFDLENBQUNxSyxJQUFGLENBQU8sR0FBUCxDQUFsQyxFQUE4QyxNQUE5QyxFQUFzRDNCLE1BQXRELENBQTZEeEosQ0FBN0QsQ0FBUCxDQUFOO0FBQThFLFdBQU9pSixFQUFFLENBQUN0SixDQUFELEVBQUksVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ3VULFFBQUUsQ0FBQ3hULENBQUQsRUFBR2lCLENBQUMsQ0FBQ2hCLENBQUQsQ0FBSixFQUFRLElBQUk0SixNQUFKLENBQVc1SixDQUFYLEVBQWEsT0FBYixFQUFzQjRKLE1BQXRCLENBQTZCeEosQ0FBN0IsQ0FBUixDQUFGO0FBQTJDLEtBQTdELENBQUYsRUFBa0V3QyxDQUFDLENBQUM1QyxDQUFDLENBQUM2VCxLQUFILENBQUQsSUFBWTdULENBQUMsQ0FBQzZULEtBQUYsQ0FBUTlULENBQVIsQ0FBOUUsRUFBeUZBLENBQWhHO0FBQWtHOztBQUFBLFdBQVMrVCxFQUFULEdBQWE7QUFBQyxXQUFNLENBQUN4TyxJQUFJLENBQUNxRixNQUFMLEdBQWM1SixRQUFkLENBQXVCLEVBQXZCLEVBQTJCYyxLQUEzQixDQUFpQyxDQUFqQyxJQUFvQ21SLEVBQUUsRUFBdEMsR0FBeUNqUCxJQUFJLENBQUNDLEdBQUwsR0FBV2pELFFBQVgsQ0FBb0IsRUFBcEIsQ0FBMUMsRUFBbUVjLEtBQW5FLENBQXlFLENBQXpFLEVBQTJFLEVBQTNFLENBQU47QUFBcUY7O0FBQUEsV0FBU2tTLEVBQVQsQ0FBWWhVLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFFBQUcrUSxFQUFFLENBQUNmLEVBQUgsQ0FBTWdFLE9BQVQsRUFBaUI7QUFBQyxVQUFJNVQsQ0FBQyxHQUFDaUwsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQzJJLGNBQU0sRUFBQ2xCLEVBQVI7QUFBV21CLFVBQUUsRUFBQy9DO0FBQWQsT0FBZixDQUFOO0FBQXdDLGFBQU0sdUJBQXVCdkgsTUFBdkIsQ0FBOEI3SixDQUE5QixFQUFnQyxZQUFoQyxFQUE4QzZKLE1BQTlDLENBQXFEeEosQ0FBckQsQ0FBTjtBQUE4RDs7QUFBQSxXQUFPMlEsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLEdBQVUsa0NBQWtDdkssTUFBbEMsQ0FBeUM1SixDQUF6QyxDQUFWLEdBQXNEMlEsUUFBUSxDQUFDeUQsSUFBdEU7QUFBMkU7O0FBQUEsV0FBU0MsRUFBVCxDQUFZdFUsQ0FBWixFQUFjO0FBQUMsUUFBRztBQUFDLGFBQU9BLENBQUMsRUFBUjtBQUFXLEtBQWYsQ0FBZSxPQUFNQSxDQUFOLEVBQVE7QUFBQyxZQUFNQSxDQUFDLFlBQVlpTixTQUFiLEdBQXVCLElBQUlrRyxFQUFKLENBQU8sNkNBQVAsQ0FBdkIsR0FBNkUsSUFBSUEsRUFBSixDQUFPLGFBQWF0SixNQUFiLENBQW9CN0osQ0FBQyxDQUFDb1QsT0FBdEIsQ0FBUCxDQUFuRjtBQUEwSDtBQUFDOztBQUFBRCxJQUFFLENBQUN2UyxTQUFILEdBQWEsSUFBSThLLEtBQUosRUFBYjtBQUF1QixNQUFJNkksRUFBRSxHQUFDLEVBQVA7O0FBQVUsV0FBU0MsRUFBVCxDQUFZeFUsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFFBQUlFLENBQUMsR0FBQ2dVLEVBQUUsQ0FBQ3RVLENBQUQsQ0FBUjtBQUFZLFdBQU9NLENBQUMsSUFBRUEsQ0FBQyxDQUFDa1UsS0FBTCxJQUFZLENBQUNsVSxDQUFDLENBQUNtVSxNQUFmLElBQXVCblUsQ0FBQyxDQUFDa1UsS0FBRixFQUF2QixFQUFpQ0YsRUFBRSxDQUFDdFUsQ0FBRCxDQUFGLEdBQU1rTSxNQUFNLENBQUN3SSxJQUFQLENBQVkzVSxDQUFaLEVBQWNDLENBQWQsRUFBZ0JJLENBQWhCLENBQXZDLEVBQTBEa1UsRUFBRSxDQUFDdFUsQ0FBRCxDQUFuRTtBQUF1RTs7QUFBQSxXQUFTMlUsRUFBVCxDQUFZNVUsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDaUosTUFBRSxDQUFDakosQ0FBRCxFQUFJLFVBQVNBLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsVUFBSUUsQ0FBQyxHQUFDUixDQUFDLENBQUM0VSxZQUFGLENBQWV4VSxDQUFmLENBQU47QUFBd0IsZUFBT0ksQ0FBUCxLQUFXVCxDQUFDLENBQUNPLENBQUQsQ0FBRCxHQUFLLFdBQVNFLENBQVQsSUFBWSxZQUFVQSxDQUF0QixHQUF3QixXQUFTQSxDQUFqQyxHQUFtQ0EsQ0FBbkQ7QUFBc0QsS0FBaEcsQ0FBRjtBQUFxRzs7QUFBQSxXQUFTcVUsRUFBVCxDQUFZOVUsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFFBQUlFLENBQUMsR0FBQ3VLLFFBQVEsQ0FBQ2lLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBTjtBQUF1Q3hVLEtBQUMsQ0FBQ3lVLEVBQUYsR0FBS3pVLENBQUMsQ0FBQ3FPLElBQUYsR0FBTzVPLENBQVosRUFBY08sQ0FBQyxDQUFDbkIsR0FBRixHQUFNYSxDQUFwQixFQUFzQk0sQ0FBQyxDQUFDMFUsWUFBRixDQUFlLE9BQWYsRUFBdUIsZ0VBQXZCLENBQXRCLEVBQStHbkssUUFBUSxDQUFDb0ssSUFBVCxDQUFjQyxXQUFkLENBQTBCNVUsQ0FBMUIsQ0FBL0csRUFBNElGLENBQUMsQ0FBQ3lILElBQUYsQ0FBUSxZQUFVO0FBQUNnRCxjQUFRLENBQUNvSyxJQUFULENBQWNFLFdBQWQsQ0FBMEI3VSxDQUExQjtBQUE2QixLQUFoRCxDQUE1STtBQUErTDs7QUFBQSxXQUFTOFUsRUFBVCxDQUFZclYsQ0FBWixFQUFjQyxDQUFkLEVBQWdCSSxDQUFoQixFQUFrQjtBQUFDLFFBQUlFLENBQUMsR0FBQyxTQUFTRixDQUFULENBQVdFLENBQVgsRUFBYTtBQUFDLFVBQUlFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDK1UsSUFBUjtBQUFBLFVBQWEzVSxDQUFDLEdBQUNKLENBQUMsQ0FBQ2dWLE1BQWpCOztBQUF3QixVQUFHOVUsQ0FBQyxJQUFFRSxDQUFDLEtBQUdWLENBQVYsRUFBWTtBQUFDLFlBQUlZLENBQUMsR0FBQ3lLLElBQUksQ0FBQ2tLLEtBQUwsQ0FBVy9VLENBQVgsQ0FBTjtBQUFvQkksU0FBQyxDQUFDNFUsSUFBRixHQUFPelYsQ0FBQyxDQUFDMFYsSUFBRixDQUFPN1UsQ0FBUCxDQUFQLEdBQWlCYixDQUFDLENBQUMyVixPQUFGLENBQVU5VSxDQUFWLENBQWpCLEVBQThCYixDQUFDLENBQUM0VixNQUFGLENBQVMvVSxDQUFULENBQTlCLEVBQTBDcUssRUFBRSxDQUFDaUIsTUFBRCxFQUFRLFNBQVIsRUFBa0I5TCxDQUFsQixDQUE1QztBQUFpRTtBQUFDLEtBQS9JOztBQUFnSjJLLE1BQUUsQ0FBQ21CLE1BQUQsRUFBUSxTQUFSLEVBQWtCNUwsQ0FBbEIsQ0FBRixFQUF1QkYsQ0FBQyxDQUFDeUgsSUFBRixDQUFRLFlBQVU7QUFBQ29ELFFBQUUsQ0FBQ2lCLE1BQUQsRUFBUSxTQUFSLEVBQWtCNUwsQ0FBbEIsQ0FBRjtBQUF1QixLQUExQyxDQUF2QjtBQUFvRTs7QUFBQSxXQUFTc1YsRUFBVCxDQUFZN1YsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsUUFBSUksQ0FBQyxHQUFDSixDQUFDLENBQUM2VixHQUFSO0FBQUEsUUFBWXZWLENBQUMsR0FBQ04sQ0FBQyxDQUFDOFYsU0FBaEI7QUFBQSxRQUEwQnRWLENBQUMsR0FBQ1IsQ0FBQyxDQUFDK1YsYUFBOUI7QUFBQSxRQUE0Q3JWLENBQUMsR0FBQ3FRLEVBQUUsQ0FBQ2pCLE9BQUgsQ0FBV2tHLElBQVgsR0FBZ0IsRUFBaEIsR0FBbUJ6QixFQUFFLENBQUMsRUFBRCxFQUFJalUsQ0FBSixFQUFNRSxDQUFOLENBQW5FO0FBQTRFLFdBQU9FLENBQUMsQ0FBQ3VWLEtBQUYsSUFBU3ZWLENBQUMsQ0FBQ3VWLEtBQUYsRUFBVCxFQUFtQkMsRUFBRSxDQUFDblcsQ0FBRCxFQUFHSyxDQUFILEVBQUtFLENBQUwsQ0FBckIsRUFBNkJJLENBQXBDO0FBQXNDOztBQUFBLFdBQVN3VixFQUFULENBQVluVyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFJSSxDQUFDLEdBQUN3RSxTQUFTLENBQUM5QyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTOEMsU0FBUyxDQUFDLENBQUQsQ0FBdEMsR0FBMENBLFNBQVMsQ0FBQyxDQUFELENBQW5ELEdBQXVELEVBQTdEO0FBQUEsUUFBZ0V0RSxDQUFDLEdBQUN1SyxRQUFRLENBQUNpSyxhQUFULENBQXVCLE1BQXZCLENBQWxFO0FBQWlHeFUsS0FBQyxDQUFDMFUsWUFBRixDQUFlLGdCQUFmLEVBQWdDLE9BQWhDLEdBQXlDMVUsQ0FBQyxDQUFDMFUsWUFBRixDQUFlLFFBQWYsRUFBd0IsTUFBeEIsQ0FBekMsRUFBeUUxVSxDQUFDLENBQUMwVSxZQUFGLENBQWUsUUFBZixFQUF3QmhWLENBQXhCLENBQXpFLEVBQW9HTSxDQUFDLENBQUMwVSxZQUFGLENBQWUsUUFBZixFQUF3QjVVLENBQXhCLENBQXBHLEVBQStIRSxDQUFDLENBQUMwVSxZQUFGLENBQWUsT0FBZixFQUF1QixjQUF2QixDQUEvSCxFQUFzSzNMLEVBQUUsQ0FBQ3RKLENBQUQsRUFBSSxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQUlJLENBQUMsR0FBQ3lLLFFBQVEsQ0FBQ2lLLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBTjtBQUFzQzFVLE9BQUMsQ0FBQytWLElBQUYsR0FBTyxRQUFQLEVBQWdCL1YsQ0FBQyxDQUFDdU8sSUFBRixHQUFPM08sQ0FBdkIsRUFBeUJJLENBQUMsQ0FBQ3FFLEtBQUYsR0FBUTZFLEVBQUUsQ0FBQ3ZKLENBQUQsQ0FBRixHQUFNQSxDQUFOLEdBQVFzTCxJQUFJLENBQUNDLFNBQUwsQ0FBZXZMLENBQWYsQ0FBekMsRUFBMkRPLENBQUMsQ0FBQzRVLFdBQUYsQ0FBYzlVLENBQWQsQ0FBM0Q7QUFBNEUsS0FBcEksQ0FBeEssRUFBK1N5SyxRQUFRLENBQUNvSyxJQUFULENBQWNDLFdBQWQsQ0FBMEI1VSxDQUExQixDQUEvUyxFQUE0VUEsQ0FBQyxDQUFDOFYsTUFBRixFQUE1VSxFQUF1VnZMLFFBQVEsQ0FBQ29LLElBQVQsQ0FBY0UsV0FBZCxDQUEwQjdVLENBQTFCLENBQXZWO0FBQW9YOztBQUFBLE1BQUkrVixFQUFFLEdBQUMsRUFBUDs7QUFBVSxNQUFJQyxFQUFFLEdBQUM7QUFBQ0MsYUFBUyxFQUFDLG1CQUFTeFcsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ3FXLFFBQUUsQ0FBQ3RXLENBQUQsQ0FBRixHQUFNc1csRUFBRSxDQUFDdFcsQ0FBRCxDQUFGLElBQU8sRUFBYixFQUFnQnNXLEVBQUUsQ0FBQ3RXLENBQUQsQ0FBRixDQUFNOEgsSUFBTixDQUFXN0gsQ0FBWCxDQUFoQjtBQUE4QixLQUF2RDtBQUF3RHdXLGVBQVcsRUFBQyxxQkFBU3pXLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJSSxDQUFDLEdBQUNpVyxFQUFFLENBQUN0VyxDQUFELENBQVIsRUFBWU8sQ0FBQyxHQUFDLENBQWxCLEVBQW9CQSxDQUFDLEdBQUNGLENBQUMsQ0FBQzBCLE1BQXhCLEVBQStCeEIsQ0FBQyxFQUFoQztBQUFtQyxZQUFHRixDQUFDLENBQUNFLENBQUQsQ0FBRCxLQUFPTixDQUFWLEVBQVksT0FBTyxLQUFLSSxDQUFDLENBQUNxVyxNQUFGLENBQVNuVyxDQUFULEVBQVcsQ0FBWCxDQUFaO0FBQS9DO0FBQXlFLEtBQTNKO0FBQTRKb1csWUFBUSxFQUFDLGtCQUFTM1csQ0FBVCxFQUFXO0FBQUNzSixRQUFFLENBQUNnTixFQUFFLENBQUN0VyxDQUFELENBQUgsRUFBUSxVQUFTQSxDQUFULEVBQVc7QUFBQ0EsU0FBQztBQUFHLE9BQXhCLENBQUY7QUFBNkI7QUFBOU0sR0FBUDtBQUFBLE1BQXVONFcsRUFBRSxHQUFDLFlBQVU7QUFBQyxhQUFTNVcsQ0FBVCxDQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDMk0sUUFBRSxDQUFDLElBQUQsRUFBTWhOLENBQU4sQ0FBRixFQUFXLEtBQUs2VyxTQUFMLEdBQWU1VyxDQUExQixFQUE0QixLQUFLNlcsU0FBTCxHQUFlelcsQ0FBM0MsRUFBNkMsS0FBSzBXLE1BQUwsR0FBWSxDQUF6RCxFQUEyRCxLQUFLQyxRQUFMLEdBQWMsQ0FBQyxDQUExRSxFQUE0RSxLQUFLQyxRQUFMLEdBQWMsSUFBMUY7QUFBK0Y7O0FBQUEsV0FBTzVKLEVBQUUsQ0FBQ3JOLENBQUQsRUFBRyxDQUFDO0FBQUNvTixTQUFHLEVBQUMsT0FBTDtBQUFhMUksV0FBSyxFQUFDLGVBQVMxRSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFPLEtBQUtnWCxRQUFaLElBQXNCLEtBQUtDLElBQUwsRUFBdEIsRUFBa0MsS0FBS0gsTUFBTCxHQUFZLENBQTlDLEVBQWdELEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQS9ELEVBQWlFLEtBQUtHLFVBQUwsQ0FBZ0JuWCxDQUFoQixFQUFrQkMsQ0FBbEIsQ0FBakU7QUFBc0Y7QUFBdkgsS0FBRCxFQUEwSDtBQUFDbU4sU0FBRyxFQUFDLFlBQUw7QUFBa0IxSSxXQUFLLEVBQUMsZUFBUzFFLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsWUFBSUksQ0FBQyxHQUFDLElBQU47QUFBVyxhQUFLMlcsUUFBTCxLQUFnQixLQUFLQyxRQUFMLEdBQWNHLFVBQVUsQ0FBRSxZQUFVO0FBQUMsWUFBRS9XLENBQUMsQ0FBQzBXLE1BQUosR0FBVzFXLENBQUMsQ0FBQ3lXLFNBQWIsR0FBdUI3VyxDQUFDLEVBQXhCLElBQTRCRCxDQUFDLElBQUdLLENBQUMsQ0FBQzhXLFVBQUYsQ0FBYW5YLENBQWIsRUFBZUMsQ0FBZixDQUFoQztBQUFtRCxTQUFoRSxFQUFrRSxLQUFLNFcsU0FBdkUsQ0FBeEM7QUFBMkg7QUFBNUssS0FBMUgsRUFBd1M7QUFBQ3pKLFNBQUcsRUFBQyxNQUFMO0FBQVkxSSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLc1MsUUFBTCxHQUFjLENBQUMsQ0FBZixFQUFpQkssWUFBWSxDQUFDLEtBQUtKLFFBQU4sQ0FBN0IsRUFBNkMsS0FBS0EsUUFBTCxHQUFjLElBQTNEO0FBQWdFO0FBQTdGLEtBQXhTLENBQUgsQ0FBRixFQUE4WWpYLENBQXJaO0FBQXVaLEdBQWpoQixFQUExTjtBQUFBLE1BQTh1QnNYLEVBQUUsR0FBQztBQUFDM0IsV0FBTyxFQUFDakwsRUFBVDtBQUFZZ0wsUUFBSSxFQUFDaEwsRUFBakI7QUFBb0JrTCxVQUFNLEVBQUNsTDtBQUEzQixHQUFqdkI7QUFBQSxNQUFneEI2TSxFQUFFLEdBQUMvSyxFQUFFLENBQUM7QUFBQ2dMLGVBQVcsRUFBQyxDQUFDLENBQWQ7QUFBZ0JDLHNCQUFrQixFQUFDLENBQUMsQ0FBcEM7QUFBc0NDLHVCQUFtQixFQUFDLENBQUM7QUFBM0QsR0FBRCxFQUErREosRUFBL0QsQ0FBcnhCO0FBQUEsTUFBdzFCSyxFQUFFLEdBQUM7QUFBQ2hDLFdBQU8sRUFBQzlTLENBQVQ7QUFBVzZTLFFBQUksRUFBQzdTLENBQWhCO0FBQWtCK1MsVUFBTSxFQUFDL1MsQ0FBekI7QUFBMkI0VSxzQkFBa0IsRUFBQ2pPLEVBQTlDO0FBQWlEa08sdUJBQW1CLEVBQUNsTyxFQUFyRTtBQUF3RW9PLGdCQUFZLEVBQUNuTSxFQUFFLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBdkY7QUFBcUdvTSxTQUFLLEVBQUN0TyxFQUEzRztBQUE4R2lPLGVBQVcsRUFBQ2hPLEVBQTFIO0FBQTZIc08sc0JBQWtCLEVBQUN2TyxFQUFoSjtBQUFtSndPLG1CQUFlLEVBQUN4TyxFQUFuSztBQUFzS3lPLGdCQUFZLEVBQUN6TyxFQUFuTDtBQUFzTHFJLGVBQVcsRUFBQ3JJLEVBQWxNO0FBQXFNME8sU0FBSyxFQUFDMU8sRUFBM007QUFBOE0yTyxjQUFVLEVBQUN6TSxFQUFFLENBQUMsQ0FBQyxPQUFELEVBQVMsSUFBVCxDQUFELENBQTNOO0FBQTRPME0sU0FBSyxFQUFDNU87QUFBbFAsR0FBMzFCO0FBQUEsTUFBaWxDNk8sRUFBRSxHQUFDO0FBQUN2RSxZQUFRLEVBQUM7QUFBQzhCLGFBQU8sRUFBQzlTLENBQVQ7QUFBVzZTLFVBQUksRUFBQzdTLENBQWhCO0FBQWtCK1MsWUFBTSxFQUFDL1MsQ0FBekI7QUFBMkI0UixXQUFLLEVBQUM1UixDQUFqQztBQUFtQ3dWLGVBQVMsRUFBQzlPLEVBQTdDO0FBQWdEK08sdUJBQWlCLEVBQUM5TyxFQUFsRTtBQUFxRStPLHNCQUFnQixFQUFDL087QUFBdEYsS0FBVjtBQUFvR21LLFlBQVEsRUFBQ25ILEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLEVBQUQsRUFBSThLLEVBQUosQ0FBSCxFQUFXLEVBQVgsRUFBYztBQUFDN0MsV0FBSyxFQUFDL0osRUFBUDtBQUFVNE4sdUJBQWlCLEVBQUMsQ0FBQyxDQUE3QjtBQUErQkMsc0JBQWdCLEVBQUMsQ0FBQztBQUFqRCxLQUFkO0FBQS9HLEdBQXBsQztBQUFBLE1BQXV3Q0MsRUFBRSxHQUFDO0FBQUNDLHFCQUFpQixFQUFDO0FBQUM3RSxjQUFRLEVBQUM7QUFBQzhFLGlCQUFTLEVBQUMvTSxFQUFFLENBQUMsQ0FBQ2xDLEVBQUQsRUFBSUYsRUFBSixDQUFEO0FBQWIsT0FBVjtBQUFrQ3NLLGNBQVEsRUFBQ3JILEVBQUUsQ0FBQztBQUFDbU0sWUFBSSxFQUFDbE4sRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBRCxDQUFSO0FBQXNCbk0sWUFBSSxFQUFDbU0sRUFBRSxDQUFDLENBQUMsT0FBRCxFQUFTLFFBQVQsRUFBa0IsT0FBbEIsQ0FBRDtBQUE3QixPQUFELEVBQTREa00sRUFBNUQsQ0FBN0M7QUFBNkdoRSxjQUFRLEVBQUNuSCxFQUFFLENBQUM7QUFBQ21NLFlBQUksRUFBQyxJQUFOO0FBQVdyWixZQUFJLEVBQUM7QUFBaEIsT0FBRCxFQUEyQmlZLEVBQTNCO0FBQXhILEtBQW5CO0FBQTJLcUIsU0FBSyxFQUFDO0FBQUMvRSxjQUFRLEVBQUM4RCxFQUFWO0FBQWFoRSxjQUFRLEVBQUM0RDtBQUF0QixLQUFqTDtBQUEyTTdGLGFBQVMsRUFBQztBQUFDbUMsY0FBUSxFQUFDO0FBQUNqQyxtQkFBVyxFQUFDckksRUFBYjtBQUFnQnFPLG9CQUFZLEVBQUNuTSxFQUFFLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBL0I7QUFBNkNvTSxhQUFLLEVBQUN0TyxFQUFuRDtBQUFzRGlPLG1CQUFXLEVBQUNoTyxFQUFsRTtBQUFxRXNPLDBCQUFrQixFQUFDdk8sRUFBeEY7QUFBMkZ3Tyx1QkFBZSxFQUFDeE8sRUFBM0c7QUFBOEd5TyxvQkFBWSxFQUFDek8sRUFBM0g7QUFBOEhzUCxlQUFPLEVBQUNyUCxFQUF0STtBQUF5SXlPLGFBQUssRUFBQzFPLEVBQS9JO0FBQWtKdVAsaUJBQVMsRUFBQ3RQLEVBQTVKO0FBQStKME8sa0JBQVUsRUFBQ3pNLEVBQUUsQ0FBQyxDQUFDLE9BQUQsRUFBUyxJQUFULENBQUQsQ0FBNUs7QUFBNkxzTixlQUFPLEVBQUN4UCxFQUFyTTtBQUF3TXlQLHNCQUFjLEVBQUN4UCxFQUF2TjtBQUEwTnlQLHlCQUFpQixFQUFDelAsRUFBNU87QUFBK08wUCxpQkFBUyxFQUFDM1AsRUFBelA7QUFBNFA0TyxhQUFLLEVBQUM1TyxFQUFsUTtBQUFxUW9NLGVBQU8sRUFBQzlTLENBQTdRO0FBQStRNlMsWUFBSSxFQUFDN1MsQ0FBcFI7QUFBc1IrUyxjQUFNLEVBQUMvUztBQUE3UixPQUFWO0FBQTBTOFEsY0FBUSxFQUFDbkgsRUFBRSxDQUFDO0FBQUNnTCxtQkFBVyxFQUFDLENBQUMsQ0FBZDtBQUFnQnFCLGVBQU8sRUFBQyxDQUFDLENBQXpCO0FBQTJCRyxzQkFBYyxFQUFDLENBQUMsQ0FBM0M7QUFBNkNDLHlCQUFpQixFQUFDLENBQUM7QUFBaEUsT0FBRCxFQUFvRTNCLEVBQXBFO0FBQXJULEtBQXJOO0FBQW1sQndCLGFBQVMsRUFBQztBQUFDakYsY0FBUSxFQUFDO0FBQUM4QixlQUFPLEVBQUM5UyxDQUFUO0FBQVc2UyxZQUFJLEVBQUM3UyxDQUFoQjtBQUFrQitTLGNBQU0sRUFBQy9TO0FBQXpCLE9BQVY7QUFBc0M4USxjQUFRLEVBQUMyRDtBQUEvQyxLQUE3bEI7QUFBZ3BCNkIsb0JBQWdCLEVBQUM7QUFBQ3ZGLGNBQVEsRUFBQztBQUFDNkIsWUFBSSxFQUFDbE0sRUFBTjtBQUFTcUksbUJBQVcsRUFBQ3JJO0FBQXJCLE9BQVY7QUFBbUNzSyxjQUFRLEVBQUM7QUFBQzhCLGVBQU8sRUFBQzlTLENBQVQ7QUFBVzZTLFlBQUksRUFBQzdTLENBQWhCO0FBQWtCK1MsY0FBTSxFQUFDL1M7QUFBekIsT0FBNUM7QUFBd0U4USxjQUFRLEVBQUMyRDtBQUFqRixLQUFqcUI7QUFBc3ZCOEIseUJBQXFCLEVBQUNoQixFQUE1d0I7QUFBK3dCaUIseUJBQXFCLEVBQUNqQixFQUFyeUI7QUFBd3lCa0IseUJBQXFCLEVBQUM5TSxFQUFFLENBQUM7QUFBQ29ILGNBQVEsRUFBQztBQUFDMkYsaUJBQVMsRUFBQzdQO0FBQVg7QUFBVixLQUFELEVBQTJCME8sRUFBM0I7QUFBaDBCLEdBQTF3Qzs7QUFBMG1FLFdBQVNvQixFQUFULENBQVl4WixDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFKLEVBQU1JLENBQU4sRUFBUUUsQ0FBUixFQUFVRSxDQUFWLEVBQVlFLENBQVosRUFBY0UsQ0FBZDtBQUFnQixXQUFPMlQsRUFBRSxDQUFDeFUsQ0FBRCxFQUFHLFFBQUgsR0FBYUMsQ0FBQyxHQUFDLEdBQUYsRUFBTUksQ0FBQyxHQUFDLEdBQVIsRUFBWUUsQ0FBQyxHQUFDNEwsTUFBTSxDQUFDc04sVUFBUCxHQUFrQnROLE1BQU0sQ0FBQ3NOLFVBQXpCLEdBQW9DdE4sTUFBTSxDQUFDdU4sT0FBUCxHQUFldk4sTUFBTSxDQUFDdU4sT0FBdEIsR0FBOEIsQ0FBaEYsRUFBa0ZqWixDQUFDLEdBQUMwTCxNQUFNLENBQUN3TixTQUFQLEdBQWlCeE4sTUFBTSxDQUFDd04sU0FBeEIsR0FBa0N4TixNQUFNLENBQUN5TixPQUFQLEdBQWV6TixNQUFNLENBQUN5TixPQUF0QixHQUE4QixDQUFwSixFQUFzSmpaLENBQUMsR0FBQ2taLE1BQU0sQ0FBQzNhLEtBQVAsR0FBYSxDQUFiLEdBQWVlLENBQUMsR0FBQyxDQUFqQixHQUFtQk0sQ0FBM0ssRUFBNktNLENBQUMsR0FBQ2daLE1BQU0sQ0FBQzFhLE1BQVAsR0FBYyxDQUFkLEdBQWdCa0IsQ0FBQyxHQUFDLENBQWxCLEdBQW9CSSxDQUFuTSxFQUFxTSxDQUFDLFNBQVNvSixNQUFULENBQWdCNUosQ0FBaEIsQ0FBRCxFQUFvQixVQUFVNEosTUFBVixDQUFpQnhKLENBQWpCLENBQXBCLEVBQXdDLFFBQVF3SixNQUFSLENBQWVsSixDQUFmLENBQXhDLEVBQTBELE9BQU9rSixNQUFQLENBQWNoSixDQUFkLENBQTFELEVBQTJFLGdCQUEzRSxFQUE0RixhQUE1RixFQUEyRzJLLElBQTNHLENBQWdILEdBQWhILENBQWxOLEVBQVQ7QUFBa1Y7O0FBQUEsV0FBU3NPLEVBQVQsQ0FBWTlaLENBQVosRUFBYztBQUFDLFdBQU0sR0FBRzZKLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ0csU0FBYixFQUF1QixHQUF2QixFQUE0QjdILE1BQTVCLENBQW1DdUIsRUFBRSxDQUFDcEwsQ0FBRCxDQUFyQyxDQUFOO0FBQWdEOztBQUFBLFdBQVMrWixFQUFULENBQVkvWixDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUM7QUFBQytaLGVBQVMsRUFBQy9HLEVBQUU7QUFBYixLQUFOO0FBQXVCLFdBQU9qVCxDQUFDLENBQUM0WCxZQUFGLEtBQWlCM1gsQ0FBQyxDQUFDZ2EsYUFBRixHQUFnQmphLENBQUMsQ0FBQzRYLFlBQW5DLEdBQWlENVgsQ0FBQyxDQUFDNlgsS0FBRixLQUFVNVgsQ0FBQyxDQUFDNFgsS0FBRixHQUFRN1gsQ0FBQyxDQUFDNlgsS0FBcEIsQ0FBakQsRUFBNEU3WCxDQUFDLENBQUNpWSxLQUFGLEtBQVVoWSxDQUFDLENBQUNnWSxLQUFGLEdBQVFqWSxDQUFDLENBQUNpWSxLQUFwQixDQUE1RSxFQUF1R2hZLENBQTlHO0FBQWdIOztBQUFBLFdBQVNpYSxFQUFULENBQVlsYSxDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUMsRUFBTjtBQUFTLFdBQU9ELENBQUMsQ0FBQzhYLGtCQUFGLEtBQXVCN1gsQ0FBQyxDQUFDLDZCQUFELENBQUQsR0FBaUNELENBQUMsQ0FBQzhYLGtCQUExRCxHQUE4RTlYLENBQUMsQ0FBQytYLGVBQUYsS0FBb0I5WCxDQUFDLENBQUNrYSxpQkFBRixHQUFvQm5hLENBQUMsQ0FBQytYLGVBQTFDLENBQTlFLEVBQXlJL1gsQ0FBQyxDQUFDZ1ksWUFBRixLQUFpQi9YLENBQUMsQ0FBQyxxQkFBRCxDQUFELEdBQXlCRCxDQUFDLENBQUNnWSxZQUE1QyxDQUF6SSxFQUFtTWhZLENBQUMsQ0FBQzhZLFNBQUYsS0FBYzdZLENBQUMsQ0FBQ21hLE1BQUYsR0FBUyxNQUF2QixDQUFuTSxFQUFrT3BhLENBQUMsQ0FBQ2daLGNBQUYsS0FBbUIvWSxDQUFDLENBQUNtYSxNQUFGLEdBQVMsT0FBNUIsQ0FBbE8sRUFBdVFwYSxDQUFDLENBQUMrWSxPQUFGLEtBQVk5WSxDQUFDLENBQUNtYSxNQUFGLEdBQVNwYSxDQUFDLENBQUMrWSxPQUF2QixDQUF2USxFQUF1Uy9ZLENBQUMsQ0FBQ2tZLFVBQUYsS0FBZWpZLENBQUMsQ0FBQ29hLFdBQUYsR0FBY3JhLENBQUMsQ0FBQ2tZLFVBQS9CLENBQXZTLEVBQWtWbFksQ0FBQyxDQUFDa1osU0FBRixLQUFjalosQ0FBQyxDQUFDcWEsVUFBRixHQUFhdGEsQ0FBQyxDQUFDa1osU0FBN0IsQ0FBbFYsRUFBMFhsWixDQUFDLENBQUNtWSxLQUFGLEtBQVVsWSxDQUFDLENBQUNrWSxLQUFGLEdBQVFuWSxDQUFDLENBQUNtWSxLQUFwQixDQUExWCxFQUFxWmxZLENBQTVaO0FBQThaOztBQUFBLFdBQVNzYSxFQUFULENBQVl2YSxDQUFaLEVBQWM7QUFBQyxXQUFPd00sRUFBRSxDQUFDQSxFQUFFLENBQUNBLEVBQUUsQ0FBQyxFQUFELEVBQUl1TixFQUFFLENBQUMvWixDQUFELENBQU4sQ0FBSCxFQUFja2EsRUFBRSxDQUFDbGEsQ0FBRCxDQUFoQixDQUFILEVBQXdCLEVBQXhCLEVBQTJCO0FBQUN3YSxrQkFBWSxFQUFDeGEsQ0FBQyxDQUFDNFIsV0FBRixJQUFlTCxFQUFFLENBQUNLLFdBQWhDO0FBQTRDNkksbUJBQWEsRUFBQyxNQUExRDtBQUFpRUMsa0JBQVksRUFBQzNHLEVBQUU7QUFBaEYsS0FBM0IsQ0FBVDtBQUF5SDs7QUFBQSxXQUFTNEcsRUFBVCxDQUFZM2EsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsV0FBT3VNLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLEVBQUQsRUFBSXZNLENBQUosQ0FBSCxFQUFVLEVBQVYsRUFBYTtBQUFDMmEsUUFBRSxFQUFDeEosRUFBSjtBQUFPeUosY0FBUSxFQUFDN2EsQ0FBQyxDQUFDNlk7QUFBbEIsS0FBYixDQUFUO0FBQWtEOztBQUFBLFdBQVNpQyxFQUFULENBQVk5YSxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQ0EsS0FBQyxDQUFDOGEsS0FBRixHQUFRL2EsQ0FBQyxDQUFDMFYsSUFBRixDQUFPelYsQ0FBUCxDQUFSLEdBQWtCRCxDQUFDLENBQUMyVixPQUFGLENBQVUxVixDQUFWLENBQWxCLEVBQStCRCxDQUFDLENBQUM0VixNQUFGLENBQVMzVixDQUFULENBQS9CO0FBQTJDOztBQUFBLFdBQVMrYSxFQUFULENBQVloYixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxLQUFDLFVBQVNELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSUksQ0FBQyxHQUFDTCxDQUFDLENBQUM4VixHQUFSO0FBQUEsVUFBWXZWLENBQUMsR0FBQ1AsQ0FBQyxDQUFDaWIsTUFBaEI7QUFBQSxVQUF1QnhhLENBQUMsR0FBQ1QsQ0FBQyxDQUFDc1YsSUFBM0I7QUFBQSxVQUFnQzNVLENBQUMsR0FBQyxJQUFJdWEsY0FBSixFQUFsQztBQUFxRCxVQUFHLEtBQUssQ0FBTCxLQUFTdmEsQ0FBQyxDQUFDd2EsZUFBZCxFQUE4QnhhLENBQUMsQ0FBQ2dVLElBQUYsQ0FBT3BVLENBQVAsRUFBU0YsQ0FBVCxHQUFZTSxDQUFDLENBQUN5YSxnQkFBRixDQUFtQixjQUFuQixFQUFrQyxtQ0FBbEMsQ0FBWixFQUFtRnphLENBQUMsQ0FBQzBhLGtCQUFGLEdBQXFCLFlBQVU7QUFBQzFhLFNBQUMsQ0FBQzJhLFVBQUYsS0FBZUosY0FBYyxDQUFDSyxJQUE5QixJQUFvQyxRQUFNNWEsQ0FBQyxDQUFDNmEsTUFBNUMsSUFBb0R2YixDQUFDLENBQUNVLENBQUQsQ0FBckQ7QUFBeUQsT0FBNUssRUFBNktBLENBQUMsQ0FBQzhhLElBQUYsQ0FBT2hiLENBQVAsQ0FBN0ssQ0FBOUIsS0FBeU47QUFBQyxZQUFJSSxDQUFDLEdBQUMsSUFBSTZhLGNBQUosRUFBTjtBQUF5QjdhLFNBQUMsQ0FBQzhULElBQUYsQ0FBT3BVLENBQUMsQ0FBQ3FQLFdBQUYsRUFBUCxFQUF1QnZQLENBQXZCLEdBQTBCUSxDQUFDLENBQUM4YSxNQUFGLEdBQVMsWUFBVTtBQUFDMWIsV0FBQyxDQUFDO0FBQUN1YixrQkFBTSxFQUFDM2EsQ0FBQyxDQUFDK2EsWUFBRixHQUFlLEdBQWYsR0FBbUIsT0FBM0I7QUFBbUNDLG9CQUFRLEVBQUNoYixDQUFDLENBQUMrYTtBQUE5QyxXQUFELENBQUQ7QUFBK0QsU0FBN0csRUFBOEd4RSxVQUFVLENBQUUsWUFBVTtBQUFDdlcsV0FBQyxDQUFDNGEsSUFBRixDQUFPaGIsQ0FBUDtBQUFVLFNBQXZCLEVBQXlCLENBQXpCLENBQXhIO0FBQW9KO0FBQUMsS0FBM2MsQ0FBNGM7QUFBQ3dhLFlBQU0sRUFBQyxLQUFSO0FBQWNuRixTQUFHLEVBQUM5VjtBQUFsQixLQUE1YyxFQUFpZUMsQ0FBamUsQ0FBRDtBQUFxZTs7QUFBQSxNQUFJNmIsRUFBRSxHQUFDLElBQUlsRixFQUFKLENBQU8sR0FBUCxFQUFXLEdBQVgsQ0FBUDs7QUFBdUIsV0FBU21GLEVBQVQsQ0FBWS9iLENBQVosRUFBYztBQUFDLFFBQUlDLENBQUo7QUFBQSxRQUFNSSxDQUFOO0FBQUEsUUFBUUUsQ0FBQyxHQUFDZ2EsRUFBRSxDQUFDdmEsQ0FBRCxDQUFaO0FBQUEsUUFBZ0JTLENBQUMsR0FBQ2thLEVBQUUsQ0FBQzNhLENBQUQsRUFBR08sQ0FBSCxDQUFwQjtBQUFBLFFBQTBCSSxDQUFDLEdBQUMsVUFBU1gsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQytRLEVBQUUsQ0FBQ2YsRUFBSCxDQUFNbUUsR0FBUCxJQUFZLENBQUNwRCxFQUFFLENBQUNmLEVBQUgsQ0FBTWdFLE9BQXJCLEtBQStCLENBQUNoRCxFQUF0QztBQUFBLFVBQXlDNVEsQ0FBQyxHQUFDLENBQUMsQ0FBRCxLQUFLTCxDQUFDLENBQUNnWixjQUFQLElBQXVCZ0QsRUFBRSxDQUFDaGMsQ0FBQyxDQUFDK1ksT0FBSCxFQUFXLE9BQVgsQ0FBcEU7QUFBQSxVQUF3RnhZLENBQUMsR0FBQyxDQUFDLENBQUQsS0FBS1AsQ0FBQyxDQUFDOFksU0FBUCxJQUFrQmtELEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQytZLE9BQUgsRUFBVyxNQUFYLENBQTlHO0FBQWlJLGFBQU0sRUFBRS9ILEVBQUUsQ0FBQ2YsRUFBSCxDQUFNZ0UsT0FBTixJQUFlLG9CQUFvQmpTLElBQXBCLENBQXlCZ1AsRUFBRSxDQUFDbEIsRUFBNUIsQ0FBakIsS0FBbUQ3UCxDQUFuRCxJQUFzRCxDQUFDSSxDQUF2RCxJQUEwRCxDQUFDLENBQUQsS0FBS0wsQ0FBQyxDQUFDd1gsV0FBakUsSUFBOEUsQ0FBQ2pYLENBQXJGO0FBQXVGLEtBQXBPLENBQXFPUCxDQUFyTyxDQUE1QjtBQUFBLFFBQW9RYSxDQUFDLEdBQUNvYixFQUFFLENBQUNqYyxDQUFELENBQXhRO0FBQUEsUUFBNFFlLENBQUMsR0FBQytZLEVBQUUsQ0FBQ3JaLENBQUQsQ0FBaFI7QUFBQSxRQUFvUlEsQ0FBQyxHQUFDTixDQUFDLEdBQUMsVUFBU1gsQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDLFVBQUlFLENBQUMsR0FBQ2lNLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLEVBQUQsRUFBSXZNLENBQUosQ0FBSCxFQUFVLEVBQVYsRUFBYTtBQUFDNGEsZ0JBQVEsRUFBQyxDQUFDO0FBQVgsT0FBYixDQUFSO0FBQUEsVUFBb0NwYSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxHQUFVO0FBQUMsZUFBTSxDQUFDLGdCQUFELEVBQWtCLDhEQUFsQixFQUFpRix3QkFBakYsRUFBMEcsK0JBQStCb0osTUFBL0IsQ0FBc0NvSixFQUFFLEVBQXhDLENBQTFHLEVBQXNKLG9DQUFvQ3BKLE1BQXBDLENBQTJDdEosQ0FBQyxDQUFDaWEsWUFBN0MsQ0FBdEosRUFBaU4saUNBQWlDM1EsTUFBakMsQ0FBd0N1SCxFQUF4QyxDQUFqTixFQUE2UCxvQ0FBb0N2SCxNQUFwQyxDQUEyQ3dCLGtCQUFrQixDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWhMLENBQWYsQ0FBRCxDQUE3RCxDQUE3UCxFQUFnVnNKLE1BQWhWLENBQXVWNEUsRUFBRSxDQUFDek8sQ0FBQyxDQUFDaVksS0FBRixHQUFRLENBQUMsOEJBQThCcE8sTUFBOUIsQ0FBcUM3SixDQUFDLENBQUNpWSxLQUF2QyxDQUFELENBQVIsR0FBd0QsRUFBekQsQ0FBelYsRUFBc1osQ0FBQywwQkFBMEJwTyxNQUExQixDQUFpQ3dCLGtCQUFrQixDQUFDaEwsQ0FBRCxDQUFuRCxDQUFELEVBQXlELE1BQXpELENBQXRaLEVBQXdkbUwsSUFBeGQsQ0FBNmQsR0FBN2QsQ0FBTjtBQUF3ZSxPQUF6aEI7QUFBQSxVQUEwaEI3SyxDQUFDLEdBQUMsYUFBVTtBQUFDLFlBQUlWLENBQUMsR0FBQzZaLEVBQUUsQ0FBQ3ZaLENBQUQsQ0FBUjtBQUFBLFlBQVlFLENBQUMsR0FBQ1QsQ0FBQyxDQUFDNlksT0FBRixHQUFVNVksQ0FBVixHQUFZSSxDQUExQjtBQUFBLFlBQTRCTSxDQUFDLEdBQUMsR0FBR2tKLE1BQUgsQ0FBVTVKLENBQVYsRUFBWSxNQUFaLEVBQW9CNEosTUFBcEIsQ0FBMkJ3QixrQkFBa0IsQ0FBQytGLEVBQUQsQ0FBN0MsQ0FBOUI7QUFBQSxZQUFpRnZRLENBQUMsR0FBQyxHQUFHZ0osTUFBSCxDQUFVMEgsRUFBRSxDQUFDUyxlQUFiLEVBQTZCLE9BQTdCLEVBQXNDbkksTUFBdEMsQ0FBNkN3QixrQkFBa0IsQ0FBQzFLLENBQUQsQ0FBL0QsQ0FBbkY7QUFBdUosZUFBTSxHQUFHa0osTUFBSCxDQUFVMEgsRUFBRSxDQUFDTSxrQkFBYixFQUFpQ2hJLE1BQWpDLENBQXdDd0Isa0JBQWtCLENBQUN4SyxDQUFELENBQTFELEVBQThELE9BQTlELEVBQXVFZ0osTUFBdkUsQ0FBOEV3QixrQkFBa0IsQ0FBQzVLLENBQUQsQ0FBaEcsQ0FBTjtBQUEyRyxPQUF6eUI7O0FBQTB5QixhQUFPdVEsRUFBRSxDQUFDZixFQUFILENBQU1nRSxPQUFOLEdBQWN4VCxDQUFDLEVBQWYsR0FBa0JFLENBQUMsRUFBMUI7QUFBNkIsS0FBdjFCLENBQXcxQlgsQ0FBeDFCLEVBQTAxQk8sQ0FBMTFCLEVBQTQxQlEsQ0FBNTFCLENBQUQsR0FBZzJCQSxDQUF2bkM7QUFBQSxRQUF5bkNJLENBQUMsR0FBQyxJQUEzbkM7O0FBQWdvQyxRQUFHTixDQUFDLEdBQUMsVUFBU2IsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDdU0sRUFBRSxDQUFDQSxFQUFFLENBQUMsRUFBRCxFQUFJeE0sQ0FBSixDQUFILEVBQVUsRUFBVixFQUFhO0FBQUM2YSxnQkFBUSxFQUFDLENBQUMsQ0FBWDtBQUFhcUIsNEJBQW9CLEVBQUM7QUFBbEMsT0FBYixDQUFSO0FBQUEsVUFBd0U3YixDQUFDLEdBQUNnTCxrQkFBa0IsQ0FBQ0QsRUFBRSxDQUFDbkwsQ0FBRCxDQUFILENBQTVGOztBQUFvRzJRLGNBQVEsQ0FBQ3lELElBQVQsR0FBYyxHQUFHeEssTUFBSCxDQUFVMEgsRUFBRSxDQUFDVSxvQkFBYixFQUFrQyxTQUFsQyxFQUE2Q3BJLE1BQTdDLENBQW9EeEosQ0FBcEQsQ0FBZDtBQUFxRSxLQUFyTCxDQUFzTEksQ0FBdEwsQ0FBRCxHQUEwTFQsQ0FBQyxDQUFDNlksT0FBRixHQUFVMVgsQ0FBQyxHQUFDcVksRUFBRSxDQUFDdlksQ0FBRCxDQUFkLEdBQWtCMlAsUUFBUSxDQUFDeUQsSUFBVCxHQUFjcFQsQ0FBM04sRUFBNk5OLENBQUMsSUFBRUUsQ0FBSCxJQUFNYixDQUFDLENBQUM2WSxPQUF4TyxFQUFnUDtBQUFDLFVBQUl6WCxDQUFDLElBQUVuQixDQUFDLEdBQUNNLENBQUMsQ0FBQ21hLFlBQUosRUFBaUJyYSxDQUFDLEdBQUMrSyxFQUFFLENBQUM7QUFBQzRPLGlCQUFTLEVBQUMvRyxFQUFFLEVBQWI7QUFBZ0J5SCxvQkFBWSxFQUFDemEsQ0FBN0I7QUFBK0IyYSxVQUFFLEVBQUN4SjtBQUFsQyxPQUFELENBQXJCLEVBQTZELEdBQUd2SCxNQUFILENBQVUwSCxFQUFFLENBQUNFLFVBQWIsRUFBd0Isb0JBQXhCLEVBQThDNUgsTUFBOUMsQ0FBcUR4SixDQUFyRCxDQUEvRCxDQUFMO0FBQTZIeWIsUUFBRSxDQUFDSyxLQUFILENBQVUsWUFBVTtBQUFDbkIsVUFBRSxDQUFDNVosQ0FBRCxFQUFJLFVBQVNuQixDQUFULEVBQVc7QUFBQyxjQUFJSSxDQUFDLEdBQUMsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxnQkFBRyxRQUFNQSxDQUFDLENBQUN1YixNQUFSLElBQWdCdmIsQ0FBQyxDQUFDNGIsUUFBckIsRUFBOEI7QUFBQyxrQkFBSXhiLENBQUMsR0FBQ2lMLElBQUksQ0FBQ2tLLEtBQUwsQ0FBV3ZWLENBQUMsQ0FBQzRiLFFBQWIsQ0FBTjtBQUE2QixrQkFBRyxTQUFPeGIsQ0FBQyxDQUFDbWIsTUFBVCxJQUFpQm5iLENBQUMsQ0FBQ29WLElBQXRCLEVBQTJCLE9BQU8yRyxFQUFFLENBQUNwYyxDQUFELEVBQUc7QUFBQ3lWLG9CQUFJLEVBQUNwVixDQUFDLENBQUNvVjtBQUFSLGVBQUgsQ0FBRixFQUFvQixDQUFDLENBQTVCO0FBQThCLGtCQUFHLFlBQVVwVixDQUFDLENBQUNtYixNQUFaLElBQW9CbmIsQ0FBQyxDQUFDZ2MsVUFBdEIsSUFBa0MsVUFBUWhjLENBQUMsQ0FBQ2djLFVBQS9DLEVBQTBELE9BQU9ELEVBQUUsQ0FBQ3BjLENBQUQsRUFBRztBQUFDK2EscUJBQUssRUFBQzFhLENBQUMsQ0FBQzBhLEtBQVQ7QUFBZXVCLGlDQUFpQixFQUFDamMsQ0FBQyxDQUFDaWM7QUFBbkMsZUFBSCxDQUFGLEVBQTRELFVBQVFqYyxDQUFDLENBQUNnYyxVQUFWLEtBQXVCekwsUUFBUSxDQUFDeUQsSUFBVCxHQUFjLEdBQUd4SyxNQUFILENBQVUwSCxFQUFFLENBQUNFLFVBQWIsRUFBd0IsZ0JBQXhCLENBQXJDLENBQTVELEVBQTRJLENBQUMsQ0FBcEo7QUFBc0o7O0FBQUEsbUJBQU0sQ0FBQyxDQUFQO0FBQVMsV0FBNVYsQ0FBNlZ6UixDQUE3VixFQUErVkMsQ0FBL1YsQ0FBTjs7QUFBd1dJLFdBQUMsS0FBR3liLEVBQUUsQ0FBQzVFLElBQUgsSUFBVS9WLENBQUMsSUFBRUEsQ0FBQyxDQUFDc1QsS0FBTCxJQUFZdFQsQ0FBQyxDQUFDc1QsS0FBRixFQUF6QixDQUFELEVBQXFDLENBQUM5VCxDQUFELElBQUlRLENBQUosSUFBT0EsQ0FBQyxDQUFDdVQsTUFBVCxJQUFpQm9ILEVBQUUsQ0FBQzVFLElBQUgsRUFBdEQ7QUFBZ0UsU0FBeGIsQ0FBRjtBQUE2YixPQUFsZCxFQUFxZCxZQUFVO0FBQUNrRixVQUFFLENBQUNwYyxDQUFELEVBQUc7QUFBQythLGVBQUssRUFBQyxTQUFQO0FBQWlCdUIsMkJBQWlCLEVBQUM7QUFBbkMsU0FBSCxDQUFGO0FBQTBELE9BQTFoQjtBQUE2aEI7QUFBQzs7QUFBQSxXQUFTTixFQUFULENBQVloYyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxXQUFNLENBQUMsRUFBRUQsQ0FBQyxJQUFFQSxDQUFDLENBQUN3SyxPQUFGLENBQVV2SyxDQUFWLElBQWEsQ0FBQyxDQUFuQixDQUFQO0FBQTZCOztBQUFBLFdBQVNtYyxFQUFULENBQVlwYyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFHRCxDQUFDLENBQUNpWSxLQUFGLEtBQVVoWSxDQUFDLENBQUNnWSxLQUFGLEdBQVFqWSxDQUFDLENBQUNpWSxLQUFwQixHQUEyQmpZLENBQUMsQ0FBQzRSLFdBQWhDLEVBQTRDO0FBQUMsVUFBSXZSLENBQUMsR0FBQ0wsQ0FBQyxDQUFDNFIsV0FBRixDQUFjcEgsT0FBZCxDQUFzQixHQUF0QixJQUEyQixDQUFDLENBQTVCLEdBQThCLEdBQTlCLEdBQWtDLEdBQXhDO0FBQTRDb0csY0FBUSxDQUFDeUQsSUFBVCxHQUFjclUsQ0FBQyxDQUFDNFIsV0FBRixHQUFjdlIsQ0FBZCxHQUFnQitLLEVBQUUsQ0FBQ25MLENBQUQsQ0FBaEM7QUFBb0MsS0FBN0gsTUFBa0k2YSxFQUFFLENBQUM5YSxDQUFELEVBQUdDLENBQUgsQ0FBRjtBQUFROztBQUFBLFdBQVNnYyxFQUFULENBQVlqYyxDQUFaLEVBQWM7QUFBQyxXQUFPQSxDQUFDLENBQUNpWixpQkFBRixJQUFxQmhJLEVBQXJCLElBQXlCLFdBQVdqUCxJQUFYLENBQWdCZ1AsRUFBRSxDQUFDbEIsRUFBbkIsQ0FBaEM7QUFBdUQ7O0FBQUEsTUFBSXlNLEVBQUUsR0FBQ25jLE1BQU0sQ0FBQ29jLE1BQVAsQ0FBYztBQUFDNU8sYUFBUyxFQUFDLElBQVg7QUFBZ0I4RCxhQUFTLEVBQUMsbUJBQVMxUixDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsQ0FBQ0EsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHd1ksRUFBRSxDQUFDOUcsU0FBTixFQUFnQixnQkFBaEIsQ0FBTCxFQUF3Q29ILFNBQXhDLElBQW1Ea0QsRUFBRSxDQUFDaGMsQ0FBQyxDQUFDK1ksT0FBSCxFQUFXLE1BQVgsQ0FBdEQsS0FBMkUsQ0FBQzlILEVBQS9FLEVBQWtGLE9BQU9tTCxFQUFFLENBQUNwYyxDQUFELEVBQUc7QUFBQythLGFBQUssRUFBQyxZQUFQO0FBQW9CdUIseUJBQWlCLEVBQUM7QUFBdEMsT0FBSCxDQUFGLEVBQXFFLENBQUMsQ0FBN0U7QUFBK0VMLFFBQUUsQ0FBQ2pjLENBQUQsQ0FBRixJQUFPLFVBQVNBLENBQVQsRUFBVztBQUFDLGVBQU0sQ0FBQyxDQUFELEtBQUtBLENBQUMsQ0FBQzZZLE9BQVAsSUFBZ0IsQ0FBQ21ELEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQytZLE9BQUgsRUFBVyxNQUFYLENBQW5CLElBQXVDNU0sTUFBTSxDQUFDc1EsUUFBOUMsSUFBd0QsY0FBWSxPQUFPdFEsTUFBTSxDQUFDc1EsUUFBUCxDQUFnQkMsaUJBQWpHO0FBQW1ILE9BQS9ILENBQWdJMWMsQ0FBaEksQ0FBUCxHQUEwSSxVQUFTQSxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUNzYSxFQUFFLENBQUN2YSxDQUFELENBQVI7QUFBQSxZQUFZSyxDQUFDLEdBQUNzYSxFQUFFLENBQUMzYSxDQUFELEVBQUdDLENBQUgsQ0FBaEI7QUFBQSxZQUFzQk0sQ0FBQyxHQUFDNkssRUFBRSxDQUFDb0IsRUFBRSxDQUFDQSxFQUFFLENBQUMsRUFBRCxFQUFJbk0sQ0FBSixDQUFILEVBQVUsRUFBVixFQUFhO0FBQUN3YSxrQkFBUSxFQUFDLENBQUMsQ0FBWDtBQUFhVCxnQkFBTSxFQUFDO0FBQXBCLFNBQWIsQ0FBSCxDQUExQjtBQUF3RSxlQUFPcUMsUUFBUSxDQUFDQyxpQkFBVCxDQUEyQm5jLENBQTNCLEVBQThCcEMsSUFBOUIsQ0FBb0MsVUFBUzhCLENBQVQsRUFBVztBQUFDLGNBQUlJLENBQUMsR0FBQ0QsTUFBTSxDQUFDdWMsV0FBUCxDQUFtQixJQUFJeFEsTUFBTSxDQUFDeVEsR0FBWCxDQUFlM2MsQ0FBZixFQUFrQjRjLFlBQXJDLENBQU47QUFBeUQsaUJBQU0sdUJBQXFCeGMsQ0FBQyxDQUFDMGEsS0FBdkIsSUFBOEIsQ0FBQ2lCLEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQytZLE9BQUgsRUFBVyxNQUFYLENBQWpDLElBQXFELDJCQUF5QjFZLENBQUMsQ0FBQzBhLEtBQWhGLEtBQXdGcUIsRUFBRSxDQUFDcGMsQ0FBRCxFQUFHd00sRUFBRSxDQUFDQSxFQUFFLENBQUMsRUFBRCxFQUFJbk0sQ0FBQyxDQUFDb1YsSUFBRixJQUFRO0FBQUNBLGdCQUFJLEVBQUNwVixDQUFDLENBQUNvVjtBQUFSLFdBQVosQ0FBSCxFQUE4QnBWLENBQUMsQ0FBQzBhLEtBQUYsSUFBUztBQUFDQSxpQkFBSyxFQUFDMWEsQ0FBQyxDQUFDMGEsS0FBVDtBQUFldUIsNkJBQWlCLEVBQUNqYyxDQUFDLENBQUNpYztBQUFuQyxXQUF2QyxDQUFMLENBQUYsRUFBc0csQ0FBQyxDQUEvTCxDQUFOO0FBQXdNLFNBQWpULFdBQTJULFVBQVN0YyxDQUFULEVBQVc7QUFBQyxpQkFBTSxDQUFDLENBQVA7QUFBUyxTQUFoVixDQUFQO0FBQTBWLE9BQTlhLENBQSthQSxDQUEvYSxFQUFrYjdCLElBQWxiLENBQXdiLFVBQVM4QixDQUFULEVBQVc7QUFBQ0EsU0FBQyxJQUFFOGIsRUFBRSxDQUFDL2IsQ0FBRCxDQUFMO0FBQVMsT0FBN2MsQ0FBMUksR0FBMGxCK2IsRUFBRSxDQUFDL2IsQ0FBRCxDQUE1bEIsRUFBZ21CdVcsRUFBRSxDQUFDSSxRQUFILENBQVksYUFBWixDQUFobUI7QUFBMm5CO0FBQWwwQixHQUFkLENBQVA7O0FBQTAxQixXQUFTbUcsRUFBVCxHQUFhO0FBQUMsV0FBTzlMLEVBQUUsQ0FBQ2YsRUFBSCxDQUFNZ0UsT0FBTixLQUFnQixLQUFHakQsRUFBRSxDQUFDZixFQUFILENBQU1mLE9BQU4sQ0FBY0csS0FBakIsSUFBd0IscUJBQXFCck4sSUFBckIsQ0FBMEJnUCxFQUFFLENBQUNsQixFQUE3QixDQUF4QixJQUEwRCxLQUFHa0IsRUFBRSxDQUFDZixFQUFILENBQU1mLE9BQU4sQ0FBY0csS0FBakIsSUFBd0IyQixFQUFFLENBQUNmLEVBQUgsQ0FBTWYsT0FBTixDQUFjSSxLQUFkLEdBQW9CLENBQTVDLElBQStDLHFCQUFxQnROLElBQXJCLENBQTBCZ1AsRUFBRSxDQUFDbEIsRUFBN0IsQ0FBekcsSUFBMkkscUJBQXFCOU4sSUFBckIsQ0FBMEJnUCxFQUFFLENBQUNsQixFQUE3QixNQUFtQyxxQ0FBcUM5TixJQUFyQyxDQUEwQ2dQLEVBQUUsQ0FBQ2xCLEVBQTdDLEtBQWtELFVBQVU5TixJQUFWLENBQWVnUCxFQUFFLENBQUNsQixFQUFsQixDQUFyRixDQUEzSixDQUFQO0FBQStROztBQUFBLFdBQVNpTixFQUFULEdBQWE7QUFBQyxXQUFPL0wsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLElBQVduRCxFQUFsQjtBQUFxQjs7QUFBQSxNQUFJK0wsRUFBRSxHQUFDO0FBQUM5YyxXQUFPLEVBQUM7QUFBVCxHQUFQO0FBQW9CLEdBQUMsVUFBU0YsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0QsS0FBQyxDQUFDRSxPQUFGLEdBQVUsWUFBVTtBQUFDLGVBQVNGLENBQVQsQ0FBV0EsQ0FBWCxFQUFhO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLE9BQU9ELENBQWI7QUFBZSxlQUFPLFNBQU9BLENBQVAsS0FBVyxhQUFXQyxDQUFYLElBQWMsZUFBYUEsQ0FBdEMsQ0FBUDtBQUFnRDs7QUFBQSxlQUFTQSxDQUFULENBQVdELENBQVgsRUFBYTtBQUFDLGVBQU0sY0FBWSxPQUFPQSxDQUF6QjtBQUEyQjs7QUFBQSxVQUFJSyxDQUFDLEdBQUNvQixLQUFLLENBQUNDLE9BQU4sR0FBY0QsS0FBSyxDQUFDQyxPQUFwQixHQUE0QixVQUFTMUIsQ0FBVCxFQUFXO0FBQUMsZUFBTSxxQkFBbUJJLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBakIsQ0FBMEJNLElBQTFCLENBQStCdEIsQ0FBL0IsQ0FBekI7QUFBMkQsT0FBekc7QUFBQSxVQUEwR08sQ0FBQyxHQUFDLENBQTVHO0FBQUEsVUFBOEdFLENBQUMsR0FBQyxLQUFLLENBQXJIO0FBQUEsVUFBdUhFLENBQUMsR0FBQyxLQUFLLENBQTlIO0FBQUEsVUFBZ0lFLENBQUMsR0FBQyxXQUFTYixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDbUMsU0FBQyxDQUFDN0IsQ0FBRCxDQUFELEdBQUtQLENBQUwsRUFBT29DLENBQUMsQ0FBQzdCLENBQUMsR0FBQyxDQUFILENBQUQsR0FBT04sQ0FBZCxFQUFnQixPQUFLTSxDQUFDLElBQUUsQ0FBUixNQUFhSSxDQUFDLEdBQUNBLENBQUMsQ0FBQzBCLENBQUQsQ0FBRixHQUFNRyxDQUFDLEVBQXJCLENBQWhCO0FBQXlDLE9BQXpMOztBQUEwTCxlQUFTekIsQ0FBVCxDQUFXZixDQUFYLEVBQWE7QUFBQ1csU0FBQyxHQUFDWCxDQUFGO0FBQUk7O0FBQUEsZUFBU2lCLENBQVQsQ0FBV2pCLENBQVgsRUFBYTtBQUFDYSxTQUFDLEdBQUNiLENBQUY7QUFBSTs7QUFBQSxVQUFJbUIsQ0FBQyxHQUFDLE9BQTJCZ0wsTUFBM0IsR0FBa0MsU0FBeEM7QUFBQSxVQUErQy9LLENBQUMsR0FBQ0QsQ0FBQyxJQUFFLEVBQXBEO0FBQUEsVUFBdURFLENBQUMsR0FBQ0QsQ0FBQyxDQUFDNmIsZ0JBQUYsSUFBb0I3YixDQUFDLENBQUM4YixzQkFBL0U7QUFBQSxVQUFzRzNiLENBQUMsR0FBQyxlQUFhLE9BQU9qQixJQUFwQixJQUEwQixlQUFhLE9BQU80RyxPQUE5QyxJQUF1RCx1QkFBcUIsR0FBR2xHLFFBQUgsQ0FBWU0sSUFBWixDQUFpQjRGLE9BQWpCLENBQXBMO0FBQUEsVUFBOE0xRixDQUFDLEdBQUMsZUFBYSxPQUFPMmIsaUJBQXBCLElBQXVDLGVBQWEsT0FBT0MsYUFBM0QsSUFBMEUsZUFBYSxPQUFPQyxjQUE5Uzs7QUFBNlQsZUFBUzFiLENBQVQsR0FBWTtBQUFDLGVBQU8sWUFBVTtBQUFDLGlCQUFPdUYsT0FBTyxDQUFDb1csUUFBUixDQUFpQmpiLENBQWpCLENBQVA7QUFBMkIsU0FBN0M7QUFBOEM7O0FBQUEsZUFBU1QsQ0FBVCxHQUFZO0FBQUMsZUFBTyxLQUFLLENBQUwsS0FBU25CLENBQVQsR0FBVyxZQUFVO0FBQUNBLFdBQUMsQ0FBQzRCLENBQUQsQ0FBRDtBQUFLLFNBQTNCLEdBQTRCM0MsQ0FBQyxFQUFwQztBQUF1Qzs7QUFBQSxlQUFTbUMsQ0FBVCxHQUFZO0FBQUMsWUFBSTdCLENBQUMsR0FBQyxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDLElBQUlvQixDQUFKLENBQU1nQixDQUFOLENBQVY7QUFBQSxZQUFtQmhDLENBQUMsR0FBQ3lLLFFBQVEsQ0FBQ3lTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBckI7QUFBaUQsZUFBT3RkLENBQUMsQ0FBQ3VkLE9BQUYsQ0FBVW5kLENBQVYsRUFBWTtBQUFDb2QsdUJBQWEsRUFBQyxDQUFDO0FBQWhCLFNBQVosR0FBZ0MsWUFBVTtBQUFDcGQsV0FBQyxDQUFDaVYsSUFBRixHQUFPdFYsQ0FBQyxHQUFDLEVBQUVBLENBQUYsR0FBSSxDQUFiO0FBQWUsU0FBakU7QUFBa0U7O0FBQUEsZUFBU21DLENBQVQsR0FBWTtBQUFDLFlBQUluQyxDQUFDLEdBQUMsSUFBSXFkLGNBQUosRUFBTjtBQUF5QixlQUFPcmQsQ0FBQyxDQUFDMGQsS0FBRixDQUFRQyxTQUFSLEdBQWtCdGIsQ0FBbEIsRUFBb0IsWUFBVTtBQUFDLGlCQUFPckMsQ0FBQyxDQUFDNGQsS0FBRixDQUFRQyxXQUFSLENBQW9CLENBQXBCLENBQVA7QUFBOEIsU0FBcEU7QUFBcUU7O0FBQUEsZUFBU25lLENBQVQsR0FBWTtBQUFDLFlBQUlNLENBQUMsR0FBQ29YLFVBQU47QUFBaUIsZUFBTyxZQUFVO0FBQUMsaUJBQU9wWCxDQUFDLENBQUNxQyxDQUFELEVBQUcsQ0FBSCxDQUFSO0FBQWMsU0FBaEM7QUFBaUM7O0FBQUEsVUFBSUQsQ0FBQyxHQUFDLElBQUlYLEtBQUosQ0FBVSxHQUFWLENBQU47O0FBQXFCLGVBQVNZLENBQVQsR0FBWTtBQUFDLGFBQUksSUFBSXJDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ08sQ0FBZCxFQUFnQlAsQ0FBQyxJQUFFLENBQW5CO0FBQXFCLFdBQUMsR0FBRW9DLENBQUMsQ0FBQ3BDLENBQUQsQ0FBSixFQUFTb0MsQ0FBQyxDQUFDcEMsQ0FBQyxHQUFDLENBQUgsQ0FBVixHQUFpQm9DLENBQUMsQ0FBQ3BDLENBQUQsQ0FBRCxHQUFLLEtBQUssQ0FBM0IsRUFBNkJvQyxDQUFDLENBQUNwQyxDQUFDLEdBQUMsQ0FBSCxDQUFELEdBQU8sS0FBSyxDQUF6QztBQUFyQjs7QUFBZ0VPLFNBQUMsR0FBQyxDQUFGO0FBQUk7O0FBQUEsZUFBUytCLENBQVQsR0FBWTtBQUFDLFlBQUc7QUFBQyxjQUFJdEMsQ0FBQyxHQUFDUSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCNEcsT0FBMUIsQ0FBa0MsT0FBbEMsQ0FBTjs7QUFBaUQsaUJBQU8zRyxDQUFDLEdBQUNULENBQUMsQ0FBQzhkLFNBQUYsSUFBYTlkLENBQUMsQ0FBQytkLFlBQWpCLEVBQThCbmMsQ0FBQyxFQUF0QztBQUF5QyxTQUE5RixDQUE4RixPQUFNNUIsQ0FBTixFQUFRO0FBQUMsaUJBQU9OLENBQUMsRUFBUjtBQUFXO0FBQUM7O0FBQUEsVUFBSThDLENBQUMsR0FBQyxLQUFLLENBQVg7O0FBQWEsZUFBU0csQ0FBVCxDQUFXM0MsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxZQUFJSSxDQUFDLEdBQUMsSUFBTjtBQUFBLFlBQVdFLENBQUMsR0FBQyxJQUFJLEtBQUt3RixXQUFULENBQXFCbEQsQ0FBckIsQ0FBYjtBQUFxQyxhQUFLLENBQUwsS0FBU3RDLENBQUMsQ0FBQ3FDLENBQUQsQ0FBVixJQUFlZ0MsQ0FBQyxDQUFDckUsQ0FBRCxDQUFoQjtBQUFvQixZQUFJRSxDQUFDLEdBQUNKLENBQUMsQ0FBQzJkLE1BQVI7O0FBQWUsWUFBR3ZkLENBQUgsRUFBSztBQUFDLGNBQUlFLENBQUMsR0FBQ2tFLFNBQVMsQ0FBQ3BFLENBQUMsR0FBQyxDQUFILENBQWY7QUFBcUJJLFdBQUMsQ0FBRSxZQUFVO0FBQUMsbUJBQU91RCxDQUFDLENBQUMzRCxDQUFELEVBQUdGLENBQUgsRUFBS0ksQ0FBTCxFQUFPTixDQUFDLENBQUM0ZCxPQUFULENBQVI7QUFBMEIsV0FBdkMsQ0FBRDtBQUEyQyxTQUF0RSxNQUEyRS9aLENBQUMsQ0FBQzdELENBQUQsRUFBR0UsQ0FBSCxFQUFLUCxDQUFMLEVBQU9DLENBQVAsQ0FBRDs7QUFBVyxlQUFPTSxDQUFQO0FBQVM7O0FBQUEsZUFBU2QsQ0FBVCxDQUFXTyxDQUFYLEVBQWE7QUFBQyxZQUFJQyxDQUFDLEdBQUMsSUFBTjtBQUFXLFlBQUdELENBQUMsSUFBRSxZQUFVLE9BQU9BLENBQXBCLElBQXVCQSxDQUFDLENBQUMrRixXQUFGLEtBQWdCOUYsQ0FBMUMsRUFBNEMsT0FBT0QsQ0FBUDtBQUFTLFlBQUlLLENBQUMsR0FBQyxJQUFJSixDQUFKLENBQU00QyxDQUFOLENBQU47QUFBZSxlQUFPYSxDQUFDLENBQUNyRCxDQUFELEVBQUdMLENBQUgsQ0FBRCxFQUFPSyxDQUFkO0FBQWdCOztBQUFBbUMsT0FBQyxHQUFDakIsQ0FBQyxHQUFDSSxDQUFDLEVBQUYsR0FBS04sQ0FBQyxHQUFDUSxDQUFDLEVBQUYsR0FBS0wsQ0FBQyxHQUFDVyxDQUFDLEVBQUYsR0FBSyxLQUFLLENBQUwsS0FBU2hCLENBQVQsR0FBV21CLENBQUMsRUFBWixHQUFlNUMsQ0FBQyxFQUFwQztBQUF1QyxVQUFJa0QsQ0FBQyxHQUFDMkMsSUFBSSxDQUFDcUYsTUFBTCxHQUFjNUosUUFBZCxDQUF1QixFQUF2QixFQUEyQmtkLFNBQTNCLENBQXFDLENBQXJDLENBQU47O0FBQThDLGVBQVNyYixDQUFULEdBQVksQ0FBRTs7QUFBQSxVQUFJQyxDQUFDLEdBQUMsS0FBSyxDQUFYO0FBQUEsVUFBYUMsQ0FBQyxHQUFDLENBQWY7QUFBQSxVQUFpQkMsQ0FBQyxHQUFDLENBQW5COztBQUFxQixlQUFTSSxDQUFULEdBQVk7QUFBQyxlQUFPLElBQUk2SixTQUFKLENBQWMsMENBQWQsQ0FBUDtBQUFpRTs7QUFBQSxlQUFTNUosQ0FBVCxHQUFZO0FBQUMsZUFBTyxJQUFJNEosU0FBSixDQUFjLHNEQUFkLENBQVA7QUFBNkU7O0FBQUEsZUFBUzNKLENBQVQsQ0FBV3RELENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCRSxDQUFqQixFQUFtQjtBQUFDLFlBQUc7QUFBQ1AsV0FBQyxDQUFDc0IsSUFBRixDQUFPckIsQ0FBUCxFQUFTSSxDQUFULEVBQVdFLENBQVg7QUFBYyxTQUFsQixDQUFrQixPQUFNUCxDQUFOLEVBQVE7QUFBQyxpQkFBT0EsQ0FBUDtBQUFTO0FBQUM7O0FBQUEsZUFBU3VELENBQVQsQ0FBV3ZELENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCO0FBQUNRLFNBQUMsQ0FBRSxVQUFTYixDQUFULEVBQVc7QUFBQyxjQUFJTyxDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQUEsY0FBU0UsQ0FBQyxHQUFDNkMsQ0FBQyxDQUFDakQsQ0FBRCxFQUFHSixDQUFILEVBQU0sVUFBU0ksQ0FBVCxFQUFXO0FBQUNFLGFBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBSCxFQUFLTixDQUFDLEtBQUdJLENBQUosR0FBTXFELENBQUMsQ0FBQzFELENBQUQsRUFBR0ssQ0FBSCxDQUFQLEdBQWF3RCxDQUFDLENBQUM3RCxDQUFELEVBQUdLLENBQUgsQ0FBdEIsQ0FBRDtBQUE4QixXQUFoRCxFQUFtRCxVQUFTSixDQUFULEVBQVc7QUFBQ00sYUFBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUt3RCxDQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUgsQ0FBVCxDQUFEO0FBQWlCLFdBQWhGLEVBQWtGLGNBQVlELENBQUMsQ0FBQ21lLE1BQUYsSUFBVSxrQkFBdEIsQ0FBbEYsQ0FBWjtBQUF5SSxXQUFDNWQsQ0FBRCxJQUFJRSxDQUFKLEtBQVFGLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBS3dELENBQUMsQ0FBQy9ELENBQUQsRUFBR1MsQ0FBSCxDQUFkO0FBQXFCLFNBQTVLLEVBQThLVCxDQUE5SyxDQUFEO0FBQWtMOztBQUFBLGVBQVN3RCxDQUFULENBQVd4RCxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDQSxTQUFDLENBQUMrZCxNQUFGLEtBQVdqYixDQUFYLEdBQWFjLENBQUMsQ0FBQzdELENBQUQsRUFBR0MsQ0FBQyxDQUFDZ2UsT0FBTCxDQUFkLEdBQTRCaGUsQ0FBQyxDQUFDK2QsTUFBRixLQUFXaGIsQ0FBWCxHQUFhZSxDQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUMsQ0FBQ2dlLE9BQUwsQ0FBZCxHQUE0Qi9aLENBQUMsQ0FBQ2pFLENBQUQsRUFBRyxLQUFLLENBQVIsRUFBVyxVQUFTQSxDQUFULEVBQVc7QUFBQyxpQkFBT3lELENBQUMsQ0FBQzFELENBQUQsRUFBR0MsQ0FBSCxDQUFSO0FBQWMsU0FBckMsRUFBd0MsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsaUJBQU84RCxDQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUgsQ0FBUjtBQUFjLFNBQWxFLENBQXpEO0FBQThIOztBQUFBLGVBQVN3RCxDQUFULENBQVd6RCxDQUFYLEVBQWFLLENBQWIsRUFBZUUsQ0FBZixFQUFpQjtBQUFDRixTQUFDLENBQUMwRixXQUFGLEtBQWdCL0YsQ0FBQyxDQUFDK0YsV0FBbEIsSUFBK0J4RixDQUFDLEtBQUdvQyxDQUFuQyxJQUFzQ3RDLENBQUMsQ0FBQzBGLFdBQUYsQ0FBY3FZLE9BQWQsS0FBd0IzZSxDQUE5RCxHQUFnRStELENBQUMsQ0FBQ3hELENBQUQsRUFBR0ssQ0FBSCxDQUFqRSxHQUF1RSxLQUFLLENBQUwsS0FBU0UsQ0FBVCxHQUFXc0QsQ0FBQyxDQUFDN0QsQ0FBRCxFQUFHSyxDQUFILENBQVosR0FBa0JKLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQUtnRCxDQUFDLENBQUN2RCxDQUFELEVBQUdLLENBQUgsRUFBS0UsQ0FBTCxDQUFOLEdBQWNzRCxDQUFDLENBQUM3RCxDQUFELEVBQUdLLENBQUgsQ0FBeEc7QUFBOEc7O0FBQUEsZUFBU3FELENBQVQsQ0FBV3pELENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsWUFBR0osQ0FBQyxLQUFHSSxDQUFQLEVBQVMwRCxDQUFDLENBQUM5RCxDQUFELEVBQUdtRCxDQUFDLEVBQUosQ0FBRCxDQUFULEtBQXVCLElBQUdwRCxDQUFDLENBQUNLLENBQUQsQ0FBSixFQUFRO0FBQUMsY0FBSUUsQ0FBQyxHQUFDLEtBQUssQ0FBWDs7QUFBYSxjQUFHO0FBQUNBLGFBQUMsR0FBQ0YsQ0FBQyxDQUFDbEMsSUFBSjtBQUFTLFdBQWIsQ0FBYSxPQUFNNkIsQ0FBTixFQUFRO0FBQUMsbUJBQU8sS0FBSytELENBQUMsQ0FBQzlELENBQUQsRUFBR0QsQ0FBSCxDQUFiO0FBQW1COztBQUFBeUQsV0FBQyxDQUFDeEQsQ0FBRCxFQUFHSSxDQUFILEVBQUtFLENBQUwsQ0FBRDtBQUFTLFNBQXhFLE1BQTZFc0QsQ0FBQyxDQUFDNUQsQ0FBRCxFQUFHSSxDQUFILENBQUQ7QUFBTzs7QUFBQSxlQUFTdUQsQ0FBVCxDQUFXNUQsQ0FBWCxFQUFhO0FBQUNBLFNBQUMsQ0FBQ3FlLFFBQUYsSUFBWXJlLENBQUMsQ0FBQ3FlLFFBQUYsQ0FBV3JlLENBQUMsQ0FBQ2llLE9BQWIsQ0FBWixFQUFrQzlaLENBQUMsQ0FBQ25FLENBQUQsQ0FBbkM7QUFBdUM7O0FBQUEsZUFBUzZELENBQVQsQ0FBVzdELENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNELFNBQUMsQ0FBQ2dlLE1BQUYsS0FBV2xiLENBQVgsS0FBZTlDLENBQUMsQ0FBQ2llLE9BQUYsR0FBVWhlLENBQVYsRUFBWUQsQ0FBQyxDQUFDZ2UsTUFBRixHQUFTamIsQ0FBckIsRUFBdUIsTUFBSS9DLENBQUMsQ0FBQ3NlLFlBQUYsQ0FBZXZjLE1BQW5CLElBQTJCbEIsQ0FBQyxDQUFDc0QsQ0FBRCxFQUFHbkUsQ0FBSCxDQUFsRTtBQUF5RTs7QUFBQSxlQUFTK0QsQ0FBVCxDQUFXL0QsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQ0QsU0FBQyxDQUFDZ2UsTUFBRixLQUFXbGIsQ0FBWCxLQUFlOUMsQ0FBQyxDQUFDZ2UsTUFBRixHQUFTaGIsQ0FBVCxFQUFXaEQsQ0FBQyxDQUFDaWUsT0FBRixHQUFVaGUsQ0FBckIsRUFBdUJZLENBQUMsQ0FBQytDLENBQUQsRUFBRzVELENBQUgsQ0FBdkM7QUFBOEM7O0FBQUEsZUFBU2tFLENBQVQsQ0FBV2xFLENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCRSxDQUFqQixFQUFtQjtBQUFDLFlBQUlFLENBQUMsR0FBQ1QsQ0FBQyxDQUFDc2UsWUFBUjtBQUFBLFlBQXFCM2QsQ0FBQyxHQUFDRixDQUFDLENBQUNzQixNQUF6QjtBQUFnQy9CLFNBQUMsQ0FBQ3FlLFFBQUYsR0FBVyxJQUFYLEVBQWdCNWQsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBS1YsQ0FBckIsRUFBdUJRLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDb0MsQ0FBSCxDQUFELEdBQU8xQyxDQUE5QixFQUFnQ0ksQ0FBQyxDQUFDRSxDQUFDLEdBQUNxQyxDQUFILENBQUQsR0FBT3pDLENBQXZDLEVBQXlDLE1BQUlJLENBQUosSUFBT1gsQ0FBQyxDQUFDZ2UsTUFBVCxJQUFpQm5kLENBQUMsQ0FBQ3NELENBQUQsRUFBR25FLENBQUgsQ0FBM0Q7QUFBaUU7O0FBQUEsZUFBU21FLENBQVQsQ0FBV25FLENBQVgsRUFBYTtBQUFDLFlBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDc2UsWUFBUjtBQUFBLFlBQXFCamUsQ0FBQyxHQUFDTCxDQUFDLENBQUNnZSxNQUF6Qjs7QUFBZ0MsWUFBRyxNQUFJL2QsQ0FBQyxDQUFDOEIsTUFBVCxFQUFnQjtBQUFDLGVBQUksSUFBSXhCLENBQUMsR0FBQyxLQUFLLENBQVgsRUFBYUUsQ0FBQyxHQUFDLEtBQUssQ0FBcEIsRUFBc0JFLENBQUMsR0FBQ1gsQ0FBQyxDQUFDaWUsT0FBMUIsRUFBa0NwZCxDQUFDLEdBQUMsQ0FBeEMsRUFBMENBLENBQUMsR0FBQ1osQ0FBQyxDQUFDOEIsTUFBOUMsRUFBcURsQixDQUFDLElBQUUsQ0FBeEQ7QUFBMEROLGFBQUMsR0FBQ04sQ0FBQyxDQUFDWSxDQUFELENBQUgsRUFBT0osQ0FBQyxHQUFDUixDQUFDLENBQUNZLENBQUMsR0FBQ1IsQ0FBSCxDQUFWLEVBQWdCRSxDQUFDLEdBQUM2RCxDQUFDLENBQUMvRCxDQUFELEVBQUdFLENBQUgsRUFBS0UsQ0FBTCxFQUFPRSxDQUFQLENBQUYsR0FBWUYsQ0FBQyxDQUFDRSxDQUFELENBQTlCO0FBQTFEOztBQUE0RlgsV0FBQyxDQUFDc2UsWUFBRixDQUFldmMsTUFBZixHQUFzQixDQUF0QjtBQUF3QjtBQUFDOztBQUFBLGVBQVNxQyxDQUFULENBQVdwRSxDQUFYLEVBQWFLLENBQWIsRUFBZUUsQ0FBZixFQUFpQkUsQ0FBakIsRUFBbUI7QUFBQyxZQUFJRSxDQUFDLEdBQUNWLENBQUMsQ0FBQ00sQ0FBRCxDQUFQO0FBQUEsWUFBV00sQ0FBQyxHQUFDLEtBQUssQ0FBbEI7QUFBQSxZQUFvQkUsQ0FBQyxHQUFDLEtBQUssQ0FBM0I7QUFBQSxZQUE2QkUsQ0FBQyxHQUFDLENBQUMsQ0FBaEM7O0FBQWtDLFlBQUdOLENBQUgsRUFBSztBQUFDLGNBQUc7QUFBQ0UsYUFBQyxHQUFDTixDQUFDLENBQUNFLENBQUQsQ0FBSDtBQUFPLFdBQVgsQ0FBVyxPQUFNVCxDQUFOLEVBQVE7QUFBQ2lCLGFBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0YsQ0FBQyxHQUFDZixDQUFQO0FBQVM7O0FBQUEsY0FBR0ssQ0FBQyxLQUFHUSxDQUFQLEVBQVMsT0FBTyxLQUFLa0QsQ0FBQyxDQUFDMUQsQ0FBRCxFQUFHZ0QsQ0FBQyxFQUFKLENBQWI7QUFBcUIsU0FBakUsTUFBc0V4QyxDQUFDLEdBQUNKLENBQUY7O0FBQUlKLFNBQUMsQ0FBQzJkLE1BQUYsS0FBV2xiLENBQVgsS0FBZW5DLENBQUMsSUFBRU0sQ0FBSCxHQUFLeUMsQ0FBQyxDQUFDckQsQ0FBRCxFQUFHUSxDQUFILENBQU4sR0FBWSxDQUFDLENBQUQsS0FBS0ksQ0FBTCxHQUFPOEMsQ0FBQyxDQUFDMUQsQ0FBRCxFQUFHVSxDQUFILENBQVIsR0FBY2YsQ0FBQyxLQUFHK0MsQ0FBSixHQUFNYyxDQUFDLENBQUN4RCxDQUFELEVBQUdRLENBQUgsQ0FBUCxHQUFhYixDQUFDLEtBQUdnRCxDQUFKLElBQU9lLENBQUMsQ0FBQzFELENBQUQsRUFBR1EsQ0FBSCxDQUE5RDtBQUFxRTs7QUFBQSxlQUFTd0QsQ0FBVCxDQUFXckUsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxZQUFHO0FBQUNBLFdBQUMsQ0FBRSxVQUFTQSxDQUFULEVBQVc7QUFBQ3lELGFBQUMsQ0FBQzFELENBQUQsRUFBR0MsQ0FBSCxDQUFEO0FBQU8sV0FBckIsRUFBd0IsVUFBU0EsQ0FBVCxFQUFXO0FBQUM4RCxhQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUgsQ0FBRDtBQUFPLFdBQTNDLENBQUQ7QUFBK0MsU0FBbkQsQ0FBbUQsT0FBTUEsQ0FBTixFQUFRO0FBQUM4RCxXQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUgsQ0FBRDtBQUFPO0FBQUM7O0FBQUEsVUFBSXFFLENBQUMsR0FBQyxDQUFOOztBQUFRLGVBQVNDLENBQVQsR0FBWTtBQUFDLGVBQU9ELENBQUMsRUFBUjtBQUFXOztBQUFBLGVBQVNNLENBQVQsQ0FBVzVFLENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUM0QyxDQUFELENBQUQsR0FBSzBCLENBQUMsRUFBTixFQUFTdEUsQ0FBQyxDQUFDZ2UsTUFBRixHQUFTLEtBQUssQ0FBdkIsRUFBeUJoZSxDQUFDLENBQUNpZSxPQUFGLEdBQVUsS0FBSyxDQUF4QyxFQUEwQ2plLENBQUMsQ0FBQ3NlLFlBQUYsR0FBZSxFQUF6RDtBQUE0RDs7QUFBQSxlQUFTeFosQ0FBVCxHQUFZO0FBQUMsZUFBTyxJQUFJNEcsS0FBSixDQUFVLHlDQUFWLENBQVA7QUFBNEQ7O0FBQUEsVUFBSTNHLENBQUMsR0FBQyxZQUFVO0FBQUMsaUJBQVMvRSxDQUFULENBQVdBLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsZUFBS3NlLG9CQUFMLEdBQTBCdmUsQ0FBMUIsRUFBNEIsS0FBS3dlLE9BQUwsR0FBYSxJQUFJeGUsQ0FBSixDQUFNNkMsQ0FBTixDQUF6QyxFQUFrRCxLQUFLMmIsT0FBTCxDQUFhNWIsQ0FBYixLQUFpQmdDLENBQUMsQ0FBQyxLQUFLNFosT0FBTixDQUFwRSxFQUFtRm5lLENBQUMsQ0FBQ0osQ0FBRCxDQUFELElBQU0sS0FBSzhCLE1BQUwsR0FBWTlCLENBQUMsQ0FBQzhCLE1BQWQsRUFBcUIsS0FBSzBjLFVBQUwsR0FBZ0J4ZSxDQUFDLENBQUM4QixNQUF2QyxFQUE4QyxLQUFLa2MsT0FBTCxHQUFhLElBQUl4YyxLQUFKLENBQVUsS0FBS00sTUFBZixDQUEzRCxFQUFrRixNQUFJLEtBQUtBLE1BQVQsR0FBZ0I4QixDQUFDLENBQUMsS0FBSzJhLE9BQU4sRUFBYyxLQUFLUCxPQUFuQixDQUFqQixJQUE4QyxLQUFLbGMsTUFBTCxHQUFZLEtBQUtBLE1BQUwsSUFBYSxDQUF6QixFQUEyQixLQUFLMmMsVUFBTCxDQUFnQnplLENBQWhCLENBQTNCLEVBQThDLE1BQUksS0FBS3dlLFVBQVQsSUFBcUI1YSxDQUFDLENBQUMsS0FBSzJhLE9BQU4sRUFBYyxLQUFLUCxPQUFuQixDQUFsSCxDQUF4RixJQUF3T2xhLENBQUMsQ0FBQyxLQUFLeWEsT0FBTixFQUFjMVosQ0FBQyxFQUFmLENBQTVUO0FBQStVOztBQUFBLGVBQU85RSxDQUFDLENBQUNZLFNBQUYsQ0FBWThkLFVBQVosR0FBdUIsVUFBUzFlLENBQVQsRUFBVztBQUFDLGVBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWSxLQUFLK2QsTUFBTCxLQUFjbGIsQ0FBZCxJQUFpQjdDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK0IsTUFBakMsRUFBd0M5QixDQUFDLEVBQXpDO0FBQTRDLGlCQUFLMGUsVUFBTCxDQUFnQjNlLENBQUMsQ0FBQ0MsQ0FBRCxDQUFqQixFQUFxQkEsQ0FBckI7QUFBNUM7QUFBb0UsU0FBdkcsRUFBd0dELENBQUMsQ0FBQ1ksU0FBRixDQUFZK2QsVUFBWixHQUF1QixVQUFTM2UsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxjQUFJSSxDQUFDLEdBQUMsS0FBS2tlLG9CQUFYO0FBQUEsY0FBZ0NoZSxDQUFDLEdBQUNGLENBQUMsQ0FBQytkLE9BQXBDOztBQUE0QyxjQUFHN2QsQ0FBQyxLQUFHZCxDQUFQLEVBQVM7QUFBQyxnQkFBSWdCLENBQUMsR0FBQyxLQUFLLENBQVg7QUFBQSxnQkFBYUUsQ0FBQyxHQUFDLEtBQUssQ0FBcEI7QUFBQSxnQkFBc0JFLENBQUMsR0FBQyxDQUFDLENBQXpCOztBQUEyQixnQkFBRztBQUFDSixlQUFDLEdBQUNULENBQUMsQ0FBQzdCLElBQUo7QUFBUyxhQUFiLENBQWEsT0FBTTZCLENBQU4sRUFBUTtBQUFDYSxlQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtGLENBQUMsR0FBQ1gsQ0FBUDtBQUFTOztBQUFBLGdCQUFHUyxDQUFDLEtBQUdrQyxDQUFKLElBQU8zQyxDQUFDLENBQUNnZSxNQUFGLEtBQVdsYixDQUFyQixFQUF1QixLQUFLOGIsVUFBTCxDQUFnQjVlLENBQUMsQ0FBQ2dlLE1BQWxCLEVBQXlCL2QsQ0FBekIsRUFBMkJELENBQUMsQ0FBQ2llLE9BQTdCLEVBQXZCLEtBQWtFLElBQUcsY0FBWSxPQUFPeGQsQ0FBdEIsRUFBd0IsS0FBS2dlLFVBQUwsSUFBa0IsS0FBS1IsT0FBTCxDQUFhaGUsQ0FBYixJQUFnQkQsQ0FBbEMsQ0FBeEIsS0FBaUUsSUFBR0ssQ0FBQyxLQUFHZ0YsRUFBUCxFQUFVO0FBQUMsa0JBQUl0RSxDQUFDLEdBQUMsSUFBSVYsQ0FBSixDQUFNd0MsQ0FBTixDQUFOO0FBQWVoQyxlQUFDLEdBQUNrRCxDQUFDLENBQUNoRCxDQUFELEVBQUdKLENBQUgsQ0FBRixHQUFROEMsQ0FBQyxDQUFDMUMsQ0FBRCxFQUFHZixDQUFILEVBQUtTLENBQUwsQ0FBVixFQUFrQixLQUFLb2UsYUFBTCxDQUFtQjlkLENBQW5CLEVBQXFCZCxDQUFyQixDQUFsQjtBQUEwQyxhQUFwRSxNQUF5RSxLQUFLNGUsYUFBTCxDQUFtQixJQUFJeGUsQ0FBSixDQUFPLFVBQVNKLENBQVQsRUFBVztBQUFDLHFCQUFPQSxDQUFDLENBQUNELENBQUQsQ0FBUjtBQUFZLGFBQS9CLENBQW5CLEVBQXFEQyxDQUFyRDtBQUF3RCxXQUF4VSxNQUE2VSxLQUFLNGUsYUFBTCxDQUFtQnRlLENBQUMsQ0FBQ1AsQ0FBRCxDQUFwQixFQUF3QkMsQ0FBeEI7QUFBMkIsU0FBamlCLEVBQWtpQkQsQ0FBQyxDQUFDWSxTQUFGLENBQVlnZSxVQUFaLEdBQXVCLFVBQVM1ZSxDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsY0FBSUUsQ0FBQyxHQUFDLEtBQUtpZSxPQUFYO0FBQW1CamUsV0FBQyxDQUFDeWQsTUFBRixLQUFXbGIsQ0FBWCxLQUFlLEtBQUsyYixVQUFMLElBQWtCemUsQ0FBQyxLQUFHZ0QsQ0FBSixHQUFNZSxDQUFDLENBQUN4RCxDQUFELEVBQUdGLENBQUgsQ0FBUCxHQUFhLEtBQUs0ZCxPQUFMLENBQWFoZSxDQUFiLElBQWdCSSxDQUE5RCxHQUFpRSxNQUFJLEtBQUtvZSxVQUFULElBQXFCNWEsQ0FBQyxDQUFDdEQsQ0FBRCxFQUFHLEtBQUswZCxPQUFSLENBQXZGO0FBQXdHLFNBQXBzQixFQUFxc0JqZSxDQUFDLENBQUNZLFNBQUYsQ0FBWWllLGFBQVosR0FBMEIsVUFBUzdlLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUksQ0FBQyxHQUFDLElBQU47QUFBVzZELFdBQUMsQ0FBQ2xFLENBQUQsRUFBRyxLQUFLLENBQVIsRUFBVyxVQUFTQSxDQUFULEVBQVc7QUFBQyxtQkFBT0ssQ0FBQyxDQUFDdWUsVUFBRixDQUFhN2IsQ0FBYixFQUFlOUMsQ0FBZixFQUFpQkQsQ0FBakIsQ0FBUDtBQUEyQixXQUFsRCxFQUFxRCxVQUFTQSxDQUFULEVBQVc7QUFBQyxtQkFBT0ssQ0FBQyxDQUFDdWUsVUFBRixDQUFhNWIsQ0FBYixFQUFlL0MsQ0FBZixFQUFpQkQsQ0FBakIsQ0FBUDtBQUEyQixXQUE1RixDQUFEO0FBQWdHLFNBQXgxQixFQUF5MUJBLENBQWgyQjtBQUFrMkIsT0FBNXNDLEVBQU47O0FBQXF0QyxlQUFTZ0YsQ0FBVCxDQUFXaEYsQ0FBWCxFQUFhO0FBQUMsZUFBTyxJQUFJK0UsQ0FBSixDQUFNLElBQU4sRUFBVy9FLENBQVgsRUFBY3dlLE9BQXJCO0FBQTZCOztBQUFBLGVBQVN2WixDQUFULENBQVdqRixDQUFYLEVBQWE7QUFBQyxZQUFJQyxDQUFDLEdBQUMsSUFBTjtBQUFXLGVBQU9JLENBQUMsQ0FBQ0wsQ0FBRCxDQUFELEdBQUssSUFBSUMsQ0FBSixDQUFPLFVBQVNJLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsZUFBSSxJQUFJRSxDQUFDLEdBQUNULENBQUMsQ0FBQytCLE1BQVIsRUFBZXBCLENBQUMsR0FBQyxDQUFyQixFQUF1QkEsQ0FBQyxHQUFDRixDQUF6QixFQUEyQkUsQ0FBQyxFQUE1QjtBQUErQlYsYUFBQyxDQUFDbWUsT0FBRixDQUFVcGUsQ0FBQyxDQUFDVyxDQUFELENBQVgsRUFBZ0J4QyxJQUFoQixDQUFxQmtDLENBQXJCLEVBQXVCRSxDQUF2QjtBQUEvQjtBQUF5RCxTQUE5RSxDQUFMLEdBQXNGLElBQUlOLENBQUosQ0FBTyxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFPQSxDQUFDLENBQUMsSUFBSWdOLFNBQUosQ0FBYyxpQ0FBZCxDQUFELENBQVI7QUFBMkQsU0FBaEYsQ0FBN0Y7QUFBZ0w7O0FBQUEsZUFBUy9ILENBQVQsQ0FBV2xGLENBQVgsRUFBYTtBQUFDLFlBQUlDLENBQUMsR0FBQyxJQUFJLElBQUosQ0FBUzRDLENBQVQsQ0FBTjtBQUFrQixlQUFPa0IsQ0FBQyxDQUFDOUQsQ0FBRCxFQUFHRCxDQUFILENBQUQsRUFBT0MsQ0FBZDtBQUFnQjs7QUFBQSxlQUFTa0YsQ0FBVCxHQUFZO0FBQUMsY0FBTSxJQUFJOEgsU0FBSixDQUFjLG9GQUFkLENBQU47QUFBMEc7O0FBQUEsZUFBUzdILENBQVQsR0FBWTtBQUFDLGNBQU0sSUFBSTZILFNBQUosQ0FBYyx1SEFBZCxDQUFOO0FBQTZJOztBQUFBLFVBQUk1SCxFQUFFLEdBQUMsWUFBVTtBQUFDLGlCQUFTckYsQ0FBVCxDQUFXQyxDQUFYLEVBQWE7QUFBQyxlQUFLMkMsQ0FBTCxJQUFRMkIsQ0FBQyxFQUFULEVBQVksS0FBSzBaLE9BQUwsR0FBYSxLQUFLRCxNQUFMLEdBQVksS0FBSyxDQUExQyxFQUE0QyxLQUFLTSxZQUFMLEdBQWtCLEVBQTlELEVBQWlFemIsQ0FBQyxLQUFHNUMsQ0FBSixLQUFRLGNBQVksT0FBT0EsQ0FBbkIsSUFBc0JrRixDQUFDLEVBQXZCLEVBQTBCLGdCQUFnQm5GLENBQWhCLEdBQWtCcUUsQ0FBQyxDQUFDLElBQUQsRUFBTXBFLENBQU4sQ0FBbkIsR0FBNEJtRixDQUFDLEVBQS9ELENBQWpFO0FBQW9JOztBQUFBLGVBQU9wRixDQUFDLENBQUNZLFNBQUYsWUFBa0IsVUFBU1osQ0FBVCxFQUFXO0FBQUMsaUJBQU8sS0FBSzdCLElBQUwsQ0FBVSxJQUFWLEVBQWU2QixDQUFmLENBQVA7QUFBeUIsU0FBdkQsRUFBd0RBLENBQUMsQ0FBQ1ksU0FBRixjQUFvQixVQUFTWixDQUFULEVBQVc7QUFBQyxjQUFJSyxDQUFDLEdBQUMsSUFBTjtBQUFBLGNBQVdFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDMEYsV0FBZjtBQUEyQixpQkFBTzlGLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQUtLLENBQUMsQ0FBQ2xDLElBQUYsQ0FBUSxVQUFTOEIsQ0FBVCxFQUFXO0FBQUMsbUJBQU9NLENBQUMsQ0FBQzZkLE9BQUYsQ0FBVXBlLENBQUMsRUFBWCxFQUFlN0IsSUFBZixDQUFxQixZQUFVO0FBQUMscUJBQU84QixDQUFQO0FBQVMsYUFBekMsQ0FBUDtBQUFtRCxXQUF2RSxFQUEwRSxVQUFTQSxDQUFULEVBQVc7QUFBQyxtQkFBT00sQ0FBQyxDQUFDNmQsT0FBRixDQUFVcGUsQ0FBQyxFQUFYLEVBQWU3QixJQUFmLENBQXFCLFlBQVU7QUFBQyxvQkFBTThCLENBQU47QUFBUSxhQUF4QyxDQUFQO0FBQWtELFdBQXhJLENBQUwsR0FBZ0pJLENBQUMsQ0FBQ2xDLElBQUYsQ0FBTzZCLENBQVAsRUFBU0EsQ0FBVCxDQUF2SjtBQUFtSyxTQUF0UixFQUF1UkEsQ0FBOVI7QUFBZ1MsT0FBN2IsRUFBUDs7QUFBdWMsZUFBU3NGLEVBQVQsR0FBYTtBQUFDLFlBQUl0RixDQUFDLEdBQUMsS0FBSyxDQUFYO0FBQWEsWUFBRyxLQUFLLENBQUwsS0FBUytPLEVBQVosRUFBZS9PLENBQUMsR0FBQytPLEVBQUYsQ0FBZixLQUF5QixJQUFHLGVBQWEsT0FBT3pPLElBQXZCLEVBQTRCTixDQUFDLEdBQUNNLElBQUYsQ0FBNUIsS0FBd0MsSUFBRztBQUFDTixXQUFDLEdBQUNRLFFBQVEsQ0FBQyxhQUFELENBQVIsRUFBRjtBQUE0QixTQUFoQyxDQUFnQyxPQUFNUixDQUFOLEVBQVE7QUFBQyxnQkFBTSxJQUFJMEwsS0FBSixDQUFVLDBFQUFWLENBQU47QUFBNEY7QUFBQSxZQUFJekwsQ0FBQyxHQUFDRCxDQUFDLENBQUM4ZSxPQUFSOztBQUFnQixZQUFHN2UsQ0FBSCxFQUFLO0FBQUMsY0FBSUksQ0FBQyxHQUFDLElBQU47O0FBQVcsY0FBRztBQUFDQSxhQUFDLEdBQUNELE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBakIsQ0FBMEJNLElBQTFCLENBQStCckIsQ0FBQyxDQUFDbWUsT0FBRixFQUEvQixDQUFGO0FBQThDLFdBQWxELENBQWtELE9BQU1wZSxDQUFOLEVBQVEsQ0FBRTs7QUFBQSxjQUFHLHVCQUFxQkssQ0FBckIsSUFBd0IsQ0FBQ0osQ0FBQyxDQUFDOGUsSUFBOUIsRUFBbUM7QUFBTzs7QUFBQS9lLFNBQUMsQ0FBQzhlLE9BQUYsR0FBVXpaLEVBQVY7QUFBYTs7QUFBQSxhQUFPQSxFQUFFLENBQUN6RSxTQUFILENBQWF6QyxJQUFiLEdBQWtCd0UsQ0FBbEIsRUFBb0IwQyxFQUFFLENBQUMyWixHQUFILEdBQU9oYSxDQUEzQixFQUE2QkssRUFBRSxDQUFDNFosSUFBSCxHQUFRaGEsQ0FBckMsRUFBdUNJLEVBQUUsQ0FBQytZLE9BQUgsR0FBVzNlLENBQWxELEVBQW9ENEYsRUFBRSxDQUFDNlosTUFBSCxHQUFVaGEsQ0FBOUQsRUFBZ0VHLEVBQUUsQ0FBQzhaLGFBQUgsR0FBaUJwZSxDQUFqRixFQUFtRnNFLEVBQUUsQ0FBQytaLFFBQUgsR0FBWW5lLENBQS9GLEVBQWlHb0UsRUFBRSxDQUFDZ2EsS0FBSCxHQUFTeGUsQ0FBMUcsRUFBNEd3RSxFQUFFLENBQUNpYSxRQUFILEdBQVloYSxFQUF4SCxFQUEySEQsRUFBRSxDQUFDeVosT0FBSCxHQUFXelosRUFBdEksRUFBeUlBLEVBQWhKO0FBQW1KLEtBQTVvTSxFQUFWO0FBQXlwTSxHQUF2cU0sQ0FBd3FNMlgsRUFBeHFNLENBQUQ7O0FBQTZxTSxNQUFJdUMsRUFBRSxJQUFFLFVBQVN2ZixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlRSxDQUFmLEVBQWlCRSxDQUFqQixFQUFtQkUsQ0FBbkIsRUFBcUI7QUFBQyxRQUFJRSxDQUFKO0FBQUEsUUFBTUUsQ0FBTjtBQUFBLFFBQVFFLENBQVI7QUFBQSxRQUFVRSxDQUFWO0FBQUEsUUFBWUMsQ0FBWjtBQUFBLFFBQWNDLENBQUMsR0FBQyxRQUFNckIsQ0FBdEI7QUFBQSxRQUF3QnVCLENBQUMsR0FBQ2dFLElBQUksQ0FBQ2lhLEtBQUwsQ0FBVyxNQUFJamEsSUFBSSxDQUFDcUYsTUFBTCxFQUFmLENBQTFCO0FBQUEsUUFBd0RwSixDQUFDLEdBQUNoQixRQUFRLENBQUNJLFNBQW5FO0FBQUEsUUFBNkVlLENBQUMsR0FBQyxvQ0FBL0U7QUFBQSxRQUFvSEMsQ0FBQyxHQUFDLGlCQUF0SDtBQUFBLFFBQXdJQyxDQUFDLEdBQUMsYUFBMUk7QUFBQSxRQUF3Sk0sQ0FBQyxHQUFDLEVBQTFKO0FBQUEsUUFBNkp6QyxDQUFDLEdBQUMsRUFBL0o7QUFBQSxRQUFrSzBDLENBQUMsR0FBQ3BDLENBQUMsQ0FBQ3lmLE9BQXRLO0FBQUEsUUFBOEtwZCxDQUFDLEdBQUMsVUFBaEw7QUFBQSxRQUEyTEMsQ0FBQyxHQUFDLENBQUMsQ0FBOUw7O0FBQWdNLGFBQVNFLENBQVQsQ0FBV3hDLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsVUFBSUksQ0FBQyxHQUFDeU0sRUFBRSxDQUFDOU0sQ0FBQyxDQUFDQyxDQUFELENBQUYsQ0FBUjtBQUFlLGFBQU0sY0FBWUksQ0FBWixJQUFlLEVBQUUsWUFBVUEsQ0FBVixJQUFhLENBQUNMLENBQUMsQ0FBQ0MsQ0FBRCxDQUFqQixDQUFmLElBQXNDLGFBQVdJLENBQXZEO0FBQXlEOztBQUFBLGFBQVNzQyxDQUFULEdBQVk7QUFBQyxVQUFJM0MsQ0FBSjtBQUFBLFVBQU1DLENBQUMsR0FBQyxpQkFBUjtBQUFBLFVBQTBCSSxDQUFDLEdBQUMsK0JBQTVCOztBQUE0RCxVQUFHLENBQUNtRCxDQUFDLENBQUNpTSxTQUFTLENBQUNpUSxPQUFYLENBQUYsSUFBdUIsWUFBVTVTLEVBQUUsQ0FBQzJDLFNBQVMsQ0FBQ2lRLE9BQVYsQ0FBa0J6ZixDQUFsQixDQUFELENBQXRDLEVBQTZEO0FBQUMsWUFBSU0sQ0FBQyxHQUFDa1AsU0FBUyxDQUFDaVEsT0FBVixDQUFrQnpmLENBQWxCLEVBQXFCRixXQUEzQjtBQUF1Q1EsU0FBQyxJQUFFLENBQUNpRCxDQUFDLENBQUNpTSxTQUFTLENBQUNrUSxTQUFYLENBQUwsSUFBNEJsUSxTQUFTLENBQUNrUSxTQUFWLENBQW9CdGYsQ0FBcEIsQ0FBNUIsSUFBb0RvUCxTQUFTLENBQUNrUSxTQUFWLENBQW9CdGYsQ0FBcEIsRUFBdUJ1ZixhQUEzRSxLQUEyRjdlLENBQUMsR0FBQ1IsQ0FBQyxDQUFDaVAsS0FBRixDQUFRLE1BQVIsQ0FBN0Y7QUFBOEc7O0FBQUEsVUFBRyxDQUFDek8sQ0FBSixFQUFNLElBQUc7QUFBQ2YsU0FBQyxHQUFDLElBQUk2ZixhQUFKLENBQWtCLCtCQUFsQixDQUFGLEVBQXFEOWUsQ0FBQyxHQUFDVSxLQUFLLENBQUNiLFNBQU4sQ0FBZ0JrQixLQUFoQixDQUFzQlIsSUFBdEIsQ0FBMkJ0QixDQUFDLENBQUM4ZixXQUFGLENBQWMsVUFBZCxFQUEwQnRRLEtBQTFCLENBQWdDLHlCQUFoQyxDQUEzQixFQUFzRixDQUF0RixDQUF2RCxFQUFnSnhQLENBQUMsR0FBQyxJQUFsSjtBQUF1SixPQUEzSixDQUEySixPQUFNQSxDQUFOLEVBQVEsQ0FBRTtBQUFBLFVBQUcsQ0FBQ2UsQ0FBSixFQUFNLE9BQU0sQ0FBQyxDQUFQO0FBQVMsVUFBSU4sQ0FBQyxHQUFDOEIsUUFBUSxDQUFDeEIsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFNLEVBQU4sQ0FBZDtBQUFBLFVBQXdCSixDQUFDLEdBQUM0QixRQUFRLENBQUN4QixDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU0sRUFBTixDQUFsQztBQUE0QyxhQUFPRSxDQUFDLEdBQUNSLENBQUMsR0FBQyxDQUFGLElBQUtFLENBQUMsR0FBQyxDQUFULEVBQVcsQ0FBQyxDQUFuQjtBQUFxQjs7QUFBQSxRQUFHNkIsQ0FBQyxDQUFDeEMsQ0FBRCxFQUFHLGtCQUFILENBQUosRUFBMkJtQixDQUFDLEdBQUMsV0FBU25CLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQ0wsT0FBQyxDQUFDaUwsZ0JBQUYsQ0FBbUJoTCxDQUFuQixFQUFxQkksQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QjtBQUEyQixLQUE3QyxFQUE4Q2UsQ0FBQyxHQUFDLFdBQVNwQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUNMLE9BQUMsQ0FBQ21MLG1CQUFGLENBQXNCbEwsQ0FBdEIsRUFBd0JJLENBQXhCLEVBQTBCLENBQUMsQ0FBM0I7QUFBOEIsS0FBOUYsQ0FBM0IsS0FBOEg7QUFBQyxVQUFHLENBQUNtQyxDQUFDLENBQUN4QyxDQUFELEVBQUcsYUFBSCxDQUFMLEVBQXVCLE1BQU0sSUFBSTBMLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQXlDdkssT0FBQyxHQUFDLFdBQVNuQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUNMLFNBQUMsQ0FBQytmLFdBQUYsQ0FBYyxPQUFLOWYsQ0FBbkIsRUFBcUJJLENBQXJCO0FBQXdCLE9BQTFDLEVBQTJDZSxDQUFDLEdBQUMsV0FBU3BCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQ0wsU0FBQyxDQUFDZ2dCLFdBQUYsQ0FBYyxPQUFLL2YsQ0FBbkIsRUFBcUJJLENBQXJCO0FBQXdCLE9BQXJGO0FBQXNGO0FBQUEsUUFBSVosQ0FBSjtBQUFBLFFBQU1tRCxDQUFDLEdBQUMsQ0FBQyxDQUFUO0FBQUEsUUFBV0MsQ0FBQyxHQUFDLEVBQWI7O0FBQWdCLGFBQVNDLENBQVQsR0FBWTtBQUFDLFVBQUcsQ0FBQ0YsQ0FBSixFQUFNO0FBQUNBLFNBQUMsR0FBQyxDQUFDLENBQUg7O0FBQUssYUFBSSxJQUFJNUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDNkMsQ0FBQyxDQUFDZCxNQUFoQixFQUF1Qi9CLENBQUMsRUFBeEI7QUFBMkI2QyxXQUFDLENBQUM3QyxDQUFELENBQUQ7QUFBM0I7O0FBQWtDNkMsU0FBQyxDQUFDZCxNQUFGLEdBQVMsQ0FBVDtBQUFXO0FBQUM7O0FBQUEsYUFBU2dCLENBQVQsQ0FBVy9DLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMyQyxPQUFDLEdBQUM1QyxDQUFDLENBQUNzQixJQUFGLENBQU9yQixDQUFQLENBQUQsR0FBVzRDLENBQUMsQ0FBQ2lGLElBQUYsQ0FBUSxZQUFVO0FBQUM5SCxTQUFDLENBQUNzQixJQUFGLENBQU9yQixDQUFQO0FBQVUsT0FBN0IsQ0FBWjtBQUE0Qzs7QUFBQSxhQUFTK0MsQ0FBVCxDQUFXaEQsQ0FBWCxFQUFhO0FBQUMsYUFBT0EsQ0FBQyxDQUFDd1AsS0FBRixDQUFRN04sQ0FBUixFQUFXLENBQVgsQ0FBUDtBQUFxQjs7QUFBQSxhQUFTeUIsQ0FBVCxDQUFXcEQsQ0FBWCxFQUFhO0FBQUMsVUFBR0EsQ0FBQyxDQUFDd0ssT0FBRixDQUFVLFNBQVYsS0FBc0IsQ0FBekIsRUFBMkIsT0FBTSxTQUFOO0FBQWdCLFVBQUl2SyxDQUFDLEdBQUNELENBQUMsQ0FBQzRQLFdBQUYsR0FBZ0JKLEtBQWhCLENBQXNCN04sQ0FBdEIsQ0FBTjtBQUErQixVQUFHLENBQUMxQixDQUFKLEVBQU0sT0FBTSxFQUFOO0FBQVMsVUFBSUksQ0FBQyxHQUFDSixDQUFDLENBQUMsQ0FBRCxDQUFQO0FBQUEsVUFBV00sQ0FBQyxHQUFDTixDQUFDLENBQUMsQ0FBRCxDQUFkO0FBQUEsVUFBa0JRLENBQUMsR0FBQ1IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNLEVBQTFCO0FBQTZCLGFBQU0sQ0FBQyxXQUFTSSxDQUFULElBQVksU0FBT0ksQ0FBbkIsSUFBc0IsWUFBVUosQ0FBVixJQUFhLFVBQVFJLENBQTVDLE1BQWlEQSxDQUFDLEdBQUMsRUFBbkQsR0FBdURKLENBQUMsR0FBQyxJQUFGLEdBQU9FLENBQVAsR0FBU0UsQ0FBdEU7QUFBd0U7O0FBQUEsYUFBUzRDLENBQVQsQ0FBV3JELENBQVgsRUFBYTtBQUFDLFVBQUcsQ0FBQyxDQUFDQSxDQUFDLEdBQUNBLENBQUMsQ0FBQ2tDLE9BQUYsQ0FBVUwsQ0FBVixFQUFZLEtBQVosQ0FBSCxFQUF1QjJOLEtBQXZCLENBQTZCLHFCQUE3QixDQUFKLEVBQXdEO0FBQUMsWUFBSXZQLENBQUMsR0FBQyxRQUFNRCxDQUFDLENBQUNrZSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBTixHQUF1QixFQUF2QixHQUEwQjdkLENBQUMsQ0FBQzRmLFFBQWxDO0FBQTJDLGdCQUFNaGdCLENBQUMsQ0FBQ2llLFNBQUYsQ0FBWWplLENBQUMsQ0FBQzhCLE1BQUYsR0FBUyxDQUFyQixDQUFOLEtBQWdDOUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNpZSxTQUFGLENBQVksQ0FBWixFQUFjamUsQ0FBQyxDQUFDaWdCLFdBQUYsQ0FBYyxHQUFkLElBQW1CLENBQWpDLENBQWxDLEdBQXVFbGdCLENBQUMsR0FBQ0ssQ0FBQyxDQUFDd1EsUUFBRixHQUFXLElBQVgsR0FBZ0J4USxDQUFDLENBQUM4ZixJQUFsQixHQUF1QmxnQixDQUF2QixHQUF5QkQsQ0FBbEc7QUFBb0c7O0FBQUEsYUFBSzRCLENBQUMsQ0FBQ0ksSUFBRixDQUFPaEMsQ0FBUCxDQUFMO0FBQWdCQSxTQUFDLEdBQUNBLENBQUMsQ0FBQ2tDLE9BQUYsQ0FBVU4sQ0FBVixFQUFZLEVBQVosQ0FBRjtBQUFoQjs7QUFBa0MsYUFBTzVCLENBQVA7QUFBUzs7QUFBQSxhQUFTc0QsQ0FBVCxDQUFXdEQsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFJSSxDQUFDLEdBQUMsRUFBTjtBQUFBLFVBQVNFLENBQUMsR0FBQ1AsQ0FBQyxDQUFDd0ssT0FBRixDQUFVLEdBQVYsQ0FBWDtBQUEwQixPQUFDLENBQUQsS0FBS2pLLENBQUwsS0FBU0YsQ0FBQyxHQUFDTCxDQUFDLENBQUNrZSxTQUFGLENBQVkzZCxDQUFaLENBQUYsRUFBaUJQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDa2UsU0FBRixDQUFZLENBQVosRUFBYzNkLENBQWQsQ0FBNUI7QUFBOEMsVUFBSUUsQ0FBQyxHQUFDLEVBQU47O0FBQVMsV0FBSSxJQUFJSSxDQUFSLElBQWFaLENBQWI7QUFBZUEsU0FBQyxDQUFDYSxjQUFGLENBQWlCRCxDQUFqQixLQUFxQkosQ0FBQyxDQUFDcUgsSUFBRixDQUFPakgsQ0FBQyxHQUFDLEdBQUYsR0FBTUYsQ0FBQyxDQUFDVixDQUFDLENBQUNZLENBQUQsQ0FBRixDQUFkLENBQXJCO0FBQWY7O0FBQTBELGFBQU9iLENBQUMsSUFBRXNDLENBQUMsR0FBQyxHQUFELEdBQUssQ0FBQyxDQUFELElBQUl0QyxDQUFDLENBQUN3SyxPQUFGLENBQVUsR0FBVixDQUFKLEdBQW1CLEdBQW5CLEdBQXVCLEdBQS9CLENBQUQsR0FBcUMvSixDQUFDLENBQUMrSyxJQUFGLENBQU8sR0FBUCxDQUFyQyxHQUFpRG5MLENBQXhEO0FBQTBEOztBQUFBLG9CQUFlSixDQUFmLElBQWtCUixDQUFDLEdBQUNRLENBQUMsQ0FBQ3FiLFVBQUosRUFBZTFZLENBQUMsR0FBQyxjQUFZbkQsQ0FBWixJQUFlLENBQUNnUSxTQUFTLENBQUNJLFNBQVYsQ0FBb0JyRixPQUFwQixDQUE0QixjQUE1QixDQUFELEtBQStDLFlBQVUvSyxDQUFWLElBQWEsaUJBQWVBLENBQTNFLENBQWxELElBQWlJbUQsQ0FBQyxHQUFDLENBQUMsQ0FBQzNDLENBQUMsQ0FBQ2lWLElBQXZJLEVBQTRJdFMsQ0FBQyxLQUFHSixDQUFDLENBQUN4QyxDQUFELEVBQUcsa0JBQUgsQ0FBRCxHQUF3Qm1CLENBQUMsQ0FBQ2xCLENBQUQsRUFBRyxrQkFBSCxFQUFzQjZDLENBQXRCLENBQXpCLElBQW1EM0IsQ0FBQyxDQUFDbEIsQ0FBRCxFQUFHLGtCQUFILEVBQXVCLFlBQVU7QUFBQyxvQkFBWUEsQ0FBQyxDQUFDcWIsVUFBZCxJQUEwQnhZLENBQUMsRUFBM0I7QUFBOEIsS0FBaEUsQ0FBRCxFQUFvRTdDLENBQUMsQ0FBQ21nQixlQUFGLENBQWtCQyxRQUFsQixJQUE0QnJnQixDQUFDLEtBQUdzZ0IsR0FBaEMsSUFBcUMsU0FBU3RnQixDQUFULEdBQVk7QUFBQyxVQUFHLENBQUM0QyxDQUFKLEVBQU07QUFBQyxZQUFHO0FBQUMzQyxXQUFDLENBQUNtZ0IsZUFBRixDQUFrQkMsUUFBbEIsQ0FBMkIsTUFBM0I7QUFBbUMsU0FBdkMsQ0FBdUMsT0FBTXBnQixDQUFOLEVBQVE7QUFBQyxpQkFBTyxLQUFLTSxDQUFDLENBQUNQLENBQUQsRUFBRyxDQUFILENBQWI7QUFBbUI7O0FBQUE4QyxTQUFDO0FBQUc7QUFBQyxLQUE1RixFQUE1SixHQUE0UDNCLENBQUMsQ0FBQ25CLENBQUQsRUFBRyxNQUFILEVBQVU4QyxDQUFWLENBQWhRLENBQTdJOztBQUEyWixRQUFJUyxDQUFDLEdBQUMsVUFBU3ZELENBQVQsRUFBVztBQUFDLFdBQUksSUFBSUMsQ0FBSixFQUFNSSxDQUFDLEdBQUMsRUFBUixFQUFXRSxDQUFDLEdBQUMsQ0FBQ1AsQ0FBQyxHQUFDQSxDQUFDLENBQUNrZSxTQUFGLENBQVksQ0FBWixFQUFlL08sS0FBZixDQUFxQixHQUFyQixDQUFILEVBQThCcE4sTUFBL0MsRUFBc0R4QixDQUFDLEVBQXZEO0FBQTJERixTQUFDLENBQUMsQ0FBQ0osQ0FBQyxHQUFDRCxDQUFDLENBQUNPLENBQUQsQ0FBRCxDQUFLNE8sS0FBTCxDQUFXLEdBQVgsQ0FBSCxFQUFvQixDQUFwQixDQUFELENBQUQsR0FBMEIxTyxDQUFDLENBQUNSLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBM0I7QUFBM0Q7O0FBQTZGLGFBQU9JLENBQVA7QUFBUyxLQUFsSCxDQUFtSCxTQUFTMkIsSUFBVCxDQUFjM0IsQ0FBQyxDQUFDa2dCLE1BQWhCLElBQXdCbGdCLENBQUMsQ0FBQ2tnQixNQUExQixHQUFpQ2xnQixDQUFDLENBQUNtZ0IsSUFBdEosQ0FBTjs7QUFBa0ssYUFBU2hkLENBQVQsQ0FBV3hELENBQVgsRUFBYTtBQUFDLGFBQU8sS0FBSyxDQUFMLEtBQVNBLENBQWhCO0FBQWtCOztBQUFBLFFBQUl5RCxDQUFKO0FBQUEsUUFBTUMsRUFBQyxHQUFDLGFBQVU7QUFBQyxVQUFJMUQsQ0FBQyxHQUFDLEVBQU47QUFBQSxVQUFTQyxDQUFDLEdBQUM7QUFBQ1ksU0FBQyxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBQUgsT0FBWDtBQUFBLFVBQXVCUixDQUFDLEdBQUMsZUFBekI7QUFBeUMsYUFBTSxlQUFhLE9BQU9pTCxJQUFwQixJQUEwQixjQUFZLE9BQU9BLElBQUksQ0FBQ0MsU0FBbEQsSUFBNkRELElBQUksQ0FBQ0MsU0FBTCxDQUFldEwsQ0FBZixFQUFrQmlDLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLE1BQXNDN0IsQ0FBbkcsR0FBcUdpTCxJQUFyRyxJQUEyR2xMLE1BQU0sQ0FBQ3FnQixNQUFQLElBQWVyZ0IsTUFBTSxDQUFDcWdCLE1BQVAsQ0FBY3hnQixDQUFkLEVBQWlCaUMsT0FBakIsQ0FBeUIsS0FBekIsRUFBK0IsRUFBL0IsTUFBcUM3QixDQUFwRCxLQUF3REwsQ0FBQyxDQUFDdUwsU0FBRixHQUFZbkwsTUFBTSxDQUFDcWdCLE1BQTNFLEdBQW1GLGNBQVksT0FBTzVZLE1BQU0sQ0FBQ2pILFNBQVAsQ0FBaUI4ZixRQUFwQyxJQUE4QyxDQUFDemdCLENBQUMsR0FBQ0ksQ0FBQyxDQUFDcWdCLFFBQUYsRUFBSCxFQUFpQjdmLENBQS9ELElBQWtFLE1BQUlaLENBQUMsQ0FBQ1ksQ0FBRixDQUFJa0IsTUFBMUUsSUFBa0YsTUFBSTlCLENBQUMsQ0FBQ1ksQ0FBRixDQUFJLENBQUosQ0FBdEYsS0FBK0ZiLENBQUMsQ0FBQ3dWLEtBQUYsR0FBUSxVQUFTeFYsQ0FBVCxFQUFXO0FBQUMsZUFBT0EsQ0FBQyxDQUFDMGdCLFFBQUYsRUFBUDtBQUFvQixPQUF2SSxDQUFuRixFQUE0TjFnQixDQUFDLENBQUN1TCxTQUFGLElBQWF2TCxDQUFDLENBQUN3VixLQUFmLElBQXNCOVIsRUFBQyxHQUFDLGFBQVU7QUFBQyxlQUFPMUQsQ0FBUDtBQUFTLE9BQXRCLEVBQXVCQSxDQUE3QyxJQUFnRCxJQUF2WCxDQUFOO0FBQW1ZLEtBQS9iOztBQUFnYyxhQUFTNEQsQ0FBVCxDQUFXNUQsQ0FBWCxFQUFhQyxDQUFiLEVBQWVJLENBQWYsRUFBaUI7QUFBQyxVQUFJRSxDQUFKOztBQUFNLFdBQUksSUFBSUUsQ0FBUixJQUFhUixDQUFiO0FBQWVBLFNBQUMsQ0FBQ2EsY0FBRixDQUFpQkwsQ0FBakIsTUFBc0JBLENBQUMsSUFBSVQsQ0FBTCxHQUFPLGFBQVc4TSxFQUFFLENBQUN2TSxDQUFDLEdBQUNOLENBQUMsQ0FBQ1EsQ0FBRCxDQUFKLENBQWIsR0FBc0JtRCxDQUFDLENBQUM1RCxDQUFDLENBQUNTLENBQUQsQ0FBRixFQUFNRixDQUFOLEVBQVFGLENBQVIsQ0FBdkIsR0FBa0NBLENBQUMsS0FBR0wsQ0FBQyxDQUFDUyxDQUFELENBQUQsR0FBS1IsQ0FBQyxDQUFDUSxDQUFELENBQVQsQ0FBMUMsR0FBd0RULENBQUMsQ0FBQ1MsQ0FBRCxDQUFELEdBQUtSLENBQUMsQ0FBQ1EsQ0FBRCxDQUFwRjtBQUFmOztBQUF3RyxhQUFPVCxDQUFQO0FBQVM7O0FBQUEsYUFBUzZELENBQVQsQ0FBVzdELENBQVgsRUFBYTtBQUFDLFVBQUlLLENBQUo7QUFBTW1ELE9BQUMsQ0FBQzNDLENBQUQsQ0FBRCxJQUFNLFlBQVU7QUFBQyxZQUFJYixDQUFDLEdBQUNDLENBQUMsQ0FBQ2lWLElBQUYsQ0FBT0MsV0FBUCxDQUFtQmxWLENBQUMsQ0FBQzhVLGFBQUYsQ0FBZ0IsTUFBaEIsQ0FBbkIsQ0FBTjtBQUFBLFlBQWtEMVUsQ0FBQyxHQUFDTCxDQUFDLENBQUNtVixXQUFGLENBQWNsVixDQUFDLENBQUM4VSxhQUFGLENBQWdCLE9BQWhCLENBQWQsQ0FBcEQ7QUFBNEYxVSxTQUFDLENBQUN1TyxJQUFGLEdBQU92TSxDQUFDLEdBQUMsTUFBRixHQUFTZCxDQUFoQixFQUFrQlYsQ0FBQyxHQUFDUixDQUFDLEtBQUdMLENBQUMsQ0FBQzJnQixRQUFGLENBQVd0Z0IsQ0FBQyxDQUFDdU8sSUFBYixDQUF4QixFQUEyQzNPLENBQUMsQ0FBQ2lWLElBQUYsQ0FBT0UsV0FBUCxDQUFtQnBWLENBQW5CLENBQTNDO0FBQWlFLE9BQXhLLEVBQU4sRUFBaUxhLENBQUMsR0FBQ1IsQ0FBQyxHQUFDSixDQUFDLENBQUM4VSxhQUFGLENBQWdCLG1CQUFpQi9VLENBQUMsQ0FBQzRnQixLQUFGLENBQVFoUyxJQUF6QixHQUE4QixLQUE5QyxDQUFILEdBQXdELENBQUN2TyxDQUFDLEdBQUNKLENBQUMsQ0FBQzhVLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBSCxFQUE4Qm5HLElBQTlCLEdBQW1DNU8sQ0FBQyxDQUFDNGdCLEtBQUYsQ0FBUWhTLElBQXJSLEVBQTBSdk8sQ0FBQyxDQUFDMlUsRUFBRixHQUFLM1UsQ0FBQyxDQUFDdU8sSUFBRixHQUFPNU8sQ0FBQyxDQUFDNGdCLEtBQUYsQ0FBUWhTLElBQTlTLEVBQW1ULE9BQU81TyxDQUFDLENBQUM0Z0IsS0FBRixDQUFRaFMsSUFBbFUsRUFBdVUsWUFBVSxPQUFPNU8sQ0FBQyxDQUFDMFksU0FBbkIsS0FBK0IxWSxDQUFDLENBQUMwWSxTQUFGLEdBQVl6WSxDQUFDLENBQUM0Z0IsY0FBRixDQUFpQjdnQixDQUFDLENBQUMwWSxTQUFuQixDQUEzQyxDQUF2VSxFQUFpWjFZLENBQUMsQ0FBQzBZLFNBQUYsS0FBYzlVLENBQUMsQ0FBQ3ZELENBQUMsQ0FBQ3lnQixLQUFILEVBQVM7QUFBQ0MsZ0JBQVEsRUFBQyxVQUFWO0FBQXFCVCxXQUFHLEVBQUMsU0FBekI7QUFBbUNVLFlBQUksRUFBQztBQUF4QyxPQUFULENBQUQsRUFBMERoaEIsQ0FBQyxDQUFDMFksU0FBRixHQUFZelksQ0FBQyxDQUFDaVYsSUFBdEYsQ0FBalo7QUFBNmUsVUFBSTNVLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNGdCLEtBQUYsQ0FBUXhoQixHQUFkOztBQUFrQixVQUFHWSxDQUFDLENBQUM0Z0IsS0FBRixDQUFReGhCLEdBQVIsR0FBWSxrQkFBWixFQUErQndFLENBQUMsQ0FBQ3ZELENBQUQsRUFBR0wsQ0FBQyxDQUFDNGdCLEtBQUwsQ0FBaEMsRUFBNEN2Z0IsQ0FBQyxDQUFDNGdCLE1BQUYsR0FBUzVnQixDQUFDLENBQUM2Z0IsV0FBRixHQUFjLENBQW5FLEVBQXFFN2dCLENBQUMsQ0FBQzhnQixpQkFBRixHQUFvQixDQUFDLENBQTFGLEVBQTRGbmhCLENBQUMsQ0FBQzBZLFNBQUYsQ0FBWXZELFdBQVosQ0FBd0I5VSxDQUF4QixDQUE1RixFQUF1SEwsQ0FBQyxDQUFDb2hCLE1BQUYsSUFBVWpnQixDQUFDLENBQUNkLENBQUQsRUFBRyxNQUFILEVBQVVMLENBQUMsQ0FBQ29oQixNQUFaLENBQWxJLEVBQXNKcGhCLENBQUMsQ0FBQ3FoQixPQUEzSixFQUFtSztBQUFDLFlBQUk1Z0IsQ0FBSjtBQUFBLFlBQU1FLENBQUMsR0FBQ1gsQ0FBQyxDQUFDMFksU0FBRixDQUFZdkQsV0FBWixDQUF3QmxWLENBQUMsQ0FBQzhVLGFBQUYsQ0FBZ0IsTUFBaEIsQ0FBeEIsQ0FBUjtBQUF5RCxZQUFHcFUsQ0FBQyxDQUFDMmdCLE1BQUYsR0FBU2poQixDQUFDLENBQUN1TyxJQUFYLEVBQWdCak8sQ0FBQyxDQUFDNGdCLE1BQUYsR0FBU2hoQixDQUF6QixFQUEyQkksQ0FBQyxDQUFDc2EsTUFBRixHQUFTLE1BQXBDLEVBQTJDLGFBQVduTyxFQUFFLENBQUM5TSxDQUFDLENBQUNxaEIsT0FBSCxDQUEzRCxFQUF1RSxLQUFJLElBQUl0Z0IsQ0FBUixJQUFhZixDQUFDLENBQUNxaEIsT0FBZjtBQUF1QnJoQixXQUFDLENBQUNxaEIsT0FBRixDQUFVdmdCLGNBQVYsQ0FBeUJDLENBQXpCLE1BQThCRixDQUFDLEdBQUNKLENBQUMsR0FBQ1IsQ0FBQyxDQUFDOFUsYUFBRixDQUFnQixrQkFBZ0JoVSxDQUFoQixHQUFrQixLQUFsQyxDQUFILEdBQTRDLENBQUNOLENBQUMsR0FBQ1IsQ0FBQyxDQUFDOFUsYUFBRixDQUFnQixPQUFoQixDQUFILEVBQTZCbkcsSUFBN0IsR0FBa0M3TixDQUEvRSxFQUFpRk4sQ0FBQyxDQUFDaUUsS0FBRixHQUFRMUUsQ0FBQyxDQUFDcWhCLE9BQUYsQ0FBVXRnQixDQUFWLENBQXpGLEVBQXNHSixDQUFDLENBQUN3VSxXQUFGLENBQWMxVSxDQUFkLENBQXBJO0FBQXZCO0FBQTZLRSxTQUFDLENBQUMwVixNQUFGLElBQVcxVixDQUFDLENBQUM2Z0IsVUFBRixDQUFhcE0sV0FBYixDQUF5QnpVLENBQXpCLENBQVg7QUFBdUMsT0FBeGYsTUFBNmZOLENBQUMsQ0FBQ2pCLEdBQUYsR0FBTW1CLENBQU47O0FBQVEsYUFBT1AsQ0FBQyxDQUFDNGdCLEtBQUYsQ0FBUXhoQixHQUFSLEdBQVltQixDQUFaLEVBQWNGLENBQXJCO0FBQXVCOztBQUFBLGFBQVMwRCxDQUFULENBQVcvRCxDQUFYLEVBQWE7QUFBQyxhQUFPQSxDQUFDLENBQUNrQyxPQUFGLENBQVUsb0JBQVYsRUFBK0IsTUFBL0IsRUFBdUNBLE9BQXZDLENBQStDLE9BQS9DLEVBQXVELEtBQXZELEVBQThEQSxPQUE5RCxDQUFzRSxLQUF0RSxFQUE0RSxHQUE1RSxDQUFQO0FBQXdGOztBQUFBLGFBQVNnQyxDQUFULENBQVczRCxDQUFYLEVBQWE7QUFBQyxVQUFJRSxDQUFKO0FBQUEsVUFBTUUsQ0FBQyxHQUFDSixDQUFDLENBQUNzUSxRQUFWO0FBQW1CLFVBQUd0USxDQUFDLENBQUNraEIsTUFBRixHQUFTbGhCLENBQUMsQ0FBQ2toQixNQUFGLElBQVVqZSxDQUFDLENBQUNELENBQUMsQ0FBQ21lLEtBQUgsQ0FBcEIsRUFBOEJwZixDQUFDLEdBQUMvQixDQUFDLENBQUNpZ0IsSUFBRixJQUFRLENBQUMsQ0FBekMsRUFBMkNqZ0IsQ0FBQyxDQUFDcWdCLEtBQUYsS0FBVXJnQixDQUFDLENBQUNxZ0IsS0FBRixHQUFRLEVBQWxCLENBQTNDLEVBQWlFcmdCLENBQUMsQ0FBQ2toQixNQUF0RSxFQUE2RWxoQixDQUFDLENBQUNvaEIsTUFBRixHQUFTdGUsQ0FBQyxDQUFDOUMsQ0FBQyxDQUFDb2hCLE1BQUgsQ0FBVixFQUFxQnBoQixDQUFDLENBQUNpUyxPQUFGLEdBQVVqUyxDQUFDLENBQUNpUyxPQUFGLElBQVcsWUFBVWpSLENBQUMsRUFBckQsRUFBd0RoQixDQUFDLENBQUNxaEIsTUFBRixHQUFTcmMsSUFBSSxDQUFDcUYsTUFBTCxHQUFjNUosUUFBZCxDQUF1QixFQUF2QixFQUEyQmtkLFNBQTNCLENBQXFDLENBQXJDLENBQWpFLEVBQXlHMWEsQ0FBQyxDQUFDN0MsQ0FBRCxDQUFELEtBQU9BLENBQUMsR0FBQ3lDLENBQUMsQ0FBQy9DLENBQUMsQ0FBQ2dVLElBQUgsQ0FBRCxJQUFXalIsQ0FBQyxDQUFDN0MsQ0FBQyxDQUFDb2hCLE1BQUgsQ0FBWixHQUF1QixHQUF2QixHQUEyQm5mLENBQUMsQ0FBQ3hDLENBQUQsRUFBRyxhQUFILENBQUQsSUFBb0J3QyxDQUFDLENBQUN2QyxDQUFELEVBQUcsYUFBSCxDQUFyQixHQUF1QyxHQUF2QyxHQUEyQ00sQ0FBQyxDQUFDc2hCLEdBQUYsSUFBT3JmLENBQUMsQ0FBQ3hDLENBQUQsRUFBRyxlQUFILENBQVIsSUFBNkIyQyxDQUFDLEVBQTlCLEdBQWlDLEdBQWpDLEdBQXFDLFlBQVU4TSxTQUFTLENBQUNxUyxPQUFwQixJQUE2QixrQkFBaUI5aEIsQ0FBOUMsSUFBaUQsQ0FBQyxDQUFELElBQUl5UCxTQUFTLENBQUNJLFNBQVYsQ0FBb0JyRixPQUFwQixDQUE0QixRQUE1QixDQUFyRCxHQUEyRixHQUEzRixHQUErRmpLLENBQUMsQ0FBQ3doQixZQUFGLEdBQWUsR0FBZixHQUFtQixHQUF0TyxDQUF6RyxDQUE3RSxLQUFzYSxJQUFHeGhCLENBQUMsQ0FBQ2lTLE9BQUYsR0FBVWpQLENBQUMsQ0FBQ3llLEtBQUYsQ0FBUTlmLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNEIsRUFBNUIsQ0FBVixFQUEwQzNCLENBQUMsQ0FBQ3FoQixNQUFGLEdBQVNyZSxDQUFDLENBQUMwZSxLQUFyRCxFQUEyRDFoQixDQUFDLENBQUNvaEIsTUFBRixHQUFTcGUsQ0FBQyxDQUFDMmUsS0FBRixDQUFRaGdCLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNEIsRUFBNUIsQ0FBcEUsRUFBb0d2QixDQUFDLEdBQUM0QyxDQUFDLENBQUNtZSxLQUF4RyxFQUE4R25oQixDQUFDLENBQUM0aEIsR0FBRixJQUFPLENBQUMsVUFBU25pQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLG9CQUFVLE9BQU9ELENBQWpCLEtBQXFCQSxDQUFDLEdBQUMsQ0FBQ0EsQ0FBRCxDQUF2Qjs7QUFBNEIsYUFBSSxJQUFJSyxDQUFKLEVBQU1FLENBQUMsR0FBQ1AsQ0FBQyxDQUFDK0IsTUFBZCxFQUFxQnhCLENBQUMsRUFBdEI7QUFBMEIsY0FBR0YsQ0FBQyxHQUFDLFFBQU1MLENBQUMsQ0FBQ08sQ0FBRCxDQUFELENBQUs2aEIsTUFBTCxDQUFZLENBQVosRUFBYyxDQUFkLENBQU4sSUFBd0IsUUFBTXBpQixDQUFDLENBQUNPLENBQUQsQ0FBRCxDQUFLNmhCLE1BQUwsQ0FBWXBpQixDQUFDLENBQUNPLENBQUQsQ0FBRCxDQUFLd0IsTUFBTCxHQUFZLENBQXhCLEVBQTBCLENBQTFCLENBQTlCLEdBQTJEL0IsQ0FBQyxDQUFDTyxDQUFELENBQTVELEdBQWdFLE1BQUl3RCxDQUFDLENBQUMvRCxDQUFDLENBQUNPLENBQUQsQ0FBRixDQUFMLEdBQVksR0FBOUUsRUFBa0YsQ0FBQ0YsQ0FBQyxHQUFDLElBQUlzRCxNQUFKLENBQVd0RCxDQUFYLENBQUgsRUFBa0IyQixJQUFsQixDQUF1Qi9CLENBQXZCLENBQXJGLEVBQStHLE9BQU0sQ0FBQyxDQUFQO0FBQXpJOztBQUFrSixlQUFNLENBQUMsQ0FBUDtBQUFTLE9BQXJNLENBQXNNTSxDQUFDLENBQUM0aEIsR0FBeE0sRUFBNE01aEIsQ0FBQyxDQUFDb2hCLE1BQTlNLENBQXpILEVBQStVLE1BQU0sSUFBSWpXLEtBQUosQ0FBVSx1QkFBcUJuTCxDQUFDLENBQUNvaEIsTUFBakMsQ0FBTjs7QUFBK0MsY0FBT3BoQixDQUFDLENBQUNzUSxRQUFGLEdBQVdsUSxDQUFYLEVBQWFBLENBQXBCO0FBQXVCLGFBQUksR0FBSjtBQUFRLGNBQUdpRCxDQUFDLENBQUNyRCxDQUFELEVBQUc7QUFBQzhoQixvQkFBUSxFQUFDLEdBQVY7QUFBY0MsaUJBQUssRUFBQyxHQUFwQjtBQUF3QkMscUJBQVMsRUFBQyxDQUFDLENBQW5DO0FBQXFDQyxxQkFBUyxFQUFDLENBQUMsQ0FBaEQ7QUFBa0RDLHNCQUFVLEVBQUMsQ0FBQztBQUE5RCxXQUFILEVBQW9FLENBQUMsQ0FBckUsQ0FBRCxFQUF5RWxpQixDQUFDLENBQUNraEIsTUFBOUUsRUFBcUY7QUFBQyxnQkFBRyxDQUFDbGhCLENBQUMsQ0FBQ21pQixLQUFOLEVBQVk7QUFBQyxtQkFBSSxJQUFJN2hCLENBQUosRUFBTUksQ0FBQyxHQUFDWixDQUFDLENBQUN3USxRQUFGLEdBQVcsSUFBWCxHQUFnQnhRLENBQUMsQ0FBQzhmLElBQTFCLEVBQStCaGYsQ0FBQyxHQUFDbEIsQ0FBQyxDQUFDaVYsSUFBRixDQUFPeU4sb0JBQVAsQ0FBNEIsS0FBNUIsQ0FBakMsRUFBb0V2aEIsQ0FBQyxHQUFDRCxDQUFDLENBQUNZLE1BQTVFLEVBQW1GWCxDQUFDLEVBQXBGO0FBQXdGLG9CQUFHLENBQUNQLENBQUMsR0FBQ00sQ0FBQyxDQUFDQyxDQUFELENBQUosRUFBU2hDLEdBQVQsQ0FBYThlLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBeUJqZCxDQUFDLENBQUNjLE1BQTNCLE1BQXFDZCxDQUF4QyxFQUEwQztBQUFDVixtQkFBQyxDQUFDbWlCLEtBQUYsR0FBUTdoQixDQUFDLENBQUN6QixHQUFWO0FBQWM7QUFBTTtBQUF2Sjs7QUFBdUptQixlQUFDLENBQUNtaUIsS0FBRixLQUFVbmlCLENBQUMsQ0FBQ21pQixLQUFGLEdBQVExaUIsQ0FBbEI7QUFBcUI7O0FBQUEsZ0JBQUlxQixDQUFDLEdBQUM7QUFBQzJnQixtQkFBSyxFQUFDemhCLENBQUMsQ0FBQ2lTLE9BQVQ7QUFBaUJrUCxtQkFBSyxFQUFDO0FBQXZCLGFBQU47QUFBZ0NuaEIsYUFBQyxDQUFDbWlCLEtBQUYsS0FBVTFpQixDQUFWLElBQWFPLENBQUMsQ0FBQ2tpQixVQUFGLEdBQWEsQ0FBQyxDQUFkLEVBQWdCbGlCLENBQUMsQ0FBQ2lpQixTQUFGLEdBQVksQ0FBQyxDQUE3QixFQUErQmppQixDQUFDLENBQUNtaUIsS0FBRixHQUFRcmlCLENBQUMsQ0FBQ3dRLFFBQUYsR0FBVyxJQUFYLEdBQWdCeFEsQ0FBQyxDQUFDOGYsSUFBbEIsR0FBdUI5ZixDQUFDLENBQUM0ZixRQUF6QixHQUFrQzVmLENBQUMsQ0FBQ2tnQixNQUEzRSxFQUFrRmxmLENBQUMsQ0FBQzZnQixLQUFGLEdBQVEzaEIsQ0FBQyxDQUFDbWlCLEtBQTVGLEVBQWtHcmhCLENBQUMsQ0FBQ3VoQixNQUFGLEdBQVMsQ0FBeEgsSUFBMkh2aEIsQ0FBQyxDQUFDNmdCLEtBQUYsR0FBUTdlLENBQUMsQ0FBQzlDLENBQUMsQ0FBQ21pQixLQUFILENBQXBJLEVBQThJbmlCLENBQUMsQ0FBQ21ZLFNBQUYsS0FBY25ZLENBQUMsQ0FBQ2dpQixTQUFGLEdBQVksQ0FBQyxDQUFiLEVBQWVsaEIsQ0FBQyxDQUFDd2hCLE1BQUYsR0FBUyxDQUF0QyxDQUE5SSxFQUF1THRpQixDQUFDLENBQUNvaEIsTUFBRixHQUFTcmUsQ0FBQyxDQUFDL0MsQ0FBQyxDQUFDb2hCLE1BQUgsRUFBVXRnQixDQUFWLENBQWpNO0FBQThNLFdBQTdmLE1BQWtnQnVDLENBQUMsQ0FBQ3JELENBQUQsRUFBRztBQUFDaWlCLHFCQUFTLEVBQUMsQ0FBQ2hmLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDcWYsTUFBSCxDQUFiO0FBQXdCSCxzQkFBVSxFQUFDLENBQUNqZixDQUFDLENBQUNELENBQUMsQ0FBQ3NmLE1BQUgsQ0FBckM7QUFBZ0ROLHFCQUFTLEVBQUMsQ0FBQ2hpQixDQUFDLENBQUNpaUIsU0FBSCxJQUFjamlCLENBQUMsQ0FBQ2dpQjtBQUExRSxXQUFILENBQUQ7O0FBQTBGOWhCLFdBQUMsR0FBQyxDQUFDLElBQUlmLENBQUMsQ0FBQ29qQixLQUFGLENBQVFDLGFBQVosQ0FBMEJ4aUIsQ0FBMUIsQ0FBRCxFQUE4QixJQUFJYixDQUFDLENBQUNvakIsS0FBRixDQUFRRSxnQkFBWixDQUE2QixFQUE3QixDQUE5QixFQUErRCxJQUFJdGpCLENBQUMsQ0FBQ29qQixLQUFGLENBQVFHLGFBQVosQ0FBMEI7QUFBQ0Msa0JBQU0sRUFBQyxDQUFDLENBQVQ7QUFBV0MscUJBQVMsRUFBQyxNQUFJNWlCLENBQUMsQ0FBQ29oQixNQUFGLENBQVM1ZjtBQUFsQyxXQUExQixDQUEvRCxFQUFvSSxJQUFJckMsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUU0sY0FBWixDQUEyQjtBQUFDQyxvQkFBUSxFQUFDOWlCLENBQUMsQ0FBQ2toQjtBQUFaLFdBQTNCLENBQXBJLENBQUY7QUFBdUw7O0FBQU0sYUFBSSxHQUFKO0FBQVFoaEIsV0FBQyxHQUFDLENBQUMsSUFBSWYsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUVEsb0JBQVosQ0FBaUMvaUIsQ0FBakMsQ0FBRCxDQUFGO0FBQXdDOztBQUFNLGFBQUksR0FBSjtBQUFRQSxXQUFDLENBQUNraEIsTUFBRixLQUFXbGhCLENBQUMsQ0FBQ3doQixZQUFGLEdBQWUxZSxDQUFDLENBQUM5QyxDQUFDLENBQUN3aEIsWUFBSCxDQUEzQixHQUE2Q3RoQixDQUFDLEdBQUMsQ0FBQyxJQUFJZixDQUFDLENBQUNvakIsS0FBRixDQUFRUyxhQUFaLENBQTBCaGpCLENBQTFCLENBQUQsRUFBOEIsSUFBSWIsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUUcsYUFBWixFQUE5QixFQUF3RCxJQUFJdmpCLENBQUMsQ0FBQ29qQixLQUFGLENBQVFNLGNBQVosQ0FBMkI7QUFBQ0Msb0JBQVEsRUFBQzlpQixDQUFDLENBQUNraEI7QUFBWixXQUEzQixDQUF4RCxDQUEvQztBQUF3Sjs7QUFBTSxhQUFJLEdBQUo7QUFBUWhoQixXQUFDLEdBQUMsQ0FBQyxJQUFJZixDQUFDLENBQUNvakIsS0FBRixDQUFRVSxZQUFaLENBQXlCampCLENBQXpCLENBQUQsQ0FBRjtBQUFnQzs7QUFBTSxhQUFJLEdBQUo7QUFBUUUsV0FBQyxHQUFDLENBQUMsSUFBSWYsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUVcsbUJBQVosQ0FBZ0NsakIsQ0FBaEMsQ0FBRCxDQUFGO0FBQXVDOztBQUFNLGFBQUksR0FBSjtBQUFRRSxXQUFDLEdBQUMsQ0FBQyxJQUFJZixDQUFDLENBQUNvakIsS0FBRixDQUFRWSxxQkFBWixDQUFrQ25qQixDQUFsQyxDQUFELENBQUY7QUFBeUM7O0FBQU0sYUFBSSxHQUFKO0FBQVFRLFdBQUMsSUFBRTRCLENBQUMsRUFBSixFQUFPbEMsQ0FBQyxHQUFDLENBQUMsSUFBSWYsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUWEsY0FBWixDQUEyQnBqQixDQUEzQixDQUFELENBQVQ7QUFBdHJDOztBQUErdEMsYUFBT0UsQ0FBQyxDQUFDcUgsSUFBRixDQUFPLElBQUlwSSxDQUFDLENBQUNvakIsS0FBRixDQUFRRyxhQUFaLENBQTBCO0FBQUNXLFlBQUksRUFBQ3JqQixDQUFDLENBQUNxakIsSUFBUjtBQUFhQyxjQUFNLEVBQUMsQ0FBQztBQUFyQixPQUExQixDQUFQLEdBQTJEcGpCLENBQWxFO0FBQW9FOztBQUFBLGFBQVMwRCxDQUFULENBQVduRSxDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUlDLENBQUosRUFBTUksQ0FBQyxHQUFDO0FBQUN5akIsZ0JBQVEsRUFBQyxrQkFBUzlqQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQUs4akIsRUFBTCxDQUFRRCxRQUFSLENBQWlCOWpCLENBQWpCLEVBQW1CQyxDQUFuQjtBQUFzQixTQUE5QztBQUErQytqQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsZUFBS2drQixJQUFMLENBQVVELFFBQVYsQ0FBbUJoa0IsQ0FBbkIsRUFBcUJDLENBQXJCO0FBQXdCLFNBQTlGO0FBQStGaWtCLGdCQUFRLEVBQUMsa0JBQVNsa0IsQ0FBVCxFQUFXO0FBQUMsZUFBSytqQixFQUFMLENBQVFHLFFBQVIsQ0FBaUJsa0IsQ0FBakI7QUFBb0IsU0FBeEk7QUFBeUlta0IsWUFBSSxFQUFDLGdCQUFVO0FBQUMsZUFBS0YsSUFBTCxDQUFVRSxJQUFWO0FBQWlCLFNBQTFLO0FBQTJLQyxlQUFPLEVBQUMsbUJBQVU7QUFBQyxlQUFLSCxJQUFMLENBQVVHLE9BQVY7QUFBb0I7QUFBbE4sT0FBUixFQUE0TjdqQixDQUFDLEdBQUMsQ0FBOU4sRUFBZ09FLENBQUMsR0FBQ1QsQ0FBQyxDQUFDK0IsTUFBeE8sRUFBK094QixDQUFDLEdBQUNFLENBQWpQLEVBQW1QRixDQUFDLEVBQXBQO0FBQXVQcUQsU0FBQyxDQUFDM0QsQ0FBQyxHQUFDRCxDQUFDLENBQUNPLENBQUQsQ0FBSixFQUFRRixDQUFSLEVBQVUsQ0FBQyxDQUFYLENBQUQsRUFBZSxNQUFJRSxDQUFKLEtBQVFOLENBQUMsQ0FBQ2drQixJQUFGLEdBQU9qa0IsQ0FBQyxDQUFDTyxDQUFDLEdBQUMsQ0FBSCxDQUFoQixDQUFmLEVBQXNDQSxDQUFDLEtBQUdFLENBQUMsR0FBQyxDQUFOLEtBQVVSLENBQUMsQ0FBQzhqQixFQUFGLEdBQUsvakIsQ0FBQyxDQUFDTyxDQUFDLEdBQUMsQ0FBSCxDQUFoQixDQUF0QztBQUF2UDs7QUFBb1QsYUFBT04sQ0FBUDtBQUFTOztBQUFBMkQsS0FBQyxDQUFDbEUsQ0FBRCxFQUFHO0FBQUN3UCxhQUFPLEVBQUMsVUFBVDtBQUFvQm1WLFdBQUssRUFBQzlnQixDQUExQjtBQUE0QnVmLFdBQUssRUFBQyxFQUFsQztBQUFxQ2hmLFdBQUssRUFBQ0YsQ0FBM0M7QUFBNkMwZ0IsbUJBQWEsRUFBQzVnQixFQUEzRDtBQUE2RDZnQixlQUFTLEVBQUN4aEIsQ0FBdkU7QUFBeUV5aEIsZ0JBQVUsRUFBQyxvQkFBU3ZrQixDQUFULEVBQVc7QUFBQyxlQUFPRCxDQUFDLENBQUN5ZixPQUFGLEdBQVVyZCxDQUFWLEVBQVksQ0FBQ0QsQ0FBQyxHQUFDbEMsQ0FBSCxNQUFRb0MsQ0FBQyxHQUFDLGFBQVdGLENBQUMsQ0FBQ0QsT0FBRixDQUFVLEdBQVYsRUFBYyxHQUFkLENBQVgsR0FBOEIsR0FBeEMsQ0FBWixFQUF5RHhDLENBQWhFO0FBQWtFO0FBQWxLLEtBQUgsQ0FBRCxFQUF5S0EsQ0FBQyxDQUFDK2tCLFNBQUYsR0FBWTtBQUFDbFIsUUFBRSxFQUFDcFMsQ0FBSjtBQUFNNlMsUUFBRSxFQUFDNVMsQ0FBVDtBQUFXc2pCLGtCQUFZLEVBQUMsc0JBQVNya0IsQ0FBVCxFQUFXO0FBQUMsU0FBQyxVQUFTTCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFNLEVBQUUsWUFBVTZNLEVBQUUsQ0FBQzlNLENBQUMsQ0FBQ0MsQ0FBRCxDQUFGLENBQVosSUFBb0IsQ0FBQ0QsQ0FBQyxDQUFDQyxDQUFELENBQXhCLENBQU47QUFBbUMsU0FBbEQsRUFBb0RELENBQXBELEVBQXNELE1BQXRELEtBQStEQyxDQUFDLENBQUMwa0IsS0FBRixDQUFRLHlDQUF1Q3RrQixDQUF2QyxHQUF5QyxjQUFqRCxDQUEvRDtBQUFnSTtBQUFwSyxLQUFyTCxFQUEyVm9ELENBQUMsR0FBQyxFQUE3VixFQUFnVy9ELENBQUMsQ0FBQ29iLEVBQUYsR0FBSztBQUFDOEosU0FBRyxFQUFDLGFBQVM1a0IsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ3dELFNBQUMsQ0FBQ3pELENBQUQsQ0FBRCxHQUFLQyxDQUFMO0FBQU8sT0FBMUI7QUFBMkI0a0IsU0FBRyxFQUFDLGFBQVM3a0IsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxZQUFHd0QsQ0FBQyxDQUFDM0MsY0FBRixDQUFpQmQsQ0FBakIsQ0FBSCxFQUF1QjtBQUFDLGNBQUlLLENBQUMsR0FBQ29ELENBQUMsQ0FBQ3pELENBQUQsQ0FBUDtBQUFXLGlCQUFPQyxDQUFDLElBQUUsT0FBT3dELENBQUMsQ0FBQ3pELENBQUQsQ0FBWCxFQUFlSyxDQUF0QjtBQUF3QjtBQUFDO0FBQXpHLEtBQXJXLEVBQWdkWCxDQUFDLENBQUNvbEIsTUFBRixHQUFTLFVBQVM5a0IsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDRCxDQUFDLENBQUNsRSxDQUFELENBQUQsQ0FBSzZKLE1BQUwsQ0FBWSxDQUFDO0FBQUNpYSxnQkFBUSxFQUFDLGtCQUFTN2pCLENBQVQsRUFBV0ksQ0FBWCxFQUFhO0FBQUNMLFdBQUMsQ0FBQytrQixTQUFGLENBQVk5a0IsQ0FBWixFQUFjSSxDQUFkO0FBQWlCLFNBQXpDO0FBQTBDNmpCLGdCQUFRLEVBQUMsa0JBQVNqa0IsQ0FBVCxFQUFXO0FBQUNELFdBQUMsQ0FBQ2dsQixPQUFGLElBQVdobEIsQ0FBQyxDQUFDZ2xCLE9BQUYsQ0FBVS9rQixDQUFWLENBQVg7QUFBd0I7QUFBdkYsT0FBRCxDQUFaLENBQUQsQ0FBUDtBQUFBLFVBQWlISSxDQUFDLEdBQUMrQyxDQUFDLENBQUNwRCxDQUFDLENBQUMyaEIsTUFBSCxDQUFwSDtBQUErSCxXQUFLcE0sTUFBTCxHQUFZblMsQ0FBQyxDQUFDcEQsQ0FBQyxDQUFDMmhCLE1BQUgsQ0FBYixFQUF3QixLQUFLeUMsT0FBTCxHQUFhLFlBQVU7QUFBQ25rQixTQUFDLENBQUNta0IsT0FBRjtBQUFZLE9BQTVELEVBQTZELEtBQUt2RyxXQUFMLEdBQWlCLFVBQVM3ZCxDQUFULEVBQVc7QUFBQ0MsU0FBQyxDQUFDK2pCLFFBQUYsQ0FBV2hrQixDQUFYLEVBQWFLLENBQWI7QUFBZ0IsT0FBMUcsRUFBMkdKLENBQUMsQ0FBQ2trQixJQUFGLEVBQTNHO0FBQW9ILEtBQXh0QixFQUF5dEJ6a0IsQ0FBQyxDQUFDdWxCLEdBQUYsR0FBTSxVQUFTamxCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBR0EsQ0FBQyxDQUFDeWlCLEtBQUwsRUFBVyxLQUFJLElBQUlyaUIsQ0FBUixJQUFhSixDQUFDLENBQUN5aUIsS0FBZjtBQUFxQixZQUFHemlCLENBQUMsQ0FBQ3lpQixLQUFGLENBQVE1aEIsY0FBUixDQUF1QlQsQ0FBdkIsQ0FBSCxFQUE2QjtBQUFDLGNBQUlFLENBQUMsR0FBQ04sQ0FBQyxDQUFDeWlCLEtBQUYsQ0FBUXJpQixDQUFSLENBQU47QUFBaUIsd0JBQVksT0FBT0UsQ0FBbkIsS0FBdUJOLENBQUMsQ0FBQ3lpQixLQUFGLENBQVFyaUIsQ0FBUixJQUFXO0FBQUM0YSxrQkFBTSxFQUFDMWE7QUFBUixXQUFsQztBQUE4QztBQUFsSDtBQUFrSCxVQUFJRSxDQUFDLEdBQUMwRCxDQUFDLENBQUNELENBQUMsQ0FBQ2xFLENBQUQsQ0FBRCxDQUFLNkosTUFBTCxDQUFZLENBQUMsSUFBSW5LLENBQUMsQ0FBQ29qQixLQUFGLENBQVFvQyxXQUFaLENBQXdCLElBQXhCLEVBQTZCamxCLENBQTdCLENBQUQsRUFBaUM7QUFBQ2lrQixnQkFBUSxFQUFDLGtCQUFTamtCLENBQVQsRUFBVztBQUFDRCxXQUFDLENBQUNnbEIsT0FBRixJQUFXaGxCLENBQUMsQ0FBQ2dsQixPQUFGLENBQVUva0IsQ0FBVixDQUFYO0FBQXdCO0FBQTlDLE9BQWpDLENBQVosQ0FBRCxDQUFQO0FBQXdHLFdBQUtzVixNQUFMLEdBQVluUyxDQUFDLENBQUNwRCxDQUFDLENBQUMyaEIsTUFBSCxDQUFiLEVBQXdCLEtBQUt3RCxPQUFMLEdBQWFubEIsQ0FBQyxDQUFDbWxCLE9BQUYsSUFBVyxJQUFoRCxFQUFxRCxLQUFLZixPQUFMLEdBQWEsWUFBVTtBQUFDM2pCLFNBQUMsQ0FBQzJqQixPQUFGO0FBQVksT0FBekYsRUFBMEYzakIsQ0FBQyxDQUFDMGpCLElBQUYsRUFBMUY7QUFBbUcsS0FBcmpDLEVBQXNqQ3prQixDQUFDLENBQUNvakIsS0FBRixDQUFRVyxtQkFBUixHQUE0QixVQUFTempCLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUosRUFBTVEsQ0FBTixFQUFRRSxDQUFSLEVBQVVFLENBQVY7QUFBWSxhQUFPWixDQUFDLEdBQUM7QUFBQytqQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQ00sV0FBQyxDQUFDWCxDQUFELENBQUQsRUFBS0ssQ0FBQyxJQUFFQSxDQUFDLEVBQVQ7QUFBWSxTQUF0QztBQUF1QytqQixlQUFPLEVBQUMsbUJBQVU7QUFBQzNqQixXQUFDLEtBQUdBLENBQUMsQ0FBQytnQixVQUFGLENBQWFwTSxXQUFiLENBQXlCM1UsQ0FBekIsR0FBNEJBLENBQUMsR0FBQyxJQUFqQyxDQUFEO0FBQXdDLFNBQWxHO0FBQW1HMmtCLGtCQUFVLEVBQUMsc0JBQVU7QUFBQ3ZrQixXQUFDLEdBQUN1QyxDQUFDLENBQUNwRCxDQUFDLENBQUMyaEIsTUFBSCxDQUFILEVBQWMzaEIsQ0FBQyxDQUFDeWhCLE1BQUYsSUFBVTdkLENBQUMsQ0FBQzVELENBQUMsQ0FBQzRnQixLQUFILEVBQVM7QUFBQ3hoQixlQUFHLEVBQUNrRSxDQUFDLENBQUN0RCxDQUFDLENBQUMyaEIsTUFBSCxFQUFVO0FBQUNPLG1CQUFLLEVBQUM3aEIsQ0FBQyxDQUFDd1EsUUFBRixHQUFXLElBQVgsR0FBZ0J4USxDQUFDLENBQUM4ZixJQUFsQixHQUF1QjlmLENBQUMsQ0FBQzRmLFFBQWhDO0FBQXlDK0IsbUJBQUssRUFBQ2hpQixDQUFDLENBQUN3UyxPQUFqRDtBQUF5RGtQLG1CQUFLLEVBQUM7QUFBL0QsYUFBVixDQUFOO0FBQW1GOVMsZ0JBQUksRUFBQ3ZNLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3dTLE9BQUosR0FBWTtBQUFwRyxXQUFULENBQUQsRUFBNEgvUixDQUFDLEdBQUNvRCxDQUFDLENBQUM3RCxDQUFELENBQS9ILEVBQW1JTixDQUFDLENBQUNvYixFQUFGLENBQUs4SixHQUFMLENBQVM1a0IsQ0FBQyxDQUFDd1MsT0FBWCxFQUFvQixVQUFTeFMsQ0FBVCxFQUFXO0FBQUMsbUJBQU9XLENBQUMsR0FBQ1gsQ0FBRixFQUFJTyxDQUFDLENBQUUsWUFBVTtBQUFDTixlQUFDLENBQUM4akIsRUFBRixDQUFLRyxRQUFMLENBQWMsQ0FBQyxDQUFmO0FBQWtCLGFBQS9CLEVBQWlDLENBQWpDLENBQUwsRUFBeUMsVUFBU2xrQixDQUFULEVBQVc7QUFBQ0MsZUFBQyxDQUFDOGpCLEVBQUYsQ0FBS0QsUUFBTCxDQUFjOWpCLENBQWQsRUFBZ0JhLENBQWhCO0FBQW1CLGFBQS9FO0FBQWdGLFdBQWhILENBQTdJLEtBQWtRRixDQUFDLEdBQUMsWUFBVTtBQUFDLGdCQUFJWCxDQUFDLEdBQUNxbEIsTUFBTjtBQUFhLGdCQUFHLE9BQUtsakIsQ0FBUixFQUFVLEtBQUksSUFBSWxDLENBQUMsR0FBQyxDQUFOLEVBQVFJLENBQUMsR0FBQzhCLENBQUMsQ0FBQ2dOLEtBQUYsQ0FBUSxHQUFSLENBQWQsRUFBMkJsUCxDQUFDLEdBQUNJLENBQUMsQ0FBQzBCLE1BQS9CLEVBQXNDOUIsQ0FBQyxFQUF2QztBQUEwQ0QsZUFBQyxHQUFDQSxDQUFDLENBQUNLLENBQUMsQ0FBQ0osQ0FBRCxDQUFGLENBQUg7QUFBMUM7QUFBb0QsbUJBQU9ELENBQUMsQ0FBQ3lmLE9BQVQ7QUFBaUIsV0FBdkcsR0FBMEczRSxFQUExRyxDQUE2RytKLEdBQTdHLENBQWlIN2tCLENBQUMsQ0FBQ3dTLE9BQW5ILEVBQTJILENBQUMsQ0FBNUgsRUFBZ0ksVUFBU3hTLENBQVQsRUFBVztBQUFDQyxhQUFDLENBQUM4akIsRUFBRixDQUFLRCxRQUFMLENBQWM5akIsQ0FBZCxFQUFnQmEsQ0FBaEI7QUFBbUIsV0FBL0osQ0FBRixFQUFvS04sQ0FBQyxDQUFFLFlBQVU7QUFBQ04sYUFBQyxDQUFDOGpCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZjtBQUFrQixXQUEvQixFQUFpQyxDQUFqQyxDQUF2YSxDQUFkO0FBQTBkLFNBQW5sQjtBQUFvbEJDLFlBQUksRUFBQyxnQkFBVTtBQUFDcGhCLFdBQUMsQ0FBQzlDLENBQUMsQ0FBQ21sQixVQUFILEVBQWNubEIsQ0FBZCxDQUFEO0FBQWtCO0FBQXRuQixPQUFUO0FBQWlvQixLQUEzdUQsRUFBNHVEUCxDQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLEdBQXVCLFVBQVMzakIsQ0FBVCxFQUFXO0FBQUMsVUFBSVMsQ0FBSixFQUFNSSxDQUFOLEVBQVFFLENBQVIsRUFBVUksQ0FBVixFQUFZQyxDQUFaOztBQUFjLGVBQVNHLENBQVQsQ0FBV3ZCLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNNLFNBQUMsQ0FBRSxZQUFVO0FBQUNFLFdBQUMsQ0FBQ3NqQixFQUFGLENBQUtELFFBQUwsQ0FBYzlqQixDQUFkLEVBQWdCZSxDQUFoQjtBQUFtQixTQUFoQyxFQUFrQyxDQUFsQyxDQUFEO0FBQXNDOztBQUFBLGVBQVNTLENBQVQsQ0FBV25CLENBQVgsRUFBYTtBQUFDLFlBQUlFLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNmhCLEdBQUYsR0FBTSxRQUFOLEdBQWU3aEIsQ0FBQyxDQUFDeWhCLE1BQXZCO0FBQUEsWUFBOEJoaEIsQ0FBQyxHQUFDLGlCQUFlOEUsSUFBSSxDQUFDaWEsS0FBTCxDQUFXLE1BQUlqYSxJQUFJLENBQUNxRixNQUFMLEVBQWYsQ0FBL0M7QUFBNkVsTCxTQUFDLENBQUNvYixFQUFGLENBQUs4SixHQUFMLENBQVMsaUJBQWV2a0IsQ0FBQyxDQUFDNkIsT0FBRixDQUFVLFFBQVYsRUFBbUIsR0FBbkIsQ0FBeEIsRUFBaUQsWUFBVTtBQUFDeEMsV0FBQyxDQUFDb2pCLEtBQUYsQ0FBUWEsY0FBUixDQUF1QnRqQixDQUF2QixFQUEwQndoQixHQUExQixHQUE4QjFnQixDQUFDLEdBQUNDLENBQUMsQ0FBQ2trQixVQUFsQzs7QUFBNkMsZUFBSSxJQUFJdGxCLENBQUMsR0FBQ04sQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUWEsY0FBUixDQUF1QnRqQixDQUF2QixFQUEwQmtsQixLQUFoQyxFQUFzQ3RsQixDQUFDLEdBQUMsQ0FBNUMsRUFBOENBLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK0IsTUFBbEQsRUFBeUQ5QixDQUFDLEVBQTFEO0FBQTZERCxhQUFDLENBQUNDLENBQUQsQ0FBRDtBQUE3RDs7QUFBb0VELFdBQUMsQ0FBQytCLE1BQUYsR0FBUyxDQUFUO0FBQVcsU0FBeEwsR0FBMkwvQixDQUFDLENBQUN3bEIsWUFBRixHQUFlcGtCLENBQUMsR0FBQyxZQUFVLE9BQU9wQixDQUFDLENBQUN3bEIsWUFBbkIsR0FBZ0N2bEIsQ0FBQyxDQUFDNGdCLGNBQUYsQ0FBaUI3Z0IsQ0FBQyxDQUFDd2xCLFlBQW5CLENBQWhDLEdBQWlFeGxCLENBQUMsQ0FBQ3dsQixZQUFwRixJQUFrRzVoQixDQUFDLENBQUMsQ0FBQ3hDLENBQUMsR0FBQ25CLENBQUMsQ0FBQzhVLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBSCxFQUEyQitMLEtBQTVCLEVBQWtDN2YsQ0FBQyxJQUFFakIsQ0FBQyxDQUFDeWxCLGFBQUwsR0FBbUI7QUFBQ3RtQixnQkFBTSxFQUFDLE1BQVI7QUFBZUQsZUFBSyxFQUFDLE1BQXJCO0FBQTRCNmhCLGtCQUFRLEVBQUMsT0FBckM7QUFBNkMyRSxlQUFLLEVBQUMsQ0FBbkQ7QUFBcURwRixhQUFHLEVBQUM7QUFBekQsU0FBbkIsR0FBK0U7QUFBQ25oQixnQkFBTSxFQUFDLEtBQVI7QUFBY0QsZUFBSyxFQUFDLEtBQXBCO0FBQTBCNmhCLGtCQUFRLEVBQUMsVUFBbkM7QUFBOEM0RSxrQkFBUSxFQUFDLFFBQXZEO0FBQWdFRCxlQUFLLEVBQUMsQ0FBdEU7QUFBd0VwRixhQUFHLEVBQUM7QUFBNUUsU0FBakgsQ0FBRCxFQUFrTXJnQixDQUFDLENBQUNpVixJQUFGLENBQU9DLFdBQVAsQ0FBbUIvVCxDQUFuQixDQUFwUyxDQUEzTDtBQUFzZixZQUFJUCxDQUFDLEdBQUMsMEJBQXdCRixDQUFDLENBQUNOLENBQUMsQ0FBQzZCLE9BQUYsQ0FBVSxRQUFWLEVBQW1CLEdBQW5CLENBQUQsQ0FBekIsR0FBbUQsU0FBbkQsR0FBNkRiLENBQUMsQ0FBQ3VQLFFBQUYsQ0FBV0MsUUFBeEUsR0FBaUYsVUFBakYsR0FBNEZsUSxDQUFDLENBQUNxQyxDQUFDLENBQUMzQixDQUFDLENBQUN1UCxRQUFGLENBQVd5RCxJQUFaLENBQUYsQ0FBN0YsR0FBa0gsUUFBbEgsR0FBMkgxVCxDQUFDLENBQUMsVUFBU1gsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLENBQUMsQ0FBQ3dQLEtBQUYsQ0FBUTdOLENBQVIsRUFBVyxDQUFYLEtBQWUsRUFBdEI7QUFBeUIsU0FBckMsQ0FBc0NOLENBQUMsQ0FBQ3VQLFFBQUYsQ0FBV3lELElBQWpELENBQUQsQ0FBNUgsR0FBcUwsTUFBckwsR0FBNEwxVCxDQUFDLENBQUN3QixDQUFELENBQW5NO0FBQXVNZixTQUFDLENBQUN3a0IsU0FBRixHQUFZLDZFQUEyRW5sQixDQUEzRSxHQUE2RSxVQUE3RSxHQUF3RkYsQ0FBeEYsR0FBMEYsOEhBQTFGLEdBQXlOQSxDQUF6TixHQUEyTiwyQ0FBM04sR0FBdVFNLENBQXZRLEdBQXlRLG1FQUF6USxHQUE2VUEsQ0FBN1UsR0FBK1Usd0RBQS9VLEdBQXdZTixDQUF4WSxHQUEwWSwwQ0FBdFo7QUFBaWM7O0FBQUEsYUFBT0UsQ0FBQyxHQUFDO0FBQUN1akIsZ0JBQVEsRUFBQyxrQkFBUy9qQixDQUFULEVBQVdJLENBQVgsRUFBYUUsQ0FBYixFQUFlO0FBQUNZLFdBQUMsQ0FBQzBjLFdBQUYsQ0FBYzdkLENBQUMsQ0FBQ3dTLE9BQWhCLEVBQXdCdlMsQ0FBQyxDQUFDZSxRQUFGLEVBQXhCLEdBQXNDVCxDQUFDLElBQUVBLENBQUMsRUFBMUM7QUFBNkMsU0FBdkU7QUFBd0U2akIsZUFBTyxFQUFDLG1CQUFVO0FBQUMsY0FBRztBQUFDampCLGFBQUMsQ0FBQzBrQixjQUFGLENBQWlCN2xCLENBQUMsQ0FBQ3dTLE9BQW5CO0FBQTRCLFdBQWhDLENBQWdDLE9BQU14UyxDQUFOLEVBQVEsQ0FBRTs7QUFBQW1CLFdBQUMsR0FBQyxJQUFGLEVBQU9OLENBQUMsS0FBR0EsQ0FBQyxDQUFDMmdCLFVBQUYsQ0FBYXBNLFdBQWIsQ0FBeUJ2VSxDQUF6QixHQUE0QkEsQ0FBQyxHQUFDLElBQWpDLENBQVI7QUFBK0MsU0FBcEw7QUFBcUx1a0Isa0JBQVUsRUFBQyxzQkFBVTtBQUFDcmtCLFdBQUMsR0FBQ2YsQ0FBQyxDQUFDMmhCLE1BQUosRUFBV2ppQixDQUFDLENBQUNvYixFQUFGLENBQUs4SixHQUFMLENBQVMsV0FBUzVrQixDQUFDLENBQUN3UyxPQUFYLEdBQW1CLE9BQTVCLEVBQXFDLFlBQVU7QUFBQ2pTLGFBQUMsQ0FBRSxZQUFVO0FBQUNFLGVBQUMsQ0FBQ3NqQixFQUFGLENBQUtHLFFBQUwsQ0FBYyxDQUFDLENBQWY7QUFBa0IsYUFBL0IsQ0FBRDtBQUFtQyxXQUFuRixDQUFYLEVBQWlHeGtCLENBQUMsQ0FBQ29iLEVBQUYsQ0FBSzhKLEdBQUwsQ0FBUyxXQUFTNWtCLENBQUMsQ0FBQ3dTLE9BQVgsR0FBbUIsWUFBNUIsRUFBeUNqUixDQUF6QyxDQUFqRyxFQUE2SXZCLENBQUMsQ0FBQzZoQixHQUFGLEdBQU14ZSxDQUFDLENBQUNyRCxDQUFDLENBQUM2aEIsR0FBSCxDQUFwSjs7QUFBNEosY0FBSTVoQixDQUFDLEdBQUMrQyxDQUFDLENBQUNoRCxDQUFDLENBQUM2aEIsR0FBSCxDQUFQO0FBQUEsY0FBZWxoQixDQUFDLEdBQUMsU0FBRkEsQ0FBRSxHQUFVO0FBQUNqQixhQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLEVBQTBCa2tCLElBQTFCLEdBQStCLENBQUMsQ0FBaEMsRUFBa0MsQ0FBQ2hqQixDQUFDLEdBQUN6QixDQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLEVBQTBCNGhCLEdBQTdCLEVBQWtDaUUsYUFBbEMsQ0FBZ0Q5bEIsQ0FBQyxDQUFDd1MsT0FBbEQsRUFBMER4UyxDQUFDLENBQUM0aEIsTUFBNUQsRUFBbUV4ZSxDQUFDLENBQUNwRCxDQUFDLENBQUMyaEIsTUFBSCxDQUFwRSxFQUErRTNoQixDQUFDLENBQUN5aEIsTUFBakYsQ0FBbEMsRUFBMkh6aEIsQ0FBQyxDQUFDeWhCLE1BQUYsS0FBV3hnQixDQUFDLElBQUVqQixDQUFDLENBQUN5bEIsYUFBTCxJQUFvQjdoQixDQUFDLENBQUM1RCxDQUFDLENBQUM0Z0IsS0FBSCxFQUFTO0FBQUNHLHNCQUFRLEVBQUMsT0FBVjtBQUFrQjJFLG1CQUFLLEVBQUMsQ0FBeEI7QUFBMEJwRixpQkFBRyxFQUFDLENBQTlCO0FBQWdDbmhCLG9CQUFNLEVBQUMsTUFBdkM7QUFBOENELG1CQUFLLEVBQUM7QUFBcEQsYUFBVCxDQUFyQixFQUEyRjBFLENBQUMsQ0FBQzVELENBQUMsQ0FBQzRnQixLQUFILEVBQVM7QUFBQ3hoQixpQkFBRyxFQUFDa0UsQ0FBQyxDQUFDdEQsQ0FBQyxDQUFDMmhCLE1BQUgsRUFBVTtBQUFDTyxxQkFBSyxFQUFDOWUsQ0FBQyxDQUFDL0MsQ0FBQyxDQUFDZ1UsSUFBSCxDQUFSO0FBQWlCMk4scUJBQUssRUFBQ2hpQixDQUFDLENBQUN3UyxPQUF6QjtBQUFpQ2tQLHFCQUFLLEVBQUMsQ0FBdkM7QUFBeUNPLHFCQUFLLEVBQUNqaUIsQ0FBQyxDQUFDNGhCO0FBQWpELGVBQVYsQ0FBTjtBQUEwRWhULGtCQUFJLEVBQUN2TSxDQUFDLEdBQUNyQyxDQUFDLENBQUN3UyxPQUFKLEdBQVk7QUFBM0YsYUFBVCxDQUE1RixFQUE4TTNSLENBQUMsR0FBQ2dELENBQUMsQ0FBQzdELENBQUQsQ0FBNU4sQ0FBM0g7QUFBNFYsV0FBeFg7O0FBQXlYTixXQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLEtBQTJCUCxDQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLEVBQTBCa2tCLElBQXJELEdBQTBEeGpCLENBQUMsRUFBM0QsR0FBOERqQixDQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLElBQTBCUCxDQUFDLENBQUNvakIsS0FBRixDQUFRYSxjQUFSLENBQXVCMWpCLENBQXZCLEVBQTBCc2xCLEtBQTFCLENBQWdDemQsSUFBaEMsQ0FBcUNuSCxDQUFyQyxDQUExQixJQUFtRWpCLENBQUMsQ0FBQ29qQixLQUFGLENBQVFhLGNBQVIsQ0FBdUIxakIsQ0FBdkIsSUFBMEI7QUFBQ3NsQixpQkFBSyxFQUFDLENBQUM1a0IsQ0FBRDtBQUFQLFdBQTFCLEVBQXNDYSxDQUFDLENBQUN2QixDQUFELENBQTFHLENBQTlEO0FBQTZLLFNBQTc0QjtBQUE4NEJra0IsWUFBSSxFQUFDLGdCQUFVO0FBQUNwaEIsV0FBQyxDQUFDdEMsQ0FBQyxDQUFDMmtCLFVBQUgsRUFBYzNrQixDQUFkLENBQUQ7QUFBa0I7QUFBaDdCLE9BQVQ7QUFBMjdCLEtBQXYrSCxFQUF3K0hmLENBQUMsQ0FBQ29qQixLQUFGLENBQVFRLG9CQUFSLEdBQTZCLFVBQVNyakIsQ0FBVCxFQUFXO0FBQUMsVUFBSVEsQ0FBSixFQUFNRSxDQUFOLEVBQVFFLENBQVIsRUFBVUUsQ0FBVjs7QUFBWSxlQUFTRSxDQUFULENBQVdqQixDQUFYLEVBQWE7QUFBQyxZQUFHLFlBQVUsT0FBT0EsQ0FBQyxDQUFDc1YsSUFBdEIsRUFBMkI7QUFBQyxjQUFJL1UsQ0FBQyxHQUFDLFVBQVNQLENBQVQsRUFBVztBQUFDLGdCQUFHQSxDQUFDLENBQUN1VixNQUFMLEVBQVksT0FBT25TLENBQUMsQ0FBQ3BELENBQUMsQ0FBQ3VWLE1BQUgsQ0FBUjtBQUFtQixnQkFBR3ZWLENBQUMsQ0FBQytsQixHQUFMLEVBQVMsT0FBTzNpQixDQUFDLENBQUNwRCxDQUFDLENBQUMrbEIsR0FBSCxDQUFSO0FBQWdCLGdCQUFHL2xCLENBQUMsQ0FBQ2dtQixNQUFMLEVBQVksT0FBTzNsQixDQUFDLENBQUN3USxRQUFGLEdBQVcsSUFBWCxHQUFnQjdRLENBQUMsQ0FBQ2dtQixNQUF6QjtBQUFnQyxrQkFBSyw0Q0FBTDtBQUFrRCxXQUFsSyxDQUFtS2htQixDQUFuSyxDQUFOOztBQUE0S08sV0FBQyxJQUFFUSxDQUFILElBQU0sWUFBVSxPQUFPZixDQUFDLENBQUNzVixJQUF6QixJQUErQnRWLENBQUMsQ0FBQ3NWLElBQUYsQ0FBTzRJLFNBQVAsQ0FBaUIsQ0FBakIsRUFBbUJqZSxDQUFDLENBQUN1UyxPQUFGLENBQVV6USxNQUFWLEdBQWlCLENBQXBDLEtBQXdDOUIsQ0FBQyxDQUFDdVMsT0FBRixHQUFVLEdBQWpGLElBQXNGL1IsQ0FBQyxDQUFDc2pCLEVBQUYsQ0FBS0QsUUFBTCxDQUFjOWpCLENBQUMsQ0FBQ3NWLElBQUYsQ0FBTzRJLFNBQVAsQ0FBaUJqZSxDQUFDLENBQUN1UyxPQUFGLENBQVV6USxNQUFWLEdBQWlCLENBQWxDLENBQWQsRUFBbUR4QixDQUFuRCxDQUF0RjtBQUE0STtBQUFDOztBQUFBLGVBQVNjLENBQVQsQ0FBV2hCLENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUNpVixJQUFGLElBQVFyVixDQUFDLENBQUN1UyxPQUFGLEdBQVUsUUFBbEIsS0FBNkIzUixDQUFDLEdBQUMsaUJBQWdCRixDQUFDLENBQUNzbEIsYUFBbEIsR0FBZ0N0bEIsQ0FBQyxDQUFDc2xCLGFBQWxDLEdBQWdEdGxCLENBQUMsQ0FBQ3NsQixhQUFGLENBQWdCbmIsUUFBbEUsRUFBMkUxSixDQUFDLENBQUNwQixDQUFELEVBQUcsU0FBSCxFQUFhcUIsQ0FBYixDQUE1RSxFQUE0RkYsQ0FBQyxDQUFDbkIsQ0FBRCxFQUFHLFNBQUgsRUFBYWlCLENBQWIsQ0FBN0YsRUFBNkdWLENBQUMsQ0FBRSxZQUFVO0FBQUNFLFdBQUMsQ0FBQ3NqQixFQUFGLENBQUtHLFFBQUwsQ0FBYyxDQUFDLENBQWY7QUFBa0IsU0FBL0IsRUFBaUMsQ0FBakMsQ0FBM0k7QUFBZ0w7O0FBQUEsYUFBT3pqQixDQUFDLEdBQUM7QUFBQ3VqQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV0ssQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQ00sV0FBQyxDQUFDZ2QsV0FBRixDQUFjNWQsQ0FBQyxDQUFDdVMsT0FBRixHQUFVLEdBQVYsR0FBY3hTLENBQTVCLEVBQThCSyxDQUFDLElBQUVVLENBQWpDLEdBQW9DUixDQUFDLElBQUVBLENBQUMsRUFBeEM7QUFBMkMsU0FBckU7QUFBc0U2akIsZUFBTyxFQUFDLG1CQUFVO0FBQUNoakIsV0FBQyxDQUFDcEIsQ0FBRCxFQUFHLFNBQUgsRUFBYXFCLENBQWIsQ0FBRCxFQUFpQkQsQ0FBQyxDQUFDcEIsQ0FBRCxFQUFHLFNBQUgsRUFBYWlCLENBQWIsQ0FBbEIsRUFBa0NOLENBQUMsS0FBR0UsQ0FBQyxHQUFDLElBQUYsRUFBT0YsQ0FBQyxDQUFDNmdCLFVBQUYsQ0FBYXBNLFdBQWIsQ0FBeUJ6VSxDQUF6QixDQUFQLEVBQW1DQSxDQUFDLEdBQUMsSUFBeEMsQ0FBbkM7QUFBaUYsU0FBMUs7QUFBMkt5a0Isa0JBQVUsRUFBQyxzQkFBVTtBQUFDLHlCQUFhcmtCLENBQUMsR0FBQ3FDLENBQUMsQ0FBQ25ELENBQUMsQ0FBQzBoQixNQUFILENBQWhCLE1BQThCNWdCLENBQUMsR0FBQyxHQUFoQyxHQUFxQ2QsQ0FBQyxDQUFDd2hCLE1BQUYsSUFBVXRnQixDQUFDLENBQUNuQixDQUFELEVBQUcsU0FBSCxFQUFhcUIsQ0FBYixDQUFELEVBQWlCdUMsQ0FBQyxDQUFDM0QsQ0FBQyxDQUFDMmdCLEtBQUgsRUFBUztBQUFDeGhCLGVBQUcsRUFBQ2tFLENBQUMsQ0FBQ3JELENBQUMsQ0FBQzBoQixNQUFILEVBQVU7QUFBQ08sbUJBQUssRUFBQzllLENBQUMsQ0FBQy9DLENBQUMsQ0FBQ2dVLElBQUgsQ0FBUjtBQUFpQjJOLG1CQUFLLEVBQUMvaEIsQ0FBQyxDQUFDdVMsT0FBekI7QUFBaUNrUCxtQkFBSyxFQUFDO0FBQXZDLGFBQVYsQ0FBTjtBQUEyRDlTLGdCQUFJLEVBQUN2TSxDQUFDLEdBQUNwQyxDQUFDLENBQUN1UyxPQUFKLEdBQVk7QUFBNUUsV0FBVCxDQUFsQixFQUFxSDdSLENBQUMsR0FBQ2tELENBQUMsQ0FBQzVELENBQUQsQ0FBbEksS0FBd0lrQixDQUFDLENBQUNuQixDQUFELEVBQUcsU0FBSCxFQUFhaUIsQ0FBYixDQUFELEVBQWlCLENBQUNKLENBQUMsR0FBQyxpQkFBZ0JiLENBQUMsQ0FBQ3FsQixNQUFsQixHQUF5QnJsQixDQUFDLENBQUNxbEIsTUFBM0IsR0FBa0NybEIsQ0FBQyxDQUFDcWxCLE1BQUYsQ0FBU3ZhLFFBQTlDLEVBQXdEK1MsV0FBeEQsQ0FBb0U1ZCxDQUFDLENBQUN1UyxPQUFGLEdBQVUsUUFBOUUsRUFBdUZ6UixDQUF2RixDQUFqQixFQUEyR1IsQ0FBQyxDQUFFLFlBQVU7QUFBQ0UsYUFBQyxDQUFDc2pCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZjtBQUFrQixXQUEvQixFQUFpQyxDQUFqQyxDQUFwUCxDQUFyQztBQUE4VCxTQUEvZjtBQUFnZ0JDLFlBQUksRUFBQyxnQkFBVTtBQUFDcGhCLFdBQUMsQ0FBQ3RDLENBQUMsQ0FBQzJrQixVQUFILEVBQWMza0IsQ0FBZCxDQUFEO0FBQWtCO0FBQWxpQixPQUFUO0FBQTZpQixLQUEzbUssRUFBNG1LZixDQUFDLENBQUNvakIsS0FBRixDQUFRWSxxQkFBUixHQUE4QixVQUFTampCLENBQVQsRUFBVztBQUFDLFVBQUlFLENBQUosRUFBTUUsQ0FBTixFQUFRRSxDQUFSLEVBQVVFLENBQVY7QUFBWSxhQUFPTixDQUFDLEdBQUM7QUFBQ3FqQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQ1UsV0FBQyxDQUFDTyxJQUFGLENBQU8sSUFBUCxFQUFZdEIsQ0FBWixHQUFlSyxDQUFDLElBQUVBLENBQUMsRUFBbkI7QUFBc0IsU0FBaEQ7QUFBaUQrakIsZUFBTyxFQUFDLG1CQUFVO0FBQUN2akIsV0FBQyxLQUFHQSxDQUFDLENBQUMyZ0IsVUFBRixDQUFhcE0sV0FBYixDQUF5QnZVLENBQXpCLEdBQTRCQSxDQUFDLEdBQUMsSUFBakMsQ0FBRDtBQUF3QyxTQUE1RztBQUE2R3VrQixrQkFBVSxFQUFDLHNCQUFVO0FBQUNua0IsV0FBQyxHQUFDbUMsQ0FBQyxDQUFDM0MsQ0FBQyxDQUFDa2hCLE1BQUgsQ0FBSCxFQUFjbGhCLENBQUMsQ0FBQ2doQixNQUFGLElBQVU3ZCxDQUFDLENBQUNuRCxDQUFDLENBQUNtZ0IsS0FBSCxFQUFTO0FBQUN4aEIsZUFBRyxFQUFDa0UsQ0FBQyxDQUFDN0MsQ0FBQyxDQUFDa2hCLE1BQUgsRUFBVTtBQUFDTyxtQkFBSyxFQUFDOWUsQ0FBQyxDQUFDL0MsQ0FBQyxDQUFDZ1UsSUFBSCxDQUFSO0FBQWlCMk4sbUJBQUssRUFBQ3ZoQixDQUFDLENBQUMrUixPQUF6QjtBQUFpQ2tQLG1CQUFLLEVBQUM7QUFBdkMsYUFBVixDQUFOO0FBQTJEOVMsZ0JBQUksRUFBQ3ZNLENBQUMsR0FBQzVCLENBQUMsQ0FBQytSLE9BQUosR0FBWTtBQUE1RSxXQUFULENBQUQsRUFBb0csQ0FBQzNSLENBQUMsR0FBQ2dELENBQUMsQ0FBQ3BELENBQUQsQ0FBSixFQUFTbVUsRUFBVCxHQUFZLFVBQVM1VSxDQUFULEVBQVc7QUFBQyxtQkFBTyxPQUFPYSxDQUFDLENBQUMrVCxFQUFULEVBQVk3VCxDQUFDLEdBQUNmLENBQWQsRUFBZ0JPLENBQUMsQ0FBRSxZQUFVO0FBQUNJLGVBQUMsQ0FBQ29qQixFQUFGLENBQUtHLFFBQUwsQ0FBYyxDQUFDLENBQWY7QUFBa0IsYUFBL0IsRUFBaUMsQ0FBakMsQ0FBakIsRUFBcUQsVUFBU2xrQixDQUFULEVBQVc7QUFBQ1csZUFBQyxDQUFDb2pCLEVBQUYsQ0FBS0QsUUFBTCxDQUFjOWpCLENBQWQsRUFBZ0JpQixDQUFoQjtBQUFtQixhQUEzRjtBQUE0RixXQUFsTyxLQUFxT2hCLENBQUMsQ0FBQ2ltQixRQUFGLElBQVk5aUIsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDaW1CLFFBQUgsQ0FBRCxJQUFlM2lCLENBQUMsQ0FBQzJlLEtBQTdCLEtBQXFDbGlCLENBQUMsQ0FBQ3NnQixHQUFGLENBQU0xUCxRQUFOLEdBQWVyTixDQUFDLENBQUMyZSxLQUF0RCxHQUE2RG5oQixDQUFDLEdBQUNmLENBQUMsQ0FBQ21tQixZQUFGLENBQWV2UixFQUFmLENBQW1CLFVBQVM1VSxDQUFULEVBQVc7QUFBQ1csYUFBQyxDQUFDb2pCLEVBQUYsQ0FBS0QsUUFBTCxDQUFjOWpCLENBQWQsRUFBZ0JpQixDQUFoQjtBQUFtQixXQUFsRCxDQUEvRCxFQUFvSE4sQ0FBQyxDQUFDb2pCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZixDQUF6VixDQUFkO0FBQTBYLFNBQTdmO0FBQThmQyxZQUFJLEVBQUMsZ0JBQVU7QUFBQ3BoQixXQUFDLENBQUNwQyxDQUFDLENBQUN5a0IsVUFBSCxFQUFjemtCLENBQWQsQ0FBRDtBQUFrQjtBQUFoaUIsT0FBVDtBQUEyaUIsS0FBN3NMLEVBQThzTGpCLENBQUMsQ0FBQ29qQixLQUFGLENBQVFTLGFBQVIsR0FBc0IsVUFBU3ZqQixDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFKLEVBQU1JLENBQU4sRUFBUUksQ0FBUixFQUFVRSxDQUFWLEVBQVlFLENBQVosRUFBY0UsQ0FBZCxFQUFnQkUsQ0FBaEIsRUFBa0JFLENBQWxCOztBQUFvQixlQUFTRSxDQUFULENBQVdwQixDQUFYLEVBQWE7QUFBQyxZQUFJTSxDQUFDLEdBQUNQLENBQUMsQ0FBQytoQixZQUFGLElBQWdCMWhCLENBQUMsR0FBQyxLQUFELEdBQU8sS0FBeEIsSUFBK0JMLENBQUMsQ0FBQ3dTLE9BQXZDO0FBQStDL1IsU0FBQyxDQUFDd2xCLGFBQUYsQ0FBZ0JHLFdBQWhCLENBQTRCbm1CLENBQTVCLEVBQThCTSxDQUE5QjtBQUFpQzs7QUFBQSxlQUFTZ0IsQ0FBVCxHQUFZO0FBQUNsQixTQUFDLEdBQUMsS0FBRyxFQUFFUSxDQUFMLElBQVFSLENBQVIsSUFBV0osQ0FBQyxDQUFDOGpCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZixDQUFaLElBQStCN2lCLENBQUMsQ0FBQyxPQUFELENBQUQsRUFBV3BCLENBQUMsQ0FBQzhqQixFQUFGLENBQUtHLFFBQUwsQ0FBYyxDQUFDLENBQWYsQ0FBMUMsQ0FBRDtBQUE4RDs7QUFBQSxlQUFTMWlCLENBQVQsQ0FBV3hCLENBQVgsRUFBYTtBQUFDQyxTQUFDLENBQUM4akIsRUFBRixDQUFLRCxRQUFMLENBQWM5akIsQ0FBZCxFQUFnQmlCLENBQWhCO0FBQW1COztBQUFBLGVBQVNVLENBQVQsR0FBWTtBQUFDWixTQUFDLElBQUVSLENBQUMsQ0FBRSxZQUFVO0FBQUNRLFdBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtBQUFNLFNBQW5CLEVBQXFCLENBQXJCLENBQUo7QUFBNEI7O0FBQUEsYUFBT2QsQ0FBQyxHQUFDO0FBQUMrakIsZ0JBQVEsRUFBQyxrQkFBU2hrQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUNVLFdBQUMsR0FBQ1YsQ0FBRixFQUFJZ0IsQ0FBQyxDQUFDckIsQ0FBRCxDQUFMO0FBQVMsU0FBbkM7QUFBb0Nva0IsZUFBTyxFQUFDLG1CQUFVO0FBQUMzakIsV0FBQyxDQUFDK2dCLFVBQUYsQ0FBYXBNLFdBQWIsQ0FBeUIzVSxDQUF6QixHQUE0QkEsQ0FBQyxHQUFDLElBQTlCLEVBQW1DSixDQUFDLEtBQUdNLENBQUMsQ0FBQzZnQixVQUFGLENBQWFwTSxXQUFiLENBQXlCelUsQ0FBekIsR0FBNEJBLENBQUMsR0FBQyxJQUFqQyxDQUFwQztBQUEyRSxTQUFsSTtBQUFtSXlrQixrQkFBVSxFQUFDLHNCQUFVO0FBQUMva0IsV0FBQyxHQUFDTCxDQUFDLENBQUN5aEIsTUFBSixFQUFXNWdCLENBQUMsR0FBQyxDQUFiLEVBQWVJLENBQUMsR0FBQ21DLENBQUMsQ0FBQ3BELENBQUMsQ0FBQzJoQixNQUFILENBQWxCLEVBQTZCM2hCLENBQUMsQ0FBQzBpQixLQUFGLEdBQVFyZixDQUFDLENBQUNyRCxDQUFDLENBQUMwaUIsS0FBSCxDQUF0QyxFQUFnRHJpQixDQUFDLElBQUVYLENBQUMsQ0FBQ29iLEVBQUYsQ0FBSzhKLEdBQUwsQ0FBUzVrQixDQUFDLENBQUN3UyxPQUFYLEVBQW9CLFVBQVN2UyxDQUFULEVBQVc7QUFBQ0ksYUFBQyxJQUFFLFlBQVVKLENBQWIsS0FBaUJQLENBQUMsQ0FBQ29iLEVBQUYsQ0FBSzhKLEdBQUwsQ0FBUzVrQixDQUFDLENBQUN3UyxPQUFYLEVBQW1CaFIsQ0FBbkIsR0FBc0JELENBQUMsRUFBeEM7QUFBNEMsV0FBNUUsR0FBK0VKLENBQUMsR0FBQ21DLENBQUMsQ0FBQ3RELENBQUMsQ0FBQzJoQixNQUFILEVBQVU7QUFBQ08saUJBQUssRUFBQ2xpQixDQUFDLENBQUMwaUIsS0FBVDtBQUFlVixpQkFBSyxFQUFDaGlCLENBQUMsQ0FBQ3dTLE9BQXZCO0FBQStCa1AsaUJBQUssRUFBQztBQUFyQyxXQUFWLENBQWxGLEVBQXFJOWQsQ0FBQyxDQUFDNUQsQ0FBQyxDQUFDNGdCLEtBQUgsRUFBUztBQUFDeGhCLGVBQUcsRUFBQytCLENBQUMsR0FBQyxHQUFGLEdBQU1uQixDQUFDLENBQUN3UyxPQUFiO0FBQXFCNUQsZ0JBQUksRUFBQ3ZNLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3dTLE9BQUosR0FBWTtBQUF0QyxXQUFULENBQXRJLEVBQW1NN1IsQ0FBQyxHQUFDa0QsQ0FBQyxDQUFDN0QsQ0FBRCxDQUF4TSxLQUE4TUEsQ0FBQyxDQUFDK2hCLFlBQUYsR0FBZS9oQixDQUFDLENBQUMyaEIsTUFBakIsRUFBd0JqaUIsQ0FBQyxDQUFDb2IsRUFBRixDQUFLOEosR0FBTCxDQUFTNWtCLENBQUMsQ0FBQ3dTLE9BQVgsRUFBbUJoUixDQUFuQixDQUF0TyxDQUFqRCxFQUE4U2YsQ0FBQyxHQUFDb0QsQ0FBQyxDQUFDO0FBQUMrYyxpQkFBSyxFQUFDO0FBQUN4aEIsaUJBQUcsRUFBQ1ksQ0FBQyxDQUFDMGlCLEtBQUYsR0FBUSxLQUFSLEdBQWMxaUIsQ0FBQyxDQUFDd1M7QUFBckIsYUFBUDtBQUFxQzRPLGtCQUFNLEVBQUMsU0FBU25oQixDQUFULEdBQVk7QUFBQyxrQkFBSUksQ0FBQyxHQUFDSSxDQUFDLElBQUUsSUFBVDtBQUFjVyxlQUFDLENBQUNmLENBQUQsRUFBRyxNQUFILEVBQVVKLENBQVYsQ0FBRCxFQUFjUCxDQUFDLENBQUNvYixFQUFGLENBQUs4SixHQUFMLENBQVM1a0IsQ0FBQyxDQUFDd1MsT0FBRixHQUFVLE9BQW5CLEVBQTJCN1EsQ0FBM0IsQ0FBZCxFQUE0QyxTQUFTM0IsQ0FBVCxHQUFZO0FBQUMsOEJBQVksT0FBT0ssQ0FBQyxDQUFDNGxCLGFBQUYsQ0FBZ0JHLFdBQW5DLEdBQStDN2tCLENBQUMsRUFBaEQsR0FBbURoQixDQUFDLENBQUNQLENBQUQsRUFBRyxFQUFILENBQXBEO0FBQTJELGVBQXhFLEVBQTVDO0FBQXVIO0FBQTlMLFdBQUQsQ0FBalQ7QUFBbWYsU0FBNW9CO0FBQTZvQm1rQixZQUFJLEVBQUMsZ0JBQVU7QUFBQ3BoQixXQUFDLENBQUM5QyxDQUFDLENBQUNtbEIsVUFBSCxFQUFjbmxCLENBQWQsQ0FBRDtBQUFrQjtBQUEvcUIsT0FBVDtBQUEwckIsS0FBanJOLEVBQWtyTlAsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUUMsYUFBUixHQUFzQixVQUFTOWlCLENBQVQsRUFBVztBQUFDLFVBQUlJLENBQUosRUFBTUksQ0FBTixFQUFRRSxDQUFSLEVBQVVFLENBQVYsRUFBWUUsQ0FBWixFQUFjRSxDQUFkLEVBQWdCRSxDQUFoQixFQUFrQkMsQ0FBbEIsRUFBb0JDLENBQXBCLEVBQXNCRSxDQUF0Qjs7QUFBd0IsZUFBU0MsQ0FBVCxHQUFZO0FBQUMsWUFBR0wsQ0FBSCxFQUFLO0FBQUMsY0FBSW5CLENBQUMsR0FBQ21CLENBQUMsQ0FBQ3lQLFFBQUYsQ0FBV3lELElBQWpCO0FBQUEsY0FBc0JwVSxDQUFDLEdBQUMsRUFBeEI7QUFBQSxjQUEyQk0sQ0FBQyxHQUFDUCxDQUFDLENBQUN3SyxPQUFGLENBQVUsR0FBVixDQUE3QjtBQUE0QyxXQUFDLENBQUQsSUFBSWpLLENBQUosS0FBUU4sQ0FBQyxHQUFDRCxDQUFDLENBQUNrZSxTQUFGLENBQVkzZCxDQUFaLENBQVYsR0FBMEJOLENBQUMsSUFBRUEsQ0FBQyxJQUFFYyxDQUFOLElBQVMsVUFBU2YsQ0FBVCxFQUFXO0FBQUNlLGFBQUMsR0FBQ2YsQ0FBRixFQUFJSyxDQUFDLENBQUMwakIsRUFBRixDQUFLRCxRQUFMLENBQWMvaUIsQ0FBQyxDQUFDbWQsU0FBRixDQUFZbmQsQ0FBQyxDQUFDeUosT0FBRixDQUFVLEdBQVYsSUFBZSxDQUEzQixDQUFkLEVBQTRDakosQ0FBNUMsQ0FBSjtBQUFtRCxXQUEvRCxDQUFnRXRCLENBQWhFLENBQW5DO0FBQXNHO0FBQUM7O0FBQUEsZUFBUzBCLENBQVQsR0FBWTtBQUFDaEIsU0FBQyxHQUFDMGxCLFdBQVcsQ0FBQzdrQixDQUFELEVBQUdYLENBQUgsQ0FBYjtBQUFtQjs7QUFBQSxhQUFPUixDQUFDLEdBQUM7QUFBQzJqQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV0ssQ0FBWCxFQUFhO0FBQUMsV0FBQyxVQUFTTCxDQUFULEVBQVc7QUFBQyxnQkFBR29CLENBQUgsRUFBSztBQUFDLGtCQUFJZixDQUFDLEdBQUNKLENBQUMsQ0FBQzBoQixNQUFGLEdBQVMsR0FBVCxHQUFhMWdCLENBQUMsRUFBZCxHQUFpQixHQUFqQixHQUFxQmpCLENBQTNCO0FBQTZCLGVBQUNTLENBQUMsSUFBRSxDQUFDWSxDQUFKLEdBQU1ELENBQUMsQ0FBQzZrQixhQUFSLEdBQXNCN2tCLENBQXZCLEVBQTBCd1AsUUFBMUIsR0FBbUN2USxDQUFuQztBQUFxQztBQUFDLFdBQXJGLENBQXNGTCxDQUF0RixDQUFEO0FBQTBGLFNBQWxIO0FBQW1Ib2tCLGVBQU8sRUFBQyxtQkFBVTtBQUFDcGtCLFdBQUMsQ0FBQ3NtQixhQUFGLENBQWdCM2xCLENBQWhCLEdBQW1CLENBQUNGLENBQUQsSUFBSVksQ0FBSixJQUFPRCxDQUFDLENBQUNvZ0IsVUFBRixDQUFhcE0sV0FBYixDQUF5QmhVLENBQXpCLENBQTFCLEVBQXNEQSxDQUFDLEdBQUMsSUFBeEQ7QUFBNkQsU0FBbk07QUFBb01na0Isa0JBQVUsRUFBQyxzQkFBVTtBQUFDLGNBQUcza0IsQ0FBQyxHQUFDUixDQUFDLENBQUN3aEIsTUFBSixFQUFXNWdCLENBQUMsR0FBQ1osQ0FBQyxDQUFDb2lCLFFBQWYsRUFBd0J0aEIsQ0FBQyxHQUFDLE1BQUlkLENBQUMsQ0FBQ3VTLE9BQWhDLEVBQXdDdlIsQ0FBQyxHQUFDLENBQTFDLEVBQTRDSSxDQUFDLEdBQUNwQixDQUFDLENBQUN1aUIsU0FBaEQsRUFBMERqaEIsQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDbkQsQ0FBQyxDQUFDMGhCLE1BQUgsQ0FBN0QsRUFBd0VsaEIsQ0FBM0UsRUFBNkU7QUFBQyxnQkFBR21ELENBQUMsQ0FBQzNELENBQUMsQ0FBQzJnQixLQUFILEVBQVM7QUFBQ3hoQixpQkFBRyxFQUFDYSxDQUFDLENBQUMwaEIsTUFBUDtBQUFjL1Msa0JBQUksRUFBQ3ZNLENBQUMsR0FBQ3BDLENBQUMsQ0FBQ3VTLE9BQUosR0FBWTtBQUEvQixhQUFULENBQUQsRUFBdURuUixDQUExRCxFQUE0RHBCLENBQUMsQ0FBQ21oQixNQUFGLEdBQVMsWUFBVTtBQUFDamdCLGVBQUMsR0FBQ25CLENBQUYsRUFBSTJCLENBQUMsRUFBTCxFQUFRdEIsQ0FBQyxDQUFDMGpCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZixDQUFSO0FBQTBCLGFBQTlDLENBQTVELEtBQStHO0FBQUMsa0JBQUl2akIsQ0FBQyxHQUFDLENBQU47QUFBQSxrQkFBUWEsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDcWlCLEtBQUYsR0FBUSxFQUFsQjtBQUFxQixlQUFDLFNBQVN0aUIsQ0FBVCxHQUFZO0FBQUMsb0JBQUcsRUFBRVcsQ0FBRixHQUFJYSxDQUFQLEVBQVMsTUFBTSxJQUFJa0ssS0FBSixDQUFVLG9DQUFWLENBQU47O0FBQXNELG9CQUFHO0FBQUN2SyxtQkFBQyxHQUFDQyxDQUFDLENBQUM2a0IsYUFBRixDQUFnQk0sTUFBaEIsQ0FBdUJsa0IsQ0FBQyxHQUFDcEMsQ0FBQyxDQUFDdVMsT0FBSixHQUFZLFdBQW5DLENBQUY7QUFBa0QsaUJBQXRELENBQXNELE9BQU14UyxDQUFOLEVBQVEsQ0FBRTs7QUFBQW1CLGlCQUFDLElBQUVRLENBQUMsSUFBR3RCLENBQUMsQ0FBQzBqQixFQUFGLENBQUtHLFFBQUwsQ0FBYyxDQUFDLENBQWYsQ0FBTixJQUF5QjNqQixDQUFDLENBQUNQLENBQUQsRUFBRyxFQUFILENBQTNCO0FBQWtDLGVBQTlLLEVBQUQ7QUFBa0w7QUFBQW9CLGFBQUMsR0FBQ3lDLENBQUMsQ0FBQzVELENBQUQsQ0FBSDtBQUFPLFdBQTVZLE1BQWlaa0IsQ0FBQyxHQUFDbkIsQ0FBRixFQUFJMkIsQ0FBQyxFQUFMLEVBQVFOLENBQUMsSUFBRUQsQ0FBQyxHQUFDaWtCLE1BQUYsRUFBU2hsQixDQUFDLENBQUMwakIsRUFBRixDQUFLRyxRQUFMLENBQWMsQ0FBQyxDQUFmLENBQVgsS0FBK0J0Z0IsQ0FBQyxDQUFDM0QsQ0FBRCxFQUFHO0FBQUMyZ0IsaUJBQUssRUFBQztBQUFDeGhCLGlCQUFHLEVBQUNhLENBQUMsQ0FBQzBoQixNQUFGLEdBQVMsR0FBVCxHQUFhMWhCLENBQUMsQ0FBQ3VTLE9BQWYsR0FBdUIsSUFBSXhPLElBQUosRUFBNUI7QUFBcUM0SyxrQkFBSSxFQUFDdk0sQ0FBQyxHQUFDcEMsQ0FBQyxDQUFDdVMsT0FBSixHQUFZO0FBQXRELGFBQVA7QUFBMEU0TyxrQkFBTSxFQUFDLGtCQUFVO0FBQUMvZ0IsZUFBQyxDQUFDMGpCLEVBQUYsQ0FBS0csUUFBTCxDQUFjLENBQUMsQ0FBZjtBQUFrQjtBQUE5RyxXQUFILENBQUQsRUFBcUg5aUIsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDNUQsQ0FBRCxDQUF2SixDQUFUO0FBQXFLLFNBQWh4QjtBQUFpeEJra0IsWUFBSSxFQUFDLGdCQUFVO0FBQUNwaEIsV0FBQyxDQUFDMUMsQ0FBQyxDQUFDK2tCLFVBQUgsRUFBYy9rQixDQUFkLENBQUQ7QUFBa0I7QUFBbnpCLE9BQVQ7QUFBOHpCLEtBQWh2UCxFQUFpdlBYLENBQUMsQ0FBQ29qQixLQUFGLENBQVFFLGdCQUFSLEdBQXlCLFVBQVNoakIsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBSjtBQUFBLFVBQU1JLENBQU47QUFBQSxVQUFRRSxDQUFDLEdBQUMsQ0FBVjtBQUFBLFVBQVlFLENBQUMsR0FBQyxDQUFkO0FBQUEsVUFBZ0JFLENBQUMsR0FBQyxFQUFsQjtBQUFxQixhQUFPVixDQUFDLEdBQUM7QUFBQzZqQixnQkFBUSxFQUFDLGtCQUFTOWpCLENBQVQsRUFBV2EsQ0FBWCxFQUFhO0FBQUMsY0FBSUUsQ0FBQyxHQUFDZixDQUFDLENBQUN3SyxPQUFGLENBQVUsR0FBVixDQUFOO0FBQUEsY0FBcUJ2SixDQUFDLEdBQUNqQixDQUFDLENBQUNrZSxTQUFGLENBQVksQ0FBWixFQUFjbmQsQ0FBZCxFQUFpQm9PLEtBQWpCLENBQXVCLEdBQXZCLENBQXZCO0FBQW1EblAsV0FBQyxHQUFDQSxDQUFDLENBQUNrZSxTQUFGLENBQVluZCxDQUFDLEdBQUMsQ0FBZCxDQUFGLEVBQW1CRSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU1WLENBQU4sS0FBVUksQ0FBQyxHQUFDLEVBQUYsRUFBS04sQ0FBQyxJQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFGLENBQW5CLENBQW5CLEVBQTRDTCxDQUFDLENBQUMrQixNQUFGLEdBQVMsQ0FBVCxLQUFhOUIsQ0FBQyxDQUFDZ2tCLElBQUYsQ0FBT0QsUUFBUCxDQUFnQi9pQixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUssR0FBTCxHQUFTVixDQUFULEdBQVcsR0FBWCxHQUFlSSxDQUEvQixFQUFpQ0UsQ0FBakMsR0FBb0NKLENBQUMsSUFBRVEsQ0FBQyxDQUFDLENBQUQsQ0FBSixLQUFVUixDQUFDLEdBQUNRLENBQUMsQ0FBQyxDQUFELENBQUgsRUFBT2hCLENBQUMsQ0FBQzhqQixFQUFGLENBQUtELFFBQUwsQ0FBYzlqQixDQUFkLEVBQWdCYSxDQUFoQixDQUFqQixDQUFqRCxDQUE1QztBQUFtSSxTQUE5TTtBQUErTW1qQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV2EsQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQ0osV0FBQyxHQUFDWCxDQUFGLEVBQUlLLENBQUMsR0FBQ1UsQ0FBTixFQUFRZCxDQUFDLENBQUNna0IsSUFBRixDQUFPRCxRQUFQLENBQWdCdmpCLENBQUMsR0FBQyxHQUFGLEdBQU8sRUFBRUYsQ0FBVCxHQUFXLEdBQVgsR0FBZVAsQ0FBL0IsRUFBaUNhLENBQWpDLENBQVI7QUFBNEM7QUFBcFIsT0FBVDtBQUErUixLQUExa1EsRUFBMmtRbkIsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUUcsYUFBUixHQUFzQixVQUFTampCLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUo7QUFBQSxVQUFNSSxDQUFOO0FBQUEsVUFBUVEsQ0FBQyxHQUFDLEVBQVY7QUFBQSxVQUFhRSxDQUFDLEdBQUMsQ0FBQyxDQUFoQjtBQUFBLFVBQWtCRSxDQUFDLEdBQUMsRUFBcEI7QUFBQSxVQUF1QkUsQ0FBQyxHQUFDLENBQXpCO0FBQUEsVUFBMkJDLENBQUMsR0FBQyxDQUFDLENBQTlCO0FBQUEsVUFBZ0NDLENBQUMsR0FBQyxDQUFDLENBQW5DOztBQUFxQyxlQUFTRSxDQUFULEdBQVk7QUFBQyxZQUFHdkIsQ0FBQyxDQUFDNmpCLE1BQUYsSUFBVSxNQUFJaGpCLENBQUMsQ0FBQ2tCLE1BQW5CLEVBQTBCLENBQUMsVUFBUy9CLENBQVQsRUFBVztBQUFDQSxXQUFDLENBQUMrakIsRUFBRixDQUFLRSxJQUFMLEdBQVVqa0IsQ0FBQyxDQUFDaWtCLElBQVosRUFBaUJqa0IsQ0FBQyxDQUFDaWtCLElBQUYsQ0FBT0YsRUFBUCxHQUFVL2pCLENBQUMsQ0FBQytqQixFQUE3QixFQUFnQy9qQixDQUFDLENBQUMrakIsRUFBRixHQUFLL2pCLENBQUMsQ0FBQ2lrQixJQUFGLEdBQU8sSUFBNUM7QUFBaUQsU0FBN0QsQ0FBOERoa0IsQ0FBOUQsQ0FBRCxDQUExQixLQUFpRyxJQUFHLENBQUNjLENBQUQsSUFBSSxNQUFJRixDQUFDLENBQUNrQixNQUFWLElBQWtCLENBQUMxQixDQUF0QixFQUF3QjtBQUFDVSxXQUFDLEdBQUMsQ0FBQyxDQUFIO0FBQUssY0FBSU4sQ0FBQyxHQUFDSSxDQUFDLENBQUMybEIsS0FBRixFQUFOO0FBQWdCdm1CLFdBQUMsQ0FBQ2drQixJQUFGLENBQU9ELFFBQVAsQ0FBZ0J2akIsQ0FBQyxDQUFDNlUsSUFBbEIsRUFBdUI3VSxDQUFDLENBQUM4VSxNQUF6QixFQUFpQyxVQUFTdlYsQ0FBVCxFQUFXO0FBQUNlLGFBQUMsR0FBQyxDQUFDLENBQUgsRUFBS04sQ0FBQyxDQUFDeWpCLFFBQUYsSUFBWTNqQixDQUFDLENBQUUsWUFBVTtBQUFDRSxlQUFDLENBQUN5akIsUUFBRixDQUFXbGtCLENBQVg7QUFBYyxhQUEzQixFQUE2QixDQUE3QixDQUFsQixFQUFrRHVCLENBQUMsRUFBbkQ7QUFBc0QsV0FBbkc7QUFBc0c7QUFBQzs7QUFBQSxhQUFPdEIsQ0FBQyxHQUFDO0FBQUNra0IsWUFBSSxFQUFDLGdCQUFVO0FBQUMzZ0IsV0FBQyxDQUFDeEQsQ0FBRCxDQUFELEtBQU9BLENBQUMsR0FBQyxFQUFULEdBQWFBLENBQUMsQ0FBQ21qQixTQUFGLEtBQWNoaUIsQ0FBQyxHQUFDbkIsQ0FBQyxDQUFDbWpCLFNBQUosRUFBYzloQixDQUFDLEdBQUMsQ0FBQyxDQUEvQixDQUFiLEVBQStDckIsQ0FBQyxDQUFDNGpCLElBQUYsR0FBT3hpQixDQUFDLEdBQUMsQ0FBQyxDQUFWLEdBQVluQixDQUFDLENBQUNna0IsSUFBRixDQUFPRSxJQUFQLEVBQTNEO0FBQXlFLFNBQTFGO0FBQTJGRCxnQkFBUSxFQUFDLGtCQUFTbGtCLENBQVQsRUFBVztBQUFDZSxXQUFDLEdBQUMsQ0FBQyxDQUFIO0FBQUssY0FBSVYsQ0FBQyxHQUFDSixDQUFDLENBQUM4akIsRUFBUjtBQUFXeGlCLFdBQUMsSUFBR2xCLENBQUMsQ0FBQzZqQixRQUFGLENBQVdsa0IsQ0FBWCxDQUFKO0FBQWtCLFNBQWxKO0FBQW1KOGpCLGdCQUFRLEVBQUMsa0JBQVN6akIsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxjQUFHYyxDQUFILEVBQUs7QUFBQyxnQkFBSVYsQ0FBQyxHQUFDTixDQUFDLENBQUNtSyxPQUFGLENBQVUsR0FBVixDQUFOO0FBQUEsZ0JBQXFCM0osQ0FBQyxHQUFDMEIsUUFBUSxDQUFDbEMsQ0FBQyxDQUFDNmQsU0FBRixDQUFZLENBQVosRUFBY3ZkLENBQWQsQ0FBRCxFQUFrQixFQUFsQixDQUEvQjtBQUFxRE0sYUFBQyxJQUFFWixDQUFDLENBQUM2ZCxTQUFGLENBQVl2ZCxDQUFDLEdBQUMsQ0FBZCxDQUFILEVBQW9CLE1BQUlFLENBQUosS0FBUWIsQ0FBQyxDQUFDa2pCLE1BQUYsS0FBV2ppQixDQUFDLEdBQUNSLENBQUMsQ0FBQ1EsQ0FBRCxDQUFkLEdBQW1CaEIsQ0FBQyxDQUFDOGpCLEVBQUYsQ0FBS0QsUUFBTCxDQUFjN2lCLENBQWQsRUFBZ0JWLENBQWhCLENBQW5CLEVBQXNDVSxDQUFDLEdBQUMsRUFBaEQsQ0FBcEI7QUFBd0UsV0FBbkksTUFBd0loQixDQUFDLENBQUM4akIsRUFBRixDQUFLRCxRQUFMLENBQWN6akIsQ0FBZCxFQUFnQkUsQ0FBaEI7QUFBbUIsU0FBclU7QUFBc1V5akIsZ0JBQVEsRUFBQyxrQkFBUzNqQixDQUFULEVBQVdFLENBQVgsRUFBYUUsQ0FBYixFQUFlO0FBQUNULFdBQUMsQ0FBQ2tqQixNQUFGLEtBQVc3aUIsQ0FBQyxHQUFDTSxDQUFDLENBQUNOLENBQUQsQ0FBZDtBQUFtQixjQUFJVSxDQUFKO0FBQUEsY0FBTUUsQ0FBQyxHQUFDLEVBQVI7O0FBQVcsY0FBR0ksQ0FBSCxFQUFLO0FBQUMsbUJBQUssTUFBSWhCLENBQUMsQ0FBQzBCLE1BQVg7QUFBbUJoQixlQUFDLEdBQUNWLENBQUMsQ0FBQzZkLFNBQUYsQ0FBWSxDQUFaLEVBQWMvYyxDQUFkLENBQUYsRUFBbUJkLENBQUMsR0FBQ0EsQ0FBQyxDQUFDNmQsU0FBRixDQUFZbmQsQ0FBQyxDQUFDZ0IsTUFBZCxDQUFyQixFQUEyQ2QsQ0FBQyxDQUFDNkcsSUFBRixDQUFPL0csQ0FBUCxDQUEzQztBQUFuQjs7QUFBd0UsbUJBQUtBLENBQUMsR0FBQ0UsQ0FBQyxDQUFDdWxCLEtBQUYsRUFBUDtBQUFrQjNsQixlQUFDLENBQUNpSCxJQUFGLENBQU87QUFBQ3dOLG9CQUFJLEVBQUNyVSxDQUFDLENBQUNjLE1BQUYsR0FBUyxHQUFULEdBQWFoQixDQUFuQjtBQUFxQndVLHNCQUFNLEVBQUNoVixDQUE1QjtBQUE4QjJqQix3QkFBUSxFQUFDLE1BQUlqakIsQ0FBQyxDQUFDYyxNQUFOLEdBQWF0QixDQUFiLEdBQWU7QUFBdEQsZUFBUDtBQUFsQjtBQUFzRixXQUFwSyxNQUF5S0ksQ0FBQyxDQUFDaUgsSUFBRixDQUFPO0FBQUN3TixnQkFBSSxFQUFDalYsQ0FBTjtBQUFRa1Ysa0JBQU0sRUFBQ2hWLENBQWY7QUFBaUIyakIsb0JBQVEsRUFBQ3pqQjtBQUExQixXQUFQOztBQUFxQ1csV0FBQyxHQUFDbkIsQ0FBQyxDQUFDZ2tCLElBQUYsQ0FBT0UsSUFBUCxFQUFELEdBQWU1aUIsQ0FBQyxFQUFqQjtBQUFvQixTQUEvbEI7QUFBZ21CNmlCLGVBQU8sRUFBQyxtQkFBVTtBQUFDL2pCLFdBQUMsR0FBQyxDQUFDLENBQUgsRUFBS0osQ0FBQyxDQUFDZ2tCLElBQUYsQ0FBT0csT0FBUCxFQUFMO0FBQXNCO0FBQXpvQixPQUFUO0FBQW9wQixLQUF6aVMsRUFBMGlTMWtCLENBQUMsQ0FBQ29qQixLQUFGLENBQVFNLGNBQVIsR0FBdUIsVUFBU3BqQixDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFKLEVBQU1JLENBQU4sRUFBUUUsQ0FBUjs7QUFBVSxlQUFTRSxDQUFULEdBQVk7QUFBQ0osU0FBQyxHQUFDa0YsSUFBSSxDQUFDcUYsTUFBTCxHQUFjNUosUUFBZCxDQUF1QixFQUF2QixFQUEyQmtkLFNBQTNCLENBQXFDLENBQXJDLENBQUYsRUFBMENqZSxDQUFDLENBQUNna0IsSUFBRixDQUFPRCxRQUFQLENBQWdCM2pCLENBQWhCLENBQTFDO0FBQTZEOztBQUFBLGFBQU9KLENBQUMsR0FBQztBQUFDNmpCLGdCQUFRLEVBQUMsa0JBQVNuakIsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxjQUFJRSxDQUFDLEdBQUNKLENBQUMsQ0FBQzZKLE9BQUYsQ0FBVSxHQUFWLENBQU47QUFBcUIsV0FBQyxDQUFELEtBQUt6SixDQUFMLEdBQU9KLENBQUMsS0FBR04sQ0FBSixHQUFNSixDQUFDLENBQUM4akIsRUFBRixDQUFLRyxRQUFMLENBQWMsQ0FBQyxDQUFmLENBQU4sR0FBd0IzakIsQ0FBQyxLQUFHQSxDQUFDLEdBQUNJLENBQUYsRUFBSVgsQ0FBQyxDQUFDcWpCLFFBQUYsSUFBWTVpQixDQUFDLEVBQWpCLEVBQW9CUixDQUFDLENBQUNna0IsSUFBRixDQUFPRCxRQUFQLENBQWdCcmpCLENBQWhCLENBQXZCLENBQWhDLEdBQTJFQSxDQUFDLENBQUN1ZCxTQUFGLENBQVksQ0FBWixFQUFjbmQsQ0FBZCxNQUFtQlIsQ0FBbkIsSUFBc0JOLENBQUMsQ0FBQzhqQixFQUFGLENBQUtELFFBQUwsQ0FBY25qQixDQUFDLENBQUN1ZCxTQUFGLENBQVluZCxDQUFDLEdBQUMsQ0FBZCxDQUFkLEVBQStCRixDQUEvQixDQUFqRztBQUFtSSxTQUFoTDtBQUFpTG1qQixnQkFBUSxFQUFDLGtCQUFTaGtCLENBQVQsRUFBV08sQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQ1IsV0FBQyxDQUFDZ2tCLElBQUYsQ0FBT0QsUUFBUCxDQUFnQjNqQixDQUFDLEdBQUMsR0FBRixHQUFNTCxDQUF0QixFQUF3Qk8sQ0FBeEIsRUFBMEJFLENBQTFCO0FBQTZCLFNBQXZPO0FBQXdPeWpCLGdCQUFRLEVBQUMsa0JBQVNqa0IsQ0FBVCxFQUFXO0FBQUNELFdBQUMsQ0FBQ3FqQixRQUFGLElBQVk1aUIsQ0FBQyxFQUFiO0FBQWdCO0FBQTdRLE9BQVQ7QUFBd1IsS0FBejdTLEVBQTA3U2YsQ0FBQyxDQUFDb2pCLEtBQUYsQ0FBUW9DLFdBQVIsR0FBb0IsVUFBU2xsQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQUlJLENBQUo7QUFBQSxVQUFNRSxDQUFDLEdBQUNOLENBQUMsQ0FBQ3dtQixVQUFGLElBQWMvaUIsRUFBQyxFQUF2QjtBQUFBLFVBQTBCakQsQ0FBQyxHQUFDLENBQTVCO0FBQUEsVUFBOEJFLENBQUMsR0FBQyxFQUFoQzs7QUFBbUMsZUFBU0UsQ0FBVCxDQUFXYixDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDMG1CLE9BQUYsR0FBVSxLQUFWLEVBQWdCcm1CLENBQUMsQ0FBQzRqQixJQUFGLENBQU9ELFFBQVAsQ0FBZ0J6akIsQ0FBQyxDQUFDZ0wsU0FBRixDQUFZdkwsQ0FBWixDQUFoQixDQUFoQjtBQUFnRDs7QUFBQSxlQUFTZSxDQUFULENBQVdmLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsWUFBSUksQ0FBQyxHQUFDb0IsS0FBSyxDQUFDYixTQUFOLENBQWdCa0IsS0FBdEI7QUFBNEIsZUFBTyxZQUFVO0FBQUMsY0FBSXZCLENBQUo7QUFBQSxjQUFNUSxDQUFDLEdBQUM4RCxTQUFTLENBQUM5QyxNQUFsQjtBQUFBLGNBQXlCZCxDQUFDLEdBQUM7QUFBQ2dhLGtCQUFNLEVBQUNoYjtBQUFSLFdBQTNCO0FBQXNDYyxXQUFDLEdBQUMsQ0FBRixJQUFLLGNBQVksT0FBTzhELFNBQVMsQ0FBQzlELENBQUMsR0FBQyxDQUFILENBQWpDLElBQXdDQSxDQUFDLEdBQUMsQ0FBRixJQUFLLGNBQVksT0FBTzhELFNBQVMsQ0FBQzlELENBQUMsR0FBQyxDQUFILENBQWpDLElBQXdDUixDQUFDLEdBQUM7QUFBQ29WLG1CQUFPLEVBQUM5USxTQUFTLENBQUM5RCxDQUFDLEdBQUMsQ0FBSCxDQUFsQjtBQUF3QmdhLGlCQUFLLEVBQUNsVyxTQUFTLENBQUM5RCxDQUFDLEdBQUMsQ0FBSDtBQUF2QyxXQUFGLEVBQWdERSxDQUFDLENBQUMwbEIsTUFBRixHQUFTdG1CLENBQUMsQ0FBQ2lCLElBQUYsQ0FBT3VELFNBQVAsRUFBaUIsQ0FBakIsRUFBbUI5RCxDQUFDLEdBQUMsQ0FBckIsQ0FBakcsS0FBMkhSLENBQUMsR0FBQztBQUFDb1YsbUJBQU8sRUFBQzlRLFNBQVMsQ0FBQzlELENBQUMsR0FBQyxDQUFIO0FBQWxCLFdBQUYsRUFBMkJFLENBQUMsQ0FBQzBsQixNQUFGLEdBQVN0bUIsQ0FBQyxDQUFDaUIsSUFBRixDQUFPdUQsU0FBUCxFQUFpQixDQUFqQixFQUFtQjlELENBQUMsR0FBQyxDQUFyQixDQUEvSixHQUF3TEosQ0FBQyxDQUFDLEtBQUksRUFBRUYsQ0FBUCxDQUFELEdBQVdGLENBQW5NLEVBQXFNVSxDQUFDLENBQUMrVCxFQUFGLEdBQUt2VSxDQUFsUCxJQUFxUFEsQ0FBQyxDQUFDMGxCLE1BQUYsR0FBU3RtQixDQUFDLENBQUNpQixJQUFGLENBQU91RCxTQUFQLEVBQWlCLENBQWpCLENBQTlQLEVBQWtSN0UsQ0FBQyxDQUFDNG1CLFdBQUYsSUFBZSxNQUFJM2xCLENBQUMsQ0FBQzBsQixNQUFGLENBQVM1a0IsTUFBNUIsS0FBcUNkLENBQUMsQ0FBQzBsQixNQUFGLEdBQVMxbEIsQ0FBQyxDQUFDMGxCLE1BQUYsQ0FBUyxDQUFULENBQTlDLENBQWxSLEVBQTZVOWxCLENBQUMsQ0FBQ0ksQ0FBRCxDQUE5VTtBQUFrVixTQUExWTtBQUEyWTs7QUFBQSxlQUFTQSxDQUFULENBQVdoQixDQUFYLEVBQWFJLENBQWIsRUFBZUUsQ0FBZixFQUFpQkUsQ0FBakIsRUFBbUI7QUFBQyxZQUFHRixDQUFILEVBQUs7QUFBQyxjQUFJSSxHQUFKLEVBQU1JLEVBQU47O0FBQVFWLFdBQUMsSUFBRU0sR0FBQyxHQUFDLFdBQVNYLENBQVQsRUFBVztBQUFDVyxlQUFDLEdBQUNhLENBQUYsRUFBSVgsQ0FBQyxDQUFDO0FBQUNtVSxnQkFBRSxFQUFDM1UsQ0FBSjtBQUFNd21CLG9CQUFNLEVBQUM3bUI7QUFBYixhQUFELENBQUw7QUFBdUIsV0FBckMsRUFBc0NlLEVBQUMsR0FBQyxXQUFTZixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDYyxjQUFDLEdBQUNTLENBQUY7QUFBSSxnQkFBSWpCLENBQUMsR0FBQztBQUFDeVUsZ0JBQUUsRUFBQzNVLENBQUo7QUFBTTBhLG1CQUFLLEVBQUM7QUFBQ3RGLG9CQUFJLEVBQUMsQ0FBQyxLQUFQO0FBQWFyQyx1QkFBTyxFQUFDcFQ7QUFBckI7QUFBWixhQUFOO0FBQTJDQyxhQUFDLEtBQUdNLENBQUMsQ0FBQ3dhLEtBQUYsQ0FBUXpGLElBQVIsR0FBYXJWLENBQWhCLENBQUQsRUFBb0JZLENBQUMsQ0FBQ04sQ0FBRCxDQUFyQjtBQUF5QixXQUFoSSxJQUFrSUksR0FBQyxHQUFDSSxFQUFDLEdBQUNTLENBQXZJLEVBQXlJLFVBQVN4QixDQUFULEVBQVc7QUFBQyxtQkFBTSxxQkFBbUJJLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkksUUFBakIsQ0FBMEJNLElBQTFCLENBQStCdEIsQ0FBL0IsQ0FBekI7QUFBMkQsV0FBdkUsQ0FBd0VTLENBQXhFLE1BQTZFQSxDQUFDLEdBQUMsQ0FBQ0EsQ0FBRCxDQUEvRSxDQUF6STs7QUFBNk4sY0FBRztBQUFDLGdCQUFJUSxDQUFDLEdBQUNqQixDQUFDLENBQUNtbEIsT0FBRixJQUFXNWtCLENBQUMsQ0FBQ3NYLEtBQW5CO0FBQUEsZ0JBQXlCMVcsQ0FBQyxHQUFDWixDQUFDLENBQUMwYSxNQUFGLENBQVNuWCxLQUFULENBQWU3QyxDQUFmLEVBQWlCUixDQUFDLENBQUNvSixNQUFGLENBQVMsQ0FBQ2xKLEdBQUQsRUFBR0ksRUFBSCxDQUFULENBQWpCLENBQTNCO0FBQTZEeUMsYUFBQyxDQUFDckMsQ0FBRCxDQUFELElBQU1SLEdBQUMsQ0FBQ1EsQ0FBRCxDQUFQO0FBQVcsV0FBNUUsQ0FBNEUsT0FBTW5CLENBQU4sRUFBUTtBQUFDZSxjQUFDLENBQUNmLENBQUMsQ0FBQ29ULE9BQUgsQ0FBRDtBQUFhO0FBQUMsU0FBOVUsTUFBbVYvUyxDQUFDLElBQUVRLENBQUMsQ0FBQztBQUFDbVUsWUFBRSxFQUFDM1UsQ0FBSjtBQUFNMGEsZUFBSyxFQUFDO0FBQUN0RixnQkFBSSxFQUFDLENBQUMsS0FBUDtBQUFhckMsbUJBQU8sRUFBQztBQUFyQjtBQUFaLFNBQUQsQ0FBSjtBQUFnRTs7QUFBQSxhQUFPL1MsQ0FBQyxHQUFDO0FBQUN5akIsZ0JBQVEsRUFBQyxrQkFBUzlqQixDQUFULEVBQVdLLENBQVgsRUFBYTtBQUFDLGNBQUlJLENBQUMsR0FBQ0YsQ0FBQyxDQUFDaVYsS0FBRixDQUFReFYsQ0FBUixDQUFOO0FBQWlCLGNBQUdTLENBQUMsQ0FBQ3dhLE1BQUwsRUFBWWhiLENBQUMsQ0FBQzZtQixNQUFGLEdBQVM3bUIsQ0FBQyxDQUFDNm1CLE1BQUYsQ0FBU3JtQixDQUFULEVBQVdJLENBQVgsQ0FBVCxHQUF1QkksQ0FBQyxDQUFDUixDQUFDLENBQUN3YSxNQUFILEVBQVV4YSxDQUFDLENBQUN1VSxFQUFaLEVBQWUvVSxDQUFDLENBQUN5aUIsS0FBRixDQUFRamlCLENBQUMsQ0FBQ3dhLE1BQVYsQ0FBZixFQUFpQ3hhLENBQUMsQ0FBQ2ttQixNQUFuQyxDQUF4QixDQUFaLEtBQW1GO0FBQUMsZ0JBQUk1bEIsQ0FBQyxHQUFDSixDQUFDLENBQUNGLENBQUMsQ0FBQ3VVLEVBQUgsQ0FBUDtBQUFjdlUsYUFBQyxDQUFDc2EsS0FBRixHQUFRaGEsQ0FBQyxDQUFDZ2EsS0FBRixJQUFTaGEsQ0FBQyxDQUFDZ2EsS0FBRixDQUFRdGEsQ0FBQyxDQUFDc2EsS0FBVixDQUFqQixHQUFrQ2hhLENBQUMsQ0FBQzRVLE9BQUYsSUFBVzVVLENBQUMsQ0FBQzRVLE9BQUYsQ0FBVWxWLENBQUMsQ0FBQ29tQixNQUFaLENBQTdDLEVBQWlFLE9BQU9sbUIsQ0FBQyxDQUFDRixDQUFDLENBQUN1VSxFQUFILENBQXpFO0FBQWdGO0FBQUMsU0FBNU47QUFBNk5tUCxZQUFJLEVBQUMsZ0JBQVU7QUFBQyxjQUFHbGtCLENBQUMsQ0FBQzBoQixNQUFMLEVBQVksS0FBSSxJQUFJcGhCLENBQVIsSUFBYU4sQ0FBQyxDQUFDMGhCLE1BQWY7QUFBc0IxaEIsYUFBQyxDQUFDMGhCLE1BQUYsQ0FBUzdnQixjQUFULENBQXdCUCxDQUF4QixNQUE2QlAsQ0FBQyxDQUFDTyxDQUFELENBQUQsR0FBS1EsQ0FBQyxDQUFDZCxDQUFDLENBQUMwaEIsTUFBRixDQUFTcGhCLENBQVQsQ0FBRCxFQUFhQSxDQUFiLENBQW5DO0FBQXRCO0FBQTBFRixXQUFDLENBQUM0akIsSUFBRixDQUFPRSxJQUFQO0FBQWMsU0FBalY7QUFBa1ZDLGVBQU8sRUFBQyxtQkFBVTtBQUFDLGVBQUksSUFBSTdqQixDQUFSLElBQWFOLENBQUMsQ0FBQzBoQixNQUFmO0FBQXNCMWhCLGFBQUMsQ0FBQzBoQixNQUFGLENBQVM3Z0IsY0FBVCxDQUF3QlAsQ0FBeEIsS0FBNEJQLENBQUMsQ0FBQ2MsY0FBRixDQUFpQlAsQ0FBakIsQ0FBNUIsSUFBaUQsT0FBT1AsQ0FBQyxDQUFDTyxDQUFELENBQXpEO0FBQXRCOztBQUFtRkYsV0FBQyxDQUFDNGpCLElBQUYsQ0FBT0csT0FBUDtBQUFpQjtBQUF6YyxPQUFUO0FBQW9kLEtBQS8yVixFQUFnM1YvaUIsQ0FBQyxDQUFDb2UsT0FBRixHQUFVL2YsQ0FBMTNWO0FBQTQzVixHQUE1aGpCLENBQTZoakJ5TSxNQUE3aGpCLEVBQW9pakJyQixRQUFwaWpCLEVBQTZpakI4RixRQUE3aWpCLEVBQXNqakJ6RSxNQUFNLENBQUNpTCxVQUE3ampCLEVBQXdrakIyUCxrQkFBeGtqQixFQUEybGpCMWIsa0JBQTNsakIsR0FBK21qQm9VLE9BQU8sQ0FBQytFLFVBQVIsQ0FBbUIsT0FBbkIsQ0FBam5qQixDQUFOO0FBQUEsTUFBb3BqQndDLEVBQUUsR0FBQ3pILEVBQXZwakI7QUFBQSxNQUEwcGpCMEgsRUFBRSxHQUFDLFlBQVU7QUFBQyxRQUFJam5CLENBQUo7QUFBQSxRQUFNQyxDQUFOO0FBQUEsUUFBUUksQ0FBQyxHQUFDQSxDQUFDLElBQUUsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxVQUFJSSxDQUFDLEdBQUMsRUFBTjtBQUFBLFVBQVNFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDNm1CLEdBQUYsR0FBTSxFQUFqQjtBQUFBLFVBQW9Cem1CLENBQUMsR0FBQyxTQUFGQSxDQUFFLEdBQVUsQ0FBRSxDQUFsQztBQUFBLFVBQW1DRSxDQUFDLEdBQUNKLENBQUMsQ0FBQzRtQixJQUFGLEdBQU87QUFBQ0MsY0FBTSxFQUFDLGdCQUFTcG5CLENBQVQsRUFBVztBQUFDUyxXQUFDLENBQUNHLFNBQUYsR0FBWSxJQUFaO0FBQWlCLGNBQUlYLENBQUMsR0FBQyxJQUFJUSxDQUFKLEVBQU47QUFBWSxpQkFBT1QsQ0FBQyxJQUFFQyxDQUFDLENBQUNvbkIsS0FBRixDQUFRcm5CLENBQVIsQ0FBSCxFQUFjQyxDQUFDLENBQUNhLGNBQUYsQ0FBaUIsTUFBakIsTUFBMkJiLENBQUMsQ0FBQ2trQixJQUFGLEdBQU8sWUFBVTtBQUFDbGtCLGFBQUMsQ0FBQ3FuQixNQUFGLENBQVNuRCxJQUFULENBQWNyZ0IsS0FBZCxDQUFvQixJQUFwQixFQUF5QmUsU0FBekI7QUFBb0MsV0FBakYsQ0FBZCxFQUFpRzVFLENBQUMsQ0FBQ2trQixJQUFGLENBQU92akIsU0FBUCxHQUFpQlgsQ0FBbEgsRUFBb0hBLENBQUMsQ0FBQ3FuQixNQUFGLEdBQVMsSUFBN0gsRUFBa0lybkIsQ0FBekk7QUFBMkksU0FBNUw7QUFBNkxzTixjQUFNLEVBQUMsa0JBQVU7QUFBQyxjQUFJdk4sQ0FBQyxHQUFDLEtBQUtvbkIsTUFBTCxFQUFOO0FBQW9CLGlCQUFPcG5CLENBQUMsQ0FBQ21rQixJQUFGLENBQU9yZ0IsS0FBUCxDQUFhOUQsQ0FBYixFQUFlNkUsU0FBZixHQUEwQjdFLENBQWpDO0FBQW1DLFNBQXRRO0FBQXVRbWtCLFlBQUksRUFBQyxnQkFBVSxDQUFFLENBQXhSO0FBQXlSa0QsYUFBSyxFQUFDLGVBQVNybkIsQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFSLElBQWFELENBQWI7QUFBZUEsYUFBQyxDQUFDYyxjQUFGLENBQWlCYixDQUFqQixNQUFzQixLQUFLQSxDQUFMLElBQVFELENBQUMsQ0FBQ0MsQ0FBRCxDQUEvQjtBQUFmOztBQUFtREQsV0FBQyxDQUFDYyxjQUFGLENBQWlCLFVBQWpCLE1BQStCLEtBQUtFLFFBQUwsR0FBY2hCLENBQUMsQ0FBQ2dCLFFBQS9DO0FBQXlELFNBQXZaO0FBQXdadW1CLGFBQUssRUFBQyxpQkFBVTtBQUFDLGlCQUFPLEtBQUtwRCxJQUFMLENBQVV2akIsU0FBVixDQUFvQndtQixNQUFwQixDQUEyQixJQUEzQixDQUFQO0FBQXdDO0FBQWpkLE9BQTVDO0FBQUEsVUFBK2Z2bUIsQ0FBQyxHQUFDTixDQUFDLENBQUNpbkIsU0FBRixHQUFZN21CLENBQUMsQ0FBQ3ltQixNQUFGLENBQVM7QUFBQ2pELFlBQUksRUFBQyxjQUFTbmtCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUNELFdBQUMsR0FBQyxLQUFLeW5CLEtBQUwsR0FBV3puQixDQUFDLElBQUUsRUFBaEIsRUFBbUIsS0FBSzBuQixRQUFMLEdBQWMsUUFBTXpuQixDQUFOLEdBQVFBLENBQVIsR0FBVSxJQUFFRCxDQUFDLENBQUMrQixNQUEvQztBQUFzRCxTQUExRTtBQUEyRWYsZ0JBQVEsRUFBQyxrQkFBU2hCLENBQVQsRUFBVztBQUFDLGlCQUFNLENBQUNBLENBQUMsSUFBRWlCLENBQUosRUFBT3NLLFNBQVAsQ0FBaUIsSUFBakIsQ0FBTjtBQUE2QixTQUE3SDtBQUE4SDFCLGNBQU0sRUFBQyxnQkFBUzdKLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxLQUFLd25CLEtBQVg7QUFBQSxjQUFpQnBuQixDQUFDLEdBQUNMLENBQUMsQ0FBQ3luQixLQUFyQjtBQUFBLGNBQTJCbG5CLENBQUMsR0FBQyxLQUFLbW5CLFFBQWxDO0FBQTJDLGNBQUcxbkIsQ0FBQyxHQUFDQSxDQUFDLENBQUMwbkIsUUFBSixFQUFhLEtBQUtDLEtBQUwsRUFBYixFQUEwQnBuQixDQUFDLEdBQUMsQ0FBL0IsRUFBaUMsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNULENBQWQsRUFBZ0JTLENBQUMsRUFBakI7QUFBb0JSLGFBQUMsQ0FBQ00sQ0FBQyxHQUFDRSxDQUFGLEtBQU0sQ0FBUCxDQUFELElBQVksQ0FBQ0osQ0FBQyxDQUFDSSxDQUFDLEtBQUcsQ0FBTCxDQUFELEtBQVcsS0FBR0EsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFsQixHQUFvQixHQUFyQixLQUEyQixLQUFHLENBQUNGLENBQUMsR0FBQ0UsQ0FBSCxJQUFNLENBQU4sR0FBUSxDQUFsRDtBQUFwQixXQUFqQyxNQUE4RyxJQUFHLFFBQU1KLENBQUMsQ0FBQzBCLE1BQVgsRUFBa0IsS0FBSXRCLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ1QsQ0FBVixFQUFZUyxDQUFDLElBQUUsQ0FBZjtBQUFpQlIsYUFBQyxDQUFDTSxDQUFDLEdBQUNFLENBQUYsS0FBTSxDQUFQLENBQUQsR0FBV0osQ0FBQyxDQUFDSSxDQUFDLEtBQUcsQ0FBTCxDQUFaO0FBQWpCLFdBQWxCLE1BQTREUixDQUFDLENBQUM2SCxJQUFGLENBQU9oRSxLQUFQLENBQWE3RCxDQUFiLEVBQWVJLENBQWY7QUFBa0IsaUJBQU8sS0FBS3FuQixRQUFMLElBQWUxbkIsQ0FBZixFQUFpQixJQUF4QjtBQUE2QixTQUFyWjtBQUFzWjJuQixhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJMW5CLENBQUMsR0FBQyxLQUFLd25CLEtBQVg7QUFBQSxjQUFpQnBuQixDQUFDLEdBQUMsS0FBS3FuQixRQUF4QjtBQUFpQ3puQixXQUFDLENBQUNJLENBQUMsS0FBRyxDQUFMLENBQUQsSUFBVSxjQUFZLEtBQUdBLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBN0IsRUFBK0JKLENBQUMsQ0FBQzhCLE1BQUYsR0FBUy9CLENBQUMsQ0FBQzRuQixJQUFGLENBQU92bkIsQ0FBQyxHQUFDLENBQVQsQ0FBeEM7QUFBb0QsU0FBNWY7QUFBNmZrbkIsYUFBSyxFQUFDLGlCQUFVO0FBQUMsY0FBSXZuQixDQUFDLEdBQUNXLENBQUMsQ0FBQzRtQixLQUFGLENBQVFqbUIsSUFBUixDQUFhLElBQWIsQ0FBTjtBQUF5QixpQkFBT3RCLENBQUMsQ0FBQ3luQixLQUFGLEdBQVEsS0FBS0EsS0FBTCxDQUFXM2xCLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBUixFQUE0QjlCLENBQW5DO0FBQXFDLFNBQTVrQjtBQUE2a0I0SyxjQUFNLEVBQUMsZ0JBQVMzSyxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUlJLENBQUMsR0FBQyxFQUFOLEVBQVNFLENBQUMsR0FBQyxDQUFmLEVBQWlCQSxDQUFDLEdBQUNOLENBQW5CLEVBQXFCTSxDQUFDLElBQUUsQ0FBeEI7QUFBMEJGLGFBQUMsQ0FBQ3lILElBQUYsQ0FBTyxhQUFXOUgsQ0FBQyxDQUFDNEssTUFBRixFQUFYLEdBQXNCLENBQTdCO0FBQTFCOztBQUEwRCxpQkFBTyxJQUFJL0osQ0FBQyxDQUFDc2pCLElBQU4sQ0FBVzlqQixDQUFYLEVBQWFKLENBQWIsQ0FBUDtBQUF1QjtBQUFqckIsT0FBVCxDQUE3Z0I7QUFBQSxVQUEwc0NjLENBQUMsR0FBQ1YsQ0FBQyxDQUFDd25CLEdBQUYsR0FBTSxFQUFsdEM7QUFBQSxVQUFxdEM1bUIsQ0FBQyxHQUFDRixDQUFDLENBQUMrbUIsR0FBRixHQUFNO0FBQUN2YyxpQkFBUyxFQUFDLG1CQUFTdkwsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUN5bkIsS0FBUjtBQUFjem5CLFdBQUMsR0FBQ0EsQ0FBQyxDQUFDMG5CLFFBQUo7O0FBQWEsZUFBSSxJQUFJcm5CLENBQUMsR0FBQyxFQUFOLEVBQVNFLENBQUMsR0FBQyxDQUFmLEVBQWlCQSxDQUFDLEdBQUNQLENBQW5CLEVBQXFCTyxDQUFDLEVBQXRCLEVBQXlCO0FBQUMsZ0JBQUlFLENBQUMsR0FBQ1IsQ0FBQyxDQUFDTSxDQUFDLEtBQUcsQ0FBTCxDQUFELEtBQVcsS0FBR0EsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFsQixHQUFvQixHQUExQjtBQUE4QkYsYUFBQyxDQUFDeUgsSUFBRixDQUFPLENBQUNySCxDQUFDLEtBQUcsQ0FBTCxFQUFRTyxRQUFSLENBQWlCLEVBQWpCLENBQVAsR0FBNkJYLENBQUMsQ0FBQ3lILElBQUYsQ0FBTyxDQUFDLEtBQUdySCxDQUFKLEVBQU9PLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBUCxDQUE3QjtBQUF5RDs7QUFBQSxpQkFBT1gsQ0FBQyxDQUFDbUwsSUFBRixDQUFPLEVBQVAsQ0FBUDtBQUFrQixTQUFyTDtBQUFzTGdLLGFBQUssRUFBQyxlQUFTeFYsQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQytCLE1BQVIsRUFBZTFCLENBQUMsR0FBQyxFQUFqQixFQUFvQkUsQ0FBQyxHQUFDLENBQTFCLEVBQTRCQSxDQUFDLEdBQUNOLENBQTlCLEVBQWdDTSxDQUFDLElBQUUsQ0FBbkM7QUFBcUNGLGFBQUMsQ0FBQ0UsQ0FBQyxLQUFHLENBQUwsQ0FBRCxJQUFVZ0MsUUFBUSxDQUFDdkMsQ0FBQyxDQUFDb2lCLE1BQUYsQ0FBUzdoQixDQUFULEVBQVcsQ0FBWCxDQUFELEVBQWUsRUFBZixDQUFSLElBQTRCLEtBQUdBLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBN0M7QUFBckM7O0FBQW9GLGlCQUFPLElBQUlNLENBQUMsQ0FBQ3NqQixJQUFOLENBQVc5akIsQ0FBWCxFQUFhSixDQUFDLEdBQUMsQ0FBZixDQUFQO0FBQXlCO0FBQXJULE9BQTd0QztBQUFBLFVBQW9oRGtCLENBQUMsR0FBQ0osQ0FBQyxDQUFDZ25CLE1BQUYsR0FBUztBQUFDeGMsaUJBQVMsRUFBQyxtQkFBU3ZMLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDeW5CLEtBQVI7QUFBY3puQixXQUFDLEdBQUNBLENBQUMsQ0FBQzBuQixRQUFKOztBQUFhLGVBQUksSUFBSXJuQixDQUFDLEdBQUMsRUFBTixFQUFTRSxDQUFDLEdBQUMsQ0FBZixFQUFpQkEsQ0FBQyxHQUFDUCxDQUFuQixFQUFxQk8sQ0FBQyxFQUF0QjtBQUF5QkYsYUFBQyxDQUFDeUgsSUFBRixDQUFPRCxNQUFNLENBQUNtZ0IsWUFBUCxDQUFvQi9uQixDQUFDLENBQUNNLENBQUMsS0FBRyxDQUFMLENBQUQsS0FBVyxLQUFHQSxDQUFDLEdBQUMsQ0FBRixHQUFJLENBQWxCLEdBQW9CLEdBQXhDLENBQVA7QUFBekI7O0FBQThFLGlCQUFPRixDQUFDLENBQUNtTCxJQUFGLENBQU8sRUFBUCxDQUFQO0FBQWtCLFNBQWxKO0FBQW1KZ0ssYUFBSyxFQUFDLGVBQVN4VixDQUFULEVBQVc7QUFBQyxlQUFJLElBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK0IsTUFBUixFQUFlMUIsQ0FBQyxHQUFDLEVBQWpCLEVBQW9CRSxDQUFDLEdBQUMsQ0FBMUIsRUFBNEJBLENBQUMsR0FBQ04sQ0FBOUIsRUFBZ0NNLENBQUMsRUFBakM7QUFBb0NGLGFBQUMsQ0FBQ0UsQ0FBQyxLQUFHLENBQUwsQ0FBRCxJQUFVLENBQUMsTUFBSVAsQ0FBQyxDQUFDaW9CLFVBQUYsQ0FBYTFuQixDQUFiLENBQUwsS0FBdUIsS0FBR0EsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUF4QztBQUFwQzs7QUFBOEUsaUJBQU8sSUFBSU0sQ0FBQyxDQUFDc2pCLElBQU4sQ0FBVzlqQixDQUFYLEVBQWFKLENBQWIsQ0FBUDtBQUF1QjtBQUExUSxPQUEvaEQ7QUFBQSxVQUEyeURtQixDQUFDLEdBQUNMLENBQUMsQ0FBQ21uQixJQUFGLEdBQU87QUFBQzNjLGlCQUFTLEVBQUMsbUJBQVN2TCxDQUFULEVBQVc7QUFBQyxjQUFHO0FBQUMsbUJBQU8rbUIsa0JBQWtCLENBQUNvQixNQUFNLENBQUNobkIsQ0FBQyxDQUFDb0ssU0FBRixDQUFZdkwsQ0FBWixDQUFELENBQVAsQ0FBekI7QUFBa0QsV0FBdEQsQ0FBc0QsT0FBTUEsQ0FBTixFQUFRO0FBQUMsa0JBQU0wTCxLQUFLLENBQUMsc0JBQUQsQ0FBWDtBQUFvQztBQUFDLFNBQTNIO0FBQTRIOEosYUFBSyxFQUFDLGVBQVN4VixDQUFULEVBQVc7QUFBQyxpQkFBT21CLENBQUMsQ0FBQ3FVLEtBQUYsQ0FBUTRTLFFBQVEsQ0FBQy9jLGtCQUFrQixDQUFDckwsQ0FBRCxDQUFuQixDQUFoQixDQUFQO0FBQWdEO0FBQTlMLE9BQXB6RDtBQUFBLFVBQW8vRHFCLENBQUMsR0FBQ2QsQ0FBQyxDQUFDOG5CLHNCQUFGLEdBQXlCMW5CLENBQUMsQ0FBQ3ltQixNQUFGLENBQVM7QUFBQ2tCLGFBQUssRUFBQyxpQkFBVTtBQUFDLGVBQUt4YyxLQUFMLEdBQVcsSUFBSWpMLENBQUMsQ0FBQ3NqQixJQUFOLEVBQVgsRUFBc0IsS0FBS29FLFdBQUwsR0FBaUIsQ0FBdkM7QUFBeUMsU0FBM0Q7QUFBNERDLGVBQU8sRUFBQyxpQkFBU3hvQixDQUFULEVBQVc7QUFBQyxzQkFBVSxPQUFPQSxDQUFqQixLQUFxQkEsQ0FBQyxHQUFDb0IsQ0FBQyxDQUFDb1UsS0FBRixDQUFReFYsQ0FBUixDQUF2QixHQUFtQyxLQUFLOEwsS0FBTCxDQUFXakMsTUFBWCxDQUFrQjdKLENBQWxCLENBQW5DLEVBQXdELEtBQUt1b0IsV0FBTCxJQUFrQnZvQixDQUFDLENBQUMwbkIsUUFBNUU7QUFBcUYsU0FBcks7QUFBc0tlLGdCQUFRLEVBQUMsa0JBQVN4b0IsQ0FBVCxFQUFXO0FBQUMsY0FBSUksQ0FBQyxHQUFDLEtBQUt5TCxLQUFYO0FBQUEsY0FBaUJ2TCxDQUFDLEdBQUNGLENBQUMsQ0FBQ29uQixLQUFyQjtBQUFBLGNBQTJCaG5CLENBQUMsR0FBQ0osQ0FBQyxDQUFDcW5CLFFBQS9CO0FBQUEsY0FBd0MvbUIsQ0FBQyxHQUFDLEtBQUsrbkIsU0FBL0M7QUFBQSxjQUF5RDNuQixDQUFDLEdBQUNOLENBQUMsSUFBRSxJQUFFRSxDQUFKLENBQTVEOztBQUFtRSxjQUFHVixDQUFDLEdBQUMsQ0FBQ2MsQ0FBQyxHQUFDZCxDQUFDLEdBQUNELENBQUMsQ0FBQzRuQixJQUFGLENBQU83bUIsQ0FBUCxDQUFELEdBQVdmLENBQUMsQ0FBQ3dGLEdBQUYsQ0FBTSxDQUFDLElBQUV6RSxDQUFILElBQU0sS0FBSzRuQixjQUFqQixFQUFnQyxDQUFoQyxDQUFmLElBQW1EaG9CLENBQXJELEVBQXVERixDQUFDLEdBQUNULENBQUMsQ0FBQzRvQixHQUFGLENBQU0sSUFBRTNvQixDQUFSLEVBQVVRLENBQVYsQ0FBekQsRUFBc0VSLENBQXpFLEVBQTJFO0FBQUMsaUJBQUksSUFBSWdCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2hCLENBQWQsRUFBZ0JnQixDQUFDLElBQUVOLENBQW5CO0FBQXFCLG1CQUFLa29CLGVBQUwsQ0FBcUJ0b0IsQ0FBckIsRUFBdUJVLENBQXZCO0FBQXJCOztBQUErQ0EsYUFBQyxHQUFDVixDQUFDLENBQUNtVyxNQUFGLENBQVMsQ0FBVCxFQUFXelcsQ0FBWCxDQUFGLEVBQWdCSSxDQUFDLENBQUNxbkIsUUFBRixJQUFZam5CLENBQTVCO0FBQThCOztBQUFBLGlCQUFPLElBQUlJLENBQUMsQ0FBQ3NqQixJQUFOLENBQVdsakIsQ0FBWCxFQUFhUixDQUFiLENBQVA7QUFBdUIsU0FBOWE7QUFBK2E4bUIsYUFBSyxFQUFDLGlCQUFVO0FBQUMsY0FBSXZuQixDQUFDLEdBQUNXLENBQUMsQ0FBQzRtQixLQUFGLENBQVFqbUIsSUFBUixDQUFhLElBQWIsQ0FBTjtBQUF5QixpQkFBT3RCLENBQUMsQ0FBQzhMLEtBQUYsR0FBUSxLQUFLQSxLQUFMLENBQVd5YixLQUFYLEVBQVIsRUFBMkJ2bkIsQ0FBbEM7QUFBb0MsU0FBN2Y7QUFBOGYyb0Isc0JBQWMsRUFBQztBQUE3Z0IsT0FBVCxDQUEvZ0U7O0FBQXlpRnBvQixPQUFDLENBQUN1b0IsTUFBRixHQUFTem5CLENBQUMsQ0FBQytsQixNQUFGLENBQVM7QUFBQzJCLFdBQUcsRUFBQ3BvQixDQUFDLENBQUN5bUIsTUFBRixFQUFMO0FBQWdCakQsWUFBSSxFQUFDLGNBQVNua0IsQ0FBVCxFQUFXO0FBQUMsZUFBSytvQixHQUFMLEdBQVMsS0FBS0EsR0FBTCxDQUFTM0IsTUFBVCxDQUFnQnBuQixDQUFoQixDQUFULEVBQTRCLEtBQUtzb0IsS0FBTCxFQUE1QjtBQUF5QyxTQUExRTtBQUEyRUEsYUFBSyxFQUFDLGlCQUFVO0FBQUNqbkIsV0FBQyxDQUFDaW5CLEtBQUYsQ0FBUWhuQixJQUFSLENBQWEsSUFBYixHQUFtQixLQUFLMG5CLFFBQUwsRUFBbkI7QUFBbUMsU0FBL0g7QUFBZ0lDLGNBQU0sRUFBQyxnQkFBU2pwQixDQUFULEVBQVc7QUFBQyxpQkFBTyxLQUFLd29CLE9BQUwsQ0FBYXhvQixDQUFiLEdBQWdCLEtBQUt5b0IsUUFBTCxFQUFoQixFQUFnQyxJQUF2QztBQUE0QyxTQUEvTDtBQUFnTVMsZ0JBQVEsRUFBQyxrQkFBU2xwQixDQUFULEVBQVc7QUFBQyxpQkFBT0EsQ0FBQyxJQUFFLEtBQUt3b0IsT0FBTCxDQUFheG9CLENBQWIsQ0FBSCxFQUFtQixLQUFLbXBCLFdBQUwsRUFBMUI7QUFBNkMsU0FBbFE7QUFBbVFULGlCQUFTLEVBQUMsRUFBN1E7QUFBZ1JVLHFCQUFhLEVBQUMsdUJBQVNwcEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sVUFBU0MsQ0FBVCxFQUFXSSxDQUFYLEVBQWE7QUFBQyxtQkFBTyxJQUFJTCxDQUFDLENBQUNta0IsSUFBTixDQUFXOWpCLENBQVgsRUFBYzZvQixRQUFkLENBQXVCanBCLENBQXZCLENBQVA7QUFBaUMsV0FBdEQ7QUFBdUQsU0FBalc7QUFBa1dvcEIseUJBQWlCLEVBQUMsMkJBQVNycEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sVUFBU0MsQ0FBVCxFQUFXSSxDQUFYLEVBQWE7QUFBQyxtQkFBTyxJQUFJa0IsQ0FBQyxDQUFDK25CLElBQUYsQ0FBT25GLElBQVgsQ0FBZ0Jua0IsQ0FBaEIsRUFBa0JLLENBQWxCLEVBQXFCNm9CLFFBQXJCLENBQThCanBCLENBQTlCLENBQVA7QUFBd0MsV0FBN0Q7QUFBOEQ7QUFBOWIsT0FBVCxDQUFUO0FBQW1kLFVBQUlzQixDQUFDLEdBQUNsQixDQUFDLENBQUNrcEIsSUFBRixHQUFPLEVBQWI7QUFBZ0IsYUFBT2xwQixDQUFQO0FBQVMsS0FBbmlHLENBQW9pR2tGLElBQXBpRyxDQUFiOztBQUF1akcsV0FBT3RGLENBQUMsR0FBQyxDQUFDRCxDQUFDLEdBQUNLLENBQUgsRUFBTTZtQixHQUFOLENBQVVNLFNBQVosRUFBc0J4bkIsQ0FBQyxDQUFDNm5CLEdBQUYsQ0FBTTJCLE1BQU4sR0FBYTtBQUFDamUsZUFBUyxFQUFDLG1CQUFTdkwsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUN5bkIsS0FBUjtBQUFBLFlBQWNwbkIsQ0FBQyxHQUFDTCxDQUFDLENBQUMwbkIsUUFBbEI7QUFBQSxZQUEyQm5uQixDQUFDLEdBQUMsS0FBS2twQixJQUFsQztBQUF1Q3pwQixTQUFDLENBQUMybkIsS0FBRixJQUFVM25CLENBQUMsR0FBQyxFQUFaOztBQUFlLGFBQUksSUFBSVMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDSixDQUFkLEVBQWdCSSxDQUFDLElBQUUsQ0FBbkI7QUFBcUIsZUFBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQ1YsQ0FBQyxDQUFDUSxDQUFDLEtBQUcsQ0FBTCxDQUFELEtBQVcsS0FBR0EsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFsQixHQUFvQixHQUFyQixLQUEyQixFQUEzQixHQUE4QixDQUFDUixDQUFDLENBQUNRLENBQUMsR0FBQyxDQUFGLEtBQU0sQ0FBUCxDQUFELEtBQWEsS0FBRyxDQUFDQSxDQUFDLEdBQUMsQ0FBSCxJQUFNLENBQU4sR0FBUSxDQUF4QixHQUEwQixHQUEzQixLQUFpQyxDQUEvRCxHQUFpRVIsQ0FBQyxDQUFDUSxDQUFDLEdBQUMsQ0FBRixLQUFNLENBQVAsQ0FBRCxLQUFhLEtBQUcsQ0FBQ0EsQ0FBQyxHQUFDLENBQUgsSUFBTSxDQUFOLEdBQVEsQ0FBeEIsR0FBMEIsR0FBakcsRUFBcUdJLENBQUMsR0FBQyxDQUEzRyxFQUE2RyxJQUFFQSxDQUFGLElBQUtKLENBQUMsR0FBQyxNQUFJSSxDQUFOLEdBQVFSLENBQTFILEVBQTRIUSxDQUFDLEVBQTdIO0FBQWdJYixhQUFDLENBQUM4SCxJQUFGLENBQU92SCxDQUFDLENBQUMwQixNQUFGLENBQVN0QixDQUFDLEtBQUcsS0FBRyxJQUFFRSxDQUFMLENBQUosR0FBWSxFQUFyQixDQUFQO0FBQWhJO0FBQXJCOztBQUFzTCxZQUFHWixDQUFDLEdBQUNNLENBQUMsQ0FBQzBCLE1BQUYsQ0FBUyxFQUFULENBQUwsRUFBa0IsT0FBS2pDLENBQUMsQ0FBQytCLE1BQUYsR0FBUyxDQUFkO0FBQWlCL0IsV0FBQyxDQUFDOEgsSUFBRixDQUFPN0gsQ0FBUDtBQUFqQjtBQUEyQixlQUFPRCxDQUFDLENBQUN3TCxJQUFGLENBQU8sRUFBUCxDQUFQO0FBQWtCLE9BQWxVO0FBQW1VZ0ssV0FBSyxFQUFDLGVBQVN4VixDQUFULEVBQVc7QUFBQyxZQUFJSyxDQUFDLEdBQUNMLENBQUMsQ0FBQytCLE1BQVI7QUFBQSxZQUFleEIsQ0FBQyxHQUFDLEtBQUtrcEIsSUFBdEI7QUFBMkIsU0FBQ2hwQixDQUFDLEdBQUNGLENBQUMsQ0FBQzBCLE1BQUYsQ0FBUyxFQUFULENBQUgsS0FBa0IsQ0FBQyxDQUFELEtBQUt4QixDQUFDLEdBQUNULENBQUMsQ0FBQ3dLLE9BQUYsQ0FBVS9KLENBQVYsQ0FBUCxDQUFsQixLQUF5Q0osQ0FBQyxHQUFDSSxDQUEzQzs7QUFBOEMsYUFBSSxJQUFJQSxDQUFDLEdBQUMsRUFBTixFQUFTRSxDQUFDLEdBQUMsQ0FBWCxFQUFhRSxDQUFDLEdBQUMsQ0FBbkIsRUFBcUJBLENBQUMsR0FBQ1IsQ0FBdkIsRUFBeUJRLENBQUMsRUFBMUI7QUFBNkIsY0FBR0EsQ0FBQyxHQUFDLENBQUwsRUFBTztBQUFDLGdCQUFJRSxDQUFDLEdBQUNSLENBQUMsQ0FBQ2lLLE9BQUYsQ0FBVXhLLENBQUMsQ0FBQ2lDLE1BQUYsQ0FBU3BCLENBQUMsR0FBQyxDQUFYLENBQVYsS0FBMEJBLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBcEM7QUFBQSxnQkFBc0NJLENBQUMsR0FBQ1YsQ0FBQyxDQUFDaUssT0FBRixDQUFVeEssQ0FBQyxDQUFDaUMsTUFBRixDQUFTcEIsQ0FBVCxDQUFWLE1BQXlCLElBQUVBLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBdkU7QUFBeUVKLGFBQUMsQ0FBQ0UsQ0FBQyxLQUFHLENBQUwsQ0FBRCxJQUFVLENBQUNJLENBQUMsR0FBQ0UsQ0FBSCxLQUFPLEtBQUdOLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBeEIsRUFBMEJBLENBQUMsRUFBM0I7QUFBOEI7QUFBNUk7O0FBQTRJLGVBQU9WLENBQUMsQ0FBQ3NOLE1BQUYsQ0FBUzlNLENBQVQsRUFBV0UsQ0FBWCxDQUFQO0FBQXFCLE9BQS9qQjtBQUFna0I4b0IsVUFBSSxFQUFDO0FBQXJrQixLQUFuQyxFQUE2cUIsVUFBU3pwQixDQUFULEVBQVc7QUFBQyxlQUFTQyxDQUFULENBQVdELENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCRSxDQUFqQixFQUFtQkUsQ0FBbkIsRUFBcUJFLENBQXJCLEVBQXVCRSxDQUF2QixFQUF5QjtBQUFDLGVBQU0sQ0FBQyxDQUFDYixDQUFDLEdBQUNBLENBQUMsSUFBRUMsQ0FBQyxHQUFDSSxDQUFGLEdBQUksQ0FBQ0osQ0FBRCxHQUFHTSxDQUFULENBQUQsR0FBYUUsQ0FBYixHQUFlSSxDQUFsQixLQUFzQkYsQ0FBdEIsR0FBd0JYLENBQUMsS0FBRyxLQUFHVyxDQUFoQyxJQUFtQ1YsQ0FBekM7QUFBMkM7O0FBQUEsZUFBU00sQ0FBVCxDQUFXUCxDQUFYLEVBQWFDLENBQWIsRUFBZUksQ0FBZixFQUFpQkUsQ0FBakIsRUFBbUJFLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkUsQ0FBdkIsRUFBeUI7QUFBQyxlQUFNLENBQUMsQ0FBQ2IsQ0FBQyxHQUFDQSxDQUFDLElBQUVDLENBQUMsR0FBQ00sQ0FBRixHQUFJRixDQUFDLEdBQUMsQ0FBQ0UsQ0FBVCxDQUFELEdBQWFFLENBQWIsR0FBZUksQ0FBbEIsS0FBc0JGLENBQXRCLEdBQXdCWCxDQUFDLEtBQUcsS0FBR1csQ0FBaEMsSUFBbUNWLENBQXpDO0FBQTJDOztBQUFBLGVBQVNRLENBQVQsQ0FBV1QsQ0FBWCxFQUFhQyxDQUFiLEVBQWVJLENBQWYsRUFBaUJFLENBQWpCLEVBQW1CRSxDQUFuQixFQUFxQkUsQ0FBckIsRUFBdUJFLENBQXZCLEVBQXlCO0FBQUMsZUFBTSxDQUFDLENBQUNiLENBQUMsR0FBQ0EsQ0FBQyxJQUFFQyxDQUFDLEdBQUNJLENBQUYsR0FBSUUsQ0FBTixDQUFELEdBQVVFLENBQVYsR0FBWUksQ0FBZixLQUFtQkYsQ0FBbkIsR0FBcUJYLENBQUMsS0FBRyxLQUFHVyxDQUE3QixJQUFnQ1YsQ0FBdEM7QUFBd0M7O0FBQUEsZUFBU1UsQ0FBVCxDQUFXWCxDQUFYLEVBQWFDLENBQWIsRUFBZUksQ0FBZixFQUFpQkUsQ0FBakIsRUFBbUJFLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkUsQ0FBdkIsRUFBeUI7QUFBQyxlQUFNLENBQUMsQ0FBQ2IsQ0FBQyxHQUFDQSxDQUFDLElBQUVLLENBQUMsSUFBRUosQ0FBQyxHQUFDLENBQUNNLENBQUwsQ0FBSCxDQUFELEdBQWFFLENBQWIsR0FBZUksQ0FBbEIsS0FBc0JGLENBQXRCLEdBQXdCWCxDQUFDLEtBQUcsS0FBR1csQ0FBaEMsSUFBbUNWLENBQXpDO0FBQTJDOztBQUFBLFdBQUksSUFBSVksQ0FBQyxHQUFDUixDQUFOLEVBQVFVLENBQUMsR0FBQyxDQUFDSSxDQUFDLEdBQUNOLENBQUMsQ0FBQ3FtQixHQUFMLEVBQVVNLFNBQXBCLEVBQThCdm1CLENBQUMsR0FBQ0UsQ0FBQyxDQUFDMm5CLE1BQWxDLEVBQXlDM25CLENBQUMsR0FBQ04sQ0FBQyxDQUFDMG9CLElBQTdDLEVBQWtEbm9CLENBQUMsR0FBQyxFQUFwRCxFQUF1REMsQ0FBQyxHQUFDLENBQTdELEVBQStELEtBQUdBLENBQWxFLEVBQW9FQSxDQUFDLEVBQXJFO0FBQXdFRCxTQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFLLGFBQVdyQixDQUFDLENBQUMwcEIsR0FBRixDQUFNMXBCLENBQUMsQ0FBQzJwQixHQUFGLENBQU10b0IsQ0FBQyxHQUFDLENBQVIsQ0FBTixDQUFYLEdBQTZCLENBQWxDO0FBQXhFOztBQUE0R0YsT0FBQyxHQUFDQSxDQUFDLENBQUN5b0IsR0FBRixHQUFNM29CLENBQUMsQ0FBQ21tQixNQUFGLENBQVM7QUFBQzRCLGdCQUFRLEVBQUMsb0JBQVU7QUFBQyxlQUFLYSxLQUFMLEdBQVcsSUFBSTlvQixDQUFDLENBQUNvakIsSUFBTixDQUFXLENBQUMsVUFBRCxFQUFZLFVBQVosRUFBdUIsVUFBdkIsRUFBa0MsU0FBbEMsQ0FBWCxDQUFYO0FBQW9FLFNBQXpGO0FBQTBGMEUsdUJBQWUsRUFBQyx5QkFBUzdvQixDQUFULEVBQVdLLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSVEsQ0FBQyxHQUFDLENBQVYsRUFBWSxLQUFHQSxDQUFmLEVBQWlCQSxDQUFDLEVBQWxCLEVBQXFCO0FBQUMsZ0JBQUlFLENBQUMsR0FBQ2YsQ0FBQyxDQUFDaUIsQ0FBQyxHQUFDWixDQUFDLEdBQUNRLENBQUwsQ0FBUDtBQUFlYixhQUFDLENBQUNpQixDQUFELENBQUQsR0FBSyxZQUFVRixDQUFDLElBQUUsQ0FBSCxHQUFLQSxDQUFDLEtBQUcsRUFBbkIsSUFBdUIsY0FBWUEsQ0FBQyxJQUFFLEVBQUgsR0FBTUEsQ0FBQyxLQUFHLENBQXRCLENBQTVCO0FBQXFEOztBQUFBRixXQUFDLEdBQUMsS0FBS2dwQixLQUFMLENBQVdwQyxLQUFiO0FBQW1CLGNBQUl4bUIsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUFQO0FBQUEsY0FBYWMsQ0FBQyxJQUFFSixDQUFDLEdBQUNmLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLENBQUgsQ0FBSCxFQUFTTCxDQUFDLENBQUNLLENBQUMsR0FBQyxDQUFILENBQVosQ0FBZDtBQUFBLGNBQWlDZ0IsQ0FBQyxHQUFDckIsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUFwQztBQUFBLGNBQTBDa0IsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUE3QztBQUFBLGNBQW1EbUIsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUF0RDtBQUFBLGNBQTREc0IsQ0FBQyxHQUFDM0IsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUEvRDtBQUFBLGNBQXFFdUIsQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUF4RTtBQUFBLGNBQThFd0IsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUFqRjtBQUFBLGNBQXVGOEIsQ0FBQyxHQUFDbkMsQ0FBQyxDQUFDSyxDQUFDLEdBQUMsQ0FBSCxDQUExRjtBQUFBLGNBQWdHWCxDQUFDLEdBQUNNLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBbkc7QUFBQSxjQUEwRytCLENBQUMsR0FBQ3BDLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBN0c7QUFBQSxjQUFvSGdDLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBdkg7QUFBQSxjQUE4SGlDLENBQUMsR0FBQ3RDLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBakk7QUFBQSxjQUF3SW1DLENBQUMsR0FBQ3hDLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBM0k7QUFBQSxjQUFrSnNDLENBQUMsR0FBQzNDLENBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEVBQUgsQ0FBcko7QUFBQSxjQUE0SlosQ0FBQyxHQUFDUSxDQUFDLENBQUNSLENBQUMsR0FBQ29CLENBQUMsQ0FBQyxDQUFELENBQUosRUFBUWlDLENBQUMsR0FBQ2pDLENBQUMsQ0FBQyxDQUFELENBQVgsRUFBZWdDLENBQUMsR0FBQ2hDLENBQUMsQ0FBQyxDQUFELENBQWxCLEVBQXNCK0IsQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDLENBQUQsQ0FBekIsRUFBNkJJLENBQTdCLEVBQStCLENBQS9CLEVBQWlDRyxDQUFDLENBQUMsQ0FBRCxDQUFsQyxDQUEvSjtBQUFBLGNBQXNNd0IsQ0FBQyxHQUFDM0MsQ0FBQyxDQUFDMkMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVM5QixDQUFULEVBQVcsRUFBWCxFQUFjSyxDQUFDLENBQUMsQ0FBRCxDQUFmLENBQXpNO0FBQUEsY0FBNk55QixDQUFDLEdBQUM1QyxDQUFDLENBQUM0QyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBUzNCLENBQVQsRUFBVyxFQUFYLEVBQWNDLENBQUMsQ0FBQyxDQUFELENBQWYsQ0FBaE87QUFBQSxjQUFvUDBCLENBQUMsR0FBQzdDLENBQUMsQ0FBQzZDLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVM0QixDQUFULEVBQVcsRUFBWCxFQUFjRCxDQUFDLENBQUMsQ0FBRCxDQUFmLENBQXZQO0FBQTJRM0IsV0FBQyxHQUFDUSxDQUFDLENBQUNSLENBQUQsRUFBR3FELENBQUgsRUFBS0QsQ0FBTCxFQUFPRCxDQUFQLEVBQVNyQixDQUFULEVBQVcsQ0FBWCxFQUFhSCxDQUFDLENBQUMsQ0FBRCxDQUFkLENBQUgsRUFBc0J3QixDQUFDLEdBQUMzQyxDQUFDLENBQUMyQyxDQUFELEVBQUduRCxDQUFILEVBQUtxRCxDQUFMLEVBQU9ELENBQVAsRUFBU3JCLENBQVQsRUFBVyxFQUFYLEVBQWNKLENBQUMsQ0FBQyxDQUFELENBQWYsQ0FBekIsRUFBNkN5QixDQUFDLEdBQUM1QyxDQUFDLENBQUM0QyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU25CLENBQVQsRUFBVyxFQUFYLEVBQWNQLENBQUMsQ0FBQyxDQUFELENBQWYsQ0FBaEQsRUFBb0UwQixDQUFDLEdBQUM3QyxDQUFDLENBQUM2QyxDQUFELEVBQUdELENBQUgsRUFBS0QsQ0FBTCxFQUFPbkQsQ0FBUCxFQUFTbUMsQ0FBVCxFQUFXLEVBQVgsRUFBY1IsQ0FBQyxDQUFDLENBQUQsQ0FBZixDQUF2RSxFQUEyRjNCLENBQUMsR0FBQ1EsQ0FBQyxDQUFDUixDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTZixDQUFULEVBQVcsQ0FBWCxFQUFhVCxDQUFDLENBQUMsQ0FBRCxDQUFkLENBQTlGLEVBQWlId0IsQ0FBQyxHQUFDM0MsQ0FBQyxDQUFDMkMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVNWLENBQVQsRUFBVyxFQUFYLEVBQWNmLENBQUMsQ0FBQyxDQUFELENBQWYsQ0FBcEgsRUFBd0l5QixDQUFDLEdBQUM1QyxDQUFDLENBQUM0QyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU3BELENBQVQsRUFBVyxFQUFYLEVBQWMwQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQTNJLEVBQWdLMEIsQ0FBQyxHQUFDN0MsQ0FBQyxDQUFDNkMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBUzJDLENBQVQsRUFBVyxFQUFYLEVBQWNoQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQW5LLEVBQXdMM0IsQ0FBQyxHQUFDUSxDQUFDLENBQUNSLENBQUQsRUFBR3FELENBQUgsRUFBS0QsQ0FBTCxFQUFPRCxDQUFQLEVBQVNQLENBQVQsRUFBVyxDQUFYLEVBQWFqQixDQUFDLENBQUMsRUFBRCxDQUFkLENBQTNMLEVBQStNd0IsQ0FBQyxHQUFDM0MsQ0FBQyxDQUFDMkMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVNQLENBQVQsRUFBVyxFQUFYLEVBQWNsQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQWxOLEVBQXVPeUIsQ0FBQyxHQUFDNUMsQ0FBQyxDQUFDNEMsQ0FBRCxFQUFHRCxDQUFILEVBQUtuRCxDQUFMLEVBQU9xRCxDQUFQLEVBQVNOLENBQVQsRUFBVyxFQUFYLEVBQWNwQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQTFPLEVBQStQM0IsQ0FBQyxHQUFDYyxDQUFDLENBQUNkLENBQUQsRUFBR3FELENBQUMsR0FBQzdDLENBQUMsQ0FBQzZDLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVNrRCxDQUFULEVBQVcsRUFBWCxFQUFjdkIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUFOLEVBQTJCeUIsQ0FBM0IsRUFBNkJELENBQTdCLEVBQStCN0IsQ0FBL0IsRUFBaUMsQ0FBakMsRUFBbUNLLENBQUMsQ0FBQyxFQUFELENBQXBDLENBQWxRLEVBQTRTd0IsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDcUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVNsQixDQUFULEVBQVcsQ0FBWCxFQUFhUCxDQUFDLENBQUMsRUFBRCxDQUFkLENBQS9TLEVBQW1VeUIsQ0FBQyxHQUFDdEMsQ0FBQyxDQUFDc0MsQ0FBRCxFQUFHRCxDQUFILEVBQUtuRCxDQUFMLEVBQU9xRCxDQUFQLEVBQVNWLENBQVQsRUFBVyxFQUFYLEVBQWNoQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQXRVLEVBQTJWMEIsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDdUMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBU3dCLENBQVQsRUFBVyxFQUFYLEVBQWNHLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBOVYsRUFBbVgzQixDQUFDLEdBQUNjLENBQUMsQ0FBQ2QsQ0FBRCxFQUFHcUQsQ0FBSCxFQUFLRCxDQUFMLEVBQU9ELENBQVAsRUFBU3BCLENBQVQsRUFBVyxDQUFYLEVBQWFKLENBQUMsQ0FBQyxFQUFELENBQWQsQ0FBdFgsRUFBMFl3QixDQUFDLEdBQUNyQyxDQUFDLENBQUNxQyxDQUFELEVBQUduRCxDQUFILEVBQUtxRCxDQUFMLEVBQU9ELENBQVAsRUFBU25ELENBQVQsRUFBVyxDQUFYLEVBQWEwQixDQUFDLENBQUMsRUFBRCxDQUFkLENBQTdZLEVBQWlheUIsQ0FBQyxHQUFDdEMsQ0FBQyxDQUFDc0MsQ0FBRCxFQUFHRCxDQUFILEVBQUtuRCxDQUFMLEVBQU9xRCxDQUFQLEVBQVNILENBQVQsRUFBVyxFQUFYLEVBQWN2QixDQUFDLENBQUMsRUFBRCxDQUFmLENBQXBhLEVBQXliMEIsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDdUMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBUzhCLENBQVQsRUFBVyxFQUFYLEVBQWNILENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBNWIsRUFBaWQzQixDQUFDLEdBQUNjLENBQUMsQ0FBQ2QsQ0FBRCxFQUFHcUQsQ0FBSCxFQUFLRCxDQUFMLEVBQU9ELENBQVAsRUFBU1QsQ0FBVCxFQUFXLENBQVgsRUFBYWYsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUFwZCxFQUF3ZXdCLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3FDLENBQUQsRUFBR25ELENBQUgsRUFBS3FELENBQUwsRUFBT0QsQ0FBUCxFQUFTTCxDQUFULEVBQVcsQ0FBWCxFQUFhcEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUEzZSxFQUErZnlCLENBQUMsR0FBQ3RDLENBQUMsQ0FBQ3NDLENBQUQsRUFBR0QsQ0FBSCxFQUFLbkQsQ0FBTCxFQUFPcUQsQ0FBUCxFQUFTekIsQ0FBVCxFQUFXLEVBQVgsRUFBY0QsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUFsZ0IsRUFBdWhCMEIsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDdUMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBU29DLENBQVQsRUFBVyxFQUFYLEVBQWNULENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBMWhCLEVBQStpQjNCLENBQUMsR0FBQ2MsQ0FBQyxDQUFDZCxDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTTixDQUFULEVBQVcsQ0FBWCxFQUFhbEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUFsakIsRUFBc2tCd0IsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDcUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVMxQixDQUFULEVBQVcsQ0FBWCxFQUFhQyxDQUFDLENBQUMsRUFBRCxDQUFkLENBQXprQixFQUE2bEJ5QixDQUFDLEdBQUN0QyxDQUFDLENBQUNzQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU2xCLENBQVQsRUFBVyxFQUFYLEVBQWNSLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBaG1CLEVBQXFuQjNCLENBQUMsR0FBQ2dCLENBQUMsQ0FBQ2hCLENBQUQsRUFBR3FELENBQUMsR0FBQ3ZDLENBQUMsQ0FBQ3VDLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVM0QyxDQUFULEVBQVcsRUFBWCxFQUFjakIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUFOLEVBQTJCeUIsQ0FBM0IsRUFBNkJELENBQTdCLEVBQStCcEIsQ0FBL0IsRUFBaUMsQ0FBakMsRUFBbUNKLENBQUMsQ0FBQyxFQUFELENBQXBDLENBQXhuQixFQUFrcUJ3QixDQUFDLEdBQUNuQyxDQUFDLENBQUNtQyxDQUFELEVBQUduRCxDQUFILEVBQUtxRCxDQUFMLEVBQU9ELENBQVAsRUFBU2hCLENBQVQsRUFBVyxFQUFYLEVBQWNULENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBcnFCLEVBQTByQnlCLENBQUMsR0FBQ3BDLENBQUMsQ0FBQ29DLENBQUQsRUFBR0QsQ0FBSCxFQUFLbkQsQ0FBTCxFQUFPcUQsQ0FBUCxFQUFTVixDQUFULEVBQVcsRUFBWCxFQUFjaEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUE3ckIsRUFBa3RCMEIsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDcUMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBUytDLENBQVQsRUFBVyxFQUFYLEVBQWNwQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQXJ0QixFQUEwdUIzQixDQUFDLEdBQUNnQixDQUFDLENBQUNoQixDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTN0IsQ0FBVCxFQUFXLENBQVgsRUFBYUssQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUE3dUIsRUFBaXdCd0IsQ0FBQyxHQUFDbkMsQ0FBQyxDQUFDbUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVN0QixDQUFULEVBQVcsRUFBWCxFQUFjSCxDQUFDLENBQUMsRUFBRCxDQUFmLENBQXB3QixFQUF5eEJ5QixDQUFDLEdBQUNwQyxDQUFDLENBQUNvQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU2xCLENBQVQsRUFBVyxFQUFYLEVBQWNSLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBNXhCLEVBQWl6QjBCLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3FDLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVNDLENBQVQsRUFBVyxFQUFYLEVBQWMwQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQXB6QixFQUF5MEIzQixDQUFDLEdBQUNnQixDQUFDLENBQUNoQixDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTTixDQUFULEVBQVcsQ0FBWCxFQUFhbEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUE1MEIsRUFBZzJCd0IsQ0FBQyxHQUFDbkMsQ0FBQyxDQUFDbUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVM1QixDQUFULEVBQVcsRUFBWCxFQUFjRyxDQUFDLENBQUMsRUFBRCxDQUFmLENBQW4yQixFQUF3M0J5QixDQUFDLEdBQUNwQyxDQUFDLENBQUNvQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU3pCLENBQVQsRUFBVyxFQUFYLEVBQWNELENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBMzNCLEVBQWc1QjBCLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3FDLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVNrQyxDQUFULEVBQVcsRUFBWCxFQUFjUCxDQUFDLENBQUMsRUFBRCxDQUFmLENBQW41QixFQUF3NkIzQixDQUFDLEdBQUNnQixDQUFDLENBQUNoQixDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTVCxDQUFULEVBQVcsQ0FBWCxFQUFhZixDQUFDLENBQUMsRUFBRCxDQUFkLENBQTM2QixFQUErN0J3QixDQUFDLEdBQUNuQyxDQUFDLENBQUNtQyxDQUFELEVBQUduRCxDQUFILEVBQUtxRCxDQUFMLEVBQU9ELENBQVAsRUFBU1IsQ0FBVCxFQUFXLEVBQVgsRUFBY2pCLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBbDhCLEVBQXU5QnlCLENBQUMsR0FBQ3BDLENBQUMsQ0FBQ29DLENBQUQsRUFBR0QsQ0FBSCxFQUFLbkQsQ0FBTCxFQUFPcUQsQ0FBUCxFQUFTSCxDQUFULEVBQVcsRUFBWCxFQUFjdkIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUExOUIsRUFBKytCM0IsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDbEIsQ0FBRCxFQUFHcUQsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDcUMsQ0FBRCxFQUFHRCxDQUFILEVBQUtELENBQUwsRUFBT25ELENBQVAsRUFBUzBCLENBQVQsRUFBVyxFQUFYLEVBQWNDLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBTixFQUEyQnlCLENBQTNCLEVBQTZCRCxDQUE3QixFQUErQjNCLENBQS9CLEVBQWlDLENBQWpDLEVBQW1DRyxDQUFDLENBQUMsRUFBRCxDQUFwQyxDQUFsL0IsRUFBNGhDd0IsQ0FBQyxHQUFDakMsQ0FBQyxDQUFDaUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVNqQixDQUFULEVBQVcsRUFBWCxFQUFjUixDQUFDLENBQUMsRUFBRCxDQUFmLENBQS9oQyxFQUFvakN5QixDQUFDLEdBQUNsQyxDQUFDLENBQUNrQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU04sQ0FBVCxFQUFXLEVBQVgsRUFBY3BCLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBdmpDLEVBQTRrQzBCLENBQUMsR0FBQ25DLENBQUMsQ0FBQ21DLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVMrQixDQUFULEVBQVcsRUFBWCxFQUFjSixDQUFDLENBQUMsRUFBRCxDQUFmLENBQS9rQyxFQUFvbUMzQixDQUFDLEdBQUNrQixDQUFDLENBQUNsQixDQUFELEVBQUdxRCxDQUFILEVBQUtELENBQUwsRUFBT0QsQ0FBUCxFQUFTUCxDQUFULEVBQVcsQ0FBWCxFQUFhakIsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUF2bUMsRUFBMm5Dd0IsQ0FBQyxHQUFDakMsQ0FBQyxDQUFDaUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVN4QixDQUFULEVBQVcsRUFBWCxFQUFjRCxDQUFDLENBQUMsRUFBRCxDQUFmLENBQTluQyxFQUFtcEN5QixDQUFDLEdBQUNsQyxDQUFDLENBQUNrQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU3BELENBQVQsRUFBVyxFQUFYLEVBQWMwQixDQUFDLENBQUMsRUFBRCxDQUFmLENBQXRwQyxFQUEycUMwQixDQUFDLEdBQUNuQyxDQUFDLENBQUNtQyxDQUFELEVBQUdELENBQUgsRUFBS0QsQ0FBTCxFQUFPbkQsQ0FBUCxFQUFTc0IsQ0FBVCxFQUFXLEVBQVgsRUFBY0ssQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUE5cUMsRUFBbXNDM0IsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDbEIsQ0FBRCxFQUFHcUQsQ0FBSCxFQUFLRCxDQUFMLEVBQU9ELENBQVAsRUFBU2YsQ0FBVCxFQUFXLENBQVgsRUFBYVQsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxDQUF0c0MsRUFBMHRDd0IsQ0FBQyxHQUFDakMsQ0FBQyxDQUFDaUMsQ0FBRCxFQUFHbkQsQ0FBSCxFQUFLcUQsQ0FBTCxFQUFPRCxDQUFQLEVBQVNGLENBQVQsRUFBVyxFQUFYLEVBQWN2QixDQUFDLENBQUMsRUFBRCxDQUFmLENBQTd0QyxFQUFrdkN5QixDQUFDLEdBQUNsQyxDQUFDLENBQUNrQyxDQUFELEVBQUdELENBQUgsRUFBS25ELENBQUwsRUFBT3FELENBQVAsRUFBU25CLENBQVQsRUFBVyxFQUFYLEVBQWNQLENBQUMsQ0FBQyxFQUFELENBQWYsQ0FBcnZDLEVBQTB3QzBCLENBQUMsR0FBQ25DLENBQUMsQ0FBQ21DLENBQUQsRUFBR0QsQ0FBSCxFQUFLRCxDQUFMLEVBQU9uRCxDQUFQLEVBQVM2QyxDQUFULEVBQVcsRUFBWCxFQUFjbEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUE3d0MsRUFBa3lDM0IsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDbEIsQ0FBRCxFQUFHcUQsQ0FBSCxFQUFLRCxDQUFMLEVBQU9ELENBQVAsRUFBU3JCLENBQVQsRUFBVyxDQUFYLEVBQWFILENBQUMsQ0FBQyxFQUFELENBQWQsQ0FBcnlDLEVBQXl6Q3dCLENBQUMsR0FBQ2pDLENBQUMsQ0FBQ2lDLENBQUQsRUFBR25ELENBQUgsRUFBS3FELENBQUwsRUFBT0QsQ0FBUCxFQUFTVCxDQUFULEVBQVcsRUFBWCxFQUFjaEIsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUE1ekMsRUFBaTFDeUIsQ0FBQyxHQUFDbEMsQ0FBQyxDQUFDa0MsQ0FBRCxFQUFHRCxDQUFILEVBQUtuRCxDQUFMLEVBQU9xRCxDQUFQLEVBQVMzQixDQUFULEVBQVcsRUFBWCxFQUFjQyxDQUFDLENBQUMsRUFBRCxDQUFmLENBQXAxQyxFQUF5MkMwQixDQUFDLEdBQUNuQyxDQUFDLENBQUNtQyxDQUFELEVBQUdELENBQUgsRUFBS0QsQ0FBTCxFQUFPbkQsQ0FBUCxFQUFTMEMsQ0FBVCxFQUFXLEVBQVgsRUFBY2YsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUE1MkM7QUFBaTRDUCxXQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS3BCLENBQUwsR0FBTyxDQUFaLEVBQWNvQixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS2lDLENBQUwsR0FBTyxDQUExQixFQUE0QmpDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLZ0MsQ0FBTCxHQUFPLENBQXhDLEVBQTBDaEMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUsrQixDQUFMLEdBQU8sQ0FBdEQ7QUFBd0QsU0FBejZEO0FBQTA2RHVtQixtQkFBVyxFQUFDLHVCQUFVO0FBQUMsY0FBSWxwQixDQUFDLEdBQUMsS0FBSzZMLEtBQVg7QUFBQSxjQUFpQnpMLENBQUMsR0FBQ0osQ0FBQyxDQUFDd25CLEtBQXJCO0FBQUEsY0FBMkJsbkIsQ0FBQyxHQUFDLElBQUUsS0FBS2dvQixXQUFwQztBQUFBLGNBQWdEOW5CLENBQUMsR0FBQyxJQUFFUixDQUFDLENBQUN5bkIsUUFBdEQ7QUFBK0RybkIsV0FBQyxDQUFDSSxDQUFDLEtBQUcsQ0FBTCxDQUFELElBQVUsT0FBSyxLQUFHQSxDQUFDLEdBQUMsRUFBcEI7QUFBdUIsY0FBSUUsQ0FBQyxHQUFDWCxDQUFDLENBQUN3ZixLQUFGLENBQVFqZixDQUFDLEdBQUMsVUFBVixDQUFOOztBQUE0QixlQUFJRixDQUFDLENBQUMsTUFBSUksQ0FBQyxHQUFDLEVBQUYsS0FBTyxDQUFQLElBQVUsQ0FBZCxDQUFELENBQUQsR0FBb0IsWUFBVUUsQ0FBQyxJQUFFLENBQUgsR0FBS0EsQ0FBQyxLQUFHLEVBQW5CLElBQXVCLGNBQVlBLENBQUMsSUFBRSxFQUFILEdBQU1BLENBQUMsS0FBRyxDQUF0QixDQUEzQyxFQUFvRU4sQ0FBQyxDQUFDLE1BQUlJLENBQUMsR0FBQyxFQUFGLEtBQU8sQ0FBUCxJQUFVLENBQWQsQ0FBRCxDQUFELEdBQW9CLFlBQVVGLENBQUMsSUFBRSxDQUFILEdBQUtBLENBQUMsS0FBRyxFQUFuQixJQUF1QixjQUFZQSxDQUFDLElBQUUsRUFBSCxHQUFNQSxDQUFDLEtBQUcsQ0FBdEIsQ0FBL0csRUFBd0lOLENBQUMsQ0FBQ3luQixRQUFGLEdBQVcsS0FBR3JuQixDQUFDLENBQUMwQixNQUFGLEdBQVMsQ0FBWixDQUFuSixFQUFrSyxLQUFLMG1CLFFBQUwsRUFBbEssRUFBa0xwb0IsQ0FBQyxHQUFDLENBQUNKLENBQUMsR0FBQyxLQUFLNHBCLEtBQVIsRUFBZXBDLEtBQW5NLEVBQXlNbG5CLENBQUMsR0FBQyxDQUEvTSxFQUFpTixJQUFFQSxDQUFuTixFQUFxTkEsQ0FBQyxFQUF0TjtBQUF5TkUsYUFBQyxHQUFDSixDQUFDLENBQUNFLENBQUQsQ0FBSCxFQUFPRixDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLLFlBQVVFLENBQUMsSUFBRSxDQUFILEdBQUtBLENBQUMsS0FBRyxFQUFuQixJQUF1QixjQUFZQSxDQUFDLElBQUUsRUFBSCxHQUFNQSxDQUFDLEtBQUcsQ0FBdEIsQ0FBbkM7QUFBek47O0FBQXFSLGlCQUFPUixDQUFQO0FBQVMsU0FBajFFO0FBQWsxRXNuQixhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJdm5CLENBQUMsR0FBQ2lCLENBQUMsQ0FBQ3NtQixLQUFGLENBQVFqbUIsSUFBUixDQUFhLElBQWIsQ0FBTjtBQUF5QixpQkFBT3RCLENBQUMsQ0FBQzZwQixLQUFGLEdBQVEsS0FBS0EsS0FBTCxDQUFXdEMsS0FBWCxFQUFSLEVBQTJCdm5CLENBQWxDO0FBQW9DO0FBQWg2RSxPQUFULENBQVIsRUFBbzdFYSxDQUFDLENBQUMrb0IsR0FBRixHQUFNM29CLENBQUMsQ0FBQ21vQixhQUFGLENBQWdCam9CLENBQWhCLENBQTE3RSxFQUE2OEVOLENBQUMsQ0FBQ2lwQixPQUFGLEdBQVU3b0IsQ0FBQyxDQUFDb29CLGlCQUFGLENBQW9CbG9CLENBQXBCLENBQXY5RTtBQUE4K0UsS0FBdjNGLENBQXczRm9FLElBQXgzRixDQUE3cUIsRUFBMmlILFlBQVU7QUFBQyxVQUFJdkYsQ0FBSjtBQUFBLFVBQU1DLENBQUMsR0FBQ0ksQ0FBUjtBQUFBLFVBQVVFLENBQUMsR0FBQyxDQUFDUCxDQUFDLEdBQUNDLENBQUMsQ0FBQ2luQixHQUFMLEVBQVVDLElBQXRCO0FBQUEsVUFBMkIxbUIsQ0FBQyxHQUFDVCxDQUFDLENBQUN3bkIsU0FBL0I7QUFBQSxVQUF5QzdtQixDQUFDLEdBQUMsQ0FBQ1gsQ0FBQyxHQUFDQyxDQUFDLENBQUNzcEIsSUFBTCxFQUFXUSxNQUFYLEdBQWtCeHBCLENBQUMsQ0FBQzZtQixNQUFGLENBQVM7QUFBQzJCLFdBQUcsRUFBQ3hvQixDQUFDLENBQUM2bUIsTUFBRixDQUFTO0FBQUM0QyxpQkFBTyxFQUFDLENBQVQ7QUFBV0MsZ0JBQU0sRUFBQ2pxQixDQUFDLENBQUM0cEIsR0FBcEI7QUFBd0JNLG9CQUFVLEVBQUM7QUFBbkMsU0FBVCxDQUFMO0FBQXFEL0YsWUFBSSxFQUFDLGNBQVNua0IsQ0FBVCxFQUFXO0FBQUMsZUFBSytvQixHQUFMLEdBQVMsS0FBS0EsR0FBTCxDQUFTM0IsTUFBVCxDQUFnQnBuQixDQUFoQixDQUFUO0FBQTRCLFNBQWxHO0FBQW1HbXFCLGVBQU8sRUFBQyxpQkFBU25xQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSUksQ0FBQyxHQUFDLENBQUNVLENBQUMsR0FBQyxLQUFLZ29CLEdBQVIsRUFBYWtCLE1BQWIsQ0FBb0IxYyxNQUFwQixFQUFOLEVBQW1DaE4sQ0FBQyxHQUFDRSxDQUFDLENBQUM4TSxNQUFGLEVBQXJDLEVBQWdENU0sQ0FBQyxHQUFDSixDQUFDLENBQUNrbkIsS0FBcEQsRUFBMEQ1bUIsQ0FBQyxHQUFDRSxDQUFDLENBQUNpcEIsT0FBOUQsRUFBc0VqcEIsQ0FBQyxHQUFDQSxDQUFDLENBQUNtcEIsVUFBOUUsRUFBeUZ2cEIsQ0FBQyxDQUFDb0IsTUFBRixHQUFTbEIsQ0FBbEcsR0FBcUc7QUFBQ0ksYUFBQyxJQUFFWixDQUFDLENBQUM0b0IsTUFBRixDQUFTaG9CLENBQVQsQ0FBSDtBQUFlLGdCQUFJQSxDQUFDLEdBQUNaLENBQUMsQ0FBQzRvQixNQUFGLENBQVNqcEIsQ0FBVCxFQUFZa3BCLFFBQVosQ0FBcUJqcEIsQ0FBckIsQ0FBTjtBQUE4QkksYUFBQyxDQUFDaW9CLEtBQUY7O0FBQVUsaUJBQUksSUFBSW5uQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNKLENBQWQsRUFBZ0JJLENBQUMsRUFBakI7QUFBb0JGLGVBQUMsR0FBQ1osQ0FBQyxDQUFDNm9CLFFBQUYsQ0FBV2pvQixDQUFYLENBQUYsRUFBZ0JaLENBQUMsQ0FBQ2lvQixLQUFGLEVBQWhCO0FBQXBCOztBQUE4Qy9uQixhQUFDLENBQUNzSixNQUFGLENBQVM1SSxDQUFUO0FBQVk7O0FBQUEsaUJBQU9WLENBQUMsQ0FBQ21uQixRQUFGLEdBQVcsSUFBRTdtQixDQUFiLEVBQWVOLENBQXRCO0FBQXdCO0FBQXhXLE9BQVQsQ0FBN0Q7O0FBQWliTixPQUFDLENBQUM4cEIsTUFBRixHQUFTLFVBQVMvcEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDLGVBQU9NLENBQUMsQ0FBQzRNLE1BQUYsQ0FBU2xOLENBQVQsRUFBWThwQixPQUFaLENBQW9CbnFCLENBQXBCLEVBQXNCQyxDQUF0QixDQUFQO0FBQWdDLE9BQXpEO0FBQTBELEtBQXRmLEVBQTNpSCxFQUFvaUlJLENBQUMsQ0FBQzZtQixHQUFGLENBQU1rRCxNQUFOLElBQWMsVUFBU3BxQixDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUMsQ0FBQzBCLENBQUMsR0FBQ3RCLENBQUgsRUFBTTZtQixHQUFaO0FBQUEsVUFBZ0IzbUIsQ0FBQyxHQUFDTixDQUFDLENBQUNrbkIsSUFBcEI7QUFBQSxVQUF5QjFtQixDQUFDLEdBQUNSLENBQUMsQ0FBQ3VuQixTQUE3QjtBQUFBLFVBQXVDN21CLENBQUMsR0FBQ1YsQ0FBQyxDQUFDb29CLHNCQUEzQztBQUFBLFVBQWtFeG5CLENBQUMsR0FBQ2MsQ0FBQyxDQUFDa21CLEdBQUYsQ0FBTTJCLE1BQTFFO0FBQUEsVUFBaUZ6b0IsQ0FBQyxHQUFDWSxDQUFDLENBQUM0bkIsSUFBRixDQUFPUSxNQUExRjtBQUFBLFVBQWlHOW9CLENBQUMsR0FBQ2hCLENBQUMsQ0FBQ21xQixNQUFGLEdBQVN6cEIsQ0FBQyxDQUFDeW1CLE1BQUYsQ0FBUztBQUFDMkIsV0FBRyxFQUFDeG9CLENBQUMsQ0FBQzZtQixNQUFGLEVBQUw7QUFBZ0JpRCx1QkFBZSxFQUFDLHlCQUFTcnFCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsaUJBQU8sS0FBS3NOLE1BQUwsQ0FBWSxLQUFLK2MsZUFBakIsRUFBaUN0cUIsQ0FBakMsRUFBbUNDLENBQW5DLENBQVA7QUFBNkMsU0FBM0Y7QUFBNEZzcUIsdUJBQWUsRUFBQyx5QkFBU3ZxQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFPLEtBQUtzTixNQUFMLENBQVksS0FBS2lkLGVBQWpCLEVBQWlDeHFCLENBQWpDLEVBQW1DQyxDQUFuQyxDQUFQO0FBQTZDLFNBQXZLO0FBQXdLa2tCLFlBQUksRUFBQyxjQUFTbmtCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQyxlQUFLMG9CLEdBQUwsR0FBUyxLQUFLQSxHQUFMLENBQVMzQixNQUFULENBQWdCL21CLENBQWhCLENBQVQsRUFBNEIsS0FBS29xQixVQUFMLEdBQWdCenFCLENBQTVDLEVBQThDLEtBQUswcUIsSUFBTCxHQUFVenFCLENBQXhELEVBQTBELEtBQUtxb0IsS0FBTCxFQUExRDtBQUF1RSxTQUFwUTtBQUFxUUEsYUFBSyxFQUFDLGlCQUFVO0FBQUMzbkIsV0FBQyxDQUFDMm5CLEtBQUYsQ0FBUWhuQixJQUFSLENBQWEsSUFBYixHQUFtQixLQUFLMG5CLFFBQUwsRUFBbkI7QUFBbUMsU0FBelQ7QUFBMFQ5aEIsZUFBTyxFQUFDLGlCQUFTbEgsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sS0FBS3dvQixPQUFMLENBQWF4b0IsQ0FBYixHQUFnQixLQUFLeW9CLFFBQUwsRUFBdkI7QUFBdUMsU0FBclg7QUFBc1hTLGdCQUFRLEVBQUMsa0JBQVNscEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU9BLENBQUMsSUFBRSxLQUFLd29CLE9BQUwsQ0FBYXhvQixDQUFiLENBQUgsRUFBbUIsS0FBS21wQixXQUFMLEVBQTFCO0FBQTZDLFNBQXhiO0FBQXliYSxlQUFPLEVBQUMsQ0FBamM7QUFBbWNXLGNBQU0sRUFBQyxDQUExYztBQUE0Y0wsdUJBQWUsRUFBQyxDQUE1ZDtBQUE4ZEUsdUJBQWUsRUFBQyxDQUE5ZTtBQUFnZnBCLHFCQUFhLEVBQUMsdUJBQVNwcEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU07QUFBQzRxQixtQkFBTyxFQUFDLGlCQUFTM3FCLENBQVQsRUFBV0ksQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQyxxQkFBTSxDQUFDLFlBQVUsT0FBT0YsQ0FBakIsR0FBbUJ1QixDQUFuQixHQUFxQkosQ0FBdEIsRUFBeUJvcEIsT0FBekIsQ0FBaUM1cUIsQ0FBakMsRUFBbUNDLENBQW5DLEVBQXFDSSxDQUFyQyxFQUF1Q0UsQ0FBdkMsQ0FBTjtBQUFnRCxhQUF6RTtBQUEwRXNxQixtQkFBTyxFQUFDLGlCQUFTNXFCLENBQVQsRUFBV0ksQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQyxxQkFBTSxDQUFDLFlBQVUsT0FBT0YsQ0FBakIsR0FBbUJ1QixDQUFuQixHQUFxQkosQ0FBdEIsRUFBeUJxcEIsT0FBekIsQ0FBaUM3cUIsQ0FBakMsRUFBbUNDLENBQW5DLEVBQXFDSSxDQUFyQyxFQUF1Q0UsQ0FBdkMsQ0FBTjtBQUFnRDtBQUFsSixXQUFOO0FBQTBKO0FBQXBxQixPQUFULENBQTVHO0FBQTR4Qk4sT0FBQyxDQUFDNnFCLFlBQUYsR0FBZTdwQixDQUFDLENBQUNtbUIsTUFBRixDQUFTO0FBQUMrQixtQkFBVyxFQUFDLHVCQUFVO0FBQUMsaUJBQU8sS0FBS1YsUUFBTCxDQUFjLENBQUMsQ0FBZixDQUFQO0FBQXlCLFNBQWpEO0FBQWtEQyxpQkFBUyxFQUFDO0FBQTVELE9BQVQsQ0FBZjs7QUFBd0YsVUFBSXZuQixDQUFDLEdBQUNRLENBQUMsQ0FBQ29wQixJQUFGLEdBQU8sRUFBYjtBQUFBLFVBQWdCM3BCLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNwQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsWUFBSUUsQ0FBQyxHQUFDLEtBQUt5cUIsR0FBWDtBQUFlenFCLFNBQUMsR0FBQyxLQUFLeXFCLEdBQUwsR0FBU0MsU0FBVixHQUFvQjFxQixDQUFDLEdBQUMsS0FBSzJxQixVQUE1Qjs7QUFBdUMsYUFBSSxJQUFJenFCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0osQ0FBZCxFQUFnQkksQ0FBQyxFQUFqQjtBQUFvQlQsV0FBQyxDQUFDQyxDQUFDLEdBQUNRLENBQUgsQ0FBRCxJQUFRRixDQUFDLENBQUNFLENBQUQsQ0FBVDtBQUFwQjtBQUFpQyxPQUF6SDtBQUFBLFVBQTBIWSxDQUFDLEdBQUMsQ0FBQ3BCLENBQUMsQ0FBQ2tyQixlQUFGLEdBQWtCNXFCLENBQUMsQ0FBQzZtQixNQUFGLENBQVM7QUFBQ2lELHVCQUFlLEVBQUMseUJBQVNycUIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxpQkFBTyxLQUFLbXJCLFNBQUwsQ0FBZTdkLE1BQWYsQ0FBc0J2TixDQUF0QixFQUF3QkMsQ0FBeEIsQ0FBUDtBQUFrQyxTQUFqRTtBQUFrRXNxQix1QkFBZSxFQUFDLHlCQUFTdnFCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsaUJBQU8sS0FBS29yQixTQUFMLENBQWU5ZCxNQUFmLENBQXNCdk4sQ0FBdEIsRUFBd0JDLENBQXhCLENBQVA7QUFBa0MsU0FBbEk7QUFBbUlra0IsWUFBSSxFQUFDLGNBQVNua0IsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxlQUFLcXJCLE9BQUwsR0FBYXRyQixDQUFiLEVBQWUsS0FBS2dyQixHQUFMLEdBQVMvcUIsQ0FBeEI7QUFBMEI7QUFBaEwsT0FBVCxDQUFuQixFQUFnTm1uQixNQUFoTixFQUE1SDs7QUFBcVYvbEIsT0FBQyxDQUFDK3BCLFNBQUYsR0FBWS9wQixDQUFDLENBQUMrbEIsTUFBRixDQUFTO0FBQUNtRSxvQkFBWSxFQUFDLHNCQUFTdnJCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUksQ0FBQyxHQUFDLEtBQUtpckIsT0FBWDtBQUFBLGNBQW1CL3FCLENBQUMsR0FBQ0YsQ0FBQyxDQUFDcW9CLFNBQXZCO0FBQWlDdG5CLFdBQUMsQ0FBQ0UsSUFBRixDQUFPLElBQVAsRUFBWXRCLENBQVosRUFBY0MsQ0FBZCxFQUFnQk0sQ0FBaEIsR0FBbUJGLENBQUMsQ0FBQ21yQixZQUFGLENBQWV4ckIsQ0FBZixFQUFpQkMsQ0FBakIsQ0FBbkIsRUFBdUMsS0FBS2lyQixVQUFMLEdBQWdCbHJCLENBQUMsQ0FBQzhCLEtBQUYsQ0FBUTdCLENBQVIsRUFBVUEsQ0FBQyxHQUFDTSxDQUFaLENBQXZEO0FBQXNFO0FBQW5JLE9BQVQsQ0FBWixFQUEySmMsQ0FBQyxDQUFDZ3FCLFNBQUYsR0FBWWhxQixDQUFDLENBQUMrbEIsTUFBRixDQUFTO0FBQUNtRSxvQkFBWSxFQUFDLHNCQUFTdnJCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUksQ0FBQyxHQUFDLEtBQUtpckIsT0FBWDtBQUFBLGNBQW1CL3FCLENBQUMsR0FBQ0YsQ0FBQyxDQUFDcW9CLFNBQXZCO0FBQUEsY0FBaUNqb0IsQ0FBQyxHQUFDVCxDQUFDLENBQUM4QixLQUFGLENBQVE3QixDQUFSLEVBQVVBLENBQUMsR0FBQ00sQ0FBWixDQUFuQztBQUFrREYsV0FBQyxDQUFDb3JCLFlBQUYsQ0FBZXpyQixDQUFmLEVBQWlCQyxDQUFqQixHQUFvQm1CLENBQUMsQ0FBQ0UsSUFBRixDQUFPLElBQVAsRUFBWXRCLENBQVosRUFBY0MsQ0FBZCxFQUFnQk0sQ0FBaEIsQ0FBcEIsRUFBdUMsS0FBSzJxQixVQUFMLEdBQWdCenFCLENBQXZEO0FBQXlEO0FBQXZJLE9BQVQsQ0FBdkssRUFBMFRVLENBQUMsR0FBQ0EsQ0FBQyxDQUFDdXFCLEdBQUYsR0FBTXJxQixDQUFsVSxFQUFvVUEsQ0FBQyxHQUFDLENBQUNNLENBQUMsQ0FBQ2dxQixHQUFGLEdBQU0sRUFBUCxFQUFXQyxLQUFYLEdBQWlCO0FBQUNELFdBQUcsRUFBQyxhQUFTM3JCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsZUFBSSxJQUFJSSxDQUFKLEVBQU1FLENBQUMsR0FBQyxDQUFDRixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDLElBQUVKLENBQUwsSUFBUUQsQ0FBQyxDQUFDMG5CLFFBQUYsR0FBV3JuQixDQUF0QixLQUEwQixFQUExQixHQUE2QkEsQ0FBQyxJQUFFLEVBQWhDLEdBQW1DQSxDQUFDLElBQUUsQ0FBdEMsR0FBd0NBLENBQWhELEVBQWtETSxDQUFDLEdBQUMsRUFBcEQsRUFBdURFLENBQUMsR0FBQyxDQUE3RCxFQUErREEsQ0FBQyxHQUFDUixDQUFqRSxFQUFtRVEsQ0FBQyxJQUFFLENBQXRFO0FBQXdFRixhQUFDLENBQUNtSCxJQUFGLENBQU92SCxDQUFQO0FBQXhFOztBQUFrRkYsV0FBQyxHQUFDSSxDQUFDLENBQUM4TSxNQUFGLENBQVM1TSxDQUFULEVBQVdOLENBQVgsQ0FBRixFQUFnQkwsQ0FBQyxDQUFDNkosTUFBRixDQUFTeEosQ0FBVCxDQUFoQjtBQUE0QixTQUFqSTtBQUFrSXdyQixhQUFLLEVBQUMsZUFBUzdyQixDQUFULEVBQVc7QUFBQ0EsV0FBQyxDQUFDMG5CLFFBQUYsSUFBWSxNQUFJMW5CLENBQUMsQ0FBQ3luQixLQUFGLENBQVF6bkIsQ0FBQyxDQUFDMG5CLFFBQUYsR0FBVyxDQUFYLEtBQWUsQ0FBdkIsQ0FBaEI7QUFBMEM7QUFBOUwsT0FBdlYsRUFBdWhCem5CLENBQUMsQ0FBQzZyQixXQUFGLEdBQWM3cUIsQ0FBQyxDQUFDbW1CLE1BQUYsQ0FBUztBQUFDMkIsV0FBRyxFQUFDOW5CLENBQUMsQ0FBQzhuQixHQUFGLENBQU0zQixNQUFOLENBQWE7QUFBQzJELGNBQUksRUFBQzVwQixDQUFOO0FBQVF4QixpQkFBTyxFQUFDMEI7QUFBaEIsU0FBYixDQUFMO0FBQXNDaW5CLGFBQUssRUFBQyxpQkFBVTtBQUFDcm5CLFdBQUMsQ0FBQ3FuQixLQUFGLENBQVFobkIsSUFBUixDQUFhLElBQWI7QUFBbUIsY0FBSXRCLENBQUMsR0FBQyxDQUFDQyxDQUFDLEdBQUMsS0FBSzhvQixHQUFSLEVBQWFnRCxFQUFuQjtBQUFBLGNBQXNCOXJCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDOHFCLElBQTFCO0FBQStCLGNBQUcsS0FBS04sVUFBTCxJQUFpQixLQUFLSCxlQUF6QixFQUF5QyxJQUFJanFCLENBQUMsR0FBQ0osQ0FBQyxDQUFDb3FCLGVBQVIsQ0FBekMsS0FBc0VocUIsQ0FBQyxHQUFDSixDQUFDLENBQUNzcUIsZUFBSixFQUFvQixLQUFLNUIsY0FBTCxHQUFvQixDQUF4QztBQUEwQyxlQUFLcUQsS0FBTCxHQUFXM3JCLENBQUMsQ0FBQ2lCLElBQUYsQ0FBT3JCLENBQVAsRUFBUyxJQUFULEVBQWNELENBQUMsSUFBRUEsQ0FBQyxDQUFDeW5CLEtBQW5CLENBQVg7QUFBcUMsU0FBOVA7QUFBK1BvQix1QkFBZSxFQUFDLHlCQUFTN29CLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsZUFBSytyQixLQUFMLENBQVdULFlBQVgsQ0FBd0J2ckIsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQTZCLFNBQTFUO0FBQTJUa3BCLG1CQUFXLEVBQUMsdUJBQVU7QUFBQyxjQUFJbnBCLENBQUMsR0FBQyxLQUFLK29CLEdBQUwsQ0FBU3BwQixPQUFmOztBQUF1QixjQUFHLEtBQUs4cUIsVUFBTCxJQUFpQixLQUFLSCxlQUF6QixFQUF5QztBQUFDdHFCLGFBQUMsQ0FBQzJyQixHQUFGLENBQU0sS0FBSzdmLEtBQVgsRUFBaUIsS0FBSzRjLFNBQXRCOztBQUFpQyxnQkFBSXpvQixDQUFDLEdBQUMsS0FBS3dvQixRQUFMLENBQWMsQ0FBQyxDQUFmLENBQU47QUFBd0IsV0FBbkcsTUFBd0d4b0IsQ0FBQyxHQUFDLEtBQUt3b0IsUUFBTCxDQUFjLENBQUMsQ0FBZixDQUFGLEVBQW9Cem9CLENBQUMsQ0FBQzZyQixLQUFGLENBQVE1ckIsQ0FBUixDQUFwQjs7QUFBK0IsaUJBQU9BLENBQVA7QUFBUyxTQUF6ZjtBQUEwZnlvQixpQkFBUyxFQUFDO0FBQXBnQixPQUFULENBQXJpQjtBQUFzakMsVUFBSW5uQixDQUFDLEdBQUN0QixDQUFDLENBQUNnc0IsWUFBRixHQUFlMXJCLENBQUMsQ0FBQzZtQixNQUFGLENBQVM7QUFBQ2pELFlBQUksRUFBQyxjQUFTbmtCLENBQVQsRUFBVztBQUFDLGVBQUtxbkIsS0FBTCxDQUFXcm5CLENBQVg7QUFBYyxTQUFoQztBQUFpQ2dCLGdCQUFRLEVBQUMsa0JBQVNoQixDQUFULEVBQVc7QUFBQyxpQkFBTSxDQUFDQSxDQUFDLElBQUUsS0FBS2tzQixTQUFULEVBQW9CM2dCLFNBQXBCLENBQThCLElBQTlCLENBQU47QUFBMEM7QUFBaEcsT0FBVCxDQUFyQjtBQUFBLFVBQWlJL0osQ0FBQyxJQUFFTCxDQUFDLEdBQUMsQ0FBQ1EsQ0FBQyxDQUFDd3FCLE1BQUYsR0FBUyxFQUFWLEVBQWNDLE9BQWQsR0FBc0I7QUFBQzdnQixpQkFBUyxFQUFDLG1CQUFTdkwsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNxc0IsVUFBUjtBQUFtQixpQkFBTSxDQUFDLENBQUNyc0IsQ0FBQyxHQUFDQSxDQUFDLENBQUNzc0IsSUFBTCxJQUFXN3JCLENBQUMsQ0FBQzhNLE1BQUYsQ0FBUyxDQUFDLFVBQUQsRUFBWSxVQUFaLENBQVQsRUFBa0MxRCxNQUFsQyxDQUF5QzdKLENBQXpDLEVBQTRDNkosTUFBNUMsQ0FBbUQ1SixDQUFuRCxDQUFYLEdBQWlFQSxDQUFsRSxFQUFxRWUsUUFBckUsQ0FBOEVILENBQTlFLENBQU47QUFBdUYsU0FBakk7QUFBa0kyVSxhQUFLLEVBQUMsZUFBU3hWLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxDQUFDRCxDQUFDLEdBQUNhLENBQUMsQ0FBQzJVLEtBQUYsQ0FBUXhWLENBQVIsQ0FBSCxFQUFleW5CLEtBQXJCOztBQUEyQixjQUFHLGNBQVl4bkIsQ0FBQyxDQUFDLENBQUQsQ0FBYixJQUFrQixjQUFZQSxDQUFDLENBQUMsQ0FBRCxDQUFsQyxFQUFzQztBQUFDLGdCQUFJSSxDQUFDLEdBQUNJLENBQUMsQ0FBQzhNLE1BQUYsQ0FBU3ROLENBQUMsQ0FBQzZCLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFULENBQU47QUFBNkI3QixhQUFDLENBQUN5VyxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsR0FBYzFXLENBQUMsQ0FBQzBuQixRQUFGLElBQVksRUFBMUI7QUFBNkI7O0FBQUEsaUJBQU9ubUIsQ0FBQyxDQUFDZ00sTUFBRixDQUFTO0FBQUM4ZSxzQkFBVSxFQUFDcnNCLENBQVo7QUFBY3NzQixnQkFBSSxFQUFDanNCO0FBQW5CLFdBQVQsQ0FBUDtBQUF1QztBQUF2VCxPQUF4QixFQUFpVkosQ0FBQyxDQUFDc3NCLGtCQUFGLEdBQXFCaHNCLENBQUMsQ0FBQzZtQixNQUFGLENBQVM7QUFBQzJCLFdBQUcsRUFBQ3hvQixDQUFDLENBQUM2bUIsTUFBRixDQUFTO0FBQUMrRSxnQkFBTSxFQUFDaHJCO0FBQVIsU0FBVCxDQUFMO0FBQTBCeXBCLGVBQU8sRUFBQyxpQkFBUzVxQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlRSxDQUFmLEVBQWlCO0FBQUNBLFdBQUMsR0FBQyxLQUFLd29CLEdBQUwsQ0FBUzNCLE1BQVQsQ0FBZ0I3bUIsQ0FBaEIsQ0FBRjtBQUFxQixjQUFJRSxDQUFDLEdBQUNULENBQUMsQ0FBQ3FxQixlQUFGLENBQWtCaHFCLENBQWxCLEVBQW9CRSxDQUFwQixDQUFOO0FBQTZCLGlCQUFPTixDQUFDLEdBQUNRLENBQUMsQ0FBQ3lvQixRQUFGLENBQVdqcEIsQ0FBWCxDQUFGLEVBQWdCUSxDQUFDLEdBQUNBLENBQUMsQ0FBQ3NvQixHQUFwQixFQUF3QnhuQixDQUFDLENBQUNnTSxNQUFGLENBQVM7QUFBQzhlLHNCQUFVLEVBQUNwc0IsQ0FBWjtBQUFjbU4sZUFBRyxFQUFDL00sQ0FBbEI7QUFBb0IwckIsY0FBRSxFQUFDdHJCLENBQUMsQ0FBQ3NyQixFQUF6QjtBQUE0QlMscUJBQVMsRUFBQ3hzQixDQUF0QztBQUF3QytxQixnQkFBSSxFQUFDdHFCLENBQUMsQ0FBQ3NxQixJQUEvQztBQUFvRHByQixtQkFBTyxFQUFDYyxDQUFDLENBQUNkLE9BQTlEO0FBQXNFK29CLHFCQUFTLEVBQUMxb0IsQ0FBQyxDQUFDMG9CLFNBQWxGO0FBQTRGd0QscUJBQVMsRUFBQzNyQixDQUFDLENBQUM0ckI7QUFBeEcsV0FBVCxDQUEvQjtBQUF5SixTQUEvUDtBQUFnUXRCLGVBQU8sRUFBQyxpQkFBUzdxQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlRSxDQUFmLEVBQWlCO0FBQUMsaUJBQU9BLENBQUMsR0FBQyxLQUFLd29CLEdBQUwsQ0FBUzNCLE1BQVQsQ0FBZ0I3bUIsQ0FBaEIsQ0FBRixFQUFxQk4sQ0FBQyxHQUFDLEtBQUt3c0IsTUFBTCxDQUFZeHNCLENBQVosRUFBY00sQ0FBQyxDQUFDNHJCLE1BQWhCLENBQXZCLEVBQStDbnNCLENBQUMsQ0FBQ3VxQixlQUFGLENBQWtCbHFCLENBQWxCLEVBQW9CRSxDQUFwQixFQUF1QjJvQixRQUF2QixDQUFnQ2pwQixDQUFDLENBQUNvc0IsVUFBbEMsQ0FBdEQ7QUFBb0csU0FBOVg7QUFBK1hJLGNBQU0sRUFBQyxnQkFBU3pzQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFNLFlBQVUsT0FBT0QsQ0FBakIsR0FBbUJDLENBQUMsQ0FBQ3VWLEtBQUYsQ0FBUXhWLENBQVIsRUFBVSxJQUFWLENBQW5CLEdBQW1DQSxDQUF6QztBQUEyQztBQUEvYixPQUFULENBQXhXLENBQWxJO0FBQUEsVUFBczdCMkIsQ0FBQyxHQUFDLENBQUNBLENBQUMsQ0FBQytxQixHQUFGLEdBQU0sRUFBUCxFQUFXTixPQUFYLEdBQW1CO0FBQUNPLGVBQU8sRUFBQyxpQkFBUzNzQixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlRSxDQUFmLEVBQWlCO0FBQUMsaUJBQU9BLENBQUMsS0FBR0EsQ0FBQyxHQUFDRSxDQUFDLENBQUNtSyxNQUFGLENBQVMsQ0FBVCxDQUFMLENBQUQsRUFBbUI1SyxDQUFDLEdBQUNlLENBQUMsQ0FBQ3dNLE1BQUYsQ0FBUztBQUFDeWMsbUJBQU8sRUFBQy9wQixDQUFDLEdBQUNJO0FBQVgsV0FBVCxFQUF3QjhwQixPQUF4QixDQUFnQ25xQixDQUFoQyxFQUFrQ08sQ0FBbEMsQ0FBckIsRUFBMERGLENBQUMsR0FBQ0ksQ0FBQyxDQUFDOE0sTUFBRixDQUFTdk4sQ0FBQyxDQUFDeW5CLEtBQUYsQ0FBUTNsQixLQUFSLENBQWM3QixDQUFkLENBQVQsRUFBMEIsSUFBRUksQ0FBNUIsQ0FBNUQsRUFBMkZMLENBQUMsQ0FBQzBuQixRQUFGLEdBQVcsSUFBRXpuQixDQUF4RyxFQUEwR3NCLENBQUMsQ0FBQ2dNLE1BQUYsQ0FBUztBQUFDSCxlQUFHLEVBQUNwTixDQUFMO0FBQU8rckIsY0FBRSxFQUFDMXJCLENBQVY7QUFBWWlzQixnQkFBSSxFQUFDL3JCO0FBQWpCLFdBQVQsQ0FBakg7QUFBK0k7QUFBMUssT0FBMzhCO0FBQUEsVUFBdW5DcUIsQ0FBQyxHQUFDM0IsQ0FBQyxDQUFDMnNCLG1CQUFGLEdBQXNCcHJCLENBQUMsQ0FBQzRsQixNQUFGLENBQVM7QUFBQzJCLFdBQUcsRUFBQ3ZuQixDQUFDLENBQUN1bkIsR0FBRixDQUFNM0IsTUFBTixDQUFhO0FBQUNzRixhQUFHLEVBQUMvcUI7QUFBTCxTQUFiLENBQUw7QUFBMkJpcEIsZUFBTyxFQUFDLGlCQUFTNXFCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWVFLENBQWYsRUFBaUI7QUFBQyxpQkFBT0YsQ0FBQyxHQUFDLENBQUNFLENBQUMsR0FBQyxLQUFLd29CLEdBQUwsQ0FBUzNCLE1BQVQsQ0FBZ0I3bUIsQ0FBaEIsQ0FBSCxFQUF1Qm1zQixHQUF2QixDQUEyQkMsT0FBM0IsQ0FBbUN0c0IsQ0FBbkMsRUFBcUNMLENBQUMsQ0FBQ2dxQixPQUF2QyxFQUErQ2hxQixDQUFDLENBQUMycUIsTUFBakQsQ0FBRixFQUEyRHBxQixDQUFDLENBQUN3ckIsRUFBRixHQUFLMXJCLENBQUMsQ0FBQzByQixFQUFsRSxFQUFxRSxDQUFDL3JCLENBQUMsR0FBQ3dCLENBQUMsQ0FBQ29wQixPQUFGLENBQVV0cEIsSUFBVixDQUFlLElBQWYsRUFBb0J0QixDQUFwQixFQUFzQkMsQ0FBdEIsRUFBd0JJLENBQUMsQ0FBQytNLEdBQTFCLEVBQThCN00sQ0FBOUIsQ0FBSCxFQUFxQzhtQixLQUFyQyxDQUEyQ2huQixDQUEzQyxDQUFyRSxFQUFtSEwsQ0FBMUg7QUFBNEgsU0FBakw7QUFBa0w2cUIsZUFBTyxFQUFDLGlCQUFTN3FCLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWVFLENBQWYsRUFBaUI7QUFBQyxpQkFBT0EsQ0FBQyxHQUFDLEtBQUt3b0IsR0FBTCxDQUFTM0IsTUFBVCxDQUFnQjdtQixDQUFoQixDQUFGLEVBQXFCTixDQUFDLEdBQUMsS0FBS3dzQixNQUFMLENBQVl4c0IsQ0FBWixFQUFjTSxDQUFDLENBQUM0ckIsTUFBaEIsQ0FBdkIsRUFBK0M5ckIsQ0FBQyxHQUFDRSxDQUFDLENBQUNtc0IsR0FBRixDQUFNQyxPQUFOLENBQWN0c0IsQ0FBZCxFQUFnQkwsQ0FBQyxDQUFDZ3FCLE9BQWxCLEVBQTBCaHFCLENBQUMsQ0FBQzJxQixNQUE1QixFQUFtQzFxQixDQUFDLENBQUNxc0IsSUFBckMsQ0FBakQsRUFBNEYvckIsQ0FBQyxDQUFDd3JCLEVBQUYsR0FBSzFyQixDQUFDLENBQUMwckIsRUFBbkcsRUFBc0d2cUIsQ0FBQyxDQUFDcXBCLE9BQUYsQ0FBVXZwQixJQUFWLENBQWUsSUFBZixFQUFvQnRCLENBQXBCLEVBQXNCQyxDQUF0QixFQUF3QkksQ0FBQyxDQUFDK00sR0FBMUIsRUFBOEI3TSxDQUE5QixDQUE3RztBQUE4STtBQUExVixPQUFULENBQS9vQztBQUFxL0MsS0FBaHdILEVBQWxqSSxFQUFxelAsWUFBVTtBQUFDLFdBQUksSUFBSVAsQ0FBQyxHQUFDSyxDQUFOLEVBQVFKLENBQUMsR0FBQ0QsQ0FBQyxDQUFDa25CLEdBQUYsQ0FBTTRFLFdBQWhCLEVBQTRCdnJCLENBQUMsR0FBQ1AsQ0FBQyxDQUFDdXBCLElBQWhDLEVBQXFDOW9CLENBQUMsR0FBQyxFQUF2QyxFQUEwQ0UsQ0FBQyxHQUFDLEVBQTVDLEVBQStDRSxDQUFDLEdBQUMsRUFBakQsRUFBb0RFLENBQUMsR0FBQyxFQUF0RCxFQUF5REUsQ0FBQyxHQUFDLEVBQTNELEVBQThERSxDQUFDLEdBQUMsRUFBaEUsRUFBbUVDLENBQUMsR0FBQyxFQUFyRSxFQUF3RUMsQ0FBQyxHQUFDLEVBQTFFLEVBQTZFRSxDQUFDLEdBQUMsRUFBL0UsRUFBa0ZDLENBQUMsR0FBQyxFQUFwRixFQUF1RkcsQ0FBQyxHQUFDLEVBQXpGLEVBQTRGQyxDQUFDLEdBQUMsQ0FBbEcsRUFBb0csTUFBSUEsQ0FBeEcsRUFBMEdBLENBQUMsRUFBM0c7QUFBOEdELFNBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQUssTUFBSUEsQ0FBSixHQUFNQSxDQUFDLElBQUUsQ0FBVCxHQUFXQSxDQUFDLElBQUUsQ0FBSCxHQUFLLEdBQXJCO0FBQTlHOztBQUF1SSxVQUFJQyxDQUFDLEdBQUMsQ0FBTjtBQUFBLFVBQVFNLENBQUMsR0FBQyxDQUFWOztBQUFZLFdBQUlQLENBQUMsR0FBQyxDQUFOLEVBQVEsTUFBSUEsQ0FBWixFQUFjQSxDQUFDLEVBQWYsRUFBa0I7QUFBQyxZQUFJbEMsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ3lDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUwsR0FBT0EsQ0FBQyxJQUFFLENBQVYsR0FBWUEsQ0FBQyxJQUFFLENBQWYsR0FBaUJBLENBQUMsSUFBRSxDQUF2QixNQUE0QixDQUE1QixHQUE4QixNQUFJekMsQ0FBbEMsR0FBb0MsRUFBMUM7QUFBNkNlLFNBQUMsQ0FBQ29CLENBQUQsQ0FBRCxHQUFLbkMsQ0FBTCxFQUFPaUIsQ0FBQyxDQUFDakIsQ0FBRCxDQUFELEdBQUttQyxDQUFaO0FBQWMsWUFBSU8sQ0FBQyxHQUFDVCxDQUFDLENBQUNFLENBQUQsQ0FBUDtBQUFBLFlBQVdRLENBQUMsR0FBQ1YsQ0FBQyxDQUFDUyxDQUFELENBQWQ7QUFBQSxZQUFrQkUsQ0FBQyxHQUFDWCxDQUFDLENBQUNVLENBQUQsQ0FBckI7QUFBQSxZQUF5QkcsQ0FBQyxHQUFDLE1BQUliLENBQUMsQ0FBQ2pDLENBQUQsQ0FBTCxHQUFTLFdBQVNBLENBQTdDO0FBQStDbUIsU0FBQyxDQUFDZ0IsQ0FBRCxDQUFELEdBQUtXLENBQUMsSUFBRSxFQUFILEdBQU1BLENBQUMsS0FBRyxDQUFmLEVBQWlCekIsQ0FBQyxDQUFDYyxDQUFELENBQUQsR0FBS1csQ0FBQyxJQUFFLEVBQUgsR0FBTUEsQ0FBQyxLQUFHLEVBQWhDLEVBQW1DdkIsQ0FBQyxDQUFDWSxDQUFELENBQUQsR0FBS1csQ0FBQyxJQUFFLENBQUgsR0FBS0EsQ0FBQyxLQUFHLEVBQWpELEVBQW9EckIsQ0FBQyxDQUFDVSxDQUFELENBQUQsR0FBS1csQ0FBekQsRUFBMkRBLENBQUMsR0FBQyxXQUFTRixDQUFULEdBQVcsUUFBTUQsQ0FBakIsR0FBbUIsTUFBSUQsQ0FBdkIsR0FBeUIsV0FBU1AsQ0FBL0YsRUFBaUdULENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxHQUFLOEMsQ0FBQyxJQUFFLEVBQUgsR0FBTUEsQ0FBQyxLQUFHLENBQWhILEVBQWtIbkIsQ0FBQyxDQUFDM0IsQ0FBRCxDQUFELEdBQUs4QyxDQUFDLElBQUUsRUFBSCxHQUFNQSxDQUFDLEtBQUcsRUFBakksRUFBb0lqQixDQUFDLENBQUM3QixDQUFELENBQUQsR0FBSzhDLENBQUMsSUFBRSxDQUFILEdBQUtBLENBQUMsS0FBRyxFQUFsSixFQUFxSmhCLENBQUMsQ0FBQzlCLENBQUQsQ0FBRCxHQUFLOEMsQ0FBMUosRUFBNEpYLENBQUMsSUFBRUEsQ0FBQyxHQUFDTyxDQUFDLEdBQUNULENBQUMsQ0FBQ0EsQ0FBQyxDQUFDQSxDQUFDLENBQUNXLENBQUMsR0FBQ0YsQ0FBSCxDQUFGLENBQUYsQ0FBTCxFQUFpQkQsQ0FBQyxJQUFFUixDQUFDLENBQUNBLENBQUMsQ0FBQ1EsQ0FBRCxDQUFGLENBQXZCLElBQStCTixDQUFDLEdBQUNNLENBQUMsR0FBQyxDQUFoTTtBQUFrTTs7QUFBQSxVQUFJUSxDQUFDLEdBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLEVBQVgsRUFBYyxFQUFkLEVBQWlCLEVBQWpCLEVBQW9CLEdBQXBCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLENBQU47QUFBcUNwQyxPQUFDLEdBQUNBLENBQUMsQ0FBQ3NzQixHQUFGLEdBQU01c0IsQ0FBQyxDQUFDbW5CLE1BQUYsQ0FBUztBQUFDNEIsZ0JBQVEsRUFBQyxvQkFBVTtBQUFDLGVBQUksSUFBSWhwQixDQUFDLEdBQUMsQ0FBQ0ssQ0FBQyxHQUFDLEtBQUtxcUIsSUFBUixFQUFjakQsS0FBcEIsRUFBMEJ4bkIsQ0FBQyxHQUFDSSxDQUFDLENBQUNxbkIsUUFBRixHQUFXLENBQXZDLEVBQXlDcm5CLENBQUMsR0FBQyxLQUFHLENBQUMsS0FBS3lzQixRQUFMLEdBQWM3c0IsQ0FBQyxHQUFDLENBQWpCLElBQW9CLENBQXZCLENBQTNDLEVBQXFFTSxDQUFDLEdBQUMsS0FBS3dzQixZQUFMLEdBQWtCLEVBQXpGLEVBQTRGcHNCLENBQUMsR0FBQyxDQUFsRyxFQUFvR0EsQ0FBQyxHQUFDTixDQUF0RyxFQUF3R00sQ0FBQyxFQUF6RztBQUE0RyxnQkFBR0EsQ0FBQyxHQUFDVixDQUFMLEVBQU9NLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELEdBQUtYLENBQUMsQ0FBQ1csQ0FBRCxDQUFOLENBQVAsS0FBcUI7QUFBQyxrQkFBSUUsQ0FBQyxHQUFDTixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFILENBQVA7QUFBYUEsZUFBQyxHQUFDVixDQUFGLEdBQUksSUFBRUEsQ0FBRixJQUFLLEtBQUdVLENBQUMsR0FBQ1YsQ0FBVixLQUFjWSxDQUFDLEdBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxLQUFHLEVBQUwsQ0FBRCxJQUFXLEVBQVgsR0FBY0osQ0FBQyxDQUFDSSxDQUFDLEtBQUcsRUFBSixHQUFPLEdBQVIsQ0FBRCxJQUFlLEVBQTdCLEdBQWdDSixDQUFDLENBQUNJLENBQUMsS0FBRyxDQUFKLEdBQU0sR0FBUCxDQUFELElBQWMsQ0FBOUMsR0FBZ0RKLENBQUMsQ0FBQyxNQUFJSSxDQUFMLENBQWpFLENBQUosSUFBK0VBLENBQUMsR0FBQ0osQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUgsR0FBS0EsQ0FBQyxLQUFHLEVBQVosTUFBa0IsRUFBbkIsQ0FBRCxJQUF5QixFQUF6QixHQUE0QkosQ0FBQyxDQUFDSSxDQUFDLEtBQUcsRUFBSixHQUFPLEdBQVIsQ0FBRCxJQUFlLEVBQTNDLEdBQThDSixDQUFDLENBQUNJLENBQUMsS0FBRyxDQUFKLEdBQU0sR0FBUCxDQUFELElBQWMsQ0FBNUQsR0FBOERKLENBQUMsQ0FBQyxNQUFJSSxDQUFMLENBQWpFLEVBQXlFQSxDQUFDLElBQUU4QixDQUFDLENBQUNoQyxDQUFDLEdBQUNWLENBQUYsR0FBSSxDQUFMLENBQUQsSUFBVSxFQUFySyxHQUF5S00sQ0FBQyxDQUFDSSxDQUFELENBQUQsR0FBS0osQ0FBQyxDQUFDSSxDQUFDLEdBQUNWLENBQUgsQ0FBRCxHQUFPWSxDQUFyTDtBQUF1TDtBQUF0VTs7QUFBc1UsZUFBSWIsQ0FBQyxHQUFDLEtBQUtndEIsZUFBTCxHQUFxQixFQUF2QixFQUEwQi9zQixDQUFDLEdBQUMsQ0FBaEMsRUFBa0NBLENBQUMsR0FBQ0ksQ0FBcEMsRUFBc0NKLENBQUMsRUFBdkM7QUFBMENVLGFBQUMsR0FBQ04sQ0FBQyxHQUFDSixDQUFKLEVBQU1ZLENBQUMsR0FBQ1osQ0FBQyxHQUFDLENBQUYsR0FBSU0sQ0FBQyxDQUFDSSxDQUFELENBQUwsR0FBU0osQ0FBQyxDQUFDSSxDQUFDLEdBQUMsQ0FBSCxDQUFsQixFQUF3QlgsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBSyxJQUFFQSxDQUFGLElBQUssS0FBR1UsQ0FBUixHQUFVRSxDQUFWLEdBQVlPLENBQUMsQ0FBQ1gsQ0FBQyxDQUFDSSxDQUFDLEtBQUcsRUFBTCxDQUFGLENBQUQsR0FBYVEsQ0FBQyxDQUFDWixDQUFDLENBQUNJLENBQUMsS0FBRyxFQUFKLEdBQU8sR0FBUixDQUFGLENBQWQsR0FBOEJVLENBQUMsQ0FBQ2QsQ0FBQyxDQUFDSSxDQUFDLEtBQUcsQ0FBSixHQUFNLEdBQVAsQ0FBRixDQUEvQixHQUE4Q1csQ0FBQyxDQUFDZixDQUFDLENBQUMsTUFBSUksQ0FBTCxDQUFGLENBQXhGO0FBQTFDO0FBQTZJLFNBQXhlO0FBQXllMnFCLG9CQUFZLEVBQUMsc0JBQVN4ckIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxlQUFLZ3RCLGFBQUwsQ0FBbUJqdEIsQ0FBbkIsRUFBcUJDLENBQXJCLEVBQXVCLEtBQUs4c0IsWUFBNUIsRUFBeUNsc0IsQ0FBekMsRUFBMkNFLENBQTNDLEVBQTZDRSxDQUE3QyxFQUErQ0UsQ0FBL0MsRUFBaURWLENBQWpEO0FBQW9ELFNBQXhqQjtBQUF5akJnckIsb0JBQVksRUFBQyxzQkFBU3pyQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUlJLENBQUMsR0FBQ0wsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFQO0FBQWFELFdBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPRCxDQUFDLENBQUNDLENBQUMsR0FBQyxDQUFILENBQVIsRUFBY0QsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFELEdBQU9JLENBQXJCLEVBQXVCLEtBQUs0c0IsYUFBTCxDQUFtQmp0QixDQUFuQixFQUFxQkMsQ0FBckIsRUFBdUIsS0FBSytzQixlQUE1QixFQUE0QzVyQixDQUE1QyxFQUE4Q0MsQ0FBOUMsRUFBZ0RFLENBQWhELEVBQWtEQyxDQUFsRCxFQUFvRGIsQ0FBcEQsQ0FBdkIsRUFBOEVOLENBQUMsR0FBQ0wsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFqRixFQUF1RkQsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFELEdBQU9ELENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBL0YsRUFBcUdELENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPSSxDQUE1RztBQUE4RyxTQUEvc0I7QUFBZ3RCNHNCLHFCQUFhLEVBQUMsdUJBQVNqdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZUUsQ0FBZixFQUFpQkUsQ0FBakIsRUFBbUJFLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkUsQ0FBdkIsRUFBeUI7QUFBQyxlQUFJLElBQUlFLENBQUMsR0FBQyxLQUFLNnJCLFFBQVgsRUFBb0IzckIsQ0FBQyxHQUFDbkIsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBS0ksQ0FBQyxDQUFDLENBQUQsQ0FBNUIsRUFBZ0NlLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPSSxDQUFDLENBQUMsQ0FBRCxDQUExQyxFQUE4Q2dCLENBQUMsR0FBQ3JCLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPSSxDQUFDLENBQUMsQ0FBRCxDQUF4RCxFQUE0RGtCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPSSxDQUFDLENBQUMsQ0FBRCxDQUF0RSxFQUEwRW1CLENBQUMsR0FBQyxDQUE1RSxFQUE4RUcsQ0FBQyxHQUFDLENBQXBGLEVBQXNGQSxDQUFDLEdBQUNWLENBQXhGLEVBQTBGVSxDQUFDLEVBQTNGLEVBQThGO0FBQUMsZ0JBQUlDLENBQUMsR0FBQ3JCLENBQUMsQ0FBQ1ksQ0FBQyxLQUFHLEVBQUwsQ0FBRCxHQUFVVixDQUFDLENBQUNXLENBQUMsS0FBRyxFQUFKLEdBQU8sR0FBUixDQUFYLEdBQXdCVCxDQUFDLENBQUNVLENBQUMsS0FBRyxDQUFKLEdBQU0sR0FBUCxDQUF6QixHQUFxQ1IsQ0FBQyxDQUFDLE1BQUlVLENBQUwsQ0FBdEMsR0FBOENsQixDQUFDLENBQUNtQixDQUFDLEVBQUYsQ0FBckQ7QUFBQSxnQkFBMkRLLENBQUMsR0FBQ3RCLENBQUMsQ0FBQ2EsQ0FBQyxLQUFHLEVBQUwsQ0FBRCxHQUFVWCxDQUFDLENBQUNZLENBQUMsS0FBRyxFQUFKLEdBQU8sR0FBUixDQUFYLEdBQXdCVixDQUFDLENBQUNZLENBQUMsS0FBRyxDQUFKLEdBQU0sR0FBUCxDQUF6QixHQUFxQ1YsQ0FBQyxDQUFDLE1BQUlNLENBQUwsQ0FBdEMsR0FBOENkLENBQUMsQ0FBQ21CLENBQUMsRUFBRixDQUE1RztBQUFBLGdCQUFrSFcsQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDYyxDQUFDLEtBQUcsRUFBTCxDQUFELEdBQVVaLENBQUMsQ0FBQ2MsQ0FBQyxLQUFHLEVBQUosR0FBTyxHQUFSLENBQVgsR0FBd0JaLENBQUMsQ0FBQ1EsQ0FBQyxLQUFHLENBQUosR0FBTSxHQUFQLENBQXpCLEdBQXFDTixDQUFDLENBQUMsTUFBSU8sQ0FBTCxDQUF0QyxHQUE4Q2YsQ0FBQyxDQUFDbUIsQ0FBQyxFQUFGLENBQW5LO0FBQXlLRCxhQUFDLEdBQUNoQixDQUFDLENBQUNnQixDQUFDLEtBQUcsRUFBTCxDQUFELEdBQVVkLENBQUMsQ0FBQ1UsQ0FBQyxLQUFHLEVBQUosR0FBTyxHQUFSLENBQVgsR0FBd0JSLENBQUMsQ0FBQ1MsQ0FBQyxLQUFHLENBQUosR0FBTSxHQUFQLENBQXpCLEdBQXFDUCxDQUFDLENBQUMsTUFBSVEsQ0FBTCxDQUF0QyxHQUE4Q2hCLENBQUMsQ0FBQ21CLENBQUMsRUFBRixDQUFqRCxFQUF1REwsQ0FBQyxHQUFDUyxDQUF6RCxFQUEyRFIsQ0FBQyxHQUFDUyxDQUE3RCxFQUErRFIsQ0FBQyxHQUFDYyxDQUFqRTtBQUFtRTs7QUFBQVAsV0FBQyxHQUFDLENBQUNiLENBQUMsQ0FBQ0ksQ0FBQyxLQUFHLEVBQUwsQ0FBRCxJQUFXLEVBQVgsR0FBY0osQ0FBQyxDQUFDSyxDQUFDLEtBQUcsRUFBSixHQUFPLEdBQVIsQ0FBRCxJQUFlLEVBQTdCLEdBQWdDTCxDQUFDLENBQUNNLENBQUMsS0FBRyxDQUFKLEdBQU0sR0FBUCxDQUFELElBQWMsQ0FBOUMsR0FBZ0ROLENBQUMsQ0FBQyxNQUFJUSxDQUFMLENBQWxELElBQTJEbEIsQ0FBQyxDQUFDbUIsQ0FBQyxFQUFGLENBQTlELEVBQW9FSyxDQUFDLEdBQUMsQ0FBQ2QsQ0FBQyxDQUFDSyxDQUFDLEtBQUcsRUFBTCxDQUFELElBQVcsRUFBWCxHQUFjTCxDQUFDLENBQUNNLENBQUMsS0FBRyxFQUFKLEdBQU8sR0FBUixDQUFELElBQWUsRUFBN0IsR0FBZ0NOLENBQUMsQ0FBQ1EsQ0FBQyxLQUFHLENBQUosR0FBTSxHQUFQLENBQUQsSUFBYyxDQUE5QyxHQUFnRFIsQ0FBQyxDQUFDLE1BQUlJLENBQUwsQ0FBbEQsSUFBMkRkLENBQUMsQ0FBQ21CLENBQUMsRUFBRixDQUFsSSxFQUF3SVcsQ0FBQyxHQUFDLENBQUNwQixDQUFDLENBQUNNLENBQUMsS0FBRyxFQUFMLENBQUQsSUFBVyxFQUFYLEdBQWNOLENBQUMsQ0FBQ1EsQ0FBQyxLQUFHLEVBQUosR0FBTyxHQUFSLENBQUQsSUFBZSxFQUE3QixHQUFnQ1IsQ0FBQyxDQUFDSSxDQUFDLEtBQUcsQ0FBSixHQUFNLEdBQVAsQ0FBRCxJQUFjLENBQTlDLEdBQWdESixDQUFDLENBQUMsTUFBSUssQ0FBTCxDQUFsRCxJQUEyRGYsQ0FBQyxDQUFDbUIsQ0FBQyxFQUFGLENBQXRNLEVBQTRNRCxDQUFDLEdBQUMsQ0FBQ1IsQ0FBQyxDQUFDUSxDQUFDLEtBQUcsRUFBTCxDQUFELElBQVcsRUFBWCxHQUFjUixDQUFDLENBQUNJLENBQUMsS0FBRyxFQUFKLEdBQU8sR0FBUixDQUFELElBQWUsRUFBN0IsR0FBZ0NKLENBQUMsQ0FBQ0ssQ0FBQyxLQUFHLENBQUosR0FBTSxHQUFQLENBQUQsSUFBYyxDQUE5QyxHQUFnREwsQ0FBQyxDQUFDLE1BQUlNLENBQUwsQ0FBbEQsSUFBMkRoQixDQUFDLENBQUNtQixDQUFDLEVBQUYsQ0FBMVEsRUFBZ1J4QixDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFLMkIsQ0FBclIsRUFBdVI1QixDQUFDLENBQUNDLENBQUMsR0FBQyxDQUFILENBQUQsR0FBTzRCLENBQTlSLEVBQWdTN0IsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBSCxDQUFELEdBQU9rQyxDQUF2UyxFQUF5U25DLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUgsQ0FBRCxHQUFPc0IsQ0FBaFQ7QUFBa1QsU0FBcjNDO0FBQXMzQ3lvQixlQUFPLEVBQUM7QUFBOTNDLE9BQVQsQ0FBUjtBQUFtNUNocUIsT0FBQyxDQUFDNnNCLEdBQUYsR0FBTTVzQixDQUFDLENBQUNtcEIsYUFBRixDQUFnQjdvQixDQUFoQixDQUFOO0FBQXlCLEtBQTk2RCxFQUFyelAsRUFBc3VURixDQUE3dVQ7QUFBK3VULEdBQWp6WixFQUE3cGpCO0FBQUEsTUFBaTk4QjZzQixFQUFFLEdBQUNqRyxFQUFwOThCOztBQUF1OThCLFdBQVNrRyxFQUFULEdBQWE7QUFBQyxXQUFPbGEsRUFBRSxFQUFUO0FBQVk7O0FBQUEsTUFBSW1hLEVBQUUsR0FBQyxJQUFQOztBQUFZLFdBQVNDLEVBQVQsR0FBYTtBQUFDLFFBQUlydEIsQ0FBSixFQUFNQyxDQUFOLEVBQVFJLENBQVIsRUFBVUUsQ0FBVjtBQUFZLFdBQU8sU0FBTzZzQixFQUFQLEtBQVlwdEIsQ0FBQyxHQUFDc3RCLEVBQUUsRUFBSixFQUFPcnRCLENBQUMsR0FBQzRMLEVBQUUsQ0FBQ0csT0FBSCxDQUFXaE0sQ0FBWCxDQUFULEVBQXVCb3RCLEVBQUUsR0FBQ250QixDQUFDLElBQUVJLENBQUMsR0FBQ0osQ0FBRixFQUFJTSxDQUFDLEdBQUM0c0IsRUFBRSxFQUFSLEVBQVdELEVBQUUsQ0FBQ0wsR0FBSCxDQUFPaEMsT0FBUCxDQUFleHFCLENBQWYsRUFBaUJFLENBQWpCLEVBQW9CUyxRQUFwQixDQUE2QmtzQixFQUFFLENBQUNyRixHQUFILENBQU9LLElBQXBDLENBQWIsSUFBd0QsSUFBL0YsR0FBcUdrRixFQUE1RztBQUErRzs7QUFBQSxXQUFTRyxFQUFULENBQVl2dEIsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLEVBQUU0RSxTQUFTLENBQUM5QyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTOEMsU0FBUyxDQUFDLENBQUQsQ0FBeEMsS0FBOENBLFNBQVMsQ0FBQyxDQUFELENBQTdEO0FBQWlFdW9CLE1BQUUsR0FBQ3B0QixDQUFILEVBQUssU0FBT0EsQ0FBUCxJQUFVLENBQUMsQ0FBRCxLQUFLQyxDQUFmLEdBQWlCdXRCLEVBQUUsQ0FBQ0YsRUFBRSxFQUFILENBQW5CLEdBQTBCRyxFQUFFLENBQUNILEVBQUUsRUFBSCxFQUFNdHRCLENBQU4sQ0FBakM7QUFBMEM7O0FBQUEsV0FBU3l0QixFQUFULENBQVl6dEIsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsUUFBSUksQ0FBSjtBQUFBLFFBQU1FLENBQU47QUFBQSxRQUFRRSxDQUFDLElBQUVKLENBQUMsR0FBQ0osQ0FBRixFQUFJTSxDQUFDLEdBQUM0c0IsRUFBRSxFQUFSLEVBQVdELEVBQUUsQ0FBQ0wsR0FBSCxDQUFPakMsT0FBUCxDQUFldnFCLENBQWYsRUFBaUJFLENBQWpCLEVBQW9CUyxRQUFwQixFQUFiLENBQVQ7QUFBc0Q2SyxNQUFFLENBQUNFLE9BQUgsQ0FBVy9MLENBQVgsRUFBYVMsQ0FBYjtBQUFnQjs7QUFBQSxXQUFTK3NCLEVBQVQsQ0FBWXh0QixDQUFaLEVBQWM7QUFBQzZMLE1BQUUsQ0FBQ0ksVUFBSCxDQUFjak0sQ0FBZDtBQUFpQjs7QUFBQSxNQUFJMHRCLEVBQUUsR0FBQyxFQUFQOztBQUFVLFdBQVNKLEVBQVQsR0FBYTtBQUFDLFFBQUl0dEIsQ0FBSjtBQUFNLFdBQU8wdEIsRUFBRSxDQUFDQyxjQUFILEtBQW9CRCxFQUFFLENBQUNDLGNBQUgsR0FBa0IsWUFBVTN0QixDQUFDLEdBQUMsUUFBTW10QixFQUFFLEVBQVYsRUFBYUQsRUFBRSxDQUFDdEQsR0FBSCxDQUFPNXBCLENBQVAsRUFBVWdCLFFBQVYsRUFBdkIsQ0FBdEMsR0FBb0Ywc0IsRUFBRSxDQUFDQyxjQUE5RjtBQUE2Rzs7QUFBQSxNQUFJQyxFQUFFLEdBQUN4dEIsTUFBTSxDQUFDb2MsTUFBUCxDQUFjO0FBQUM1TyxhQUFTLEVBQUMsSUFBWDtBQUFnQmlnQixhQUFTLEVBQUNWLEVBQTFCO0FBQTZCVyxrQkFBYyxFQUFDVCxFQUE1QztBQUErQ1Usa0JBQWMsRUFBQ1IsRUFBOUQ7QUFBaUVTLG1CQUFlLEVBQUMsMkJBQVU7QUFBQyxhQUFPQyxPQUFPLENBQUNsVCxLQUFSLENBQWMsK0NBQWQsR0FBK0QsRUFBdEU7QUFBeUUsS0FBcks7QUFBc0ttVCxtQkFBZSxFQUFDLHlCQUFTbHVCLENBQVQsRUFBVztBQUFDaXVCLGFBQU8sQ0FBQ2xULEtBQVIsQ0FBYywrQ0FBZDtBQUErRDtBQUFqUSxHQUFkLENBQVA7O0FBQXlSLFdBQVNvVCxFQUFULEdBQWE7QUFBQyxXQUFNLFVBQVV0a0IsTUFBVixDQUFpQndqQixFQUFFLEVBQW5CLENBQU47QUFBNkI7O0FBQUEsV0FBU2UsRUFBVCxHQUFhO0FBQUMsV0FBTSxXQUFXdmtCLE1BQVgsQ0FBa0JzakIsRUFBRSxFQUFwQixDQUFOO0FBQThCOztBQUFBLE1BQUlrQixFQUFFLEdBQUM7QUFBQ0MsY0FBVSxFQUFDN2lCLEVBQUUsQ0FBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxDQUFELENBQWQ7QUFBOEI4aUIsZ0JBQVksRUFBQy9rQixFQUEzQztBQUE4Q2dsQixzQkFBa0IsRUFBQ2psQixFQUFqRTtBQUFvRWtsQixrQkFBYyxFQUFDbGxCLEVBQW5GO0FBQXNGbWxCLHdCQUFvQixFQUFDbmxCLEVBQTNHO0FBQThHb2xCLG9CQUFnQixFQUFDcGxCO0FBQS9ILEdBQVA7QUFBQSxNQUEwSXFsQixFQUFFLEdBQUM7QUFBQ0MsbUJBQWUsRUFBQ3JsQjtBQUFqQixHQUE3STs7QUFBa0ssV0FBU3NsQixFQUFULENBQVk5dUIsQ0FBWixFQUFjO0FBQUMsS0FBQyxDQUFELEtBQUtBLENBQUMsQ0FBQzZ1QixlQUFQLEtBQXlCWixPQUFPLElBQUVBLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLDREQUFiLENBQVQsRUFBb0YvdUIsQ0FBQyxDQUFDNnVCLGVBQUYsR0FBa0IsQ0FBQyxDQUFoSTtBQUFtSTs7QUFBQSxXQUFTRyxFQUFULENBQVlodkIsQ0FBWixFQUFjO0FBQUMsUUFBRyxDQUFDdUosRUFBRSxDQUFDdkosQ0FBRCxDQUFOLEVBQVUsT0FBTSxDQUFDLENBQVA7QUFBUyxRQUFHLE1BQUlBLENBQUMsQ0FBQytCLE1BQU4sSUFBYy9CLENBQUMsQ0FBQytCLE1BQUYsR0FBUyxJQUExQixFQUErQixNQUFNLElBQUlvUixFQUFKLENBQU8sNkNBQVAsQ0FBTjtBQUE0RCxXQUFNLENBQUMsQ0FBUDtBQUFTOztBQUFBLFdBQVM4YixFQUFULENBQVlqdkIsQ0FBWixFQUFjO0FBQUMsV0FBTSxDQUFDQSxDQUFDLENBQUNrdkIsZ0JBQUYsSUFBb0JsdkIsQ0FBQyxDQUFDbXZCLGtCQUF0QixJQUEwQ252QixDQUFDLENBQUNvdkIsbUJBQTdDLE1BQW9FLE9BQU9wdkIsQ0FBQyxDQUFDa3ZCLGdCQUFULEVBQTBCLE9BQU9sdkIsQ0FBQyxDQUFDbXZCLGtCQUFuQyxFQUFzRCxPQUFPbnZCLENBQUMsQ0FBQ292QixtQkFBL0QsRUFBbUZuQixPQUFPLElBQUVBLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLGlDQUFpQ2xsQixNQUFqQyxDQUF3QyxDQUFDLGtCQUFELEVBQW9CLG9CQUFwQixFQUF5QyxxQkFBekMsRUFBZ0UyQixJQUFoRSxDQUFxRSxJQUFyRSxDQUF4QyxFQUFtSCwrQ0FBbkgsQ0FBYixDQUFoSyxHQUFtVixDQUFDLENBQTFWO0FBQTRWOztBQUFBLE1BQUk2akIsRUFBRSxHQUFDO0FBQUMsdUJBQWtCO0FBQUNwVSxZQUFNLEVBQUMsTUFBUjtBQUFlM0YsVUFBSSxFQUFDO0FBQUN6QixnQkFBUSxFQUFDO0FBQUN5YixvQkFBVSxFQUFDL3RCO0FBQVo7QUFBVjtBQUFwQixLQUFuQjtBQUFrRSx1QkFBa0I7QUFBQzBaLFlBQU0sRUFBQyxNQUFSO0FBQWUzRixVQUFJLEVBQUM7QUFBcEIsS0FBcEY7QUFBNEcsbUJBQWM7QUFBQzJGLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQ3pCLGdCQUFRLEVBQUNySCxFQUFFLENBQUM7QUFBQytpQix1QkFBYSxFQUFDL3RCO0FBQWYsU0FBRCxFQUFtQm90QixFQUFuQjtBQUFaO0FBQW5CLEtBQTFIO0FBQWtMLHVCQUFrQjtBQUFDM1QsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFwQixLQUFwTTtBQUE0TiwrQkFBMEI7QUFBQzJGLFlBQU0sRUFBQyxNQUFSO0FBQWUzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQzBiLG9CQUFVLEVBQUMvdEI7QUFBWjtBQUFWO0FBQXBCLEtBQXRQO0FBQXFTLGtDQUE2QjtBQUFDMFosWUFBTSxFQUFDLEtBQVI7QUFBYzNGLFVBQUksRUFBQztBQUFuQixLQUFsVTtBQUF5Vix1QkFBa0I7QUFBQzJGLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQ3pCLGdCQUFRLEVBQUM7QUFBQzJiLGdCQUFNLEVBQUNodUI7QUFBUjtBQUFWO0FBQW5CLEtBQTNXO0FBQXFaLDhCQUF5QjtBQUFDeVosWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDNGIsZ0JBQU0sRUFBQ2h1QjtBQUFSO0FBQVY7QUFBcEIsS0FBOWE7QUFBeWQsOEJBQXlCO0FBQUN5WixZQUFNLEVBQUMsS0FBUjtBQUFjM0YsVUFBSSxFQUFDO0FBQUN6QixnQkFBUSxFQUFDO0FBQUM0YixlQUFLLEVBQUNsbUI7QUFBUDtBQUFWO0FBQW5CLEtBQWxmO0FBQTRoQixpQ0FBNEI7QUFBQzBSLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQ3pCLGdCQUFRLEVBQUM7QUFBQzZiLG9CQUFVLEVBQUNobUIsRUFBWjtBQUFlaW1CLHlCQUFlLEVBQUNqbUIsRUFBL0I7QUFBa0NrbUIsbUJBQVMsRUFBQ2xtQjtBQUE1QztBQUFWO0FBQW5CLEtBQXhqQjtBQUF1b0IsNEJBQXVCO0FBQUN1UixZQUFNLEVBQUMsS0FBUjtBQUFjM0YsVUFBSSxFQUFDO0FBQUN6QixnQkFBUSxFQUFDK2EsRUFBVjtBQUFhOWEsYUFBSyxFQUFDZ2I7QUFBbkI7QUFBbkIsS0FBOXBCO0FBQXlzQiw0QkFBdUI7QUFBQzdULFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQ3pCLGdCQUFRLEVBQUNySCxFQUFFLENBQUM7QUFBQ2hOLGdCQUFNLEVBQUNrSyxFQUFSO0FBQVdtbUIsZUFBSyxFQUFDbm1CLEVBQWpCO0FBQW9Cb21CLGVBQUssRUFBQ3ZtQixFQUExQjtBQUE2QndtQixzQkFBWSxFQUFDeG1CO0FBQTFDLFNBQUQsRUFBK0NxbEIsRUFBL0MsQ0FBWjtBQUErRDlhLGFBQUssRUFBQ2diO0FBQXJFO0FBQW5CLEtBQWh1QjtBQUE2ekIsbUJBQWM7QUFBQzdULFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQ3pCLGdCQUFRLEVBQUNySCxFQUFFLENBQUM7QUFBQ2hOLGdCQUFNLEVBQUNrSyxFQUFSO0FBQVdtbUIsZUFBSyxFQUFDbm1CLEVBQWpCO0FBQW9Cb21CLGVBQUssRUFBQ3ZtQixFQUExQjtBQUE2QndtQixzQkFBWSxFQUFDeG1CO0FBQTFDLFNBQUQsRUFBK0NxbEIsRUFBL0MsQ0FBWjtBQUErRDlhLGFBQUssRUFBQ2diO0FBQXJFO0FBQW5CLEtBQTMwQjtBQUF3NkIsOEJBQXlCO0FBQUM3VCxZQUFNLEVBQUMsTUFBUjtBQUFlM0YsVUFBSSxFQUFDO0FBQUMxQixnQkFBUSxFQUFDO0FBQUNvYyxxQkFBVyxFQUFDdG1CO0FBQWIsU0FBVjtBQUEyQm1LLGdCQUFRLEVBQUM7QUFBQ29jLHVCQUFhLEVBQUMxdUI7QUFBZjtBQUFwQztBQUFwQixLQUFqOEI7QUFBNmdDLG9DQUErQjtBQUFDMFosWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDc2MscUJBQVcsRUFBQzNtQjtBQUFiLFNBQVY7QUFBMkJzSyxnQkFBUSxFQUFDO0FBQUNtYyxxQkFBVyxFQUFDdG1CLEVBQWI7QUFBZ0J1bUIsdUJBQWEsRUFBQzF1QjtBQUE5QjtBQUFwQztBQUFwQixLQUE1aUM7QUFBdW9DLHNDQUFpQztBQUFDMFosWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDdWMseUJBQWUsRUFBQyx5QkFBU253QixDQUFULEVBQVc7QUFBQyxtQkFBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNaXZCLEVBQUUsQ0FBQ2p2QixDQUFELENBQWY7QUFBbUI7QUFBaEQ7QUFBVjtBQUFwQixLQUF4cUM7QUFBMHZDLHlDQUFvQztBQUFDaWIsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDb2MscUJBQVcsRUFBQ3RtQixFQUFiO0FBQWdCMG1CLHdCQUFjLEVBQUM1dUIsQ0FBL0I7QUFBaUM2dUIsMEJBQWdCLEVBQUM5bUI7QUFBbEQsU0FBVjtBQUFnRXNLLGdCQUFRLEVBQUM7QUFBQ29jLHVCQUFhLEVBQUMxdUI7QUFBZixTQUF6RTtBQUEyRm9TLGdCQUFRLEVBQUMsb0JBQVU7QUFBQyxpQkFBTTtBQUFDMGMsNEJBQWdCLEVBQUM7QUFBbEIsV0FBTjtBQUFnQztBQUEvSTtBQUFwQixLQUE5eEM7QUFBbzhDLCtDQUEwQztBQUFDcFYsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDc2MscUJBQVcsRUFBQzNtQixFQUFiO0FBQWdCNm1CLHdCQUFjLEVBQUM1dUIsQ0FBL0I7QUFBaUM2dUIsMEJBQWdCLEVBQUM5bUI7QUFBbEQsU0FBVjtBQUFnRXNLLGdCQUFRLEVBQUM7QUFBQ21jLHFCQUFXLEVBQUN0bUIsRUFBYjtBQUFnQnVtQix1QkFBYSxFQUFDMXVCO0FBQTlCLFNBQXpFO0FBQTBHb1MsZ0JBQVEsRUFBQyxvQkFBVTtBQUFDLGlCQUFNO0FBQUMwYyw0QkFBZ0IsRUFBQztBQUFsQixXQUFOO0FBQWdDO0FBQTlKO0FBQXBCLEtBQTkrQztBQUFtcUQsaURBQTRDO0FBQUNwVixZQUFNLEVBQUMsTUFBUjtBQUFlM0YsVUFBSSxFQUFDO0FBQUMxQixnQkFBUSxFQUFDO0FBQUN1Yyx5QkFBZSxFQUFDLHlCQUFTbndCLENBQVQsRUFBVztBQUFDLG1CQUFPdUIsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELElBQU1pdkIsRUFBRSxDQUFDanZCLENBQUQsQ0FBZjtBQUFtQixXQUFoRDtBQUFpRG93Qix3QkFBYyxFQUFDNXVCLENBQWhFO0FBQWtFNnVCLDBCQUFnQixFQUFDOW1CO0FBQW5GLFNBQVY7QUFBaUdvSyxnQkFBUSxFQUFDLG9CQUFVO0FBQUMsaUJBQU07QUFBQzBjLDRCQUFnQixFQUFDO0FBQWxCLFdBQU47QUFBZ0M7QUFBcko7QUFBcEIsS0FBL3NEO0FBQTIzRCxnREFBMkM7QUFBQ3BWLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQzBjLGtCQUFRLEVBQUMvbUIsRUFBVjtBQUFheW1CLHFCQUFXLEVBQUN0bUI7QUFBekIsU0FBVjtBQUF1Q21LLGdCQUFRLEVBQUM7QUFBQ29jLHVCQUFhLEVBQUMxdUI7QUFBZjtBQUFoRCxPQUFuQjtBQUFzRmd2QixjQUFRLEVBQUNuQztBQUEvRixLQUF0NkQ7QUFBeWdFLDZDQUF3QztBQUFDblQsWUFBTSxFQUFDLEtBQVI7QUFBYzNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDMGMsa0JBQVEsRUFBQy9tQixFQUFWO0FBQWEybUIscUJBQVcsRUFBQzNtQjtBQUF6QixTQUFWO0FBQXVDc0ssZ0JBQVEsRUFBQztBQUFDbWMscUJBQVcsRUFBQ3RtQixFQUFiO0FBQWdCdW1CLHVCQUFhLEVBQUMxdUI7QUFBOUI7QUFBaEQsT0FBbkI7QUFBcUdndkIsY0FBUSxFQUFDbkM7QUFBOUcsS0FBampFO0FBQW1xRSwrQ0FBMEM7QUFBQ25ULFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQzBjLGtCQUFRLEVBQUMvbUIsRUFBVjtBQUFhNG1CLHlCQUFlLEVBQUM1dUI7QUFBN0I7QUFBVixPQUFuQjtBQUE4RGd2QixjQUFRLEVBQUNuQztBQUF2RSxLQUE3c0U7QUFBd3hFLHlDQUFvQztBQUFDblQsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDNGMsY0FBSSxFQUFDanZCO0FBQU47QUFBVixPQUFwQjtBQUF3Q2d2QixjQUFRLEVBQUNuQztBQUFqRCxLQUE1ekU7QUFBaTNFLHlDQUFvQztBQUFDblQsWUFBTSxFQUFDLFFBQVI7QUFBaUIzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQzZjLG1CQUFTLEVBQUNsbkI7QUFBWDtBQUFWLE9BQXRCO0FBQWdEZ25CLGNBQVEsRUFBQ25DO0FBQXpELEtBQXI1RTtBQUFrOUUsd0NBQW1DO0FBQUNuVCxZQUFNLEVBQUMsTUFBUjtBQUFlM0YsVUFBSSxFQUFDO0FBQUMxQixnQkFBUSxFQUFDO0FBQUM2YyxtQkFBUyxFQUFDbG5CO0FBQVg7QUFBVixPQUFwQjtBQUE4Q2duQixjQUFRLEVBQUNuQztBQUF2RCxLQUFyL0U7QUFBZ2pGLDZCQUF3QjtBQUFDblQsWUFBTSxFQUFDLEtBQVI7QUFBYzNGLFVBQUksRUFBQztBQUFDekIsZ0JBQVEsRUFBQythO0FBQVY7QUFBbkIsS0FBeGtGO0FBQTBtRixpQ0FBNEI7QUFBQzNULFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBbkIsS0FBdG9GO0FBQTZwRiw2QkFBd0I7QUFBQzJGLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQ29CLFlBQUUsRUFBQ3pMO0FBQUo7QUFBVjtBQUFuQixLQUFyckY7QUFBNHRGLCtCQUEwQjtBQUFDMFIsWUFBTSxFQUFDLEtBQVI7QUFBYzNGLFVBQUksRUFBQztBQUFDekIsZ0JBQVEsRUFBQztBQUFDNmMsaUJBQU8sRUFBQ25uQjtBQUFUO0FBQVY7QUFBbkIsS0FBdHZGO0FBQWt5Riw4QkFBeUI7QUFBQzBSLFlBQU0sRUFBQyxLQUFSO0FBQWMzRixVQUFJLEVBQUM7QUFBQzFCLGdCQUFRLEVBQUM7QUFBQ2tDLGFBQUcsRUFBQ3ZNO0FBQUw7QUFBVjtBQUFuQixLQUEzekY7QUFBbTJGLCtCQUEwQjtBQUFDMFIsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDK2MsaUJBQU8sRUFBQzNCO0FBQVQsU0FBVjtBQUF1Qm5iLGdCQUFRLEVBQUN3YTtBQUFoQztBQUFwQixLQUE3M0Y7QUFBczdGLGdDQUEyQjtBQUFDcFQsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDZ2Qsd0JBQWMsRUFBQyx3QkFBUzV3QixDQUFULEVBQVc7QUFBQyxtQkFBTSxDQUFDLENBQUN3QixDQUFDLENBQUN4QixDQUFELENBQUgsSUFBUW1LLEVBQUUsQ0FBQ25LLENBQUQsRUFBSSxVQUFTQSxDQUFULEVBQVc7QUFBQyxrQkFBRyxDQUFDdUosRUFBRSxDQUFDdkosQ0FBRCxDQUFOLEVBQVUsT0FBTSxDQUFDLENBQVA7QUFBUyxrQkFBRyx3RkFBd0ZnQyxJQUF4RixDQUE2RmhDLENBQTdGLENBQUgsRUFBbUcsTUFBTSxJQUFJbVQsRUFBSixDQUFPLHlGQUFQLENBQU47QUFBd0cscUJBQU0sQ0FBQyxDQUFQO0FBQVMsYUFBdlAsQ0FBaEI7QUFBMFE7QUFBdFMsU0FBVjtBQUFrVFUsZ0JBQVEsRUFBQ3JILEVBQUUsQ0FBQztBQUFDbWtCLGlCQUFPLEVBQUMzQjtBQUFULFNBQUQsRUFBY1gsRUFBZDtBQUE3VDtBQUFwQixLQUFqOUY7QUFBc3pHLCtCQUEwQjtBQUFDcFQsWUFBTSxFQUFDLE1BQVI7QUFBZTNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDaWQsbUJBQVMsRUFBQ3R2QjtBQUFYLFNBQVY7QUFBd0JzUyxnQkFBUSxFQUFDckgsRUFBRSxDQUFDO0FBQUNta0IsaUJBQU8sRUFBQzNCO0FBQVQsU0FBRCxFQUFjWCxFQUFkO0FBQW5DO0FBQXBCLEtBQWgxRztBQUEyNUcsa0NBQTZCO0FBQUNwVCxZQUFNLEVBQUMsTUFBUjtBQUFlM0YsVUFBSSxFQUFDO0FBQXBCLEtBQXg3RztBQUFnOUcsb0NBQStCO0FBQUMyRixZQUFNLEVBQUMsUUFBUjtBQUFpQjNGLFVBQUksRUFBQztBQUFDMUIsZ0JBQVEsRUFBQztBQUFDb0IsWUFBRSxFQUFDekw7QUFBSjtBQUFWO0FBQXRCLEtBQS8rRztBQUF5aEgsNkJBQXdCO0FBQUMwUixZQUFNLEVBQUMsS0FBUjtBQUFjM0YsVUFBSSxFQUFDO0FBQUN6QixnQkFBUSxFQUFDO0FBQUNpZCw0QkFBa0IsRUFBQ3R2QjtBQUFwQjtBQUFWO0FBQW5CLEtBQWpqSDtBQUF1bUgsZ0NBQTJCO0FBQUN5WixZQUFNLEVBQUMsS0FBUjtBQUFjM0YsVUFBSSxFQUFDO0FBQUN6QixnQkFBUSxFQUFDO0FBQUNrZCxnQ0FBc0IsRUFBQ3Z2QjtBQUF4QjtBQUFWO0FBQW5CO0FBQWxvSCxHQUFQO0FBQUEsTUFBb3NId3ZCLEVBQUUsR0FBQztBQUFDQyxXQUFPLEVBQUM7QUFBQ3JkLGNBQVEsRUFBQztBQUFDa0MsV0FBRyxFQUFDckssRUFBRSxDQUFDaEIsRUFBRSxDQUFDNGtCLEVBQUQsQ0FBSDtBQUFQLE9BQVY7QUFBMkJ4YixjQUFRLEVBQUM7QUFBQ3lCLFlBQUksRUFBQy9ULENBQU47QUFBUTJ2QixhQUFLLEVBQUMsZUFBU2x4QixDQUFULEVBQVc7QUFBQyxpQkFBTzJMLEVBQUUsQ0FBQyxDQUFDbkssQ0FBRCxFQUFHd0ksRUFBSCxDQUFELENBQUYsQ0FBV2hLLENBQVgsS0FBZW1LLEVBQUUsQ0FBQ25LLENBQUQsRUFBRzJMLEVBQUUsQ0FBQyxDQUFDNUIsRUFBRCxFQUFJRCxFQUFKLENBQUQsQ0FBTCxDQUF4QjtBQUF3QyxTQUFsRTtBQUFtRTBtQixZQUFJLEVBQUN6bUIsRUFBeEU7QUFBMkU0TCxlQUFPLEVBQUM5UyxDQUFuRjtBQUFxRjZTLFlBQUksRUFBQzdTLENBQTFGO0FBQTRGK1MsY0FBTSxFQUFDL1M7QUFBbkcsT0FBcEM7QUFBMEk4USxjQUFRLEVBQUM7QUFBQzJCLFlBQUksRUFBQyxFQUFOO0FBQVNLLGVBQU8sRUFBQ2pMLEVBQWpCO0FBQW9CZ0wsWUFBSSxFQUFDaEwsRUFBekI7QUFBNEJrTCxjQUFNLEVBQUNsTDtBQUFuQztBQUFuSixLQUFUO0FBQW9NeW1CLE9BQUcsRUFBQzlCO0FBQXhNLEdBQXZzSDtBQUFBLE1BQW01SCtCLEVBQUUsR0FBQyxJQUF0NUg7O0FBQTI1SCxXQUFTQyxFQUFULENBQVlyeEIsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLENBQUNELENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR2d4QixFQUFFLENBQUNDLE9BQU4sRUFBYyxhQUFkLENBQUwsRUFBbUNuYixHQUF6QztBQUFBLFFBQTZDelYsQ0FBQyxHQUFDMndCLEVBQUUsQ0FBQ0csR0FBSCxDQUFPbHhCLENBQVAsRUFBVXFWLElBQXpEO0FBQThELFdBQU9qVixDQUFDLEtBQUdMLENBQUMsQ0FBQ3NWLElBQUYsR0FBTzdCLEVBQUUsQ0FBQ3pULENBQUMsQ0FBQ3NWLElBQUgsRUFBUWpWLENBQVIsRUFBVSxpQkFBaUJ3SixNQUFqQixDQUF3QjVKLENBQXhCLENBQVYsQ0FBWixDQUFELEVBQW9EbXhCLEVBQUUsS0FBR0EsRUFBRSxHQUFDOWMsRUFBRSxDQUFFLFlBQVU7QUFBQyxhQUFPLElBQUkwUyxFQUFFLENBQUMvQixHQUFQLENBQVc7QUFBQ3RELGNBQU0sRUFBQ3BRLEVBQUUsQ0FBQ1c7QUFBWCxPQUFYLEVBQWlDO0FBQUN5UCxjQUFNLEVBQUM7QUFBQ3NQLGlCQUFPLEVBQUM7QUFBVDtBQUFSLE9BQWpDLENBQVA7QUFBK0QsS0FBNUUsQ0FBTCxFQUFvRkssRUFBRSxDQUFDeHBCLElBQUgsQ0FBUyxZQUFVO0FBQUNzcEIsUUFBRSxDQUFDaE4sT0FBSCxJQUFhZ04sRUFBRSxHQUFDLElBQWhCO0FBQXFCLEtBQXpDLENBQXZGLENBQXRELEVBQTBMLElBQUlwVSxFQUFFLENBQUM5YyxPQUFILENBQVc0ZSxPQUFmLENBQXdCLFVBQVM3ZSxDQUFULEVBQVdJLENBQVgsRUFBYTtBQUFDLE9BQUMsVUFBU0wsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUM4VixHQUFSO0FBQUEsWUFBWXpWLENBQUMsR0FBQzJ3QixFQUFFLENBQUNHLEdBQUgsQ0FBT2x4QixDQUFQLENBQWQ7QUFBQSxZQUF3Qk0sQ0FBQyxHQUFDLEVBQTFCO0FBQTZCK0ksVUFBRSxDQUFDdEosQ0FBQyxDQUFDc1YsSUFBSCxFQUFTLFVBQVN0VixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDTSxXQUFDLENBQUNOLENBQUQsQ0FBRCxHQUFLc0osRUFBRSxDQUFDdkosQ0FBRCxDQUFGLEdBQU1BLENBQU4sR0FBUXNMLElBQUksQ0FBQ0MsU0FBTCxDQUFldkwsQ0FBZixDQUFiO0FBQStCLFNBQXRELENBQUY7QUFBMkQsWUFBSVMsQ0FBQyxHQUFDO0FBQUNxVixhQUFHLEVBQUM3VixDQUFMO0FBQU9nYixnQkFBTSxFQUFDNWEsQ0FBQyxDQUFDNGEsTUFBaEI7QUFBdUJzVyxpQkFBTyxFQUFDO0FBQUNwZCxjQUFFLEVBQUMvQyxFQUFKO0FBQU9vZ0IseUJBQWEsRUFBQyxDQUFDbnhCLENBQUMsQ0FBQ2t3QixRQUFGLElBQVlwQyxFQUFiLEdBQXJCO0FBQXdDLDZCQUFnQixVQUF4RDtBQUFtRXNELGtCQUFNLEVBQUM7QUFBMUUsV0FBL0I7QUFBcUhuYyxjQUFJLEVBQUMvVTtBQUExSCxTQUFOO0FBQW1JLGVBQU8sSUFBSXljLEVBQUUsQ0FBQzljLE9BQUgsQ0FBVzRlLE9BQWYsQ0FBd0IsVUFBU3plLENBQVQsRUFBV00sQ0FBWCxFQUFhO0FBQUMsY0FBRyxVQUFTWCxDQUFULEVBQVc7QUFBQyxtQkFBTSxpQ0FBK0JBLENBQS9CLElBQWtDLHdDQUFzQ0EsQ0FBOUU7QUFBZ0YsV0FBNUYsQ0FBNkZDLENBQTdGLEtBQWlHRCxDQUFDLENBQUNzVixJQUFGLENBQU9rYixJQUEzRyxFQUFnSDtBQUFDLGdCQUFJM3ZCLENBQUMsR0FBQ2IsQ0FBQyxDQUFDa3hCLEtBQUYsSUFBU2x4QixDQUFDLENBQUNzVixJQUFGLENBQU9rYixJQUF0QjtBQUEyQixnQkFBRyxDQUFDM3ZCLENBQUosRUFBTSxNQUFNLElBQUlzUyxFQUFKLENBQU8sdUNBQXVDdEosTUFBdkMsQ0FBOEM1SixDQUE5QyxDQUFQLENBQU47QUFBK0QsYUFBQyxVQUFTRCxDQUFULEVBQVc7QUFBQyxrQkFBSUMsQ0FBQyxHQUFDZ0ssRUFBRSxDQUFDakssQ0FBRCxFQUFJLFVBQVNBLENBQVQsRUFBVztBQUFDLHVCQUFPLFVBQVNBLENBQVQsRUFBVztBQUFDLHlCQUFPLElBQUlnZCxFQUFFLENBQUM5YyxPQUFILENBQVc0ZSxPQUFmLENBQXdCLFVBQVM3ZSxDQUFULEVBQVdJLENBQVgsRUFBYTtBQUFDLG1DQUFhLE9BQU9xeEIsVUFBcEIsSUFBZ0NyeEIsQ0FBQyxDQUFDLElBQUk4UyxFQUFKLENBQU8sNkNBQVAsQ0FBRCxDQUFqQztBQUF5Rix3QkFBSTVTLENBQUMsR0FBQyxJQUFJbXhCLFVBQUosRUFBTjtBQUFxQm54QixxQkFBQyxDQUFDb2IsTUFBRixHQUFTLFVBQVMzYixDQUFULEVBQVc7QUFBQywwQkFBRztBQUFDQyx5QkFBQyxFQUFFTSxDQUFDLEdBQUNQLENBQUMsQ0FBQ3NoQixNQUFGLENBQVN1RixNQUFYLEVBQWtCcGxCLEtBQUssQ0FBQ2IsU0FBTixDQUFnQmtCLEtBQWhCLENBQXNCUixJQUF0QixDQUEyQixJQUFJcXdCLFVBQUosQ0FBZXB4QixDQUFmLENBQTNCLEVBQThDK0osTUFBOUMsQ0FBc0QsVUFBU3RLLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsaUNBQU9ELENBQUMsR0FBQzZILE1BQU0sQ0FBQ21nQixZQUFQLENBQW9CbGtCLEtBQXBCLENBQTBCLElBQTFCLEVBQStCLENBQUM3RCxDQUFELENBQS9CLENBQVQ7QUFBNkMseUJBQWpILEVBQW1ILEVBQW5ILENBQXBCLEVBQUQ7QUFBOEksdUJBQWxKLENBQWtKLE9BQU1ELENBQU4sRUFBUTtBQUFDSyx5QkFBQyxDQUFDTCxDQUFELENBQUQ7QUFBSzs7QUFBQSwwQkFBSU8sQ0FBSjtBQUFNLHFCQUEzTCxFQUE0TEEsQ0FBQyxDQUFDcXhCLE9BQUYsR0FBVSxVQUFTM3hCLENBQVQsRUFBVztBQUFDSSx1QkFBQyxDQUFDLElBQUk4UyxFQUFKLENBQU8scUJBQXFCdEosTUFBckIsQ0FBNEI3SixDQUFDLENBQUM0TyxJQUE5QixDQUFQLENBQUQsQ0FBRDtBQUErQyxxQkFBalEsRUFBa1FyTyxDQUFDLENBQUNzeEIsaUJBQUYsQ0FBb0I3eEIsQ0FBcEIsQ0FBbFE7QUFBeVIsbUJBQTdhLENBQVA7QUFBdWIsaUJBQW5jLENBQW9jQSxDQUFwYyxFQUF1YzdCLElBQXZjLENBQTZjLFVBQVM4QixDQUFULEVBQVc7QUFBQyx5QkFBTTtBQUFDMk8sd0JBQUksRUFBQzVPLENBQUMsQ0FBQzRPLElBQVI7QUFBYXdILHdCQUFJLEVBQUNwVyxDQUFDLENBQUNvVyxJQUFwQjtBQUF5QjBiLHVCQUFHLEVBQUM3eEI7QUFBN0IsbUJBQU47QUFBc0MsaUJBQS9mLENBQVA7QUFBeWdCLGVBQXpoQixDQUFSO0FBQW9pQixxQkFBTyxJQUFJK2MsRUFBRSxDQUFDOWMsT0FBSCxDQUFXNGUsT0FBZixDQUF3QixVQUFTOWUsQ0FBVCxFQUFXSyxDQUFYLEVBQWE7QUFBQzJjLGtCQUFFLENBQUM5YyxPQUFILENBQVc0ZSxPQUFYLENBQW1CRSxHQUFuQixDQUF1Qi9lLENBQXZCLEVBQTBCOUIsSUFBMUIsQ0FBZ0MsVUFBUzhCLENBQVQsRUFBVztBQUFDRCxtQkFBQyxDQUFDO0FBQUMreEIsNkJBQVMsRUFBQyxNQUFYO0FBQWtCemMsd0JBQUksRUFBQ3JWO0FBQXZCLG1CQUFELENBQUQ7QUFBNkIsaUJBQXpFLEVBQTRFLFVBQVNELENBQVQsRUFBVztBQUFDSyxtQkFBQyxDQUFDTCxDQUFELENBQUQ7QUFBSyxpQkFBN0Y7QUFBZ0csZUFBdEksQ0FBUDtBQUFnSixhQUFqc0IsRUFBbXNCYSxDQUFuc0IsRUFBc3NCMUMsSUFBdHNCLENBQTRzQixVQUFTNkIsQ0FBVCxFQUFXO0FBQUMsa0JBQUlDLENBQUMsR0FBQyxFQUFOOztBQUFTLG1CQUFJLElBQUlVLENBQVIsSUFBYUosQ0FBYjtBQUFlLDJCQUFTSSxDQUFULElBQVlWLENBQUMsQ0FBQzZILElBQUYsQ0FBTyxHQUFHK0IsTUFBSCxDQUFVbEosQ0FBVixFQUFZLEdBQVosRUFBaUJrSixNQUFqQixDQUF3QndCLGtCQUFrQixDQUFDOUssQ0FBQyxDQUFDSSxDQUFELENBQUYsQ0FBMUMsQ0FBUCxDQUFaO0FBQWY7O0FBQXFGVixlQUFDLENBQUM4QixNQUFGLEdBQVMsQ0FBVCxLQUFhdEIsQ0FBQyxDQUFDcVYsR0FBRixJQUFPLElBQUlqTSxNQUFKLENBQVc1SixDQUFDLENBQUN1TCxJQUFGLENBQU8sR0FBUCxDQUFYLENBQXBCLEdBQTZDL0ssQ0FBQyxDQUFDK3ZCLElBQUYsR0FBT3h3QixDQUFwRCxFQUFzREssQ0FBQyxDQUFDSSxDQUFELENBQXZEO0FBQTJELGFBQWozQixFQUFvM0IsVUFBU1QsQ0FBVCxFQUFXO0FBQUNXLGVBQUMsQ0FBQ1gsQ0FBRCxDQUFEO0FBQUssYUFBcjRCO0FBQXc0QixXQUF6bEMsTUFBOGxDSyxDQUFDLENBQUNJLENBQUQsQ0FBRDtBQUFLLFNBQXpvQyxDQUFQO0FBQW1wQyxPQUEzM0MsRUFBNjNDVCxDQUE3M0MsRUFBZzRDN0IsSUFBaDRDLENBQXM0QyxVQUFTb0MsQ0FBVCxFQUFXO0FBQUM2d0IsVUFBRSxDQUFDSCxPQUFILENBQVcxd0IsQ0FBWCxFQUFjLFVBQVNGLENBQVQsRUFBVztBQUFDTCxXQUFDLENBQUMyVixPQUFGLENBQVV0VixDQUFWLEdBQWFMLENBQUMsQ0FBQzRWLE1BQUYsQ0FBU3ZWLENBQVQsQ0FBYixFQUF5QkosQ0FBQyxDQUFDSSxDQUFELENBQTFCO0FBQThCLFNBQXhELEVBQTJELFVBQVNKLENBQVQsRUFBVztBQUFDLGNBQUlNLENBQUMsR0FBQyxVQUFTUCxDQUFULEVBQVc7QUFBQyxnQkFBRztBQUFDLHFCQUFPc0wsSUFBSSxDQUFDa0ssS0FBTCxDQUFXeFYsQ0FBQyxDQUFDb1QsT0FBRixDQUFVd0ksWUFBckIsQ0FBUDtBQUEwQyxhQUE5QyxDQUE4QyxPQUFNNWIsQ0FBTixFQUFRO0FBQUMscUJBQU07QUFBQ3lWLG9CQUFJLEVBQUMsQ0FBQyxHQUFQO0FBQVd1YyxtQkFBRyxFQUFDO0FBQWYsZUFBTjtBQUFzQztBQUFDLFdBQTFHLENBQTJHL3hCLENBQTNHLENBQU47O0FBQW9IRCxXQUFDLENBQUMwVixJQUFGLENBQU9uVixDQUFQLEdBQVVQLENBQUMsQ0FBQzRWLE1BQUYsQ0FBU3JWLENBQVQsQ0FBVixFQUFzQkYsQ0FBQyxDQUFDRSxDQUFELENBQXZCO0FBQTJCLFNBQXROO0FBQXlOLE9BQTNtRCxFQUE4bUQsVUFBU1AsQ0FBVCxFQUFXO0FBQUNLLFNBQUMsQ0FBQ0wsQ0FBRCxDQUFEO0FBQUssT0FBL25EO0FBQWtvRCxLQUF4cUQsQ0FBak07QUFBNDJEOztBQUFBLE1BQUlzeEIsRUFBRSxHQUFDLEVBQVA7QUFBVSxNQUFJVyxFQUFFLEdBQUM3eEIsTUFBTSxDQUFDb2MsTUFBUCxDQUFjO0FBQUM1TyxhQUFTLEVBQUMsSUFBWDtBQUFnQnFqQixXQUFPLEVBQUNJLEVBQXhCO0FBQTJCL2QsV0FBTyxFQUFDLG1CQUFVO0FBQUNDLFFBQUUsQ0FBQytkLEVBQUQsQ0FBRjtBQUFPO0FBQXJELEdBQWQsQ0FBUDs7QUFBNkUsV0FBU1ksRUFBVCxDQUFZbHlCLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFdBQU9zSSxFQUFFLENBQUN2SSxDQUFELEVBQUc7QUFBQzJoQixZQUFNLEVBQUNwUSxFQUFFLENBQUNJLFdBQVg7QUFBdUJhLGFBQU8sRUFBQzdILEVBQUU7QUFBakMsS0FBSCxDQUFGLEVBQTJDMkosRUFBRSxDQUFFLFlBQVU7QUFBQyxVQUFJalUsQ0FBQyxHQUFDLElBQUkybUIsRUFBRSxDQUFDL0IsR0FBUCxDQUFXamxCLENBQVgsRUFBYTtBQUFDMGlCLGFBQUssRUFBQztBQUFDeVAsc0JBQVksRUFBQ2x5QixDQUFkO0FBQWdCbXlCLHVCQUFhLEVBQUMseUJBQVU7QUFBQyxtQkFBT2hoQixFQUFQO0FBQVU7QUFBbkQsU0FBUDtBQUE0RHVRLGNBQU0sRUFBQztBQUFDMFEsaUJBQU8sRUFBQyxFQUFUO0FBQVl2RSx3QkFBYyxFQUFDLEVBQTNCO0FBQThCd0UsbUJBQVMsRUFBQyxFQUF4QztBQUEyQ0MsdUJBQWEsRUFBQyxFQUF6RDtBQUE0REMsMEJBQWdCLEVBQUM7QUFBN0U7QUFBbkUsT0FBYixDQUFOO0FBQXlLLGFBQU9ueUIsQ0FBQyxDQUFDbVMsT0FBRixHQUFVeFMsQ0FBQyxDQUFDd1MsT0FBWixFQUFvQm5TLENBQTNCO0FBQTZCLEtBQW5OLENBQXBEO0FBQTBROztBQUFBLE1BQUlveUIsRUFBRSxHQUFDLFFBQVA7QUFBQSxNQUFnQkMsRUFBRSxHQUFDLHVDQUFuQjtBQUFBLE1BQTJEQyxFQUFFLEdBQUMsZ0JBQWdCM3dCLElBQWhCLENBQXFCZ1AsRUFBRSxDQUFDbEIsRUFBeEIsS0FBNkIsVUFBVTlOLElBQVYsQ0FBZWdQLEVBQUUsQ0FBQ2xCLEVBQWxCLENBQTNGO0FBQUEsTUFBaUg4aUIsRUFBRSxHQUFDLDhCQUE4QjV3QixJQUE5QixDQUFtQ2dQLEVBQUUsQ0FBQ2xCLEVBQXRDLEtBQTJDLGNBQVksZUFBYSxPQUFPK2lCLFFBQXBCLEdBQTZCLFdBQTdCLEdBQXlDL2xCLEVBQUUsQ0FBQytsQixRQUFELENBQXZELENBQS9KOztBQUFrTyxXQUFTQyxFQUFULEdBQWE7QUFBQyxXQUFPOWhCLEVBQUUsQ0FBQ2YsRUFBSCxDQUFNbUUsR0FBTixHQUFVLHFCQUFxQnBTLElBQXJCLENBQTBCZ1AsRUFBRSxDQUFDbEIsRUFBN0IsS0FBa0MsQ0FBQ21CLEVBQTdDLEdBQWdELENBQUMsQ0FBQ0QsRUFBRSxDQUFDZixFQUFILENBQU1nRSxPQUFSLElBQWtCakQsRUFBRSxDQUFDakIsT0FBSCxDQUFXZ2pCLE1BQVgsSUFBbUIsQ0FBQyxTQUFTL3dCLElBQVQsQ0FBY2dQLEVBQUUsQ0FBQ2xCLEVBQWpCLENBQXBCLElBQTBDa0IsRUFBRSxDQUFDakIsT0FBSCxDQUFXYixPQUFYLENBQW1CRyxLQUFuQixJQUEwQixFQUFwRSxLQUF5RSxDQUFDc2pCLEVBQUQsSUFBS0EsRUFBRSxJQUFFQyxFQUFsRixDQUF6RTtBQUFnSzs7QUFBQSxNQUFJSSxFQUFFLEdBQUM7QUFBQ3BhLFNBQUssRUFBQyxlQUFTNVksQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZUUsQ0FBZixFQUFpQjtBQUFDLFVBQUd1eUIsRUFBRSxFQUFMLEVBQVE7QUFBQyxZQUFJcnlCLENBQUMsR0FBQyxJQUFOOztBQUFXLFlBQUd1USxFQUFFLENBQUNmLEVBQUgsQ0FBTW1FLEdBQVQsRUFBYTtBQUFDLGNBQUl6VCxDQUFDLEdBQUMsVUFBU1gsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0EsYUFBQyxDQUFDZ1ksS0FBRixHQUFRalksQ0FBUjtBQUFVLGdCQUFJSyxDQUFDLEdBQUM7QUFBQzJaLHVCQUFTLEVBQUMvRyxFQUFFLEVBQWI7QUFBZ0J1SCwwQkFBWSxFQUFDakosRUFBRSxDQUFDSyxXQUFoQztBQUE0QytVLG9CQUFNLEVBQUNyYixJQUFJLENBQUNDLFNBQUwsQ0FBZXRMLENBQWY7QUFBbkQsYUFBTjtBQUE0RSxtQkFBTSxHQUFHNEosTUFBSCxDQUFVMEgsRUFBRSxDQUFDTyxlQUFiLEVBQTZCLEdBQTdCLEVBQWtDakksTUFBbEMsQ0FBeUN1QixFQUFFLENBQUMvSyxDQUFELENBQTNDLENBQU47QUFBc0QsV0FBMUosQ0FBMkpMLENBQTNKLEVBQTZKSyxDQUE3SixDQUFOO0FBQUEsY0FBc0tRLENBQUMsR0FBQyxHQUFHZ0osTUFBSCxDQUFVMEgsRUFBRSxDQUFDTSxrQkFBYixFQUFpQ2hJLE1BQWpDLENBQXdDd0Isa0JBQWtCLENBQUMxSyxDQUFELENBQTFELEVBQThELE9BQTlELEVBQXVFa0osTUFBdkUsQ0FBOEV3QixrQkFBa0IsQ0FBQ3BMLENBQUQsQ0FBaEcsQ0FBeEs7O0FBQTZRTSxXQUFDLEdBQUNxUSxRQUFRLENBQUN5RCxJQUFULEdBQWN4VCxDQUFmLEdBQWlCSixDQUFDLEdBQUMrVCxFQUFFLENBQUMzVCxDQUFELEVBQUc0eEIsRUFBSCxFQUFNQyxFQUFOLENBQXRCO0FBQWdDLFNBQTNULE1BQWdVLElBQUcxaEIsRUFBRSxDQUFDZixFQUFILENBQU1nRSxPQUFULEVBQWlCO0FBQUMsY0FBSWxULENBQUMsR0FBQyxVQUFTZixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsbUJBQU0sQ0FBQyxnQkFBRCxFQUFrQiw4REFBbEIsRUFBaUYsd0JBQWpGLEVBQTBHLCtCQUErQndKLE1BQS9CLENBQXNDb0osRUFBRSxFQUF4QyxDQUExRyxFQUFzSixvQ0FBb0NwSixNQUFwQyxDQUEyQzBILEVBQUUsQ0FBQ1Esb0JBQTlDLENBQXRKLEVBQTBOLDhCQUE4QmxJLE1BQTlCLENBQXFDN0osQ0FBckMsQ0FBMU4sRUFBa1EsaUNBQWlDNkosTUFBakMsQ0FBd0N1SCxFQUF4QyxDQUFsUSxFQUE4UyxvQ0FBb0N2SCxNQUFwQyxDQUEyQ3dCLGtCQUFrQixDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxMLENBQWYsQ0FBRCxDQUE3RCxDQUE5UyxFQUFnWSwwQkFBMEJ3SixNQUExQixDQUFpQ3dCLGtCQUFrQixDQUFDcEwsQ0FBRCxDQUFuRCxDQUFoWSxFQUF3YixNQUF4YixFQUFnY3VMLElBQWhjLENBQXFjLEdBQXJjLENBQU47QUFBZ2QsV0FBaGUsQ0FBaWV4TCxDQUFqZSxFQUFtZUMsQ0FBbmUsRUFBcWVJLENBQXJlLENBQU47O0FBQThlRSxXQUFDLEdBQUNxUSxRQUFRLENBQUN5RCxJQUFULEdBQWN0VCxDQUFmLEdBQWlCaVEsRUFBRSxDQUFDakIsT0FBSCxDQUFXYixPQUFYLENBQW1CRyxLQUFuQixHQUF5QixFQUF6QixLQUE4QixDQUFDc2pCLEVBQUQsSUFBS0EsRUFBRSxJQUFFQyxFQUF2QyxJQUEyQ255QixDQUFDLEdBQUMrVCxFQUFFLENBQUN6VCxDQUFELEVBQUcweEIsRUFBSCxFQUFNQyxFQUFOLENBQS9DLEdBQXlELENBQUNqeUIsQ0FBQyxHQUFDK1QsRUFBRSxDQUFDLEVBQUQsRUFBSWllLEVBQUosRUFBT0MsRUFBUCxDQUFMLE1BQW1CanlCLENBQUMsQ0FBQ3dLLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLFlBQVU7QUFBQ21NLHNCQUFVLENBQUUsWUFBVTtBQUFDM1csZUFBQyxJQUFFQSxDQUFDLENBQUNtUSxRQUFMLEtBQWdCblEsQ0FBQyxDQUFDbVEsUUFBRixDQUFXeUQsSUFBWCxHQUFnQnBVLENBQWhDO0FBQW1DLGFBQWhELEVBQWtELEVBQWxELENBQVY7QUFBZ0UsV0FBeEcsR0FBMkdRLENBQUMsQ0FBQ21RLFFBQUYsQ0FBV3lELElBQVgsR0FBZ0J0VCxDQUE5SSxDQUEzRTtBQUE0Tjs7QUFBQSxlQUFPTixDQUFQO0FBQVM7QUFBQyxLQUFubEM7QUFBb2xDd3lCLGFBQVMsRUFBQ0g7QUFBOWxDLEdBQVA7QUFBQSxNQUF5bUNJLEVBQUUsR0FBQyxJQUFJdGMsRUFBSixDQUFPLEdBQVAsRUFBVyxHQUFYLENBQTVtQzs7QUFBNG5DLFdBQVN1YyxFQUFULENBQVluekIsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDMEssRUFBRSxLQUFHQSxFQUFFLEVBQWI7QUFBZ0IsUUFBR3FvQixFQUFFLENBQUNDLFNBQUgsTUFBZ0JqekIsQ0FBQyxDQUFDd1gsV0FBckIsRUFBaUM0YixFQUFFLENBQUNwekIsQ0FBRCxFQUFHQyxDQUFILENBQUYsQ0FBakMsS0FBOEMsSUFBR0QsQ0FBQyxDQUFDNFIsV0FBTCxFQUFpQmhCLFFBQVEsQ0FBQ3lELElBQVQsR0FBY2dmLEVBQUUsQ0FBQ3J6QixDQUFELENBQWhCLENBQWpCLEtBQTBDLElBQUdnUixFQUFFLENBQUNmLEVBQUgsQ0FBTWdFLE9BQU4sSUFBZWhELEVBQWYsSUFBbUJELEVBQUUsQ0FBQ2pCLE9BQUgsQ0FBV2dqQixNQUE5QixJQUFzQy9oQixFQUFFLENBQUNqQixPQUFILENBQVdiLE9BQVgsQ0FBbUJHLEtBQW5CLElBQTBCLEVBQW5FLEVBQXNFO0FBQUMrakIsUUFBRSxDQUFDcHpCLENBQUQsRUFBR0MsQ0FBSCxFQUFLNlosRUFBRSxDQUFDdlIsRUFBRSxDQUFDLEVBQUQsRUFBSXdSLEVBQUUsQ0FBQy9aLENBQUQsQ0FBTixFQUFVa2EsRUFBRSxDQUFDbGEsQ0FBRCxDQUFaLEVBQWdCO0FBQUN3YSxvQkFBWSxFQUFDakosRUFBRSxDQUFDUSxvQkFBakI7QUFBc0MwSSxxQkFBYSxFQUFDLE1BQXBEO0FBQTJEeEMsYUFBSyxFQUFDaFksQ0FBakU7QUFBbUUyYSxVQUFFLEVBQUN4SixFQUF0RTtBQUF5RW1FLGNBQU0sRUFBQzVFO0FBQWhGLE9BQWhCLENBQUgsQ0FBUCxDQUFGO0FBQW1ILEtBQTFMLE1BQThMO0FBQUNLLFFBQUUsQ0FBQ2pCLE9BQUgsQ0FBV2tHLElBQVgsSUFBaUIxVCxRQUFRLENBQUN5TyxFQUFFLENBQUNqQixPQUFILENBQVdiLE9BQVgsQ0FBbUJHLEtBQXBCLENBQVIsSUFBb0MsQ0FBckQsSUFBd0QsVUFBU3JQLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxTQUFTQSxDQUFULENBQVdJLENBQVgsRUFBYTtBQUFDLGNBQUlFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDa1YsTUFBUjtBQUFBLGNBQWU5VSxDQUFDLEdBQUNKLENBQUMsQ0FBQ2lWLElBQW5COztBQUF3QixjQUFHLGdCQUFnQnRULElBQWhCLENBQXFCekIsQ0FBckIsS0FBeUJFLENBQXpCLElBQTRCLFlBQVUsT0FBT0EsQ0FBaEQsRUFBa0Q7QUFBQyxnQkFBSUUsQ0FBQyxHQUFDRixDQUFDLENBQUMwTyxLQUFGLENBQVEsR0FBUixDQUFOOztBQUFtQixnQkFBRyxtQkFBaUJ4TyxDQUFDLENBQUMsQ0FBRCxDQUFyQixFQUF5QjtBQUFDLGtCQUFJRSxDQUFDLEdBQUN5SyxJQUFJLENBQUNrSyxLQUFMLENBQVd1UixrQkFBa0IsQ0FBQ3BtQixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTdCLENBQU47QUFBMkMyeUIsZ0JBQUUsQ0FBQ3R6QixDQUFELEVBQUdhLENBQUgsQ0FBRixFQUFRcUssRUFBRSxDQUFDaUIsTUFBRCxFQUFRLFNBQVIsRUFBa0JsTSxDQUFsQixDQUFWO0FBQStCO0FBQUM7QUFBQyxTQUF4Tjs7QUFBeU4rSyxVQUFFLENBQUNtQixNQUFELEVBQVEsU0FBUixFQUFrQmxNLENBQWxCLENBQUYsRUFBdUJzekIsRUFBRSxDQUFDenJCLElBQUgsQ0FBUyxZQUFVO0FBQUNvRCxZQUFFLENBQUNpQixNQUFELEVBQVEsU0FBUixFQUFrQmxNLENBQWxCLENBQUY7QUFBdUIsU0FBM0MsQ0FBdkI7QUFBcUUsT0FBMVMsQ0FBMlNELENBQTNTLENBQXhELEVBQXNXd1osRUFBRSxDQUFDZ2EsRUFBRSxDQUFDeHpCLENBQUQsRUFBR0MsQ0FBSCxDQUFILENBQXhXO0FBQWtYO0FBQUFzVyxNQUFFLENBQUNJLFFBQUgsQ0FBWSxhQUFaO0FBQTJCOztBQUFBLE1BQUk4YyxFQUFFLEdBQUMsSUFBUDtBQUFBLE1BQVlDLEVBQUUsR0FBQyxTQUFIQSxFQUFHLEdBQVU7QUFBQ0QsTUFBRSxJQUFFQSxFQUFFLENBQUNoZixLQUFQLElBQWNnZixFQUFFLENBQUNoZixLQUFILEVBQWQsRUFBeUJnZixFQUFFLEdBQUMsSUFBNUI7QUFBaUMsR0FBM0Q7QUFBQSxNQUE0REUsRUFBRSxHQUFDLElBQS9EO0FBQUEsTUFBb0VDLEVBQUUsR0FBQyxJQUF2RTs7QUFBNEUsV0FBU1IsRUFBVCxDQUFZcHpCLENBQVosRUFBY0MsQ0FBZCxFQUFnQkksQ0FBaEIsRUFBa0I7QUFBQ3N6QixNQUFFLEtBQUdBLEVBQUUsR0FBQ3pCLEVBQUUsQ0FBQyxFQUFELEVBQUssVUFBU2p5QixDQUFULEVBQVc7QUFBQyxVQUFHLFlBQVVBLENBQUMsQ0FBQ3ViLE1BQVosSUFBb0J2YixDQUFDLENBQUNvYyxVQUF0QixJQUFrQyxVQUFRcGMsQ0FBQyxDQUFDb2MsVUFBNUMsS0FBeUQ2VyxFQUFFLENBQUNoYyxJQUFILElBQVUsVUFBUWpYLENBQUMsQ0FBQ29jLFVBQVYsS0FBdUJ6TCxRQUFRLENBQUN5RCxJQUFULEdBQWMsR0FBR3hLLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ0UsVUFBYixFQUF3QixnQkFBeEIsQ0FBckMsQ0FBVixFQUEwRjZoQixFQUFFLENBQUN0ekIsQ0FBRCxFQUFHO0FBQUMrYSxhQUFLLEVBQUM5YSxDQUFDLENBQUM4YSxLQUFUO0FBQWV1Qix5QkFBaUIsRUFBQ3JjLENBQUMsQ0FBQ3FjO0FBQW5DLE9BQUgsQ0FBckosR0FBZ05yYyxDQUFDLENBQUN1YixNQUFyTjtBQUE0TixZQUFHLFNBQU92YixDQUFDLENBQUN1YixNQUFaLEVBQW1CO0FBQUMsY0FBRzBYLEVBQUUsQ0FBQ2hjLElBQUgsSUFBVTBjLEVBQUUsS0FBRzN6QixDQUFDLENBQUN3VixJQUFwQixFQUF5QjtBQUFPbWUsWUFBRSxHQUFDM3pCLENBQUMsQ0FBQ3dWLElBQUwsRUFBVWtlLEVBQUUsQ0FBQzdGLGNBQUgsQ0FBa0I3dEIsQ0FBQyxDQUFDd1YsSUFBcEIsRUFBeUJ4QyxFQUFFLEVBQTNCLEVBQThCakMsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLElBQVcsQ0FBQy9ULENBQVosR0FBY2tSLEVBQUUsQ0FBQ0ssV0FBakIsR0FBNkJMLEVBQUUsQ0FBQ1Esb0JBQTlELEVBQW1GL1IsQ0FBQyxDQUFDNFgsWUFBckYsQ0FBVixFQUE2RzhiLEVBQUUsRUFBL0c7QUFBa0gsU0FBdEssTUFBMksxaUIsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLElBQVcsa0JBQWdCcWYsRUFBRSxDQUFDN2lCLFFBQUgsQ0FBWXlELElBQXZDLElBQTZDcWYsRUFBRSxFQUEvQztBQUF2WSxhQUE4YkosRUFBRSxDQUFDdHpCLENBQUQsRUFBR0MsQ0FBSCxDQUFGO0FBQVEsS0FBdmQsQ0FBTCxFQUErZHN6QixFQUFFLENBQUN6ckIsSUFBSCxDQUFTLFlBQVU7QUFBQzZyQixRQUFFLENBQUN2UCxPQUFILElBQWF1UCxFQUFFLEdBQUMsSUFBaEI7QUFBcUIsS0FBekMsQ0FBbGUsQ0FBRjtBQUFpaEIsUUFBSXB6QixDQUFDLEdBQUMsRUFBTjtBQUFTLFFBQUdGLENBQUgsRUFBS0wsQ0FBQyxDQUFDNFIsV0FBRixHQUFjaEIsUUFBUSxDQUFDeUQsSUFBVCxHQUFjaFUsQ0FBNUIsR0FBOEJtWixFQUFFLENBQUNuWixDQUFELENBQWhDLENBQUwsS0FBNkM7QUFBQ0UsT0FBQyxHQUFDUCxDQUFDLENBQUM0UixXQUFGLEdBQWN5aEIsRUFBRSxDQUFDcnpCLENBQUQsQ0FBaEIsR0FBb0J3ekIsRUFBRSxDQUFDeHpCLENBQUQsRUFBR0MsQ0FBSCxFQUFLK1EsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLEdBQVU3QyxFQUFFLENBQUNLLFdBQWIsR0FBeUJMLEVBQUUsQ0FBQ1Esb0JBQWpDLENBQXhCO0FBQStFLFVBQUl0UixDQUFDLEdBQUM4SCxFQUFFLENBQUMsRUFBRCxFQUFJd1IsRUFBRSxDQUFDL1osQ0FBRCxDQUFOLEVBQVVrYSxFQUFFLENBQUNsYSxDQUFELENBQVosQ0FBUjtBQUF5Qm9YLGdCQUFVLENBQUUsWUFBVTtBQUFDcWMsVUFBRSxHQUFDVCxFQUFFLENBQUNwYSxLQUFILENBQVMzWSxDQUFULEVBQVdNLENBQVgsRUFBYUUsQ0FBYixFQUFlVCxDQUFDLENBQUM0UixXQUFqQixDQUFIO0FBQWlDLE9BQTlDLEVBQWdELEdBQWhELENBQVY7QUFBK0Q7QUFBQXNoQixNQUFFLENBQUMvVyxLQUFILENBQVUsWUFBVTtBQUFDbGMsT0FBQyxJQUFFMHpCLEVBQUUsQ0FBQ3RCLE9BQUgsQ0FBV3B5QixDQUFYLEVBQWFnVCxFQUFFLEVBQWYsRUFBa0I3QixFQUFsQixDQUFIO0FBQXlCLEtBQTlDLEVBQWlELFlBQVU7QUFBQ2tpQixRQUFFLENBQUN0ekIsQ0FBRCxFQUFHO0FBQUMrYSxhQUFLLEVBQUMsU0FBUDtBQUFpQmhiLG1CQUFXLEVBQUMsOENBQTdCO0FBQTRFdWMseUJBQWlCLEVBQUM7QUFBOUYsT0FBSCxDQUFGLEVBQW9KdGMsQ0FBQyxDQUFDNFIsV0FBRixHQUFjaEIsUUFBUSxDQUFDeUQsSUFBVCxHQUFjOVQsQ0FBNUIsR0FBOEJpWixFQUFFLENBQUNqWixDQUFELENBQXBMO0FBQXdMLEtBQXBQO0FBQXVQOztBQUFBLE1BQUlzekIsRUFBRSxHQUFDLElBQVA7QUFBQSxNQUFZQyxFQUFFLEdBQUMsRUFBZjs7QUFBa0IsV0FBU04sRUFBVCxDQUFZeHpCLENBQVosRUFBY0MsQ0FBZCxFQUFnQkksQ0FBaEIsRUFBa0I7QUFBQ3d6QixNQUFFLEtBQUdBLEVBQUUsR0FBQzNCLEVBQUUsQ0FBQyxFQUFELEVBQUssVUFBU2x5QixDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUMsVUFBU0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxZQUFHLENBQUNBLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDK3pCLFVBQUgsQ0FBTCxFQUFvQixNQUFNLElBQUk1Z0IsRUFBSixDQUFPLHVCQUFQLENBQU47QUFBc0MsWUFBSTlTLENBQUMsR0FBQ0osQ0FBQyxDQUFDRCxDQUFDLENBQUMrekIsVUFBSCxDQUFQO0FBQXNCLGVBQU8sT0FBTzl6QixDQUFDLENBQUNELENBQUMsQ0FBQyt6QixVQUFILENBQVIsRUFBdUIsT0FBTy96QixDQUFDLENBQUMrekIsVUFBaEMsRUFBMkMxekIsQ0FBbEQ7QUFBb0QsT0FBbEosQ0FBbUpMLENBQW5KLEVBQXFKOHpCLEVBQXJKLENBQU47O0FBQStKUixRQUFFLENBQUNyekIsQ0FBRCxFQUFHRCxDQUFILENBQUY7QUFBUSxLQUF4TCxDQUFMLEVBQWdNdXpCLEVBQUUsQ0FBQ3pyQixJQUFILENBQVMsWUFBVTtBQUFDK3JCLFFBQUUsQ0FBQ3pQLE9BQUgsSUFBYXlQLEVBQUUsR0FBQyxJQUFoQjtBQUFxQixLQUF6QyxDQUFuTSxDQUFGLEVBQWtQQyxFQUFFLENBQUM3ekIsQ0FBRCxDQUFGLEdBQU1ELENBQXhQO0FBQTBQLFFBQUlPLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNFIsV0FBRixHQUFjNVIsQ0FBQyxDQUFDNFIsV0FBaEIsR0FBNEJ2UixDQUFDLElBQUUsU0FBckM7QUFBK0MsV0FBT3laLEVBQUUsQ0FBQ3ZSLEVBQUUsQ0FBQyxFQUFELEVBQUl3UixFQUFFLENBQUMvWixDQUFELENBQU4sRUFBVWthLEVBQUUsQ0FBQ2xhLENBQUQsQ0FBWixFQUFnQjtBQUFDd2Esa0JBQVksRUFBQ2phLENBQWQ7QUFBZ0JrYSxtQkFBYSxFQUFDLE1BQTlCO0FBQXFDeEMsV0FBSyxFQUFDaFksQ0FBM0M7QUFBNkMrekIsV0FBSyxFQUFDLGlCQUFpQm5xQixNQUFqQixDQUF3QmdxQixFQUFFLENBQUNyaEIsT0FBM0IsRUFBbUMsV0FBbkMsQ0FBbkQ7QUFBbUdvSSxRQUFFLEVBQUN4SixFQUF0RztBQUF5R21FLFlBQU0sRUFBQzVFO0FBQWhILEtBQWhCLENBQUgsQ0FBVDtBQUFrSjs7QUFBQSxXQUFTMGlCLEVBQVQsQ0FBWXJ6QixDQUFaLEVBQWM7QUFBQyxXQUFPOFosRUFBRSxDQUFDdlIsRUFBRSxDQUFDLEVBQUQsRUFBSXdSLEVBQUUsQ0FBQy9aLENBQUQsQ0FBTixFQUFVa2EsRUFBRSxDQUFDbGEsQ0FBRCxDQUFaLEVBQWdCO0FBQUN3YSxrQkFBWSxFQUFDeGEsQ0FBQyxDQUFDNFIsV0FBaEI7QUFBNEI2SSxtQkFBYSxFQUFDLE1BQTFDO0FBQWlERyxRQUFFLEVBQUN4SixFQUFwRDtBQUF1RG1FLFlBQU0sRUFBQzVFO0FBQTlELEtBQWhCLENBQUgsQ0FBVDtBQUFnRzs7QUFBQSxXQUFTMmlCLEVBQVQsQ0FBWXR6QixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQ0EsS0FBQyxDQUFDOGEsS0FBRixHQUFRLG9CQUFrQjlhLENBQUMsQ0FBQzhhLEtBQXBCLElBQTJCd1MsRUFBRSxDQUFDLElBQUQsQ0FBckMsSUFBNkNBLEVBQUUsQ0FBQ3R0QixDQUFDLENBQUNnMEIsWUFBSCxFQUFnQmowQixDQUFDLENBQUN5WCxrQkFBbEIsQ0FBRixFQUF3Q2xCLEVBQUUsQ0FBQ0ksUUFBSCxDQUFZLE9BQVosQ0FBckYsR0FBMkdtRSxFQUFFLENBQUM5YSxDQUFELEVBQUdDLENBQUgsQ0FBN0c7QUFBbUg7O0FBQUEsTUFBSWkwQixFQUFFLEdBQUMsSUFBUDtBQUFZLE1BQUlYLEVBQUUsR0FBQyxFQUFQO0FBQVUsTUFBSVksRUFBRSxHQUFDL3pCLE1BQU0sQ0FBQ29jLE1BQVAsQ0FBYztBQUFDNU8sYUFBUyxFQUFDLElBQVg7QUFBZ0I2SyxxQkFBaUIsRUFBQywyQkFBU3pZLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQzRLLEVBQUUsQ0FBQyxDQUFDN0ssQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHd1ksRUFBRSxDQUFDQyxpQkFBTixFQUF3Qix3QkFBeEIsQ0FBTCxFQUF3REMsU0FBekQsQ0FBUjtBQUE0RSxVQUFHLENBQUN6WSxDQUFKLEVBQU0sTUFBTSxJQUFJa1QsRUFBSixDQUFPLHFFQUFQLENBQU47QUFBb0YsVUFBSTlTLENBQUMsR0FBQyxhQUFXTCxDQUFDLENBQUNWLElBQWIsR0FBa0IsSUFBbEIsR0FBdUIsWUFBVVUsQ0FBQyxDQUFDVixJQUFaLEdBQWlCLElBQWpCLEdBQXNCLElBQW5EO0FBQUEsVUFBd0RpQixDQUFDLEdBQUMsR0FBR3NKLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ0UsVUFBYixFQUF3Qix1QkFBeEIsRUFBaUQ1SCxNQUFqRCxDQUF3RDdKLENBQUMsQ0FBQzJZLElBQTFELEVBQStELEdBQS9ELEVBQW9FOU8sTUFBcEUsQ0FBMkU3SixDQUFDLENBQUMyWSxJQUE3RSxFQUFrRixHQUFsRixFQUF1RjlPLE1BQXZGLENBQThGeEosQ0FBOUYsRUFBZ0csU0FBaEcsQ0FBMUQ7QUFBQSxVQUFxS0ksQ0FBQyxHQUFDLEdBQUdvSixNQUFILENBQVV0SixDQUFWLEVBQVksTUFBWixDQUF2SztBQUFBLFVBQTJMSSxDQUFDLEdBQUMsR0FBR2tKLE1BQUgsQ0FBVXRKLENBQVYsRUFBWSxZQUFaLENBQTdMO0FBQXVOTixPQUFDLENBQUMybEIsU0FBRixHQUFZLDJDQUEyQy9iLE1BQTNDLENBQWtEcEosQ0FBbEQsRUFBb0QsOEJBQXBELEVBQW9Gb0osTUFBcEYsQ0FBMkZsSixDQUEzRixFQUE2Riw4QkFBN0YsRUFBNkhrSixNQUE3SCxDQUFvSXBKLENBQXBJLEVBQXNJLHVDQUF0SSxDQUFaOztBQUEyTCxVQUFJSSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxHQUFVO0FBQUNzeUIsVUFBRSxDQUFDbnpCLENBQUQsQ0FBRjtBQUFNLE9BQXZCOztBQUF3QmdMLFFBQUUsQ0FBQy9LLENBQUQsRUFBRyxPQUFILEVBQVdZLENBQVgsQ0FBRixFQUFnQjB5QixFQUFFLENBQUN6ckIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFVBQUUsQ0FBQ2pMLENBQUQsRUFBRyxPQUFILEVBQVdZLENBQVgsQ0FBRjtBQUFnQixPQUFwQyxDQUFoQjtBQUF1RCxLQUFyckI7QUFBc3JCK1gsU0FBSyxFQUFDLGVBQVM1WSxDQUFULEVBQVc7QUFBQ216QixRQUFFLENBQUNuekIsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHd1ksRUFBRSxDQUFDSSxLQUFOLEVBQVksWUFBWixDQUFMLENBQUY7QUFBa0MsS0FBMXVCO0FBQTJ1QndiLGFBQVMsRUFBQyxtQkFBU3AwQixDQUFULEVBQVc7QUFBQ0EsT0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHd1ksRUFBRSxDQUFDSSxLQUFOLEVBQVksZ0JBQVosQ0FBSjtBQUFrQyxVQUFJM1ksQ0FBQyxHQUFDMEssRUFBRSxLQUFHQSxFQUFFLEVBQWI7QUFBQSxVQUFnQnRLLENBQUMsR0FBQyxlQUFsQjtBQUFrQ0wsT0FBQyxDQUFDNFIsV0FBRixHQUFjaEIsUUFBUSxDQUFDeUQsSUFBVCxHQUFjLEdBQUd4SyxNQUFILENBQVV3cEIsRUFBRSxDQUFDcnpCLENBQUQsQ0FBWixFQUFpQjZKLE1BQWpCLENBQXdCeEosQ0FBeEIsQ0FBNUIsR0FBdURtWixFQUFFLENBQUMsR0FBRzNQLE1BQUgsQ0FBVTJwQixFQUFFLENBQUN4ekIsQ0FBRCxFQUFHQyxDQUFILENBQVosRUFBbUI0SixNQUFuQixDQUEwQnhKLENBQTFCLENBQUQsQ0FBekQ7QUFBd0YsS0FBNzVCO0FBQTg1QnlZLGFBQVMsRUFBQyxtQkFBUzlZLENBQVQsRUFBVztBQUFDLFVBQUdBLENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR3dZLEVBQUUsQ0FBQ00sU0FBTixFQUFnQixnQkFBaEIsQ0FBSixFQUFzQ2lFLEVBQUUsTUFBSS9MLEVBQUUsQ0FBQ2YsRUFBSCxDQUFNZ0UsT0FBTixJQUFlaEQsRUFBOUQsRUFBaUU7QUFBQyxZQUFJaFIsQ0FBQyxHQUFDMEssRUFBRSxLQUFHQSxFQUFFLEVBQWI7QUFBZ0J5b0IsVUFBRSxDQUFDcHpCLENBQUQsRUFBR0MsQ0FBSCxFQUFLNlosRUFBRSxDQUFDdlIsRUFBRSxDQUFDLEVBQUQsRUFBSXdSLEVBQUUsQ0FBQy9aLENBQUQsQ0FBTixFQUFVO0FBQUN3YSxzQkFBWSxFQUFDakosRUFBRSxDQUFDUSxvQkFBakI7QUFBc0MwSSx1QkFBYSxFQUFDLE1BQXBEO0FBQTJEeEMsZUFBSyxFQUFDaFksQ0FBakU7QUFBbUUyYSxZQUFFLEVBQUN4SixFQUF0RTtBQUF5RW1FLGdCQUFNLEVBQUM1RSxFQUFoRjtBQUFtRnlKLGdCQUFNLEVBQUM7QUFBMUYsU0FBVixDQUFILENBQVAsQ0FBRjtBQUEySCxPQUE3TSxNQUFrTlUsRUFBRSxDQUFDOWEsQ0FBRCxFQUFHO0FBQUMrYSxhQUFLLEVBQUMsWUFBUDtBQUFvQnVCLHlCQUFpQixFQUFDLGtFQUF0QztBQUF5R0Qsa0JBQVUsRUFBQyxLQUFwSDtBQUEwSGIsY0FBTSxFQUFDO0FBQWpJLE9BQUgsQ0FBRjs7QUFBZ0pqRixRQUFFLENBQUNJLFFBQUgsQ0FBWSxhQUFaO0FBQTJCLEtBQWp6QztBQUFrekMwZCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFJcjBCLENBQUMsR0FBQzZFLFNBQVMsQ0FBQzlDLE1BQVYsR0FBaUIsQ0FBakIsSUFBb0IsS0FBSyxDQUFMLEtBQVM4QyxTQUFTLENBQUMsQ0FBRCxDQUF0QyxHQUEwQ0EsU0FBUyxDQUFDLENBQUQsQ0FBbkQsR0FBdUQ2RixFQUE3RDtBQUFnRThJLFFBQUUsQ0FBQ3hULENBQUQsRUFBRzZDLENBQUgsRUFBSyxhQUFMLENBQUYsRUFBc0J3dUIsRUFBRSxDQUFDO0FBQUN2YixXQUFHLEVBQUMsaUJBQUw7QUFBdUJGLGNBQU0sRUFBQyxrQkFBVTtBQUFDMlgsWUFBRSxDQUFDLElBQUQsQ0FBRixFQUFTaFgsRUFBRSxDQUFDSSxRQUFILENBQVksUUFBWixDQUFULEVBQStCM1csQ0FBQyxDQUFDLENBQUMsQ0FBRixDQUFoQztBQUFxQztBQUE5RSxPQUFELENBQXhCO0FBQTBHLEtBQTkrQztBQUErK0NtWixvQkFBZ0IsRUFBQywwQkFBU25aLENBQVQsRUFBVztBQUFDQSxPQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUd3WSxFQUFFLENBQUNXLGdCQUFOLEVBQXVCLHVCQUF2QixDQUFKLEVBQW9EK2EsRUFBRSxLQUFHQSxFQUFFLEdBQUNoQyxFQUFFLENBQUMsRUFBRCxFQUFLLFVBQVNqeUIsQ0FBVCxFQUFXO0FBQUNxekIsVUFBRSxDQUFDdHpCLENBQUQsRUFBR0MsQ0FBSCxDQUFGO0FBQVEsT0FBekIsQ0FBTCxFQUFpQ3N6QixFQUFFLENBQUN6ckIsSUFBSCxDQUFTLFlBQVU7QUFBQ29zQixVQUFFLENBQUM5UCxPQUFILElBQWE4UCxFQUFFLEdBQUMsSUFBaEI7QUFBcUIsT0FBekMsQ0FBcEMsQ0FBdEQsRUFBdUlBLEVBQUUsQ0FBQ3BHLGNBQUgsQ0FBa0I5dEIsQ0FBQyxDQUFDeVYsSUFBcEIsRUFBeUJ4QyxFQUFFLEVBQTNCLEVBQThCalQsQ0FBQyxDQUFDNFIsV0FBaEMsQ0FBdkk7QUFBb0wsS0FBaHNEO0FBQWlzRDBCLFdBQU8sRUFBQyxtQkFBVTtBQUFDQyxRQUFFLENBQUNnZ0IsRUFBRCxDQUFGO0FBQU87QUFBM3RELEdBQWQsQ0FBUDs7QUFBbXZELFdBQVNlLEVBQVQsQ0FBWXQwQixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQ3MwQixNQUFFOztBQUFHLFFBQUlsMEIsQ0FBQyxHQUFDMFQsRUFBRSxFQUFSO0FBQUEsUUFBV3hULENBQUMsR0FBQ2lNLEVBQUUsQ0FBQztBQUFDZ29CLGFBQU8sRUFBQ3ZoQixFQUFFLEVBQVg7QUFBY2doQixrQkFBWSxFQUFDNUcsRUFBRSxFQUE3QjtBQUFnQ3pTLFFBQUUsRUFBQ3hKLEVBQW5DO0FBQXNDcWpCLGNBQVEsRUFBQ3AwQixDQUEvQztBQUFpRHEwQixpQkFBVyxFQUFDMTBCLENBQUMsQ0FBQ3NZLGlCQUEvRDtBQUFpRnFjLHdCQUFrQixFQUFDMzBCLENBQUMsQ0FBQ3VZO0FBQXRHLEtBQUQsRUFBeUh2WSxDQUFDLENBQUN1WixTQUFGLElBQWE7QUFBQ21XLGdCQUFVLEVBQUMxdkIsQ0FBQyxDQUFDdVo7QUFBZCxLQUF0SSxDQUFmO0FBQUEsUUFBK0s5WSxDQUFDLEdBQUM4USxFQUFFLENBQUNjLFVBQUgsR0FBY3BTLENBQS9MOztBQUFpTUQsS0FBQyxDQUFDcVksU0FBRixJQUFhOVgsQ0FBQyxDQUFDcTBCLFVBQUYsR0FBYTUwQixDQUFDLENBQUNxWSxTQUFmLEVBQXlCbEMsRUFBRSxDQUFDNVYsQ0FBRCxFQUFHRSxDQUFILENBQXhDLEtBQWdEcVUsRUFBRSxDQUFDelUsQ0FBRCxFQUFHLEdBQUd3SixNQUFILENBQVUwSCxFQUFFLENBQUNjLFVBQWIsRUFBd0Isa0JBQXhCLEVBQTRDeEksTUFBNUMsQ0FBbUR4SixDQUFuRCxDQUFILEVBQXlEdzBCLEVBQXpELENBQUYsRUFBK0R4ZixFQUFFLENBQUNyVixDQUFELEVBQUd1UixFQUFFLENBQUNjLFVBQU4sRUFBaUJ3aUIsRUFBakIsQ0FBakUsRUFBc0YsVUFBUzcwQixDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUMsU0FBU0EsQ0FBVCxDQUFXSSxDQUFYLEVBQWE7QUFBQyxZQUFJRSxDQUFDLEdBQUNGLENBQUMsQ0FBQ2lWLElBQVI7QUFBQSxZQUFhN1UsQ0FBQyxHQUFDSixDQUFDLENBQUNrVixNQUFqQjtBQUF3QjlVLFNBQUMsS0FBRzhRLEVBQUUsQ0FBQ2MsVUFBUCxJQUFtQjVSLENBQUMsS0FBRzhRLEVBQUUsQ0FBQ0MsYUFBMUIsSUFBeUMsYUFBV2pSLENBQXBELEtBQXdEUCxDQUFDLENBQUN5VSxLQUFGLElBQVV2SixFQUFFLENBQUNpQixNQUFELEVBQVEsU0FBUixFQUFrQmxNLENBQWxCLENBQXBFO0FBQTBGLE9BQXRJOztBQUF1SStLLFFBQUUsQ0FBQ21CLE1BQUQsRUFBUSxTQUFSLEVBQWtCbE0sQ0FBbEIsQ0FBRjtBQUF1QixLQUExSyxDQUEyS0QsQ0FBM0ssQ0FBdEYsRUFBb1E2VixFQUFFLENBQUN0VixDQUFELEVBQUc7QUFBQ3VWLFNBQUcsRUFBQ3JWLENBQUw7QUFBT3NWLGVBQVMsRUFBQyxrQkFBakI7QUFBb0NDLG1CQUFhLEVBQUM7QUFBbEQsS0FBSCxDQUF0VDtBQUFzYjs7QUFBQSxNQUFJNmUsRUFBRSxHQUFDLEVBQVA7O0FBQVUsV0FBU04sRUFBVCxHQUFhO0FBQUNoaEIsTUFBRSxDQUFDc2hCLEVBQUQsQ0FBRjtBQUFPOztBQUFBLE1BQUlDLEVBQUUsR0FBQ3poQixFQUFFLENBQUMsQ0FBQ2tKLEVBQUQsRUFBSTRYLEVBQUosRUFBT3ZHLEVBQVAsRUFBVXh0QixNQUFNLENBQUNvYyxNQUFQLENBQWM7QUFBQzVPLGFBQVMsRUFBQyxJQUFYO0FBQWdCbW5CLGlCQUFhLEVBQUMsdUJBQVMvMEIsQ0FBVCxFQUFXO0FBQUN3VCxRQUFFLENBQUN4VCxDQUFELEVBQUc2QyxDQUFILEVBQUssb0JBQUwsQ0FBRixFQUE2QndxQixFQUFFLEtBQUdnRSxFQUFFLENBQUM7QUFBQ3ZiLFdBQUcsRUFBQyxhQUFMO0FBQW1CSCxlQUFPLEVBQUMsaUJBQVMxVixDQUFULEVBQVc7QUFBQ0QsV0FBQyxDQUFDO0FBQUN3YixrQkFBTSxFQUFDLFdBQVI7QUFBb0J3WixnQkFBSSxFQUFDLzBCO0FBQXpCLFdBQUQsQ0FBRDtBQUErQixTQUF0RTtBQUF1RXlWLFlBQUksRUFBQyxnQkFBVTtBQUFDMVYsV0FBQyxDQUFDO0FBQUN3YixrQkFBTSxFQUFDO0FBQVIsV0FBRCxDQUFEO0FBQTRCO0FBQW5ILE9BQUQsQ0FBTCxHQUE0SHhiLENBQUMsQ0FBQztBQUFDd2IsY0FBTSxFQUFDO0FBQVIsT0FBRCxDQUE1SjtBQUF1TDtBQUFqTyxHQUFkLENBQVYsRUFBNFBwYixNQUFNLENBQUNvYyxNQUFQLENBQWM7QUFBQzVPLGFBQVMsRUFBQyxJQUFYO0FBQWdCd0wseUJBQXFCLEVBQUMsK0JBQVNwWixDQUFULEVBQVc7QUFBQ3MwQixRQUFFLENBQUN0MEIsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHd1ksRUFBRSxDQUFDWSxxQkFBTixFQUE0Qiw0QkFBNUIsQ0FBTCxFQUErRCxlQUEvRCxDQUFGO0FBQWtGLEtBQXBJO0FBQXFJQyx5QkFBcUIsRUFBQywrQkFBU3JaLENBQVQsRUFBVztBQUFDczBCLFFBQUUsQ0FBQ3QwQixDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUd3WSxFQUFFLENBQUNhLHFCQUFOLEVBQTRCLDRCQUE1QixDQUFMLEVBQStELHNCQUEvRCxDQUFGO0FBQXlGLEtBQWhRO0FBQWlRQyx5QkFBcUIsRUFBQywrQkFBU3RaLENBQVQsRUFBVztBQUFDczBCLFFBQUUsQ0FBQ3QwQixDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUd3WSxFQUFFLENBQUNjLHFCQUFOLEVBQTRCLDRCQUE1QixDQUFMLEVBQStELG9CQUEvRCxDQUFGO0FBQXVGLEtBQTFYO0FBQTJYaEcsV0FBTyxFQUFDaWhCO0FBQW5ZLEdBQWQsQ0FBNVAsQ0FBRCxDQUFUO0FBQUEsTUFBOHBCVSxFQUFFLEdBQUM1aEIsRUFBRSxDQUFDLENBQUM0ZSxFQUFELENBQUQsQ0FBbnFCOztBQUEwcUIsV0FBU2lELEVBQVQsQ0FBWWwxQixDQUFaLEVBQWM7QUFBQyxXQUFPQSxDQUFDLENBQUNpQyxNQUFGLENBQVMsQ0FBVCxFQUFZa3pCLFdBQVosS0FBMEJuMUIsQ0FBQyxDQUFDOEIsS0FBRixDQUFRLENBQVIsQ0FBakM7QUFBNEM7O0FBQUEsV0FBU3N6QixFQUFULENBQVlwMUIsQ0FBWixFQUFjO0FBQUMsV0FBT0EsQ0FBQyxDQUFDa0MsT0FBRixDQUFVLFFBQVYsRUFBb0IsVUFBU2xDLENBQVQsRUFBVztBQUFDLGFBQU0sSUFBSTZKLE1BQUosQ0FBVzdKLENBQUMsQ0FBQzRQLFdBQUYsRUFBWCxDQUFOO0FBQWtDLEtBQWxFLENBQVA7QUFBNEU7O0FBQUEsV0FBU3lsQixFQUFULENBQVlyMUIsQ0FBWixFQUFjO0FBQUMsV0FBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxHQUFLc0wsSUFBSSxDQUFDQyxTQUFMLENBQWV2TCxDQUFmLENBQUwsR0FBdUJBLENBQTlCO0FBQWdDOztBQUFBLFdBQVNzMUIsRUFBVCxDQUFZdDFCLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFdBQU9veEIsRUFBRSxDQUFDO0FBQUN2YixTQUFHLEVBQUM5VixDQUFMO0FBQU9zVixVQUFJLEVBQUNyVjtBQUFaLEtBQUQsQ0FBVDtBQUEwQjs7QUFBQSxXQUFTczFCLEVBQVQsQ0FBWXYxQixDQUFaLEVBQWNDLENBQWQsRUFBZ0JJLENBQWhCLEVBQWtCO0FBQUMsV0FBT29ULEVBQUUsQ0FBQ3pULENBQUQsRUFBR0MsQ0FBSCxFQUFLLGNBQWM0SixNQUFkLENBQXFCeEosQ0FBckIsRUFBdUIsWUFBdkIsQ0FBTCxDQUFGLEVBQTZDLENBQUMsQ0FBckQ7QUFBdUQ7O0FBQUEsV0FBU20xQixFQUFULENBQVl4MUIsQ0FBWixFQUFjO0FBQUMsV0FBT3lLLEVBQUUsQ0FBQ3pLLENBQUQsQ0FBRixDQUFNc0ssTUFBTixDQUFjLFVBQVNySyxDQUFULEVBQVdJLENBQVgsRUFBYTtBQUFDLGFBQU9KLENBQUMsQ0FBQ20xQixFQUFFLENBQUMvMEIsQ0FBRCxDQUFILENBQUQsR0FBU0wsQ0FBQyxDQUFDSyxDQUFELENBQVYsRUFBY0osQ0FBckI7QUFBdUIsS0FBbkQsRUFBcUQsRUFBckQsQ0FBUDtBQUFnRTs7QUFBQSxNQUFJdzFCLEVBQUUsR0FBQztBQUFDNWhCLFlBQVEsRUFBQztBQUFDNmhCLFlBQU0sRUFBQ25zQixFQUFSO0FBQVdvc0Isa0JBQVksRUFBQ3BzQixFQUF4QjtBQUEyQnFzQiw0QkFBc0IsRUFBQ3JzQixFQUFsRDtBQUFxRHNzQix1QkFBaUIsRUFBQ3RzQixFQUF2RTtBQUEwRXVzQix3QkFBa0IsRUFBQ3ZzQixFQUE3RjtBQUFnR3dzQixtQkFBYSxFQUFDeHNCO0FBQTlHLEtBQVY7QUFBNEh5c0IsV0FBTyxFQUFDQztBQUFwSSxHQUFQO0FBQUEsTUFBK0lDLEVBQUUsR0FBQztBQUFDdGlCLFlBQVEsRUFBQztBQUFDdWlCLFVBQUksRUFBQzVzQixFQUFOO0FBQVM2c0IsWUFBTSxFQUFDN3NCO0FBQWhCO0FBQVYsR0FBbEo7O0FBQWlMLFdBQVMwc0IsRUFBVCxDQUFZajJCLENBQVosRUFBYztBQUFDLFFBQUlDLENBQUMsR0FBQ3UxQixFQUFFLENBQUN4MUIsQ0FBRCxDQUFSO0FBQVksV0FBT0MsQ0FBQyxDQUFDbzJCLG1CQUFGLEtBQXdCcDJCLENBQUMsQ0FBQ3EyQix3QkFBRixHQUEyQnIyQixDQUFDLENBQUNvMkIsbUJBQTdCLEVBQWlELE9BQU9wMkIsQ0FBQyxDQUFDbzJCLG1CQUFsRixHQUF1R3AyQixDQUFDLENBQUNzMkIsZUFBRixLQUFvQnQyQixDQUFDLENBQUN1MkIsb0JBQUYsR0FBdUJ2MkIsQ0FBQyxDQUFDczJCLGVBQXpCLEVBQXlDLE9BQU90MkIsQ0FBQyxDQUFDczJCLGVBQXRFLENBQXZHLEVBQThMdDJCLENBQXJNO0FBQXVNOztBQUFBLFdBQVN3MkIsRUFBVCxDQUFZejJCLENBQVosRUFBYztBQUFDLFdBQU07QUFBQ2xCLFdBQUssRUFBQ2tCLENBQUMsQ0FBQ2xCLEtBQVQ7QUFBZTQzQixVQUFJLEVBQUNULEVBQUUsQ0FBQ2oyQixDQUFDLENBQUMwMkIsSUFBSDtBQUF0QixLQUFOO0FBQXNDOztBQUFBLFdBQVNDLEVBQVQsQ0FBWTMyQixDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUN1MUIsRUFBRSxDQUFDeDFCLENBQUQsQ0FBUjtBQUFZLFdBQU9DLENBQUMsQ0FBQ3kyQixJQUFGLEdBQU9ULEVBQUUsQ0FBQ2gyQixDQUFDLENBQUN5MkIsSUFBSCxDQUFULEVBQWtCejJCLENBQXpCO0FBQTJCOztBQUFBLE1BQUkyMkIsRUFBRSxHQUFDO0FBQUNDLGNBQVUsRUFBQ3BCLEVBQVo7QUFBZWlCLFFBQUksRUFBQ2pCLEVBQXBCO0FBQXVCcUIsVUFBTSxFQUFDO0FBQUNsakIsY0FBUSxFQUFDO0FBQUM5VSxhQUFLLEVBQUN5SyxFQUFQO0FBQVVtdEIsWUFBSSxFQUFDLGNBQVMxMkIsQ0FBVCxFQUFXO0FBQUN1MUIsWUFBRSxDQUFDdjFCLENBQUQsRUFBR3kxQixFQUFILEVBQU0sTUFBTixDQUFGO0FBQWdCO0FBQTNDLE9BQVY7QUFBdURPLGFBQU8sRUFBQ1M7QUFBL0QsS0FBOUI7QUFBaUdNLFdBQU8sRUFBQztBQUFDbGpCLGNBQVEsRUFBQztBQUFDLFdBQUUsV0FBUzdULENBQVQsRUFBVztBQUFDdTFCLFlBQUUsQ0FBQ3YxQixDQUFELEVBQUc0MkIsRUFBRSxDQUFDRSxNQUFOLEVBQWEsUUFBYixDQUFGO0FBQXlCLFNBQXhDO0FBQXlDLFdBQUUsV0FBUzkyQixDQUFULEVBQVc7QUFBQ3UxQixZQUFFLENBQUN2MUIsQ0FBRCxFQUFHNDJCLEVBQUUsQ0FBQ0UsTUFBTixFQUFhLFFBQWIsQ0FBRjtBQUF5QjtBQUFoRixPQUFWO0FBQTRGZCxhQUFPLEVBQUMsaUJBQVNoMkIsQ0FBVCxFQUFXO0FBQUMsZUFBT2lLLEVBQUUsQ0FBQ2pLLENBQUQsRUFBR3kyQixFQUFILENBQVQ7QUFBZ0I7QUFBaEksS0FBekc7QUFBMk85RixXQUFPLEVBQUM7QUFBQy9jLGNBQVEsRUFBQztBQUFDOVUsYUFBSyxFQUFDeUssRUFBUDtBQUFVeXRCLGdCQUFRLEVBQUN6dEIsRUFBbkI7QUFBc0JtdEIsWUFBSSxFQUFDLGNBQVMxMkIsQ0FBVCxFQUFXO0FBQUN1MUIsWUFBRSxDQUFDdjFCLENBQUQsRUFBR3kxQixFQUFILEVBQU0sTUFBTixDQUFGO0FBQWdCO0FBQXZELE9BQVY7QUFBbUU1aEIsY0FBUSxFQUFDO0FBQUNvakIsa0JBQVUsRUFBQ3Z0QixFQUFaO0FBQWV3dEIsbUJBQVcsRUFBQ3h0QixFQUEzQjtBQUE4QjNKLG1CQUFXLEVBQUN3SjtBQUExQyxPQUE1RTtBQUEwSHlzQixhQUFPLEVBQUNXO0FBQWxJLEtBQW5QO0FBQXlYUSxZQUFRLEVBQUM7QUFBQ3RqQixjQUFRLEVBQUM7QUFBQyxXQUFFLFdBQVM3VCxDQUFULEVBQVc7QUFBQ3UxQixZQUFFLENBQUN2MUIsQ0FBRCxFQUFHNDJCLEVBQUUsQ0FBQ2pHLE9BQU4sRUFBYyxTQUFkLENBQUY7QUFBMkIsU0FBMUM7QUFBMkMsV0FBRSxXQUFTM3dCLENBQVQsRUFBVztBQUFDdTFCLFlBQUUsQ0FBQ3YxQixDQUFELEVBQUc0MkIsRUFBRSxDQUFDakcsT0FBTixFQUFjLFNBQWQsQ0FBRjtBQUEyQixTQUFwRjtBQUFxRixXQUFFLFdBQVMzd0IsQ0FBVCxFQUFXO0FBQUN1MUIsWUFBRSxDQUFDdjFCLENBQUQsRUFBRzQyQixFQUFFLENBQUNqRyxPQUFOLEVBQWMsU0FBZCxDQUFGO0FBQTJCO0FBQTlILE9BQVY7QUFBMElxRixhQUFPLEVBQUMsaUJBQVNoMkIsQ0FBVCxFQUFXO0FBQUMsZUFBT2lLLEVBQUUsQ0FBQ2pLLENBQUQsRUFBRzIyQixFQUFILENBQVQ7QUFBZ0I7QUFBOUssS0FBbFk7QUFBa2pCUyxZQUFRLEVBQUM7QUFBQ3hqQixjQUFRLEVBQUM7QUFBQ3lqQixvQkFBWSxFQUFDM3RCO0FBQWQsT0FBVjtBQUE0Qm1LLGNBQVEsRUFBQztBQUFDeWpCLHFCQUFhLEVBQUM1dEIsRUFBZjtBQUFrQjZ0QixvQkFBWSxFQUFDN3RCLEVBQS9CO0FBQWtDOHRCLDBCQUFrQixFQUFDOXRCLEVBQXJEO0FBQXdEK3RCLG9CQUFZLEVBQUNsdUIsRUFBckU7QUFBd0VtdUIsNEJBQW9CLEVBQUNqc0IsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUEvRjtBQUF1R2tzQixtQkFBVyxFQUFDcHVCO0FBQW5ILE9BQXJDO0FBQTRKeXNCLGFBQU8sRUFBQ1I7QUFBcEssS0FBM2pCO0FBQW11Qm9DLFVBQU0sRUFBQztBQUFDL2pCLGNBQVEsRUFBQztBQUFDZ2tCLGlCQUFTLEVBQUNudUIsRUFBWDtBQUFjb3VCLG9CQUFZLEVBQUNwdUIsRUFBM0I7QUFBOEJxdUIsbUJBQVcsRUFBQ3J1QixFQUExQztBQUE2Q3N1QixpQkFBUyxFQUFDdHVCLEVBQXZEO0FBQTBEdXVCLHVCQUFlLEVBQUN2dUI7QUFBMUUsT0FBVjtBQUF3RnNzQixhQUFPLEVBQUNSO0FBQWhHLEtBQTF1QjtBQUE4MEIwQyxlQUFXLEVBQUM7QUFBQ3JrQixjQUFRLEVBQUM7QUFBQ3NrQixtQkFBVyxFQUFDNXVCLEVBQWI7QUFBZ0I2dUIsdUJBQWUsRUFBQzd1QixFQUFoQztBQUFtQzh1QixxQkFBYSxFQUFDOXVCLEVBQWpEO0FBQW9EK3VCLHNCQUFjLEVBQUMvdUIsRUFBbkU7QUFBc0VndkIsMEJBQWtCLEVBQUNodkIsRUFBekY7QUFBNEZpdkIsYUFBSyxFQUFDLGVBQVN4NEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU93QixDQUFDLENBQUN4QixDQUFELENBQUQsSUFBTUEsQ0FBQyxDQUFDK0IsTUFBRixHQUFTLENBQWYsSUFBa0JvSSxFQUFFLENBQUNuSyxDQUFELEVBQUksVUFBU0EsQ0FBVCxFQUFXO0FBQUMsbUJBQU91MUIsRUFBRSxDQUFDdjFCLENBQUQsRUFBR2syQixFQUFILEVBQU0sWUFBTixDQUFUO0FBQTZCLFdBQTdDLENBQTNCO0FBQTJFLFNBQXpMO0FBQTBMdUMsV0FBRyxFQUFDbHZCLEVBQTlMO0FBQWlNbXZCLGFBQUssRUFBQ252QjtBQUF2TSxPQUFWO0FBQXFOeXNCLGFBQU8sRUFBQyxpQkFBU2gyQixDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUN1MUIsRUFBRSxDQUFDeDFCLENBQUQsQ0FBUjtBQUFZLGVBQU9DLENBQUMsQ0FBQ3U0QixLQUFGLEtBQVV2NEIsQ0FBQyxDQUFDdTRCLEtBQUYsR0FBUXZ1QixFQUFFLENBQUNoSyxDQUFDLENBQUN1NEIsS0FBSCxFQUFVLFVBQVN4NEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU93MUIsRUFBRSxDQUFDeDFCLENBQUQsQ0FBVDtBQUFhLFNBQW5DLENBQXBCLEdBQTJEQyxDQUFsRTtBQUFvRTtBQUF6VDtBQUExMUIsR0FBUDtBQUE2cEMsTUFBSTA0QixFQUFFLEdBQUM7QUFBQ3ByQixVQUFNLEVBQUMsZ0JBQVN2TixDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsVUFBSUUsQ0FBQyxHQUFDcTJCLEVBQUUsQ0FBQzMyQixDQUFELENBQVI7QUFBWSxVQUFHTSxDQUFILEVBQUssT0FBT1AsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHTyxDQUFILEVBQUssY0FBY3NKLE1BQWQsQ0FBcUI1SixDQUFyQixFQUF1QixPQUF2QixFQUFnQzRKLE1BQWhDLENBQXVDeEosQ0FBQyxJQUFFLE9BQTFDLENBQUwsQ0FBSixFQUE2REUsQ0FBQyxDQUFDeTFCLE9BQUYsQ0FBVWgyQixDQUFWLENBQXBFO0FBQWlGO0FBQTFILEdBQVA7QUFBQSxNQUFtSTQ0QixFQUFFLEdBQUMsS0FBdEk7QUFBQSxNQUE0SUMsRUFBRSxHQUFDeHJCLEVBQUUsQ0FBRSxTQUFTck4sQ0FBVCxDQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDMk0sTUFBRSxDQUFDLElBQUQsRUFBTWhOLENBQU4sQ0FBRixFQUFXLEtBQUs4NEIsTUFBTCxHQUFZN2xCLEVBQUUsRUFBekIsRUFBNEIsS0FBSzhsQixNQUFMLEdBQVksS0FBeEMsRUFBOEMsS0FBS0MsT0FBTCxHQUFhSixFQUEzRCxFQUE4RCxLQUFLSyxNQUFMLEdBQVl6c0IsRUFBRSxDQUFDQSxFQUFFLENBQUM7QUFBQzJILFFBQUUsRUFBQy9DO0FBQUosS0FBRCxFQUFTblIsQ0FBQyxDQUFDZzVCLE1BQVgsQ0FBSCxFQUFzQmg1QixDQUFDLENBQUNpNUIsa0JBQUYsSUFBc0I7QUFBQ0MsVUFBSSxFQUFDOUQsRUFBRSxDQUFDcDFCLENBQUMsQ0FBQ2k1QixrQkFBSDtBQUFSLEtBQTVDLENBQTVFLEVBQXlKLEtBQUtFLGFBQUwsR0FBbUIvNEIsQ0FBQyxDQUFDZzVCLFlBQTlLLEVBQTJMLEtBQUtwSixhQUFMLEdBQW1CNXZCLENBQUMsQ0FBQzR2QixhQUFoTixFQUE4TixLQUFLRCxXQUFMLEdBQWlCM3ZCLENBQUMsQ0FBQzJ2QixXQUFqUDtBQUE2UCxHQUEvUSxDQUFqSjtBQUFtYSxNQUFJc0osRUFBRSxHQUFDanNCLEVBQUUsQ0FBRSxTQUFTck4sQ0FBVCxDQUFXQyxDQUFYLEVBQWE7QUFBQyxRQUFJSSxDQUFDLEdBQUMsSUFBTjtBQUFXMk0sTUFBRSxDQUFDLElBQUQsRUFBTWhOLENBQU4sQ0FBRixFQUFXLEtBQUtzd0IsUUFBTCxHQUFjc0ksRUFBekIsRUFBNEIsS0FBS3pJLGVBQUwsR0FBcUIzakIsRUFBRSxDQUFDO0FBQUMrc0IsaUJBQVcsRUFBQ3Q1QixDQUFDLENBQUN1NUI7QUFBZixLQUFELEVBQTRCdjVCLENBQUMsQ0FBQ3c1QixXQUFGLElBQWU7QUFBQ0Msa0JBQVksRUFBQ3o1QixDQUFDLENBQUN3NUI7QUFBaEIsS0FBM0MsQ0FBbkQsRUFBNEhud0IsRUFBRSxDQUFDckosQ0FBRCxFQUFJLFVBQVNELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSU0sQ0FBQyxHQUFDbzRCLEVBQUUsQ0FBQ3ByQixNQUFILENBQVV2TixDQUFWLEVBQVlDLENBQVosRUFBYyxlQUFkLENBQU47QUFBcUNNLE9BQUMsS0FBR0YsQ0FBQyxDQUFDOHZCLGVBQUYsQ0FBa0JpRixFQUFFLENBQUNuMUIsQ0FBRCxDQUFwQixJQUF5Qk0sQ0FBNUIsQ0FBRDtBQUFnQyxLQUF2RixDQUE5SDtBQUF3TixHQUFuUCxDQUFUO0FBQUEsTUFBK1BvNUIsRUFBRSxHQUFDO0FBQUNDLFlBQVEsRUFBQ04sRUFBVjtBQUFhTyxnQkFBWSxFQUFDUCxFQUExQjtBQUE2QlEsWUFBUSxFQUFDLFVBQVM5NUIsQ0FBVCxFQUFXO0FBQUNzTixRQUFFLENBQUNqTixDQUFELEVBQUdMLENBQUgsQ0FBRjtBQUFRLFVBQUlDLENBQUMsR0FBQzhOLEVBQUUsQ0FBQzFOLENBQUQsQ0FBUjs7QUFBWSxlQUFTQSxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLFlBQUlPLENBQUo7QUFBTSxlQUFPeU0sRUFBRSxDQUFDLElBQUQsRUFBTTNNLENBQU4sQ0FBRixFQUFXLENBQUNFLENBQUMsR0FBQ04sQ0FBQyxDQUFDcUIsSUFBRixDQUFPLElBQVAsRUFBWXRCLENBQVosQ0FBSCxFQUFtQm13QixlQUFuQixDQUFtQzRKLFlBQW5DLEdBQWdELzVCLENBQUMsQ0FBQ2c2QixXQUE3RCxFQUF5RS9MLE9BQU8sS0FBR2p1QixDQUFDLENBQUNpNkIsY0FBRixJQUFrQmo2QixDQUFDLENBQUNrNkIsZ0JBQXBCLElBQXNDbDZCLENBQUMsQ0FBQ202QixpQkFBM0MsQ0FBUCxJQUFzRWxNLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLGlDQUFpQ2xsQixNQUFqQyxDQUF3QyxDQUFDLGdCQUFELEVBQWtCLGtCQUFsQixFQUFxQyxtQkFBckMsRUFBMEQyQixJQUExRCxDQUErRCxJQUEvRCxDQUF4QyxFQUE2RywrQ0FBN0csQ0FBYixDQUEvSSxFQUEyVGpMLENBQWxVO0FBQW9VOztBQUFBLGFBQU84TSxFQUFFLENBQUNoTixDQUFELENBQVQ7QUFBYSxLQUFyWSxDQUFzWWk1QixFQUF0WSxDQUF0QztBQUFnYmMsZ0JBQVksRUFBQyxVQUFTcDZCLENBQVQsRUFBVztBQUFDc04sUUFBRSxDQUFDak4sQ0FBRCxFQUFHTCxDQUFILENBQUY7QUFBUSxVQUFJQyxDQUFDLEdBQUM4TixFQUFFLENBQUMxTixDQUFELENBQVI7O0FBQVksZUFBU0EsQ0FBVCxDQUFXTCxDQUFYLEVBQWE7QUFBQyxZQUFJTyxDQUFKO0FBQU15TSxVQUFFLENBQUMsSUFBRCxFQUFNM00sQ0FBTixDQUFGO0FBQVcsWUFBSUksQ0FBQyxHQUFDLENBQUNGLENBQUMsR0FBQ04sQ0FBQyxDQUFDcUIsSUFBRixDQUFPLElBQVAsRUFBWXRCLENBQVosQ0FBSCxFQUFtQm13QixlQUF6QjtBQUF5QyxlQUFPMXZCLENBQUMsQ0FBQzQ1QixPQUFGLEdBQVVyNkIsQ0FBQyxDQUFDcTZCLE9BQUYsSUFBVyxFQUFyQixFQUF3QjU1QixDQUFDLENBQUM2NUIsYUFBRixHQUFnQnQ2QixDQUFDLENBQUN1NkIsWUFBRixJQUFnQixFQUF4RCxFQUEyRGg2QixDQUFsRTtBQUFvRTs7QUFBQSxhQUFPOE0sRUFBRSxDQUFDaE4sQ0FBRCxDQUFUO0FBQWEsS0FBekwsQ0FBMExpNUIsRUFBMUwsQ0FBN2I7QUFBMm5Ca0IsWUFBUSxFQUFDLFVBQVN4NkIsQ0FBVCxFQUFXO0FBQUNzTixRQUFFLENBQUNqTixDQUFELEVBQUdMLENBQUgsQ0FBRjtBQUFRLFVBQUlDLENBQUMsR0FBQzhOLEVBQUUsQ0FBQzFOLENBQUQsQ0FBUjs7QUFBWSxlQUFTQSxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLFlBQUlPLENBQUo7QUFBTSxlQUFPeU0sRUFBRSxDQUFDLElBQUQsRUFBTTNNLENBQU4sQ0FBRixFQUFXLENBQUNFLENBQUMsR0FBQ04sQ0FBQyxDQUFDcUIsSUFBRixDQUFPLElBQVAsRUFBWXRCLENBQVosQ0FBSCxFQUFtQm13QixlQUFuQixDQUFtQ3NLLElBQW5DLEdBQXdDejZCLENBQUMsQ0FBQ3k2QixJQUFGLElBQVEsRUFBM0QsRUFBOERsNkIsQ0FBckU7QUFBdUU7O0FBQUEsYUFBTzhNLEVBQUUsQ0FBQ2hOLENBQUQsQ0FBVDtBQUFhLEtBQXhJLENBQXlJaTVCLEVBQXpJO0FBQXBvQixHQUFsUTtBQUFBLE1BQW9oQ29CLEVBQUUsR0FBQ3J0QixFQUFFLENBQUUsU0FBU3JOLENBQVQsQ0FBV0MsQ0FBWCxFQUFhO0FBQUMrTSxNQUFFLENBQUMsSUFBRCxFQUFNaE4sQ0FBTixDQUFGLEVBQVcsS0FBS3N3QixRQUFMLEdBQWNzSSxFQUF6QixFQUE0QixLQUFLMUksV0FBTCxHQUFpQmp3QixDQUFDLENBQUMwNkIsVUFBL0MsRUFBMEQxNkIsQ0FBQyxDQUFDMjZCLFVBQUYsS0FBZSxLQUFLNUssV0FBTCxHQUFpQi92QixDQUFDLENBQUMyNkIsVUFBbEMsQ0FBMUQsRUFBd0czNkIsQ0FBQyxDQUFDNDZCLFlBQUYsS0FBaUIsS0FBSzVLLGFBQUwsR0FBbUJod0IsQ0FBQyxDQUFDNDZCLFlBQXRDLENBQXhHO0FBQTRKLEdBQTVLLENBQXpoQztBQUFBLE1BQXdzQ0MsRUFBRSxHQUFDenRCLEVBQUUsQ0FBRSxTQUFTck4sQ0FBVCxDQUFXQyxDQUFYLEVBQWE7QUFBQytNLE1BQUUsQ0FBQyxJQUFELEVBQU1oTixDQUFOLENBQUYsRUFBVyxLQUFLc3dCLFFBQUwsR0FBY3NJLEVBQXpCLEVBQTRCLEtBQUs1SSxXQUFMLEdBQWlCL3ZCLENBQUMsQ0FBQzI2QixVQUEvQyxFQUEwRCxLQUFLM0ssYUFBTCxHQUFtQmh3QixDQUFDLENBQUM0NkIsWUFBL0U7QUFBNEYsR0FBNUcsQ0FBN3NDOztBQUE0ekMsTUFBSUUsRUFBRSxHQUFDO0FBQUN0ZixRQUFJLEVBQUMsY0FBU3piLENBQVQsRUFBV0MsQ0FBWCxFQUFhSSxDQUFiLEVBQWU7QUFBQyxVQUFJRSxDQUFDLEdBQUNzVixFQUFFLENBQUNySixFQUFFLENBQUM7QUFBQ2dvQixlQUFPLEVBQUN2aEIsRUFBRSxFQUFYO0FBQWMySCxVQUFFLEVBQUN4SixFQUFqQjtBQUFvQjRwQix5QkFBaUIsRUFBQy82QixDQUF0QztBQUF3Q2c3Qix5QkFBaUIsRUFBQzN2QixJQUFJLENBQUNDLFNBQUwsQ0FBZWxMLENBQWY7QUFBMUQsT0FBRCxFQUE4RUwsQ0FBQyxDQUFDazVCLGtCQUFGLElBQXNCO0FBQUNDLFlBQUksRUFBQzlELEVBQUUsQ0FBQ3IxQixDQUFDLENBQUNrNUIsa0JBQUg7QUFBUixPQUFwRyxDQUFILEVBQXdJO0FBQUNwakIsV0FBRyxFQUFDLEdBQUdqTSxNQUFILENBQVUwSCxFQUFFLENBQUNZLFlBQWIsRUFBMEIsY0FBMUIsQ0FBTDtBQUErQzRELGlCQUFTLEVBQUMsdUJBQXpEO0FBQWlGQyxxQkFBYSxFQUFDO0FBQS9GLE9BQXhJLENBQVI7QUFBeVRoVyxPQUFDLENBQUNra0IsUUFBRixJQUFZLFVBQVNsa0IsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxZQUFHK1EsRUFBRSxDQUFDakIsT0FBSCxDQUFXa0csSUFBZCxFQUFtQixPQUFPLE1BQUtnWSxPQUFPLElBQUVBLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLHVFQUFiLENBQWQsQ0FBUDs7QUFBNEcsWUFBSTF1QixDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTTCxDQUFULEVBQVc7QUFBQyxxQkFBU0EsQ0FBQyxDQUFDc1YsSUFBWCxJQUFpQnRWLENBQUMsQ0FBQ3VWLE1BQUYsS0FBV2hFLEVBQUUsQ0FBQ1ksWUFBL0IsSUFBNkNsUyxDQUFDLEVBQTlDO0FBQWlELFNBQW5FOztBQUFvRStLLFVBQUUsQ0FBQ21CLE1BQUQsRUFBUSxTQUFSLEVBQWtCOUwsQ0FBbEIsQ0FBRjtBQUF1QixZQUFJRSxDQUFDLEdBQUM4bEIsV0FBVyxDQUFFLFlBQVU7QUFBQ3JtQixXQUFDLENBQUMwVSxNQUFGLEtBQVc0UixhQUFhLENBQUMvbEIsQ0FBRCxDQUFiLEVBQWlCMkssRUFBRSxDQUFDaUIsTUFBRCxFQUFRLFNBQVIsRUFBa0I5TCxDQUFsQixDQUE5QjtBQUFvRCxTQUFqRSxFQUFtRSxHQUFuRSxDQUFqQjtBQUF5RixPQUFqVSxDQUFrVUUsQ0FBbFUsRUFBb1VQLENBQUMsQ0FBQ2trQixRQUF0VSxDQUFaO0FBQTRWO0FBQTNxQixHQUFQO0FBQUEsTUFBb3JCZ1gsRUFBRSxHQUFDLFlBQVU7QUFBQyxRQUFJbDdCLENBQUMsR0FBQ2lQLEVBQUUsRUFBUjtBQUFBLFFBQVdoUCxDQUFDLEdBQUNELENBQUMsQ0FBQ2lRLEVBQWY7QUFBQSxRQUFrQjVQLENBQUMsR0FBQyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxRQUE2QkUsQ0FBQyxHQUFDLENBQUMsU0FBRCxFQUFXLFdBQVgsQ0FBL0I7O0FBQXVELGFBQVNFLENBQVQsQ0FBV1QsQ0FBWCxFQUFhO0FBQUNtTSxZQUFNLENBQUNtVSxHQUFQLENBQVcxUCxRQUFYLENBQW9CeUQsSUFBcEIsR0FBeUJyVSxDQUF6QjtBQUEyQjs7QUFBQSxhQUFTVyxDQUFULENBQVdYLENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCO0FBQUMsVUFBSUUsQ0FBQyxHQUFFLElBQUl5RCxJQUFKLEVBQUQsQ0FBV20zQixPQUFYLEVBQU47QUFBMkIsYUFBTy9qQixVQUFVLENBQUUsWUFBVTtBQUFDLFlBQUkzVyxDQUFDLEdBQUUsSUFBSXVELElBQUosRUFBRCxDQUFXbTNCLE9BQVgsRUFBTjtBQUEyQnQ2QixTQUFDLE1BQUlKLENBQUMsR0FBQ0YsQ0FBRixHQUFJUCxDQUFDLEdBQUMsR0FBWCxJQUFnQkssQ0FBQyxDQUFDSixDQUFELENBQWpCO0FBQXFCLE9BQTdELEVBQStERCxDQUEvRCxDQUFqQjtBQUFtRjs7QUFBQSxhQUFTYSxDQUFULEdBQVk7QUFBQyxXQUFJLElBQUliLENBQUMsR0FBQyxDQUFDLFFBQUQsRUFBVSxjQUFWLENBQU4sRUFBZ0NDLENBQUMsR0FBQyxDQUFsQyxFQUFvQ0ksQ0FBQyxHQUFDTCxDQUFDLENBQUMrQixNQUE1QyxFQUFtRDlCLENBQUMsR0FBQ0ksQ0FBckQsRUFBdURKLENBQUMsRUFBeEQ7QUFBMkQsWUFBRyxLQUFLLENBQUwsS0FBUzZLLFFBQVEsQ0FBQzlLLENBQUMsQ0FBQ0MsQ0FBRCxDQUFGLENBQXBCLEVBQTJCLE9BQU0sQ0FBQzZLLFFBQVEsQ0FBQzlLLENBQUMsQ0FBQ0MsQ0FBRCxDQUFGLENBQWY7QUFBdEY7O0FBQTRHLGFBQU0sQ0FBQyxDQUFQO0FBQVM7O0FBQUEsYUFBU2MsQ0FBVCxDQUFXZixDQUFYLEVBQWE7QUFBQ29YLGdCQUFVLENBQUUsWUFBVTtBQUFFLG1CQUFTcFgsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDNkssUUFBUSxDQUFDaUssYUFBVCxDQUF1QixRQUF2QixDQUFOO0FBQXVDLGlCQUFPOVUsQ0FBQyxDQUFDK1UsRUFBRixHQUFLaFYsQ0FBTCxFQUFPQyxDQUFDLENBQUM2Z0IsS0FBRixDQUFRRyxNQUFSLEdBQWUsTUFBdEIsRUFBNkJoaEIsQ0FBQyxDQUFDNmdCLEtBQUYsQ0FBUTVoQixLQUFSLEdBQWMsR0FBM0MsRUFBK0NlLENBQUMsQ0FBQzZnQixLQUFGLENBQVEzaEIsTUFBUixHQUFlLEdBQTlELEVBQWtFYyxDQUFDLENBQUM2Z0IsS0FBRixDQUFRc2EsT0FBUixHQUFnQixNQUFsRixFQUF5Rm43QixDQUFDLENBQUM2Z0IsS0FBRixDQUFRNkUsUUFBUixHQUFpQixRQUExRyxFQUFtSDdhLFFBQVEsQ0FBQ29LLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmxWLENBQTFCLENBQW5ILEVBQWdKQSxDQUF2SjtBQUF5SixTQUE1TSxFQUE2TSxhQUE3TSxDQUFELENBQThOYixHQUE5TixHQUFrT1ksQ0FBbE87QUFBb08sT0FBalAsRUFBbVAsR0FBblAsQ0FBVjtBQUFrUTs7QUFBQSxXQUFPLFVBQVNpQixDQUFULEVBQVc7QUFBQyxVQUFJRSxDQUFKO0FBQUEsVUFBTUMsQ0FBTjtBQUFBLFVBQVFDLENBQVI7QUFBQSxVQUFVRSxDQUFWO0FBQUEsVUFBWUMsQ0FBQyxHQUFDLGNBQVksT0FBT1AsQ0FBQyxDQUFDbzZCLGFBQXJCLEdBQW1DcDZCLENBQUMsQ0FBQ282QixhQUFyQyxHQUFtRCxZQUFVLENBQUUsQ0FBN0U7QUFBQSxVQUE4RTE1QixDQUFDLEdBQUMsY0FBWSxPQUFPVixDQUFDLENBQUNxNkIsWUFBckIsR0FBa0NyNkIsQ0FBQyxDQUFDcTZCLFlBQXBDLEdBQWlENzZCLENBQWpJO0FBQUEsVUFBbUltQixDQUFDLEdBQUMsY0FBWSxPQUFPWCxDQUFDLENBQUNzNkIsd0JBQXJCLEdBQThDdDZCLENBQUMsQ0FBQ3M2Qix3QkFBaEQsR0FBeUUsWUFBVSxDQUFFLENBQTFOO0FBQTJOLzVCLE9BQUMsSUFBR3ZCLENBQUMsQ0FBQ2dVLE9BQUYsSUFBVzdTLENBQUMsR0FBQ3BCLENBQUMsQ0FBQytQLE9BQUYsQ0FBVWdqQixNQUFWLElBQWtCLENBQUMveUIsQ0FBQyxDQUFDK1AsT0FBRixDQUFVYixPQUFWLENBQWtCRyxLQUFuQixJQUEwQixFQUE5QyxFQUFpRGhPLENBQUMsR0FBQyxJQUFJc0MsTUFBSixDQUFXdEQsQ0FBQyxDQUFDbUwsSUFBRixDQUFPLEdBQVAsQ0FBWCxFQUF1QixHQUF2QixDQUFuRCxFQUErRWpLLENBQUMsR0FBQyxJQUFJb0MsTUFBSixDQUFXcEQsQ0FBQyxDQUFDaUwsSUFBRixDQUFPLEdBQVAsQ0FBWCxFQUF1QixHQUF2QixDQUFqRixFQUE2RyxDQUFDcEssQ0FBQyxJQUFFLENBQUNDLENBQUMsQ0FBQ1csSUFBRixDQUFPaEMsQ0FBQyxDQUFDOFAsRUFBVCxDQUFKLElBQWtCdk8sQ0FBQyxDQUFDUyxJQUFGLENBQU9oQyxDQUFDLENBQUM4UCxFQUFULENBQW5CLEtBQWtDN08sQ0FBQyxDQUFDdTZCLFNBQXBDLElBQStDLENBQUN2NkIsQ0FBQyxDQUFDdzZCLFlBQWxELEdBQStELFVBQVN4N0IsQ0FBVCxFQUFXO0FBQUNELFNBQUMsQ0FBQytQLE9BQUYsQ0FBVWdqQixNQUFWLEdBQWlCMXlCLENBQUMsRUFBbEIsR0FBcUIrVyxVQUFVLENBQUMvVyxDQUFELEVBQUcsR0FBSCxDQUEvQjs7QUFBdUMsaUJBQVNBLENBQVQsR0FBWTtBQUFDaWdCLGFBQUcsQ0FBQzFQLFFBQUosQ0FBYXlELElBQWIsR0FBa0JwVSxDQUFsQjtBQUFvQjtBQUFDLE9BQXJGLENBQXNGZ0IsQ0FBQyxDQUFDdTZCLFNBQXhGLENBQS9ELEdBQWtLdjZCLENBQUMsQ0FBQ3k2QixRQUFGLEtBQWF2NkIsQ0FBQyxHQUFDRixDQUFDLENBQUMwNkIsU0FBSixFQUFjaDdCLENBQUMsQ0FBQyxHQUFELEVBQUtNLENBQUMsQ0FBQ3k2QixRQUFQLEVBQWdCLzVCLENBQWhCLENBQWYsRUFBa0NaLENBQUMsQ0FBQ0ksQ0FBRCxDQUFoRCxDQUExUixJQUFnVmxCLENBQUMsQ0FBQ21VLEdBQUYsSUFBT25ULENBQUMsQ0FBQ3k2QixRQUFULEdBQWtCLFVBQVN6N0IsQ0FBVCxFQUFXSSxDQUFYLEVBQWFFLENBQWIsRUFBZUUsQ0FBZixFQUFpQjtBQUFDLFlBQUlRLENBQUMsR0FBQ04sQ0FBQyxDQUFDLEdBQUQsRUFBS04sQ0FBTCxFQUFPRSxDQUFQLENBQVA7QUFBaUJnQyxnQkFBUSxDQUFDdkMsQ0FBQyxDQUFDaVEsRUFBRixDQUFLZixPQUFMLENBQWFHLEtBQWQsRUFBb0IsRUFBcEIsQ0FBUixHQUFnQyxDQUFoQyxHQUFrQyxVQUFTclAsQ0FBVCxFQUFXO0FBQUNtTSxnQkFBTSxDQUFDbEIsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsU0FBU2hMLENBQVQsR0FBWTtBQUFDWSxhQUFDLE9BQUt3VyxZQUFZLENBQUNyWCxDQUFELENBQVosRUFBZ0JtTSxNQUFNLENBQUNoQixtQkFBUCxDQUEyQixVQUEzQixFQUFzQ2xMLENBQXRDLENBQXJCLENBQUQ7QUFBZ0UsV0FBakg7QUFBb0gsU0FBaEksQ0FBaUlnQixDQUFqSSxDQUFsQyxHQUFzSyxVQUFTakIsQ0FBVCxFQUFXO0FBQUM4SyxrQkFBUSxDQUFDRyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsU0FBU2hMLENBQVQsR0FBWTtBQUFDWSxhQUFDLE9BQUt3VyxZQUFZLENBQUNyWCxDQUFELENBQVosRUFBZ0I4SyxRQUFRLENBQUNLLG1CQUFULENBQTZCLGtCQUE3QixFQUFnRGxMLENBQWhELENBQXJCLENBQUQ7QUFBMEUsV0FBckk7QUFBd0ksU0FBcEosQ0FBcUpnQixDQUFySixDQUF0SztBQUE4VHNCLGdCQUFRLENBQUN2QyxDQUFDLENBQUNpUSxFQUFGLENBQUtmLE9BQUwsQ0FBYUcsS0FBZCxFQUFvQixFQUFwQixDQUFSLEdBQWdDLENBQWhDLElBQW1DclAsQ0FBQyxDQUFDaVEsRUFBRixDQUFLbUUsR0FBeEMsSUFBNkMsS0FBSyxDQUFMLEtBQVMzVCxDQUFULEdBQVdBLENBQUMsR0FBQ1IsQ0FBYixHQUFlb1gsWUFBWSxDQUFDcFcsQ0FBRCxDQUEzQixFQUErQixVQUFTakIsQ0FBVCxFQUFXO0FBQUNtTSxnQkFBTSxDQUFDbVUsR0FBUCxDQUFXMVAsUUFBWCxDQUFvQnlELElBQXBCLEdBQXlCclUsQ0FBekI7QUFBMkIsU0FBdkMsQ0FBd0NTLENBQXhDLENBQTVFLElBQXdITSxDQUFDLENBQUNkLENBQUQsQ0FBekg7QUFBNkgsT0FBOWQsQ0FBK2RnQixDQUFDLENBQUMwNkIsU0FBamUsRUFBMmUxNkIsQ0FBQyxDQUFDeTZCLFFBQTdlLEVBQXNmLzVCLENBQXRmLEVBQXdmVixDQUFDLENBQUMyNkIsYUFBMWYsQ0FBbEIsR0FBMmhCeGtCLFVBQVUsQ0FBRSxZQUFVO0FBQUN4VixTQUFDO0FBQUcsT0FBakIsRUFBbUIsR0FBbkIsQ0FBejNCO0FBQWk1QixLQUEvbkM7QUFBZ29DLEdBQTd2RCxFQUF2ckI7QUFBQSxNQUF1N0VpNkIsRUFBRSxHQUFDLElBQUlqbEIsRUFBSixDQUFPLEdBQVAsRUFBVyxHQUFYLENBQTE3RTtBQUFBLE1BQTA4RWtsQixFQUFFLEdBQUMsV0FBNzhFOztBQUF5OUUsV0FBU0MsRUFBVCxDQUFZLzdCLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFDLFFBQUlJLENBQUMsR0FBQyxVQUFTTCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQUlJLENBQUMsR0FBQyxJQUFJdzRCLEVBQUosQ0FBTzc0QixDQUFQLEVBQVNDLENBQVQsQ0FBTjtBQUFrQixVQUFHcUwsSUFBSSxDQUFDQyxTQUFMLENBQWVsTCxDQUFmLEVBQWtCMEIsTUFBbEIsR0FBeUIsR0FBNUIsRUFBZ0MsTUFBTSxJQUFJb1IsRUFBSixDQUFPLHlHQUFQLENBQU47QUFBd0gsYUFBTy9ILEVBQUUsQ0FBQy9LLENBQUQsQ0FBVDtBQUFhLEtBQXJNLENBQXNNSixDQUF0TSxFQUF3TUQsQ0FBeE0sQ0FBTjs7QUFBaU4sS0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYUksQ0FBYixFQUFlO0FBQUMsVUFBSUUsQ0FBQyxHQUFDLENBQUN5USxFQUFFLENBQUNmLEVBQUgsQ0FBTW1FLEdBQU4sR0FBVTdDLEVBQUUsQ0FBQ2UsY0FBYixHQUE0QixFQUE3QixJQUFpQyxHQUFqQyxHQUFxQ3RTLENBQTNDO0FBQUEsVUFBNkNTLENBQUMsR0FBQyxpQkFBaUJvSixNQUFqQixDQUF3QjdKLENBQXhCLEVBQTBCLDBCQUExQixDQUEvQztBQUFBLFVBQXFHVyxDQUFDLEdBQUMsMkJBQTJCa0osTUFBM0IsQ0FBa0M3SixDQUFsQyxFQUFvQyxTQUFwQyxDQUF2RztBQUFBLFVBQXNKYSxDQUFDLEdBQUMsQ0FBQyxvQkFBb0JtQixJQUFwQixDQUF5QmdQLEVBQUUsQ0FBQ2xCLEVBQTVCLElBQWdDclAsQ0FBaEMsR0FBa0NFLENBQW5DLEVBQXFDLHdCQUFyQyxFQUE4RCxHQUFHa0osTUFBSCxDQUFVLENBQUMsQ0FBRCxLQUFLeEosQ0FBTCxHQUFPLFdBQVd3SixNQUFYLENBQWtCMEgsRUFBRSxDQUFDZ0Isa0JBQXJCLEVBQXdDLEdBQXhDLENBQVAsR0FBb0QsRUFBOUQsRUFBaUUsTUFBakUsQ0FBOUQsRUFBd0kvRyxJQUF4SSxDQUE2SSxHQUE3SSxDQUF4SjtBQUFBLFVBQTBTekssQ0FBQyxHQUFDO0FBQUM0NkIsaUJBQVMsRUFBQ3A3QixDQUFYO0FBQWFpN0IsaUJBQVMsRUFBQzM2QixDQUF2QjtBQUF5Qm03QixlQUFPLEVBQUMsV0FBakM7QUFBNkNOLGdCQUFRLEVBQUMxbkIsRUFBRSxDQUFDekMsRUFBRSxDQUFDZ0Isa0JBQUosRUFBdUJ1cEIsRUFBdkIsQ0FBeEQ7QUFBbUZQLGdDQUF3QixFQUFDLG9DQUFVO0FBQUN0N0IsV0FBQyxDQUFDTSxDQUFELENBQUQ7QUFBSztBQUE1SCxPQUE1UztBQUEwYSxPQUFDLENBQUNGLENBQUQsSUFBSTBjLEVBQUUsRUFBTixJQUFVRCxFQUFFLEVBQWIsTUFBbUIvYixDQUFDLENBQUN1NkIsWUFBRixHQUFlNXdCLEVBQWxDO0FBQXNDcVMsUUFBRSxPQUFLaGMsQ0FBQyxDQUFDNjZCLGFBQUYsR0FBZ0IsS0FBSyxDQUExQixDQUFGOztBQUErQixVQUFHO0FBQUNWLFVBQUUsQ0FBQ242QixDQUFELENBQUY7QUFBTSxPQUFWLENBQVUsT0FBTWYsQ0FBTixFQUFRLENBQUU7QUFBQyxLQUFwaEIsQ0FBcWhCSyxDQUFyaEIsRUFBdWhCSixDQUFDLENBQUN5VixJQUF6aEIsRUFBOGhCelYsQ0FBQyxDQUFDZzhCLFdBQWhpQixDQUFEO0FBQThpQixRQUFJMTdCLENBQUMsR0FBQztBQUFDODRCLGtCQUFZLEVBQUNyNUIsQ0FBQyxDQUFDcTVCLFlBQUYsSUFBZ0IsRUFBOUI7QUFBaUM2QyxpQkFBVyxFQUFDbDhCLENBQUMsQ0FBQ2s4QixXQUFGLElBQWUsRUFBNUQ7QUFBK0RDLGtCQUFZLEVBQUNuOEIsQ0FBQyxDQUFDbThCLFlBQUYsSUFBZ0I7QUFBNUYsS0FBTjtBQUFzR2w4QixLQUFDLENBQUMwVixPQUFGLENBQVVwVixDQUFWLEdBQWFOLENBQUMsQ0FBQzJWLE1BQUYsQ0FBU3JWLENBQVQsQ0FBYjtBQUF5Qjs7QUFBQSxNQUFJNjdCLEVBQUUsR0FBQztBQUFDM2dCLFFBQUksRUFBQyxjQUFTemIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFJLENBQWIsRUFBZTtBQUFDLFVBQUlFLENBQUMsR0FBQyxJQUFOOztBQUFXLFVBQUd5USxFQUFFLENBQUNqQixPQUFILENBQVdzc0IsTUFBWCxJQUFtQixVQUFVcjZCLElBQVYsQ0FBZWdQLEVBQUUsQ0FBQ2xCLEVBQUgsQ0FBTUYsV0FBTixFQUFmLENBQXRCLEVBQTBEO0FBQUMsWUFBSW5QLENBQUMsR0FBQyxJQUFOO0FBQVdGLFNBQUMsR0FBQyxXQUFTUCxDQUFULEVBQVc7QUFBQ1MsV0FBQyxHQUFDVCxDQUFGO0FBQUksU0FBbEIsRUFBbUI2N0IsRUFBRSxDQUFDMWYsS0FBSCxDQUFVLFlBQVU7QUFBQyxtQkFBTzFiLENBQVAsS0FBV283QixFQUFFLENBQUMza0IsSUFBSCxJQUFVNmtCLEVBQUUsQ0FBQ3Q3QixDQUFELEVBQUdULENBQUgsQ0FBdkI7QUFBOEIsU0FBbkQsRUFBc0QsWUFBVTtBQUFDLGNBQUlDLENBQUMsR0FBQztBQUFDOGEsaUJBQUssRUFBQyxTQUFQO0FBQWlCdUIsNkJBQWlCLEVBQUM7QUFBbkMsV0FBTjtBQUF5RHRjLFdBQUMsQ0FBQzBWLElBQUYsQ0FBT3pWLENBQVAsR0FBVUQsQ0FBQyxDQUFDNFYsTUFBRixDQUFTM1YsQ0FBVCxDQUFWO0FBQXNCLFNBQWhKLENBQW5CO0FBQXNLLE9BQTVPLE1BQWlQTSxDQUFDLEdBQUN3N0IsRUFBRjs7QUFBSyxhQUFPekcsRUFBRSxDQUFDcjFCLENBQUQsRUFBR0ksQ0FBSCxDQUFGLENBQVFsQyxJQUFSLENBQWMsVUFBUzhCLENBQVQsRUFBVztBQUFDTSxTQUFDLENBQUNOLENBQUQsRUFBR0QsQ0FBSCxDQUFEO0FBQU8sT0FBakMsRUFBb0MsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBSjtBQUFBLFlBQU1JLENBQUMsR0FBQ2lMLElBQUksQ0FBQ0MsU0FBTCxDQUFlaUIsRUFBRSxDQUFDO0FBQUNvQyxjQUFJLEVBQUM7QUFBTixTQUFELEVBQW9CNU8sQ0FBcEIsQ0FBakIsQ0FBUjtBQUFpRDRRLGdCQUFRLENBQUN5RCxJQUFULEdBQWMsR0FBR3hLLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ1ksWUFBYixFQUEwQix5QkFBMUIsRUFBcUR0SSxNQUFyRCxDQUE0RG9KLEVBQUUsRUFBOUQsRUFBaUUsU0FBakUsRUFBNEVwSixNQUE1RSxFQUFvRjVKLENBQUMsR0FBQ0ksQ0FBRixFQUFJOEwsTUFBTSxDQUFDbXdCLElBQVAsQ0FBWXI4QixDQUFaLEVBQWVpQyxPQUFmLENBQXVCLEtBQXZCLEVBQTZCLEdBQTdCLEVBQWtDQSxPQUFsQyxDQUEwQyxLQUExQyxFQUFnRCxHQUFoRCxFQUFxREEsT0FBckQsQ0FBNkQsSUFBN0QsRUFBa0UsRUFBbEUsQ0FBeEYsRUFBZDtBQUE4SyxPQUEvUSxDQUFQO0FBQXlSO0FBQWhqQixHQUFQO0FBQUEsTUFBeWpCcTZCLEVBQUUsR0FBQztBQUFDNW1CLFdBQU8sRUFBQzlTLENBQVQ7QUFBVzZTLFFBQUksRUFBQzdTLENBQWhCO0FBQWtCK1MsVUFBTSxFQUFDL1MsQ0FBekI7QUFBMkJxaEIsWUFBUSxFQUFDcmhCLENBQXBDO0FBQXNDbzVCLGVBQVcsRUFBQ3p5QixFQUFsRDtBQUFxRGdPLGVBQVcsRUFBQ2hPLEVBQWpFO0FBQW9FeXZCLFVBQU0sRUFBQzEzQixDQUEzRTtBQUE2RTIzQixzQkFBa0IsRUFBQ3Z0QixFQUFFLENBQUMsQ0FBQyxVQUFTM0wsQ0FBVCxFQUFXO0FBQUMsVUFBRztBQUFDc0wsWUFBSSxDQUFDa0ssS0FBTCxDQUFXeFYsQ0FBWDtBQUFjLE9BQWxCLENBQWtCLE9BQU1BLENBQU4sRUFBUTtBQUFDLGVBQU0sQ0FBQyxDQUFQO0FBQVM7O0FBQUEsYUFBTSxDQUFDLENBQVA7QUFBUyxLQUExRCxFQUEyRHVCLENBQTNELENBQUQ7QUFBbEcsR0FBNWpCO0FBQUEsTUFBK3RCaTdCLEVBQUUsR0FBQztBQUFDN21CLFdBQU8sRUFBQ2pMLEVBQVQ7QUFBWWdMLFFBQUksRUFBQ2hMLEVBQWpCO0FBQW9Ca0wsVUFBTSxFQUFDbEwsRUFBM0I7QUFBOEJ1eEIsZUFBVyxFQUFDLENBQUMsQ0FBM0M7QUFBNkN6a0IsZUFBVyxFQUFDLENBQUM7QUFBMUQsR0FBbHVCOztBQUEreEIsV0FBU2lsQixFQUFULENBQVl6OEIsQ0FBWixFQUFjO0FBQUMsUUFBRyxDQUFDd0IsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFMLEVBQVMsT0FBTSxDQUFDLENBQVA7QUFBUyxRQUFHQSxDQUFDLENBQUMrQixNQUFGLEdBQVMsQ0FBWixFQUFjLE1BQU0sSUFBSW9SLEVBQUosQ0FBTyw0RUFBUCxDQUFOO0FBQTJGLFdBQU0sQ0FBQyxDQUFQO0FBQVM7O0FBQUEsTUFBSXVwQixFQUFFLEdBQUM7QUFBQzlvQixZQUFRLEVBQUM7QUFBQzRsQixnQkFBVSxFQUFDLG9CQUFTeDVCLENBQVQsRUFBVztBQUFDLGVBQU0sV0FBU0EsQ0FBZjtBQUFpQixPQUF6QztBQUEwQzJ3QixhQUFPLEVBQUNwdkI7QUFBbEQsS0FBVjtBQUErRHNTLFlBQVEsRUFBQ3RMLEVBQUUsQ0FBQztBQUFDMnZCLGlCQUFXLEVBQUMzMkIsQ0FBYjtBQUFlcTJCLFlBQU0sRUFBQ3IyQixDQUF0QjtBQUF3Qms0QixpQkFBVyxFQUFDbHdCLEVBQXBDO0FBQXVDd3RCLGFBQU8sRUFBQzBGO0FBQS9DLEtBQUQsRUFBb0RGLEVBQXBELENBQTFFO0FBQWtJNW9CLFlBQVEsRUFBQzZvQjtBQUEzSSxHQUFQO0FBQUEsTUFBc0pHLEVBQUUsR0FBQztBQUFDL29CLFlBQVEsRUFBQztBQUFDNGxCLGdCQUFVLEVBQUMsb0JBQVN4NUIsQ0FBVCxFQUFXO0FBQUMsZUFBTSxXQUFTQSxDQUFmO0FBQWlCLE9BQXpDO0FBQTBDZzZCLGlCQUFXLEVBQUN6d0IsRUFBdEQ7QUFBeURzdEIsZ0JBQVUsRUFBQ3QxQixDQUFwRTtBQUFzRTQxQixjQUFRLEVBQUMsa0JBQVNuM0IsQ0FBVCxFQUFXO0FBQUMsWUFBRyxDQUFDd0IsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFMLEVBQVMsT0FBTSxDQUFDLENBQVA7QUFBUyxZQUFHQSxDQUFDLENBQUMrQixNQUFGLEdBQVMsQ0FBVCxJQUFZL0IsQ0FBQyxDQUFDK0IsTUFBRixHQUFTLENBQXhCLEVBQTBCLE1BQU0sSUFBSW9SLEVBQUosQ0FBTyw4RkFBUCxDQUFOO0FBQTZHLGVBQU0sQ0FBQyxDQUFQO0FBQVM7QUFBN1AsS0FBVjtBQUF5UVUsWUFBUSxFQUFDdEwsRUFBRSxDQUFDO0FBQUNreEIsaUJBQVcsRUFBQ2x3QixFQUFiO0FBQWdCd3RCLGFBQU8sRUFBQzBGLEVBQXhCO0FBQTJCeEMsb0JBQWMsRUFBQzF3QixFQUExQztBQUE2QzJ3QixzQkFBZ0IsRUFBQ3h3QixFQUE5RDtBQUFpRXl3Qix1QkFBaUIsRUFBQ3p3QjtBQUFuRixLQUFELEVBQXdGNnlCLEVBQXhGLENBQXBSO0FBQWdYNW9CLFlBQVEsRUFBQzZvQjtBQUF6WCxHQUF6SjtBQUFBLE1BQXNoQkksRUFBRSxHQUFDO0FBQUNocEIsWUFBUSxFQUFDO0FBQUM0bEIsZ0JBQVUsRUFBQyxvQkFBU3g1QixDQUFULEVBQVc7QUFBQyxlQUFNLGVBQWFBLENBQW5CO0FBQXFCLE9BQTdDO0FBQThDMndCLGFBQU8sRUFBQ3B2QixDQUF0RDtBQUF3RDYxQixjQUFRLEVBQUM3MUI7QUFBakUsS0FBVjtBQUE4RXNTLFlBQVEsRUFBQ3RMLEVBQUUsQ0FBQztBQUFDa3hCLGlCQUFXLEVBQUNsd0IsRUFBYjtBQUFnQnd0QixhQUFPLEVBQUMwRjtBQUF4QixLQUFELEVBQTZCRixFQUE3QixDQUF6RjtBQUEwSDVvQixZQUFRLEVBQUM2b0I7QUFBbkksR0FBemhCO0FBQUEsTUFBZ3FCSyxFQUFFLEdBQUM7QUFBQ2pwQixZQUFRLEVBQUM7QUFBQzRsQixnQkFBVSxFQUFDLG9CQUFTeDVCLENBQVQsRUFBVztBQUFDLGVBQU0sZUFBYUEsQ0FBbkI7QUFBcUIsT0FBN0M7QUFBOEMyd0IsYUFBTyxFQUFDcHZCLENBQXREO0FBQXdEODRCLGFBQU8sRUFBQzl3QjtBQUFoRSxLQUFWO0FBQThFc0ssWUFBUSxFQUFDdEwsRUFBRSxDQUFDO0FBQUNneUIsa0JBQVksRUFBQ2h4QixFQUFkO0FBQWlCcXVCLFlBQU0sRUFBQ3IyQixDQUF4QjtBQUEwQms0QixpQkFBVyxFQUFDbHdCLEVBQXRDO0FBQXlDd3RCLGFBQU8sRUFBQzBGO0FBQWpELEtBQUQsRUFBc0RGLEVBQXRELENBQXpGO0FBQW1KNW9CLFlBQVEsRUFBQzZvQjtBQUE1SixHQUFucUI7QUFBQSxNQUFtMEJNLEVBQUUsR0FBQztBQUFDbHBCLFlBQVEsRUFBQztBQUFDNGxCLGdCQUFVLEVBQUMsb0JBQVN4NUIsQ0FBVCxFQUFXO0FBQUMsZUFBTSxXQUFTQSxDQUFmO0FBQWlCLE9BQXpDO0FBQTBDeTZCLFVBQUksRUFBQ2x4QixFQUEvQztBQUFrRG10QixVQUFJLEVBQUNuMUI7QUFBdkQsS0FBVjtBQUFvRXNTLFlBQVEsRUFBQ3RMLEVBQUUsQ0FBQztBQUFDa3hCLGlCQUFXLEVBQUNsd0IsRUFBYjtBQUFnQnd0QixhQUFPLEVBQUMwRjtBQUF4QixLQUFELEVBQTZCRixFQUE3QixDQUEvRTtBQUFnSDVvQixZQUFRLEVBQUM2b0I7QUFBekgsR0FBdDBCO0FBQUEsTUFBbThCTyxFQUFFLEdBQUM7QUFBQ25wQixZQUFRLEVBQUM7QUFBQyttQixnQkFBVSxFQUFDcHhCO0FBQVosS0FBVjtBQUEwQnNLLFlBQVEsRUFBQ3RMLEVBQUUsQ0FBQztBQUFDcXlCLGdCQUFVLEVBQUNseEIsRUFBWjtBQUFlbXhCLGtCQUFZLEVBQUN0NUI7QUFBNUIsS0FBRCxFQUFnQ2c3QixFQUFoQyxDQUFyQztBQUF5RTVvQixZQUFRLEVBQUNwTCxFQUFFLENBQUM7QUFBQ3N5QixrQkFBWSxFQUFDO0FBQWQsS0FBRCxFQUFtQjJCLEVBQW5CO0FBQXBGLEdBQXQ4QjtBQUFBLE1BQWtqQ1EsRUFBRSxHQUFDO0FBQUNwcEIsWUFBUSxFQUFDO0FBQUNnbkIsZ0JBQVUsRUFBQ2x4QjtBQUFaLEtBQVY7QUFBMEJtSyxZQUFRLEVBQUN0TCxFQUFFLENBQUM7QUFBQ3N5QixrQkFBWSxFQUFDdDVCO0FBQWQsS0FBRCxFQUFrQmc3QixFQUFsQixDQUFyQztBQUEyRDVvQixZQUFRLEVBQUNwTCxFQUFFLENBQUM7QUFBQ3N5QixrQkFBWSxFQUFDO0FBQWQsS0FBRCxFQUFtQjJCLEVBQW5CO0FBQXRFLEdBQXJqQzs7QUFBbXBDLFdBQVNTLEVBQVQsQ0FBWWo5QixDQUFaLEVBQWM7QUFBQyxXQUFPcUosRUFBRSxDQUFDO0FBQUN1SyxjQUFRLEVBQUNyTCxFQUFFLENBQUM7QUFBQ21RLGlCQUFTLEVBQUMvTSxFQUFFLENBQUMsQ0FBQ2xDLEVBQUQsRUFBSUYsRUFBSixDQUFEO0FBQWIsT0FBRCxFQUF5QnZKLENBQUMsQ0FBQzRULFFBQTNCO0FBQVosS0FBRCxFQUFtRDVULENBQW5ELENBQVQ7QUFBK0Q7O0FBQUEsTUFBSWs5QixFQUFFLEdBQUM7QUFBQ0Msc0JBQWtCLEVBQUMsQ0FBQyxNQUFELEVBQVEsTUFBUixFQUFlLFVBQWYsRUFBMEIsVUFBMUIsRUFBcUMsTUFBckMsQ0FBcEI7QUFBaUVDLFlBQVEsRUFBQ1YsRUFBMUU7QUFBNkVXLG9CQUFnQixFQUFDSixFQUFFLENBQUNQLEVBQUQsQ0FBaEc7QUFBcUdZLFlBQVEsRUFBQ1gsRUFBOUc7QUFBaUhZLG9CQUFnQixFQUFDTixFQUFFLENBQUNOLEVBQUQsQ0FBcEk7QUFBeUlhLGdCQUFZLEVBQUNaLEVBQXRKO0FBQXlKYSx3QkFBb0IsRUFBQ1IsRUFBRSxDQUFDTCxFQUFELENBQWhMO0FBQXFMYyxnQkFBWSxFQUFDYixFQUFsTTtBQUFxTWMsd0JBQW9CLEVBQUNWLEVBQUUsQ0FBQ0osRUFBRCxDQUE1TjtBQUFpT2UsWUFBUSxFQUFDZCxFQUExTztBQUE2T2Usb0JBQWdCLEVBQUNaLEVBQUUsQ0FBQ0gsRUFBRCxDQUFoUTtBQUFxUWdCLGFBQVMsRUFBQ2YsRUFBL1E7QUFBa1JnQixxQkFBaUIsRUFBQ2QsRUFBRSxDQUFDRixFQUFELENBQXRTO0FBQTJTaUIsY0FBVSxFQUFDaEIsRUFBdFQ7QUFBeVRpQixzQkFBa0IsRUFBQ2hCLEVBQUUsQ0FBQ0QsRUFBRCxDQUE5VTtBQUFtVmtCLGVBQVcsRUFBQztBQUFDdHFCLGNBQVEsRUFBQztBQUFDNGMsWUFBSSxFQUFDanZCO0FBQU47QUFBVixLQUEvVjtBQUFtWDQ4QixlQUFXLEVBQUM7QUFBQ3ZxQixjQUFRLEVBQUM7QUFBQ29qQixnQkFBUSxFQUFDenRCO0FBQVY7QUFBVixLQUEvWDtBQUF3WjYwQixjQUFVLEVBQUM7QUFBQ3hxQixjQUFRLEVBQUM7QUFBQ29qQixnQkFBUSxFQUFDenRCO0FBQVY7QUFBVjtBQUFuYSxHQUFQOztBQUFvYyxXQUFTODBCLEVBQVQsQ0FBWXIrQixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFJSSxDQUFDLEdBQUN3SyxFQUFFLENBQUM3SyxDQUFDLENBQUMwWSxTQUFILENBQVI7QUFBc0IsUUFBRyxDQUFDclksQ0FBSixFQUFNLE1BQU0sSUFBSThTLEVBQUosQ0FBTyxvRUFBUCxDQUFOOztBQUFtRixRQUFJNVMsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU0YsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsQ0FBQ2krQixjQUFGLElBQW1CaitCLENBQUMsQ0FBQ2srQixlQUFGLEVBQW5CLEVBQXVDQyxFQUFFLENBQUN4K0IsQ0FBRCxFQUFHQyxDQUFILENBQXpDO0FBQStDLEtBQWpFOztBQUFrRStLLE1BQUUsQ0FBQzNLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQmsrQixFQUFFLENBQUMzMkIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFFBQUUsQ0FBQzdLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRjtBQUFnQixLQUFwQyxDQUFoQjtBQUF1RDs7QUFBQSxNQUFJbStCLEVBQUUsR0FBQztBQUFDLGVBQVE7QUFBQ0Msa0JBQVksRUFBQyxzQkFBUzMrQixDQUFULEVBQVc7QUFBQyxlQUFPLEtBQUksR0FBRTI1QixFQUFFLENBQUMsR0FBRzl2QixNQUFILENBQVVxckIsRUFBRSxDQUFDbDFCLENBQUMsQ0FBQ3c1QixVQUFILENBQVosRUFBMkIsTUFBM0IsQ0FBRCxDQUFSLEVBQThDeDVCLENBQTlDLENBQVA7QUFBd0QsT0FBbEY7QUFBbUYyNkIsZ0JBQVUsRUFBQztBQUE5RixLQUFUO0FBQWtKaUUsU0FBSyxFQUFDO0FBQUNELGtCQUFZLEVBQUMsc0JBQVMzK0IsQ0FBVCxFQUFXO0FBQUMsZUFBTyxJQUFJMDZCLEVBQUosQ0FBTzE2QixDQUFQLENBQVA7QUFBaUIsT0FBM0M7QUFBNEMyNkIsZ0JBQVUsRUFBQztBQUF2RCxLQUF4SjtBQUF3UGtFLFVBQU0sRUFBQztBQUFDRixrQkFBWSxFQUFDLHNCQUFTMytCLENBQVQsRUFBVztBQUFDLGVBQU8sSUFBSTg2QixFQUFKLENBQU85NkIsQ0FBUCxDQUFQO0FBQWlCLE9BQTNDO0FBQTRDMjZCLGdCQUFVLEVBQUM7QUFBdkQ7QUFBL1AsR0FBUDs7QUFBMFcsV0FBUzZELEVBQVQsQ0FBWXgrQixDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQyxRQUFJSSxDQUFDLEdBQUNxK0IsRUFBRSxDQUFDeitCLENBQUQsQ0FBUjtBQUFBLFFBQVlNLENBQUMsR0FBQ0YsQ0FBQyxDQUFDcytCLFlBQWhCO0FBQUEsUUFBNkJsK0IsQ0FBQyxHQUFDSixDQUFDLENBQUNzNkIsVUFBakM7QUFBQSxRQUE0Q2g2QixDQUFDLEdBQUNKLENBQUMsQ0FBQ1AsQ0FBRCxDQUEvQztBQUFBLFFBQW1EYSxDQUFDLEdBQUMsc0JBQXNCbUIsSUFBdEIsQ0FBMkJnUCxFQUFFLENBQUNsQixFQUE5QixDQUFyRDtBQUFBLFFBQXVGL08sQ0FBQyxHQUFDaVEsRUFBRSxDQUFDZixFQUFILENBQU1tRSxHQUFOLElBQVcsYUFBV3BELEVBQUUsQ0FBQ2hCLFFBQWxIO0FBQTJIaUIsTUFBRSxJQUFFLENBQUNwUSxDQUFELElBQUliLENBQUMsQ0FBQ3dYLFdBQU4sS0FBb0IsYUFBV3hHLEVBQUUsQ0FBQ2hCLFFBQWQsSUFBd0JqUCxDQUE1QyxDQUFKLEdBQW1EcTdCLEVBQUUsQ0FBQzNnQixJQUFILENBQVF6YixDQUFSLEVBQVVTLENBQVYsRUFBWUUsQ0FBWixDQUFuRCxHQUFrRW82QixFQUFFLENBQUN0ZixJQUFILENBQVF6YixDQUFSLEVBQVVDLENBQVYsRUFBWVUsQ0FBWixDQUFsRTtBQUFpRjs7QUFBQSxNQUFJODlCLEVBQUUsR0FBQyxFQUFQO0FBQVUsTUFBSUssRUFBRSxHQUFDenJCLEVBQUUsQ0FBQyxDQUFDalQsTUFBTSxDQUFDb2MsTUFBUCxDQUFjO0FBQUM1TyxhQUFTLEVBQUMsSUFBWDtBQUFnQm14Qix1QkFBbUIsRUFBQyw2QkFBUy8rQixDQUFULEVBQVc7QUFBQyxVQUFHLENBQUNBLENBQUMsQ0FBQ3c1QixVQUFILElBQWUsQ0FBQy90QixFQUFFLENBQUN5eEIsRUFBRSxDQUFDQyxrQkFBSixDQUFGLENBQTBCbjlCLENBQUMsQ0FBQ3c1QixVQUE1QixDQUFuQixFQUEyRCxNQUFNLElBQUlybUIsRUFBSixDQUFPLGdDQUFnQ3RKLE1BQWhDLENBQXVDcXpCLEVBQUUsQ0FBQ0Msa0JBQUgsQ0FBc0IzeEIsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBdkMsRUFBd0UsR0FBeEUsQ0FBUCxDQUFOO0FBQTJGNnlCLFFBQUUsQ0FBQ3IrQixDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdrOUIsRUFBRSxDQUFDLFNBQVNyekIsTUFBVCxDQUFnQnFyQixFQUFFLENBQUNsMUIsQ0FBQyxDQUFDdzVCLFVBQUgsQ0FBbEIsRUFBaUMsUUFBakMsQ0FBRCxDQUFMLEVBQWtELDJCQUFsRCxDQUFMLEVBQW9GLFNBQXBGLENBQUY7QUFBaUcsS0FBdlM7QUFBd1N3RixlQUFXLEVBQUMscUJBQVNoL0IsQ0FBVCxFQUFXO0FBQUMsVUFBRyxDQUFDQSxDQUFDLENBQUN3NUIsVUFBSCxJQUFlLENBQUMvdEIsRUFBRSxDQUFDeXhCLEVBQUUsQ0FBQ0Msa0JBQUosQ0FBRixDQUEwQm45QixDQUFDLENBQUN3NUIsVUFBNUIsQ0FBbkIsRUFBMkQsTUFBTSxJQUFJcm1CLEVBQUosQ0FBTyxnQ0FBZ0N0SixNQUFoQyxDQUF1Q3F6QixFQUFFLENBQUNDLGtCQUFILENBQXNCM3hCLElBQXRCLENBQTJCLElBQTNCLENBQXZDLEVBQXdFLEdBQXhFLENBQVAsQ0FBTjtBQUEyRmd6QixRQUFFLENBQUN4K0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQyxPQUFPcnpCLE1BQVAsQ0FBY3FyQixFQUFFLENBQUNsMUIsQ0FBQyxDQUFDdzVCLFVBQUgsQ0FBaEIsQ0FBRCxDQUFMLEVBQXVDLG1CQUF2QyxDQUFMLEVBQWlFLFNBQWpFLENBQUY7QUFBOEUsS0FBcGlCO0FBQXFpQnVFLHFCQUFpQixFQUFDLDJCQUFTLzlCLENBQVQsRUFBVztBQUFDcStCLFFBQUUsQ0FBQ3IrQixDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdrOUIsRUFBRSxDQUFDYSxpQkFBTixFQUF3Qix5QkFBeEIsQ0FBTCxFQUF3RCxPQUF4RCxDQUFGO0FBQW1FLEtBQXRvQjtBQUF1b0JELGFBQVMsRUFBQyxtQkFBUzk5QixDQUFULEVBQVc7QUFBQ3crQixRQUFFLENBQUN4K0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQ1ksU0FBTixFQUFnQixpQkFBaEIsQ0FBTCxFQUF3QyxPQUF4QyxDQUFGO0FBQW1ELEtBQWh0QjtBQUFpdEJHLHNCQUFrQixFQUFDLDRCQUFTaitCLENBQVQsRUFBVztBQUFDcStCLFFBQUUsQ0FBQ3IrQixDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdrOUIsRUFBRSxDQUFDZSxrQkFBTixFQUF5QiwwQkFBekIsQ0FBTCxFQUEwRCxRQUExRCxDQUFGO0FBQXNFLEtBQXR6QjtBQUF1ekJELGNBQVUsRUFBQyxvQkFBU2grQixDQUFULEVBQVc7QUFBQ3crQixRQUFFLENBQUN4K0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQ2MsVUFBTixFQUFpQixrQkFBakIsQ0FBTCxFQUEwQyxRQUExQyxDQUFGO0FBQXNELEtBQXA0QjtBQUFxNEIxcUIsV0FBTyxFQUFDLG1CQUFVO0FBQUNDLFFBQUUsQ0FBQ2tyQixFQUFELENBQUY7QUFBTztBQUEvNUIsR0FBZCxDQUFELEVBQWk3QnIrQixNQUFNLENBQUNvYyxNQUFQLENBQWM7QUFBQzVPLGFBQVMsRUFBQyxJQUFYO0FBQWdCc3dCLGVBQVcsRUFBQyxxQkFBU2wrQixDQUFULEVBQVc7QUFBQyxhQUFPczFCLEVBQUUsQ0FBQyxtQ0FBRCxFQUFxQztBQUFDOUUsWUFBSSxFQUFDLENBQUN4d0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQ2dCLFdBQU4sRUFBa0IsbUJBQWxCLENBQUwsRUFBNkMxTjtBQUFuRCxPQUFyQyxDQUFUO0FBQXdHLEtBQWhKO0FBQWlKMk4sZUFBVyxFQUFDLHFCQUFTbitCLENBQVQsRUFBVztBQUFDLGFBQU9zMUIsRUFBRSxDQUFDLG1DQUFELEVBQXFDO0FBQUM3RSxpQkFBUyxFQUFDLENBQUN6d0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQ2lCLFdBQU4sRUFBa0IsbUJBQWxCLENBQUwsRUFBNkNuSDtBQUF4RCxPQUFyQyxDQUFUO0FBQWlILEtBQTFSO0FBQTJSb0gsY0FBVSxFQUFDLG9CQUFTcCtCLENBQVQsRUFBVztBQUFDLGFBQU9zMUIsRUFBRSxDQUFDLGtDQUFELEVBQW9DO0FBQUM3RSxpQkFBUyxFQUFDLENBQUN6d0IsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHazlCLEVBQUUsQ0FBQ2tCLFVBQU4sRUFBaUIsa0JBQWpCLENBQUwsRUFBMkNwSDtBQUF0RCxPQUFwQyxDQUFUO0FBQThHO0FBQWhhLEdBQWQsQ0FBajdCLENBQUQsQ0FBVDtBQUFBLE1BQTgyQ2lJLEVBQUUsR0FBQyx1QkFBajNDOztBQUF5NEMsV0FBU0MsRUFBVCxDQUFZbC9CLENBQVosRUFBY0MsQ0FBZCxFQUFnQkksQ0FBaEIsRUFBa0I7QUFBQyxRQUFJRSxDQUFDLEdBQUN1SyxRQUFRLENBQUNpSyxhQUFULENBQXVCLEdBQXZCLENBQU47QUFBa0N4VSxLQUFDLENBQUMwVSxZQUFGLENBQWUsTUFBZixFQUFzQixHQUF0QjtBQUEyQixRQUFJeFUsQ0FBQyxHQUFDcUssUUFBUSxDQUFDaUssYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQW9DLFdBQU90VSxDQUFDLENBQUN3VSxZQUFGLENBQWUsS0FBZixFQUFxQmhWLENBQXJCLEdBQXdCUSxDQUFDLENBQUN3VSxZQUFGLENBQWUsT0FBZixFQUF1QjVVLENBQXZCLENBQXhCLEVBQWtESSxDQUFDLENBQUN3VSxZQUFGLENBQWUsS0FBZixFQUFxQjVVLENBQXJCLENBQWxELEVBQTBFTCxDQUFDLENBQUNtL0Isd0JBQUYsSUFBNEIxK0IsQ0FBQyxDQUFDd1UsWUFBRixDQUFlLFFBQWYsRUFBd0IsQ0FBQ2hWLENBQUMsQ0FBQ2lDLE9BQUYsQ0FBVSxNQUFWLEVBQWlCLFlBQWpCLENBQUQsRUFBZ0NqQyxDQUFDLENBQUNpQyxPQUFGLENBQVUsTUFBVixFQUFpQixZQUFqQixDQUFoQyxFQUFnRXNKLElBQWhFLENBQXFFLElBQXJFLENBQXhCLENBQXRHLEVBQTBNakwsQ0FBQyxDQUFDNFUsV0FBRixDQUFjMVUsQ0FBZCxDQUExTSxFQUEyTkYsQ0FBbE87QUFBb087O0FBQUEsV0FBUzYrQixFQUFULENBQVlwL0IsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsV0FBT21MLEVBQUUsQ0FBQ29CLEVBQUUsQ0FBQztBQUFDNnlCLGFBQU8sRUFBQ3IvQixDQUFUO0FBQVdzL0IsaUJBQVcsRUFBQ2x1QixFQUF2QjtBQUEwQm9qQixhQUFPLEVBQUN2aEIsRUFBRSxFQUFwQztBQUF1Q3NzQixhQUFPLEVBQUM1dUIsRUFBRSxHQUFDQyxRQUFRLENBQUNxUCxRQUFaLEdBQXFCclAsUUFBUSxDQUFDMlA7QUFBN0UsS0FBRCxFQUFzRnRnQixDQUFDLElBQUU7QUFBQzBZLFVBQUksRUFBQzFZO0FBQU4sS0FBekYsQ0FBSCxDQUFUO0FBQWdIOztBQUFBLE1BQUl1L0IsRUFBRSxHQUFDLENBQUMsT0FBRCxFQUFTLE9BQVQsQ0FBUDtBQUFBLE1BQXlCQyxFQUFFLEdBQUMsQ0FBQyxRQUFELEVBQVUsTUFBVixDQUE1QjtBQUFBLE1BQThDQyxFQUFFLEdBQUMsQ0FBQyxJQUFELEVBQU0sUUFBTixDQUFqRDtBQUFBLE1BQWlFQyxFQUFFLEdBQUMsQ0FBQyxTQUFELEVBQVcsVUFBWCxDQUFwRTtBQUFBLE1BQTJGQyxFQUFFLEdBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FBOUY7QUFBQSxNQUErR0MsRUFBRSxHQUFDO0FBQUNDLDBCQUFzQixFQUFDO0FBQUNsc0IsY0FBUSxFQUFDO0FBQUM4RSxpQkFBUyxFQUFDL00sRUFBRSxDQUFDLENBQUNsQyxFQUFELEVBQUlGLEVBQUosQ0FBRCxDQUFiO0FBQXVCd08sdUJBQWUsRUFBQ3hPO0FBQXZDLE9BQVY7QUFBcURzSyxjQUFRLEVBQUM7QUFBQ3ZVLFlBQUksRUFBQ21NLEVBQUUsQ0FBQyt6QixFQUFELENBQVI7QUFBYTdtQixZQUFJLEVBQUNsTixFQUFFLENBQUNtMEIsRUFBRCxDQUFwQjtBQUF5QlQsZ0NBQXdCLEVBQUMzMUI7QUFBbEQsT0FBOUQ7QUFBb0htSyxjQUFRLEVBQUM7QUFBQ3JVLFlBQUksRUFBQ2tnQyxFQUFFLENBQUMsQ0FBRCxDQUFSO0FBQVlMLGdDQUF3QixFQUFDLENBQUM7QUFBdEM7QUFBN0gsS0FBeEI7QUFBK0xZLGNBQVUsRUFBQztBQUFDbnNCLGNBQVEsRUFBQztBQUFDbUUsdUJBQWUsRUFBQ3hPO0FBQWpCLE9BQVY7QUFBK0JzSyxjQUFRLEVBQUM7QUFBQzhFLFlBQUksRUFBQ2xOLEVBQUUsQ0FBQ20wQixFQUFEO0FBQVI7QUFBeEMsS0FBMU07QUFBaVFJLG9CQUFnQixFQUFDO0FBQUNwc0IsY0FBUSxFQUFDO0FBQUM4RSxpQkFBUyxFQUFDL00sRUFBRSxDQUFDLENBQUNsQyxFQUFELEVBQUlGLEVBQUosQ0FBRCxDQUFiO0FBQXVCd08sdUJBQWUsRUFBQ3hPO0FBQXZDLE9BQVY7QUFBcURzSyxjQUFRLEVBQUM7QUFBQ3ZVLFlBQUksRUFBQ21NLEVBQUUsQ0FBQyt6QixFQUFELENBQVI7QUFBYTUvQixhQUFLLEVBQUM2TCxFQUFFLENBQUNnMEIsRUFBRCxDQUFyQjtBQUEwQlEsYUFBSyxFQUFDeDBCLEVBQUUsQ0FBQ2kwQixFQUFELENBQWxDO0FBQXVDNWdDLGFBQUssRUFBQzJNLEVBQUUsQ0FBQ2swQixFQUFELENBQS9DO0FBQW9EaG5CLFlBQUksRUFBQ2xOLEVBQUUsQ0FBQ20wQixFQUFELENBQTNEO0FBQWdFVCxnQ0FBd0IsRUFBQzMxQjtBQUF6RixPQUE5RDtBQUEySm1LLGNBQVEsRUFBQztBQUFDclUsWUFBSSxFQUFDa2dDLEVBQUUsQ0FBQyxDQUFELENBQVI7QUFBWTUvQixhQUFLLEVBQUM2L0IsRUFBRSxDQUFDLENBQUQsQ0FBcEI7QUFBd0JRLGFBQUssRUFBQ1AsRUFBRSxDQUFDLENBQUQsQ0FBaEM7QUFBb0M1Z0MsYUFBSyxFQUFDNmdDLEVBQUUsQ0FBQyxDQUFELENBQTVDO0FBQWdEUixnQ0FBd0IsRUFBQyxDQUFDO0FBQTFFO0FBQXBLLEtBQWxSO0FBQW9nQmUsUUFBSSxFQUFDO0FBQUN0c0IsY0FBUSxFQUFDO0FBQUNtRSx1QkFBZSxFQUFDeE87QUFBakIsT0FBVjtBQUErQnNLLGNBQVEsRUFBQztBQUFDOEUsWUFBSSxFQUFDbE4sRUFBRSxDQUFDbTBCLEVBQUQ7QUFBUjtBQUF4QztBQUF6Z0IsR0FBbEg7O0FBQW1yQixXQUFTTyxFQUFULENBQVluZ0MsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLEdBQUc0SixNQUFILENBQVUwSCxFQUFFLENBQUNpQixPQUFiLEVBQXFCLEdBQXJCLEVBQTBCM0ksTUFBMUIsQ0FBaUM3SixDQUFDLENBQUMrWCxlQUFuQyxFQUFtRCxTQUFuRCxDQUFOO0FBQW9FLGFBQU85RSxFQUFFLEVBQVQsS0FBY2hULENBQUMsSUFBRSxJQUFJNEosTUFBSixDQUFXdTFCLEVBQUUsQ0FBQyxLQUFELEVBQU9wL0IsQ0FBQyxDQUFDMlksSUFBVCxDQUFiLENBQWpCLEdBQStDbkUsRUFBRSxDQUFDdlUsQ0FBRCxFQUFHLDJCQUFILEVBQStCZy9CLEVBQS9CLENBQWpEO0FBQW9GOztBQUFBLFdBQVNtQixFQUFULENBQVlwZ0MsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLEdBQUc0SixNQUFILENBQVUwSCxFQUFFLENBQUNpQixPQUFiLEVBQXFCLEdBQXJCLEVBQTBCM0ksTUFBMUIsQ0FBaUM3SixDQUFDLENBQUMrWCxlQUFuQyxFQUFtRCxPQUFuRCxDQUFOO0FBQWtFLGFBQU85RSxFQUFFLEVBQVQsS0FBY2hULENBQUMsSUFBRSxJQUFJNEosTUFBSixDQUFXdTFCLEVBQUUsQ0FBQyxLQUFELEVBQU9wL0IsQ0FBQyxDQUFDMlksSUFBVCxDQUFiLENBQWpCLEdBQStDbkUsRUFBRSxDQUFDdlUsQ0FBRCxFQUFHLDRCQUFILEVBQWdDZy9CLEVBQWhDLENBQWpEO0FBQXFGOztBQUFBLE1BQUlvQixFQUFFLEdBQUMsRUFBUDtBQUFVLE1BQUlDLEVBQUUsR0FBQ2p0QixFQUFFLENBQUMsQ0FBQ2pULE1BQU0sQ0FBQ29jLE1BQVAsQ0FBYztBQUFDNU8sYUFBUyxFQUFDLElBQVg7QUFBZ0JreUIsMEJBQXNCLEVBQUMsZ0NBQVM5L0IsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDNEssRUFBRSxDQUFDN0ssQ0FBQyxDQUFDMFksU0FBSCxDQUFSO0FBQXNCLFVBQUcsQ0FBQ3pZLENBQUosRUFBTSxNQUFNLElBQUlrVCxFQUFKLENBQU8saUZBQVAsQ0FBTjtBQUFnR3lCLFFBQUUsQ0FBQzVVLENBQUQsRUFBR0MsQ0FBSCxFQUFLO0FBQUM4WCx1QkFBZSxFQUFDLHdCQUFqQjtBQUEwQ3pZLFlBQUksRUFBQyxXQUEvQztBQUEyRDYvQixnQ0FBd0IsRUFBQztBQUFwRixPQUFMLENBQUY7O0FBQStILFVBQUk5K0IsQ0FBQyxHQUFDLFVBQVNMLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxhQUFhNEosTUFBYixDQUFvQjdKLENBQUMsQ0FBQ1YsSUFBdEIsRUFBMkIsa0JBQTNCLENBQU47QUFBcUQsZUFBTSxHQUFHdUssTUFBSCxDQUFVMEgsRUFBRSxDQUFDa0IsV0FBYixFQUF5QixXQUF6QixFQUFzQzVJLE1BQXRDLENBQTZDNUosQ0FBN0MsQ0FBTjtBQUFzRCxPQUF2SCxDQUF3SEQsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHNi9CLEVBQUUsQ0FBQ0Msc0JBQU4sRUFBNkIsZ0NBQTdCLENBQTVILENBQU47QUFBQSxVQUFrTXYvQixDQUFDLEdBQUMyK0IsRUFBRSxDQUFDbC9CLENBQUQsRUFBR0ssQ0FBSCxFQUFLLGVBQUwsQ0FBdE07O0FBQTROSixPQUFDLENBQUNrVixXQUFGLENBQWM1VSxDQUFkOztBQUFpQixVQUFJRSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTUixDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDcStCLGNBQUYsSUFBbUI2QixFQUFFLENBQUNuZ0MsQ0FBRCxDQUFyQjtBQUF5QixPQUEzQzs7QUFBNENnTCxRQUFFLENBQUN6SyxDQUFELEVBQUcsT0FBSCxFQUFXRSxDQUFYLENBQUYsRUFBZ0I0L0IsRUFBRSxDQUFDdjRCLElBQUgsQ0FBUyxZQUFVO0FBQUNvRCxVQUFFLENBQUMzSyxDQUFELEVBQUcsT0FBSCxFQUFXRSxDQUFYLENBQUYsRUFBZ0JSLENBQUMsQ0FBQ21WLFdBQUYsQ0FBYzdVLENBQWQsQ0FBaEI7QUFBaUMsT0FBckQsQ0FBaEI7QUFBd0UsS0FBL29CO0FBQWdwQncvQixjQUFVLEVBQUMsb0JBQVMvL0IsQ0FBVCxFQUFXO0FBQUNtZ0MsUUFBRSxDQUFDbmdDLENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBRzYvQixFQUFFLENBQUNFLFVBQU4sRUFBaUIsb0JBQWpCLENBQUwsQ0FBRjtBQUErQyxLQUF0dEI7QUFBdXRCQyxvQkFBZ0IsRUFBQywwQkFBU2hnQyxDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUM0SyxFQUFFLENBQUM3SyxDQUFDLENBQUMwWSxTQUFILENBQVI7QUFBc0IsVUFBRyxDQUFDelksQ0FBSixFQUFNLE1BQU0sSUFBSWtULEVBQUosQ0FBTywyRUFBUCxDQUFOO0FBQTBGeUIsUUFBRSxDQUFDNVUsQ0FBRCxFQUFHQyxDQUFILEVBQUs7QUFBQzhYLHVCQUFlLEVBQUMsd0JBQWpCO0FBQTBDelksWUFBSSxFQUFDLFdBQS9DO0FBQTJETSxhQUFLLEVBQUMsWUFBakU7QUFBOEVxZ0MsYUFBSyxFQUFDLFlBQXBGO0FBQWlHbmhDLGFBQUssRUFBQyxZQUF2RztBQUFvSHFnQyxnQ0FBd0IsRUFBQztBQUE3SSxPQUFMLENBQUY7O0FBQXdMLFVBQUk5K0IsQ0FBQyxHQUFDLFVBQVNMLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxHQUFHNEosTUFBSCxDQUFVN0osQ0FBQyxDQUFDbEIsS0FBWixFQUFrQixHQUFsQixFQUF1QitLLE1BQXZCLENBQThCN0osQ0FBQyxDQUFDVixJQUFoQyxFQUFxQyxHQUFyQyxFQUEwQ3VLLE1BQTFDLENBQWlEN0osQ0FBQyxDQUFDSixLQUFuRCxFQUF5RCxHQUF6RCxFQUE4RGlLLE1BQTlELENBQXFFN0osQ0FBQyxDQUFDaWdDLEtBQXZFLEVBQTZFLE1BQTdFLENBQU47QUFBMkYsZUFBTSxHQUFHcDJCLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ2tCLFdBQWIsRUFBeUIsV0FBekIsRUFBc0M1SSxNQUF0QyxDQUE2QzVKLENBQTdDLENBQU47QUFBc0QsT0FBN0osQ0FBOEpELENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBRzYvQixFQUFFLENBQUNHLGdCQUFOLEVBQXVCLDBCQUF2QixDQUFsSyxDQUFOO0FBQUEsVUFBNE56L0IsQ0FBQyxHQUFDMitCLEVBQUUsQ0FBQ2wvQixDQUFELEVBQUdLLENBQUgsRUFBSyxtQkFBTCxDQUFoTzs7QUFBMFBKLE9BQUMsQ0FBQ2tWLFdBQUYsQ0FBYzVVLENBQWQ7O0FBQWlCLFVBQUlFLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNSLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNxK0IsY0FBRixJQUFtQjhCLEVBQUUsQ0FBQ3BnQyxDQUFELENBQXJCO0FBQXlCLE9BQTNDOztBQUE0Q2dMLFFBQUUsQ0FBQ3pLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQjQvQixFQUFFLENBQUN2NEIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFVBQUUsQ0FBQzNLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQlIsQ0FBQyxDQUFDbVYsV0FBRixDQUFjN1UsQ0FBZCxDQUFoQjtBQUFpQyxPQUFyRCxDQUFoQjtBQUF3RSxLQUFqNkM7QUFBazZDMi9CLFFBQUksRUFBQyxjQUFTbGdDLENBQVQsRUFBVztBQUFDb2dDLFFBQUUsQ0FBQ3BnQyxDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUc2L0IsRUFBRSxDQUFDSyxJQUFOLEVBQVcsY0FBWCxDQUFMLENBQUY7QUFBbUMsS0FBdDlDO0FBQXU5QzVzQixXQUFPLEVBQUMsbUJBQVU7QUFBQ0MsUUFBRSxDQUFDOHNCLEVBQUQsQ0FBRjtBQUFPO0FBQWovQyxHQUFkLENBQUQsQ0FBRCxDQUFUO0FBQUEsTUFBK2dERSxFQUFFLEdBQUM7QUFBQ0MseUJBQXFCLEVBQUM7QUFBQzVzQixjQUFRLEVBQUM7QUFBQzhFLGlCQUFTLEVBQUMvTSxFQUFFLENBQUMsQ0FBQ2xDLEVBQUQsRUFBSUYsRUFBSixDQUFELENBQWI7QUFBdUJrM0Isb0JBQVksRUFBQ2wzQjtBQUFwQyxPQUFWO0FBQWtEc0ssY0FBUSxFQUFDO0FBQUN2VSxZQUFJLEVBQUNtTSxFQUFFLENBQUMsQ0FBQyxPQUFELEVBQVMsT0FBVCxDQUFELENBQVI7QUFBNEI3TCxhQUFLLEVBQUM2TCxFQUFFLENBQUMsQ0FBQyxRQUFELEVBQVUsT0FBVixDQUFELENBQXBDO0FBQXlEdzBCLGFBQUssRUFBQ3gwQixFQUFFLENBQUMsQ0FBQyxNQUFELEVBQVEsT0FBUixDQUFELENBQWpFO0FBQW9GMHpCLGdDQUF3QixFQUFDMzFCO0FBQTdHLE9BQTNEO0FBQTRLbUssY0FBUSxFQUFDO0FBQUNyVSxZQUFJLEVBQUMsT0FBTjtBQUFjTSxhQUFLLEVBQUMsUUFBcEI7QUFBNkJxZ0MsYUFBSyxFQUFDLE1BQW5DO0FBQTBDZCxnQ0FBd0IsRUFBQyxDQUFDO0FBQXBFO0FBQXJMLEtBQXZCO0FBQW9SdUIsYUFBUyxFQUFDO0FBQUM5c0IsY0FBUSxFQUFDO0FBQUM2c0Isb0JBQVksRUFBQ2wzQjtBQUFkO0FBQVYsS0FBOVI7QUFBMlR5MkIsb0JBQWdCLEVBQUM7QUFBQ3BzQixjQUFRLEVBQUM7QUFBQzhFLGlCQUFTLEVBQUMvTSxFQUFFLENBQUMsQ0FBQ2xDLEVBQUQsRUFBSUYsRUFBSixDQUFELENBQWI7QUFBdUJrM0Isb0JBQVksRUFBQ2wzQjtBQUFwQyxPQUFWO0FBQWtEc0ssY0FBUSxFQUFDO0FBQUN2VSxZQUFJLEVBQUNtTSxFQUFFLENBQUMsQ0FBQyxPQUFELEVBQVMsT0FBVCxDQUFELENBQVI7QUFBNEI3TCxhQUFLLEVBQUM2TCxFQUFFLENBQUMsQ0FBQyxRQUFELEVBQVUsTUFBVixDQUFELENBQXBDO0FBQXdEdzBCLGFBQUssRUFBQ3gwQixFQUFFLENBQUMsQ0FBQyxJQUFELEVBQU0sUUFBTixDQUFELENBQWhFO0FBQWtGM00sYUFBSyxFQUFDMk0sRUFBRSxDQUFDLENBQUMsU0FBRCxFQUFXLFVBQVgsQ0FBRCxDQUExRjtBQUFtSDB6QixnQ0FBd0IsRUFBQzMxQjtBQUE1SSxPQUEzRDtBQUEyTW1LLGNBQVEsRUFBQztBQUFDclUsWUFBSSxFQUFDLE9BQU47QUFBY00sYUFBSyxFQUFDLFFBQXBCO0FBQTZCcWdDLGFBQUssRUFBQyxJQUFuQztBQUF3Q25oQyxhQUFLLEVBQUMsU0FBOUM7QUFBd0RxZ0MsZ0NBQXdCLEVBQUMsQ0FBQztBQUFsRjtBQUFwTixLQUE1VTtBQUFzbkJlLFFBQUksRUFBQztBQUFDdHNCLGNBQVEsRUFBQztBQUFDNnNCLG9CQUFZLEVBQUNsM0I7QUFBZDtBQUFWO0FBQTNuQixHQUFsaEQ7O0FBQTJxRSxXQUFTbzNCLEVBQVQsR0FBYTtBQUFDMVMsV0FBTyxJQUFFQSxPQUFPLENBQUNjLElBQVIsQ0FBYSxpRkFBYixDQUFUO0FBQXlHOztBQUFBLFdBQVM2UixFQUFULENBQVk1Z0MsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLEdBQUc0SixNQUFILENBQVUwSCxFQUFFLENBQUNpQixPQUFiLEVBQXFCLEdBQXJCLEVBQTBCM0ksTUFBMUIsQ0FBaUM3SixDQUFDLENBQUN5Z0MsWUFBbkMsRUFBZ0QsU0FBaEQsQ0FBTjtBQUFpRSxhQUFPeHRCLEVBQUUsRUFBVCxLQUFjaFQsQ0FBQyxJQUFFLElBQUk0SixNQUFKLENBQVd1MUIsRUFBRSxDQUFDLEtBQUQsQ0FBYixDQUFqQixHQUF3QzVxQixFQUFFLENBQUN2VSxDQUFELEVBQUcsK0JBQUgsRUFBbUNnL0IsRUFBbkMsQ0FBMUM7QUFBaUY7O0FBQUEsV0FBUzRCLEVBQVQsQ0FBWTdnQyxDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUMsR0FBRzRKLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ2lCLE9BQWIsRUFBcUIsR0FBckIsRUFBMEIzSSxNQUExQixDQUFpQzdKLENBQUMsQ0FBQ3lnQyxZQUFuQyxFQUFnRCxPQUFoRCxDQUFOO0FBQStELGFBQU94dEIsRUFBRSxFQUFULEtBQWNoVCxDQUFDLElBQUUsSUFBSTRKLE1BQUosQ0FBV3UxQixFQUFFLENBQUMsS0FBRCxDQUFiLENBQWpCLEdBQXdDNXFCLEVBQUUsQ0FBQ3ZVLENBQUQsRUFBRyxnQ0FBSCxFQUFvQ2cvQixFQUFwQyxDQUExQztBQUFrRjs7QUFBQSxNQUFJNkIsRUFBRSxHQUFDLEVBQVA7QUFBVSxNQUFJQyxFQUFFLEdBQUMxdEIsRUFBRSxDQUFDLENBQUNqVCxNQUFNLENBQUNvYyxNQUFQLENBQWM7QUFBQzVPLGFBQVMsRUFBQyxJQUFYO0FBQWdCNHlCLHlCQUFxQixFQUFDLCtCQUFTeGdDLENBQVQsRUFBVztBQUFDMmdDLFFBQUU7QUFBRyxVQUFJMWdDLENBQUMsR0FBQzRLLEVBQUUsQ0FBQzdLLENBQUMsQ0FBQzBZLFNBQUgsQ0FBUjtBQUFzQixVQUFHLENBQUN6WSxDQUFKLEVBQU0sTUFBTSxJQUFJa1QsRUFBSixDQUFPLG1GQUFQLENBQU47QUFBa0d5QixRQUFFLENBQUM1VSxDQUFELEVBQUdDLENBQUgsRUFBSztBQUFDd2dDLG9CQUFZLEVBQUMsb0JBQWQ7QUFBbUNuaEMsWUFBSSxFQUFDLFdBQXhDO0FBQW9ETSxhQUFLLEVBQUMsWUFBMUQ7QUFBdUVxZ0MsYUFBSyxFQUFDLFlBQTdFO0FBQTBGZCxnQ0FBd0IsRUFBQztBQUFuSCxPQUFMLENBQUY7O0FBQThKLFVBQUk5K0IsQ0FBQyxHQUFDLFVBQVNMLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxhQUFhNEosTUFBYixDQUFvQjdKLENBQUMsQ0FBQ1YsSUFBdEIsRUFBMkIsR0FBM0IsRUFBZ0N1SyxNQUFoQyxDQUF1QzdKLENBQUMsQ0FBQ0osS0FBekMsRUFBK0MsR0FBL0MsRUFBb0RpSyxNQUFwRCxDQUEyRDdKLENBQUMsQ0FBQ2lnQyxLQUE3RCxFQUFtRSxNQUFuRSxDQUFOO0FBQWlGLGVBQU0sR0FBR3AyQixNQUFILENBQVUwSCxFQUFFLENBQUNrQixXQUFiLEVBQXlCLGNBQXpCLEVBQXlDNUksTUFBekMsQ0FBZ0Q1SixDQUFoRCxDQUFOO0FBQXlELE9BQXRKLENBQXVKRCxDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUd1Z0MsRUFBRSxDQUFDQyxxQkFBTixFQUE0QixrQ0FBNUIsQ0FBM0osQ0FBTjtBQUFBLFVBQWtPamdDLENBQUMsR0FBQzIrQixFQUFFLENBQUNsL0IsQ0FBRCxFQUFHSyxDQUFILEVBQUssZ0JBQUwsQ0FBdE87O0FBQTZQSixPQUFDLENBQUNrVixXQUFGLENBQWM1VSxDQUFkOztBQUFpQixVQUFJRSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTUixDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDcStCLGNBQUYsSUFBbUJzQyxFQUFFLENBQUM1Z0MsQ0FBRCxDQUFyQjtBQUF5QixPQUEzQzs7QUFBNENnTCxRQUFFLENBQUN6SyxDQUFELEVBQUcsT0FBSCxFQUFXRSxDQUFYLENBQUYsRUFBZ0JxZ0MsRUFBRSxDQUFDaDVCLElBQUgsQ0FBUyxZQUFVO0FBQUNvRCxVQUFFLENBQUMzSyxDQUFELEVBQUcsT0FBSCxFQUFXRSxDQUFYLENBQUYsRUFBZ0JSLENBQUMsQ0FBQ21WLFdBQUYsQ0FBYzdVLENBQWQsQ0FBaEI7QUFBaUMsT0FBckQsQ0FBaEI7QUFBd0UsS0FBcnRCO0FBQXN0Qm1nQyxhQUFTLEVBQUMsbUJBQVMxZ0MsQ0FBVCxFQUFXO0FBQUMyZ0MsUUFBRSxJQUFHQyxFQUFFLENBQUM1Z0MsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHdWdDLEVBQUUsQ0FBQ0csU0FBTixFQUFnQixzQkFBaEIsQ0FBTCxDQUFQO0FBQXFELEtBQWp5QjtBQUFreUJWLG9CQUFnQixFQUFDLDBCQUFTaGdDLENBQVQsRUFBVztBQUFDMmdDLFFBQUU7QUFBRyxVQUFJMWdDLENBQUMsR0FBQzRLLEVBQUUsQ0FBQzdLLENBQUMsQ0FBQzBZLFNBQUgsQ0FBUjtBQUFzQixVQUFHLENBQUN6WSxDQUFKLEVBQU0sTUFBTSxJQUFJa1QsRUFBSixDQUFPLDhFQUFQLENBQU47QUFBNkZ5QixRQUFFLENBQUM1VSxDQUFELEVBQUdDLENBQUgsRUFBSztBQUFDd2dDLG9CQUFZLEVBQUMsb0JBQWQ7QUFBbUNuaEMsWUFBSSxFQUFDLFdBQXhDO0FBQW9ETSxhQUFLLEVBQUMsWUFBMUQ7QUFBdUVxZ0MsYUFBSyxFQUFDLFlBQTdFO0FBQTBGbmhDLGFBQUssRUFBQyxZQUFoRztBQUE2R3FnQyxnQ0FBd0IsRUFBQztBQUF0SSxPQUFMLENBQUY7O0FBQWlMLFVBQUk5K0IsQ0FBQyxHQUFDLFVBQVNMLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxHQUFHNEosTUFBSCxDQUFVN0osQ0FBQyxDQUFDbEIsS0FBWixFQUFrQixHQUFsQixFQUF1QitLLE1BQXZCLENBQThCN0osQ0FBQyxDQUFDVixJQUFoQyxFQUFxQyxHQUFyQyxFQUEwQ3VLLE1BQTFDLENBQWlEN0osQ0FBQyxDQUFDSixLQUFuRCxFQUF5RCxHQUF6RCxFQUE4RGlLLE1BQTlELENBQXFFN0osQ0FBQyxDQUFDaWdDLEtBQXZFLEVBQTZFLE1BQTdFLENBQU47QUFBMkYsZUFBTSxHQUFHcDJCLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ2tCLFdBQWIsRUFBeUIsY0FBekIsRUFBeUM1SSxNQUF6QyxDQUFnRDVKLENBQWhELENBQU47QUFBeUQsT0FBaEssQ0FBaUtELENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR3VnQyxFQUFFLENBQUNQLGdCQUFOLEVBQXVCLDZCQUF2QixDQUFySyxDQUFOO0FBQUEsVUFBa096L0IsQ0FBQyxHQUFDMitCLEVBQUUsQ0FBQ2wvQixDQUFELEVBQUdLLENBQUgsRUFBSyxpQkFBTCxDQUF0Tzs7QUFBOFBKLE9BQUMsQ0FBQ2tWLFdBQUYsQ0FBYzVVLENBQWQ7O0FBQWlCLFVBQUlFLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNSLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNxK0IsY0FBRixJQUFtQnVDLEVBQUUsQ0FBQzdnQyxDQUFELENBQXJCO0FBQXlCLE9BQTNDOztBQUE0Q2dMLFFBQUUsQ0FBQ3pLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQnFnQyxFQUFFLENBQUNoNUIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFVBQUUsQ0FBQzNLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQlIsQ0FBQyxDQUFDbVYsV0FBRixDQUFjN1UsQ0FBZCxDQUFoQjtBQUFpQyxPQUFyRCxDQUFoQjtBQUF3RSxLQUFqL0M7QUFBay9DMi9CLFFBQUksRUFBQyxjQUFTbGdDLENBQVQsRUFBVztBQUFDMmdDLFFBQUUsSUFBR0UsRUFBRSxDQUFDN2dDLENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR3VnQyxFQUFFLENBQUNMLElBQU4sRUFBVyxpQkFBWCxDQUFMLENBQVA7QUFBMkMsS0FBOWlEO0FBQStpRDVzQixXQUFPLEVBQUMsbUJBQVU7QUFBQ0MsUUFBRSxDQUFDdXRCLEVBQUQsQ0FBRjtBQUFPO0FBQXprRCxHQUFkLENBQUQsQ0FBRCxDQUFUO0FBQUEsTUFBdW1ERSxFQUFFLEdBQUM7QUFBQ3B0QixZQUFRLEVBQUM7QUFBQzlVLFdBQUssRUFBQ3lLO0FBQVAsS0FBVjtBQUFxQnNLLFlBQVEsRUFBQztBQUFDb3RCLFVBQUksRUFBQzEzQixFQUFOO0FBQVNxRixVQUFJLEVBQUNyRixFQUFkO0FBQWlCMjNCLFlBQU0sRUFBQzEvQixDQUF4QjtBQUEwQjRVLFVBQUksRUFBQzdNO0FBQS9CLEtBQTlCO0FBQWlFb0ssWUFBUSxFQUFDO0FBQUN5QyxVQUFJLEVBQUM7QUFBTixLQUExRTtBQUEyRnRDLFNBQUssRUFBQyxlQUFTOVQsQ0FBVCxFQUFXO0FBQUNBLE9BQUMsQ0FBQ2toQyxNQUFGLEtBQVdsaEMsQ0FBQyxDQUFDbWhDLFFBQUYsR0FBV25oQyxDQUFDLENBQUNraEMsTUFBYixFQUFvQixPQUFPbGhDLENBQUMsQ0FBQ2toQyxNQUF4QztBQUFnRDtBQUE3SixHQUExbUQ7QUFBQSxNQUF5d0RFLEVBQUUsR0FBQztBQUFDQyxxQkFBaUIsRUFBQztBQUFDenRCLGNBQVEsRUFBQztBQUFDOEUsaUJBQVMsRUFBQy9NLEVBQUUsQ0FBQyxDQUFDbEMsRUFBRCxFQUFJRixFQUFKLENBQUQ7QUFBYixPQUFWO0FBQWtDc0ssY0FBUSxFQUFDO0FBQUNpQyxXQUFHLEVBQUN2TSxFQUFMO0FBQVFreEIsWUFBSSxFQUFDbHhCO0FBQWIsT0FBM0M7QUFBNERvSyxjQUFRLEVBQUM7QUFBQ21DLFdBQUcsRUFBQ2xGLFFBQVEsQ0FBQ3lEO0FBQWQ7QUFBckUsS0FBbkI7QUFBNkdpdEIsU0FBSyxFQUFDO0FBQUN6dEIsY0FBUSxFQUFDO0FBQUNpQyxXQUFHLEVBQUN2TSxFQUFMO0FBQVFreEIsWUFBSSxFQUFDbHhCO0FBQWIsT0FBVjtBQUEyQm9LLGNBQVEsRUFBQztBQUFDbUMsV0FBRyxFQUFDbEYsUUFBUSxDQUFDeUQ7QUFBZDtBQUFwQyxLQUFuSDtBQUE0S00sUUFBSSxFQUFDO0FBQUNkLGNBQVEsRUFBQztBQUFDaUMsV0FBRyxFQUFDdk0sRUFBTDtBQUFRa3hCLFlBQUksRUFBQ2x4QixFQUFiO0FBQWdCZzRCLGVBQU8sRUFBQyxpQkFBU3ZoQyxDQUFULEVBQVc7QUFBQyxpQkFBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNLENBQUMsQ0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR2doQyxFQUFILEVBQU0sWUFBTixDQUFqQjtBQUFxQyxTQUF6RTtBQUEwRVEsZUFBTyxFQUFDaDRCO0FBQWxGLE9BQVY7QUFBZ0dtSyxjQUFRLEVBQUM7QUFBQ21DLFdBQUcsRUFBQ2xGLFFBQVEsQ0FBQ3lELElBQWQ7QUFBbUJtdEIsZUFBTyxFQUFDLENBQUM7QUFBNUI7QUFBekcsS0FBakw7QUFBMFRDLHNCQUFrQixFQUFDO0FBQUM3dEIsY0FBUSxFQUFDO0FBQUM4RSxpQkFBUyxFQUFDL00sRUFBRSxDQUFDLENBQUNsQyxFQUFELEVBQUlGLEVBQUosQ0FBRCxDQUFiO0FBQXVCeUwsVUFBRSxFQUFDekw7QUFBMUIsT0FBVjtBQUF3Q3NLLGNBQVEsRUFBQztBQUFDNnRCLHlCQUFpQixFQUFDbDRCLEVBQW5CO0FBQXNCNE0sWUFBSSxFQUFDM0ssRUFBRSxDQUFDLENBQUMsWUFBRCxFQUFjLFVBQWQsQ0FBRDtBQUE3QixPQUFqRDtBQUEyR2tJLGNBQVEsRUFBQztBQUFDK3RCLHlCQUFpQixFQUFDLENBQUMsQ0FBcEI7QUFBc0J0ckIsWUFBSSxFQUFDO0FBQTNCLE9BQXBIO0FBQTZKdEMsV0FBSyxFQUFDLGVBQVM5VCxDQUFULEVBQVc7QUFBQyxnQkFBTUEsQ0FBQyxDQUFDZ1YsRUFBRixDQUFLLENBQUwsQ0FBTixLQUFnQmhWLENBQUMsQ0FBQ2dWLEVBQUYsR0FBSyxJQUFJbkwsTUFBSixDQUFXN0osQ0FBQyxDQUFDZ1YsRUFBYixDQUFyQjtBQUF1QztBQUF0TjtBQUE3VSxHQUE1d0Q7O0FBQWt6RSxXQUFTMnNCLEVBQVQsQ0FBWTNoQyxDQUFaLEVBQWM7QUFBQyxRQUFJQyxDQUFDLEdBQUNzSSxFQUFFLENBQUM7QUFBQ3VOLFNBQUcsRUFBQzlWLENBQUMsQ0FBQzhWO0FBQVAsS0FBRCxFQUFhOHJCLEVBQUUsRUFBZixDQUFSO0FBQTJCNWhDLEtBQUMsQ0FBQ3k2QixJQUFGLEtBQVN4NkIsQ0FBQyxDQUFDdzZCLElBQUYsR0FBT3o2QixDQUFDLENBQUN5NkIsSUFBbEIsR0FBd0JqbUIsRUFBRSxDQUFDLEdBQUczSyxNQUFILENBQVUwSCxFQUFFLENBQUNtQixVQUFiLEVBQXdCLEdBQXhCLEVBQTZCN0ksTUFBN0IsQ0FBb0N1QixFQUFFLENBQUNuTCxDQUFELENBQXRDLENBQUQsRUFBNEMsMEJBQTVDLEVBQXVFLHVDQUF2RSxDQUExQjtBQUEwSTs7QUFBQSxNQUFJNGhDLEVBQUUsR0FBQyxDQUFQOztBQUFTLFdBQVNELEVBQVQsR0FBYTtBQUFDLFFBQUk1aEMsQ0FBQyxHQUFDO0FBQUNzL0IsaUJBQVcsRUFBQ2x1QjtBQUFiLEtBQU47QUFBdUIsV0FBTyxTQUFPNkIsRUFBRSxFQUFULEtBQWNqVCxDQUFDLENBQUN3MEIsT0FBRixHQUFVdmhCLEVBQUUsRUFBMUIsR0FBOEJqVCxDQUFyQztBQUF1Qzs7QUFBQSxNQUFJOGhDLEVBQUUsR0FBQyxFQUFQO0FBQVUsTUFBSUMsRUFBRSxHQUFDMXVCLEVBQUUsQ0FBQyxDQUFDalQsTUFBTSxDQUFDb2MsTUFBUCxDQUFjO0FBQUM1TyxhQUFTLEVBQUMsSUFBWDtBQUFnQnl6QixxQkFBaUIsRUFBQywyQkFBU3JoQyxDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUM0SyxFQUFFLENBQUM3SyxDQUFDLENBQUMwWSxTQUFILENBQVI7QUFBc0IsVUFBRyxDQUFDelksQ0FBSixFQUFNLE1BQU0sSUFBSWtULEVBQUosQ0FBTywwRUFBUCxDQUFOO0FBQXlGeUIsUUFBRSxDQUFDNVUsQ0FBRCxFQUFHQyxDQUFILEVBQUs7QUFBQzZWLFdBQUcsRUFBQztBQUFMLE9BQUwsQ0FBRixFQUF5QjlWLENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR29oQyxFQUFFLENBQUNDLGlCQUFOLEVBQXdCLHlCQUF4QixDQUE3Qjs7QUFBZ0YsVUFBSWhoQyxDQUFDLEdBQUMsVUFBU0wsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxZQUFJSSxDQUFDLEdBQUN5SyxRQUFRLENBQUNpSyxhQUFULENBQXVCLEdBQXZCLENBQU47QUFBa0MxVSxTQUFDLENBQUM0VSxZQUFGLENBQWUsTUFBZixFQUFzQixHQUF0QjtBQUEyQixZQUFJMVUsQ0FBQyxHQUFDdUssUUFBUSxDQUFDaUssYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQW9DLGVBQU94VSxDQUFDLENBQUMwVSxZQUFGLENBQWUsS0FBZixFQUFxQmpWLENBQXJCLEdBQXdCTyxDQUFDLENBQUMwVSxZQUFGLENBQWUsT0FBZixFQUF1QmhWLENBQXZCLENBQXhCLEVBQWtETSxDQUFDLENBQUMwVSxZQUFGLENBQWUsS0FBZixFQUFxQmhWLENBQXJCLENBQWxELEVBQTBFSSxDQUFDLENBQUM4VSxXQUFGLENBQWM1VSxDQUFkLENBQTFFLEVBQTJGRixDQUFsRztBQUFvRyxPQUFuTixDQUFvTmtSLEVBQUUsQ0FBQ3FCLFNBQXZOLEVBQWlPLGdCQUFqTyxDQUFOOztBQUF5UDNTLE9BQUMsQ0FBQ2tWLFdBQUYsQ0FBYzlVLENBQWQ7O0FBQWlCLFVBQUlFLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNOLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNxK0IsY0FBRixJQUFtQnFELEVBQUUsQ0FBQzNoQyxDQUFELENBQXJCO0FBQXlCLE9BQTNDOztBQUE0Q2dMLFFBQUUsQ0FBQzNLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQnVoQyxFQUFFLENBQUNoNkIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFVBQUUsQ0FBQzdLLENBQUQsRUFBRyxPQUFILEVBQVdFLENBQVgsQ0FBRixFQUFnQk4sQ0FBQyxDQUFDbVYsV0FBRixDQUFjL1UsQ0FBZCxDQUFoQjtBQUFpQyxPQUFyRCxDQUFoQjtBQUF3RSxLQUFqbkI7QUFBa25CaWhDLFNBQUssRUFBQyxlQUFTdGhDLENBQVQsRUFBVztBQUFDMmhDLFFBQUUsQ0FBQzNoQyxDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdvaEMsRUFBRSxDQUFDRSxLQUFOLEVBQVksYUFBWixDQUFMLENBQUY7QUFBbUMsS0FBdnFCO0FBQXdxQjNzQixRQUFJLEVBQUMsY0FBUzNVLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQyxVQUFTRCxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUMyUSxRQUFRLENBQUNFLFFBQVQsSUFBbUIsRUFBekI7QUFBQSxZQUE0QnpRLENBQUMsR0FBQ2tJLEVBQUUsQ0FBQztBQUFDeTVCLGdCQUFNLEVBQUMsS0FBUjtBQUFjakosZ0JBQU0sRUFBQzduQixFQUFyQjtBQUF3Qit3QixlQUFLLEVBQUNoaUMsQ0FBOUI7QUFBZ0NpaUMsaUJBQU8sRUFBQ2ppQyxDQUF4QztBQUEwQ2tpQyxjQUFJLEVBQUNuaUMsQ0FBQyxDQUFDeTZCLElBQUYsR0FBTyxHQUFHNXdCLE1BQUgsQ0FBVTdKLENBQUMsQ0FBQ3k2QixJQUFaLEVBQWlCLElBQWpCLEVBQXVCNXdCLE1BQXZCLENBQThCN0osQ0FBQyxDQUFDOFYsR0FBaEMsQ0FBUCxHQUE0QzlWLENBQUMsQ0FBQzhWO0FBQTdGLFNBQUQsRUFBbUc4ckIsRUFBRSxFQUFyRyxDQUFoQztBQUF5STVoQyxTQUFDLENBQUN1aEMsT0FBRixLQUFZbGhDLENBQUMsQ0FBQytoQyxPQUFGLEdBQVU5MkIsSUFBSSxDQUFDQyxTQUFMLENBQWV2TCxDQUFDLENBQUN1aEMsT0FBakIsQ0FBVixFQUFvQ2xoQyxDQUFDLENBQUM2aEMsT0FBRixHQUFVbGlDLENBQUMsQ0FBQ3VoQyxPQUFGLENBQVUzeUIsSUFBVixJQUFnQnZPLENBQUMsQ0FBQzZoQyxPQUE1RTtBQUFxRixlQUFNLEdBQUdyNEIsTUFBSCxDQUFVMEgsRUFBRSxDQUFDc0IsZUFBYixFQUE2QixHQUE3QixFQUFrQ2hKLE1BQWxDLENBQXlDdUIsRUFBRSxDQUFDL0ssQ0FBRCxDQUEzQyxDQUFOO0FBQXNELE9BQWhTLENBQWlTTCxDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdvaEMsRUFBRSxDQUFDenNCLElBQU4sRUFBVyxZQUFYLENBQXJTLENBQU47QUFBQSxVQUFxVXRVLENBQUMsR0FBQztBQUFDczdCLGlCQUFTLEVBQUMxN0IsQ0FBWDtBQUFhdTdCLGlCQUFTLEVBQUMsQ0FBQyxVQUFVM3hCLE1BQVYsQ0FBaUI1SixDQUFqQixFQUFtQixTQUFuQixDQUFELEVBQStCLEdBQUc0SixNQUFILENBQVU3SixDQUFDLENBQUN3aEMsT0FBRixHQUFVLDBCQUFWLEdBQXFDLEVBQS9DLEVBQWtELE1BQWxELENBQS9CLEVBQTBGaDJCLElBQTFGLENBQStGLEdBQS9GLENBQXZCO0FBQTJId3dCLGVBQU8sRUFBQyxZQUFuSTtBQUFnSk4sZ0JBQVEsRUFBQzFuQixFQUFFLENBQUMsaUJBQUQsRUFBbUIsV0FBbkIsQ0FBM0o7QUFBMkx1bkIsZ0NBQXdCLEVBQUMsb0NBQVU7QUFBQ3Y3QixXQUFDLENBQUMwVixJQUFGLElBQVExVixDQUFDLENBQUMwVixJQUFGLEVBQVI7QUFBaUI7QUFBaFAsT0FBdlU7O0FBQXlqQixVQUFHO0FBQUN3bEIsVUFBRSxDQUFDNzZCLENBQUQsQ0FBRjtBQUFNLE9BQVYsQ0FBVSxPQUFNTCxDQUFOLEVBQVEsQ0FBRTtBQUFDLEtBQXZ3QztBQUF3d0N5aEMsc0JBQWtCLEVBQUMsNEJBQVN6aEMsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDNEssRUFBRSxDQUFDN0ssQ0FBQyxDQUFDMFksU0FBSCxDQUFSO0FBQXNCLFVBQUcsQ0FBQ3pZLENBQUosRUFBTSxNQUFNLElBQUlrVCxFQUFKLENBQU8sMkVBQVAsQ0FBTjtBQUEwRnlCLFFBQUUsQ0FBQzVVLENBQUQsRUFBR0MsQ0FBSCxFQUFLO0FBQUMrVSxVQUFFLEVBQUMsU0FBSjtBQUFjMHNCLHlCQUFpQixFQUFDLDBCQUFoQztBQUEyRHRyQixZQUFJLEVBQUM7QUFBaEUsT0FBTCxDQUFGOztBQUFxRixVQUFJL1YsQ0FBQyxHQUFDLFVBQVNMLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQzRoQyxFQUFFLEVBQVI7QUFBQSxZQUFXeGhDLENBQUMsR0FBQ0wsQ0FBQyxDQUFDMGhDLGlCQUFGLElBQXFCLGlCQUFlMWhDLENBQUMsQ0FBQ29XLElBQXRDLEdBQTJDLEVBQTNDLEdBQThDLEVBQTNEO0FBQUEsWUFBOEQ3VixDQUFDLEdBQUNQLENBQUMsQ0FBQzBoQyxpQkFBRixJQUFxQixlQUFhMWhDLENBQUMsQ0FBQ29XLElBQXBDLEdBQXlDLEVBQXpDLEdBQTRDLEVBQTVHO0FBQUEsWUFBK0czVixDQUFDLEdBQUNxSyxRQUFRLENBQUNpSyxhQUFULENBQXVCLFFBQXZCLENBQWpIO0FBQWtKdFUsU0FBQyxDQUFDckIsR0FBRixHQUFNLFVBQVNZLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSUksQ0FBQyxHQUFDa0ksRUFBRSxDQUFDO0FBQUN5TSxjQUFFLEVBQUNoVixDQUFDLENBQUNnVixFQUFOO0FBQVNvQixnQkFBSSxFQUFDcFcsQ0FBQyxDQUFDb1csSUFBaEI7QUFBcUJpc0Isd0JBQVksRUFBQyxDQUFDcmlDLENBQUMsQ0FBQzBoQyxpQkFBckM7QUFBdURZLG1CQUFPLEVBQUNyaUM7QUFBL0QsV0FBRCxFQUFtRTJoQyxFQUFFLEVBQXJFLENBQVI7QUFBaUYsaUJBQU0sR0FBRy8zQixNQUFILENBQVUwSCxFQUFFLENBQUNvQixrQkFBYixFQUFnQyxHQUFoQyxFQUFxQzlJLE1BQXJDLENBQTRDdUIsRUFBRSxDQUFDL0ssQ0FBRCxDQUE5QyxDQUFOO0FBQXlELFNBQXhKLENBQXlKTCxDQUF6SixFQUEySkMsQ0FBM0osQ0FBTixFQUFvS1EsQ0FBQyxDQUFDd1UsWUFBRixDQUFlLGFBQWYsRUFBNkIsR0FBN0IsQ0FBcEssRUFBc014VSxDQUFDLENBQUN3VSxZQUFGLENBQWUsYUFBZixFQUE2QixHQUE3QixDQUF0TSxFQUF3T3hVLENBQUMsQ0FBQ3dVLFlBQUYsQ0FBZSxjQUFmLEVBQThCLEdBQTlCLENBQXhPLEVBQTJReFUsQ0FBQyxDQUFDd1UsWUFBRixDQUFlLFdBQWYsRUFBMkIsSUFBM0IsQ0FBM1EsRUFBNFN4VSxDQUFDLENBQUN3VSxZQUFGLENBQWUsT0FBZixFQUF1QixTQUFTcEwsTUFBVCxDQUFnQnhKLENBQWhCLEVBQWtCLGFBQWxCLEVBQWlDd0osTUFBakMsQ0FBd0N0SixDQUF4QyxFQUEwQyxLQUExQyxDQUF2QixDQUE1Uzs7QUFBcVgsWUFBSUksQ0FBQyxHQUFDLFdBQVNYLENBQVQsRUFBVztBQUFDLGNBQUdBLENBQUMsQ0FBQ3NWLElBQUYsSUFBUSxnQkFBZ0J0VCxJQUFoQixDQUFxQmhDLENBQUMsQ0FBQ3VWLE1BQXZCLENBQVIsSUFBd0MsWUFBVSxPQUFPdlYsQ0FBQyxDQUFDc1YsSUFBOUQsRUFBbUU7QUFBQyxnQkFBSTNVLENBQUMsR0FBQzBOLEVBQUUsQ0FBQ3BFLEVBQUUsQ0FBQ2pLLENBQUMsQ0FBQ3NWLElBQUYsQ0FBT25HLEtBQVAsQ0FBYSxHQUFiLENBQUQsRUFBb0IsVUFBU25QLENBQVQsRUFBVztBQUFDLHFCQUFPdUMsUUFBUSxDQUFDdkMsQ0FBRCxFQUFHLEVBQUgsQ0FBZjtBQUFzQixhQUF0RCxDQUFILEVBQTRELENBQTVELENBQVI7QUFBQSxnQkFBdUVhLENBQUMsR0FBQ0YsQ0FBQyxDQUFDLENBQUQsQ0FBMUU7QUFBQSxnQkFBOEVJLENBQUMsR0FBQ0osQ0FBQyxDQUFDLENBQUQsQ0FBakY7QUFBQSxnQkFBcUZNLENBQUMsR0FBQ04sQ0FBQyxDQUFDLENBQUQsQ0FBeEY7QUFBNEZFLGFBQUMsS0FBR1osQ0FBSixLQUFRSSxDQUFDLEtBQUdVLENBQUosS0FBUU4sQ0FBQyxDQUFDcWdCLEtBQUYsQ0FBUTVoQixLQUFSLEdBQWMsR0FBRzJLLE1BQUgsQ0FBVTlJLENBQVYsRUFBWSxJQUFaLENBQXRCLEdBQXlDUixDQUFDLEtBQUdVLENBQUosS0FBUVIsQ0FBQyxDQUFDcWdCLEtBQUYsQ0FBUTNoQixNQUFSLEdBQWUsR0FBRzBLLE1BQUgsQ0FBVTVJLENBQVYsRUFBWSxJQUFaLENBQXZCLENBQWpEO0FBQTRGO0FBQUMsU0FBL1E7O0FBQWdSLGVBQU07QUFBQ3NoQyxpQkFBTyxFQUFDOWhDLENBQVQ7QUFBVytoQyx3QkFBYyxFQUFDN2hDO0FBQTFCLFNBQU47QUFBbUMsT0FBdDBCLENBQXUwQlgsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHb2hDLEVBQUUsQ0FBQ0ssa0JBQU4sRUFBeUIsMEJBQXpCLENBQTMwQixDQUFOO0FBQUEsVUFBdTRCbGhDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDa2lDLE9BQTM0QjtBQUFBLFVBQW01QjloQyxDQUFDLEdBQUNKLENBQUMsQ0FBQ21pQyxjQUF2NUI7O0FBQXM2QnZpQyxPQUFDLENBQUNrVixXQUFGLENBQWM1VSxDQUFkLEdBQWlCeUssRUFBRSxDQUFDbUIsTUFBRCxFQUFRLFNBQVIsRUFBa0IxTCxDQUFsQixDQUFuQixFQUF3Q3FoQyxFQUFFLENBQUNoNkIsSUFBSCxDQUFTLFlBQVU7QUFBQ29ELFVBQUUsQ0FBQ2lCLE1BQUQsRUFBUSxTQUFSLEVBQWtCMUwsQ0FBbEIsQ0FBRixFQUF1QlIsQ0FBQyxDQUFDbVYsV0FBRixDQUFjN1UsQ0FBZCxDQUF2QjtBQUF3QyxPQUE1RCxDQUF4QztBQUF1RyxLQUEvL0U7QUFBZ2dGK1MsV0FBTyxFQUFDLG1CQUFVO0FBQUNDLFFBQUUsQ0FBQ3V1QixFQUFELENBQUY7QUFBTztBQUExaEYsR0FBZCxDQUFELENBQUQsQ0FBVDtBQUFBLE1BQXdqRlcsRUFBRSxHQUFDLENBQUMsT0FBRCxFQUFTLE9BQVQsQ0FBM2pGO0FBQUEsTUFBNmtGQyxFQUFFLEdBQUM7QUFBQzl1QixZQUFRLEVBQUM7QUFBQ2hGLFVBQUksRUFBQ3JGLEVBQU47QUFBUzlKLE9BQUMsRUFBQ2tLLEVBQVg7QUFBY2pLLE9BQUMsRUFBQ2lLO0FBQWhCLEtBQVY7QUFBOEJrSyxZQUFRLEVBQUM7QUFBQzh1QixZQUFNLEVBQUNwNUIsRUFBUjtBQUFXcTVCLFNBQUcsRUFBQ3I1QjtBQUFmO0FBQXZDLEdBQWhsRjtBQUFBLE1BQTJvRnM1QixFQUFFLEdBQUM7QUFBQzFtQixTQUFLLEVBQUM7QUFBQ3ZJLGNBQVEsRUFBQztBQUFDaEYsWUFBSSxFQUFDckYsRUFBTjtBQUFTOUosU0FBQyxFQUFDa0ssRUFBWDtBQUFjakssU0FBQyxFQUFDaUs7QUFBaEIsT0FBVjtBQUE4QmtLLGNBQVEsRUFBQztBQUFDaXZCLGlCQUFTLEVBQUNyM0IsRUFBRSxDQUFDZzNCLEVBQUQsQ0FBYjtBQUFrQk0sbUJBQVcsRUFBQ3QzQixFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQUQsQ0FBaEM7QUFBa0R1M0IsZ0JBQVEsRUFBQ3YzQixFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsR0FBZixDQUFELENBQTdEO0FBQW1GdzNCLGlCQUFTLEVBQUN6NUIsRUFBN0Y7QUFBZ0cwNUIsVUFBRSxFQUFDdjVCLEVBQW5HO0FBQXNHdzVCLFVBQUUsRUFBQ3g1QixFQUF6RztBQUE0R3k1QixjQUFNLEVBQUN6NUIsRUFBbkg7QUFBc0gwNUIsaUJBQVMsRUFBQzk1QixFQUFoSTtBQUFtSW81QixjQUFNLEVBQUNwNUIsRUFBMUk7QUFBNklxNUIsV0FBRyxFQUFDcjVCLEVBQWpKO0FBQW9KKzVCLGVBQU8sRUFBQzM1QixFQUE1SjtBQUErSjQ1QixpQkFBUyxFQUFDLG1CQUFTdmpDLENBQVQsRUFBVztBQUFDLGNBQUd3QixDQUFDLENBQUN4QixDQUFELENBQUosRUFBUTtBQUFDLGdCQUFHQSxDQUFDLENBQUMrQixNQUFGLEdBQVMsQ0FBWixFQUFjLE1BQU0sSUFBSW9SLEVBQUosQ0FBTywwRUFBUCxDQUFOO0FBQXlGLG1CQUFPN0osRUFBRSxDQUFDdEosQ0FBRCxFQUFJLFVBQVNBLENBQVQsRUFBVztBQUFDLHFCQUFPeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHMGlDLEVBQUgsRUFBTSxZQUFOLENBQVQ7QUFBNkIsYUFBN0MsQ0FBRixFQUFrRCxDQUFDLENBQTFEO0FBQTREOztBQUFBLGlCQUFNLENBQUMsQ0FBUDtBQUFTO0FBQTFXLE9BQXZDO0FBQW1aL3VCLGNBQVEsRUFBQztBQUFDbXZCLGlCQUFTLEVBQUMsT0FBWDtBQUFtQkMsbUJBQVcsRUFBQyxDQUEvQjtBQUFpQ0MsZ0JBQVEsRUFBQyxHQUExQztBQUE4Q0MsaUJBQVMsRUFBQyxDQUFDO0FBQXpEO0FBQTVaLEtBQVA7QUFBZ2UzQixTQUFLLEVBQUM7QUFBQzF0QixjQUFRLEVBQUM7QUFBQ2hGLFlBQUksRUFBQ3JGLEVBQU47QUFBUzlKLFNBQUMsRUFBQ2tLLEVBQVg7QUFBY2pLLFNBQUMsRUFBQ2lLO0FBQWhCLE9BQVY7QUFBOEJrSyxjQUFRLEVBQUM7QUFBQ2l2QixpQkFBUyxFQUFDcjNCLEVBQUUsQ0FBQ2czQixFQUFELENBQWI7QUFBa0JFLGNBQU0sRUFBQ3A1QixFQUF6QjtBQUE0QnE1QixXQUFHLEVBQUNyNUIsRUFBaEM7QUFBbUMrNUIsZUFBTyxFQUFDMzVCO0FBQTNDLE9BQXZDO0FBQXNGZ0ssY0FBUSxFQUFDO0FBQUNtdkIsaUJBQVMsRUFBQztBQUFYO0FBQS9GO0FBQXRlLEdBQTlvRjs7QUFBeXVHLFdBQVNVLEVBQVQsR0FBYTtBQUFDLFdBQU07QUFBQzFLLFlBQU0sRUFBQzdsQixFQUFFLEVBQVY7QUFBYSt1QixZQUFNLEVBQUMsS0FBcEI7QUFBMEIvSSxZQUFNLEVBQUM7QUFBQzlrQixVQUFFLEVBQUMvQztBQUFKO0FBQWpDLEtBQU47QUFBZ0Q7O0FBQUEsV0FBU3F5QixFQUFULENBQVl6akMsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsUUFBSUksQ0FBQyxHQUFDO0FBQUNzN0IsZUFBUyxFQUFDMzdCLENBQVg7QUFBYXc3QixlQUFTLEVBQUMsQ0FBQyxVQUFVM3hCLE1BQVYsQ0FBaUI3SixDQUFqQixFQUFtQixTQUFuQixDQUFELEVBQStCLDBCQUEwQjZKLE1BQTFCLENBQWlDd0Isa0JBQWtCLENBQUNwTCxDQUFELENBQW5ELENBQS9CLEVBQXVGLE1BQXZGLEVBQStGdUwsSUFBL0YsQ0FBb0csR0FBcEcsQ0FBdkI7QUFBZ0lrd0IsY0FBUSxFQUFDejdCLENBQXpJO0FBQTJJMjdCLG1CQUFhLEVBQUMzN0I7QUFBekosS0FBTjs7QUFBa0ssUUFBRztBQUFDaTdCLFFBQUUsQ0FBQzc2QixDQUFELENBQUY7QUFBTSxLQUFWLENBQVUsT0FBTUwsQ0FBTixFQUFRLENBQUU7QUFBQzs7QUFBQSxNQUFJMGpDLEVBQUUsR0FBQ3J3QixFQUFFLENBQUMsQ0FBQ2pULE1BQU0sQ0FBQ29jLE1BQVAsQ0FBYztBQUFDNU8sYUFBUyxFQUFDLElBQVg7QUFBZ0J1TyxTQUFLLEVBQUMsZUFBU25jLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQ21MLEVBQUUsQ0FBQyxVQUFTcEwsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDO0FBQUMyTyxjQUFJLEVBQUM1TyxDQUFDLENBQUM0TyxJQUFSO0FBQWFuUCxXQUFDLEVBQUNPLENBQUMsQ0FBQ1AsQ0FBakI7QUFBbUJDLFdBQUMsRUFBQ00sQ0FBQyxDQUFDTixDQUF2QjtBQUF5QmlqQyxnQkFBTSxFQUFDM2lDLENBQUMsQ0FBQzJpQyxNQUFsQztBQUF5Q0MsYUFBRyxFQUFDNWlDLENBQUMsQ0FBQzRpQyxHQUEvQztBQUFtRGUsa0JBQVEsRUFBQzNqQyxDQUFDLENBQUNzakM7QUFBOUQsU0FBTjtBQUFBLFlBQTZFampDLENBQUMsR0FBQztBQUFDdWpDLG9CQUFVLEVBQUM1akMsQ0FBQyxDQUFDOGlDLFNBQWQ7QUFBd0JlLHNCQUFZLEVBQUM3akMsQ0FBQyxDQUFDK2lDLFdBQXZDO0FBQW1EZSxrQkFBUSxFQUFDOWpDLENBQUMsQ0FBQ2dqQyxRQUE5RDtBQUF1RWUsb0JBQVUsRUFBQy9qQyxDQUFDLENBQUNpakMsU0FBcEY7QUFBOEZlLGFBQUcsRUFBQ2hrQyxDQUFDLENBQUNrakMsRUFBcEc7QUFBdUdlLGFBQUcsRUFBQ2prQyxDQUFDLENBQUNtakMsRUFBN0c7QUFBZ0hlLGlCQUFPLEVBQUNsa0MsQ0FBQyxDQUFDb2pDLE1BQTFIO0FBQWlJZSxvQkFBVSxFQUFDbmtDLENBQUMsQ0FBQ3FqQztBQUE5SSxTQUEvRTtBQUF3TyxlQUFPNzJCLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLEVBQUQsRUFBSWczQixFQUFFLEVBQU4sQ0FBSCxFQUFhLEVBQWIsRUFBZ0I7QUFBQ1ksZUFBSyxFQUFDO0FBQUNDLHVCQUFXLEVBQUNwa0MsQ0FBYjtBQUFlcWtDLGtCQUFNLEVBQUNqa0MsQ0FBdEI7QUFBd0Jra0Msb0JBQVEsRUFBQ3ZrQyxDQUFDLENBQUN1akM7QUFBbkM7QUFBUCxTQUFoQixDQUFUO0FBQWdGLE9BQXBVLENBQXFVdmpDLENBQUMsR0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBRzZpQyxFQUFFLENBQUMxbUIsS0FBTixFQUFZLFlBQVosQ0FBelUsQ0FBRCxDQUFSO0FBQThXc25CLFFBQUUsQ0FBQyxHQUFHNTVCLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ3VCLFVBQWIsRUFBd0IsR0FBeEIsRUFBNkJqSixNQUE3QixDQUFvQzVKLENBQXBDLENBQUQsRUFBd0MsR0FBRzRKLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ3dCLFlBQWIsRUFBMEIsR0FBMUIsRUFBK0JsSixNQUEvQixDQUFzQzVKLENBQXRDLENBQXhDLENBQUY7QUFBb0YsS0FBcGU7QUFBcWVxaEMsU0FBSyxFQUFDLGVBQVN0aEMsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDbUwsRUFBRSxDQUFDLFVBQVNwTCxDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUM7QUFBQzJPLGNBQUksRUFBQzVPLENBQUMsQ0FBQzRPLElBQVI7QUFBYW5QLFdBQUMsRUFBQ08sQ0FBQyxDQUFDUCxDQUFqQjtBQUFtQkMsV0FBQyxFQUFDTSxDQUFDLENBQUNOLENBQXZCO0FBQXlCaWpDLGdCQUFNLEVBQUMzaUMsQ0FBQyxDQUFDMmlDLE1BQWxDO0FBQXlDQyxhQUFHLEVBQUM1aUMsQ0FBQyxDQUFDNGlDLEdBQS9DO0FBQW1EZSxrQkFBUSxFQUFDM2pDLENBQUMsQ0FBQ3NqQztBQUE5RCxTQUFOO0FBQUEsWUFBNkVqakMsQ0FBQyxHQUFDO0FBQUMwakMsb0JBQVUsRUFBQyxDQUFDLENBQWI7QUFBZUgsb0JBQVUsRUFBQzVqQyxDQUFDLENBQUM4aUM7QUFBNUIsU0FBL0U7QUFBc0gsZUFBT3QyQixFQUFFLENBQUNBLEVBQUUsQ0FBQyxFQUFELEVBQUlnM0IsRUFBRSxFQUFOLENBQUgsRUFBYSxFQUFiLEVBQWdCO0FBQUNZLGVBQUssRUFBQztBQUFDQyx1QkFBVyxFQUFDcGtDLENBQWI7QUFBZXFrQyxrQkFBTSxFQUFDamtDO0FBQXRCO0FBQVAsU0FBaEIsQ0FBVDtBQUEyRCxPQUE3TCxDQUE4TEwsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHNmlDLEVBQUUsQ0FBQ3ZCLEtBQU4sRUFBWSxZQUFaLENBQWxNLENBQUQsQ0FBUjtBQUF1T21DLFFBQUUsQ0FBQyxHQUFHNTVCLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ3VCLFVBQWIsRUFBd0IsR0FBeEIsRUFBNkJqSixNQUE3QixDQUFvQzVKLENBQXBDLENBQUQsRUFBd0MsR0FBRzRKLE1BQUgsQ0FBVTBILEVBQUUsQ0FBQ3dCLFlBQWIsRUFBMEIsR0FBMUIsRUFBK0JsSixNQUEvQixDQUFzQzVKLENBQXRDLENBQXhDLENBQUY7QUFBb0Y7QUFBbHpCLEdBQWQsQ0FBRCxDQUFELENBQVQ7O0FBQWcxQixXQUFTdWtDLEVBQVQsQ0FBWXhrQyxDQUFaLEVBQWM7QUFBQyxXQUFPMEosRUFBRSxDQUFDMUosQ0FBRCxDQUFGLElBQU9BLENBQUMsR0FBQyxDQUFULElBQVlBLENBQUMsR0FBQyxHQUFyQjtBQUF5Qjs7QUFBQSxXQUFTeWtDLEVBQVQsQ0FBWXprQyxDQUFaLEVBQWM7QUFBQyxRQUFHQSxDQUFDLENBQUMwa0MsZ0JBQUYsR0FBbUIxa0MsQ0FBQyxDQUFDMmtDLGdCQUF4QixFQUF5QyxNQUFNLElBQUl4eEIsRUFBSixDQUFPLDhEQUFQLENBQU47QUFBNkU7O0FBQUEsV0FBU3l4QixFQUFULENBQVk1a0MsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDO0FBQUMyVCxjQUFRLEVBQUM7QUFBQ2l4QixjQUFNLEVBQUNwNUIsRUFBRSxDQUFDLENBQUMsWUFBRCxFQUFjLFlBQWQsRUFBMkIsY0FBM0IsRUFBMEMsV0FBMUMsRUFBc0QsUUFBdEQsQ0FBRDtBQUFWLE9BQVY7QUFBdUZvSSxjQUFRLEVBQUM7QUFBQ1QsZUFBTyxFQUFDN0osRUFBVDtBQUFZdTdCLGFBQUssRUFBQ3RqQztBQUFsQixPQUFoRztBQUFxSHNTLFdBQUssRUFBQyxlQUFTOVQsQ0FBVCxFQUFXO0FBQUMsWUFBRyxFQUFFLGFBQVdBLENBQUMsQ0FBQzZrQyxNQUFiLElBQXFCN2tDLENBQUMsQ0FBQ29ULE9BQUYsSUFBV3BULENBQUMsQ0FBQzhrQyxLQUFwQyxDQUFILEVBQThDLE1BQU0sSUFBSTN4QixFQUFKLENBQU8sOEVBQVAsQ0FBTjtBQUE2RjtBQUFsUixLQUFOO0FBQTBSLFdBQU8zUixDQUFDLENBQUN4QixDQUFELENBQUQsSUFBTW1LLEVBQUUsQ0FBQ25LLENBQUQsRUFBSSxVQUFTQSxDQUFULEVBQVc7QUFBQyxhQUFPdUIsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELElBQU0sQ0FBQyxDQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHQyxDQUFILEVBQUsscUJBQUwsQ0FBakI7QUFBNkMsS0FBN0QsQ0FBZjtBQUErRTs7QUFBQSxXQUFTOGtDLEVBQVQsQ0FBWS9rQyxDQUFaLEVBQWM7QUFBQyxRQUFHLGlCQUFlQSxDQUFDLENBQUNnbEMsYUFBcEIsRUFBa0M7QUFBQyxVQUFJL2tDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDaWxDLFdBQVI7QUFBb0IsVUFBR2hsQyxDQUFDLENBQUN1SyxPQUFGLENBQVUsTUFBVixJQUFrQixDQUFDLENBQXRCLEVBQXdCLE1BQU0sSUFBSTJJLEVBQUosQ0FBTyx3Q0FBUCxDQUFOO0FBQXVELFVBQUcsQ0FBQ2xULENBQUMsQ0FBQ3VLLE9BQUYsQ0FBVSxRQUFWLElBQW9CLENBQUMsQ0FBckIsSUFBd0J2SyxDQUFDLENBQUN1SyxPQUFGLENBQVUsT0FBVixJQUFtQixDQUFDLENBQTdDLEtBQWlELENBQUMsQ0FBRCxLQUFLdkssQ0FBQyxDQUFDdUssT0FBRixDQUFVLFNBQVYsQ0FBekQsRUFBOEUsTUFBTSxJQUFJMkksRUFBSixDQUFPLCtDQUFQLENBQU47QUFBOEQ7QUFBQzs7QUFBQSxNQUFJK3hCLEVBQUUsR0FBQyxDQUFDLE1BQUQsRUFBUSxXQUFSLEVBQW9CLFlBQXBCLENBQVA7QUFBQSxNQUF5Q0MsRUFBRSxHQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsRUFBZ0IsV0FBaEIsQ0FBNUM7QUFBQSxNQUF5RUMsRUFBRSxHQUFDLENBQUMsTUFBRCxFQUFRLFlBQVIsQ0FBNUU7QUFBQSxNQUFrR0MsRUFBRSxHQUFDLENBQUMsU0FBRCxFQUFXLFFBQVgsRUFBb0IsT0FBcEIsRUFBNEIsTUFBNUIsQ0FBckc7QUFBQSxNQUF5SUMsRUFBRSxHQUFDLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxTQUFiLENBQTVJO0FBQUEsTUFBb0tDLEVBQUUsR0FBQztBQUFDbHRCLGFBQVMsRUFBQzlPLEVBQVg7QUFBY29NLFdBQU8sRUFBQzlTLENBQXRCO0FBQXdCNlMsUUFBSSxFQUFDN1MsQ0FBN0I7QUFBK0IrUyxVQUFNLEVBQUMvUyxDQUF0QztBQUF3QzJpQyxnQkFBWSxFQUFDLzVCLEVBQUUsQ0FBQ3k1QixFQUFELENBQXZEO0FBQTRETyxxQkFBaUIsRUFBQ2g2QixFQUFFLENBQUMwNUIsRUFBRCxDQUFoRjtBQUFxRnJtQyxTQUFLLEVBQUN5SyxFQUEzRjtBQUE4Rm04QixnQkFBWSxFQUFDbDhCLEVBQTNHO0FBQThHbThCLHNCQUFrQixFQUFDbmtDLENBQWpJO0FBQW1Jb2tDLGlCQUFhLEVBQUNuNkIsRUFBRSxDQUFDNjVCLEVBQUQsQ0FBbko7QUFBd0pPLGlCQUFhLEVBQUNyOEIsRUFBdEs7QUFBeUtzOEIsZ0JBQVksRUFBQ3Q4QixFQUF0TDtBQUF5THU4Qix3QkFBb0IsRUFBQ25CLEVBQTlNO0FBQWlOb0IscUJBQWlCLEVBQUN4OEIsRUFBbk87QUFBc08rTyxvQkFBZ0IsRUFBQy9PO0FBQXZQLEdBQXZLO0FBQUEsTUFBa2F5OEIsRUFBRSxHQUFDO0FBQUN0d0IsV0FBTyxFQUFDakwsRUFBVDtBQUFZZ0wsUUFBSSxFQUFDaEwsRUFBakI7QUFBb0JrTCxVQUFNLEVBQUNsTDtBQUEzQixHQUFyYTtBQUFBLE1BQW9jdzdCLEVBQUUsR0FBQztBQUFDcnlCLFlBQVEsRUFBQztBQUFDMnhCLGtCQUFZLEVBQUMvNUIsRUFBRSxDQUFDeTVCLEVBQUQsQ0FBaEI7QUFBcUJPLHVCQUFpQixFQUFDaDZCLEVBQUUsQ0FBQzA1QixFQUFELENBQXpDO0FBQThDUSx3QkFBa0IsRUFBQ25rQyxDQUFqRTtBQUFtRW9rQyxtQkFBYSxFQUFDbjZCLEVBQUUsQ0FBQzY1QixFQUFELENBQW5GO0FBQXdGTyxtQkFBYSxFQUFDcjhCLEVBQXRHO0FBQXlHczhCLGtCQUFZLEVBQUN0OEIsRUFBdEg7QUFBeUgyOEIsc0JBQWdCLEVBQUMzOEI7QUFBMUk7QUFBVixHQUF2YztBQUFBLE1BQWdtQjQ4QixFQUFFLEdBQUM7QUFBQ3Z5QixZQUFRLEVBQUM7QUFBQ214QixtQkFBYSxFQUFDdjVCLEVBQUUsQ0FBQzI1QixFQUFELENBQWpCO0FBQXNCSCxpQkFBVyxFQUFDLHFCQUFTamxDLENBQVQsRUFBVztBQUFDLGVBQU93QixDQUFDLENBQUN4QixDQUFELENBQUQsSUFBTW1LLEVBQUUsQ0FBQ25LLENBQUQsRUFBSSxVQUFTQSxDQUFULEVBQVc7QUFBQyxpQkFBT3lMLEVBQUUsQ0FBQzQ1QixFQUFELENBQUYsQ0FBT3JsQyxDQUFQLENBQVA7QUFBaUIsU0FBakMsQ0FBZjtBQUFtRDtBQUFqRyxLQUFWO0FBQTZHMlQsWUFBUSxFQUFDO0FBQUNxeEIsbUJBQWEsRUFBQ0ksRUFBRSxDQUFDLENBQUQsQ0FBakI7QUFBcUJILGlCQUFXLEVBQUMsQ0FBQ0ksRUFBRSxDQUFDLENBQUQsQ0FBSDtBQUFqQyxLQUF0SDtBQUFnS3Z4QixTQUFLLEVBQUNpeEI7QUFBdEssR0FBbm1CO0FBQUEsTUFBNndCc0IsRUFBRSxHQUFDO0FBQUNDLGdCQUFZLEVBQUM7QUFBQ3p5QixjQUFRLEVBQUMweEIsRUFBVjtBQUFhNXhCLGNBQVEsRUFBQ3N5QjtBQUF0QixLQUFkO0FBQXdDTSxpQkFBYSxFQUFDO0FBQUMxeUIsY0FBUSxFQUFDckgsRUFBRSxDQUFDQSxFQUFFLENBQUMsRUFBRCxFQUFJKzRCLEVBQUosQ0FBSCxFQUFXLEVBQVgsRUFBYztBQUFDWSx3QkFBZ0IsRUFBQzM4QixFQUFsQjtBQUFxQms3Qix3QkFBZ0IsRUFBQ0YsRUFBdEM7QUFBeUNHLHdCQUFnQixFQUFDSDtBQUExRCxPQUFkLENBQVo7QUFBeUY3d0IsY0FBUSxFQUFDc3lCLEVBQWxHO0FBQXFHbnlCLFdBQUssRUFBQzJ3QjtBQUEzRyxLQUF0RDtBQUFxSytCLGNBQVUsRUFBQztBQUFDM3lCLGNBQVEsRUFBQztBQUFDd0UsaUJBQVMsRUFBQzlPLEVBQVg7QUFBY29NLGVBQU8sRUFBQzlTLENBQXRCO0FBQXdCNlMsWUFBSSxFQUFDN1MsQ0FBN0I7QUFBK0IrUyxjQUFNLEVBQUMvUyxDQUF0QztBQUF3Q21pQyxxQkFBYSxFQUFDdjVCLEVBQUUsQ0FBQzI1QixFQUFELENBQXhEO0FBQTZESCxtQkFBVyxFQUFDLHFCQUFTamxDLENBQVQsRUFBVztBQUFDLGlCQUFPd0IsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFELElBQU1tSyxFQUFFLENBQUNuSyxDQUFELEVBQUksVUFBU0EsQ0FBVCxFQUFXO0FBQUMsbUJBQU95TCxFQUFFLENBQUM0NUIsRUFBRCxDQUFGLENBQU9ybEMsQ0FBUCxDQUFQO0FBQWlCLFdBQWpDLENBQWY7QUFBbUQsU0FBeEk7QUFBeUlsQixhQUFLLEVBQUN5SyxFQUEvSTtBQUFrSm04QixvQkFBWSxFQUFDbDhCLEVBQS9KO0FBQWtLdThCLDRCQUFvQixFQUFDbkIsRUFBdkw7QUFBMExvQix5QkFBaUIsRUFBQ3g4QixFQUE1TTtBQUErTWs3Qix3QkFBZ0IsRUFBQ0YsRUFBaE87QUFBbU9HLHdCQUFnQixFQUFDSCxFQUFwUDtBQUF1UGpzQix3QkFBZ0IsRUFBQy9PO0FBQXhRLE9BQVY7QUFBc1JtSyxjQUFRLEVBQUM7QUFBQ2dDLGVBQU8sRUFBQ2pMLEVBQVQ7QUFBWWdMLFlBQUksRUFBQ2hMLEVBQWpCO0FBQW9Ca0wsY0FBTSxFQUFDbEwsRUFBM0I7QUFBOEJzNkIscUJBQWEsRUFBQ0ksRUFBRSxDQUFDLENBQUQsQ0FBOUM7QUFBa0RILG1CQUFXLEVBQUMsQ0FBQ0ksRUFBRSxDQUFDLENBQUQsQ0FBSDtBQUE5RCxPQUEvUjtBQUFzV3Z4QixXQUFLLEVBQUMsZUFBUzlULENBQVQsRUFBVztBQUFDeWtDLFVBQUUsQ0FBQ3prQyxDQUFELENBQUYsRUFBTStrQyxFQUFFLENBQUMva0MsQ0FBRCxDQUFSO0FBQVk7QUFBcFksS0FBaEw7QUFBc2pCeW1DLFVBQU0sRUFBQztBQUFDNXlCLGNBQVEsRUFBQztBQUFDd0UsaUJBQVMsRUFBQzlPLEVBQVg7QUFBY29NLGVBQU8sRUFBQzlTLENBQXRCO0FBQXdCNlMsWUFBSSxFQUFDN1MsQ0FBN0I7QUFBK0IrUyxjQUFNLEVBQUMvUyxDQUF0QztBQUF3Qy9ELGFBQUssRUFBQ3lLLEVBQTlDO0FBQWlEbThCLG9CQUFZLEVBQUNsOEIsRUFBOUQ7QUFBaUV1OEIsNEJBQW9CLEVBQUNuQixFQUF0RjtBQUF5Rm9CLHlCQUFpQixFQUFDeDhCLEVBQTNHO0FBQThHazdCLHdCQUFnQixFQUFDRixFQUEvSDtBQUFrSUcsd0JBQWdCLEVBQUNILEVBQW5KO0FBQXNKanNCLHdCQUFnQixFQUFDL08sRUFBdks7QUFBMEtrOUIscUJBQWEsRUFBQyx1QkFBUzFtQyxDQUFULEVBQVc7QUFBQyxpQkFBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNLENBQUMsQ0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR2ttQyxFQUFILEVBQU0sZUFBTixDQUFqQjtBQUF3QyxTQUE1TztBQUE2T1Msa0JBQVUsRUFBQyxvQkFBUzNtQyxDQUFULEVBQVc7QUFBQyxpQkFBT3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBRCxJQUFNLENBQUMsQ0FBQ3lULEVBQUUsQ0FBQ3pULENBQUQsRUFBR29tQyxFQUFILEVBQU0sZUFBTixDQUFqQjtBQUF3QztBQUE1UyxPQUFWO0FBQXdUenlCLGNBQVEsRUFBQztBQUFDZ0MsZUFBTyxFQUFDakwsRUFBVDtBQUFZZ0wsWUFBSSxFQUFDaEwsRUFBakI7QUFBb0JrTCxjQUFNLEVBQUNsTDtBQUEzQixPQUFqVTtBQUFnV29KLFdBQUssRUFBQzJ3QjtBQUF0VztBQUE3akIsR0FBaHhCOztBQUF3ckQsV0FBU21DLEVBQVQsQ0FBWTVtQyxDQUFaLEVBQWNDLENBQWQsRUFBZ0JJLENBQWhCLEVBQWtCO0FBQUN3bUMsTUFBRTs7QUFBRyxRQUFJdG1DLENBQUMsR0FBQ3dULEVBQUUsRUFBUjtBQUFBLFFBQVd0VCxDQUFDLEdBQUMrTCxFQUFFLENBQUNBLEVBQUUsQ0FBQztBQUFDczZCLGFBQU8sRUFBQ3ZtQyxDQUFUO0FBQVcyVCxZQUFNLEVBQUNqQixFQUFFLEVBQXBCO0FBQXVCMkgsUUFBRSxFQUFDeEo7QUFBMUIsS0FBRCxFQUErQmljLEVBQUUsTUFBSTtBQUFDMFosV0FBSyxFQUFDMVosRUFBRTtBQUFULEtBQXJDLENBQUgsRUFBc0QsVUFBU3J0QixDQUFULEVBQVc7QUFBQyxPQUFDLG9CQUFELEVBQXNCLGFBQXRCLEVBQXFDeU0sT0FBckMsQ0FBOEMsVUFBU3hNLENBQVQsRUFBVztBQUFDLGFBQUssQ0FBTCxLQUFTRCxDQUFDLENBQUNDLENBQUQsQ0FBVixLQUFnQkQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBS0QsQ0FBQyxDQUFDQyxDQUFELENBQUQsQ0FBS3VMLElBQUwsQ0FBVSxHQUFWLENBQXJCO0FBQXFDLE9BQS9GLEdBQWtHeEwsQ0FBQyxDQUFDK2xDLG9CQUFGLEtBQXlCL2xDLENBQUMsQ0FBQytsQyxvQkFBRixHQUF1Qno2QixJQUFJLENBQUNDLFNBQUwsQ0FBZXZMLENBQUMsQ0FBQytsQyxvQkFBakIsQ0FBaEQsQ0FBbEc7QUFBMEwsYUFBTy9sQyxDQUFQO0FBQVMsS0FBL00sQ0FBZ05DLENBQWhOLENBQXRELENBQWY7QUFBQSxRQUF5UlUsQ0FBQyxHQUFDNFEsRUFBRSxDQUFDYSxZQUFILEdBQWdCL1IsQ0FBM1M7O0FBQTZTTCxLQUFDLENBQUNxWSxTQUFGLElBQWE1WCxDQUFDLENBQUM0WCxTQUFGLEdBQVlyWSxDQUFDLENBQUNxWSxTQUFkLEVBQXdCbEMsRUFBRSxDQUFDMVYsQ0FBRCxFQUFHRSxDQUFILENBQXZDLEtBQStDbVUsRUFBRSxDQUFDdlUsQ0FBRCxFQUFHLEdBQUdzSixNQUFILENBQVUwSCxFQUFFLENBQUNhLFlBQWIsRUFBMEIsaUJBQTFCLEVBQTZDdkksTUFBN0MsQ0FBb0R0SixDQUFwRCxDQUFILEVBQTBEeW1DLEVBQTFELENBQUYsRUFBZ0UzeEIsRUFBRSxDQUFDclYsQ0FBRCxFQUFHdVIsRUFBRSxDQUFDYSxZQUFOLEVBQW1CNDBCLEVBQW5CLENBQWxFLEVBQXlGbnhCLEVBQUUsQ0FBQ3BWLENBQUQsRUFBRztBQUFDcVYsU0FBRyxFQUFDblYsQ0FBTDtBQUFPb1YsZUFBUyxFQUFDLGVBQWpCO0FBQWlDQyxtQkFBYSxFQUFDO0FBQS9DLEtBQUgsQ0FBMUk7QUFBdVE7O0FBQUEsV0FBU2l4QixFQUFULENBQVlqbkMsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDdU0sRUFBRSxDQUFDLEVBQUQsRUFBSXhNLENBQUosQ0FBUjs7QUFBZSxXQUFNLENBQUMsV0FBRCxFQUFhLFNBQWIsRUFBdUIsTUFBdkIsRUFBOEIsUUFBOUIsRUFBdUMsZUFBdkMsRUFBdUQsWUFBdkQsRUFBcUV5TSxPQUFyRSxDQUE4RSxVQUFTek0sQ0FBVCxFQUFXO0FBQUNDLE9BQUMsQ0FBQ0QsQ0FBRCxDQUFELElBQU0sT0FBT0MsQ0FBQyxDQUFDRCxDQUFELENBQWQ7QUFBa0IsS0FBNUcsR0FBK0dDLENBQXJIO0FBQXVIOztBQUFBLE1BQUkrbUMsRUFBRSxHQUFDLEVBQVA7O0FBQVUsV0FBU0gsRUFBVCxHQUFhO0FBQUN0ekIsTUFBRSxDQUFDeXpCLEVBQUQsQ0FBRjtBQUFPOztBQUFBLE1BQUlFLEVBQUUsR0FBQzd6QixFQUFFLENBQUMsQ0FBQ2pULE1BQU0sQ0FBQ29jLE1BQVAsQ0FBYztBQUFDNU8sYUFBUyxFQUFDLElBQVg7QUFBZ0IyNEIsaUJBQWEsRUFBQyx1QkFBU3ZtQyxDQUFULEVBQVc7QUFBQzRtQyxRQUFFLENBQUM1bUMsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHcW1DLEVBQUUsQ0FBQ0UsYUFBTixFQUFvQixzQkFBcEIsQ0FBTCxFQUFpRFUsRUFBRSxDQUFDam5DLENBQUQsQ0FBbkQsRUFBdUQsa0JBQXZELENBQUY7QUFBNkUsS0FBdkg7QUFBd0hzbUMsZ0JBQVksRUFBQyxzQkFBU3RtQyxDQUFULEVBQVc7QUFBQzRtQyxRQUFFLENBQUM1bUMsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHcW1DLEVBQUUsQ0FBQ0MsWUFBTixFQUFtQixxQkFBbkIsQ0FBTCxFQUErQ1csRUFBRSxDQUFDam5DLENBQUQsQ0FBakQsRUFBcUQsZ0JBQXJELENBQUY7QUFBeUUsS0FBMU47QUFBMk53bUMsY0FBVSxFQUFDLG9CQUFTeG1DLENBQVQsRUFBVztBQUFDNG1DLFFBQUUsQ0FBQzVtQyxDQUFDLEdBQUN5VCxFQUFFLENBQUN6VCxDQUFELEVBQUdxbUMsRUFBRSxDQUFDRyxVQUFOLEVBQWlCLG1CQUFqQixDQUFMLEVBQTJDUyxFQUFFLENBQUNqbkMsQ0FBRCxDQUE3QyxFQUFpRCxjQUFqRCxDQUFGO0FBQW1FLEtBQXJUO0FBQXNUeW1DLFVBQU0sRUFBQyxnQkFBU3ptQyxDQUFULEVBQVc7QUFBQzRtQyxRQUFFLENBQUM1bUMsQ0FBQyxHQUFDeVQsRUFBRSxDQUFDelQsQ0FBRCxFQUFHcW1DLEVBQUUsQ0FBQ0ksTUFBTixFQUFhLGVBQWIsQ0FBTCxFQUFtQ2o2QixFQUFFLENBQUNBLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLEVBQUQsRUFBSXk2QixFQUFFLENBQUNqbkMsQ0FBRCxDQUFOLENBQUgsRUFBY0EsQ0FBQyxDQUFDMG1DLGFBQWhCLENBQUgsRUFBa0MxbUMsQ0FBQyxDQUFDMm1DLFVBQXBDLENBQXJDLEVBQXFGLGFBQXJGLENBQUY7QUFBc0csS0FBL2E7QUFBZ2JyekIsV0FBTyxFQUFDdXpCO0FBQXhiLEdBQWQsQ0FBRCxDQUFELENBQVQ7O0FBQXdkLFdBQVNNLEVBQVQsR0FBYTtBQUFDLFdBQU8sU0FBT2wwQixFQUFFLEVBQWhCO0FBQW1COztBQUFBLFlBQXdDOUcsTUFBTSxDQUFDaTdCLEtBQVAsR0FBYXBuQyxDQUFyRCxHQUF3RCxjQUFZLE9BQU9tTSxNQUFNLENBQUNrN0IsY0FBMUIsSUFBMENqd0IsVUFBVSxDQUFFLFlBQVU7QUFBQ2pMLFVBQU0sQ0FBQ2s3QixjQUFQO0FBQXdCLEdBQXJDLEVBQXVDLENBQXZDLENBQTVHLEVBQXNKcm5DLENBQUMsQ0FBQ3NuQyxPQUFGLEdBQVVwMkIsRUFBaEssRUFBbUtsUixDQUFDLENBQUNzVCxPQUFGLEdBQVUsWUFBVTtBQUFDLFFBQUl0VCxDQUFDLEdBQUMsSUFBTjtBQUFXSSxVQUFNLENBQUM4QyxJQUFQLENBQVksSUFBWixFQUFrQnFILE1BQWxCLENBQTBCLFVBQVN0SyxDQUFULEVBQVc7QUFBQyxhQUFPc0IsQ0FBQyxDQUFDdkIsQ0FBQyxDQUFDQyxDQUFELENBQUYsQ0FBUjtBQUFlLEtBQXJELEVBQXdEd00sT0FBeEQsQ0FBaUUsVUFBU3hNLENBQVQsRUFBVztBQUFDLGFBQU9ELENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUtxVCxPQUFMLEVBQVA7QUFBc0IsS0FBbkcsR0FBc0dKLEVBQUUsQ0FBQyxJQUFELENBQXhHO0FBQStHLEdBQWxULEVBQW1UbFQsQ0FBQyxDQUFDbWtCLElBQUYsR0FBTyxVQUFTbmtCLENBQVQsRUFBVztBQUFDLFFBQUdnUixFQUFFLENBQUNqQixPQUFILENBQVdrRyxJQUFYLElBQWlCakYsRUFBRSxDQUFDakIsT0FBSCxDQUFXYixPQUFYLENBQW1CRyxLQUFuQixHQUF5QixDQUE3QyxFQUErQyxNQUFNLElBQUk4RCxFQUFKLENBQU8saUNBQVAsQ0FBTjtBQUFnRCxRQUFHZzBCLEVBQUUsRUFBTCxFQUFRLE1BQU0sSUFBSWgwQixFQUFKLENBQU8saUNBQVAsQ0FBTjtBQUFnRCxRQUFHLENBQUM1SixFQUFFLENBQUN2SixDQUFELENBQU4sRUFBVSxNQUFNLElBQUltVCxFQUFKLENBQU8sc0NBQVAsQ0FBTjtBQUFxREQsTUFBRSxDQUFDbFQsQ0FBRCxDQUFGLEVBQU0sS0FBS3VuQyxJQUFMLEdBQVV6UyxFQUFoQixFQUFtQixLQUFLMFMsR0FBTCxHQUFTdlMsRUFBNUIsRUFBK0IsS0FBS3dTLEtBQUwsR0FBVzNJLEVBQTFDLEVBQTZDLEtBQUs0SSxJQUFMLEdBQVU1SSxFQUF2RCxFQUEwRCxLQUFLNkksT0FBTCxHQUFhckgsRUFBdkUsRUFBMEUsS0FBS3NILFVBQUwsR0FBZ0I3RyxFQUExRixFQUE2RixLQUFLOEcsS0FBTCxHQUFXOUYsRUFBeEcsRUFBMkcsS0FBSytGLElBQUwsR0FBVXBFLEVBQXJILEVBQXdILEtBQUtxRSxNQUFMLEdBQVliLEVBQXBJO0FBQXVJLEdBQW5xQixFQUFvcUJsbkMsQ0FBQyxDQUFDZ29DLGFBQUYsR0FBZ0JiLEVBQXByQixFQUF1ckIvbUMsTUFBTSxDQUFDeU0sY0FBUCxDQUFzQjdNLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMwRSxTQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDLENBQXZyQjtBQUF3dUIsQ0FBcjMzRyxDQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFBQTtBQUFBO0FBQUE7QUFFQXVqQyw0REFBSyxDQUFDOWpCLElBQU4sQ0FBVyxrQ0FBWCxFLENBQWdEOztBQUVoRCxTQUFTK2pCLFVBQVQsT0FBdUY7QUFBQSxNQUEzRHJwQyxJQUEyRCxRQUFsRSxNQUFrRTtBQUFBLE1BQTdDQyxLQUE2QyxRQUFyRCxPQUFxRDtBQUFBLE1BQWhDQyxHQUFnQyxRQUF0QyxLQUFzQztBQUFBLE1BQXJCYyxHQUFxQixRQUEzQixLQUEyQjtBQUFBLE1BQVJzb0MsS0FBUSxRQUFoQixPQUFnQjtBQUNuRmYsT0FBSyxDQUFDSyxLQUFOLENBQVl6SSxXQUFaLENBQXdCO0FBQ3hCeEYsY0FBVSxFQUFFLFVBRFk7QUFFeEJhLFdBQU8sRUFBRXg3QixJQUZlO0FBR3hCMDdCLGdCQUFZLEVBQUV6N0IsS0FIVTtBQUl4QjZ4QixXQUFPLEVBQUU7QUFDTDd4QixXQUFLLEVBQUVBLEtBREY7QUFFTGlCLGlCQUFXLEVBQUNoQixHQUZQO0FBR0xpNEIsY0FBUSxFQUFDbjNCLEdBSEo7QUFJTDYyQixVQUFJLEVBQUU7QUFDTjtBQUNBZixvQkFBWSxFQUFFLHdCQUZSO0FBR05ELGNBQU0sRUFBRTtBQUhGO0FBSkQsS0FKZTtBQWN4QmtDLFVBQU0sRUFBRTtBQUNKQyxlQUFTLEVBQUVzUSxLQURQLENBRUo7QUFDQTs7QUFISSxLQWRnQjtBQW1CeEJwUixXQUFPLEVBQUUsQ0FDTDtBQUNBajRCLFdBQUssRUFBRSxRQURQO0FBRUE0M0IsVUFBSSxFQUFFO0FBQ0ZmLG9CQUFZLEVBQUUsd0JBRFo7QUFFRkQsY0FBTSxFQUFFO0FBRk47QUFGTixLQURLO0FBbkJlLEdBQXhCO0FBNkJIOztBQUVjd1MseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM3YTg4MWQ0OThmZjI5YTc5MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWlUd290b25lSGVhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBQbGFjZU1vZGFsIGZyb20gXCIuL3BsYWNlX21vZGFsXCI7XG5pbXBvcnQgaW1nIGZyb20gJy4uL2Fzc2V0cy93b3JrYXV0LnBuZyc7XG5pbXBvcnQgbWFwaWNvbiBmcm9tICcuLi9hc3NldHMvbWFwLWljb24ucG5nJztcbmltcG9ydCBnZXRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXRcIjtcbmltcG9ydCBrYWthb1NoYXJlIGZyb20gXCIuLi9zZXJ2aWNlcy9rYWthb1NoYXJlXCI7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBNYXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWtha2FvLW1hcHMtc2RrXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLk1hcCksIHtcbiAgICBzc3I6IGZhbHNlXG59KTtcbmNvbnN0IE1hcE1hcmtlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3Qta2FrYW8tbWFwcy1zZGtcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWFwTWFya2VyKSwge1xuICAgIHNzcjogZmFsc2Vcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBhZGRyID0gJ+qyveq4sOuPhCDrtoDsspzsi5wg7IaM7IKs66GcNDgyJztcbiAgICBsZXQgdGl0bGUgPSAn67aA7LKcIOyihe2VqSDsmrTrj5nsnqUnO1xuICAgIGxldCBkZXMgPSAnI+yXkOyWtOuhnOu5hSAj7KSM67CUICPsobDquYUnO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImQtZmxleCBtdC00IG1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPSfrtoDsspwg7KKF7ZWpIOyatOuPmeyepScgbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9XCLqsr3quLDrj4Qg67aA7LKc7IucIOyGjOyCrOuhnDQ4MlwiIGNvbD0nYmctc2Vjb25kYXJ5JyB0ZXh0Q2xpY2s9eygpPT57IHNldExnU2hvdyh0cnVlKX19PjwvTGlzdD5cbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT0n67aA7LKcIOyihe2VqSDsmrTrj5nsnqUnIG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPVwi6rK96riw64+EIOu2gOyynOyLnCDshozsgqzroZw0ODJcIiBjb2w9J2JnLWRhbmdlcicgdGV4dENsaWNrPXsoKT0+eyBzZXRMZ1Nob3codHJ1ZSl9fT48L0xpc3Q+XG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9J+u2gOyynCDsooXtlakg7Jq064+Z7J6lJyBtYWxjbnQ9ezxBaVR3b3RvbmVIZWFydCAvPn0gbm90ZT1cIuqyveq4sOuPhCDrtoDsspzsi5wg7IaM7IKs66GcNDgyXCIgY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxuICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPSfrtoDsspwg7KKF7ZWpIOyatOuPmeyepScgbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9XCLqsr3quLDrj4Qg67aA7LKc7IucIOyGjOyCrOuhnDQ4MlwiIGNvbD0nYmctc2Vjb25kYXJ5JyB0ZXh0Q2xpY2s9eygpPT57IHNldExnU2hvdyh0cnVlKX19PjwvTGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtNiBtcy00XCI+XG4gICAgICAgICAgICA8TWFwIGNlbnRlcj17eyBsYXQ6IDMzLjU1NjMsIGxuZzogMTI2Ljc5NTgxIH19IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjgwMHB4XCIgfX0gIGxldmVsPXs1IH0+XG4gICAgICAgICAgICAgICAgPE1hcE1hcmtlciBwb3NpdGlvbj17eyBsYXQ6IDMzLjU1NjM1LCBsbmc6IDEyNi43OTU4NDEgfX0gIGltYWdlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGAke21hcGljb259YCwgLy8g66eI7Luk7J2066+47KeA7J2YIOyjvOyGjOyeheuLiOuLpFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgLy8g66eI7Luk7J2066+47KeA7J2YIO2BrOq4sOyeheuLiOuLpFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDI3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDY5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIOuniOy7pOydtOuvuOyngOydmCDsmLXshZjsnoXri4jri6QuIOuniOy7pOydmCDsooztkZzsmYAg7J287LmY7Iuc7YKsIOydtOuvuOyngCDslYjsl5DshJzsnZgg7KKM7ZGc66W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBjb2xvcjogXCIjMDAwXCIgfX0+67aA7LKcIOyihe2VqeyatOuPmeyepTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L01hcE1hcmtlcj5cbiAgICAgICAgICAgICAgICA8L01hcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBsYWNlTW9kYWwgbGdTaG93PXtsZ1Nob3d9IHNldExnU2hvdz17c2V0TGdTaG93fSBzY29yZT17M30gYWRkcj17YWRkcn0gdGl0bGU9e3RpdGxlfSBkZXM9e2Rlc30gaW1nPXtpbWd9IC8+ICBcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5nZXRMYXlvdXQoSW5kZXgse3RpdGxlOifso7zrs4Dsl5DshJwg7Jq064+Z7ZW07JqUISBXQUtBVVQhJyxkZXNjcmlwdGlvbjon7Iug6rCc64WQIOyatOuPmSDtlIzrnqvtj7wg7JuM7YGs7JWE7JuDISd9KVxuIiwiLyoqXHJcbiAqIEtha2FvIFNESyBmb3IgSmF2YVNjcmlwdCAtIHYxLjQzLjFcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTcgS2FrYW8gQ29ycC5cclxuICpcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqXHJcbiAqXHJcbiAqIE9TUyBOb3RpY2UgfCBLYWthb1NESy1KYXZhc2NyaXB0XHJcbiAqXHJcbiAqIFRoaXMgYXBwbGljYXRpb24gaXMgQ29weXJpZ2h0IMKpIEtha2FvIENvcnAuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIFRoZSBmb2xsb3dpbmcgc2V0cyBmb3J0aCBhdHRyaWJ1dGlvbiBub3RpY2VzIGZvciB0aGlyZCBwYXJ0eSBzb2Z0d2FyZSB0aGF0IG1heSBiZSBjb250YWluZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi5cclxuICogSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucywgcGxlYXNlIGNvbnRhY3QgdXMgYXQgb3BlbnNvdXJjZUBrYWthb2NvcnAuY29tXHJcbiAqXHJcbiAqXHJcbiAqIGNyeXB0by1qc1xyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYnJpeC9jcnlwdG8tanNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZWZmIE1vdHRcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxNiBFdmFuIFZvc2JlcmdcclxuICpcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICpcclxuICogZWFzeVhETVxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vb3l2aW5ka2luc2V5L2Vhc3lYRE0vXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDA5LTIwMTEgw5h5dmluZCBTZWFuIEtpbnNleSwgb3l2aW5kQGtpbnNleS5ub1xyXG4gKlxyXG4gKiBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKlxyXG4gKiBFUzYtUHJvbWlzZVxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzXHJcbiAqXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqXHJcbiAqIEtha2FvIFdlYjJBcHAgTGlicmFyeVxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20va2FrYW8vd2ViMmFwcFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBLYWthbyBDb3JwLiBodHRwOi8vd3d3Lmtha2FvY29ycC5jb21cclxuICpcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICpcclxuICogbG9kYXNoXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoXHJcbiAqXHJcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICpcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICpcclxuICogdWFfcGFyc2VyXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9odG1sNWNyZXcvdWFfcGFyc2VyXHJcbiAqXHJcbiAqIENvcHlyaWdodCBIVE1MNSBUZWNoLiBUZWFtIGluIERhdW0gQ29tbXVuaWNhdGlvbnMgQ29ycC5cclxuICpcclxuICogTUlUIExpY2Vuc2VcclxuICpcclxuICpcclxuICogYGBgYGBgYGBgYFxyXG4gKiBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xyXG4gKiBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuICogJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xyXG4gKiB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXHJcbiAqIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xyXG4gKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cclxuICogdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXHJcbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXHJcbiAqIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXHJcbiAqIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXHJcbiAqIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKiBgYGBgYGBgYGBgXHJcbiAqL1xyXG5cclxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dCgoZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLktha2FvPWUuS2FrYW98fHt9KX0odGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsbj1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYscj10fHxufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksbz1yLlN5bWJvbCxpPU9iamVjdC5wcm90b3R5cGUsYT1pLmhhc093blByb3BlcnR5LGM9aS50b1N0cmluZyxzPW8/by50b1N0cmluZ1RhZzp2b2lkIDA7dmFyIHU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgbD1vP28udG9TdHJpbmdUYWc6dm9pZCAwO2Z1bmN0aW9uIGQoZSl7cmV0dXJuIG51bGw9PWU/dm9pZCAwPT09ZT9cIltvYmplY3QgVW5kZWZpbmVkXVwiOlwiW29iamVjdCBOdWxsXVwiOmwmJmwgaW4gT2JqZWN0KGUpP2Z1bmN0aW9uKGUpe3ZhciB0PWEuY2FsbChlLHMpLG49ZVtzXTt0cnl7ZVtzXT12b2lkIDA7dmFyIHI9ITB9Y2F0Y2goZSl7fXZhciBvPWMuY2FsbChlKTtyZXR1cm4gciYmKHQ/ZVtzXT1uOmRlbGV0ZSBlW3NdKSxvfShlKTpmdW5jdGlvbihlKXtyZXR1cm4gdS5jYWxsKGUpfShlKX1mdW5jdGlvbiBwKGUpe3JldHVybiBudWxsIT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX12YXIgZj1BcnJheS5pc0FycmF5LGg9L1xccy87dmFyIG09L15cXHMrLztmdW5jdGlvbiB2KGUpe3JldHVybiBlP2Uuc2xpY2UoMCxmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7dC0tJiZoLnRlc3QoZS5jaGFyQXQodCkpOyk7cmV0dXJuIHR9KGUpKzEpLnJlcGxhY2UobSxcIlwiKTplfWZ1bmN0aW9uIGcoZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuIG51bGwhPWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfXZhciB5PS9eWy0rXTB4WzAtOWEtZl0rJC9pLGI9L14wYlswMV0rJC9pLF89L14wb1swLTddKyQvaSxrPXBhcnNlSW50O2Z1bmN0aW9uIHcoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoZnVuY3Rpb24oZSl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGV8fHAoZSkmJlwiW29iamVjdCBTeW1ib2xdXCI9PWQoZSl9KGUpKXJldHVybiBOYU47aWYoZyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1nKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9dihlKTt2YXIgbj1iLnRlc3QoZSk7cmV0dXJuIG58fF8udGVzdChlKT9rKGUuc2xpY2UoMiksbj8yOjgpOnkudGVzdChlKT9OYU46K2V9dmFyIFM9MS8wO2Z1bmN0aW9uIHgoZSl7dmFyIHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/KGU9dyhlKSk9PT1TfHxlPT09LTEvMD8xNzk3NjkzMTM0ODYyMzE1N2UyOTIqKGU8MD8tMToxKTplPT1lP2U6MDowPT09ZT9lOjB9KGUpLG49dCUxO3JldHVybiB0PT10P24/dC1uOnQ6MH1mdW5jdGlvbiBPKGUpe3JldHVybiBlfWZ1bmN0aW9uIGooZSl7aWYoIWcoZSkpcmV0dXJuITE7dmFyIHQ9ZChlKTtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09dHx8XCJbb2JqZWN0IEFzeW5jRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBQcm94eV1cIj09dH12YXIgQSxUPXJbXCJfX2NvcmUtanNfc2hhcmVkX19cIl0sQz0oQT0vW14uXSskLy5leGVjKFQmJlQua2V5cyYmVC5rZXlzLklFX1BST1RPfHxcIlwiKSk/XCJTeW1ib2woc3JjKV8xLlwiK0E6XCJcIjt2YXIgST1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7dmFyIFA9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxGPUZ1bmN0aW9uLnByb3RvdHlwZSxCPU9iamVjdC5wcm90b3R5cGUsRT1GLnRvU3RyaW5nLFU9Qi5oYXNPd25Qcm9wZXJ0eSxSPVJlZ0V4cChcIl5cIitFLmNhbGwoVSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKTtmdW5jdGlvbiBMKGUpe3JldHVybiEoIWcoZSl8fCh0PWUsQyYmQyBpbiB0KSkmJihqKGUpP1I6UCkudGVzdChmdW5jdGlvbihlKXtpZihudWxsIT1lKXt0cnl7cmV0dXJuIEkuY2FsbChlKX1jYXRjaChlKXt9dHJ5e3JldHVybiBlK1wiXCJ9Y2F0Y2goZSl7fX1yZXR1cm5cIlwifShlKSk7dmFyIHR9ZnVuY3Rpb24gTShlLHQsbil7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIGUuY2FsbCh0KTtjYXNlIDE6cmV0dXJuIGUuY2FsbCh0LG5bMF0pO2Nhc2UgMjpyZXR1cm4gZS5jYWxsKHQsblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIGUuY2FsbCh0LG5bMF0sblsxXSxuWzJdKX1yZXR1cm4gZS5hcHBseSh0LG4pfXZhciB6PURhdGUubm93O3ZhciBELHEsTixLPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPUwodD1mdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1lP3ZvaWQgMDplW3RdfShPYmplY3QsXCJkZWZpbmVQcm9wZXJ0eVwiKSk/dDp2b2lkIDA7cmV0dXJuIGUoe30sXCJcIix7fSksZX1jYXRjaChlKXt9dmFyIHR9KCksSD1LLEo9SD9mdW5jdGlvbihlLHQpe3JldHVybiBIKGUsXCJ0b1N0cmluZ1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZToobj10LGZ1bmN0aW9uKCl7cmV0dXJuIG59KSx3cml0YWJsZTohMH0pO3ZhciBufTpPLFc9KEQ9SixxPTAsTj0wLGZ1bmN0aW9uKCl7dmFyIGU9eigpLHQ9MTYtKGUtTik7aWYoTj1lLHQ+MCl7aWYoKytxPj04MDApcmV0dXJuIGFyZ3VtZW50c1swXX1lbHNlIHE9MDtyZXR1cm4gRC5hcHBseSh2b2lkIDAsYXJndW1lbnRzKX0pLFg9VztmdW5jdGlvbiAkKGUsdCl7Zm9yKHZhciBuPS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoOysrbjxyJiYhMSE9PXQoZVtuXSxuLGUpOyk7cmV0dXJuIGV9dmFyIEc9L14oPzowfFsxLTldXFxkKikkLztmdW5jdGlvbiBWKGUsdCl7dmFyIG49dHlwZW9mIGU7cmV0dXJuISEodD1udWxsPT10PzkwMDcxOTkyNTQ3NDA5OTE6dCkmJihcIm51bWJlclwiPT1ufHxcInN5bWJvbFwiIT1uJiZHLnRlc3QoZSkpJiZlPi0xJiZlJTE9PTAmJmU8dH1mdW5jdGlvbiBZKGUsdCxuKXtcIl9fcHJvdG9fX1wiPT10JiZIP0goZSx0LHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpuLHdyaXRhYmxlOiEwfSk6ZVt0XT1ufWZ1bmN0aW9uIFEoZSx0KXtyZXR1cm4gZT09PXR8fGUhPWUmJnQhPXR9dmFyIFo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBlZShlLHQsbil7dmFyIHI9ZVt0XTtaLmNhbGwoZSx0KSYmUShyLG4pJiYodm9pZCAwIT09bnx8dCBpbiBlKXx8WShlLHQsbil9dmFyIHRlPU1hdGgubWF4O2Z1bmN0aW9uIG5lKGUsdCl7cmV0dXJuIFgoZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0PXRlKHZvaWQgMD09PXQ/ZS5sZW5ndGgtMTp0LDApLGZ1bmN0aW9uKCl7Zm9yKHZhciByPWFyZ3VtZW50cyxvPS0xLGk9dGUoci5sZW5ndGgtdCwwKSxhPUFycmF5KGkpOysrbzxpOylhW29dPXJbdCtvXTtvPS0xO2Zvcih2YXIgYz1BcnJheSh0KzEpOysrbzx0OyljW29dPXJbb107cmV0dXJuIGNbdF09bihhKSxNKGUsdGhpcyxjKX19KGUsdCxPKSxlK1wiXCIpfWZ1bmN0aW9uIHJlKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiZlPi0xJiZlJTE9PTAmJmU8PTkwMDcxOTkyNTQ3NDA5OTF9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuIG51bGwhPWUmJnJlKGUubGVuZ3RoKSYmIWooZSl9ZnVuY3Rpb24gaWUoZSx0LG4pe2lmKCFnKG4pKXJldHVybiExO3ZhciByPXR5cGVvZiB0O3JldHVybiEhKFwibnVtYmVyXCI9PXI/b2UobikmJlYodCxuLmxlbmd0aCk6XCJzdHJpbmdcIj09ciYmdCBpbiBuKSYmUShuW3RdLGUpfXZhciBhZT1PYmplY3QucHJvdG90eXBlO2Z1bmN0aW9uIGNlKGUpe3ZhciB0PWUmJmUuY29uc3RydWN0b3I7cmV0dXJuIGU9PT0oXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdC5wcm90b3R5cGV8fGFlKX1mdW5jdGlvbiBzZShlKXtyZXR1cm4gcChlKSYmXCJbb2JqZWN0IEFyZ3VtZW50c11cIj09ZChlKX12YXIgdWU9T2JqZWN0LnByb3RvdHlwZSxsZT11ZS5oYXNPd25Qcm9wZXJ0eSxkZT11ZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxwZT1zZShmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpP3NlOmZ1bmN0aW9uKGUpe3JldHVybiBwKGUpJiZsZS5jYWxsKGUsXCJjYWxsZWVcIikmJiFkZS5jYWxsKGUsXCJjYWxsZWVcIil9LGZlPXBlO3ZhciBoZT1cIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmIWUubm9kZVR5cGUmJmUsbWU9aGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLHZlPW1lJiZtZS5leHBvcnRzPT09aGU/ci5CdWZmZXI6dm9pZCAwLGdlPSh2ZT92ZS5pc0J1ZmZlcjp2b2lkIDApfHxmdW5jdGlvbigpe3JldHVybiExfSx5ZT17fTt5ZVtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT15ZVtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT15ZVtcIltvYmplY3QgSW50OEFycmF5XVwiXT15ZVtcIltvYmplY3QgSW50MTZBcnJheV1cIl09eWVbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPXllW1wiW29iamVjdCBVaW50OEFycmF5XVwiXT15ZVtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPXllW1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09eWVbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT0hMCx5ZVtcIltvYmplY3QgQXJndW1lbnRzXVwiXT15ZVtcIltvYmplY3QgQXJyYXldXCJdPXllW1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09eWVbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPXllW1wiW29iamVjdCBEYXRhVmlld11cIl09eWVbXCJbb2JqZWN0IERhdGVdXCJdPXllW1wiW29iamVjdCBFcnJvcl1cIl09eWVbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT15ZVtcIltvYmplY3QgTWFwXVwiXT15ZVtcIltvYmplY3QgTnVtYmVyXVwiXT15ZVtcIltvYmplY3QgT2JqZWN0XVwiXT15ZVtcIltvYmplY3QgUmVnRXhwXVwiXT15ZVtcIltvYmplY3QgU2V0XVwiXT15ZVtcIltvYmplY3QgU3RyaW5nXVwiXT15ZVtcIltvYmplY3QgV2Vha01hcF1cIl09ITE7dmFyIGJlPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiYhZS5ub2RlVHlwZSYmZSxfZT1iZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsa2U9X2UmJl9lLmV4cG9ydHM9PT1iZSYmdC5wcm9jZXNzLHdlPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPV9lJiZfZS5yZXF1aXJlJiZfZS5yZXF1aXJlKFwidXRpbFwiKS50eXBlcztyZXR1cm4gZXx8a2UmJmtlLmJpbmRpbmcmJmtlLmJpbmRpbmcoXCJ1dGlsXCIpfWNhdGNoKGUpe319KCksU2U9d2UmJndlLmlzVHlwZWRBcnJheSx4ZT1TZT9mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9fShTZSk6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJnJlKGUubGVuZ3RoKSYmISF5ZVtkKGUpXX0sT2U9eGUsamU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBBZShlLHQpe3ZhciBuPWYoZSkscj0hbiYmZmUoZSksbz0hbiYmIXImJmdlKGUpLGk9IW4mJiFyJiYhbyYmT2UoZSksYT1ufHxyfHxvfHxpLGM9YT9mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0tMSxyPUFycmF5KGUpOysrbjxlOylyW25dPXQobik7cmV0dXJuIHJ9KGUubGVuZ3RoLFN0cmluZyk6W10scz1jLmxlbmd0aDtmb3IodmFyIHUgaW4gZSkhdCYmIWplLmNhbGwoZSx1KXx8YSYmKFwibGVuZ3RoXCI9PXV8fG8mJihcIm9mZnNldFwiPT11fHxcInBhcmVudFwiPT11KXx8aSYmKFwiYnVmZmVyXCI9PXV8fFwiYnl0ZUxlbmd0aFwiPT11fHxcImJ5dGVPZmZzZXRcIj09dSl8fFYodSxzKSl8fGMucHVzaCh1KTtyZXR1cm4gY31mdW5jdGlvbiBUZShlLHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gZSh0KG4pKX19dmFyIENlPVRlKE9iamVjdC5rZXlzLE9iamVjdCksSWU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBQZShlKXtyZXR1cm4gb2UoZSk/QWUoZSk6ZnVuY3Rpb24oZSl7aWYoIWNlKGUpKXJldHVybiBDZShlKTt2YXIgdD1bXTtmb3IodmFyIG4gaW4gT2JqZWN0KGUpKUllLmNhbGwoZSxuKSYmXCJjb25zdHJ1Y3RvclwiIT1uJiZ0LnB1c2gobik7cmV0dXJuIHR9KGUpfXZhciBGZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O2Z1bmN0aW9uIEJlKGUpe2lmKCFnKGUpKXJldHVybiBmdW5jdGlvbihlKXt2YXIgdD1bXTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBPYmplY3QoZSkpdC5wdXNoKG4pO3JldHVybiB0fShlKTt2YXIgdD1jZShlKSxuPVtdO2Zvcih2YXIgciBpbiBlKShcImNvbnN0cnVjdG9yXCIhPXJ8fCF0JiZGZS5jYWxsKGUscikpJiZuLnB1c2gocik7cmV0dXJuIG59ZnVuY3Rpb24gRWUoZSl7cmV0dXJuIG9lKGUpP0FlKGUsITApOkJlKGUpfXZhciBVZSxSZT0oVWU9ZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSx0LG4scil7dmFyIG89IW47bnx8KG49e30pO2Zvcih2YXIgaT0tMSxhPXQubGVuZ3RoOysraTxhOyl7dmFyIGM9dFtpXSxzPXI/cihuW2NdLGVbY10sYyxuLGUpOnZvaWQgMDt2b2lkIDA9PT1zJiYocz1lW2NdKSxvP1kobixjLHMpOmVlKG4sYyxzKX19KHQsRWUodCksZSl9LG5lKChmdW5jdGlvbihlLHQpe3ZhciBuPS0xLHI9dC5sZW5ndGgsbz1yPjE/dFtyLTFdOnZvaWQgMCxpPXI+Mj90WzJdOnZvaWQgMDtmb3Iobz1VZS5sZW5ndGg+MyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbz8oci0tLG8pOnZvaWQgMCxpJiZpZSh0WzBdLHRbMV0saSkmJihvPXI8Mz92b2lkIDA6byxyPTEpLGU9T2JqZWN0KGUpOysrbjxyOyl7dmFyIGE9dFtuXTthJiZVZShlLGEsbixvKX1yZXR1cm4gZX0pKSksTGU9VGUoT2JqZWN0LmdldFByb3RvdHlwZU9mLE9iamVjdCksTWU9RnVuY3Rpb24ucHJvdG90eXBlLHplPU9iamVjdC5wcm90b3R5cGUsRGU9TWUudG9TdHJpbmcscWU9emUuaGFzT3duUHJvcGVydHksTmU9RGUuY2FsbChPYmplY3QpO3ZhciBLZSxIZT1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPS0xLG89T2JqZWN0KGUpLGk9bihlKSxhPWkubGVuZ3RoO2EtLTspe3ZhciBjPWlbS2U/YTorK3JdO2lmKCExPT09dChvW2NdLGMsbykpYnJlYWt9cmV0dXJuIGV9O3ZhciBKZT1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihuLHIpe2lmKG51bGw9PW4pcmV0dXJuIG47aWYoIW9lKG4pKXJldHVybiBlKG4scik7Zm9yKHZhciBvPW4ubGVuZ3RoLGk9dD9vOi0xLGE9T2JqZWN0KG4pOyh0P2ktLTorK2k8bykmJiExIT09cihhW2ldLGksYSk7KTtyZXR1cm4gbn19KChmdW5jdGlvbihlLHQpe3JldHVybiBlJiZIZShlLHQsUGUpfSkpLFdlPUplLFhlPU9iamVjdC5wcm90b3R5cGUsJGU9WGUuaGFzT3duUHJvcGVydHksR2U9bmUoKGZ1bmN0aW9uKGUsdCl7ZT1PYmplY3QoZSk7dmFyIG49LTEscj10Lmxlbmd0aCxvPXI+Mj90WzJdOnZvaWQgMDtmb3IobyYmaWUodFswXSx0WzFdLG8pJiYocj0xKTsrK248cjspZm9yKHZhciBpPXRbbl0sYT1FZShpKSxjPS0xLHM9YS5sZW5ndGg7KytjPHM7KXt2YXIgdT1hW2NdLGw9ZVt1XTsodm9pZCAwPT09bHx8UShsLFhlW3VdKSYmISRlLmNhbGwoZSx1KSkmJihlW3VdPWlbdV0pfXJldHVybiBlfSkpO2Z1bmN0aW9uIFZlKGUsdCl7dmFyIG47cmV0dXJuKGYoZSk/JDpXZSkoZSxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQpP246Tyl9ZnVuY3Rpb24gWWUoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV8fCFmKGUpJiZwKGUpJiZcIltvYmplY3QgU3RyaW5nXVwiPT1kKGUpfWZ1bmN0aW9uIFFlKGUpe3JldHVybiEwPT09ZXx8ITE9PT1lfHxwKGUpJiZcIltvYmplY3QgQm9vbGVhbl1cIj09ZChlKX1mdW5jdGlvbiBaZShlKXtyZXR1cm4gcChlKSYmMT09PWUubm9kZVR5cGUmJiFmdW5jdGlvbihlKXtpZighcChlKXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9ZChlKSlyZXR1cm4hMTt2YXIgdD1MZShlKTtpZihudWxsPT09dClyZXR1cm4hMDt2YXIgbj1xZS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgbiYmRGUuY2FsbChuKT09TmV9KGUpfWZ1bmN0aW9uIGV0KGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiZlPT14KGUpfWZ1bmN0aW9uIHR0KGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlfHxwKGUpJiZcIltvYmplY3QgTnVtYmVyXVwiPT1kKGUpfWZ1bmN0aW9uIG50KGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpPT09XCJbb2JqZWN0IFwiLmNvbmNhdChlLFwiXVwiKX19ZnVuY3Rpb24gcnQoZSl7cmV0dXJuIG50KFwiQmxvYlwiKShlKX1mdW5jdGlvbiBvdChlKXtyZXR1cm4gbnQoXCJGaWxlXCIpKGUpfWZ1bmN0aW9uIGl0KGUpe3JldHVybiBudChcIkZpbGVMaXN0XCIpKGUpfWZ1bmN0aW9uIGF0KGUsdCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpLm1hcCh0KX1mdW5jdGlvbiBjdChlLHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKS5ldmVyeSh0KX1mdW5jdGlvbiBzdChlLHQpe3JldHVybltlLHRdLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybi0xPT09dC5pbmRleE9mKGUpfSkpfSkpfWZ1bmN0aW9uIHV0KGUpe3JldHVybiBPYmplY3Qua2V5cyhlfHx7fSl9ZnVuY3Rpb24gbHQoKXt9ZnVuY3Rpb24gZHQoKXtyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMil9ZnVuY3Rpb24gcHQoZSl7cmV0dXJuIFplKGUpP2U6WWUoZSk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTpudWxsfWZ1bmN0aW9uIGZ0KGUsdCxuKXtlLmFkZEV2ZW50TGlzdGVuZXImJmUuYWRkRXZlbnRMaXN0ZW5lcih0LG4sITEpfWZ1bmN0aW9uIGh0KGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sITEpfWZ1bmN0aW9uIG10KGUpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV0sbj10P2VuY29kZVVSSUNvbXBvbmVudDpmdW5jdGlvbihlKXtyZXR1cm4gZX0scj1hdCh1dChlKSwoZnVuY3Rpb24odCl7dmFyIHI9ZVt0XTtyZXR1cm4gbih0KStcIj1cIituKHAocik/SlNPTi5zdHJpbmdpZnkocik6cil9KSk7cmV0dXJuIHIuam9pbihcIiZcIil9ZnVuY3Rpb24gdnQoZSl7aWYoIWYoZSkpdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgc2hvdWxkIGJlIGFuIEFycmF5XCIpO3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZS5pbmRleE9mKHQpPi0xfX1mdW5jdGlvbiBndChlKXtpZighZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJ2YWxpZGF0b3JzIHNob3VsZCBiZSBhbiBBcnJheVwiKTtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUodCl9KSl9fXZhciB5dD1mdW5jdGlvbigpe3ZhciBlPXtfZGF0YTp7fSxzZXRJdGVtOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuX2RhdGFbZV09U3RyaW5nKHQpfSxnZXRJdGVtOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGUpP3RoaXMuX2RhdGFbZV06bnVsbH0scmVtb3ZlSXRlbTpmdW5jdGlvbihlKXtyZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbZV19LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGE9e319fTt0cnl7cmV0dXJuXCJsb2NhbFN0b3JhZ2VcImluIHdpbmRvdyYmbnVsbCE9PXdpbmRvdy5sb2NhbFN0b3JhZ2U/KHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JlXCIsXCJcIiksd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic3RvcmVcIiksd2luZG93LmxvY2FsU3RvcmFnZSk6ZX1jYXRjaCh0KXtyZXR1cm4gZX19KCk7ZnVuY3Rpb24gYnQoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihyPXIuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIF90KGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP2J0KE9iamVjdChuKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T3QoZSx0LG5bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOmJ0KE9iamVjdChuKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGt0KGUpe3JldHVybiBrdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxrdChlKX1mdW5jdGlvbiB3dChlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gU3QoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsVXQoci5rZXkpLHIpfX1mdW5jdGlvbiB4dChlLHQsbil7cmV0dXJuIHQmJlN0KGUucHJvdG90eXBlLHQpLG4mJlN0KGUsbiksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJwcm90b3R5cGVcIix7d3JpdGFibGU6ITF9KSxlfWZ1bmN0aW9uIE90KGUsdCxuKXtyZXR1cm4odD1VdCh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiBqdChlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJwcm90b3R5cGVcIix7d3JpdGFibGU6ITF9KSx0JiZUdChlLHQpfWZ1bmN0aW9uIEF0KGUpe3JldHVybiBBdD1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKTpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0sQXQoZSl9ZnVuY3Rpb24gVHQoZSx0KXtyZXR1cm4gVHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5fX3Byb3RvX189dCxlfSxUdChlLHQpfWZ1bmN0aW9uIEN0KGUsdCl7aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSlyZXR1cm4gdDtpZih2b2lkIDAhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGV9KGUpfWZ1bmN0aW9uIEl0KGUpe3ZhciB0PWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sW10sKGZ1bmN0aW9uKCl7fSkpKSwhMH1jYXRjaChlKXtyZXR1cm4hMX19KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG4scj1BdChlKTtpZih0KXt2YXIgbz1BdCh0aGlzKS5jb25zdHJ1Y3RvcjtuPVJlZmxlY3QuY29uc3RydWN0KHIsYXJndW1lbnRzLG8pfWVsc2Ugbj1yLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gQ3QodGhpcyxuKX19ZnVuY3Rpb24gUHQoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7dmFyIG49bnVsbD09ZT9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXXx8ZVtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9bil7dmFyIHIsbyxpLGEsYz1bXSxzPSEwLHU9ITE7dHJ5e2lmKGk9KG49bi5jYWxsKGUpKS5uZXh0LDA9PT10KXtpZihPYmplY3QobikhPT1uKXJldHVybjtzPSExfWVsc2UgZm9yKDshKHM9KHI9aS5jYWxsKG4pKS5kb25lKSYmKGMucHVzaChyLnZhbHVlKSxjLmxlbmd0aCE9PXQpO3M9ITApO31jYXRjaChlKXt1PSEwLG89ZX1maW5hbGx5e3RyeXtpZighcyYmbnVsbCE9bi5yZXR1cm4mJihhPW4ucmV0dXJuKCksT2JqZWN0KGEpIT09YSkpcmV0dXJufWZpbmFsbHl7aWYodSl0aHJvdyBvfX1yZXR1cm4gY319KGUsdCl8fEJ0KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBGdChlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gRXQoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZudWxsIT1lW1N5bWJvbC5pdGVyYXRvcl18fG51bGwhPWVbXCJAQGl0ZXJhdG9yXCJdKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8QnQoZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gQnQoZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gRXQoZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP0V0KGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBFdChlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KHQpO248dDtuKyspcltuXT1lW25dO3JldHVybiByfWZ1bmN0aW9uIFV0KGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciBuPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1uKXt2YXIgcj1uLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpcmV0dXJuIHI7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OlN0cmluZyh0KX12YXIgUnQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9LEx0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgbj17fSxyPS8oZG9sZmluKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8LyhlZGdlKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8LyhjaHJvbWUpWyBcXC9dKFtcXHcuXSspLy5leGVjKGUpfHwvKHRpemVuKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8LyhvcGVyYSkoPzouKnZlcnNpb24pP1sgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8Lyh3ZWJraXQpKD86Lip2ZXJzaW9uKT9bIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8obXNpZSkgKFtcXHcuXSspLy5leGVjKGUpfHxlLmluZGV4T2YoXCJjb21wYXRpYmxlXCIpPDAmJi8obW96aWxsYSkoPzouKj8gcnY6KFtcXHcuXSspKT8vLmV4ZWMoZSl8fFtcIlwiLFwidW5rbm93blwiXTtyZXR1cm5cIndlYmtpdFwiPT09clsxXT9yPS8oaXBob25lfGlwYWR8aXBvZClbXFxTXFxzXSpvcyAoW1xcdy5fXFwtXSspIGxpa2UvLmV4ZWMoZSl8fC8oYW5kcm9pZClbIFxcL10oW1xcdy5fXFwtXSspOy8uZXhlYyhlKXx8W3JbMF0sXCJzYWZhcmlcIixyWzJdXTpcIm1vemlsbGFcIj09PXJbMV0/L3RyaWRlbnQvLnRlc3QoZSk/clsxXT1cIm1zaWVcIjpyWzFdPVwiZmlyZWZveFwiOi9wb2xhcmlzfG5hdGVicm93c2VyfChbMDEwfDAxMXwwMTZ8MDE3fDAxOHwwMTldezN9XFxkezMsNH1cXGR7NH0kKS8udGVzdChlKSYmKHJbMV09XCJwb2xhcmlzXCIpLG5bclsxXV09ITAsbi5uYW1lPXJbMV0sbi52ZXJzaW9uPXQoclsyXSksbn1mdW5jdGlvbiB0KGUpe3ZhciB0PXt9LG49ZT9lLnNwbGl0KC9cXC58LXxfLyk6W1wiMFwiLFwiMFwiLFwiMFwiXTtyZXR1cm4gdC5pbmZvPW4uam9pbihcIi5cIiksdC5tYWpvcj1uWzBdfHxcIjBcIix0Lm1pbm9yPW5bMV18fFwiMFwiLHQucGF0Y2g9blsyXXx8XCIwXCIsdH1mdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihlLm1hdGNoKC9pcGFkLyl8fGUubWF0Y2goL2FuZHJvaWQvKSYmIWUubWF0Y2goL21vYml8bWluaXxmZW5uZWMvKXx8ZS5tYXRjaCgvbWFjaW50b3NoLykmJndpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MSlyZXR1cm4hMDtyZXR1cm4hMX0oZSk/XCJ0YWJsZXRcIjpmdW5jdGlvbihlKXtpZihlLm1hdGNoKC9saW51eHx3aW5kb3dzIChudHw5OCl8bWFjaW50b3NofGNyb3MvKSYmIWUubWF0Y2goL2FuZHJvaWR8bW9iaWxlfHBvbGFyaXN8bGd0ZWxlY29tfHV6YXJkfG5hdGVicm93c2VyfGt0Zjt8c2t0Oy8pKXJldHVybiEwO3JldHVybiExfShlKT9cInBjXCI6ZnVuY3Rpb24oZSl7cmV0dXJuISFlLm1hdGNoKC9pcChob25lfG9kKXxhbmRyb2lkLittb2JpbGV8d2luZG93cyAoY2V8cGhvbmUpfGJsYWNrYmVycnl8YmIxMHxzeW1iaWFufHdlYm9zfGZpcmVmb3guK2Zlbm5lY3xvcGVyYSBtKG9ifGluKWl8dGl6ZW4uK21vYmlsZXxwb2xhcmlzfGllbW9iaWxlfGxndGVsZWNvbXxub2tpYXxzb255ZXJpY3Nzb258ZG9sZmlufHV6YXJkfG5hdGVicm93c2VyfGt0Zjt8c2t0Oy8pfShlKT9cIm1vYmlsZVwiOlwiXCJ9ZnVuY3Rpb24gcihlKXt2YXIgbj17fSxyPS8oaXBob25lfGlwYWR8aXBvZClbXFxTXFxzXSpvcyAoW1xcdy5fXFwtXSspIGxpa2UvLmV4ZWMoZSl8fCEhL3BvbGFyaXN8bmF0ZWJyb3dzZXJ8KFswMTB8MDExfDAxNnwwMTd8MDE4fDAxOV17M31cXGR7Myw0fVxcZHs0fSQpLy50ZXN0KGUpJiZbXCJcIixcInBvbGFyaXNcIixcIjAuMC4wXCJdfHwvKHdpbmRvd3MpKD86IG50IHwgcGhvbmUoPzogb3MpezAsMX0gfCApKFtcXHcuX1xcLV0rKS8uZXhlYyhlKXx8LyhhbmRyb2lkKVsgXFwvXShbXFx3Ll9cXC1dKyk7Ly5leGVjKGUpfHwhIS9hbmRyb2lkLy50ZXN0KGUpJiZbXCJcIixcImFuZHJvaWRcIixcIjAuMC4wXCJdfHwhIS8od2luZG93cykvLnRlc3QoZSkmJltcIlwiLFwid2luZG93c1wiLFwiMC4wLjBcIl18fC8obWFjKSBvcyB4IChbXFx3Ll9cXC1dKykvLmV4ZWMoZSl8fC8odGl6ZW4pWyBcXC9dKFtcXHcuX1xcLV0rKTsvLmV4ZWMoZSl8fCEhLyhsaW51eCkvLnRlc3QoZSkmJltcIlwiLFwibGludXhcIixcIjAuMC4wXCJdfHwhIS93ZWJvcy8udGVzdChlKSYmW1wiXCIsXCJ3ZWJvc1wiLFwiMC4wLjBcIl18fC8oY3JvcykoPzpcXHNbXFx3XStcXHMpKFtcXGQuX1xcLV0rKS8uZXhlYyhlKXx8LyhiYWRhKVsgXFwvXShbXFx3Ll9cXC1dKykvLmV4ZWMoZSl8fCEhL2JhZGEvLnRlc3QoZSkmJltcIlwiLFwiYmFkYVwiLFwiMC4wLjBcIl18fCEhLyhyaW18YmxhY2tiZXJyeXxiYjEwKS8udGVzdChlKSYmW1wiXCIsXCJibGFja2JlcnJ5XCIsXCIwLjAuMFwiXXx8W1wiXCIsXCJ1bmtub3duXCIsXCIwLjAuMFwiXTtyZXR1cm5cImlwaG9uZVwiPT09clsxXXx8XCJpcGFkXCI9PT1yWzFdfHxcImlwb2RcIj09PXJbMV0/clsxXT1cImlvc1wiOlwid2luZG93c1wiPT09clsxXSYmXCI5OFwiPT09clsyXSYmKHJbMl09XCIwLjk4LjBcIiksXCJtYWNcIj09PXJbMV0mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MSYmKHJbMV09XCJpb3NcIiksXCJjcm9zXCI9PT1yWzFdJiYoclsxXT1cImNocm9tZVwiKSxuW3JbMV1dPSEwLG4ubmFtZT1yWzFdLG4udmVyc2lvbj10KHJbMl0pLG59QXJyYXkuaXNBcnJheXx8KEFycmF5LmlzQXJyYXk9ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSk7dmFyIG89W1wiY3Jpb3NcIixcImZ4aW9zXCIsXCJkYXVtYXBwc1wiXTtmdW5jdGlvbiBpKGUsbil7dmFyIHI9e30saT1udWxsLGE9bztBcnJheS5pc0FycmF5KG4pP2E9by5jb25jYXQobik6XCJzdHJpbmdcIj09dHlwZW9mIG4mJihhPW8uY29uY2F0KFtuXSkpO2Zvcih2YXIgYz0wLHM9YS5sZW5ndGg7YzxzO2MrPTEpe3ZhciB1PWFbY107aWYoaT1uZXcgUmVnRXhwKFwiKFwiK3UrXCIpWyBcXFxcL10oW1xcXFx3Ll9cXFxcLV0rKVwiKS5leGVjKGUpKWJyZWFrfXJldHVybiBpfHwoaT1bXCJcIixcIlwiXSksaVsxXT8oci5pc0FwcD0hMCxyLm5hbWU9aVsxXSxyLnZlcnNpb249dChpWzJdKSk6ci5pc0FwcD0hMSxyfXJldHVybiBmdW5jdGlvbih0LG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBlP2UudG9Mb3dlckNhc2UoKTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubmF2aWdhdG9yJiZcInN0cmluZ1wiPT10eXBlb2Ygd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ/d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTpcIlwifSh0KTtyZXR1cm57dWE6YSxicm93c2VyOmUoYSkscGxhdGZvcm06bihhKSxvczpyKGEpLGFwcDppKGEsbyl9fX0oKSxNdD1MdCgpO3ZhciB6dCxEdCxxdCxOdCxLdD1cImh0dHBzOi8va2F1dGgua2FrYW8uY29tXCIsSHQ9XCJodHRwczovL3N0b3J5Lmtha2FvLmNvbVwiLEp0PVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbVwiLFd0PSh6dD1sb2NhdGlvbixEdD16dC5wcm90b2NvbCxxdD16dC5ob3N0bmFtZSxOdD16dC5wb3J0LFwiXCIuY29uY2F0KER0LFwiLy9cIikuY29uY2F0KHF0KS5jb25jYXQoTnQ/XCI6XCIrTnQ6XCJcIikpLFh0PU10LCR0PS9LQUtBT1RBTEsvaS50ZXN0KFh0LnVhKSxHdD1cIjEuNDMuMVwiLmNvbmNhdChcIlwiKSxWdD1uYXZpZ2F0b3IsWXQ9W1wic2RrL1wiLmNvbmNhdChHdCksXCJvcy9qYXZhc2NyaXB0XCIsXCJzZGtfdHlwZS9qYXZhc2NyaXB0XCIsXCJsYW5nL1wiLmNvbmNhdChWdC51c2VyTGFuZ3VhZ2V8fFZ0Lmxhbmd1YWdlKSxcImRldmljZS9cIi5jb25jYXQoVnQucGxhdGZvcm0ucmVwbGFjZSgvIC9nLFwiX1wiKSksXCJvcmlnaW4vXCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChXdCkpXS5qb2luKFwiIFwiKSxRdD17YWNjb3VudERvbWFpbjpcImh0dHBzOi8vYWNjb3VudHMua2FrYW8uY29tXCIsYXV0aERvbWFpbjpLdCxhdXRob3JpemU6XCJcIi5jb25jYXQoS3QsXCIvb2F1dGgvYXV0aG9yaXplXCIpLGxvZ2luV2lkZ2V0OlwiXCIuY29uY2F0KEt0LFwiL3B1YmxpYy93aWRnZXQvbG9naW4va2FrYW9Mb2dpbldpZGdldC5odG1sXCIpLHJlZGlyZWN0VXJpOlwiSlMtU0RLXCIsdW5pdmVyc2FsS2FrYW9MaW5rOlwiXCIuY29uY2F0KFwiaHR0cHM6Ly90YWxrLWFwcHMua2FrYW8uY29tXCIsXCIvc2NoZW1lL1wiKSx0YWxrTG9naW5TY2hlbWU6XCJrYWthb2tvbXBhc3NhdXRoOi8vYXV0aG9yaXplXCIsdGFsa0xvZ2luUmVkaXJlY3RVcmk6XCJodHRwczovL2thcGkua2FrYW8uY29tL2NvcnMvYWZ0ZXJsb2dpbi5odG1sXCIsdGFsa0luYXBwU2NoZW1lOlwia2FrYW90YWxrOi8vaW5hcHBicm93c2VyXCIsdGFsa1N5bmNwbHVnaW5TY2hlbWU6XCJrYWthb3RhbGs6Ly9iaXpwbHVnaW4/cGx1Z2luX2lkPTYwMTEyNjNiNzRmYzJiNDljNzNhNzI5OFwiLGFwaVJlbW90ZTpcIlwiLmNvbmNhdChcImh0dHBzOi8va2FwaS5rYWthby5jb21cIixcIi9jb3JzL1wiKSxzaGFyZXJEb21haW46XCJodHRwczovL3NoYXJlci5rYWthby5jb21cIixwaWNrZXJEb21haW46XCJodHRwczovL2ZyaWVuZC1waWNrZXIua2FrYW8uY29tXCIsYXBwc0RvbWFpbjpcImh0dHBzOi8vYXBwcy5rYWthby5jb21cIix0YWxrTGlua1NjaGVtZTpcImtha2FvbGluazovL3NlbmRcIix0YWxrQW5kcm9pZFBhY2thZ2U6XCJjb20ua2FrYW8udGFsa1wiLGNoYW5uZWw6XCJodHRwczovL3BmLmtha2FvLmNvbVwiLGNoYW5uZWxJY29uOlwiXCIuY29uY2F0KEp0LFwiL2Fzc2V0cy9pbWcvYWJvdXQvbG9nb3NcIiksc3RvcnlTaGFyZTpcIlwiLmNvbmNhdChIdCxcIi9zL3NoYXJlXCIpLHN0b3J5Q2hhbm5lbEZvbGxvdzpcIlwiLmNvbmNhdChIdCxcIi9zL2ZvbGxvd1wiKSxzdG9yeUljb246XCJcIi5jb25jYXQoSnQsXCIvc2RrL2pzL3Jlc291cmNlcy9zdG9yeS9pY29uX3NtYWxsLnBuZ1wiKSxzdG9yeVBvc3RTY2hlbWU6XCJzdG9yeWxpbms6Ly9wb3N0aW5nXCIsbmF2aVNjaGVtZTpcImtha2FvbmF2aS1zZGs6Ly9uYXZpZ2F0ZVwiLG5hdmlGYWxsYmFjazpcImh0dHBzOi8va2FrYW9uYXZpLmtha2FvLmNvbS9sYXVuY2gvaW5kZXguZG9cIn0sWnQ9bnVsbDtmdW5jdGlvbiBlbigpe3JldHVybiBadH1mdW5jdGlvbiB0bihlKXtadD1lfWZ1bmN0aW9uIG5uKGUpe0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5uYW1lPVwiS2FrYW9FcnJvclwiLHRoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIHJuKGUpe3JldHVybiBSZS5hcHBseSh2b2lkIDAsW3tjbGVhbnVwOmZ1bmN0aW9uKCl7VmUoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xlYW51cCYmZS5jbGVhbnVwKCl9KSl9fV0uY29uY2F0KEZ0KGUpKSl9ZnVuY3Rpb24gb24oZSl7VmUoZSwoZnVuY3Rpb24oZSl7ZSgpfSkpLGUubGVuZ3RoPTB9ZnVuY3Rpb24gYW4oZSx0LG4pe2lmKCExPT09dChlKSl0aHJvdyBuZXcgbm4oXCJJbGxlZ2FsIGFyZ3VtZW50IGZvciBcIi5jb25jYXQobikpfWZ1bmN0aW9uIGNuKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsbj1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMDtpZighcChlKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXJhbXMgc2hvdWxkIGJlIGFuIE9iamVjdFwiKTtqKHQuYmVmb3JlKSYmdC5iZWZvcmUoZSksaih0LmRlZmF1bHRzKT9HZShlLHQuZGVmYXVsdHMoZSkpOkdlKGUsdC5kZWZhdWx0cyk7dmFyIHI9dC5yZXF1aXJlZCxvPXZvaWQgMD09PXI/e306cixpPXQub3B0aW9uYWwsYT12b2lkIDA9PT1pP3t9OmksYz1zdCh1dChvKSx1dChlKSk7aWYoYy5sZW5ndGg+MCl0aHJvdyBuZXcgbm4oXCJNaXNzaW5nIHJlcXVpcmVkIGtleXM6IFwiLmNvbmNhdChjLmpvaW4oXCIsXCIpLFwiIGF0IFwiKS5jb25jYXQobikpO3ZhciBzPVJlKHt9LG8sYSksdT1zdCh1dChlKSx1dChzKSk7aWYodS5sZW5ndGg+MCl0aHJvdyBuZXcgbm4oXCJJbnZhbGlkIHBhcmFtZXRlciBrZXlzOiBcIi5jb25jYXQodS5qb2luKFwiLFwiKSxcIiBhdCBcIikuY29uY2F0KG4pKTtyZXR1cm4gVmUoZSwoZnVuY3Rpb24oZSx0KXthbihlLHNbdF0sJ1wiJy5jb25jYXQodCwnXCIgaW4gJykuY29uY2F0KG4pKX0pKSxqKHQuYWZ0ZXIpJiZ0LmFmdGVyKGUpLGV9ZnVuY3Rpb24gc24oKXtyZXR1cm4oTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikrZW4oKStEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSkuc2xpY2UoMCw2MCl9ZnVuY3Rpb24gdW4oZSx0KXtpZihYdC5vcy5hbmRyb2lkKXt2YXIgbj1KU09OLnN0cmluZ2lmeSh7YXBwS2V5Olp0LEtBOll0fSk7cmV0dXJuXCJtYXJrZXQ6Ly9kZXRhaWxzP2lkPVwiLmNvbmNhdChlLFwiJnJlZmVycmVyPVwiKS5jb25jYXQobil9cmV0dXJuIFh0Lm9zLmlvcz9cImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9hcHAvaWRcIi5jb25jYXQodCk6bG9jYXRpb24uaHJlZn1mdW5jdGlvbiBsbihlKXt0cnl7cmV0dXJuIGUoKX1jYXRjaChlKXt0aHJvdyBlIGluc3RhbmNlb2YgVHlwZUVycm9yP25ldyBubihcImtha2FvLmpzIHNob3VsZCBiZSBsb2FkZWQgZnJvbSBhIHdlYiBzZXJ2ZXJcIik6bmV3IG5uKFwiRWFzeVhETSAtIFwiLmNvbmNhdChlLm1lc3NhZ2UpKX19bm4ucHJvdG90eXBlPW5ldyBFcnJvcjt2YXIgZG49e307ZnVuY3Rpb24gcG4oZSx0LG4pe3ZhciByPWRuW3RdO3JldHVybiByJiZyLmNsb3NlJiYhci5jbG9zZWQmJnIuY2xvc2UoKSxkblt0XT13aW5kb3cub3BlbihlLHQsbiksZG5bdF19ZnVuY3Rpb24gZm4oZSx0LG4pe1ZlKG4sKGZ1bmN0aW9uKG4scil7dmFyIG89dC5nZXRBdHRyaWJ1dGUobik7bnVsbCE9PW8mJihlW3JdPVwidHJ1ZVwiPT09b3x8XCJmYWxzZVwiPT09bz9cInRydWVcIj09PW86byl9KSl9ZnVuY3Rpb24gaG4oZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7ci5pZD1yLm5hbWU9ZSxyLnNyYz10LHIuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImJvcmRlcjpub25lOyB3aWR0aDowOyBoZWlnaHQ6MDsgZGlzcGxheTpub25lOyBvdmVyZmxvdzpoaWRkZW47XCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQociksbi5wdXNoKChmdW5jdGlvbigpe2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocil9KSl9ZnVuY3Rpb24gbW4oZSx0LG4pe3ZhciByPWZ1bmN0aW9uIG4ocil7dmFyIG89ci5kYXRhLGk9ci5vcmlnaW47aWYobyYmaT09PXQpe3ZhciBhPUpTT04ucGFyc2Uobyk7YS5jb2RlP2UuZmFpbChhKTplLnN1Y2Nlc3MoYSksZS5hbHdheXMoYSksaHQod2luZG93LFwibWVzc2FnZVwiLG4pfX07ZnQod2luZG93LFwibWVzc2FnZVwiLHIpLG4ucHVzaCgoZnVuY3Rpb24oKXtodCh3aW5kb3csXCJtZXNzYWdlXCIscil9KSl9ZnVuY3Rpb24gdm4oZSx0KXt2YXIgbj10LnVybCxyPXQucG9wdXBOYW1lLG89dC5wb3B1cEZlYXR1cmVzLGk9WHQuYnJvd3Nlci5tc2llP3t9OnBuKFwiXCIscixvKTtyZXR1cm4gaS5mb2N1cyYmaS5mb2N1cygpLGduKGUsbixyKSxpfWZ1bmN0aW9uIGduKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOlwiXCIscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtyLnNldEF0dHJpYnV0ZShcImFjY2VwdC1jaGFyc2V0XCIsXCJ1dGYtOFwiKSxyLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLFwicG9zdFwiKSxyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLHQpLHIuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsbiksci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZGlzcGxheTpub25lXCIpLFZlKGUsKGZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO24udHlwZT1cImhpZGRlblwiLG4ubmFtZT10LG4udmFsdWU9WWUoZSk/ZTpKU09OLnN0cmluZ2lmeShlKSxyLmFwcGVuZENoaWxkKG4pfSkpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQociksci5zdWJtaXQoKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpfXZhciB5bj17fTt2YXIgYm49e3N1YnNjcmliZTpmdW5jdGlvbihlLHQpe3luW2VdPXluW2VdfHxbXSx5bltlXS5wdXNoKHQpfSx1bnN1YnNjcmliZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj15bltlXSxyPTA7cjxuLmxlbmd0aDtyKyspaWYobltyXT09PXQpcmV0dXJuIHZvaWQgbi5zcGxpY2UociwxKX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7VmUoeW5bZV0sKGZ1bmN0aW9uKGUpe2UoKX0pKX19LF9uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3d0KHRoaXMsZSksdGhpcy5faW50ZXJ2YWw9dCx0aGlzLl9tYXhDb3VudD1uLHRoaXMuX2NvdW50PTAsdGhpcy5fc3RvcHBlZD0hMSx0aGlzLl90aW1lb3V0PW51bGx9cmV0dXJuIHh0KGUsW3trZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7bnVsbCE9PXRoaXMuX3RpbWVvdXQmJnRoaXMuc3RvcCgpLHRoaXMuX2NvdW50PTAsdGhpcy5fc3RvcHBlZD0hMSx0aGlzLl9kb1BvbGxpbmcoZSx0KX19LHtrZXk6XCJfZG9Qb2xsaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3RoaXMuX3N0b3BwZWR8fCh0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7KytuLl9jb3VudD5uLl9tYXhDb3VudD90KCk6KGUoKSxuLl9kb1BvbGxpbmcoZSx0KSl9KSx0aGlzLl9pbnRlcnZhbCkpfX0se2tleTpcInN0b3BcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3N0b3BwZWQ9ITAsY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9bnVsbH19XSksZX0oKSxrbj17c3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdH0sd249X3Qoe3Rocm91Z2hUYWxrOiEwLHBlcnNpc3RBY2Nlc3NUb2tlbjohMCxwZXJzaXN0UmVmcmVzaFRva2VuOiExfSxrbiksU249e3N1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmoscGVyc2lzdEFjY2Vzc1Rva2VuOlFlLHBlcnNpc3RSZWZyZXNoVG9rZW46UWUsYXBwcm92YWxUeXBlOnZ0KFtcInByb2plY3RcIl0pLHNjb3BlOlllLHRocm91Z2hUYWxrOlFlLHBsdXNGcmllbmRQdWJsaWNJZDpZZSxjaGFubmVsUHVibGljSWQ6WWUsc2VydmljZVRlcm1zOlllLHJlZGlyZWN0VXJpOlllLHN0YXRlOlllLGRldmljZVR5cGU6dnQoW1wid2F0Y2hcIixcInR2XCJdKSxub25jZTpZZX0seG49e29wdGlvbmFsOntzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqLGNsb3NlOmoscmV0dXJuVXJsOlllLGZvcmNlTW9iaWxlTGF5b3V0OlFlLGVuYWJsZUJhY2tCdXR0b246UWV9LGRlZmF1bHRzOl90KF90KHt9LGtuKSx7fSx7Y2xvc2U6bHQsZm9yY2VNb2JpbGVMYXlvdXQ6ITEsZW5hYmxlQmFja0J1dHRvbjohMH0pfSxPbj17Y3JlYXRlTG9naW5CdXR0b246e3JlcXVpcmVkOntjb250YWluZXI6Z3QoW1plLFllXSl9LG9wdGlvbmFsOl90KHtsYW5nOnZ0KFtcImVuXCIsXCJrclwiXSksc2l6ZTp2dChbXCJzbWFsbFwiLFwibWVkaXVtXCIsXCJsYXJnZVwiXSl9LFNuKSxkZWZhdWx0czpfdCh7bGFuZzpcImtyXCIsc2l6ZTpcIm1lZGl1bVwifSx3bil9LGxvZ2luOntvcHRpb25hbDpTbixkZWZhdWx0czp3bn0sYXV0aG9yaXplOntvcHRpb25hbDp7cmVkaXJlY3RVcmk6WWUsYXBwcm92YWxUeXBlOnZ0KFtcInByb2plY3RcIl0pLHNjb3BlOlllLHRocm91Z2hUYWxrOlFlLHBsdXNGcmllbmRQdWJsaWNJZDpZZSxjaGFubmVsUHVibGljSWQ6WWUsc2VydmljZVRlcm1zOlllLGlzUG9wdXA6UWUsc3RhdGU6WWUsYXV0b0xvZ2luOlFlLGRldmljZVR5cGU6dnQoW1wid2F0Y2hcIixcInR2XCJdKSxwcm9tcHRzOlllLHJlYXV0aGVudGljYXRlOlFlLHRocm91Z2hTeW5jcGx1Z2luOlFlLGxvZ2luSGludDpZZSxub25jZTpZZSxzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqfSxkZWZhdWx0czpfdCh7dGhyb3VnaFRhbGs6ITAsaXNQb3B1cDohMSxyZWF1dGhlbnRpY2F0ZTohMSx0aHJvdWdoU3luY3BsdWdpbjohMH0sa24pfSxhdXRvTG9naW46e29wdGlvbmFsOntzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqfSxkZWZhdWx0czprbn0saXNzdWVBY2Nlc3NUb2tlbjp7cmVxdWlyZWQ6e2NvZGU6WWUscmVkaXJlY3RVcmk6WWV9LG9wdGlvbmFsOntzdWNjZXNzOmosZmFpbDpqLGFsd2F5czpqfSxkZWZhdWx0czprbn0sc2VsZWN0U2hpcHBpbmdBZGRyZXNzOnhuLGNyZWF0ZVNoaXBwaW5nQWRkcmVzczp4bix1cGRhdGVTaGlwcGluZ0FkZHJlc3M6X3Qoe3JlcXVpcmVkOnthZGRyZXNzSWQ6ZXR9fSx4bil9O2Z1bmN0aW9uIGpuKGUpe3ZhciB0LG4scixvLGksYTtyZXR1cm4gcG4oZSxcIl9ibGFua1wiLCh0PTQ4MCxuPTcwMCxyPXdpbmRvdy5zY3JlZW5MZWZ0P3dpbmRvdy5zY3JlZW5MZWZ0OndpbmRvdy5zY3JlZW5YP3dpbmRvdy5zY3JlZW5YOjAsbz13aW5kb3cuc2NyZWVuVG9wP3dpbmRvdy5zY3JlZW5Ub3A6d2luZG93LnNjcmVlblk/d2luZG93LnNjcmVlblk6MCxpPXNjcmVlbi53aWR0aC8yLXQvMityLGE9c2NyZWVuLmhlaWdodC8yLW4vMitvLFtcIndpZHRoPVwiLmNvbmNhdCh0KSxcImhlaWdodD1cIi5jb25jYXQobiksXCJsZWZ0PVwiLmNvbmNhdChpKSxcInRvcD1cIi5jb25jYXQoYSksXCJzY3JvbGxiYXJzPXllc1wiLFwicmVzaXphYmxlPTFcIl0uam9pbihcIixcIikpKX1mdW5jdGlvbiBBbihlKXtyZXR1cm5cIlwiLmNvbmNhdChRdC5hdXRob3JpemUsXCI/XCIpLmNvbmNhdChtdChlKSl9ZnVuY3Rpb24gVG4oZSl7dmFyIHQ9e2NsaWVudF9pZDplbigpfTtyZXR1cm4gZS5hcHByb3ZhbFR5cGUmJih0LmFwcHJvdmFsX3R5cGU9ZS5hcHByb3ZhbFR5cGUpLGUuc2NvcGUmJih0LnNjb3BlPWUuc2NvcGUpLGUuc3RhdGUmJih0LnN0YXRlPWUuc3RhdGUpLHR9ZnVuY3Rpb24gQ24oZSl7dmFyIHQ9e307cmV0dXJuIGUucGx1c0ZyaWVuZFB1YmxpY0lkJiYodFtcImV4dHJhLnBsdXNfZnJpZW5kX3B1YmxpY19pZFwiXT1lLnBsdXNGcmllbmRQdWJsaWNJZCksZS5jaGFubmVsUHVibGljSWQmJih0LmNoYW5uZWxfcHVibGljX2lkPWUuY2hhbm5lbFB1YmxpY0lkKSxlLnNlcnZpY2VUZXJtcyYmKHRbXCJleHRyYS5zZXJ2aWNlX3Rlcm1zXCJdPWUuc2VydmljZVRlcm1zKSxlLmF1dG9Mb2dpbiYmKHQucHJvbXB0PVwibm9uZVwiKSxlLnJlYXV0aGVudGljYXRlJiYodC5wcm9tcHQ9XCJsb2dpblwiKSxlLnByb21wdHMmJih0LnByb21wdD1lLnByb21wdHMpLGUuZGV2aWNlVHlwZSYmKHQuZGV2aWNlX3R5cGU9ZS5kZXZpY2VUeXBlKSxlLmxvZ2luSGludCYmKHQubG9naW5faGludD1lLmxvZ2luSGludCksZS5ub25jZSYmKHQubm9uY2U9ZS5ub25jZSksdH1mdW5jdGlvbiBJbihlKXtyZXR1cm4gX3QoX3QoX3Qoe30sVG4oZSkpLENuKGUpKSx7fSx7cmVkaXJlY3RfdXJpOmUucmVkaXJlY3RVcml8fFF0LnJlZGlyZWN0VXJpLHJlc3BvbnNlX3R5cGU6XCJjb2RlXCIsYXV0aF90cmFuX2lkOnNuKCl9KX1mdW5jdGlvbiBQbihlLHQpe3JldHVybiBfdChfdCh7fSx0KSx7fSx7a2E6WXQsaXNfcG9wdXA6ZS5pc1BvcHVwfSl9ZnVuY3Rpb24gRm4oZSx0KXt0LmVycm9yP2UuZmFpbCh0KTplLnN1Y2Nlc3ModCksZS5hbHdheXModCl9ZnVuY3Rpb24gQm4oZSx0KXshZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnVybCxyPWUubWV0aG9kLG89ZS5kYXRhLGk9bmV3IFhNTEh0dHBSZXF1ZXN0O2lmKHZvaWQgMCE9PWkud2l0aENyZWRlbnRpYWxzKWkub3BlbihyLG4pLGkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpLGkub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aS5yZWFkeVN0YXRlPT09WE1MSHR0cFJlcXVlc3QuRE9ORSYmMjAwPT09aS5zdGF0dXMmJnQoaSl9LGkuc2VuZChvKTtlbHNle3ZhciBhPW5ldyBYRG9tYWluUmVxdWVzdDthLm9wZW4oci50b0xvd2VyQ2FzZSgpLG4pLGEub25sb2FkPWZ1bmN0aW9uKCl7dCh7c3RhdHVzOmEucmVzcG9uc2VUZXh0PzIwMDpcImVycm9yXCIscmVzcG9uc2U6YS5yZXNwb25zZVRleHR9KX0sc2V0VGltZW91dCgoZnVuY3Rpb24oKXthLnNlbmQobyl9KSwwKX19KHttZXRob2Q6XCJHRVRcIix1cmw6ZX0sdCl9dmFyIEVuPW5ldyBfbigxZTMsNjAwKTtmdW5jdGlvbiBVbihlKXt2YXIgdCxuLHI9SW4oZSksbz1QbihlLHIpLGk9ZnVuY3Rpb24oZSl7dmFyIHQ9ISghWHQub3MuaW9zJiYhWHQub3MuYW5kcm9pZCkmJiEkdCxuPSEwPT09ZS5yZWF1dGhlbnRpY2F0ZXx8Um4oZS5wcm9tcHRzLFwibG9naW5cIikscj0hMD09PWUuYXV0b0xvZ2lufHxSbihlLnByb21wdHMsXCJub25lXCIpO3JldHVybiEoWHQub3MuYW5kcm9pZCYmL2luc3RhZ3JhbXxmYl9pYWIvZy50ZXN0KFh0LnVhKSkmJnQmJiFuJiYhMD09PWUudGhyb3VnaFRhbGsmJiFyfShlKSxhPU1uKGUpLGM9QW4obykscz1pP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1fdChfdCh7fSx0KSx7fSx7aXNfcG9wdXA6ITB9KSxvPWZ1bmN0aW9uKCl7cmV0dXJuW1wiaW50ZW50OiNJbnRlbnRcIixcImFjdGlvbj1jb20ua2FrYW8udGFsay5pbnRlbnQuYWN0aW9uLkNBUFJJX0xPR0dFRF9JTl9BQ1RJVklUWVwiLFwibGF1bmNoRmxhZ3M9MHgwODg4MDAwMFwiLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsuYXBwS2V5PVwiLmNvbmNhdChlbigpKSxcIlMuY29tLmtha2FvLnNkay50YWxrLnJlZGlyZWN0VXJpPVwiLmNvbmNhdChyLnJlZGlyZWN0X3VyaSksXCJTLmNvbS5rYWthby5zZGsudGFsay5rYUhlYWRlcj1cIi5jb25jYXQoWXQpLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsuZXh0cmFwYXJhbXM9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyKSkpXS5jb25jYXQoRnQoZS5zdGF0ZT9bXCJTLmNvbS5rYWthby5zZGsudGFsay5zdGF0ZT1cIi5jb25jYXQoZS5zdGF0ZSldOltdKSxbXCJTLmJyb3dzZXJfZmFsbGJhY2tfdXJsPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQobikpLFwiZW5kO1wiXSkuam9pbihcIjtcIil9LGk9ZnVuY3Rpb24oKXt2YXIgdD1BbihyKSxvPWUuaXNQb3B1cD90Om4saT1cIlwiLmNvbmNhdCh0LFwiJmthPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KFl0KSksYT1cIlwiLmNvbmNhdChRdC50YWxrSW5hcHBTY2hlbWUsXCI/dXJsPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGkpKTtyZXR1cm5cIlwiLmNvbmNhdChRdC51bml2ZXJzYWxLYWthb0xpbmspLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoYSksXCImd2ViPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG8pKX07cmV0dXJuIFh0Lm9zLmFuZHJvaWQ/bygpOmkoKX0oZSxyLGMpOmMsdT1udWxsO2lmKGE/ZnVuY3Rpb24oZSl7dmFyIHQ9X3QoX3Qoe30sZSkse30se2lzX3BvcHVwOiEwLGFwcHJvdmFsX3dpbmRvd190eXBlOlwidjRfYml6cGx1Z2luXCJ9KSxuPWVuY29kZVVSSUNvbXBvbmVudChtdCh0KSk7bG9jYXRpb24uaHJlZj1cIlwiLmNvbmNhdChRdC50YWxrU3luY3BsdWdpblNjaGVtZSxcIiZxdWVyeT1cIikuY29uY2F0KG4pfShvKTplLmlzUG9wdXA/dT1qbihzKTpsb2NhdGlvbi5ocmVmPXMsaXx8YXx8ZS5pc1BvcHVwKXt2YXIgbD0odD1yLmF1dGhfdHJhbl9pZCxuPW10KHtjbGllbnRfaWQ6ZW4oKSxhdXRoX3RyYW5faWQ6dCxrYTpZdH0pLFwiXCIuY29uY2F0KFF0LmF1dGhEb21haW4sXCIvYXBpd2ViL2NvZGUuanNvbj9cIikuY29uY2F0KG4pKTtFbi5zdGFydCgoZnVuY3Rpb24oKXtCbihsLChmdW5jdGlvbih0KXt2YXIgbj1mdW5jdGlvbihlLHQpe2lmKDIwMD09PXQuc3RhdHVzJiZ0LnJlc3BvbnNlKXt2YXIgbj1KU09OLnBhcnNlKHQucmVzcG9uc2UpO2lmKFwib2tcIj09PW4uc3RhdHVzJiZuLmNvZGUpcmV0dXJuIExuKGUse2NvZGU6bi5jb2RlfSksITA7aWYoXCJlcnJvclwiPT09bi5zdGF0dXMmJm4uZXJyb3JfY29kZSYmXCIzMDBcIiE9PW4uZXJyb3JfY29kZSlyZXR1cm4gTG4oZSx7ZXJyb3I6bi5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjpuLmVycm9yX2Rlc2NyaXB0aW9ufSksXCI3MDBcIj09PW4uZXJyb3JfY29kZSYmKGxvY2F0aW9uLmhyZWY9XCJcIi5jb25jYXQoUXQuYXV0aERvbWFpbixcIi9lcnJvci9uZXR3b3JrXCIpKSwhMH1yZXR1cm4hMX0oZSx0KTtuJiYoRW4uc3RvcCgpLHUmJnUuY2xvc2UmJnUuY2xvc2UoKSksIWkmJnUmJnUuY2xvc2VkJiZFbi5zdG9wKCl9KSl9KSwoZnVuY3Rpb24oKXtMbihlLHtlcnJvcjpcInRpbWVvdXRcIixlcnJvcl9kZXNjcmlwdGlvbjpcIkxPR0lOX1RJTUVPVVRcIn0pfSkpfX1mdW5jdGlvbiBSbihlLHQpe3JldHVybiEhKGUmJmUuaW5kZXhPZih0KT4tMSl9ZnVuY3Rpb24gTG4oZSx0KXtpZihlLnN0YXRlJiYodC5zdGF0ZT1lLnN0YXRlKSxlLnJlZGlyZWN0VXJpKXt2YXIgbj1lLnJlZGlyZWN0VXJpLmluZGV4T2YoXCI/XCIpPi0xP1wiJlwiOlwiP1wiO2xvY2F0aW9uLmhyZWY9ZS5yZWRpcmVjdFVyaStuK210KHQpfWVsc2UgRm4oZSx0KX1mdW5jdGlvbiBNbihlKXtyZXR1cm4gZS50aHJvdWdoU3luY3BsdWdpbiYmJHQmJi9jaC1ob21lL2kudGVzdChYdC51YSl9dmFyIHpuPU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGF1dGhvcml6ZTpmdW5jdGlvbihlKXtpZigoKGU9Y24oZSxPbi5hdXRob3JpemUsXCJBdXRoLmF1dGhvcml6ZVwiKSkuYXV0b0xvZ2lufHxSbihlLnByb21wdHMsXCJub25lXCIpKSYmISR0KXJldHVybiBMbihlLHtlcnJvcjpcImF1dG9fbG9naW5cIixlcnJvcl9kZXNjcmlwdGlvbjpcIk5PVF9TVVBQT1JURURfQlJPV1NFUlwifSksITE7TW4oZSkmJmZ1bmN0aW9uKGUpe3JldHVybiExPT09ZS5pc1BvcHVwJiYhUm4oZS5wcm9tcHRzLFwiY2VydFwiKSYmd2luZG93Lmtha2Fvd2ViJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cua2FrYW93ZWIucmVxU2lnbkluTG9jYXRpb259KGUpP2Z1bmN0aW9uKGUpe3ZhciB0PUluKGUpLG49UG4oZSx0KSxyPW10KF90KF90KHt9LG4pLHt9LHtpc19wb3B1cDohMSxwcm9tcHQ6XCJub25lXCJ9KSk7cmV0dXJuIGtha2Fvd2ViLnJlcVNpZ25JbkxvY2F0aW9uKHIpLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciBuPU9iamVjdC5mcm9tRW50cmllcyhuZXcgd2luZG93LlVSTCh0KS5zZWFyY2hQYXJhbXMpO3JldHVyblwiY29uc2VudF9yZXF1aXJlZFwiPT09bi5lcnJvciYmIVJuKGUucHJvbXB0cyxcIm5vbmVcIil8fFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIj09PW4uZXJyb3J8fChMbihlLF90KF90KHt9LG4uY29kZSYme2NvZGU6bi5jb2RlfSksbi5lcnJvciYme2Vycm9yOm4uZXJyb3IsZXJyb3JfZGVzY3JpcHRpb246bi5lcnJvcl9kZXNjcmlwdGlvbn0pKSwhMSl9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3JldHVybiExfSkpfShlKS50aGVuKChmdW5jdGlvbih0KXt0JiZVbihlKX0pKTpVbihlKSxibi5kaXNwYXRjaChcIkxPR0lOX1NUQVJUXCIpfX0pO2Z1bmN0aW9uIERuKCl7cmV0dXJuIFh0Lm9zLmFuZHJvaWQmJigyPT1YdC5vcy52ZXJzaW9uLm1ham9yJiYvVmVyc2lvblxcL1xcZCsuXFxkK3wvaS50ZXN0KFh0LnVhKXx8ND09WHQub3MudmVyc2lvbi5tYWpvciYmWHQub3MudmVyc2lvbi5taW5vcjw0JiYvVmVyc2lvblxcL1xcZCsuXFxkK3wvaS50ZXN0KFh0LnVhKXx8L1ZlcnNpb25cXC9cXGQrXFwuXFxkKy9pLnRlc3QoWHQudWEpJiYoL0Nocm9tZVxcL1xcZCtcXC5cXGQrXFwuXFxkK1xcLlxcZCsgTW9iaWxlL2kudGVzdChYdC51YSl8fC87IHd2XFwpL2kudGVzdChYdC51YSkpKX1mdW5jdGlvbiBxbigpe3JldHVybiBYdC5vcy5pb3MmJiR0fXZhciBObj17ZXhwb3J0czp7fX07IWZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4gbnVsbCE9PWUmJihcIm9iamVjdFwiPT09dHx8XCJmdW5jdGlvblwiPT09dCl9ZnVuY3Rpb24gdChlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfXZhciBuPUFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheTpmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9LHI9MCxvPXZvaWQgMCxpPXZvaWQgMCxhPWZ1bmN0aW9uKGUsdCl7YltyXT1lLGJbcisxXT10LDI9PT0ocis9MikmJihpP2koXyk6dygpKX07ZnVuY3Rpb24gYyhlKXtpPWV9ZnVuY3Rpb24gcyhlKXthPWV9dmFyIHU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwLGw9dXx8e30sZD1sLk11dGF0aW9uT2JzZXJ2ZXJ8fGwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixwPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpLGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW1wb3J0U2NyaXB0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsO2Z1bmN0aW9uIGgoKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhfKX19ZnVuY3Rpb24gbSgpe3JldHVybiB2b2lkIDAhPT1vP2Z1bmN0aW9uKCl7byhfKX06eSgpfWZ1bmN0aW9uIHYoKXt2YXIgZT0wLHQ9bmV3IGQoXyksbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtyZXR1cm4gdC5vYnNlcnZlKG4se2NoYXJhY3RlckRhdGE6ITB9KSxmdW5jdGlvbigpe24uZGF0YT1lPSsrZSUyfX1mdW5jdGlvbiBnKCl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO3JldHVybiBlLnBvcnQxLm9ubWVzc2FnZT1fLGZ1bmN0aW9uKCl7cmV0dXJuIGUucG9ydDIucG9zdE1lc3NhZ2UoMCl9fWZ1bmN0aW9uIHkoKXt2YXIgZT1zZXRUaW1lb3V0O3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlKF8sMSl9fXZhciBiPW5ldyBBcnJheSgxZTMpO2Z1bmN0aW9uIF8oKXtmb3IodmFyIGU9MDtlPHI7ZSs9MikoMCxiW2VdKShiW2UrMV0pLGJbZV09dm9pZCAwLGJbZSsxXT12b2lkIDA7cj0wfWZ1bmN0aW9uIGsoKXt0cnl7dmFyIGU9RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLnJlcXVpcmUoXCJ2ZXJ0eFwiKTtyZXR1cm4gbz1lLnJ1bk9uTG9vcHx8ZS5ydW5PbkNvbnRleHQsbSgpfWNhdGNoKGUpe3JldHVybiB5KCl9fXZhciB3PXZvaWQgMDtmdW5jdGlvbiBTKGUsdCl7dmFyIG49dGhpcyxyPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGopO3ZvaWQgMD09PXJbT10mJlcocik7dmFyIG89bi5fc3RhdGU7aWYobyl7dmFyIGk9YXJndW1lbnRzW28tMV07YSgoZnVuY3Rpb24oKXtyZXR1cm4gTihvLHIsaSxuLl9yZXN1bHQpfSkpfWVsc2UgRChuLHIsZSx0KTtyZXR1cm4gcn1mdW5jdGlvbiB4KGUpe3ZhciB0PXRoaXM7aWYoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3I9PT10KXJldHVybiBlO3ZhciBuPW5ldyB0KGopO3JldHVybiBSKG4sZSksbn13PXA/aCgpOmQ/digpOmY/ZygpOnZvaWQgMD09PXU/aygpOnkoKTt2YXIgTz1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7ZnVuY3Rpb24gaigpe312YXIgQT12b2lkIDAsVD0xLEM9MjtmdW5jdGlvbiBJKCl7cmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpfWZ1bmN0aW9uIFAoKXtyZXR1cm4gbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIil9ZnVuY3Rpb24gRihlLHQsbixyKXt0cnl7ZS5jYWxsKHQsbixyKX1jYXRjaChlKXtyZXR1cm4gZX19ZnVuY3Rpb24gQihlLHQsbil7YSgoZnVuY3Rpb24oZSl7dmFyIHI9ITEsbz1GKG4sdCwoZnVuY3Rpb24obil7cnx8KHI9ITAsdCE9PW4/UihlLG4pOk0oZSxuKSl9KSwoZnVuY3Rpb24odCl7cnx8KHI9ITAseihlLHQpKX0pLFwiU2V0dGxlOiBcIisoZS5fbGFiZWx8fFwiIHVua25vd24gcHJvbWlzZVwiKSk7IXImJm8mJihyPSEwLHooZSxvKSl9KSxlKX1mdW5jdGlvbiBFKGUsdCl7dC5fc3RhdGU9PT1UP00oZSx0Ll9yZXN1bHQpOnQuX3N0YXRlPT09Qz96KGUsdC5fcmVzdWx0KTpEKHQsdm9pZCAwLChmdW5jdGlvbih0KXtyZXR1cm4gUihlLHQpfSksKGZ1bmN0aW9uKHQpe3JldHVybiB6KGUsdCl9KSl9ZnVuY3Rpb24gVShlLG4scil7bi5jb25zdHJ1Y3Rvcj09PWUuY29uc3RydWN0b3ImJnI9PT1TJiZuLmNvbnN0cnVjdG9yLnJlc29sdmU9PT14P0UoZSxuKTp2b2lkIDA9PT1yP00oZSxuKTp0KHIpP0IoZSxuLHIpOk0oZSxuKX1mdW5jdGlvbiBSKHQsbil7aWYodD09PW4peih0LEkoKSk7ZWxzZSBpZihlKG4pKXt2YXIgcj12b2lkIDA7dHJ5e3I9bi50aGVufWNhdGNoKGUpe3JldHVybiB2b2lkIHoodCxlKX1VKHQsbixyKX1lbHNlIE0odCxuKX1mdW5jdGlvbiBMKGUpe2UuX29uZXJyb3ImJmUuX29uZXJyb3IoZS5fcmVzdWx0KSxxKGUpfWZ1bmN0aW9uIE0oZSx0KXtlLl9zdGF0ZT09PUEmJihlLl9yZXN1bHQ9dCxlLl9zdGF0ZT1ULDAhPT1lLl9zdWJzY3JpYmVycy5sZW5ndGgmJmEocSxlKSl9ZnVuY3Rpb24geihlLHQpe2UuX3N0YXRlPT09QSYmKGUuX3N0YXRlPUMsZS5fcmVzdWx0PXQsYShMLGUpKX1mdW5jdGlvbiBEKGUsdCxuLHIpe3ZhciBvPWUuX3N1YnNjcmliZXJzLGk9by5sZW5ndGg7ZS5fb25lcnJvcj1udWxsLG9baV09dCxvW2krVF09bixvW2krQ109ciwwPT09aSYmZS5fc3RhdGUmJmEocSxlKX1mdW5jdGlvbiBxKGUpe3ZhciB0PWUuX3N1YnNjcmliZXJzLG49ZS5fc3RhdGU7aWYoMCE9PXQubGVuZ3RoKXtmb3IodmFyIHI9dm9pZCAwLG89dm9pZCAwLGk9ZS5fcmVzdWx0LGE9MDthPHQubGVuZ3RoO2ErPTMpcj10W2FdLG89dFthK25dLHI/TihuLHIsbyxpKTpvKGkpO2UuX3N1YnNjcmliZXJzLmxlbmd0aD0wfX1mdW5jdGlvbiBOKGUsbixyLG8pe3ZhciBpPXQociksYT12b2lkIDAsYz12b2lkIDAscz0hMDtpZihpKXt0cnl7YT1yKG8pfWNhdGNoKGUpe3M9ITEsYz1lfWlmKG49PT1hKXJldHVybiB2b2lkIHoobixQKCkpfWVsc2UgYT1vO24uX3N0YXRlIT09QXx8KGkmJnM/UihuLGEpOiExPT09cz96KG4sYyk6ZT09PVQ/TShuLGEpOmU9PT1DJiZ6KG4sYSkpfWZ1bmN0aW9uIEsoZSx0KXt0cnl7dCgoZnVuY3Rpb24odCl7UihlLHQpfSksKGZ1bmN0aW9uKHQpe3ooZSx0KX0pKX1jYXRjaCh0KXt6KGUsdCl9fXZhciBIPTA7ZnVuY3Rpb24gSigpe3JldHVybiBIKyt9ZnVuY3Rpb24gVyhlKXtlW09dPUgrKyxlLl9zdGF0ZT12b2lkIDAsZS5fcmVzdWx0PXZvaWQgMCxlLl9zdWJzY3JpYmVycz1bXX1mdW5jdGlvbiBYKCl7cmV0dXJuIG5ldyBFcnJvcihcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiKX12YXIgJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yPWUsdGhpcy5wcm9taXNlPW5ldyBlKGopLHRoaXMucHJvbWlzZVtPXXx8Vyh0aGlzLnByb21pc2UpLG4odCk/KHRoaXMubGVuZ3RoPXQubGVuZ3RoLHRoaXMuX3JlbWFpbmluZz10Lmxlbmd0aCx0aGlzLl9yZXN1bHQ9bmV3IEFycmF5KHRoaXMubGVuZ3RoKSwwPT09dGhpcy5sZW5ndGg/TSh0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KToodGhpcy5sZW5ndGg9dGhpcy5sZW5ndGh8fDAsdGhpcy5fZW51bWVyYXRlKHQpLDA9PT10aGlzLl9yZW1haW5pbmcmJk0odGhpcy5wcm9taXNlLHRoaXMuX3Jlc3VsdCkpKTp6KHRoaXMucHJvbWlzZSxYKCkpfXJldHVybiBlLnByb3RvdHlwZS5fZW51bWVyYXRlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3RoaXMuX3N0YXRlPT09QSYmdDxlLmxlbmd0aDt0KyspdGhpcy5fZWFjaEVudHJ5KGVbdF0sdCl9LGUucHJvdG90eXBlLl9lYWNoRW50cnk9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yLHI9bi5yZXNvbHZlO2lmKHI9PT14KXt2YXIgbz12b2lkIDAsaT12b2lkIDAsYT0hMTt0cnl7bz1lLnRoZW59Y2F0Y2goZSl7YT0hMCxpPWV9aWYobz09PVMmJmUuX3N0YXRlIT09QSl0aGlzLl9zZXR0bGVkQXQoZS5fc3RhdGUsdCxlLl9yZXN1bHQpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbyl0aGlzLl9yZW1haW5pbmctLSx0aGlzLl9yZXN1bHRbdF09ZTtlbHNlIGlmKG49PT1lZSl7dmFyIGM9bmV3IG4oaik7YT96KGMsaSk6VShjLGUsbyksdGhpcy5fd2lsbFNldHRsZUF0KGMsdCl9ZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQobmV3IG4oKGZ1bmN0aW9uKHQpe3JldHVybiB0KGUpfSkpLHQpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KHIoZSksdCl9LGUucHJvdG90eXBlLl9zZXR0bGVkQXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMucHJvbWlzZTtyLl9zdGF0ZT09PUEmJih0aGlzLl9yZW1haW5pbmctLSxlPT09Qz96KHIsbik6dGhpcy5fcmVzdWx0W3RdPW4pLDA9PT10aGlzLl9yZW1haW5pbmcmJk0ocix0aGlzLl9yZXN1bHQpfSxlLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztEKGUsdm9pZCAwLChmdW5jdGlvbihlKXtyZXR1cm4gbi5fc2V0dGxlZEF0KFQsdCxlKX0pLChmdW5jdGlvbihlKXtyZXR1cm4gbi5fc2V0dGxlZEF0KEMsdCxlKX0pKX0sZX0oKTtmdW5jdGlvbiBHKGUpe3JldHVybiBuZXcgJCh0aGlzLGUpLnByb21pc2V9ZnVuY3Rpb24gVihlKXt2YXIgdD10aGlzO3JldHVybiBuKGUpP25ldyB0KChmdW5jdGlvbihuLHIpe2Zvcih2YXIgbz1lLmxlbmd0aCxpPTA7aTxvO2krKyl0LnJlc29sdmUoZVtpXSkudGhlbihuLHIpfSkpOm5ldyB0KChmdW5jdGlvbihlLHQpe3JldHVybiB0KG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuXCIpKX0pKX1mdW5jdGlvbiBZKGUpe3ZhciB0PW5ldyB0aGlzKGopO3JldHVybiB6KHQsZSksdH1mdW5jdGlvbiBRKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3JcIil9ZnVuY3Rpb24gWigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIil9dmFyIGVlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt0aGlzW09dPUooKSx0aGlzLl9yZXN1bHQ9dGhpcy5fc3RhdGU9dm9pZCAwLHRoaXMuX3N1YnNjcmliZXJzPVtdLGohPT10JiYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmUSgpLHRoaXMgaW5zdGFuY2VvZiBlP0sodGhpcyx0KTpaKCkpfXJldHVybiBlLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LGUucHJvdG90eXBlLmZpbmFsbHk9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcyxyPW4uY29uc3RydWN0b3I7cmV0dXJuIHQoZSk/bi50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gdH0pKX0pLChmdW5jdGlvbih0KXtyZXR1cm4gci5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXt0aHJvdyB0fSkpfSkpOm4udGhlbihlLGUpfSxlfSgpO2Z1bmN0aW9uIHRlKCl7dmFyIGU9dm9pZCAwO2lmKHZvaWQgMCE9PVJ0KWU9UnQ7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZillPXNlbGY7ZWxzZSB0cnl7ZT1GdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwicG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIpfXZhciB0PWUuUHJvbWlzZTtpZih0KXt2YXIgbj1udWxsO3RyeXtuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0LnJlc29sdmUoKSl9Y2F0Y2goZSl7fWlmKFwiW29iamVjdCBQcm9taXNlXVwiPT09biYmIXQuY2FzdClyZXR1cm59ZS5Qcm9taXNlPWVlfXJldHVybiBlZS5wcm90b3R5cGUudGhlbj1TLGVlLmFsbD1HLGVlLnJhY2U9VixlZS5yZXNvbHZlPXgsZWUucmVqZWN0PVksZWUuX3NldFNjaGVkdWxlcj1jLGVlLl9zZXRBc2FwPXMsZWUuX2FzYXA9YSxlZS5wb2x5ZmlsbD10ZSxlZS5Qcm9taXNlPWVlLGVlfSgpfShObik7dmFyIEtuPShmdW5jdGlvbihlLHQsbixyLG8saSl7dmFyIGEsYyxzLHUsbCxkPXRoaXN8fGUscD1NYXRoLmZsb29yKDFlNCpNYXRoLnJhbmRvbSgpKSxmPUZ1bmN0aW9uLnByb3RvdHlwZSxoPS9eKChodHRwLj86KVxcL1xcLyhbXjpcXC9cXHNdKykoOlxcZCspKikvLG09L1tcXC1cXHddK1xcL1xcLlxcLlxcLy8sdj0vKFteOl0pXFwvXFwvL2csZz1cIlwiLHk9e30sYj1lLmVhc3lYRE0sXz1cImVhc3lYRE1fXCIsaz0hMTtmdW5jdGlvbiB3KGUsdCl7dmFyIG49a3QoZVt0XSk7cmV0dXJuXCJmdW5jdGlvblwiPT1ufHwhKFwib2JqZWN0XCIhPW58fCFlW3RdKXx8XCJ1bmtub3duXCI9PW59ZnVuY3Rpb24gUygpe3ZhciBlLHQ9XCJTaG9ja3dhdmUgRmxhc2hcIixuPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIjtpZighRShuYXZpZ2F0b3IucGx1Z2lucykmJlwib2JqZWN0XCI9PWt0KG5hdmlnYXRvci5wbHVnaW5zW3RdKSl7dmFyIHI9bmF2aWdhdG9yLnBsdWdpbnNbdF0uZGVzY3JpcHRpb247ciYmIUUobmF2aWdhdG9yLm1pbWVUeXBlcykmJm5hdmlnYXRvci5taW1lVHlwZXNbbl0mJm5hdmlnYXRvci5taW1lVHlwZXNbbl0uZW5hYmxlZFBsdWdpbiYmKGM9ci5tYXRjaCgvXFxkKy9nKSl9aWYoIWMpdHJ5e2U9bmV3IEFjdGl2ZVhPYmplY3QoXCJTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaFwiKSxjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuR2V0VmFyaWFibGUoXCIkdmVyc2lvblwiKS5tYXRjaCgvKFxcZCspLChcXGQrKSwoXFxkKyksKFxcZCspLyksMSksZT1udWxsfWNhdGNoKGUpe31pZighYylyZXR1cm4hMTt2YXIgbz1wYXJzZUludChjWzBdLDEwKSxpPXBhcnNlSW50KGNbMV0sMTApO3JldHVybiBzPW8+OSYmaT4wLCEwfWlmKHcoZSxcImFkZEV2ZW50TGlzdGVuZXJcIikpdT1mdW5jdGlvbihlLHQsbil7ZS5hZGRFdmVudExpc3RlbmVyKHQsbiwhMSl9LGw9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sITEpfTtlbHNle2lmKCF3KGUsXCJhdHRhY2hFdmVudFwiKSl0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyIG5vdCBzdXBwb3J0ZWRcIik7dT1mdW5jdGlvbihlLHQsbil7ZS5hdHRhY2hFdmVudChcIm9uXCIrdCxuKX0sbD1mdW5jdGlvbihlLHQsbil7ZS5kZXRhY2hFdmVudChcIm9uXCIrdCxuKX19dmFyIHgsTz0hMSxqPVtdO2Z1bmN0aW9uIEEoKXtpZighTyl7Tz0hMDtmb3IodmFyIGU9MDtlPGoubGVuZ3RoO2UrKylqW2VdKCk7ai5sZW5ndGg9MH19ZnVuY3Rpb24gVChlLHQpe08/ZS5jYWxsKHQpOmoucHVzaCgoZnVuY3Rpb24oKXtlLmNhbGwodCl9KSl9ZnVuY3Rpb24gQyhlKXtyZXR1cm4gZS5tYXRjaChoKVszXX1mdW5jdGlvbiBJKGUpe2lmKGUuaW5kZXhPZihcImZpbGU6Ly9cIik+PTApcmV0dXJuXCJmaWxlOi8vXCI7dmFyIHQ9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKGgpO2lmKCF0KXJldHVyblwiXCI7dmFyIG49dFsyXSxyPXRbM10sbz10WzRdfHxcIlwiO3JldHVybihcImh0dHA6XCI9PW4mJlwiOjgwXCI9PW98fFwiaHR0cHM6XCI9PW4mJlwiOjQ0M1wiPT1vKSYmKG89XCJcIiksbitcIi8vXCIrcitvfWZ1bmN0aW9uIFAoZSl7aWYoIShlPWUucmVwbGFjZSh2LFwiJDEvXCIpKS5tYXRjaCgvXihodHRwfHxodHRwcyk6XFwvXFwvLykpe3ZhciB0PVwiL1wiPT09ZS5zdWJzdHJpbmcoMCwxKT9cIlwiOm4ucGF0aG5hbWU7XCIvXCIhPT10LnN1YnN0cmluZyh0Lmxlbmd0aC0xKSYmKHQ9dC5zdWJzdHJpbmcoMCx0Lmxhc3RJbmRleE9mKFwiL1wiKSsxKSksZT1uLnByb3RvY29sK1wiLy9cIituLmhvc3QrdCtlfWZvcig7bS50ZXN0KGUpOyllPWUucmVwbGFjZShtLFwiXCIpO3JldHVybiBlfWZ1bmN0aW9uIEYoZSx0KXt2YXIgbj1cIlwiLHI9ZS5pbmRleE9mKFwiI1wiKTstMSE9PXImJihuPWUuc3Vic3RyaW5nKHIpLGU9ZS5zdWJzdHJpbmcoMCxyKSk7dmFyIG89W107Zm9yKHZhciBhIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShhKSYmby5wdXNoKGErXCI9XCIraSh0W2FdKSk7cmV0dXJuIGUrKGs/XCIjXCI6LTE9PWUuaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK28uam9pbihcIiZcIikrbn1cInJlYWR5U3RhdGVcImluIHQ/KHg9dC5yZWFkeVN0YXRlLE89XCJjb21wbGV0ZVwiPT14fHx+bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpJiYoXCJsb2FkZWRcIj09eHx8XCJpbnRlcmFjdGl2ZVwiPT14KSk6Tz0hIXQuYm9keSxPfHwodyhlLFwiYWRkRXZlbnRMaXN0ZW5lclwiKT91KHQsXCJET01Db250ZW50TG9hZGVkXCIsQSk6KHUodCxcInJlYWR5c3RhdGVjaGFuZ2VcIiwoZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PXQucmVhZHlTdGF0ZSYmQSgpfSkpLHQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsJiZlPT09dG9wJiZmdW5jdGlvbiBlKCl7aWYoIU8pe3RyeXt0LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2godCl7cmV0dXJuIHZvaWQgcihlLDEpfUEoKX19KCkpLHUoZSxcImxvYWRcIixBKSk7dmFyIEI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49e30scj0oZT1lLnN1YnN0cmluZygxKS5zcGxpdChcIiZcIikpLmxlbmd0aDtyLS07KW5bKHQ9ZVtyXS5zcGxpdChcIj1cIikpWzBdXT1vKHRbMV0pO3JldHVybiBufSgveGRtX2U9Ly50ZXN0KG4uc2VhcmNoKT9uLnNlYXJjaDpuLmhhc2gpO2Z1bmN0aW9uIEUoZSl7cmV0dXJuIHZvaWQgMD09PWV9dmFyIFUsUj1mdW5jdGlvbigpe3ZhciBlPXt9LHQ9e2E6WzEsMiwzXX0sbj0ne1wiYVwiOlsxLDIsM119JztyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgSlNPTiYmXCJmdW5jdGlvblwiPT10eXBlb2YgSlNPTi5zdHJpbmdpZnkmJkpTT04uc3RyaW5naWZ5KHQpLnJlcGxhY2UoL1xccy9nLFwiXCIpPT09bj9KU09OOihPYmplY3QudG9KU09OJiZPYmplY3QudG9KU09OKHQpLnJlcGxhY2UoL1xccy9nLFwiXCIpPT09biYmKGUuc3RyaW5naWZ5PU9iamVjdC50b0pTT04pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN0cmluZy5wcm90b3R5cGUuZXZhbEpTT04mJih0PW4uZXZhbEpTT04oKSkuYSYmMz09PXQuYS5sZW5ndGgmJjM9PT10LmFbMl0mJihlLnBhcnNlPWZ1bmN0aW9uKGUpe3JldHVybiBlLmV2YWxKU09OKCl9KSxlLnN0cmluZ2lmeSYmZS5wYXJzZT8oUj1mdW5jdGlvbigpe3JldHVybiBlfSxlKTpudWxsKX07ZnVuY3Rpb24gTChlLHQsbil7dmFyIHI7Zm9yKHZhciBvIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShvKSYmKG8gaW4gZT9cIm9iamVjdFwiPT09a3Qocj10W29dKT9MKGVbb10scixuKTpufHwoZVtvXT10W29dKTplW29dPXRbb10pO3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dmFyIG47RShhKSYmZnVuY3Rpb24oKXt2YXIgZT10LmJvZHkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSksbj1lLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKTtuLm5hbWU9XytcIlRFU1RcIitwLGE9biE9PWUuZWxlbWVudHNbbi5uYW1lXSx0LmJvZHkucmVtb3ZlQ2hpbGQoZSl9KCksYT9uPXQuY3JlYXRlRWxlbWVudCgnPGlmcmFtZSBuYW1lPVwiJytlLnByb3BzLm5hbWUrJ1wiLz4nKToobj10LmNyZWF0ZUVsZW1lbnQoXCJJRlJBTUVcIikpLm5hbWU9ZS5wcm9wcy5uYW1lLG4uaWQ9bi5uYW1lPWUucHJvcHMubmFtZSxkZWxldGUgZS5wcm9wcy5uYW1lLFwic3RyaW5nXCI9PXR5cGVvZiBlLmNvbnRhaW5lciYmKGUuY29udGFpbmVyPXQuZ2V0RWxlbWVudEJ5SWQoZS5jb250YWluZXIpKSxlLmNvbnRhaW5lcnx8KEwobi5zdHlsZSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIi0yMDAwcHhcIixsZWZ0OlwiMHB4XCJ9KSxlLmNvbnRhaW5lcj10LmJvZHkpO3ZhciByPWUucHJvcHMuc3JjO2lmKGUucHJvcHMuc3JjPVwiamF2YXNjcmlwdDpmYWxzZVwiLEwobixlLnByb3BzKSxuLmJvcmRlcj1uLmZyYW1lQm9yZGVyPTAsbi5hbGxvd1RyYW5zcGFyZW5jeT0hMCxlLmNvbnRhaW5lci5hcHBlbmRDaGlsZChuKSxlLm9uTG9hZCYmdShuLFwibG9hZFwiLGUub25Mb2FkKSxlLnVzZVBvc3Qpe3ZhciBvLGk9ZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSk7aWYoaS50YXJnZXQ9bi5uYW1lLGkuYWN0aW9uPXIsaS5tZXRob2Q9XCJQT1NUXCIsXCJvYmplY3RcIj09PWt0KGUudXNlUG9zdCkpZm9yKHZhciBjIGluIGUudXNlUG9zdCllLnVzZVBvc3QuaGFzT3duUHJvcGVydHkoYykmJihhP289dC5jcmVhdGVFbGVtZW50KCc8aW5wdXQgbmFtZT1cIicrYysnXCIvPicpOihvPXQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpKS5uYW1lPWMsby52YWx1ZT1lLnVzZVBvc3RbY10saS5hcHBlbmRDaGlsZChvKSk7aS5zdWJtaXQoKSxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSl9ZWxzZSBuLnNyYz1yO3JldHVybiBlLnByb3BzLnNyYz1yLG59ZnVuY3Rpb24geihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bLVtcXF0ve30oKSsuXFxeJHxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvKFxcKikvZyxcIi4kMVwiKS5yZXBsYWNlKC9cXD8vZyxcIi5cIil9ZnVuY3Rpb24gRChyKXt2YXIgbyxpPXIucHJvdG9jb2w7aWYoci5pc0hvc3Q9ci5pc0hvc3R8fEUoQi54ZG1fcCksaz1yLmhhc2h8fCExLHIucHJvcHN8fChyLnByb3BzPXt9KSxyLmlzSG9zdClyLnJlbW90ZT1QKHIucmVtb3RlKSxyLmNoYW5uZWw9ci5jaGFubmVsfHxcImRlZmF1bHRcIitwKyssci5zZWNyZXQ9TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDIpLEUoaSkmJihpPUkobi5ocmVmKT09SShyLnJlbW90ZSk/XCI0XCI6dyhlLFwicG9zdE1lc3NhZ2VcIil8fHcodCxcInBvc3RNZXNzYWdlXCIpP1wiMVwiOnIuc3dmJiZ3KGUsXCJBY3RpdmVYT2JqZWN0XCIpJiZTKCk/XCI2XCI6XCJHZWNrb1wiPT09bmF2aWdhdG9yLnByb2R1Y3QmJlwiZnJhbWVFbGVtZW50XCJpbiBlJiYtMT09bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2ViS2l0XCIpP1wiNVwiOnIucmVtb3RlSGVscGVyP1wiMlwiOlwiMFwiKTtlbHNlIGlmKHIuY2hhbm5lbD1CLnhkbV9jLnJlcGxhY2UoL1tcIic8PlxcXFxdL2csXCJcIiksci5zZWNyZXQ9Qi54ZG1fcyxyLnJlbW90ZT1CLnhkbV9lLnJlcGxhY2UoL1tcIic8PlxcXFxdL2csXCJcIiksaT1CLnhkbV9wLHIuYWNsJiYhZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9W2VdKTtmb3IodmFyIG4scj1lLmxlbmd0aDtyLS07KWlmKG49XCJeXCI9PT1lW3JdLnN1YnN0cigwLDEpJiZcIiRcIj09PWVbcl0uc3Vic3RyKGVbcl0ubGVuZ3RoLTEsMSk/ZVtyXTpcIl5cIit6KGVbcl0pK1wiJFwiLChuPW5ldyBSZWdFeHAobikpLnRlc3QodCkpcmV0dXJuITA7cmV0dXJuITF9KHIuYWNsLHIucmVtb3RlKSl0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkIGZvciBcIityLnJlbW90ZSk7c3dpdGNoKHIucHJvdG9jb2w9aSxpKXtjYXNlXCIwXCI6aWYoTChyLHtpbnRlcnZhbDoxMDAsZGVsYXk6MmUzLHVzZVJlc2l6ZTohMCx1c2VQYXJlbnQ6ITEsdXNlUG9sbGluZzohMX0sITApLHIuaXNIb3N0KXtpZighci5sb2NhbCl7Zm9yKHZhciBhLHM9bi5wcm90b2NvbCtcIi8vXCIrbi5ob3N0LHU9dC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpLGw9dS5sZW5ndGg7bC0tOylpZigoYT11W2xdKS5zcmMuc3Vic3RyaW5nKDAscy5sZW5ndGgpPT09cyl7ci5sb2NhbD1hLnNyYzticmVha31yLmxvY2FsfHwoci5sb2NhbD1lKX12YXIgZD17eGRtX2M6ci5jaGFubmVsLHhkbV9wOjB9O3IubG9jYWw9PT1lPyhyLnVzZVBvbGxpbmc9ITAsci51c2VQYXJlbnQ9ITAsci5sb2NhbD1uLnByb3RvY29sK1wiLy9cIituLmhvc3Qrbi5wYXRobmFtZStuLnNlYXJjaCxkLnhkbV9lPXIubG9jYWwsZC54ZG1fcGE9MSk6ZC54ZG1fZT1QKHIubG9jYWwpLHIuY29udGFpbmVyJiYoci51c2VSZXNpemU9ITEsZC54ZG1fcG89MSksci5yZW1vdGU9RihyLnJlbW90ZSxkKX1lbHNlIEwocix7dXNlUGFyZW50OiFFKEIueGRtX3BhKSx1c2VQb2xsaW5nOiFFKEIueGRtX3BvKSx1c2VSZXNpemU6IXIudXNlUGFyZW50JiZyLnVzZVJlc2l6ZX0pO289W25ldyB5LnN0YWNrLkhhc2hUcmFuc3BvcnQociksbmV3IHkuc3RhY2suUmVsaWFibGVCZWhhdmlvcih7fSksbmV3IHkuc3RhY2suUXVldWVCZWhhdmlvcih7ZW5jb2RlOiEwLG1heExlbmd0aDo0ZTMtci5yZW1vdGUubGVuZ3RofSksbmV3IHkuc3RhY2suVmVyaWZ5QmVoYXZpb3Ioe2luaXRpYXRlOnIuaXNIb3N0fSldO2JyZWFrO2Nhc2VcIjFcIjpvPVtuZXcgeS5zdGFjay5Qb3N0TWVzc2FnZVRyYW5zcG9ydChyKV07YnJlYWs7Y2FzZVwiMlwiOnIuaXNIb3N0JiYoci5yZW1vdGVIZWxwZXI9UChyLnJlbW90ZUhlbHBlcikpLG89W25ldyB5LnN0YWNrLk5hbWVUcmFuc3BvcnQociksbmV3IHkuc3RhY2suUXVldWVCZWhhdmlvcixuZXcgeS5zdGFjay5WZXJpZnlCZWhhdmlvcih7aW5pdGlhdGU6ci5pc0hvc3R9KV07YnJlYWs7Y2FzZVwiM1wiOm89W25ldyB5LnN0YWNrLk5peFRyYW5zcG9ydChyKV07YnJlYWs7Y2FzZVwiNFwiOm89W25ldyB5LnN0YWNrLlNhbWVPcmlnaW5UcmFuc3BvcnQocildO2JyZWFrO2Nhc2VcIjVcIjpvPVtuZXcgeS5zdGFjay5GcmFtZUVsZW1lbnRUcmFuc3BvcnQocildO2JyZWFrO2Nhc2VcIjZcIjpjfHxTKCksbz1bbmV3IHkuc3RhY2suRmxhc2hUcmFuc3BvcnQocildfXJldHVybiBvLnB1c2gobmV3IHkuc3RhY2suUXVldWVCZWhhdmlvcih7bGF6eTpyLmxhenkscmVtb3ZlOiEwfSkpLG99ZnVuY3Rpb24gcShlKXtmb3IodmFyIHQsbj17aW5jb21pbmc6ZnVuY3Rpb24oZSx0KXt0aGlzLnVwLmluY29taW5nKGUsdCl9LG91dGdvaW5nOmZ1bmN0aW9uKGUsdCl7dGhpcy5kb3duLm91dGdvaW5nKGUsdCl9LGNhbGxiYWNrOmZ1bmN0aW9uKGUpe3RoaXMudXAuY2FsbGJhY2soZSl9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmRvd24uaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5kb3duLmRlc3Ryb3koKX19LHI9MCxvPWUubGVuZ3RoO3I8bztyKyspTCh0PWVbcl0sbiwhMCksMCE9PXImJih0LmRvd249ZVtyLTFdKSxyIT09by0xJiYodC51cD1lW3IrMV0pO3JldHVybiB0fUwoeSx7dmVyc2lvbjpcIjIuNS4wMC4xXCIscXVlcnk6QixzdGFjazp7fSxhcHBseTpMLGdldEpTT05PYmplY3Q6Uix3aGVuUmVhZHk6VCxub0NvbmZsaWN0OmZ1bmN0aW9uKHQpe3JldHVybiBlLmVhc3lYRE09YiwoZz10KSYmKF89XCJlYXN5WERNX1wiK2cucmVwbGFjZShcIi5cIixcIl9cIikrXCJfXCIpLHl9fSkseS5Eb21IZWxwZXI9e29uOnUsdW46bCxyZXF1aXJlc0pTT046ZnVuY3Rpb24obil7KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIShcIm9iamVjdFwiIT1rdChlW3RdKXx8IWVbdF0pfSkoZSxcIkpTT05cIil8fHQud3JpdGUoJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIicrbisnXCI+PFxcL3NjcmlwdD4nKX19LFU9e30seS5Gbj17c2V0OmZ1bmN0aW9uKGUsdCl7VVtlXT10fSxnZXQ6ZnVuY3Rpb24oZSx0KXtpZihVLmhhc093blByb3BlcnR5KGUpKXt2YXIgbj1VW2VdO3JldHVybiB0JiZkZWxldGUgVVtlXSxufX19LHkuU29ja2V0PWZ1bmN0aW9uKGUpe3ZhciB0PXEoRChlKS5jb25jYXQoW3tpbmNvbWluZzpmdW5jdGlvbih0LG4pe2Uub25NZXNzYWdlKHQsbil9LGNhbGxiYWNrOmZ1bmN0aW9uKHQpe2Uub25SZWFkeSYmZS5vblJlYWR5KHQpfX1dKSksbj1JKGUucmVtb3RlKTt0aGlzLm9yaWdpbj1JKGUucmVtb3RlKSx0aGlzLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0LmRlc3Ryb3koKX0sdGhpcy5wb3N0TWVzc2FnZT1mdW5jdGlvbihlKXt0Lm91dGdvaW5nKGUsbil9LHQuaW5pdCgpfSx5LlJwYz1mdW5jdGlvbihlLHQpe2lmKHQubG9jYWwpZm9yKHZhciBuIGluIHQubG9jYWwpaWYodC5sb2NhbC5oYXNPd25Qcm9wZXJ0eShuKSl7dmFyIHI9dC5sb2NhbFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodC5sb2NhbFtuXT17bWV0aG9kOnJ9KX12YXIgbz1xKEQoZSkuY29uY2F0KFtuZXcgeS5zdGFjay5ScGNCZWhhdmlvcih0aGlzLHQpLHtjYWxsYmFjazpmdW5jdGlvbih0KXtlLm9uUmVhZHkmJmUub25SZWFkeSh0KX19XSkpO3RoaXMub3JpZ2luPUkoZS5yZW1vdGUpLHRoaXMuY29udGV4dD1lLmNvbnRleHR8fG51bGwsdGhpcy5kZXN0cm95PWZ1bmN0aW9uKCl7by5kZXN0cm95KCl9LG8uaW5pdCgpfSx5LnN0YWNrLlNhbWVPcmlnaW5UcmFuc3BvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbyxpLGE7cmV0dXJuIHQ9e291dGdvaW5nOmZ1bmN0aW9uKGUsdCxuKXtpKGUpLG4mJm4oKX0sZGVzdHJveTpmdW5jdGlvbigpe28mJihvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksbz1udWxsKX0sb25ET01SZWFkeTpmdW5jdGlvbigpe2E9SShlLnJlbW90ZSksZS5pc0hvc3Q/KEwoZS5wcm9wcyx7c3JjOkYoZS5yZW1vdGUse3hkbV9lOm4ucHJvdG9jb2wrXCIvL1wiK24uaG9zdCtuLnBhdGhuYW1lLHhkbV9jOmUuY2hhbm5lbCx4ZG1fcDo0fSksbmFtZTpfK2UuY2hhbm5lbCtcIl9wcm92aWRlclwifSksbz1NKGUpLHkuRm4uc2V0KGUuY2hhbm5lbCwoZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSxyKChmdW5jdGlvbigpe3QudXAuY2FsbGJhY2soITApfSksMCksZnVuY3Rpb24oZSl7dC51cC5pbmNvbWluZyhlLGEpfX0pKSk6KGk9ZnVuY3Rpb24oKXt2YXIgZT1wYXJlbnQ7aWYoXCJcIiE9PWcpZm9yKHZhciB0PTAsbj1nLnNwbGl0KFwiLlwiKTt0PG4ubGVuZ3RoO3QrKyllPWVbblt0XV07cmV0dXJuIGUuZWFzeVhETX0oKS5Gbi5nZXQoZS5jaGFubmVsLCEwKSgoZnVuY3Rpb24oZSl7dC51cC5pbmNvbWluZyhlLGEpfSkpLHIoKGZ1bmN0aW9uKCl7dC51cC5jYWxsYmFjayghMCl9KSwwKSl9LGluaXQ6ZnVuY3Rpb24oKXtUKHQub25ET01SZWFkeSx0KX19fSx5LnN0YWNrLkZsYXNoVHJhbnNwb3J0PWZ1bmN0aW9uKGUpe3ZhciBvLGEsYyx1LGw7ZnVuY3Rpb24gcChlLHQpe3IoKGZ1bmN0aW9uKCl7by51cC5pbmNvbWluZyhlLGMpfSksMCl9ZnVuY3Rpb24gZihuKXt2YXIgcj1lLnN3ZitcIj9ob3N0PVwiK2UuaXNIb3N0LG89XCJlYXN5WERNX3N3Zl9cIitNYXRoLmZsb29yKDFlNCpNYXRoLnJhbmRvbSgpKTt5LkZuLnNldChcImZsYXNoX2xvYWRlZFwiK24ucmVwbGFjZSgvW1xcLS5dL2csXCJfXCIpLChmdW5jdGlvbigpe3kuc3RhY2suRmxhc2hUcmFuc3BvcnRbbl0uc3dmPXU9bC5maXJzdENoaWxkO2Zvcih2YXIgZT15LnN0YWNrLkZsYXNoVHJhbnNwb3J0W25dLnF1ZXVlLHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCk7ZS5sZW5ndGg9MH0pKSxlLnN3ZkNvbnRhaW5lcj9sPVwic3RyaW5nXCI9PXR5cGVvZiBlLnN3ZkNvbnRhaW5lcj90LmdldEVsZW1lbnRCeUlkKGUuc3dmQ29udGFpbmVyKTplLnN3ZkNvbnRhaW5lcjooTCgobD10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLnN0eWxlLHMmJmUuc3dmTm9UaHJvdHRsZT97aGVpZ2h0OlwiMjBweFwiLHdpZHRoOlwiMjBweFwiLHBvc2l0aW9uOlwiZml4ZWRcIixyaWdodDowLHRvcDowfTp7aGVpZ2h0OlwiMXB4XCIsd2lkdGg6XCIxcHhcIixwb3NpdGlvbjpcImFic29sdXRlXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIixyaWdodDowLHRvcDowfSksdC5ib2R5LmFwcGVuZENoaWxkKGwpKTt2YXIgYT1cImNhbGxiYWNrPWZsYXNoX2xvYWRlZFwiK2kobi5yZXBsYWNlKC9bXFwtLl0vZyxcIl9cIikpK1wiJnByb3RvPVwiK2QubG9jYXRpb24ucHJvdG9jb2wrXCImZG9tYWluPVwiK2koQyhkLmxvY2F0aW9uLmhyZWYpKStcIiZwb3J0PVwiK2koZnVuY3Rpb24oZSl7cmV0dXJuIGUubWF0Y2goaClbNF18fFwiXCJ9KGQubG9jYXRpb24uaHJlZikpK1wiJm5zPVwiK2koZyk7bC5pbm5lckhUTUw9XCI8b2JqZWN0IGhlaWdodD0nMjAnIHdpZHRoPScyMCcgdHlwZT0nYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnIGlkPSdcIitvK1wiJyBkYXRhPSdcIityK1wiJz48cGFyYW0gbmFtZT0nYWxsb3dTY3JpcHRBY2Nlc3MnIHZhbHVlPSdhbHdheXMnPjwvcGFyYW0+PHBhcmFtIG5hbWU9J3dtb2RlJyB2YWx1ZT0ndHJhbnNwYXJlbnQnPjxwYXJhbSBuYW1lPSdtb3ZpZScgdmFsdWU9J1wiK3IrXCInPjwvcGFyYW0+PHBhcmFtIG5hbWU9J2ZsYXNodmFycycgdmFsdWU9J1wiK2ErXCInPjwvcGFyYW0+PGVtYmVkIHR5cGU9J2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyBGbGFzaFZhcnM9J1wiK2ErXCInIGFsbG93U2NyaXB0QWNjZXNzPSdhbHdheXMnIHdtb2RlPSd0cmFuc3BhcmVudCcgc3JjPSdcIityK1wiJyBoZWlnaHQ9JzEnIHdpZHRoPScxJz48L2VtYmVkPjwvb2JqZWN0PlwifXJldHVybiBvPXtvdXRnb2luZzpmdW5jdGlvbih0LG4scil7dS5wb3N0TWVzc2FnZShlLmNoYW5uZWwsdC50b1N0cmluZygpKSxyJiZyKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0cnl7dS5kZXN0cm95Q2hhbm5lbChlLmNoYW5uZWwpfWNhdGNoKGUpe311PW51bGwsYSYmKGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKSxhPW51bGwpfSxvbkRPTVJlYWR5OmZ1bmN0aW9uKCl7Yz1lLnJlbW90ZSx5LkZuLnNldChcImZsYXNoX1wiK2UuY2hhbm5lbCtcIl9pbml0XCIsKGZ1bmN0aW9uKCl7cigoZnVuY3Rpb24oKXtvLnVwLmNhbGxiYWNrKCEwKX0pKX0pKSx5LkZuLnNldChcImZsYXNoX1wiK2UuY2hhbm5lbCtcIl9vbk1lc3NhZ2VcIixwKSxlLnN3Zj1QKGUuc3dmKTt2YXIgdD1DKGUuc3dmKSxpPWZ1bmN0aW9uKCl7eS5zdGFjay5GbGFzaFRyYW5zcG9ydFt0XS5pbml0PSEwLCh1PXkuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF0uc3dmKS5jcmVhdGVDaGFubmVsKGUuY2hhbm5lbCxlLnNlY3JldCxJKGUucmVtb3RlKSxlLmlzSG9zdCksZS5pc0hvc3QmJihzJiZlLnN3Zk5vVGhyb3R0bGUmJkwoZS5wcm9wcyx7cG9zaXRpb246XCJmaXhlZFwiLHJpZ2h0OjAsdG9wOjAsaGVpZ2h0OlwiMjBweFwiLHdpZHRoOlwiMjBweFwifSksTChlLnByb3BzLHtzcmM6RihlLnJlbW90ZSx7eGRtX2U6SShuLmhyZWYpLHhkbV9jOmUuY2hhbm5lbCx4ZG1fcDo2LHhkbV9zOmUuc2VjcmV0fSksbmFtZTpfK2UuY2hhbm5lbCtcIl9wcm92aWRlclwifSksYT1NKGUpKX07eS5zdGFjay5GbGFzaFRyYW5zcG9ydFt0XSYmeS5zdGFjay5GbGFzaFRyYW5zcG9ydFt0XS5pbml0P2koKTp5LnN0YWNrLkZsYXNoVHJhbnNwb3J0W3RdP3kuc3RhY2suRmxhc2hUcmFuc3BvcnRbdF0ucXVldWUucHVzaChpKTooeS5zdGFjay5GbGFzaFRyYW5zcG9ydFt0XT17cXVldWU6W2ldfSxmKHQpKX0saW5pdDpmdW5jdGlvbigpe1Qoby5vbkRPTVJlYWR5LG8pfX19LHkuc3RhY2suUG9zdE1lc3NhZ2VUcmFuc3BvcnQ9ZnVuY3Rpb24odCl7dmFyIG8saSxhLGM7ZnVuY3Rpb24gcyhlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhKXt2YXIgcj1mdW5jdGlvbihlKXtpZihlLm9yaWdpbilyZXR1cm4gSShlLm9yaWdpbik7aWYoZS51cmkpcmV0dXJuIEkoZS51cmkpO2lmKGUuZG9tYWluKXJldHVybiBuLnByb3RvY29sK1wiLy9cIitlLmRvbWFpbjt0aHJvd1wiVW5hYmxlIHRvIHJldHJpZXZlIHRoZSBvcmlnaW4gb2YgdGhlIGV2ZW50XCJ9KGUpO3I9PWMmJlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJmUuZGF0YS5zdWJzdHJpbmcoMCx0LmNoYW5uZWwubGVuZ3RoKzEpPT10LmNoYW5uZWwrXCIgXCImJm8udXAuaW5jb21pbmcoZS5kYXRhLnN1YnN0cmluZyh0LmNoYW5uZWwubGVuZ3RoKzEpLHIpfX1mdW5jdGlvbiBkKG4pe24uZGF0YT09dC5jaGFubmVsK1wiLXJlYWR5XCImJihhPVwicG9zdE1lc3NhZ2VcImluIGkuY29udGVudFdpbmRvdz9pLmNvbnRlbnRXaW5kb3c6aS5jb250ZW50V2luZG93LmRvY3VtZW50LGwoZSxcIm1lc3NhZ2VcIixkKSx1KGUsXCJtZXNzYWdlXCIscykscigoZnVuY3Rpb24oKXtvLnVwLmNhbGxiYWNrKCEwKX0pLDApKX1yZXR1cm4gbz17b3V0Z29pbmc6ZnVuY3Rpb24oZSxuLHIpe2EucG9zdE1lc3NhZ2UodC5jaGFubmVsK1wiIFwiK2Usbnx8YyksciYmcigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7bChlLFwibWVzc2FnZVwiLGQpLGwoZSxcIm1lc3NhZ2VcIixzKSxpJiYoYT1udWxsLGkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKSxpPW51bGwpfSxvbkRPTVJlYWR5OmZ1bmN0aW9uKCl7XCJmaWxlOi8vXCI9PT0oYz1JKHQucmVtb3RlKSkmJihjPVwiKlwiKSx0LmlzSG9zdD8odShlLFwibWVzc2FnZVwiLGQpLEwodC5wcm9wcyx7c3JjOkYodC5yZW1vdGUse3hkbV9lOkkobi5ocmVmKSx4ZG1fYzp0LmNoYW5uZWwseGRtX3A6MX0pLG5hbWU6Xyt0LmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLGk9TSh0KSk6KHUoZSxcIm1lc3NhZ2VcIixzKSwoYT1cInBvc3RNZXNzYWdlXCJpbiBlLnBhcmVudD9lLnBhcmVudDplLnBhcmVudC5kb2N1bWVudCkucG9zdE1lc3NhZ2UodC5jaGFubmVsK1wiLXJlYWR5XCIsYykscigoZnVuY3Rpb24oKXtvLnVwLmNhbGxiYWNrKCEwKX0pLDApKX0saW5pdDpmdW5jdGlvbigpe1Qoby5vbkRPTVJlYWR5LG8pfX19LHkuc3RhY2suRnJhbWVFbGVtZW50VHJhbnNwb3J0PWZ1bmN0aW9uKG8pe3ZhciBpLGEsYyxzO3JldHVybiBpPXtvdXRnb2luZzpmdW5jdGlvbihlLHQsbil7Yy5jYWxsKHRoaXMsZSksbiYmbigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7YSYmKGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKSxhPW51bGwpfSxvbkRPTVJlYWR5OmZ1bmN0aW9uKCl7cz1JKG8ucmVtb3RlKSxvLmlzSG9zdD8oTChvLnByb3BzLHtzcmM6RihvLnJlbW90ZSx7eGRtX2U6SShuLmhyZWYpLHhkbV9jOm8uY2hhbm5lbCx4ZG1fcDo1fSksbmFtZTpfK28uY2hhbm5lbCtcIl9wcm92aWRlclwifSksKGE9TShvKSkuZm49ZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSBhLmZuLGM9ZSxyKChmdW5jdGlvbigpe2kudXAuY2FsbGJhY2soITApfSksMCksZnVuY3Rpb24oZSl7aS51cC5pbmNvbWluZyhlLHMpfX0pOih0LnJlZmVycmVyJiZJKHQucmVmZXJyZXIpIT1CLnhkbV9lJiYoZS50b3AubG9jYXRpb249Qi54ZG1fZSksYz1lLmZyYW1lRWxlbWVudC5mbigoZnVuY3Rpb24oZSl7aS51cC5pbmNvbWluZyhlLHMpfSkpLGkudXAuY2FsbGJhY2soITApKX0saW5pdDpmdW5jdGlvbigpe1QoaS5vbkRPTVJlYWR5LGkpfX19LHkuc3RhY2suTmFtZVRyYW5zcG9ydD1mdW5jdGlvbihlKXt2YXIgdCxuLG8saSxhLGMscyx1O2Z1bmN0aW9uIGQodCl7dmFyIHI9ZS5yZW1vdGVIZWxwZXIrKG4/XCIjXzNcIjpcIiNfMlwiKStlLmNoYW5uZWw7by5jb250ZW50V2luZG93LnNlbmRNZXNzYWdlKHQscil9ZnVuY3Rpb24gcCgpe24/MiE9KythJiZufHx0LnVwLmNhbGxiYWNrKCEwKTooZChcInJlYWR5XCIpLHQudXAuY2FsbGJhY2soITApKX1mdW5jdGlvbiBmKGUpe3QudXAuaW5jb21pbmcoZSxzKX1mdW5jdGlvbiBoKCl7YyYmcigoZnVuY3Rpb24oKXtjKCEwKX0pLDApfXJldHVybiB0PXtvdXRnb2luZzpmdW5jdGlvbihlLHQsbil7Yz1uLGQoZSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksbz1udWxsLG4mJihpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksaT1udWxsKX0sb25ET01SZWFkeTpmdW5jdGlvbigpe249ZS5pc0hvc3QsYT0wLHM9SShlLnJlbW90ZSksZS5sb2NhbD1QKGUubG9jYWwpLG4/KHkuRm4uc2V0KGUuY2hhbm5lbCwoZnVuY3Rpb24odCl7biYmXCJyZWFkeVwiPT09dCYmKHkuRm4uc2V0KGUuY2hhbm5lbCxmKSxwKCkpfSkpLHU9RihlLnJlbW90ZSx7eGRtX2U6ZS5sb2NhbCx4ZG1fYzplLmNoYW5uZWwseGRtX3A6Mn0pLEwoZS5wcm9wcyx7c3JjOnUrXCIjXCIrZS5jaGFubmVsLG5hbWU6XytlLmNoYW5uZWwrXCJfcHJvdmlkZXJcIn0pLGk9TShlKSk6KGUucmVtb3RlSGVscGVyPWUucmVtb3RlLHkuRm4uc2V0KGUuY2hhbm5lbCxmKSksbz1NKHtwcm9wczp7c3JjOmUubG9jYWwrXCIjXzRcIitlLmNoYW5uZWx9LG9uTG9hZDpmdW5jdGlvbiB0KCl7dmFyIG49b3x8dGhpcztsKG4sXCJsb2FkXCIsdCkseS5Gbi5zZXQoZS5jaGFubmVsK1wiX2xvYWRcIixoKSxmdW5jdGlvbiBlKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5jb250ZW50V2luZG93LnNlbmRNZXNzYWdlP3AoKTpyKGUsNTApfSgpfX0pfSxpbml0OmZ1bmN0aW9uKCl7VCh0Lm9uRE9NUmVhZHksdCl9fX0seS5zdGFjay5IYXNoVHJhbnNwb3J0PWZ1bmN0aW9uKHQpe3ZhciBuLG8saSxhLGMscyx1LGwsZCxwO2Z1bmN0aW9uIGYoKXtpZih1KXt2YXIgZT11LmxvY2F0aW9uLmhyZWYsdD1cIlwiLHI9ZS5pbmRleE9mKFwiI1wiKTstMSE9ciYmKHQ9ZS5zdWJzdHJpbmcocikpLHQmJnQhPWMmJmZ1bmN0aW9uKGUpe2M9ZSxuLnVwLmluY29taW5nKGMuc3Vic3RyaW5nKGMuaW5kZXhPZihcIl9cIikrMSkscCl9KHQpfX1mdW5jdGlvbiBoKCl7aT1zZXRJbnRlcnZhbChmLGEpfXJldHVybiBuPXtvdXRnb2luZzpmdW5jdGlvbihlLG4peyFmdW5jdGlvbihlKXtpZihsKXt2YXIgbj10LnJlbW90ZStcIiNcIitzKysrXCJfXCIrZTsob3x8IWQ/bC5jb250ZW50V2luZG93OmwpLmxvY2F0aW9uPW59fShlKX0sZGVzdHJveTpmdW5jdGlvbigpe2UuY2xlYXJJbnRlcnZhbChpKSwhbyYmZHx8bC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpLGw9bnVsbH0sb25ET01SZWFkeTpmdW5jdGlvbigpe2lmKG89dC5pc0hvc3QsYT10LmludGVydmFsLGM9XCIjXCIrdC5jaGFubmVsLHM9MCxkPXQudXNlUGFyZW50LHA9SSh0LnJlbW90ZSksbyl7aWYoTCh0LnByb3BzLHtzcmM6dC5yZW1vdGUsbmFtZTpfK3QuY2hhbm5lbCtcIl9wcm92aWRlclwifSksZCl0Lm9uTG9hZD1mdW5jdGlvbigpe3U9ZSxoKCksbi51cC5jYWxsYmFjayghMCl9O2Vsc2V7dmFyIGk9MCxmPXQuZGVsYXkvNTA7IWZ1bmN0aW9uIGUoKXtpZigrK2k+Zil0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcmVmZXJlbmNlIGxpc3RlbmVyd2luZG93XCIpO3RyeXt1PWwuY29udGVudFdpbmRvdy5mcmFtZXNbXyt0LmNoYW5uZWwrXCJfY29uc3VtZXJcIl19Y2F0Y2goZSl7fXU/KGgoKSxuLnVwLmNhbGxiYWNrKCEwKSk6cihlLDUwKX0oKX1sPU0odCl9ZWxzZSB1PWUsaCgpLGQ/KGw9cGFyZW50LG4udXAuY2FsbGJhY2soITApKTooTCh0LHtwcm9wczp7c3JjOnQucmVtb3RlK1wiI1wiK3QuY2hhbm5lbCtuZXcgRGF0ZSxuYW1lOl8rdC5jaGFubmVsK1wiX2NvbnN1bWVyXCJ9LG9uTG9hZDpmdW5jdGlvbigpe24udXAuY2FsbGJhY2soITApfX0pLGw9TSh0KSl9LGluaXQ6ZnVuY3Rpb24oKXtUKG4ub25ET01SZWFkeSxuKX19fSx5LnN0YWNrLlJlbGlhYmxlQmVoYXZpb3I9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTAsbz0wLGk9XCJcIjtyZXR1cm4gdD17aW5jb21pbmc6ZnVuY3Rpb24oZSxhKXt2YXIgYz1lLmluZGV4T2YoXCJfXCIpLHM9ZS5zdWJzdHJpbmcoMCxjKS5zcGxpdChcIixcIik7ZT1lLnN1YnN0cmluZyhjKzEpLHNbMF09PXImJihpPVwiXCIsbiYmbighMCkpLGUubGVuZ3RoPjAmJih0LmRvd24ub3V0Z29pbmcoc1sxXStcIixcIityK1wiX1wiK2ksYSksbyE9c1sxXSYmKG89c1sxXSx0LnVwLmluY29taW5nKGUsYSkpKX0sb3V0Z29pbmc6ZnVuY3Rpb24oZSxhLGMpe2k9ZSxuPWMsdC5kb3duLm91dGdvaW5nKG8rXCIsXCIrICsrcitcIl9cIitlLGEpfX19LHkuc3RhY2suUXVldWVCZWhhdmlvcj1mdW5jdGlvbihlKXt2YXIgdCxuLGE9W10sYz0hMCxzPVwiXCIsdT0wLGw9ITEsZD0hMTtmdW5jdGlvbiBwKCl7aWYoZS5yZW1vdmUmJjA9PT1hLmxlbmd0aCkhZnVuY3Rpb24oZSl7ZS51cC5kb3duPWUuZG93bixlLmRvd24udXA9ZS51cCxlLnVwPWUuZG93bj1udWxsfSh0KTtlbHNlIGlmKCFjJiYwIT09YS5sZW5ndGgmJiFuKXtjPSEwO3ZhciBvPWEuc2hpZnQoKTt0LmRvd24ub3V0Z29pbmcoby5kYXRhLG8ub3JpZ2luLChmdW5jdGlvbihlKXtjPSExLG8uY2FsbGJhY2smJnIoKGZ1bmN0aW9uKCl7by5jYWxsYmFjayhlKX0pLDApLHAoKX0pKX19cmV0dXJuIHQ9e2luaXQ6ZnVuY3Rpb24oKXtFKGUpJiYoZT17fSksZS5tYXhMZW5ndGgmJih1PWUubWF4TGVuZ3RoLGQ9ITApLGUubGF6eT9sPSEwOnQuZG93bi5pbml0KCl9LGNhbGxiYWNrOmZ1bmN0aW9uKGUpe2M9ITE7dmFyIG49dC51cDtwKCksbi5jYWxsYmFjayhlKX0saW5jb21pbmc6ZnVuY3Rpb24obixyKXtpZihkKXt2YXIgaT1uLmluZGV4T2YoXCJfXCIpLGE9cGFyc2VJbnQobi5zdWJzdHJpbmcoMCxpKSwxMCk7cys9bi5zdWJzdHJpbmcoaSsxKSwwPT09YSYmKGUuZW5jb2RlJiYocz1vKHMpKSx0LnVwLmluY29taW5nKHMscikscz1cIlwiKX1lbHNlIHQudXAuaW5jb21pbmcobixyKX0sb3V0Z29pbmc6ZnVuY3Rpb24obixyLG8pe2UuZW5jb2RlJiYobj1pKG4pKTt2YXIgYyxzPVtdO2lmKGQpe2Zvcig7MCE9PW4ubGVuZ3RoOyljPW4uc3Vic3RyaW5nKDAsdSksbj1uLnN1YnN0cmluZyhjLmxlbmd0aCkscy5wdXNoKGMpO2Zvcig7Yz1zLnNoaWZ0KCk7KWEucHVzaCh7ZGF0YTpzLmxlbmd0aCtcIl9cIitjLG9yaWdpbjpyLGNhbGxiYWNrOjA9PT1zLmxlbmd0aD9vOm51bGx9KX1lbHNlIGEucHVzaCh7ZGF0YTpuLG9yaWdpbjpyLGNhbGxiYWNrOm99KTtsP3QuZG93bi5pbml0KCk6cCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7bj0hMCx0LmRvd24uZGVzdHJveSgpfX19LHkuc3RhY2suVmVyaWZ5QmVoYXZpb3I9ZnVuY3Rpb24oZSl7dmFyIHQsbixyO2Z1bmN0aW9uIG8oKXtuPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygyKSx0LmRvd24ub3V0Z29pbmcobil9cmV0dXJuIHQ9e2luY29taW5nOmZ1bmN0aW9uKGksYSl7dmFyIGM9aS5pbmRleE9mKFwiX1wiKTstMT09PWM/aT09PW4/dC51cC5jYWxsYmFjayghMCk6cnx8KHI9aSxlLmluaXRpYXRlfHxvKCksdC5kb3duLm91dGdvaW5nKGkpKTppLnN1YnN0cmluZygwLGMpPT09ciYmdC51cC5pbmNvbWluZyhpLnN1YnN0cmluZyhjKzEpLGEpfSxvdXRnb2luZzpmdW5jdGlvbihlLHIsbyl7dC5kb3duLm91dGdvaW5nKG4rXCJfXCIrZSxyLG8pfSxjYWxsYmFjazpmdW5jdGlvbih0KXtlLmluaXRpYXRlJiZvKCl9fX0seS5zdGFjay5ScGNCZWhhdmlvcj1mdW5jdGlvbihlLHQpe3ZhciBuLHI9dC5zZXJpYWxpemVyfHxSKCksbz0wLGk9e307ZnVuY3Rpb24gYShlKXtlLmpzb25ycGM9XCIyLjBcIixuLmRvd24ub3V0Z29pbmcoci5zdHJpbmdpZnkoZSkpfWZ1bmN0aW9uIGMoZSx0KXt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2U7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHIsYz1hcmd1bWVudHMubGVuZ3RoLHM9e21ldGhvZDp0fTtjPjAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGFyZ3VtZW50c1tjLTFdPyhjPjEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGFyZ3VtZW50c1tjLTJdPyhyPXtzdWNjZXNzOmFyZ3VtZW50c1tjLTJdLGVycm9yOmFyZ3VtZW50c1tjLTFdfSxzLnBhcmFtcz1uLmNhbGwoYXJndW1lbnRzLDAsYy0yKSk6KHI9e3N1Y2Nlc3M6YXJndW1lbnRzW2MtMV19LHMucGFyYW1zPW4uY2FsbChhcmd1bWVudHMsMCxjLTEpKSxpW1wiXCIrICsrb109cixzLmlkPW8pOnMucGFyYW1zPW4uY2FsbChhcmd1bWVudHMsMCksZS5uYW1lZFBhcmFtcyYmMT09PXMucGFyYW1zLmxlbmd0aCYmKHMucGFyYW1zPXMucGFyYW1zWzBdKSxhKHMpfX1mdW5jdGlvbiBzKHQsbixyLG8pe2lmKHIpe3ZhciBpLGM7bj8oaT1mdW5jdGlvbihlKXtpPWYsYSh7aWQ6bixyZXN1bHQ6ZX0pfSxjPWZ1bmN0aW9uKGUsdCl7Yz1mO3ZhciByPXtpZDpuLGVycm9yOntjb2RlOi0zMjA5OSxtZXNzYWdlOmV9fTt0JiYoci5lcnJvci5kYXRhPXQpLGEocil9KTppPWM9ZixmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9KG8pfHwobz1bb10pO3RyeXt2YXIgcz1lLmNvbnRleHR8fHIuc2NvcGUsdT1yLm1ldGhvZC5hcHBseShzLG8uY29uY2F0KFtpLGNdKSk7RSh1KXx8aSh1KX1jYXRjaChlKXtjKGUubWVzc2FnZSl9fWVsc2UgbiYmYSh7aWQ6bixlcnJvcjp7Y29kZTotMzI2MDEsbWVzc2FnZTpcIlByb2NlZHVyZSBub3QgZm91bmQuXCJ9fSl9cmV0dXJuIG49e2luY29taW5nOmZ1bmN0aW9uKGUsbil7dmFyIG89ci5wYXJzZShlKTtpZihvLm1ldGhvZCl0LmhhbmRsZT90LmhhbmRsZShvLGEpOnMoby5tZXRob2Qsby5pZCx0LmxvY2FsW28ubWV0aG9kXSxvLnBhcmFtcyk7ZWxzZXt2YXIgYz1pW28uaWRdO28uZXJyb3I/Yy5lcnJvciYmYy5lcnJvcihvLmVycm9yKTpjLnN1Y2Nlc3MmJmMuc3VjY2VzcyhvLnJlc3VsdCksZGVsZXRlIGlbby5pZF19fSxpbml0OmZ1bmN0aW9uKCl7aWYodC5yZW1vdGUpZm9yKHZhciByIGluIHQucmVtb3RlKXQucmVtb3RlLmhhc093blByb3BlcnR5KHIpJiYoZVtyXT1jKHQucmVtb3RlW3JdLHIpKTtuLmRvd24uaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7Zm9yKHZhciByIGluIHQucmVtb3RlKXQucmVtb3RlLmhhc093blByb3BlcnR5KHIpJiZlLmhhc093blByb3BlcnR5KHIpJiZkZWxldGUgZVtyXTtuLmRvd24uZGVzdHJveSgpfX19LGQuZWFzeVhETT15fSh3aW5kb3csZG9jdW1lbnQsbG9jYXRpb24sd2luZG93LnNldFRpbWVvdXQsZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSUNvbXBvbmVudCksZWFzeVhETS5ub0NvbmZsaWN0KFwiS2FrYW9cIikpLEhuPUtuLEpuPWZ1bmN0aW9uKCl7dmFyIGUsdCxuPW58fGZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj1uLmxpYj17fSxvPWZ1bmN0aW9uKCl7fSxpPXIuQmFzZT17ZXh0ZW5kOmZ1bmN0aW9uKGUpe28ucHJvdG90eXBlPXRoaXM7dmFyIHQ9bmV3IG87cmV0dXJuIGUmJnQubWl4SW4oZSksdC5oYXNPd25Qcm9wZXJ0eShcImluaXRcIil8fCh0LmluaXQ9ZnVuY3Rpb24oKXt0LiRzdXBlci5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLHQuaW5pdC5wcm90b3R5cGU9dCx0LiRzdXBlcj10aGlzLHR9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZXh0ZW5kKCk7cmV0dXJuIGUuaW5pdC5hcHBseShlLGFyZ3VtZW50cyksZX0saW5pdDpmdW5jdGlvbigpe30sbWl4SW46ZnVuY3Rpb24oZSl7Zm9yKHZhciB0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKHRoaXNbdF09ZVt0XSk7ZS5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpJiYodGhpcy50b1N0cmluZz1lLnRvU3RyaW5nKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyl9fSxhPXIuV29yZEFycmF5PWkuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKGUsdCl7ZT10aGlzLndvcmRzPWV8fFtdLHRoaXMuc2lnQnl0ZXM9bnVsbCE9dD90OjQqZS5sZW5ndGh9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybihlfHxzKS5zdHJpbmdpZnkodGhpcyl9LGNvbmNhdDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLndvcmRzLG49ZS53b3JkcyxyPXRoaXMuc2lnQnl0ZXM7aWYoZT1lLnNpZ0J5dGVzLHRoaXMuY2xhbXAoKSxyJTQpZm9yKHZhciBvPTA7bzxlO28rKyl0W3Irbz4+PjJdfD0obltvPj4+Ml0+Pj4yNC1vJTQqOCYyNTUpPDwyNC0ocitvKSU0Kjg7ZWxzZSBpZig2NTUzNTxuLmxlbmd0aClmb3Iobz0wO288ZTtvKz00KXRbcitvPj4+Ml09bltvPj4+Ml07ZWxzZSB0LnB1c2guYXBwbHkodCxuKTtyZXR1cm4gdGhpcy5zaWdCeXRlcys9ZSx0aGlzfSxjbGFtcDpmdW5jdGlvbigpe3ZhciB0PXRoaXMud29yZHMsbj10aGlzLnNpZ0J5dGVzO3Rbbj4+PjJdJj00Mjk0OTY3Mjk1PDwzMi1uJTQqOCx0Lmxlbmd0aD1lLmNlaWwobi80KX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgZT1pLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIGUud29yZHM9dGhpcy53b3Jkcy5zbGljZSgwKSxlfSxyYW5kb206ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLHI9MDtyPHQ7cis9NCluLnB1c2goNDI5NDk2NzI5NiplLnJhbmRvbSgpfDApO3JldHVybiBuZXcgYS5pbml0KG4sdCl9fSksYz1uLmVuYz17fSxzPWMuSGV4PXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS53b3JkcztlPWUuc2lnQnl0ZXM7Zm9yKHZhciBuPVtdLHI9MDtyPGU7cisrKXt2YXIgbz10W3I+Pj4yXT4+PjI0LXIlNCo4JjI1NTtuLnB1c2goKG8+Pj40KS50b1N0cmluZygxNikpLG4ucHVzaCgoMTUmbykudG9TdHJpbmcoMTYpKX1yZXR1cm4gbi5qb2luKFwiXCIpfSxwYXJzZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGgsbj1bXSxyPTA7cjx0O3IrPTIpbltyPj4+M118PXBhcnNlSW50KGUuc3Vic3RyKHIsMiksMTYpPDwyNC1yJTgqNDtyZXR1cm4gbmV3IGEuaW5pdChuLHQvMil9fSx1PWMuTGF0aW4xPXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS53b3JkcztlPWUuc2lnQnl0ZXM7Zm9yKHZhciBuPVtdLHI9MDtyPGU7cisrKW4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHRbcj4+PjJdPj4+MjQtciU0KjgmMjU1KSk7cmV0dXJuIG4uam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUubGVuZ3RoLG49W10scj0wO3I8dDtyKyspbltyPj4+Ml18PSgyNTUmZS5jaGFyQ29kZUF0KHIpKTw8MjQtciU0Kjg7cmV0dXJuIG5ldyBhLmluaXQobix0KX19LGw9Yy5VdGY4PXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHUuc3RyaW5naWZ5KGUpKSl9Y2F0Y2goZSl7dGhyb3cgRXJyb3IoXCJNYWxmb3JtZWQgVVRGLTggZGF0YVwiKX19LHBhcnNlOmZ1bmN0aW9uKGUpe3JldHVybiB1LnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChlKSkpfX0sZD1yLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG09aS5leHRlbmQoe3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5fZGF0YT1uZXcgYS5pbml0LHRoaXMuX25EYXRhQnl0ZXM9MH0sX2FwcGVuZDpmdW5jdGlvbihlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9bC5wYXJzZShlKSksdGhpcy5fZGF0YS5jb25jYXQoZSksdGhpcy5fbkRhdGFCeXRlcys9ZS5zaWdCeXRlc30sX3Byb2Nlc3M6ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fZGF0YSxyPW4ud29yZHMsbz1uLnNpZ0J5dGVzLGk9dGhpcy5ibG9ja1NpemUsYz1vLyg0KmkpO2lmKHQ9KGM9dD9lLmNlaWwoYyk6ZS5tYXgoKDB8YyktdGhpcy5fbWluQnVmZmVyU2l6ZSwwKSkqaSxvPWUubWluKDQqdCxvKSx0KXtmb3IodmFyIHM9MDtzPHQ7cys9aSl0aGlzLl9kb1Byb2Nlc3NCbG9jayhyLHMpO3M9ci5zcGxpY2UoMCx0KSxuLnNpZ0J5dGVzLT1vfXJldHVybiBuZXcgYS5pbml0KHMsbyl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGU9aS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBlLl9kYXRhPXRoaXMuX2RhdGEuY2xvbmUoKSxlfSxfbWluQnVmZmVyU2l6ZTowfSk7ci5IYXNoZXI9ZC5leHRlbmQoe2NmZzppLmV4dGVuZCgpLGluaXQ6ZnVuY3Rpb24oZSl7dGhpcy5jZmc9dGhpcy5jZmcuZXh0ZW5kKGUpLHRoaXMucmVzZXQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtkLnJlc2V0LmNhbGwodGhpcyksdGhpcy5fZG9SZXNldCgpfSx1cGRhdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2FwcGVuZChlKSx0aGlzLl9wcm9jZXNzKCksdGhpc30sZmluYWxpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJnRoaXMuX2FwcGVuZChlKSx0aGlzLl9kb0ZpbmFsaXplKCl9LGJsb2NrU2l6ZToxNixfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgZS5pbml0KG4pLmZpbmFsaXplKHQpfX0sX2NyZWF0ZUhtYWNIZWxwZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBwLkhNQUMuaW5pdChlLG4pLmZpbmFsaXplKHQpfX19KTt2YXIgcD1uLmFsZ289e307cmV0dXJuIG59KE1hdGgpO3JldHVybiB0PShlPW4pLmxpYi5Xb3JkQXJyYXksZS5lbmMuQmFzZTY0PXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS53b3JkcyxuPWUuc2lnQnl0ZXMscj10aGlzLl9tYXA7ZS5jbGFtcCgpLGU9W107Zm9yKHZhciBvPTA7bzxuO28rPTMpZm9yKHZhciBpPSh0W28+Pj4yXT4+PjI0LW8lNCo4JjI1NSk8PDE2fCh0W28rMT4+PjJdPj4+MjQtKG8rMSklNCo4JjI1NSk8PDh8dFtvKzI+Pj4yXT4+PjI0LShvKzIpJTQqOCYyNTUsYT0wOzQ+YSYmbysuNzUqYTxuO2ErKyllLnB1c2goci5jaGFyQXQoaT4+PjYqKDMtYSkmNjMpKTtpZih0PXIuY2hhckF0KDY0KSlmb3IoO2UubGVuZ3RoJTQ7KWUucHVzaCh0KTtyZXR1cm4gZS5qb2luKFwiXCIpfSxwYXJzZTpmdW5jdGlvbihlKXt2YXIgbj1lLmxlbmd0aCxyPXRoaXMuX21hcDsobz1yLmNoYXJBdCg2NCkpJiYtMSE9KG89ZS5pbmRleE9mKG8pKSYmKG49byk7Zm9yKHZhciBvPVtdLGk9MCxhPTA7YTxuO2ErKylpZihhJTQpe3ZhciBjPXIuaW5kZXhPZihlLmNoYXJBdChhLTEpKTw8YSU0KjIscz1yLmluZGV4T2YoZS5jaGFyQXQoYSkpPj4+Ni1hJTQqMjtvW2k+Pj4yXXw9KGN8cyk8PDI0LWklNCo4LGkrK31yZXR1cm4gdC5jcmVhdGUobyxpKX0sX21hcDpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCJ9LGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSx0LG4scixvLGksYSl7cmV0dXJuKChlPWUrKHQmbnx+dCZyKStvK2EpPDxpfGU+Pj4zMi1pKSt0fWZ1bmN0aW9uIHIoZSx0LG4scixvLGksYSl7cmV0dXJuKChlPWUrKHQmcnxuJn5yKStvK2EpPDxpfGU+Pj4zMi1pKSt0fWZ1bmN0aW9uIG8oZSx0LG4scixvLGksYSl7cmV0dXJuKChlPWUrKHRebl5yKStvK2EpPDxpfGU+Pj4zMi1pKSt0fWZ1bmN0aW9uIGkoZSx0LG4scixvLGksYSl7cmV0dXJuKChlPWUrKG5eKHR8fnIpKStvK2EpPDxpfGU+Pj4zMi1pKSt0fWZvcih2YXIgYT1uLGM9KHU9YS5saWIpLldvcmRBcnJheSxzPXUuSGFzaGVyLHU9YS5hbGdvLGw9W10sZD0wOzY0PmQ7ZCsrKWxbZF09NDI5NDk2NzI5NiplLmFicyhlLnNpbihkKzEpKXwwO3U9dS5NRDU9cy5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgYy5pbml0KFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzhdKX0sX2RvUHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciBhPTA7MTY+YTthKyspe3ZhciBjPWVbcz1uK2FdO2Vbc109MTY3MTE5MzUmKGM8PDh8Yz4+PjI0KXw0Mjc4MjU1MzYwJihjPDwyNHxjPj4+OCl9YT10aGlzLl9oYXNoLndvcmRzO3ZhciBzPWVbbiswXSx1PShjPWVbbisxXSxlW24rMl0pLGQ9ZVtuKzNdLHA9ZVtuKzRdLGY9ZVtuKzVdLGg9ZVtuKzZdLG09ZVtuKzddLHY9ZVtuKzhdLGc9ZVtuKzldLHk9ZVtuKzEwXSxiPWVbbisxMV0sXz1lW24rMTJdLGs9ZVtuKzEzXSx3PWVbbisxNF0sUz1lW24rMTVdLHg9dCh4PWFbMF0sQT1hWzFdLGo9YVsyXSxPPWFbM10scyw3LGxbMF0pLE89dChPLHgsQSxqLGMsMTIsbFsxXSksaj10KGosTyx4LEEsdSwxNyxsWzJdKSxBPXQoQSxqLE8seCxkLDIyLGxbM10pO3g9dCh4LEEsaixPLHAsNyxsWzRdKSxPPXQoTyx4LEEsaixmLDEyLGxbNV0pLGo9dChqLE8seCxBLGgsMTcsbFs2XSksQT10KEEsaixPLHgsbSwyMixsWzddKSx4PXQoeCxBLGosTyx2LDcsbFs4XSksTz10KE8seCxBLGosZywxMixsWzldKSxqPXQoaixPLHgsQSx5LDE3LGxbMTBdKSxBPXQoQSxqLE8seCxiLDIyLGxbMTFdKSx4PXQoeCxBLGosTyxfLDcsbFsxMl0pLE89dChPLHgsQSxqLGssMTIsbFsxM10pLGo9dChqLE8seCxBLHcsMTcsbFsxNF0pLHg9cih4LEE9dChBLGosTyx4LFMsMjIsbFsxNV0pLGosTyxjLDUsbFsxNl0pLE89cihPLHgsQSxqLGgsOSxsWzE3XSksaj1yKGosTyx4LEEsYiwxNCxsWzE4XSksQT1yKEEsaixPLHgscywyMCxsWzE5XSkseD1yKHgsQSxqLE8sZiw1LGxbMjBdKSxPPXIoTyx4LEEsaix5LDksbFsyMV0pLGo9cihqLE8seCxBLFMsMTQsbFsyMl0pLEE9cihBLGosTyx4LHAsMjAsbFsyM10pLHg9cih4LEEsaixPLGcsNSxsWzI0XSksTz1yKE8seCxBLGosdyw5LGxbMjVdKSxqPXIoaixPLHgsQSxkLDE0LGxbMjZdKSxBPXIoQSxqLE8seCx2LDIwLGxbMjddKSx4PXIoeCxBLGosTyxrLDUsbFsyOF0pLE89cihPLHgsQSxqLHUsOSxsWzI5XSksaj1yKGosTyx4LEEsbSwxNCxsWzMwXSkseD1vKHgsQT1yKEEsaixPLHgsXywyMCxsWzMxXSksaixPLGYsNCxsWzMyXSksTz1vKE8seCxBLGosdiwxMSxsWzMzXSksaj1vKGosTyx4LEEsYiwxNixsWzM0XSksQT1vKEEsaixPLHgsdywyMyxsWzM1XSkseD1vKHgsQSxqLE8sYyw0LGxbMzZdKSxPPW8oTyx4LEEsaixwLDExLGxbMzddKSxqPW8oaixPLHgsQSxtLDE2LGxbMzhdKSxBPW8oQSxqLE8seCx5LDIzLGxbMzldKSx4PW8oeCxBLGosTyxrLDQsbFs0MF0pLE89byhPLHgsQSxqLHMsMTEsbFs0MV0pLGo9byhqLE8seCxBLGQsMTYsbFs0Ml0pLEE9byhBLGosTyx4LGgsMjMsbFs0M10pLHg9byh4LEEsaixPLGcsNCxsWzQ0XSksTz1vKE8seCxBLGosXywxMSxsWzQ1XSksaj1vKGosTyx4LEEsUywxNixsWzQ2XSkseD1pKHgsQT1vKEEsaixPLHgsdSwyMyxsWzQ3XSksaixPLHMsNixsWzQ4XSksTz1pKE8seCxBLGosbSwxMCxsWzQ5XSksaj1pKGosTyx4LEEsdywxNSxsWzUwXSksQT1pKEEsaixPLHgsZiwyMSxsWzUxXSkseD1pKHgsQSxqLE8sXyw2LGxbNTJdKSxPPWkoTyx4LEEsaixkLDEwLGxbNTNdKSxqPWkoaixPLHgsQSx5LDE1LGxbNTRdKSxBPWkoQSxqLE8seCxjLDIxLGxbNTVdKSx4PWkoeCxBLGosTyx2LDYsbFs1Nl0pLE89aShPLHgsQSxqLFMsMTAsbFs1N10pLGo9aShqLE8seCxBLGgsMTUsbFs1OF0pLEE9aShBLGosTyx4LGssMjEsbFs1OV0pLHg9aSh4LEEsaixPLHAsNixsWzYwXSksTz1pKE8seCxBLGosYiwxMCxsWzYxXSksaj1pKGosTyx4LEEsdSwxNSxsWzYyXSksQT1pKEEsaixPLHgsZywyMSxsWzYzXSk7YVswXT1hWzBdK3h8MCxhWzFdPWFbMV0rQXwwLGFbMl09YVsyXStqfDAsYVszXT1hWzNdK098MH0sX2RvRmluYWxpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9kYXRhLG49dC53b3JkcyxyPTgqdGhpcy5fbkRhdGFCeXRlcyxvPTgqdC5zaWdCeXRlcztuW28+Pj41XXw9MTI4PDwyNC1vJTMyO3ZhciBpPWUuZmxvb3Ioci80Mjk0OTY3Mjk2KTtmb3IoblsxNSsobys2ND4+Pjk8PDQpXT0xNjcxMTkzNSYoaTw8OHxpPj4+MjQpfDQyNzgyNTUzNjAmKGk8PDI0fGk+Pj44KSxuWzE0KyhvKzY0Pj4+OTw8NCldPTE2NzExOTM1JihyPDw4fHI+Pj4yNCl8NDI3ODI1NTM2MCYocjw8MjR8cj4+PjgpLHQuc2lnQnl0ZXM9NCoobi5sZW5ndGgrMSksdGhpcy5fcHJvY2VzcygpLG49KHQ9dGhpcy5faGFzaCkud29yZHMscj0wOzQ+cjtyKyspbz1uW3JdLG5bcl09MTY3MTE5MzUmKG88PDh8bz4+PjI0KXw0Mjc4MjU1MzYwJihvPDwyNHxvPj4+OCk7cmV0dXJuIHR9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGU9cy5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBlLl9oYXNoPXRoaXMuX2hhc2guY2xvbmUoKSxlfX0pLGEuTUQ1PXMuX2NyZWF0ZUhlbHBlcih1KSxhLkhtYWNNRDU9cy5fY3JlYXRlSG1hY0hlbHBlcih1KX0oTWF0aCksZnVuY3Rpb24oKXt2YXIgZSx0PW4scj0oZT10LmxpYikuQmFzZSxvPWUuV29yZEFycmF5LGk9KGU9dC5hbGdvKS5FdnBLREY9ci5leHRlbmQoe2NmZzpyLmV4dGVuZCh7a2V5U2l6ZTo0LGhhc2hlcjplLk1ENSxpdGVyYXRpb25zOjF9KSxpbml0OmZ1bmN0aW9uKGUpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChlKX0sY29tcHV0ZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0oYz10aGlzLmNmZykuaGFzaGVyLmNyZWF0ZSgpLHI9by5jcmVhdGUoKSxpPXIud29yZHMsYT1jLmtleVNpemUsYz1jLml0ZXJhdGlvbnM7aS5sZW5ndGg8YTspe3MmJm4udXBkYXRlKHMpO3ZhciBzPW4udXBkYXRlKGUpLmZpbmFsaXplKHQpO24ucmVzZXQoKTtmb3IodmFyIHU9MTt1PGM7dSsrKXM9bi5maW5hbGl6ZShzKSxuLnJlc2V0KCk7ci5jb25jYXQocyl9cmV0dXJuIHIuc2lnQnl0ZXM9NCphLHJ9fSk7dC5FdnBLREY9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBpLmNyZWF0ZShuKS5jb21wdXRlKGUsdCl9fSgpLG4ubGliLkNpcGhlcnx8ZnVuY3Rpb24oZSl7dmFyIHQ9KGg9bikubGliLHI9dC5CYXNlLG89dC5Xb3JkQXJyYXksaT10LkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0sYT1oLmVuYy5CYXNlNjQsYz1oLmFsZ28uRXZwS0RGLHM9dC5DaXBoZXI9aS5leHRlbmQoe2NmZzpyLmV4dGVuZCgpLGNyZWF0ZUVuY3J5cHRvcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNyZWF0ZSh0aGlzLl9FTkNfWEZPUk1fTU9ERSxlLHQpfSxjcmVhdGVEZWNyeXB0b3I6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jcmVhdGUodGhpcy5fREVDX1hGT1JNX01PREUsZSx0KX0saW5pdDpmdW5jdGlvbihlLHQsbil7dGhpcy5jZmc9dGhpcy5jZmcuZXh0ZW5kKG4pLHRoaXMuX3hmb3JtTW9kZT1lLHRoaXMuX2tleT10LHRoaXMucmVzZXQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtpLnJlc2V0LmNhbGwodGhpcyksdGhpcy5fZG9SZXNldCgpfSxwcm9jZXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9hcHBlbmQoZSksdGhpcy5fcHJvY2VzcygpfSxmaW5hbGl6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmdGhpcy5fYXBwZW5kKGUpLHRoaXMuX2RvRmluYWxpemUoKX0sa2V5U2l6ZTo0LGl2U2l6ZTo0LF9FTkNfWEZPUk1fTU9ERToxLF9ERUNfWEZPUk1fTU9ERToyLF9jcmVhdGVIZWxwZXI6ZnVuY3Rpb24oZSl7cmV0dXJue2VuY3J5cHQ6ZnVuY3Rpb24odCxuLHIpe3JldHVybihcInN0cmluZ1wiPT10eXBlb2Ygbj9tOmYpLmVuY3J5cHQoZSx0LG4scil9LGRlY3J5cHQ6ZnVuY3Rpb24odCxuLHIpe3JldHVybihcInN0cmluZ1wiPT10eXBlb2Ygbj9tOmYpLmRlY3J5cHQoZSx0LG4scil9fX19KTt0LlN0cmVhbUNpcGhlcj1zLmV4dGVuZCh7X2RvRmluYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHJvY2VzcyghMCl9LGJsb2NrU2l6ZToxfSk7dmFyIHU9aC5tb2RlPXt9LGw9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuX2l2O3I/dGhpcy5faXY9dW5kZWZpbmVkOnI9dGhpcy5fcHJldkJsb2NrO2Zvcih2YXIgbz0wO288bjtvKyspZVt0K29dXj1yW29dfSxkPSh0LkJsb2NrQ2lwaGVyTW9kZT1yLmV4dGVuZCh7Y3JlYXRlRW5jcnlwdG9yOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuRW5jcnlwdG9yLmNyZWF0ZShlLHQpfSxjcmVhdGVEZWNyeXB0b3I6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5EZWNyeXB0b3IuY3JlYXRlKGUsdCl9LGluaXQ6ZnVuY3Rpb24oZSx0KXt0aGlzLl9jaXBoZXI9ZSx0aGlzLl9pdj10fX0pKS5leHRlbmQoKTtkLkVuY3J5cHRvcj1kLmV4dGVuZCh7cHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5fY2lwaGVyLHI9bi5ibG9ja1NpemU7bC5jYWxsKHRoaXMsZSx0LHIpLG4uZW5jcnlwdEJsb2NrKGUsdCksdGhpcy5fcHJldkJsb2NrPWUuc2xpY2UodCx0K3IpfX0pLGQuRGVjcnlwdG9yPWQuZXh0ZW5kKHtwcm9jZXNzQmxvY2s6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9jaXBoZXIscj1uLmJsb2NrU2l6ZSxvPWUuc2xpY2UodCx0K3IpO24uZGVjcnlwdEJsb2NrKGUsdCksbC5jYWxsKHRoaXMsZSx0LHIpLHRoaXMuX3ByZXZCbG9jaz1vfX0pLHU9dS5DQkM9ZCxkPShoLnBhZD17fSkuUGtjczc9e3BhZDpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbixyPShuPShuPTQqdCktZS5zaWdCeXRlcyVuKTw8MjR8bjw8MTZ8bjw8OHxuLGk9W10sYT0wO2E8bjthKz00KWkucHVzaChyKTtuPW8uY3JlYXRlKGksbiksZS5jb25jYXQobil9LHVucGFkOmZ1bmN0aW9uKGUpe2Uuc2lnQnl0ZXMtPTI1NSZlLndvcmRzW2Uuc2lnQnl0ZXMtMT4+PjJdfX0sdC5CbG9ja0NpcGhlcj1zLmV4dGVuZCh7Y2ZnOnMuY2ZnLmV4dGVuZCh7bW9kZTp1LHBhZGRpbmc6ZH0pLHJlc2V0OmZ1bmN0aW9uKCl7cy5yZXNldC5jYWxsKHRoaXMpO3ZhciBlPSh0PXRoaXMuY2ZnKS5pdix0PXQubW9kZTtpZih0aGlzLl94Zm9ybU1vZGU9PXRoaXMuX0VOQ19YRk9STV9NT0RFKXZhciBuPXQuY3JlYXRlRW5jcnlwdG9yO2Vsc2Ugbj10LmNyZWF0ZURlY3J5cHRvcix0aGlzLl9taW5CdWZmZXJTaXplPTE7dGhpcy5fbW9kZT1uLmNhbGwodCx0aGlzLGUmJmUud29yZHMpfSxfZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24oZSx0KXt0aGlzLl9tb2RlLnByb2Nlc3NCbG9jayhlLHQpfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY2ZnLnBhZGRpbmc7aWYodGhpcy5feGZvcm1Nb2RlPT10aGlzLl9FTkNfWEZPUk1fTU9ERSl7ZS5wYWQodGhpcy5fZGF0YSx0aGlzLmJsb2NrU2l6ZSk7dmFyIHQ9dGhpcy5fcHJvY2VzcyghMCl9ZWxzZSB0PXRoaXMuX3Byb2Nlc3MoITApLGUudW5wYWQodCk7cmV0dXJuIHR9LGJsb2NrU2l6ZTo0fSk7dmFyIHA9dC5DaXBoZXJQYXJhbXM9ci5leHRlbmQoe2luaXQ6ZnVuY3Rpb24oZSl7dGhpcy5taXhJbihlKX0sdG9TdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuKGV8fHRoaXMuZm9ybWF0dGVyKS5zdHJpbmdpZnkodGhpcyl9fSksZj0odT0oaC5mb3JtYXQ9e30pLk9wZW5TU0w9e3N0cmluZ2lmeTpmdW5jdGlvbihlKXt2YXIgdD1lLmNpcGhlcnRleHQ7cmV0dXJuKChlPWUuc2FsdCk/by5jcmVhdGUoWzEzOTg4OTM2ODQsMTcwMTA3NjgzMV0pLmNvbmNhdChlKS5jb25jYXQodCk6dCkudG9TdHJpbmcoYSl9LHBhcnNlOmZ1bmN0aW9uKGUpe3ZhciB0PShlPWEucGFyc2UoZSkpLndvcmRzO2lmKDEzOTg4OTM2ODQ9PXRbMF0mJjE3MDEwNzY4MzE9PXRbMV0pe3ZhciBuPW8uY3JlYXRlKHQuc2xpY2UoMiw0KSk7dC5zcGxpY2UoMCw0KSxlLnNpZ0J5dGVzLT0xNn1yZXR1cm4gcC5jcmVhdGUoe2NpcGhlcnRleHQ6ZSxzYWx0Om59KX19LHQuU2VyaWFsaXphYmxlQ2lwaGVyPXIuZXh0ZW5kKHtjZmc6ci5leHRlbmQoe2Zvcm1hdDp1fSksZW5jcnlwdDpmdW5jdGlvbihlLHQsbixyKXtyPXRoaXMuY2ZnLmV4dGVuZChyKTt2YXIgbz1lLmNyZWF0ZUVuY3J5cHRvcihuLHIpO3JldHVybiB0PW8uZmluYWxpemUodCksbz1vLmNmZyxwLmNyZWF0ZSh7Y2lwaGVydGV4dDp0LGtleTpuLGl2Om8uaXYsYWxnb3JpdGhtOmUsbW9kZTpvLm1vZGUscGFkZGluZzpvLnBhZGRpbmcsYmxvY2tTaXplOmUuYmxvY2tTaXplLGZvcm1hdHRlcjpyLmZvcm1hdH0pfSxkZWNyeXB0OmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiByPXRoaXMuY2ZnLmV4dGVuZChyKSx0PXRoaXMuX3BhcnNlKHQsci5mb3JtYXQpLGUuY3JlYXRlRGVjcnlwdG9yKG4scikuZmluYWxpemUodC5jaXBoZXJ0ZXh0KX0sX3BhcnNlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dC5wYXJzZShlLHRoaXMpOmV9fSkpLGg9KGgua2RmPXt9KS5PcGVuU1NMPXtleGVjdXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiByfHwocj1vLnJhbmRvbSg4KSksZT1jLmNyZWF0ZSh7a2V5U2l6ZTp0K259KS5jb21wdXRlKGUsciksbj1vLmNyZWF0ZShlLndvcmRzLnNsaWNlKHQpLDQqbiksZS5zaWdCeXRlcz00KnQscC5jcmVhdGUoe2tleTplLGl2Om4sc2FsdDpyfSl9fSxtPXQuUGFzc3dvcmRCYXNlZENpcGhlcj1mLmV4dGVuZCh7Y2ZnOmYuY2ZnLmV4dGVuZCh7a2RmOmh9KSxlbmNyeXB0OmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBuPShyPXRoaXMuY2ZnLmV4dGVuZChyKSkua2RmLmV4ZWN1dGUobixlLmtleVNpemUsZS5pdlNpemUpLHIuaXY9bi5pdiwoZT1mLmVuY3J5cHQuY2FsbCh0aGlzLGUsdCxuLmtleSxyKSkubWl4SW4obiksZX0sZGVjcnlwdDpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gcj10aGlzLmNmZy5leHRlbmQociksdD10aGlzLl9wYXJzZSh0LHIuZm9ybWF0KSxuPXIua2RmLmV4ZWN1dGUobixlLmtleVNpemUsZS5pdlNpemUsdC5zYWx0KSxyLml2PW4uaXYsZi5kZWNyeXB0LmNhbGwodGhpcyxlLHQsbi5rZXkscil9fSl9KCksZnVuY3Rpb24oKXtmb3IodmFyIGU9bix0PWUubGliLkJsb2NrQ2lwaGVyLHI9ZS5hbGdvLG89W10saT1bXSxhPVtdLGM9W10scz1bXSx1PVtdLGw9W10sZD1bXSxwPVtdLGY9W10saD1bXSxtPTA7MjU2Pm07bSsrKWhbbV09MTI4Pm0/bTw8MTptPDwxXjI4Mzt2YXIgdj0wLGc9MDtmb3IobT0wOzI1Nj5tO20rKyl7dmFyIHk9KHk9Z15nPDwxXmc8PDJeZzw8M15nPDw0KT4+PjheMjU1JnleOTk7b1t2XT15LGlbeV09djt2YXIgYj1oW3ZdLF89aFtiXSxrPWhbX10sdz0yNTcqaFt5XV4xNjg0MzAwOCp5O2Fbdl09dzw8MjR8dz4+PjgsY1t2XT13PDwxNnx3Pj4+MTYsc1t2XT13PDw4fHc+Pj4yNCx1W3ZdPXcsdz0xNjg0MzAwOSprXjY1NTM3Kl9eMjU3KmJeMTY4NDMwMDgqdixsW3ldPXc8PDI0fHc+Pj44LGRbeV09dzw8MTZ8dz4+PjE2LHBbeV09dzw8OHx3Pj4+MjQsZlt5XT13LHY/KHY9Yl5oW2hbaFtrXmJdXV0sZ149aFtoW2ddXSk6dj1nPTF9dmFyIFM9WzAsMSwyLDQsOCwxNiwzMiw2NCwxMjgsMjcsNTRdO3I9ci5BRVM9dC5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7Zm9yKHZhciBlPShuPXRoaXMuX2tleSkud29yZHMsdD1uLnNpZ0J5dGVzLzQsbj00KigodGhpcy5fblJvdW5kcz10KzYpKzEpLHI9dGhpcy5fa2V5U2NoZWR1bGU9W10saT0wO2k8bjtpKyspaWYoaTx0KXJbaV09ZVtpXTtlbHNle3ZhciBhPXJbaS0xXTtpJXQ/Njx0JiY0PT1pJXQmJihhPW9bYT4+PjI0XTw8MjR8b1thPj4+MTYmMjU1XTw8MTZ8b1thPj4+OCYyNTVdPDw4fG9bMjU1JmFdKTooYT1vWyhhPWE8PDh8YT4+PjI0KT4+PjI0XTw8MjR8b1thPj4+MTYmMjU1XTw8MTZ8b1thPj4+OCYyNTVdPDw4fG9bMjU1JmFdLGFePVNbaS90fDBdPDwyNCkscltpXT1yW2ktdF1eYX1mb3IoZT10aGlzLl9pbnZLZXlTY2hlZHVsZT1bXSx0PTA7dDxuO3QrKylpPW4tdCxhPXQlND9yW2ldOnJbaS00XSxlW3RdPTQ+dHx8ND49aT9hOmxbb1thPj4+MjRdXV5kW29bYT4+PjE2JjI1NV1dXnBbb1thPj4+OCYyNTVdXV5mW29bMjU1JmFdXX0sZW5jcnlwdEJsb2NrOmZ1bmN0aW9uKGUsdCl7dGhpcy5fZG9DcnlwdEJsb2NrKGUsdCx0aGlzLl9rZXlTY2hlZHVsZSxhLGMscyx1LG8pfSxkZWNyeXB0QmxvY2s6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lW3QrMV07ZVt0KzFdPWVbdCszXSxlW3QrM109bix0aGlzLl9kb0NyeXB0QmxvY2soZSx0LHRoaXMuX2ludktleVNjaGVkdWxlLGwsZCxwLGYsaSksbj1lW3QrMV0sZVt0KzFdPWVbdCszXSxlW3QrM109bn0sX2RvQ3J5cHRCbG9jazpmdW5jdGlvbihlLHQsbixyLG8saSxhLGMpe2Zvcih2YXIgcz10aGlzLl9uUm91bmRzLHU9ZVt0XV5uWzBdLGw9ZVt0KzFdXm5bMV0sZD1lW3QrMl1eblsyXSxwPWVbdCszXV5uWzNdLGY9NCxoPTE7aDxzO2grKyl7dmFyIG09clt1Pj4+MjRdXm9bbD4+PjE2JjI1NV1eaVtkPj4+OCYyNTVdXmFbMjU1JnBdXm5bZisrXSx2PXJbbD4+PjI0XV5vW2Q+Pj4xNiYyNTVdXmlbcD4+PjgmMjU1XV5hWzI1NSZ1XV5uW2YrK10sZz1yW2Q+Pj4yNF1eb1twPj4+MTYmMjU1XV5pW3U+Pj44JjI1NV1eYVsyNTUmbF1ebltmKytdO3A9cltwPj4+MjRdXm9bdT4+PjE2JjI1NV1eaVtsPj4+OCYyNTVdXmFbMjU1JmRdXm5bZisrXSx1PW0sbD12LGQ9Z31tPShjW3U+Pj4yNF08PDI0fGNbbD4+PjE2JjI1NV08PDE2fGNbZD4+PjgmMjU1XTw8OHxjWzI1NSZwXSlebltmKytdLHY9KGNbbD4+PjI0XTw8MjR8Y1tkPj4+MTYmMjU1XTw8MTZ8Y1twPj4+OCYyNTVdPDw4fGNbMjU1JnVdKV5uW2YrK10sZz0oY1tkPj4+MjRdPDwyNHxjW3A+Pj4xNiYyNTVdPDwxNnxjW3U+Pj44JjI1NV08PDh8Y1syNTUmbF0pXm5bZisrXSxwPShjW3A+Pj4yNF08PDI0fGNbdT4+PjE2JjI1NV08PDE2fGNbbD4+PjgmMjU1XTw8OHxjWzI1NSZkXSlebltmKytdLGVbdF09bSxlW3QrMV09dixlW3QrMl09ZyxlW3QrM109cH0sa2V5U2l6ZTo4fSk7ZS5BRVM9dC5fY3JlYXRlSGVscGVyKHIpfSgpLG59KCksV249Sm47ZnVuY3Rpb24gWG4oKXtyZXR1cm4gZW4oKX12YXIgJG49bnVsbDtmdW5jdGlvbiBHbigpe3ZhciBlLHQsbixyO3JldHVybiBudWxsPT09JG4mJihlPWVyKCksdD15dC5nZXRJdGVtKGUpLCRuPXQ/KG49dCxyPVhuKCksV24uQUVTLmRlY3J5cHQobixyKS50b1N0cmluZyhXbi5lbmMuVXRmOCkpOm51bGwpLCRufWZ1bmN0aW9uIFZuKGUpe3ZhciB0PSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07JG49ZSxudWxsPT09ZXx8ITE9PT10P1FuKGVyKCkpOlluKGVyKCksZSl9ZnVuY3Rpb24gWW4oZSx0KXt2YXIgbixyLG89KG49dCxyPVhuKCksV24uQUVTLmVuY3J5cHQobixyKS50b1N0cmluZygpKTt5dC5zZXRJdGVtKGUsbyl9ZnVuY3Rpb24gUW4oZSl7eXQucmVtb3ZlSXRlbShlKX12YXIgWm49e307ZnVuY3Rpb24gZXIoKXt2YXIgZTtyZXR1cm4gWm4uYWNjZXNzVG9rZW5LZXl8fChabi5hY2Nlc3NUb2tlbktleT1cImtha2FvX1wiKyhlPVwia2F0XCIrWG4oKSxXbi5NRDUoZSkudG9TdHJpbmcoKSkpLFpuLmFjY2Vzc1Rva2VuS2V5fXZhciB0cj1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxnZXRBcHBLZXk6WG4sZ2V0QWNjZXNzVG9rZW46R24sc2V0QWNjZXNzVG9rZW46Vm4sZ2V0UmVmcmVzaFRva2VuOmZ1bmN0aW9uKCl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCBvcGVyYXRpb246IEF1dGguZ2V0UmVmcmVzaFRva2VuKClcIiksXCJcIn0sc2V0UmVmcmVzaFRva2VuOmZ1bmN0aW9uKGUpe2NvbnNvbGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCBvcGVyYXRpb246IEF1dGguc2V0UmVmcmVzaFRva2VuKClcIil9fSk7ZnVuY3Rpb24gbnIoKXtyZXR1cm5cIkJlYXJlciBcIi5jb25jYXQoR24oKSl9ZnVuY3Rpb24gcnIoKXtyZXR1cm5cIktha2FvQUsgXCIuY29uY2F0KFhuKCkpfXZhciBvcj17cGVybWlzc2lvbjp2dChbXCJBXCIsXCJGXCIsXCJNXCJdKSxlbmFibGVfc2hhcmU6UWUsYW5kcm9pZF9leGVjX3BhcmFtOlllLGlvc19leGVjX3BhcmFtOlllLGFuZHJvaWRfbWFya2V0X3BhcmFtOlllLGlvc19tYXJrZXRfcGFyYW06WWV9LGlyPXtzZWN1cmVfcmVzb3VyY2U6UWV9O2Z1bmN0aW9uIGFyKGUpeyExPT09ZS5zZWN1cmVfcmVzb3VyY2UmJihjb25zb2xlJiZjb25zb2xlLndhcm4oXCJLYWthb1dhcm5pbmc6IFRoZSBzZWN1cmVfcmVzb3VyY2UgcGFyYW1ldGVyIGlzIGRlcHJlY2F0ZWQuXCIpLGUuc2VjdXJlX3Jlc291cmNlPSEwKX1mdW5jdGlvbiBjcihlKXtpZighWWUoZSkpcmV0dXJuITE7aWYoMD09PWUubGVuZ3RofHxlLmxlbmd0aD4yMDQ4KXRocm93IG5ldyBubihcImNvbnRlbnQgbGVuZ3RoIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kIDIwNDhcIik7cmV0dXJuITB9ZnVuY3Rpb24gc3IoZSl7cmV0dXJuKGUuaGVhZGVyX2ltYWdlX3VybHx8ZS5oZWFkZXJfaW1hZ2Vfd2lkdGh8fGUuaGVhZGVyX2ltYWdlX2hlaWdodCkmJihkZWxldGUgZS5oZWFkZXJfaW1hZ2VfdXJsLGRlbGV0ZSBlLmhlYWRlcl9pbWFnZV93aWR0aCxkZWxldGUgZS5oZWFkZXJfaW1hZ2VfaGVpZ2h0LGNvbnNvbGUmJmNvbnNvbGUud2FybihcIktha2FvV2FybmluZzogVGhlIHBhcmFtZXRlcnMgKFwiLmNvbmNhdChbXCJoZWFkZXJfaW1hZ2VfdXJsXCIsXCJoZWFkZXJfaW1hZ2Vfd2lkdGhcIixcImhlYWRlcl9pbWFnZV9oZWlnaHRcIl0uam9pbihcIiwgXCIpLFwiKSBmb3IgaGVhZGVyIGJhY2tncm91bmQgaW1hZ2UgYXJlIGRlcHJlY2F0ZWQuXCIpKSksITB9dmFyIHVyPXtcIi92MS91c2VyL3NpZ251cFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7b3B0aW9uYWw6e3Byb3BlcnRpZXM6cH19fSxcIi92MS91c2VyL3VubGlua1wiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7fX0sXCIvdjIvdXNlci9tZVwiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDpfdCh7cHJvcGVydHlfa2V5czpmfSxpcil9fSxcIi92MS91c2VyL2xvZ291dFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7fX0sXCIvdjEvdXNlci91cGRhdGVfcHJvZmlsZVwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e3Byb3BlcnRpZXM6cH19fSxcIi92MS91c2VyL2FjY2Vzc190b2tlbl9pbmZvXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e319LFwiL3YyL3VzZXIvc2NvcGVzXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOntzY29wZXM6Zn19fSxcIi92Mi91c2VyL3Jldm9rZS9zY29wZXNcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntzY29wZXM6Zn19fSxcIi92MS91c2VyL3NlcnZpY2UvdGVybXNcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6e2V4dHJhOlllfX19LFwiL3YxL3VzZXIvc2hpcHBpbmdfYWRkcmVzc1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDp7YWRkcmVzc19pZDpldCxmcm9tX3VwZGF0ZWRfYXQ6ZXQscGFnZV9zaXplOmV0fX19LFwiL3YxL2FwaS90YWxrL3Byb2ZpbGVcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6aXIsYWZ0ZXI6YXJ9fSxcIi92MS9hcGkvdGFsay9mcmllbmRzXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOl90KHtvZmZzZXQ6ZXQsbGltaXQ6ZXQsb3JkZXI6WWUsZnJpZW5kX29yZGVyOlllfSxpciksYWZ0ZXI6YXJ9fSxcIi92MS9mcmllbmRzXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e29wdGlvbmFsOl90KHtvZmZzZXQ6ZXQsbGltaXQ6ZXQsb3JkZXI6WWUsZnJpZW5kX29yZGVyOlllfSxpciksYWZ0ZXI6YXJ9fSxcIi92Mi9hcGkvdGFsay9tZW1vL3NlbmRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOnt0ZW1wbGF0ZV9pZDpldH0sb3B0aW9uYWw6e3RlbXBsYXRlX2FyZ3M6cH19fSxcIi92Mi9hcGkvdGFsay9tZW1vL3NjcmFwL3NlbmRcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntyZXF1ZXN0X3VybDpZZX0sb3B0aW9uYWw6e3RlbXBsYXRlX2lkOmV0LHRlbXBsYXRlX2FyZ3M6cH19fSxcIi92Mi9hcGkvdGFsay9tZW1vL2RlZmF1bHQvc2VuZFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e3RlbXBsYXRlX29iamVjdDpmdW5jdGlvbihlKXtyZXR1cm4gcChlKSYmc3IoZSl9fX19LFwiL3YxL2FwaS90YWxrL2ZyaWVuZHMvbWVzc2FnZS9zZW5kXCI6e21ldGhvZDpcInBvc3RcIixkYXRhOntyZXF1aXJlZDp7dGVtcGxhdGVfaWQ6ZXQscmVjZWl2ZXJfdXVpZHM6ZixyZWNlaXZlcl9pZF90eXBlOlllfSxvcHRpb25hbDp7dGVtcGxhdGVfYXJnczpwfSxkZWZhdWx0czpmdW5jdGlvbigpe3JldHVybntyZWNlaXZlcl9pZF90eXBlOlwidXVpZFwifX19fSxcIi92MS9hcGkvdGFsay9mcmllbmRzL21lc3NhZ2Uvc2NyYXAvc2VuZFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e3JlcXVlc3RfdXJsOlllLHJlY2VpdmVyX3V1aWRzOmYscmVjZWl2ZXJfaWRfdHlwZTpZZX0sb3B0aW9uYWw6e3RlbXBsYXRlX2lkOmV0LHRlbXBsYXRlX2FyZ3M6cH0sZGVmYXVsdHM6ZnVuY3Rpb24oKXtyZXR1cm57cmVjZWl2ZXJfaWRfdHlwZTpcInV1aWRcIn19fX0sXCIvdjEvYXBpL3RhbGsvZnJpZW5kcy9tZXNzYWdlL2RlZmF1bHQvc2VuZFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e3RlbXBsYXRlX29iamVjdDpmdW5jdGlvbihlKXtyZXR1cm4gcChlKSYmc3IoZSl9LHJlY2VpdmVyX3V1aWRzOmYscmVjZWl2ZXJfaWRfdHlwZTpZZX0sZGVmYXVsdHM6ZnVuY3Rpb24oKXtyZXR1cm57cmVjZWl2ZXJfaWRfdHlwZTpcInV1aWRcIn19fX0sXCIvdjIvYXBpL2tha2FvbGluay90YWxrL3RlbXBsYXRlL3ZhbGlkYXRlXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e3JlcXVpcmVkOntsaW5rX3ZlcjpZZSx0ZW1wbGF0ZV9pZDpldH0sb3B0aW9uYWw6e3RlbXBsYXRlX2FyZ3M6cH19LGF1dGhUeXBlOnJyfSxcIi92Mi9hcGkva2FrYW9saW5rL3RhbGsvdGVtcGxhdGUvc2NyYXBcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7cmVxdWlyZWQ6e2xpbmtfdmVyOlllLHJlcXVlc3RfdXJsOlllfSxvcHRpb25hbDp7dGVtcGxhdGVfaWQ6ZXQsdGVtcGxhdGVfYXJnczpwfX0sYXV0aFR5cGU6cnJ9LFwiL3YyL2FwaS9rYWthb2xpbmsvdGFsay90ZW1wbGF0ZS9kZWZhdWx0XCI6e21ldGhvZDpcImdldFwiLGRhdGE6e3JlcXVpcmVkOntsaW5rX3ZlcjpZZSx0ZW1wbGF0ZV9vYmplY3Q6cH19LGF1dGhUeXBlOnJyfSxcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL3VwbG9hZFwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e2ZpbGU6cH19LGF1dGhUeXBlOnJyfSxcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL2RlbGV0ZVwiOnttZXRob2Q6XCJkZWxldGVcIixkYXRhOntyZXF1aXJlZDp7aW1hZ2VfdXJsOlllfX0sYXV0aFR5cGU6cnJ9LFwiL3YyL2FwaS90YWxrL21lc3NhZ2UvaW1hZ2Uvc2NyYXBcIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntpbWFnZV91cmw6WWV9fSxhdXRoVHlwZTpycn0sXCIvdjEvYXBpL3N0b3J5L3Byb2ZpbGVcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6aXJ9fSxcIi92MS9hcGkvc3RvcnkvaXNzdG9yeXVzZXJcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7fX0sXCIvdjEvYXBpL3N0b3J5L215c3RvcnlcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7cmVxdWlyZWQ6e2lkOlllfX19LFwiL3YxL2FwaS9zdG9yeS9teXN0b3JpZXNcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6e2xhc3RfaWQ6WWV9fX0sXCIvdjEvYXBpL3N0b3J5L2xpbmtpbmZvXCI6e21ldGhvZDpcImdldFwiLGRhdGE6e3JlcXVpcmVkOnt1cmw6WWV9fX0sXCIvdjEvYXBpL3N0b3J5L3Bvc3Qvbm90ZVwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e2NvbnRlbnQ6Y3J9LG9wdGlvbmFsOm9yfX0sXCIvdjEvYXBpL3N0b3J5L3Bvc3QvcGhvdG9cIjp7bWV0aG9kOlwicG9zdFwiLGRhdGE6e3JlcXVpcmVkOntpbWFnZV91cmxfbGlzdDpmdW5jdGlvbihlKXtyZXR1cm4hIWYoZSkmJmN0KGUsKGZ1bmN0aW9uKGUpe2lmKCFZZShlKSlyZXR1cm4hMTtpZigvKGh0dHB8ZnRwfGh0dHBzKTpcXC9cXC9bXFx3LV0rKFxcLltcXHctXSspKyhbXFx3LixAP149JSZhbXA7OlxcL34rIy1dKltcXHdAP149JSZhbXA7XFwvfisjLV0pPy8udGVzdChlKSl0aHJvdyBuZXcgbm4oXCJ1cmwgaW4gaW1hZ2VfdXJsX2xpc3Qgc2hvdWxkIGJlIGEga2FnZSB1cmwsIG9idGFpbmVkIGZyb20gJy92MS9hcGkvc3RvcnkvdXBsb2FkL211bHRpJy5cIik7cmV0dXJuITB9KSl9fSxvcHRpb25hbDpfdCh7Y29udGVudDpjcn0sb3IpfX0sXCIvdjEvYXBpL3N0b3J5L3Bvc3QvbGlua1wiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7cmVxdWlyZWQ6e2xpbmtfaW5mbzpwfSxvcHRpb25hbDpfdCh7Y29udGVudDpjcn0sb3IpfX0sXCIvdjEvYXBpL3N0b3J5L3VwbG9hZC9tdWx0aVwiOnttZXRob2Q6XCJwb3N0XCIsZGF0YTp7fX0sXCIvdjEvYXBpL3N0b3J5L2RlbGV0ZS9teXN0b3J5XCI6e21ldGhvZDpcImRlbGV0ZVwiLGRhdGE6e3JlcXVpcmVkOntpZDpZZX19fSxcIi92MS9hcGkvdGFsay9jaGFubmVsc1wiOnttZXRob2Q6XCJnZXRcIixkYXRhOntvcHRpb25hbDp7Y2hhbm5lbF9wdWJsaWNfaWRzOmZ9fX0sXCIvdjEvYXBpL3RhbGsvcGx1c2ZyaWVuZHNcIjp7bWV0aG9kOlwiZ2V0XCIsZGF0YTp7b3B0aW9uYWw6e3BsdXNfZnJpZW5kX3B1YmxpY19pZHM6Zn19fX0sbHI9e3JlcXVlc3Q6e3JlcXVpcmVkOnt1cmw6dnQodXQodXIpKX0sb3B0aW9uYWw6e2RhdGE6cCxmaWxlczpmdW5jdGlvbihlKXtyZXR1cm4gZ3QoW2YsaXRdKShlKSYmY3QoZSxndChbb3QscnRdKSl9LGZpbGU6b3Qsc3VjY2VzczpqLGZhaWw6aixhbHdheXM6an0sZGVmYXVsdHM6e2RhdGE6e30sc3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdH19LGFwaTp1cn0sZHI9bnVsbDtmdW5jdGlvbiBwcihlKXt2YXIgdD0oZT1jbihlLGxyLnJlcXVlc3QsXCJBUEkucmVxdWVzdFwiKSkudXJsLG49bHIuYXBpW3RdLmRhdGE7cmV0dXJuIG4mJihlLmRhdGE9Y24oZS5kYXRhLG4sXCJBUEkucmVxdWVzdCAtIFwiLmNvbmNhdCh0KSkpLGRyfHwoZHI9bG4oKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBIbi5ScGMoe3JlbW90ZTpRdC5hcGlSZW1vdGV9LHtyZW1vdGU6e3JlcXVlc3Q6e319fSl9KSksZnIucHVzaCgoZnVuY3Rpb24oKXtkci5kZXN0cm95KCksZHI9bnVsbH0pKSksbmV3IE5uLmV4cG9ydHMuUHJvbWlzZSgoZnVuY3Rpb24odCxuKXsoZnVuY3Rpb24oZSl7dmFyIHQ9ZS51cmwsbj1sci5hcGlbdF0scj17fTtWZShlLmRhdGEsKGZ1bmN0aW9uKGUsdCl7clt0XT1ZZShlKT9lOkpTT04uc3RyaW5naWZ5KGUpfSkpO3ZhciBvPXt1cmw6dCxtZXRob2Q6bi5tZXRob2QsaGVhZGVyczp7S0E6WXQsQXV0aG9yaXphdGlvbjoobi5hdXRoVHlwZXx8bnIpKCksXCJDYWNoZS1Db250cm9sXCI6XCJuby1jYWNoZVwiLFByYWdtYTpcIm5vLWNhY2hlXCJ9LGRhdGE6cn07cmV0dXJuIG5ldyBObi5leHBvcnRzLlByb21pc2UoKGZ1bmN0aW9uKG4saSl7aWYoZnVuY3Rpb24oZSl7cmV0dXJuXCIvdjEvYXBpL3N0b3J5L3VwbG9hZC9tdWx0aVwiPT09ZXx8XCIvdjIvYXBpL3RhbGsvbWVzc2FnZS9pbWFnZS91cGxvYWRcIj09PWV9KHQpfHxlLmRhdGEuZmlsZSl7dmFyIGE9ZS5maWxlc3x8ZS5kYXRhLmZpbGU7aWYoIWEpdGhyb3cgbmV3IG5uKFwiJ2ZpbGVzJyBwYXJhbWV0ZXIgc2hvdWxkIGJlIHNldCBmb3IgXCIuY29uY2F0KHQpKTsoZnVuY3Rpb24oZSl7dmFyIHQ9YXQoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgTm4uZXhwb3J0cy5Qcm9taXNlKChmdW5jdGlvbih0LG4pe1widW5kZWZpbmVkXCI9PXR5cGVvZiBGaWxlUmVhZGVyJiZuKG5ldyBubihcIkZpbGUgQVBJIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgYnJvd3Nlci5cIikpO3ZhciByPW5ldyBGaWxlUmVhZGVyO3Iub25sb2FkPWZ1bmN0aW9uKGUpe3RyeXt0KChyPWUudGFyZ2V0LnJlc3VsdCxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuZXcgVWludDhBcnJheShyKSkucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlK1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxbdF0pfSksXCJcIikpKX1jYXRjaChlKXtuKGUpfXZhciByfSxyLm9uZXJyb3I9ZnVuY3Rpb24odCl7bihuZXcgbm4oXCJDYW5ub3QgcmVhZCBmaWxlOiBcIi5jb25jYXQoZS5uYW1lKSkpfSxyLnJlYWRBc0FycmF5QnVmZmVyKGUpfSkpfShlKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm57bmFtZTplLm5hbWUsdHlwZTplLnR5cGUsc3RyOnR9fSkpfSkpO3JldHVybiBuZXcgTm4uZXhwb3J0cy5Qcm9taXNlKChmdW5jdGlvbihlLG4pe05uLmV4cG9ydHMuUHJvbWlzZS5hbGwodCkudGhlbigoZnVuY3Rpb24odCl7ZSh7cGFyYW1OYW1lOlwiZmlsZVwiLGRhdGE6dH0pfSksKGZ1bmN0aW9uKGUpe24oZSl9KSl9KSl9KShhKS50aGVuKChmdW5jdGlvbihlKXt2YXIgdD1bXTtmb3IodmFyIGkgaW4gcilcImZpbGVcIiE9PWkmJnQucHVzaChcIlwiLmNvbmNhdChpLFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHJbaV0pKSk7dC5sZW5ndGg+MCYmKG8udXJsKz1cIj9cIi5jb25jYXQodC5qb2luKFwiJlwiKSkpLG8uZmlsZT1lLG4obyl9KSwoZnVuY3Rpb24oZSl7aShlKX0pKX1lbHNlIG4obyl9KSl9KShlKS50aGVuKChmdW5jdGlvbihyKXtkci5yZXF1ZXN0KHIsKGZ1bmN0aW9uKG4pe2Uuc3VjY2VzcyhuKSxlLmFsd2F5cyhuKSx0KG4pfSksKGZ1bmN0aW9uKHQpe3ZhciByPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlLm1lc3NhZ2UucmVzcG9uc2VUZXh0KX1jYXRjaChlKXtyZXR1cm57Y29kZTotNzc3LG1zZzpcIlVua25vd24gZXJyb3JcIn19fSh0KTtlLmZhaWwociksZS5hbHdheXMociksbihyKX0pKX0pLChmdW5jdGlvbihlKXtuKGUpfSkpfSkpfXZhciBmcj1bXTt2YXIgaHI9T2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwscmVxdWVzdDpwcixjbGVhbnVwOmZ1bmN0aW9uKCl7b24oZnIpfX0pO2Z1bmN0aW9uIG1yKGUsdCl7cmV0dXJuIFJlKGUse3JlbW90ZTpRdC5sb2dpbldpZGdldCxjaGFubmVsOmR0KCl9KSxsbigoZnVuY3Rpb24oKXt2YXIgbj1uZXcgSG4uUnBjKGUse2xvY2FsOntwb3N0UmVzcG9uc2U6dCxnZXRLYWthb0FnZW50OmZ1bmN0aW9uKCl7cmV0dXJuIFl0fX0scmVtb3RlOntnZXRDb2RlOnt9LGdldEFjY2Vzc1Rva2VuOnt9LHNldENsaWVudDp7fSxzZXRTdGF0ZVRva2VuOnt9LGRlbGV0ZUF1dGhDb29raWU6e319fSk7cmV0dXJuIG4uY2hhbm5lbD1lLmNoYW5uZWwsbn0pKX12YXIgdnI9XCJfYmxhbmtcIixncj1cIndpZHRoPTM4MCwgaGVpZ2h0PTUyMCwgc2Nyb2xsYmFycz15ZXNcIix5cj0vVmVyc2lvblxcLzQuMC9pLnRlc3QoWHQudWEpfHwvOyB3dlxcKS9pLnRlc3QoWHQudWEpLGJyPS9uYXZlclxcKGluYXBwfGRhdW1hcHBzfGViYXkvZy50ZXN0KFh0LnVhKXx8XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZGF1bUFwcHM/XCJ1bmRlZmluZWRcIjprdChkYXVtQXBwcykpO2Z1bmN0aW9uIF9yKCl7cmV0dXJuIFh0Lm9zLmlvcz8vc2FmYXJpfEZ4aU9TfENyaU9TLy50ZXN0KFh0LnVhKXx8ISR0OiEhWHQub3MuYW5kcm9pZCYmKFh0LmJyb3dzZXIuY2hyb21lJiYhL29wclxcLy9pLnRlc3QoWHQudWEpJiZYdC5icm93c2VyLnZlcnNpb24ubWFqb3I+PTMwJiYoIXlyfHx5ciYmYnIpKX12YXIga3I9e2xvZ2luOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKF9yKCkpe3ZhciBvPW51bGw7aWYoWHQub3MuaW9zKXt2YXIgaT1mdW5jdGlvbihlLHQpe3Quc3RhdGU9ZTt2YXIgbj17Y2xpZW50X2lkOmVuKCkscmVkaXJlY3RfdXJpOlF0LnJlZGlyZWN0VXJpLHBhcmFtczpKU09OLnN0cmluZ2lmeSh0KX07cmV0dXJuXCJcIi5jb25jYXQoUXQudGFsa0xvZ2luU2NoZW1lLFwiP1wiKS5jb25jYXQobXQobikpfShlLG4pLGE9XCJcIi5jb25jYXQoUXQudW5pdmVyc2FsS2FrYW9MaW5rKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGkpLFwiJndlYj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCh0KSk7cj9sb2NhdGlvbi5ocmVmPWE6bz1wbihhLHZyLGdyKX1lbHNlIGlmKFh0Lm9zLmFuZHJvaWQpe3ZhciBjPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bXCJpbnRlbnQ6I0ludGVudFwiLFwiYWN0aW9uPWNvbS5rYWthby50YWxrLmludGVudC5hY3Rpb24uQ0FQUklfTE9HR0VEX0lOX0FDVElWSVRZXCIsXCJsYXVuY2hGbGFncz0weDA4ODgwMDAwXCIsXCJTLmNvbS5rYWthby5zZGsudGFsay5hcHBLZXk9XCIuY29uY2F0KGVuKCkpLFwiUy5jb20ua2FrYW8uc2RrLnRhbGsucmVkaXJlY3RVcmk9XCIuY29uY2F0KFF0LnRhbGtMb2dpblJlZGlyZWN0VXJpKSxcIlMuY29tLmtha2FvLnNkay50YWxrLnN0YXRlPVwiLmNvbmNhdChlKSxcIlMuY29tLmtha2FvLnNkay50YWxrLmthSGVhZGVyPVwiLmNvbmNhdChZdCksXCJTLmNvbS5rYWthby5zZGsudGFsay5leHRyYXBhcmFtcz1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSksXCJTLmJyb3dzZXJfZmFsbGJhY2tfdXJsPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQodCkpLFwiZW5kO1wiXS5qb2luKFwiO1wiKX0oZSx0LG4pO3I/bG9jYXRpb24uaHJlZj1jOlh0LmJyb3dzZXIudmVyc2lvbi5tYWpvcj40MCYmKCF5cnx8eXImJmJyKT9vPXBuKGMsdnIsZ3IpOihvPXBuKFwiXCIsdnIsZ3IpKSYmKG8uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLChmdW5jdGlvbigpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7byYmby5sb2NhdGlvbiYmKG8ubG9jYXRpb24uaHJlZj10KX0pLDEwKX0pKSxvLmxvY2F0aW9uLmhyZWY9Yyl9cmV0dXJuIG99fSxpc1N1cHBvcnQ6X3J9LHdyPW5ldyBfbigxZTMsNjAwKTtmdW5jdGlvbiBTcihlKXt2YXIgdD1kdCgpK2R0KCk7aWYoa3IuaXNTdXBwb3J0KCkmJmUudGhyb3VnaFRhbGspVHIoZSx0KTtlbHNlIGlmKGUucmVkaXJlY3RVcmkpbG9jYXRpb24uaHJlZj1GcihlKTtlbHNlIGlmKFh0Lm9zLmFuZHJvaWQmJiR0JiZYdC5icm93c2VyLmNocm9tZSYmWHQuYnJvd3Nlci52ZXJzaW9uLm1ham9yPj03MSl7VHIoZSx0LEFuKFJlKHt9LFRuKGUpLENuKGUpLHtyZWRpcmVjdF91cmk6UXQudGFsa0xvZ2luUmVkaXJlY3RVcmkscmVzcG9uc2VfdHlwZTpcImNvZGVcIixzdGF0ZTp0LGthOll0LG9yaWdpbjpXdH0pKSl9ZWxzZXtYdC5icm93c2VyLm1zaWUmJnBhcnNlSW50KFh0LmJyb3dzZXIudmVyc2lvbi5tYWpvcik8PTl8fGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uIHQobil7dmFyIHI9bi5vcmlnaW4sbz1uLmRhdGE7aWYoL1xcLmtha2FvXFwuY29tJC8udGVzdChyKSYmbyYmXCJzdHJpbmdcIj09dHlwZW9mIG8pe3ZhciBpPW8uc3BsaXQoXCIgXCIpO2lmKFwicG9zdFJlc3BvbnNlXCI9PT1pWzFdKXt2YXIgYT1KU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChpWzJdKSk7QnIoZSxhKSxodCh3aW5kb3csXCJtZXNzYWdlXCIsdCl9fX07ZnQod2luZG93LFwibWVzc2FnZVwiLHQpLFVyLnB1c2goKGZ1bmN0aW9uKCl7aHQod2luZG93LFwibWVzc2FnZVwiLHQpfSkpfShlKSxqbihQcihlLHQpKX1ibi5kaXNwYXRjaChcIkxPR0lOX1NUQVJUXCIpfXZhciB4cj1udWxsLE9yPWZ1bmN0aW9uKCl7eHImJnhyLmNsb3NlJiZ4ci5jbG9zZSgpLHhyPW51bGx9LGpyPW51bGwsQXI9bnVsbDtmdW5jdGlvbiBUcihlLHQsbil7anJ8fChqcj1tcih7fSwoZnVuY3Rpb24odCl7aWYoXCJlcnJvclwiPT09dC5zdGF0dXMmJnQuZXJyb3JfY29kZSYmXCIzMDBcIiE9PXQuZXJyb3JfY29kZSYmKHdyLnN0b3AoKSxcIjcwMFwiPT09dC5lcnJvcl9jb2RlJiYobG9jYXRpb24uaHJlZj1cIlwiLmNvbmNhdChRdC5hdXRoRG9tYWluLFwiL2Vycm9yL25ldHdvcmtcIikpLEJyKGUse2Vycm9yOnQuZXJyb3IsZXJyb3JfZGVzY3JpcHRpb246dC5lcnJvcl9kZXNjcmlwdGlvbn0pKSx0LnN0YXR1cylpZihcIm9rXCI9PT10LnN0YXR1cyl7aWYod3Iuc3RvcCgpLEFyPT09dC5jb2RlKXJldHVybjtBcj10LmNvZGUsanIuZ2V0QWNjZXNzVG9rZW4odC5jb2RlLGVuKCksWHQub3MuaW9zJiYhbj9RdC5yZWRpcmVjdFVyaTpRdC50YWxrTG9naW5SZWRpcmVjdFVyaSxlLmFwcHJvdmFsVHlwZSksT3IoKX1lbHNlIFh0Lm9zLmlvcyYmXCJhYm91dDpibGFua1wiPT09eHIubG9jYXRpb24uaHJlZiYmT3IoKTtlbHNlIEJyKGUsdCl9KSksVXIucHVzaCgoZnVuY3Rpb24oKXtqci5kZXN0cm95KCksanI9bnVsbH0pKSk7dmFyIHI9XCJcIjtpZihuKWUucmVkaXJlY3RVcmk/bG9jYXRpb24uaHJlZj1uOmpuKG4pO2Vsc2V7cj1lLnJlZGlyZWN0VXJpP0ZyKGUpOlByKGUsdCxYdC5vcy5pb3M/UXQucmVkaXJlY3RVcmk6UXQudGFsa0xvZ2luUmVkaXJlY3RVcmkpO3ZhciBvPVJlKHt9LFRuKGUpLENuKGUpKTtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3hyPWtyLmxvZ2luKHQscixvLGUucmVkaXJlY3RVcmkpfSksNTAwKX13ci5zdGFydCgoZnVuY3Rpb24oKXt0JiZqci5nZXRDb2RlKHQsZW4oKSxZdCl9KSwoZnVuY3Rpb24oKXtCcihlLHtlcnJvcjpcInRpbWVvdXRcIixkZXNjcmlwdGlvbjpcIkFjY291bnQgbG9naW4gdGltZWQgb3V0LiBQbGVhc2UgbG9naW4gYWdhaW4uXCIsZXJyb3JfZGVzY3JpcHRpb246XCJBY2NvdW50IGxvZ2luIHRpbWVkIG91dC4gUGxlYXNlIGxvZ2luIGFnYWluLlwifSksZS5yZWRpcmVjdFVyaT9sb2NhdGlvbi5ocmVmPXI6am4ocil9KSl9dmFyIENyPW51bGwsSXI9e307ZnVuY3Rpb24gUHIoZSx0LG4pe0NyfHwoQ3I9bXIoe30sKGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoIXRbZS5zdGF0ZVRva2VuXSl0aHJvdyBuZXcgbm4oXCJzZWN1cml0eSBlcnJvcjogI0NTVDJcIik7dmFyIG49dFtlLnN0YXRlVG9rZW5dO3JldHVybiBkZWxldGUgdFtlLnN0YXRlVG9rZW5dLGRlbGV0ZSBlLnN0YXRlVG9rZW4sbn0oZSxJcik7QnIodCxlKX0pKSxVci5wdXNoKChmdW5jdGlvbigpe0NyLmRlc3Ryb3koKSxDcj1udWxsfSkpKSxJclt0XT1lO3ZhciByPWUucmVkaXJlY3RVcmk/ZS5yZWRpcmVjdFVyaTpufHxcImtha2FvanNcIjtyZXR1cm4gQW4oUmUoe30sVG4oZSksQ24oZSkse3JlZGlyZWN0X3VyaTpyLHJlc3BvbnNlX3R5cGU6XCJjb2RlXCIsc3RhdGU6dCxwcm94eTpcImVhc3lYRE1fS2FrYW9fXCIuY29uY2F0KENyLmNoYW5uZWwsXCJfcHJvdmlkZXJcIiksa2E6WXQsb3JpZ2luOld0fSkpfWZ1bmN0aW9uIEZyKGUpe3JldHVybiBBbihSZSh7fSxUbihlKSxDbihlKSx7cmVkaXJlY3RfdXJpOmUucmVkaXJlY3RVcmkscmVzcG9uc2VfdHlwZTpcImNvZGVcIixrYTpZdCxvcmlnaW46V3R9KSl9ZnVuY3Rpb24gQnIoZSx0KXt0LmVycm9yP1wiYWNjZXNzX2RlbmllZFwiIT09dC5lcnJvciYmVm4obnVsbCk6KFZuKHQuYWNjZXNzX3Rva2VuLGUucGVyc2lzdEFjY2Vzc1Rva2VuKSxibi5kaXNwYXRjaChcIkxPR0lOXCIpKSxGbihlLHQpfXZhciBFcj1udWxsO3ZhciBVcj1bXTt2YXIgUnI9T2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlTG9naW5CdXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9cHQoKGU9Y24oZSxPbi5jcmVhdGVMb2dpbkJ1dHRvbixcIkF1dGguY3JlYXRlTG9naW5CdXR0b25cIikpLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBLYWthbyBsb2dpbiBidXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTt2YXIgbj1cIm1lZGl1bVwiPT09ZS5zaXplP1wiMDJcIjpcInNtYWxsXCI9PT1lLnNpemU/XCIwM1wiOlwiMDFcIixyPVwiXCIuY29uY2F0KFF0LmF1dGhEb21haW4sXCIvcHVibGljL3dpZGdldC9sb2dpbi9cIikuY29uY2F0KGUubGFuZyxcIi9cIikuY29uY2F0KGUubGFuZyxcIl9cIikuY29uY2F0KG4sXCJfbWVkaXVtXCIpLG89XCJcIi5jb25jYXQocixcIi5wbmdcIiksaT1cIlwiLmNvbmNhdChyLFwiX3ByZXNzLnBuZ1wiKTt0LmlubmVySFRNTD0nPGltZ1xcbiAgICBpZD1cImtha2FvLWxvZ2luLWJ0blwiXFxuICAgIHNyYz0nLmNvbmNhdChvLFwiXFxuICAgIG9ubW91c2VvdmVyPXRoaXMuc3JjPSdcIikuY29uY2F0KGksXCInXFxuICAgIG9ubW91c2VvdXQ9dGhpcy5zcmM9J1wiKS5jb25jYXQobywnXFwnXFxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCJcXG4gIC8+Jyk7dmFyIGE9ZnVuY3Rpb24oKXtTcihlKX07ZnQodCxcImNsaWNrXCIsYSksVXIucHVzaCgoZnVuY3Rpb24oKXtodCh0LFwiY2xpY2tcIixhKX0pKX0sbG9naW46ZnVuY3Rpb24oZSl7U3IoZT1jbihlLE9uLmxvZ2luLFwiQXV0aC5sb2dpblwiKSl9LGxvZ2luRm9ybTpmdW5jdGlvbihlKXtlPWNuKGUsT24ubG9naW4sXCJBdXRoLmxvZ2luRm9ybVwiKTt2YXIgdD1kdCgpK2R0KCksbj1cIiZwcm9tcHQ9bG9naW5cIjtlLnJlZGlyZWN0VXJpP2xvY2F0aW9uLmhyZWY9XCJcIi5jb25jYXQoRnIoZSkpLmNvbmNhdChuKTpqbihcIlwiLmNvbmNhdChQcihlLHQpKS5jb25jYXQobikpfSxhdXRvTG9naW46ZnVuY3Rpb24oZSl7aWYoZT1jbihlLE9uLmF1dG9Mb2dpbixcIkF1dGguYXV0b0xvZ2luXCIpLHFuKCl8fFh0Lm9zLmFuZHJvaWQmJiR0KXt2YXIgdD1kdCgpK2R0KCk7VHIoZSx0LEFuKFJlKHt9LFRuKGUpLHtyZWRpcmVjdF91cmk6UXQudGFsa0xvZ2luUmVkaXJlY3RVcmkscmVzcG9uc2VfdHlwZTpcImNvZGVcIixzdGF0ZTp0LGthOll0LG9yaWdpbjpXdCxwcm9tcHQ6XCJub25lXCJ9KSkpfWVsc2UgRm4oZSx7ZXJyb3I6XCJhdXRvX2xvZ2luXCIsZXJyb3JfZGVzY3JpcHRpb246XCJLYWthby5BdXRoLmF1dG9Mb2dpbiBpcyBvbmx5IHN1cHBvcnRlZCBieSBLYWthb1RhbGsgSW5BcHBCcm93c2VyXCIsZXJyb3JfY29kZTpcIjQwMFwiLHN0YXR1czpcImVycm9yXCJ9KTtibi5kaXNwYXRjaChcIkxPR0lOX1NUQVJUXCIpfSxsb2dvdXQ6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bHQ7YW4oZSxqLFwiQXV0aC5sb2dvdXRcIikscHIoe3VybDpcIi92MS91c2VyL2xvZ291dFwiLGFsd2F5czpmdW5jdGlvbigpe1ZuKG51bGwpLGJuLmRpc3BhdGNoKFwiTE9HT1VUXCIpLGUoITApfX0pfSxpc3N1ZUFjY2Vzc1Rva2VuOmZ1bmN0aW9uKGUpe2U9Y24oZSxPbi5pc3N1ZUFjY2Vzc1Rva2VuLFwiQXV0aC5pc3N1ZUFjY2Vzc1Rva2VuXCIpLEVyfHwoRXI9bXIoe30sKGZ1bmN0aW9uKHQpe0JyKGUsdCl9KSksVXIucHVzaCgoZnVuY3Rpb24oKXtFci5kZXN0cm95KCksRXI9bnVsbH0pKSksRXIuZ2V0QWNjZXNzVG9rZW4oZS5jb2RlLGVuKCksZS5yZWRpcmVjdFVyaSl9LGNsZWFudXA6ZnVuY3Rpb24oKXtvbihVcil9fSk7ZnVuY3Rpb24gTHIoZSx0KXt6cigpO3ZhciBuPXNuKCkscj1fdCh7YXBwX2tleTplbigpLGFjY2Vzc190b2tlbjpHbigpLGthOll0LHRyYW5zX2lkOm4sbW9iaWxlX3ZpZXc6ZS5mb3JjZU1vYmlsZUxheW91dCxlbmFibGVfYmFja19idXR0b246ZS5lbmFibGVCYWNrQnV0dG9ufSxlLmFkZHJlc3NJZCYme2FkZHJlc3NfaWQ6ZS5hZGRyZXNzSWR9KSxvPVF0LmFwcHNEb21haW4rdDtlLnJldHVyblVybD8oci5yZXR1cm5fdXJsPWUucmV0dXJuVXJsLGduKHIsbykpOihobihuLFwiXCIuY29uY2F0KFF0LmFwcHNEb21haW4sXCIvcHJveHk/dHJhbnNfaWQ9XCIpLmNvbmNhdChuKSxNciksbW4oZSxRdC5hcHBzRG9tYWluLE1yKSxmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbiB0KG4pe3ZhciByPW4uZGF0YSxvPW4ub3JpZ2luO28hPT1RdC5hcHBzRG9tYWluJiZvIT09UXQuYWNjb3VudERvbWFpbnx8XCJjbG9zZWRcIiE9PXJ8fChlLmNsb3NlKCksaHQod2luZG93LFwibWVzc2FnZVwiLHQpKX07ZnQod2luZG93LFwibWVzc2FnZVwiLHQpfShlKSx2bihyLHt1cmw6byxwb3B1cE5hbWU6XCJzaGlwcGluZ19hZGRyZXNzXCIscG9wdXBGZWF0dXJlczpcImxvY2F0aW9uPW5vLHJlc2l6YWJsZT1ubyxzdGF0dXM9bm8sc2Nyb2xsYmFycz1ubyx3aWR0aD00NjAsaGVpZ2h0PTYwOFwifSkpfXZhciBNcj1bXTtmdW5jdGlvbiB6cigpe29uKE1yKX12YXIgRHI9cm4oW3puLFJyLHRyLE9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGdldFN0YXR1c0luZm86ZnVuY3Rpb24oZSl7YW4oZSxqLFwiQXV0aC5nZXRTdGF0dXNJbmZvXCIpLEduKCk/cHIoe3VybDpcIi92Mi91c2VyL21lXCIsc3VjY2VzczpmdW5jdGlvbih0KXtlKHtzdGF0dXM6XCJjb25uZWN0ZWRcIix1c2VyOnR9KX0sZmFpbDpmdW5jdGlvbigpe2Uoe3N0YXR1czpcIm5vdF9jb25uZWN0ZWRcIn0pfX0pOmUoe3N0YXR1czpcIm5vdF9jb25uZWN0ZWRcIn0pfX0pLE9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLHNlbGVjdFNoaXBwaW5nQWRkcmVzczpmdW5jdGlvbihlKXtMcihlPWNuKGUsT24uc2VsZWN0U2hpcHBpbmdBZGRyZXNzLFwiQXV0aC5zZWxlY3RTaGlwcGluZ0FkZHJlc3NcIiksXCIvdXNlci9hZGRyZXNzXCIpfSxjcmVhdGVTaGlwcGluZ0FkZHJlc3M6ZnVuY3Rpb24oZSl7THIoZT1jbihlLE9uLmNyZWF0ZVNoaXBwaW5nQWRkcmVzcyxcIkF1dGguY3JlYXRlU2hpcHBpbmdBZGRyZXNzXCIpLFwiL3VzZXIvY3JlYXRlL2FkZHJlc3NcIil9LHVwZGF0ZVNoaXBwaW5nQWRkcmVzczpmdW5jdGlvbihlKXtMcihlPWNuKGUsT24udXBkYXRlU2hpcHBpbmdBZGRyZXNzLFwiQXV0aC51cGRhdGVTaGlwcGluZ0FkZHJlc3NcIiksXCIvdXNlci9lZGl0L2FkZHJlc3NcIil9LGNsZWFudXA6enJ9KV0pLHFyPXJuKFtocl0pO2Z1bmN0aW9uIE5yKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9ZnVuY3Rpb24gS3IoZSl7cmV0dXJuIGUucmVwbGFjZSgvW0EtWl0vZywoZnVuY3Rpb24oZSl7cmV0dXJuXCJfXCIuY29uY2F0KGUudG9Mb3dlckNhc2UoKSl9KSl9ZnVuY3Rpb24gSHIoZSl7cmV0dXJuIHAoZSk/SlNPTi5zdHJpbmdpZnkoZSk6ZX1mdW5jdGlvbiBKcihlLHQpe3JldHVybiBwcih7dXJsOmUsZGF0YTp0fSl9ZnVuY3Rpb24gV3IoZSx0LG4pe3JldHVybiBjbihlLHQsJ3BhcmFtZXRlciBcIicuY29uY2F0KG4sJ1wiIGluIFNoYXJlJykpLCEwfWZ1bmN0aW9uIFhyKGUpe3JldHVybiB1dChlKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHRbS3IobildPWVbbl0sdH0pLHt9KX12YXIgJHI9e29wdGlvbmFsOnt3ZWJVcmw6WWUsbW9iaWxlV2ViVXJsOlllLGFuZHJvaWRFeGVjdXRpb25QYXJhbXM6WWUsYW5kcm9pZEV4ZWNQYXJhbXM6WWUsaW9zRXhlY3V0aW9uUGFyYW1zOlllLGlvc0V4ZWNQYXJhbXM6WWV9LGJ1aWxkZXI6VnJ9LEdyPXtyZXF1aXJlZDp7aXRlbTpZZSxpdGVtT3A6WWV9fTtmdW5jdGlvbiBWcihlKXt2YXIgdD1YcihlKTtyZXR1cm4gdC5hbmRyb2lkX2V4ZWNfcGFyYW1zJiYodC5hbmRyb2lkX2V4ZWN1dGlvbl9wYXJhbXM9dC5hbmRyb2lkX2V4ZWNfcGFyYW1zLGRlbGV0ZSB0LmFuZHJvaWRfZXhlY19wYXJhbXMpLHQuaW9zX2V4ZWNfcGFyYW1zJiYodC5pb3NfZXhlY3V0aW9uX3BhcmFtcz10Lmlvc19leGVjX3BhcmFtcyxkZWxldGUgdC5pb3NfZXhlY19wYXJhbXMpLHR9ZnVuY3Rpb24gWXIoZSl7cmV0dXJue3RpdGxlOmUudGl0bGUsbGluazpWcihlLmxpbmspfX1mdW5jdGlvbiBRcihlKXt2YXIgdD1YcihlKTtyZXR1cm4gdC5saW5rPVZyKHQubGluayksdH12YXIgWnI9e2hlYWRlckxpbms6JHIsbGluazokcixidXR0b246e3JlcXVpcmVkOnt0aXRsZTpZZSxsaW5rOmZ1bmN0aW9uKGUpe1dyKGUsJHIsXCJsaW5rXCIpfX0sYnVpbGRlcjpZcn0sYnV0dG9uczp7b3B0aW9uYWw6ezA6ZnVuY3Rpb24oZSl7V3IoZSxaci5idXR0b24sXCJidXR0b25cIil9LDE6ZnVuY3Rpb24oZSl7V3IoZSxaci5idXR0b24sXCJidXR0b25cIil9fSxidWlsZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBhdChlLFlyKX19LGNvbnRlbnQ6e3JlcXVpcmVkOnt0aXRsZTpZZSxpbWFnZVVybDpZZSxsaW5rOmZ1bmN0aW9uKGUpe1dyKGUsJHIsXCJsaW5rXCIpfX0sb3B0aW9uYWw6e2ltYWdlV2lkdGg6ZXQsaW1hZ2VIZWlnaHQ6ZXQsZGVzY3JpcHRpb246WWV9LGJ1aWxkZXI6UXJ9LGNvbnRlbnRzOntvcHRpb25hbDp7MDpmdW5jdGlvbihlKXtXcihlLFpyLmNvbnRlbnQsXCJjb250ZW50XCIpfSwxOmZ1bmN0aW9uKGUpe1dyKGUsWnIuY29udGVudCxcImNvbnRlbnRcIil9LDI6ZnVuY3Rpb24oZSl7V3IoZSxaci5jb250ZW50LFwiY29udGVudFwiKX19LGJ1aWxkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGF0KGUsUXIpfX0sY29tbWVyY2U6e3JlcXVpcmVkOntyZWd1bGFyUHJpY2U6ZXR9LG9wdGlvbmFsOntkaXNjb3VudFByaWNlOmV0LGRpc2NvdW50UmF0ZTpldCxmaXhlZERpc2NvdW50UHJpY2U6ZXQsY3VycmVuY3lVbml0OlllLGN1cnJlbmN5VW5pdFBvc2l0aW9uOnZ0KFswLDFdKSxwcm9kdWN0TmFtZTpZZX0sYnVpbGRlcjpYcn0sc29jaWFsOntvcHRpb25hbDp7bGlrZUNvdW50OmV0LGNvbW1lbnRDb3VudDpldCxzaGFyZWRDb3VudDpldCx2aWV3Q291bnQ6ZXQsc3Vic2NyaWJlckNvdW50OmV0fSxidWlsZGVyOlhyfSxpdGVtQ29udGVudDp7b3B0aW9uYWw6e3Byb2ZpbGVUZXh0OlllLHByb2ZpbGVJbWFnZVVybDpZZSx0aXRsZUltYWdlVXJsOlllLHRpdGxlSW1hZ2VUZXh0OlllLHRpdGxlSW1hZ2VDYXRlZ29yeTpZZSxpdGVtczpmdW5jdGlvbihlKXtyZXR1cm4gZihlKSYmZS5sZW5ndGg8NiYmY3QoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIFdyKGUsR3IsXCJpdGVtcy5pdGVtXCIpfSkpfSxzdW06WWUsc3VtT3A6WWV9LGJ1aWxkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9WHIoZSk7cmV0dXJuIHQuaXRlbXMmJih0Lml0ZW1zPWF0KHQuaXRlbXMsKGZ1bmN0aW9uKGUpe3JldHVybiBYcihlKX0pKSksdH19fTt2YXIgZW89e2NyZWF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9WnJbdF07aWYocilyZXR1cm4gZT1jbihlLHIsJ3BhcmFtZXRlciBcIicuY29uY2F0KHQsJ1wiIGluICcpLmNvbmNhdChufHxcIlNoYXJlXCIpKSxyLmJ1aWxkZXIoZSl9fSx0bz1cIjQuMFwiLG5vPXh0KChmdW5jdGlvbiBlKHQsbil7d3QodGhpcyxlKSx0aGlzLmFwcGtleT1lbigpLHRoaXMuYXBwdmVyPVwiMS4wXCIsdGhpcy5saW5rdmVyPXRvLHRoaXMuZXh0cmFzPV90KF90KHtLQTpZdH0sdC5leHRyYXMpLHQuc2VydmVyQ2FsbGJhY2tBcmdzJiZ7bGNiYTpIcih0LnNlcnZlckNhbGxiYWNrQXJncyl9KSx0aGlzLnRlbXBsYXRlX2pzb249bi50ZW1wbGF0ZV9tc2csdGhpcy50ZW1wbGF0ZV9hcmdzPW4udGVtcGxhdGVfYXJncyx0aGlzLnRlbXBsYXRlX2lkPW4udGVtcGxhdGVfaWR9KSk7dmFyIHJvPXh0KChmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXM7d3QodGhpcyxlKSx0aGlzLmxpbmtfdmVyPXRvLHRoaXMudGVtcGxhdGVfb2JqZWN0PV90KHtvYmplY3RfdHlwZTp0Lm9iamVjdFR5cGV9LHQuYnV0dG9uVGl0bGUmJntidXR0b25fdGl0bGU6dC5idXR0b25UaXRsZX0pLFZlKHQsKGZ1bmN0aW9uKGUsdCl7dmFyIHI9ZW8uY3JlYXRlKGUsdCxcImRlZmF1bHRPYmplY3RcIik7ciYmKG4udGVtcGxhdGVfb2JqZWN0W0tyKHQpXT1yKX0pKX0pKSxvbz17RmVlZExpbms6cm8sQ29tbWVyY2VMaW5rOnJvLExpc3RMaW5rOmZ1bmN0aW9uKGUpe2p0KG4sZSk7dmFyIHQ9SXQobik7ZnVuY3Rpb24gbihlKXt2YXIgcjtyZXR1cm4gd3QodGhpcyxuKSwocj10LmNhbGwodGhpcyxlKSkudGVtcGxhdGVfb2JqZWN0LmhlYWRlcl90aXRsZT1lLmhlYWRlclRpdGxlLGNvbnNvbGUmJihlLmhlYWRlckltYWdlVXJsfHxlLmhlYWRlckltYWdlV2lkdGh8fGUuaGVhZGVySW1hZ2VIZWlnaHQpJiZjb25zb2xlLndhcm4oXCJLYWthb1dhcm5pbmc6IFRoZSBwYXJhbWV0ZXJzIChcIi5jb25jYXQoW1wiaGVhZGVySW1hZ2VVcmxcIixcImhlYWRlckltYWdlV2lkdGhcIixcImhlYWRlckltYWdlSGVpZ2h0XCJdLmpvaW4oXCIsIFwiKSxcIikgZm9yIGhlYWRlciBiYWNrZ3JvdW5kIGltYWdlIGFyZSBkZXByZWNhdGVkLlwiKSkscn1yZXR1cm4geHQobil9KHJvKSxMb2NhdGlvbkxpbms6ZnVuY3Rpb24oZSl7anQobixlKTt2YXIgdD1JdChuKTtmdW5jdGlvbiBuKGUpe3ZhciByO3d0KHRoaXMsbik7dmFyIG89KHI9dC5jYWxsKHRoaXMsZSkpLnRlbXBsYXRlX29iamVjdDtyZXR1cm4gby5hZGRyZXNzPWUuYWRkcmVzc3x8XCJcIixvLmFkZHJlc3NfdGl0bGU9ZS5hZGRyZXNzVGl0bGV8fFwiXCIscn1yZXR1cm4geHQobil9KHJvKSxUZXh0TGluazpmdW5jdGlvbihlKXtqdChuLGUpO3ZhciB0PUl0KG4pO2Z1bmN0aW9uIG4oZSl7dmFyIHI7cmV0dXJuIHd0KHRoaXMsbiksKHI9dC5jYWxsKHRoaXMsZSkpLnRlbXBsYXRlX29iamVjdC50ZXh0PWUudGV4dHx8XCJcIixyfXJldHVybiB4dChuKX0ocm8pfSxpbz14dCgoZnVuY3Rpb24gZSh0KXt3dCh0aGlzLGUpLHRoaXMubGlua192ZXI9dG8sdGhpcy5yZXF1ZXN0X3VybD10LnJlcXVlc3RVcmwsdC50ZW1wbGF0ZUlkJiYodGhpcy50ZW1wbGF0ZV9pZD10LnRlbXBsYXRlSWQpLHQudGVtcGxhdGVBcmdzJiYodGhpcy50ZW1wbGF0ZV9hcmdzPXQudGVtcGxhdGVBcmdzKX0pKSxhbz14dCgoZnVuY3Rpb24gZSh0KXt3dCh0aGlzLGUpLHRoaXMubGlua192ZXI9dG8sdGhpcy50ZW1wbGF0ZV9pZD10LnRlbXBsYXRlSWQsdGhpcy50ZW1wbGF0ZV9hcmdzPXQudGVtcGxhdGVBcmdzfSkpO3ZhciBjbz17c2VuZDpmdW5jdGlvbihlLHQsbil7dmFyIHI9dm4oX3Qoe2FwcF9rZXk6ZW4oKSxrYTpZdCx2YWxpZGF0aW9uX2FjdGlvbjp0LHZhbGlkYXRpb25fcGFyYW1zOkpTT04uc3RyaW5naWZ5KG4pfSxlLnNlcnZlckNhbGxiYWNrQXJncyYme2xjYmE6SHIoZS5zZXJ2ZXJDYWxsYmFja0FyZ3MpfSkse3VybDpcIlwiLmNvbmNhdChRdC5zaGFyZXJEb21haW4sXCIvcGlja2VyL2xpbmtcIikscG9wdXBOYW1lOlwia2FrYW9fbGlua193ZWJfc2hhcmVyXCIscG9wdXBGZWF0dXJlczpcImxvY2F0aW9uPW5vLHJlc2l6YWJsZT1ubyxzdGF0dXM9bm8sc2Nyb2xsYmFycz1ubyx3aWR0aD00NjAsaGVpZ2h0PTYwOFwifSk7ZS5jYWxsYmFjayYmZnVuY3Rpb24oZSx0KXtpZihYdC5icm93c2VyLm1zaWUpcmV0dXJuIHZvaWQoY29uc29sZSYmY29uc29sZS53YXJuKFwiS2FrYW9XYXJuaW5nOiBUaGUgY2FsbGJhY2sgcGFyYW1ldGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIElFIGJyb3dzZXIuXCIpKTt2YXIgbj1mdW5jdGlvbihlKXtcInNlbnRcIj09PWUuZGF0YSYmZS5vcmlnaW49PT1RdC5zaGFyZXJEb21haW4mJnQoKX07ZnQod2luZG93LFwibWVzc2FnZVwiLG4pO3ZhciByPXNldEludGVydmFsKChmdW5jdGlvbigpe2UuY2xvc2VkJiYoY2xlYXJJbnRlcnZhbChyKSxodCh3aW5kb3csXCJtZXNzYWdlXCIsbikpfSksMWUzKX0ocixlLmNhbGxiYWNrKX19LHNvPWZ1bmN0aW9uKCl7dmFyIGU9THQoKSx0PWUub3Msbj1bXCJvcHIvXCJdLHI9W1wiZmlyZWZveFwiLFwiS0FLQU9UQUxLXCJdO2Z1bmN0aW9uIG8oZSl7d2luZG93LnRvcC5sb2NhdGlvbi5ocmVmPWV9ZnVuY3Rpb24gaShlLHQsbil7dmFyIHI9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dmFyIG89KG5ldyBEYXRlKS5nZXRUaW1lKCk7YSgpJiZvLXI8ZSsxMDAmJm4odCl9KSxlKX1mdW5jdGlvbiBhKCl7Zm9yKHZhciBlPVtcImhpZGRlblwiLFwid2Via2l0SGlkZGVuXCJdLHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspaWYodm9pZCAwIT09ZG9jdW1lbnRbZVt0XV0pcmV0dXJuIWRvY3VtZW50W2VbdF1dO3JldHVybiEwfWZ1bmN0aW9uIGMoZSl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXsoZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtyZXR1cm4gdC5pZD1lLHQuc3R5bGUuYm9yZGVyPVwibm9uZVwiLHQuc3R5bGUud2lkdGg9XCIwXCIsdC5zdHlsZS5oZWlnaHQ9XCIwXCIsdC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpLHR9KFwiYXBwTGF1bmNoZXJcIikpLnNyYz1lfSksMTAwKX1yZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHUsbCxkLHAsZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLndpbGxJbnZva2VBcHA/cy53aWxsSW52b2tlQXBwOmZ1bmN0aW9uKCl7fSxoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHMub25BcHBNaXNzaW5nP3Mub25BcHBNaXNzaW5nOm8sbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzLm9uVW5zdXBwb3J0ZWRFbnZpcm9ubWVudD9zLm9uVW5zdXBwb3J0ZWRFbnZpcm9ubWVudDpmdW5jdGlvbigpe307ZigpLHQuYW5kcm9pZD8obD1lLmJyb3dzZXIuY2hyb21lJiYrZS5icm93c2VyLnZlcnNpb24ubWFqb3I+PTI1LGQ9bmV3IFJlZ0V4cChuLmpvaW4oXCJ8XCIpLFwiaVwiKSxwPW5ldyBSZWdFeHAoci5qb2luKFwifFwiKSxcImlcIiksKGwmJiFkLnRlc3QoZS51YSl8fHAudGVzdChlLnVhKSkmJnMuaW50ZW50VVJJJiYhcy51c2VVcmxTY2hlbWU/ZnVuY3Rpb24odCl7ZS5icm93c2VyLmNocm9tZT9uKCk6c2V0VGltZW91dChuLDEwMCk7ZnVuY3Rpb24gbigpe3RvcC5sb2NhdGlvbi5ocmVmPXR9fShzLmludGVudFVSSSk6cy5zdG9yZVVSTCYmKHU9cy51cmxTY2hlbWUsaSgzMDAscy5zdG9yZVVSTCxoKSxjKHUpKSk6dC5pb3MmJnMuc3RvcmVVUkw/ZnVuY3Rpb24odCxuLHIsbyl7dmFyIHM9aSg1ZTMsbixyKTtwYXJzZUludChlLm9zLnZlcnNpb24ubWFqb3IsMTApPDg/ZnVuY3Rpb24oZSl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLChmdW5jdGlvbiB0KCl7YSgpJiYoY2xlYXJUaW1lb3V0KGUpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIix0KSl9KSl9KHMpOmZ1bmN0aW9uKGUpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsKGZ1bmN0aW9uIHQoKXthKCkmJihjbGVhclRpbWVvdXQoZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0KSl9KSl9KHMpO3BhcnNlSW50KGUub3MudmVyc2lvbi5tYWpvciwxMCk+OCYmZS5vcy5pb3M/KHZvaWQgMD09PW8/bz10OmNsZWFyVGltZW91dChzKSxmdW5jdGlvbihlKXt3aW5kb3cudG9wLmxvY2F0aW9uLmhyZWY9ZX0obykpOmModCl9KHMudXJsU2NoZW1lLHMuc3RvcmVVUkwsaCxzLnVuaXZlcnNhbExpbmspOnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7bSgpfSksMTAwKX19KCksdW89bmV3IF9uKDEwMCwxMDApLGxvPVwiMzYyMDU3OTQ3XCI7ZnVuY3Rpb24gcG8oZSx0KXt2YXIgbj1mdW5jdGlvbihlLHQpe3ZhciBuPW5ldyBubyhlLHQpO2lmKEpTT04uc3RyaW5naWZ5KG4pLmxlbmd0aD4xZTQpdGhyb3cgbmV3IG5uKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZSBiZWNhdXNlIGl0IGV4Y2VlZHMgdGhlIG1lc3NhZ2Ugc2l6ZSBsaW1pdC4gUGxlYXNlIGNvbnRhY3QgdGhlIGFwcCBhZG1pbmlzdHJhdG9yLlwiKTtyZXR1cm4gbXQobil9KHQsZSk7IWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0oWHQub3MuaW9zP1F0LnRhbGtMaW5rU2NoZW1lOlwiXCIpK1wiP1wiK2Usbz1cImludGVudDovL2xpbms/XCIuY29uY2F0KGUsXCIjSW50ZW50O3NjaGVtZT1rYWthb2xpbmtcIiksaT1cImludGVudDprYWthb2xpbms6Ly9zZW5kP1wiLmNvbmNhdChlLFwiI0ludGVudFwiKSxhPVsvaW5zdGFncmFtfGZiX2lhYi9nLnRlc3QoWHQudWEpP286aSxcImxhdW5jaEZsYWdzPTB4MTQwMDgwMDBcIixcIlwiLmNvbmNhdCghMD09PW4/XCJwYWNrYWdlPVwiLmNvbmNhdChRdC50YWxrQW5kcm9pZFBhY2thZ2UsXCI7XCIpOlwiXCIsXCJlbmQ7XCIpXS5qb2luKFwiO1wiKSxjPXt1cmxTY2hlbWU6cixpbnRlbnRVUkk6YSxhcHBOYW1lOlwiS2FrYW9UYWxrXCIsc3RvcmVVUkw6dW4oUXQudGFsa0FuZHJvaWRQYWNrYWdlLGxvKSxvblVuc3VwcG9ydGVkRW52aXJvbm1lbnQ6ZnVuY3Rpb24oKXt0KHIpfX07KCFufHxxbigpfHxEbigpKSYmKGMub25BcHBNaXNzaW5nPWx0KTtxbigpJiYoYy51bml2ZXJzYWxMaW5rPXZvaWQgMCk7dHJ5e3NvKGMpfWNhdGNoKGUpe319KG4sdC5mYWlsLHQuaW5zdGFsbFRhbGspO3ZhciByPXt0ZW1wbGF0ZV9tc2c6ZS50ZW1wbGF0ZV9tc2d8fHt9LHdhcm5pbmdfbXNnOmUud2FybmluZ19tc2d8fHt9LGFyZ3VtZW50X21zZzplLmFyZ3VtZW50X21zZ3x8e319O3Quc3VjY2VzcyhyKSx0LmFsd2F5cyhyKX12YXIgZm89e3NlbmQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPW51bGw7aWYoWHQuYnJvd3Nlci5pcGhvbmUmJi92ZXJzaW9uLy50ZXN0KFh0LnVhLnRvTG93ZXJDYXNlKCkpKXt2YXIgbz1udWxsO3I9ZnVuY3Rpb24oZSl7bz1lfSx1by5zdGFydCgoZnVuY3Rpb24oKXtudWxsIT09byYmKHVvLnN0b3AoKSxwbyhvLGUpKX0pLChmdW5jdGlvbigpe3ZhciB0PXtlcnJvcjpcInRpbWVvdXRcIixlcnJvcl9kZXNjcmlwdGlvbjpcIkxJTktfVElNRU9VVFwifTtlLmZhaWwodCksZS5hbHdheXModCl9KSl9ZWxzZSByPXBvO3JldHVybiBKcih0LG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3IodCxlKX0pLChmdW5jdGlvbihlKXt2YXIgdCxuPUpTT04uc3RyaW5naWZ5KF90KHtuYW1lOlwiS0FQSUVycm9yXCJ9LGUpKTtsb2NhdGlvbi5ocmVmPVwiXCIuY29uY2F0KFF0LnNoYXJlckRvbWFpbixcIi9waWNrZXIvZmFpbGVkP2FwcF9rZXk9XCIpLmNvbmNhdChlbigpLFwiJmVycm9yPVwiKS5jb25jYXQoKHQ9bix3aW5kb3cuYnRvYSh0KS5yZXBsYWNlKC9cXCsvZyxcIi1cIikucmVwbGFjZSgvXFwvL2csXCJfXCIpLnJlcGxhY2UoLz0vZyxcIlwiKSkpfSkpfX0saG89e3N1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmosY2FsbGJhY2s6aixpbnN0YWxsVGFsazpRZSx0aHJvdWdoVGFsazpRZSxleHRyYXM6cCxzZXJ2ZXJDYWxsYmFja0FyZ3M6Z3QoW2Z1bmN0aW9uKGUpe3RyeXtKU09OLnBhcnNlKGUpfWNhdGNoKGUpe3JldHVybiExfXJldHVybiEwfSxwXSl9LG1vPXtzdWNjZXNzOmx0LGZhaWw6bHQsYWx3YXlzOmx0LGluc3RhbGxUYWxrOiExLHRocm91Z2hUYWxrOiEwfTtmdW5jdGlvbiB2byhlKXtpZighZihlKSlyZXR1cm4hMTtpZihlLmxlbmd0aD4yKXRocm93IG5ldyBubignSWxsZWdhbCBhcmd1bWVudCBmb3IgXCJidXR0b25zXCIgaW4gU2hhcmU6IHNpemUgb2YgYnV0dG9ucyBzaG91bGQgYmUgdXAgdG8gMicpO3JldHVybiEwfXZhciBnbz17cmVxdWlyZWQ6e29iamVjdFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJmZWVkXCI9PT1lfSxjb250ZW50OnB9LG9wdGlvbmFsOlJlKHtpdGVtQ29udGVudDpwLHNvY2lhbDpwLGJ1dHRvblRpdGxlOlllLGJ1dHRvbnM6dm99LGhvKSxkZWZhdWx0czptb30seW89e3JlcXVpcmVkOntvYmplY3RUeXBlOmZ1bmN0aW9uKGUpe3JldHVyblwibGlzdFwiPT09ZX0saGVhZGVyVGl0bGU6WWUsaGVhZGVyTGluazpwLGNvbnRlbnRzOmZ1bmN0aW9uKGUpe2lmKCFmKGUpKXJldHVybiExO2lmKGUubGVuZ3RoPDJ8fGUubGVuZ3RoPjMpdGhyb3cgbmV3IG5uKCdJbGxlZ2FsIGFyZ3VtZW50IGZvciBcImNvbnRlbnRzXCIgaW4gU2hhcmU6IHNpemUgb2YgY29udGVudHMgc2hvdWxkIGJlIG1vcmUgdGhhbiAxIGFuZCB1cCB0byAzJyk7cmV0dXJuITB9fSxvcHRpb25hbDpSZSh7YnV0dG9uVGl0bGU6WWUsYnV0dG9uczp2byxoZWFkZXJJbWFnZVVybDpZZSxoZWFkZXJJbWFnZVdpZHRoOmV0LGhlYWRlckltYWdlSGVpZ2h0OmV0fSxobyksZGVmYXVsdHM6bW99LGJvPXtyZXF1aXJlZDp7b2JqZWN0VHlwZTpmdW5jdGlvbihlKXtyZXR1cm5cImNvbW1lcmNlXCI9PT1lfSxjb250ZW50OnAsY29tbWVyY2U6cH0sb3B0aW9uYWw6UmUoe2J1dHRvblRpdGxlOlllLGJ1dHRvbnM6dm99LGhvKSxkZWZhdWx0czptb30sX289e3JlcXVpcmVkOntvYmplY3RUeXBlOmZ1bmN0aW9uKGUpe3JldHVyblwibG9jYXRpb25cIj09PWV9LGNvbnRlbnQ6cCxhZGRyZXNzOlllfSxvcHRpb25hbDpSZSh7YWRkcmVzc1RpdGxlOlllLHNvY2lhbDpwLGJ1dHRvblRpdGxlOlllLGJ1dHRvbnM6dm99LGhvKSxkZWZhdWx0czptb30sa289e3JlcXVpcmVkOntvYmplY3RUeXBlOmZ1bmN0aW9uKGUpe3JldHVyblwidGV4dFwiPT09ZX0sdGV4dDpZZSxsaW5rOnB9LG9wdGlvbmFsOlJlKHtidXR0b25UaXRsZTpZZSxidXR0b25zOnZvfSxobyksZGVmYXVsdHM6bW99LHdvPXtyZXF1aXJlZDp7cmVxdWVzdFVybDpZZX0sb3B0aW9uYWw6UmUoe3RlbXBsYXRlSWQ6ZXQsdGVtcGxhdGVBcmdzOnB9LGhvKSxkZWZhdWx0czpSZSh7dGVtcGxhdGVBcmdzOnt9fSxtbyl9LFNvPXtyZXF1aXJlZDp7dGVtcGxhdGVJZDpldH0sb3B0aW9uYWw6UmUoe3RlbXBsYXRlQXJnczpwfSxobyksZGVmYXVsdHM6UmUoe3RlbXBsYXRlQXJnczp7fX0sbW8pfTtmdW5jdGlvbiB4byhlKXtyZXR1cm4gR2Uoe3JlcXVpcmVkOlJlKHtjb250YWluZXI6Z3QoW1plLFllXSl9LGUucmVxdWlyZWQpfSxlKX12YXIgT289e2RlZmF1bHRPYmplY3RUeXBlczpbXCJmZWVkXCIsXCJsaXN0XCIsXCJjb21tZXJjZVwiLFwibG9jYXRpb25cIixcInRleHRcIl0sc2VuZEZlZWQ6Z28sY3JlYXRlRmVlZEJ1dHRvbjp4byhnbyksc2VuZExpc3Q6eW8sY3JlYXRlTGlzdEJ1dHRvbjp4byh5byksc2VuZENvbW1lcmNlOmJvLGNyZWF0ZUNvbW1lcmNlQnV0dG9uOnhvKGJvKSxzZW5kTG9jYXRpb246X28sY3JlYXRlTG9jYXRpb25CdXR0b246eG8oX28pLHNlbmRUZXh0OmtvLGNyZWF0ZVRleHRCdXR0b246eG8oa28pLHNlbmRTY3JhcDp3byxjcmVhdGVTY3JhcEJ1dHRvbjp4byh3byksc2VuZEN1c3RvbTpTbyxjcmVhdGVDdXN0b21CdXR0b246eG8oU28pLHVwbG9hZEltYWdlOntyZXF1aXJlZDp7ZmlsZTpwfX0sZGVsZXRlSW1hZ2U6e3JlcXVpcmVkOntpbWFnZVVybDpZZX19LHNjcmFwSW1hZ2U6e3JlcXVpcmVkOntpbWFnZVVybDpZZX19fTtmdW5jdGlvbiBqbyhlLHQpe3ZhciBuPXB0KGUuY29udGFpbmVyKTtpZighbil0aHJvdyBuZXcgbm4oXCJjb250YWluZXIgaXMgcmVxdWlyZWQgZm9yIEtha2FvVGFsayBzaGFyaW5nOiBwYXNzIGluIGVsZW1lbnQgb3IgaWRcIik7dmFyIHI9ZnVuY3Rpb24obil7bi5wcmV2ZW50RGVmYXVsdCgpLG4uc3RvcFByb3BhZ2F0aW9uKCksVG8oZSx0KX07ZnQobixcImNsaWNrXCIsciksQ28ucHVzaCgoZnVuY3Rpb24oKXtodChuLFwiY2xpY2tcIixyKX0pKX12YXIgQW89e2RlZmF1bHQ6e21ha2VMaW5rRnVuYzpmdW5jdGlvbihlKXtyZXR1cm4gbmV3KDAsb29bXCJcIi5jb25jYXQoTnIoZS5vYmplY3RUeXBlKSxcIkxpbmtcIildKShlKX0scmVxdWVzdFVybDpcIi92Mi9hcGkva2FrYW9saW5rL3RhbGsvdGVtcGxhdGUvZGVmYXVsdFwifSxzY3JhcDp7bWFrZUxpbmtGdW5jOmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgaW8oZSl9LHJlcXVlc3RVcmw6XCIvdjIvYXBpL2tha2FvbGluay90YWxrL3RlbXBsYXRlL3NjcmFwXCJ9LGN1c3RvbTp7bWFrZUxpbmtGdW5jOmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgYW8oZSl9LHJlcXVlc3RVcmw6XCIvdjIvYXBpL2tha2FvbGluay90YWxrL3RlbXBsYXRlL3ZhbGlkYXRlXCJ9fTtmdW5jdGlvbiBUbyhlLHQpe3ZhciBuPUFvW3RdLHI9bi5tYWtlTGlua0Z1bmMsbz1uLnJlcXVlc3RVcmwsaT1yKGUpLGE9L29wclxcL3xvcHRcXC98aHVhd2VpL2cudGVzdChYdC51YSksYz1YdC5vcy5pb3MmJlwidGFibGV0XCI9PT1YdC5wbGF0Zm9ybTskdHx8IWEmJmUudGhyb3VnaFRhbGsmJihcIm1vYmlsZVwiPT09WHQucGxhdGZvcm18fGMpP2ZvLnNlbmQoZSxvLGkpOmNvLnNlbmQoZSx0LGkpfXZhciBDbz1bXTt2YXIgSW89cm4oW09iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLGNyZWF0ZURlZmF1bHRCdXR0b246ZnVuY3Rpb24oZSl7aWYoIWUub2JqZWN0VHlwZXx8IXZ0KE9vLmRlZmF1bHRPYmplY3RUeXBlcykoZS5vYmplY3RUeXBlKSl0aHJvdyBuZXcgbm4oXCJvYmplY3RUeXBlIHNob3VsZCBiZSBvbmUgb2YgKFwiLmNvbmNhdChPby5kZWZhdWx0T2JqZWN0VHlwZXMuam9pbihcIiwgXCIpLFwiKVwiKSk7am8oZT1jbihlLE9vW1wiY3JlYXRlXCIuY29uY2F0KE5yKGUub2JqZWN0VHlwZSksXCJCdXR0b25cIildLFwiU2hhcmUuY3JlYXRlRGVmYXVsdEJ1dHRvblwiKSxcImRlZmF1bHRcIil9LHNlbmREZWZhdWx0OmZ1bmN0aW9uKGUpe2lmKCFlLm9iamVjdFR5cGV8fCF2dChPby5kZWZhdWx0T2JqZWN0VHlwZXMpKGUub2JqZWN0VHlwZSkpdGhyb3cgbmV3IG5uKFwib2JqZWN0VHlwZSBzaG91bGQgYmUgb25lIG9mIChcIi5jb25jYXQoT28uZGVmYXVsdE9iamVjdFR5cGVzLmpvaW4oXCIsIFwiKSxcIilcIikpO1RvKGU9Y24oZSxPb1tcInNlbmRcIi5jb25jYXQoTnIoZS5vYmplY3RUeXBlKSldLFwiU2hhcmUuc2VuZERlZmF1bHRcIiksXCJkZWZhdWx0XCIpfSxjcmVhdGVTY3JhcEJ1dHRvbjpmdW5jdGlvbihlKXtqbyhlPWNuKGUsT28uY3JlYXRlU2NyYXBCdXR0b24sXCJTaGFyZS5jcmVhdGVTY3JhcEJ1dHRvblwiKSxcInNjcmFwXCIpfSxzZW5kU2NyYXA6ZnVuY3Rpb24oZSl7VG8oZT1jbihlLE9vLnNlbmRTY3JhcCxcIlNoYXJlLnNlbmRTY3JhcFwiKSxcInNjcmFwXCIpfSxjcmVhdGVDdXN0b21CdXR0b246ZnVuY3Rpb24oZSl7am8oZT1jbihlLE9vLmNyZWF0ZUN1c3RvbUJ1dHRvbixcIlNoYXJlLmNyZWF0ZUN1c3RvbUJ1dHRvblwiKSxcImN1c3RvbVwiKX0sc2VuZEN1c3RvbTpmdW5jdGlvbihlKXtUbyhlPWNuKGUsT28uc2VuZEN1c3RvbSxcIlNoYXJlLnNlbmRDdXN0b21cIiksXCJjdXN0b21cIil9LGNsZWFudXA6ZnVuY3Rpb24oKXtvbihDbyl9fSksT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsdXBsb2FkSW1hZ2U6ZnVuY3Rpb24oZSl7cmV0dXJuIEpyKFwiL3YyL2FwaS90YWxrL21lc3NhZ2UvaW1hZ2UvdXBsb2FkXCIse2ZpbGU6KGU9Y24oZSxPby51cGxvYWRJbWFnZSxcIlNoYXJlLnVwbG9hZEltYWdlXCIpKS5maWxlfSl9LGRlbGV0ZUltYWdlOmZ1bmN0aW9uKGUpe3JldHVybiBKcihcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL2RlbGV0ZVwiLHtpbWFnZV91cmw6KGU9Y24oZSxPby5kZWxldGVJbWFnZSxcIlNoYXJlLmRlbGV0ZUltYWdlXCIpKS5pbWFnZVVybH0pfSxzY3JhcEltYWdlOmZ1bmN0aW9uKGUpe3JldHVybiBKcihcIi92Mi9hcGkvdGFsay9tZXNzYWdlL2ltYWdlL3NjcmFwXCIse2ltYWdlX3VybDooZT1jbihlLE9vLnNjcmFwSW1hZ2UsXCJTaGFyZS5zY3JhcEltYWdlXCIpKS5pbWFnZVVybH0pfX0pXSksUG89XCJ3aWR0aD0zNTAsIGhlaWdodD01MTBcIjtmdW5jdGlvbiBGbyhlLHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7ci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCIjXCIpO3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7cmV0dXJuIG8uc2V0QXR0cmlidXRlKFwic3JjXCIsdCksby5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLG4pLG8uc2V0QXR0cmlidXRlKFwiYWx0XCIsbiksZS5zdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXMmJm8uc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIsW3QucmVwbGFjZShcIi5wbmdcIixcIl8yWC5wbmcgMnhcIiksdC5yZXBsYWNlKFwiLnBuZ1wiLFwiXzNYLnBuZyAzeFwiKV0uam9pbihcIiwgXCIpKSxyLmFwcGVuZENoaWxkKG8pLHJ9ZnVuY3Rpb24gQm8oZSx0KXtyZXR1cm4gbXQoX3Qoe2FwaV92ZXI6ZSxrYWthb19hZ2VudDpZdCxhcHBfa2V5OmVuKCkscmVmZXJlcjpXdCtsb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2h9LHQmJntsYW5nOnR9KSl9dmFyIEVvPVtcInNtYWxsXCIsXCJsYXJnZVwiXSxVbz1bXCJ5ZWxsb3dcIixcIm1vbm9cIl0sUm89W1wicGNcIixcIm1vYmlsZVwiXSxMbz1bXCJjb25zdWx0XCIsXCJxdWVzdGlvblwiXSxNbz1bXCJrb1wiLFwiZW5cIixcImphXCJdLHpvPXtjcmVhdGVBZGRDaGFubmVsQnV0dG9uOntyZXF1aXJlZDp7Y29udGFpbmVyOmd0KFtaZSxZZV0pLGNoYW5uZWxQdWJsaWNJZDpZZX0sb3B0aW9uYWw6e3NpemU6dnQoRW8pLGxhbmc6dnQoTW8pLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczpRZX0sZGVmYXVsdHM6e3NpemU6RW9bMF0sc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOiExfX0sYWRkQ2hhbm5lbDp7cmVxdWlyZWQ6e2NoYW5uZWxQdWJsaWNJZDpZZX0sb3B0aW9uYWw6e2xhbmc6dnQoTW8pfX0sY3JlYXRlQ2hhdEJ1dHRvbjp7cmVxdWlyZWQ6e2NvbnRhaW5lcjpndChbWmUsWWVdKSxjaGFubmVsUHVibGljSWQ6WWV9LG9wdGlvbmFsOntzaXplOnZ0KEVvKSxjb2xvcjp2dChVbyksc2hhcGU6dnQoUm8pLHRpdGxlOnZ0KExvKSxsYW5nOnZ0KE1vKSxzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6UWV9LGRlZmF1bHRzOntzaXplOkVvWzBdLGNvbG9yOlVvWzBdLHNoYXBlOlJvWzBdLHRpdGxlOkxvWzBdLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczohMX19LGNoYXQ6e3JlcXVpcmVkOntjaGFubmVsUHVibGljSWQ6WWV9LG9wdGlvbmFsOntsYW5nOnZ0KE1vKX19fTtmdW5jdGlvbiBEbyhlKXt2YXIgdD1cIlwiLmNvbmNhdChRdC5jaGFubmVsLFwiL1wiKS5jb25jYXQoZS5jaGFubmVsUHVibGljSWQsXCIvZnJpZW5kXCIpO251bGwhPT1lbigpJiYodCs9XCI/XCIuY29uY2F0KEJvKFwiMS4xXCIsZS5sYW5nKSkpLHBuKHQsXCJjaGFubmVsX2FkZF9zb2NpYWxfcGx1Z2luXCIsUG8pfWZ1bmN0aW9uIHFvKGUpe3ZhciB0PVwiXCIuY29uY2F0KFF0LmNoYW5uZWwsXCIvXCIpLmNvbmNhdChlLmNoYW5uZWxQdWJsaWNJZCxcIi9jaGF0XCIpO251bGwhPT1lbigpJiYodCs9XCI/XCIuY29uY2F0KEJvKFwiMS4xXCIsZS5sYW5nKSkpLHBuKHQsXCJjaGFubmVsX2NoYXRfc29jaWFsX3BsdWdpblwiLFBvKX12YXIgTm89W107dmFyIEtvPXJuKFtPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVBZGRDaGFubmVsQnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PXB0KGUuY29udGFpbmVyKTtpZighdCl0aHJvdyBuZXcgbm4oXCJjb250YWluZXIgaXMgcmVxdWlyZWQgZm9yIENoYW5uZWwuY3JlYXRlQWRkQ2hhbm5lbEJ1dHRvbjogcGFzcyBpbiBlbGVtZW50IG9yIGlkXCIpO2ZuKGUsdCx7Y2hhbm5lbFB1YmxpY0lkOlwiZGF0YS1jaGFubmVsLXB1YmxpYy1pZFwiLHNpemU6XCJkYXRhLXNpemVcIixzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6XCJkYXRhLXN1cHBvcnQtbXVsdGlwbGUtZGVuc2l0aWVzXCJ9KTt2YXIgbj1mdW5jdGlvbihlKXt2YXIgdD1cImZyaWVuZGFkZF9cIi5jb25jYXQoZS5zaXplLFwiX3llbGxvd19yZWN0LnBuZ1wiKTtyZXR1cm5cIlwiLmNvbmNhdChRdC5jaGFubmVsSWNvbixcIi9jaGFubmVsL1wiKS5jb25jYXQodCl9KGU9Y24oZSx6by5jcmVhdGVBZGRDaGFubmVsQnV0dG9uLFwiQ2hhbm5lbC5jcmVhdGVBZGRDaGFubmVsQnV0dG9uXCIpKSxyPUZvKGUsbixcIuy5tOy5tOyYpO2GoSDssYTrhJAg7LaU6rCAIOuyhO2KvFwiKTt0LmFwcGVuZENoaWxkKHIpO3ZhciBvPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxEbyhlKX07ZnQocixcImNsaWNrXCIsbyksTm8ucHVzaCgoZnVuY3Rpb24oKXtodChyLFwiY2xpY2tcIixvKSx0LnJlbW92ZUNoaWxkKHIpfSkpfSxhZGRDaGFubmVsOmZ1bmN0aW9uKGUpe0RvKGU9Y24oZSx6by5hZGRDaGFubmVsLFwiQ2hhbm5lbC5hZGRDaGFubmVsXCIpKX0sY3JlYXRlQ2hhdEJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBDaGFubmVsLmNyZWF0ZUNoYXRCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse2NoYW5uZWxQdWJsaWNJZDpcImRhdGEtY2hhbm5lbC1wdWJsaWMtaWRcIixzaXplOlwiZGF0YS1zaXplXCIsY29sb3I6XCJkYXRhLWNvbG9yXCIsc2hhcGU6XCJkYXRhLXNoYXBlXCIsdGl0bGU6XCJkYXRhLXRpdGxlXCIsc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlwiZGF0YS1zdXBwb3J0LW11bHRpcGxlLWRlbnNpdGllc1wifSk7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIi5jb25jYXQoZS50aXRsZSxcIl9cIikuY29uY2F0KGUuc2l6ZSxcIl9cIikuY29uY2F0KGUuY29sb3IsXCJfXCIpLmNvbmNhdChlLnNoYXBlLFwiLnBuZ1wiKTtyZXR1cm5cIlwiLmNvbmNhdChRdC5jaGFubmVsSWNvbixcIi9jaGFubmVsL1wiKS5jb25jYXQodCl9KGU9Y24oZSx6by5jcmVhdGVDaGF0QnV0dG9uLFwiQ2hhbm5lbC5jcmVhdGVDaGF0QnV0dG9uXCIpKSxyPUZvKGUsbixcIuy5tOy5tOyYpO2GoSDssYTrhJAgMToxIOyxhO2MhSDrsoTtirxcIik7dC5hcHBlbmRDaGlsZChyKTt2YXIgbz1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCkscW8oZSl9O2Z0KHIsXCJjbGlja1wiLG8pLE5vLnB1c2goKGZ1bmN0aW9uKCl7aHQocixcImNsaWNrXCIsbyksdC5yZW1vdmVDaGlsZChyKX0pKX0sY2hhdDpmdW5jdGlvbihlKXtxbyhlPWNuKGUsem8uY2hhdCxcIkNoYW5uZWwuY2hhdFwiKSl9LGNsZWFudXA6ZnVuY3Rpb24oKXtvbihObyl9fSldKSxIbz17Y3JlYXRlQWRkRnJpZW5kQnV0dG9uOntyZXF1aXJlZDp7Y29udGFpbmVyOmd0KFtaZSxZZV0pLHBsdXNGcmllbmRJZDpZZX0sb3B0aW9uYWw6e3NpemU6dnQoW1wic21hbGxcIixcImxhcmdlXCJdKSxjb2xvcjp2dChbXCJ5ZWxsb3dcIixcImJsYWNrXCJdKSxzaGFwZTp2dChbXCJyZWN0XCIsXCJyb3VuZFwiXSksc3VwcG9ydE11bHRpcGxlRGVuc2l0aWVzOlFlfSxkZWZhdWx0czp7c2l6ZTpcInNtYWxsXCIsY29sb3I6XCJ5ZWxsb3dcIixzaGFwZTpcInJlY3RcIixzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6ITF9fSxhZGRGcmllbmQ6e3JlcXVpcmVkOntwbHVzRnJpZW5kSWQ6WWV9fSxjcmVhdGVDaGF0QnV0dG9uOntyZXF1aXJlZDp7Y29udGFpbmVyOmd0KFtaZSxZZV0pLHBsdXNGcmllbmRJZDpZZX0sb3B0aW9uYWw6e3NpemU6dnQoW1wic21hbGxcIixcImxhcmdlXCJdKSxjb2xvcjp2dChbXCJ5ZWxsb3dcIixcIm1vbm9cIl0pLHNoYXBlOnZ0KFtcInBjXCIsXCJtb2JpbGVcIl0pLHRpdGxlOnZ0KFtcImNvbnN1bHRcIixcInF1ZXN0aW9uXCJdKSxzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6UWV9LGRlZmF1bHRzOntzaXplOlwic21hbGxcIixjb2xvcjpcInllbGxvd1wiLHNoYXBlOlwicGNcIix0aXRsZTpcImNvbnN1bHRcIixzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6ITF9fSxjaGF0OntyZXF1aXJlZDp7cGx1c0ZyaWVuZElkOlllfX19O2Z1bmN0aW9uIEpvKCl7Y29uc29sZSYmY29uc29sZS53YXJuKFwiS2FrYW9XYXJuaW5nOiBLYWthby5QbHVzRnJpZW5kIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgS2FrYW8uQ2hhbm5lbCBpbnN0ZWFkLlwiKX1mdW5jdGlvbiBXbyhlKXt2YXIgdD1cIlwiLmNvbmNhdChRdC5jaGFubmVsLFwiL1wiKS5jb25jYXQoZS5wbHVzRnJpZW5kSWQsXCIvZnJpZW5kXCIpO251bGwhPT1lbigpJiYodCs9XCI/XCIuY29uY2F0KEJvKFwiMS4wXCIpKSkscG4odCxcInBsdXNfZnJpZW5kX2FkZF9zb2NpYWxfcGx1Z2luXCIsUG8pfWZ1bmN0aW9uIFhvKGUpe3ZhciB0PVwiXCIuY29uY2F0KFF0LmNoYW5uZWwsXCIvXCIpLmNvbmNhdChlLnBsdXNGcmllbmRJZCxcIi9jaGF0XCIpO251bGwhPT1lbigpJiYodCs9XCI/XCIuY29uY2F0KEJvKFwiMS4wXCIpKSkscG4odCxcInBsdXNfZnJpZW5kX2NoYXRfc29jaWFsX3BsdWdpblwiLFBvKX12YXIgJG89W107dmFyIEdvPXJuKFtPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVBZGRGcmllbmRCdXR0b246ZnVuY3Rpb24oZSl7Sm8oKTt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBQbHVzRnJpZW5kLmNyZWF0ZUFkZEZyaWVuZEJ1dHRvbjogcGFzcyBpbiBlbGVtZW50IG9yIGlkXCIpO2ZuKGUsdCx7cGx1c0ZyaWVuZElkOlwiZGF0YS1wbHVzZnJpZW5kLWlkXCIsc2l6ZTpcImRhdGEtc2l6ZVwiLGNvbG9yOlwiZGF0YS1jb2xvclwiLHNoYXBlOlwiZGF0YS1zaGFwZVwiLHN1cHBvcnRNdWx0aXBsZURlbnNpdGllczpcImRhdGEtc3VwcG9ydC1tdWx0aXBsZS1kZW5zaXRpZXNcIn0pO3ZhciBuPWZ1bmN0aW9uKGUpe3ZhciB0PVwiZnJpZW5kYWRkX1wiLmNvbmNhdChlLnNpemUsXCJfXCIpLmNvbmNhdChlLmNvbG9yLFwiX1wiKS5jb25jYXQoZS5zaGFwZSxcIi5wbmdcIik7cmV0dXJuXCJcIi5jb25jYXQoUXQuY2hhbm5lbEljb24sXCIvcGx1c2ZyaWVuZC9cIikuY29uY2F0KHQpfShlPWNuKGUsSG8uY3JlYXRlQWRkRnJpZW5kQnV0dG9uLFwiUGx1c0ZyaWVuZC5jcmVhdGVBZGRGcmllbmRCdXR0b25cIikpLHI9Rm8oZSxuLFwi7ZSM65+s7Iqk7Lmc6rWsIOy5nOq1rCDstpTqsIAg67KE7Yq8XCIpO3QuYXBwZW5kQ2hpbGQocik7dmFyIG89ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLFdvKGUpfTtmdChyLFwiY2xpY2tcIixvKSwkby5wdXNoKChmdW5jdGlvbigpe2h0KHIsXCJjbGlja1wiLG8pLHQucmVtb3ZlQ2hpbGQocil9KSl9LGFkZEZyaWVuZDpmdW5jdGlvbihlKXtKbygpLFdvKGU9Y24oZSxIby5hZGRGcmllbmQsXCJQbHVzRnJpZW5kLmFkZEZyaWVuZFwiKSl9LGNyZWF0ZUNoYXRCdXR0b246ZnVuY3Rpb24oZSl7Sm8oKTt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBQbHVzRnJpZW5kLmNyZWF0ZUNoYXRCdXR0b246IHBhc3MgaW4gZWxlbWVudCBvciBpZFwiKTtmbihlLHQse3BsdXNGcmllbmRJZDpcImRhdGEtcGx1c2ZyaWVuZC1pZFwiLHNpemU6XCJkYXRhLXNpemVcIixjb2xvcjpcImRhdGEtY29sb3JcIixzaGFwZTpcImRhdGEtc2hhcGVcIix0aXRsZTpcImRhdGEtdGl0bGVcIixzdXBwb3J0TXVsdGlwbGVEZW5zaXRpZXM6XCJkYXRhLXN1cHBvcnQtbXVsdGlwbGUtZGVuc2l0aWVzXCJ9KTt2YXIgbj1mdW5jdGlvbihlKXt2YXIgdD1cIlwiLmNvbmNhdChlLnRpdGxlLFwiX1wiKS5jb25jYXQoZS5zaXplLFwiX1wiKS5jb25jYXQoZS5jb2xvcixcIl9cIikuY29uY2F0KGUuc2hhcGUsXCIucG5nXCIpO3JldHVyblwiXCIuY29uY2F0KFF0LmNoYW5uZWxJY29uLFwiL3BsdXNmcmllbmQvXCIpLmNvbmNhdCh0KX0oZT1jbihlLEhvLmNyZWF0ZUNoYXRCdXR0b24sXCJQbHVzRnJpZW5kLmNyZWF0ZUNoYXRCdXR0b25cIikpLHI9Rm8oZSxuLFwi7ZSM65+s7Iqk7Lmc6rWsIDE6MSDssYTtjIUg67KE7Yq8XCIpO3QuYXBwZW5kQ2hpbGQocik7dmFyIG89ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLFhvKGUpfTtmdChyLFwiY2xpY2tcIixvKSwkby5wdXNoKChmdW5jdGlvbigpe2h0KHIsXCJjbGlja1wiLG8pLHQucmVtb3ZlQ2hpbGQocil9KSl9LGNoYXQ6ZnVuY3Rpb24oZSl7Sm8oKSxYbyhlPWNuKGUsSG8uY2hhdCxcIlBsdXNGcmllbmQuY2hhdFwiKSl9LGNsZWFudXA6ZnVuY3Rpb24oKXtvbigkbyl9fSldKSxWbz17cmVxdWlyZWQ6e3RpdGxlOlllfSxvcHRpb25hbDp7ZGVzYzpZZSxuYW1lOlllLGltYWdlczpmLHR5cGU6WWV9LGRlZmF1bHRzOnt0eXBlOlwid2Vic2l0ZVwifSxhZnRlcjpmdW5jdGlvbihlKXtlLmltYWdlcyYmKGUuaW1hZ2V1cmw9ZS5pbWFnZXMsZGVsZXRlIGUuaW1hZ2VzKX19LFlvPXtjcmVhdGVTaGFyZUJ1dHRvbjp7cmVxdWlyZWQ6e2NvbnRhaW5lcjpndChbWmUsWWVdKX0sb3B0aW9uYWw6e3VybDpZZSx0ZXh0OlllfSxkZWZhdWx0czp7dXJsOmxvY2F0aW9uLmhyZWZ9fSxzaGFyZTp7b3B0aW9uYWw6e3VybDpZZSx0ZXh0OlllfSxkZWZhdWx0czp7dXJsOmxvY2F0aW9uLmhyZWZ9fSxvcGVuOntvcHRpb25hbDp7dXJsOlllLHRleHQ6WWUsdXJsSW5mbzpmdW5jdGlvbihlKXtyZXR1cm4gcChlKSYmISFjbihlLFZvLFwiU3Rvcnkub3BlblwiKX0saW5zdGFsbDpRZX0sZGVmYXVsdHM6e3VybDpsb2NhdGlvbi5ocmVmLGluc3RhbGw6ITF9fSxjcmVhdGVGb2xsb3dCdXR0b246e3JlcXVpcmVkOntjb250YWluZXI6Z3QoW1plLFllXSksaWQ6WWV9LG9wdGlvbmFsOntzaG93Rm9sbG93ZXJDb3VudDpRZSx0eXBlOnZ0KFtcImhvcml6b250YWxcIixcInZlcnRpY2FsXCJdKX0sZGVmYXVsdHM6e3Nob3dGb2xsb3dlckNvdW50OiEwLHR5cGU6XCJob3Jpem9udGFsXCJ9LGFmdGVyOmZ1bmN0aW9uKGUpe1wiQFwiIT09ZS5pZFswXSYmKGUuaWQ9XCJAXCIuY29uY2F0KGUuaWQpKX19fTtmdW5jdGlvbiBRbyhlKXt2YXIgdD1SZSh7dXJsOmUudXJsfSxlaSgpKTtlLnRleHQmJih0LnRleHQ9ZS50ZXh0KSxwbihcIlwiLmNvbmNhdChRdC5zdG9yeVNoYXJlLFwiP1wiKS5jb25jYXQobXQodCkpLFwia2FrYW9zdG9yeV9zb2NpYWxfcGx1Z2luXCIsXCJ3aWR0aD02NzAsIGhlaWdodD04MDAsIHNjcm9sbGJhcnM9eWVzXCIpfXZhciBabz0wO2Z1bmN0aW9uIGVpKCl7dmFyIGU9e2tha2FvX2FnZW50Oll0fTtyZXR1cm4gbnVsbCE9PWVuKCkmJihlLmFwcF9rZXk9ZW4oKSksZX12YXIgdGk9W107dmFyIG5pPXJuKFtPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVTaGFyZUJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1wdChlLmNvbnRhaW5lcik7aWYoIXQpdGhyb3cgbmV3IG5uKFwiY29udGFpbmVyIGlzIHJlcXVpcmVkIGZvciBTdG9yeS5jcmVhdGVTaGFyZUJ1dHRvbjogcGFzcyBpbiBlbGVtZW50IG9yIGlkXCIpO2ZuKGUsdCx7dXJsOlwiZGF0YS11cmxcIn0pLGU9Y24oZSxZby5jcmVhdGVTaGFyZUJ1dHRvbixcIlN0b3J5LmNyZWF0ZVNoYXJlQnV0dG9uXCIpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCIjXCIpO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7cmV0dXJuIHIuc2V0QXR0cmlidXRlKFwic3JjXCIsZSksci5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQpLHIuc2V0QXR0cmlidXRlKFwiYWx0XCIsdCksbi5hcHBlbmRDaGlsZChyKSxufShRdC5zdG9yeUljb24sXCLsubTsubTsmKTsiqTthqDrpqwg7Ju5IOqzteycoCDrsoTtirxcIik7dC5hcHBlbmRDaGlsZChuKTt2YXIgcj1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksUW8oZSl9O2Z0KG4sXCJjbGlja1wiLHIpLHRpLnB1c2goKGZ1bmN0aW9uKCl7aHQobixcImNsaWNrXCIsciksdC5yZW1vdmVDaGlsZChuKX0pKX0sc2hhcmU6ZnVuY3Rpb24oZSl7UW8oZT1jbihlLFlvLnNoYXJlLFwiU3Rvcnkuc2hhcmVcIikpfSxvcGVuOmZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUpe3ZhciB0PWxvY2F0aW9uLmhvc3RuYW1lfHxcIlwiLG49UmUoe2FwaXZlcjpcIjEuMFwiLGFwcHZlcjpHdCxhcHBpZDp0LGFwcG5hbWU6dCxwb3N0OmUudGV4dD9cIlwiLmNvbmNhdChlLnRleHQsXCJcXG5cIikuY29uY2F0KGUudXJsKTplLnVybH0sZWkoKSk7ZS51cmxJbmZvJiYobi51cmxpbmZvPUpTT04uc3RyaW5naWZ5KGUudXJsSW5mbyksbi5hcHBuYW1lPWUudXJsSW5mby5uYW1lfHxuLmFwcG5hbWUpO3JldHVyblwiXCIuY29uY2F0KFF0LnN0b3J5UG9zdFNjaGVtZSxcIj9cIikuY29uY2F0KG10KG4pKX0oZT1jbihlLFlvLm9wZW4sXCJTdG9yeS5vcGVuXCIpKSxuPXt1cmxTY2hlbWU6dCxpbnRlbnRVUkk6W1wiaW50ZW50OlwiLmNvbmNhdCh0LFwiI0ludGVudFwiKSxcIlwiLmNvbmNhdChlLmluc3RhbGw/XCJwYWNrYWdlPWNvbS5rYWthby5zdG9yeTtcIjpcIlwiLFwiZW5kO1wiKV0uam9pbihcIjtcIiksYXBwTmFtZTpcIktha2FvU3RvcnlcIixzdG9yZVVSTDp1bihcImNvbS5rYWthby5zdG9yeVwiLFwiNDg2MjQ0NjAxXCIpLG9uVW5zdXBwb3J0ZWRFbnZpcm9ubWVudDpmdW5jdGlvbigpe2UuZmFpbCYmZS5mYWlsKCl9fTt0cnl7c28obil9Y2F0Y2goZSl7fX0sY3JlYXRlRm9sbG93QnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PXB0KGUuY29udGFpbmVyKTtpZighdCl0aHJvdyBuZXcgbm4oXCJjb250YWluZXIgaXMgcmVxdWlyZWQgZm9yIFN0b3J5LmNyZWF0ZUZvbGxvd0J1dHRvbjogcGFzcyBpbiBlbGVtZW50IG9yIGlkXCIpO2ZuKGUsdCx7aWQ6XCJkYXRhLWlkXCIsc2hvd0ZvbGxvd2VyQ291bnQ6XCJkYXRhLXNob3ctZm9sbG93ZXItY291bnRcIix0eXBlOlwiZGF0YS10eXBlXCJ9KTt2YXIgbj1mdW5jdGlvbihlKXt2YXIgdD1abysrLG49ZS5zaG93Rm9sbG93ZXJDb3VudCYmXCJob3Jpem9udGFsXCI9PT1lLnR5cGU/ODU6NTkscj1lLnNob3dGb2xsb3dlckNvdW50JiZcInZlcnRpY2FsXCI9PT1lLnR5cGU/NDY6MjAsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO28uc3JjPWZ1bmN0aW9uKGUsdCl7dmFyIG49UmUoe2lkOmUuaWQsdHlwZTplLnR5cGUsaGlkZUZvbGxvd2VyOiFlLnNob3dGb2xsb3dlckNvdW50LGZyYW1lSWQ6dH0sZWkoKSk7cmV0dXJuXCJcIi5jb25jYXQoUXQuc3RvcnlDaGFubmVsRm9sbG93LFwiP1wiKS5jb25jYXQobXQobikpfShlLHQpLG8uc2V0QXR0cmlidXRlKFwiZnJhbWVib3JkZXJcIixcIjBcIiksby5zZXRBdHRyaWJ1dGUoXCJtYXJnaW53aWR0aFwiLFwiMFwiKSxvLnNldEF0dHJpYnV0ZShcIm1hcmdpbmhlaWdodFwiLFwiMFwiKSxvLnNldEF0dHJpYnV0ZShcInNjcm9sbGluZ1wiLFwibm9cIiksby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwid2lkdGg6XCIuY29uY2F0KG4sXCJweDsgaGVpZ2h0OlwiKS5jb25jYXQocixcInB4O1wiKSk7dmFyIGk9ZnVuY3Rpb24oZSl7aWYoZS5kYXRhJiYvXFwua2FrYW9cXC5jb20kLy50ZXN0KGUub3JpZ2luKSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSl7dmFyIGk9UHQoYXQoZS5kYXRhLnNwbGl0KFwiLFwiKSwoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfSkpLDMpLGE9aVswXSxjPWlbMV0scz1pWzJdO2E9PT10JiYobiE9PWMmJihvLnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KGMsXCJweFwiKSksciE9PXMmJihvLnN0eWxlLmhlaWdodD1cIlwiLmNvbmNhdChzLFwicHhcIikpKX19O3JldHVybntpZnJhbWUkOm8sbWVzc2FnZUhhbmRsZXI6aX19KGU9Y24oZSxZby5jcmVhdGVGb2xsb3dCdXR0b24sXCJTdG9yeS5jcmVhdGVGb2xsb3dCdXR0b25cIikpLHI9bi5pZnJhbWUkLG89bi5tZXNzYWdlSGFuZGxlcjt0LmFwcGVuZENoaWxkKHIpLGZ0KHdpbmRvdyxcIm1lc3NhZ2VcIixvKSx0aS5wdXNoKChmdW5jdGlvbigpe2h0KHdpbmRvdyxcIm1lc3NhZ2VcIixvKSx0LnJlbW92ZUNoaWxkKHIpfSkpfSxjbGVhbnVwOmZ1bmN0aW9uKCl7b24odGkpfX0pXSkscmk9W1wid2dzODRcIixcImthdGVjXCJdLG9pPXtyZXF1aXJlZDp7bmFtZTpZZSx4OnR0LHk6dHR9LG9wdGlvbmFsOntycGZsYWc6WWUsY2lkOlllfX0saWk9e3N0YXJ0OntyZXF1aXJlZDp7bmFtZTpZZSx4OnR0LHk6dHR9LG9wdGlvbmFsOntjb29yZFR5cGU6dnQocmkpLHZlaGljbGVUeXBlOnZ0KFsxLDIsMyw0LDUsNiw3XSkscnBPcHRpb246dnQoWzEsMiwzLDQsNSw2LDgsMTAwXSkscm91dGVJbmZvOlFlLHNYOnR0LHNZOnR0LHNBbmdsZTp0dCxyZXR1cm5Vcmk6WWUscnBmbGFnOlllLGNpZDpZZSxndWlkZUlkOnR0LHZpYVBvaW50czpmdW5jdGlvbihlKXtpZihmKGUpKXtpZihlLmxlbmd0aD4zKXRocm93IG5ldyBubihcIkludmFsaWQgcGFyYW1ldGVyIGtleXM6IHZpYSBwb2ludHMgc2hvdWxkIG5vdCBiZSBleGNlZWQgMy4gYXQgTmF2aS5zdGFydFwiKTtyZXR1cm4gVmUoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGNuKGUsb2ksXCJOYXZpLnN0YXJ0XCIpfSkpLCEwfXJldHVybiExfX0sZGVmYXVsdHM6e2Nvb3JkVHlwZTpcImthdGVjXCIsdmVoaWNsZVR5cGU6MSxycE9wdGlvbjoxMDAscm91dGVJbmZvOiExfX0sc2hhcmU6e3JlcXVpcmVkOntuYW1lOlllLHg6dHQseTp0dH0sb3B0aW9uYWw6e2Nvb3JkVHlwZTp2dChyaSkscnBmbGFnOlllLGNpZDpZZSxndWlkZUlkOnR0fSxkZWZhdWx0czp7Y29vcmRUeXBlOlwia2F0ZWNcIn19fTtmdW5jdGlvbiBhaSgpe3JldHVybnthcHBrZXk6ZW4oKSxhcGl2ZXI6XCIxLjBcIixleHRyYXM6e0tBOll0fX19ZnVuY3Rpb24gY2koZSx0KXt2YXIgbj17dXJsU2NoZW1lOmUsaW50ZW50VVJJOltcImludGVudDpcIi5jb25jYXQoZSxcIiNJbnRlbnRcIiksXCJTLmJyb3dzZXJfZmFsbGJhY2tfdXJsPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQodCkpLFwiZW5kO1wiXS5qb2luKFwiO1wiKSxzdG9yZVVSTDp0LHVuaXZlcnNhbExpbms6dH07dHJ5e3NvKG4pfWNhdGNoKGUpe319dmFyIHNpPXJuKFtPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxzdGFydDpmdW5jdGlvbihlKXt2YXIgdD1tdChmdW5jdGlvbihlKXt2YXIgdD17bmFtZTplLm5hbWUseDplLngseTplLnkscnBmbGFnOmUucnBmbGFnLGNpZDplLmNpZCxndWlkZV9pZDplLmd1aWRlSWR9LG49e2Nvb3JkX3R5cGU6ZS5jb29yZFR5cGUsdmVoaWNsZV90eXBlOmUudmVoaWNsZVR5cGUscnBvcHRpb246ZS5ycE9wdGlvbixyb3V0ZV9pbmZvOmUucm91dGVJbmZvLHNfeDplLnNYLHNfeTplLnNZLHNfYW5nbGU6ZS5zQW5nbGUscmV0dXJuX3VyaTplLnJldHVyblVyaX07cmV0dXJuIF90KF90KHt9LGFpKCkpLHt9LHtwYXJhbTp7ZGVzdGluYXRpb246dCxvcHRpb246bix2aWFfbGlzdDplLnZpYVBvaW50c319KX0oZT1jbihlLGlpLnN0YXJ0LFwiTmF2aS5zdGFydFwiKSkpO2NpKFwiXCIuY29uY2F0KFF0Lm5hdmlTY2hlbWUsXCI/XCIpLmNvbmNhdCh0KSxcIlwiLmNvbmNhdChRdC5uYXZpRmFsbGJhY2ssXCI/XCIpLmNvbmNhdCh0KSl9LHNoYXJlOmZ1bmN0aW9uKGUpe3ZhciB0PW10KGZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOmUubmFtZSx4OmUueCx5OmUueSxycGZsYWc6ZS5ycGZsYWcsY2lkOmUuY2lkLGd1aWRlX2lkOmUuZ3VpZGVJZH0sbj17cm91dGVfaW5mbzohMCxjb29yZF90eXBlOmUuY29vcmRUeXBlfTtyZXR1cm4gX3QoX3Qoe30sYWkoKSkse30se3BhcmFtOntkZXN0aW5hdGlvbjp0LG9wdGlvbjpufX0pfShlPWNuKGUsaWkuc2hhcmUsXCJOYXZpLnNoYXJlXCIpKSk7Y2koXCJcIi5jb25jYXQoUXQubmF2aVNjaGVtZSxcIj9cIikuY29uY2F0KHQpLFwiXCIuY29uY2F0KFF0Lm5hdmlGYWxsYmFjayxcIj9cIikuY29uY2F0KHQpKX19KV0pO2Z1bmN0aW9uIHVpKGUpe3JldHVybiBldChlKSYmZT4wJiZlPDEwMX1mdW5jdGlvbiBsaShlKXtpZihlLm1heFBpY2thYmxlQ291bnQ8ZS5taW5QaWNrYWJsZUNvdW50KXRocm93IG5ldyBubignXCJtaW5QaWNrYWJsZUNvdW50XCIgc2hvdWxkIG5vdCBsYXJnZXIgdGhhbiBcIm1heFBpY2thYmxlQ291bnRcIicpfWZ1bmN0aW9uIGRpKGUpe3ZhciB0PXtyZXF1aXJlZDp7cmVhc29uOnZ0KFtcIm1zZ0Jsb2NrZWRcIixcInJlZ2lzdGVyZWRcIixcInVucmVnaXN0ZXJlZFwiLFwibm90RnJpZW5kXCIsXCJjdXN0b21cIl0pfSxvcHRpb25hbDp7bWVzc2FnZTpZZSx1dWlkczpmfSxhZnRlcjpmdW5jdGlvbihlKXtpZighKFwiY3VzdG9tXCIhPT1lLnJlYXNvbnx8ZS5tZXNzYWdlJiZlLnV1aWRzKSl0aHJvdyBuZXcgbm4oJ1wibWVzc2FnZVwiIGFuZCBcInV1aWRzXCIgbXVzdCBiZSBzZXQgZm9yIFwiY3VzdG9tXCIgb3B0aW9uIGluIGRpc2FibGVTZWxlY3RPcHRpb24nKX19O3JldHVybiBmKGUpJiZjdChlLChmdW5jdGlvbihlKXtyZXR1cm4gcChlKSYmISFjbihlLHQsXCJkaXNhYmxlU2VsZWN0T3B0aW9uXCIpfSkpfWZ1bmN0aW9uIHBpKGUpe2lmKFwiY2hhdE1lbWJlclwiPT09ZS5zZWxlY3Rpb25UeXBlKXt2YXIgdD1lLmNoYXRGaWx0ZXJzO2lmKHQuaW5kZXhPZihcIm9wZW5cIik+LTEpdGhyb3cgbmV3IG5uKCdcIm9wZW5cIiBpcyBub3QgYWxsb3dlZCBpbiBcImNoYXRGaWx0ZXJzXCInKTtpZigodC5pbmRleE9mKFwiZGlyZWN0XCIpPi0xfHx0LmluZGV4T2YoXCJtdWx0aVwiKT4tMSkmJi0xPT09dC5pbmRleE9mKFwicmVndWxhclwiKSl0aHJvdyBuZXcgbm4oJ1wicmVndWxhclwiIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBcImNoYXRGaWx0ZXJzXCInKX19dmFyIGZpPVtcIm5vbmVcIixcImludml0YWJsZVwiLFwicmVnaXN0ZXJlZFwiXSxoaT1bXCJ0YWxrXCIsXCJzdG9yeVwiLFwidGFsa3N0b3J5XCJdLG1pPVtcImNoYXRcIixcImNoYXRNZW1iZXJcIl0sdmk9W1wicmVndWxhclwiLFwiZGlyZWN0XCIsXCJtdWx0aVwiLFwib3BlblwiXSxnaT1bXCJhbGxcIixcImlvc1wiLFwiYW5kcm9pZFwiXSx5aT17cmV0dXJuVXJsOlllLHN1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmosZnJpZW5kRmlsdGVyOnZ0KGZpKSxzZXJ2aWNlVHlwZUZpbHRlcjp2dChoaSksdGl0bGU6WWUsZW5hYmxlU2VhcmNoOlFlLGNvdW50cnlDb2RlRmlsdGVyczpmLHVzaW5nT3NGaWx0ZXI6dnQoZ2kpLHNob3dNeVByb2ZpbGU6UWUsc2hvd0Zhdm9yaXRlOlFlLGRpc2FibGVTZWxlY3RPcHRpb25zOmRpLGRpc3BsYXlBbGxQcm9maWxlOlFlLGVuYWJsZUJhY2tCdXR0b246UWV9LGJpPXtzdWNjZXNzOmx0LGZhaWw6bHQsYWx3YXlzOmx0fSxfaT17b3B0aW9uYWw6e2ZyaWVuZEZpbHRlcjp2dChmaSksc2VydmljZVR5cGVGaWx0ZXI6dnQoaGkpLGNvdW50cnlDb2RlRmlsdGVyczpmLHVzaW5nT3NGaWx0ZXI6dnQoZ2kpLHNob3dNeVByb2ZpbGU6UWUsc2hvd0Zhdm9yaXRlOlFlLHNob3dQaWNrZWRGcmllbmQ6UWV9fSxraT17b3B0aW9uYWw6e3NlbGVjdGlvblR5cGU6dnQobWkpLGNoYXRGaWx0ZXJzOmZ1bmN0aW9uKGUpe3JldHVybiBmKGUpJiZjdChlLChmdW5jdGlvbihlKXtyZXR1cm4gdnQodmkpKGUpfSkpfX0sZGVmYXVsdHM6e3NlbGVjdGlvblR5cGU6bWlbMF0sY2hhdEZpbHRlcnM6W3ZpWzBdXX0sYWZ0ZXI6cGl9LHdpPXtzZWxlY3RGcmllbmQ6e29wdGlvbmFsOnlpLGRlZmF1bHRzOmJpfSxzZWxlY3RGcmllbmRzOntvcHRpb25hbDpfdChfdCh7fSx5aSkse30se3Nob3dQaWNrZWRGcmllbmQ6UWUsbWF4UGlja2FibGVDb3VudDp1aSxtaW5QaWNrYWJsZUNvdW50OnVpfSksZGVmYXVsdHM6YmksYWZ0ZXI6bGl9LHNlbGVjdENoYXQ6e29wdGlvbmFsOntyZXR1cm5Vcmw6WWUsc3VjY2VzczpqLGZhaWw6aixhbHdheXM6aixzZWxlY3Rpb25UeXBlOnZ0KG1pKSxjaGF0RmlsdGVyczpmdW5jdGlvbihlKXtyZXR1cm4gZihlKSYmY3QoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIHZ0KHZpKShlKX0pKX0sdGl0bGU6WWUsZW5hYmxlU2VhcmNoOlFlLGRpc2FibGVTZWxlY3RPcHRpb25zOmRpLGRpc3BsYXlBbGxQcm9maWxlOlFlLG1heFBpY2thYmxlQ291bnQ6dWksbWluUGlja2FibGVDb3VudDp1aSxlbmFibGVCYWNrQnV0dG9uOlFlfSxkZWZhdWx0czp7c3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdCxzZWxlY3Rpb25UeXBlOm1pWzBdLGNoYXRGaWx0ZXJzOlt2aVswXV19LGFmdGVyOmZ1bmN0aW9uKGUpe2xpKGUpLHBpKGUpfX0sc2VsZWN0OntvcHRpb25hbDp7cmV0dXJuVXJsOlllLHN1Y2Nlc3M6aixmYWlsOmosYWx3YXlzOmosdGl0bGU6WWUsZW5hYmxlU2VhcmNoOlFlLGRpc2FibGVTZWxlY3RPcHRpb25zOmRpLGRpc3BsYXlBbGxQcm9maWxlOlFlLG1heFBpY2thYmxlQ291bnQ6dWksbWluUGlja2FibGVDb3VudDp1aSxlbmFibGVCYWNrQnV0dG9uOlFlLGZyaWVuZHNQYXJhbXM6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJiEhY24oZSxfaSxcIlBpY2tlci5zZWxlY3RcIil9LGNoYXRQYXJhbXM6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSkmJiEhY24oZSxraSxcIlBpY2tlci5zZWxlY3RcIil9fSxkZWZhdWx0czp7c3VjY2VzczpsdCxmYWlsOmx0LGFsd2F5czpsdH0sYWZ0ZXI6bGl9fTtmdW5jdGlvbiBTaShlLHQsbil7amkoKTt2YXIgcj1zbigpLG89X3QoX3Qoe3RyYW5zSWQ6cixhcHBLZXk6ZW4oKSxrYTpZdH0sR24oKSYme3Rva2VuOkduKCl9KSxmdW5jdGlvbihlKXtbXCJjb3VudHJ5Q29kZUZpbHRlcnNcIixcImNoYXRGaWx0ZXJzXCJdLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZvaWQgMCE9PWVbdF0mJihlW3RdPWVbdF0uam9pbihcIixcIikpfSkpLGUuZGlzYWJsZVNlbGVjdE9wdGlvbnMmJihlLmRpc2FibGVTZWxlY3RPcHRpb25zPUpTT04uc3RyaW5naWZ5KGUuZGlzYWJsZVNlbGVjdE9wdGlvbnMpKTtyZXR1cm4gZX0odCkpLGk9UXQucGlja2VyRG9tYWluK247ZS5yZXR1cm5Vcmw/KG8ucmV0dXJuVXJsPWUucmV0dXJuVXJsLGduKG8saSkpOihobihyLFwiXCIuY29uY2F0KFF0LnBpY2tlckRvbWFpbixcIi9wcm94eT90cmFuc0lkPVwiKS5jb25jYXQociksT2kpLG1uKGUsUXQucGlja2VyRG9tYWluLE9pKSx2bihvLHt1cmw6aSxwb3B1cE5hbWU6XCJmcmllbmRfcGlja2VyXCIscG9wdXBGZWF0dXJlczpcImxvY2F0aW9uPW5vLHJlc2l6YWJsZT1ubyxzdGF0dXM9bm8sc2Nyb2xsYmFycz1ubyx3aWR0aD00NjAsaGVpZ2h0PTYwOFwifSkpfWZ1bmN0aW9uIHhpKGUpe3ZhciB0PV90KHt9LGUpO3JldHVybltcInJldHVyblVybFwiLFwic3VjY2Vzc1wiLFwiZmFpbFwiLFwiYWx3YXlzXCIsXCJmcmllbmRzUGFyYW1zXCIsXCJjaGF0UGFyYW1zXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3RbZV0mJmRlbGV0ZSB0W2VdfSkpLHR9dmFyIE9pPVtdO2Z1bmN0aW9uIGppKCl7b24oT2kpfXZhciBBaT1ybihbT2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsc2VsZWN0RnJpZW5kczpmdW5jdGlvbihlKXtTaShlPWNuKGUsd2kuc2VsZWN0RnJpZW5kcyxcIlBpY2tlci5zZWxlY3RGcmllbmRzXCIpLHhpKGUpLFwiL3NlbGVjdC9tdWx0aXBsZVwiKX0sc2VsZWN0RnJpZW5kOmZ1bmN0aW9uKGUpe1NpKGU9Y24oZSx3aS5zZWxlY3RGcmllbmQsXCJQaWNrZXIuc2VsZWN0RnJpZW5kXCIpLHhpKGUpLFwiL3NlbGVjdC9zaW5nbGVcIil9LHNlbGVjdENoYXQ6ZnVuY3Rpb24oZSl7U2koZT1jbihlLHdpLnNlbGVjdENoYXQsXCJQaWNrZXIuc2VsZWN0Q2hhdFwiKSx4aShlKSxcIi9jaGF0L3NlbGVjdFwiKX0sc2VsZWN0OmZ1bmN0aW9uKGUpe1NpKGU9Y24oZSx3aS5zZWxlY3QsXCJQaWNrZXIuc2VsZWN0XCIpLF90KF90KF90KHt9LHhpKGUpKSxlLmZyaWVuZHNQYXJhbXMpLGUuY2hhdFBhcmFtcyksXCIvdGFiL3NlbGVjdFwiKX0sY2xlYW51cDpqaX0pXSk7ZnVuY3Rpb24gVGkoKXtyZXR1cm4gbnVsbCE9PWVuKCl9XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiYod2luZG93Lktha2FvPWUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5rYWthb0FzeW5jSW5pdCYmc2V0VGltZW91dCgoZnVuY3Rpb24oKXt3aW5kb3cua2FrYW9Bc3luY0luaXQoKX0pLDApLGUuVkVSU0lPTj1HdCxlLmNsZWFudXA9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO09iamVjdC5rZXlzKHRoaXMpLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHAoZVt0XSl9KSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGVbdF0uY2xlYW51cCgpfSkpLHRuKG51bGwpfSxlLmluaXQ9ZnVuY3Rpb24oZSl7aWYoWHQuYnJvd3Nlci5tc2llJiZYdC5icm93c2VyLnZlcnNpb24ubWFqb3I8OSl0aHJvdyBuZXcgbm4oXCJLYWthby5pbml0OiBVbnN1cHBvcnRlZCBicm93c2VyXCIpO2lmKFRpKCkpdGhyb3cgbmV3IG5uKFwiS2FrYW8uaW5pdDogQWxyZWFkeSBpbml0aWFsaXplZFwiKTtpZighWWUoZSkpdGhyb3cgbmV3IG5uKFwiS2FrYW8uaW5pdDogQXBwIGtleSBtdXN0IGJlIHByb3ZpZGVkXCIpO3RuKGUpLHRoaXMuQXV0aD1Ecix0aGlzLkFQST1xcix0aGlzLlNoYXJlPUlvLHRoaXMuTGluaz1Jbyx0aGlzLkNoYW5uZWw9S28sdGhpcy5QbHVzRnJpZW5kPUdvLHRoaXMuU3Rvcnk9bmksdGhpcy5OYXZpPXNpLHRoaXMuUGlja2VyPUFpfSxlLmlzSW5pdGlhbGl6ZWQ9VGksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSk7IiwiaW1wb3J0IHtLYUthb30gZnJvbSAnLi4vc2VydmljZXMva2FrYW8ubWluLmpzJzsgXHJcblxyXG5LYUthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpOyAvLyDsgqzsmqntlZjroKTripQg7JWx7J2YIEphdmFTY3JpcHQg7YKkIOyeheugpVxyXG5cclxuZnVuY3Rpb24ga2FrYW9TaGFyZSh7J2FkZHInOmFkZHIsICd0aXRsZSc6dGl0bGUsICdkZXMnOmRlcywgJ2ltZyc6aW1nLCAnbGlrZXMnOmxpa2VzfSkge1xyXG4gICAgS2FrYW8uU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4gICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICBhZGRyZXNzVGl0bGU6IHRpdGxlLFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpkZXMsXHJcbiAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgIGxpbms6IHtcclxuICAgICAgICAvLyBb64K0IOyVoO2UjOumrOy8gOydtOyFmF0gPiBb7ZSM656r7Y+8XSDsl5DshJwg65Ox66Gd7ZWcIOyCrOydtO2KuCDrj4TrqZTsnbjqs7wg7J287LmY7ZW07JW8IO2VqFxyXG4gICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgbGlrZUNvdW50OiBsaWtlcyxcclxuICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4gICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQga2FrYW9TaGFyZTsiXSwic291cmNlUm9vdCI6IiJ9