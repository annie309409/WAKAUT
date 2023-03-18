import Board from  "../../../models/board"

export default async(req,res)=>{
    const {bid,userid,comment} = req.body;
    const cnt =  new Board().insertCmt(bid,userid,comment).then(res=>res);
    res.status(200).json({cnt: await cnt});
}