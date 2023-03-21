import Board from  "../../../models/board"

export default async(req,res)=>{
    let cnt = '';
    cnt =  new Board().delete(req.body.bid).then(res=>res);
    res.status(200).json({cnt: await cnt});
    return cnt ;
}
