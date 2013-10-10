var ArrowView = Backbone.View.extend({

  tagName: "span",

  initialize: function( params ) {
    this.action = params.type;
    this.symbol = {up: "☝", down: "☟", dequeue: "✄"}[this.action];
    this.model = params.model;
  },

  events: {
    'click': function() {
      this.model[this.action]();
    }
  },

  render: function() {
    this.$el.addClass('icon');
    return this.$el.html(this.symbol);
  }

});