// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var CurrentSongHeaderView = Backbone.View.extend({

  setSong: function(song){
    this.model = song;
    this.render();
  },

  tagName: 'h3',

  template: _.template('<%= artist %> - <%= title %>'),

  render: function(){
    this.$el.addClass('currentSongHeader');
    if (this.model.get('title')) {
      return this.$el.html(this.template(this.model.attributes));
    } else {
      return this.$el.html("Pick a song, any song");
    }
  }
});
