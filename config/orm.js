// require connection from connection.js
var connection = require("../config/connection.js");

// connect to db
// connection.connect(function(err) {
//   if(err) {
//     console.log("Error", err.stack);
//   }
//   console.log("Connected as id: %s", connection.threadId)
// });

// create the orm object to perform SQL queries
var orm = {
  // define add burgers function
  addBurger: function(burger, cb) {
    var burgerName = burger;
    var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
    connection.query(mySQLQuery, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // define eat burgers function
  eatBurger: function(burgerId, cb) {
    var id = burgerId;
    connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // define display burgers function
  showBurgers: function(tableName, cb) {
    connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      cb(result);
  });
 }
};

module.exports = orm;