var express = require('express');
var router = express.Router();
var db = require("../config/db");

/* GET users listing. */
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
    // res.send("sssss")
});

module.exports = router;
