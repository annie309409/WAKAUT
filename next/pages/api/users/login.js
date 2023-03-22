import User  from '../../../models/users';

export default async (req,res)=>{
    const [userid, passwd] =  [req.query.userid, req.query.passwd];
    try{
        
        const mem = new User().select(userid,passwd).then(res=>res);
        const result = (await mem).data;
        const data = { uid: (await result)[0].uid,
            userid: (await result)[0].uid, 
            email: (await result)[0].email, 
            name:(await result)[0].name }
            res.status(200).json(await data);
        }catch(e){
            res.status(500).json({'에러메세지':'에러발생'});
    }
}