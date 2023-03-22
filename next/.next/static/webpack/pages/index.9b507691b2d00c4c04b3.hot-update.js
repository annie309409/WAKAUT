webpackHotUpdate_N_E("pages/index",{

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

var kakaoInit = function kakaoInit(window) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmV1dGlscy5qcyJdLCJuYW1lcyI6WyJmaXhlZFVybCIsIkRhdGFzIiwibG9jIiwicGFyYW0iLCJ1cmwiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJkYXRhcyIsIlBvc3QiLCJjbnQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImhhbmRsZUlucHV0Iiwic2V0SW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrYWthb0luaXQiLCJ3aW5kb3ciLCJrYWthbyIsIktha2FvIiwiaXNJbml0aWFsaXplZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLDJCQUFqQjs7U0FFZUMsSzs7OztNQUFBQSxLOzs7eUZBQWYsa0JBQXFCQyxHQUFyQixFQUF5QkMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGVBRFIsYUFDaUJKLFFBRGpCLFNBQzRCRSxHQUQ1QjtBQUVJLGdCQUFHQyxLQUFILEVBQVVDLEdBQUcsYUFBTUosUUFBTixTQUFpQkUsR0FBakIsY0FBd0JDLEtBQXhCLENBQUg7QUFGZDtBQUFBLG1CQUdzQkUsa0JBQU1DLEdBQU4sQ0FBVUYsR0FBVixDQUh0Qjs7QUFBQTtBQUdVRyxlQUhWO0FBQUE7QUFBQSxtQkFJd0JBLEdBQUcsQ0FBQ0MsSUFKNUI7O0FBQUE7QUFJVUMsaUJBSlY7QUFBQSw4Q0FLV0EsS0FMWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0tBQWVSLEs7O0FBUWYsSUFBTVMsSUFBSTtBQUFBLDJGQUFHLGlCQUFPRixJQUFQLEVBQVlKLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hPLGVBREcsR0FDR0MsS0FBSyxXQUFJWixRQUFKLFNBQWVJLEdBQWYsR0FBcUI7QUFBRVMsb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxrQkFBSSxFQUFFLE1BQXhCO0FBQWdDQyxrQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsSUFBZixDQUFyQztBQUEyRFUscUJBQU8sRUFBQztBQUFDLGdDQUFnQjtBQUFqQjtBQUFuRSxhQUFyQixDQUFMLENBQ1RDLElBRFMsQ0FDSixVQUFBWixHQUFHO0FBQUEscUJBQUVBLEdBQUcsQ0FBQ2EsSUFBSixFQUFGO0FBQUEsYUFEQyxDQURIO0FBQUE7QUFBQSxtQkFHSVQsR0FISjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpELElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7TUFBTUEsSTs7QUFNTixJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQVdDLENBQVgsRUFBaUI7QUFDakNELFVBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNILENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxLQUFyQjs7QUFDQSxNQUFHLENBQUNELEtBQUssQ0FBQ0UsYUFBTixFQUFKLEVBQTJCO0FBQ3ZCRixTQUFLLENBQUNHLElBQU4sQ0FBVyxrQ0FBWDtBQUNIOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsU0FBT0wsS0FBUDtBQUNILENBUEQ7O0FBU0FNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFDbEMsT0FBSyxFQUFMQSxLQUFEO0FBQU9TLE1BQUksRUFBSkEsSUFBUDtBQUFZVyxhQUFXLEVBQVhBLFdBQVo7QUFBd0JLLFdBQVMsRUFBVEE7QUFBeEIsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI1MDc2OTFiMmQwMGM0YzA0YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZpeGVkVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknOyBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERhdGFzKGxvYyxwYXJhbSl7XHJcbiAgICBsZXQgdXJsID0gYCR7Zml4ZWRVcmx9JHtsb2N9YDtcclxuICAgIGlmKHBhcmFtKSB1cmwgPSBgJHtmaXhlZFVybH0ke2xvY30/JHtwYXJhbX1gO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICBjb25zdCBkYXRhcyA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gICAgcmV0dXJuIGRhdGFzO1xyXG59XHJcblxyXG5jb25zdCBQb3N0ID0gYXN5bmMgKGRhdGEsdXJsKSA9PiB7XHJcbiAgICBjb25zdCBjbnQgPSBmZXRjaChgJHtmaXhlZFVybH0ke3VybH1gLHsgbWV0aG9kOiAnUE9TVCcsIG1vZGU6ICdjb3JzJywgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcclxuICAgIHJldHVybiBhd2FpdCBjbnQ7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVJbnB1dCA9IChzZXRJbnB1dCwgZSkgPT4ge1xyXG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3Qga2FrYW9Jbml0ID0gKHdpbmRvdykgPT4ge1xyXG4gICAgY29uc3Qga2FrYW8gPSB3aW5kb3cuS2FrYW87XHJcbiAgICBpZigha2FrYW8uaXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAga2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCfsubTsubTsmKQg7J2064uI7IWcIOyLpO2WieyZhOujjCEnKTtcclxuICAgIHJldHVybiBrYWthbztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7RGF0YXMsUG9zdCxoYW5kbGVJbnB1dCxrYWthb0luaXR9Il0sInNvdXJjZVJvb3QiOiIifQ==