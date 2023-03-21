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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiQm9hcmQiLCJwZyIsImNhdCIsIm5vdGUiLCJyb3dEYXRhIiwid2hlcmUiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImNpZCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwidGhlbiIsImJkcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQURMO0FBRWJDLE1BQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFlBRkw7QUFHYkMsVUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FIVDtBQUliQyxVQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTztBQUpULENBQWpCO0FBUUEsTUFBTUMsT0FBTyxHQUFFO0FBQ1hDLFVBQVEsRUFBRyxZQUFZO0FBQ25CLFFBQUc7QUFDQyxhQUFPLE1BQU1DLGlCQUFRQyxnQkFBUixDQUF5QmQsUUFBekIsQ0FBYjtBQUNILEtBRkQsQ0FFQyxPQUFPZSxDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUNKLEdBUFU7QUFRWEcsV0FBUyxFQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDeEIsUUFBR0EsSUFBSCxFQUFRO0FBQ0osVUFBRztBQUNDLGNBQU1BLElBQUksQ0FBQ0MsS0FBTCxFQUFOO0FBQ0gsT0FGRCxDQUVDLE9BQU9MLENBQVAsRUFBUztBQUNOQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBQ0o7QUFDSjtBQWhCVSxDQUFmO0FBbUJBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLE9BQWpCLEM7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBLE1BQU1ZLEdBQUcsR0FBQztBQUNOQyxPQUFLLEVBQUc7QUFDSkMsVUFBTSxFQUFJLDJMQUROO0FBRUpDLFdBQU8sRUFBSSxnREFGUDtBQUdKQyxhQUFTLEVBQUUsZ0lBSFA7QUFJSkMsY0FBVSxFQUFFLGdEQUpSO0FBS0pDLFlBQVEsRUFBSSxzSUFMUjtBQU1KQyxhQUFTLEVBQUkseURBTlQ7QUFPSkMsVUFBTSxFQUFJLDRGQVBOO0FBUUpDLFVBQU0sRUFBRyw4RUFSTDtBQVNKQyxhQUFTLEVBQUU7QUFUUDtBQURGLENBQVY7QUFjZVYsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFDQTs7OztBQUVBLE1BQU1XLEtBQU4sQ0FBVztBQUNQO0FBQ0EsUUFBTVQsTUFBTixDQUFhVSxFQUFiLEVBQWdCQyxHQUFoQixFQUFvQkMsSUFBcEIsRUFBeUI7QUFDckIsUUFBSWxCLElBQUksR0FBSSxJQUFaO0FBQ0EsUUFBSW1CLE9BQU8sR0FBRyxJQUFkO0FBQ0EsUUFBSUMsS0FBSyxHQUFFLEVBQVg7QUFDQ0gsT0FBRyxJQUFHLEtBQVAsR0FBZ0JBLEdBQUcsR0FBSSxhQUFZQSxHQUFJLEdBQXZDLEdBQTRDQSxHQUFHLEdBQUMsRUFBaEQ7QUFDQXBCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbUIsR0FBWjs7QUFDQSxRQUFHQSxHQUFHLElBQUlDLElBQVYsRUFBZTtBQUNYRSxXQUFLLEdBQUksUUFBT0gsR0FBSSwyRUFBcEI7QUFDSCxLQUZELE1BRUs7QUFDRHBCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDSDs7QUFDRCxRQUFHO0FBQ0NFLFVBQUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EwQixhQUFPLEdBQUksTUFBTW5CLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV2pCLGNBQUlDLEtBQUosQ0FBVUMsTUFBVixHQUFpQmMsS0FBakIsR0FBdUJoQixjQUFJQyxLQUFKLENBQVVFLE9BQTVDLEVBQW9ELENBQUNTLEVBQUQsQ0FBcEQsQ0FBakI7QUFDSCxLQUhELENBR0MsT0FBT3BCLENBQVAsRUFBVTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILEtBTEQsU0FLUztBQUNMLFlBQU1GLGlCQUFRSyxTQUFSLEVBQU47QUFDSDs7QUFDRCxRQUFJdUIsTUFBTSxHQUFDO0FBQUMsZ0JBQVVIO0FBQVgsS0FBWDtBQUNBLFdBQU9HLE1BQVA7QUFDSCxHQXZCTSxDQXdCUDs7O0FBQ0EsUUFBTWQsU0FBTixDQUFnQmUsR0FBaEIsRUFBb0I7QUFDaEIsUUFBSXZCLElBQUksR0FBSSxJQUFaO0FBQ0EsUUFBSW1CLE9BQU8sR0FBRyxJQUFkO0FBQ0EsUUFBSUssTUFBTSxHQUFHLENBQUNELEdBQUQsQ0FBYjs7QUFDQSxRQUFHO0FBQ0N2QixVQUFJLEdBQUUsTUFBTU4saUJBQVFELFFBQVIsRUFBWjtBQUNBMEIsYUFBTyxHQUFJLE1BQU1uQixJQUFJLENBQUNxQixLQUFMLENBQVdqQixjQUFJQyxLQUFKLENBQVVHLFNBQXJCLEVBQStCZ0IsTUFBL0IsQ0FBakIsQ0FGRCxDQUdDOztBQUNBTCxhQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdNLEdBQVgsR0FBaUIsTUFBTXpCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV2pCLGNBQUlDLEtBQUosQ0FBVUssUUFBckIsRUFBOEJjLE1BQTlCLENBQXZCLENBSkQsQ0FLQzs7QUFDQSxZQUFNeEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXakIsY0FBSUMsS0FBSixDQUFVSSxVQUFyQixFQUFnQ2UsTUFBaEMsQ0FBTjtBQUNBLFlBQU14QixJQUFJLENBQUMwQixNQUFMLEVBQU47QUFDSCxLQVJELENBUUMsT0FBTzlCLENBQVAsRUFBVTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILEtBVkQsU0FVUztBQUNMLFlBQU1GLGlCQUFRSyxTQUFSLEVBQU47QUFDSDs7QUFDRCxXQUFPb0IsT0FBUDtBQUNILEdBM0NNLENBNENQOzs7QUFDQSxRQUFNUixTQUFOLENBQWdCWSxHQUFoQixFQUFvQkksR0FBcEIsRUFBd0JDLEdBQXhCLEVBQTRCO0FBQ3hCLFFBQUk1QixJQUFJLEdBQUksSUFBWjtBQUNBLFFBQUltQixPQUFPLEdBQUcsSUFBZDtBQUNBLFFBQUlLLE1BQU0sR0FBRyxDQUFDRCxHQUFELEVBQUtJLEdBQUwsRUFBU0MsR0FBVCxDQUFiOztBQUNBLFFBQUc7QUFDQzVCLFVBQUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDcUIsS0FBTCxDQUFXakIsY0FBSUMsS0FBSixDQUFVTSxTQUFyQixFQUErQmEsTUFBL0IsQ0FBTjtBQUNBLFlBQU14QixJQUFJLENBQUMwQixNQUFMLEVBQU47QUFDSCxLQUpELENBSUMsT0FBTzlCLENBQVAsRUFBVTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILEtBTkQsU0FNUztBQUNMLFlBQU1GLGlCQUFRSyxTQUFSLEVBQU47QUFDSDs7QUFDRCxXQUFPb0IsT0FBUDtBQUNILEdBM0RNLENBNERQOzs7QUFDQSxRQUFNTCxTQUFOLENBQWdCZSxHQUFoQixFQUFvQjtBQUNoQixRQUFJN0IsSUFBSSxHQUFJLElBQVo7QUFDQSxRQUFJbUIsT0FBTyxHQUFHLElBQWQ7QUFDQSxRQUFJSyxNQUFNLEdBQUcsQ0FBQ0ssR0FBRCxDQUFiOztBQUNBLFFBQUc7QUFDQzdCLFVBQUksR0FBRSxNQUFNTixpQkFBUUQsUUFBUixFQUFaO0FBQ0EsWUFBTU8sSUFBSSxDQUFDcUIsS0FBTCxDQUFXakIsY0FBSUMsS0FBSixDQUFVUyxTQUFyQixFQUErQlUsTUFBL0IsQ0FBTjtBQUNBLFlBQU14QixJQUFJLENBQUMwQixNQUFMLEVBQU47QUFDSCxLQUpELENBSUMsT0FBTzlCLENBQVAsRUFBVTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILEtBTkQsU0FNUztBQUNMLFlBQU1GLGlCQUFRSyxTQUFSLEVBQU47QUFDSDs7QUFDRCxXQUFPb0IsT0FBUDtBQUNILEdBM0VNLENBNEVQOzs7QUFDQSxRQUFNUCxNQUFOLENBQWFrQixJQUFiLEVBQWtCO0FBQ2QsUUFBSTlCLElBQUksR0FBSSxJQUFaO0FBQ0EsUUFBSW1CLE9BQU8sR0FBRyxJQUFkO0FBQ0EsUUFBSUssTUFBTSxHQUFHLENBQUNNLElBQUksQ0FBQ0MsS0FBTixFQUFZRCxJQUFJLENBQUNFLE1BQWpCLEVBQXdCRixJQUFJLENBQUNHLE9BQTdCLEVBQXFDSCxJQUFJLENBQUNJLFFBQTFDLEVBQW9ESixJQUFJLENBQUNLLFFBQXpELENBQWI7O0FBQ0EsUUFBRztBQUNDbkMsVUFBSSxHQUFFLE1BQU1OLGlCQUFRRCxRQUFSLEVBQVo7QUFDQSxZQUFNTyxJQUFJLENBQUNxQixLQUFMLENBQVdqQixjQUFJQyxLQUFKLENBQVVPLE1BQXJCLEVBQTRCWSxNQUE1QixDQUFOO0FBQ0EsWUFBTXhCLElBQUksQ0FBQzBCLE1BQUwsRUFBTjtBQUNILEtBSkQsQ0FJQyxPQUFPOUIsQ0FBUCxFQUFVO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0gsS0FORCxTQU1TO0FBQ0wsWUFBTUYsaUJBQVFLLFNBQVIsRUFBTjtBQUNIOztBQUNELFdBQU9vQixPQUFQO0FBQ0gsR0EzRk0sQ0E0Rk47OztBQUNBLFFBQU1pQixNQUFOLENBQWFOLElBQWIsRUFBa0I7QUFDZixRQUFJOUIsSUFBSSxHQUFJLElBQVo7QUFDQSxRQUFJbUIsT0FBTyxHQUFHLElBQWQ7QUFDQSxRQUFJSyxNQUFNLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxLQUFOLEVBQVlELElBQUksQ0FBQ0csT0FBakIsRUFBeUJILElBQUksQ0FBQ0ksUUFBOUIsRUFBd0NKLElBQUksQ0FBQ0ssUUFBN0MsRUFBc0RMLElBQUksQ0FBQ1AsR0FBM0QsQ0FBYjs7QUFDQSxRQUFHO0FBQ0N2QixVQUFJLEdBQUUsTUFBTU4saUJBQVFELFFBQVIsRUFBWjtBQUNDLFlBQU1PLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV2pCLGNBQUlDLEtBQUosQ0FBVVEsTUFBckIsRUFBNEJXLE1BQTVCLENBQU47QUFDRCxZQUFNeEIsSUFBSSxDQUFDMEIsTUFBTCxFQUFOO0FBQ0FQLGFBQU8sR0FBRSxDQUFUO0FBQ0gsS0FMRCxDQUtDLE9BQU92QixDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSCxLQVBELFNBT1M7QUFDTCxZQUFNRixpQkFBUUssU0FBUixFQUFOO0FBQ0g7O0FBQ0QsV0FBT29CLE9BQVA7QUFDSDs7QUE1R007O0FBK0dYakIsTUFBTSxDQUFDQyxPQUFQLEdBQWVZLEtBQWYsQzs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9zQixHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTWYsR0FBRyxHQUFHYyxHQUFHLENBQUNoQixLQUFKLENBQVVFLEdBQXRCOztBQUNBLE1BQUc7QUFDQyxVQUFNSixPQUFPLEdBQUcsSUFBSUosb0RBQUosR0FBWVAsU0FBWixDQUFzQmUsR0FBdEIsRUFBMkJnQixJQUEzQixDQUFpQ0MsR0FBRCxJQUFRQSxHQUF4QyxDQUFoQjtBQUNBRixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNdkIsT0FBM0I7QUFDSCxHQUhELENBR0MsT0FBT3ZCLENBQVAsRUFBUztBQUNOQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBQ0osQ0FSRCxFOzs7Ozs7Ozs7OztBQ0ZBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBgLFxyXG4gICAgICAgIHNlbGVjdDIgOiBgIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgP2AsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YCxcclxuICAgICAgICBkZWxldGVDbXQ6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGNpZD0/YFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IG1hcmlhZGIgZnJvbSAnLi9NYXJpYURCJztcclxuaW1wb3J0IFNRTCBmcm9tICcuL1NRTHMnO1xyXG5cclxuY2xhc3MgQm9hcmR7XHJcbiAgICAvL+qyjOyLnO2MkCDrqqnroZ3stpzroKVcclxuICAgIGFzeW5jIHNlbGVjdChwZyxjYXQsbm90ZSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHdoZXJlID0nJztcclxuICAgICAgICAoY2F0ICE9J0FsbCcpID8gY2F0ID0gYGNhdGVnb3J5PScke2NhdH0nYCA6IGNhdD0nJztcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgICAgIGlmKGNhdCAmJiBub3RlKXtcclxuICAgICAgICAgICAgd2hlcmUgPSBgIGFuZCAke2NhdH0gYW5kICh0aXRsZSBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgY29udGVudCBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgdS5uYW1lIGxpa2UgJyXthYzsiqTtirglJykgYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7J2867CYJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdCt3aGVyZStTUUwuYm9hcmQuc2VsZWN0MixbcGddKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0PXsnYm9hcmRzJzogcm93RGF0YX07XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0T25lKGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWRdO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdE9uZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICAvL+y9lOupmO2KuCDsobDtmowg67CPIOy2lOqwgCAgICAgXHJcbiAgICAgICAgICAgIHJvd0RhdGFbMF0uY29tID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuY29tbWVudHMscGFyYW1zKTsgICAgICAgXHJcbiAgICAgICAgICAgIC8v7KGw7ZqM7IiYIOymneqwgCAgICBcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQudXBkYXRlVmlldyxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/svZTrqZjtirgg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnRDbXQoYmlkLHVpZCxjbXQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkLHVpZCxjbXRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuaW5zZXJ0Q210LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZUNtdChjaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbY2lkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmRlbGV0ZUNtdCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnQoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEudXNlcmlkLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5XTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmluc2VydCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgIC8v6rKM7Iuc6riAIOyImOyglVxyXG4gICAgIGFzeW5jIG1vZGlmeShkYXRhKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2RhdGEudGl0bGUsZGF0YS5jb250ZW50LGRhdGEuY2F0ZWdvcnksIGRhdGEuZmFjaWxpdHksZGF0YS5iaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0xO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1Cb2FyZDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uLy4uLy4uL21vZGVscy9ib2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IGJpZCA9IHJlcS5xdWVyeS5iaWQ7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IG5ldyBCb2FyZCgpLnNlbGVjdE9uZShiaWQpLnRoZW4oKGJkcyk9PiBiZHMpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IHJvd0RhdGEpO1xyXG4gICAgfWNhdGNoIChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmlhZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==