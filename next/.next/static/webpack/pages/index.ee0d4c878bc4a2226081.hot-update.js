webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _place_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place_modal */ "./pages/place_modal.js");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/workaut.png */ "./assets/workaut.png?04d8");
/* harmony import */ var _assets_workaut_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_workaut_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/map-icon.png */ "./assets/map-icon.png");
/* harmony import */ var _assets_map_icon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\fullstack\\Desktop\\TeamWorks\\WAKAUT\\next\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Map = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {
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
var MapMarker = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c3 = function _c3() {
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
var __N_SSP = true;
function Index(_ref) {
  _s();

  var _this2 = this;

  var items = _ref.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var des = '#에어로빅 #줌바 #조깅';

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      selectedSigun = _useState3[0],
      setSelectedSigun = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      selectedFacility = _useState4[0],
      setSelectedFacility = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchText = _useState5[0],
      setSearchText = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(items),
      searchResults = _useState6[0],
      setSearchResults = _useState6[1]; // 검색결과 저장 state


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedPlace = _useState7[0],
      setSelectedPlace = _useState7[1]; // 마커 클릭시 모달 state


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(items.length),
      searchCount = _useState8[0],
      setSearchCount = _useState8[1]; // 총 몇개의 시설이 조회된건지 저장하는 state
  // 시군명 선택 시 시설구분명 셀렉트 태그에 표시할 options 배열 반환


  function getFacilityOptions(sigun) {
    var _this = this;

    var facilities = items.filter(function (item) {
      return item.SIGUN_NM === sigun;
    });

    var facilityNames = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(facilities.map(function (item) {
      return item.FACLT_DIV_NM;
    })));

    return facilityNames.map(function (name) {
      return __jsx("option", {
        key: name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 44
        }
      }, name);
    });
  } // 시군명 선택 시 시설구분명 셀렉트 태그 업데이트 및 지도 중심좌표 설정


  function handleSigunChange(e) {
    setSelectedSigun(e.target.value);
    setSelectedFacility("");
    setSearchText(""); // 시설 데이터 중 첫번째 시설의 위도와 경도 정보 가져오기

    var firstFacility = items.find(function (item) {
      return item.SIGUN_NM === e.target.value;
    });

    if (firstFacility) {
      var lat = parseFloat(firstFacility.REFINE_WGS84_LAT);
      var lng = parseFloat(firstFacility.REFINE_WGS84_LOGT); // 위도와 경도 정보로 중심 좌표 설정

      setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          center: {
            lat: lat,
            lng: lng
          }
        });
      });
    } // 검색 결과 초기화


    setSearchResults([]);
    setSearchCount(0);
  } // 시설구분명 선택 시 state 업데이트


  function handleFacilityChange(e) {
    setSelectedFacility(e.target.value);
  } // 검색어 입력 시 state 업데이트


  function handleSearchTextChange(e) {
    setSearchText(e.target.value); // 검색 결과 초기화

    setSearchResults([]);
    setSearchCount(0);
  }

  function handleSearchButtonClick() {
    // items 객체 복사
    var results = Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items); // 선택된 시군명이 있다면, 해당 시군명에 해당하는 시설들만 필터링


    if (selectedSigun) {
      results = results.filter(function (item) {
        return item.SIGUN_NM === selectedSigun;
      });
    } // 선택된 시설구분명이 있다면, 해당 시설구분명에 해당하는 시설들만 필터링


    if (selectedFacility) {
      results = results.filter(function (item) {
        return item.FACLT_DIV_NM === selectedFacility;
      });
    } // 검색어가 있다면, 시설명이 해당 검색어를 포함하는 시설들만 필터링


    if (searchText) {
      results = results.filter(function (item) {
        return item.FACLT_NM.includes(searchText);
      });
    }

    if (results.length === 0) setShow(true);else {
      setSearchResults(results);
      setSearchCount(results.length);
    }
  }

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    center: {
      lat: 37.28892227326957,
      lng: 127.05363481102465
    },
    errMsg: null,
    isLoading: true
  }),
      state = _useState9[0],
      setState = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            center: {
              lat: position.coords.latitude,
              // 위도
              lng: position.coords.longitude // 경도

            },
            isLoading: false
          });
        });
      }, function (err) {
        setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            errMsg: err.message,
            isLoading: false
          });
        });
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          errMsg: "geolocation을 사용할수 없어요..",
          isLoading: false
        });
      });
    }
  }, []);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "d-flex mt-4 mb-4 index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left col-6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "\uCD1D ", searchCount, "\uAC74"), searchResults.map(function (item) {
    return __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.FACLT_NM,
      title: item.FACLT_NM,
      malcnt: __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiTwotoneHeart"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 33
        }
      }),
      note: item.REFINE_ROADNM_ADDR,
      col: "bg-secondary",
      textClick: function textClick() {
        setSelectedPlace(item);
        setLgShow(true);
        var lat = parseFloat(item.REFINE_WGS84_LAT);
        var lng = parseFloat(item.REFINE_WGS84_LOGT);
        setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            center: {
              lat: lat,
              lng: lng
            }
          });
        });
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    });
  })), __jsx("div", {
    className: "right col-6 ms-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "d-flex mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormSelect"], {
    value: selectedSigun,
    onChange: handleSigunChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, "\uC2DC\uAD70"), Object(C_Users_fullstack_Desktop_TeamWorks_WAKAUT_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(items.map(function (item) {
    return item.SIGUN_NM;
  }))).map(function (sigun) {
    return __jsx("option", {
      key: sigun,
      value: sigun,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 29
      }
    }, sigun);
  })), selectedSigun ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormSelect"], {
    value: selectedFacility,
    onChange: handleFacilityChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, "\uC2DC\uC124\uAD6C\uBD84\uBA85"), getFacilityOptions(selectedSigun)) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormSelect"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "\uC2DC\uC124\uAD6C\uBD84\uBA85")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "text",
    placeholder: "\uC5B4\uB514\uC11C \uC6B4\uB3D9\uD560\uAE4C\uC694?",
    value: searchText,
    onChange: handleSearchTextChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: handleSearchButtonClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, "Search")), __jsx(Map, {
    center: state.center,
    style: {
      width: "100%",
      height: "800px"
    },
    level: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, (!state.isLoading ? searchResults : []).map(function (item) {
    return __jsx(MapMarker, {
      key: item.FACLT_NM,
      position: {
        lat: item.REFINE_WGS84_LAT,
        lng: item.REFINE_WGS84_LOGT
      },
      onClick: function onClick() {
        setSelectedPlace(item);
        setLgShow(true);
      },
      image: {
        src: "".concat(_assets_map_icon_png__WEBPACK_IMPORTED_MODULE_8___default.a),
        size: {
          width: 30,
          height: 30
        },
        options: {
          offset: {
            x: 27,
            y: 69
          }
        }
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    });
  }))), __jsx(_place_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg",
    lgShow: lgShow,
    setLgShow: setLgShow,
    score: 3,
    title: selectedPlace ? selectedPlace.FACLT_NM : "",
    addr: selectedPlace ? selectedPlace.REFINE_ROADNM_ADDR : "",
    contact: selectedPlace ? selectedPlace.CONTCT_NO : "",
    des: des,
    img: _assets_workaut_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    lat: selectedPlace ? selectedPlace.REFINE_WGS84_LAT : null,
    lng: selectedPlace ? selectedPlace.REFINE_WGS84_LOGT : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }), __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "class": "searchModal",
    size: "sm",
    lgShow: show,
    setLgShow: setShow,
    children: "\uD574\uB2F9\uD558\uB294 \uC2DC\uC124\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }));
}

_s(Index, "yNQQgU8Qdv4OCVUYeshn5PUVonI=");

_c5 = Index;
Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTWFwIiwiZHluYW1pYyIsInRoZW4iLCJtb2R1bGUiLCJzc3IiLCJNYXBNYXJrZXIiLCJJbmRleCIsIml0ZW1zIiwidXNlU3RhdGUiLCJsZ1Nob3ciLCJzZXRMZ1Nob3ciLCJzaG93Iiwic2V0U2hvdyIsImRlcyIsInNlbGVjdGVkU2lndW4iLCJzZXRTZWxlY3RlZFNpZ3VuIiwic2VsZWN0ZWRGYWNpbGl0eSIsInNldFNlbGVjdGVkRmFjaWxpdHkiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2VsZWN0ZWRQbGFjZSIsInNldFNlbGVjdGVkUGxhY2UiLCJsZW5ndGgiLCJzZWFyY2hDb3VudCIsInNldFNlYXJjaENvdW50IiwiZ2V0RmFjaWxpdHlPcHRpb25zIiwic2lndW4iLCJmYWNpbGl0aWVzIiwiZmlsdGVyIiwiaXRlbSIsIlNJR1VOX05NIiwiZmFjaWxpdHlOYW1lcyIsIlNldCIsIm1hcCIsIkZBQ0xUX0RJVl9OTSIsIm5hbWUiLCJoYW5kbGVTaWd1bkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpcnN0RmFjaWxpdHkiLCJmaW5kIiwibGF0IiwicGFyc2VGbG9hdCIsIlJFRklORV9XR1M4NF9MQVQiLCJsbmciLCJSRUZJTkVfV0dTODRfTE9HVCIsInNldFN0YXRlIiwicHJldiIsImNlbnRlciIsImhhbmRsZUZhY2lsaXR5Q2hhbmdlIiwiaGFuZGxlU2VhcmNoVGV4dENoYW5nZSIsImhhbmRsZVNlYXJjaEJ1dHRvbkNsaWNrIiwicmVzdWx0cyIsIkZBQ0xUX05NIiwiaW5jbHVkZXMiLCJlcnJNc2ciLCJpc0xvYWRpbmciLCJzdGF0ZSIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImVyciIsIm1lc3NhZ2UiLCJSRUZJTkVfUk9BRE5NX0FERFIiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm1hcGljb24iLCJzaXplIiwib3B0aW9ucyIsIm9mZnNldCIsIngiLCJ5IiwiQ09OVENUX05PIiwiaW1nIiwiZ2V0TGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQSxJQUFNQSxHQUFHLEdBQUdDLG9EQUFPLE1BQUM7QUFBQSxTQUFNLHFLQUErQkMsSUFBL0IsQ0FBb0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0gsR0FBbkI7QUFBQSxHQUFwQyxDQUFOO0FBQUEsQ0FBRCxFQUFvRTtBQUNuRkksS0FBRyxFQUFFLEtBRDhFO0FBQUE7QUFBQTtBQUFBLGtDQUF0RCxxRkFBc0Q7QUFBQTtBQUFBLCtCQUF0RCxzQkFBc0Q7QUFBQTtBQUFBLENBQXBFLENBQW5CO01BQU1KLEc7QUFHTixJQUFNSyxTQUFTLEdBQUdKLG9EQUFPLE9BQUM7QUFBQSxTQUFNLHFLQUErQkMsSUFBL0IsQ0FBb0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0UsU0FBbkI7QUFBQSxHQUFwQyxDQUFOO0FBQUEsQ0FBRCxFQUEwRTtBQUMvRkQsS0FBRyxFQUFFLEtBRDBGO0FBQUE7QUFBQTtBQUFBLGtDQUE1RCxxRkFBNEQ7QUFBQTtBQUFBLCtCQUE1RCxzQkFBNEQ7QUFBQTtBQUFBLENBQTFFLENBQXpCO01BQU1DLFM7O0FBU1MsU0FBU0MsS0FBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxLQUFELENBREQ7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRVhG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QUlJLFNBQUssRUFBRSxDQUpYO0FBS0ksU0FBSyxFQUFFWSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ2tDLFFBQWpCLEdBQTRCLEVBTHBEO0FBTUksUUFBSSxFQUFFbEMsYUFBYSxHQUFHQSxhQUFhLENBQUNpRCxrQkFBakIsR0FBc0MsRUFON0Q7QUFPSSxXQUFPLEVBQUVqRCxhQUFhLEdBQUdBLGFBQWEsQ0FBQzJELFNBQWpCLEdBQTZCLEVBUHZEO0FBUUksT0FBRyxFQUFFcEUsR0FSVDtBQVNJLE9BQUcsRUFBRXFFLDBEQVRUO0FBVUksT0FBRyxFQUFFNUQsYUFBYSxHQUFHQSxhQUFhLENBQUN3QixnQkFBakIsR0FBb0MsSUFWMUQ7QUFXSSxPQUFHLEVBQUV4QixhQUFhLEdBQUdBLGFBQWEsQ0FBQzBCLGlCQUFqQixHQUFxQyxJQVgzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVKLEVBcUZJLE1BQUMsMERBQUQ7QUFBTyxhQUFNLGFBQWI7QUFBMkIsUUFBSSxFQUFDLElBQWhDO0FBQXFDLFVBQU0sRUFBRXJDLElBQTdDO0FBQW1ELGFBQVMsRUFBRUMsT0FBOUQ7QUFBdUUsWUFBUSxFQUFDLHVFQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckZKLENBREo7QUF5Rkg7O0dBcE51Qk4sSzs7TUFBQUEsSztBQXNOeEI2RSw2RUFBUyxDQUFDN0UsS0FBRCxFQUFPO0FBQUM4RSxPQUFLLEVBQUMsb0JBQVA7QUFBNEJDLGFBQVcsRUFBQztBQUF4QyxDQUFQLENBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUwZDRjODc4YmM0YTIyMjYwODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1TZWxlY3R9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpVHdvdG9uZUhlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBQbGFjZU1vZGFsIGZyb20gXCIuL3BsYWNlX21vZGFsXCI7XHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL3dvcmthdXQucG5nJztcclxuaW1wb3J0IG1hcGljb24gZnJvbSAnLi4vYXNzZXRzL21hcC1pY29uLnBuZyc7XHJcbmltcG9ydCBnZXRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXRcIjtcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xyXG5pbXBvcnQge0RhdGFzfSBmcm9tIFwiLi4vcGFnZXMvZmV1dGlsc1wiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcblxyXG5jb25zdCBNYXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWtha2FvLW1hcHMtc2RrXCIpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLk1hcCksIHtcclxuICAgIHNzcjogZmFsc2VcclxufSk7XHJcbmNvbnN0IE1hcE1hcmtlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3Qta2FrYW8tbWFwcy1zZGtcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWFwTWFya2VyKSwge1xyXG4gICAgc3NyOiBmYWxzZVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBsZXQgaXRlbXMgPSBhd2FpdCBEYXRhcygnL21haW4/c3JjaD0nKTtcclxuICAgIHJldHVybiB7cHJvcHM6IHtpdGVtczogaXRlbXN9fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7aXRlbXN9KSB7XHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCBkZXMgPSAnI+yXkOyWtOuhnOu5hSAj7KSM67CUICPsobDquYUnO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFNpZ3VuLCBzZXRTZWxlY3RlZFNpZ3VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRmFjaWxpdHksIHNldFNlbGVjdGVkRmFjaWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKGl0ZW1zKTsgIC8vIOqygOyDieqysOqzvCDsoIDsnqUgc3RhdGVcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYWNlLCBzZXRTZWxlY3RlZFBsYWNlXSA9IHVzZVN0YXRlKG51bGwpOyAgIC8vIOuniOy7pCDtgbTrpq3si5wg66qo64usIHN0YXRlXHJcbiAgICBjb25zdCBbc2VhcmNoQ291bnQsIHNldFNlYXJjaENvdW50XSA9IHVzZVN0YXRlKGl0ZW1zLmxlbmd0aCk7ICAvLyDstJ0g66qH6rCc7J2YIOyLnOyEpOydtCDsobDtmozrkJzqsbTsp4Ag7KCA7J6l7ZWY64qUIHN0YXRlXHJcblxyXG5cclxuICAgIC8vIOyLnOq1sOuqhSDshKDtg50g7IucIOyLnOyEpOq1rOu2hOuqhSDshYDroIntirgg7YOc6re47JeQIO2RnOyLnO2VoCBvcHRpb25zIOuwsOyXtCDrsJjtmZhcclxuICAgIGZ1bmN0aW9uIGdldEZhY2lsaXR5T3B0aW9ucyhzaWd1bikge1xyXG4gICAgICAgIGNvbnN0IGZhY2lsaXRpZXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uU0lHVU5fTk0gPT09IHNpZ3VuKTtcclxuICAgICAgICBjb25zdCBmYWNpbGl0eU5hbWVzID0gWy4uLm5ldyBTZXQoZmFjaWxpdGllcy5tYXAoKGl0ZW0pID0+IGl0ZW0uRkFDTFRfRElWX05NKSldO1xyXG4gICAgICAgIHJldHVybiBmYWNpbGl0eU5hbWVzLm1hcCgobmFtZSkgPT4gPG9wdGlvbiBrZXk9e25hbWV9PntuYW1lfTwvb3B0aW9uPik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7Iuc6rWw66qFIOyEoO2DnSDsi5wg7Iuc7ISk6rWs67aE66qFIOyFgOugie2KuCDtg5zqt7gg7JeF642w7J207Yq4IOuwjyDsp4Drj4Qg7KSR7Ius7KKM7ZGcIOyEpOyglVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2lndW5DaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFNlbGVjdGVkU2lndW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRmFjaWxpdHkoXCJcIik7XHJcbiAgICAgICAgc2V0U2VhcmNoVGV4dChcIlwiKTtcclxuXHJcbiAgICAgICAgLy8g7Iuc7ISkIOuNsOydtO2EsCDspJEg7LKr67KI7Ke4IOyLnOyEpOydmCDsnITrj4TsmYAg6rK964+EIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgICAgICBjb25zdCBmaXJzdEZhY2lsaXR5ID0gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5TSUdVTl9OTSA9PT0gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChmaXJzdEZhY2lsaXR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoZmlyc3RGYWNpbGl0eS5SRUZJTkVfV0dTODRfTEFUKTtcclxuICAgICAgICAgICAgY29uc3QgbG5nID0gcGFyc2VGbG9hdChmaXJzdEZhY2lsaXR5LlJFRklORV9XR1M4NF9MT0dUKTtcclxuICAgICAgICAgICAgLy8g7JyE64+E7JmAIOqyveuPhCDsoJXrs7TroZwg7KSR7IusIOyijO2RnCDshKTsoJVcclxuICAgICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6rKA7IOJIOqysOqzvCDstIjquLDtmZRcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKFtdKTtcclxuICAgICAgICBzZXRTZWFyY2hDb3VudCgwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsi5zshKTqtazrtoTrqoUg7ISg7YOdIOyLnCBzdGF0ZSDsl4XrjbDsnbTtirhcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZhY2lsaXR5Q2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZEZhY2lsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDqsoDsg4nslrQg7J6F66ClIOyLnCBzdGF0ZSDsl4XrjbDsnbTtirhcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaFRleHRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFNlYXJjaFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOqygOyDiSDqsrDqs7wg7LSI6riw7ZmUXHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhbXSk7XHJcbiAgICAgICAgc2V0U2VhcmNoQ291bnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgLy8gaXRlbXMg6rCd7LK0IOuzteyCrFxyXG4gICAgICAgIGxldCByZXN1bHRzID0gWy4uLml0ZW1zXTtcclxuXHJcbiAgICAgICAgLy8g7ISg7YOd65CcIOyLnOq1sOuqheydtCDsnojri6TrqbQsIO2VtOuLuSDsi5zqtbDrqoXsl5Ag7ZW064u57ZWY64qUIOyLnOyEpOuTpOunjCDtlYTthLDrp4FcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTaWd1bikge1xyXG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uU0lHVU5fTk0gPT09IHNlbGVjdGVkU2lndW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ISg7YOd65CcIOyLnOyEpOq1rOu2hOuqheydtCDsnojri6TrqbQsIO2VtOuLuSDsi5zshKTqtazrtoTrqoXsl5Ag7ZW064u57ZWY64qUIOyLnOyEpOuTpOunjCDtlYTthLDrp4FcclxuICAgICAgICBpZiAoc2VsZWN0ZWRGYWNpbGl0eSkge1xyXG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uRkFDTFRfRElWX05NID09PSBzZWxlY3RlZEZhY2lsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6rKA7IOJ7Ja06rCAIOyeiOuLpOuptCwg7Iuc7ISk66qF7J20IO2VtOuLuSDqsoDsg4nslrTrpbwg7Y+s7ZWo7ZWY64qUIOyLnOyEpOuTpOunjCDtlYTthLDrp4FcclxuICAgICAgICBpZiAoc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uRkFDTFRfTk0uaW5jbHVkZXMoc2VhcmNoVGV4dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHNldFNob3codHJ1ZSlcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XHJcbiAgICAgICAgc2V0U2VhcmNoQ291bnQocmVzdWx0cy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgICAgIGxhdDogMzcuMjg4OTIyMjczMjY5NTcsXHJcbiAgICAgICAgICAgIGxuZzogMTI3LjA1MzYzNDgxMTAyNDY1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyTXNnOiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIEdlb0xvY2F0aW9u7J2EIOydtOyaqe2VtOyEnCDsoJHsho0g7JyE7LmY66W8IOyWu+yWtOyYteuLiOuLpFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIC8vIOychOuPhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCAvLyDqsr3rj4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIVE1MNeydmCBHZW9Mb2NhdGlvbuydhCDsgqzsmqntlaAg7IiYIOyXhuydhOuVjCDrp4jsu6Qg7ZGc7IucIOychOy5mOyZgCDsnbjtj6zsnIjrj4TsmrAg64K07Jqp7J2EIOyEpOygle2VqeuLiOuLpFxyXG4gICAgICAgICAgICBzZXRTdGF0ZSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6IFwiZ2VvbG9jYXRpb27snYQg7IKs7Jqp7ZWg7IiYIOyXhuyWtOyalC4uXCIsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZC1mbGV4IG10LTQgbWItNCBpbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICA8cD7stJ0ge3NlYXJjaENvdW50feqxtDwvcD5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5GQUNMVF9OTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uRkFDTFRfTk19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbGNudD17PEFpVHdvdG9uZUhlYXJ0IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlPXtpdGVtLlJFRklORV9ST0FETk1fQUREUn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiYmctc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBsYWNlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGdTaG93KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gcGFyc2VGbG9hdChpdGVtLlJFRklORV9XR1M4NF9MQVQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG5nID0gcGFyc2VGbG9hdChpdGVtLlJFRklORV9XR1M4NF9MT0dUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgY29sLTYgbXMtNFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRTaWd1bn0gb25DaGFuZ2U9e2hhbmRsZVNpZ3VuQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuyLnOq1sDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQVBJ7JeQ7IScIOu2iOufrOyYpOuKlCDrjbDsnbTthLDspJEg7Iuc6rWwIOuNsOydtO2EsOuhnCDsg4jroZzsmrQg67Cw7Je07J2EIOyDneyEse2VmOuQmCDspJHrs7XsnYQg7KCc6rGw7ZWoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLm5ldyBTZXQoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLlNJR1VOX05NKSldLm1hcCgoc2lndW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzaWd1bn0gdmFsdWU9e3NpZ3VufT57c2lndW59PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybVNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTaWd1biA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3QgdmFsdWU9e3NlbGVjdGVkRmFjaWxpdHl9IG9uQ2hhbmdlPXtoYW5kbGVGYWNpbGl0eUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+7Iuc7ISk6rWs67aE66qFPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmFjaWxpdHlPcHRpb25zKHNlbGVjdGVkU2lndW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3QgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7si5zshKTqtazrtoTrqoU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065SU7IScIOyatOuPme2VoOq5jOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaFRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEJ1dHRvbkNsaWNrfT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxNYXAgY2VudGVyPXtzdGF0ZS5jZW50ZXJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjgwMHB4XCIgfX0gIGxldmVsPXszfT5cclxuICAgICAgICAgICAgICAgIHsoIXN0YXRlLmlzTG9hZGluZyA/IHNlYXJjaFJlc3VsdHMgOiBbXSkubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uRkFDTFRfTk19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogaXRlbS5SRUZJTkVfV0dTODRfTEFULCBsbmc6IGl0ZW0uUkVGSU5FX1dHUzg0X0xPR1QgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQbGFjZShpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExnU2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYCR7bWFwaWNvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZToge3dpZHRoOiAzMCwgaGVpZ2h0OiAzMCx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDoge3g6IDI3LCB5OiA2OSx9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UGxhY2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgIGxnU2hvdz17bGdTaG93fVxyXG4gICAgICAgICAgICAgICAgc2V0TGdTaG93PXtzZXRMZ1Nob3d9XHJcbiAgICAgICAgICAgICAgICBzY29yZT17M31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3RlZFBsYWNlID8gc2VsZWN0ZWRQbGFjZS5GQUNMVF9OTSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBhZGRyPXtzZWxlY3RlZFBsYWNlID8gc2VsZWN0ZWRQbGFjZS5SRUZJTkVfUk9BRE5NX0FERFIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgY29udGFjdD17c2VsZWN0ZWRQbGFjZSA/IHNlbGVjdGVkUGxhY2UuQ09OVENUX05PIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIGRlcz17ZGVzfVxyXG4gICAgICAgICAgICAgICAgaW1nPXtpbWd9XHJcbiAgICAgICAgICAgICAgICBsYXQ9e3NlbGVjdGVkUGxhY2UgPyBzZWxlY3RlZFBsYWNlLlJFRklORV9XR1M4NF9MQVQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgbG5nPXtzZWxlY3RlZFBsYWNlID8gc2VsZWN0ZWRQbGFjZS5SRUZJTkVfV0dTODRfTE9HVCA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxNb2RhbCBjbGFzcz1cInNlYXJjaE1vZGFsXCIgc2l6ZT1cInNtXCIgbGdTaG93PXtzaG93fSBzZXRMZ1Nob3c9e3NldFNob3d9IGNoaWxkcmVuPVwi7ZW064u57ZWY64qUIOyLnOyEpOydtCDsl4bsirXri4jri6QuXCIvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5nZXRMYXlvdXQoSW5kZXgse3RpdGxlOifso7zrs4Dsl5DshJwg7Jq064+Z7ZW07JqUISBXQUtBVVQhJyxkZXNjcmlwdGlvbjon7Iug6rCc64WQIOyatOuPmSDtlIzrnqvtj7wg7JuM7YGs7JWE7JuDISd9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9