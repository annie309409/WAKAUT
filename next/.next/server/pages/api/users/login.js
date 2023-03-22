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
    res.status(500).json({
      '에러메세지': '에러발생'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2Vycy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJpYWRiXCIiXSwibmFtZXMiOlsiZGJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BUklBREJfSE9TVCIsInVzZXIiLCJNQVJJQURCX1VTRVIiLCJwYXNzd29yZCIsIk1BUklBREJfUFdEIiwiZGF0YWJhc2UiLCJNQVJJQURCX0RCIiwiTWFyaWFEQiIsIm1ha2VDb25uIiwibWFyaWFkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ29ubiIsImNvbm4iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTUUwiLCJib2FyZCIsInNlbGVjdCIsInNlbGVjdDIiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJkZWxldGVDbXQiLCJkZWxldGVDbXQyIiwiZGVsZXRlIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwiVXNlciIsImlkIiwicHciLCJyb3dEYXRhIiwicGFyYW0iLCJxdWVyeSIsInJlc3VsdCIsInJlcSIsInJlcyIsInVzZXJpZCIsInBhc3N3ZCIsIm1lbSIsInRoZW4iLCJkYXRhIiwidWlkIiwiZW1haWwiLCJuYW1lIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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Q0xnQyxPQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDLGVBQVE7QUFBVCxLQUFyQjtBQUNQO0FBQ0osQ0FkRCxFOzs7Ozs7Ozs7OztBQ0ZBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS91c2Vycy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3VzZXJzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IG1hcmlhZGIgZnJvbSBcIm1hcmlhZGJcIjtcclxuXHJcbmNvbnN0IGRiY29uZmlnID0ge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9IT1NULFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFSSUFEQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BUklBREJfUFdELFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1BUklBREJfREJcclxufTtcclxuXHJcblxyXG5jb25zdCBNYXJpYURCID17XHJcbiAgICBtYWtlQ29ubiA6IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBtYXJpYWRiLmNyZWF0ZUNvbm5lY3Rpb24oZGJjb25maWcpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xvc2VDb25uIDogYXN5bmMgKGNvbm4pID0+IHtcclxuICAgICAgICBpZihjb25uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY29ubi5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWFyaWFEQjsiLCJjb25zdCBTUUw9e1xyXG4gICAgYm9hcmQgOiB7XHJcbiAgICAgICAgc2VsZWN0IDogYHNlbGVjdCBiLiogLCBkYXRlX2Zvcm1hdChiLnJlZ2RhdGUsJyVZLSVtLSVkJykgcmVnZGF0ZTIsIHUubmFtZSAsQ0FTVChjb3VudChjLmNpZCkgQVMgY2hhcikgY210Y250IGZyb20gKGJvYXJkcyBiLCB1c2VycyB1KSBsZWZ0IGpvaW4gY29tbWVudHMgYyBvbiBiLmJpZCA9IGMuYmlkIHdoZXJlIHUudWlkID0gYi53cml0ZXIgYCxcclxuICAgICAgICBzZWxlY3QyIDogYCBncm91cCBieSBiLmJpZCBvcmRlciBieSBiLmJpZCBkZXNjIGxpbWl0IDAsID9gLFxyXG4gICAgICAgIHNlbGVjdE9uZTpgc2VsZWN0ICBiLiosZGF0ZV9mb3JtYXQocmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMiwgdS5uYW1lICBmcm9tIGJvYXJkcyBiIGxlZnQgam9pbiB1c2VycyB1IG9uIHUudWlkID0gYi53cml0ZXIgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHVwZGF0ZVZpZXc6YHVwZGF0ZSBib2FyZHMgc2V0IHZpZXdzID0gdmlld3MrMSAgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIGNvbW1lbnRzIDogYHNlbGVjdCBjLiosZGF0ZV9mb3JtYXQoYy5yZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLHUubmFtZSAgZnJvbSBjb21tZW50cyBjIGxlZnQgam9pbiB1c2VycyB1IG9uIGMudXNlcmlkID0gdS51aWQgIHdoZXJlIGMuYmlkID0/YCxcclxuICAgICAgICBpbnNlcnRDbXQgOiBgaW5zZXJ0IGludG8gY29tbWVudHMgKGJpZCx1c2VyaWQsY29tbWVudCkgdmFsdWVzKD8sPyw/KWAsXHJcbiAgICAgICAgaW5zZXJ0IDogYGluc2VydCBpbnRvIGJvYXJkcyAodGl0bGUsd3JpdGVyLGNvbnRlbnQsdmlld3MsY2F0ZWdvcnksZmFjaWxpdHlfbmFtZSkgdmFsdWVzKD8sPyw/LDAsPyw/KWAsXHJcbiAgICAgICAgdXBkYXRlIDpgdXBkYXRlIGJvYXJkcyBzZXQgdGl0bGU9Pyxjb250ZW50PT8sY2F0ZWdvcnk9PyxmYWNpbGl0eV9uYW1lPT8gV0hFUkUgYmlkID0gP2AsXHJcbiAgICAgICAgZGVsZXRlQ210OmBkZWxldGUgZnJvbSBjb21tZW50cyB3aGVyZSBjaWQ9P2AsXHJcbiAgICAgICAgZGVsZXRlQ210MjpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIGRlbGV0ZTpgZGVsZXRlIGZyb20gYm9hcmRzIHdoZXJlIGJpZD0/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1Lm5hbWU9PyAmJiB1LnBhc3N3ZD0/YFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1FMOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcblxyXG5jbGFzcyBVc2Vye1xyXG4gICAgLy/roZzqt7jsnbgg66qp66GdIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0KGlkLHB3KXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW0gPSBbaWQscHddO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLnVzZXIubG9naW4scGFyYW0pO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydkYXRhJzogcm93RGF0YX07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9VXNlcjtcclxuXHJcbiIsImltcG9ydCBVc2VyICBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCBbdXNlcmlkLCBwYXNzd2RdID0gIFtyZXEucXVlcnkudXNlcmlkLCByZXEucXVlcnkucGFzc3dkXTtcclxuICAgIHRyeXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtZW0gPSBuZXcgVXNlcigpLnNlbGVjdCh1c2VyaWQscGFzc3dkKS50aGVuKHJlcz0+cmVzKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgbWVtKS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVpZDogKGF3YWl0IHJlc3VsdClbMF0udWlkLFxyXG4gICAgICAgICAgICB1c2VyaWQ6IChhd2FpdCByZXN1bHQpWzBdLnVpZCwgXHJcbiAgICAgICAgICAgIGVtYWlsOiAoYXdhaXQgcmVzdWx0KVswXS5lbWFpbCwgXHJcbiAgICAgICAgICAgIG5hbWU6KGF3YWl0IHJlc3VsdClbMF0ubmFtZSB9XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGRhdGEpO1xyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyfsl5Drn6zrqZTshLjsp4AnOifsl5Drn6zrsJzsg50nfSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJpYWRiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=