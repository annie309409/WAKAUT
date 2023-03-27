import Member from "../../../models/Member"

export default async(req,res)=>{
    const {userid} = req.body;
    const cnt =  new Member().deleteFvr(userid).then(res => res);
    res.status(200).json({cnt: await cnt});
}