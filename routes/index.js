var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// https://babeljs.io/docs/setup#installation
// https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling#babelfilewatcher
// install babel
// npm install --save-dev babel-cli
// File | Settings | Tools | File Watchers
// In Preferences - Tools - File watchers, click + button and select Babel file watcher from the list.
// Lastly, in Languages & Frameworks - JavaScript - JavaScript language version, choose ECMAScript 6.
