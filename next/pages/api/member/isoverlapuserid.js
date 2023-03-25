import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid} = req.query;
    console.log('join 페이지 아이디 중복체크에서 전달한 userid값: ' + userid);
    try{
        const rowData = new Member().isOverlapUid(userid).then(res => res);
        res.status(200).json(await rowData);
        console.log('join 페이지 아이디 중복체크')
    }catch (e){
        console.log(e);
    }
}
