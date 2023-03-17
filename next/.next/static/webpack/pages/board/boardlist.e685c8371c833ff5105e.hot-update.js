webpackHotUpdate_N_E("pages/board/boardlist",{

/***/ "./pages/board/boardlist.js":
/*!**********************************!*\
  !*** ./pages/board/boardlist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./components/alert.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search */ "./components/search.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list */ "./components/list.js");
/* harmony import */ var _components_pagenation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pagenation */ "./components/pagenation.js");
/* harmony import */ var _write_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./write_modal */ "./pages/board/write_modal.js");
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardlist.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var BoardList = /*#__PURE__*/function () {
  var _s = $RefreshSig$();

  var _ref = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _useState, lgShow, setLgShow;

    return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _s();

            _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false), lgShow = _useState[0], setLgShow = _useState[1];
            return _context.abrupt("return", __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
              color: "success",
              msg: "\uD574\uB2F9 \uAC8C\uC2DC\uD310\uC740 \uAD00\uB9AC\uC790\uC5D0\uC758\uD574 \uC2E4\uC2DC\uAC04 \uAD00\uB9AC\uB418\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uD5C8\uC704\uC0AC\uC2E4\uC720\uD3EC \uBC0F \uBD80\uC801\uC808\uD55C \uD45C\uD604\uC740 \uCC28\uB2E8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 9
              }
            }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
              cat: ['content', 'review'],
              btn: ['검색하기', '새글쓰기'],
              btncol: ['secondary', 'success'],
              click: [false, function () {
                setLgShow(true);
              }],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 9
              }
            }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 9
              }
            }), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
              lgShow: lgShow,
              setLgShow: setLgShow,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 9
              }
            }), __jsx(_components_pagenation__WEBPACK_IMPORTED_MODULE_7__["default"], {
              cnt: 10,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }
            })));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }), "KwAmMpBzpejpZoNIqJ++o9hKksA="));

  return function BoardList() {
    return _ref.apply(this, arguments);
  };
}();

_c = BoardList;
/* harmony default export */ __webpack_exports__["default"] = (BoardList);
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_9__["default"])(BoardList, {
  title: '다같이 운동해요! WAKAUT!',
  description: '워크아웃 커뮤니티 게시판입니다.'
});

var _c;

$RefreshReg$(_c, "BoardList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTGlzdCIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUztBQUFBOztBQUFBLHlUQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3QkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QixFQUNMQyxNQURLLGlCQUNHQyxTQURIO0FBQUEsNkNBSVIsbUVBQ0EsTUFBQyx5REFBRDtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUF3QixpQkFBRyxFQUFDLDZSQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFFQSxNQUFDLDBEQUFEO0FBQVEsaUJBQUcsRUFBRSxDQUFDLFNBQUQsRUFBVyxRQUFYLENBQWI7QUFBbUMsaUJBQUcsRUFBRSxDQUFDLE1BQUQsRUFBUSxNQUFSLENBQXhDO0FBQXlELG9CQUFNLEVBQUUsQ0FBQyxXQUFELEVBQWEsU0FBYixDQUFqRTtBQUEwRixtQkFBSyxFQUFFLENBQUMsS0FBRCxFQUFPLFlBQUk7QUFBQ0EseUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFBZ0IsZUFBNUIsQ0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLEVBR0EsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsRUFVQSxNQUFDLG9EQUFEO0FBQVksb0JBQU0sRUFBRUQsTUFBcEI7QUFBNEIsdUJBQVMsRUFBRUMsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZBLEVBV0EsTUFBQyw4REFBRDtBQUFRLGlCQUFHLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEEsQ0FKUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBLGtCQUFUSCxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0tBQU1BLFM7QUFvQlNBLHdFQUFmO0FBRUFJLDZFQUFTLENBQUNKLFNBQUQsRUFBVztBQUFDSyxPQUFLLEVBQUMsbUJBQVA7QUFBMkJDLGFBQVcsRUFBQztBQUF2QyxDQUFYLENBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmU2ODVjODM3MWM4MzNmZjUxMDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoJztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlbmF0aW9uJztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSAnLi93cml0ZV9tb2RhbCc7XHJcbmltcG9ydCBnZXRMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2dldExheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBEYXRhcyBmcm9tIFwiLi4vZmV1dGlsc1wiO1xyXG5cclxuY29uc3QgQm9hcmRMaXN0PWFzeW5jICgpPT57XHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxBbGVydHMgY29sb3I9J3N1Y2Nlc3MnIG1zZz0n7ZW064u5IOqyjOyLnO2MkOydgCDqtIDrpqzsnpDsl5DsnZjtlbQg7Iuk7Iuc6rCEIOq0gOumrOuQmOqzoOyeiOyKteuLiOuLpC4g7ZeI7JyE7IKs7Iuk7Jyg7Y+sIOuwjyDrtoDsoIHsoIjtlZwg7ZGc7ZiE7J2AIOywqOuLqOuQoCDsiJgg7J6I7Iq164uI64ukLicvPlxyXG4gICAgICAgIDxTZWFyY2ggY2F0PXtbJ2NvbnRlbnQnLCdyZXZpZXcnXX0gYnRuPXtbJ+qygOyDie2VmOq4sCcsJ+yDiOq4gOyTsOq4sCddfSBidG5jb2w9e1snc2Vjb25kYXJ5Jywnc3VjY2VzcyddfSBjbGljaz17W2ZhbHNlLCgpPT57c2V0TGdTaG93KHRydWUpfV19Lz5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRzLmJvYXJkcy5tYXAobT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdCB0aXRsZT17bS50aXRsZX0gbm90ZT17bS5jb250ZW50fSBtYWxjbnQ9JzMnIGltZz17dHJ1ZX0gY29sPSdiZy13YXJuaW5nJyB0aW1lPXttLnJlZ2RhdGUyfSBrZD17bS5jYXRlZ29yeX0gdmlldz17bS52aWV3c30gdG89e2AvYm9hcmQvYm9hcmR2aWV3P2JpZD0ke20uYmlkfWB9IC8+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxXcml0ZU1vZGFsIGxnU2hvdz17bGdTaG93fSBzZXRMZ1Nob3c9e3NldExnU2hvd30vPlxyXG4gICAgICAgIDxQYWdpbmcgY250PXsxMH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZExpc3Q7XHJcblxyXG5nZXRMYXlvdXQoQm9hcmRMaXN0LHt0aXRsZTon64uk6rCZ7J20IOyatOuPme2VtOyalCEgV0FLQVVUIScsZGVzY3JpcHRpb246J+ybjO2BrOyVhOybgyDsu6TrrqTri4jti7Ag6rKM7Iuc7YyQ7J6F64uI64ukLid9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9