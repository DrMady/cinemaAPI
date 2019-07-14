const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    port = process.env.PORT || 3003;


const mysql = require('mysql');
// connection configurations
const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dubbie',
    database: 'cinema'
});
config.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/appRoutes');
routes(app);