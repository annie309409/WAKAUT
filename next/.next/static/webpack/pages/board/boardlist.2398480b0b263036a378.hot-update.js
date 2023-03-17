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
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardlist.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










_feutils__WEBPACK_IMPORTED_MODULE_9___default.a.getServerSideProps();

var BoardList = function BoardList(_ref) {
  _s();

  var boards = _ref.boards;
  console.log(boards.boards);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "success",
    msg: "\uD574\uB2F9 \uAC8C\uC2DC\uD310\uC740 \uAD00\uB9AC\uC790\uC5D0\uC758\uD574 \uC2E4\uC2DC\uAC04 \uAD00\uB9AC\uB418\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uD5C8\uC704\uC0AC\uC2E4\uC720\uD3EC \uBC0F \uBD80\uC801\uC808\uD55C \uD45C\uD604\uC740 \uCC28\uB2E8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, boards.boards.map(function (m) {
    return __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: m.title,
      note: m.content,
      malcnt: "3",
      img: true,
      col: "bg-warning",
      time: m.regdate2,
      kd: m.category,
      view: m.views,
      to: "/board/boardview?bid=".concat(m.bid),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 28
      }
    });
  })), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_components_pagenation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cnt: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbInByb3BzU2V0dGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiQm9hcmRMaXN0IiwiYm9hcmRzIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwibWFwIiwibSIsInRpdGxlIiwiY29udGVudCIsInJlZ2RhdGUyIiwiY2F0ZWdvcnkiLCJ2aWV3cyIsImJpZCIsImdldExheW91dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLCtDQUFXLENBQUNDLGtCQUFaOztBQUtBLElBQU1DLFNBQVMsR0FBQyxTQUFWQSxTQUFVLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNBLE1BQW5COztBQUR3QixrQkFFSUcsc0RBQVEsQ0FBQyxLQUFELENBRlo7QUFBQSxNQUVqQkMsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUl4QixTQUNJLG1FQUNBLE1BQUMseURBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUF3QixPQUFHLEVBQUMsNlJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsMERBQUQ7QUFBUSxPQUFHLEVBQUUsQ0FBQyxTQUFELEVBQVcsUUFBWCxDQUFiO0FBQW1DLE9BQUcsRUFBRSxDQUFDLE1BQUQsRUFBUSxNQUFSLENBQXhDO0FBQXlELFVBQU0sRUFBRSxDQUFDLFdBQUQsRUFBYSxTQUFiLENBQWpFO0FBQTBGLFNBQUssRUFBRSxDQUFDLEtBQUQsRUFBTyxZQUFJO0FBQUNBLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFBZ0IsS0FBNUIsQ0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBR0EsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFMLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjTSxHQUFkLENBQWtCLFVBQUFDLENBQUMsRUFBRTtBQUNqQixXQUFPLE1BQUMsd0RBQUQ7QUFBTSxXQUFLLEVBQUVBLENBQUMsQ0FBQ0MsS0FBZjtBQUFzQixVQUFJLEVBQUVELENBQUMsQ0FBQ0UsT0FBOUI7QUFBdUMsWUFBTSxFQUFDLEdBQTlDO0FBQWtELFNBQUcsRUFBRSxJQUF2RDtBQUE2RCxTQUFHLEVBQUMsWUFBakU7QUFBOEUsVUFBSSxFQUFFRixDQUFDLENBQUNHLFFBQXRGO0FBQWdHLFFBQUUsRUFBRUgsQ0FBQyxDQUFDSSxRQUF0RztBQUFnSCxVQUFJLEVBQUVKLENBQUMsQ0FBQ0ssS0FBeEg7QUFBK0gsUUFBRSxpQ0FBMEJMLENBQUMsQ0FBQ00sR0FBNUIsQ0FBakk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0gsR0FGRCxDQUZSLENBSEEsRUFVQSxNQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFFVCxNQUFwQjtBQUE0QixhQUFTLEVBQUVDLFNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWQSxFQVdBLE1BQUMsOERBQUQ7QUFBUSxPQUFHLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEEsQ0FESjtBQWVILENBbkJEOztHQUFNTixTOztLQUFBQSxTO0FBcUJTQSx3RUFBZjtBQUVBZSw2RUFBUyxDQUFDZixTQUFELEVBQVc7QUFBQ1MsT0FBSyxFQUFDLG1CQUFQO0FBQTJCTyxhQUFXLEVBQUM7QUFBdkMsQ0FBWCxDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkbGlzdC4yMzk4NDgwYjBiMjYzMDM2YTM3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFsZXJ0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FsZXJ0JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaCc7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QnO1xyXG5pbXBvcnQgUGFnaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZW5hdGlvbic7XHJcbmltcG9ydCBXcml0ZU1vZGFsIGZyb20gJy4vd3JpdGVfbW9kYWwnO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcHJvcHNTZXR0ZXIgZnJvbSAnLi4vZmV1dGlscyc7XHJcblxyXG5cclxucHJvcHNTZXR0ZXIuZ2V0U2VydmVyU2lkZVByb3BzKCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBCb2FyZExpc3Q9KHtib2FyZHN9KT0+e1xyXG4gICAgY29uc29sZS5sb2coYm9hcmRzLmJvYXJkcyk7XHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxBbGVydHMgY29sb3I9J3N1Y2Nlc3MnIG1zZz0n7ZW064u5IOqyjOyLnO2MkOydgCDqtIDrpqzsnpDsl5DsnZjtlbQg7Iuk7Iuc6rCEIOq0gOumrOuQmOqzoOyeiOyKteuLiOuLpC4g7ZeI7JyE7IKs7Iuk7Jyg7Y+sIOuwjyDrtoDsoIHsoIjtlZwg7ZGc7ZiE7J2AIOywqOuLqOuQoCDsiJgg7J6I7Iq164uI64ukLicvPlxyXG4gICAgICAgIDxTZWFyY2ggY2F0PXtbJ2NvbnRlbnQnLCdyZXZpZXcnXX0gYnRuPXtbJ+qygOyDie2VmOq4sCcsJ+yDiOq4gOyTsOq4sCddfSBidG5jb2w9e1snc2Vjb25kYXJ5Jywnc3VjY2VzcyddfSBjbGljaz17W2ZhbHNlLCgpPT57c2V0TGdTaG93KHRydWUpfV19Lz5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBib2FyZHMuYm9hcmRzLm1hcChtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0IHRpdGxlPXttLnRpdGxlfSBub3RlPXttLmNvbnRlbnR9IG1hbGNudD0nMycgaW1nPXt0cnVlfSBjb2w9J2JnLXdhcm5pbmcnIHRpbWU9e20ucmVnZGF0ZTJ9IGtkPXttLmNhdGVnb3J5fSB2aWV3PXttLnZpZXdzfSB0bz17YC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7bS5iaWR9YH0gLz5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8V3JpdGVNb2RhbCBsZ1Nob3c9e2xnU2hvd30gc2V0TGdTaG93PXtzZXRMZ1Nob3d9Lz5cclxuICAgICAgICA8UGFnaW5nIGNudD17MTB9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmRMaXN0O1xyXG5cclxuZ2V0TGF5b3V0KEJvYXJkTGlzdCx7dGl0bGU6J+uLpOqwmeydtCDsmrTrj5ntlbTsmpQhIFdBS0FVVCEnLGRlc2NyaXB0aW9uOifsm4ztgazslYTsm4Mg7Luk666k64uI7YuwIOqyjOyLnO2MkOyeheuLiOuLpC4nfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==