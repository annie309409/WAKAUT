import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid} = req.query;
    console.log('modify 페이지에서 전달한 userid값: ' + userid);
    try{
        const rowData = new Member().selectMdf(userid).then(res => res);
        res.status(200).json(await rowData);
        console.log('modify 출력')
    }catch (e){
        console.log(e);
    }
}
