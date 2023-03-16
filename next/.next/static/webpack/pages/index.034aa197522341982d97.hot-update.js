webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/place_modal.js":
/*!******************************!*\
  !*** ./pages/place_modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ci */ "./node_modules/react-icons/ci/index.esm.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\place_modal.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PlaceModal = function PlaceModal(props) {
  console.log(props.img);
  var scores = [];

  for (var i = 0; i < props.score; i++) {
    scores.push(i);
  }

  var sc = props.score ? scores.map(function (m) {
    return __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillStar"], {
      key: m,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 53
      }
    });
  }) : false;
  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    "class": "d-flex",
    title: "\uC815\uBCF4 \uC0C1\uC138\uBCF4\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6 me-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "border-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
    variant: "top",
    src: props.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "\uC2DC\uC124\uD3C9\uAC00\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\uB2E4\uB978 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC758\uACAC\uC744 \uB4E4\uB824\uC8FC\uC138\uC694"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, sc), __jsx("div", {
    className: "btns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00"), __jsx(KakaoSet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    className: "right col-6 ms-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, props.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__["CiLocationOn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }
  }, props.addr)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineHighlight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 42
    }
  }, props.des)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__["CiFaceSmile"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 20
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 35
    }
  }, sc)), __jsx("div", {
    className: "brdPrev mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC8C\uC2DC\uD310 \uC81C\uBAA9",
    note: "\uC774\uACF3\uC740 \uC815\uB9D0 \uC88B\uC740\uACF3\uC785\uB2C8\uB2E4.",
    kd: "community",
    time: "2023-03-08",
    view: "255",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uAC8C\uC2DC\uD310 \uC81C\uBAA9",
    note: "\uC774\uACF3\uC740 \uC815\uB9D0 \uC88B\uC740\uACF3\uC785\uB2C8\uB2E4.",
    kd: "review",
    time: "2023-03-08",
    view: "255",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/board/boardlist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 44
    }
  }, "\uAC8C\uC2DC\uAE00 \uB354 \uBCF4\uAE30"))));
};

_c = PlaceModal;
/* harmony default export */ __webpack_exports__["default"] = (PlaceModal);

var _c;

$RefreshReg$(_c, "PlaceModal");

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

/***/ }),

/***/ "./services/kakaoSet.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxhY2VfbW9kYWwuanMiXSwibmFtZXMiOlsiUGxhY2VNb2RhbCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImltZyIsInNjb3JlcyIsImkiLCJzY29yZSIsInB1c2giLCJzYyIsIm1hcCIsIm0iLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJ0aXRsZSIsImFkZHIiLCJkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsS0FBRCxFQUFTO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxHQUFsQjtBQUNBLE1BQUlDLE1BQU0sR0FBQyxFQUFYOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDTCxLQUFLLENBQUNNLEtBQXZCLEVBQThCRCxDQUFDLEVBQS9CO0FBQW1DRCxVQUFNLENBQUNHLElBQVAsQ0FBWUYsQ0FBWjtBQUFuQzs7QUFDQSxNQUFNRyxFQUFFLEdBQUdSLEtBQUssQ0FBQ00sS0FBUCxHQUFnQkYsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFFO0FBQUMsV0FBTyxNQUFDLHlEQUFEO0FBQVksU0FBRyxFQUFFQSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFBOEIsR0FBN0MsQ0FBaEIsR0FBZ0UsS0FBMUU7QUFFQSxTQUNJLE1BQUMseURBQUQ7QUFBTyxVQUFNLEVBQUVWLEtBQUssQ0FBQ1csTUFBckI7QUFBNkIsYUFBUyxFQUFFWCxLQUFLLENBQUNZLFNBQTlDO0FBQXlELGFBQU0sUUFBL0Q7QUFBd0UsU0FBSyxFQUFDLHVDQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTJCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FBM0IsQ0FUSixDQWZKLENBREo7QUE2QkgsQ0FuQ0Q7O0tBQU1ULFU7QUFvQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzNGFhMTk3NTIyMzQxOTgyZDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHtDYXJkLEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtBaUZpbGxTdGFyLEFpT3V0bGluZUhpZ2hsaWdodH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7Q2lMb2NhdGlvbk9uLCBDaVBob25lLCBDaUZhY2VTbWlsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jaVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBQbGFjZU1vZGFsPShwcm9wcyk9PntcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmltZyk7XHJcbiAgICBsZXQgc2NvcmVzPVtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTxwcm9wcy5zY29yZTsgaSsrKSBzY29yZXMucHVzaChpKTtcclxuICAgIGNvbnN0IHNjPSAocHJvcHMuc2NvcmUpID8gc2NvcmVzLm1hcChtPT57cmV0dXJuIDxBaUZpbGxTdGFyIGtleT17bX0gLz59KTogZmFsc2U7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgbGdTaG93PXtwcm9wcy5sZ1Nob3d9IHNldExnU2hvdz17cHJvcHMuc2V0TGdTaG93fSBjbGFzcz0nZC1mbGV4JyB0aXRsZT1cIuygleuztCDsg4HshLjrs7TquLBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQgY29sLTYgbWUtMSc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2JvcmRlci0wJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwcm9wcy5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPuyLnOyEpO2PieqwgO2VmOq4sDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PuuLpOuluCDsgqzsmqnsnpDsl5Dqsowg7J2Y6rKs7J2EIOuTpOugpOyjvOyEuOyalDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3NjfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT0nZmx1aWQnPuymkOqyqOywvuq4sCDstpTqsIA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEtha2FvU2V0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodCBjb2wtNiBtcy0xJz5cclxuICAgICAgICAgICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPjxDaUxvY2F0aW9uT24gLz48c3Bhbj57cHJvcHMuYWRkcn08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PEFpT3V0bGluZUhpZ2hsaWdodCAvPjxzcGFuPntwcm9wcy5kZXN9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxDaUZhY2VTbWlsZSAvPjxzcGFuPntzY308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyZFByZXYgbWItNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9XCLqsozsi5ztjJAg7KCc66qpXCIgbm90ZT1cIuydtOqzs+ydgCDsoJXrp5Ag7KKL7J2A6rOz7J6F64uI64ukLlwiIGtkPVwiY29tbXVuaXR5XCIgdGltZT1cIjIwMjMtMDMtMDhcIiB2aWV3PVwiMjU1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPVwi6rKM7Iuc7YyQIOygnOuqqVwiIG5vdGU9XCLsnbTqs7PsnYAg7KCV66eQIOyii+ydgOqzs+yeheuLiOuLpC5cIiBrZD1cInJldmlld1wiIHRpbWU9XCIyMDIzLTAzLTA4XCIgdmlldz1cIjI1NVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiPiA8TGluayBocmVmPVwiL2JvYXJkL2JvYXJkbGlzdFwiPuqyjOyLnOq4gCDrjZQg67O06riwPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlTW9kYWw7Il0sInNvdXJjZVJvb3QiOiIifQ==