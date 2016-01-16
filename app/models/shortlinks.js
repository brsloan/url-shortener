var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShortLink = new Schema({
    shortcut: String,
    url: String
});

module.exports = mongoose.model('ShortLink', ShortLink);