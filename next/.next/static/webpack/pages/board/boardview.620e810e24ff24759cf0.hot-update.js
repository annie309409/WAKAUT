webpackHotUpdate_N_E("pages/board/boardview",{

/***/ "./pages/board/write_modal.js":
/*!************************************!*\
  !*** ./pages/board/write_modal.js ***!
  \************************************/
/*! exports provided: write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./components/modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selection */ "./components/selection.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\board\\write_modal.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 //데이터 등록하기

function write(_x, _x2) {
  return _write.apply(this, arguments);
}

function _write() {
  _write = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, _ref) {
    var bid, title, userid, content, category, facility;
    return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bid = _ref.bid, title = _ref.title, userid = _ref.userid, content = _ref.content, category = _ref.category, facility = _ref.facility;
            e.preventDefault();

            if (bid != undefined) {
              location.href = "http://localhost:3000/board/boardview?bid=".concat(bid);
              console.log('수정!');
            } else {
              Object(_feutils__WEBPACK_IMPORTED_MODULE_6__["Post"])({
                bid: bid,
                title: title,
                userid: userid,
                content: content,
                category: category,
                facility: facility
              }, '/board/write');
              location.href = "http://localhost:3000/board/boardlist";
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _write.apply(this, arguments);
}

var WriteModal = function WriteModal(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.title),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.note),
      note = _useState2[0],
      setNote = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.category),
      category = _useState3[0],
      setCategory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.facility),
      facility = _useState4[0],
      setFacility = _useState4[1];

  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2",
    type: "text",
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
    value: title,
    onChange: function onChange(e) {
      return Object(_feutils__WEBPACK_IMPORTED_MODULE_6__["handleInput"])(setTitle, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2 mb-2",
    type: "text",
    value: "\uAD6C\uB514\uAC70\uBD81\uC774",
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    change: setCategory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['부천종합운동장', '경기생활체육시설'],
    change: setFacility,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2",
    as: "textarea",
    placeholder: "Leave a comment here",
    style: {
      height: '250px'
    },
    value: note,
    onChange: function onChange(e) {
      return Object(_feutils__WEBPACK_IMPORTED_MODULE_6__["handleInput"])(setNote, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2",
    type: "file",
    multiple: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "btns d-flex justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "reset",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "\uB2E4\uC2DC\uC4F0\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "success",
    className: "ms-2",
    onClick: function onClick(e) {
      return write(e, {
        title: title,
        userid: 2,
        content: note,
        category: category,
        facility: facility,
        bid: props.bid
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, props.title ? '수정하기' : '글 올리기'))));
};

_s(WriteModal, "JCI7gSM8ywCPCa+rZB+w0xHucBw=");

_c = WriteModal;
/* harmony default export */ __webpack_exports__["default"] = (WriteModal);

var _c;

$RefreshReg$(_c, "WriteModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsid3JpdGUiLCJlIiwiYmlkIiwidGl0bGUiLCJ1c2VyaWQiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJmYWNpbGl0eSIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwiY29uc29sZSIsImxvZyIsIlBvc3QiLCJXcml0ZU1vZGFsIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNldFRpdGxlIiwibm90ZSIsInNldE5vdGUiLCJzZXRDYXRlZ29yeSIsInNldEZhY2lsaXR5IiwibGdTaG93Iiwic2V0TGdTaG93IiwiaGFuZGxlSW5wdXQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNPLFNBQWVBLEtBQXRCO0FBQUE7QUFBQTs7O2tSQUFPLGlCQUFxQkMsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCQyxlQUF4QixRQUF3QkEsR0FBeEIsRUFBNEJDLEtBQTVCLFFBQTRCQSxLQUE1QixFQUFrQ0MsTUFBbEMsUUFBa0NBLE1BQWxDLEVBQXlDQyxPQUF6QyxRQUF5Q0EsT0FBekMsRUFBaURDLFFBQWpELFFBQWlEQSxRQUFqRCxFQUEwREMsUUFBMUQsUUFBMERBLFFBQTFEO0FBQ0hOLGFBQUMsQ0FBQ08sY0FBRjs7QUFDQSxnQkFBSU4sR0FBRyxJQUFFTyxTQUFULEVBQW9CO0FBQ2hCQyxzQkFBUSxDQUFDQyxJQUFULHVEQUEyRFQsR0FBM0Q7QUFDQVUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDSCxhQUhELE1BR0s7QUFDREMsbUVBQUksQ0FBQztBQUFDWixtQkFBRyxFQUFIQSxHQUFEO0FBQUtDLHFCQUFLLEVBQUxBLEtBQUw7QUFBV0Msc0JBQU0sRUFBTkEsTUFBWDtBQUFrQkMsdUJBQU8sRUFBUEEsT0FB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SCxDQUFWO0FBQUEsS0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5S2MsS0FBSyxDQUFDYixLQUFQLEdBQWMsTUFBZCxHQUFxQixPQUE3TCxDQUZKLENBckJILENBREwsQ0FESjtBQThCSCxDQW5DRDs7R0FBTVksVTs7S0FBQUEsVTtBQXFDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvYm9hcmR2aWV3LjYyMGU4MTBlMjRmZjI0NzU5Y2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCc7XHJcbmltcG9ydCB7Rm9ybSxGbG9hdGluZ0xhYmVsLEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJzsgXHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3Rpb24nO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8v642w7J207YSwIOuTseuhne2VmOq4sFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGUoZSx7YmlkLHRpdGxlLHVzZXJpZCxjb250ZW50LGNhdGVnb3J5LGZhY2lsaXR5fSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoYmlkIT11bmRlZmluZWQpIHtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmPWBodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmR2aWV3P2JpZD0ke2JpZH1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsiJjsoJUhJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBQb3N0KHtiaWQsdGl0bGUsdXNlcmlkLGNvbnRlbnQsY2F0ZWdvcnksZmFjaWxpdHl9LCcvYm9hcmQvd3JpdGUnKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmPWBodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmRsaXN0YFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IFdyaXRlTW9kYWw9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKHByb3BzLnRpdGxlKTtcclxuICAgIGNvbnN0IFtub3RlLHNldE5vdGVdID0gdXNlU3RhdGUocHJvcHMubm90ZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnksc2V0Q2F0ZWdvcnldID0gIHVzZVN0YXRlKHByb3BzLmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IFtmYWNpbGl0eSxzZXRGYWNpbGl0eV0gPSAgdXNlU3RhdGUocHJvcHMuZmFjaWxpdHkpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb2RhbCBsZ1Nob3c9e3Byb3BzLmxnU2hvd30gc2V0TGdTaG93PXtwcm9wcy5zZXRMZ1Nob3d9PlxyXG4gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ0aXRsZVwiIGxhYmVsPVwi7KCc66qpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXRUaXRsZSxlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwid3JpdGVyXCIgbGFiZWw9XCLsnpHshLHsnpBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTIgbWItMicgdHlwZT1cInRleHRcIiB2YWx1ZT1cIuq1rOuUlOqxsOu2geydtFwiIHJlYWRPbmx5Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb24gdGl0bGU9XCLrp5DrqLjrpqzrpbwg7ISg7YOd7ZWY7IS47JqUXCIgY2F0PXtbJ2NvbW11bml0eScsJ3JldmlldyddfSBjaGFuZ2U9e3NldENhdGVnb3J5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbiB0aXRsZT1cIuychOy5mOulvCDshKDtg53tlZjshLjsmpRcIiBjYXQ9e1sn67aA7LKc7KKF7ZWp7Jq064+Z7J6lJywn6rK96riw7IOd7Zmc7LK07Jyh7Iuc7ISkJ119IGNoYW5nZT17c2V0RmFjaWxpdHl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwidGV4dGFyZWFcIiBsYWJlbD1cIuyDgeuMgOulvCDrsLDroKTtlbTso7zshLjsmpQhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIGNvbW1lbnQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9ICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXROb3RlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtRmlsZU11bHRpcGxlXCIgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInJlc2V0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPuuLpOyLnOyTsOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3NOYW1lPSdtcy0yJyBvbkNsaWNrPXsoZSk9PndyaXRlKGUse3RpdGxlOnRpdGxlLHVzZXJpZDoyLGNvbnRlbnQ6bm90ZSxjYXRlZ29yeTpjYXRlZ29yeSxmYWNpbGl0eTpmYWNpbGl0eSxiaWQ6cHJvcHMuYmlkfSl9PnsocHJvcHMudGl0bGUpPyfsiJjsoJXtlZjquLAnOifquIAg7Jis66as6riwJ308L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGVNb2RhbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==