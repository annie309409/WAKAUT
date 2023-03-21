import mariadb from './MariaDB';
import SQL from './SQLs';


class Admin{
    //유저 목록 출력
    async select(){
        let conn =  null;
        let rowData = null;
        try{
            conn= await mariadb.makeConn();
            rowData  = await conn.query(SQL.admin.selectUsers);
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        let result={'boards': rowData};
        
        return result;
    }
}

module.exports=Admin;



