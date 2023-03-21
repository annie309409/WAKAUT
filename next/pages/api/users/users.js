import Admin from '../../../models/admin';

export default async (req, res) => {
    try{
        const rowData = new Admin().select().then((bds)=> bds);
        res.status(200).json(await rowData);
    }catch (e){
        console.log(e);
    }
}
