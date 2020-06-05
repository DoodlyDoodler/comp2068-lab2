'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //console.log(req.query)
    var method = req.query.method;
    var x = req.query.x;
    var y = req.query.y;
    console.log(method + " " + x + " " + y);
    var result = 0;
    if (method == "add") {
        result = x + " + " + y + " = " + (parseInt(x) + parseInt(y));
    }
    else if (method == "subtract") {
        result = x + " - " + y + " = " + (parseInt(x) - parseInt(y));
    }
    else if (method == "multiply") {
        result = x + " * " + y + " = " + (parseInt(x) * parseInt(y));
    }
    else if (method == "divide") {
        result = x + " / " + y + " = " + (parseInt(x) / parseInt(y));
    }
    else {
        result = "Please enter valid format";
    }
    console.log(result);
    res.render('index', { title: 'Express' });
});

module.exports = router;
