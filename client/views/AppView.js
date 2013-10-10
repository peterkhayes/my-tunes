// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.currentSongHeaderView = new CurrentSongHeaderView({model: this.model.get('currentSong')});
    this.currentSongHeaderView.render();

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongHeaderView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.currentSongHeaderView.$el,
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render()
    ]);
  }

});
