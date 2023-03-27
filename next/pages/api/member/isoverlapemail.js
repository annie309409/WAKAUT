import Member from '../../../models/Member';

export default async (req, res) => {
    let {email} = req.query;
    try{
        const rowData = new Member().isOverlapEmail(email).then(res => res);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}
