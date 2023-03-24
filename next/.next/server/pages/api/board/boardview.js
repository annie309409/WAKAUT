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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1NRTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiU1FMIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiZGVsZXRlQ210MiIsImRlbGV0ZSIsInNlbGVjdElkIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwibWVtYmVyIiwiaW5zZXJ0RnZyIiwic2VsZWN0RnZyIiwic2VsZWN0TWlmIiwic2VsZWN0TWRmIiwidXBkYXRlSW5mbyIsImpvaW4iLCJzb2NpYWxKb2luIiwiaWRjaGVjayIsIkJvYXJkIiwicGciLCJjYXQiLCJub3RlIiwiZmNuYW1lIiwicm93RGF0YSIsIndoZXJlIiwicXVlcnkiLCJyZXN1bHQiLCJiaWQiLCJwYXJhbXMiLCJjb20iLCJjb21taXQiLCJ1aWQiLCJjbXQiLCJjaWQiLCJkYXRhIiwidGl0bGUiLCJ1c2VyaWQiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJmYWNpbGl0eSIsIm1vZGlmeSIsInJlcSIsInJlcyIsInRoZW4iLCJiZHMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDYkMsTUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFETDtBQUViQyxNQUFJLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxZQUZMO0FBR2JDLFVBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFdBSFQ7QUFJYkMsVUFBUSxFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU87QUFKVCxDQUFqQjtBQVFBLE1BQU1DLE9BQU8sR0FBRTtBQUNYQyxVQUFRLEVBQUcsWUFBWTtBQUNuQixRQUFHO0FBQ0MsYUFBTyxNQUFNQyxpQkFBUUMs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QyxDQUFQLEVBQVU7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSCxLQUxELFNBS1M7QUFDTCxZQUFNRixpQkFBUUssU0FBUixFQUFOO0FBQ0g7O0FBQ0QsV0FBT29DLE9BQVA7QUFDSDs7QUE3SU07O0FBZ0pYakMsTUFBTSxDQUFDQyxPQUFQLEdBQWUyQixLQUFmLEM7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPdUIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1mLEdBQUcsR0FBR2MsR0FBRyxDQUFDaEIsS0FBSixDQUFVRSxHQUF0Qjs7QUFDQSxNQUFHO0FBQ0MsVUFBTUosT0FBTyxHQUFHLElBQUlMLG9EQUFKLEdBQVl0QixTQUFaLENBQXNCK0IsR0FBdEIsRUFBMkJnQixJQUEzQixDQUFpQ0MsR0FBRCxJQUFRQSxHQUF4QyxDQUFoQjtBQUNBRixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNdkIsT0FBM0I7QUFDSCxHQUhELENBR0MsT0FBT3ZDLENBQVAsRUFBUztBQUNOQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBQ0osQ0FSRCxFOzs7Ozs7Ozs7OztBQ0ZBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9ib2FyZC9ib2FyZHZpZXcuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBgLFxyXG4gICAgICAgIHNlbGVjdDIgOiBgIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgP2AsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YCxcclxuICAgICAgICBkZWxldGVDbXQ6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGNpZD0/YCxcclxuICAgICAgICBkZWxldGVDbXQyOmBkZWxldGUgZnJvbSBjb21tZW50cyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgZGVsZXRlOmBkZWxldGUgZnJvbSBib2FyZHMgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHNlbGVjdElkOmBzZWxlY3QgdWlkIGZyb20gdXNlcnMgd2hlcmUgdXNlcmlkID0gP2BcclxuICAgIH0sXHJcbiAgICBhZG1pbiA6IHtcclxuICAgICAgICBzZWxlY3RVc2VycyA6IGBzZWxlY3QgdS4qLCBkYXRlX2Zvcm1hdCh1LmJpcnRoX2RhdGUsJyVZLSVtLSVkJykgYmlydGhfZGF0ZTIgZnJvbSB1c2VycyB1YCxcclxuICAgIH0sXHJcbiAgICB1c2VyOntcclxuICAgICAgICBsb2dpbiA6YHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHUgd2hlcmUgdS5uYW1lPT8gJiYgdS5wYXNzd2Q9P2BcclxuICAgIH0sXHJcbiAgICBtZW1iZXIgOiB7XHJcbiAgICAgICAgaW5zZXJ0RnZyIDogYGluc2VydCBpbnRvIGZhdm9yaXRlcyAodXNlcmlkLCBmYWNpbGl0eSwgcmVnaW9uLCBjb250YWN0KSB2YWx1ZXMgKD8sID8sID8sID8pYCxcclxuICAgICAgICBzZWxlY3RGdnIgOiBgc2VsZWN0IGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QgZnJvbSBmYXZvcml0ZXMgd2hlcmUgdXNlcmlkID0gP2AsXHJcbiAgICAgICAgc2VsZWN0TWlmIDogYHNlbGVjdCB1c2VyaWQsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgZGF0ZV9mb3JtYXQoYmlydGhfZGF0ZSwgXCIlWS0lbS0lZFwiKSBiaXJ0aF9kYXRlIGZyb20gdXNlcnMgd2hlcmUgdWlkID0gP2AsXHJcbiAgICAgICAgc2VsZWN0TWRmIDogYFNFTEVDVCAqLCBEQVRFX0ZPUk1BVChiaXJ0aF9kYXRlLCAnJVktJW0tJWQnKSBhcyBiaXJ0aF9kYXRlMiBGUk9NIHVzZXJzIHdoZXJlIHVpZCA9ID9gLFxyXG4gICAgICAgIHVwZGF0ZUluZm8gOiBgVVBEQVRFIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICBTRVQgdXNlcmlkID0gPywgcGFzc3dkID0gPywgbmFtZSA9ID8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSA/LCBwaG9uZV9udW1iZXIgPSA/LCBnZW5kZXIgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoX2RhdGUgPSA/LCBhZ3JlZV90b19wcml2YWN5X3BvbGljeSA9ID8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbyA9ID9cclxuICAgICAgICAgICAgICAgICAgICAgIFdIRVJFIHVpZCA9IDFgLFxyXG4gICAgICAgIGpvaW4gOiBgaW5zZXJ0IGludG8gdXNlcnMgKFxyXG4gICAgICAgICAgICB1c2VyaWQsIHBhc3N3ZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBiaXJ0aF9kYXRlLCBhZ3JlZV90b19wcml2YWN5X3BvbGljeSwgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mb1xyXG4gICAgICAgICkgdmFsdWVzICg/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/KWAsXHJcbiAgICAgICAgc29jaWFsSm9pbjpgaW5zZXJ0IGludG8gdXNlcnMgKCB1c2VyaWQsIHBhc3N3ZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBiaXJ0aF9kYXRlLCBhZ3JlZV90b19wcml2YWN5X3BvbGljeSwgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbykgdmFsdWVzICg/LCAnbm9wYXNzd2QnLCA/LCA/LCAnMDAwJywgJ24nLCAnMDAwMC0wMC0wMCcsIDEsIDEpXHJcbiAgICAgICAgYCxcclxuICAgICAgICBpZGNoZWNrOmBzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIHVzZXJpZD0/YFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1FMOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIEJvYXJke1xyXG4gICAgLy/qsozsi5ztjJAg66qp66Gd7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3QocGcsY2F0LG5vdGUsZmNuYW1lKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgd2hlcmUgPScnO1xyXG4gICAgICAgIChjYXQgIT0nQWxsJykgPyBjYXQgPSBgY2F0ZWdvcnk9JyR7Y2F0fSdgIDogY2F0PScnO1xyXG4gICAgICAgIGlmKGNhdCAmJiBub3RlKXtcclxuICAgICAgICAgICAgd2hlcmUgPSBgIGFuZCAke2NhdH0gYW5kICh0aXRsZSBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgY29udGVudCBsaWtlICcl7YWM7Iqk7Yq4JScgb3IgdS5uYW1lIGxpa2UgJyXthYzsiqTtirglJykgYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7J2867CYJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZjbmFtZSkgd2hlcmUgPWAgYW5kIGZhY2lsaXR5X25hbWUgPSAnJHtmY25hbWV9JyBgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0K3doZXJlK1NRTC5ib2FyZC5zZWxlY3QyLFtwZ10pO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQ9eydib2FyZHMnOiByb3dEYXRhfTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RPbmUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgID0gYXdhaXQgY29ubi5xdWVyeShTUUwuYm9hcmQuc2VsZWN0T25lLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8v7L2U66mY7Yq4IOyhsO2ajCDrsI8g7LaU6rCAICAgICBcclxuICAgICAgICAgICAgcm93RGF0YVswXS5jb20gPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5jb21tZW50cyxwYXJhbXMpOyAgICAgICBcclxuICAgICAgICAgICAgLy/sobDtmozsiJgg7Kad6rCAICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC51cGRhdGVWaWV3LHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAvL+y9lOupmO2KuCDrk7HroZ1cclxuICAgIGFzeW5jIGluc2VydENtdChiaWQsdWlkLGNtdCl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IDE7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtiaWQsdWlkLGNtdF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5pbnNlcnRDbXQscGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgIC8v7L2U66mY7Yq4IOyCreygnFxyXG4gICAgYXN5bmMgZGVsZXRlQ210KGNpZCxiaWQpe1xyXG4gICAgICAgIGxldCBjb25uID0gIG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbY2lkXTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmRlbGV0ZUNtdCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg65Ox66GdXHJcbiAgICBhc3luYyBpbnNlcnQoZGF0YSl7XHJcbiAgICAgICAgbGV0IGNvbm4gPSAgbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IDE7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtkYXRhLnRpdGxlLGRhdGEudXNlcmlkLGRhdGEuY29udGVudCxkYXRhLmNhdGVnb3J5LCBkYXRhLmZhY2lsaXR5XTtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICBjb25uPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmluc2VydCxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgIC8v6rKM7Iuc6riAIOyImOyglVxyXG4gICAgIGFzeW5jIG1vZGlmeShkYXRhKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2RhdGEudGl0bGUsZGF0YS5jb250ZW50LGRhdGEuY2F0ZWdvcnksIGRhdGEuZmFjaWxpdHksZGF0YS5iaWRdO1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIGNvbm49IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnVwZGF0ZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0xO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/qsozsi5zquIAg7IKt7KCcXHJcbiAgICBhc3luYyBkZWxldGUoYmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2JpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5ib2FyZC5kZWxldGVDbXQyLHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLmRlbGV0ZSxwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0xO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9ZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/shozshZwg7J6R7ISx7J6QIOyhsO2ajFxyXG4gICAgYXN5bmMgc2VsZWN0SWQodXNlcmlkKXtcclxuICAgICAgICBsZXQgY29ubiA9ICBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5eyBcclxuICAgICAgICAgICAgY29ubj0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhICA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLmJvYXJkLnNlbGVjdElkLHBhcmFtcyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1maW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzPUJvYXJkO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2JvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgYmlkID0gcmVxLnF1ZXJ5LmJpZDtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IEJvYXJkKCkuc2VsZWN0T25lKGJpZCkudGhlbigoYmRzKT0+IGJkcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9