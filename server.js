var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./app/routes/index.js');

mongoose.connect('mongodb://localhost:27017/clementinejs');

routes(app);

var port = process.env.PORT || 8080;
app.listen(port);