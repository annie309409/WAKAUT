module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/board/boardview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/layouts/footer.js":
/*!**************************************!*\
  !*** ./components/layouts/footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\layouts\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "bg-light pt-4 pb-4 mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "WAKAUT")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "\uD648\uD398\uC774\uC9C0 \uC6B4\uC601 \uBB38\uC758: Tel : 1811-1111 (\uD3C9\uC77C 09:30~ 17:30) E-mail : honggil@naver.com"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "(\uC8FC)\uAD6C\uB514\uAC70\uBD81\uC774 : 04524 \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC911\uAD6C \uC138\uC885\uB300\uB85C 110 "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Copyright 2014 GudiTurtle. All Rights Reserved."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layouts/getLayout.js":
/*!*****************************************!*\
  !*** ./components/layouts/getLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./components/layouts/layout.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\layouts\\getLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function getLayout(fnName, {
  title,
  description
}) {
  fnName.getLayout = page => __jsx(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meta: {
      title,
      description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, page);
}

/***/ }),

/***/ "./components/layouts/header.js":
/*!**************************************!*\
  !*** ./components/layouts/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\layouts\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = props => {
  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "light",
    expand: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    className: "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 39
    }
  }, "WAKAUT")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "me-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.menu.map((e, i) => {
    return __jsx("div", {
      className: "ms-2 menus",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 40
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: props.route[i],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 76
      }
    }, e));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "d-flex col-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    placeholder: "\uC6B4\uB3D9\uD558\uB294\uACF3\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694!",
    "aria-label": "findlocation",
    "aria-describedby": "basic-addon1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ms-2 col-5",
    variant: "outline-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Search Place"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layouts/layout.js":
/*!**************************************!*\
  !*** ./components/layouts/layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/layouts/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/layouts/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ "./components/loading.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\layouts\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = ({
  children,
  meta
}) => {
  const {
    title,
    description,
    icon
  } = meta;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(false);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://www.google.com/recaptcha/api.js",
    async: true,
    defer: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: icon || "%PUBLIC_URL%/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=69823228c875a5a95558c4f4b78b0ae9&libraries=services,clusterer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://developers.kakao.com/sdk/js/kakao.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
    crossorigin: "anonymous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, title)), __jsx("div", {
    className: "hdrWrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    menu: ['mypage', 'community', 'login/signin', 'join', 'manager'],
    route: ['/member/mypage', '/board/boardlist', '/member/login', '/member/join', '/admin/manager'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "cntWrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: "frtWrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ci */ "react-icons/ci");
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ci__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const List = props => {
  return __jsx("div", {
    className: "shadow mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "article d-flex p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "left d-flex col-10",
    onClick: props.textClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.img ? __jsx("div", {
    className: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 36
    }
  }) : false, __jsx("div", {
    className: "texts ms-2 col-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, props.title), __jsx("p", {
    className: "ell mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }, props.note), props.time ? __jsx("p", {
    className: "mt-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 44
    }
  }, " ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    bg: props.kd == 'review' ? 'warning' : 'success',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 70
    }
  }, props.kd), " ", __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsPersonCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 142
    }
  }), " ", props.name, " ", __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_1__["CiAlarmOn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 174
    }
  }), " ", props.time, " ", __jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_1__["CiRead"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 201
    }
  }), " ", props.view, " ") : false, props.to ? __jsx("a", {
    href: props.to,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 41
    }
  }) : false)), props.malcnt ? __jsx("div", {
    className: `mal ${props.col} ms-auto`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, props.malcnt) : false));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\loading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Loading(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__["HashLoader"], {
    size: "80px",
    color: "#A9DEFF",
    loading: props.loading,
    cssOverride: {
      position: "absolute",
      margin: "auto",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 555
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/mgmodal.js":
/*!*******************************!*\
  !*** ./components/mgmodal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\mgmodal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Mgmodal = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    show: props.LgShow,
    onHide: () => props.setLgShow(false),
    backdrop: "static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.title)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, props.msg)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Footer, {
    className: "stopmodal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "secondary",
    onClick: () => props.setLgShow(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "\uC544\uB2C8\uC694"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    onClick: () => props.setLgShow(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "\uB124")));
};

/* harmony default export */ __webpack_exports__["default"] = (Mgmodal);

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ModalDetail = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: "lg",
    show: props.lgShow,
    onHide: () => props.setLgShow(false),
    "aria-labelledby": "example-modal-sizes-title-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "example-modal-sizes-title-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, props.title)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    className: props.class,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalDetail);

/***/ }),

/***/ "./components/selection.js":
/*!*********************************!*\
  !*** ./components/selection.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\components\\selection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Selection = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    "aria-label": "Default select example",
    style: {
      maxWidth: '200px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.title), props.cat.map(m => {
    return __jsx("option", {
      value: m,
      key: m,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 20
      }
    }, m);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/board/boardview.js":
/*!**********************************!*\
  !*** ./pages/board/boardview.js ***!
  \**********************************/
/*! exports provided: getServerSideProps, write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/list */ "./components/list.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _write_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./write_modal */ "./pages/board/write_modal.js");
/* harmony import */ var _components_mgmodal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/mgmodal */ "./components/mgmodal.js");
/* harmony import */ var _components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layouts/getLayout */ "./components/layouts/getLayout.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feutils */ "./pages/feutils.js");
/* harmony import */ var _feutils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_feutils__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\board\\boardview.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








let title = '';
let contents = ''; //데이터 끌고오기!

async function getServerSideProps(ctx) {
  let boards = await Object(_feutils__WEBPACK_IMPORTED_MODULE_7__["Datas"])(`/board/boardview?bid=${ctx.query.bid}`);
  return {
    props: {
      boards
    }
  };
} //데이터 등록하기

async function write(e, {
  bid,
  userid,
  comment
}) {
  e.preventDefault();
  console.log(bid, userid, comment);
  Object(_feutils__WEBPACK_IMPORTED_MODULE_7__["Post"])({
    bid: bid,
    userid: userid,
    comment: comment
  }, '/board/repwrite');
  location.href = `http://localhost:3000/board/boardview?bid=${bid}`;
}

const Boardview = ({
  boards
}) => {
  const {
    0: lgShow,
    1: setLgShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mgShow,
    1: setMgShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: reply,
    1: setReply
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let bd = boards[0];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "brdview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "bg-secondary pt-5 pb-4 brdview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: bd.title,
    kd: bd.category,
    time: bd.regdate2,
    view: bd.views + 1,
    name: bd.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "viewnote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, bd.content), __jsx("div", {
    className: "replay p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, bd.com.map((m, idx) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "txtLft d-flex",
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 34
      }
    }, __jsx("h5", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, m.name), __jsx("p", {
      className: "ms-5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    }, m.comment, " ", __jsx("small", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 69
      }
    }, m.regdate2))));
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "reTxt d-flex align-items-end mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "textarea",
    placeholder: "\uB313\uAE00\uC740 \uD55C\uBC88 \uB2EC\uBA74 \uC0AD\uC81C\uAC00 \uBD88\uAC00\uB2A5\uD558\uB2F5\uB2C8\uB2F9 \uD83D\uDC6E\u200D\u2642\uFE0F\uD83D\uDC6E\u200D\u2640\uFE0F ",
    style: {
      height: '80px',
      width: '90%'
    },
    onChange: e => {
      Object(_feutils__WEBPACK_IMPORTED_MODULE_7__["handleInput"])(setReply, e);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "btn btn-success ms-3",
    type: "submit",
    onClick: e => {
      write(e, {
        bid: bd.bid,
        userid: 2,
        comment: reply
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "\uB313\uAE00 \uB4F1\uB85D")))), __jsx("div", {
    className: "btns mt-4 mb-4 d-flex  justify-content-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ms-2",
    variant: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/board/boardlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 64
    }
  }, "\uBAA9\uB85D\uC73C\uB85C")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ms-2",
    variant: "success",
    onClick: () => {
      setLgShow(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "\uC218\uC815\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ms-2",
    variant: "secondary",
    onClick: () => {
      setMgShow(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ms-2",
    variant: "danger",
    onClick: () => {
      setMgShow(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "\uAC15\uC81C\uC0AD\uC81C")), __jsx(_components_mgmodal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    LgShow: mgShow,
    setLgShow: setMgShow,
    title: "\uAC8C\uC2DC\uAE00 \uC0AD\uC81C",
    msg: "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(_write_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: boards[0].title,
    note: boards[0].content,
    setLgShow: setLgShow,
    lgShow: lgShow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 16
    }
  })));
};

Object(_components_layouts_getLayout__WEBPACK_IMPORTED_MODULE_6__["default"])(Boardview, {
  title: title,
  description: contents
});
/* harmony default export */ __webpack_exports__["default"] = (Boardview);

/***/ }),

/***/ "./pages/board/write_modal.js":
/*!************************************!*\
  !*** ./pages/board/write_modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal */ "./components/modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selection */ "./components/selection.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\\uD559\uC5B8\\WAKAUT\\next\\pages\\board\\write_modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WriteModal = props => {
  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    type: "text",
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
    value: props.title ? props.title : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2 mb-2",
    type: "text",
    value: "\uAD6C\uB514\uAC70\uBD81\uC774",
    readOnly: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  })), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    as: "textarea",
    placeholder: "Leave a comment here",
    style: {
      height: '250px'
    },
    value: props.note ? props.note : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    type: "file",
    multiple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "btns d-flex justify-content-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "reset",
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "\uB2E4\uC2DC\uC4F0\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "success",
    className: "ms-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.title ? '수정하기' : '글 올리기'))));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteModal);

/***/ }),

/***/ "./pages/feutils.js":
/*!**************************!*\
  !*** ./pages/feutils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fixedUrl = 'http://localhost:3000/api';

async function Datas(loc) {
  let url = `${fixedUrl}${loc}`;
  const res = await _axios.default.get(url);
  const datas = await res.data;
  return datas;
}

const Post = async (data, url) => {
  const cnt = fetch(`${fixedUrl}${url}`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return await cnt;
};

const handleInput = (setInput, e) => {
  setInput(e.target.value);
};

module.exports = {
  Datas,
  Post,
  handleInput
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/ci":
/*!*********************************!*\
  !*** external "react-icons/ci" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ci");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZ21vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ib2FyZC9ib2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYm9hcmQvd3JpdGVfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmV1dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9jaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3Bpbm5lcnNcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJnZXRMYXlvdXQiLCJmbk5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFnZSIsIkhlYWRlciIsInByb3BzIiwibWVudSIsIm1hcCIsImUiLCJpIiwicm91dGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1ldGEiLCJpY29uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpc3QiLCJ0ZXh0Q2xpY2siLCJpbWciLCJub3RlIiwidGltZSIsImtkIiwibmFtZSIsInZpZXciLCJ0byIsIm1hbGNudCIsImNvbCIsIkxvYWRpbmciLCJwb3NpdGlvbiIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsIk1nbW9kYWwiLCJMZ1Nob3ciLCJzZXRMZ1Nob3ciLCJtc2ciLCJNb2RhbERldGFpbCIsImxnU2hvdyIsImNsYXNzIiwiU2VsZWN0aW9uIiwibWF4V2lkdGgiLCJjYXQiLCJtIiwicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSG9zdG5hbWUiLCJpdGVtIiwiaG9zdG5hbWUiLCJkb21haW5JdGVtIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwicmVxdWlyZSIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJkb21haW4iLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsImFkZFBhdGhQcmVmaXgiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJkZWxCYXNlUGF0aCIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFkZExvY2FsZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29udGVudHMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJib2FyZHMiLCJEYXRhcyIsImJpZCIsIndyaXRlIiwidXNlcmlkIiwiY29tbWVudCIsInByZXZlbnREZWZhdWx0IiwibG9nIiwiUG9zdCIsImxvY2F0aW9uIiwiQm9hcmR2aWV3IiwibWdTaG93Iiwic2V0TWdTaG93IiwicmVwbHkiLCJzZXRSZXBseSIsImJkIiwiY2F0ZWdvcnkiLCJyZWdkYXRlMiIsInZpZXdzIiwiY29tIiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVJbnB1dCIsIldyaXRlTW9kYWwiLCJmaXhlZFVybCIsImxvYyIsImF4aW9zIiwiZGF0YXMiLCJjbnQiLCJtb2RlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsImpzb24iLCJzZXRJbnB1dCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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LFdBQVcsR0FBRyxDQUFDYyxRQUFELEVBQVduYyxDQUFYLEtBQWlCO0FBQ2pDbWMsVUFBUSxDQUFDbmMsQ0FBQyxDQUFDZ0QsTUFBRixDQUFTbUUsS0FBVixDQUFSO0FBQ0gsQ0FGRDs7QUFJQWlWLE1BQU0sQ0FBQzVTLE9BQVAsR0FBaUI7QUFBQ3dRLE9BQUQ7QUFBT08sTUFBUDtBQUFZYztBQUFaLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDcEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2JvYXJkL2JvYXJkdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYm9hcmQvYm9hcmR2aWV3LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCB7Q29udGFpbmVyLFJvd30gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgRm9vdGVyID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctbGlnaHQgcHQtNCBwYi00IG10LTVcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8aDE+V0FLQVVUPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPu2ZiO2OmOydtOyngCDsmrTsmIEg66y47J2YOiBUZWwgOiAxODExLTExMTEgKO2PieydvCAwOTozMH4gMTc6MzApIEUtbWFpbCA6IGhvbmdnaWxAbmF2ZXIuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPijso7wp6rWs65SU6rGw67aB7J20IDogMDQ1MjQg7ISc7Jq47Yq567OE7IucIOykkeq1rCDshLjsooXrjIDroZwgMTEwIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgMjAxNCBHdWRpVHVydGxlLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvUm93PiAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0KGZuTmFtZSx7dGl0bGUsZGVzY3JpcHRpb259KXtcclxuICAgIGZuTmFtZS5nZXRMYXlvdXQgPSAocGFnZSk9PihcclxuICAgICAgICA8TGF5b3V0IG1ldGE9e3t0aXRsZSxkZXNjcmlwdGlvbn19PlxyXG4gICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7Rm9ybSxOYXZiYXIsQ29udGFpbmVyLEJ1dHRvbixOYXZ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPldBS0FVVDwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWVudS5tYXAoKGUsaSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21zLTIgbWVudXMnIGtleT17aX0+PExpbmsgaHJlZj17cHJvcHMucm91dGVbaV19PntlfTwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcGxhY2Vob2xkZXI9XCLsmrTrj5ntlZjripTqs7PsnYQg6rKA7IOJ7ZW067O07IS47JqUIVwiIGFyaWEtbGFiZWw9XCJmaW5kbG9jYXRpb25cIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J21zLTIgY29sLTUnIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5TZWFyY2ggUGxhY2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbG9hZGluZyc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSh7Y2hpbGRyZW4sbWV0YX0pPT57XHJcbiAgY29uc3Qge3RpdGxlLGRlc2NyaXB0aW9uLGljb259PW1ldGE7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9KVxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIi8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzXCIgYXN5bmMgZGVmZXI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtpY29uIHx8IFwiJVBVQkxJQ19VUkwlL2Zhdmljb24uaWNvXCJ9IC8+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXBwa2V5PTY5ODIzMjI4Yzg3NWE1YTk1NTU4YzRmNGI3OGIwYWU5JmxpYnJhcmllcz1zZXJ2aWNlcyxjbHVzdGVyZXJcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tL3Nkay9qcy9rYWthby5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjIuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1yYnNBMlZCS1FoZ2d3enhIN3BQQ2FBcU80Nk1nbk9NODB6VzFSV3VINjFER0x3WkpFZEsyS2FkcTJGOUNVRzY1XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGRyV3JhcCc+XHJcbiAgICAgICAgPEhlYWRlciBtZW51PXtbJ215cGFnZScsJ2NvbW11bml0eScsJ2xvZ2luL3NpZ25pbicsICdqb2luJywnbWFuYWdlciddfSByb3V0ZT17WycvbWVtYmVyL215cGFnZScsJy9ib2FyZC9ib2FyZGxpc3QnLCcvbWVtYmVyL2xvZ2luJywgJy9tZW1iZXIvam9pbicsJy9hZG1pbi9tYW5hZ2VyJ119Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbnRXcmFwXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJ0V3JhcCc+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG59ICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgeyBDaUFsYXJtT24sQ2lSZWFkIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcbmltcG9ydCB7IEJzUGVyc29uQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7QmFkZ2V9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBMaXN0ID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlIGQtZmxleCBwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBkLWZsZXggY29sLTEwXCIgb25DbGljaz17cHJvcHMudGV4dENsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmltZyk/ICg8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+PC9kaXY+KTpmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRzIG1zLTIgY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVsbCBtYi0wXCI+e3Byb3BzLm5vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy50aW1lKT8gPHAgY2xhc3NOYW1lPVwibXQtMiBtYi0wXCI+IDxCYWRnZSBiZz17KHByb3BzLmtkPT0ncmV2aWV3Jyk/J3dhcm5pbmcnOidzdWNjZXNzJ30+e3Byb3BzLmtkfTwvQmFkZ2U+IDxCc1BlcnNvbkNpcmNsZSAvPiB7cHJvcHMubmFtZX0gPENpQWxhcm1PbiAvPiB7cHJvcHMudGltZX0gPENpUmVhZCAvPiB7cHJvcHMudmlld30gPC9wPiA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy50byk/PGEgaHJlZj17cHJvcHMudG99PjwvYT46ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMubWFsY250KT88ZGl2IGNsYXNzTmFtZT17YG1hbCAke3Byb3BzLmNvbH0gbXMtYXV0b2B9Pntwcm9wcy5tYWxjbnR9PC9kaXY+IDogZmFsc2V9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBIYXNoTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyhwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8SGFzaExvYWRlciBzaXplPSc4MHB4JyBjb2xvcj1cIiNBOURFRkZcIiBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nfSBjc3NPdmVycmlkZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIG1hcmdpbjpcImF1dG9cIiwgdG9wOjAsbGVmdDowLCByaWdodDowLCBib3R0b206MCx6SW5kZXg6NTU1fX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNZ21vZGFsPShwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgc2hvdz17cHJvcHMuTGdTaG93fSAgb25IaWRlPXsoKT0+IHByb3BzLnNldExnU2hvdyhmYWxzZSl9ICBiYWNrZHJvcD1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPntwcm9wcy50aXRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvcHMubXNnfTwvcD5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyIGNsYXNzTmFtZT1cInN0b3Btb2RhbFwiID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpPT4gcHJvcHMuc2V0TGdTaG93KGZhbHNlKX0+7JWE64uI7JqUPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCk9PiBwcm9wcy5zZXRMZ1Nob3coZmFsc2UpfT7rhKQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWdtb2RhbDsiLCJpbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgTW9kYWxEZXRhaWw9KHByb3BzKT0+eyAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TW9kYWwgc2l6ZT1cImxnXCIgc2hvdz17cHJvcHMubGdTaG93fSBvbkhpZGU9eygpID0+IHByb3BzLnNldExnU2hvdyhmYWxzZSl9IGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtbW9kYWwtc2l6ZXMtdGl0bGUtbGdcIj5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiZXhhbXBsZS1tb2RhbC1zaXplcy10aXRsZS1sZ1wiPntwcm9wcy50aXRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT17cHJvcHMuY2xhc3N9PlxyXG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsRGV0YWlsOyIsImltcG9ydCB7Rm9ybX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgU2VsZWN0aW9uPShwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIiBzdHlsZT17e21heFdpZHRoOicyMDBweCd9fT5cclxuICAgICAgICA8b3B0aW9uPntwcm9wcy50aXRsZX08L29wdGlvbj5cclxuICAgICAgICB7cHJvcHMuY2F0Lm1hcChtPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXttfSBrZXk9e219PnttfTwvb3B0aW9uPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Gb3JtLlNlbGVjdD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb24iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICBkb21haW5JdGVtczpcbiAgICB8IEFycmF5PHtcbiAgICAgICAgaHR0cD86IGJvb2xlYW5cbiAgICAgICAgZG9tYWluOiBzdHJpbmdcbiAgICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICAgIGRlZmF1bHRMb2NhbGU6IHN0cmluZ1xuICAgICAgfT5cbiAgICB8IHVuZGVmaW5lZCxcbiAgaG9zdG5hbWU/OiBzdHJpbmcsXG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgbGV0IGRvbWFpbkl0ZW06XG4gICAgfCB7XG4gICAgICAgIGh0dHA/OiBib29sZWFuXG4gICAgICAgIGRvbWFpbjogc3RyaW5nXG4gICAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgICBkZWZhdWx0TG9jYWxlOiBzdHJpbmdcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZFxuXG4gIGlmIChkb21haW5JdGVtcykge1xuICAgIGlmIChkZXRlY3RlZExvY2FsZSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBkZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKSB7XG4gICAgICAvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG4gICAgICBjb25zdCBkb21haW5Ib3N0bmFtZSA9IGl0ZW0uZG9tYWluPy5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChcbiAgICAgICAgaG9zdG5hbWUgPT09IGRvbWFpbkhvc3RuYW1lIHx8XG4gICAgICAgIGRldGVjdGVkTG9jYWxlID09PSBpdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLmxvY2FsZXM/LnNvbWUoKGxvY2FsZSkgPT4gbG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IGRldGVjdGVkTG9jYWxlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbWFpbkl0ZW0gPSBpdGVtXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvbWFpbkl0ZW1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB7IENvbnRhaW5lcixGb3JtLEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyaXRlTW9kYWwgZnJvbSBcIi4vd3JpdGVfbW9kYWxcIjtcclxuaW1wb3J0IE1nbW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWdtb2RhbFwiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9nZXRMYXlvdXQnO1xyXG5pbXBvcnQge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IGZyb20gJy4uL2ZldXRpbHMnO1xyXG5sZXQgdGl0bGU9Jyc7XHJcbmxldCBjb250ZW50cyA9Jyc7XHJcblxyXG5cclxuLy/rjbDsnbTthLAg64GM6rOg7Jik6riwIVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBsZXQgYm9hcmRzID0gYXdhaXQgRGF0YXMoYC9ib2FyZC9ib2FyZHZpZXc/YmlkPSR7Y3R4LnF1ZXJ5LmJpZH1gKTtcclxuICAgIHJldHVybntwcm9wczp7Ym9hcmRzfX07XHJcbn1cclxuXHJcbi8v642w7J207YSwIOuTseuhne2VmOq4sFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGUoZSx7YmlkLHVzZXJpZCxjb21tZW50fSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhiaWQsdXNlcmlkLGNvbW1lbnQpO1xyXG4gICAgUG9zdCh7YmlkOmJpZCx1c2VyaWQ6dXNlcmlkLGNvbW1lbnQ6Y29tbWVudH0sJy9ib2FyZC9yZXB3cml0ZScpO1xyXG4gICAgbG9jYXRpb24uaHJlZj1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2JvYXJkL2JvYXJkdmlldz9iaWQ9JHtiaWR9YDtcclxufVxyXG5cclxuY29uc3QgQm9hcmR2aWV3PSh7Ym9hcmRzfSk9PntcclxuICAgIGNvbnN0IFtsZ1Nob3csIHNldExnU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWdTaG93LCBzZXRNZ1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgbGV0IGJkID0gYm9hcmRzWzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmR2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBwdC01IHBiLTQgYnJkdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHRpdGxlPXtiZC50aXRsZX0ga2Q9e2JkLmNhdGVnb3J5fSB0aW1lPXtiZC5yZWdkYXRlMn0gdmlldz17YmQudmlld3MrMX0gbmFtZT17YmQubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZXdub3RlXCI+e2JkLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBsYXkgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZC5jb20ubWFwKChtLGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dExmdCBkLWZsZXhcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1zLTVcIj57bS5jb21tZW50fSA8c21hbGw+e20ucmVnZGF0ZTJ9PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZVR4dCBkLWZsZXggYWxpZ24taXRlbXMtZW5kIG10LTRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwi64yT6riA7J2AIO2VnOuyiCDri6zrqbQg7IKt7KCc6rCAIOu2iOqwgOuKpe2VmOuLteuLiOuLuSDwn5Gu4oCN4pmC77iP8J+RruKAjeKZgO+4jyBcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MHB4JyAsd2lkdGg6JzkwJScgfX0gb25DaGFuZ2U9eyhlKT0+e2hhbmRsZUlucHV0KHNldFJlcGx5LGUpfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXMtM1wiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSk9Pnsgd3JpdGUoZSx7YmlkOmJkLmJpZCx1c2VyaWQ6Mixjb21tZW50OnJlcGx5fSl9fT7rjJPquIAg65Ox66GdPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRucyBtdC00IG1iLTQgZC1mbGV4ICBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtcy0yXCIgdmFyaWFudD1cInByaW1hcnlcIj48TGluayBocmVmPVwiL2JvYXJkL2JvYXJkbGlzdFwiPuuqqeuhneycvOuhnDwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwic3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT57c2V0TGdTaG93KHRydWUpfX0+7IiY7KCV7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtcy0yXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpPT57c2V0TWdTaG93KHRydWUpfX0+7IKt7KCc7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtcy0yXCIgdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpPT57c2V0TWdTaG93KHRydWUpfX0+6rCV7KCc7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZ21vZGFsIExnU2hvdz17bWdTaG93fSBzZXRMZ1Nob3c9e3NldE1nU2hvd30gdGl0bGU9XCLqsozsi5zquIAg7IKt7KCcXCIgbXNnPVwi7KCV66eQIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIi8+XHJcbiAgICAgICAgICAgICAgIDxXcml0ZU1vZGFsIHRpdGxlPXtib2FyZHNbMF0udGl0bGV9IG5vdGU9e2JvYXJkc1swXS5jb250ZW50fSBzZXRMZ1Nob3c9e3NldExnU2hvd30gbGdTaG93PXtsZ1Nob3d9Lz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiAgICBnZXRMYXlvdXQoQm9hcmR2aWV3LHt0aXRsZTp0aXRsZSxkZXNjcmlwdGlvbjpjb250ZW50c30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmR2aWV3O1xyXG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCc7XHJcbmltcG9ydCB7Rm9ybSxGbG9hdGluZ0xhYmVsLEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJzsgXHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3Rpb24nO1xyXG5cclxuY29uc3QgV3JpdGVNb2RhbD0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vZGFsIGxnU2hvdz17cHJvcHMubGdTaG93fSBzZXRMZ1Nob3c9e3Byb3BzLnNldExnU2hvd30+XHJcbiAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRpdGxlXCIgbGFiZWw9XCLsoJzrqqlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT0nbXQtMicgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIiB2YWx1ZT17KHByb3BzLnRpdGxlKT9wcm9wcy50aXRsZTonJ30gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cIndyaXRlclwiIGxhYmVsPVwi7J6R7ISx7J6QXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCAgY2xhc3NOYW1lPSdtdC0yIG1iLTInIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCLqtazrlJTqsbDrtoHsnbRcIiByZWFkT25seS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0aW9uIHRpdGxlPVwi66eQ66i466as66W8IOyEoO2Dne2VmOyEuOyalFwiIGNhdD17Wydjb21tdW5pdHknLCdyZXZpZXcnXX0gLz5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0xhYmVsIGNvbnRyb2xJZD1cInRleHRhcmVhXCIgbGFiZWw9XCLsg4HrjIDrpbwg67Cw66Ck7ZW07KO87IS47JqUIVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPSdtdC0yJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVhdmUgYSBjb21tZW50IGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsocHJvcHMubm90ZSk/cHJvcHMubm90ZTonJ30vPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUZpbGVNdWx0aXBsZVwiIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sICBjbGFzc05hbWU9J210LTInIHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj7ri6Tsi5zsk7DquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzTmFtZT0nbXMtMic+eyhwcm9wcy50aXRsZSk/J+yImOygle2VmOq4sCc6J+q4gCDsmKzrpqzquLAnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlTW9kYWw7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZpeGVkVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknOyBcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERhdGFzKGxvYyl7XHJcbiAgICBsZXQgdXJsID0gYCR7Zml4ZWRVcmx9JHtsb2N9YDtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YXMgPSBhd2FpdCByZXMuZGF0YTtcclxuICAgIHJldHVybiBkYXRhcztcclxufVxyXG5cclxuY29uc3QgUG9zdCA9IGFzeW5jIChkYXRhLHVybCkgPT4ge1xyXG4gICAgY29uc3QgY250ID0gZmV0Y2goYCR7Zml4ZWRVcmx9JHt1cmx9YCx7IG1ldGhvZDogJ1BPU1QnLCBtb2RlOiAnY29ycycsIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICB9KS50aGVuKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICByZXR1cm4gYXdhaXQgY250O1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlSW5wdXQgPSAoc2V0SW5wdXQsIGUpID0+IHtcclxuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge0RhdGFzLFBvc3QsaGFuZGxlSW5wdXR9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9jaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcGlubmVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9