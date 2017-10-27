// require orm from orm.js
var orm = require("../config/orm.js");

// define burger query functions
var burgerQueries = {
  // define show function
  show: function (cb) {
    orm.showBurgers('tableName', function (res) {
      cb(res);
    });
  },
  // define add function
  add: function (burgerName, cb) {
    orm.addBurger(burgerName, function (res){
      cb(res);
    });
  },
  // define eat function
  eat: function (burgerId, cb) {
    orm.eatBurger(burgerId, function (res){
      cb(res);
    })
  }
};

module.exports = burgerQueries;