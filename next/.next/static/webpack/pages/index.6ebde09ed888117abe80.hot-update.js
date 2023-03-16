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
    console.log(kakaoSend);
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
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvU2VuZCIsInNldEtha2FvU2VuZCIsInVzZUVmZmVjdCIsIktha2FvIiwid2luZG93IiwiaW5pdCIsIlNoYXJlIiwic2VuZERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2hhcmUiLCJhZGRyIiwidGl0bGUiLCJkZXMiLCJpbWciLCJsaWtlcyIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsaW5rIiwibW9iaWxlV2ViVXJsIiwid2ViVXJsIiwic29jaWFsIiwibGlrZUNvdW50IiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsSUFBRCxDQUR4QjtBQUFBLE1BQ1hDLFNBRFc7QUFBQSxNQUNEQyxZQURDOztBQUVsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFmO0FBQ0FDLFVBQU0sQ0FBQ0QsS0FBUCxDQUFhRSxJQUFiLENBQWtCLGtDQUFsQjtBQUNBSixnQkFBWSxDQUFDRSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsV0FBYixDQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFaO0FBQ0gsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFNQSxXQUFTVSxLQUFULE9BQThDO0FBQUEsUUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLFFBQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxRQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsUUFBWkMsR0FBWSxRQUFaQSxHQUFZO0FBQUEsUUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBQ3RDZixhQUFTLENBQUM7QUFDVmdCLGdCQUFVLEVBQUUsVUFERjtBQUVWQyxhQUFPLEVBQUVOLElBRkM7QUFHVk8sa0JBQVksRUFBRU4sS0FISjtBQUlWTyxhQUFPLEVBQUU7QUFDTFAsYUFBSyxFQUFFQSxLQURGO0FBRUxRLG1CQUFXLEVBQUNQLEdBRlA7QUFHTFEsZ0JBQVEsRUFBQ1AsR0FISjtBQUlMUSxZQUFJLEVBQUU7QUFDTjtBQUNBQyxzQkFBWSxFQUFFLHdCQUZSO0FBR05DLGdCQUFNLEVBQUU7QUFIRjtBQUpELE9BSkM7QUFjVkMsWUFBTSxFQUFFO0FBQ0pDLGlCQUFTLEVBQUVYLEtBRFAsQ0FFSjtBQUNBOztBQUhJLE9BZEU7QUFtQlZZLGFBQU8sRUFBRSxDQUNMO0FBQ0FmLGFBQUssRUFBRSxRQURQO0FBRUFVLFlBQUksRUFBRTtBQUNGQyxzQkFBWSxFQUFFLHdCQURaO0FBRUZDLGdCQUFNLEVBQUU7QUFGTjtBQUZOLE9BREs7QUFuQkMsS0FBRCxDQUFUO0FBNkJQLEdBdENpQixDQXdDbEI7OztBQUNBLFNBQ0k7QUFBUSxXQUFPLEVBQUVkLEtBQUssQ0FBQztBQUFDQyxVQUFJLEVBQUMsS0FBTjtBQUFhQyxXQUFLLEVBQUMsS0FBbkI7QUFBMEJDLFNBQUcsRUFBQyxLQUE5QjtBQUFxQ0MsU0FBRyxFQUFDLEtBQXpDO0FBQWdEQyxXQUFLLEVBQUM7QUFBdEQsS0FBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBR0gsQ0E1Q0Q7O0dBQU1qQixROztLQUFBQSxRO0FBOENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZWJkZTA5ZWQ4ODgxMTdhYmU4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtrYWthb1NlbmQsc2V0S2FrYW9TZW5kXSA9ICB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgS2FrYW8gPSB3aW5kb3cuS2FrYW87XHJcbiAgICAgICAgd2luZG93Lktha2FvLmluaXQoJzY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5Jyk7XHJcbiAgICAgICAgc2V0S2FrYW9TZW5kKEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhrYWthb1NlbmQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gc2hhcmUoe2FkZHIsIHRpdGxlLCBkZXMsIGltZywgbGlrZXN9KXtcclxuICAgICAgICAgICAga2FrYW9TZW5kKHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2hhcmUoe2FkZHI6J+2FjOyKpO2KuCcsIHRpdGxlOifthYzsiqTtirgnLCBkZXM6J+2FjOyKpO2KuCcsIGltZzon7YWM7Iqk7Yq4JywgbGlrZXM6J+2FjOyKpO2KuCd9KX0+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9