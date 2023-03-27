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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/member/addscore.js");
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

/***/ "./models/Member.js":
/*!**************************!*\
  !*** ./models/Member.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MariaDB = _interopRequireDefault(__webpack_require__(/*! ./MariaDB */ "./models/MariaDB.js"));

var _SQLs = _interopRequireDefault(__webpack_require__(/*! ./SQLs */ "./models/SQLs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Member {
  // 즐겨찾기 추가
  async insertFvr(userid, facility, region, contact) {
    let conn = null;
    let rowData = null;
    let params = [userid, facility, region, contact];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.insertFvr, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 즐겨찾기 삭제


  async deleteFvr(fid) {
    let conn = null;
    let rowData = null;
    let params = [fid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.deleteFvr, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 즐겨찾기 목록 출력


  async selectFvr(userid) {
    let conn = null;
    let rowData = null;
    let params = [userid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.selectFvr, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 회원탈퇴 시 게시글 삭제


  async leaveDelete(writer) {
    let conn = null;
    let rowData = null;
    let params = [writer];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.leaveDelet, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 회원탈퇴


  async leave(uid) {
    let conn = null;
    let rowData = null;
    let params = [uid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.beginTransaction(); // 해당 회원이 작성한 모든 댓글 삭제

      await conn.query('DELETE FROM comments WHERE userid = ?', [uid]); // 해당 회원이 작성한 모든 게시글 삭제

      await conn.query('DELETE FROM boards WHERE writer = ?', [uid]);
      await conn.query(_SQLs.default.member.leave, params);
      await conn.commit();
    } catch (e) {
      await conn.rollback();
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // myinfo 출력


  async selectMif(uid) {
    let conn = null;
    let rowData = null;
    let params = [uid, uid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.selectMif, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // mypage 남긴글 수


  async history(writer) {
    let conn = null;
    let rowData = null;
    let params = [writer];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.history, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData.map(row => {
      return {
        cnt: row.cnt.toString()
      };
    });
  } // modify 출력


  async selectMdf(uid) {
    let conn = null;
    let rowData = null;
    let params = [uid, uid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.selectMdf, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 회원정보 수정


  async updateInfo(uid, userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info) {
    let conn = null;
    let rowData = null;
    let params = [userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info, uid];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.updateInfo, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 회원가입


  async join(userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info) {
    let conn = null;
    let rowData = null;
    let params = [userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.join, params);
      await conn.commit();
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 아이디 중복체크


  async isOverlapUid(userid) {
    let conn = null;
    let rowData = null;
    let params = [userid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.isOverlapUid, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // 이메일 중복체크


  async isOverlapEmail(userid) {
    let conn = null;
    let rowData = null;
    let params = [userid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.isOverlapEmail, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //회원 가입여부 확인


  async idCheck(userid) {
    let conn = null;
    let rowData = null;
    let params = [userid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.idcheck, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //소셜회원 가입 


  async socialJoin(userid, name, email) {
    let conn = null;
    let rowData = 1;
    let params = [userid, name, email];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.socialJoin, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //스코어 추가 


  async setScore(facility, score) {
    let conn = null;
    let rowData = 1;
    let params = [facility, score];

    try {
      conn = await _MariaDB.default.makeConn();
      await conn.query(_SQLs.default.member.setScore, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } //스코어 조회


  async getScore(facility) {
    let conn = null;
    let rowData = null;
    let params = [facility];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.getScore, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  }

}

module.exports = Member;

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

/***/ "./pages/api/member/addscore.js":
/*!**************************************!*\
  !*** ./pages/api/member/addscore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Member */ "./models/Member.js");
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_Member__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    facility,
    score
  } = req.body;

  if (facility && score) {
    const cnt = new _models_Member__WEBPACK_IMPORTED_MODULE_0___default.a().setScore(facility, score).then(res => res);
    res.status(200).json({
      cnt: await cnt
    });
  } else {
    const cnt = new _models_Member__WEBPACK_IMPORTED_MODULE_0___default.a().getScore(req.query.facility).then(res => res);
    res.status(200).json(await cnt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvU1FMcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVtYmVyL2FkZHNjb3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmlhZGJcIiJdLCJuYW1lcyI6WyJkYmNvbmZpZyIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiTUFSSUFEQl9IT1NUIiwidXNlciIsIk1BUklBREJfVVNFUiIsInBhc3N3b3JkIiwiTUFSSUFEQl9QV0QiLCJkYXRhYmFzZSIsIk1BUklBREJfREIiLCJNYXJpYURCIiwibWFrZUNvbm4iLCJtYXJpYWRiIiwiY3JlYXRlQ29ubmVjdGlvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VDb25uIiwiY29ubiIsImNsb3NlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk1lbWJlciIsImluc2VydEZ2ciIsInVzZXJpZCIsImZhY2lsaXR5IiwicmVnaW9uIiwiY29udGFjdCIsInJvd0RhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIlNRTCIsIm1lbWJlciIsImNvbW1pdCIsImRlbGV0ZUZ2ciIsImZpZCIsInNlbGVjdEZ2ciIsImxlYXZlRGVsZXRlIiwid3JpdGVyIiwibGVhdmVEZWxldCIsImxlYXZlIiwidWlkIiwiYmVnaW5UcmFuc2FjdGlvbiIsInJvbGxiYWNrIiwic2VsZWN0TWlmIiwiaGlzdG9yeSIsIm1hcCIsInJvdyIsImNudCIsInRvU3RyaW5nIiwic2VsZWN0TWRmIiwidXBkYXRlSW5mbyIsInBhc3N3ZCIsIm5hbWUiLCJlbWFpbCIsInBob25lX251bWJlciIsImJpcnRoX2RhdGUiLCJnZW5kZXIiLCJhZ3JlZV90b19wcml2YWN5X3BvbGljeSIsImFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8iLCJqb2luIiwiaXNPdmVybGFwVWlkIiwiaXNPdmVybGFwRW1haWwiLCJpZENoZWNrIiwiaWRjaGVjayIsInNvY2lhbEpvaW4iLCJzZXRTY29yZSIsInNjb3JlIiwiZ2V0U2NvcmUiLCJib2FyZCIsInNlbGVjdCIsInNlbGVjdDIiLCJzZWxlY3RPbmUiLCJ1cGRhdGVWaWV3IiwiY29tbWVudHMiLCJpbnNlcnRDbXQiLCJpbnNlcnQiLCJ1cGRhdGUiLCJkZWxldGVDbXQiLCJkZWxldGVDbXQyIiwiZGVsZXRlIiwic2VsZWN0SWQiLCJhZG1pbiIsInNlbGVjdFVzZXJzIiwibG9naW4iLCJyZXEiLCJyZXMiLCJib2R5IiwidGhlbiIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FB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cEJKO0FBcUJMeEIsU0FBSyxFQUFHLGlDQXJCSDtBQXNCTEgsZUFBVyxFQUFHLHFDQXRCVDtBQXVCTDZCLFlBQVEsRUFBSSxvREF2QlA7QUF3QkxFLFlBQVEsRUFBSTtBQXhCUDtBQXJCSCxDQUFWO0FBaURlckMsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU1zRCxHQUFOLEVBQVVDLEdBQVYsS0FBZ0I7QUFDM0IsUUFBTTtBQUFDN0QsWUFBRDtBQUFVMEM7QUFBVixNQUFtQmtCLEdBQUcsQ0FBQ0UsSUFBN0I7O0FBQ0EsTUFBRzlELFFBQVEsSUFBSTBDLEtBQWYsRUFBcUI7QUFDYixVQUFNbkIsR0FBRyxHQUFJLElBQUkxQixxREFBSixHQUFhNEMsUUFBYixDQUFzQnpDLFFBQXRCLEVBQStCMEMsS0FBL0IsRUFBc0NxQixJQUF0QyxDQUEyQ0YsR0FBRyxJQUFJQSxHQUFsRCxDQUFiO0FBQ0FBLE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUMxQyxTQUFHLEVBQUUsTUFBTUE7QUFBWixLQUFyQjtBQUNILEdBSEwsTUFHUztBQUNELFVBQU1BLEdBQUcsR0FBSSxJQUFJMUIscURBQUosR0FBYThDLFFBQWIsQ0FBc0JpQixHQUFHLENBQUN2RCxLQUFKLENBQVVMLFFBQWhDLEVBQTBDK0QsSUFBMUMsQ0FBK0NGLEdBQUcsSUFBSUEsR0FBdEQsQ0FBYjtBQUNBQSxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNMUMsR0FBM0I7QUFDSDtBQUNSLENBVEQsRTs7Ozs7Ozs7Ozs7QUNGQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbWVtYmVyL2FkZHNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbWVtYmVyL2FkZHNjb3JlLmpzXCIpO1xuIiwiaW1wb3J0IG1hcmlhZGIgZnJvbSBcIm1hcmlhZGJcIjtcclxuXHJcbmNvbnN0IGRiY29uZmlnID0ge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9IT1NULFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFSSUFEQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1BUklBREJfUFdELFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1BUklBREJfREJcclxufTtcclxuXHJcblxyXG5jb25zdCBNYXJpYURCID17XHJcbiAgICBtYWtlQ29ubiA6IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBtYXJpYWRiLmNyZWF0ZUNvbm5lY3Rpb24oZGJjb25maWcpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xvc2VDb25uIDogYXN5bmMgKGNvbm4pID0+IHtcclxuICAgICAgICBpZihjb25uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY29ubi5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWFyaWFEQjsiLCJpbXBvcnQgbWFyaWFkYiBmcm9tICcuL01hcmlhREInO1xyXG5pbXBvcnQgU1FMIGZyb20gJy4vU1FMcyc7XHJcblxyXG5jbGFzcyBNZW1iZXIge1xyXG4gICAgLy8g7KaQ6rKo7LC+6riwIOy2lOqwgFxyXG4gICAgYXN5bmMgaW5zZXJ0RnZyKHVzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3RdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5pbnNlcnRGdnIsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsppDqsqjssL7quLAg7IKt7KCcXHJcbiAgICBhc3luYyBkZWxldGVGdnIoZmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2ZpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmRlbGV0ZUZ2ciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOymkOqyqOywvuq4sCDrqqnroZ0g7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RGdnIodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RGdnIsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDtmozsm5Dtg4jth7Qg7IucIOqyjOyLnOq4gCDsgq3soJxcclxuICAgIGFzeW5jIGxlYXZlRGVsZXRlKHdyaXRlcikge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt3cml0ZXJdXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmxlYXZlRGVsZXQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDtmozsm5Dtg4jth7RcclxuICAgIGFzeW5jIGxlYXZlKHVpZCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1aWRdXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5iZWdpblRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIO2VtOuLuSDtmozsm5DsnbQg7J6R7ISx7ZWcIOuqqOuToCDrjJPquIAg7IKt7KCcXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoJ0RFTEVURSBGUk9NIGNvbW1lbnRzIFdIRVJFIHVzZXJpZCA9ID8nLCBbdWlkXSk7XHJcbiAgICAgICAgICAgIC8vIO2VtOuLuSDtmozsm5DsnbQg7J6R7ISx7ZWcIOuqqOuToCDqsozsi5zquIAg7IKt7KCcXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoJ0RFTEVURSBGUk9NIGJvYXJkcyBXSEVSRSB3cml0ZXIgPSA/JywgW3VpZF0pO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIubGVhdmUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnJvbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG15aW5mbyDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdE1pZih1aWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdWlkLCB1aWRdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc2VsZWN0TWlmLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbXlwYWdlIOuCqOq4tOq4gCDsiJhcclxuICAgIGFzeW5jIGhpc3Rvcnkod3JpdGVyKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3dyaXRlcl07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5oaXN0b3J5LCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGEubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbnQ6IHJvdy5jbnQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb2RpZnkg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RNZGYodWlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VpZCwgdWlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnNlbGVjdE1kZiwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkOygleuztCDsiJjsoJVcclxuICAgIGFzeW5jIHVwZGF0ZUluZm8odWlkLCB1c2VyaWQsIHBhc3N3ZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgYmlydGhfZGF0ZSwgZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSwgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbylcclxuICAgIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGJpcnRoX2RhdGUsIGdlbmRlcixcclxuICAgICAgICAgICAgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8sIHVpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnVwZGF0ZUluZm8sIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDtmozsm5DqsIDsnoVcclxuICAgIGFzeW5jIGpvaW4oXHJcbiAgICAgICAgdXNlcmlkLFxyXG4gICAgICAgIHBhc3N3ZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBob25lX251bWJlcixcclxuICAgICAgICBiaXJ0aF9kYXRlLFxyXG4gICAgICAgIGdlbmRlcixcclxuICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSxcclxuICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgdXNlcmlkLFxyXG4gICAgICAgICAgICBwYXNzd2QsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgICAgIGJpcnRoX2RhdGUsXHJcbiAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksXHJcbiAgICAgICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm9dO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5qb2luLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7JWE7J2065SUIOykkeuzteyytO2BrFxyXG4gICAgYXN5bmMgaXNPdmVybGFwVWlkKHVzZXJpZCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWRdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuaXNPdmVybGFwVWlkLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7J2066mU7J28IOykkeuzteyytO2BrFxyXG4gICAgYXN5bmMgaXNPdmVybGFwRW1haWwodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5pc092ZXJsYXBFbWFpbCwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v7ZqM7JuQIOqwgOyeheyXrOu2gCDtmZXsnbhcclxuICAgIGFzeW5jIGlkQ2hlY2sodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5pZGNoZWNrLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/shozshZztmozsm5Ag6rCA7J6FIFxyXG4gICAgYXN5bmMgc29jaWFsSm9pbih1c2VyaWQsbmFtZSxlbWFpbCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IDE7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWQsbmFtZSxlbWFpbF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnNvY2lhbEpvaW4sIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+yKpOy9lOyWtCDstpTqsIAgXHJcbiAgICBhc3luYyBzZXRTY29yZShmYWNpbGl0eSxzY29yZSkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IDE7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtmYWNpbGl0eSxzY29yZV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnNldFNjb3JlLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcbiAgICAgLy/siqTsvZTslrQg7KGw7ZqMXHJcbiAgICAgYXN5bmMgZ2V0U2NvcmUoZmFjaWxpdHkpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZmFjaWxpdHldO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuZ2V0U2NvcmUsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBNZW1iZXI7XHJcblxyXG5cclxuXHJcbiIsImNvbnN0IFNRTD17XHJcbiAgICBib2FyZCA6IHtcclxuICAgICAgICBzZWxlY3QgOiBgc2VsZWN0IGIuKiAsIGRhdGVfZm9ybWF0KGIucmVnZGF0ZSwnJVktJW0tJWQnKSByZWdkYXRlMiwgdS5uYW1lICxDQVNUKGNvdW50KGMuY2lkKSBBUyBjaGFyKSBjbXRjbnQgZnJvbSAoYm9hcmRzIGIsIHVzZXJzIHUpIGxlZnQgam9pbiBjb21tZW50cyBjIG9uIGIuYmlkID0gYy5iaWQgd2hlcmUgdS51aWQgPSBiLndyaXRlciBgLFxyXG4gICAgICAgIHNlbGVjdDIgOiBgIGdyb3VwIGJ5IGIuYmlkIG9yZGVyIGJ5IGIuYmlkIGRlc2MgbGltaXQgMCwgP2AsXHJcbiAgICAgICAgc2VsZWN0T25lOmBzZWxlY3QgIGIuKixkYXRlX2Zvcm1hdChyZWdkYXRlLCBcIiVZLSVtLSVkXCIpIHJlZ2RhdGUyLCB1Lm5hbWUgIGZyb20gYm9hcmRzIGIgbGVmdCBqb2luIHVzZXJzIHUgb24gdS51aWQgPSBiLndyaXRlciB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgdXBkYXRlVmlldzpgdXBkYXRlIGJvYXJkcyBzZXQgdmlld3MgPSB2aWV3cysxICB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgY29tbWVudHMgOiBgc2VsZWN0IGMuKixkYXRlX2Zvcm1hdChjLnJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsdS5uYW1lICBmcm9tIGNvbW1lbnRzIGMgbGVmdCBqb2luIHVzZXJzIHUgb24gYy51c2VyaWQgPSB1LnVpZCAgd2hlcmUgYy5iaWQgPT9gLFxyXG4gICAgICAgIGluc2VydENtdCA6IGBpbnNlcnQgaW50byBjb21tZW50cyAoYmlkLHVzZXJpZCxjb21tZW50KSB2YWx1ZXMoPyw/LD8pYCxcclxuICAgICAgICBpbnNlcnQgOiBgaW5zZXJ0IGludG8gYm9hcmRzICh0aXRsZSx3cml0ZXIsY29udGVudCx2aWV3cyxjYXRlZ29yeSxmYWNpbGl0eV9uYW1lKSB2YWx1ZXMoPyw/LD8sMCw/LD8pYCxcclxuICAgICAgICB1cGRhdGUgOmB1cGRhdGUgYm9hcmRzIHNldCB0aXRsZT0/LGNvbnRlbnQ9PyxjYXRlZ29yeT0/LGZhY2lsaXR5X25hbWU9PyBXSEVSRSBiaWQgPSA/YCxcclxuICAgICAgICBkZWxldGVDbXQ6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGNpZD0/YCxcclxuICAgICAgICBkZWxldGVDbXQyOmBkZWxldGUgZnJvbSBjb21tZW50cyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgZGVsZXRlOmBkZWxldGUgZnJvbSBib2FyZHMgd2hlcmUgYmlkPT9gLFxyXG4gICAgICAgIHNlbGVjdElkOmBzZWxlY3QgdWlkIGZyb20gdXNlcnMgd2hlcmUgdXNlcmlkID0gP2BcclxuICAgIH0sXHJcbiAgICBhZG1pbiA6IHtcclxuICAgICAgICBzZWxlY3RVc2VycyA6IGBzZWxlY3QgdS4qLCBkYXRlX2Zvcm1hdCh1LmJpcnRoX2RhdGUsJyVZLSVtLSVkJykgYmlydGhfZGF0ZTIgZnJvbSB1c2VycyB1YCxcclxuICAgIH0sXHJcbiAgICB1c2VyOntcclxuICAgICAgICBsb2dpbiA6YHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHUgd2hlcmUgdS51c2VyaWQ9PyAmJiB1LnBhc3N3ZD0/YFxyXG4gICAgfSxcclxuICAgIG1lbWJlciA6IHtcclxuICAgICAgICBpbnNlcnRGdnIgOiBgaW5zZXJ0IGludG8gZmF2b3JpdGVzICh1c2VyaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QpIHZhbHVlcyAoPywgPywgPywgPylgLFxyXG4gICAgICAgIHNlbGVjdEZ2ciA6IGBzZWxlY3QgZmlkLCBmYWNpbGl0eSwgcmVnaW9uLCBjb250YWN0IGZyb20gZmF2b3JpdGVzIHdoZXJlIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUZ2ciA6IGBERUxFVEUgRlJPTSBmYXZvcml0ZXMgV0hFUkUgZmlkID0gP2AsXHJcbiAgICAgICAgc2VsZWN0TWlmIDogYHNlbGVjdCB1c2VyaWQsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgZGF0ZV9mb3JtYXQoYmlydGhfZGF0ZSwgXCIlWS0lbS0lZFwiKSBiaXJ0aF9kYXRlIGZyb20gdXNlcnMgd2hlcmUgdWlkID0gPyBvciB1c2VyaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNZGYgOiBgU0VMRUNUICosIERBVEVfRk9STUFUKGJpcnRoX2RhdGUsICclWS0lbS0lZCcpIGFzIGJpcnRoX2RhdGUyIEZST00gdXNlcnMgd2hlcmUgdWlkID0gPyBvciB1c2VyaWQgPSA/YCxcclxuICAgICAgICBoaXN0b3J5IDogYFNFTEVDVCBjb3VudChiaWQpIGNudCBmcm9tIGJvYXJkcyB3aGVyZSB3cml0ZXIgPSA/YCxcclxuICAgICAgICBpc092ZXJsYXBVaWQgOiBgc2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YCxcclxuICAgICAgICBpc092ZXJsYXBFbWFpbCA6IGBzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIGVtYWlsID0gP2AsXHJcbiAgICAgICAgdXBkYXRlSW5mbyA6IGBVUERBVEUgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIFNFVCB1c2VyaWQgPSA/LCBwYXNzd2QgPSA/LCBuYW1lID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9ID8sIHBob25lX251bWJlciA9ID8sIGdlbmRlciA9ID8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhfZGF0ZSA9ID8sIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5ID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvID0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgdWlkID0gP2AsXHJcbiAgICAgICAgam9pbiA6IGBpbnNlcnQgaW50byB1c2VycyAoXHJcbiAgICAgICAgICAgIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvXHJcbiAgICAgICAgKSB2YWx1ZXMgKD8sID8sID8sID8sID8sID8sID8sID8sID8pYCxcclxuICAgICAgICBzb2NpYWxKb2luOmBpbnNlcnQgaW50byB1c2VycyAoIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKSB2YWx1ZXMgKD8sICdub3Bhc3N3ZCcsID8sID8sICcwMDAnLCAnbicsICcwMDAwLTAwLTAwJywgMSwgMSlcclxuICAgICAgICBgLFxyXG4gICAgICAgIGlkY2hlY2s6YHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgdXNlcmlkPT9gLFxyXG4gICAgICAgIGxlYXZlOiBgREVMRVRFIEZST00gdXNlcnMgV0hFUkUgdWlkID0gP2AsXHJcbiAgICAgICAgbGVhdmVEZWxldGU6IGBERUxFVEUgRlJPTSBib2FyZHMgV0hFUkUgd3JpdGVyID0gP2AsXHJcbiAgICAgICAgc2V0U2NvcmUgOiBgaW5zZXJ0IGludG8gcmF0aW5ncyAoZmFjaWxpdHkscmF0aW5nKSB2YWx1ZXMgKD8sPylgLFxyXG4gICAgICAgIGdldFNjb3JlIDogYHNlbGVjdCBDQVNUKGNvdW50KHIucmlkKSBBUyBjaGFyKSBjbnQsIENBU1QoYXZnKHIucmF0aW5nKSBBUyBjaGFyKSBzY29yZSBmcm9tIHJhdGluZ3MgciB3aGVyZSBmYWNpbGl0eSA9ID9gXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IE1lbWJlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL01lbWJlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2ZhY2lsaXR5LHNjb3JlfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYoZmFjaWxpdHkgJiYgc2NvcmUpe1xyXG4gICAgICAgICAgICBjb25zdCBjbnQgPSAgbmV3IE1lbWJlcigpLnNldFNjb3JlKGZhY2lsaXR5LHNjb3JlKS50aGVuKHJlcyA9PiByZXMpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7Y250OiBhd2FpdCBjbnR9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgY250ID0gIG5ldyBNZW1iZXIoKS5nZXRTY29yZShyZXEucXVlcnkuZmFjaWxpdHkpLnRoZW4ocmVzID0+IHJlcyk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGNudCk7XHJcbiAgICAgICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9