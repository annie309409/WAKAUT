import Board from '../../../models/board';

export default async (req, res) => {
    try{
        const rowData = new Board().select().then((bds)=> bds);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}