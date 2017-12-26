var express = require('express');
var router = express.Router();
var urlMetadata = require('url-metadata');
var sendMail = require('././utils/SendMail');
var formidable = require('formidable');
var fs = require('fs');

// https://github.com/felixge/node-formidable

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

router.post('/profile',function (req,res,next) {

    var form = new formidable.IncomingForm();

    form.multiples = true;

    //console.log(req);
    // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.
    form.parse(req, function(err, fields, files) {
        if (err) {
            // Check for and handle any errors here.
            console.error(err.message);
            return;
        }

        files.attachment.forEach(function (element, index, array) {
            fs.readFile(element.path, function (err, data) {
                var newPath = 'C:/Users/Piyush/' + element.name;
                fs.writeFile(newPath, data, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });


        /*var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Piyush' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });*/

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.write('received upload:\n\n');
        //console.log(fields);
        console.log(files);
        // This last line responds to the form submission with a list of the parsed data and files.
        res.json({"code" : 100, "status" : "received", "view": fields});
        res.end();
    });
});

module.exports = router;
