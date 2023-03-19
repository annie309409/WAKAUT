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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/board/boardview.js");
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

/***/ "./pages/api/board/boardview.js":
/*!**************************************!*\
  !*** ./pages/api/board/boardview.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/board */ "./models/board.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_board__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const bid = req.query.bid;

  try {
    const rowData = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().selectOne(bid).then(bds => bds);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJCb2FyZCIsInJvd0RhdGEiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwidGhlbiIsImJkcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDZSxLQUFMLENBQVdYLGNBQUlDLEtBQUosQ0FBVU8sTUFBckIsRUFBNEJNLE1BQTVCLENBQU47QUFDQSxZQUFNbEIsSUFBSSxDQUFDb0IsTUFBTCxFQUFOO0FBQ0gsS0FKRCxDQUlDLE9BQU94QixDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSCxLQU5ELFNBTVM7QUFDTCxZQUFNRixpQkFBUUssU0FBUixFQUFOO0FBQ0g7O0FBQ0QsV0FBT2UsT0FBUDtBQUNIOztBQW5GTTs7QUFzRlhaLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlVSxLQUFmLEM7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPaUIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1kLEdBQUcsR0FBR2EsR0FBRyxDQUFDZixLQUFKLENBQVVFLEdBQXRCOztBQUNBLE1BQUc7QUFDQyxVQUFNSCxPQUFPLEdBQUcsSUFBSUQsb0RBQUosR0FBWU4sU0FBWixDQUFzQlUsR0FBdEIsRUFBMkJlLElBQTNCLENBQWlDQyxHQUFELElBQVFBLEdBQXhDLENBQWhCO0FBQ0FGLE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU1yQixPQUEzQjtBQUNILEdBSEQsQ0FHQyxPQUFPbEIsQ0FBUCxFQUFTO0FBQ05DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSixDQVJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL2JvYXJkdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2JvYXJkL2JvYXJkdmlldy5qc1wiKTtcbiIsImltcG9ydCBtYXJpYWRiIGZyb20gXCJtYXJpYWRiXCI7XHJcblxyXG5jb25zdCBkYmNvbmZpZyA9IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BUklBREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BUklBREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NQVJJQURCX1BXRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NQVJJQURCX0RCXHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFyaWFEQiA9e1xyXG4gICAgbWFrZUNvbm4gOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWFyaWFkYi5jcmVhdGVDb25uZWN0aW9uKGRiY29uZmlnKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlQ29ubiA6IGFzeW5jIChjb25uKSA9PiB7XHJcbiAgICAgICAgaWYoY29ubil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlhREI7IiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgNWAsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IG1hcmlhZGIgZnJvbSAnLi9NYXJpYURCJztcclxuaW1wb3J0IFNRTCBmcm9tICcuL1NRTHMnO1xyXG5cclxuY2xhc3MgQm9hcmR7XHJcbiAgICAvL+qyjOyLnO2MkCDrqqnroZ3stpzroKVcclxuICAgIGFzeW5jIHNlbGVjdCgpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdD17J2JvYXJkcyc6IHJvd0RhdGF9O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvL+qyjOyLnOq4gCDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdE9uZShiaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkXTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3RPbmUscGFyYW1zKTtcclxuICAgICAgICAgICAgLy/svZTrqZjtirgg7KGw7ZqMIOuwjyDstpTqsIAgICAgIFxyXG4gICAgICAgICAgICByb3dEYXRhWzBdLmNvbSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmNvbW1lbnRzLHBhcmFtcyk7ICAgICAgIFxyXG4gICAgICAgICAgICAvL+yhsO2ajOyImCDspp3qsIAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZVZpZXcscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v7L2U66mY7Yq4IOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0Q210KGJpZCx1aWQsY210KXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZCx1aWQsY210XTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmluc2VydENtdCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnQoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEudXNlcmlkLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5XTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmluc2VydCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgIC8v6rKM7Iuc6riAIOyImOyglVxyXG4gICAgIGFzeW5jIG1vZGlmeShkYXRhKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2RhdGEudGl0bGUsZGF0YS5jb250ZW50LGRhdGEuY2F0ZWdvcnksIGRhdGEuZmFjaWxpdHksZGF0YS5iaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQudXBkYXRlLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzPUJvYXJkO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2JvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgYmlkID0gcmVxLnF1ZXJ5LmJpZDtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0T25lKGJpZCkudGhlbigoYmRzKT0+IGJkcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9