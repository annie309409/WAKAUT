webpackHotUpdate_N_E("pages/member/check",{

/***/ "./pages/member/check.js":
/*!*******************************!*\
  !*** ./pages/member/check.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkSocial; });
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _components_feutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/feutils */ "./components/feutils.js");
/* harmony import */ var _components_feutils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_feutils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/kakaobtn.png */ "./assets/kakaobtn.png");
/* harmony import */ var _assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\member\\check.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function checkSocial(_ref) {
  _s();

  var session = _ref.session;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('님은 인증된 사용자입니다. 메인으로 이동합니다.'),
      msg = _useState[0],
      setMsg = _useState[1];

  function dt() {
    return _dt.apply(this, arguments);
  }

  function _dt() {
    _dt = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_components_feutils__WEBPACK_IMPORTED_MODULE_4__["Datas"])('/member/checked', "userid=".concat(session.userid)).then(function (res) {
                return res;
              });

            case 2:
              res = _context.sent;

              if (res.length > 0) {
                location.href = '/';
              } else {
                setMsg("님은 아직 가입되지 않았습니다.");
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _dt.apply(this, arguments);
  }

  function socialJoin() {
    return _socialJoin.apply(this, arguments);
  }

  function _socialJoin() {
    _socialJoin = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_components_feutils__WEBPACK_IMPORTED_MODULE_4__["Datas"])('/member/checked', "userid=".concat(session.userid, "&name=").concat(session.name, "&email=").concat(session.email)).then(function (res) {
                return res;
              });

            case 2:
              location.href = '/';

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _socialJoin.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dt();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "https://i1.sndcdn.com/avatars-000570913005-fip5ud-t500x500.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, session.userid, msg), msg === '님은 아직 가입되지 않았습니다.' ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "\uC544\uB798\uC758 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uAC04\uD3B8\uD558\uAC8C \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 55
    }
  }), "\uAC00\uC785\uC744 \uD558\uBA74 \uAE00\uC4F0\uAE30 \uB313\uAE00 \uB4F1\uC758 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uC0AC\uC774\uD2B8\uB97C \uBCF4\uB294\uAC83\uC5D4 \uC774\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: socialJoin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, "\uAC00\uC785\uD558\uAE30")) : ''));
}

_s(checkSocial, "RsWSPT2NhhzfndVohNHZDCKktGc=");

Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_3__["default"])(checkSocial, {
  title: 'WAKAUT! 회원가입 체크',
  description: '회원가입 체크 페이지'
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVtYmVyL2NoZWNrLmpzIl0sIm5hbWVzIjpbImNoZWNrU29jaWFsIiwic2Vzc2lvbiIsInVzZVN0YXRlIiwibXNnIiwic2V0TXNnIiwiZHQiLCJEYXRhcyIsInVzZXJpZCIsInRoZW4iLCJyZXMiLCJsZW5ndGgiLCJsb2NhdGlvbiIsImhyZWYiLCJzb2NpYWxKb2luIiwibmFtZSIsImVtYWlsIiwidXNlRWZmZWN0IiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFUQyxPQUFTLFFBQVRBLE9BQVM7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLDRCQUFELENBRFk7QUFBQSxNQUNuQ0MsR0FEbUM7QUFBQSxNQUMvQkMsTUFEK0I7O0FBQUEsV0FFM0JDLEVBRjJCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlSQUUxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNtQkMsaUVBQUssQ0FBQyxpQkFBRCxtQkFBNkJMLE9BQU8sQ0FBQ00sTUFBckMsRUFBTCxDQUFvREMsSUFBcEQsQ0FBeUQsVUFBQUMsR0FBRztBQUFBLHVCQUFFQSxHQUFGO0FBQUEsZUFBNUQsQ0FEbkI7O0FBQUE7QUFDUUEsaUJBRFI7O0FBRUksa0JBQUdBLEdBQUcsQ0FBQ0MsTUFBSixHQUFXLENBQWQsRUFBZ0I7QUFDWkMsd0JBQVEsQ0FBQ0MsSUFBVCxHQUFjLEdBQWQ7QUFDSCxlQUZELE1BRUs7QUFDRFIsc0JBQU0sQ0FBQyxtQkFBRCxDQUFOO0FBQ0g7O0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGMEM7QUFBQTtBQUFBOztBQUFBLFdBVzNCUyxVQVgyQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5UkFXMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1VQLGlFQUFLLENBQUMsaUJBQUQsbUJBQTZCTCxPQUFPLENBQUNNLE1BQXJDLG1CQUFvRE4sT0FBTyxDQUFDYSxJQUE1RCxvQkFBMEViLE9BQU8sQ0FBQ2MsS0FBbEYsRUFBTCxDQUFnR1AsSUFBaEcsQ0FBcUcsVUFBQUMsR0FBRztBQUFBLHVCQUFFQSxHQUFGO0FBQUEsZUFBeEcsQ0FEVjs7QUFBQTtBQUVJRSxzQkFBUSxDQUFDQyxJQUFULEdBQWMsR0FBZDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVgwQztBQUFBO0FBQUE7O0FBZTFDSSx5REFBUyxDQUFDLFlBQUk7QUFDVlgsTUFBRTtBQUNMLEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFHQSxTQUNJLG1FQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBTyxPQUFHLEVBQUMsZ0VBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixPQUFPLENBQUNNLE1BQWIsRUFBcUJKLEdBQXJCLENBRkosRUFJU0EsR0FBRyxLQUFHLG1CQUFQLEdBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0lBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUIsaVBBREosRUFFSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFVSxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUZKLENBREEsR0FJUSxFQVJoQixDQURKLENBREo7QUFlSDs7R0FqQ3VCYixXOztBQWtDeEJpQiw2RUFBUyxDQUFDakIsV0FBRCxFQUFhO0FBQUNrQixPQUFLLEVBQUMsaUJBQVA7QUFBeUJDLGFBQVcsRUFBQztBQUFyQyxDQUFiLENBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL2NoZWNrLjJjYmVmZDIzNDNiY2IxYmVkODM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZldXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsQnV0dG9uLEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHt3YWthdXR9IGZyb20gJy4uLy4uL2Fzc2V0cy9rYWthb2J0bi5wbmcnO1xyXG5pbXBvcnQga2FrYW8gIGZyb20gJy4uLy4uL2Fzc2V0cy9rYWthb2J0bi5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tTb2NpYWwoe3Nlc3Npb259KXtcclxuICAgIGNvbnN0IFttc2csc2V0TXNnXSA9ICB1c2VTdGF0ZSgn64uY7J2AIOyduOymneuQnCDsgqzsmqnsnpDsnoXri4jri6QuIOuplOyduOycvOuhnCDsnbTrj5ntlanri4jri6QuJyk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkdCgpe1xyXG4gICAgICAgIGxldCByZXM9IGF3YWl0IERhdGFzKCcvbWVtYmVyL2NoZWNrZWQnLGB1c2VyaWQ9JHtzZXNzaW9uLnVzZXJpZH1gKS50aGVuKHJlcz0+cmVzKTtcclxuICAgICAgICBpZihyZXMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmPScvJ1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRNc2coXCLri5jsnYAg7JWE7KeBIOqwgOyeheuQmOyngCDslYrslZjsirXri4jri6QuXCIpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNvY2lhbEpvaW4oKXtcclxuICAgICAgICBhd2FpdCBEYXRhcygnL21lbWJlci9jaGVja2VkJyxgdXNlcmlkPSR7c2Vzc2lvbi51c2VyaWR9Jm5hbWU9JHtzZXNzaW9uLm5hbWV9JmVtYWlsPSR7c2Vzc2lvbi5lbWFpbH1gKS50aGVuKHJlcz0+cmVzKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmPScvJ1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZHQoKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdjaGVjayc+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL2kxLnNuZGNkbi5jb20vYXZhdGFycy0wMDA1NzA5MTMwMDUtZmlwNXVkLXQ1MDB4NTAwLmpwZycvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntzZXNzaW9uLnVzZXJpZH17bXNnfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKG1zZz09PSfri5jsnYAg7JWE7KeBIOqwgOyeheuQmOyngCDslYrslZjsirXri4jri6QuJyk/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+7JWE656Y7J2YIOuyhO2KvOydhCDriIzrn6wg6rCE7Y647ZWY6rKMIOqwgOyehe2VoCDsiJgg7J6I7Iq164uI64ukLjxiciAvPuqwgOyeheydhCDtlZjrqbQg6riA7JOw6riwIOuMk+q4gCDrk7HsnZgg6riw64ql7J2EIOyCrOyaqe2VoCDsiJgg7J6I7KeA66eMLCDsgqzsnbTtirjrpbwg67O064qU6rKD7JeUIOydtOyDgeydtCDsl4bsirXri4jri6QuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NvY2lhbEpvaW59PuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6JydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZ2V0TGF5b3V0KGNoZWNrU29jaWFsLHt0aXRsZTonV0FLQVVUISDtmozsm5DqsIDsnoUg7LK07YGsJyxkZXNjcmlwdGlvbjon7ZqM7JuQ6rCA7J6FIOyytO2BrCDtjpjsnbTsp4AnfSkiXSwic291cmNlUm9vdCI6IiJ9