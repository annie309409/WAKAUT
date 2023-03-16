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
var _s = $RefreshSig$();

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Kakao = window.Kakao;
    window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    setKakao(window.Kakao);
  }, []);
  console.log(kakao);
  return kakao;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJLYWthb1NldCIsInVzZVN0YXRlIiwia2FrYW8iLCJzZXRLYWthbyIsInVzZUVmZmVjdCIsIktha2FvIiwid2luZG93IiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQVEsTUFBRSxZQUFJO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsSUFBRCxDQURUO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsUUFEVzs7QUFFekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLEdBQUdDLE1BQU0sQ0FBQ0QsS0FBZjtBQUNBQyxVQUFNLENBQUNELEtBQVAsQ0FBYUUsSUFBYixDQUFrQixrQ0FBbEI7QUFDQUosWUFBUSxDQUFDRyxNQUFNLENBQUNELEtBQVIsQ0FBUjtBQUNILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQSxTQUFPQSxLQUFQO0FBQ0gsQ0FUc0IsaUNBQXZCLEUsQ0FXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOTJkZGJiYzFkY2Y0OThmMmU3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2FrYW9TaGFyZSgpe1xyXG4vLyAgICAgbGV0IEtha2FvID0ge307XHJcbi8vICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXHJcbi8vICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICAgICAgS2FrYW8gPSB3aW5kb3cuS2FrYW87XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhLYWthbyk7XHJcbi8vICAgICAgICAgfSwgW10pO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICByZXR1cm4oXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0ZXN0fT7thYzsiqTtirjsubTsubTsmKQ8L2J1dHRvbj5cclxuLy8gICAgICAgICA8Lz5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQgPSgpPT57XHJcbiAgICBjb25zdCBba2FrYW8sIHNldEtha2FvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBLYWthbyA9IHdpbmRvdy5LYWthbztcclxuICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICBzZXRLYWthbyh3aW5kb3cuS2FrYW8pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc29sZS5sb2coa2FrYW8pO1xyXG4gICAgcmV0dXJuIGtha2FvO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBzaGFyZSh7YWRkciwgdGl0bGUsIGRlcywgaW1nLCBsaWtlc30pe1xyXG4vLyAgICAgS2FrYW8uU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4vLyAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuLy8gICAgIGFkZHJlc3M6IGFkZHIsXHJcbi8vICAgICBhZGRyZXNzVGl0bGU6IHRpdGxlLFxyXG4vLyAgICAgY29udGVudDoge1xyXG4vLyAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjpkZXMsXHJcbi8vICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4vLyAgICAgICAgIGxpbms6IHtcclxuLy8gICAgICAgICAvLyBb64K0IOyVoO2UjOumrOy8gOydtOyFmF0gPiBb7ZSM656r7Y+8XSDsl5DshJwg65Ox66Gd7ZWcIOyCrOydtO2KuCDrj4TrqZTsnbjqs7wg7J287LmY7ZW07JW8IO2VqFxyXG4vLyAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4vLyAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgICAgc29jaWFsOiB7XHJcbi8vICAgICAgICAgbGlrZUNvdW50OiBsaWtlcyxcclxuLy8gICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4vLyAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgYnV0dG9uczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4vLyAgICAgICAgIGxpbms6IHtcclxuLy8gICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbi8vICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgICB9KTtcclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=