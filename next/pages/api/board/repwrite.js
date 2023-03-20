import Board from  "../../../models/board"

export default async(req,res)=>{
    if(req.body.cid){
        const cnt =  new Board().deleteCmt(req.body.cid).then(res=>res);
        res.status(200).json({cnt: await cnt});
        console.log('딜리트문');
    }else{
        const {bid,userid,comment} = req.body;
        const cnt =  new Board().insertCmt(bid,userid,comment).then(res=>res);
        res.status(200).json({cnt: await cnt});
    }
}