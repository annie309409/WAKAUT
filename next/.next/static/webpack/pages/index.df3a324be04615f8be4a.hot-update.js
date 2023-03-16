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
  }, __jsx(KakaoShare, {
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
/*!******************************!*\
  !*** ./services/kakaoSet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\services\\kakaoSet.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var KakaoSet = function KakaoSet(props) {
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
  }, []); // function share({addr, title, des, img, likes}){
  //     kakaoSend.sendDefault({
  //         objectType: 'location',
  //         address: addr,
  //         addressTitle: title,
  //         content: {
  //             title: title,
  //             description:des,
  //             imageUrl:img,
  //             link: {
  //             // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  //             mobileWebUrl: 'http://localhost:3000/',
  //             webUrl: 'http://localhost:3000/',
  //             },
  //         },
  //         social: {
  //             likeCount: likes,
  //             // commentCount: comments,
  //             // sharedCount: shares,
  //         },
  //         buttons: [
  //             {
  //             title: '웹으로 보기',
  //             link: {
  //                 mobileWebUrl: 'http://localhost:3000/',
  //                 webUrl: 'http://localhost:3000/',
  //             },
  //             },
  //         ],
  //         });
  // }
  // console.log(kakao);

  return __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\uD14C\uC2A4\uD2B8!");
};

_s(KakaoSet, "M9Aay+Kquv+Se7ghUe5NsoI5tqg=");

_c = KakaoSet;
/* harmony default export */ __webpack_exports__["default"] = (KakaoSet);

var _c;

$RefreshReg$(_c, "KakaoSet");

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

/***/ "./services/kakaoShare.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2tha2FvU2V0LmpzIl0sIm5hbWVzIjpbIk1hcCIsImR5bmFtaWMiLCJ0aGVuIiwibW9kdWxlIiwic3NyIiwiTWFwTWFya2VyIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImxnU2hvdyIsInNldExnU2hvdyIsImFkZHIiLCJ0aXRsZSIsImRlcyIsImxhdCIsImxuZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwibWFwaWNvbiIsInNpemUiLCJvcHRpb25zIiwib2Zmc2V0IiwieCIsInkiLCJwYWRkaW5nIiwiY29sb3IiLCJpbWciLCJnZXRMYXlvdXQiLCJkZXNjcmlwdGlvbiIsIktha2FvU2V0IiwicHJvcHMiLCJrYWthbyIsInNldEtha2FvIiwia2FrYW9Jbml0Iiwid2luZG93IiwiS2FrYW8iLCJpc0luaXRpYWxpemVkIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0scUtBQStCQyxJQUEvQixDQUFvQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDSCxHQUFuQjtBQUFBLEdBQXBDLENBQU47QUFBQSxDQUFELEVBQW9FO0FBQ25GSSxLQUFHLEVBQUUsS0FEOEU7QUFBQTtBQUFBO0FBQUEsa0NBQXRELHFGQUFzRDtBQUFBO0FBQUEsK0JBQXRELHNCQUFzRDtBQUFBO0FBQUEsQ0FBcEUsQ0FBbkI7TUFBTUosRztBQUdOLElBQU1LLFNBQVMsR0FBR0osbURBQU8sT0FBQztBQUFBLFNBQU0scUtBQStCQyxJQUEvQixDQUFvQyxVQUFDQyxNQUFEO0FBQUEs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O01BQUFBLEs7QUEwQ3hCdUIsNkVBQVMsQ0FBQ3ZCLEtBQUQsRUFBTztBQUFDTyxPQUFLLEVBQUMsb0JBQVA7QUFBNEJpQixhQUFXLEVBQUM7QUFBeEMsQ0FBUCxDQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFBQSxrQkFDR3pCLHNEQUFRLENBQUMsSUFBRCxDQURYO0FBQUEsTUFDaEIwQixLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBRXZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQUk7QUFDbEIsUUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsYUFBYixFQUFMLEVBQW1DO0FBQy9CRixZQUFNLENBQUNDLEtBQVAsQ0FBYUUsSUFBYixDQUFrQixrQ0FBbEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNEO0FBQ04sR0FMRDs7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pQLGFBQVM7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFULENBUnVCLENBV3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBR0gsQ0EvQ0Q7O0dBQU1KLFE7O0tBQUFBLFE7QUFpRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmM2EzMjRiZTA0NjE1ZjhiZTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaVR3b3RvbmVIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgUGxhY2VNb2RhbCBmcm9tIFwiLi9wbGFjZV9tb2RhbFwiO1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL2Fzc2V0cy93b3JrYXV0LnBuZyc7XHJcbmltcG9ydCBtYXBpY29uIGZyb20gJy4uL2Fzc2V0cy9tYXAtaWNvbi5wbmcnO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvZ2V0TGF5b3V0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBLYWthb1NldCBmcm9tIFwiLi4vc2VydmljZXMva2FrYW9TZXRcIjtcclxuY29uc3QgTWFwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1rYWthby1tYXBzLXNka1wiKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5NYXApLCB7XHJcbiAgICBzc3I6IGZhbHNlXHJcbn0pO1xyXG5jb25zdCBNYXBNYXJrZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWtha2FvLW1hcHMtc2RrXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLk1hcE1hcmtlciksIHtcclxuICAgIHNzcjogZmFsc2VcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgYWRkciA9ICfqsr3quLDrj4Qg67aA7LKc7IucIOyGjOyCrOuhnCc7XHJcbiAgICBsZXQgdGl0bGUgPSAn67aA7LKcIOyihe2VqSDsmrTrj5nsnqUnO1xyXG4gICAgbGV0IGRlcyA9ICcj7JeQ7Ja066Gc67mFICPspIzrsJQgI+yhsOq5hSc7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZC1mbGV4IG10LTQgbWItNCBpbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICA8S2FrYW9TaGFyZSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1zZWNvbmRhcnknIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgdGl0bGU9e2FkZHJ9IG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fSBub3RlPXt0aXRsZX0gY29sPSdiZy1kYW5nZXInIHRleHRDbGljaz17KCk9Pnsgc2V0TGdTaG93KHRydWUpfX0+PC9MaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtNiBtcy00XCI+XHJcbiAgICAgICAgICAgIDxNYXAgY2VudGVyPXt7IGxhdDogMzMuNTU2MywgbG5nOiAxMjYuNzk1ODEgfX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiODAwcHhcIiB9fSAgbGV2ZWw9ezUgfT5cclxuICAgICAgICAgICAgICAgIDxNYXBNYXJrZXIgcG9zaXRpb249e3sgbGF0OiAzMy41NTYzNSwgbG5nOiAxMjYuNzk1ODQxIH19ICBpbWFnZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGAke21hcGljb259YCwgLy8g66eI7Luk7J2066+47KeA7J2YIOyjvOyGjOyeheuLiOuLpFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAvLyDrp4jsu6TsnbTrr7jsp4DsnZgg7YGs6riw7J6F64uI64ukXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMjcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiA2OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIOuniOy7pOydtOuvuOyngOydmCDsmLXshZjsnoXri4jri6QuIOuniOy7pOydmCDsooztkZzsmYAg7J287LmY7Iuc7YKsIOydtOuvuOyngCDslYjsl5DshJzsnZgg7KKM7ZGc66W8IOyEpOygle2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldElzT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgY29sb3I6IFwiIzAwMFwiIH19Puu2gOyynCDsooXtlansmrTrj5nsnqU8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L01hcE1hcmtlcj5cclxuICAgICAgICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFBsYWNlTW9kYWwgbGdTaG93PXtsZ1Nob3d9IHNldExnU2hvdz17c2V0TGdTaG93fSBzY29yZT17M30gYWRkcj17YWRkcn0gdGl0bGU9e3RpdGxlfSBkZXM9e2Rlc30gaW1nPXtpbWd9IC8+ICBcclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZ2V0TGF5b3V0KEluZGV4LHt0aXRsZTon7KO867OA7JeQ7IScIOyatOuPme2VtOyalCEgV0FLQVVUIScsZGVzY3JpcHRpb246J+yLoOqwnOuFkCDsmrTrj5kg7ZSM656r7Y+8IOybjO2BrOyVhOybgyEnfSlcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgS2FrYW9TZXQgPSAocHJvcHMpID0+e1xyXG4gICAgY29uc3QgW2tha2FvLCBzZXRLYWthb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGtha2FvSW5pdCA9ICgpPT57XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuS2FrYW8uaXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5LYWthby5pbml0KCc2OTgyMzIyOGM4NzVhNWE5NTU1OGM0ZjRiNzhiMGFlOScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1IScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBrYWthb0luaXQoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIGZ1bmN0aW9uIHNoYXJlKHthZGRyLCB0aXRsZSwgZGVzLCBpbWcsIGxpa2VzfSl7XHJcbiAgICAvLyAgICAga2FrYW9TZW5kLnNlbmREZWZhdWx0KHtcclxuICAgIC8vICAgICAgICAgb2JqZWN0VHlwZTogJ2xvY2F0aW9uJyxcclxuICAgIC8vICAgICAgICAgYWRkcmVzczogYWRkcixcclxuICAgIC8vICAgICAgICAgYWRkcmVzc1RpdGxlOiB0aXRsZSxcclxuICAgIC8vICAgICAgICAgY29udGVudDoge1xyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ZGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgaW1hZ2VVcmw6aW1nLFxyXG4gICAgLy8gICAgICAgICAgICAgbGluazoge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gW+uCtCDslaDtlIzrpqzsvIDsnbTshZhdID4gW+2UjOueq+2PvF0g7JeQ7IScIOuTseuhne2VnCDsgqzsnbTtirgg64+E66mU7J246rO8IOydvOy5mO2VtOyVvCDtlahcclxuICAgIC8vICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxyXG4gICAgLy8gICAgICAgICAgICAgd2ViVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBzb2NpYWw6IHtcclxuICAgIC8vICAgICAgICAgICAgIGxpa2VDb3VudDogbGlrZXMsXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb21tZW50Q291bnQ6IGNvbW1lbnRzLFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gc2hhcmVkQ291bnQ6IHNoYXJlcyxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcclxuICAgIC8vICAgICAgICAgICAgIGxpbms6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBdLFxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhrYWthbyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24+7YWM7Iqk7Yq4ITwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb1NldDsiXSwic291cmNlUm9vdCI6IiJ9