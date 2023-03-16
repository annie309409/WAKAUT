import { useEffect ,useState} from 'react';

const KakaoSet = (props) =>{
    const [kakaoSend,setKakaoSend] =  useState({});
    useEffect(() => {
        Kakao = window.Kakao;
        window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
        console.log('이게필요해',window.Kakao.Share);
    }, []);
    
    // function share({addr, title, des, img, likes}){
    //     kakaoSend.sendDefault({
    //         objectType: 'location',
    //         address: addr,
    //         addressTitle: title,
    //         content: {
    //             title: title,
    //             description:des,
    //             imageUrl:img,
    //             link: {
    //             // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
    //             mobileWebUrl: 'http://localhost:3000/',
    //             webUrl: 'http://localhost:3000/',
    //             },
    //         },
    //         social: {
    //             likeCount: likes,
    //             // commentCount: comments,
    //             // sharedCount: shares,
    //         },
    //         buttons: [
    //             {
    //             title: '웹으로 보기',
    //             link: {
    //                 mobileWebUrl: 'http://localhost:3000/',
    //                 webUrl: 'http://localhost:3000/',
    //             },
    //             },
    //         ],
    //         });
    // }

    // console.log(kakao);
    return (
        <button>테스트!</button>
    )
}

export default KakaoSet;