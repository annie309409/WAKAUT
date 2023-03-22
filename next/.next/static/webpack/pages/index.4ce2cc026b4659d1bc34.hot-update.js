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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJrYWthb1NoYXJlIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJrYWthb0luaXQiLCJ3aW5kb3ciLCJTaGFyZSIsInNlbmREZWZhdWx0Iiwib2JqZWN0VHlwZSIsImFkZHJlc3MiLCJhZGRyIiwiYWRkcmVzc1RpdGxlIiwidGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJkZXMiLCJpbWFnZVVybCIsImltZyIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJsaWtlcyIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBQ3ZDQyx5REFBUyxDQUFDLFlBQUk7QUFDVkMsb0VBQVMsQ0FBQ0MsTUFBRCxDQUFULENBQWtCQyxLQUFsQixDQUF3QkMsV0FBeEIsQ0FBb0M7QUFDaENDLGdCQUFVLEVBQUUsVUFEb0I7QUFFaENDLGFBQU8sRUFBRVAsS0FBSyxDQUFDUSxJQUZpQjtBQUdoQ0Msa0JBQVksRUFBRVQsS0FBSyxDQUFDVSxLQUhZO0FBSWhDQyxhQUFPLEVBQUU7QUFDTEQsYUFBSyxFQUFFVixLQUFLLENBQUNVLEtBRFI7QUFFTEUsbUJBQVcsRUFBQ1osS0FBSyxDQUFDYSxHQUZiO0FBR0xDLGdCQUFRLEVBQUNkLEtBQUssQ0FBQ2UsR0FIVjtBQUlMQyxZQUFJLEVBQUU7QUFDTjtBQUNBQyxzQkFBWSxFQUFFLHdCQUZSO0FBR05DLGdCQUFNLEVBQUU7QUFIRjtBQUpELE9BSnVCO0FBY2hDQyxZQUFNLEVBQUU7QUFDSkMsaUJBQVMsRUFBRXBCLEtBQUssQ0FBQ3FCLEtBRGIsQ0FFSjtBQUNBOztBQUhJLE9BZHdCO0FBbUJoQ0MsYUFBTyxFQUFFLENBQ0w7QUFDQVosYUFBSyxFQUFFLFFBRFA7QUFFQU0sWUFBSSxFQUFFO0FBQ0ZDLHNCQUFZLEVBQUUsd0JBRFo7QUFFRkMsZ0JBQU0sRUFBRTtBQUZOO0FBRk4sT0FESztBQW5CdUIsS0FBcEM7QUE2QkgsR0E5QlEsQ0FBVCxDQUR1QyxDQWdDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztHQTdEdUJuQixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjZTJjYzAyNmI0NjU5ZDFiYzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7a2FrYW9Jbml0fSBmcm9tICcuLi9wYWdlcy9mZXV0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2FrYW9TaGFyZSh7cHJvcHN9KXtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGtha2FvSW5pdCh3aW5kb3cpLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcixcclxuICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiBwcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246cHJvcHMuZGVzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6cHJvcHMuaW1nLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VDb3VudDogcHJvcHMubGlrZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC8vICAgICBrYWthb0luaXQoKS5TaGFyZS5zZW5kRGVmYXVsdCh7XHJcbiAgICAvLyAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgIC8vICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyLFxyXG4gICAgLy8gICAgIGFkZHJlc3NUaXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAvLyAgICAgY29udGVudDoge1xyXG4gICAgLy8gICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOnByb3BzLmRlcyxcclxuICAgIC8vICAgICAgICAgaW1hZ2VVcmw6cHJvcHMuaW1nLFxyXG4gICAgLy8gICAgICAgICBsaW5rOiB7XHJcbiAgICAvLyAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAvLyAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHNvY2lhbDoge1xyXG4gICAgLy8gICAgICAgICBsaWtlQ291bnQ6IHByb3BzLmxpa2VzLFxyXG4gICAgLy8gICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgLy8gICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgYnV0dG9uczogW1xyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAvLyAgICAgICAgIGxpbms6IHtcclxuICAgIC8vICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==