var express = require('express');
var router = express.Router();
var db = require("../config/db");

/* GET users listing. */
//新增数据
router.get('/add', function (req, res, next) {
    res.render('add');
});
router.post('/add', function (req, res, next) {
    var name = req.body.name;
    var age = req.body.age;
    var sql = "insert into student(name,age) values ('" + name + "','" + age + "')";
    db.query(sql, function (err, rows) {
        if (err) {
            res.send("新增失败"+err);
        } else {
            res.redirect("/");
        }
    })
});
//删除数据
router.get('/delete/:id',function (req,res,next) {
    var id=req.params.id;
    var sql="delete from student where id="+id;
    db.query(sql,function (err,rows) {
        if(err){
            res.send("删除失败"+err);
        }else{
            res.redirect("/");
        }
    })
});
//修改数据
router.get('/toUpdate/:id',function (req,res,next) {
    var id=req.params.id;
    var sql="select * from student where id="+id;
    db.query(sql,function (err,rows) {
        if(err){
            res.send("数据错误"+err);
        }else{
            res.render("updata",{datas:rows});
        }
    })
});
router.post('/toUpdate/:id',function (req,res,next) {
    var id=req.params.id;
    var name=req.body.name;
    var age=req.body.age;
    var sql= "update student set name = '"+ name +"',age = '"+ age +"' where id = " + id;
    db.query(sql,function (err,rows) {
        if(err){
            res.send("修改失败"+err);
        }else{
            res.redirect("/");
        }
    })
});

module.exports = router;
