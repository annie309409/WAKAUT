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
    login: `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u where u.userid=? && u.passwd=?`
  },
  member: {
    insertFvr: `insert into favorites (userid, facility, region, contact) values (?, ?, ?, ?)`,
    selectFvr: `select fid, facility, region, contact from favorites where userid = ?`,
    deleteFvr: `DELETE FROM favorites WHERE fid = ?`,
    selectMif: `select userid, name, email, phone_number, gender, date_format(birth_date, "%Y-%m-%d") birth_date from users where uid = ? or userid = ?`,
    selectMdf: `SELECT *, DATE_FORMAT(birth_date, '%Y-%m-%d') as birth_date2 FROM users where uid = ? or userid = ?`,
    history: `SELECT count(bid) cnt from boards where writer = ?`,
    isOverlapUid: `select * from users where userid = ?`,
    isOverlapEmail: `select * from users where email = ?`,
    updateInfo: `UPDATE users
                      SET userid = ?, passwd = ?, name = ?,
                          email = ?, phone_number = ?, gender = ?,
                          birth_date = ?, agree_to_privacy_policy = ?,
                          agree_to_advertising_info = ?
                      WHERE uid = ?`,
    join: `insert into users (
            userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info
        ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    socialJoin: `insert into users ( userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info) values (?, 'nopasswd', ?, ?, '000', 'n', '0000-00-00', 1, 1)
        `,
    idcheck: `select * from users where userid=?`,
    leave: `DELETE FROM users WHERE uid = ?`,
    leaveDelete: `DELETE FROM boards WHERE writer = ?`,
    setScore: `insert into ratings (facility,rating) values (?,?)`,
    getScore: `select CAST(count(r.rid) AS char) cnt, CAST(avg(r.rating) AS char) score from ratings r where facility = ?`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZGxpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiZGVsZXRlQ210MiIsImRlbGV0ZSIsInNlbGVjdElkIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwibWVtYmVyIiwiaW5zZXJ0RnZyIiwic2VsZWN0RnZyIiwiZGVsZXRlRnZyIiwic2VsZWN0TWlmIiwic2VsZWN0TWRmIiwiaGlzdG9yeSIsImlzT3ZlcmxhcFVpZCIsImlzT3ZlcmxhcEVtYWlsIiwidXBkYXRlSW5mbyIsImpvaW4iLCJzb2NpYWxKb2luIiwiaWRjaGVjayIsImxlYXZlIiwibGVhdmVEZWxldGUiLCJzZXRTY29yZSIsImdldFNjb3JlIiwiQm9hcmQiLCJwZyIsImNhdCIsIm5vdGUiLCJmY25hbWUiLCJyb3dEYXRhIiwid2hlcmUiLCJxdWVyeSIsInJlc3VsdCIsImJpZCIsInBhcmFtcyIsImNvbSIsImNvbW1pdCIsInVpZCIsImNtdCIsImNpZCIsImRhdGEiLCJ0aXRsZSIsInVzZXJpZCIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImZhY2lsaXR5IiwibW9kaWZ5IiwicmVxIiwicmVzIiwidW5kZWZpbmVkIiwidGhlbiIsImJkcyIsInN0YXR1cyIsImpzb24iLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOzs7O0FBRUEsTUFBTUEsUUFBUSxHQUFHO0FBQ2JDLE1BQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBREw7QUFFYkMsTUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsWUFGTDtBQUdiQyxVQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxXQUhUO0FBSWJD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QyxDQUFQLEVBQVM7QUFDTkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUNKLEdBUEQsTUFPSztBQUNELFFBQUc7QUFDQyxZQUFNK0MsT0FBTyxHQUFHLElBQUlMLG9EQUFKLEdBQVloQyxNQUFaLENBQW1COEQsUUFBUSxDQUFDN0IsRUFBRCxDQUEzQixFQUFnQ0MsR0FBaEMsRUFBb0NDLElBQXBDLEVBQXlDQyxNQUF6QyxFQUFpRHNCLElBQWpELENBQXVEQyxHQUFELElBQVFBLEdBQTlELENBQWhCO0FBQ0FILFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU14QixPQUEzQjtBQUNILEtBSEQsQ0FHQyxPQUFPL0MsQ0FBUCxFQUFTO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSjtBQUNKLENBbEJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2JvYXJkL2JvYXJkbGlzdC5qc1wiKTtcbiIsImltcG9ydCBtYXJpYWRiIGZyb20gXCJtYXJpYWRiXCI7XHJcblxyXG5jb25zdCBkYmNvbmZpZyA9IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BUklBREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BUklBREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NQVJJQURCX1BXRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NQVJJQURCX0RCXHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFyaWFEQiA9e1xyXG4gICAgbWFrZUNvbm4gOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbWFyaWFkYi5jcmVhdGVDb25uZWN0aW9uKGRiY29uZmlnKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlQ29ubiA6IGFzeW5jIChjb25uKSA9PiB7XHJcbiAgICAgICAgaWYoY29ubil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbm4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmlhREI7IiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDI6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBkZWxldGU6YGRlbGV0ZSBmcm9tIGJvYXJkcyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgc2VsZWN0SWQ6YHNlbGVjdCB1aWQgZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1LnVzZXJpZD0/ICYmIHUucGFzc3dkPT9gXHJcbiAgICB9LFxyXG4gICAgbWVtYmVyIDoge1xyXG4gICAgICAgIGluc2VydEZ2ciA6IGBpbnNlcnQgaW50byBmYXZvcml0ZXMgKHVzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCkgdmFsdWVzICg/LCA/LCA/LCA/KWAsXHJcbiAgICAgICAgc2VsZWN0RnZyIDogYHNlbGVjdCBmaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QgZnJvbSBmYXZvcml0ZXMgd2hlcmUgdXNlcmlkID0gP2AsXHJcbiAgICAgICAgZGVsZXRlRnZyIDogYERFTEVURSBGUk9NIGZhdm9yaXRlcyBXSEVSRSBmaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNaWYgOiBgc2VsZWN0IHVzZXJpZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBkYXRlX2Zvcm1hdChiaXJ0aF9kYXRlLCBcIiVZLSVtLSVkXCIpIGJpcnRoX2RhdGUgZnJvbSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIHNlbGVjdE1kZiA6IGBTRUxFQ1QgKiwgREFURV9GT1JNQVQoYmlydGhfZGF0ZSwgJyVZLSVtLSVkJykgYXMgYmlydGhfZGF0ZTIgRlJPTSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGhpc3RvcnkgOiBgU0VMRUNUIGNvdW50KGJpZCkgY250IGZyb20gYm9hcmRzIHdoZXJlIHdyaXRlciA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcFVpZCA6IGBzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcEVtYWlsIDogYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgZW1haWwgPSA/YCxcclxuICAgICAgICB1cGRhdGVJbmZvIDogYFVQREFURSB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgU0VUIHVzZXJpZCA9ID8sIHBhc3N3ZCA9ID8sIG5hbWUgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gPywgcGhvbmVfbnVtYmVyID0gPywgZ2VuZGVyID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aF9kYXRlID0gPywgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3kgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8gPSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBqb2luIDogYGluc2VydCBpbnRvIHVzZXJzIChcclxuICAgICAgICAgICAgdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm9cclxuICAgICAgICApIHZhbHVlcyAoPywgPywgPywgPywgPywgPywgPywgPywgPylgLFxyXG4gICAgICAgIHNvY2lhbEpvaW46YGluc2VydCBpbnRvIHVzZXJzICggdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8pIHZhbHVlcyAoPywgJ25vcGFzc3dkJywgPywgPywgJzAwMCcsICduJywgJzAwMDAtMDAtMDAnLCAxLCAxKVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgaWRjaGVjazpgc2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQ9P2AsXHJcbiAgICAgICAgbGVhdmU6IGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBsZWF2ZURlbGV0ZTogYERFTEVURSBGUk9NIGJvYXJkcyBXSEVSRSB3cml0ZXIgPSA/YCxcclxuICAgICAgICBzZXRTY29yZSA6IGBpbnNlcnQgaW50byByYXRpbmdzIChmYWNpbGl0eSxyYXRpbmcpIHZhbHVlcyAoPyw/KWAsXHJcbiAgICAgICAgZ2V0U2NvcmUgOiBgc2VsZWN0IENBU1QoY291bnQoci5yaWQpIEFTIGNoYXIpIGNudCwgQ0FTVChhdmcoci5yYXRpbmcpIEFTIGNoYXIpIHNjb3JlIGZyb20gcmF0aW5ncyByIHdoZXJlIGZhY2lsaXR5ID0gP2BcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNRTDsiLCJpbXBvcnQgbWFyaWFkYiBmcm9tICcuL01hcmlhREInO1xyXG5pbXBvcnQgU1FMIGZyb20gJy4vU1FMcyc7XHJcblxyXG5jbGFzcyBCb2FyZHtcclxuICAgIC8v6rKM7Iuc7YyQIOuqqeuhney2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0KHBnLGNhdCxub3RlLGZjbmFtZSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHdoZXJlID0nJztcclxuICAgICAgICAoY2F0ICE9J0FsbCcpID8gY2F0ID0gYGNhdGVnb3J5PScke2NhdH0nYCA6IGNhdD0nJztcclxuICAgICAgICBpZihjYXQgJiYgbm90ZSl7XHJcbiAgICAgICAgICAgIHdoZXJlID0gYCBhbmQgJHtjYXR9IGFuZCAodGl0bGUgbGlrZSAnJe2FjOyKpO2KuCUnIG9yIGNvbnRlbnQgbGlrZSAnJe2FjOyKpO2KuCUnIG9yIHUubmFtZSBsaWtlICcl7YWM7Iqk7Yq4JScpIGBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ydvOuwmCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmY25hbWUpIHdoZXJlID1gIGFuZCBmYWNpbGl0eV9uYW1lID0gJyR7ZmNuYW1lfScgYFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdCt3aGVyZStTUUwuYm9hcmQuc2VsZWN0MixbcGddKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0PXsnYm9hcmRzJzogcm93RGF0YX07XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0T25lKGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWRdO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdE9uZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICAvL+y9lOupmO2KuCDsobDtmowg67CPIOy2lOqwgCAgICAgXHJcbiAgICAgICAgICAgIHJvd0RhdGFbMF0uY29tID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuY29tbWVudHMscGFyYW1zKTsgICAgICAgXHJcbiAgICAgICAgICAgIC8v7KGw7ZqM7IiYIOymneqwgCAgICBcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQudXBkYXRlVmlldyxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/svZTrqZjtirgg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnRDbXQoYmlkLHVpZCxjbXQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSAxO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbYmlkLHVpZCxjbXRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuaW5zZXJ0Q210LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZUNtdChjaWQsYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2NpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5kZWxldGVDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOuTseuhnVxyXG4gICAgYXN5bmMgaW5zZXJ0KGRhdGEpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSAxO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZGF0YS50aXRsZSxkYXRhLnVzZXJpZCxkYXRhLmNvbnRlbnQsZGF0YS5jYXRlZ29yeSwgZGF0YS5mYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+qyjOyLnOq4gCDsiJjsoJVcclxuICAgICBhc3luYyBtb2RpZnkoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IDE7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5LGRhdGEuYmlkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGUscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9MTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v6rKM7Iuc6riAIOyCreygnFxyXG4gICAgYXN5bmMgZGVsZXRlKGJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuZGVsZXRlQ210MixwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5kZWxldGUscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9MTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v7IaM7IWcIOyekeyEseyekCDsobDtmoxcclxuICAgIGFzeW5jIHNlbGVjdElkKHVzZXJpZCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSAgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5zZWxlY3RJZCxwYXJhbXMpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1Cb2FyZDtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uLy4uLy4uL21vZGVscy9ib2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGxldCB7cGcsY2F0LG5vdGUsZmNuYW1lLHVzZXJpZH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyaWQpO1xyXG4gICAgaWYodXNlcmlkICE9dW5kZWZpbmVkICl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0SWQodXNlcmlkKS50aGVuKChiZHMpPT4gYmRzKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0KHBhcnNlSW50KHBnKSxjYXQsbm90ZSxmY25hbWUpLnRoZW4oKGJkcyk9PiBiZHMpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByb3dEYXRhKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9