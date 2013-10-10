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

    this.on('up', function(song) {
      this.moveUp(song);
    }, this);

    this.on('down', function(song) {
      this.moveDown(song);
    }, this);
  },

  playFirst: function(){
    if (this.length) {
      this.at(0).play();
    }
  },

  moveUp: function(model) { // I see move up as the -1
    var index = this.indexOf(model);
    if (index > 0) {
      this.remove(model, {silent: true}); // silence this to stop excess event triggers
      this.add(model, {at: index-1});
    }
    if (index === 1) {
      this.playFirst();
    }
  },

  moveDown: function(model) { // I see move up as the -1
    var index = this.indexOf(model);
    if (index < this.models.length) {
      this.remove(model, {silent: true}); // silence this to stop excess event triggers
      this.add(model, {at: index+1});
    }
    if (index === 0) {
      this.playFirst();
    }
  }
});
