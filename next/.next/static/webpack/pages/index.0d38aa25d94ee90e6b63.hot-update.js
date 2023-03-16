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
      kakao = _useState[0],
      setKakao = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Kakao = window.Kakao;
    window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    setKakao(window.Kakao);
  }, []);

  function share(Kakao, _ref) {
    var addr = _ref.addr,
        title = _ref.title,
        des = _ref.des,
        img = _ref.img,
        likes = _ref.likes;
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

  console.log(kakao);
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

_s(KakaoSet, "M9Aay+Kquv+Se7ghUe5NsoI5tqg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvIiwic2V0S2FrYW8iLCJ1c2VFZmZlY3QiLCJLYWthbyIsIndpbmRvdyIsImluaXQiLCJzaGFyZSIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImltZyIsImxpa2VzIiwiU2hhcmUiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsaW5rIiwibW9iaWxlV2ViVXJsIiwid2ViVXJsIiwic29jaWFsIiwibGlrZUNvdW50IiwiYnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUVsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFmO0FBQ0FDLFVBQU0sQ0FBQ0QsS0FBUCxDQUFhRSxJQUFiLENBQWtCLGtDQUFsQjtBQUNBSixZQUFRLENBQUNHLE1BQU0sQ0FBQ0QsS0FBUixDQUFSO0FBQ0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFLQSxXQUFTRyxLQUFULENBQWVILEtBQWYsUUFBb0Q7QUFBQSxRQUE5QkksSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsUUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLFFBQWpCQyxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxRQUFaQyxHQUFZLFFBQVpBLEdBQVk7QUFBQSxRQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFDaERSLFNBQUssQ0FBQ1MsS0FBTixDQUFZQyxXQUFaLENBQXdCO0FBQ3BCQyxnQkFBVSxFQUFFLFVBRFE7QUFFcEJDLGFBQU8sRUFBRVIsSUFGVztBQUdwQlMsa0JBQVksRUFBRVIsS0FITTtBQUlwQlMsYUFBTyxFQUFFO0FBQ0xULGFBQUssRUFBRUEsS0FERjtBQUVMVSxtQkFBVyxFQUFDVCxHQUZQO0FBR0xVLGdCQUFRLEVBQUNULEdBSEo7QUFJTFUsWUFBSSxFQUFFO0FBQ047QUFDQUMsc0JBQVksRUFBRSx3QkFGUjtBQUdOQyxnQkFBTSxFQUFFO0FBSEY7QUFKRCxPQUpXO0FBY3BCQyxZQUFNLEVBQUU7QUFDSkMsaUJBQVMsRUFBRWIsS0FEUCxDQUVKO0FBQ0E7O0FBSEksT0FkWTtBQW1CcEJjLGFBQU8sRUFBRSxDQUNMO0FBQ0FqQixhQUFLLEVBQUUsUUFEUDtBQUVBWSxZQUFJLEVBQUU7QUFDRkMsc0JBQVksRUFBRSx3QkFEWjtBQUVGQyxnQkFBTSxFQUFFO0FBRk47QUFGTixPQURLO0FBbkJXLEtBQXhCO0FBNkJIOztBQUVESSxTQUFPLENBQUNDLEdBQVIsQ0FBWTNCLEtBQVo7QUFDQSxTQUNJO0FBQVEsV0FBTyxFQUFFTSxLQUFLLENBQUM7QUFBQ0MsVUFBSSxFQUFDLEtBQU47QUFBYUMsV0FBSyxFQUFDLEtBQW5CO0FBQTBCQyxTQUFHLEVBQUMsS0FBOUI7QUFBcUNDLFNBQUcsRUFBQyxLQUF6QztBQUFnREMsV0FBSyxFQUFDO0FBQXRELEtBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESjtBQUdILENBM0NEOztHQUFNYixROztLQUFBQSxRO0FBNkNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZDM4YWEyNWQ5NGVlOTBlNmI2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtrYWthbywgc2V0S2FrYW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEtha2FvID0gd2luZG93Lktha2FvO1xyXG4gICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgIHNldEtha2FvKHdpbmRvdy5LYWthbyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiBzaGFyZShLYWthbyx7YWRkciwgdGl0bGUsIGRlcywgaW1nLCBsaWtlc30pe1xyXG4gICAgICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2hhcmUoe2FkZHI6J+2FjOyKpO2KuCcsIHRpdGxlOifthYzsiqTtirgnLCBkZXM6J+2FjOyKpO2KuCcsIGltZzon7YWM7Iqk7Yq4JywgbGlrZXM6J+2FjOyKpO2KuCd9KX0+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9