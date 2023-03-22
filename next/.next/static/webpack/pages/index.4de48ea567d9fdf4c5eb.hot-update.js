webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return kakaoShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_feutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/feutils */ "./pages/feutils.js");
/* harmony import */ var _pages_feutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_feutils__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();



function kakaoShare() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_pages_feutils__WEBPACK_IMPORTED_MODULE_1__["kakaoInit"])(window);
  });
  Object(_pages_feutils__WEBPACK_IMPORTED_MODULE_1__["kakaoInit"])().Share.sendDefault({
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
}

_s(kakaoShare, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJrYWthb1NoYXJlIiwidXNlRWZmZWN0Iiwia2FrYW9Jbml0Iiwid2luZG93IiwiU2hhcmUiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwicHJvcHMiLCJhZGRyIiwiYWRkcmVzc1RpdGxlIiwidGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJkZXMiLCJpbWFnZVVybCIsImltZyIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJsaWtlcyIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXFCO0FBQUE7O0FBQ2hDQyx5REFBUyxDQUFDLFlBQUk7QUFDVkMsb0VBQVMsQ0FBQ0MsTUFBRCxDQUFUO0FBQ0gsR0FGUSxDQUFUO0FBR0lELGtFQUFTLEdBQUdFLEtBQVosQ0FBa0JDLFdBQWxCLENBQThCO0FBQzlCQyxjQUFVLEVBQUUsVUFEa0I7QUFFOUJDLFdBQU8sRUFBRUMsS0FBSyxDQUFDQyxJQUZlO0FBRzlCQyxnQkFBWSxFQUFFRixLQUFLLENBQUNHLEtBSFU7QUFJOUJDLFdBQU8sRUFBRTtBQUNMRCxXQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FEUjtBQUVMRSxpQkFBVyxFQUFDTCxLQUFLLENBQUNNLEdBRmI7QUFHTEMsY0FBUSxFQUFDUCxLQUFLLENBQUNRLEdBSFY7QUFJTEMsVUFBSSxFQUFFO0FBQ047QUFDQUMsb0JBQVksRUFBRSx3QkFGUjtBQUdOQyxjQUFNLEVBQUU7QUFIRjtBQUpELEtBSnFCO0FBYzlCQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFYixLQUFLLENBQUNjLEtBRGIsQ0FFSjtBQUNBOztBQUhJLEtBZHNCO0FBbUI5QkMsV0FBTyxFQUFFLENBQ0w7QUFDQVosV0FBSyxFQUFFLFFBRFA7QUFFQU0sVUFBSSxFQUFFO0FBQ0ZDLG9CQUFZLEVBQUUsd0JBRFo7QUFFRkMsY0FBTSxFQUFFO0FBRk47QUFGTixLQURLO0FBbkJxQixHQUE5QjtBQTZCUDs7R0FqQ3VCbkIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGU0OGVhNTY3ZDlmZGY0YzVlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2tha2FvSW5pdH0gZnJvbSAnLi4vcGFnZXMvZmV1dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtha2FvU2hhcmUoKXtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGtha2FvSW5pdCh3aW5kb3cpO1xyXG4gICAgfSlcclxuICAgICAgICBrYWthb0luaXQoKS5TaGFyZS5zZW5kRGVmYXVsdCh7XHJcbiAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyLFxyXG4gICAgICAgIGFkZHJlc3NUaXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOnByb3BzLmRlcyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6cHJvcHMuaW1nLFxyXG4gICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICBsaWtlQ291bnQ6IHByb3BzLmxpa2VzLFxyXG4gICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==