import Board from '../../../models/board';

export default async (req, res) => {
    let {pg,cat,note,fcname,userid} = req.query;
    console.log(userid);
    if(userid !=undefined ){
        try{
            const rowData = new Board().selectId(userid).then((bds)=> bds);
            res.status(200).json(await rowData);
        }catch (e){
            console.log(e);
        }
    }else{
        try{
            const rowData = new Board().select(parseInt(pg),cat,note,fcname).then((bds)=> bds);
            res.status(200).json(await rowData);
        }catch (e){
            console.log(e);
        }
    }
}
