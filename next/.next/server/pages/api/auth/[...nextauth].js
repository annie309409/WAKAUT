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
      console.log('jwt', token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VyaWQiLCJsYWJlbCIsInR5cGUiLCJwYXNzd2QiLCJhdXRob3JpemUiLCJyZXEiLCJ1aWQiLCJwYXJhbXMiLCJ1cmwiLCJyZXMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24iLCJ1c2VyT3JUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWVBLCtHQUFRLENBQUM7QUFDcEJDLFdBQVMsRUFBRSxDQUNQQyxzRUFBVyxDQUFDO0FBQ1JDLE1BQUUsRUFBRSwyQkFESTtBQUVSQyxRQUFJLEVBQUUsMkJBRkU7QUFHUkMsZUFBVyxFQUFFO0FBQ1RDLFlBQU0sRUFBRTtBQUFFQyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsWUFBSSxFQUFFO0FBQXRCLE9BREM7QUFFVEMsWUFBTSxFQUFFO0FBQUVGLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFJLEVBQUU7QUFBdkIsT0FGQyxDQUdUOztBQUhTLEtBSEw7O0FBT0w7QUFDSCxVQUFNRSxTQUFOLENBQWdCTCxXQUFoQixFQUE2Qk0sR0FBN0IsRUFBa0M7QUFDOUIsWUFBTUwsTUFBTSxHQUFHRCxXQUFXLENBQUNDLE1BQTNCO0FBQ0EsWUFBTUcsTUFBTSxHQUFHSixXQUFXLENBQUNJLE1BQTNCO0FBQ0EsWUFBTUcsR0FBRyxHQUFHUCxXQUFXLENBQUNPLEdBQXhCLENBSDhCLENBSTlCOztBQUNBLFVBQUlDLE1BQU0sR0FBRyxDQUFDUCxNQUFELEVBQVFHLE1BQVIsQ0FBYjtBQUNBLFVBQUlLLEdBQUcsR0FBRyxnREFBK0NELE1BQU0sQ0FBQyxDQUFELENBQUksV0FBVUEsTUFBTSxDQUFDLENBQUQsQ0FBSSxFQUF2RjtBQUNBLFlBQU1FLEdBQUcsR0FBRSxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsQ0FBakI7QUFDQSxZQUFNSSxNQUFNLEdBQUksTUFBTUgsR0FBRyxDQUFDSSxJQUExQixDQVI4QixDQVM5Qjs7QUFDQSxVQUFHLENBQUMsTUFBTUQsTUFBUCxFQUFlTixHQUFmLEdBQXFCLENBQXhCLEVBQTBCO0FBQ3RCLGVBQU9NLE1BQVA7QUFDSDtBQUVKOztBQXRCTyxHQUFELENBREosQ0FEUztBQTJCcEJFLE9BQUssRUFBRTtBQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURMLEdBM0JhO0FBOEJwQkMsV0FBUyxFQUFFO0FBQ1AsVUFBTUMsR0FBTixDQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QkMsT0FBdkIsRUFBZ0NDLE9BQWhDLEVBQXlDQyxTQUF6QyxFQUFvRDtBQUNoRCxVQUFJSCxJQUFKLGFBQUlBLElBQUosZUFBSUEsSUFBSSxDQUFFbkIsTUFBVixFQUFrQmtCLEtBQUssQ0FBQ2xCLE1BQU4sR0FBZW1CLElBQUksQ0FBQ25CLE1BQXBCO0FBQ2xCdUIsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFrQk4sS0FBbEI7QUFDQSxhQUFPQSxLQUFQO0FBQ0gsS0FMTTs7QUFPUCxVQUFNTyxPQUFOLENBQWNBLE9BQWQsRUFBdUJDLFdBQXZCLEVBQW9DO0FBQ2hDRCxhQUFPLENBQUNOLElBQVIsQ0FBYW5CLE1BQWIsR0FBc0IwQixXQUFXLENBQUMxQixNQUFsQztBQUNBLGFBQU95QixPQUFQO0FBQ0g7O0FBVk07QUE5QlMsQ0FBRCxDQUF2QixFOzs7Ozs7Ozs7OztBQ0xBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDREIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIik7XG4iLCIvLyBucG0gaW5zdGFsbCBuZXh0LWF1dGhAMy4yOS4xMCAtLXNhdmUtZGV2XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICAgICAgICBpZDogXCJ1c2VyaWQtcGFzc3dkLWNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwidXNlcmlkLXBhc3N3ZC1jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcmlkOiB7IGxhYmVsOiBcIuyVhOydtOuUlFwiLCB0eXBlOiBcInRleHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dkOiB7IGxhYmVsOiBcIuu5hOuwgOuyiO2YuFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgICAgICAgICAgIC8vIHVpZCA6IHtsYWJlbDogXCLqs6DsnKDrsojtmLhcIix0eXBlOlwibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgIH0sIC8vIOuhnOq3uOyduCDtj7wg7KCV7J2YXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyaWQgPSBjcmVkZW50aWFscy51c2VyaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd2QgPSBjcmVkZW50aWFscy5wYXNzd2Q7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1aWQgPSBjcmVkZW50aWFscy51aWQ7XHJcbiAgICAgICAgICAgICAgICAvLyDsnbjspp0g7ZmV7J24XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCxwYXNzd2RdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMvbG9naW4/dXNlcmlkPSR7cGFyYW1zWzBdfSZwYXNzd2Q9JHtwYXJhbXNbMV19YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcz0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgID0gYXdhaXQgcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAvLyDsnbjspp0g7ISx6rO17IucIOuwmO2ZmFxyXG4gICAgICAgICAgICAgICAgaWYoKGF3YWl0IHJlc3VsdCkudWlkID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIHBhZ2VzOiB7IC8vIOyduOymneyXkCDsgqzsmqnsnpAg7KCV7J2YIOuhnOq3uOyduCDtjpjsnbTsp4Ag7IKs7JqpXHJcbiAgICAgICAgc2lnbkluOiAnL21lbWJlci9sb2dpbidcclxuICAgIH0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3QodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikge1xyXG4gICAgICAgICAgICBpZiAodXNlcj8udXNlcmlkKSB0b2tlbi51c2VyaWQgPSB1c2VyLnVzZXJpZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2p3dCcsdG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHVzZXJPclRva2VuKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlci51c2VyaWQgPSB1c2VyT3JUb2tlbi51c2VyaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==