// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.queue = [];
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    var toPlay = this.at(1);
    if (toPlay) {
      toPlay.play();
    }
  }
});
