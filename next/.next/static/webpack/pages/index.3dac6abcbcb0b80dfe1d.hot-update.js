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
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJwcm9wcyIsImtha2FvSW5pdCIsIndpbmRvdyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJrYWthb1NlbmQiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJidXR0b25zIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQ3ZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUk7QUFDbEIsUUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsYUFBYixFQUFMLEVBQW1DO0FBQy9CRixZQUFNLENBQUNDLEtBQVAsQ0FBYUUsSUFBYixDQUFrQixrQ0FBbEI7QUFDQUgsWUFBTSxDQUFDSSxTQUFQLENBQWlCQyxXQUFqQixDQUE2QjtBQUN6QkMsa0JBQVUsRUFBRSxVQURhO0FBRXpCQyxlQUFPLEVBQUUsTUFGZ0I7QUFHekJDLG9CQUFZLEVBQUUsT0FIVztBQUl6QkMsZUFBTyxFQUFFO0FBQ0xDLGVBQUssRUFBRSxPQURGO0FBRUxDLHFCQUFXLEVBQUMsS0FGUDtBQUdMQyxrQkFBUSxFQUFDLEtBSEo7QUFJTEMsY0FBSSxFQUFFO0FBQ047QUFDQUMsd0JBQVksRUFBRSx3QkFGUjtBQUdOQyxrQkFBTSxFQUFFO0FBSEY7QUFKRCxTQUpnQjtBQWN6QkMsY0FBTSxFQUFFO0FBQ0pDLG1CQUFTLEVBQUUsT0FEUCxDQUVKO0FBQ0E7O0FBSEksU0FkaUI7QUFtQnpCQyxlQUFPLEVBQUUsQ0FDTDtBQUNBUixlQUFLLEVBQUUsUUFEUDtBQUVBRyxjQUFJLEVBQUU7QUFDRkMsd0JBQVksRUFBRSx3QkFEWjtBQUVGQyxrQkFBTSxFQUFFO0FBRk47QUFGTixTQURLO0FBbkJnQixPQUE3QjtBQTZCSDtBQUVBLEdBbENMOztBQW9DQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1pwQixhQUFTO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0k7QUFBUSxXQUFPLEVBQUVBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFHSCxDQTVDRDs7R0FBTUYsUTs7S0FBQUEsUTtBQThDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RhYzZhYmNiY2IwYjgwZGZlMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCAsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEtha2FvU2V0ID0gKHByb3BzKSA9PntcclxuICAgIGNvbnN0IGtha2FvSW5pdCA9ICgpPT57XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuS2FrYW8uaXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgICAgICB3aW5kb3cua2FrYW9TZW5kLnNlbmREZWZhdWx0KHtcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnYWRkcicsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzVGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J2RlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6J2ltZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6ICdsaWtlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAga2FrYW9Jbml0KCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2tha2FvSW5pdH0+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9