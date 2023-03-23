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

    // myinfo 출력
    async selectMif(uid) {
        let conn = null;
        let rowData = null;
        let params = [uid];
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

    // modify 출력
    async selectMdf(uid) {
        let conn = null;
        let rowData = null;
        let params = [uid];
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
    async updateInfo(userid,
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
            await conn.query(SQL.member.updateInfo, params);
            await conn.commit();
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        return rowData;
    }

    // 즐겨찾기 삭제
    // async deleteCmt(cid, bid) {
    //     let conn = null;
    //     let rowData = null;
    //     let params = [cid];
    //     try {
    //         conn = await mariadb.makeConn();
    //         await conn.query(SQL.board.deleteCmt, params);
    //         await conn.commit();
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         await mariadb.closeConn();
    //     }
    //     return rowData;
    // }
}
module.exports = Member;



