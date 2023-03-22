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
        kakao.init('69823228c875a5a95558c4f4b78b0ae9');
    }
    return kakao;
}
module.exports = {Datas,Post,handleInput,kakaoInit}