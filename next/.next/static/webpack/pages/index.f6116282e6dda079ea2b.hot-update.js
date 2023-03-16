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
    setKakaoSend(Kakao.Share.sendDefault);
  }, []);

  function share(_ref) {
    var addr = _ref.addr,
        title = _ref.title,
        des = _ref.des,
        img = _ref.img,
        likes = _ref.likes;
    kakaoSend({
      objectType: 'location',
      address: addr,
      addressTitle: title,
      content: {
        title: title,
        description: des,
        imageUrl: img,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'http://localhost:3000/',
          webUrl: 'http://localhost:3000/'
        }
      },
      social: {
        likeCount: likes // commentCount: comments,
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
  } // console.log(kakao);


  return __jsx("button", {
    onClick: share({
      addr: '테스트',
      title: '테스트',
      des: '테스트',
      img: '테스트',
      likes: '테스트'
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvU2VuZCIsInNldEtha2FvU2VuZCIsInVzZUVmZmVjdCIsIktha2FvIiwid2luZG93IiwiaW5pdCIsIlNoYXJlIiwic2VuZERlZmF1bHQiLCJzaGFyZSIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImltZyIsImxpa2VzIiwib2JqZWN0VHlwZSIsImFkZHJlc3MiLCJhZGRyZXNzVGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJidXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxJQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0RDLFlBREM7O0FBRWxCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxHQUFHQyxNQUFNLENBQUNELEtBQWY7QUFDQUMsVUFBTSxDQUFDRCxLQUFQLENBQWFFLElBQWIsQ0FBa0Isa0NBQWxCO0FBQ0FKLGdCQUFZLENBQUNFLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxXQUFiLENBQVo7QUFDSCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQUtBLFdBQVNDLEtBQVQsT0FBOEM7QUFBQSxRQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsUUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLFFBQWpCQyxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxRQUFaQyxHQUFZLFFBQVpBLEdBQVk7QUFBQSxRQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFDdENiLGFBQVMsQ0FBQztBQUNWYyxnQkFBVSxFQUFFLFVBREY7QUFFVkMsYUFBTyxFQUFFTixJQUZDO0FBR1ZPLGtCQUFZLEVBQUVOLEtBSEo7QUFJVk8sYUFBTyxFQUFFO0FBQ0xQLGFBQUssRUFBRUEsS0FERjtBQUVMUSxtQkFBVyxFQUFDUCxHQUZQO0FBR0xRLGdCQUFRLEVBQUNQLEdBSEo7QUFJTFEsWUFBSSxFQUFFO0FBQ047QUFDQUMsc0JBQVksRUFBRSx3QkFGUjtBQUdOQyxnQkFBTSxFQUFFO0FBSEY7QUFKRCxPQUpDO0FBY1ZDLFlBQU0sRUFBRTtBQUNKQyxpQkFBUyxFQUFFWCxLQURQLENBRUo7QUFDQTs7QUFISSxPQWRFO0FBbUJWWSxhQUFPLEVBQUUsQ0FDTDtBQUNBZixhQUFLLEVBQUUsUUFEUDtBQUVBVSxZQUFJLEVBQUU7QUFDRkMsc0JBQVksRUFBRSx3QkFEWjtBQUVGQyxnQkFBTSxFQUFFO0FBRk47QUFGTixPQURLO0FBbkJDLEtBQUQsQ0FBVDtBQTZCUCxHQXJDaUIsQ0F1Q2xCOzs7QUFDQSxTQUNJO0FBQVEsV0FBTyxFQUFFZCxLQUFLLENBQUM7QUFBQ0MsVUFBSSxFQUFDLEtBQU47QUFBYUMsV0FBSyxFQUFDLEtBQW5CO0FBQTBCQyxTQUFHLEVBQUMsS0FBOUI7QUFBcUNDLFNBQUcsRUFBQyxLQUF6QztBQUFnREMsV0FBSyxFQUFDO0FBQXRELEtBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESjtBQUdILENBM0NEOztHQUFNZixROztLQUFBQSxRO0FBNkNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjExNjI4MmU2ZGRhMDc5ZWEyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtrYWthb1NlbmQsc2V0S2FrYW9TZW5kXSA9ICB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgS2FrYW8gPSB3aW5kb3cuS2FrYW87XHJcbiAgICAgICAgd2luZG93Lktha2FvLmluaXQoJzY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5Jyk7XHJcbiAgICAgICAgc2V0S2FrYW9TZW5kKEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHNoYXJlKHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbiAgICAgICAgICAgIGtha2FvU2VuZCh7XHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOmRlcyxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOmltZyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IGxpa2VzLFxyXG4gICAgICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coa2FrYW8pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NoYXJlKHthZGRyOifthYzsiqTtirgnLCB0aXRsZTon7YWM7Iqk7Yq4JywgZGVzOifthYzsiqTtirgnLCBpbWc6J+2FjOyKpO2KuCcsIGxpa2VzOifthYzsiqTtirgnfSl9Pu2FjOyKpO2KuCE8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==