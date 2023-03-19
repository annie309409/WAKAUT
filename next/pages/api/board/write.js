import Board from  "../../../models/board"

export default async(req,res)=>{
    let cnt = '';
    if(req.body.bid > 0){
        cnt =  new Board().modify(req.body).then(res=>res);
    }else{
        cnt =  new Board().insert(req.body).then(res=>res);
    }
    res.status(200).json({cnt: await cnt});
}
