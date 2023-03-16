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
    console.log(Kakao.Share);
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
  }

  console.log(kakao);
  return __jsx("button", {
    onClick: share(kakao, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJ1c2VTdGF0ZSIsImtha2FvIiwic2V0S2FrYW8iLCJ1c2VFZmZlY3QiLCJLYWthbyIsIndpbmRvdyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiU2hhcmUiLCJzaGFyZSIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImltZyIsImxpa2VzIiwic2VuZERlZmF1bHQiLCJvYmplY3RUeXBlIiwiYWRkcmVzcyIsImFkZHJlc3NUaXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwibGluayIsIm1vYmlsZVdlYlVybCIsIndlYlVybCIsInNvY2lhbCIsImxpa2VDb3VudCIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUVsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFmO0FBQ0FDLFVBQU0sQ0FBQ0QsS0FBUCxDQUFhRSxJQUFiLENBQWtCLGtDQUFsQjtBQUNBSixZQUFRLENBQUNHLE1BQU0sQ0FBQ0QsS0FBUixDQUFSO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNLLEtBQWxCO0FBQ0gsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFNQSxXQUFTQyxLQUFULENBQWVOLEtBQWYsUUFBb0Q7QUFBQSxRQUE5Qk8sSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsUUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLFFBQWpCQyxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxRQUFaQyxHQUFZLFFBQVpBLEdBQVk7QUFBQSxRQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFDNUNYLFNBQUssQ0FBQ0ssS0FBTixDQUFZTyxXQUFaLENBQXdCO0FBQ3hCQyxnQkFBVSxFQUFFLFVBRFk7QUFFeEJDLGFBQU8sRUFBRVAsSUFGZTtBQUd4QlEsa0JBQVksRUFBRVAsS0FIVTtBQUl4QlEsYUFBTyxFQUFFO0FBQ0xSLGFBQUssRUFBRUEsS0FERjtBQUVMUyxtQkFBVyxFQUFDUixHQUZQO0FBR0xTLGdCQUFRLEVBQUNSLEdBSEo7QUFJTFMsWUFBSSxFQUFFO0FBQ047QUFDQUMsc0JBQVksRUFBRSx3QkFGUjtBQUdOQyxnQkFBTSxFQUFFO0FBSEY7QUFKRCxPQUplO0FBY3hCQyxZQUFNLEVBQUU7QUFDSkMsaUJBQVMsRUFBRVosS0FEUCxDQUVKO0FBQ0E7O0FBSEksT0FkZ0I7QUFtQnhCYSxhQUFPLEVBQUUsQ0FDTDtBQUNBaEIsYUFBSyxFQUFFLFFBRFA7QUFFQVcsWUFBSSxFQUFFO0FBQ0ZDLHNCQUFZLEVBQUUsd0JBRFo7QUFFRkMsZ0JBQU0sRUFBRTtBQUZOO0FBRk4sT0FESztBQW5CZSxLQUF4QjtBQTZCUDs7QUFFRGxCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFaO0FBQ0EsU0FDSTtBQUFRLFdBQU8sRUFBRVMsS0FBSyxDQUFDVCxLQUFELEVBQU87QUFBQ1UsVUFBSSxFQUFDLEtBQU47QUFBYUMsV0FBSyxFQUFDLEtBQW5CO0FBQTBCQyxTQUFHLEVBQUMsS0FBOUI7QUFBcUNDLFNBQUcsRUFBQyxLQUF6QztBQUFnREMsV0FBSyxFQUFDO0FBQXRELEtBQVAsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESjtBQUdILENBNUNEOztHQUFNaEIsUTs7S0FBQUEsUTtBQThDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzVlODlhYzA1ZTY4OThmNzRjNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCAsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEtha2FvU2V0ID0gKCkgPT57XHJcbiAgICBjb25zdCBba2FrYW8sIHNldEtha2FvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBLYWthbyA9IHdpbmRvdy5LYWthbztcclxuICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICBzZXRLYWthbyh3aW5kb3cuS2FrYW8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEtha2FvLlNoYXJlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHNoYXJlKEtha2FvLHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbiAgICAgICAgICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2hhcmUoa2FrYW8se2FkZHI6J+2FjOyKpO2KuCcsIHRpdGxlOifthYzsiqTtirgnLCBkZXM6J+2FjOyKpO2KuCcsIGltZzon7YWM7Iqk7Yq4JywgbGlrZXM6J+2FjOyKpO2KuCd9KX0+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9