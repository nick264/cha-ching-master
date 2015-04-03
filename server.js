var io = require('socket.io');
var express = require('express');

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server)
  , port = process.env.PORT || 5000;

server.listen(port);

console.log('http server listening on %d', port);

app.use(express.bodyParser());

app.post('/stripe', function(req, res) {
  if (req.body.type === 'charge.succeeded') {
    io.sockets.emit('cash');
  }
  res.send('OK')
});

io.sockets.on('connection', function (socket) {
  console.log('new socket client connected')
});