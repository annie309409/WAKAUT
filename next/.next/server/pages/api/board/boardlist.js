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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/board/boardlist.js");
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
    deleteCmt: `delete from comments where cid=?`
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


  async deleteCmt(cid) {
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

/***/ "./pages/api/board/boardlist.js":
/*!**************************************!*\
  !*** ./pages/api/board/boardlist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/board */ "./models/board.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_board__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let {
    pg,
    cat,
    note
  } = req.query;

  try {
    const rowData = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().select(parseInt(pg), cat, note).then(bds => bds);
    res.status(200).json(await rowData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiQm9hcmQiLCJwZyIsImNhdCIsIm5vdGUiLCJyb3dEYXRhIiwid2hlcmUiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImNpZCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwicGFyc2VJbnQiLCJ0aGVuIiwiYmRzIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FB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SSxDQUFDUCxHQUEzRCxDQUFiOztBQUNBLFFBQUc7QUFDQ3ZCLFVBQUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDcUIsS0FBTCxDQUFXakIsY0FBSUMsS0FBSixDQUFVUSxNQUFyQixFQUE0QlcsTUFBNUIsQ0FBTjtBQUNBLFlBQU14QixJQUFJLENBQUMwQixNQUFMLEVBQU47QUFDSCxLQUpELENBSUMsT0FBTzlCLENBQVAsRUFBVTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILEtBTkQsU0FNUztBQUNMLFlBQU1GLGlCQUFRSyxTQUFSLEVBQU47QUFDSDs7QUFDRCxXQUFPb0IsT0FBUDtBQUNIOztBQTNHTTs7QUE4R1hqQixNQUFNLENBQUNDLE9BQVAsR0FBZVksS0FBZixDOzs7Ozs7Ozs7Ozs7QUNqSEE7QUFBQTtBQUFBO0FBQUE7QUFFZSxzRUFBT3NCLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQUN0QixNQUFEO0FBQUlDLE9BQUo7QUFBUUM7QUFBUixNQUFnQm1CLEdBQUcsQ0FBQ2hCLEtBQXhCOztBQUNBLE1BQUc7QUFDQyxVQUFNRixPQUFPLEdBQUcsSUFBSUosb0RBQUosR0FBWVQsTUFBWixDQUFtQmlDLFFBQVEsQ0FBQ3ZCLEVBQUQsQ0FBM0IsRUFBZ0NDLEdBQWhDLEVBQW9DQyxJQUFwQyxFQUEwQ3NCLElBQTFDLENBQWdEQyxHQUFELElBQVFBLEdBQXZELENBQWhCO0FBQ0FILE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU14QixPQUEzQjtBQUNILEdBSEQsQ0FHQyxPQUFPdkIsQ0FBUCxFQUFTO0FBQ05DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSixDQVJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qc1wiKTtcbiIsImltcG9ydCBtYXJpYWRiIGZyb20gXCJtYXJpYWRiXCI7XHJcblxyXG5jb25zdCBkYmNvbmZpZyA9IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BUklBREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BUklBREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NQVJJQURCX1BXRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NQVJJQURCX0RCXHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFyaWFEQiA9e1xyXG4gICAgbWFrZUNvbm4gOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWFyaWFkYi5jcmVhdGVDb25uZWN0aW9uKGRiY29uZmlnKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlQ29ubiA6IGFzeW5jIChjb25uKSA9PiB7XHJcbiAgICAgICAgaWYoY29ubil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlhREI7IiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNRTDsiLCJpbXBvcnQgbWFyaWFkYiBmcm9tICcuL01hcmlhREInO1xyXG5pbXBvcnQgU1FMIGZyb20gJy4vU1FMcyc7XHJcblxyXG5jbGFzcyBCb2FyZHtcclxuICAgIC8v6rKM7Iuc7YyQIOuqqeuhney2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0KHBnLGNhdCxub3RlKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgd2hlcmUgPScnO1xyXG4gICAgICAgIChjYXQgIT0nQWxsJykgPyBjYXQgPSBgY2F0ZWdvcnk9JyR7Y2F0fSdgIDogY2F0PScnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICAgICAgaWYoY2F0ICYmIG5vdGUpe1xyXG4gICAgICAgICAgICB3aGVyZSA9IGAgYW5kICR7Y2F0fSBhbmQgKHRpdGxlIGxpa2UgJyXthYzsiqTtirglJyBvciBjb250ZW50IGxpa2UgJyXthYzsiqTtirglJyBvciB1Lm5hbWUgbGlrZSAnJe2FjOyKpO2KuCUnKSBgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfsnbzrsJgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0K3doZXJlK1NRTC5ib2FyZC5zZWxlY3QyLFtwZ10pO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydib2FyZHMnOiByb3dEYXRhfTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RPbmUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0T25lLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8v7L2U66mY7Yq4IOyhsO2ajCDrsI8g7LaU6rCAICAgICBcclxuICAgICAgICAgICAgcm93RGF0YVswXS5jb20gPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5jb21tZW50cyxwYXJhbXMpOyAgICAgICBcclxuICAgICAgICAgICAgLy/sobDtmozsiJgg7Kad6rCAICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGVWaWV3LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydENtdChiaWQsdWlkLGNtdCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWQsdWlkLGNtdF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnRDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v7L2U66mY7Yq4IOyCreygnFxyXG4gICAgYXN5bmMgZGVsZXRlQ210KGNpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtjaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuZGVsZXRlQ210LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+qyjOyLnOq4gCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydChkYXRhKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2RhdGEudGl0bGUsZGF0YS51c2VyaWQsZGF0YS5jb250ZW50LGRhdGEuY2F0ZWdvcnksIGRhdGEuZmFjaWxpdHldO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuaW5zZXJ0LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAgLy/qsozsi5zquIAg7IiY7KCVXHJcbiAgICAgYXN5bmMgbW9kaWZ5KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eSxkYXRhLmJpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGUscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9Qm9hcmQ7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvYm9hcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBsZXQge3BnLGNhdCxub3RlfSA9IHJlcS5xdWVyeTtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0KHBhcnNlSW50KHBnKSxjYXQsbm90ZSkudGhlbigoYmRzKT0+IGJkcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9