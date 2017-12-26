var express = require('express');
var router = express.Router();
var urlMetadata = require('url-metadata');
var sendMail = require('././utils/SendMail');

/* GET users listing. */
router.post('/get', function(req, res, next) {
    var url = req.body.url;
    console.log('url',url);
    urlMetadata(url).then(
        function (metadata) { // success handler
            console.log(metadata)
            res.json({"code" : 200, "message" : "successful", "view":metadata});
        },
        function (error) { // failure handler
            console.log(error)
            res.json({"code" : 100, "status" : "Error in get information from url"});
            return;
        })
});

router.post('/sendMail',sendMail);

module.exports = router;
