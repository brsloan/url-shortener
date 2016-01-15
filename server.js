var path = require('path');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ShortLink = require('./app/models/urls.js');
var urlLib = require('url');


mongoose.connect('mongodb://localhost:27017/clementinejs');

app.get('/new/:newlink',function(req,res){
	var newLink = new ShortLink({ shortcut: Math.floor((Math.random() * 99999) + 1).toString(),
								url: req.params.newlink
	});
	
	newLink.save(function(err,newLink){
		if(err) return console.error(err);
		res.json(newLink.shortcut);
	});
});


app.get('/:idnum',function(req,res){
   ShortLink.findOne({ 'shortcut': req.params.idnum }, { '_id': false })
		.exec(function (err, result) {
			if (err) { throw err; }

			res.json(result.url);
		}); 
});

var port = process.env.PORT || 8080;
app.listen(port);