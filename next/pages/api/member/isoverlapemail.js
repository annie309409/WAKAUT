import Member from '../../../models/Member';

export default async (req, res) => {
    let {email} = req.query;
    console.log('join 페이지 이메일 중복체크에서 전달한 email 값: ' + email);
    try{
        const rowData = new Member().isOverlapEmail(email).then(res => res);
        res.status(200).json(await rowData);
        console.log('join 페이지 아이디 중복체크')
    }catch (e){
        console.log(e);
    }
}
