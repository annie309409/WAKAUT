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
var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardlist.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var BoardList = function BoardList() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "success",
    msg: "\uD574\uB2F9 \uAC8C\uC2DC\uD310\uC740 \uAD00\uB9AC\uC790\uC5D0\uC758\uD574 \uC2E4\uC2DC\uAC04 \uAD00\uB9AC\uB418\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uD5C8\uC704\uC0AC\uC2E4\uC720\uD3EC \uBC0F \uBD80\uC801\uC808\uD55C \uD45C\uD604\uC740 \uCC28\uB2E8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
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
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\uAC8C\uC2DC\uD310 \uC81C\uBAA9",
    note: "\uC774\uAC83\uC740 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4..",
    malcnt: "3",
    img: true,
    col: "bg-warning",
    time: "2023-03-07",
    kd: "review",
    to: "/board/boardview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\uC77C\uC694\uC77C\uC5D0 \uCD95\uAD6C\uD560\uC0AC\uB78C",
    note: "\uC544\uC544\uB2DB!!! \uCD95\uAD6C\uB97C \uD55C\uB2E4\uACE0\uC637?",
    malcnt: "15",
    img: true,
    col: "bg-warning",
    time: "2023-03-07",
    kd: "community",
    to: "/board/boardview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\uB370\uC2A4\uB9E4\uCE58 \uD604\uD53C\uC571",
    note: "\uAD11\uACE0\uC0AC\uC808\uC785\uB2C8\uB2F9",
    malcnt: "8",
    img: true,
    col: "bg-warning",
    time: "2023.03.08",
    kd: "review",
    to: "/board/boardview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\uB370\uC2A4\uB9E4\uCE58 \uD604\uD53C\uC571",
    note: "\uAD11\uACE0\uC0AC\uC808\uC785\uB2C8\uB2F9",
    malcnt: "8",
    img: true,
    col: "bg-warning",
    time: "2023.03.08",
    kd: "community",
    to: "/board/boardview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_components_pagenation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pg: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTGlzdCIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBQyxTQUFWQSxTQUFVLEdBQUk7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDVEMsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBRWhCLFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLE9BQUcsRUFBQyw2UkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywwREFBRDtBQUFRLE9BQUcsRUFBRSxDQUFDLFNBQUQsRUFBVyxRQUFYLENBQWI7QUFBbUMsT0FBRyxFQUFFLENBQUMsTUFBRCxFQUFRLE1BQVIsQ0FBeEM7QUFBeUQsVUFBTSxFQUFFLENBQUMsV0FBRCxFQUFhLFNBQWIsQ0FBakU7QUFBMEYsU0FBSyxFQUFFLENBQUMsS0FBRCxFQUFPLFlBQUk7QUFBQ0EsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUFnQixLQUE1QixDQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLGlDQUFaO0FBQXFCLFFBQUksRUFBQywyREFBMUI7QUFBeUMsVUFBTSxFQUFDLEdBQWhEO0FBQW9ELE9BQUcsRUFBRSxJQUF6RDtBQUErRCxPQUFHLEVBQUMsWUFBbkU7QUFBZ0YsUUFBSSxFQUFDLFlBQXJGO0FBQWtHLE1BQUUsRUFBQyxRQUFyRztBQUE4RyxNQUFFLEVBQUMsa0JBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMseURBQVo7QUFBeUIsUUFBSSxFQUFDLG9FQUE5QjtBQUFpRCxVQUFNLEVBQUMsSUFBeEQ7QUFBNkQsT0FBRyxFQUFFLElBQWxFO0FBQXdFLE9BQUcsRUFBQyxZQUE1RTtBQUF5RixRQUFJLEVBQUMsWUFBOUY7QUFBMkcsTUFBRSxFQUFDLFdBQTlHO0FBQTBILE1BQUUsRUFBQyxrQkFBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyw2Q0FBWjtBQUF1QixRQUFJLEVBQUMsNENBQTVCO0FBQXNDLFVBQU0sRUFBQyxHQUE3QztBQUFpRCxPQUFHLEVBQUUsSUFBdEQ7QUFBNEQsT0FBRyxFQUFDLFlBQWhFO0FBQTZFLFFBQUksRUFBQyxZQUFsRjtBQUErRixNQUFFLEVBQUMsUUFBbEc7QUFBMkcsTUFBRSxFQUFDLGtCQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLDZDQUFaO0FBQXVCLFFBQUksRUFBQyw0Q0FBNUI7QUFBc0MsVUFBTSxFQUFDLEdBQTdDO0FBQWlELE9BQUcsRUFBRSxJQUF0RDtBQUE0RCxPQUFHLEVBQUMsWUFBaEU7QUFBNkUsUUFBSSxFQUFDLFlBQWxGO0FBQStGLE1BQUUsRUFBQyxXQUFsRztBQUE4RyxNQUFFLEVBQUMsa0JBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUhKLEVBU0ksTUFBQyxvREFBRDtBQUFZLFVBQU0sRUFBRUQsTUFBcEI7QUFBNEIsYUFBUyxFQUFFQyxTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSSxNQUFDLDhEQUFEO0FBQVEsTUFBRSxFQUFFLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFjSCxDQWhCRDs7R0FBTUgsUzs7S0FBQUEsUztBQWtCU0Esd0VBQWY7QUFFQUksNkVBQVMsQ0FBQ0osU0FBRCxFQUFXO0FBQUNLLE9BQUssRUFBQyxtQkFBUDtBQUEyQkMsYUFBVyxFQUFDO0FBQXZDLENBQVgsQ0FBVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZGxpc3QuZDU2ZDQ5N2Y1N2ZlMWZhMjhlODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbGVydCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0JztcclxuaW1wb3J0IFBhZ2luZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VuYXRpb24nO1xyXG5pbXBvcnQgV3JpdGVNb2RhbCBmcm9tICcuL3dyaXRlX21vZGFsJztcclxuaW1wb3J0IGdldExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvZ2V0TGF5b3V0JztcclxuY29uc3QgQm9hcmRMaXN0PSgpPT57XHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBbGVydHMgY29sb3I9J3N1Y2Nlc3MnIG1zZz0n7ZW064u5IOqyjOyLnO2MkOydgCDqtIDrpqzsnpDsl5DsnZjtlbQg7Iuk7Iuc6rCEIOq0gOumrOuQmOqzoOyeiOyKteuLiOuLpC4g7ZeI7JyE7IKs7Iuk7Jyg7Y+sIOuwjyDrtoDsoIHsoIjtlZwg7ZGc7ZiE7J2AIOywqOuLqOuQoCDsiJgg7J6I7Iq164uI64ukLicvPlxyXG4gICAgICAgICAgICA8U2VhcmNoIGNhdD17Wydjb250ZW50JywncmV2aWV3J119IGJ0bj17WyfqsoDsg4ntlZjquLAnLCfsg4jquIDsk7DquLAnXX0gYnRuY29sPXtbJ3NlY29uZGFyeScsJ3N1Y2Nlc3MnXX0gY2xpY2s9e1tmYWxzZSwoKT0+e3NldExnU2hvdyh0cnVlKX1dfS8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT0n6rKM7Iuc7YyQIOygnOuqqScgbm90ZT0n7J206rKD7J2AIO2FjOyKpO2KuOyeheuLiOuLpC4uJyBtYWxjbnQ9JzMnIGltZz17dHJ1ZX0gY29sPSdiZy13YXJuaW5nJyB0aW1lPScyMDIzLTAzLTA3JyBrZD0ncmV2aWV3JyB0bz1cIi9ib2FyZC9ib2FyZHZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT0n7J287JqU7J287JeQIOy2leq1rO2VoOyCrOuejCcgbm90ZT0n7JWE7JWE64ubISEhIOy2leq1rOulvCDtlZzri6Tqs6DsmLc/JyBtYWxjbnQ9JzE1JyBpbWc9e3RydWV9IGNvbD0nYmctd2FybmluZycgdGltZT0nMjAyMy0wMy0wNycga2Q9J2NvbW11bml0eScgdG89XCIvYm9hcmQvYm9hcmR2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9J+uNsOyKpOunpOy5mCDtmITtlLzslbEnIG5vdGU9J+q0keqzoOyCrOygiOyeheuLiOuLuScgbWFsY250PSc4JyBpbWc9e3RydWV9IGNvbD0nYmctd2FybmluZycgdGltZT0nMjAyMy4wMy4wOCcga2Q9J3JldmlldycgdG89XCIvYm9hcmQvYm9hcmR2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9J+uNsOyKpOunpOy5mCDtmITtlLzslbEnIG5vdGU9J+q0keqzoOyCrOygiOyeheuLiOuLuScgbWFsY250PSc4JyBpbWc9e3RydWV9IGNvbD0nYmctd2FybmluZycgdGltZT0nMjAyMy4wMy4wOCcga2Q9XCJjb21tdW5pdHlcIiB0bz1cIi9ib2FyZC9ib2FyZHZpZXdcIi8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8V3JpdGVNb2RhbCBsZ1Nob3c9e2xnU2hvd30gc2V0TGdTaG93PXtzZXRMZ1Nob3d9Lz5cclxuICAgICAgICAgICAgPFBhZ2luZyBwZz17MTB9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmRMaXN0O1xyXG5cclxuZ2V0TGF5b3V0KEJvYXJkTGlzdCx7dGl0bGU6J+uLpOqwmeydtCDsmrTrj5ntlbTsmpQhIFdBS0FVVCEnLGRlc2NyaXB0aW9uOifsm4ztgazslYTsm4Mg7Luk666k64uI7YuwIOqyjOyLnO2MkOyeheuLiOuLpC4nfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==