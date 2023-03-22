webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoSet.js":
/*!******************************!*\
  !*** ./services/kakaoSet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var KakaoSet = function KakaoSet(Kakao) {
  console.log(Kakao);
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: props.addr,
    addressTitle: props.title,
    content: {
      title: props.title,
      description: props.des,
      imageUrl: props.img,
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'http://localhost:3000/',
        webUrl: 'http://localhost:3000/'
      }
    },
    social: {
      likeCount: props.likes // commentCount: comments,
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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJLYWthbyIsImNvbnNvbGUiLCJsb2ciLCJTaGFyZSIsInNlbmREZWZhdWx0Iiwib2JqZWN0VHlwZSIsImFkZHJlc3MiLCJwcm9wcyIsImFkZHIiLCJhZGRyZXNzVGl0bGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImRlcyIsImltYWdlVXJsIiwiaW1nIiwibGluayIsIm1vYmlsZVdlYlVybCIsIndlYlVybCIsInNvY2lhbCIsImxpa2VDb3VudCIsImxpa2VzIiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUEsa0RBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVTtBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSUEsT0FBSyxDQUFDRyxLQUFOLENBQVlDLFdBQVosQ0FBd0I7QUFDcEJDLGNBQVUsRUFBRSxVQURRO0FBRWhCQyxXQUFPLEVBQUVDLEtBQUssQ0FBQ0MsSUFGQztBQUdoQkMsZ0JBQVksRUFBRUYsS0FBSyxDQUFDRyxLQUhKO0FBSWhCQyxXQUFPLEVBQUU7QUFDTEQsV0FBSyxFQUFFSCxLQUFLLENBQUNHLEtBRFI7QUFFTEUsaUJBQVcsRUFBQ0wsS0FBSyxDQUFDTSxHQUZiO0FBR0xDLGNBQVEsRUFBQ1AsS0FBSyxDQUFDUSxHQUhWO0FBSUxDLFVBQUksRUFBRTtBQUNOO0FBQ0FDLG9CQUFZLEVBQUUsd0JBRlI7QUFHTkMsY0FBTSxFQUFFO0FBSEY7QUFKRCxLQUpPO0FBY2hCQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFYixLQUFLLENBQUNjLEtBRGIsQ0FFSjtBQUNBOztBQUhJLEtBZFE7QUFtQmhCQyxXQUFPLEVBQUUsQ0FDTDtBQUNBWixXQUFLLEVBQUUsUUFEUDtBQUVBTSxVQUFJLEVBQUU7QUFDRkMsb0JBQVksRUFBRSx3QkFEWjtBQUVGQyxjQUFNLEVBQUU7QUFGTjtBQUZOLEtBREs7QUFuQk8sR0FBeEI7QUE4QlAsQ0FoQ0Q7O0tBQU1uQixRO0FBbUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZWU1OTlhY2YxODg4MDhkNjRiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IEtha2FvU2V0ID0gKEtha2FvKSA9PnsgICAgXHJcbiAgICBjb25zb2xlLmxvZyhLYWthbyk7XHJcbiAgICAgICAgS2FrYW8uU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NUaXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOnByb3BzLmRlcyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDpwcm9wcy5pbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IHByb3BzLmxpa2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvU2V0OyJdLCJzb3VyY2VSb290IjoiIn0=