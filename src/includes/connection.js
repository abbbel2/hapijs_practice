const mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'location'
})

connect.connect(function(err) {
    if (err) throw err;
});


module.exports = connect;