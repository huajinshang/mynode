var express = require('express');   //加载express模块
var path = require('path');         //路径模块
var favicon = require('serve-favicon');     //加载网页logo
var logger = require('morgan');     //在控制台中显示req请求的信息
var cookieParser = require('cookie-parser');  //解析cookie的工具，通过req.cookie可以取到传递过来的cookie
var bodyParser = require('body-parser');  //node.js的中间件，用于处理json，raw，text，url，编码的数据
var ejs = require('ejs'); //引用ejs模板引擎


/*在应用中加载路由模块（接口地址），存放在routes的根目录下*/
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


/*加载模板*/
// view engine setup
//jade模板引擎的代码
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//ejs模板引擎的代码
app.engine('html', ejs.__express);
app.set('view engine', 'html');


/*载入中间件*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*（配置路由）将路由挂载至应用——上面设置的接口地址*/
app.use('/', index);
app.use('/users', users);


/*错误处理*/
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
