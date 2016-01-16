'use strict';

var path = process.cwd();
var ShortLinkHandler = require(path + '/app/controllers/shortlinkHandler.server.js');

module.exports = function (app) {
    
    var shortLinkHandler = new ShortLinkHandler();
    
    app.get('/new/http://:newlink', shortLinkHandler.addNewLink);
    app.get('/new/https://:newlink', shortLinkHandler.addNewLink);

    app.get('/new/:badinput',function(req,res){
    	res.json({error: 'Submitted url must be of format http://www.example.com'});
    });


    app.get('/:idnum',shortLinkHandler.getLink);
};