import Header from './header';
import Footer from './footer';
import Head from "next/head";

const Layout =({children,meta})=>{
  const {title,description,icon}=meta;
  let sess = children.props.session;
  let menus = ['mypage','community','login/join','manager'];
  let routers =['/member/mypage','/board/boardlist','/member/logout', '/admin/manager'];

  if(sess.name ==='admin'){
    menus = ['mypage','community','logout','manager'];
    routers =['/member/mypage','/board/boardlist','/member/logout', '/admin/manager'];
  }else if(sess.userid != 0 ){
    menus = ['mypage','community','logout'];
    routers =['/member/mypage','/board/boardlist','/member/logout'];
  }else{
    menus = ['mypage','community','login/join'];
    routers =['/member/mypage','/board/boardlist','/member/login'];
  }

  return(
    <>
      <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description} />
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <link rel="icon" href={icon || "%PUBLIC_URL%/favicon.ico"} />
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=78f0db8ffa3b9e86fcbb2ab02f3dc511&libraries=services,clusterer"></script>
            <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js" integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
            <title>{title}</title>
      </Head>
      <div className='hdrWrap'>
        <Header menu={menus} route={routers} sess={sess}/> 
      </div>
      <div className="cntWrap">{children}</div>
      <div className='frtWrap'>
        <Footer />
      </div>
    </>
  );

}  

export default Layout;