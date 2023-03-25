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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/main.js":
/*!***************************!*\
  !*** ./pages/api/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-xml-parser */ "fast-xml-parser");
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  // console.log("검색한 단어 : ", req.query);
  const URL = " https://openapi.gg.go.kr/PubPhstFtM";
  const params = {
    KEY: "59c361f5fb304a649662ff8ec90e184f",
    Type: "xml",
    pIndex: 1,
    // pSize를 1000으로 설정하고 pIndex를 2로 설정하면 1001~2000까지의 데이터를 가져옴
    pSize: 1000 // 데이터 요청은 한번에 최대 1000건

  };
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78"
  };
  const xml = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(URL, {
    params: params,
    headers: headers
  }); // XML 을 JSON 으로 변환

  const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__["XMLParser"]();
  let json = parser.parse(xml.data);
  let items = json["PubPhstFtM"]["row"];

  if (req.query.srch) {
    items = items.filter(f => f.FACLT_NM.indexOf(req.query.srch.trim()) !== -1);
  }

  if (req.query.lists) {
    items = items.map(m => m.FACLT_NM);
  }

  res.status(200).json(items);
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-xml-parser");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0LXhtbC1wYXJzZXJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJVUkwiLCJwYXJhbXMiLCJLRVkiLCJUeXBlIiwicEluZGV4IiwicFNpemUiLCJoZWFkZXJzIiwieG1sIiwiYXhpb3MiLCJnZXQiLCJwYXJzZXIiLCJYTUxQYXJzZXIiLCJqc29uIiwicGFyc2UiLCJkYXRhIiwiaXRlbXMiLCJxdWVyeSIsInNyY2giLCJmaWx0ZXIiLCJmIiwiRkFDTFRfTk0iLCJpbmRleE9mIiwidHJpbSIsImxpc3RzIiwibWFwIiwibSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHNFQUFNQSxHQUFOLEVBQVVDLEdBQVYsS0FBZ0I7QUFDM0I7QUFDQSxRQUFNQyxHQUFHLEdBQUUsc0NBQVg7QUFDQSxRQUFNQyxNQUFNLEdBQUc7QUFDWEMsT0FBRyxFQUFFLGtDQURNO0FBRVhDLFFBQUksRUFBRSxLQUZLO0FBR1hDLFVBQU0sRUFBRSxDQUhHO0FBR0M7QUFDWkMsU0FBSyxFQUFFLElBSkksQ0FJRTs7QUFKRixHQUFmO0FBTUEsUUFBTUMsT0FBTyxHQUFHO0FBQ1osa0JBQ0k7QUFGUSxHQUFoQjtBQUtBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVULEdBQVYsRUFBZTtBQUM3QkMsVUFBTSxFQUFFQSxNQURxQjtBQUU3QkssV0FBTyxFQUFFQTtBQUZvQixHQUFmLENBQWxCLENBZDJCLENBbUIzQjs7QUFDQSxRQUFNSSxNQUFNLEdBQUcsSUFBSUMseURBQUosRUFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFOLEdBQUcsQ0FBQ08sSUFBakIsQ0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBR0gsSUFBSSxDQUFDLFlBQUQsQ0FBSixDQUFtQixLQUFuQixDQUFaOztBQUVBLE1BQUdkLEdBQUcsQ0FBQ2tCLEtBQUosQ0FBVUMsSUFBYixFQUFrQjtBQUNkRixTQUFLLEdBQUdBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxDQUFDLElBQ2xCQSxDQUFDLENBQUNDLFFBQUYsQ0FBV0MsT0FBWCxDQUFtQnZCLEdBQUcsQ0FBQ2tCLEtBQUosQ0FBVUMsSUFBVixDQUFlSyxJQUFmLEVBQW5CLE1BQTRDLENBQUMsQ0FEekMsQ0FBUjtBQUdIOztBQUVELE1BQUd4QixHQUFHLENBQUNrQixLQUFKLENBQVVPLEtBQWIsRUFBbUI7QUFDZlIsU0FBSyxHQUFHQSxLQUFLLENBQUNTLEdBQU4sQ0FBVUMsQ0FBQyxJQUFHQSxDQUFDLENBQUNMLFFBQWhCLENBQVI7QUFDSDs7QUFFRHJCLEtBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCZCxJQUFoQixDQUFxQkcsS0FBckI7QUFDSCxDQW5DRCxFOzs7Ozs7Ozs7OztBQ0hBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL2FwaS9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgWE1MUGFyc2VyIH0gZnJvbSAnZmFzdC14bWwtcGFyc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIuqygOyDie2VnCDri6jslrQgOiBcIiwgcmVxLnF1ZXJ5KTtcclxuICAgIGNvbnN0IFVSTCA9XCIgaHR0cHM6Ly9vcGVuYXBpLmdnLmdvLmtyL1B1YlBoc3RGdE1cIjtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBLRVk6IFwiNTljMzYxZjVmYjMwNGE2NDk2NjJmZjhlYzkwZTE4NGZcIixcclxuICAgICAgICBUeXBlOiBcInhtbFwiLFxyXG4gICAgICAgIHBJbmRleDogMSwgIC8vIHBTaXpl66W8IDEwMDDsnLzroZwg7ISk7KCV7ZWY6rOgIHBJbmRleOulvCAy66GcIOyEpOygle2VmOuptCAxMDAxfjIwMDDquYzsp4DsnZgg642w7J207YSw66W8IOqwgOyguOyYtFxyXG4gICAgICAgIHBTaXplOiAxMDAwLCAvLyDrjbDsnbTthLAg7JqU7LKt7J2AIO2VnOuyiOyXkCDstZzrjIAgMTAwMOqxtFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgXCJVc2VyLUFnZW50XCI6XHJcbiAgICAgICAgICAgIFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMDkuMC4xNTE4Ljc4XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHhtbCA9IGF3YWl0IGF4aW9zLmdldChVUkwsIHtcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gWE1MIOydhCBKU09OIOycvOuhnCDrs4DtmZhcclxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoKTtcclxuICAgIGxldCBqc29uID0gcGFyc2VyLnBhcnNlKHhtbC5kYXRhKTtcclxuICAgIGxldCBpdGVtcyA9IGpzb25bXCJQdWJQaHN0RnRNXCJdW1wicm93XCJdO1xyXG5cclxuICAgIGlmKHJlcS5xdWVyeS5zcmNoKXtcclxuICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcihmPT5cclxuICAgICAgICAgICAgZi5GQUNMVF9OTS5pbmRleE9mKHJlcS5xdWVyeS5zcmNoLnRyaW0oKSkhPT0tMVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZihyZXEucXVlcnkubGlzdHMpe1xyXG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKG09PiBtLkZBQ0xUX05NKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpdGVtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC14bWwtcGFyc2VyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=