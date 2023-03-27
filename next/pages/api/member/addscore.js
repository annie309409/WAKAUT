import Member from "../../../models/Member"

export default async(req,res)=>{
    const {facility,score} = req.body;
    if(facility && score){
            const cnt =  new Member().setScore(facility,score).then(res => res);
            res.status(200).json({cnt: await cnt});
        }else{
            const cnt =  new Member().getScore(req.query.facility).then(res => res);
            res.status(200).json(await cnt);
        }
}