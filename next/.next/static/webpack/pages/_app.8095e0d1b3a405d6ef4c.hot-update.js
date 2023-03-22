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
/* harmony import */ var _pages_feutils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/feutils */ "./pages/feutils.js");
/* harmony import */ var _pages_feutils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pages_feutils__WEBPACK_IMPORTED_MODULE_11__);





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

  pageProps.session = session.user;
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
      lineNumber: 28,
      columnNumber: 5
    }
  }, loading && __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }), getLayout(__jsx(Component, Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
            if (!sess) appProps.session = {
              user: {
                name: 'guest',
                email: 'null',
                image: null,
                userid: 0
              }
            };
            return _context.abrupt("return", _objectSpread({}, appProps));

          case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlciIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwiZ2V0TGF5b3V0IiwicGFnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIkFwcCIsImFwcFByb3BzIiwiZ2V0U2Vzc2lvbiIsInNlc3MiLCJuYW1lIiwiZW1haWwiLCJpbWFnZSIsInVzZXJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsT0FBaUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQ0MsU0FBZ0MsUUFBaENBLFNBQWdDO0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMvQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQrQyxrQkFFbEJDLHNEQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFeENDLE9BRndDO0FBQUEsTUFFaENDLFVBRmdDOztBQUkvQ04sV0FBUyxDQUFDQyxPQUFWLEdBQW9CQSxPQUFPLENBQUNNLElBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNaTixVQUFNLENBQUNPLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsWUFBTTtBQUN6Q0osZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZEO0FBR0FKLFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDSixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT1AsQ0FBQ0osTUFBRCxDQVBPLENBQVQ7QUFRQSxNQUFNUyxTQUFTLDJCQUFJWixTQUFTLENBQUNZLFNBQWQsdUVBQTRCLFVBQUNDLElBQUQ7QUFBQSxXQUFRQSxJQUFSO0FBQUEsR0FBM0M7QUFFQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsT0FBTyxJQUFJLE1BQUMsNERBQUQ7QUFBUyxXQUFPLEVBQUVBLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZCxFQUVJTSxTQUFTLENBQUUsTUFBQyxTQUFELHFKQUFlWCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixDQUZiLENBREY7QUFNRDs7R0FyQlFGLEs7VUFDUUsscUQ7OztLQURSTCxLOztBQXVCVEEsS0FBSyxDQUFDZSxlQUFOO0FBQUEsdVRBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0NDLCtDQUFHLENBQUNGLGVBQUosQ0FBb0JDLEdBQXBCLENBSEQ7O0FBQUE7QUFHaEJFLG9CQUhnQjtBQUFBO0FBQUEsbUJBSU5DLG1FQUFVLENBQUNILEdBQUQsQ0FKSjs7QUFBQTtBQUlsQkksZ0JBSmtCO0FBQUE7QUFBQSxtQkFLR0EsSUFMSDs7QUFBQTtBQUt0QkYsb0JBQVEsQ0FBQ2YsT0FMYTtBQU10QixnQkFBRyxDQUFDaUIsSUFBSixFQUFVRixRQUFRLENBQUNmLE9BQVQsR0FBbUI7QUFBQ00sa0JBQUksRUFBQztBQUFFWSxvQkFBSSxFQUFFLE9BQVI7QUFBaUJDLHFCQUFLLEVBQUUsTUFBeEI7QUFBZ0NDLHFCQUFLLEVBQUUsSUFBdkM7QUFBNkNDLHNCQUFNLEVBQUU7QUFBckQ7QUFBTixhQUFuQjtBQU5ZLCtEQU9YTixRQVBXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlbEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MDk1ZTBkMWIzYTQwNWQ2ZWY0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9ib290LWFkZGVkLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nJztcclxuaW1wb3J0IHtrYWthb0luaXR9IGZyb20gJy4uL3BhZ2VzL2ZldXRpbHMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsc2Vzc2lvbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHBhZ2VQcm9wcy5zZXNzaW9uID0gc2Vzc2lvbi51c2VyO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSxbcm91dGVyXSlcclxuICBjb25zdCBnZXRMYXlvdXQgPSAgQ29tcG9uZW50LmdldExheW91dCA/PyAoKHBhZ2UpPT5wYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz59XHJcbiAgICAgIHsgZ2V0TGF5b3V0KCA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+ICl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk9PntcclxuICAvLyBuZXh0IGFwcOydmCDquLDrs7ggcHJvcHPqsJ3ssrQg7LSI6riw7ZmUXHJcbiAgLy9hcHBsaWNhdGlvbuuLqOychOydmCDsoITsl63rs4DsiJhcclxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICBsZXQgc2VzcyA9YXdhaXQgZ2V0U2Vzc2lvbihjdHgpO1xyXG4gIGFwcFByb3BzLnNlc3Npb24gPSBhd2FpdCBzZXNzO1xyXG4gIGlmKCFzZXNzKSBhcHBQcm9wcy5zZXNzaW9uID0ge3VzZXI6eyBuYW1lOiAnZ3Vlc3QnLCBlbWFpbDogJ251bGwnLCBpbWFnZTogbnVsbCwgdXNlcmlkOiAwIH19O1xyXG4gIHJldHVybiB7Li4uYXBwUHJvcHN9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=