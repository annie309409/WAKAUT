import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid} = req.query;
    console.log('mypage 페이지에서 전달한 userid값' + userid);
    try{
        const rowData = new Member().selectMif(userid).then(res => res);
        res.status(200).json(await rowData);
        console.log('myinfo 출력')
    }catch (e){
        console.log(e);
    }
}
