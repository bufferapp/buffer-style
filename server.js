var express = require('express');
var http = require('http');
var app = express();

var port = 3000;

// app.get('/', function (req, res) {
//   res.redirect('/index.html');
// });

app.use(express.static(__dirname + '/public'));

var server = app.listen(port, function () {
  console.log('Style Guide at http://localhost:%s', port);
});
