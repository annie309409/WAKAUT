const SQL={
    board : {
        select : `select b.* , date_format(regdate,'%Y-%m-%d') regdate2, u.name  from boards b left join users u on u.uid = b.writer order by bid desc`,
    }
}

export default SQL;