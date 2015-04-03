var io = require('socket.io-client');
var play = require('play');

var socket = io.connect('http://hireart-cha-ching.herokuapp.com');

socket.on('cash', function() {
  play.sound("./cha-ching.wav")
})