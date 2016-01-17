var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./app/routes/index.js');
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI || 'mongodb://heroku_vhvttgwn:b3slpi3oal2gjc451sdo0udhmq@ds047325.mongolab.com:47325/heroku_vhvttgwn');

routes(app);

var port = process.env.PORT || 8080;
app.listen(port);