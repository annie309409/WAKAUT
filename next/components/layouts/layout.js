import Header from './header';
import Footer from './footer';
import Head from "next/head";
import { useState, useEffect } from 'react';
import Loading from '../loading';

const Layout =({children,meta})=>{
  const {title,description,icon}=meta;
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  })
  return(
    <>
      <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description} />
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <link rel="icon" href={icon || "%PUBLIC_URL%/favicon.ico"} />
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=69823228c875a5a95558c4f4b78b0ae9&libraries=services,clusterer"></script>
            <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
            <title>{title}</title>
      </Head>
      <div className='hdrWrap'>
        <Header menu={['mypage','community','login/signin', 'join','manager']} route={['/member/mypage','/board/boardlist','/member/login', '/member/join','/admin/manager']}/>
      </div>
      <Loading loading={loading}/>
      <div className="cntWrap">{children}</div>
      <div className='frtWrap'>
        <Footer />
      </div>
    </>
  );

}  

export default Layout;