import mariadb from './MariaDB';
import SQL from './SQLs';

class Board{
    //게시판 목록출력
    async select(){
        let conn =  null;
        let rowData = null;
        try{
            conn= await mariadb.makeConn();
            rowData  = await conn.query(SQL.board.select);
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        let result={'boards': rowData};
        return result;
    }
    //게시글 출력
    async selectOne(bid){
        let conn =  null;
        let rowData = null;
        let params = [bid];
        try{
            conn= await mariadb.makeConn();
            rowData  = await conn.query(SQL.board.selectOne,params);
            //코멘트 조회 및 추가     
            rowData[0].com = await conn.query(SQL.board.comments,params);       
            //조회수 증가    
            await conn.query(SQL.board.updateView,params);
            await conn.commit();
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
    //코멘트 등록
    async insertCmt(bid,uid,cmt){
        let conn =  null;
        let rowData = null;
        let params = [bid,uid,cmt];
        try{ 
            conn= await mariadb.makeConn();
            await conn.query(SQL.board.insertCmt,params);
            await conn.commit();
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
}

module.exports=Board;



