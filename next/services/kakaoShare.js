export default function kakaoShare({props}){
    if (!window.Kakao.isInitialized()) {
        window.Kakao.init('69823228c875a5a95558c4f4b78b0ae9');
       
    }else{
        Kakao.Share.sendDefault({
        objectType: 'location',
        address: props.addr,
        addressTitle: props.title,
        content: {
            title: props.title,
            description:props.des,
            imageUrl:props.img,
            link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/',
            },
        },
        social: {
            likeCount: props.likes,
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