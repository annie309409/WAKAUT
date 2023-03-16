webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KakaoShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoShare.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function KakaoShare() {
  _s();

  var Kakao = {}; // useEffect(() => {
  //     window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
  //     console.log(Kakao.isInitialized());
  //   }, []);

  if (true) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      Kakao = window.Kakao;
    }, []);
  }

  function share(_ref) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: share({
      'addr': 'test',
      'title': 'test',
      'des': 'test',
      'img': 'test',
      'likes': 'test'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "\uD14C\uC2A4\uD2B8\uCE74\uCE74\uC624"));
}

_s(KakaoShare, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = KakaoShare;

var _c;

$RefreshReg$(_c, "KakaoShare");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJLYWthb1NoYXJlIiwiS2FrYW8iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzaGFyZSIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImltZyIsImxpa2VzIiwiU2hhcmUiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsaW5rIiwibW9iaWxlV2ViVXJsIiwid2ViVXJsIiwic29jaWFsIiwibGlrZUNvdW50IiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxHQUFxQjtBQUFBOztBQUNoQyxNQUFJQyxLQUFLLEdBQUcsRUFBWixDQURnQyxDQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFtQztBQUMvQkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ1pELFdBQUssR0FBR0UsTUFBTSxDQUFDRixLQUFmO0FBQ0QsS0FGTSxFQUVKLEVBRkksQ0FBVDtBQUdIOztBQUNELFdBQVNHLEtBQVQsT0FBaUY7QUFBQSxRQUExREMsSUFBMEQsUUFBakUsTUFBaUU7QUFBQSxRQUE1Q0MsS0FBNEMsUUFBcEQsT0FBb0Q7QUFBQSxRQUEvQkMsR0FBK0IsUUFBckMsS0FBcUM7QUFBQSxRQUFwQkMsR0FBb0IsUUFBMUIsS0FBMEI7QUFBQSxRQUFQQyxLQUFPLFFBQWYsT0FBZTtBQUM3RVIsU0FBSyxDQUFDUyxLQUFOLENBQVlDLFdBQVosQ0FBd0I7QUFDeEJDLGdCQUFVLEVBQUUsVUFEWTtBQUV4QkMsYUFBTyxFQUFFUixJQUZlO0FBR3hCUyxrQkFBWSxFQUFFUixLQUhVO0FBSXhCUyxhQUFPLEVBQUU7QUFDTFQsYUFBSyxFQUFFQSxLQURGO0FBRUxVLG1CQUFXLEVBQUNULEdBRlA7QUFHTFUsZ0JBQVEsRUFBQ1QsR0FISjtBQUlMVSxZQUFJLEVBQUU7QUFDTjtBQUNBQyxzQkFBWSxFQUFFLHdCQUZSO0FBR05DLGdCQUFNLEVBQUU7QUFIRjtBQUpELE9BSmU7QUFjeEJDLFlBQU0sRUFBRTtBQUNKQyxpQkFBUyxFQUFFYixLQURQLENBRUo7QUFDQTs7QUFISSxPQWRnQjtBQW1CeEJjLGFBQU8sRUFBRSxDQUNMO0FBQ0FqQixhQUFLLEVBQUUsUUFEUDtBQUVBWSxZQUFJLEVBQUU7QUFDRkMsc0JBQVksRUFBRSx3QkFEWjtBQUVGQyxnQkFBTSxFQUFFO0FBRk47QUFGTixPQURLO0FBbkJlLEtBQXhCO0FBNkJIOztBQUNELFNBQ0ksbUVBQ0k7QUFBUSxXQUFPLEVBQUVoQixLQUFLLENBQUM7QUFBQyxjQUFPLE1BQVI7QUFBZ0IsZUFBUSxNQUF4QjtBQUFnQyxhQUFNLE1BQXRDO0FBQThDLGFBQU0sTUFBcEQ7QUFBNEQsZUFBUTtBQUFwRSxLQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREosQ0FESjtBQUtIOztHQWhEdUJKLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGU4YmM4ZmI3YWZjYTZhYjkwMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvU2hhcmUoKXtcclxuICAgIGxldCBLYWthbyA9IHt9O1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhLYWthby5pc0luaXRpYWxpemVkKCkpO1xyXG4gICAgLy8gICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEtha2FvID0gd2luZG93Lktha2FvO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hhcmUoeydhZGRyJzphZGRyLCAndGl0bGUnOnRpdGxlLCAnZGVzJzpkZXMsICdpbWcnOmltZywgJ2xpa2VzJzpsaWtlc30pe1xyXG4gICAgICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuICAgICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4gICAgICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgICAgICAgICBpbWFnZVVybDppbWcsXHJcbiAgICAgICAgICAgIGxpbms6IHtcclxuICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hhcmUoeydhZGRyJzondGVzdCcsICd0aXRsZSc6J3Rlc3QnLCAnZGVzJzondGVzdCcsICdpbWcnOid0ZXN0JywgJ2xpa2VzJzondGVzdCd9KX0+7YWM7Iqk7Yq47Lm07Lm07JikPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==