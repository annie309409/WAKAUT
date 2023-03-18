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
    select: `select b.* , date_format(b.regdate,'%Y-%m-%d') regdate2, u.name ,CAST(count(c.cid) AS char) cmtcnt from (boards b, users u) left join comments c on b.bid = c.bid where u.uid = b.writer group by b.bid order by b.bid limit 0, 5`,
    selectOne: `select  b.*,date_format(regdate, "%Y-%m-%d") regdate2, u.name  from boards b left join users u on u.uid = b.writer where bid=?`,
    updateView: `update boards set views = views+1  where bid=?`,
    comments: `select c.*,date_format(c.regdate, "%Y-%m-%d") regdate2,u.name  from comments c left join users u on c.userid = u.uid  where c.bid =?`,
    insertCmt: `insert into comments (bid,userid,comment) values(?,?,?)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJCb2FyZCIsInJvd0RhdGEiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsInJlcSIsInJlcyIsInRoZW4iLCJiZHMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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LEdBQWVRLEtBQWYsQzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9VLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNUCxHQUFHLEdBQUdNLEdBQUcsQ0FBQ1IsS0FBSixDQUFVRSxHQUF0Qjs7QUFDQSxNQUFHO0FBQ0MsVUFBTUgsT0FBTyxHQUFHLElBQUlELG9EQUFKLEdBQVlKLFNBQVosQ0FBc0JRLEdBQXRCLEVBQTJCUSxJQUEzQixDQUFpQ0MsR0FBRCxJQUFRQSxHQUF4QyxDQUFoQjtBQUNBRixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNZCxPQUEzQjtBQUNILEdBSEQsQ0FHQyxPQUFPaEIsQ0FBUCxFQUFTO0FBQ05DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSixDQVJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL2JvYXJkdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2JvYXJkL2JvYXJkdmlldy5qc1wiKTtcbiIsImltcG9ydCBtYXJpYWRiIGZyb20gXCJtYXJpYWRiXCI7XHJcblxyXG5jb25zdCBkYmNvbmZpZyA9IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BUklBREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BUklBREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NQVJJQURCX1BXRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NQVJJQURCX0RCXHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFyaWFEQiA9e1xyXG4gICAgbWFrZUNvbm4gOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWFyaWFkYi5jcmVhdGVDb25uZWN0aW9uKGRiY29uZmlnKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlQ29ubiA6IGFzeW5jIChjb25uKSA9PiB7XHJcbiAgICAgICAgaWYoY29ubil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlhREI7IiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGxpbWl0IDAsIDVgLFxyXG4gICAgICAgIHNlbGVjdE9uZTpgc2VsZWN0ICBiLiosZGF0ZV9mb3JtYXQocmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMiwgdS5uYW1lICBmcm9tIGJvYXJkcyBiIGxlZnQgam9pbiB1c2VycyB1IG9uIHUudWlkID0gYi53cml0ZXIgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHVwZGF0ZVZpZXc6YHVwZGF0ZSBib2FyZHMgc2V0IHZpZXdzID0gdmlld3MrMSAgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIGNvbW1lbnRzIDogYHNlbGVjdCBjLiosZGF0ZV9mb3JtYXQoYy5yZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLHUubmFtZSAgZnJvbSBjb21tZW50cyBjIGxlZnQgam9pbiB1c2VycyB1IG9uIGMudXNlcmlkID0gdS51aWQgIHdoZXJlIGMuYmlkID0/YCxcclxuICAgICAgICBpbnNlcnRDbXQgOiBgaW5zZXJ0IGludG8gY29tbWVudHMgKGJpZCx1c2VyaWQsY29tbWVudCkgdmFsdWVzKD8sPyw/KWBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1FMOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIEJvYXJke1xyXG4gICAgLy/qsozsi5ztjJAg66qp66Gd7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3QoKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3QpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydib2FyZHMnOiByb3dEYXRhfTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RPbmUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0T25lLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8v7L2U66mY7Yq4IOyhsO2ajCDrsI8g7LaU6rCAICAgICBcclxuICAgICAgICAgICAgcm93RGF0YVswXS5jb20gPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5jb21tZW50cyxwYXJhbXMpOyAgICAgICBcclxuICAgICAgICAgICAgLy/sobDtmozsiJgg7Kad6rCAICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGVWaWV3LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydENtdChiaWQsdWlkLGNtdCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWQsdWlkLGNtdF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnRDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9Qm9hcmQ7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvYm9hcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBiaWQgPSByZXEucXVlcnkuYmlkO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJvd0RhdGEgPSBuZXcgQm9hcmQoKS5zZWxlY3RPbmUoYmlkKS50aGVuKChiZHMpPT4gYmRzKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByb3dEYXRhKTtcclxuICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJpYWRiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=