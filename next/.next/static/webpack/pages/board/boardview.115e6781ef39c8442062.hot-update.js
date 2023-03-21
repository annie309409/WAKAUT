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






var WriteModal = function WriteModal(props, session) {
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
    value: session.name,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsiV3JpdGVNb2RhbCIsInByb3BzIiwic2Vzc2lvbiIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsIm5vdGUiLCJzZXROb3RlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImZhY2lsaXR5Iiwic2V0RmFjaWxpdHkiLCJ3cml0ZSIsImUiLCJiaWQiLCJ1c2VyaWQiLCJjb250ZW50IiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJhbGVydCIsImR0IiwiUG9zdCIsInRoZW4iLCJyZXMiLCJzZXRMZ1Nob3ciLCJjbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJsZ1Nob3ciLCJoYW5kbGVJbnB1dCIsIm5hbWUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsS0FBRCxFQUFPQyxPQUFQLEVBQWlCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUNGLEtBQUssQ0FBQ0csS0FBUCxDQURIO0FBQUEsTUFDdkJBLEtBRHVCO0FBQUEsTUFDakJDLFFBRGlCOztBQUFBLG1CQUVQRixzREFBUSxDQUFDRixLQUFLLENBQUNLLElBQVAsQ0FGRDtBQUFBLE1BRXZCQSxJQUZ1QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHRUosc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDTyxRQUFQLENBSFY7QUFBQSxNQUd2QkEsUUFIdUI7QUFBQSxNQUdkQyxXQUhjOztBQUFBLG1CQUlFTixzREFBUSxDQUFDRixLQUFLLENBQUNTLFFBQVAsQ0FKVjtBQUFBLE1BSXZCQSxRQUp1QjtBQUFBLE1BSWRDLFdBSmM7O0FBQUEsV0FNZkMsS0FOZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzVEFNOUIsaUJBQXFCQyxDQUFyQjtB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LE1BQXJDO0FBQTRDLFVBQU0sRUFBQyxrQkFBbkQ7QUFBc0UsWUFBUSxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsQkgsRUFxQkc7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsU0FBOUI7QUFBd0MsYUFBUyxFQUFDLE1BQWxEO0FBQXlELFdBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGFBQUtELEtBQUssQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNULGFBQUssRUFBQ0EsS0FBUDtBQUFhVyxjQUFNLEVBQUMsQ0FBcEI7QUFBc0JDLGVBQU8sRUFBQ1YsSUFBOUI7QUFBbUNFLGdCQUFRLEVBQUNBLFFBQTVDO0FBQXFERSxnQkFBUSxFQUFDQSxRQUE5RDtBQUF1RUksV0FBRyxFQUFDYixLQUFLLENBQUNhO0FBQWpGLE9BQUgsQ0FBVjtBQUFBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUtiLEtBQUssQ0FBQ0csS0FBUCxHQUFjLE1BQWQsR0FBcUIsT0FBN0wsQ0FGSixDQXJCSCxDQURMLENBREo7QUE4QkgsQ0F0REQ7O0dBQU1KLFU7O0tBQUFBLFU7QUF3RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkdmlldy4xMTVlNjc4MWVmMzljODQ0MjA2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQge0Zvcm0sRmxvYXRpbmdMYWJlbCxCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7IFxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0aW9uJztcclxuaW1wb3J0IHtQb3N0LGhhbmRsZUlucHV0fSBmcm9tICcuLi9mZXV0aWxzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgV3JpdGVNb2RhbD0ocHJvcHMsc2Vzc2lvbik9PntcclxuICAgIGNvbnN0IFt0aXRsZSxzZXRUaXRsZV0gPSB1c2VTdGF0ZShwcm9wcy50aXRsZSk7XHJcbiAgICBjb25zdCBbbm90ZSxzZXROb3RlXSA9IHVzZVN0YXRlKHByb3BzLm5vdGUpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5LHNldENhdGVnb3J5XSA9ICB1c2VTdGF0ZShwcm9wcy5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBbZmFjaWxpdHksc2V0RmFjaWxpdHldID0gIHVzZVN0YXRlKHByb3BzLmZhY2lsaXR5KTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gd3JpdGUoZSx7YmlkLHRpdGxlLHVzZXJpZCxjb250ZW50LGNhdGVnb3J5LGZhY2lsaXR5fSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGNhdGVnb3J5PT0gdW5kZWZpbmVkIHx8IGZhY2lsaXR5ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsubTthYzqs6Drpqwg67CPIOyatOuPmeyepeyGjOulvCDshKDtg53tlbTso7zshLjsmpQhJyk7XHJcbiAgICAgICAgfWVsc2UgaWYoIHRpdGxlID09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsoJzrqqkg67CPIOy7qO2FkOy4oOulvCDsnoXroKXtlbTso7zshLjsmpQhJyk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBQb3N0KHtiaWQsdGl0bGUsdXNlcmlkLGNvbnRlbnQsY2F0ZWdvcnksZmFjaWxpdHl9LCcvYm9hcmQvd3JpdGUnKS50aGVuKHJlcz0+cmVzKTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0TGdTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGJpZCAhPT0gdW5kZWZpbmVkICYmIChhd2FpdCBkdCkuY250ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmPWBodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmR2aWV3P2JpZD0ke2JpZH1gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWY9YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib2FyZC9ib2FyZGxpc3RgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb2RhbCBsZ1Nob3c9e3Byb3BzLmxnU2hvd30gc2V0TGdTaG93PXtwcm9wcy5zZXRMZ1Nob3d9IHNpemU9J2xnJz5cclxuICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwidGl0bGVcIiBsYWJlbD1cIuygnOuqqVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPSdtdC0yJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXQoc2V0VGl0bGUsZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cIndyaXRlclwiIGxhYmVsPVwi7J6R7ISx7J6QXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCAgY2xhc3NOYW1lPSdtdC0yIG1iLTInIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Nlc3Npb24ubmFtZX0gcmVhZE9ubHkvPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbiB0aXRsZT1cIuunkOuouOumrOulvCDshKDtg53tlZjshLjsmpRcIiBjYXQ9e1snY29tbXVuaXR5JywncmV2aWV3J119IGNoYW5nZT17c2V0Q2F0ZWdvcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uIHRpdGxlPVwi7JyE7LmY66W8IOyEoO2Dne2VmOyEuOyalFwiIGNhdD17WyfrtoDsspzsooXtlansmrTrj5nsnqUnLCfqsr3quLDsg53tmZzssrTsnKHsi5zshKQnXX0gY2hhbmdlPXtzZXRGYWNpbGl0eX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ0ZXh0YXJlYVwiIGxhYmVsPVwi7IOB64yA66W8IOuwsOugpO2VtOyjvOyEuOyalCFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMidcclxuICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlYXZlIGEgY29tbWVudCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX0gIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0KHNldE5vdGUsZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1GaWxlTXVsdGlwbGVcIiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCAgY2xhc3NOYW1lPSdtdC0yJyB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5naWYsIC5qcGcsIC5wbmdcIiBtdWx0aXBsZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInJlc2V0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPuuLpOyLnOyTsOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3NOYW1lPSdtcy0yJyBvbkNsaWNrPXsoZSk9PndyaXRlKGUse3RpdGxlOnRpdGxlLHVzZXJpZDoyLGNvbnRlbnQ6bm90ZSxjYXRlZ29yeTpjYXRlZ29yeSxmYWNpbGl0eTpmYWNpbGl0eSxiaWQ6cHJvcHMuYmlkfSl9PnsocHJvcHMudGl0bGUpPyfsiJjsoJXtlZjquLAnOifquIAg7Jis66as6riwJ308L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGVNb2RhbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==