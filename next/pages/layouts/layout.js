import Header from './header';
import Footer from './footer';

const Layout =({children})=>{
  return(
    <html lang = 'ko'>
      <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=69823228c875a5a95558c4f4b78b0ae9&libraries=services,clusterer"></script>
            <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
            <title>WAKAUT! 주변에서 운동하세요!</title>
      </head>
      <body>
        <div className='hdrWrap'>
          <Header menu={['mypage','community','login/signin', 'join','manager']} route={['/member/mypage','/board/boardlist','/member/login', '/member/join','/admin/manager']}/>
        </div>
        <div className="cntWrap">{children}</div>
        <div className='frtWrap'>
          <Footer />
        </div>
      </body>
    </html>
  );

}  

export default Layout;