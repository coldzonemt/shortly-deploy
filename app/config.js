var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shortly-deploy/app/db');

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error, yo!')); 
db.once('open', function(callback){
  console.log('mongodb connection is open, dawg!');
});

module.exports = db;
