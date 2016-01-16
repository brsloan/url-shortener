'use strict';

var ShortLink = require('../models/shortlinks.js');
var path = process.cwd();

function ShortLinkHandler () {
    
    this.addNewLink = function (req,res){
    	var newLink = new ShortLink({ shortcut: Math.floor((Math.random() * 99999) + 1).toString(),
    								url: 'http://' + req.params.newlink
    	});
    	
    	newLink.save(function(err,newLink){
    		if(err) return console.error(err);
    		res.json({ old_url: newLink.url,
    		    new_url: req.protocol + '://' + req.hostname + '/' + newLink.shortcut
    		});
    	});	
    };
    
    this.getLink = function (req,res){
       ShortLink.findOne({ 'shortcut': req.params.idnum }, { '_id': false })
    		.exec(function (err, result) {
    			if (err) { throw err; }
    			if(result)
    				res.redirect(result.url);
    			else
    				res.json({error: 'Url ' + req.params.idnum + ' does not exist.'});
    		}); 
    };

}

module.exports = ShortLinkHandler;