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

              if (category == undefined || facility == undefined) {
                alert('카테고리 및 운동장소를 선택해주세요!');
              } else if (title == undefined || content == undefined) {
                alert('제목 및 컨텐츠를 입력해주세요!');
              } else {
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
                props.setLgShow(false); // if (bid !== undefined && (await dt).cnt === 1) {
                //     location.href=`http://localhost:3000/board/boardview?bid=${bid}`;
                // }else{
                //     location.href=`http://localhost:3000/board/boardlist`
                // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiXSwibmFtZXMiOlsiV3JpdGVNb2RhbCIsInByb3BzIiwidXNlU3RhdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwibm90ZSIsInNldE5vdGUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmFjaWxpdHkiLCJzZXRGYWNpbGl0eSIsIndyaXRlIiwiZSIsImJpZCIsInVzZXJpZCIsImNvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImFsZXJ0IiwiZHQiLCJQb3N0IiwidGhlbiIsInJlcyIsInNldExnU2hvdyIsImxnU2hvdyIsImhhbmRsZUlucHV0Iiwic2VuYW1lIiwiaGVpZ2h0Iiwic2VpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDQyxLQUFELEVBQVM7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRFg7QUFBQSxNQUNmQSxLQURlO0FBQUEsTUFDVEMsUUFEUzs7QUFBQSxtQkFFQ0Ysc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDSSxJQUFQLENBRlQ7QUFBQSxNQUVmQSxJQUZlO0FBQUEsTUFFVkMsT0FGVTs7QUFBQSxtQkFHVUosc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDTSxRQUFQLENBSGxCO0FBQUEsTUFHZkEsUUFIZTtBQUFBLE1BR05DLFdBSE07O0FBQUEsbUJBSVVOLHNEQUFRLENBQUNELEtBQUssQ0FBQ1EsUUFBUCxDQUpsQjtBQUFBLE1BSWZBLFFBSmU7QUFBQSxNQUlOQyxXQUpNOztBQUFBLFdBTVBDLEtBTk87QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBTXRCLGlCQUFxQkMsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCQyxpQkFBeEIsUUFBd0JBLEdB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QUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsU0FBOUI7QUFBd0MsYUFBUyxFQUFDLE1BQWxEO0FBQXlELFdBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGFBQUtELEtBQUssQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNULGFBQUssRUFBQ0EsS0FBUDtBQUFhVyxjQUFNLEVBQUNiLEtBQUssQ0FBQzJCLElBQTFCO0FBQStCYixlQUFPLEVBQUNWLElBQXZDO0FBQTRDRSxnQkFBUSxFQUFDQSxRQUFyRDtBQUE4REUsZ0JBQVEsRUFBQ0EsUUFBdkU7QUFBZ0ZJLFdBQUcsRUFBQ1osS0FBSyxDQUFDWTtBQUExRixPQUFILENBQVY7QUFBQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtMWixLQUFLLENBQUNFLEtBQVAsR0FBYyxNQUFkLEdBQXFCLE9BQXRNLENBRkosQ0FyQkgsQ0FETCxDQURKO0FBOEJILENBdEREOztHQUFNSCxVOztLQUFBQSxVO0FBd0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZGxpc3QuOThhOTkxYzgzZmEwODQ3YWI4ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsJztcclxuaW1wb3J0IHtGb3JtLEZsb2F0aW5nTGFiZWwsQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnOyBcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlbGVjdGlvbic7XHJcbmltcG9ydCB7UG9zdCxoYW5kbGVJbnB1dH0gZnJvbSAnLi4vZmV1dGlscyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFdyaXRlTW9kYWw9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKHByb3BzLnRpdGxlKTtcclxuICAgIGNvbnN0IFtub3RlLHNldE5vdGVdID0gdXNlU3RhdGUocHJvcHMubm90ZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnksc2V0Q2F0ZWdvcnldID0gIHVzZVN0YXRlKHByb3BzLmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IFtmYWNpbGl0eSxzZXRGYWNpbGl0eV0gPSAgdXNlU3RhdGUocHJvcHMuZmFjaWxpdHkpO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3cml0ZShlLHtiaWQsdGl0bGUsdXNlcmlkLGNvbnRlbnQsY2F0ZWdvcnksZmFjaWxpdHl9KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoY2F0ZWdvcnk9PSB1bmRlZmluZWQgfHwgZmFjaWxpdHkgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+y5tO2FjOqzoOumrCDrsI8g7Jq064+Z7J6l7IaM66W8IOyEoO2Dne2VtOyjvOyEuOyalCEnKTtcclxuICAgICAgICB9ZWxzZSBpZiggdGl0bGUgPT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ygnOuqqSDrsI8g7Luo7YWQ7Lig66W8IOyeheugpe2VtOyjvOyEuOyalCEnKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IFBvc3Qoe2JpZCx0aXRsZSx1c2VyaWQsY29udGVudCxjYXRlZ29yeSxmYWNpbGl0eX0sJy9ib2FyZC93cml0ZScpLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRMZ1Nob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBpZiAoYmlkICE9PSB1bmRlZmluZWQgJiYgKGF3YWl0IGR0KS5jbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gICAgIGxvY2F0aW9uLmhyZWY9YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7YmlkfWA7XHJcbiAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkbGlzdGBcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vZGFsIGxnU2hvdz17cHJvcHMubGdTaG93fSBzZXRMZ1Nob3c9e3Byb3BzLnNldExnU2hvd30gc2l6ZT0nbGcnPlxyXG4gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ0aXRsZVwiIGxhYmVsPVwi7KCc66qpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXRUaXRsZSxlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwid3JpdGVyXCIgbGFiZWw9XCLsnpHshLHsnpBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTIgbWItMicgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuc2VuYW1lfSByZWFkT25seS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uIHRpdGxlPVwi66eQ66i466as66W8IOyEoO2Dne2VmOyEuOyalFwiIGNhdD17Wydjb21tdW5pdHknLCdyZXZpZXcnXX0gY2hhbmdlPXtzZXRDYXRlZ29yeX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb24gdGl0bGU9XCLsnITsuZjrpbwg7ISg7YOd7ZWY7IS47JqUXCIgY2F0PXtbJ+u2gOyynOyihe2VqeyatOuPmeyepScsJ+qyveq4sOyDne2ZnOyytOycoeyLnOyEpCddfSBjaGFuZ2U9e3NldEZhY2lsaXR5fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRleHRhcmVhXCIgbGFiZWw9XCLsg4HrjIDrpbwg67Cw66Ck7ZW07KO87IS47JqUIVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPSdtdC0yJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVhdmUgYSBjb21tZW50IGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfSAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlSW5wdXQoc2V0Tm90ZSxlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUZpbGVNdWx0aXBsZVwiIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTInIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmdpZiwgLmpwZywgLnBuZ1wiIG11bHRpcGxlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRucyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+64uk7Iuc7JOw6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzc05hbWU9J21zLTInIG9uQ2xpY2s9eyhlKT0+d3JpdGUoZSx7dGl0bGU6dGl0bGUsdXNlcmlkOnByb3BzLnNlaWQsY29udGVudDpub3RlLGNhdGVnb3J5OmNhdGVnb3J5LGZhY2lsaXR5OmZhY2lsaXR5LGJpZDpwcm9wcy5iaWR9KX0+eyhwcm9wcy50aXRsZSk/J+yImOygle2VmOq4sCc6J+q4gCDsmKzrpqzquLAnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZU1vZGFsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9