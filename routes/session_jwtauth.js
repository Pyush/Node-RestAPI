var express = require('express'),
    session = require('express-session');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('././utils/config'); // get our config file

var router = express.Router();

// https://github.com/adnanrahic/securing-restful-apis-with-jwt
// https://devdactic.com/restful-api-user-authentication-1/