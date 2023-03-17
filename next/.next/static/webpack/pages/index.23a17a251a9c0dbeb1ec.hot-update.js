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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
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
      console.log('성공!');
      window.Kakao.Share.sendDefault({
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
          likeCount: 3 // commentCount: comments,
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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "warning",
    className: "fluid ms-2",
    onClick: kakaoInit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\uCE74\uCE74\uC624 \uACF5\uC720\uD558\uAE30");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJwcm9wcyIsImtha2FvSW5pdCIsIndpbmRvdyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiU2hhcmUiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJidXR0b25zIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQ3ZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUk7QUFDbEIsUUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsYUFBYixFQUFMLEVBQW1DO0FBQy9CRixZQUFNLENBQUNDLEtBQVAsQ0FBYUUsSUFBYixDQUFrQixrQ0FBbEI7QUFFSCxLQUhELE1BR0s7QUFDREMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBTCxZQUFNLENBQUNDLEtBQVAsQ0FBYUssS0FBYixDQUFtQkMsV0FBbkIsQ0FBK0I7QUFDM0JDLGtCQUFVLEVBQUUsVUFEZTtBQUV2QkMsZUFBTyxFQUFFLE1BRmM7QUFHdkJDLG9CQUFZLEVBQUUsT0FIUztBQUl2QkMsZUFBTyxFQUFFO0FBQ0xDLGVBQUssRUFBRSxPQURGO0FBRUxDLHFCQUFXLEVBQUMsS0FGUDtBQUdMQyxrQkFBUSxFQUFDLEtBSEo7QUFJTEMsY0FBSSxFQUFFO0FBQ047QUFDQUMsd0JBQVksRUFBRSx3QkFGUjtBQUdOQyxrQkFBTSxFQUFFO0FBSEY7QUFKRCxTQUpjO0FBY3ZCQyxjQUFNLEVBQUU7QUFDSkMsbUJBQVMsRUFBRSxDQURQLENBRUo7QUFDQTs7QUFISSxTQWRlO0FBbUJ2QkMsZUFBTyxFQUFFLENBQ0w7QUFDQVIsZUFBSyxFQUFFLFFBRFA7QUFFQUcsY0FBSSxFQUFFO0FBQ0ZDLHdCQUFZLEVBQUUsd0JBRFo7QUFFRkMsa0JBQU0sRUFBRTtBQUZOO0FBRk4sU0FESztBQW5CYyxPQUEvQjtBQTZCSDtBQUNKLEdBcENEOztBQXNDQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1p0QixhQUFTO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFTLEVBQUMsWUFBcEM7QUFBaUQsV0FBTyxFQUFFQSxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQURKO0FBR0gsQ0E5Q0Q7O0dBQU1GLFE7O0tBQUFBLFE7QUFnRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIzYTE3YTI1MWE5YzBkYmViMWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAocHJvcHMpID0+e1xyXG4gICAgY29uc3Qga2FrYW9Jbml0ID0gKCk9PntcclxuICAgICAgICBpZiAoIXdpbmRvdy5LYWthby5pc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgICAgICAgd2luZG93Lktha2FvLmluaXQoJzY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5Jyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfshLHqs7UhJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5LYWthby5TaGFyZS5zZW5kRGVmYXVsdCh7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICdhZGRyJyxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J2RlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOidpbWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGtha2FvSW5pdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2FybmluZ1wiIGNsYXNzTmFtZT0nZmx1aWQgbXMtMicgb25DbGljaz17a2FrYW9Jbml0fT7subTsubTsmKQg6rO17Jyg7ZWY6riwPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvU2V0OyJdLCJzb3VyY2VSb290IjoiIn0=