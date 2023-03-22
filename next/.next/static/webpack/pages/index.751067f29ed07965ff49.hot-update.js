webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoSet.js":
/*!******************************!*\
  !*** ./services/kakaoSet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var KakaoSet = function KakaoSet(Kakao, _ref) {
  var props = _ref.props;
  Kakao.sendDefault({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJLYWthbyIsInByb3BzIiwic2VuZERlZmF1bHQiLCJvYmplY3RUeXBlIiwiYWRkcmVzcyIsImFkZHIiLCJhZGRyZXNzVGl0bGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImRlcyIsImltYWdlVXJsIiwiaW1nIiwibGluayIsIm1vYmlsZVdlYlVybCIsIndlYlVybCIsInNvY2lhbCIsImxpa2VDb3VudCIsImxpa2VzIiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUEsa0RBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsUUFBa0I7QUFBQSxNQUFWQyxLQUFVLFFBQVZBLEtBQVU7QUFDM0JELE9BQUssQ0FBQ0UsV0FBTixDQUFrQjtBQUNkQyxjQUFVLEVBQUUsVUFERTtBQUVWQyxXQUFPLEVBQUVILEtBQUssQ0FBQ0ksSUFGTDtBQUdWQyxnQkFBWSxFQUFFTCxLQUFLLENBQUNNLEtBSFY7QUFJVkMsV0FBTyxFQUFFO0FBQ0xELFdBQUssRUFBRU4sS0FBSyxDQUFDTSxLQURSO0FBRUxFLGlCQUFXLEVBQUNSLEtBQUssQ0FBQ1MsR0FGYjtBQUdMQyxjQUFRLEVBQUNWLEtBQUssQ0FBQ1csR0FIVjtBQUlMQyxVQUFJLEVBQUU7QUFDTjtBQUNBQyxvQkFBWSxFQUFFLHdCQUZSO0FBR05DLGNBQU0sRUFBRTtBQUhGO0FBSkQsS0FKQztBQWNWQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFaEIsS0FBSyxDQUFDaUIsS0FEYixDQUVKO0FBQ0E7O0FBSEksS0FkRTtBQW1CVkMsV0FBTyxFQUFFLENBQ0w7QUFDQVosV0FBSyxFQUFFLFFBRFA7QUFFQU0sVUFBSSxFQUFFO0FBQ0ZDLG9CQUFZLEVBQUUsd0JBRFo7QUFFRkMsY0FBTSxFQUFFO0FBRk47QUFGTixLQURLO0FBbkJDLEdBQWxCO0FBOEJQLENBL0JEOztLQUFNaEIsUTtBQWtDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzUxMDY3ZjI5ZWQwNzk2NWZmNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBLYWthb1NldCA9IChLYWthbyx7cHJvcHN9KSA9PnsgICAgXHJcbiAgICAgICAgS2FrYW8uc2VuZERlZmF1bHQoe1xyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NUaXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOnByb3BzLmRlcyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDpwcm9wcy5pbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IHByb3BzLmxpa2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvU2V0OyJdLCJzb3VyY2VSb290IjoiIn0=