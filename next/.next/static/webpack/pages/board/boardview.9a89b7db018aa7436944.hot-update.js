webpackHotUpdate_N_E("pages/board/boardview",{

/***/ "./pages/feutils.js":
/*!**************************!*\
  !*** ./pages/feutils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var fixedUrl = 'http://localhost:3000/api';

function Datas(_x, _x2) {
  return _Datas.apply(this, arguments);
}

_c2 = Datas;

function _Datas() {
  _Datas = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(loc, param) {
    var url, res, datas;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(fixedUrl).concat(loc);
            if (param) url = "".concat(fixedUrl).concat(loc, "?").concat(param);
            _context2.next = 4;
            return _axios["default"].get(url);

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return res.data;

          case 7:
            datas = _context2.sent;
            return _context2.abrupt("return", datas);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _Datas.apply(this, arguments);
}

_c = Datas;

var Post = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, url) {
    var cnt;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cnt = fetch("".concat(fixedUrl).concat(url), {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (res) {
              return res.json();
            });
            _context.next = 3;
            return cnt;

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Post(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

_c3 = Post;

var handleInput = function handleInput(setInput, e) {
  setInput(e.target.value);
};

var kakaoInit = function kakaoInit() {
  var kakao = window.Kakao;

  if (!kakao.isInitialized()) {
    kakao.init('69823228c875a5a95558c4f4b78b0ae9');
  }

  console.log('카카오 이니셜 실행완료!');
  return kakao;
};

module.exports = {
  Datas: Datas,
  Post: Post,
  handleInput: handleInput,
  kakaoInit: kakaoInit
};

var _c, _c2, _c3;

$RefreshReg$(_c, "Datas");
$RefreshReg$(_c2, "Datas");
$RefreshReg$(_c3, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmV1dGlscy5qcyJdLCJuYW1lcyI6WyJmaXhlZFVybCIsIkRhdGFzIiwibG9jIiwicGFyYW0iLCJ1cmwiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJkYXRhcyIsIlBvc3QiLCJjbnQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImhhbmRsZUlucHV0Iiwic2V0SW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrYWthb0luaXQiLCJrYWthbyIsIndpbmRvdyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLDJCQUFqQjs7U0FFZUMsSzs7OztNQUFBQSxLOzs7eUZBQWYsa0JBQXFCQyxHQUFyQixFQUF5QkMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGVBRFIsYUFDaUJKLFFBRGpCLFNBQzRCRSxHQUQ1QjtBQUVJLGdCQUFHQyxLQUFILEVBQVVDLEdBQUcsYUFBTUosUUFBTixTQUFpQkUsR0FBakIsY0FBd0JDLEtBQXhCLENBQUg7QUFGZDtBQUFBLG1CQUdzQkUsa0JBQU1DLEdBQU4sQ0FBVUYsR0FBVixDQUh0Qjs7QUFBQTtBQUdVRyxlQUhWO0FBQUE7QUFBQSxtQkFJd0JBLEdBQUcsQ0FBQ0MsSUFKNUI7O0FBQUE7QUFJVUMsaUJBSlY7QUFBQSw4Q0FLV0EsS0FMWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0tBQWVSLEs7O0FBUWYsSUFBTVMsSUFBSTtBQUFBLDJGQUFHLGlCQUFPRixJQUFQLEVBQVlKLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hPLGVBREcsR0FDR0MsS0FBSyxXQUFJWixRQUFKLFNBQWVJLEdBQWYsR0FBcUI7QUFBRVMsb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxrQkFBSSxFQUFFLE1BQXhCO0FBQWdDQyxrQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsSUFBZixDQUFyQztBQUEyRFUscUJBQU8sRUFBQztBQUFDLGdDQUFnQjtBQUFqQjtBQUFuRSxhQUFyQixDQUFMLENBQ1RDLElBRFMsQ0FDSixVQUFBWixHQUFHO0FBQUEscUJBQUVBLEdBQUcsQ0FBQ2EsSUFBSixFQUFGO0FBQUEsYUFEQyxDQURIO0FBQUE7QUFBQSxtQkFHSVQsR0FISjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpELElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7TUFBTUEsSTs7QUFNTixJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQVdDLENBQVgsRUFBaUI7QUFDakNELFVBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNILENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBckI7O0FBQ0EsTUFBRyxDQUFDRixLQUFLLENBQUNHLGFBQU4sRUFBSixFQUEyQjtBQUN2QkgsU0FBSyxDQUFDSSxJQUFOLENBQVcsa0NBQVg7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFNBQU9OLEtBQVA7QUFDSCxDQVBEOztBQVNBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBQ2xDLE9BQUssRUFBTEEsS0FBRDtBQUFPUyxNQUFJLEVBQUpBLElBQVA7QUFBWVcsYUFBVyxFQUFYQSxXQUFaO0FBQXdCSyxXQUFTLEVBQVRBO0FBQXhCLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JvYXJkL2JvYXJkdmlldy45YTg5YjdkYjAxOGFhNzQzNjk0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgZml4ZWRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSc7IFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGF0YXMobG9jLHBhcmFtKXtcclxuICAgIGxldCB1cmwgPSBgJHtmaXhlZFVybH0ke2xvY31gO1xyXG4gICAgaWYocGFyYW0pIHVybCA9IGAke2ZpeGVkVXJsfSR7bG9jfT8ke3BhcmFtfWA7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgIGNvbnN0IGRhdGFzID0gYXdhaXQgcmVzLmRhdGE7XHJcbiAgICByZXR1cm4gZGF0YXM7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSBhc3luYyAoZGF0YSx1cmwpID0+IHtcclxuICAgIGNvbnN0IGNudCA9IGZldGNoKGAke2ZpeGVkVXJsfSR7dXJsfWAseyBtZXRob2Q6ICdQT1NUJywgbW9kZTogJ2NvcnMnLCBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGNudDtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUlucHV0ID0gKHNldElucHV0LCBlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBrYWthb0luaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBrYWthbyA9IHdpbmRvdy5LYWthbztcclxuICAgIGlmKCFrYWthby5pc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgICBrYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ+y5tOy5tOyYpCDsnbTri4jshZwg7Iuk7ZaJ7JmE66OMIScpO1xyXG4gICAgcmV0dXJuIGtha2FvO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtEYXRhcyxQb3N0LGhhbmRsZUlucHV0LGtha2FvSW5pdH0iXSwic291cmNlUm9vdCI6IiJ9