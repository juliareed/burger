// require dependencies
var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');


// get burger data and render in index
router.get('/', function (req, res) {
    queries.show(function(data){
        var data1 = {
            burgerData: data
        }
        res.render('index', data1);
    });
});

// post burger data once created by user
router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

// post burger data once 'eaten' by user
router.post('/update', function(req, res){
  queries.eat(req.body.id, function(result){
    res.redirect('/');
  });
});

// export router
module.exports = router;