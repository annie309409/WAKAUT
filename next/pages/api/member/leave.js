import Member from '../../../models/Member';

export default async (req, res) => {
    const {uid} = req.body;
    try{
        const rowData = new Member().leave(uid).then(res => res);
        res.status(200).json({rowData: await rowData});
    }catch (e){
        console.log(e);
    }
}
