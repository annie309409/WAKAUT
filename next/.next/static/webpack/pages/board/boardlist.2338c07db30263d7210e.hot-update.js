webpackHotUpdate_N_E("pages/board/boardlist",{

/***/ "./pages/board/boardlist.js":
/*!**********************************!*\
  !*** ./pages/board/boardlist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/alert */ "./components/alert.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/search */ "./components/search.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list */ "./components/list.js");
/* harmony import */ var _components_pagenation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagenation */ "./components/pagenation.js");
/* harmony import */ var _write_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./write_modal */ "./pages/board/write_modal.js");
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardlist.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var BoardList = function BoardList(_ref) {
  _s();

  var propsSetter = _ref.propsSetter;
  console.log(propsSetter);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "success",
    msg: "\uD574\uB2F9 \uAC8C\uC2DC\uD310\uC740 \uAD00\uB9AC\uC790\uC5D0\uC758\uD574 \uC2E4\uC2DC\uAC04 \uAD00\uB9AC\uB418\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uD5C8\uC704\uC0AC\uC2E4\uC720\uD3EC \uBC0F \uBD80\uC801\uC808\uD55C \uD45C\uD604\uC740 \uCC28\uB2E8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cat: ['content', 'review'],
    btn: ['검색하기', '새글쓰기'],
    btncol: ['secondary', 'success'],
    click: [false, function () {
      setLgShow(true);
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_components_pagenation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cnt: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
};

_s(BoardList, "KwAmMpBzpejpZoNIqJ++o9hKksA=");

_c = BoardList;
/* harmony default export */ __webpack_exports__["default"] = (BoardList);
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__["default"])(BoardList, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTGlzdCIsInByb3BzU2V0dGVyIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBQyxTQUFWQSxTQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjs7QUFENkIsa0JBRURHLHNEQUFRLENBQUMsS0FBRCxDQUZQO0FBQUEsTUFFdEJDLE1BRnNCO0FBQUEsTUFFZEMsU0FGYzs7QUFJN0IsU0FDSSxtRUFDQSxNQUFDLHlEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsT0FBRyxFQUFDLDZSQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQSxNQUFDLDBEQUFEO0FBQVEsT0FBRyxFQUFFLENBQUMsU0FBRCxFQUFXLFFBQVgsQ0FBYjtBQUFtQyxPQUFHLEVBQUUsQ0FBQyxNQUFELEVBQVEsTUFBUixDQUF4QztBQUF5RCxVQUFNLEVBQUUsQ0FBQyxXQUFELEVBQWEsU0FBYixDQUFqRTtBQUEwRixTQUFLLEVBQUUsQ0FBQyxLQUFELEVBQU8sWUFBSTtBQUFDQSxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQWdCLEtBQTVCLENBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUdBLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLEVBVUEsTUFBQyxvREFBRDtBQUFZLFVBQU0sRUFBRUQsTUFBcEI7QUFBNEIsYUFBUyxFQUFFQyxTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkEsRUFXQSxNQUFDLDhEQUFEO0FBQVEsT0FBRyxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhBLENBREo7QUFlSCxDQW5CRDs7R0FBTU4sUzs7S0FBQUEsUztBQXFCU0Esd0VBQWY7QUFFQU8sNkVBQVMsQ0FBQ1AsU0FBRCxFQUFXO0FBQUNRLE9BQUssRUFBQyxtQkFBUDtBQUEyQkMsYUFBVyxFQUFDO0FBQXZDLENBQVgsQ0FBVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZGxpc3QuMjMzOGMwN2RiMzAyNjNkNzIxMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbGVydCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0JztcclxuaW1wb3J0IFBhZ2luZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VuYXRpb24nO1xyXG5pbXBvcnQgV3JpdGVNb2RhbCBmcm9tICcuL3dyaXRlX21vZGFsJztcclxuaW1wb3J0IGdldExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvZ2V0TGF5b3V0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHByb3BzU2V0dGVyIGZyb20gJy4uL2ZldXRpbHMnO1xyXG5cclxuXHJcbmNvbnN0IEJvYXJkTGlzdD0oe3Byb3BzU2V0dGVyfSk9PntcclxuICAgIGNvbnNvbGUubG9nKHByb3BzU2V0dGVyKTtcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEFsZXJ0cyBjb2xvcj0nc3VjY2VzcycgbXNnPSftlbTri7kg6rKM7Iuc7YyQ7J2AIOq0gOumrOyekOyXkOydmO2VtCDsi6Tsi5zqsIQg6rSA66as65CY6rOg7J6I7Iq164uI64ukLiDtl4jsnITsgqzsi6TsnKDtj6wg67CPIOu2gOyggeygiO2VnCDtkZztmITsnYAg7LCo64uo65CgIOyImCDsnojsirXri4jri6QuJy8+XHJcbiAgICAgICAgPFNlYXJjaCBjYXQ9e1snY29udGVudCcsJ3JldmlldyddfSBidG49e1sn6rKA7IOJ7ZWY6riwJywn7IOI6riA7JOw6riwJ119IGJ0bmNvbD17WydzZWNvbmRhcnknLCdzdWNjZXNzJ119IGNsaWNrPXtbZmFsc2UsKCk9PntzZXRMZ1Nob3codHJ1ZSl9XX0vPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICBib2FyZHMuYm9hcmRzLm1hcChtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0IHRpdGxlPXttLnRpdGxlfSBub3RlPXttLmNvbnRlbnR9IG1hbGNudD0nMycgaW1nPXt0cnVlfSBjb2w9J2JnLXdhcm5pbmcnIHRpbWU9e20ucmVnZGF0ZTJ9IGtkPXttLmNhdGVnb3J5fSB2aWV3PXttLnZpZXdzfSB0bz17YC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7bS5iaWR9YH0gLz5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPFdyaXRlTW9kYWwgbGdTaG93PXtsZ1Nob3d9IHNldExnU2hvdz17c2V0TGdTaG93fS8+XHJcbiAgICAgICAgPFBhZ2luZyBjbnQ9ezEwfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkTGlzdDtcclxuXHJcbmdldExheW91dChCb2FyZExpc3Qse3RpdGxlOifri6TqsJnsnbQg7Jq064+Z7ZW07JqUISBXQUtBVVQhJyxkZXNjcmlwdGlvbjon7JuM7YGs7JWE7JuDIOy7pOuupOuLiO2LsCDqsozsi5ztjJDsnoXri4jri6QuJ30pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=