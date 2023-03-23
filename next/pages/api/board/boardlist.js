import Board from '../../../models/board';

export default async (req, res) => {
    let {pg,cat,note,fcname} = req.query;
    console.log('서버 값:' + pg,cat,note);
    try{
        const rowData = new Board().select(parseInt(pg),cat,note,fcname).then((bds)=> bds);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}
