// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.shift();
      this.playFirst();
    }, this);

    this.on('dequeue', function(song) {
      var removeFirstSong = (song === this.at(0));
      this.remove(song);
      if (removeFirstSong) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    if (this.length) {
      this.at(0).play();
    }
  }
});
