import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid} = req.query;
    console.log('전달한 파라미터:' + userid);
    try{
        const rowData = new Member().selectFvr(userid).then(res => res);
        res.status(200).json(await rowData);
        console.log('즐겨찾기 목록 가져오기')
    }catch (e){
        console.log(e);
    }
}
