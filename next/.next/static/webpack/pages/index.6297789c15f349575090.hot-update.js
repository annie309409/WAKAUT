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
      Kakao = window;
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "\uD14C\uC2A4\uD2B8\uCE74\uCE74\uC624"));
} // function kakaoShare({'addr':addr, 'title':title, 'des':des, 'img':img, 'likes':likes}) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TaGFyZS5qcyJdLCJuYW1lcyI6WyJLYWthb1NoYXJlIiwiS2FrYW8iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzaGFyZSIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImltZyIsImxpa2VzIiwiU2hhcmUiLCJzZW5kRGVmYXVsdCIsIm9iamVjdFR5cGUiLCJhZGRyZXNzIiwiYWRkcmVzc1RpdGxlIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJsaW5rIiwibW9iaWxlV2ViVXJsIiwid2ViVXJsIiwic29jaWFsIiwibGlrZUNvdW50IiwiYnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxHQUFxQjtBQUFBOztBQUNoQyxNQUFJQyxLQUFLLEdBQUcsRUFBWixDQURnQyxDQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFtQztBQUMvQkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ1pELFdBQUssR0FBR0UsTUFBUjtBQUNELEtBRk0sRUFFSixFQUZJLENBQVQ7QUFHSDs7QUFDRCxXQUFTQyxLQUFULE9BQWlGO0FBQUEsUUFBMURDLElBQTBELFFBQWpFLE1BQWlFO0FBQUEsUUFBNUNDLEtBQTRDLFFBQXBELE9BQW9EO0FBQUEsUUFBL0JDLEdBQStCLFFBQXJDLEtBQXFDO0FBQUEsUUFBcEJDLEdBQW9CLFFBQTFCLEtBQTBCO0FBQUEsUUFBUEMsS0FBTyxRQUFmLE9BQWU7QUFDN0VSLFNBQUssQ0FBQ1MsS0FBTixDQUFZQyxXQUFaLENBQXdCO0FBQ3hCQyxnQkFBVSxFQUFFLFVBRFk7QUFFeEJDLGFBQU8sRUFBRVIsSUFGZTtBQUd4QlMsa0JBQVksRUFBRVIsS0FIVTtBQUl4QlMsYUFBTyxFQUFFO0FBQ0xULGFBQUssRUFBRUEsS0FERjtBQUVMVSxtQkFBVyxFQUFDVCxHQUZQO0FBR0xVLGdCQUFRLEVBQUNULEdBSEo7QUFJTFUsWUFBSSxFQUFFO0FBQ047QUFDQUMsc0JBQVksRUFBRSx3QkFGUjtBQUdOQyxnQkFBTSxFQUFFO0FBSEY7QUFKRCxPQUplO0FBY3hCQyxZQUFNLEVBQUU7QUFDSkMsaUJBQVMsRUFBRWIsS0FEUCxDQUVKO0FBQ0E7O0FBSEksT0FkZ0I7QUFtQnhCYyxhQUFPLEVBQUUsQ0FDTDtBQUNBakIsYUFBSyxFQUFFLFFBRFA7QUFFQVksWUFBSSxFQUFFO0FBQ0ZDLHNCQUFZLEVBQUUsd0JBRFo7QUFFRkMsZ0JBQU0sRUFBRTtBQUZOO0FBRk4sT0FESztBQW5CZSxLQUF4QjtBQTZCSDs7QUFDRCxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREosQ0FESjtBQUtILEMsQ0FHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FqRndCcEIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Mjk3Nzg5YzE1ZjM0OTU3NTA5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2FrYW9TaGFyZSgpe1xyXG4gICAgbGV0IEtha2FvID0ge307XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKEtha2FvLmlzSW5pdGlhbGl6ZWQoKSk7XHJcbiAgICAvLyAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgS2FrYW8gPSB3aW5kb3c7XHJcbiAgICAgICAgICB9LCBbXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaGFyZSh7J2FkZHInOmFkZHIsICd0aXRsZSc6dGl0bGUsICdkZXMnOmRlcywgJ2ltZyc6aW1nLCAnbGlrZXMnOmxpa2VzfSl7XHJcbiAgICAgICAgS2FrYW8uU2hhcmUuc2VuZERlZmF1bHQoe1xyXG4gICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgICAgICBhZGRyZXNzVGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpkZXMsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOmltZyxcclxuICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAvLyBb64K0IOyVoO2UjOumrOy8gOydtOyFmF0gPiBb7ZSM656r7Y+8XSDsl5DshJwg65Ox66Gd7ZWcIOyCrOydtO2KuCDrj4TrqZTsnbjqs7wg7J287LmY7ZW07JW8IO2VqFxyXG4gICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgbGlrZUNvdW50OiBsaWtlcyxcclxuICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxyXG4gICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbj7thYzsiqTtirjsubTsubTsmKQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGtha2FvU2hhcmUoeydhZGRyJzphZGRyLCAndGl0bGUnOnRpdGxlLCAnZGVzJzpkZXMsICdpbWcnOmltZywgJ2xpa2VzJzpsaWtlc30pIHtcclxuLy8gICAgIEtha2FvLlNoYXJlLnNlbmREZWZhdWx0KHtcclxuLy8gICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbi8vICAgICBhZGRyZXNzOiBhZGRyLFxyXG4vLyAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuLy8gICAgIGNvbnRlbnQ6IHtcclxuLy8gICAgICAgICB0aXRsZTogdGl0bGUsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4vLyAgICAgICAgIGltYWdlVXJsOmltZyxcclxuLy8gICAgICAgICBsaW5rOiB7XHJcbi8vICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuLy8gICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHNvY2lhbDoge1xyXG4vLyAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbi8vICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuLy8gICAgICAgICAvLyBzaGFyZWRDb3VudDogc2hhcmVzLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGJ1dHRvbnM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuLy8gICAgICAgICBsaW5rOiB7XHJcbi8vICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMC8nLFxyXG4vLyAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgfSk7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9