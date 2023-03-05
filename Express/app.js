// Express관련
const express =  require('express');
const app = express();
const path  = require('path');
const logger = require('morgan');
const bodyParser =  require('body-parser');
const port =  process.env.PORT || 3010;
const session = require('express-session');

// Handle Bars 관련
const {engine} = require('express-handlebars');
const helpers = require('./controllor/helpers');
app.engine('hbs',engine({
    extname: '.hbs',
    defaultLayout : 'layout',
    helpers: helpers,
    },
));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

// 라우터 불러오기
const indexRouter = require('./route/index');
const infoRouter = require('./route/info');
const boardRouter = require('./route/board');

// DB Connection 
const oracledb  = require('./models/Oracle');
oracledb.initConn();


// 세션 설정
const maxAge = 1000 * 30;
const sessionObj = {
    resave: false, saveUninitialized: false,
    secret: 'process.env.COOKIE_SECRET',
    cookie: { httpOnly: true, secure: false, },
    name: 'session-cookie',
    maxAge: maxAge
};
app.use(session(sessionObj));

app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});


//기본 고정 라우팅 설정
app.use(express.static(path.join(__dirname,'static')));


//페이지 라우터 설정
app.use('/',indexRouter);
app.use('/board',boardRouter);
app.use('/info',infoRouter);



//페이지 찾을 수 없음 처리
app.use((req,res)=>{
    res.status(404);
    res.send('404-페이지가 없습니다.');
});


// 페이지 오류 처리
app.use((error,req,res)=>{
    console.error(error);
    res.status(500);
    res.send('500-에러입니다');
});


//서버구동
app.listen(port,()=>{
    console.log('서버가 실행됐습니다. 종료 하려면 ctrl+c');
});


// 각 구동에 따른 로그발생
app.use(logger('div'));