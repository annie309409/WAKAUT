webpackHotUpdate_N_E("pages/board/boardlist",{

/***/ "./pages/board/boardlist.js":
/*!**********************************!*\
  !*** ./pages/board/boardlist.js ***!
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
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./components/alert.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search */ "./components/search.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list */ "./components/list.js");
/* harmony import */ var _write_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./write_modal */ "./pages/board/write_modal.js");
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/index.js");



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\board\\boardlist.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








 //처음 데이터 세팅

var BoardList = function BoardList(_ref) {
  _s();

  var boards = _ref.boards,
      session = _ref.session;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(boards.boards),
      dtfn = _useState[0],
      setDtfn = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
      cnt = _useState2[0],
      setCnt = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      lgShow = _useState3[0],
      setLgShow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('All'),
      selVal = _useState4[0],
      setSelval = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      srhVal = _useState5[0],
      setSrhVal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      srch = _useState6[0],
      setSrch = _useState6[1]; //스크롤 페이징 처리


  function handleScroll() {
    return _handleScroll.apply(this, arguments);
  } // 스크롤 페이징 데이터 불러오기


  function _handleScroll() {
    _handleScroll = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var scrollHeight, scrollTop, clientHeight, dt;
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              scrollHeight = document.documentElement.scrollHeight;
              scrollTop = document.documentElement.scrollTop;
              clientHeight = document.documentElement.clientHeight;

              if (!(scrollTop + clientHeight >= scrollHeight)) {
                _context.next = 9;
                break;
              }

              setCnt(cnt + 1);
              _context.next = 7;
              return dts(cnt * 5);

            case 7:
              dt = _context.sent;
              setDtfn(dt);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleScroll.apply(this, arguments);
  }

  function dts(_x) {
    return _dts.apply(this, arguments);
  } //검색 시 액션


  function _dts() {
    _dts = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(i) {
      var res;
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_feutils__WEBPACK_IMPORTED_MODULE_9__["Datas"])('/board/boardlist', "pg=".concat(i, "&cat=").concat(selVal, "&note=").concat(srhVal)).then(function (res) {
                return res;
              });

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.boards;

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _dts.apply(this, arguments);
  }

  function sc() {
    return _sc.apply(this, arguments);
  } //스크롤 이벤트 등록


  function _sc() {
    _sc = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setSrch(true);
              dts(5);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _sc.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll, {
      capture: true
    });
    return function () {
      window.removeEventListener("scroll", handleScroll, {
        capture: true
      });
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "success",
    msg: "\uD574\uB2F9 \uAC8C\uC2DC\uD310\uC740 \uAD00\uB9AC\uC790\uC5D0\uC758\uD574 \uC2E4\uC2DC\uAC04 \uAD00\uB9AC\uB418\uACE0\uC788\uC2B5\uB2C8\uB2E4. \uD5C8\uC704\uC0AC\uC2E4\uC720\uD3EC \uBC0F \uBD80\uC801\uC808\uD55C \uD45C\uD604\uC740 \uCC28\uB2E8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cat: ['commnunity', 'review'],
    title: "All",
    btn: ['검색하기', '새글쓰기'],
    btncol: ['secondary', 'success'],
    click: [sc, function () {
      setLgShow(true);
    }],
    setSelval: setSelval,
    setSrhVal: setSrhVal,
    srhVal: srhVal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "lists",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, dtfn.map(function (m, idx) {
    return __jsx(_components_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: idx,
      title: m.title,
      note: m.content,
      malcnt: m.cmtcnt,
      img: true,
      col: "bg-warning",
      time: m.regdate2,
      kd: m.category,
      view: m.views,
      to: "/board/boardview?bid=".concat(m.bid),
      name: m.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 28
      }
    });
  }), __jsx("div", {
    className: "pg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_10__["BarLoader"], {
    color: "#ccc",
    cssOverride: {
      position: "absolute",
      margin: "auto",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 555
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }))), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    sename: session.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }));
};

_s(BoardList, "X7tzrj1gnUmWRZ40YdoFyG69Mpg=");

_c = BoardList;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_8__["default"])(BoardList, {
  title: '다같이 운동해요! WAKAUT!',
  description: '워크아웃 커뮤니티 게시판입니다.'
});
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (BoardList);

var _c;

$RefreshReg$(_c, "BoardList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmQvYm9hcmRsaXN0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTGlzdCIsImJvYXJkcyIsInNlc3Npb24iLCJ1c2VTdGF0ZSIsImR0Zm4iLCJzZXREdGZuIiwiY250Iiwic2V0Q250IiwibGdTaG93Iiwic2V0TGdTaG93Iiwic2VsVmFsIiwic2V0U2VsdmFsIiwic3JoVmFsIiwic2V0U3JoVmFsIiwic3JjaCIsInNldFNyY2giLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImR0cyIsImR0IiwiaSIsIkRhdGFzIiwidGhlbiIsInJlcyIsInNjIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwibSIsImlkeCIsInRpdGxlIiwiY29udGVudCIsImNtdGNudCIsInJlZ2RhdGUyIiwiY2F0ZWdvcnkiLCJ2aWV3cyIsImJpZCIsIm5hbWUiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsImdldExheW91dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFNQSxJQUFNQSxTQUFTLEdBQUMsU0FBVkEsU0FBVSxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUNGLE1BQU0sQ0FBQ0EsTUFBUixDQURHO0FBQUEsTUFDM0JHLElBRDJCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUFBLG1CQUViRixzREFBUSxD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QjtBQUF3QixlQUFXLEVBQUU7QUFBQ0MsY0FBUSxFQUFFLFVBQVg7QUFBdUJDLFlBQU0sRUFBQyxNQUE5QjtBQUFzQ0MsU0FBRyxFQUFDLENBQTFDO0FBQTRDQyxVQUFJLEVBQUMsQ0FBakQ7QUFBb0RDLFdBQUssRUFBQyxDQUExRDtBQUE2REMsWUFBTSxFQUFDLENBQXBFO0FBQXNFQyxZQUFNLEVBQUM7QUFBN0UsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTkosQ0FIQSxFQWFBLE1BQUMsb0RBQUQ7QUFBWSxVQUFNLEVBQUUzQyxNQUFwQjtBQUE0QixhQUFTLEVBQUVDLFNBQXZDO0FBQWtELFVBQU0sRUFBRVAsT0FBTyxDQUFDMEMsSUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJBLENBREo7QUFpQkgsQ0F4REQ7O0dBQU01QyxTOztLQUFBQSxTO0FBMEROb0QsNkVBQVMsQ0FBQ3BELFNBQUQsRUFBVztBQUFDcUMsT0FBSyxFQUFDLG1CQUFQO0FBQTJCZ0IsYUFBVyxFQUFDO0FBQXZDLENBQVgsQ0FBVDs7QUFDZXJELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkbGlzdC4yYWJjNDQxNzg1YTUxMzg5ZTYwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoJztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBXcml0ZU1vZGFsIGZyb20gJy4vd3JpdGVfbW9kYWwnO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzfSBmcm9tICcuLi9mZXV0aWxzJztcclxuaW1wb3J0IHsgQmFyTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCJcclxuXHJcblxyXG4vL+yymOydjCDrjbDsnbTthLAg7IS47YyFXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcclxuICAgIGxldCBib2FyZHMgPSBhd2FpdCBEYXRhcygnL2JvYXJkL2JvYXJkbGlzdCcsJ3BnPTUnKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07ICAgXHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkTGlzdD0oe2JvYXJkcyxzZXNzaW9ufSk9PntcclxuICAgIGxldCBbZHRmbixzZXREdGZuXSA9IHVzZVN0YXRlKGJvYXJkcy5ib2FyZHMpO1xyXG4gICAgbGV0IFtjbnQsc2V0Q250XSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgW2xnU2hvdywgc2V0TGdTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxWYWwsIHNldFNlbHZhbF0gPSB1c2VTdGF0ZSgnQWxsJyk7XHJcbiAgICBjb25zdCBbc3JoVmFsLCBzZXRTcmhWYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NyY2gsc2V0U3JjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy/siqTtgazroaQg7Y6Y7J207KeVIOyymOumrFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCl7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2V0Q250KGNudCsxKTtcclxuICAgICAgICAgICAgbGV0IGR0ID0gYXdhaXQgZHRzKGNudCo1KTtcclxuICAgICAgICAgICAgc2V0RHRmbihkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOyKpO2BrOuhpCDtjpjsnbTsp5Ug642w7J207YSwIOu2iOufrOyYpOq4sFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZHRzKGkpe1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBEYXRhcygnL2JvYXJkL2JvYXJkbGlzdCcsYHBnPSR7aX0mY2F0PSR7c2VsVmFsfSZub3RlPSR7c3JoVmFsfWApLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXMuYm9hcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6rKA7IOJIOyLnCDslaHshZhcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNjKCl7XHJcbiAgICAgICAgc2V0U3JjaCh0cnVlKTtcclxuICAgICAgICBkdHMoNSk7XHJcbiAgICB9XHJcbiAgICAvL+yKpO2BrOuhpCDsnbTrsqTtirgg65Ox66GdXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsaGFuZGxlU2Nyb2xsLHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxBbGVydHMgY29sb3I9J3N1Y2Nlc3MnIG1zZz0n7ZW064u5IOqyjOyLnO2MkOydgCDqtIDrpqzsnpDsl5DsnZjtlbQg7Iuk7Iuc6rCEIOq0gOumrOuQmOqzoOyeiOyKteuLiOuLpC4g7ZeI7JyE7IKs7Iuk7Jyg7Y+sIOuwjyDrtoDsoIHsoIjtlZwg7ZGc7ZiE7J2AIOywqOuLqOuQoCDsiJgg7J6I7Iq164uI64ukLicvPlxyXG4gICAgICAgIDxTZWFyY2ggY2F0PXtbJ2NvbW1udW5pdHknLCdyZXZpZXcnXX0gdGl0bGU9J0FsbCcgYnRuPXtbJ+qygOyDie2VmOq4sCcsJ+yDiOq4gOyTsOq4sCddfSBidG5jb2w9e1snc2Vjb25kYXJ5Jywnc3VjY2VzcyddfSBjbGljaz17W3NjLCgpPT57c2V0TGdTaG93KHRydWUpfV19IHNldFNlbHZhbD17c2V0U2VsdmFsfSBzZXRTcmhWYWw9e3NldFNyaFZhbH0gc3JoVmFsPXtzcmhWYWx9Lz5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImxpc3RzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR0Zm4ubWFwKChtLGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpc3Qga2V5PXtpZHh9IHRpdGxlPXttLnRpdGxlfSBub3RlPXttLmNvbnRlbnR9IG1hbGNudD17bS5jbXRjbnR9IGltZz17dHJ1ZX0gY29sPSdiZy13YXJuaW5nJyB0aW1lPXttLnJlZ2RhdGUyfSBrZD17bS5jYXRlZ29yeX0gdmlldz17bS52aWV3c30gdG89e2AvYm9hcmQvYm9hcmR2aWV3P2JpZD0ke20uYmlkfWB9IG5hbWU9e20ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEJhckxvYWRlciBjb2xvcj1cIiNjY2NcIiBjc3NPdmVycmlkZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIG1hcmdpbjpcImF1dG9cIiwgdG9wOjAsbGVmdDowLCByaWdodDowLCBib3R0b206MCx6SW5kZXg6NTU1fX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPFdyaXRlTW9kYWwgbGdTaG93PXtsZ1Nob3d9IHNldExnU2hvdz17c2V0TGdTaG93fSBzZW5hbWU9e3Nlc3Npb24ubmFtZX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5nZXRMYXlvdXQoQm9hcmRMaXN0LHt0aXRsZTon64uk6rCZ7J20IOyatOuPme2VtOyalCEgV0FLQVVUIScsZGVzY3JpcHRpb246J+ybjO2BrOyVhOybgyDsu6TrrqTri4jti7Ag6rKM7Iuc7YyQ7J6F64uI64ukLid9KVxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=