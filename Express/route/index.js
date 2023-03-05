const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{ 
    res.render('index',{title:'WAKAUT: 건강한 당신을 위한 솔루션!'});
});

module.exports =  router;