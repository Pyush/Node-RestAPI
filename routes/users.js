var express = require('express');
var dbConnection=require('./DBConnection/MySQLConnection');
var utils=require('./utils/ValidationUtils');
var router = express.Router();

EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

/* GET users listing. */
router.get('/login', function(req, res, next) {
   console.log(req.query);
    console.log(req.body);
    console.log(req.multipart);
   console.log('======================');
   console.log(('test@gmail.com'.match(EMAIL_PATTERN)));
    dbConnection.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json({"code" : 200, "message" : "successful", "list":rows});
            }
        });
    });
});

router.get('/save', function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.multipart);
    console.log('======================');
    console.log(('test@gmail.com'.match(EMAIL_PATTERN)));
    dbConnection.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json({"code" : 200, "message" : "successful", "list":rows});
            }
        });
    });
});

router.get('/get', function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.multipart);
    console.log('======================');
    console.log(('test@gmail.com'.match(EMAIL_PATTERN)));
    dbConnection.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json({"code" : 200, "message" : "successful", "list":rows});
            }
        });
    });
});

router.get('/all', function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.multipart);
    console.log('======================');
    console.log(('test@gmail.com'.match(EMAIL_PATTERN)));
    dbConnection.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json({"code" : 200, "message" : "successful", "list":rows});
            }
        });
    });
});

module.exports = router;
