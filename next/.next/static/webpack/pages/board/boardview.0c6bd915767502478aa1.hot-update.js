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
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    change: setCategory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['부천종합운동장', '경기생활체육시설'],
    change: setFacility,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2",
    type: "file",
    multiple: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "btns d-flex justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "reset",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsid3JpdGUiLCJlIiwiYmlkIiwidGl0bGUiLCJ1c2VyaWQiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJmYWNpbGl0eSIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwiUG9zdCIsIldyaXRlTW9kYWwiLCJwcm9wcyIsInVzZVN0YXRlIiwic2V0VGl0bGUiLCJub3RlIiwic2V0Tm90ZSIsInNldENhdGVnb3J5Iiwic2V0RmFjaWxpdHkiLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJoYW5kbGVJbnB1dCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sU0FBZUEsS0FBdEI7QUFBQTtBQUFBOzs7a1JBQU8saUJBQXFCQyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0JDLGVBQXhCLFFBQXdCQSxHQUF4QixFQUE0QkMsS0FBNUIsUUFBNEJBLEtBQTVCLEVBQWtDQyxNQUFsQyxRQUFrQ0EsTUFBbEMsRUFBeUNDLE9BQXpDLFFBQXlDQSxPQUF6QyxFQUFpREMsUUFBakQsUUFBaURBLFFBQWpELEVBQTBEQyxRQUExRCxRQUEwREEsUUFBMUQ7QUFDSE4sYUFBQyxDQUFDTyxjQUFGOztBQUNBLGdCQUFJTixHQUFHLElBQUVPLFNBQVQsRUFBb0I7QUFDaEJDLHNCQUFRLENBQUNDLElBQVQsdURBQTJEVCxHQUEzRDtBQUNILGFBRkQsTUFFSztBQUNEVSxtRUFBSSxDQUFDO0FBQUNWLG1CQUFHLEVBQUhBLEdBQUQ7QUFBS0MscUJBQUssRUFBTEEsS0FBTDtBQUFXQyxzQkFBTSxFQUFOQSxNQUFYO0FBQWtCQyx1QkFBTyxFQUFQQSxPQUFsQjtBQUEwQkMsd0JBQVEsRUFBUkEsUUFBMUI7QUFBbUNDLHdCQUFRLEVBQVJBO0FBQW5DLGVBQUQsRUFBOEMsY0FBOUMsQ0FBSjtBQUNBRyxzQkFBUSxDQUFDQyxJQUFUO0FBQ0g7O0FBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVdQLElBQU1FLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLEtBQUQsRUFBUztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDRCxLQUFLLENBQUNYLEtBQVAsQ0FEWDtBQUFBLE1BQ2ZBLEtBRGU7QUFBQSxNQUNUYSxRQURTOztBQUFBLG1CQUVDRCxzREFBUSxDQUFDRCxLQUFLLENBQUNHLElBQVAsQ0FGVDtBQUFBLE1BRWZBLElBRmU7QUFBQSxNQUVWQyxPQUZVOztBQUFBLG1CQUdVSCxzREFBUSxDQUFDRCxLQUFLLENBQUNSLFFBQVAsQ0FIbEI7QUFBQSxNQUdmQSxRQUhlO0FBQUEsTUFHTmEsV0FITTs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDUCxRQUFQLENBSmxCO0FBQUEsTUFJZkEsUUFKZTtBQUFBLE1BSU5hLFdBSk07O0FBS3RCLFNBQ0ksTUFBQyx5REFBRDtBQUFPLFVBQU0sRUFBRU4sS0FBSyxDQUFDTyxNQUFyQjtBQUE2QixhQUFTLEVBQUVQLEtBQUssQ0FBQ1EsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsNkRBQUQ7QUFBZSxhQUFTLEVBQUMsT0FBekI7QUFBaUMsU0FBSyxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUErQixRQUFJLEVBQUMsTUFBcEM7QUFBMkMsZUFBVyxFQUFDLHlEQUF2RDtBQUFvRSxTQUFLLEVBQUVuQixLQUEzRTtBQUFrRixZQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSxhQUFLc0IsNERBQVcsQ0FBQ1AsUUFBRCxFQUFVZixDQUFWLENBQWhCO0FBQUEsS0FBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREgsRUFJRyxNQUFDLDZEQUFEO0FBQWUsYUFBUyxFQUFDLFFBQXpCO0FBQWtDLFNBQUssRUFBQyxvQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWUsYUFBUyxFQUFDLFdBQXpCO0FBQXFDLFFBQUksRUFBQyxNQUExQztBQUFpRCxTQUFLLEVBQUMsZ0NBQXZEO0FBQStELFlBQVEsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkgsRUFPRztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQVcsU0FBSyxFQUFDLHlEQUFqQjtBQUE4QixPQUFHLEVBQUUsQ0FBQyxXQUFELEVBQWEsUUFBYixDQUFuQztBQUEyRCxVQUFNLEVBQUVrQixXQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDZEQUFEO0FBQVcsU0FBSyxFQUFDLG1EQUFqQjtBQUE2QixPQUFHLEVBQUUsQ0FBQyxTQUFELEVBQVcsVUFBWCxDQUFsQztBQUEwRCxVQUFNLEVBQUVDLFdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVBILEVBV0csTUFBQyw2REFBRDtBQUFlLGFBQVMsRUFBQyxVQUF6QjtBQUFvQyxTQUFLLEVBQUMsMERBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUNBLE1BQUUsRUFBQyxVQURIO0FBRUEsZUFBVyxFQUFDLHNCQUZaO0FBR0EsU0FBSyxFQUFFO0FBQUVJLFlBQU0sRUFBRTtBQUFWLEtBSFA7QUFJQSxTQUFLLEVBQUVQLElBSlA7QUFJYyxZQUFRLEVBQUUsa0JBQUNoQixDQUFEO0FBQUEsYUFBS3NCLDREQUFXLENBQUNMLE9BQUQsRUFBU2pCLENBQVQsQ0FBaEI7QUFBQSxLQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FYSCxFQWtCRyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxrQkFBdEI7QUFBeUMsYUFBUyxFQUFDLE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFlLGFBQVMsRUFBQyxNQUF6QjtBQUFnQyxRQUFJLEVBQUMsTUFBckM7QUFBNEMsWUFBUSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsQkgsRUFxQkc7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsU0FBOUI7QUFBd0MsYUFBUyxFQUFDLE1BQWxEO0FBQXlELFdBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGFBQUtELEtBQUssQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNFLGFBQUssRUFBQ0EsS0FBUDtBQUFhQyxjQUFNLEVBQUMsQ0FBcEI7QUFBc0JDLGVBQU8sRUFBQ1ksSUFBOUI7QUFBbUNYLGdCQUFRLEVBQUNBLFFBQTVDO0FBQXFEQyxnQkFBUSxFQUFDQSxRQUE5RDtBQUF1RUwsV0FBRyxFQUFDWSxLQUFLLENBQUNaO0FBQWpGLE9BQUgsQ0FBVjtBQUFBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUtZLEtBQUssQ0FBQ1gsS0FBUCxHQUFjLE1BQWQsR0FBcUIsT0FBN0wsQ0FGSixDQXJCSCxDQURMLENBREo7QUE4QkgsQ0FuQ0Q7O0dBQU1VLFU7O0tBQUFBLFU7QUFxQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkdmlldy4wYzZiZDkxNTc2NzUwMjQ3OGFhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQge0Zvcm0sRmxvYXRpbmdMYWJlbCxCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7IFxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0aW9uJztcclxuaW1wb3J0IHtEYXRhcyxQb3N0LGhhbmRsZUlucHV0fSBmcm9tICcuLi9mZXV0aWxzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL+uNsOydtO2EsCDrk7HroZ3tlZjquLBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlKGUse2JpZCx0aXRsZSx1c2VyaWQsY29udGVudCxjYXRlZ29yeSxmYWNpbGl0eX0pe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGJpZCE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHtiaWR9YDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIFBvc3Qoe2JpZCx0aXRsZSx1c2VyaWQsY29udGVudCxjYXRlZ29yeSxmYWNpbGl0eX0sJy9ib2FyZC93cml0ZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWY9YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib2FyZC9ib2FyZGxpc3RgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgV3JpdGVNb2RhbD0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdID0gdXNlU3RhdGUocHJvcHMudGl0bGUpO1xyXG4gICAgY29uc3QgW25vdGUsc2V0Tm90ZV0gPSB1c2VTdGF0ZShwcm9wcy5ub3RlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeSxzZXRDYXRlZ29yeV0gPSAgdXNlU3RhdGUocHJvcHMuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgW2ZhY2lsaXR5LHNldEZhY2lsaXR5XSA9ICB1c2VTdGF0ZShwcm9wcy5mYWNpbGl0eSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vZGFsIGxnU2hvdz17cHJvcHMubGdTaG93fSBzZXRMZ1Nob3c9e3Byb3BzLnNldExnU2hvd30+XHJcbiAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRpdGxlXCIgbGFiZWw9XCLsoJzrqqlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0KHNldFRpdGxlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ3cml0ZXJcIiBsYWJlbD1cIuyekeyEseyekFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMiBtYi0yJyB0eXBlPVwidGV4dFwiIHZhbHVlPVwi6rWs65SU6rGw67aB7J20XCIgcmVhZE9ubHkvPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbiB0aXRsZT1cIuunkOuouOumrOulvCDshKDtg53tlZjshLjsmpRcIiBjYXQ9e1snY29tbXVuaXR5JywncmV2aWV3J119IGNoYW5nZT17c2V0Q2F0ZWdvcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uIHRpdGxlPVwi7JyE7LmY66W8IOyEoO2Dne2VmOyEuOyalFwiIGNhdD17WyfrtoDsspzsooXtlansmrTrj5nsnqUnLCfqsr3quLDsg53tmZzssrTsnKHsi5zshKQnXX0gY2hhbmdlPXtzZXRGYWNpbGl0eX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ0ZXh0YXJlYVwiIGxhYmVsPVwi7IOB64yA66W8IOuwsOugpO2VtOyjvOyEuOyalCFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMidcclxuICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlYXZlIGEgY29tbWVudCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX0gIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0KHNldE5vdGUsZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1GaWxlTXVsdGlwbGVcIiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCAgY2xhc3NOYW1lPSdtdC0yJyB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRucyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+64uk7Iuc7JOw6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzc05hbWU9J21zLTInIG9uQ2xpY2s9eyhlKT0+d3JpdGUoZSx7dGl0bGU6dGl0bGUsdXNlcmlkOjIsY29udGVudDpub3RlLGNhdGVnb3J5OmNhdGVnb3J5LGZhY2lsaXR5OmZhY2lsaXR5LGJpZDpwcm9wcy5iaWR9KX0+eyhwcm9wcy50aXRsZSk/J+yImOygle2VmOq4sCc6J+q4gCDsmKzrpqzquLAnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZU1vZGFsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9