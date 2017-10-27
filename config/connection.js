// require dependency
var mysql = require('mysql');

// create the MySQL connection object
var connection = mysql.createConnection({
		port: 3000,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	});

// make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  	console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// export connection for orm.js use
module.exports = connection;