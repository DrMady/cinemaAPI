let moment = require('moment/moment');


let mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

module.exports = mysqlTimestamp;