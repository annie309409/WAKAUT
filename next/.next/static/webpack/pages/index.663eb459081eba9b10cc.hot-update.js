webpackHotUpdate_N_E("pages/index",{

/***/ "./services/kakaoSet.js":
/*!******************************!*\
  !*** ./services/kakaoSet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoSet.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var KakaoSet = function KakaoSet(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      kakaoSend = _useState[0],
      setKakaoSend = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])( /*#__PURE__*/Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Kakao = window.Kakao;
            window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
            console.log('이게필요해', window.Kakao.Share);
            _context.t0 = test;
            _context.next = 6;
            return window.Kakao.Share;

          case 6:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  function test(_x) {
    return _test.apply(this, arguments);
  }

  function _test() {
    _test = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(a) {
      return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = console;
              _context2.next = 3;
              return a;

            case 3:
              _context2.t1 = _context2.sent;
              _context2.t2 = '이건뭐냐고!' + _context2.t1;

              _context2.t0.log.call(_context2.t0, _context2.t2);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _test.apply(this, arguments);
  }

  ; // function share({addr, title, des, img, likes}){
  //     kakaoSend.sendDefault({
  //         objectType: 'location',
  //         address: addr,
  //         addressTitle: title,
  //         content: {
  //             title: title,
  //             description:des,
  //             imageUrl:img,
  //             link: {
  //             // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  //             mobileWebUrl: 'http://localhost:3000/',
  //             webUrl: 'http://localhost:3000/',
  //             },
  //         },
  //         social: {
  //             likeCount: likes,
  //             // commentCount: comments,
  //             // sharedCount: shares,
  //         },
  //         buttons: [
  //             {
  //             title: '웹으로 보기',
  //             link: {
  //                 mobileWebUrl: 'http://localhost:3000/',
  //                 webUrl: 'http://localhost:3000/',
  //             },
  //             },
  //         ],
  //         });
  // }
  // console.log(kakao);

  return __jsx("button", {
    onClick: test,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMva2FrYW9TZXQuanMiXSwibmFtZXMiOlsiS2FrYW9TZXQiLCJwcm9wcyIsInVzZVN0YXRlIiwia2FrYW9TZW5kIiwic2V0S2FrYW9TZW5kIiwidXNlRWZmZWN0IiwiS2FrYW8iLCJ3aW5kb3ciLCJpbml0IiwiY29uc29sZSIsImxvZyIsIlNoYXJlIiwidGVzdCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDaEJDLFNBRGdCO0FBQUEsTUFDTkMsWUFETTs7QUFFdkJDLHlEQUFTLHNSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsaUJBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFmO0FBQ0FDLGtCQUFNLENBQUNELEtBQVAsQ0FBYUUsSUFBYixDQUFrQixrQ0FBbEI7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JILE1BQU0sQ0FBQ0QsS0FBUCxDQUFhSyxLQUFqQztBQUhNLDBCQUlOQyxJQUpNO0FBQUE7QUFBQSxtQkFJS0wsTUFBTSxDQUFDRCxLQUFQLENBQWFLLEtBSmxCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS04sRUFMTSxDQUFUOztBQUZ1QixXQVVSQyxJQVZRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1SQVV2QixrQkFBb0JDLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDSUosT0FESjtBQUFBO0FBQUEscUJBQytCSSxDQUQvQjs7QUFBQTtBQUFBO0FBQUEsNkJBQ2dCLFFBRGhCOztBQUFBLDJCQUNZSCxHQURaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVnVCO0FBQUE7QUFBQTs7QUFZdEIsR0Fac0IsQ0FjdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUNJO0FBQVEsV0FBTyxFQUFFRSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBR0gsQ0FsREQ7O0dBQU1aLFE7O0tBQUFBLFE7QUFvRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2M2ViNDU5MDgxZWJhOWIxMGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBLYWthb1NldCA9IChwcm9wcykgPT57XHJcbiAgICBjb25zdCBba2FrYW9TZW5kLHNldEtha2FvU2VuZF0gPSAgdXNlU3RhdGUoe30pO1xyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBLYWthbyA9IHdpbmRvdy5LYWthbztcclxuICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn7J206rKM7ZWE7JqU7ZW0Jyx3aW5kb3cuS2FrYW8uU2hhcmUpO1xyXG4gICAgICAgIHRlc3QoYXdhaXQgd2luZG93Lktha2FvLlNoYXJlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRlc3QoYSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ydtOqxtOutkOuDkOqzoCEnK2F3YWl0IGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaGFyZSh7YWRkciwgdGl0bGUsIGRlcywgaW1nLCBsaWtlc30pe1xyXG4gICAgLy8gICAgIGtha2FvU2VuZC5zZW5kRGVmYXVsdCh7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdFR5cGU6ICdsb2NhdGlvbicsXHJcbiAgICAvLyAgICAgICAgIGFkZHJlc3M6IGFkZHIsXHJcbiAgICAvLyAgICAgICAgIGFkZHJlc3NUaXRsZTogdGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOmRlcyxcclxuICAgIC8vICAgICAgICAgICAgIGltYWdlVXJsOmltZyxcclxuICAgIC8vICAgICAgICAgICAgIGxpbms6IHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbiAgICAvLyAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgICAgIHdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsaWtlQ291bnQ6IGxpa2VzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY29tbWVudENvdW50OiBjb21tZW50cyxcclxuICAgIC8vICAgICAgICAgICAgIC8vIHNoYXJlZENvdW50OiBzaGFyZXMsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbiAgICAvLyAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgXSxcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coa2FrYW8pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Rlc3R9Pu2FjOyKpO2KuCE8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2FrYW9TZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==