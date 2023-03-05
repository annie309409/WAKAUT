const express = require('express');
const router = express.Router();

router.get('/list',async (req,res)=>{ 
    res.render('board/list',{title:'누구든지 즐겨요! WAKAUT'});
});

router.get('/view',async (req,res)=>{ 
    res.render('board/view',{title:'게시글 상세보기페이지'});
});

module.exports =  router;