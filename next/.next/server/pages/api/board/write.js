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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/board/write.js");
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
    select: `select b.* , date_format(b.regdate,'%Y-%m-%d') regdate2, u.name ,CAST(count(c.cid) AS char) cmtcnt from (boards b, users u) left join comments c on b.bid = c.bid where u.uid = b.writer group by b.bid order by b.bid desc limit 0, 5`,
    selectOne: `select  b.*,date_format(regdate, "%Y-%m-%d") regdate2, u.name  from boards b left join users u on u.uid = b.writer where bid=?`,
    updateView: `update boards set views = views+1  where bid=?`,
    comments: `select c.*,date_format(c.regdate, "%Y-%m-%d") regdate2,u.name  from comments c left join users u on c.userid = u.uid  where c.bid =?`,
    insertCmt: `insert into comments (bid,userid,comment) values(?,?,?)`,
    insert: `insert into boards (title,writer,content,views,category,facility_name) values(?,?,?,0,?,?)`,
    update: `update boards set title=?,content=?,category=?,facility_name=? WHERE bid = ?`
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SQL);

/***/ }),

/***/ "./models/board.js":
/*!*************************!*\
  !*** ./models/board.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MariaDB = _interopRequireDefault(__webpack_require__(/*! ./MariaDB */ "./models/MariaDB.js"));

var _SQLs = _interopRequireDefault(__webpack_require__(/*! ./SQLs */ "./models/SQLs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Board {
  //게시판 목록출력
  async select() {
    let conn = null;
    let rowData = null;

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.board.select);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    let result = {
      'boards': rowData
    };
    return result;
  } //게시글 출력


  async selectOne(bid) {
    let conn = null;
    let rowData = null;
    let params = [bid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.board.selectOne, params); //코멘트 조회 및 추가     

      rowData[0].com = await conn.query(_SQLs.default.board.comments, params); //조회수 증가    

      await conn.query(_SQLs.default.board.updateView, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //코멘트 등록


  async insertCmt(bid, uid, cmt) {
    let conn = null;
    let rowData = null;
    let params = [bid, uid, cmt];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.board.insertCmt, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //게시글 등록


  async insert(data) {
    let conn = null;
    let rowData = null;
    let params = [data.title, data.userid, data.content, data.category, data.facility];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.board.insert, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //게시글 수정


  async modify(data) {
    let conn = null;
    let rowData = null;
    let params = [data.title, data.content, data.category, data.facility, data.bid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.board.update, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  }

}

module.exports = Board;

/***/ }),

/***/ "./pages/api/board/write.js":
/*!**********************************!*\
  !*** ./pages/api/board/write.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/board */ "./models/board.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_board__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let cnt = '';

  if (req.body.bid > 0) {
    cnt = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().modify(req.body).then(res => res);
  } else {
    cnt = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().insert(req.body).then(res => res);
  }

  res.status(200).json({
    cnt: await cnt
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC93cml0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJpYWRiXCIiXSwibmFtZXMiOlsiZGJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BUklBREJfSE9TVCIsInVzZXIiLCJNQVJJQURCX1VTRVIiLCJwYXNzd29yZCIsIk1BUklBREJfUFdEIiwiZGF0YWJhc2UiLCJNQVJJQURCX0RCIiwiTWFyaWFEQiIsIm1ha2VDb25uIiwibWFyaWFkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ29ubiIsImNvbm4iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTUUwiLCJib2FyZCIsInNlbGVjdCIsInNlbGVjdE9uZSIsInVwZGF0ZVZpZXciLCJjb21tZW50cyIsImluc2VydENtdCIsImluc2VydCIsInVwZGF0ZSIsIkJvYXJkIiwicm93RGF0YSIsInF1ZXJ5IiwicmVzdWx0IiwiYmlkIiwicGFyYW1zIiwiY29tIiwiY29tbWl0IiwidWlkIiwiY210IiwiZGF0YSIsInRpdGxlIiwidXNlcmlkIiwiY29udGVudCIsImNhdGVnb3J5IiwiZmFjaWxpdHkiLCJtb2RpZnkiLCJyZXEiLCJyZXMiLCJjbnQiLCJib2R5IiwidGhlbiIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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LFVBQUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDZSxLQUFMLENBQVdYLGNBQUlDLEtBQUosQ0FBVU8sTUFBckIsRUFBNEJNLE1BQTVCLENBQU47QUFDQSxZQUFNbEIsSUFBSSxDQUFDb0IsTUFBTCxFQUFOO0FBQ0gsS0FKRCxDQUlDLE9BQU94QixDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSCxLQU5ELFNBTVM7QUFDTCxZQUFNRixpQkFBUUssU0FBUixFQUFOO0FBQ0g7O0FBQ0QsV0FBT2UsT0FBUDtBQUNIOztBQW5GTTs7QUFzRlhaLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlVSxLQUFmLEM7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFNaUIsR0FBTixFQUFVQyxHQUFWLEtBQWdCO0FBQzNCLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLE1BQUdGLEdBQUcsQ0FBQ0csSUFBSixDQUFTaEIsR0FBVCxHQUFlLENBQWxCLEVBQW9CO0FBQ2hCZSxPQUFHLEdBQUksSUFBSW5CLG9EQUFKLEdBQVlnQixNQUFaLENBQW1CQyxHQUFHLENBQUNHLElBQXZCLEVBQTZCQyxJQUE3QixDQUFrQ0gsR0FBRyxJQUFFQSxHQUF2QyxDQUFQO0FBQ0gsR0FGRCxNQUVLO0FBQ0RDLE9BQUcsR0FBSSxJQUFJbkIsb0RBQUosR0FBWUYsTUFBWixDQUFtQm1CLEdBQUcsQ0FBQ0csSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxHQUFHLElBQUVBLEdBQXZDLENBQVA7QUFDSDs7QUFDREEsS0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0osT0FBRyxFQUFFLE1BQU1BO0FBQVosR0FBckI7QUFDSCxDQVJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL3dyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYm9hcmQvd3JpdGUuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBncm91cCBieSBiLmJpZCBvcmRlciBieSBiLmJpZCBkZXNjIGxpbWl0IDAsIDVgLFxyXG4gICAgICAgIHNlbGVjdE9uZTpgc2VsZWN0ICBiLiosZGF0ZV9mb3JtYXQocmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMiwgdS5uYW1lICBmcm9tIGJvYXJkcyBiIGxlZnQgam9pbiB1c2VycyB1IG9uIHUudWlkID0gYi53cml0ZXIgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHVwZGF0ZVZpZXc6YHVwZGF0ZSBib2FyZHMgc2V0IHZpZXdzID0gdmlld3MrMSAgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIGNvbW1lbnRzIDogYHNlbGVjdCBjLiosZGF0ZV9mb3JtYXQoYy5yZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLHUubmFtZSAgZnJvbSBjb21tZW50cyBjIGxlZnQgam9pbiB1c2VycyB1IG9uIGMudXNlcmlkID0gdS51aWQgIHdoZXJlIGMuYmlkID0/YCxcclxuICAgICAgICBpbnNlcnRDbXQgOiBgaW5zZXJ0IGludG8gY29tbWVudHMgKGJpZCx1c2VyaWQsY29tbWVudCkgdmFsdWVzKD8sPyw/KWAsXHJcbiAgICAgICAgaW5zZXJ0IDogYGluc2VydCBpbnRvIGJvYXJkcyAodGl0bGUsd3JpdGVyLGNvbnRlbnQsdmlld3MsY2F0ZWdvcnksZmFjaWxpdHlfbmFtZSkgdmFsdWVzKD8sPyw/LDAsPyw/KWAsXHJcbiAgICAgICAgdXBkYXRlIDpgdXBkYXRlIGJvYXJkcyBzZXQgdGl0bGU9Pyxjb250ZW50PT8sY2F0ZWdvcnk9PyxmYWNpbGl0eV9uYW1lPT8gV0hFUkUgYmlkID0gP2BcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1FMOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIEJvYXJke1xyXG4gICAgLy/qsozsi5ztjJAg66qp66Gd7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3QoKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3QpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydib2FyZHMnOiByb3dEYXRhfTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RPbmUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0T25lLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8v7L2U66mY7Yq4IOyhsO2ajCDrsI8g7LaU6rCAICAgICBcclxuICAgICAgICAgICAgcm93RGF0YVswXS5jb20gPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5jb21tZW50cyxwYXJhbXMpOyAgICAgICBcclxuICAgICAgICAgICAgLy/sobDtmozsiJgg7Kad6rCAICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGVWaWV3LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydENtdChiaWQsdWlkLGNtdCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWQsdWlkLGNtdF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnRDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLnVzZXJpZCxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+qyjOyLnOq4gCDsiJjsoJVcclxuICAgICBhc3luYyBtb2RpZnkoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5LGRhdGEuYmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1Cb2FyZDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gIFwiLi4vLi4vLi4vbW9kZWxzL2JvYXJkXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSxyZXMpPT57XHJcbiAgICBsZXQgY250ID0gJyc7XHJcbiAgICBpZihyZXEuYm9keS5iaWQgPiAwKXtcclxuICAgICAgICBjbnQgPSAgbmV3IEJvYXJkKCkubW9kaWZ5KHJlcS5ib2R5KS50aGVuKHJlcz0+cmVzKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNudCA9ICBuZXcgQm9hcmQoKS5pbnNlcnQocmVxLmJvZHkpLnRoZW4ocmVzPT5yZXMpO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2NudDogYXdhaXQgY250fSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9