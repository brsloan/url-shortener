var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./app/routes/index.js');
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port);