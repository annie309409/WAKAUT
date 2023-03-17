webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoShare.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // export default function KakaoShare(){
//     let Kakao = {};
//     if (typeof window !== 'undefined') { 
//         useEffect(() => {
//             Kakao = window.Kakao;
//             window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
//             console.log(Kakao);
//         }, []);
//     }
//     return(
//         <>
//             <button onClick={test}>테스트카카오</button>
//         </>
//     )
// }

/* harmony default export */ __webpack_exports__["default"] = (KakaoSet = _s(function () {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      kakao = _useState[0],
      setKakao = _useState[1];

  var kakaoInit = function kakaoInit() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
      console.log('성공!');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    kakaoInit();
  }, []);
  return __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\uD074\uB9AD!");
}, "M9Aay+Kquv+Se7ghUe5NsoI5tqg=")); // function share({addr, title, des, img, likes}){
//     Kakao.Share.sendDefault({
//     objectType: 'location',
//     address: addr,
//     addressTitle: title,
//     content: {
//         title: title,
//         description:des,
//         imageUrl:img,
//         link: {
//         // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
//         mobileWebUrl: 'http://localhost:3010/',
//         webUrl: 'http://localhost:3010/',
//         },
//     },
//     social: {
//         likeCount: likes,
//         // commentCount: comments,
//         // sharedCount: shares,
//     },
//     buttons: [
//         {
//         title: '웹으로 보기',
//         link: {
//             mobileWebUrl: 'http://localhost:3010/',
//             webUrl: 'http://localhost:3010/',
//         },
//         },
//     ],
//     });
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJLYWthb1NldCIsInVzZVN0YXRlIiwia2FrYW8iLCJzZXRLYWthbyIsImtha2FvSW5pdCIsIndpbmRvdyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBUSxNQUFFLFlBQUk7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxJQUFELENBRFQ7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUV6QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFJO0FBQ2xCLFFBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFDLGFBQWIsRUFBTCxFQUFtQztBQUMvQkYsWUFBTSxDQUFDQyxLQUFQLENBQWFFLElBQWIsQ0FBa0Isa0NBQWxCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDRDtBQUNOLEdBTEQ7O0FBTUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxhQUFTO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUdILENBZHNCLGlDQUF2QixFLENBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViMDAzMDk5MjVmNjhhNzgwZjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLYWthb1NoYXJlKCl7XHJcbi8vICAgICBsZXQgS2FrYW8gPSB7fTtcclxuLy8gICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyBcclxuLy8gICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBLYWthbyA9IHdpbmRvdy5LYWthbztcclxuLy8gICAgICAgICAgICAgd2luZG93Lktha2FvLmluaXQoJzY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5Jyk7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKEtha2FvKTtcclxuLy8gICAgICAgICB9LCBbXSk7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICAgIHJldHVybihcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Rlc3R9Pu2FjOyKpO2KuOy5tOy5tOyYpDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldCA9KCk9PntcclxuICAgIGNvbnN0IFtrYWthbywgc2V0S2FrYW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBrYWthb0luaXQgPSAoKT0+e1xyXG4gICAgICAgIGlmICghd2luZG93Lktha2FvLmlzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztSEnKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAga2FrYW9Jbml0KCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24+7YG066atITwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc2hhcmUoe2FkZHIsIHRpdGxlLCBkZXMsIGltZywgbGlrZXN9KXtcclxuLy8gICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuLy8gICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbi8vICAgICBhZGRyZXNzOiBhZGRyLFxyXG4vLyAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuLy8gICAgIGNvbnRlbnQ6IHtcclxuLy8gICAgICAgICB0aXRsZTogdGl0bGUsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4vLyAgICAgICAgIGltYWdlVXJsOmltZyxcclxuLy8gICAgICAgICBsaW5rOiB7XHJcbi8vICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuLy8gICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHNvY2lhbDoge1xyXG4vLyAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbi8vICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuLy8gICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGJ1dHRvbnM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuLy8gICAgICAgICBsaW5rOiB7XHJcbi8vICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4vLyAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgfSk7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9