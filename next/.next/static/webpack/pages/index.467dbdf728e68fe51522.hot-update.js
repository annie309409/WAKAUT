webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoSet.js":
/*!******************************!*\
  !*** ./services/kakaoSet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoSet.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var KakaoSet = function KakaoSet(props) {
  _s();

  var kakaoInit = function kakaoInit() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    } else {
      console.log(window);
      window.kakaoSend.sendDefault({
        objectType: 'location',
        address: 'addr',
        addressTitle: 'title',
        content: {
          title: 'title',
          description: 'des',
          imageUrl: 'img',
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/'
          }
        },
        social: {
          likeCount: 'likes' // commentCount: comments,
          // sharedCount: shares,

        },
        buttons: [{
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/'
          }
        }]
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    kakaoInit();
  }, []);
  return __jsx("button", {
    onClick: kakaoInit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\uD14C\uC2A4\uD2B8!");
};

_s(KakaoSet, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = KakaoSet;
/* harmony default export */ __webpack_exports__["default"] = (KakaoSet);

var _c;

$RefreshReg$(_c, "KakaoSet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJwcm9wcyIsImtha2FvSW5pdCIsIndpbmRvdyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwia2FrYW9TZW5kIiwic2VuZERlZmF1bHQiLCJvYmplY3RUeXBlIiwiYWRkcmVzcyIsImFkZHJlc3NUaXRsZSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsaW5rIiwibW9iaWxlV2ViVXJsIiwid2ViVXJsIiwic29jaWFsIiwibGlrZUNvdW50IiwiYnV0dG9ucyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVTtBQUFBOztBQUN2QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFJO0FBQ2xCLFFBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFDLGFBQWIsRUFBTCxFQUFtQztBQUMvQkYsWUFBTSxDQUFDQyxLQUFQLENBQWFFLElBQWIsQ0FBa0Isa0NBQWxCO0FBRUgsS0FIRCxNQUdLO0FBQ0RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaO0FBQ0lBLFlBQU0sQ0FBQ00sU0FBUCxDQUFpQkMsV0FBakIsQ0FBNkI7QUFDekJDLGtCQUFVLEVBQUUsVUFEYTtBQUV6QkMsZUFBTyxFQUFFLE1BRmdCO0FBR3pCQyxvQkFBWSxFQUFFLE9BSFc7QUFJekJDLGVBQU8sRUFBRTtBQUNMQyxlQUFLLEVBQUUsT0FERjtBQUVMQyxxQkFBVyxFQUFDLEtBRlA7QUFHTEMsa0JBQVEsRUFBQyxLQUhKO0FBSUxDLGNBQUksRUFBRTtBQUNOO0FBQ0FDLHdCQUFZLEVBQUUsd0JBRlI7QUFHTkMsa0JBQU0sRUFBRTtBQUhGO0FBSkQsU0FKZ0I7QUFjekJDLGNBQU0sRUFBRTtBQUNKQyxtQkFBUyxFQUFFLE9BRFAsQ0FFSjtBQUNBOztBQUhJLFNBZGlCO0FBbUJ6QkMsZUFBTyxFQUFFLENBQ0w7QUFDQVIsZUFBSyxFQUFFLFFBRFA7QUFFQUcsY0FBSSxFQUFFO0FBQ0ZDLHdCQUFZLEVBQUUsd0JBRFo7QUFFRkMsa0JBQU0sRUFBRTtBQUZOO0FBRk4sU0FESztBQW5CZ0IsT0FBN0I7QUE2QlA7QUFFSixHQXJDRDs7QUF1Q0FJLHlEQUFTLENBQUMsWUFBTTtBQUNadEIsYUFBUztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNJO0FBQVEsV0FBTyxFQUFFQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBR0gsQ0EvQ0Q7O0dBQU1GLFE7O0tBQUFBLFE7QUFpRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2N2RiZGY3MjhlNjhmZTUxNTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBLYWthb1NldCA9IChwcm9wcykgPT57XHJcbiAgICBjb25zdCBrYWthb0luaXQgPSAoKT0+e1xyXG4gICAgICAgIGlmICghd2luZG93Lktha2FvLmlzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5rYWthb1NlbmQuc2VuZERlZmF1bHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJ2FkZHInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NUaXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonZGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6J2ltZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VDb3VudDogJ2xpa2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGtha2FvSW5pdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtrYWthb0luaXR9Pu2FjOyKpO2KuCE8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==