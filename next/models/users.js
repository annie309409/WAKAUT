import mariadb from './MariaDB';
import SQL from './SQLs';


class User{
    //로그인 목록 출력
    async select(id,pw){
        let conn =  null;
        let rowData = null;
        let param = [id,pw];
        try{
            conn= await mariadb.makeConn();
            rowData  = await conn.query(SQL.user.login,param);
        }catch (e) {
            console.log(e);
        }finally {
            await mariadb.closeConn();
        }
        let result={'data': rowData};
        
        return result;
    }
}

module.exports=User;

