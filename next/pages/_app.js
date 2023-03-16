import '../styles/globals.css';
import '../styles/boot-added.css';
import React from "react";

function App({ Component, pageProps }) {
  const getLayout =  Component.getLayout ?? ((page)=>page);
  return (
    <React.Fragment>
      { getLayout( <Component {...pageProps} /> )}
    </React.Fragment>
  )
}
export default App
