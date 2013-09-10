var http = require('http');
var push = require('./lib/push.js');

http.createServer(function(req, res){
  var message = {title:'HONEY POT SOS', message:'DELETE YOUR SHIT'};
  push.sendMessage(message,function(err,res){
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HONEY POT:\nI know you\'re using my computer. I\'ll get you.\n');
}).listen(8099,'127.0.0.1');
