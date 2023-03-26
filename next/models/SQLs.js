const SQL={
    board : {
        select : `select b.* , date_format(b.regdate,'%Y-%m-%d') regdate2, u.name ,CAST(count(c.cid) AS char) cmtcnt from (boards b, users u) left join comments c on b.bid = c.bid where u.uid = b.writer `,
        select2 : ` group by b.bid order by b.bid desc limit 0, ?`,
        selectOne:`select  b.*,date_format(regdate, "%Y-%m-%d") regdate2, u.name  from boards b left join users u on u.uid = b.writer where bid=?`,
        updateView:`update boards set views = views+1  where bid=?`,
        comments : `select c.*,date_format(c.regdate, "%Y-%m-%d") regdate2,u.name  from comments c left join users u on c.userid = u.uid  where c.bid =?`,
        insertCmt : `insert into comments (bid,userid,comment) values(?,?,?)`,
        insert : `insert into boards (title,writer,content,views,category,facility_name) values(?,?,?,0,?,?)`,
        update :`update boards set title=?,content=?,category=?,facility_name=? WHERE bid = ?`,
        deleteCmt:`delete from comments where cid=?`,
        deleteCmt2:`delete from comments where bid=?`,
        delete:`delete from boards where bid=?`,
        selectId:`select uid from users where userid = ?`
    },
    admin : {
        selectUsers : `select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u`,
    },
    user:{
        login :`select u.*, date_format(u.birth_date,'%Y-%m-%d') birth_date2 from users u where u.name=? && u.passwd=?`
    },
    member : {
        insertFvr : `insert into favorites (userid, facility, region, contact) values (?, ?, ?, ?)`,
        selectFvr : `select facility, region, contact from favorites where userid = ?`,
        selectMif : `select userid, name, email, phone_number, gender, date_format(birth_date, "%Y-%m-%d") birth_date from users where uid = ? or userid = ?`,
        selectMdf : `SELECT *, DATE_FORMAT(birth_date, '%Y-%m-%d') as birth_date2 FROM users where uid = ? or userid = ?`,
        isOverlapUid : `select * from users where userid = ?`,
        isOverlapEmail : `select * from users where email = ?`,
        updateInfo : `UPDATE users
                      SET userid = ?, passwd = ?, name = ?,
                          email = ?, phone_number = ?, gender = ?,
                          birth_date = ?, agree_to_privacy_policy = ?,
                          agree_to_advertising_info = ?
                      WHERE uid = ?`,
        join : `insert into users (
            userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info
        ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        socialJoin:`insert into users ( userid, passwd, name, email, phone_number, gender, birth_date, agree_to_privacy_policy, agree_to_advertising_info) values (?, 'nopasswd', ?, ?, '000', 'n', '0000-00-00', 1, 1)
        `,
        idcheck:`select * from users where userid=?`
    },
}

export default SQL;