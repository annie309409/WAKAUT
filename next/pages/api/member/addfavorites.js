import Member from "../../../models/Member"

export default async(req,res)=>{
        const {userid, facility, region, contact} = req.body;
        console.log('전달한 파라미터' + userid, facility, region, contact);
        const cnt =  new Member().insertFvr(userid, facility, region, contact).then(res => res);
        res.status(200).json({cnt: await cnt});
        console.log("즐겨찾기 추가")
}