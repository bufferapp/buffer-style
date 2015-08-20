var express = require('express'),
http = require('http');
app = express();

app.get('/', function (req, res) {
    res.redirect('/index.html');
});
app.use(express.static(__dirname + '/public'))
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Style Guide at http://%s:%s', host, port);
});
