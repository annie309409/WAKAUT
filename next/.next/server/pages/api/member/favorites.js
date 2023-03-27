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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/member/favorites.js");
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

/***/ "./pages/api/member/favorites.js":
/*!***************************************!*\
  !*** ./pages/api/member/favorites.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Member */ "./models/Member.js");
/* harmony import */ var _models_Member__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_Member__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let {
    userid
  } = req.query;

  try {
    const rowData = new _models_Member__WEBPACK_IMPORTED_MODULE_0___default.a().selectFvr(userid).then(res => res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvU1FMcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVtYmVyL2Zhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJpYWRiXCIiXSwibmFtZXMiOlsiZGJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BUklBREJfSE9TVCIsInVzZXIiLCJNQVJJQURCX1VTRVIiLCJwYXNzd29yZCIsIk1BUklBREJfUFdEIiwiZGF0YWJhc2UiLCJNQVJJQURCX0RCIiwiTWFyaWFEQiIsIm1ha2VDb25uIiwibWFyaWFkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ29ubiIsImNvbm4iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJNZW1iZXIiLCJpbnNlcnRGdnIiLCJ1c2VyaWQiLCJmYWNpbGl0eSIsInJlZ2lvbiIsImNvbnRhY3QiLCJyb3dEYXRhIiwicGFyYW1zIiwicXVlcnkiLCJTUUwiLCJtZW1iZXIiLCJjb21taXQiLCJkZWxldGVGdnIiLCJmaWQiLCJzZWxlY3RGdnIiLCJsZWF2ZURlbGV0ZSIsIndyaXRlciIsImxlYXZlRGVsZXQiLCJsZWF2ZSIsInVpZCIsImJlZ2luVHJhbnNhY3Rpb24iLCJyb2xsYmFjayIsInNlbGVjdE1pZiIsImhpc3RvcnkiLCJtYXAiLCJyb3ciLCJjbnQiLCJ0b1N0cmluZyIsInNlbGVjdE1kZiIsInVwZGF0ZUluZm8iLCJwYXNzd2QiLCJuYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJiaXJ0aF9kYXRlIiwiZ2VuZGVyIiwiYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3kiLCJhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvIiwiam9pbiIsImlzT3ZlcmxhcFVpZCIsImlzT3ZlcmxhcEVtYWlsIiwiaWRDaGVjayIsImlkY2hlY2siLCJzb2NpYWxKb2luIiwic2V0U2NvcmUiLCJzY29yZSIsImdldFNjb3JlIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiZGVsZXRlQ210MiIsImRlbGV0ZSIsInNlbGVjdElkIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwicmVxIiwicmVzIiwidGhlbiIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZ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cUJMeEIsU0FBSyxFQUFHLGlDQXJCSDtBQXNCTEgsZUFBVyxFQUFHLHFDQXRCVDtBQXVCTDZCLFlBQVEsRUFBSSxvREF2QlA7QUF3QkxFLFlBQVEsRUFBSTtBQXhCUDtBQXJCSCxDQUFWO0FBaURlckMsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9zRCxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsTUFBSTtBQUFDOUQ7QUFBRCxNQUFXNkQsR0FBRyxDQUFDdkQsS0FBbkI7O0FBQ0EsTUFBRztBQUNDLFVBQU1GLE9BQU8sR0FBRyxJQUFJTixxREFBSixHQUFhYyxTQUFiLENBQXVCWixNQUF2QixFQUErQitELElBQS9CLENBQW9DRCxHQUFHLElBQUlBLEdBQTNDLENBQWhCO0FBQ0FBLE9BQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU03RCxPQUEzQjtBQUNILEdBSEQsQ0FHQyxPQUFPZCxDQUFQLEVBQVM7QUFDTkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUNKLENBUkQsRTs7Ozs7Ozs7Ozs7QUNGQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbWVtYmVyL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL21lbWJlci9mYXZvcml0ZXMuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIE1lbWJlciB7XHJcbiAgICAvLyDsppDqsqjssL7quLAg7LaU6rCAXHJcbiAgICBhc3luYyBpbnNlcnRGdnIodXNlcmlkLCBmYWNpbGl0eSwgcmVnaW9uLCBjb250YWN0KSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmluc2VydEZ2ciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOymkOqyqOywvuq4sCDsgq3soJxcclxuICAgIGFzeW5jIGRlbGV0ZUZ2cihmaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbZmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuZGVsZXRlRnZyLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7KaQ6rKo7LC+6riwIOuqqeuhnSDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdEZ2cih1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLnNlbGVjdEZ2ciwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkO2DiO2HtCDsi5wg6rKM7Iuc6riAIOyCreygnFxyXG4gICAgYXN5bmMgbGVhdmVEZWxldGUod3JpdGVyKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3dyaXRlcl1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIubGVhdmVEZWxldCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkO2DiO2HtFxyXG4gICAgYXN5bmMgbGVhdmUodWlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VpZF1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmJlZ2luVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICAgICAgLy8g7ZW064u5IO2ajOybkOydtCDsnpHshLHtlZwg66qo65OgIOuMk+q4gCDsgq3soJxcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeSgnREVMRVRFIEZST00gY29tbWVudHMgV0hFUkUgdXNlcmlkID0gPycsIFt1aWRdKTtcclxuICAgICAgICAgICAgLy8g7ZW064u5IO2ajOybkOydtCDsnpHshLHtlZwg66qo65OgIOqyjOyLnOq4gCDsgq3soJxcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeSgnREVMRVRFIEZST00gYm9hcmRzIFdIRVJFIHdyaXRlciA9ID8nLCBbdWlkXSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5sZWF2ZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucm9sbGJhY2soKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbXlpbmZvIOy2nOugpVxyXG4gICAgYXN5bmMgc2VsZWN0TWlmKHVpZCkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1aWQsIHVpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RNaWYsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBteXBhZ2Ug64Ko6ri06riAIOyImFxyXG4gICAgYXN5bmMgaGlzdG9yeSh3cml0ZXIpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbd3JpdGVyXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmhpc3RvcnksIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YS5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNudDogcm93LmNudC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vZGlmeSDstpzroKVcclxuICAgIGFzeW5jIHNlbGVjdE1kZih1aWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdWlkLCB1aWRdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIHJvd0RhdGEgPSBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc2VsZWN0TWRmLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7ZqM7JuQ7KCV67O0IOyImOyglVxyXG4gICAgYXN5bmMgdXBkYXRlSW5mbyh1aWQsIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBiaXJ0aF9kYXRlLCBnZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFt1c2VyaWQsIHBhc3N3ZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgYmlydGhfZGF0ZSwgZ2VuZGVyLFxyXG4gICAgICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSwgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbywgdWlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIudXBkYXRlSW5mbywgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIO2ajOybkOqwgOyehVxyXG4gICAgYXN5bmMgam9pbihcclxuICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgcGFzc3dkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyLFxyXG4gICAgICAgIGJpcnRoX2RhdGUsXHJcbiAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LFxyXG4gICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW1xyXG4gICAgICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgICAgIHBhc3N3ZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcixcclxuICAgICAgICAgICAgYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgICAgICBhZ3JlZV90b19wcml2YWN5X3BvbGljeSxcclxuICAgICAgICAgICAgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mb107XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmpvaW4sIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4uY29tbWl0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDslYTsnbTrlJQg7KSR67O17LK07YGsXHJcbiAgICBhc3luYyBpc092ZXJsYXBVaWQodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5pc092ZXJsYXBVaWQsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsnbTrqZTsnbwg7KSR67O17LK07YGsXHJcbiAgICBhc3luYyBpc092ZXJsYXBFbWFpbCh1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmlzT3ZlcmxhcEVtYWlsLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/tmozsm5Ag6rCA7J6F7Jes67aAIO2ZleyduFxyXG4gICAgYXN5bmMgaWRDaGVjayh1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmlkY2hlY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+yGjOyFnO2ajOybkCDqsIDsnoUgXHJcbiAgICBhc3luYyBzb2NpYWxKb2luKHVzZXJpZCxuYW1lLGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCxuYW1lLGVtYWlsXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc29jaWFsSm9pbiwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8v7Iqk7L2U7Ja0IOy2lOqwgCBcclxuICAgIGFzeW5jIHNldFNjb3JlKGZhY2lsaXR5LHNjb3JlKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW2ZhY2lsaXR5LHNjb3JlXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc2V0U2NvcmUsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuICAgICAvL+yKpOy9lOyWtCDsobDtmoxcclxuICAgICBhc3luYyBnZXRTY29yZShmYWNpbGl0eSkge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtmYWNpbGl0eV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5nZXRTY29yZSwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE1lbWJlcjtcclxuXHJcblxyXG5cclxuIiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDI6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBkZWxldGU6YGRlbGV0ZSBmcm9tIGJvYXJkcyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgc2VsZWN0SWQ6YHNlbGVjdCB1aWQgZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1LnVzZXJpZD0/ICYmIHUucGFzc3dkPT9gXHJcbiAgICB9LFxyXG4gICAgbWVtYmVyIDoge1xyXG4gICAgICAgIGluc2VydEZ2ciA6IGBpbnNlcnQgaW50byBmYXZvcml0ZXMgKHVzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCkgdmFsdWVzICg/LCA/LCA/LCA/KWAsXHJcbiAgICAgICAgc2VsZWN0RnZyIDogYHNlbGVjdCBmaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QgZnJvbSBmYXZvcml0ZXMgd2hlcmUgdXNlcmlkID0gP2AsXHJcbiAgICAgICAgZGVsZXRlRnZyIDogYERFTEVURSBGUk9NIGZhdm9yaXRlcyBXSEVSRSBmaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNaWYgOiBgc2VsZWN0IHVzZXJpZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBkYXRlX2Zvcm1hdChiaXJ0aF9kYXRlLCBcIiVZLSVtLSVkXCIpIGJpcnRoX2RhdGUgZnJvbSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIHNlbGVjdE1kZiA6IGBTRUxFQ1QgKiwgREFURV9GT1JNQVQoYmlydGhfZGF0ZSwgJyVZLSVtLSVkJykgYXMgYmlydGhfZGF0ZTIgRlJPTSB1c2VycyB3aGVyZSB1aWQgPSA/IG9yIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGhpc3RvcnkgOiBgU0VMRUNUIGNvdW50KGJpZCkgY250IGZyb20gYm9hcmRzIHdoZXJlIHdyaXRlciA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcFVpZCA6IGBzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIHVzZXJpZCA9ID9gLFxyXG4gICAgICAgIGlzT3ZlcmxhcEVtYWlsIDogYHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgZW1haWwgPSA/YCxcclxuICAgICAgICB1cGRhdGVJbmZvIDogYFVQREFURSB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgU0VUIHVzZXJpZCA9ID8sIHBhc3N3ZCA9ID8sIG5hbWUgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gPywgcGhvbmVfbnVtYmVyID0gPywgZ2VuZGVyID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aF9kYXRlID0gPywgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3kgPSA/LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8gPSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBqb2luIDogYGluc2VydCBpbnRvIHVzZXJzIChcclxuICAgICAgICAgICAgdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm9cclxuICAgICAgICApIHZhbHVlcyAoPywgPywgPywgPywgPywgPywgPywgPywgPylgLFxyXG4gICAgICAgIHNvY2lhbEpvaW46YGluc2VydCBpbnRvIHVzZXJzICggdXNlcmlkLCBwYXNzd2QsIG5hbWUsIGVtYWlsLCBwaG9uZV9udW1iZXIsIGdlbmRlciwgYmlydGhfZGF0ZSwgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8pIHZhbHVlcyAoPywgJ25vcGFzc3dkJywgPywgPywgJzAwMCcsICduJywgJzAwMDAtMDAtMDAnLCAxLCAxKVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgaWRjaGVjazpgc2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQ9P2AsXHJcbiAgICAgICAgbGVhdmU6IGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSB1aWQgPSA/YCxcclxuICAgICAgICBsZWF2ZURlbGV0ZTogYERFTEVURSBGUk9NIGJvYXJkcyBXSEVSRSB3cml0ZXIgPSA/YCxcclxuICAgICAgICBzZXRTY29yZSA6IGBpbnNlcnQgaW50byByYXRpbmdzIChmYWNpbGl0eSxyYXRpbmcpIHZhbHVlcyAoPyw/KWAsXHJcbiAgICAgICAgZ2V0U2NvcmUgOiBgc2VsZWN0IENBU1QoY291bnQoci5yaWQpIEFTIGNoYXIpIGNudCwgQ0FTVChhdmcoci5yYXRpbmcpIEFTIGNoYXIpIHNjb3JlIGZyb20gcmF0aW5ncyByIHdoZXJlIGZhY2lsaXR5ID0gP2BcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNRTDsiLCJpbXBvcnQgTWVtYmVyIGZyb20gJy4uLy4uLy4uL21vZGVscy9NZW1iZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBsZXQge3VzZXJpZH0gPSByZXEucXVlcnk7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IG5ldyBNZW1iZXIoKS5zZWxlY3RGdnIodXNlcmlkKS50aGVuKHJlcyA9PiByZXMpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IHJvd0RhdGEpO1xyXG4gICAgfWNhdGNoIChlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJpYWRiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=