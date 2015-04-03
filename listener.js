var io = require('socket.io-client');
var play = require('play');
var talker = require('./talker.js')
var socket = io.connect('http://hireart-cha-ching2.herokuapp.com');

socket.on('cash', function() {
  play.sound("./cha-ching.wav")
})

socket.on('speak', function(data) {
	talker.talk(data.text);
} );