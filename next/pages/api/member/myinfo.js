import Member from '../../../models/Member';

export default async (req, res) => {
    let {uid} = req.query;
    console.log('전달한 파라미터:' + uid);
    try{
        const rowData = new Member().selectMif(uid).then(res => res);
        res.status(200).json(await rowData);
        console.log('myinfo 출력')
    }catch (e){
        console.log(e);
    }
}
