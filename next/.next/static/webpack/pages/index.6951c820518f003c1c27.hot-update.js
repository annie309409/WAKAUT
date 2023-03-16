webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KakaoShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoShare.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function KakaoShare() {
  _s();

  var Kakao = {}; // useEffect(() => {
  //     window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
  //     console.log(Kakao.isInitialized());
  //   }, []);

  if (true) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      Kakao = window.Kakao;
      Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    }, []);
  }

  function share(_ref) {
    var addr = _ref.addr,
        title = _ref.title,
        des = _ref.des,
        img = _ref.img,
        likes = _ref.likes;
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: function onClick() {
      share({
        'addr': 'test',
        'title': 'test',
        'des': 'test',
        'img': 'test',
        'likes': 'test'
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "\uD14C\uC2A4\uD2B8\uCE74\uCE74\uC624"));
}

_s(KakaoShare, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = KakaoShare;

var _c;

$RefreshReg$(_c, "KakaoShare");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJLYWthb1NoYXJlIiwiS2FrYW8iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbml0Iiwic2hhcmUiLCJhZGRyIiwidGl0bGUiLCJkZXMiLCJpbWciLCJsaWtlcyIsIlNoYXJlIiwic2VuZERlZmF1bHQiLCJvYmplY3RUeXBlIiwiYWRkcmVzcyIsImFkZHJlc3NUaXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwibGluayIsIm1vYmlsZVdlYlVybCIsIndlYlVybCIsInNvY2lhbCIsImxpa2VDb3VudCIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsR0FBcUI7QUFBQTs7QUFDaEMsTUFBSUMsS0FBSyxHQUFHLEVBQVosQ0FEZ0MsQ0FFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBbUM7QUFDL0JDLDJEQUFTLENBQUMsWUFBTTtBQUNaRCxXQUFLLEdBQUdFLE1BQU0sQ0FBQ0YsS0FBZjtBQUNBQSxXQUFLLENBQUNHLElBQU4sQ0FBVyxrQ0FBWDtBQUNELEtBSE0sRUFHSixFQUhJLENBQVQ7QUFJSDs7QUFDRCxXQUFTQyxLQUFULE9BQThDO0FBQUEsUUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLFFBQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxRQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsUUFBWkMsR0FBWSxRQUFaQSxHQUFZO0FBQUEsUUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBQzFDVCxTQUFLLENBQUNVLEtBQU4sQ0FBWUMsV0FBWixDQUF3QjtBQUN4QkMsZ0JBQVUsRUFBRSxVQURZO0FBRXhCQyxhQUFPLEVBQUVSLElBRmU7QUFHeEJTLGtCQUFZLEVBQUVSLEtBSFU7QUFJeEJTLGFBQU8sRUFBRTtBQUNMVCxhQUFLLEVBQUVBLEtBREY7QUFFTFUsbUJBQVcsRUFBQ1QsR0FGUDtBQUdMVSxnQkFBUSxFQUFDVCxHQUhKO0FBSUxVLFlBQUksRUFBRTtBQUNOO0FBQ0FDLHNCQUFZLEVBQUUsd0JBRlI7QUFHTkMsZ0JBQU0sRUFBRTtBQUhGO0FBSkQsT0FKZTtBQWN4QkMsWUFBTSxFQUFFO0FBQ0pDLGlCQUFTLEVBQUViLEtBRFAsQ0FFSjtBQUNBOztBQUhJLE9BZGdCO0FBbUJ4QmMsYUFBTyxFQUFFLENBQ0w7QUFDQWpCLGFBQUssRUFBRSxRQURQO0FBRUFZLFlBQUksRUFBRTtBQUNGQyxzQkFBWSxFQUFFLHdCQURaO0FBRUZDLGdCQUFNLEVBQUU7QUFGTjtBQUZOLE9BREs7QUFuQmUsS0FBeEI7QUE2Qkg7O0FBQ0QsU0FDSSxtRUFDSTtBQUFRLFdBQU8sRUFBRSxtQkFBSTtBQUFDaEIsV0FBSyxDQUFDO0FBQUMsZ0JBQU8sTUFBUjtBQUFnQixpQkFBUSxNQUF4QjtBQUFnQyxlQUFNLE1BQXRDO0FBQThDLGVBQU0sTUFBcEQ7QUFBNEQsaUJBQVE7QUFBcEUsT0FBRCxDQUFMO0FBQW1GLEtBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREosQ0FESjtBQUtIOztHQWpEdUJMLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk1MWM4MjA1MThmMDAzYzFjMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvU2hhcmUoKXtcclxuICAgIGxldCBLYWthbyA9IHt9O1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhLYWthby5pc0luaXRpYWxpemVkKCkpO1xyXG4gICAgLy8gICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEtha2FvID0gd2luZG93Lktha2FvO1xyXG4gICAgICAgICAgICBLYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hhcmUoe2FkZHIsIHRpdGxlLCBkZXMsIGltZywgbGlrZXN9KXtcclxuICAgICAgICBLYWthby5TaGFyZS5zZW5kRGVmYXVsdCh7XHJcbiAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICBhZGRyZXNzOiBhZGRyLFxyXG4gICAgICAgIGFkZHJlc3NUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOmRlcyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICBsaWtlQ291bnQ6IGxpa2VzLFxyXG4gICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57c2hhcmUoeydhZGRyJzondGVzdCcsICd0aXRsZSc6J3Rlc3QnLCAnZGVzJzondGVzdCcsICdpbWcnOid0ZXN0JywgJ2xpa2VzJzondGVzdCd9KX19Pu2FjOyKpO2KuOy5tOy5tOyYpDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=