//加载MySQL模块
var mysql      = require('mysql');
//创建链接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'node'
});
// //执行创建链接
connection.connect();

function query(sql, callback) {
    connection.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}

// exports.query = query;

// connection.query('SELECT * from student', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows);
// });
//
// connection.end();