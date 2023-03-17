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
/* harmony import */ var _services_kakaoShare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/kakaoShare */ "./services/kakaoShare.js");
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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "d-flex mt-4 mb-4 index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(KakaoSet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 35,
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
      lineNumber: 50,
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
      lineNumber: 54,
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

/***/ }),

/***/ "./services/kakaoSet.js":
false,

/***/ "./services/kakaoShare.js":
/*!********************************!*\
  !*** ./services/kakaoShare.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

 // export default function KakaoShare(){
//     let Kakao = {};
//     if (typeof window !== 'undefined') { 
//         useEffect(() => {
//             Kakao = window.Kakao;
//             window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
//             console.log(Kakao);
//         }, []);
//     }
//     return(
//         <>
//             <button onClick={test}>테스트카카오</button>
//         </>
//     )
// }

/* harmony default export */ __webpack_exports__["default"] = (KakaoSet = _s(function () {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      kakao = _useState[0],
      setKakao = _useState[1];

  var kakaoInit = function kakaoInit() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
      console.log('성공!');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    kakaoInit();
  }, []);
  console.log(kakao);
  return kakao;
}, "M9Aay+Kquv+Se7ghUe5NsoI5tqg=")); // function share({addr, title, des, img, likes}){
//     Kakao.Share.sendDefault({
//     objectType: 'location',
//     address: addr,
//     addressTitle: title,
//     content: {
//         title: title,
//         description:des,
//         imageUrl:img,
//         link: {
//         // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
//         mobileWebUrl: 'http://localhost:3010/',
//         webUrl: 'http://localhost:3010/',
//         },
//     },
//     social: {
//         likeCount: likes,
//         // commentCount: comments,
//         // sharedCount: shares,
//     },
//     buttons: [
//         {
//         title: '웹으로 보기',
//         link: {
//             mobileWebUrl: 'http://localhost:3010/',
//             webUrl: 'http://localhost:3010/',
//         },
//         },
//     ],
//     });
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2tha2FvU2hhcmUuanMiXSwibmFtZXMiOlsiTWFwIiwiZHluYW1pYyIsInRoZW4iLCJtb2R1bGUiLCJzc3IiLCJNYXBNYXJrZXIiLCJJbmRleCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibGdTaG93Iiwic2V0TGdTaG93IiwiYWRkciIsInRpdGxlIiwiZGVzIiwibGF0IiwibG5nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJtYXBpY29uIiwic2l6ZSIsIm9wdGlvbnMiLCJvZmZzZXQiLCJ4IiwieSIsInBhZGRpbmciLCJjb2xvciIsImltZyIsImdldExheW91dCIsImRlc2NyaXB0aW9uIiwiS2FrYW9TZXQiLCJrYWthbyIsInNldEtha2FvIiwia2FrYW9Jbml0Iiwid2luZG93IiwiS2FrYW8iLCJpc0luaXRpYWxpemVkIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0scUtBQStCQyxJQUEvQixDQUFvQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDSCxHQUFuQjtBQUFBLEdBQXBDLENBQU47QUFBQSxDQUFELEVBQW9FO0FBQ25GSSxLQUFHLEVBQUUsS0FEOEU7QUFBQTtBQUFBO0FBQUEsa0NBQXRELHFGQUFzRDtBQUFBO0FBQUEsK0JBQXRELHNCQUFzRDtBQUFBO0FBQUEsQ0FBcEUsQ0FBbkI7TUFBTUosRztBQUdOLElBQU1LLFNBQVMsR0FBR0osbURBQU8sT0FBQztBQUFBLFNBQU0scUtBQStCQyxJQUEvQixDQUFvQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEs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LEs7QUEwQ3hCdUIsNkVBQVMsQ0FBQ3ZCLEtBQUQsRUFBTztBQUFDTyxPQUFLLEVBQUMsb0JBQVA7QUFBNEJpQixhQUFXLEVBQUM7QUFBeEMsQ0FBUCxDQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUMsdUVBQVEsTUFBRSxZQUFJO0FBQUE7O0FBQUEsa0JBQ0N4QixzREFBUSxDQUFDLElBQUQsQ0FEVDtBQUFBLE1BQ2xCeUIsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUV6QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFJO0FBQ2xCLFFBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFDLGFBQWIsRUFBTCxFQUFtQztBQUMvQkYsWUFBTSxDQUFDQyxLQUFQLENBQWFFLElBQWIsQ0FBa0Isa0NBQWxCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDRDtBQUNOLEdBTEQ7O0FBTUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxhQUFTO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBLFNBQU9BLEtBQVA7QUFDSCxDQWJzQixpQ0FBdkIsRSxDQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzNGM2Mjg3NDQwMDdmZTY0MTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaVR3b3RvbmVIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgUGxhY2VNb2RhbCBmcm9tIFwiLi9wbGFjZV9tb2RhbFwiO1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL2Fzc2V0cy93b3JrYXV0LnBuZyc7XHJcbmltcG9ydCBtYXBpY29uIGZyb20gJy4uL2Fzc2V0cy9tYXAtaWNvbi5wbmcnO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvZ2V0TGF5b3V0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBLYWthb1NoYXJlIGZyb20gXCIuLi9zZXJ2aWNlcy9rYWthb1NoYXJlXCI7XHJcbmNvbnN0IE1hcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3Qta2FrYW8tbWFwcy1zZGtcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWFwKSwge1xyXG4gICAgc3NyOiBmYWxzZVxyXG59KTtcclxuY29uc3QgTWFwTWFya2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1rYWthby1tYXBzLXNka1wiKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5NYXBNYXJrZXIpLCB7XHJcbiAgICBzc3I6IGZhbHNlXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IGFkZHIgPSAn6rK96riw64+EIOu2gOyynOyLnCDshozsgqzroZwnO1xyXG4gICAgbGV0IHRpdGxlID0gJ+u2gOyynCDsooXtlakg7Jq064+Z7J6lJztcclxuICAgIGxldCBkZXMgPSAnI+yXkOyWtOuhnOu5hSAj7KSM67CUICPsobDquYUnO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImQtZmxleCBtdC00IG1iLTQgaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC02IFwiPlxyXG4gICAgICAgICAgICAgICAgPEtha2FvU2V0IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YWRkcn0gbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9e3RpdGxlfSBjb2w9J2JnLXNlY29uZGFyeScgdGV4dENsaWNrPXsoKT0+eyBzZXRMZ1Nob3codHJ1ZSl9fT48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YWRkcn0gbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9e3RpdGxlfSBjb2w9J2JnLXNlY29uZGFyeScgdGV4dENsaWNrPXsoKT0+eyBzZXRMZ1Nob3codHJ1ZSl9fT48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YWRkcn0gbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9e3RpdGxlfSBjb2w9J2JnLXNlY29uZGFyeScgdGV4dENsaWNrPXsoKT0+eyBzZXRMZ1Nob3codHJ1ZSl9fT48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCB0aXRsZT17YWRkcn0gbWFsY250PXs8QWlUd290b25lSGVhcnQgLz59IG5vdGU9e3RpdGxlfSBjb2w9J2JnLWRhbmdlcicgdGV4dENsaWNrPXsoKT0+eyBzZXRMZ1Nob3codHJ1ZSl9fT48L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC02IG1zLTRcIj5cclxuICAgICAgICAgICAgPE1hcCBjZW50ZXI9e3sgbGF0OiAzMy41NTYzLCBsbmc6IDEyNi43OTU4MSB9fSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI4MDBweFwiIH19ICBsZXZlbD17NSB9PlxyXG4gICAgICAgICAgICAgICAgPE1hcE1hcmtlciBwb3NpdGlvbj17eyBsYXQ6IDMzLjU1NjM1LCBsbmc6IDEyNi43OTU4NDEgfX0gIGltYWdlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYCR7bWFwaWNvbn1gLCAvLyDrp4jsu6TsnbTrr7jsp4DsnZgg7KO87IaM7J6F64uI64ukXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIOuniOy7pOydtOuvuOyngOydmCDtgazquLDsnoXri4jri6RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAyNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDY5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLy8g66eI7Luk7J2066+47KeA7J2YIOyYteyFmOyeheuLiOuLpC4g66eI7Luk7J2YIOyijO2RnOyZgCDsnbzsuZjsi5ztgqwg7J2066+47KeAIOyViOyXkOyEnOydmCDsooztkZzrpbwg7ISk7KCV7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBjb2xvcjogXCIjMDAwXCIgfX0+67aA7LKcIOyihe2VqeyatOuPmeyepTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvTWFwTWFya2VyPlxyXG4gICAgICAgICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UGxhY2VNb2RhbCBsZ1Nob3c9e2xnU2hvd30gc2V0TGdTaG93PXtzZXRMZ1Nob3d9IHNjb3JlPXszfSBhZGRyPXthZGRyfSB0aXRsZT17dGl0bGV9IGRlcz17ZGVzfSBpbWc9e2ltZ30gLz4gIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5nZXRMYXlvdXQoSW5kZXgse3RpdGxlOifso7zrs4Dsl5DshJwg7Jq064+Z7ZW07JqUISBXQUtBVVQhJyxkZXNjcmlwdGlvbjon7Iug6rCc64WQIOyatOuPmSDtlIzrnqvtj7wg7JuM7YGs7JWE7JuDISd9KVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLYWthb1NoYXJlKCl7XHJcbi8vICAgICBsZXQgS2FrYW8gPSB7fTtcclxuLy8gICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyBcclxuLy8gICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBLYWthbyA9IHdpbmRvdy5LYWthbztcclxuLy8gICAgICAgICAgICAgd2luZG93Lktha2FvLmluaXQoJzY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5Jyk7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKEtha2FvKTtcclxuLy8gICAgICAgICB9LCBbXSk7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICAgIHJldHVybihcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Rlc3R9Pu2FjOyKpO2KuOy5tOy5tOyYpDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldCA9KCk9PntcclxuICAgIGNvbnN0IFtrYWthbywgc2V0S2FrYW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBrYWthb0luaXQgPSAoKT0+e1xyXG4gICAgICAgIGlmICghd2luZG93Lktha2FvLmlzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuS2FrYW8uaW5pdCgnNjk4MjMyMjhjODc1YTVhOTU1NThjNGY0Yjc4YjBhZTknKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztSEnKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAga2FrYW9Jbml0KCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4ga2FrYW87XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHNoYXJlKHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbi8vICAgICBLYWthby5TaGFyZS5zZW5kRGVmYXVsdCh7XHJcbi8vICAgICBvYmplY3RUeXBlOiAnbG9jYXRpb24nLFxyXG4vLyAgICAgYWRkcmVzczogYWRkcixcclxuLy8gICAgIGFkZHJlc3NUaXRsZTogdGl0bGUsXHJcbi8vICAgICBjb250ZW50OiB7XHJcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOmRlcyxcclxuLy8gICAgICAgICBpbWFnZVVybDppbWcsXHJcbi8vICAgICAgICAgbGluazoge1xyXG4vLyAgICAgICAgIC8vIFvrgrQg7JWg7ZSM66as7LyA7J207IWYXSA+IFvtlIzrnqvtj7xdIOyXkOyEnCDrk7HroZ3tlZwg7IKs7J207Yq4IOuPhOuplOyduOqzvCDsnbzsuZjtlbTslbwg7ZWoXHJcbi8vICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbi8vICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBzb2NpYWw6IHtcclxuLy8gICAgICAgICBsaWtlQ291bnQ6IGxpa2VzLFxyXG4vLyAgICAgICAgIC8vIGNvbW1lbnRDb3VudDogY29tbWVudHMsXHJcbi8vICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBidXR0b25zOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXHJcbi8vICAgICAgICAgbGluazoge1xyXG4vLyAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMTAvJyxcclxuLy8gICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDEwLycsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICAgIH0pO1xyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==