var mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/shortly-deploy/app/db');
mongoose.connect('mongodb://MiniDB:YbuOODOfJjRyi6o8F1buuDC8GxQHAga0EyGg6lzG9Vg-@ds042898.mongolab.com:42898/MiniDB');

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error, yo!')); 
db.once('open', function(callback){
  console.log('mongodb connection is open, dawg!');
});

module.exports = db;
