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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/board/repwrite.js");
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
  async select(pg, cat, note) {
    let conn = null;
    let rowData = null;
    let where = '';
    cat != 'All' ? cat = `category='${cat}'` : cat = '';
    console.log(cat);

    if (cat && note) {
      where = ` and ${cat} and (title like '%테스트%' or content like '%테스트%' or u.name like '%테스트%') `;
    } else {
      console.log('일반');
    }

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.board.select + where + _SQLs.default.board.select2, [pg]);
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
  } //코멘트 삭제


  async deleteCmt(cid, bid) {
    let conn = null;
    let rowData = null;
    let params = [cid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.board.deleteCmt, params);
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
      rowData = 1;
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //게시글 삭제


  async delete(bid) {
    let conn = null;
    let rowData = null;
    let params = [bid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.board.deleteCmt2, params);
      await conn.query(_SQLs.default.board.delete, params);
      await conn.commit();
      rowData = 1;
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

/***/ "./pages/api/board/repwrite.js":
/*!*************************************!*\
  !*** ./pages/api/board/repwrite.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/board */ "./models/board.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_board__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.body.cid) {
    const cnt = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().deleteCmt(req.body.cid).then(res => res);
    res.status(200).json({
      cnt: await cnt
    });
    console.log('딜리트문');
  } else {
    const {
      bid,
      userid,
      comment
    } = req.body;
    const cnt = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().insertCmt(bid, userid, comment).then(res => res);
    res.status(200).json({
      cnt: await cnt
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9yZXB3cml0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJpYWRiXCIiXSwibmFtZXMiOlsiZGJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BUklBREJfSE9TVCIsInVzZXIiLCJNQVJJQURCX1VTRVIiLCJwYXNzd29yZCIsIk1BUklBREJfUFdEIiwiZGF0YWJhc2UiLCJNQVJJQURCX0RCIiwiTWFyaWFEQiIsIm1ha2VDb25uIiwibWFyaWFkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ29ubiIsImNvbm4iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTUUwiLCJib2FyZCIsInNlbGVjdCIsInNlbGVjdDIiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJkZWxldGVDbXQiLCJkZWxldGVDbXQyIiwiZGVsZXRlIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwiQm9hcmQiLCJwZyIsImNhdCIsIm5vdGUiLCJyb3dEYXRhIiwid2hlcmUiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImNpZCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwiYm9keSIsImNudCIsInRoZW4iLCJzdGF0dXMiLCJqc29uIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FB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Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL3JlcHdyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYm9hcmQvcmVwd3JpdGUuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBgLFxyXG4gICAgICAgIHNlbGVjdDIgOiBgIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgP2AsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YCxcclxuICAgICAgICBkZWxldGVDbXQ6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGNpZD0/YCxcclxuICAgICAgICBkZWxldGVDbXQyOmBkZWxldGUgZnJvbSBjb21tZW50cyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgZGVsZXRlOmBkZWxldGUgZnJvbSBib2FyZHMgd2hlcmUgYmlkPT9gXHJcbiAgICB9LFxyXG4gICAgYWRtaW4gOiB7XHJcbiAgICAgICAgc2VsZWN0VXNlcnMgOiBgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdWAsXHJcbiAgICB9LFxyXG4gICAgdXNlcjp7XHJcbiAgICAgICAgbG9naW4gOmBzZWxlY3QgdS4qLCBkYXRlX2Zvcm1hdCh1LmJpcnRoX2RhdGUsJyVZLSVtLSVkJykgYmlydGhfZGF0ZTIgZnJvbSB1c2VycyB1IHdoZXJlIHUubmFtZT0/ICYmIHUucGFzc3dkPT9gXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IG1hcmlhZGIgZnJvbSAnLi9NYXJpYURCJztcclxuaW1wb3J0IFNRTCBmcm9tICcuL1NRTHMnO1xyXG5cclxuY2xhc3MgQm9hcmR7XHJcbiAgICAvL+qyjOyLnO2MkCDrqqnroZ3stpzroKVcclxuICAgIGFzeW5jIHNlbGVjdChwZyxjYXQsbm90ZSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHdoZXJlID0nJztcclxuICAgICAgICAoY2F0ICE9J0FsbCcpID8gY2F0ID0gYGNhdGVnb3J5PScke2NhdH0nYCA6IGNhdD0nJztcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgICAgIGlmKGNhdCAmJiBub3RlKXtcclxuICAgICAgICAgICAgd2hlcmUgPSBgIGFuZCAke2NhdH0gYW5kICh0aXRsZSBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgY29udGVudCBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgdS5uYW1lIGxpa2UgJyXthYzsiqTtirglJykgYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7J2867CYJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdCt3aGVyZStTUUwuYm9hcmQuc2VsZWN0MixbcGddKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0PXsnYm9hcmRzJzogcm93RGF0YX07XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0T25lKGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWRdO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdE9uZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICAvL+y9lOupmO2KuCDsobDtmowg67CPIOy2lOqwgCAgICAgXHJcbiAgICAgICAgICAgIHJvd0RhdGFbMF0uY29tID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuY29tbWVudHMscGFyYW1zKTsgICAgICAgXHJcbiAgICAgICAgICAgIC8v7KGw7ZqM7IiYIOymneqwgCAgICBcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQudXBkYXRlVmlldyxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/svZTrqZjtirgg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnRDbXQoYmlkLHVpZCxjbXQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkLHVpZCxjbXRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuaW5zZXJ0Q210LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZUNtdChjaWQsYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2NpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5kZWxldGVDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLnVzZXJpZCxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+qyjOyLnOq4gCDsiJjsoJVcclxuICAgICBhc3luYyBtb2RpZnkoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5LGRhdGEuYmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGUscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9MTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOyCreygnFxyXG4gICAgYXN5bmMgZGVsZXRlKGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuZGVsZXRlQ210MixwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5kZWxldGUscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9MTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9Qm9hcmQ7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBCb2FyZCBmcm9tICBcIi4uLy4uLy4uL21vZGVscy9ib2FyZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgaWYocmVxLmJvZHkuY2lkKXtcclxuICAgICAgICBjb25zdCBjbnQgPSAgbmV3IEJvYXJkKCkuZGVsZXRlQ210KHJlcS5ib2R5LmNpZCkudGhlbihyZXM9PnJlcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2NudDogYXdhaXQgY250fSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+uUnOumrO2KuOusuCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3Qge2JpZCx1c2VyaWQsY29tbWVudH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBjbnQgPSAgbmV3IEJvYXJkKCkuaW5zZXJ0Q210KGJpZCx1c2VyaWQsY29tbWVudCkudGhlbihyZXM9PnJlcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2NudDogYXdhaXQgY250fSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJpYWRiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=