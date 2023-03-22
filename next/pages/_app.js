import '../styles/globals.css';
import '../styles/boot-added.css';
import React from "react";
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import App from "next/app";
import {getSession} from "next-auth/client";
import Loading from '../components/loading';

function MyApp({ Component, pageProps,session }) {
  const router = useRouter();
  const [loading,setLoading] = useState(false);

  pageProps.session = session.user;
  useEffect(()=>{
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  },[router])
  const getLayout =  Component.getLayout ?? ((page)=>page);
  return (
    <React.Fragment>
      {loading && <Loading loading={loading} />}
      { getLayout( <Component {...pageProps} /> )}
    </React.Fragment>
  )
}

MyApp.getInitialProps = async (ctx)=>{
  // next app의 기본 props객체 초기화
  //application단위의 전역변수
  const appProps = await App.getInitialProps(ctx);
  let sess =await getSession(ctx);
  appProps.session = await sess;
  if(!sess) appProps.session = {user:{ name: 'guest', email: 'null', image: null, userid: 0 }};
  return {...appProps};
}
export default MyApp
