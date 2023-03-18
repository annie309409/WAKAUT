import Board from '../../../models/board';

export default async (req, res) => {
    const bid = req.query.bid;
    try{
        const rowData = new Board().selectOne(bid).then((bds)=> bds);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}