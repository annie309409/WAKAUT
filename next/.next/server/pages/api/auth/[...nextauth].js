module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ "next-auth/providers/credentials");
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
// npm install next-auth@3.29.10 --save-dev



/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({
    id: "userid-passwd-credentials",
    name: "userid-passwd-credentials",
    credentials: {
      userid: {
        label: "아이디",
        type: "text"
      },
      passwd: {
        label: "비밀번호",
        type: "password"
      } // uid : {label: "고유번호",type:"number"}

    },

    // 로그인 폼 정의
    async authorize(credentials, req) {
      const userid = credentials.userid;
      const passwd = credentials.passwd;
      const uid = credentials.uid; // 인증 확인

      let params = [userid, passwd];
      let url = `http://localhost:3000/api/users/login?userid=${params[0]}&passwd=${params[1]}`;
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url);
      const result = await res.data; // 인증 성공시 반환

      if ((await result).uid > 0) {
        return result;
      }
    }

  })],
  pages: {
    // 인증에 사용자 정의 로그인 페이지 사용
    signIn: '/member/login'
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (user !== null && user !== void 0 && user.userid) token.userid = user.userid;
      return token;
    },

    async session(session, userOrToken) {
      session.user.userid = userOrToken.userid;
      return session;
    }

  }
}));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers/credentials");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VyaWQiLCJsYWJlbCIsInR5cGUiLCJwYXNzd2QiLCJhdXRob3JpemUiLCJyZXEiLCJ1aWQiLCJwYXJhbXMiLCJ1cmwiLCJyZXMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwic2Vzc2lvbiIsInVzZXJPclRva2VuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZUEsK0dBQVEsQ0FBQztBQUNwQkMsV0FBUyxFQUFFLENBQ1BDLHNFQUFXLENBQUM7QUFDUkMsTUFBRSxFQUFFLDJCQURJO0FBRVJDLFFBQUksRUFBRSwyQkFGRTtBQUdSQyxlQUFXLEVBQUU7QUFDVEMsWUFBTSxFQUFFO0FBQUVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFJLEVBQUU7QUFBdEIsT0FEQztBQUVUQyxZQUFNLEVBQUU7QUFBRUYsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQUksRUFBRTtBQUF2QixPQUZDLENBR1Q7O0FBSFMsS0FITDs7QUFPTDtBQUNILFVBQU1FLFNBQU4sQ0FBZ0JMLFdBQWhCLEVBQTZCTSxHQUE3QixFQUFrQztBQUM5QixZQUFNTCxNQUFNLEdBQUdELFdBQVcsQ0FBQ0MsTUFBM0I7QUFDQSxZQUFNRyxNQUFNLEdBQUdKLFdBQVcsQ0FBQ0ksTUFBM0I7QUFDQSxZQUFNRyxHQUFHLEdBQUdQLFdBQVcsQ0FBQ08sR0FBeEIsQ0FIOEIsQ0FJOUI7O0FBQ0EsVUFBSUMsTUFBTSxHQUFHLENBQUNQLE1BQUQsRUFBUUcsTUFBUixDQUFiO0FBQ0EsVUFBSUssR0FBRyxHQUFHLGdEQUErQ0QsTUFBTSxDQUFDLENBQUQsQ0FBSSxXQUFVQSxNQUFNLENBQUMsQ0FBRCxDQUFJLEVBQXZGO0FBQ0EsWUFBTUUsR0FBRyxHQUFFLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixDQUFqQjtBQUNBLFlBQU1JLE1BQU0sR0FBSSxNQUFNSCxHQUFHLENBQUNJLElBQTFCLENBUjhCLENBUzlCOztBQUNBLFVBQUcsQ0FBQyxNQUFNRCxNQUFQLEVBQWVOLEdBQWYsR0FBcUIsQ0FBeEIsRUFBMEI7QUFDdEIsZUFBT00sTUFBUDtBQUNIO0FBRUo7O0FBdEJPLEdBQUQsQ0FESixDQURTO0FBMkJwQkUsT0FBSyxFQUFFO0FBQUU7QUFDTEMsVUFBTSxFQUFFO0FBREwsR0EzQmE7QUE4QnBCQyxXQUFTLEVBQUU7QUFDUCxVQUFNQyxHQUFOLENBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCQyxPQUF2QixFQUFnQ0MsT0FBaEMsRUFBeUNDLFNBQXpDLEVBQW9EO0FBQ2hELFVBQUlILElBQUosYUFBSUEsSUFBSixlQUFJQSxJQUFJLENBQUVuQixNQUFWLEVBQWtCa0IsS0FBSyxDQUFDbEIsTUFBTixHQUFlbUIsSUFBSSxDQUFDbkIsTUFBcEI7QUFDbEIsYUFBT2tCLEtBQVA7QUFDSCxLQUpNOztBQU1QLFVBQU1LLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QkMsV0FBdkIsRUFBb0M7QUFDaENELGFBQU8sQ0FBQ0osSUFBUixDQUFhbkIsTUFBYixHQUFzQndCLFdBQVcsQ0FBQ3hCLE1BQWxDO0FBQ0EsYUFBT3VCLE9BQVA7QUFDSDs7QUFUTTtBQTlCUyxDQUFELENBQXZCLEU7Ozs7Ozs7Ozs7O0FDTEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNEQiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiKTtcbiIsIi8vIG5wbSBpbnN0YWxsIG5leHQtYXV0aEAzLjI5LjEwIC0tc2F2ZS1kZXZcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIGlkOiBcInVzZXJpZC1wYXNzd2QtY3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgbmFtZTogXCJ1c2VyaWQtcGFzc3dkLWNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyaWQ6IHsgbGFiZWw6IFwi7JWE7J2065SUXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd2Q6IHsgbGFiZWw6IFwi67mE67CA67KI7Zi4XCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICAgICAgICAgICAgLy8gdWlkIDoge2xhYmVsOiBcIuqzoOycoOuyiO2YuFwiLHR5cGU6XCJudW1iZXJcIn1cclxuICAgICAgICAgICAgfSwgLy8g66Gc6re47J24IO2PvCDsoJXsnZhcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJpZCA9IGNyZWRlbnRpYWxzLnVzZXJpZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3ZCA9IGNyZWRlbnRpYWxzLnBhc3N3ZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IGNyZWRlbnRpYWxzLnVpZDtcclxuICAgICAgICAgICAgICAgIC8vIOyduOymnSDtmZXsnbhcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkLHBhc3N3ZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID1gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy9sb2dpbj91c2VyaWQ9JHtwYXJhbXNbMF19JnBhc3N3ZD0ke3BhcmFtc1sxXX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCAgPSBhd2FpdCByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIOyduOymnSDshLHqs7Xsi5wg67CY7ZmYXHJcbiAgICAgICAgICAgICAgICBpZigoYXdhaXQgcmVzdWx0KS51aWQgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgcGFnZXM6IHsgLy8g7J247Kad7JeQIOyCrOyaqeyekCDsoJXsnZgg66Gc6re47J24IO2OmOydtOyngCDsgqzsmqlcclxuICAgICAgICBzaWduSW46ICcvbWVtYmVyL2xvZ2luJ1xyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIGp3dCh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyPy51c2VyaWQpIHRva2VuLnVzZXJpZCA9IHVzZXIudXNlcmlkO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB1c2VyT3JUb2tlbikge1xyXG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIudXNlcmlkID0gdXNlck9yVG9rZW4udXNlcmlkO1xyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=