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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmR2aWV3LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ib2FyZC93cml0ZV9tb2RhbC5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbnRlbnRzIiwiQm9hcmR2aWV3IiwiYm9hcmRzIiwic2Vzc2lvbiIsInVzZVN0YXRlIiwibGdTaG93Iiwic2V0TGdTaG93IiwibWdTaG93Iiwic2V0TWdTaG93IiwicmVwbHkiLCJzZXRSZXBseSIsImNvbSIsImNtdHMiLCJzZXRDbXRzIiwiY25maXJtIiwic2V0Q25maXJtIiwiYmQiLCJ3cml0ZSIsImUiLCJiaWQiLCJ1c2VyaWQiLCJjb21tZW50IiwicHJldmVudERlZmF1bHQiLCJkdCIsIlBvc3QiLCJ0aGVuIiwiciIsImNudCIsImR0cyIsImFsZXJ0IiwiRGF0YXMiLCJyZXMiLCJkZWwiLCJjaWQiLCJkZWxCRCIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGVnb3J5IiwicmVnZGF0ZTIiLCJ2aWV3cyIsIm5hbWUiLCJjb250ZW50IiwibWFwIiwibSIsImlkeCIsImhlaWdodCIsIndpZHRoIiwiaGFuZGxlSW5wdXQiLCJwYXJzZUludCIsImdldExheW91dCIsImRlc2NyaXB0aW9uIiwiV3JpdGVNb2RhbCIsInByb3BzIiwic2V0VGl0bGUiLCJub3RlIiwic2V0Tm90ZSIsInNldENhdGVnb3J5IiwiZmFjaWxpdHkiLCJzZXRGYWNpbGl0eSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsS0FBSyxHQUFDLEVBQVY7QUFDQSxJQUFJQyxRQUFRLEdBQUUsRUFBZCxDLENBR0E7O0FBTUEsSUFBTUMsU0FBUyxHQUFDLFNBQVZBLFNBQVUsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FB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QjtBQUFtQ2pCLGdCQUFRLEVBQUNBLFFBQTVDO0FBQXFEb0IsZ0JBQVEsRUFBQ0EsUUFBOUQ7QUFBdUV0QyxXQUFHLEVBQUNpQyxLQUFLLENBQUNqQztBQUFqRixPQUFILENBQVY7QUFBQSxLQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlLaUMsS0FBSyxDQUFDckQsS0FBUCxHQUFjLE1BQWQsR0FBcUIsT0FBN0wsQ0FGSixDQXJCSCxDQURMLENBREo7QUE4QkgsQ0F0REQ7O0dBQU1vRCxVOztLQUFBQSxVO0FBd0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ib2FyZC9ib2FyZHZpZXcuOTBmYWQ5ZTkyMGE0NThiNzFhYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lcixGb3JtLEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSBcIi4vd3JpdGVfbW9kYWxcIjtcclxuaW1wb3J0IE1nbW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWdtb2RhbFwiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5sZXQgdGl0bGU9Jyc7XHJcbmxldCBjb250ZW50cyA9Jyc7XHJcblxyXG5cclxuLy/rjbDsnbTthLAg64GM6rOg7Jik6riwIVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBsZXQgYm9hcmRzID0gYXdhaXQgRGF0YXMoYC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7Y3R4LnF1ZXJ5LmJpZH1gKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkdmlldz0oe2JvYXJkcyxzZXNzaW9ufSk9PntcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWdTaG93LCBzZXRNZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NtdHMsc2V0Q210c10gPSB1c2VTdGF0ZShib2FyZHNbMF0uY29tKTtcclxuICAgIGNvbnN0IFtjbmZpcm0sIHNldENuZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgYmQgPSBib2FyZHNbMF07XHJcblxyXG4gICAgLy/rjbDsnbTthLAg65Ox66Gd7ZWY6riwXHJcbiAgICBhc3luYyBmdW5jdGlvbiB3cml0ZShlLHtiaWQsdXNlcmlkLGNvbW1lbnR9KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKHJlcGx5IT0nJyl7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IFBvc3Qoe2JpZDpiaWQsdXNlcmlkOnVzZXJpZCxjb21tZW50OmNvbW1lbnR9LCcvYm9hcmQvcmVwd3JpdGUnKS50aGVuKHI9PnIpO1xyXG4gICAgICAgICAgICBpZigoYXdhaXQgZHQpLmNudCA+IDApIGR0cygpO1xyXG4gICAgICAgICAgICBzZXRSZXBseSgnJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfslYTrrLTqsoPrj4Qg7J6F66Cl7ZWY7KeAIOyViuyVmOyWtOyalPCfmKUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v65Ox66GdIO2bhCDrgYzqs6DsmKTquLBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGR0cygpe1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBEYXRhcyhgL2JvYXJkL2JvYXJkdmlld2AsYGJpZD0ke2JkLmJpZH1gKTtcclxuICAgICAgICBzZXRDbXRzIChyZXNbMF0uY29tKTsgXHJcbiAgICB9XHJcbiAgICAvL+umrO2UjCDsgq3soJztlZjquLBcclxuICAgIGZ1bmN0aW9uIGRlbChjaWQpe1xyXG4gICAgICAgIFBvc3Qoe2NpZDpjaWR9LCcvYm9hcmQvcmVwd3JpdGUnKTtcclxuICAgICAgICBkdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsgq3soJztlZjquLBcclxuICAgIGlmKGNuZmlybSl7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsQkQoKXtcclxuICAgICAgICAgICAgbGV0IGR0ID0gUG9zdCh7YmlkOmJkLmJpZH0sJy9ib2FyZC9kZWxldGUnKS50aGVuKHI9PnIpO1xyXG4gICAgICAgICAgICBpZigoYXdhaXQgZHQpLmNudCA+IDAgKXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmRsaXN0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxCRCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJkdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgcHQtNSBwYi00IGJyZHZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YmQudGl0bGV9IGtkPXtiZC5jYXRlZ29yeX0gdGltZT17YmQucmVnZGF0ZTJ9IHZpZXc9e2JkLnZpZXdzKzF9IG5hbWU9e2JkLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aWV3bm90ZVwiPntiZC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbGF5IHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY210cy5tYXAoKG0saWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0TGZ0IGQtZmxleFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGtleT17bStpZHgraWR4fT57bS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1zLTVcIiBrZXk9e20raWR4fT57bS5jb21tZW50fSA8c21hbGw+e20ucmVnZGF0ZTJ9PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1zLTMgZGVsUmVwXCIgb25DbGljaz17KCk9PntkZWwobS5jaWQpfX0ga2V5PXttK20raWR4fT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVUeHQgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZCBtdC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIuuMk+q4gOydgCDtlZzrsogg64us66m0IOyCreygnOqwgCDrtojqsIDriqXtlZjri7Xri4jri7kg8J+RruKAjeKZgu+4j/Cfka7igI3imYDvuI8gXCIgc3R5bGU9e3sgaGVpZ2h0OiAnODBweCcgLHdpZHRoOic5MCUnIH19IHZhbHVlPXtyZXBseX0gb25DaGFuZ2U9eyhlKT0+e2hhbmRsZUlucHV0KHNldFJlcGx5LGUpfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXMtM1wiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSk9Pnsgd3JpdGUoZSx7YmlkOmJkLmJpZCx1c2VyaWQ6cGFyc2VJbnQoc2Vzc2lvbi51c2VyaWQpLGNvbW1lbnQ6cmVwbHl9KX19PuuMk+q4gCDrk7HroZ08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zIG10LTQgbWItNCBkLWZsZXggIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwicHJpbWFyeVwiPjxMaW5rIGhyZWY9XCIvYm9hcmQvYm9hcmRsaXN0XCI+66qp66Gd7Jy866GcPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXMtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17KCk9PntzZXRMZ1Nob3codHJ1ZSl9fT7siJjsoJXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7sgq3soJztlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCk9PntzZXRNZ1Nob3codHJ1ZSl9fT7qsJXsoJzsgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1nbW9kYWwgTGdTaG93PXttZ1Nob3d9IHNldExnU2hvdz17c2V0TWdTaG93fSBzZXRDbmZpcm09e3NldENuZmlybX0gdGl0bGU9XCLqsozsi5zquIAg7IKt7KCcXCIgbXNnPVwi7KCV66eQIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIi8+XHJcbiAgICAgICAgICAgICAgIDxXcml0ZU1vZGFsIHRpdGxlPXtib2FyZHNbMF0udGl0bGV9IG5vdGU9e2JvYXJkc1swXS5jb250ZW50fSBiaWQ9e2JvYXJkc1swXS5iaWR9IHNldExnU2hvdz17c2V0TGdTaG93fSBsZ1Nob3c9e2xnU2hvd30vPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuICAgIGdldExheW91dChCb2FyZHZpZXcse3RpdGxlOnRpdGxlLGRlc2NyaXB0aW9uOmNvbnRlbnRzfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZHZpZXc7XHJcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsJztcclxuaW1wb3J0IHtGb3JtLEZsb2F0aW5nTGFiZWwsQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnOyBcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlbGVjdGlvbic7XHJcbmltcG9ydCB7UG9zdCxoYW5kbGVJbnB1dH0gZnJvbSAnLi4vZmV1dGlscyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFdyaXRlTW9kYWw9KHByb3BzLHNlc3Npb24pPT57XHJcbiAgICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdID0gdXNlU3RhdGUocHJvcHMudGl0bGUpO1xyXG4gICAgY29uc3QgW25vdGUsc2V0Tm90ZV0gPSB1c2VTdGF0ZShwcm9wcy5ub3RlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeSxzZXRDYXRlZ29yeV0gPSAgdXNlU3RhdGUocHJvcHMuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgW2ZhY2lsaXR5LHNldEZhY2lsaXR5XSA9ICB1c2VTdGF0ZShwcm9wcy5mYWNpbGl0eSk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHdyaXRlKGUse2JpZCx0aXRsZSx1c2VyaWQsY29udGVudCxjYXRlZ29yeSxmYWNpbGl0eX0pe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihjYXRlZ29yeT09IHVuZGVmaW5lZCB8fCBmYWNpbGl0eSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgn7Lm07YWM6rOg66asIOuwjyDsmrTrj5nsnqXshozrpbwg7ISg7YOd7ZW07KO87IS47JqUIScpO1xyXG4gICAgICAgIH1lbHNlIGlmKCB0aXRsZSA9PSB1bmRlZmluZWQgfHwgY29udGVudCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgn7KCc66qpIOuwjyDsu6jthZDsuKDrpbwg7J6F66Cl7ZW07KO87IS47JqUIScpO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGR0ID0gUG9zdCh7YmlkLHRpdGxlLHVzZXJpZCxjb250ZW50LGNhdGVnb3J5LGZhY2lsaXR5fSwnL2JvYXJkL3dyaXRlJykudGhlbihyZXM9PnJlcyk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldExnU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChiaWQgIT09IHVuZGVmaW5lZCAmJiAoYXdhaXQgZHQpLmNudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHtiaWR9YDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmPWBodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9hcmQvYm9hcmRsaXN0YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgbGdTaG93PXtwcm9wcy5sZ1Nob3d9IHNldExnU2hvdz17cHJvcHMuc2V0TGdTaG93fSBzaXplPSdsZyc+XHJcbiAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRpdGxlXCIgbGFiZWw9XCLsoJzrqqlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUlucHV0KHNldFRpdGxlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbCBjb250cm9sSWQ9XCJ3cml0ZXJcIiBsYWJlbD1cIuyekeyEseyekFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMiBtYi0yJyB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZXNzaW9uLm5hbWV9IHJlYWRPbmx5Lz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb24gdGl0bGU9XCLrp5DrqLjrpqzrpbwg7ISg7YOd7ZWY7IS47JqUXCIgY2F0PXtbJ2NvbW11bml0eScsJ3JldmlldyddfSBjaGFuZ2U9e3NldENhdGVnb3J5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbiB0aXRsZT1cIuychOy5mOulvCDshKDtg53tlZjshLjsmpRcIiBjYXQ9e1sn67aA7LKc7KKF7ZWp7Jq064+Z7J6lJywn6rK96riw7IOd7Zmc7LK07Jyh7Iuc7ISkJ119IGNoYW5nZT17c2V0RmFjaWxpdHl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nTGFiZWwgY29udHJvbElkPVwidGV4dGFyZWFcIiBsYWJlbD1cIuyDgeuMgOulvCDrsLDroKTtlbTso7zshLjsmpQhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9J210LTInXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIGNvbW1lbnQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9ICBvbkNoYW5nZT17KGUpPT5oYW5kbGVJbnB1dChzZXROb3RlLGUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtRmlsZU11bHRpcGxlXCIgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuZ2lmLCAuanBnLCAucG5nXCIgbXVsdGlwbGUgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj7ri6Tsi5zsk7DquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzTmFtZT0nbXMtMicgb25DbGljaz17KGUpPT53cml0ZShlLHt0aXRsZTp0aXRsZSx1c2VyaWQ6Mixjb250ZW50Om5vdGUsY2F0ZWdvcnk6Y2F0ZWdvcnksZmFjaWxpdHk6ZmFjaWxpdHksYmlkOnByb3BzLmJpZH0pfT57KHByb3BzLnRpdGxlKT8n7IiY7KCV7ZWY6riwJzon6riAIOyYrOumrOq4sCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlTW9kYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=