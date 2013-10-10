// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist"><%= artist %></td><td class="title"><%= title %></td><td>(<%= playCount %>)</td>'),

  initialize: function() {
    this.model.on('play', function() { this.render(); }, this);
  },

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    this.$el.addClass('libraryEntry');
    return this.$el.html(this.template(this.model.attributes));
  }

});
