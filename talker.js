function Talker() {
	this.play = require('play');
	this.Speak = require('tts-speak');
}

Talker.prototype.talk = function(text) {
	_this = this

	_this.speak =  new this.Speak({
    tts: {
        engine: 'google',               // The engine to use for tts
        lang: 'en-us',                  // The voice to use
        cache: __dirname + '/cache',    // The cache directory were audio files will be stored
        loglevel: 0,                    // TTS log level (0: trace -> 5: fatal)
        delayAfter: 500                 // Mark a delay (ms) after each message
    },
    speak: {
        engine: 'auto',                 // Auto select the audio player
        volume: 100,                    // Volume in %
        loglevel: 0                     // Audio player log level
    },
    loglevel: 0                         // Wrapper log level
	});


	_this.speak.once('ready', function() {
		_this.speak.say(text);

    _this.speak.on('play', function(res) {
      _this.play.sound(res.file);
    } );
	});
}

module.exports = new Talker();