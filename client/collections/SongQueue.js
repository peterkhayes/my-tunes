// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.queue = [];
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song) {
      this.shift();
      this.playFirst();
    }, this);
  },

  playFirst: function(){
    var toPlay = this.at(0);
    if (toPlay) {
      toPlay.play();
    }
  }
});
