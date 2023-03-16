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


var KakaoSet = function KakaoSet() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      kakaoSend = _useState[0],
      setKakaoSend = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Kakao = window.Kakao;
    window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    setKakaoSend(Kakao.Share);
    console.log(kakaoSend);
  }, []); // function share({addr, title, des, img, likes}){
  //         kakaoSend({
  //         objectType: 'location',
  //         address: addr,
  //         addressTitle: title,
  //         content: {
  //             title: title,
  //             description:des,
  //             imageUrl:img,
  //             link: {
  //             // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  //             mobileWebUrl: 'http://localhost:3000/',
  //             webUrl: 'http://localhost:3000/',
  //             },
  //         },
  //         social: {
  //             likeCount: likes,
  //             // commentCount: comments,
  //             // sharedCount: shares,
  //         },
  //         buttons: [
  //             {
  //             title: '웹으로 보기',
  //             link: {
  //                 mobileWebUrl: 'http://localhost:3000/',
  //                 webUrl: 'http://localhost:3000/',
  //             },
  //             },
  //         ],
  //         });
  // }
  // console.log(kakao);

  return __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uD14C\uC2A4\uD2B8!");
};

_s(KakaoSet, "fLmCAaCvqf6CO2gaUNOKLb7SpWg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvU2VuZCIsInNldEtha2FvU2VuZCIsInVzZUVmZmVjdCIsIktha2FvIiwid2luZG93IiwiaW5pdCIsIlNoYXJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsSUFBRCxDQUR4QjtBQUFBLE1BQ1hDLFNBRFc7QUFBQSxNQUNEQyxZQURDOztBQUVsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFmO0FBQ0FDLFVBQU0sQ0FBQ0QsS0FBUCxDQUFhRSxJQUFiLENBQWtCLGtDQUFsQjtBQUNBSixnQkFBWSxDQUFDRSxLQUFLLENBQUNHLEtBQVAsQ0FBWjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsU0FBWjtBQUNILEdBTFEsRUFLTixFQUxNLENBQVQsQ0FGa0IsQ0FRbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFHSCxDQTVDRDs7R0FBTUYsUTs7S0FBQUEsUTtBQThDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTRkZWVjYjNhMWE0Y2MyNTdiNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCAsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEtha2FvU2V0ID0gKCkgPT57XHJcbiAgICBjb25zdCBba2FrYW9TZW5kLHNldEtha2FvU2VuZF0gPSAgdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEtha2FvID0gd2luZG93Lktha2FvO1xyXG4gICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgIHNldEtha2FvU2VuZChLYWthby5TaGFyZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2FrYW9TZW5kKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIGZ1bmN0aW9uIHNoYXJlKHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbiAgICAvLyAgICAgICAgIGtha2FvU2VuZCh7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAvLyAgICAgICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICAvLyAgICAgICAgIGFkZHJlc3NUaXRsZTogdGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOmRlcyxcclxuICAgIC8vICAgICAgICAgICAgIGltYWdlVXJsOmltZyxcclxuICAgIC8vICAgICAgICAgICAgIGxpbms6IHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAvLyAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsaWtlQ291bnQ6IGxpa2VzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgIC8vICAgICAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAvLyAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgXSxcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coa2FrYW8pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uPu2FjOyKpO2KuCE8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==