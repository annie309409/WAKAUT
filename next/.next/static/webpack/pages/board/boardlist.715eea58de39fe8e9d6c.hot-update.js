webpackHotUpdate_N_E("pages/board/boardlist",{

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
              _context.next = 28;
              break;

            case 6:
              if (!(title == undefined || content == undefined)) {
                _context.next = 10;
                break;
              }

              alert('제목 및 컨텐츠를 입력해주세요!');
              _context.next = 28;
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
              _context.t0 = console;
              _context.next = 15;
              return dt;

            case 15:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

              _context.t2 = bid !== undefined;

              if (!_context.t2) {
                _context.next = 23;
                break;
              }

              _context.next = 21;
              return dt;

            case 21:
              _context.t3 = _context.sent.cnt;
              _context.t2 = _context.t3 === 1;

            case 23:
              if (!_context.t2) {
                _context.next = 27;
                break;
              }

              location.href = "http://localhost:3000/board/boardview?bid=".concat(bid);
              _context.next = 28;
              break;

            case 27:
              location.href = "http://localhost:3000/board/boardlist";

            case 28:
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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 40,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    change: setCategory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['부천종합운동장', '경기생활체육시설'],
    change: setFacility,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "btns d-flex justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "reset",
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "\uB2E4\uC2DC\uC4F0\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "success",
    className: "ms-2",
    onClick: function onClick(e) {
      return write(e, {
        title: title,
        userid: props.seid,
        content: note,
        category: category,
        facility: facility,
        bid: props.bid
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsiV3JpdGVNb2RhbCIsInByb3BzIiwidXNlU3RhdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwibm90ZSIsInNldE5vdGUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmFjaWxpdHkiLCJzZXRGYWNpbGl0eSIsIndyaXRlIiwiZSIsImJpZCIsInVzZXJpZCIsImNvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImFsZXJ0IiwiZHQiLCJQb3N0IiwidGhlbiIsInJlcyIsInNldExnU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJjbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJsZ1Nob3ciLCJoYW5kbGVJbnB1dCIsInNlbmFtZSIsImhlaWdodCIsInNlaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsS0FBRCxFQUFTO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQURYO0FBQUEsTUFDZkEsS0FEZTtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUNELEtBQUssQ0FBQ0ksSUFBUCxDQUZUO0FBQUEsTUFFZkEsSUFGZTtBQUFBLE1BRVZDLE9BRlU7O0FBQUEsbUJBR1VKLHNEQUFRLENBQUNELEtBQUssQ0FBQ00sUUFBUCxDQUhsQjtBQUFBLE1BR2ZBLFFBSGU7QUFBQSxNQUdOQyxXQUhNOztBQUFBLG1CQUlVTixzREFBUSxDQUFDRCxLQUFLLENBQUNRLFFBQVAsQ0FKbEI7QUFBQSxNQUlmQSxRQUplO0FBQUEsTUFJTkMsV0FKTTs7QUFBQSxXQU1QQyxLQU5PO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNUQU10QixpQkFBcUJDLENBQXJCO0FBQUE7QUFB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QUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLE9BQU47QUFBZSxhQUFTLEVBQUMsTUFBekI7QUFBZ0MsUUFBSSxFQUFDLE1BQXJDO0FBQTRDLFVBQU0sRUFBQyxrQkFBbkQ7QUFBc0UsWUFBUSxNQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsQkgsRUFxQkc7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsU0FBOUI7QUFBd0MsYUFBUyxFQUFDLE1BQWxEO0FBQXlELFdBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGFBQUtELEtBQUssQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNULGFBQUssRUFBQ0EsS0FBUDtBQUFhVyxjQUFNLEVBQUNiLEtBQUssQ0FBQ2dDLElBQTFCO0FBQStCbEIsZUFBTyxFQUFDVixJQUF2QztBQUE0Q0UsZ0JBQVEsRUFBQ0EsUUFBckQ7QUFBOERFLGdCQUFRLEVBQUNBLFFBQXZFO0FBQWdGSSxXQUFHLEVBQUNaLEtBQUssQ0FBQ1k7QUFBMUYsT0FBSCxDQUFWO0FBQUEsS0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrTFosS0FBSyxDQUFDRSxLQUFQLEdBQWMsTUFBZCxHQUFxQixPQUF0TSxDQUZKLENBckJILENBREwsQ0FESjtBQThCSCxDQXZERDs7R0FBTUgsVTs7S0FBQUEsVTtBQXlEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvYm9hcmRsaXN0LjcxNWVlYTU4ZGUzOWZlOGU5ZDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCc7XHJcbmltcG9ydCB7Rm9ybSxGbG9hdGluZ0xhYmVsLEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJzsgXHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3Rpb24nO1xyXG5pbXBvcnQge1Bvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBXcml0ZU1vZGFsPShwcm9wcyk9PntcclxuICAgIGNvbnN0IFt0aXRsZSxzZXRUaXRsZV0gPSB1c2VTdGF0ZShwcm9wcy50aXRsZSk7XHJcbiAgICBjb25zdCBbbm90ZSxzZXROb3RlXSA9IHVzZVN0YXRlKHByb3BzLm5vdGUpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5LHNldENhdGVnb3J5XSA9ICB1c2VTdGF0ZShwcm9wcy5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBbZmFjaWxpdHksc2V0RmFjaWxpdHldID0gIHVzZVN0YXRlKHByb3BzLmZhY2lsaXR5KTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gd3JpdGUoZSx7YmlkLHRpdGxlLHVzZXJpZCxjb250ZW50LGNhdGVnb3J5LGZhY2lsaXR5fSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGNhdGVnb3J5PT0gdW5kZWZpbmVkIHx8IGZhY2lsaXR5ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsubTthYzqs6Drpqwg67CPIOyatOuPmeyepeyGjOulvCDshKDtg53tlbTso7zshLjsmpQhJyk7XHJcbiAgICAgICAgfWVsc2UgaWYoIHRpdGxlID09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsoJzrqqkg67CPIOy7qO2FkOy4oOulvCDsnoXroKXtlbTso7zshLjsmpQhJyk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBQb3N0KHtiaWQsdGl0bGUsdXNlcmlkLGNvbnRlbnQsY2F0ZWdvcnksZmFjaWxpdHl9LCcvYm9hcmQvd3JpdGUnKS50aGVuKHJlcz0+cmVzKTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0TGdTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgZHQpO1xyXG4gICAgICAgICAgICBpZiAoYmlkICE9PSB1bmRlZmluZWQgJiYgKGF3YWl0IGR0KS5jbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWY9YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7YmlkfWA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkbGlzdGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vZGFsIGxnU2hvdz17cHJvcHMubGdTaG93fSBzZXRMZ1Nob3c9e3Byb3BzLnNldExnU2hvd30gc2l6ZT0nbGcnPlxyXG4gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ0aXRsZVwiIGxhYmVsPVwi7KCc66qpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXRUaXRsZSxlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwid3JpdGVyXCIgbGFiZWw9XCLsnpHshLHsnpBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTIgbWItMicgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuc2VuYW1lfSByZWFkT25seS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uIHRpdGxlPVwi66eQ66i466as66W8IOyEoO2Dne2VmOyEuOyalFwiIGNhdD17Wydjb21tdW5pdHknLCdyZXZpZXcnXX0gY2hhbmdlPXtzZXRDYXRlZ29yeX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb24gdGl0bGU9XCLsnITsuZjrpbwg7ISg7YOd7ZWY7IS47JqUXCIgY2F0PXtbJ+u2gOyynOyihe2VqeyatOuPmeyepScsJ+qyveq4sOyDne2ZnOyytOycoeyLnOyEpCddfSBjaGFuZ2U9e3NldEZhY2lsaXR5fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRleHRhcmVhXCIgbGFiZWw9XCLsg4HrjIDrpbwg67Cw66Ck7ZW07KO87IS47JqUIVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPSdtdC0yJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVhdmUgYSBjb21tZW50IGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfSAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXQoc2V0Tm90ZSxlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUZpbGVNdWx0aXBsZVwiIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTInIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmdpZiwgLmpwZywgLnBuZ1wiIG11bHRpcGxlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRucyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+64uk7Iuc7JOw6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzc05hbWU9J21zLTInIG9uQ2xpY2s9eyhlKT0+d3JpdGUoZSx7dGl0bGU6dGl0bGUsdXNlcmlkOnByb3BzLnNlaWQsY29udGVudDpub3RlLGNhdGVnb3J5OmNhdGVnb3J5LGZhY2lsaXR5OmZhY2lsaXR5LGJpZDpwcm9wcy5iaWR9KX0+eyhwcm9wcy50aXRsZSk/J+yImOygle2VmOq4sCc6J+q4gCDsmKzrpqzquLAnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZU1vZGFsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9