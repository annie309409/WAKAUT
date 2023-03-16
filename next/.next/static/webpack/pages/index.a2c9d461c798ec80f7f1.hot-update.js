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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      kakaoSend = _useState[0],
      setKakaoSend = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Kakao = window.Kakao;
    window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    setKakaoSend(Kakao.Share);
  }, []);

  function share(_ref) {
    var addr = _ref.addr,
        title = _ref.title,
        des = _ref.des,
        img = _ref.img,
        likes = _ref.likes;
    kakaoSend.sendDefault({
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uD14C\uC2A4\uD2B8!");
};

_s(KakaoSet, "tG1qqVFJK35/YYi16cEks0dPuNk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvU2VuZCIsInNldEtha2FvU2VuZCIsInVzZUVmZmVjdCIsIktha2FvIiwid2luZG93IiwiaW5pdCIsIlNoYXJlIiwic2hhcmUiLCJhZGRyIiwidGl0bGUiLCJkZXMiLCJpbWciLCJsaWtlcyIsInNlbmREZWZhdWx0Iiwib2JqZWN0VHlwZSIsImFkZHJlc3MiLCJhZGRyZXNzVGl0bGUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImxpbmsiLCJtb2JpbGVXZWJVcmwiLCJ3ZWJVcmwiLCJzb2NpYWwiLCJsaWtlQ291bnQiLCJidXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxFQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0RDLFlBREM7O0FBRWxCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxHQUFHQyxNQUFNLENBQUNELEtBQWY7QUFDQUMsVUFBTSxDQUFDRCxLQUFQLENBQWFFLElBQWIsQ0FBa0Isa0NBQWxCO0FBQ0FKLGdCQUFZLENBQUNFLEtBQUssQ0FBQ0csS0FBUCxDQUFaO0FBQ0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxXQUFTQyxLQUFULE9BQThDO0FBQUEsUUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLFFBQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxRQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsUUFBWkMsR0FBWSxRQUFaQSxHQUFZO0FBQUEsUUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBQzFDWixhQUFTLENBQUNhLFdBQVYsQ0FBc0I7QUFDbEJDLGdCQUFVLEVBQUUsVUFETTtBQUVsQkMsYUFBTyxFQUFFUCxJQUZTO0FBR2xCUSxrQkFBWSxFQUFFUCxLQUhJO0FBSWxCUSxhQUFPLEVBQUU7QUFDTFIsYUFBSyxFQUFFQSxLQURGO0FBRUxTLG1CQUFXLEVBQUNSLEdBRlA7QUFHTFMsZ0JBQVEsRUFBQ1IsR0FISjtBQUlMUyxZQUFJLEVBQUU7QUFDTjtBQUNBQyxzQkFBWSxFQUFFLHdCQUZSO0FBR05DLGdCQUFNLEVBQUU7QUFIRjtBQUpELE9BSlM7QUFjbEJDLFlBQU0sRUFBRTtBQUNKQyxpQkFBUyxFQUFFWixLQURQLENBRUo7QUFDQTs7QUFISSxPQWRVO0FBbUJsQmEsYUFBTyxFQUFFLENBQ0w7QUFDQWhCLGFBQUssRUFBRSxRQURQO0FBRUFXLFlBQUksRUFBRTtBQUNGQyxzQkFBWSxFQUFFLHdCQURaO0FBRUZDLGdCQUFNLEVBQUU7QUFGTjtBQUZOLE9BREs7QUFuQlMsS0FBdEI7QUE2QkgsR0F0Q2lCLENBd0NsQjs7O0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBR0gsQ0E1Q0Q7O0dBQU14QixROztLQUFBQSxRO0FBOENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMmM5ZDQ2MWM3OThlYzgwZjdmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtrYWthb1NlbmQsc2V0S2FrYW9TZW5kXSA9ICB1c2VTdGF0ZSh7fSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEtha2FvID0gd2luZG93Lktha2FvO1xyXG4gICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgIHNldEtha2FvU2VuZChLYWthby5TaGFyZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNoYXJlKHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbiAgICAgICAga2FrYW9TZW5kLnNlbmREZWZhdWx0KHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9