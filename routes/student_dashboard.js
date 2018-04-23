/**
 * Created by Hasitha Isuru on 04/04/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var login = require('../routes/login');
var student_name = "";

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Heyy  "+req.query.student_name);
    res.render('student_dashboard', { title: 'dashboard' });
});

module.exports = router;