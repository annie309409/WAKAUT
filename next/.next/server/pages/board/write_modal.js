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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pn9g");


/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "NzLB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__("zr5I"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fixedUrl = 'http://localhost:3000/api';

async function Datas(loc, param) {
  let url = `${fixedUrl}${loc}`;
  if (param) url = `${fixedUrl}${loc}?${param}`;
  const res = await _axios.default.get(url);
  const datas = await res.data;
  return datas;
}

const Post = async (data, url) => {
  console.log("넘어온데이타는", data);
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

const kakaoInit = () => {
  const kakao = window.Kakao;

  if (!kakao.isInitialized()) {
    kakao.init('69823228c875a5a95558c4f4b78b0ae9');
  }

  return kakao;
};

module.exports = {
  Datas,
  Post,
  handleInput,
  kakaoInit
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pn9g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xgHZ");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("u6tw");
/* harmony import */ var _components_feutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NzLB");
/* harmony import */ var _components_feutils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_feutils__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WriteModal = props => {
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.title);
  const {
    0: note,
    1: setNote
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.note);
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.category);
  const {
    0: facility,
    1: setFacility
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.facility);

  async function write(e, {
    bid,
    title,
    userid,
    content,
    category,
    facility
  }) {
    e.preventDefault();

    if (category == undefined || facility == undefined) {
      alert('카테고리 및 운동장소를 선택해주세요!');
    } else if (title == undefined || content == undefined) {
      alert('제목 및 컨텐츠를 입력해주세요!');
    } else {
      let dt = Object(_components_feutils__WEBPACK_IMPORTED_MODULE_4__["Post"])({
        bid,
        title,
        userid,
        content,
        category,
        facility
      }, '/board/write').then(res => res);
      props.setLgShow(false);
      console.log(await dt);

      if (bid !== undefined && (await dt).cnt === 1) {
        location.href = `http://localhost:3000/board/boardview?bid=${bid}`;
      } else {
        location.href = `http://localhost:3000/board/boardlist`;
      }
    }
  }

  return __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    lgShow: props.lgShow,
    setLgShow: props.setLgShow,
    size: "lg"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "title",
    label: "\uC81C\uBAA9"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    type: "text",
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
    value: title,
    onChange: e => Object(_components_feutils__WEBPACK_IMPORTED_MODULE_4__["handleInput"])(setTitle, e)
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "writer",
    label: "\uC791\uC131\uC790"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2 mb-2",
    type: "text",
    value: props.sename,
    readOnly: true
  })), __jsx("div", {
    className: "d-flex"
  }, __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "\uB9D0\uBA38\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: ['community', 'review'],
    change: setCategory
  }), __jsx(_components_selection__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "\uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    cat: props.atlists,
    change: setFacility
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FloatingLabel"], {
    controlId: "textarea",
    label: "\uC0C1\uB300\uB97C \uBC30\uB824\uD574\uC8FC\uC138\uC694!"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    as: "textarea",
    placeholder: "Leave a comment here",
    style: {
      height: '250px'
    },
    value: note,
    onChange: e => Object(_components_feutils__WEBPACK_IMPORTED_MODULE_4__["handleInput"])(setNote, e)
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formFileMultiple",
    className: "mb-3"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    className: "mt-2",
    type: "file",
    accept: ".gif, .jpg, .png",
    multiple: true
  })), __jsx("div", {
    className: "btns d-flex justify-content-end"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "reset",
    variant: "secondary"
  }, "\uB2E4\uC2DC\uC4F0\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "success",
    className: "ms-2",
    onClick: e => write(e, {
      title: title,
      userid: props.seid,
      content: note,
      category: category,
      facility: facility,
      bid: props.bid
    })
  }, props.title ? '수정하기' : '글 올리기'))));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteModal);

/***/ }),

/***/ "u6tw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Selection = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    "aria-label": "select category",
    style: {
      maxWidth: '200px'
    },
    onChange: e => {
      props.change(e.target.value);
    }
  }, __jsx("option", null, props.title), props.cat.map(m => {
    return __jsx("option", {
      value: m,
      key: m
    }, m);
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Selection);

/***/ }),

/***/ "xgHZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ModalDetail = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: props.size,
    show: props.lgShow,
    onHide: () => props.setLgShow(false),
    "aria-labelledby": "example-modal-sizes-title-lg"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "example-modal-sizes-title-lg"
  }, props.title)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    className: props.class
  }, props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (ModalDetail);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });