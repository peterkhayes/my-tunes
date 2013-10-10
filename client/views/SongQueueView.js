// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on({'add': this.render, 'remove': this.render, 'up': this.render, 'down': this.render}, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.addClass('songQueue');


    return this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
