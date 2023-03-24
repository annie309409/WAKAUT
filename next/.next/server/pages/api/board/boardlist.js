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
    deleteCmt: `delete from comments where cid=?`,
    deleteCmt2: `delete from comments where bid=?`,
    delete: `delete from boards where bid=?`,
    selectId: `select uid from users where userid = ?`
  },
  admin: {
    selectUsers: `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u`
  },
  user: {
    login: `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u where u.name=? && u.passwd=?`
  },
  member: {
    insertFvr: `insert into favorites (userid, facility, region, contact) values (?, ?, ?, ?)`,
    selectFvr: `select facility, region, contact from favorites where userid = ?`,
    selectMif: `select userid, name, email, phone_number, gender, date_format(birth_date, "%Y-%m-%d") birth_date from users where uid = ?`,
    selectMdf: `SELECT *, DATE_FORMAT(birth_date, '%Y-%m-%d') as birth_date2 FROM users where uid = ?`,
    updateInfo: `UPDATE users
                      SET userid = ?, passwd = ?, name = ?,
                          email = ?, phone_number = ?, gender = ?,
                          birth_date = ?, agree_to_privacy_policy = ?,
                          agree_to_advertising_info = ?
                      WHERE uid = 1`,
    join: `insert into users (
            userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info
        ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    socialJoin: `insert into users ( userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info) values (?, 'nopasswd', ?, ?, '000', 'n', '0000-00-00', 1, 1)
        `,
    idcheck: `select * from users where userid=?`
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
  async select(pg, cat, note, fcname) {
    let conn = null;
    let rowData = null;
    let where = '';
    cat != 'All' ? cat = `category='${cat}'` : cat = '';

    if (cat && note) {
      where = ` and ${cat} and (title like '%테스트%' or content like '%테스트%' or u.name like '%테스트%') `;
    } else {
      console.log('일반');
    }

    if (fcname) where = ` and facility_name = '${fcname}' `;

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
    let rowData = 1;
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
    let rowData = 1;
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
    let rowData = 1;
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
  } //소셜 작성자 조회


  async selectId(userid) {
    let conn = null;
    let rowData = null;
    let params = [userid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.board.selectId, params);
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
    note,
    fcname,
    userid
  } = req.query;
  console.log(userid);

  if (userid != undefined) {
    try {
      const rowData = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().selectId(userid).then(bds => bds);
      res.status(200).json(await rowData);
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const rowData = new _models_board__WEBPACK_IMPORTED_MODULE_0___default.a().select(parseInt(pg), cat, note, fcname).then(bds => bds);
      res.status(200).json(await rowData);
    } catch (e) {
      console.log(e);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiZGVsZXRlQ210MiIsImRlbGV0ZSIsInNlbGVjdElkIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwibWVtYmVyIiwiaW5zZXJ0RnZyIiwic2VsZWN0RnZyIiwic2VsZWN0TWlmIiwic2VsZWN0TWRmIiwidXBkYXRlSW5mbyIsImpvaW4iLCJzb2NpYWxKb2luIiwiaWRjaGVjayIsIkJvYXJkIiwicGciLCJjYXQiLCJub3RlIiwiZmNuYW1lIiwicm93RGF0YSIsIndoZXJlIiwicXVlcnkiLCJyZXN1bHQiLCJiaWQiLCJwYXJhbXMiLCJjb20iLCJjb21taXQiLCJ1aWQiLCJjbXQiLCJjaWQiLCJkYXRhIiwidGl0bGUiLCJ1c2VyaWQiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJmYWNpbGl0eSIsIm1vZGlmeSIsInJlcSIsInJlcyIsInVuZGVmaW5lZCIsInRoZW4iLCJiZHMiLCJzdGF0dXMiLCJqc29uIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQURMO0FBRWJDLE1BQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFlBRkw7QUFHYkMsVUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FIVDtBQUliQyxVQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTztBQUpULENBQWpCO0FBUUEsTUFBTUMsT0FBTyxHQUFFO0FBQ1hDLFVBQVEsRUFBRyxZQUFZO0FBQ25CLFFBQUc7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QU14QixPQUEzQjtBQUNILEtBSEQsQ0FHQyxPQUFPdkMsQ0FBUCxFQUFTO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSjtBQUNKLENBbEJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qc1wiKTtcbiIsImltcG9ydCBtYXJpYWRiIGZyb20gXCJtYXJpYWRiXCI7XHJcblxyXG5jb25zdCBkYmNvbmZpZyA9IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BUklBREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BUklBREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NQVJJQURCX1BXRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NQVJJQURCX0RCXHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFyaWFEQiA9e1xyXG4gICAgbWFrZUNvbm4gOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWFyaWFkYi5jcmVhdGVDb25uZWN0aW9uKGRiY29uZmlnKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlQ29ubiA6IGFzeW5jIChjb25uKSA9PiB7XHJcbiAgICAgICAgaWYoY29ubil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlhREI7IiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDI6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBkZWxldGU6YGRlbGV0ZSBmcm9tIGJvYXJkcyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgc2VsZWN0SWQ6YHNlbGVjdCB1aWQgZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1Lm5hbWU9PyAmJiB1LnBhc3N3ZD0/YFxyXG4gICAgfSxcclxuICAgIG1lbWJlciA6IHtcclxuICAgICAgICBpbnNlcnRGdnIgOiBgaW5zZXJ0IGludG8gZmF2b3JpdGVzICh1c2VyaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QpIHZhbHVlcyAoPywgPywgPywgPylgLFxyXG4gICAgICAgIHNlbGVjdEZ2ciA6IGBzZWxlY3QgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCBmcm9tIGZhdm9yaXRlcyB3aGVyZSB1c2VyaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNaWYgOiBgc2VsZWN0IHVzZXJpZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBkYXRlX2Zvcm1hdChiaXJ0aF9kYXRlLCBcIiVZLSVtLSVkXCIpIGJpcnRoX2RhdGUgZnJvbSB1c2VycyB3aGVyZSB1aWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNZGYgOiBgU0VMRUNUICosIERBVEVfRk9STUFUKGJpcnRoX2RhdGUsICclWS0lbS0lZCcpIGFzIGJpcnRoX2RhdGUyIEZST00gdXNlcnMgd2hlcmUgdWlkID0gP2AsXHJcbiAgICAgICAgdXBkYXRlSW5mbyA6IGBVUERBVEUgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIFNFVCB1c2VyaWQgPSA/LCBwYXNzd2QgPSA/LCBuYW1lID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9ID8sIHBob25lX251bWJlciA9ID8sIGdlbmRlciA9ID8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhfZGF0ZSA9ID8sIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5ID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvID0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgdWlkID0gMWAsXHJcbiAgICAgICAgam9pbiA6IGBpbnNlcnQgaW50byB1c2VycyAoXHJcbiAgICAgICAgICAgIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvXHJcbiAgICAgICAgKSB2YWx1ZXMgKD8sID8sID8sID8sID8sID8sID8sID8sID8pYCxcclxuICAgICAgICBzb2NpYWxKb2luOmBpbnNlcnQgaW50byB1c2VycyAoIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKSB2YWx1ZXMgKD8sICdub3Bhc3N3ZCcsID8sID8sICcwMDAnLCAnbicsICcwMDAwLTAwLTAwJywgMSwgMSlcclxuICAgICAgICBgLFxyXG4gICAgICAgIGlkY2hlY2s6YHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgdXNlcmlkPT9gXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IG1hcmlhZGIgZnJvbSAnLi9NYXJpYURCJztcclxuaW1wb3J0IFNRTCBmcm9tICcuL1NRTHMnO1xyXG5cclxuY2xhc3MgQm9hcmR7XHJcbiAgICAvL+qyjOyLnO2MkCDrqqnroZ3stpzroKVcclxuICAgIGFzeW5jIHNlbGVjdChwZyxjYXQsbm90ZSxmY25hbWUpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCB3aGVyZSA9Jyc7XHJcbiAgICAgICAgKGNhdCAhPSdBbGwnKSA/IGNhdCA9IGBjYXRlZ29yeT0nJHtjYXR9J2AgOiBjYXQ9Jyc7XHJcbiAgICAgICAgaWYoY2F0ICYmIG5vdGUpe1xyXG4gICAgICAgICAgICB3aGVyZSA9IGAgYW5kICR7Y2F0fSBhbmQgKHRpdGxlIGxpa2UgJyXthYzsiqTtirglJyBvciBjb250ZW50IGxpa2UgJyXthYzsiqTtirglJyBvciB1Lm5hbWUgbGlrZSAnJe2FjOyKpO2KuCUnKSBgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfsnbzrsJgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmNuYW1lKSB3aGVyZSA9YCBhbmQgZmFjaWxpdHlfbmFtZSA9ICcke2ZjbmFtZX0nIGBcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3Qrd2hlcmUrU1FMLmJvYXJkLnNlbGVjdDIsW3BnXSk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdD17J2JvYXJkcyc6IHJvd0RhdGF9O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvL+qyjOyLnOq4gCDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdE9uZShiaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkXTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3RPbmUscGFyYW1zKTtcclxuICAgICAgICAgICAgLy/svZTrqZjtirgg7KGw7ZqMIOuwjyDstpTqsIAgICAgIFxyXG4gICAgICAgICAgICByb3dEYXRhWzBdLmNvbSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmNvbW1lbnRzLHBhcmFtcyk7ICAgICAgIFxyXG4gICAgICAgICAgICAvL+yhsO2ajOyImCDspp3qsIAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZVZpZXcscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v7L2U66mY7Yq4IOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0Q210KGJpZCx1aWQsY210KXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZCx1aWQsY210XTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmluc2VydENtdCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/svZTrqZjtirgg7IKt7KCcXHJcbiAgICBhc3luYyBkZWxldGVDbXQoY2lkLGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtjaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuZGVsZXRlQ210LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+qyjOyLnOq4gCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydChkYXRhKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2RhdGEudGl0bGUsZGF0YS51c2VyaWQsZGF0YS5jb250ZW50LGRhdGEuY2F0ZWdvcnksIGRhdGEuZmFjaWxpdHldO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuaW5zZXJ0LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAgLy/qsozsi5zquIAg7IiY7KCVXHJcbiAgICAgYXN5bmMgbW9kaWZ5KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSAxO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eSxkYXRhLmJpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQudXBkYXRlLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPTE7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+qyjOyLnOq4gCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZShiaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmRlbGV0ZUNtdDIscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuZGVsZXRlLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPTE7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+yGjOyFnCDsnpHshLHsnpAg7KGw7ZqMXHJcbiAgICBhc3luYyBzZWxlY3RJZCh1c2VyaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0SWQscGFyYW1zKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHM9Qm9hcmQ7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvYm9hcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBsZXQge3BnLGNhdCxub3RlLGZjbmFtZSx1c2VyaWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2codXNlcmlkKTtcclxuICAgIGlmKHVzZXJpZCAhPXVuZGVmaW5lZCApe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3Qgcm93RGF0YSA9IG5ldyBCb2FyZCgpLnNlbGVjdElkKHVzZXJpZCkudGhlbigoYmRzKT0+IGJkcyk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IHJvd0RhdGEpO1xyXG4gICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3Qgcm93RGF0YSA9IG5ldyBCb2FyZCgpLnNlbGVjdChwYXJzZUludChwZyksY2F0LG5vdGUsZmNuYW1lKS50aGVuKChiZHMpPT4gYmRzKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmlhZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==