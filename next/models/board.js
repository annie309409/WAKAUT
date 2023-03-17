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

}

module.exports=Board;



