webpackHotUpdate_N_E("pages/member/login",{

/***/ "./assets/naverbtn.png":
false,

/***/ "./pages/member/login.js":
/*!*******************************!*\
  !*** ./pages/member/login.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/title */ "./components/title.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/kakaobtn.png */ "./assets/kakaobtn.png");
/* harmony import */ var _assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\member\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userid = _useState[0],
      setUserid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      passwd = _useState2[0],
      setPasswd = _useState2[1];

  function loginHandle(_x) {
    return _loginHandle.apply(this, arguments);
  }

  function _loginHandle() {
    _loginHandle = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _yield$signIn, error;

      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_8__["signIn"])('userid-passwd-credentials', {
                userid: userid,
                passwd: passwd,
                redirect: false
              });

            case 3:
              _yield$signIn = _context.sent;
              error = _yield$signIn.error;

              if (error) {
                alert('존재하지 않는 아이디이거나 패스워드가 일치하지 않습니다.');
              } else {
                location.href = '/member/myinfo';
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loginHandle.apply(this, arguments);
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"],
    className: "mb-3",
    controlId: "formTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_components_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "title",
    title: "\uB85C\uADF8\uC778",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"],
    className: "mb-3",
    controlId: "formID",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "text",
    placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694",
    value: userid,
    onChange: function onChange(e) {
      Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["handleInput"])(setUserid, e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"],
    className: "mb-3",
    controlId: "formPassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
    value: passwd,
    onChange: function onChange(e) {
      Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["handleInput"])(setPasswd, e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"],
    className: "mb-3",
    controlId: "sns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    className: "ms-2",
    src: _assets_kakaobtn_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    onClick: function onClick() {
      return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_8__["signIn"])('kakao', {
        callbackUrl: "/"
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    className: "mb-3",
    controlId: "formCheckbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Check, {
    type: "checkbox",
    label: "\uC544\uC774\uB514 \uC790\uB3D9 \uC800\uC7A5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    className: "mb-3",
    controlId: "formForget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    className: "mb-3",
    controlId: "formSubmit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    type: "submit",
    onClick: function onClick(e) {
      loginHandle(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC778\uD558\uAE30")))));
}

_s(Login, "XJc5vQFGZ+n+KG40Jr2ZN0FdLV4=");

_c = Login;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__["default"])(Login, {
  title: '함께해요! WAKAUT',
  description: '워크아웃에 가입하시면 다양한 정보를 받을 수 있습니다.'
});
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVtYmVyL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJwYXNzd2QiLCJzZXRQYXNzd2QiLCJsb2dpbkhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25JbiIsInJlZGlyZWN0IiwiZXJyb3IiLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsIlJvdyIsImhhbmRsZUlucHV0Iiwia2FrYW8iLCJjYWxsYmFja1VybCIsImdldExheW91dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNMQyxNQURLO0FBQUEsTUFDR0MsU0FESDs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsSUFBRCxDQUZ4QjtBQUFBLE1BRUxHLE1BRks7QUFBQSxNQUVHQyxTQUZIOztBQUFBLFdBSUdDLFdBSkg7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFRBSVosaUJBQTJCQyxDQUEzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0MsY0FBRjtBQURKO0FBQUEscUJBRTBCQywrREFBTSxDQUFDLDJCQUFELEVBQTZCO0FBQUNQLHNCQUFNLEVBQU5BLE1BQUQ7QUFBUUUsc0JBQU0sRUFBTkEsTUFBUjtBQUFnQk0sd0JBQVEsRUFBQztBQUF6QixlQUE3QixDQUZoQzs7QUFBQTtBQUFBO0FBRVdDLG1CQUZYLGlCQUVXQSxLQUZYOztBQUdJLGtCQUFHQSxLQUFILEVBQVM7QUFDTEMscUJBQUssQ0FBQyxpQ0FBRCxDQUFMO0FBQ0gsZUFGRCxNQUVLO0FBQ0RDLHdCQUFRLENBQUNDLElBQVQsR0FBZSxnQkFBZjtBQUNIOztBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSlk7QUFBQTtBQUFBOztBQWNaLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUVDLG1EQUFoQjtBQUFxQixhQUFTLEVBQUMsTUFBL0I7QUFBc0MsYUFBUyxFQUFDLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBTyxhQUFTLEVBQUMsT0FBakI7QUFBeUIsU0FBSyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBT0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUVBLG1EQUFoQjtBQUFxQixhQUFTLEVBQUMsTUFBL0I7QUFBc0MsYUFBUyxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsUUFBSSxFQUFDLE1BQW5CO0FBQTBCLGVBQVcsRUFBQyx5REFBdEM7QUFBb0QsU0FBSyxFQUFFYixNQUEzRDtBQUFtRSxZQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBSztBQUFDUyxrRUFBVyxDQUFDYixTQUFELEVBQVdJLENBQVgsQ0FBWDtBQUF5QixLQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQVBKLEVBYUksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUVRLG1EQUFoQjtBQUFxQixhQUFTLEVBQUMsTUFBL0I7QUFBc0MsYUFBUyxFQUFDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsUUFBSSxFQUFDLFVBQW5CO0FBQThCLGVBQVcsRUFBQywrREFBMUM7QUFBd0QsU0FBSyxFQUFFWCxNQUEvRDtBQUF1RSxZQUFRLEVBQUUsa0JBQUNHLENBQUQsRUFBSztBQUFDUyxrRUFBVyxDQUFDWCxTQUFELEVBQVdFLENBQVgsQ0FBWDtBQUF5QixLQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQWJKLEVBbUJJLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksTUFBRSxFQUFFUSxtREFBaEI7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQXNDLGFBQVMsRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFPLGFBQVMsRUFBQyxNQUFqQjtBQUF3QixPQUFHLEVBQUVFLDJEQUE3QjtBQUFvQyxXQUFPLEVBQUU7QUFBQSxhQUFNUiwrREFBTSxDQUFDLE9BQUQsRUFBUztBQUFFUyxtQkFBVyxFQUFFO0FBQWYsT0FBVCxDQUFaO0FBQUEsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FuQkosRUF5QkksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLFFBQUksRUFBQyxVQUFqQjtBQUE0QixTQUFLLEVBQUMsOENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXpCSixFQTRCSSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQURKLENBNUJKLEVBK0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkosRUFnQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFFBQUksRUFBQyxRQUFqQztBQUEwQyxXQUFPLEVBQUUsaUJBQUNYLENBQUQsRUFBSztBQUFDRCxpQkFBVyxDQUFDQyxDQUFELENBQVg7QUFBZSxLQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURBLENBREosQ0FoQ0osQ0FESixDQURKO0FBNENIOztHQTFEUVAsSzs7S0FBQUEsSztBQTREVG1CLDZFQUFTLENBQUNuQixLQUFELEVBQU87QUFBQ29CLE9BQUssRUFBQyxjQUFQO0FBQXNCQyxhQUFXLEVBQUM7QUFBbEMsQ0FBUCxDQUFUO0FBQ2VyQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW1iZXIvbG9naW4uYzExMGY0Mjg0MGU3MzFlYmI3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybSxCdXR0b24sUm93LENvbCxDb250YWluZXIsSW1hZ2V9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpdGxlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGtha2FvICBmcm9tICcuLi8uLi9hc3NldHMva2FrYW9idG4ucG5nJztcclxuaW1wb3J0IGdldExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2dldExheW91dFwiO1xyXG5pbXBvcnQge2dldFNlc3Npb24sIHNpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtoYW5kbGVJbnB1dH0gZnJvbSAnLi4vZmV1dGlscyc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpe1xyXG4gICAgY29uc3QgW3VzZXJpZCwgc2V0VXNlcmlkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Bhc3N3ZCwgc2V0UGFzc3dkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ2luSGFuZGxlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gYXdhaXQgc2lnbkluKCd1c2VyaWQtcGFzc3dkLWNyZWRlbnRpYWxzJyx7dXNlcmlkLHBhc3N3ZCwgcmVkaXJlY3Q6ZmFsc2V9KTtcclxuICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsobTsnqztlZjsp4Ag7JWK64qUIOyVhOydtOuUlOydtOqxsOuCmCDtjKjsiqTsm4zrk5zqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZj0gJy9tZW1iZXIvbXlpbmZvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1UaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0aXRsZVwiIHRpdGxlPVwi66Gc6re47J24XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUlEXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7JWE7J2065SU66W8IOyeheugpe2VmOyEuOyalFwiICB2YWx1ZT17dXNlcmlkfSBvbkNoYW5nZT17KGUpPT57aGFuZGxlSW5wdXQoc2V0VXNlcmlkLGUpfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpRcIiB2YWx1ZT17cGFzc3dkfSBvbkNoYW5nZT17KGUpPT57aGFuZGxlSW5wdXQoc2V0UGFzc3dkLGUpfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwic25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIm1zLTJcIiBzcmM9e2tha2FvfSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2tha2FvJyx7IGNhbGxiYWNrVXJsOiBcIi9cIiB9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiBsYWJlbD1cIuyVhOydtOuUlCDsnpDrj5kg7KCA7J6lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtRm9yZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64KY7JqUPzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc20+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+e2xvZ2luSGFuZGxlKGUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduO2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5nZXRMYXlvdXQoTG9naW4se3RpdGxlOiftlajqu5jtlbTsmpQhIFdBS0FVVCcsZGVzY3JpcHRpb246J+ybjO2BrOyVhOybg+yXkCDqsIDsnoXtlZjsi5zrqbQg64uk7JaR7ZWcIOygleuztOulvCDrsJvsnYQg7IiYIOyeiOyKteuLiOuLpC4nfSk7XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==