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
  try {
    const rowData = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().select().then(bds => bds);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJCb2FyZCIsInJvd0RhdGEiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwidGhlbiIsImJkcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDZSxLQUFMLENBQVdYLGNBQUlDLEtBQUosQ0FBVU8sTUFBckIsRUFBNEJNLE1BQTVCLENBQU47QUFDQSxZQUFNbEIsSUFBSSxDQUFDb0IsTUFBTCxFQUFOO0FBQ0gsS0FKRCxDQUlDLE9BQU94QixDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSCxLQU5ELFNBTVM7QUFDTCxZQUFNRixpQkFBUUssU0FBUixFQUFOO0FBQ0g7O0FBQ0QsV0FBT2UsT0FBUDtBQUNIOztBQW5GTTs7QUFzRlhaLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlVSxLQUFmLEM7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPaUIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUc7QUFDQyxVQUFNakIsT0FBTyxHQUFHLElBQUlELG9EQUFKLEdBQVlQLE1BQVosR0FBcUIwQixJQUFyQixDQUEyQkMsR0FBRCxJQUFRQSxHQUFsQyxDQUFoQjtBQUNBRixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNckIsT0FBM0I7QUFDSCxHQUhELENBR0MsT0FBT2xCLENBQVAsRUFBUztBQUNOQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBQ0osQ0FQRCxFOzs7Ozs7Ozs7OztBQ0ZBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBncm91cCBieSBiLmJpZCBvcmRlciBieSBiLmJpZCBkZXNjIGxpbWl0IDAsIDVgLFxyXG4gICAgICAgIHNlbGVjdE9uZTpgc2VsZWN0ICBiLiosZGF0ZV9mb3JtYXQocmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMiwgdS5uYW1lICBmcm9tIGJvYXJkcyBiIGxlZnQgam9pbiB1c2VycyB1IG9uIHUudWlkID0gYi53cml0ZXIgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHVwZGF0ZVZpZXc6YHVwZGF0ZSBib2FyZHMgc2V0IHZpZXdzID0gdmlld3MrMSAgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIGNvbW1lbnRzIDogYHNlbGVjdCBjLiosZGF0ZV9mb3JtYXQoYy5yZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLHUubmFtZSAgZnJvbSBjb21tZW50cyBjIGxlZnQgam9pbiB1c2VycyB1IG9uIGMudXNlcmlkID0gdS51aWQgIHdoZXJlIGMuYmlkID0/YCxcclxuICAgICAgICBpbnNlcnRDbXQgOiBgaW5zZXJ0IGludG8gY29tbWVudHMgKGJpZCx1c2VyaWQsY29tbWVudCkgdmFsdWVzKD8sPyw/KWAsXHJcbiAgICAgICAgaW5zZXJ0IDogYGluc2VydCBpbnRvIGJvYXJkcyAodGl0bGUsd3JpdGVyLGNvbnRlbnQsdmlld3MsY2F0ZWdvcnksZmFjaWxpdHlfbmFtZSkgdmFsdWVzKD8sPyw/LDAsPyw/KWAsXHJcbiAgICAgICAgdXBkYXRlIDpgdXBkYXRlIGJvYXJkcyBzZXQgdGl0bGU9Pyxjb250ZW50PT8sY2F0ZWdvcnk9PyxmYWNpbGl0eV9uYW1lPT8gV0hFUkUgYmlkID0gP2BcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1FMOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIEJvYXJke1xyXG4gICAgLy/qsozsi5ztjJAg66qp66Gd7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3QoKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3QpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydib2FyZHMnOiByb3dEYXRhfTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RPbmUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0T25lLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8v7L2U66mY7Yq4IOyhsO2ajCDrsI8g7LaU6rCAICAgICBcclxuICAgICAgICAgICAgcm93RGF0YVswXS5jb20gPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5jb21tZW50cyxwYXJhbXMpOyAgICAgICBcclxuICAgICAgICAgICAgLy/sobDtmozsiJgg7Kad6rCAICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGVWaWV3LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydENtdChiaWQsdWlkLGNtdCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWQsdWlkLGNtdF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnRDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLnVzZXJpZCxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+qyjOyLnOq4gCDsiJjsoJVcclxuICAgICBhc3luYyBtb2RpZnkoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5LGRhdGEuYmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1Cb2FyZDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uLy4uLy4uL21vZGVscy9ib2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0KCkudGhlbigoYmRzKT0+IGJkcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9