// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
// song queue view will listen to the events.

  tagName: "table",

  initialize: function() {
    this.collection.on('all', function(){
      //console.log("inside SongQueueView");
      this.render();
    }, this);
  },


//what is the thing to be rendered
  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append( //loop over the song collection
       this.collection.map(function(song) {
         return new SongQueueEntryView({model: song}).render();        
       })
    );
  }

});
