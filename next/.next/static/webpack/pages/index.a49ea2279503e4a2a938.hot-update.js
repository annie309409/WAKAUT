webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./services/kakao.min.js":
false,

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var _window = window,
    KaKao = _window.KaKao;
KaKao.init('69823228c875a5a95558c4f4b78b0ae9'); // 사용하려는 앱의 JavaScript 키 입력

function kakaoShare(_ref) {
  var addr = _ref['addr'],
      title = _ref['title'],
      des = _ref['des'],
      img = _ref['img'],
      likes = _ref['likes'];
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: addr,
    addressTitle: title,
    content: {
      title: title,
      description: des,
      imageUrl: img,
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'http://localhost:3010/',
        webUrl: 'http://localhost:3010/'
      }
    },
    social: {
      likeCount: likes // commentCount: comments,
      // sharedCount: shares,

    },
    buttons: [{
      title: '웹으로 보기',
      link: {
        mobileWebUrl: 'http://localhost:3010/',
        webUrl: 'http://localhost:3010/'
      }
    }]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (kakaoShare);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJLYUthbyIsImluaXQiLCJrYWthb1NoYXJlIiwiYWRkciIsInRpdGxlIiwiZGVzIiwiaW1nIiwibGlrZXMiLCJLYWthbyIsIlNoYXJlIiwic2VuZERlZmF1bHQiLCJvYmplY3RUeXBlIiwiYWRkcmVzcyIsImFkZHJlc3NUaXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwibGluayIsIm1vYmlsZVdlYlVybCIsIndlYlVybCIsInNvY2lhbCIsImxpa2VDb3VudCIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUFnQkEsTTtJQUFUQyxLLFdBQUFBLEs7QUFFUEEsS0FBSyxDQUFDQyxJQUFOLENBQVcsa0NBQVgsRSxDQUFnRDs7QUFFaEQsU0FBU0MsVUFBVCxPQUF1RjtBQUFBLE1BQTNEQyxJQUEyRCxRQUFsRSxNQUFrRTtBQUFBLE1BQTdDQyxLQUE2QyxRQUFyRCxPQUFxRDtBQUFBLE1BQWhDQyxHQUFnQyxRQUF0QyxLQUFzQztBQUFBLE1BQXJCQyxHQUFxQixRQUEzQixLQUEyQjtBQUFBLE1BQVJDLEtBQVEsUUFBaEIsT0FBZ0I7QUFDbkZDLE9BQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCO0FBQ3hCQyxjQUFVLEVBQUUsVUFEWTtBQUV4QkMsV0FBTyxFQUFFVCxJQUZlO0FBR3hCVSxnQkFBWSxFQUFFVCxLQUhVO0FBSXhCVSxXQUFPLEVBQUU7QUFDTFYsV0FBSyxFQUFFQSxLQURGO0FBRUxXLGlCQUFXLEVBQUNWLEdBRlA7QUFHTFcsY0FBUSxFQUFDVixHQUhKO0FBSUxXLFVBQUksRUFBRTtBQUNOO0FBQ0FDLG9CQUFZLEVBQUUsd0JBRlI7QUFHTkMsY0FBTSxFQUFFO0FBSEY7QUFKRCxLQUplO0FBY3hCQyxVQUFNLEVBQUU7QUFDSkMsZUFBUyxFQUFFZCxLQURQLENBRUo7QUFDQTs7QUFISSxLQWRnQjtBQW1CeEJlLFdBQU8sRUFBRSxDQUNMO0FBQ0FsQixXQUFLLEVBQUUsUUFEUDtBQUVBYSxVQUFJLEVBQUU7QUFDRkMsb0JBQVksRUFBRSx3QkFEWjtBQUVGQyxjQUFNLEVBQUU7QUFGTjtBQUZOLEtBREs7QUFuQmUsR0FBeEI7QUE2Qkg7O0FBRWNqQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNDllYTIyNzk1MDNlNGEyYTkzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge0thS2FvfSA9IHdpbmRvdzsgXHJcblxyXG5LYUthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpOyAvLyDsgqzsmqntlZjroKTripQg7JWx7J2YIEphdmFTY3JpcHQg7YKkIOyeheugpVxyXG5cclxuZnVuY3Rpb24ga2FrYW9TaGFyZSh7J2FkZHInOmFkZHIsICd0aXRsZSc6dGl0bGUsICdkZXMnOmRlcywgJ2ltZyc6aW1nLCAnbGlrZXMnOmxpa2VzfSkge1xyXG4gICAgS2FrYW8uU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4gICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICBhZGRyZXNzVGl0bGU6IHRpdGxlLFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpkZXMsXHJcbiAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgIGxpbms6IHtcclxuICAgICAgICAvLyBb64K0IOyVoO2UjOumrOy8gOydtOyFmF0gPiBb7ZSM656r7Y+8XSDsl5DshJwg65Ox66Gd7ZWcIOyCrOydtO2KuCDrj4TrqZTsnbjqs7wg7J287LmY7ZW07JW8IO2VqFxyXG4gICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgICAgbGlrZUNvdW50OiBsaWtlcyxcclxuICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4gICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQga2FrYW9TaGFyZTsiXSwic291cmNlUm9vdCI6IiJ9