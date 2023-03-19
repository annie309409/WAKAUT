webpackHotUpdate_N_E("pages/board/boardview",{

/***/ "./pages/board/boardview.js":
/*!**********************************!*\
  !*** ./pages/board/boardview.js ***!
  \**********************************/
/*! exports provided: __N_SSP, write, del, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list */ "./components/list.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _write_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./write_modal */ "./pages/board/write_modal.js");
/* harmony import */ var _components_mgmodal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mgmodal */ "./components/mgmodal.js");
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\board\\boardview.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var title = '';
var contents = ''; //데이터 끌고오기!

//데이터 등록하기
var __N_SSP = true;
function write(_x, _x2) {
  return _write.apply(this, arguments);
}

function _write() {
  _write = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, _ref) {
    var bid, userid, comment;
    return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bid = _ref.bid, userid = _ref.userid, comment = _ref.comment;
            e.preventDefault();
            Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Post"])({
              bid: bid,
              userid: userid,
              comment: comment
            }, '/board/repwrite');
            location.href = "http://localhost:3000/board/boardview?bid=".concat(bid);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _write.apply(this, arguments);
}

function del(_x3, _x4) {
  return _del.apply(this, arguments);
}

function _del() {
  _del = Object(C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e, _ref2) {
    var bid;
    return C_Users_pc_Desktop_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bid = _ref2.bid;
            e.preventDefault();
            Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Post"])({
              bid: bid
            }, '/board/repwrite');

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _del.apply(this, arguments);
}

var Boardview = function Boardview(_ref3) {
  _s();

  var boards = _ref3.boards;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mgShow = _useState2[0],
      setMgShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      reply = _useState3[0],
      setReply = _useState3[1];

  var bd = boards[0];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "brdview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "bg-secondary pt-5 pb-4 brdview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: bd.title,
    kd: bd.category,
    time: bd.regdate2,
    view: bd.views + 1,
    name: bd.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "viewnote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, bd.content), __jsx("div", {
    className: "replay p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, bd.com.map(function (m, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "txtLft d-flex",
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 34
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 37
      }
    }, m.name), __jsx("p", {
      className: "ms-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 37
      }
    }, m.comment, " ", __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 69
      }
    }, m.regdate2)), __jsx("p", {
      className: "ms-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 37
      }
    }, "\uC0AD\uC81C\uD558\uAE30")));
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "reTxt d-flex align-items-end mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    as: "textarea",
    placeholder: "\uB313\uAE00\uC740 \uD55C\uBC88 \uB2EC\uBA74 \uC0AD\uC81C\uAC00 \uBD88\uAC00\uB2A5\uD558\uB2F5\uB2C8\uB2F9 \uD83D\uDC6E\u200D\u2642\uFE0F\uD83D\uDC6E\u200D\u2640\uFE0F ",
    style: {
      height: '80px',
      width: '90%'
    },
    onChange: function onChange(e) {
      Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["handleInput"])(setReply, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "btn btn-success ms-3",
    type: "submit",
    onClick: function onClick(e) {
      write(e, {
        bid: bd.bid,
        userid: 2,
        comment: reply
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "\uB313\uAE00 \uB4F1\uB85D")))), __jsx("div", {
    className: "btns mt-4 mb-4 d-flex  justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/board/boardlist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 64
    }
  }, "\uBAA9\uB85D\uC73C\uB85C")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "success",
    onClick: function onClick() {
      setLgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "\uC218\uC815\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "secondary",
    onClick: function onClick() {
      setMgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "danger",
    onClick: function onClick() {
      setMgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "\uAC15\uC81C\uC0AD\uC81C")), __jsx(_components_mgmodal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    LgShow: mgShow,
    setLgShow: setMgShow,
    title: "\uAC8C\uC2DC\uAE00 \uC0AD\uC81C",
    msg: "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: boards[0].title,
    note: boards[0].content,
    bid: boards[0].bid,
    setLgShow: setLgShow,
    lgShow: lgShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 16
    }
  })));
};

_s(Boardview, "6Tjsv3yYiQ8H4knojX6YxTqu5z8=");

_c = Boardview;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_8__["default"])(Boardview, {
  title: title,
  description: contents
});
/* harmony default export */ __webpack_exports__["default"] = (Boardview);

var _c;

$RefreshReg$(_c, "Boardview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmR2aWV3LmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29udGVudHMiLCJ3cml0ZSIsImUiLCJiaWQiLCJ1c2VyaWQiLCJjb21tZW50IiwicHJldmVudERlZmF1bHQiLCJQb3N0IiwibG9jYXRpb24iLCJocmVmIiwiZGVsIiwiQm9hcmR2aWV3IiwiYm9hcmRzIiwidXNlU3RhdGUiLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJtZ1Nob3ciLCJzZXRNZ1Nob3ciLCJyZXBseSIsInNldFJlcGx5IiwiYmQiLCJjYXRlZ29yeSIsInJlZ2RhdGUyIiwidmlld3MiLCJuYW1lIiwiY29udGVudCIsImNvbSIsIm1hcCIsIm0iLCJpZHgiLCJoZWlnaHQiLCJ3aWR0aCIsImhhbmRsZUlucHV0IiwiZ2V0TGF5b3V0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsS0FBSyxHQUFDLEVBQVY7QUFDQSxJQUFJQyxRQUFRLEdBQUUsRUFBZCxDLENBR0E7O0FBTUE7O0FBQ08sU0FBZUMsS0FBdEI7QUFBQTtBQUFBOzs7a1JBQU8saUJBQXFCQyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0JDLGVBQXhCLFFBQXdCQSxHQUF4QixFQUE0QkMsTUFBNUIsUUFBNEJBLE1BQTVCLEVBQW1DQyxPQUFuQyxRQUFtQ0EsT0FBbkM7QUFDSEgsYUFBQyxDQUFDSSxjQUFGO0FBQ0FDLGlFQUFJLENBQUM7QUFBQ0osaUJBQUcsRUFBQ0EsR0FBTDtBQUFTQyxvQkFBTSxFQUFDQSxNQUFoQjtBQUF1QkMscUJBQU8sRUFBQ0E7QUFBL0IsYUFBRCxFQUF5QyxpQkFBekMsQ0FBSjtBQUNBRyxvQkFBUSxDQUFDQyxJQUFULHVEQUE0RE4sR0FBNUQ7O0FBSEc7QUFBQTtBQUFB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cGFjay9wYWdlcy9ib2FyZC9ib2FyZHZpZXcuNTQ2MGQyNzY1YjhmODAwNDYzMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lcixGb3JtLEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSBcIi4vd3JpdGVfbW9kYWxcIjtcclxuaW1wb3J0IE1nbW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWdtb2RhbFwiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5sZXQgdGl0bGU9Jyc7XHJcbmxldCBjb250ZW50cyA9Jyc7XHJcblxyXG5cclxuLy/rjbDsnbTthLAg64GM6rOg7Jik6riwIVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBsZXQgYm9hcmRzID0gYXdhaXQgRGF0YXMoYC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7Y3R4LnF1ZXJ5LmJpZH1gKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07XHJcbn1cclxuXHJcbi8v642w7J207YSwIOuTseuhne2VmOq4sFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGUoZSx7YmlkLHVzZXJpZCxjb21tZW50fSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBQb3N0KHtiaWQ6YmlkLHVzZXJpZDp1c2VyaWQsY29tbWVudDpjb21tZW50fSwnL2JvYXJkL3JlcHdyaXRlJyk7XHJcbiAgICBsb2NhdGlvbi5ocmVmID1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHtiaWR9YDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbChlLHtiaWR9KXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFBvc3Qoe2JpZDpiaWR9LCcvYm9hcmQvcmVwd3JpdGUnKVxyXG59XHJcblxyXG5jb25zdCBCb2FyZHZpZXc9KHtib2FyZHN9KT0+e1xyXG4gICAgY29uc3QgW2xnU2hvdywgc2V0TGdTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttZ1Nob3csIHNldE1nU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBsZXQgYmQgPSBib2FyZHNbMF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZHZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHB0LTUgcGItNCBicmR2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2JkLnRpdGxlfSBrZD17YmQuY2F0ZWdvcnl9IHRpbWU9e2JkLnJlZ2RhdGUyfSB2aWV3PXtiZC52aWV3cysxfSBuYW1lPXtiZC5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlld25vdGVcIj57YmQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGxheSBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJkLmNvbS5tYXAoKG0saWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0TGZ0IGQtZmxleFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnttLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXMtNVwiPnttLmNvbW1lbnR9IDxzbWFsbD57bS5yZWdkYXRlMn08L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXMtM1wiPuyCreygnO2VmOq4sDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlVHh0IGQtZmxleCBhbGlnbi1pdGVtcy1lbmQgbXQtNFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCLrjJPquIDsnYAg7ZWc67KIIOuLrOuptCDsgq3soJzqsIAg67aI6rCA64ql7ZWY64u164uI64u5IPCfka7igI3imYLvuI/wn5Gu4oCN4pmA77iPIFwiIHN0eWxlPXt7IGhlaWdodDogJzgwcHgnICx3aWR0aDonOTAlJyB9fSBvbkNoYW5nZT17KGUpPT57aGFuZGxlSW5wdXQoc2V0UmVwbHksZSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtcy0zXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+eyB3cml0ZShlLHtiaWQ6YmQuYmlkLHVzZXJpZDoyLGNvbW1lbnQ6cmVwbHl9KX19PuuMk+q4gCDrk7HroZ08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zIG10LTQgbWItNCBkLWZsZXggIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwicHJpbWFyeVwiPjxMaW5rIGhyZWY9XCIvYm9hcmQvYm9hcmRsaXN0XCI+66qp66Gd7Jy866GcPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXMtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17KCk9PntzZXRMZ1Nob3codHJ1ZSl9fT7siJjsoJXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7sgq3soJztlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7qsJXsoJzsgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1nbW9kYWwgTGdTaG93PXttZ1Nob3d9IHNldExnU2hvdz17c2V0TWdTaG93fSB0aXRsZT1cIuqyjOyLnOq4gCDsgq3soJxcIiBtc2c9XCLsoJXrp5Ag7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiLz5cclxuICAgICAgICAgICAgICAgPFdyaXRlTW9kYWwgdGl0bGU9e2JvYXJkc1swXS50aXRsZX0gbm90ZT17Ym9hcmRzWzBdLmNvbnRlbnR9IGJpZD17Ym9hcmRzWzBdLmJpZH0gc2V0TGdTaG93PXtzZXRMZ1Nob3d9IGxnU2hvdz17bGdTaG93fS8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4gICAgZ2V0TGF5b3V0KEJvYXJkdmlldyx7dGl0bGU6dGl0bGUsZGVzY3JpcHRpb246Y29udGVudHN9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkdmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==