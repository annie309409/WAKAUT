import '../styles/globals.css';
import '../styles/boot-added.css';
import React from "react";

function MyApp({ Component, pageProps }) {
  const getLayout =  Component.getLayout ?? ((page)=>page);
  return (
    <React.Fragment>
      { getLayout( <Component {...pageProps} /> )}
    </React.Fragment>
  )
}

MyApp.getInitialProps = async (ctx)=>{
  // next app의 기본 props객체 초기화
  //application단위의 전역변수
  const appProps = await App.getInitialProps(ctx);
  const sess =await getSession(ctx);
  let menu = '<a href="/member/login">로그인</a>';
  if(sess)  menu = '<a href="/member/logout">로그아웃</a>';
  appProps.menu = menu;
  return {...appProps};
}
export default App
