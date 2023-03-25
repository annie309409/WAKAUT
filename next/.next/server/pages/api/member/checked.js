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
  } // myinfo 출력


  async selectMif(uid) {
    let conn = null;
    let rowData = null;
    let params = [uid];

    try {
      conn = await _MariaDB.default.makeConn();
      rowData = await conn.query(_SQLs.default.member.selectMif, params);
    } catch (e) {
      console.log(e);
    } finally {
      await _MariaDB.default.closeConn();
    }

    return rowData;
  } // modify 출력


  async selectMdf(uid) {
    let conn = null;
    let rowData = null;
    let params = [uid];

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


  async updateInfo(userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info) {
    let conn = null;
    let rowData = null;
    let params = [userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01hcmlhREIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL01lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvU1FMcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVtYmVyL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFyaWFkYlwiIl0sIm5hbWVzIjpbImRiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNQVJJQURCX0hPU1QiLCJ1c2VyIiwiTUFSSUFEQl9VU0VSIiwicGFzc3dvcmQiLCJNQVJJQURCX1BXRCIsImRhdGFiYXNlIiwiTUFSSUFEQl9EQiIsIk1hcmlhREIiLCJtYWtlQ29ubiIsIm1hcmlhZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUNvbm4iLCJjb25uIiwiY2xvc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWVtYmVyIiwiaW5zZXJ0RnZyIiwidXNlcmlkIiwiZmFjaWxpdHkiLCJyZWdpb24iLCJjb250YWN0Iiwicm93RGF0YSIsInBhcmFtcyIsInF1ZXJ5IiwiU1FMIiwibWVtYmVyIiwiY29tbWl0Iiwic2VsZWN0RnZyIiwic2VsZWN0TWlmIiwidWlkIiwic2VsZWN0TWRmIiwidXBkYXRlSW5mbyIsInBhc3N3ZCIsIm5hbWUiLCJlbWFpbCIsInBob25lX251bWJlciIsImJpcnRoX2RhdGUiLCJnZW5kZXIiLCJhZ3JlZV90b19wcml2YWN5X3BvbGljeSIsImFncmVlX3RvX2FkdmVydGlzaW5nX2luZm8iLCJqb2luIiwiaWRDaGVjayIsImlkY2hlY2siLCJzb2NpYWxKb2luIiwiYm9hcmQiLCJzZWxlY3QiLCJzZWxlY3QyIiwic2VsZWN0T25lIiwidXBkYXRlVmlldyIsImNvbW1lbnRzIiwiaW5zZXJ0Q210IiwiaW5zZXJ0IiwidXBkYXRlIiwiZGVsZXRlQ210IiwiZGVsZXRlQ210MiIsImRlbGV0ZSIsInNlbGVjdElkIiwiYWRtaW4iLCJzZWxlY3RVc2VycyIsImxvZ2luIiwicmVxIiwicmVzIiwidW5kZWZpbmVkIiwidGhlbiIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQURMO0FBRWJDLE1BQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFlBRkw7QUFHYkMsVUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FIVDtBQUliQyxVQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTztBQUpULENBQWpCO0FBUUEsTUFBTUMsT0FBTyxHQUFFO0FBQ1hDLFVBQVEsRUFBRyxZ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LE1BT0s7QUFDRCxRQUFHO0FBQ0MsWUFBTWMsT0FBTyxHQUFHLElBQUlOLHFEQUFKLEdBQWE0QixVQUFiLENBQXdCMUIsTUFBeEIsRUFBK0JnQixJQUEvQixFQUFvQ0MsS0FBcEMsRUFBMkM2QixJQUEzQyxDQUFnREYsR0FBRyxJQUFJQSxHQUF2RCxDQUFoQjtBQUNBQSxTQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNNUMsT0FBM0I7QUFDSCxLQUhELENBR0MsT0FBT2QsQ0FBUCxFQUFTO0FBQ05DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFDSjtBQUNKLENBakJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL21lbWJlci9jaGVja2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbWVtYmVyL2NoZWNrZWQuanNcIik7XG4iLCJpbXBvcnQgbWFyaWFkYiBmcm9tIFwibWFyaWFkYlwiO1xyXG5cclxuY29uc3QgZGJjb25maWcgPSB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQVJJQURCX0hPU1QsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQVJJQURCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTUFSSUFEQl9QV0QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTUFSSUFEQl9EQlxyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcmlhREIgPXtcclxuICAgIG1ha2VDb25uIDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmlhZGIuY3JlYXRlQ29ubmVjdGlvbihkYmNvbmZpZyk7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUNvbm4gOiBhc3luYyAoY29ubikgPT4ge1xyXG4gICAgICAgIGlmKGNvbm4pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXJpYURCOyIsImltcG9ydCBtYXJpYWRiIGZyb20gJy4vTWFyaWFEQic7XHJcbmltcG9ydCBTUUwgZnJvbSAnLi9TUUxzJztcclxuXHJcbmNsYXNzIE1lbWJlciB7XHJcbiAgICAvLyDsppDqsqjssL7quLAg7LaU6rCAXHJcbiAgICBhc3luYyBpbnNlcnRGdnIodXNlcmlkLCBmYWNpbGl0eSwgcmVnaW9uLCBjb250YWN0KSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCwgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmluc2VydEZ2ciwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOymkOqyqOywvuq4sCDrqqnroZ0g7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RGdnIodXNlcmlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RGdnIsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBteWluZm8g7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RNaWYodWlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RNaWYsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb2RpZnkg7Lac66ClXHJcbiAgICBhc3luYyBzZWxlY3RNZGYodWlkKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VpZF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29ubiA9IGF3YWl0IG1hcmlhZGIubWFrZUNvbm4oKTtcclxuICAgICAgICAgICAgcm93RGF0YSA9IGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci5zZWxlY3RNZGYsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDtmozsm5DsoJXrs7Qg7IiY7KCVXHJcbiAgICBhc3luYyB1cGRhdGVJbmZvKHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICAgcGFzc3dkLFxyXG4gICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBiaXJ0aF9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICBnZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LFxyXG4gICAgICAgICAgICAgICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb25uID0gbnVsbDtcclxuICAgICAgICBsZXQgcm93RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFncmVlX3RvX2FkdmVydGlzaW5nX2luZm9dO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbm4gPSBhd2FpdCBtYXJpYWRiLm1ha2VDb25uKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbm4ucXVlcnkoU1FMLm1lbWJlci51cGRhdGVJbmZvLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLmNvbW1pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgbWFyaWFkYi5jbG9zZUNvbm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7ZqM7JuQ6rCA7J6FXHJcbiAgICBhc3luYyBqb2luKFxyXG4gICAgICAgIHVzZXJpZCxcclxuICAgICAgICBwYXNzd2QsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgYmlydGhfZGF0ZSxcclxuICAgICAgICBnZW5kZXIsXHJcbiAgICAgICAgYWdyZWVfdG9fcHJpdmFjeV9wb2xpY3ksXHJcbiAgICAgICAgYWdyZWVfdG9fYWR2ZXJ0aXNpbmdfaW5mbylcclxuICAgIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbXHJcbiAgICAgICAgICAgIHVzZXJpZCxcclxuICAgICAgICAgICAgcGFzc3dkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyLFxyXG4gICAgICAgICAgICBiaXJ0aF9kYXRlLFxyXG4gICAgICAgICAgICBnZW5kZXIsXHJcbiAgICAgICAgICAgIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LFxyXG4gICAgICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuam9pbiwgcGFyYW1zKTtcclxuICAgICAgICAgICAgYXdhaXQgY29ubi5jb21taXQoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG4gICAgLy/tmozsm5Ag6rCA7J6F7Jes67aAIO2ZleyduFxyXG4gICAgYXN5bmMgaWRDaGVjayh1c2VyaWQpIHtcclxuICAgICAgICBsZXQgY29ubiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJvd0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBbdXNlcmlkXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICByb3dEYXRhID0gYXdhaXQgY29ubi5xdWVyeShTUUwubWVtYmVyLmlkY2hlY2ssIHBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBtYXJpYWRiLmNsb3NlQ29ubigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL+yGjOyFnO2ajOybkCDqsIDsnoUgXHJcbiAgICBhc3luYyBzb2NpYWxKb2luKHVzZXJpZCxuYW1lLGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IGNvbm4gPSBudWxsO1xyXG4gICAgICAgIGxldCByb3dEYXRhID0gMTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW3VzZXJpZCxuYW1lLGVtYWlsXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25uID0gYXdhaXQgbWFyaWFkYi5tYWtlQ29ubigpO1xyXG4gICAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KFNRTC5tZW1iZXIuc29jaWFsSm9pbiwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1hcmlhZGIuY2xvc2VDb25uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dEYXRhO1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE1lbWJlcjtcclxuXHJcblxyXG5cclxuIiwiY29uc3QgU1FMPXtcclxuICAgIGJvYXJkIDoge1xyXG4gICAgICAgIHNlbGVjdCA6IGBzZWxlY3QgYi4qICwgZGF0ZV9mb3JtYXQoYi5yZWdkYXRlLCclWS0lbS0lZCcpIHJlZ2RhdGUyLCB1Lm5hbWUgLENBU1QoY291bnQoYy5jaWQpIEFTIGNoYXIpIGNtdGNudCBmcm9tIChib2FyZHMgYiwgdXNlcnMgdSkgbGVmdCBqb2luIGNvbW1lbnRzIGMgb24gYi5iaWQgPSBjLmJpZCB3aGVyZSB1LnVpZCA9IGIud3JpdGVyIGAsXHJcbiAgICAgICAgc2VsZWN0MiA6IGAgZ3JvdXAgYnkgYi5iaWQgb3JkZXIgYnkgYi5iaWQgZGVzYyBsaW1pdCAwLCA/YCxcclxuICAgICAgICBzZWxlY3RPbmU6YHNlbGVjdCAgYi4qLGRhdGVfZm9ybWF0KHJlZ2RhdGUsIFwiJVktJW0tJWRcIikgcmVnZGF0ZTIsIHUubmFtZSAgZnJvbSBib2FyZHMgYiBsZWZ0IGpvaW4gdXNlcnMgdSBvbiB1LnVpZCA9IGIud3JpdGVyIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICB1cGRhdGVWaWV3OmB1cGRhdGUgYm9hcmRzIHNldCB2aWV3cyA9IHZpZXdzKzEgIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBjb21tZW50cyA6IGBzZWxlY3QgYy4qLGRhdGVfZm9ybWF0KGMucmVnZGF0ZSwgXCIlWS0lbS0lZFwiKSByZWdkYXRlMix1Lm5hbWUgIGZyb20gY29tbWVudHMgYyBsZWZ0IGpvaW4gdXNlcnMgdSBvbiBjLnVzZXJpZCA9IHUudWlkICB3aGVyZSBjLmJpZCA9P2AsXHJcbiAgICAgICAgaW5zZXJ0Q210IDogYGluc2VydCBpbnRvIGNvbW1lbnRzIChiaWQsdXNlcmlkLGNvbW1lbnQpIHZhbHVlcyg/LD8sPylgLFxyXG4gICAgICAgIGluc2VydCA6IGBpbnNlcnQgaW50byBib2FyZHMgKHRpdGxlLHdyaXRlcixjb250ZW50LHZpZXdzLGNhdGVnb3J5LGZhY2lsaXR5X25hbWUpIHZhbHVlcyg/LD8sPywwLD8sPylgLFxyXG4gICAgICAgIHVwZGF0ZSA6YHVwZGF0ZSBib2FyZHMgc2V0IHRpdGxlPT8sY29udGVudD0/LGNhdGVnb3J5PT8sZmFjaWxpdHlfbmFtZT0/IFdIRVJFIGJpZCA9ID9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDpgZGVsZXRlIGZyb20gY29tbWVudHMgd2hlcmUgY2lkPT9gLFxyXG4gICAgICAgIGRlbGV0ZUNtdDI6YGRlbGV0ZSBmcm9tIGNvbW1lbnRzIHdoZXJlIGJpZD0/YCxcclxuICAgICAgICBkZWxldGU6YGRlbGV0ZSBmcm9tIGJvYXJkcyB3aGVyZSBiaWQ9P2AsXHJcbiAgICAgICAgc2VsZWN0SWQ6YHNlbGVjdCB1aWQgZnJvbSB1c2VycyB3aGVyZSB1c2VyaWQgPSA/YFxyXG4gICAgfSxcclxuICAgIGFkbWluIDoge1xyXG4gICAgICAgIHNlbGVjdFVzZXJzIDogYHNlbGVjdCB1LiosIGRhdGVfZm9ybWF0KHUuYmlydGhfZGF0ZSwnJVktJW0tJWQnKSBiaXJ0aF9kYXRlMiBmcm9tIHVzZXJzIHVgLFxyXG4gICAgfSxcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGxvZ2luIDpgc2VsZWN0IHUuKiwgZGF0ZV9mb3JtYXQodS5iaXJ0aF9kYXRlLCclWS0lbS0lZCcpIGJpcnRoX2RhdGUyIGZyb20gdXNlcnMgdSB3aGVyZSB1Lm5hbWU9PyAmJiB1LnBhc3N3ZD0/YFxyXG4gICAgfSxcclxuICAgIG1lbWJlciA6IHtcclxuICAgICAgICBpbnNlcnRGdnIgOiBgaW5zZXJ0IGludG8gZmF2b3JpdGVzICh1c2VyaWQsIGZhY2lsaXR5LCByZWdpb24sIGNvbnRhY3QpIHZhbHVlcyAoPywgPywgPywgPylgLFxyXG4gICAgICAgIHNlbGVjdEZ2ciA6IGBzZWxlY3QgZmFjaWxpdHksIHJlZ2lvbiwgY29udGFjdCBmcm9tIGZhdm9yaXRlcyB3aGVyZSB1c2VyaWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNaWYgOiBgc2VsZWN0IHVzZXJpZCwgbmFtZSwgZW1haWwsIHBob25lX251bWJlciwgZ2VuZGVyLCBkYXRlX2Zvcm1hdChiaXJ0aF9kYXRlLCBcIiVZLSVtLSVkXCIpIGJpcnRoX2RhdGUgZnJvbSB1c2VycyB3aGVyZSB1aWQgPSA/YCxcclxuICAgICAgICBzZWxlY3RNZGYgOiBgU0VMRUNUICosIERBVEVfRk9STUFUKGJpcnRoX2RhdGUsICclWS0lbS0lZCcpIGFzIGJpcnRoX2RhdGUyIEZST00gdXNlcnMgd2hlcmUgdWlkID0gP2AsXHJcbiAgICAgICAgdXBkYXRlSW5mbyA6IGBVUERBVEUgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgIFNFVCB1c2VyaWQgPSA/LCBwYXNzd2QgPSA/LCBuYW1lID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9ID8sIHBob25lX251bWJlciA9ID8sIGdlbmRlciA9ID8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhfZGF0ZSA9ID8sIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5ID0gPyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvID0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgdWlkID0gMWAsXHJcbiAgICAgICAgam9pbiA6IGBpbnNlcnQgaW50byB1c2VycyAoXHJcbiAgICAgICAgICAgIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvXHJcbiAgICAgICAgKSB2YWx1ZXMgKD8sID8sID8sID8sID8sID8sID8sID8sID8pYCxcclxuICAgICAgICBzb2NpYWxKb2luOmBpbnNlcnQgaW50byB1c2VycyAoIHVzZXJpZCwgcGFzc3dkLCBuYW1lLCBlbWFpbCwgcGhvbmVfbnVtYmVyLCBnZW5kZXIsIGJpcnRoX2RhdGUsIGFncmVlX3RvX3ByaXZhY3lfcG9saWN5LCBhZ3JlZV90b19hZHZlcnRpc2luZ19pbmZvKSB2YWx1ZXMgKD8sICdub3Bhc3N3ZCcsID8sID8sICcwMDAnLCAnbicsICcwMDAwLTAwLTAwJywgMSwgMSlcclxuICAgICAgICBgLFxyXG4gICAgICAgIGlkY2hlY2s6YHNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgdXNlcmlkPT9gXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTUUw7IiwiaW1wb3J0IE1lbWJlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTWVtYmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgbGV0IHt1c2VyaWQsbmFtZSxlbWFpbH0gPSByZXEucXVlcnk7XHJcbiAgICBpZihuYW1lID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByb3dEYXRhID0gbmV3IE1lbWJlcigpLmlkQ2hlY2sodXNlcmlkKS50aGVuKHJlcyA9PiByZXMpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCByb3dEYXRhKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSBuZXcgTWVtYmVyKCkuc29jaWFsSm9pbih1c2VyaWQsbmFtZSxlbWFpbCkudGhlbihyZXMgPT4gcmVzKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgcm93RGF0YSk7XHJcbiAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmlhZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==