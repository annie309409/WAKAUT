import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid} = req.query;
    try{
        const rowData = new Member().selectMif(userid).then(res => res);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}
