// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
  },

  events: {
    'enqueue': function(song){
      this.render(song);
    }
  },

  render: function(song) {
    this.$el.children().detach();
    return this.$el.html('<th>SongQueue</th>').append(
       new SongQueueEntryView({model: song}).render());
  }

});
