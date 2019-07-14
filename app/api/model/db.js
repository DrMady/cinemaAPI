'use strict';
let mysql = require('mysql');

//local mysql db connection
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dubbie',
    database : 'cinema'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;