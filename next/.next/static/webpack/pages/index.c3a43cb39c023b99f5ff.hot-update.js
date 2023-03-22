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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJLYWthbyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwicHJvcHMiLCJhZGRyIiwiYWRkcmVzc1RpdGxlIiwidGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJkZXMiLCJpbWFnZVVybCIsImltZyIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJsaWtlcyIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBLGtEQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVU7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0lBLE9BQUssQ0FBQ0csV0FBTixDQUFrQjtBQUNkQyxjQUFVLEVBQUUsVUFERTtBQUVWQyxXQUFPLEVBQUVDLEtBQUssQ0FBQ0MsSUFGTDtBQUdWQyxnQkFBWSxFQUFFRixLQUFLLENBQUNHLEtBSFY7QUFJVkMsV0FBTyxFQUFFO0FBQ0xELFdBQUssRUFBRUgsS0FBSyxDQUFDRyxLQURSO0FBRUxFLGlCQUFXLEVBQUNMLEtBQUssQ0FBQ00sR0FGYjtBQUdMQyxjQUFRLEVBQUNQLEtBQUssQ0FBQ1EsR0FIVjtBQUlMQyxVQUFJLEVBQUU7QUFDTjtBQUNBQyxvQkFBWSxFQUFFLHdCQUZSO0FBR05DLGNBQU0sRUFBRTtBQUhGO0FBSkQsS0FKQztBQWNWQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFYixLQUFLLENBQUNjLEtBRGIsQ0FFSjtBQUNBOztBQUhJLEtBZEU7QUFtQlZDLFdBQU8sRUFBRSxDQUNMO0FBQ0FaLFdBQUssRUFBRSxRQURQO0FBRUFNLFVBQUksRUFBRTtBQUNGQyxvQkFBWSxFQUFFLHdCQURaO0FBRUZDLGNBQU0sRUFBRTtBQUZOO0FBRk4sS0FESztBQW5CQyxHQUFsQjtBQThCUCxDQWhDRDs7S0FBTWxCLFE7QUFtQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzYTQzY2IzOWMwMjNiOTlmNWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgS2FrYW9TZXQgPSAoS2FrYW8pID0+eyAgICBcclxuICAgIGNvbnNvbGUubG9nKEtha2FvKTtcclxuICAgICAgICBLYWthby5zZW5kRGVmYXVsdCh7XHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiBwcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246cHJvcHMuZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOnByb3BzLmltZyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VDb3VudDogcHJvcHMubGlrZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==