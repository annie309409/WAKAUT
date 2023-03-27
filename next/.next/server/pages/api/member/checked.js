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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/member/checked.js");
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

/***/ "./pages/api/member/checked.js":
/*!*************************************!*\
  !*** ./pages/api/member/checked.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Member */ "./models/Member.js");
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_Member__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let {
    userid,
    name,
    email
  } = req.query;

  if (name == undefined) {
    try {
      const rowData = new _models_Member__WEBPACK_IMPORTED_MODULE_0___default.a().idCheck(userid).then(res => res);
      res.status(200).json(await rowData);
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const rowData = new _models_Member__WEBPACK_IMPORTED_MODULE_0___default.a().socialJoin(userid, name, email).then(res => res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvU1FMcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVtYmVyL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWVtYmVyIiwiaW5zZXJ0RnZyIiwidXNlcmlkIiwiZmFjaWxpdHkiLCJyZWdpb24iLCJjb250YWN0Iiwicm93RGF0YSIsInBhcmFtcyIsInF1ZXJ5IiwiU1FMIiwibWVtYmVyIiwiY29tbWl0IiwiZGVsZXRlRnZyIiwiZmlkIiwic2VsZWN0RnZyIiwibGVhdmVEZWxldGUiLCJ3cml0ZXIiLCJsZWF2ZURlbGV0IiwibGVhdmUiLCJ1aWQiLCJiZWdpblRyYW5zYWN0aW9uIiwicm9sbGJhY2siLCJzZWxlY3RNaWYiLCJoaXN0b3J5IiwibWFwIiwicm93IiwiY250IiwidG9TdHJpbmciLCJzZWxlY3RNZGYiLCJ1cGRhdGVJbmZvIiwicGFzc3dkIiwibmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwiYmlydGhfZGF0ZSIsImdlbmRlciIsImFncmVlX3RvX3ByaXZhY3lfcG9saWN5IiwiYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbyIsImpvaW4iLCJpc092ZXJsYXBVaWQiLCJpc092ZXJsYXBFbWFpbCIsImlkQ2hlY2siLCJpZGNoZWNrIiwic29jaWFsSm9pbiIsInNldFNjb3JlIiwic2NvcmUiLCJnZXRTY29yZSIsImJvYXJkIiwic2VsZWN0Iiwic2VsZWN0MiIsInNlbGVjdE9uZSIsInVwZGF0ZVZpZXciLCJjb21tZW50cyIsImluc2VydENtdCIsImluc2VydCIsInVwZGF0ZSIsImRlbGV0ZUNtdCIsImRlbGV0ZUNtdDIiLCJkZWxldGUiLCJzZWxlY3RJZCIsImFkbWluIiwic2VsZWN0VXNlcnMiLCJsb2dpbiIsInJlcSIsInJlcyIsInVuZGVmaW5lZCIsInRoZW4iLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDYkMsTUFBSSxFQUFFQyxPQUFPLENBQUND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bWJlci9jaGVja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbWVtYmVyL2NoZWNrZWQuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIE1lbWJlciB7XHJcbiAgICAvLyDsppDqsqjssL7quLAg7LaU6rCAXHJcbiAgICBhc3luYyBpbnNlcnRGdnIodXNlcmlkLCBmYWNpbGl0eSwgcmVnaW9uLCBjb250YWN0KSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmluc2VydEZ2ciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOymkOqyqOywvuq4sCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZUZ2cihmaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuZGVsZXRlRnZyLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7KaQ6rKo7LC+6riwIOuqqeuhnSDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdEZ2cih1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnNlbGVjdEZ2ciwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkO2DiO2HtCDsi5wg6rKM7Iuc6riAIOyCreygnFxyXG4gICAgYXN5bmMgbGVhdmVEZWxldGUod3JpdGVyKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3dyaXRlcl1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIubGVhdmVEZWxldCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkO2DiO2HtFxyXG4gICAgYXN5bmMgbGVhdmUodWlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VpZF1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmJlZ2luVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICAgICAgLy8g7ZW064u5IO2ajOybkOydtCDsnpHshLHtlZwg66qo65OgIOuMk+q4gCDsgq3soJxcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeSgnREVMRVRFIEZST00gY29tbWVudHMgV0hFUkUgdXNlcmlkID0gPycsIFt1aWRdKTtcclxuICAgICAgICAgICAgLy8g7ZW064u5IO2ajOybkOydtCDsnpHshLHtlZwg66qo65OgIOqyjOyLnOq4gCDsgq3soJxcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeSgnREVMRVRFIEZST00gYm9hcmRzIFdIRVJFIHdyaXRlciA9ID8nLCBbdWlkXSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5sZWF2ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucm9sbGJhY2soKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbXlpbmZvIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0TWlmKHVpZCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1aWQsIHVpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RNaWYsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBteXBhZ2Ug64Ko6ri06riAIOyImFxyXG4gICAgYXN5bmMgaGlzdG9yeSh3cml0ZXIpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbd3JpdGVyXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmhpc3RvcnksIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YS5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNudDogcm93LmNudC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vZGlmeSDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdE1kZih1aWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdWlkLCB1aWRdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc2VsZWN0TWRmLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7ZqM7JuQ7KCV67O0IOyImOyglVxyXG4gICAgYXN5bmMgdXBkYXRlSW5mbyh1aWQsIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBiaXJ0aF9kYXRlLCBnZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWQsIHBhc3N3ZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgYmlydGhfZGF0ZSwgZ2VuZGVyLFxyXG4gICAgICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSwgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbywgdWlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIudXBkYXRlSW5mbywgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkOqwgOyehVxyXG4gICAgYXN5bmMgam9pbihcclxuICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgcGFzc3dkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyLFxyXG4gICAgICAgIGJpcnRoX2RhdGUsXHJcbiAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LFxyXG4gICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW1xyXG4gICAgICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgICAgIHBhc3N3ZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcixcclxuICAgICAgICAgICAgYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSxcclxuICAgICAgICAgICAgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mb107XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmpvaW4sIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDslYTsnbTrlJQg7KSR67O17LK07YGsXHJcbiAgICBhc3luYyBpc092ZXJsYXBVaWQodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5pc092ZXJsYXBVaWQsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsnbTrqZTsnbwg7KSR67O17LK07YGsXHJcbiAgICBhc3luYyBpc092ZXJsYXBFbWFpbCh1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmlzT3ZlcmxhcEVtYWlsLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/tmozsm5Ag6rCA7J6F7Jes67aAIO2ZleyduFxyXG4gICAgYXN5bmMgaWRDaGVjayh1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmlkY2hlY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+yGjOyFnO2ajOybkCDqsIDsnoUgXHJcbiAgICBhc3luYyBzb2NpYWxKb2luKHVzZXJpZCxuYW1lLGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCxuYW1lLGVtYWlsXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc29jaWFsSm9pbiwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v7Iqk7L2U7Ja0IOy2lOqwgCBcclxuICAgIGFzeW5jIHNldFNjb3JlKGZhY2lsaXR5LHNjb3JlKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2ZhY2lsaXR5LHNjb3JlXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc2V0U2NvcmUsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+yKpOy9lOyWtCDsobDtmoxcclxuICAgICBhc3luYyBnZXRTY29yZShmYWNpbGl0eSkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtmYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5nZXRTY29yZSwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE1lbWJlcjtcclxuXHJcblxyXG5cclxuIiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDI6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBkZWxldGU6YGRlbGV0ZSBmcm9tIGJvYXJkcyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgc2VsZWN0SWQ6YHNlbGVjdCB1aWQgZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1LnVzZXJpZD0/ICYmIHUucGFzc3dkPT9gXHJcbiAgICB9LFxyXG4gICAgbWVtYmVyIDoge1xyXG4gICAgICAgIGluc2VydEZ2ciA6IGBpbnNlcnQgaW50byBmYXZvcml0ZXMgKHVzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCkgdmFsdWVzICg/LCA/LCA/LCA/KWAsXHJcbiAgICAgICAgc2VsZWN0RnZyIDogYHNlbGVjdCBmaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QgZnJvbSBmYXZvcml0ZXMgd2hlcmUgdXNlcmlkID0gP2AsXHJcbiAgICAgICAgZGVsZXRlRnZyIDogYERFTEVURSBGUk9NIGZhdm9yaXRlcyBXSEVSRSBmaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNaWYgOiBgc2VsZWN0IHVzZXJpZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBkYXRlX2Zvcm1hdChiaXJ0aF9kYXRlLCBcIiVZLSVtLSVkXCIpIGJpcnRoX2RhdGUgZnJvbSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIHNlbGVjdE1kZiA6IGBTRUxFQ1QgKiwgREFURV9GT1JNQVQoYmlydGhfZGF0ZSwgJyVZLSVtLSVkJykgYXMgYmlydGhfZGF0ZTIgRlJPTSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGhpc3RvcnkgOiBgU0VMRUNUIGNvdW50KGJpZCkgY250IGZyb20gYm9hcmRzIHdoZXJlIHdyaXRlciA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcFVpZCA6IGBzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcEVtYWlsIDogYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgZW1haWwgPSA/YCxcclxuICAgICAgICB1cGRhdGVJbmZvIDogYFVQREFURSB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgU0VUIHVzZXJpZCA9ID8sIHBhc3N3ZCA9ID8sIG5hbWUgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gPywgcGhvbmVfbnVtYmVyID0gPywgZ2VuZGVyID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aF9kYXRlID0gPywgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3kgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8gPSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBqb2luIDogYGluc2VydCBpbnRvIHVzZXJzIChcclxuICAgICAgICAgICAgdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm9cclxuICAgICAgICApIHZhbHVlcyAoPywgPywgPywgPywgPywgPywgPywgPywgPylgLFxyXG4gICAgICAgIHNvY2lhbEpvaW46YGluc2VydCBpbnRvIHVzZXJzICggdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8pIHZhbHVlcyAoPywgJ25vcGFzc3dkJywgPywgPywgJzAwMCcsICduJywgJzAwMDAtMDAtMDAnLCAxLCAxKVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgaWRjaGVjazpgc2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQ9P2AsXHJcbiAgICAgICAgbGVhdmU6IGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBsZWF2ZURlbGV0ZTogYERFTEVURSBGUk9NIGJvYXJkcyBXSEVSRSB3cml0ZXIgPSA/YCxcclxuICAgICAgICBzZXRTY29yZSA6IGBpbnNlcnQgaW50byByYXRpbmdzIChmYWNpbGl0eSxyYXRpbmcpIHZhbHVlcyAoPyw/KWAsXHJcbiAgICAgICAgZ2V0U2NvcmUgOiBgc2VsZWN0IENBU1QoY291bnQoci5yaWQpIEFTIGNoYXIpIGNudCwgQ0FTVChhdmcoci5yYXRpbmcpIEFTIGNoYXIpIHNjb3JlIGZyb20gcmF0aW5ncyByIHdoZXJlIGZhY2lsaXR5ID0gP2BcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNRTDsiLCJpbXBvcnQgTWVtYmVyIGZyb20gJy4uLy4uLy4uL21vZGVscy9NZW1iZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBsZXQge3VzZXJpZCxuYW1lLGVtYWlsfSA9IHJlcS5xdWVyeTtcclxuICAgIGlmKG5hbWUgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSBuZXcgTWVtYmVyKCkuaWRDaGVjayh1c2VyaWQpLnRoZW4ocmVzID0+IHJlcyk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IHJvd0RhdGEpO1xyXG4gICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3Qgcm93RGF0YSA9IG5ldyBNZW1iZXIoKS5zb2NpYWxKb2luKHVzZXJpZCxuYW1lLGVtYWlsKS50aGVuKHJlcyA9PiByZXMpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByb3dEYXRhKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFyaWFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9