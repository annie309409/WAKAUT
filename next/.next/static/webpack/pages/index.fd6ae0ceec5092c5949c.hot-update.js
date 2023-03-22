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



function kakaoShare(_ref) {
  _s();

  var props = _ref.props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_pages_feutils__WEBPACK_IMPORTED_MODULE_1__["kakaoInit"])(window).Share.sendDefault({
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
      social: {// likeCount: props.likes,
        // commentCount: comments,
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
  }); //     kakaoInit().Share.sendDefault({
  //     objectType: 'location',
  //     address: props.addr,
  //     addressTitle: props.title,
  //     content: {
  //         title: props.title,
  //         description:props.des,
  //         imageUrl:props.img,
  //         link: {
  //         // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  //         mobileWebUrl: 'http://localhost:3000/',
  //         webUrl: 'http://localhost:3000/',
  //         },
  //     },
  //     social: {
  //         likeCount: props.likes,
  //         // commentCount: comments,
  //         // sharedCount: shares,
  //     },
  //     buttons: [
  //         {
  //         title: '웹으로 보기',
  //         link: {
  //             mobileWebUrl: 'http://localhost:3000/',
  //             webUrl: 'http://localhost:3000/',
  //         },
  //         },
  //     ],
  // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJrYWthb1NoYXJlIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJrYWthb0luaXQiLCJ3aW5kb3ciLCJTaGFyZSIsInNlbmREZWZhdWx0Iiwib2JqZWN0VHlwZSIsImFkZHJlc3MiLCJhZGRyIiwiYWRkcmVzc1RpdGxlIiwidGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJkZXMiLCJpbWFnZVVybCIsImltZyIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJidXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVBDLEtBQU8sUUFBUEEsS0FBTztBQUN2Q0MseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLG9FQUFTLENBQUNDLE1BQUQsQ0FBVCxDQUFrQkMsS0FBbEIsQ0FBd0JDLFdBQXhCLENBQW9DO0FBQ2hDQyxnQkFBVSxFQUFFLFVBRG9CO0FBRWhDQyxhQUFPLEVBQUVQLEtBQUssQ0FBQ1EsSUFGaUI7QUFHaENDLGtCQUFZLEVBQUVULEtBQUssQ0FBQ1UsS0FIWTtBQUloQ0MsYUFBTyxFQUFFO0FBQ0xELGFBQUssRUFBRVYsS0FBSyxDQUFDVSxLQURSO0FBRUxFLG1CQUFXLEVBQUNaLEtBQUssQ0FBQ2EsR0FGYjtBQUdMQyxnQkFBUSxFQUFDZCxLQUFLLENBQUNlLEdBSFY7QUFJTEMsWUFBSSxFQUFFO0FBQ047QUFDQUMsc0JBQVksRUFBRSx3QkFGUjtBQUdOQyxnQkFBTSxFQUFFO0FBSEY7QUFKRCxPQUp1QjtBQWNoQ0MsWUFBTSxFQUFFLENBQ0o7QUFDQTtBQUNBO0FBSEksT0Fkd0I7QUFtQmhDQyxhQUFPLEVBQUUsQ0FDTDtBQUNBVixhQUFLLEVBQUUsUUFEUDtBQUVBTSxZQUFJLEVBQUU7QUFDRkMsc0JBQVksRUFBRSx3QkFEWjtBQUVGQyxnQkFBTSxFQUFFO0FBRk47QUFGTixPQURLO0FBbkJ1QixLQUFwQztBQTZCSCxHQTlCUSxDQUFULENBRHVDLENBZ0N2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0dBN0R1Qm5CLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQ2YWUwY2VlYzUwOTJjNTk0OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtrYWthb0luaXR9IGZyb20gJy4uL3BhZ2VzL2ZldXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrYWthb1NoYXJlKHtwcm9wc30pe1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAga2FrYW9Jbml0KHdpbmRvdykuU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyLFxyXG4gICAgICAgICAgICBhZGRyZXNzVGl0bGU6IHByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpwcm9wcy5kZXMsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDpwcm9wcy5pbWcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBb64K0IOyVoO2UjOumrOy8gOydtOyFmF0gPiBb7ZSM656r7Y+8XSDsl5DshJwg65Ox66Gd7ZWcIOyCrOydtO2KuCDrj4TrqZTsnbjqs7wg7J287LmY7ZW07JW8IO2VqFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgLy8gbGlrZUNvdW50OiBwcm9wcy5saWtlcyxcclxuICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLy8gICAgIGtha2FvSW5pdCgpLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgIC8vICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgLy8gICAgIGFkZHJlc3M6IHByb3BzLmFkZHIsXHJcbiAgICAvLyAgICAgYWRkcmVzc1RpdGxlOiBwcm9wcy50aXRsZSxcclxuICAgIC8vICAgICBjb250ZW50OiB7XHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcclxuICAgIC8vICAgICAgICAgZGVzY3JpcHRpb246cHJvcHMuZGVzLFxyXG4gICAgLy8gICAgICAgICBpbWFnZVVybDpwcm9wcy5pbWcsXHJcbiAgICAvLyAgICAgICAgIGxpbms6IHtcclxuICAgIC8vICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgIC8vICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgc29jaWFsOiB7XHJcbiAgICAvLyAgICAgICAgIGxpa2VDb3VudDogcHJvcHMubGlrZXMsXHJcbiAgICAvLyAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAvLyAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBidXR0b25zOiBbXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgIC8vICAgICAgICAgbGluazoge1xyXG4gICAgLy8gICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9