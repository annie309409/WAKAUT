import { useEffect ,useState} from 'react';

// export default function KakaoShare(){
//     let Kakao = {};
//     if (typeof window !== 'undefined') { 
//         useEffect(() => {
//             Kakao = window.Kakao;
//             window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
//             console.log(Kakao);
//         }, []);
//     }
    
//     return(
//         <>
//             <button onClick={test}>테스트카카오</button>
//         </>
//     )
// }

export default KakaoSet =()=>{
    const [kakao, setKakao] = useState(null);
    useEffect(() => {
        Kakao = window.Kakao;
        window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
        setKakao(window.Kakao);
    }, []);
    console.log(kakao);
    return kakao;
}

// function share({addr, title, des, img, likes}){
//     Kakao.Share.sendDefault({
//     objectType: 'location',
//     address: addr,
//     addressTitle: title,
//     content: {
//         title: title,
//         description:des,
//         imageUrl:img,
//         link: {
//         // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
//         mobileWebUrl: 'http://localhost:3010/',
//         webUrl: 'http://localhost:3010/',
//         },
//     },
//     social: {
//         likeCount: likes,
//         // commentCount: comments,
//         // sharedCount: shares,
//     },
//     buttons: [
//         {
//         title: '웹으로 보기',
//         link: {
//             mobileWebUrl: 'http://localhost:3010/',
//             webUrl: 'http://localhost:3010/',
//         },
//         },
//     ],
//     });
// }