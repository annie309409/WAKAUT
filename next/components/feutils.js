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
        kakao.init("78f0db8ffa3b9e86fcbb2ab02f3dc511");
    }
    return kakao;
}

// 구글 리캡챠
const check_captcha = async (response) => {
    let url = '/api/recaptcha?response=' + response;
    const data = axios.get(url).then(data => data.data);
    console.log((await data).success);

    return (await data).success;
};

module.exports = {Datas,Post,handleInput,kakaoInit, check_captcha}