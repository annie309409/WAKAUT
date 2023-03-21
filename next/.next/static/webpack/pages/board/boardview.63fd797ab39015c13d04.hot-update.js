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
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "bg-secondary pt-5 pb-4 brdview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 21
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "viewnote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, bd.content), __jsx("div", {
    className: "replay p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, cmts.map(function (m, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "txtLft d-flex",
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 34
      }
    }, __jsx("h5", {
      key: m + idx + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, m.name), __jsx("p", {
      className: "ms-5",
      key: m + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    }, m.comment, " ", __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 81
      }
    }, m.regdate2)), __jsx("p", {
      className: "ms-3 delRep",
      onClick: function onClick() {
        del(m.cid);
      },
      key: m + m + idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    }, "X")));
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
  }, "\uBAA9\uB85D\uC73C\uB85C")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ms-2",
    variant: "success",
    onClick: function onClick() {
      setLgShow(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
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
      lineNumber: 99,
      columnNumber: 21
    }
  }, "\uAC15\uC81C\uC0AD\uC81C")), __jsx(_components_mgmodal__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmR2aWV3LmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29udGVudHMiLCJCb2FyZHZpZXciLCJib2FyZHMiLCJzZXNzaW9uIiwidXNlU3RhdGUiLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJtZ1Nob3ciLCJzZXRNZ1Nob3ciLCJyZXBseSIsInNldFJlcGx5IiwiY29tIiwiY210cyIsInNldENtdHMiLCJjbmZpcm0iLCJzZXRDbmZpcm0iLCJiZCIsIndyaXRlIiwiZSIsImJpZCIsInVzZXJpZCIsImNvbW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImR0IiwiUG9zdCIsInRoZW4iLCJyIiwiY250IiwiZHRzIiwiYWxlcnQiLCJEYXRhcyIsInJlcyIsImRlbCIsImNpZCIsImRlbEJEIiwibG9jYXRpb24iLCJocmVmIiwiY2F0ZWdvcnkiLCJyZWdkYXRlMiIsInZpZXdzIiwibmFtZSIsImNvbnRlbnQiLCJtYXAiLCJtIiwiaWR4IiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVJbnB1dCIsInBhcnNlSW50IiwiZ2V0TGF5b3V0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLEtBQUssR0FBQyxFQUFWO0FBQ0EsSUFBSUMsUUFBUSxHQUFFLEVBQWQsQyxDQUdBOztBQU1BLElBQU1DLFNBQVMsR0FBQyxTQUFWQSxTQUFVLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUN6QkMsTUFEeUI7QUFBQSxNQUNqQkMsU0FEaUI7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFekJHLE1BRnlC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QTtBQUFBO0FBQUEsZ0NBTEosQ0F2QkosRUE4QkksTUFBQywyREFBRDtBQUFTLFVBQU0sRUFBRUQsTUFBakI7QUFBeUIsYUFBUyxFQUFFQyxTQUFwQztBQUErQyxhQUFTLEVBQUVPLFNBQTFEO0FBQXFFLFNBQUssRUFBQyxpQ0FBM0U7QUFBb0YsT0FBRyxFQUFDLGdFQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJKLEVBK0JHLE1BQUMsb0RBQUQ7QUFBWSxTQUFLLEVBQUViLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUgsS0FBN0I7QUFBb0MsUUFBSSxFQUFFRyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVV1QyxPQUFwRDtBQUE2RCxPQUFHLEVBQUV2QyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVpQixHQUE1RTtBQUFpRixhQUFTLEVBQUViLFNBQTVGO0FBQXVHLFVBQU0sRUFBRUQsTUFBL0c7QUFBdUgsVUFBTSxFQUFFRixPQUFPLENBQUNxQyxJQUF2STtBQUE2SSxRQUFJLEVBQUVyQyxPQUFPLENBQUNpQixNQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JILENBVEosQ0FESjtBQTZDSCxDQXZGRDs7R0FBTW5CLFM7O0tBQUFBLFM7QUF5RkZnRCw2RUFBUyxDQUFDaEQsU0FBRCxFQUFXO0FBQUNGLE9BQUssRUFBQ0EsS0FBUDtBQUFhbUQsYUFBVyxFQUFDbEQ7QUFBekIsQ0FBWCxDQUFUOztBQUVXQyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZHZpZXcuNjNmZDc5N2FiMzkwMTVjMTNkMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lcixGb3JtLEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSBcIi4vd3JpdGVfbW9kYWxcIjtcclxuaW1wb3J0IE1nbW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWdtb2RhbFwiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5sZXQgdGl0bGU9Jyc7XHJcbmxldCBjb250ZW50cyA9Jyc7XHJcblxyXG5cclxuLy/rjbDsnbTthLAg64GM6rOg7Jik6riwIVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBsZXQgYm9hcmRzID0gYXdhaXQgRGF0YXMoYC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7Y3R4LnF1ZXJ5LmJpZH1gKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkdmlldz0oe2JvYXJkcyxzZXNzaW9ufSk9PntcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWdTaG93LCBzZXRNZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NtdHMsc2V0Q210c10gPSB1c2VTdGF0ZShib2FyZHNbMF0uY29tKTtcclxuICAgIGNvbnN0IFtjbmZpcm0sIHNldENuZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgYmQgPSBib2FyZHNbMF07XHJcblxyXG4gICAgLy/rjbDsnbTthLAg65Ox66Gd7ZWY6riwXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3cml0ZShlLHtiaWQsdXNlcmlkLGNvbW1lbnR9KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5IT0nJyl7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IFBvc3Qoe2JpZDpiaWQsdXNlcmlkOnVzZXJpZCxjb21tZW50OmNvbW1lbnR9LCcvYm9hcmQvcmVwd3JpdGUnKS50aGVuKHI9PnIpO1xyXG4gICAgICAgICAgICBpZigoYXdhaXQgZHQpLmNudCA+IDApIGR0cygpO1xyXG4gICAgICAgICAgICBzZXRSZXBseSgnJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfslYTrrLTqsoPrj4Qg7J6F66Cl7ZWY7KeAIOyViuyVmOyWtOyalPCfmKUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v65Ox66GdIO2bhCDrgYzqs6DsmKTquLBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGR0cygpe1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBEYXRhcyhgL2JvYXJkL2JvYXJkdmlld2AsYGJpZD0ke2JkLmJpZH1gKTtcclxuICAgICAgICBzZXRDbXRzIChyZXNbMF0uY29tKTsgXHJcbiAgICB9XHJcbiAgICAvL+umrO2UjCDsgq3soJztlZjquLBcclxuICAgIGZ1bmN0aW9uIGRlbChjaWQpe1xyXG4gICAgICAgIFBvc3Qoe2NpZDpjaWR9LCcvYm9hcmQvcmVwd3JpdGUnKTtcclxuICAgICAgICBkdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsgq3soJztlZjquLBcclxuICAgIGlmKGNuZmlybSl7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsQkQoKXtcclxuICAgICAgICAgICAgbGV0IGR0ID0gUG9zdCh7YmlkOmJkLmJpZH0sJy9ib2FyZC9kZWxldGUnKS50aGVuKHI9PnIpO1xyXG4gICAgICAgICAgICBpZigoYXdhaXQgZHQpLmNudCA+IDAgKXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmRsaXN0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxCRCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJkdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgcHQtNSBwYi00IGJyZHZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YmQudGl0bGV9IGtkPXtiZC5jYXRlZ29yeX0gdGltZT17YmQucmVnZGF0ZTJ9IHZpZXc9e2JkLnZpZXdzKzF9IG5hbWU9e2JkLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aWV3bm90ZVwiPntiZC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbGF5IHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY210cy5tYXAoKG0saWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0TGZ0IGQtZmxleFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGtleT17bStpZHgraWR4fT57bS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1zLTVcIiBrZXk9e20raWR4fT57bS5jb21tZW50fSA8c21hbGw+e20ucmVnZGF0ZTJ9PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1zLTMgZGVsUmVwXCIgb25DbGljaz17KCk9PntkZWwobS5jaWQpfX0ga2V5PXttK20raWR4fT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVUeHQgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZCBtdC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIuuMk+q4gOydgCDtlZzrsogg64us66m0IOyCreygnOqwgCDrtojqsIDriqXtlZjri7Xri4jri7kg8J+RruKAjeKZgu+4j/Cfka7igI3imYDvuI8gXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODBweCcgLHdpZHRoOic5MCUnIH19IHZhbHVlPXtyZXBseX0gb25DaGFuZ2U9eyhlKT0+e2hhbmRsZUlucHV0KHNldFJlcGx5LGUpfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXMtM1wiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSk9Pnsgd3JpdGUoZSx7YmlkOmJkLmJpZCx1c2VyaWQ6cGFyc2VJbnQoc2Vzc2lvbi51c2VyaWQpLGNvbW1lbnQ6cmVwbHl9KX19PuuMk+q4gCDrk7HroZ08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zIG10LTQgbWItNCBkLWZsZXggIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwicHJpbWFyeVwiPjxMaW5rIGhyZWY9XCIvYm9hcmQvYm9hcmRsaXN0XCI+66qp66Gd7Jy866GcPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXMtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17KCk9PntzZXRMZ1Nob3codHJ1ZSl9fT7siJjsoJXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7sgq3soJztlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7qsJXsoJzsgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1nbW9kYWwgTGdTaG93PXttZ1Nob3d9IHNldExnU2hvdz17c2V0TWdTaG93fSBzZXRDbmZpcm09e3NldENuZmlybX0gdGl0bGU9XCLqsozsi5zquIAg7IKt7KCcXCIgbXNnPVwi7KCV66eQIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIi8+XHJcbiAgICAgICAgICAgICAgIDxXcml0ZU1vZGFsIHRpdGxlPXtib2FyZHNbMF0udGl0bGV9IG5vdGU9e2JvYXJkc1swXS5jb250ZW50fSBiaWQ9e2JvYXJkc1swXS5iaWR9IHNldExnU2hvdz17c2V0TGdTaG93fSBsZ1Nob3c9e2xnU2hvd30gc2VuYW1lPXtzZXNzaW9uLm5hbWV9IHNlaWQ9e3Nlc3Npb24udXNlcmlkfS8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4gICAgZ2V0TGF5b3V0KEJvYXJkdmlldyx7dGl0bGU6dGl0bGUsZGVzY3JpcHRpb246Y29udGVudHN9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkdmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==