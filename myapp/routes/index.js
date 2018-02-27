var express = require('express');
var router = express.Router();
var db= require("../config/db");

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query("select * from student",function (err,rows) {
        if(err){
            res.send("fail");
        }else{
            res.render('index',{title:"这是首页",datas:rows});
        }
    })
});

module.exports = router;
