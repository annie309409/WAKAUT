import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./pages/header";
import Footer from "./pages/footer";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header menu={['mypage','community','login/signin', 'join','manager']} route={['/mypage','/boardlist','/login', 'join','/manager']}/>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,document.getElementById('root')
);

