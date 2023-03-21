import mariadb from './MariaDB';
import SQL from './SQLs';

class Board{
    //게시판 목록출력
    async select(pg,cat,note){
        let conn =  null;
        let rowData = null;
        let where ='';
        (cat !='All') ? cat = `category='${cat}'` : cat='';
        console.log(cat);
        if(cat && note){
            where = ` and ${cat} and (title like '%테스트%' or content like '%테스트%' or u.name like '%테스트%') `
        }else{
            console.log('일반');
        }
        try{
            conn= await mariadb.makeConn();
            rowData  = await conn.query(SQL.board.select+where+SQL.board.select2,[pg]);
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
    //코멘트 삭제
    async deleteCmt(cid,bid){
        let conn =  null;
        let rowData = null;
        let params = [cid];
        try{ 
            conn= await mariadb.makeConn();
            await conn.query(SQL.board.deleteCmt,params);
            await conn.commit();
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
    //게시글 등록
    async insert(data){
        let conn =  null;
        let rowData = null;
        let params = [data.title,data.userid,data.content,data.category, data.facility];
        try{ 
            conn= await mariadb.makeConn();
            await conn.query(SQL.board.insert,params);
            await conn.commit();
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
     //게시글 수정
     async modify(data){
        let conn =  null;
        let rowData = null;
        let params = [data.title,data.content,data.category, data.facility,data.bid];
        try{ 
            conn= await mariadb.makeConn();
             await conn.query(SQL.board.update,params);
            await conn.commit();
            rowData =1;
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
    //게시글 삭제
    async delete(bid){
        let conn =  null;
        let rowData = null;
        let params = [bid];
        try{ 
            conn= await mariadb.makeConn();
            await conn.query(SQL.board.deleteCmt2,params);
            await conn.query(SQL.board.delete,params);
            await conn.commit();
            rowData =1;
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        return rowData;
    }
}

module.exports=Board;



