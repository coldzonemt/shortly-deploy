var app = require('./server-config.js');

var port = process.env.PORT || 4568; //process.env.PORT;

app.listen(port);

console.log('Server now listening on port ' + port);
