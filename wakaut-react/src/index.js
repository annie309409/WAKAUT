import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./components/header";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,document.getElementById('root')
);


ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,document.querySelector('.hdrWrap')
);


ReactDOM.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>,document.querySelector('.ftrWrap')
);
