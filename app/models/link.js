var mongoose = require('mongoose');
var crypto = require('crypto');

var linkSchema = mongoose.Schema({
  url: String,
  link: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: { type: Date, default: Date.now }
});

var Link = mongoose.model('Link', linkSchema);

var hashUrl = function(url){
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

linkSchema.pre('save', function(next) {
  var code = hashUrl(this.url);
  this.code = code;
  next();
});

module.exports = Link;
