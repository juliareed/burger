// require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

var PORT = process.env.PORT || 3000; 

// serve static content for the app from the 'public' directory
app.use(bodyParser.urlencoded({
  extended: false
}))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// require handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// require routes
var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on %s", PORT);
});
