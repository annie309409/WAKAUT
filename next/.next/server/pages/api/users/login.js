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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/MariaDB.js":
/*!***************************!*\
  !*** ./models/MariaDB.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mariadb = _interopRequireDefault(__webpack_require__(/*! mariadb */ "mariadb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbconfig = {
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PWD,
  database: process.env.MARIADB_DB
};
const MariaDB = {
  makeConn: async () => {
    try {
      return await _mariadb.default.createConnection(dbconfig);
    } catch (e) {
      console.log(e);
    }
  },
  closeConn: async conn => {
    if (conn) {
      try {
        await conn.close();
      } catch (e) {
        console.log(e);
      }
    }
  }
};
module.exports = MariaDB;

/***/ }),

/***/ "./models/SQLs.js":
/*!************************!*\
  !*** ./models/SQLs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SQL = {
  board: {
    select: `select b.* , date_format(b.regdate,'%Y-%m-%d') regdate2, u.name ,CAST(count(c.cid) AS char) cmtcnt from (boards b, users u) left join comments c on b.bid = c.bid where u.uid = b.writer `,
    select2: ` group by b.bid order by b.bid desc limit 0, ?`,
    selectOne: `select  b.*,date_format(regdate, "%Y-%m-%d") regdate2, u.name  from boards b left join users u on u.uid = b.writer where bid=?`,
    updateView: `update boards set views = views+1  where bid=?`,
    comments: `select c.*,date_format(c.regdate, "%Y-%m-%d") regdate2,u.name  from comments c left join users u on c.userid = u.uid  where c.bid =?`,
    insertCmt: `insert into comments (bid,userid,comment) values(?,?,?)`,
    insert: `insert into boards (title,writer,content,views,category,facility_name) values(?,?,?,0,?,?)`,
    update: `update boards set title=?,content=?,category=?,facility_name=? WHERE bid = ?`,
    deleteCmt: `delete from comments where cid=?`,
    deleteCmt2: `delete from comments where bid=?`,
    delete: `delete from boards where bid=?`
  },
  admin: {
    selectUsers: `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u`
  },
  user: {
    login: `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u where u.name=? && u.passwd=?`
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SQL);

/***/ }),

/***/ "./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MariaDB = _interopRequireDefault(__webpack_require__(/*! ./MariaDB */ "./models/MariaDB.js"));

var _SQLs = _interopRequireDefault(__webpack_require__(/*! ./SQLs */ "./models/SQLs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User {
  //로그인 목록 출력
  async select(id, pw) {
    let conn = null;
    let rowData = null;
    let param = [id, pw];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.user.login, param);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    let result = {
      'data': rowData
    };
    return result;
  }

}

module.exports = User;

/***/ }),

/***/ "./pages/api/users/login.js":
/*!**********************************!*\
  !*** ./pages/api/users/login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/users */ "./models/users.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_users__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const [userid, passwd] = [req.query.userid, req.query.passwd];

  try {
    const mem = new _models_users__WEBPACK_IMPORTED_MODULE_0___default.a().select(userid, passwd).then(res => res);
    const result = (await mem).data;
    const data = {
      uid: (await result)[0].uid,
      userid: (await result)[0].uid,
      email: (await result)[0].email,
      name: (await result)[0].name
    };
    res.status(200).json(await data);
  } catch (e) {
    console.log(e);
  }
});

/***/ }),

/***/ "mariadb":
/*!**************************!*\
  !*** external "mariadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mariadb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2Vycy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJpYWRiXCIiXSwibmFtZXMiOlsiZGJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BUklBREJfSE9TVCIsInVzZXIiLCJNQVJJQURCX1VTRVIiLCJwYXNzd29yZCIsIk1BUklBREJfUFdEIiwiZGF0YWJhc2UiLCJNQVJJQURCX0RCIiwiTWFyaWFEQiIsIm1ha2VDb25uIiwibWFyaWFkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ29ubiIsImNvbm4iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTUUwiLCJib2FyZCIsInNlbGVjdCIsInNlbGVjdDIiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJkZWxldGVDbXQiLCJkZWxldGVDbXQyIiwiZGVsZXRlIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwiVXNlciIsImlkIiwicHciLCJyb3dEYXRhIiwicGFyYW0iLCJxdWVyeSIsInJlc3VsdCIsInJlcSIsInJlcyIsInVzZXJpZCIsInBhc3N3ZCIsIm1lbSIsInRoZW4iLCJkYXRhIiwidWlkIiwiZW1haWwiLCJuYW1lIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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Q0xDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSixDQWRELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvdXNlcnMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBgLFxyXG4gICAgICAgIHNlbGVjdDIgOiBgIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgP2AsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YCxcclxuICAgICAgICBkZWxldGVDbXQ6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGNpZD0/YCxcclxuICAgICAgICBkZWxldGVDbXQyOmBkZWxldGUgZnJvbSBjb21tZW50cyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgZGVsZXRlOmBkZWxldGUgZnJvbSBib2FyZHMgd2hlcmUgYmlkPT9gXHJcbiAgICB9LFxyXG4gICAgYWRtaW4gOiB7XHJcbiAgICAgICAgc2VsZWN0VXNlcnMgOiBgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdWAsXHJcbiAgICB9LFxyXG4gICAgdXNlcjp7XHJcbiAgICAgICAgbG9naW4gOmBzZWxlY3QgdS4qLCBkYXRlX2Zvcm1hdCh1LmJpcnRoX2RhdGUsJyVZLSVtLSVkJykgYmlydGhfZGF0ZTIgZnJvbSB1c2VycyB1IHdoZXJlIHUubmFtZT0/ICYmIHUucGFzc3dkPT9gXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IG1hcmlhZGIgZnJvbSAnLi9NYXJpYURCJztcclxuaW1wb3J0IFNRTCBmcm9tICcuL1NRTHMnO1xyXG5cclxuXHJcbmNsYXNzIFVzZXJ7XHJcbiAgICAvL+uhnOq3uOyduCDrqqnroZ0g7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3QoaWQscHcpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IFtpZCxwd107XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwudXNlci5sb2dpbixwYXJhbSk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdD17J2RhdGEnOiByb3dEYXRhfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1Vc2VyO1xyXG5cclxuIiwiaW1wb3J0IFVzZXIgIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IFt1c2VyaWQsIHBhc3N3ZF0gPSAgW3JlcS5xdWVyeS51c2VyaWQsIHJlcS5xdWVyeS5wYXNzd2RdO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1lbSA9IG5ldyBVc2VyKCkuc2VsZWN0KHVzZXJpZCxwYXNzd2QpLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCBtZW0pLmRhdGE7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdWlkOiAoYXdhaXQgcmVzdWx0KVswXS51aWQsXHJcbiAgICAgICAgICAgIHVzZXJpZDogKGF3YWl0IHJlc3VsdClbMF0udWlkLCBcclxuICAgICAgICAgICAgZW1haWw6IChhd2FpdCByZXN1bHQpWzBdLmVtYWlsLCBcclxuICAgICAgICAgICAgbmFtZTooYXdhaXQgcmVzdWx0KVswXS5uYW1lIH1cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCBkYXRhKTtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmlhZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==