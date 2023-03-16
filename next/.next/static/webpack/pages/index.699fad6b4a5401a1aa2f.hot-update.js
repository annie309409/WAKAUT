webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _place_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place_modal */ "./pages/place_modal.js");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/workaut.png */ "./assets/workaut.png?04d8");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_workaut_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/map-icon.png */ "./assets/map-icon.png");
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_kakaoSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/kakaoSet */ "./services/kakaoSet.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Map = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")).then(function (module) {
    return module.Map;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")];
    },
    modules: ["index.js -> " + "react-kakao-maps-sdk"]
  }
});
_c2 = Map;
var MapMarker = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")).then(function (module) {
    return module.MapMarker;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.module.js")];
    },
    modules: ["index.js -> " + "react-kakao-maps-sdk"]
  }
});
_c4 = MapMarker;
function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      lgShow = _useState2[0],
      setLgShow = _useState2[1];

  var addr = '경기도 부천시 소사로';
  var title = '부천 종합 운동장';
  var des = '#에어로빅 #줌바 #조깅';
  console.log(_services_kakaoSet__WEBPACK_IMPORTED_MODULE_9__["default"]);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "d-flex mt-4 mb-4 index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: addr,
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 44
      }
    }),
    note: title,
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: addr,
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 44
      }
    }),
    note: title,
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: addr,
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 44
      }
    }),
    note: title,
    col: "bg-secondary",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: addr,
    malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiTwotoneHeart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 44
      }
    }),
    note: title,
    col: "bg-danger",
    textClick: function textClick() {
      setLgShow(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "right col-6 ms-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(Map, {
    center: {
      lat: 33.5563,
      lng: 126.79581
    },
    style: {
      width: "100%",
      height: "800px"
    },
    level: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(MapMarker, {
    position: {
      lat: 33.55635,
      lng: 126.795841
    },
    image: {
      src: "".concat(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a),
      // 마커이미지의 주소입니다
      size: {
        width: 64,
        height: 69
      },
      // 마커이미지의 크기입니다
      options: {
        offset: {
          x: 27,
          y: 69
        } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      }
    },
    onMouseOver: function onMouseOver() {
      return setIsOpen(true);
    },
    onMouseOut: function onMouseOut() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, isOpen && __jsx("div", {
    style: {
      padding: "5px",
      color: "#000"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "\uBD80\uCC9C \uC885\uD569\uC6B4\uB3D9\uC7A5")))), __jsx(_place_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lgShow: lgShow,
    setLgShow: setLgShow,
    score: 3,
    addr: addr,
    title: title,
    des: des,
    img: _assets_workaut_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }));
}

_s(Index, "ThSgeLJmLtDkJGV0MtPdJGifJt4=");

_c5 = Index;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, {
  title: '주변에서 운동해요! WAKAUT!',
  description: '신개념 운동 플랫폼 워크아웃!'
});

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Map$dynamic");
$RefreshReg$(_c2, "Map");
$RefreshReg$(_c3, "MapMarker$dynamic");
$RefreshReg$(_c4, "MapMarker");
$RefreshReg$(_c5, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTWFwIiwiZHluYW1pYyIsInRoZW4iLCJtb2R1bGUiLCJzc3IiLCJNYXBNYXJrZXIiLCJJbmRleCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibGdTaG93Iiwic2V0TGdTaG93IiwiYWRkciIsInRpdGxlIiwiZGVzIiwiY29uc29sZSIsImxvZyIsImtha2FvU2V0IiwibGF0IiwibG5nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJtYXBpY29uIiwic2l6ZSIsIm9wdGlvbnMiLCJvZmZzZXQiLCJ4IiwieSIsInBhZGRpbmciLCJjb2xvciIsImltZyIsImdldExheW91dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHFLQUErQkMsSUFBL0IsQ0FBb0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0gsR0FBbkI7QUFBQSxHQUFwQyxDQUFOO0FBQUEsQ0FBRCxFQUFvRTtBQUNuRkksS0FBRyxFQUFFLEtBRDhFO0FBQUE7QUFBQTtBQUFBLGtDQUF0RCxxRkFBc0Q7QUFBQTtBQUFBLCtCQUF0RCxzQkFBc0Q7QUFBQTtBQUFBLENBQXBFLENBQW5CO01BQU1KLEc7QUFHTixJQUFNSyxTQUFTLEdBQUdKLG1EQUFPLE9BQUM7QUFBQSxTQUFNLHFLQUErQkMsSUFBL0IsQ0FBb0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0UsU0FBbkI7QUFBQSxHQUFwQyxDQUFOO0FBQUEsQ0FBRCxFQUEwRTtBQUMvRkQsS0FBRyxFQUFFLEtBRDBGO0FBQUE7QUFBQTtBQUFBLGtDQUE1RCxxRkFBNEQ7QUFBQTtBQUFBLCtCQUE1RCxzQkFBNEQ7QUFBQTtBQUFBLENBQTFFLENBQXpCO01BQU1DLFM7QUFHUyxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUVyQkcsTUFGcUI7QUFBQSxNQUViQyxTQUZhOztBQUc1QixNQUFJQyxJQUFJLEdBQUcsYUFBWDtBQUNBLE1BQUlDLEtBQUssR0FBRyxXQUFaO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLGVBQVY7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLDBEQUFaO0FBRUMsU0FDSSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLHdCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBRUwsSUFBYjtBQUFtQixVQUFNLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTNCO0FBQStDLFFBQUksRUFBRUMsS0FBckQ7QUFBNEQsT0FBRyxFQUFDLGNBQWhFO0FBQStFLGFBQVMsRUFBRSxxQkFBSTtBQUFFRixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQWdCLEtBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUVDLElBQWI7QUFBbUIsVUFBTSxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUEzQjtBQUErQyxRQUFJLEVBQUVDLEtBQXJEO0FBQTRELE9BQUcsRUFBQyxjQUFoRTtBQUErRSxhQUFTLEVBQUUscUJBQUk7QUFBRUYsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUFnQixLQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFFQyxJQUFiO0FBQW1CLFVBQU0sRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBM0I7QUFBK0MsUUFBSSxFQUFFQyxLQUFyRDtBQUE0RCxPQUFHLEVBQUMsY0FBaEU7QUFBK0UsYUFBUyxFQUFFLHFCQUFJO0FBQUVGLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFBZ0IsS0FBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBRUMsSUFBYjtBQUFtQixVQUFNLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTNCO0FBQStDLFFBQUksRUFBRUMsS0FBckQ7QUFBNEQsT0FBRyxFQUFDLFdBQWhFO0FBQTRFLGFBQVMsRUFBRSxxQkFBSTtBQUFFRixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQWdCLEtBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBUUk7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsR0FBRDtBQUFLLFVBQU0sRUFBRTtBQUFFTyxTQUFHLEVBQUUsT0FBUDtBQUFnQkMsU0FBRyxFQUFFO0FBQXJCLEtBQWI7QUFBK0MsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBdEQ7QUFBMkYsU0FBSyxFQUFFLENBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQ7QUFBVyxZQUFRLEVBQUU7QUFBRUgsU0FBRyxFQUFFLFFBQVA7QUFBaUJDLFNBQUcsRUFBRTtBQUF0QixLQUFyQjtBQUEwRCxTQUFLLEVBQUU7QUFDekRHLFNBQUcsWUFBS0MsMkRBQUwsQ0FEc0Q7QUFDdEM7QUFDbkJDLFVBQUksRUFBRTtBQUNGSixhQUFLLEVBQUUsRUFETDtBQUVGQyxjQUFNLEVBQUU7QUFGTixPQUZtRDtBQUt0RDtBQUNISSxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFO0FBQ1JDLFdBQUMsRUFBRSxFQURLO0FBRVJDLFdBQUMsRUFBRTtBQUZLLFNBREgsQ0FJRjs7QUFKRTtBQU5nRCxLQUFqRTtBQVlRLGVBQVcsRUFBRTtBQUFBLGFBQU1uQixTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FackI7QUFhUSxjQUFVLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FicEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVNRCxNQUFNLElBQUk7QUFBSyxTQUFLLEVBQUU7QUFBRXFCLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQWZoQixDQURKLENBREEsQ0FSSixFQTZCSSxNQUFDLG9EQUFEO0FBQVksVUFBTSxFQUFFcEIsTUFBcEI7QUFBNEIsYUFBUyxFQUFFQyxTQUF2QztBQUFrRCxTQUFLLEVBQUUsQ0FBekQ7QUFBNEQsUUFBSSxFQUFFQyxJQUFsRTtBQUF3RSxTQUFLLEVBQUVDLEtBQS9FO0FBQXNGLE9BQUcsRUFBRUMsR0FBM0Y7QUFBZ0csT0FBRyxFQUFFaUIsMERBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkosQ0FESjtBQWlDSDs7R0F6Q3VCekIsSzs7TUFBQUEsSztBQTJDeEIwQiw2RUFBUyxDQUFDMUIsS0FBRCxFQUFPO0FBQUNPLE9BQUssRUFBQyxvQkFBUDtBQUE0Qm9CLGFBQVcsRUFBQztBQUF4QyxDQUFQLENBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk5ZmFkNmI0YTU0MDFhMWFhMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpVHdvdG9uZUhlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBQbGFjZU1vZGFsIGZyb20gXCIuL3BsYWNlX21vZGFsXCI7XHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL3dvcmthdXQucG5nJztcclxuaW1wb3J0IG1hcGljb24gZnJvbSAnLi4vYXNzZXRzL21hcC1pY29uLnBuZyc7XHJcbmltcG9ydCBnZXRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXRcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IGtha2FvU2V0IGZyb20gXCIuLi9zZXJ2aWNlcy9rYWthb1NldFwiO1xyXG5jb25zdCBNYXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWtha2FvLW1hcHMtc2RrXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLk1hcCksIHtcclxuICAgIHNzcjogZmFsc2VcclxufSk7XHJcbmNvbnN0IE1hcE1hcmtlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3Qta2FrYW8tbWFwcy1zZGtcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWFwTWFya2VyKSwge1xyXG4gICAgc3NyOiBmYWxzZVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xnU2hvdywgc2V0TGdTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCBhZGRyID0gJ+qyveq4sOuPhCDrtoDsspzsi5wg7IaM7IKs66GcJztcclxuICAgIGxldCB0aXRsZSA9ICfrtoDsspwg7KKF7ZWpIOyatOuPmeyepSc7XHJcbiAgICBsZXQgZGVzID0gJyPsl5DslrTroZzruYUgI+ykjOuwlCAj7KGw6rmFJztcclxuICAgY29uc29sZS5sb2coa2FrYW9TZXQpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImQtZmxleCBtdC00IG1iLTQgaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC02IFwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1kYW5nZXInIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC02IG1zLTRcIj5cclxuICAgICAgICAgICAgPE1hcCBjZW50ZXI9e3sgbGF0OiAzMy41NTYzLCBsbmc6IDEyNi43OTU4MSB9fSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI4MDBweFwiIH19ICBsZXZlbD17NSB9PlxyXG4gICAgICAgICAgICAgICAgPE1hcE1hcmtlciBwb3NpdGlvbj17eyBsYXQ6IDMzLjU1NjM1LCBsbmc6IDEyNi43OTU4NDEgfX0gIGltYWdlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYCR7bWFwaWNvbn1gLCAvLyDrp4jsu6TsnbTrr7jsp4DsnZgg7KO87IaM7J6F64uI64ukXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIOuniOy7pOydtOuvuOyngOydmCDtgazquLDsnoXri4jri6RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAyNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDY5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLy8g66eI7Luk7J2066+47KeA7J2YIOyYteyFmOyeheuLiOuLpC4g66eI7Luk7J2YIOyijO2RnOyZgCDsnbzsuZjsi5ztgqwg7J2066+47KeAIOyViOyXkOyEnOydmCDsooztkZzrpbwg7ISk7KCV7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBjb2xvcjogXCIjMDAwXCIgfX0+67aA7LKcIOyihe2VqeyatOuPmeyepTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvTWFwTWFya2VyPlxyXG4gICAgICAgICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UGxhY2VNb2RhbCBsZ1Nob3c9e2xnU2hvd30gc2V0TGdTaG93PXtzZXRMZ1Nob3d9IHNjb3JlPXszfSBhZGRyPXthZGRyfSB0aXRsZT17dGl0bGV9IGRlcz17ZGVzfSBpbWc9e2ltZ30gLz4gIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5nZXRMYXlvdXQoSW5kZXgse3RpdGxlOifso7zrs4Dsl5DshJwg7Jq064+Z7ZW07JqUISBXQUtBVVQhJyxkZXNjcmlwdGlvbjon7Iug6rCc64WQIOyatOuPmSDtlIzrnqvtj7wg7JuM7YGs7JWE7JuDISd9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9