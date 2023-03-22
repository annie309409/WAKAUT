webpackHotUpdate_N_E("pages/board/boardview",{

/***/ "./pages/board/boardview.js":
/*!**********************************!*\
  !*** ./pages/board/boardview.js ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardview.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var title = '';
var contents = ''; //데이터 끌고오기!

var Boardview = function Boardview(_ref) {
  _s();

  var boards = _ref.boards,
      session = _ref.session;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mgShow = _useState2[0],
      setMgShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      reply = _useState3[0],
      setReply = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(boards[0].com),
      cmts = _useState4[0],
      setCmts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      cnfirm = _useState5[0],
      setCnfirm = _useState5[1];

  var bd = boards[0]; //데이터 등록하기

  function write(_x, _x2) {
    return _write.apply(this, arguments);
  } //등록 후 끌고오기


  function _write() {
    _write = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e, _ref2) {
      var bid, userid, comment, dt;
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              bid = _ref2.bid, userid = _ref2.userid, comment = _ref2.comment;
              e.preventDefault();

              if (!(reply != '')) {
                _context2.next = 12;
                break;
              }

              dt = Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Post"])({
                bid: bid,
                userid: userid,
                comment: comment
              }, '/board/repwrite').then(function (r) {
                return r;
              });
              _context2.next = 6;
              return dt;

            case 6:
              _context2.t0 = _context2.sent.cnt;

              if (!(_context2.t0 > 0)) {
                _context2.next = 9;
                break;
              }

              dts();

            case 9:
              setReply('');
              _context2.next = 13;
              break;

            case 12:
              alert('아무것도 입력하지 않았어요😥');

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _write.apply(this, arguments);
  }

  function dts() {
    return _dts.apply(this, arguments);
  } //리플 삭제하기


  function _dts() {
    _dts = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res;
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Datas"])("/board/boardview", "bid=".concat(bd.bid));

            case 2:
              res = _context3.sent;
              setCmts(res[0].com);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _dts.apply(this, arguments);
  }

  function del(cid) {
    Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Post"])({
      cid: cid
    }, '/board/repwrite');
    dts();
  } //게시글 삭제하기


  if (cnfirm) {
    var delBD = /*#__PURE__*/function () {
      var _ref3 = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dt;
        return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dt = Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Post"])({
                  bid: bd.bid
                }, '/board/delete').then(function (r) {
                  return r;
                });
                _context.next = 3;
                return dt;

              case 3:
                _context.t0 = _context.sent.cnt;

                if (!(_context.t0 > 0)) {
                  _context.next = 6;
                  break;
                }

                location.href = 'http://localhost:3000/board/boardlist';

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function delBD() {
        return _ref3.apply(this, arguments);
      };
    }();

    delBD();
  }

  ;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "brdview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "bg-secondary pt-5 pb-4 brdview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 21
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "viewnote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, bd.content), __jsx("div", {
    className: "replay p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, cmts.map(function (m, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "txtLft d-flex",
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 34
      }
    }, __jsx("h5", {
      key: m + idx + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, m.name), __jsx("p", {
      className: "ms-5",
      key: m + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, m.comment, " ", __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 81
      }
    }, m.regdate2)), session.name === m.name ? __jsx("p", {
      className: "ms-3 delRep",
      onClick: function onClick() {
        del(m.cid);
      },
      key: m + m + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 65
      }
    }, "X") : '', session.name === 'admin' ? __jsx("p", {
      className: "ms-3 delRep",
      onClick: function onClick() {
        del(m.cid);
      },
      key: m + m + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 66
      }
    }, "X") : ''));
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "reTxt d-flex align-items-end mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    as: "textarea",
    placeholder: "\uB313\uAE00\uC740 \uD55C\uBC88 \uB2EC\uBA74 \uC0AD\uC81C\uAC00 \uBD88\uAC00\uB2A5\uD558\uB2F5\uB2C8\uB2F9 \uD83D\uDC6E\u200D\u2642\uFE0F\uD83D\uDC6E\u200D\u2640\uFE0F ",
    style: {
      height: '80px',
      width: '90%'
    },
    value: reply,
    onChange: function onChange(e) {
      Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["handleInput"])(setReply, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "btn btn-success ms-3",
    type: "submit",
    onClick: function onClick(e) {
      write(e, {
        bid: bd.bid,
        userid: parseInt(session.userid),
        comment: reply
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "\uB313\uAE00 \uB4F1\uB85D")))), __jsx("div", {
    className: "btns mt-4 mb-4 d-flex  justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/board/boardlist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 64
    }
  }, "\uBAA9\uB85D\uC73C\uB85C")), session.name === bd.name ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "success",
    onClick: function onClick() {
      setLgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 47
    }
  }, "\uC218\uC815\uD558\uAE30") : '', session.name === bd.name ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "secondary",
    onClick: function onClick() {
      setMgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 47
    }
  }, "\uC0AD\uC81C\uD558\uAE30") : '', session.name === 'admin' ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "danger",
    onClick: function onClick() {
      setMgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 47
    }
  }, "\uAC15\uC81C\uC0AD\uC81C") : ''), __jsx(_components_mgmodal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    LgShow: mgShow,
    setLgShow: setMgShow,
    setCnfirm: setCnfirm,
    title: "\uAC8C\uC2DC\uAE00 \uC0AD\uC81C",
    msg: "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: boards[0].title,
    note: boards[0].content,
    bid: boards[0].bid,
    setLgShow: setLgShow,
    lgShow: lgShow,
    sename: session.name,
    seid: session.userid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 16
    }
  })));
};

_s(Boardview, "r0d9uxLzChiUGvLfOmC+N4KNMR8=");

_c = Boardview;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_8__["default"])(Boardview, {
  title: title,
  description: contents
});
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmR2aWV3LmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29udGVudHMiLCJCb2FyZHZpZXciLCJib2FyZHMiLCJzZXNzaW9uIiwidXNlU3RhdGUiLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJtZ1Nob3ciLCJzZXRNZ1Nob3ciLCJyZXBseSIsInNldFJlcGx5IiwiY29tIiwiY210cyIsInNldENtdHMiLCJjbmZpcm0iLCJzZXRDbmZpcm0iLCJiZCIsIndyaXRlIiwiZSIsImJpZCIsInVzZXJpZCIsImNvbW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImR0IiwiUG9zdCIsInRoZW4iLCJyIiwiY250IiwiZHRzIiwiYWxlcnQiLCJEYXRhcyIsInJlcyIsImRlbCIsImNpZCIsImRlbEJEIiwibG9jYXRpb24iLCJocmVmIiwiY2F0ZWdvcnkiLCJyZWdkYXRlMiIsInZpZXdzIiwibmFtZSIsImNvbnRlbnQiLCJtYXAiLCJtIiwiaWR4IiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVJbnB1dCIsInBhcnNlSW50IiwiZ2V0TGF5b3V0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLEtBQUssR0FBQyxFQUFWO0FBQ0EsSUFBSUMsUUFBUSxHQUFFLEVBQWQsQyxDQUdBOztBQU1BLElBQU1DLFNBQVMsR0FBQyxTQUFWQSxTQUFVLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUN6QkMsTUFEeUI7QUFBQSxNQUNqQkMsU0FEaUI7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFekJHLE1BRnlC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QUNxQyxJQUF2STtBQUE2SSxRQUFJLEVBQUVyQyxPQUFPLENBQUNpQixNQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENILENBVEosQ0FESjtBQThDSCxDQXZGRDs7R0FBTW5CLFM7O0tBQUFBLFM7QUF5RkZnRCw2RUFBUyxDQUFDaEQsU0FBRCxFQUFXO0FBQUNGLE9BQUssRUFBQ0EsS0FBUDtBQUFhbUQsYUFBVyxFQUFDbEQ7QUFBekIsQ0FBWCxDQUFUOztBQUVXQyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZHZpZXcuZWI0YzNmYzA5YWIzMDZkMTUxNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lcixGb3JtLEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSBcIi4vd3JpdGVfbW9kYWxcIjtcclxuaW1wb3J0IE1nbW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWdtb2RhbFwiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5sZXQgdGl0bGU9Jyc7XHJcbmxldCBjb250ZW50cyA9Jyc7XHJcblxyXG5cclxuLy/rjbDsnbTthLAg64GM6rOg7Jik6riwIVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBsZXQgYm9hcmRzID0gYXdhaXQgRGF0YXMoYC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7Y3R4LnF1ZXJ5LmJpZH1gKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkdmlldz0oe2JvYXJkcyxzZXNzaW9ufSk9PntcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWdTaG93LCBzZXRNZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NtdHMsc2V0Q210c10gPSB1c2VTdGF0ZShib2FyZHNbMF0uY29tKTtcclxuICAgIGNvbnN0IFtjbmZpcm0sIHNldENuZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgYmQgPSBib2FyZHNbMF07XHJcblxyXG4gICAgLy/rjbDsnbTthLAg65Ox66Gd7ZWY6riwXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3cml0ZShlLHtiaWQsdXNlcmlkLGNvbW1lbnR9KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocmVwbHkhPScnKXtcclxuICAgICAgICAgICAgbGV0IGR0ID0gUG9zdCh7YmlkOmJpZCx1c2VyaWQ6dXNlcmlkLGNvbW1lbnQ6Y29tbWVudH0sJy9ib2FyZC9yZXB3cml0ZScpLnRoZW4ocj0+cik7XHJcbiAgICAgICAgICAgIGlmKChhd2FpdCBkdCkuY250ID4gMCkgZHRzKCk7XHJcbiAgICAgICAgICAgIHNldFJlcGx5KCcnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoJ+yVhOustOqyg+uPhCDsnoXroKXtlZjsp4Ag7JWK7JWY7Ja07JqU8J+YpScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/rk7HroZ0g7ZuEIOuBjOqzoOyYpOq4sFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZHRzKCl7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IERhdGFzKGAvYm9hcmQvYm9hcmR2aWV3YCxgYmlkPSR7YmQuYmlkfWApO1xyXG4gICAgICAgIHNldENtdHMgKHJlc1swXS5jb20pOyBcclxuICAgIH1cclxuICAgIC8v66as7ZSMIOyCreygnO2VmOq4sFxyXG4gICAgZnVuY3Rpb24gZGVsKGNpZCl7XHJcbiAgICAgICAgUG9zdCh7Y2lkOmNpZH0sJy9ib2FyZC9yZXB3cml0ZScpO1xyXG4gICAgICAgIGR0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6rKM7Iuc6riAIOyCreygnO2VmOq4sFxyXG4gICAgaWYoY25maXJtKXtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxCRCgpe1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBQb3N0KHtiaWQ6YmQuYmlkfSwnL2JvYXJkL2RlbGV0ZScpLnRoZW4ocj0+cik7XHJcbiAgICAgICAgICAgIGlmKChhd2FpdCBkdCkuY250ID4gMCApe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ib2FyZC9ib2FyZGxpc3QnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbEJEKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmR2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBwdC01IHBiLTQgYnJkdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPXtiZC50aXRsZX0ga2Q9e2JkLmNhdGVnb3J5fSB0aW1lPXtiZC5yZWdkYXRlMn0gdmlldz17YmQudmlld3MrMX0gbmFtZT17YmQubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZXdub3RlXCI+e2JkLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBsYXkgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXRzLm1hcCgobSxpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHRMZnQgZC1mbGV4XCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUga2V5PXttK2lkeCtpZHh9PnttLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXMtNVwiIGtleT17bStpZHh9PnttLmNvbW1lbnR9IDxzbWFsbD57bS5yZWdkYXRlMn08L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhzZXNzaW9uLm5hbWUgPT09IG0ubmFtZSk/IDxwIGNsYXNzTmFtZT1cIm1zLTMgZGVsUmVwXCIgb25DbGljaz17KCk9PntkZWwobS5jaWQpfX0ga2V5PXttK20raWR4fT5YPC9wPjonJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhzZXNzaW9uLm5hbWUgPT09ICdhZG1pbicpPyA8cCBjbGFzc05hbWU9XCJtcy0zIGRlbFJlcFwiIG9uQ2xpY2s9eygpPT57ZGVsKG0uY2lkKX19IGtleT17bSttK2lkeH0+WDwvcD46Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZVR4dCBkLWZsZXggYWxpZ24taXRlbXMtZW5kIG10LTRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwi64yT6riA7J2AIO2VnOuyiCDri6zrqbQg7IKt7KCc6rCAIOu2iOqwgOuKpe2VmOuLteuLiOuLuSDwn5Gu4oCN4pmC77iP8J+RruKAjeKZgO+4jyBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MHB4JyAsd2lkdGg6JzkwJScgfX0gdmFsdWU9e3JlcGx5fSBvbkNoYW5nZT17KGUpPT57aGFuZGxlSW5wdXQoc2V0UmVwbHksZSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtcy0zXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+eyB3cml0ZShlLHtiaWQ6YmQuYmlkLHVzZXJpZDpwYXJzZUludChzZXNzaW9uLnVzZXJpZCksY29tbWVudDpyZXBseX0pfX0+64yT6riAIOuTseuhnTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnMgbXQtNCBtYi00IGQtZmxleCAganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXMtMlwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+PExpbmsgaHJlZj1cIi9ib2FyZC9ib2FyZGxpc3RcIj7rqqnroZ3snLzroZw8L0xpbms+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhzZXNzaW9uLm5hbWU9PT1iZC5uYW1lKT88QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwic3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT57c2V0TGdTaG93KHRydWUpfX0gPuyImOygle2VmOq4sDwvQnV0dG9uPjonJ31cclxuICAgICAgICAgICAgICAgICAgICB7KHNlc3Npb24ubmFtZT09PWJkLm5hbWUpPzxCdXR0b24gY2xhc3NOYW1lPVwibXMtMlwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKT0+e3NldE1nU2hvdyh0cnVlKX19ID7sgq3soJztlZjquLA8L0J1dHRvbj46Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgeyhzZXNzaW9uLm5hbWU9PT0nYWRtaW4nKT88QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fSA+6rCV7KCc7IKt7KCcPC9CdXR0b24+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZ21vZGFsIExnU2hvdz17bWdTaG93fSBzZXRMZ1Nob3c9e3NldE1nU2hvd30gc2V0Q25maXJtPXtzZXRDbmZpcm19IHRpdGxlPVwi6rKM7Iuc6riAIOyCreygnFwiIG1zZz1cIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIvPlxyXG4gICAgICAgICAgICAgICA8V3JpdGVNb2RhbCB0aXRsZT17Ym9hcmRzWzBdLnRpdGxlfSBub3RlPXtib2FyZHNbMF0uY29udGVudH0gYmlkPXtib2FyZHNbMF0uYmlkfSBzZXRMZ1Nob3c9e3NldExnU2hvd30gbGdTaG93PXtsZ1Nob3d9IHNlbmFtZT17c2Vzc2lvbi5uYW1lfSBzZWlkPXtzZXNzaW9uLnVzZXJpZH0vPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuICAgIGdldExheW91dChCb2FyZHZpZXcse3RpdGxlOnRpdGxlLGRlc2NyaXB0aW9uOmNvbnRlbnRzfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZHZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=