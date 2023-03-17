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










_feutils__WEBPACK_IMPORTED_MODULE_9__["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbInByb3BzU2V0dGVyIiwiQm9hcmRMaXN0IiwiYm9hcmRzIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwibWFwIiwibSIsInRpdGxlIiwiY29udGVudCIsInJlZ2RhdGUyIiwiY2F0ZWdvcnkiLCJ2aWV3cyIsImJpZCIsImdldExheW91dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsZ0RBQVc7O0FBS1gsSUFBTUMsU0FBUyxHQUFDLFNBQVZBLFNBQVUsT0FBWTtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0EsTUFBbkI7O0FBRHdCLGtCQUVJRyxzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRWpCQyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBSXhCLFNBQ0ksbUVBQ0EsTUFBQyx5REFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLE9BQUcsRUFBQyw2UkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUEsTUFBQywwREFBRDtBQUFRLE9BQUcsRUFBRSxDQUFDLFNBQUQsRUFBVyxRQUFYLENBQWI7QUFBbUMsT0FBRyxFQUFFLENBQUMsTUFBRCxFQUFRLE1BQVIsQ0FBeEM7QUFBeUQsVUFBTSxFQUFFLENBQUMsV0FBRCxFQUFhLFNBQWIsQ0FBakU7QUFBMEYsU0FBSyxFQUFFLENBQUMsS0FBRCxFQUFPLFlBQUk7QUFBQ0EsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUFnQixLQUE1QixDQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFHQSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUwsTUFBTSxDQUFDQSxNQUFQLENBQWNNLEdBQWQsQ0FBa0IsVUFBQUMsQ0FBQyxFQUFFO0FBQ2pCLFdBQU8sTUFBQyx3REFBRDtBQUFNLFdBQUssRUFBRUEsQ0FBQyxDQUFDQyxLQUFmO0FBQXNCLFVBQUksRUFBRUQsQ0FBQyxDQUFDRSxPQUE5QjtBQUF1QyxZQUFNLEVBQUMsR0FBOUM7QUFBa0QsU0FBRyxFQUFFLElBQXZEO0FBQTZELFNBQUcsRUFBQyxZQUFqRTtBQUE4RSxVQUFJLEVBQUVGLENBQUMsQ0FBQ0csUUFBdEY7QUFBZ0csUUFBRSxFQUFFSCxDQUFDLENBQUNJLFFBQXRHO0FBQWdILFVBQUksRUFBRUosQ0FBQyxDQUFDSyxLQUF4SDtBQUErSCxRQUFFLGlDQUEwQkwsQ0FBQyxDQUFDTSxHQUE1QixDQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDSCxHQUZELENBRlIsQ0FIQSxFQVVBLE1BQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUVULE1BQXBCO0FBQTRCLGFBQVMsRUFBRUMsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZBLEVBV0EsTUFBQyw4REFBRDtBQUFRLE9BQUcsRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYQSxDQURKO0FBZUgsQ0FuQkQ7O0dBQU1OLFM7O0tBQUFBLFM7QUFxQlNBLHdFQUFmO0FBRUFlLDZFQUFTLENBQUNmLFNBQUQsRUFBVztBQUFDUyxPQUFLLEVBQUMsbUJBQVA7QUFBMkJPLGFBQVcsRUFBQztBQUF2QyxDQUFYLENBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvYm9hcmRsaXN0LjBjYjBmYjMxZTMxNzY4NmMxZDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoJztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlbmF0aW9uJztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSAnLi93cml0ZV9tb2RhbCc7XHJcbmltcG9ydCBnZXRMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2dldExheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwcm9wc1NldHRlciBmcm9tICcuLi9mZXV0aWxzJztcclxuXHJcblxyXG5wcm9wc1NldHRlcjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEJvYXJkTGlzdD0oe2JvYXJkc30pPT57XHJcbiAgICBjb25zb2xlLmxvZyhib2FyZHMuYm9hcmRzKTtcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEFsZXJ0cyBjb2xvcj0nc3VjY2VzcycgbXNnPSftlbTri7kg6rKM7Iuc7YyQ7J2AIOq0gOumrOyekOyXkOydmO2VtCDsi6Tsi5zqsIQg6rSA66as65CY6rOg7J6I7Iq164uI64ukLiDtl4jsnITsgqzsi6TsnKDtj6wg67CPIOu2gOyggeygiO2VnCDtkZztmITsnYAg7LCo64uo65CgIOyImCDsnojsirXri4jri6QuJy8+XHJcbiAgICAgICAgPFNlYXJjaCBjYXQ9e1snY29udGVudCcsJ3JldmlldyddfSBidG49e1sn6rKA7IOJ7ZWY6riwJywn7IOI6riA7JOw6riwJ119IGJ0bmNvbD17WydzZWNvbmRhcnknLCdzdWNjZXNzJ119IGNsaWNrPXtbZmFsc2UsKCk9PntzZXRMZ1Nob3codHJ1ZSl9XX0vPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvYXJkcy5ib2FyZHMubWFwKG09PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QgdGl0bGU9e20udGl0bGV9IG5vdGU9e20uY29udGVudH0gbWFsY250PSczJyBpbWc9e3RydWV9IGNvbD0nYmctd2FybmluZycgdGltZT17bS5yZWdkYXRlMn0ga2Q9e20uY2F0ZWdvcnl9IHZpZXc9e20udmlld3N9IHRvPXtgL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHttLmJpZH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxXcml0ZU1vZGFsIGxnU2hvdz17bGdTaG93fSBzZXRMZ1Nob3c9e3NldExnU2hvd30vPlxyXG4gICAgICAgIDxQYWdpbmcgY250PXsxMH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZExpc3Q7XHJcblxyXG5nZXRMYXlvdXQoQm9hcmRMaXN0LHt0aXRsZTon64uk6rCZ7J20IOyatOuPme2VtOyalCEgV0FLQVVUIScsZGVzY3JpcHRpb246J+ybjO2BrOyVhOybgyDsu6TrrqTri4jti7Ag6rKM7Iuc7YyQ7J6F64uI64ukLid9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9