// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist"><%= artist %></td><td class="title"><%= title %></td>'),

  render: function(){
    this.$el.children().detach();
    this.$el.addClass('songQueueEntry');
    return this.$el.html(this.template(this.model.attributes)).append([
      new ArrowView({model: this.model, type: "up"}).render(),
      new ArrowView({model: this.model, type: "down"}).render(),
      new ArrowView({model: this.model, type: "dequeue"}).render()
      ]);
  }
});
