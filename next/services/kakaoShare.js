export default function kakaoShare({addr, title, des, img, likes}){
    if (!window.Kakao.isInitialized()) {
        window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
       
    }else{
        Kakao.Share.sendDefault({
        objectType: 'location',
        address: addr,
        addressTitle: title,
        content: {
            title: title,
            description:des,
            imageUrl:img,
            link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/',
            },
        },
        social: {
            likeCount: likes,
            // commentCount: comments,
            // sharedCount: shares,
        },
        buttons: [
            {
            title: '웹으로 보기',
            link: {
                mobileWebUrl: 'http://localhost:3000/',
                webUrl: 'http://localhost:3000/',
            },
            },
        ],
        });
    }
}