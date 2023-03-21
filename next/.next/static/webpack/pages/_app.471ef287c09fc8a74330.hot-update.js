webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_boot_added_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/boot-added.css */ "./styles/boot-added.css");
/* harmony import */ var _styles_boot_added_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_boot_added_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");





var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function MyApp(_ref) {
  _s();

  var _Component$getLayout;

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      session = _ref.session;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  pageProps.session = session.user.userid;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    router.events.on("routeChangeStart", function () {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", function () {
      setLoading(false);
    });
  }, [router]);
  var getLayout = (_Component$getLayout = Component.getLayout) !== null && _Component$getLayout !== void 0 ? _Component$getLayout : function (page) {
    return page;
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, loading && __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }), getLayout(__jsx(Component, Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 20
    }
  }))));
}

_s(MyApp, "8810P58p93OmzehzWswFpSGjH9I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var appProps, sess;
    return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_8___default.a.getInitialProps(ctx);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["getSession"])(ctx);

          case 5:
            sess = _context.sent;
            _context.next = 8;
            return sess;

          case 8:
            appProps.session = _context.sent;
            _context.t0 = console;
            _context.next = 12;
            return sess;

          case 12:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, '쎄션!', _context.t1);

            return _context.abrupt("return", _objectSpread({}, appProps));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlciIsInVzZXJpZCIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwiZ2V0TGF5b3V0IiwicGFnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIkFwcCIsImFwcFByb3BzIiwiZ2V0U2Vzc2lvbiIsInNlc3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQWlEO0FBQUE7O0FBQUE7O0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQXJCQyxTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDL0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEK0Msa0JBRWxCQyxzREFBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRXhDQyxPQUZ3QztBQUFBLE1BRWhDQyxVQUZnQzs7QUFJL0NOLFdBQVMsQ0FBQ0MsT0FBVixHQUFvQkEsT0FBTyxDQUFDTSxJQUFSLENBQWFDLE1BQWpDO0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNaUCxVQUFNLENBQUNRLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsWUFBTTtBQUN6Q0wsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZEO0FBR0FKLFVBQU0sQ0FBQ1EsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDTCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT1AsQ0FBQ0osTUFBRCxDQVBPLENBQVQ7QUFRQSxNQUFNVSxTQUFTLDJCQUFJYixTQUFTLENBQUNhLFNBQWQsdUVBQTRCLFVBQUNDLElBQUQ7QUFBQSxXQUFRQSxJQUFSO0FBQUEsR0FBM0M7QUFDQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsT0FBTyxJQUFJLE1BQUMsNERBQUQ7QUFBUyxXQUFPLEVBQUVBLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZCxFQUVJTyxTQUFTLENBQUUsTUFBQyxTQUFELHFKQUFlWixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixDQUZiLENBREY7QUFNRDs7R0FwQlFGLEs7VUFDUUsscUQ7OztLQURSTCxLOztBQXNCVEEsS0FBSyxDQUFDZ0IsZUFBTjtBQUFBLHVUQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdDQywrQ0FBRyxDQUFDRixlQUFKLENBQW9CQyxHQUFwQixDQUhEOztBQUFBO0FBR2hCRSxvQkFIZ0I7QUFBQTtBQUFBLG1CQUlKQyxtRUFBVSxDQUFDSCxHQUFELENBSk47O0FBQUE7QUFJaEJJLGdCQUpnQjtBQUFBO0FBQUEsbUJBS0dBLElBTEg7O0FBQUE7QUFLdEJGLG9CQUFRLENBQUNoQixPQUxhO0FBQUEsMEJBTXRCbUIsT0FOc0I7QUFBQTtBQUFBLG1CQU1FRCxJQU5GOztBQUFBO0FBQUE7O0FBQUEsd0JBTWRFLEdBTmMsbUJBTVYsS0FOVTs7QUFBQSwrREFPWEosUUFQVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZW5CLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDcxZWYyODdjMDlmYzhhNzQzMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvYm9vdC1hZGRlZC5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLHNlc3Npb24gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBwYWdlUHJvcHMuc2Vzc2lvbiA9IHNlc3Npb24udXNlci51c2VyaWQ7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9LFtyb3V0ZXJdKVxyXG4gIGNvbnN0IGdldExheW91dCA9ICBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSk9PnBhZ2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+fVxyXG4gICAgICB7IGdldExheW91dCggPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPiApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpPT57XHJcbiAgLy8gbmV4dCBhcHDsnZgg6riw67O4IHByb3Bz6rCd7LK0IOy0iOq4sO2ZlFxyXG4gIC8vYXBwbGljYXRpb27ri6jsnITsnZgg7KCE7Jet67OA7IiYXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgY29uc3Qgc2VzcyA9YXdhaXQgZ2V0U2Vzc2lvbihjdHgpOyBcclxuICBhcHBQcm9wcy5zZXNzaW9uID0gYXdhaXQgc2VzcztcclxuICBjb25zb2xlLmxvZygn7I6E7IWYIScsYXdhaXQgc2Vzcyk7XHJcbiAgcmV0dXJuIHsuLi5hcHBQcm9wc307XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==