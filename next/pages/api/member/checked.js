import Member from '../../../models/Member';

export default async (req, res) => {
    let {userid,name,email} = req.query;
    if(name == undefined){
        try{
            const rowData = new Member().idCheck(userid).then(res => res);
            res.status(200).json(await rowData);
        }catch (e){
            console.log(e);
        }
    }else{
        try{
            const rowData = new Member().socialJoin(userid,name,email).then(res => res);
            res.status(200).json(await rowData);
        }catch (e){
            console.log(e);
        }
    }
}
