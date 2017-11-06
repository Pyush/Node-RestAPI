var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 1000, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbc',
    debug: false
});

pool.getConnection(function(err) {
    if (err) throw err;
});

module.exports = pool;