import Member from "../../../models/Member"

export default async(req,res)=>{
        const {userid, facility, region, contact} = req.body;
        const cnt =  new Member().insertFvr(userid, facility, region, contact).then(res => res);
        res.status(200).json({cnt: await cnt});
}