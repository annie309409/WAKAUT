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
        deleteCmt:`delete from comments where cid=?`
    }
}

export default SQL;