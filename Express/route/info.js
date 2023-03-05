const express = require('express');
const router = express.Router();

router.get('/login',async (req,res)=>{ 
    res.render('info/login',{title:'함께해요, WAKAUT!'});
});

module.exports =  router;