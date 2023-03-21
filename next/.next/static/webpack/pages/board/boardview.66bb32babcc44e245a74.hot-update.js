webpackHotUpdate_N_E("pages/board/boardview",{

/***/ "./pages/board/write_modal.js":
/*!************************************!*\
  !*** ./pages/board/write_modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./components/modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selection */ "./components/selection.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\write_modal.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






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

  function write(_x, _x2) {
    return _write.apply(this, arguments);
  }

  function _write() {
    _write = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, _ref) {
      var bid, title, userid, content, category, facility, dt;
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              bid = _ref.bid, title = _ref.title, userid = _ref.userid, content = _ref.content, category = _ref.category, facility = _ref.facility;
              e.preventDefault();

              if (!(category == undefined || facility == undefined)) {
                _context.next = 6;
                break;
              }

              alert('카테고리 및 운동장소를 선택해주세요!');
              _context.next = 23;
              break;

            case 6:
              if (!(title == undefined || content == undefined)) {
                _context.next = 10;
                break;
              }

              alert('제목 및 컨텐츠를 입력해주세요!');
              _context.next = 23;
              break;

            case 10:
              dt = Object(_feutils__WEBPACK_IMPORTED_MODULE_6__["Post"])({
                bid: bid,
                title: title,
                userid: userid,
                content: content,
                category: category,
                facility: facility
              }, '/board/write').then(function (res) {
                return res;
              });
              props.setLgShow(false);
              _context.t0 = bid !== undefined;

              if (!_context.t0) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return dt;

            case 16:
              _context.t1 = _context.sent.cnt;
              _context.t0 = _context.t1 === 1;

            case 18:
              if (!_context.t0) {
                _context.next = 22;
                break;
              }

              location.href = "http://localhost:3000/board/boardview?bid=".concat(bid);
              _context.next = 23;
              break;

            case 22:
              location.href = "http://localhost:3000/board/boardlist";

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _write.apply(this, arguments);
  }

  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2 mb-2",
    type: "text",
    value: props.sename,
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    change: setCategory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['부천종합운동장', '경기생활체육시설'],
    change: setFacility,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    className: "mt-2",
    type: "file",
    accept: ".gif, .jpg, .png",
    multiple: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "btns d-flex justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "reset",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsiV3JpdGVNb2RhbCIsInByb3BzIiwidXNlU3RhdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwibm90ZSIsInNldE5vdGUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmFjaWxpdHkiLCJzZXRGYWNpbGl0eSIsIndyaXRlIiwiZSIsImJpZCIsInVzZXJpZCIsImNvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImFsZXJ0IiwiZHQiLCJQb3N0IiwidGhlbiIsInJlcyIsInNldExnU2hvdyIsImNudCIsImxvY2F0aW9uIiwiaHJlZiIsImxnU2hvdyIsImhhbmRsZUlucHV0Iiwic2VuYW1lIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLEtBQUQsRUFBUztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDRCxLQUFLLENBQUNFLEtBQVAsQ0FEWDtBQUFBLE1BQ2ZBLEtBRGU7QUFBQSxNQUNUQyxRQURTOztBQUFBLG1CQUVDRixzREFBUSxDQUFDRCxLQUFLLENBQUNJLElBQVAsQ0FGVDtBQUFBLE1BRWZBLElBRmU7QUFBQSxNQUVWQyxPQUZVOztBQUFBLG1CQUdVSixzREFBUSxDQUFDRCxLQUFLLENBQUNNLFFBQVAsQ0FIbEI7QUFBQSxNQUdmQSxRQUhlO0FBQUEsTUFHTkMsV0FITTs7QUFBQSxtQkFJVU4sc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDUSxRQUFQLENBSmxCO0FBQUEsTUFJZkEsUUFKZTtBQUFBLE1BSU5DLFdBSk07O0FBQUEsV0FNUEMsS0FOTztBQUFBO0FBQUE7O0FBQUE7QUFBQSxzVEFNdEIsaUJBQXFCQyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0JD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QUFBc0UsWUFBUSxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsQkgsRUFxQkc7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsU0FBOUI7QUFBd0MsYUFBUyxFQUFDLE1BQWxEO0FBQXlELFdBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGFBQUtELEtBQUssQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNULGFBQUssRUFBQ0EsS0FBUDtBQUFhVyxjQUFNLEVBQUMsQ0FBcEI7QUFBc0JDLGVBQU8sRUFBQ1YsSUFBOUI7QUFBbUNFLGdCQUFRLEVBQUNBLFFBQTVDO0FBQXFERSxnQkFBUSxFQUFDQSxRQUE5RDtBQUF1RUksV0FBRyxFQUFDWixLQUFLLENBQUNZO0FBQWpGLE9BQUgsQ0FBVjtBQUFBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUtaLEtBQUssQ0FBQ0UsS0FBUCxHQUFjLE1BQWQsR0FBcUIsT0FBN0wsQ0FGSixDQXJCSCxDQURMLENBREo7QUE4QkgsQ0F0REQ7O0dBQU1ILFU7O0tBQUFBLFU7QUF3RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkdmlldy42NmJiMzJiYWJjYzQ0ZTI0NWE3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQge0Zvcm0sRmxvYXRpbmdMYWJlbCxCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7IFxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0aW9uJztcclxuaW1wb3J0IHtQb3N0LGhhbmRsZUlucHV0fSBmcm9tICcuLi9mZXV0aWxzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgV3JpdGVNb2RhbD0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdID0gdXNlU3RhdGUocHJvcHMudGl0bGUpO1xyXG4gICAgY29uc3QgW25vdGUsc2V0Tm90ZV0gPSB1c2VTdGF0ZShwcm9wcy5ub3RlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeSxzZXRDYXRlZ29yeV0gPSAgdXNlU3RhdGUocHJvcHMuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgW2ZhY2lsaXR5LHNldEZhY2lsaXR5XSA9ICB1c2VTdGF0ZShwcm9wcy5mYWNpbGl0eSk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHdyaXRlKGUse2JpZCx0aXRsZSx1c2VyaWQsY29udGVudCxjYXRlZ29yeSxmYWNpbGl0eX0pe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihjYXRlZ29yeT09IHVuZGVmaW5lZCB8fCBmYWNpbGl0eSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgn7Lm07YWM6rOg66asIOuwjyDsmrTrj5nsnqXshozrpbwg7ISg7YOd7ZW07KO87IS47JqUIScpO1xyXG4gICAgICAgIH1lbHNlIGlmKCB0aXRsZSA9PSB1bmRlZmluZWQgfHwgY29udGVudCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgn7KCc66qpIOuwjyDsu6jthZDsuKDrpbwg7J6F66Cl7ZW07KO87IS47JqUIScpO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGR0ID0gUG9zdCh7YmlkLHRpdGxlLHVzZXJpZCxjb250ZW50LGNhdGVnb3J5LGZhY2lsaXR5fSwnL2JvYXJkL3dyaXRlJykudGhlbihyZXM9PnJlcyk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldExnU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChiaWQgIT09IHVuZGVmaW5lZCAmJiAoYXdhaXQgZHQpLmNudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHtiaWR9YDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmPWBodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmRsaXN0YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgbGdTaG93PXtwcm9wcy5sZ1Nob3d9IHNldExnU2hvdz17cHJvcHMuc2V0TGdTaG93fSBzaXplPSdsZyc+XHJcbiAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRpdGxlXCIgbGFiZWw9XCLsoJzrqqlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0KHNldFRpdGxlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ3cml0ZXJcIiBsYWJlbD1cIuyekeyEseyekFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMiBtYi0yJyB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5zZW5hbWV9IHJlYWRPbmx5Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb24gdGl0bGU9XCLrp5DrqLjrpqzrpbwg7ISg7YOd7ZWY7IS47JqUXCIgY2F0PXtbJ2NvbW11bml0eScsJ3JldmlldyddfSBjaGFuZ2U9e3NldENhdGVnb3J5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbiB0aXRsZT1cIuychOy5mOulvCDshKDtg53tlZjshLjsmpRcIiBjYXQ9e1sn67aA7LKc7KKF7ZWp7Jq064+Z7J6lJywn6rK96riw7IOd7Zmc7LK07Jyh7Iuc7ISkJ119IGNoYW5nZT17c2V0RmFjaWxpdHl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwidGV4dGFyZWFcIiBsYWJlbD1cIuyDgeuMgOulvCDrsLDroKTtlbTso7zshLjsmpQhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIGNvbW1lbnQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9ICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXROb3RlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtRmlsZU11bHRpcGxlXCIgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuZ2lmLCAuanBnLCAucG5nXCIgbXVsdGlwbGUgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj7ri6Tsi5zsk7DquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzTmFtZT0nbXMtMicgb25DbGljaz17KGUpPT53cml0ZShlLHt0aXRsZTp0aXRsZSx1c2VyaWQ6Mixjb250ZW50Om5vdGUsY2F0ZWdvcnk6Y2F0ZWdvcnksZmFjaWxpdHk6ZmFjaWxpdHksYmlkOnByb3BzLmJpZH0pfT57KHByb3BzLnRpdGxlKT8n7IiY7KCV7ZWY6riwJzon6riAIOyYrOumrOq4sCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlTW9kYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=