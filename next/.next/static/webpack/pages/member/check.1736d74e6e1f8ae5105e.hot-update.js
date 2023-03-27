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
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, session.userid, msg), msg === '님은 아직 가입되지 않았습니다.' ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "\uC544\uB798\uC758 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uAC04\uD3B8\uD558\uAC8C \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 55
    }
  }), "\uAC00\uC785\uC744 \uD558\uBA74 \uAE00\uC4F0\uAE30 \uB313\uAE00 \uB4F1\uC758 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uC0AC\uC774\uD2B8\uB97C \uBCF4\uB294\uAC83\uC5D4 \uC774\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: socialJoin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVtYmVyL2NoZWNrLmpzIl0sIm5hbWVzIjpbImNoZWNrU29jaWFsIiwic2Vzc2lvbiIsInVzZVN0YXRlIiwibXNnIiwic2V0TXNnIiwiZHQiLCJEYXRhcyIsInVzZXJpZCIsInRoZW4iLCJyZXMiLCJsZW5ndGgiLCJsb2NhdGlvbiIsImhyZWYiLCJzb2NpYWxKb2luIiwibmFtZSIsImVtYWlsIiwidXNlRWZmZWN0IiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFUQyxPQUFTLFFBQVRBLE9BQVM7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLDRCQUFELENBRFk7QUFBQSxNQUNuQ0MsR0FEbUM7QUFBQSxNQUMvQkMsTUFEK0I7O0FBQUEsV0FFM0JDLEVBRjJCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlSQUUxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNtQkMsaUVBQUssQ0FBQyxpQkFBRCxtQkFBNkJMLE9BQU8sQ0FBQ00sTUFBckMsRUFBTCxDQUFvREMsSUFBcEQsQ0FBeUQsVUFBQUMsR0FBRztBQUFBLHVCQUFFQSxHQUFGO0FBQUEsZUFBNUQsQ0FEbkI7O0FBQUE7QUFDUUEsaUJBRFI7O0FBRUksa0JBQUdBLEdBQUcsQ0FBQ0MsTUFBSixHQUFXLENBQWQsRUFBZ0I7QUFDWkMsd0JBQVEsQ0FBQ0MsSUFBVCxHQUFjLEdBQWQ7QUFDSCxlQUZELE1BRUs7QUFDRFIsc0JBQU0sQ0FBQyxtQkFBRCxDQUFOO0FBQ0g7O0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGMEM7QUFBQTtBQUFBOztBQUFBLFdBVzNCUyxVQVgyQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5UkFXMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1VQLGlFQUFLLENBQUMsaUJBQUQsbUJBQTZCTCxPQUFPLENBQUNNLE1BQXJDLG1CQUFvRE4sT0FBTyxDQUFDYSxJQUE1RCxvQkFBMEViLE9BQU8sQ0FBQ2MsS0FBbEYsRUFBTCxDQUFnR1AsSUFBaEcsQ0FBcUcsVUFBQUMsR0FBRztBQUFBLHVCQUFFQSxHQUFGO0FBQUEsZUFBeEcsQ0FEVjs7QUFBQTtBQUVJRSxzQkFBUSxDQUFDQyxJQUFULEdBQWMsR0FBZDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVgwQztBQUFBO0FBQUE7O0FBZTFDSSx5REFBUyxDQUFDLFlBQUk7QUFDVlgsTUFBRTtBQUNMLEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFHQSxTQUNJLG1FQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0osT0FBTyxDQUFDTSxNQUFiLEVBQXFCSixHQUFyQixDQURKLEVBR1NBLEdBQUcsS0FBRyxtQkFBUCxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdJQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlCLGlQQURKLEVBRUksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBRVUsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGSixDQURBLEdBSVEsRUFQaEIsQ0FESixDQURKO0FBY0g7O0dBaEN1QmIsVzs7QUFpQ3hCaUIsNkVBQVMsQ0FBQ2pCLFdBQUQsRUFBYTtBQUFDa0IsT0FBSyxFQUFDLGlCQUFQO0FBQXlCQyxhQUFXLEVBQUM7QUFBckMsQ0FBYixDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbWJlci9jaGVjay4xNzM2ZDc0ZTZlMWY4YWU1MTA1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvZ2V0TGF5b3V0JztcclxuaW1wb3J0IHtEYXRhc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mZXV0aWxzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1NvY2lhbCh7c2Vzc2lvbn0pe1xyXG4gICAgY29uc3QgW21zZyxzZXRNc2ddID0gIHVzZVN0YXRlKCfri5jsnYAg7J247Kad65CcIOyCrOyaqeyekOyeheuLiOuLpC4g66mU7J247Jy866GcIOydtOuPme2VqeuLiOuLpC4nKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGR0KCl7XHJcbiAgICAgICAgbGV0IHJlcz0gYXdhaXQgRGF0YXMoJy9tZW1iZXIvY2hlY2tlZCcsYHVzZXJpZD0ke3Nlc3Npb24udXNlcmlkfWApLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgICAgIGlmKHJlcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWY9Jy8nXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldE1zZyhcIuuLmOydgCDslYTsp4Eg6rCA7J6F65CY7KeAIOyViuyVmOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc29jaWFsSm9pbigpe1xyXG4gICAgICAgIGF3YWl0IERhdGFzKCcvbWVtYmVyL2NoZWNrZWQnLGB1c2VyaWQ9JHtzZXNzaW9uLnVzZXJpZH0mbmFtZT0ke3Nlc3Npb24ubmFtZX0mZW1haWw9JHtzZXNzaW9uLmVtYWlsfWApLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWY9Jy8nXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkdCgpO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8PiBcclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2NoZWNrJz5cclxuICAgICAgICAgICAgICAgIDxoMj57c2Vzc2lvbi51c2VyaWR9e21zZ308L2gyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIChtc2c9PT0n64uY7J2AIOyVhOyngSDqsIDsnoXrkJjsp4Ag7JWK7JWY7Iq164uI64ukLicpP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuyVhOuemOydmCDrsoTtirzsnYQg64iM65+sIOqwhO2OuO2VmOqyjCDqsIDsnoXtlaAg7IiYIOyeiOyKteuLiOuLpC48YnIgLz7qsIDsnoXsnYQg7ZWY66m0IOq4gOyTsOq4sCDrjJPquIAg65Ox7J2YIOq4sOuKpeydhCDsgqzsmqntlaAg7IiYIOyeiOyngOunjCwg7IKs7J207Yq466W8IOuztOuKlOqyg+yXlCDsnbTsg4HsnbQg7JeG7Iq164uI64ukLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzb2NpYWxKb2lufT7qsIDsnoXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOicnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmdldExheW91dChjaGVja1NvY2lhbCx7dGl0bGU6J1dBS0FVVCEg7ZqM7JuQ6rCA7J6FIOyytO2BrCcsZGVzY3JpcHRpb246J+2ajOybkOqwgOyehSDssrTtgawg7Y6Y7J207KeAJ30pIl0sInNvdXJjZVJvb3QiOiIifQ==