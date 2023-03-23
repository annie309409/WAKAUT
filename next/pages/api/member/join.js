import Member from "../../../models/Member"

export default async(req,res)=>{
    const {userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info} = req.body;
    console.log('회원가입 전달한 파라미터' + userid, passwd, name, email, phone_number, birth_date, gender, agree_to_privacy_policy, agree_to_advertising_info);
    const cnt =  new Member()
        .join(
            userid,
            passwd,
            name,
            email,
            phone_number,
            gender,
            birth_date,
            agree_to_privacy_policy,
            agree_to_advertising_info)
        .then(res => res);
    res.status(200).json({cnt: await cnt});
    console.log("회원가입")
}