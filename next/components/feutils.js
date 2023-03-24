import axios from 'axios';
const fixedUrl = 'http://localhost:3000/api'; 

async function Datas(loc,param){
    let url = `${fixedUrl}${loc}`;
    if(param) url = `${fixedUrl}${loc}?${param}`;
    const res = await axios.get(url);
    const datas = await res.data;
    return datas;
}

const Post = async (data,url) => {
    console.log("넘어온데이타는", data);
    const cnt = fetch(`${fixedUrl}${url}`,{ method: 'POST', mode: 'cors', body:JSON.stringify(data), headers:{'Content-Type': 'application/json'}
    }).then(res=>res.json());
    return await cnt;
};

const handleInput = (setInput, e) => {
    setInput(e.target.value);
};

const kakaoInit = () => {
    const kakao = (window).Kakao;
    if(!kakao.isInitialized()) {
        kakao.init("5902f1adf0dd7afcb5e13c5e0b3cdf54");
    }
    return kakao;
}
module.exports = {Datas,Post,handleInput,kakaoInit}