import mariadb from './MariaDB';
import SQL from './SQLs';

class Member {
    // 즐겨찾기 추가
    async insertFvr(userid, facility, region, contact) {
        let conn = null;
        let rowData = null;
        let params = [userid, facility, region, contact];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.insertFvr, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 즐겨찾기 삭제
    async deleteFvr(fid) {
        let conn = null;
        let rowData = null;
        let params = [fid];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.deleteFvr, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 즐겨찾기 목록 출력
    async selectFvr(userid) {
        let conn = null;
        let rowData = null;
        let params = [userid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.selectFvr, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 회원탈퇴 시 게시글 삭제
    async leaveDelete(writer) {
        let conn = null;
        let rowData = null;
        let params = [writer]
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.leaveDelet, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 회원탈퇴
    async leave(uid) {
        let conn = null;
        let rowData = null;
        let params = [uid]
        try {
            conn = await mariadb.makeConn();
            await conn.beginTransaction();
            // 해당 회원이 작성한 모든 댓글 삭제
            await conn.query('DELETE FROM comments WHERE userid = ?', [uid]);
            // 해당 회원이 작성한 모든 게시글 삭제
            await conn.query('DELETE FROM boards WHERE writer = ?', [uid]);
            await conn.query(SQL.member.leave, params);
            await conn.commit();
        } catch (e) {
            await conn.rollback();
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // myinfo 출력
    async selectMif(uid) {
        let conn = null;
        let rowData = null;
        let params = [uid, uid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.selectMif, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // mypage 남긴글 수
    async history(writer) {
        let conn = null;
        let rowData = null;
        let params = [writer];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.history, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData.map(row => {
            return {
                cnt: row.cnt.toString()
            }
        })
    }

    // modify 출력
    async selectMdf(uid) {
        let conn = null;
        let rowData = null;
        let params = [uid, uid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.selectMdf, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 회원정보 수정
    async updateInfo(uid, userid, passwd, name, email, phone_number, birth_date, gender,
                     agree_to_privacy_policy, agree_to_advertising_info)
    {
        let conn = null;
        let rowData = null;
        let params = [userid, passwd, name, email, phone_number, birth_date, gender,
            agree_to_privacy_policy, agree_to_advertising_info, uid];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.updateInfo, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 회원가입
    async join(
        userid,
        passwd,
        name,
        email,
        phone_number,
        birth_date,
        gender,
        agree_to_privacy_policy,
        agree_to_advertising_info)
    {
        let conn = null;
        let rowData = null;
        let params = [
            userid,
            passwd,
            name,
            email,
            phone_number,
            birth_date,
            gender,
            agree_to_privacy_policy,
            agree_to_advertising_info];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.join, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 아이디 중복체크
    async isOverlapUid(userid) {
        let conn = null;
        let rowData = null;
        let params = [userid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.isOverlapUid, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 이메일 중복체크
    async isOverlapEmail(userid) {
        let conn = null;
        let rowData = null;
        let params = [userid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.isOverlapEmail, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    //회원 가입여부 확인
    async idCheck(userid) {
        let conn = null;
        let rowData = null;
        let params = [userid];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.idcheck, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    //소셜회원 가입 
    async socialJoin(userid,name,email) {
        let conn = null;
        let rowData = 1;
        let params = [userid,name,email];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.socialJoin, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    //스코어 추가 
    async setScore(facility,score) {
        let conn = null;
        let rowData = 1;
        let params = [facility,score];
        try {
            conn = await mariadb.makeConn();
            await conn.query(SQL.member.setScore, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
     //스코어 조회
     async getScore(facility) {
        let conn = null;
        let rowData = null;
        let params = [facility];
        try {
            conn = await mariadb.makeConn();
            rowData = await conn.query(SQL.member.getScore, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

}
module.exports = Member;



