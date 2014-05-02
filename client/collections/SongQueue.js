// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
// this is more of a model then a collection
// this model will provide the queue the events to be listened
// the song queue will broadcast when a song is clicked on the queue model
  initialize: function() {
  	this.on('add', function(){}, this);

  	this.on('remove', function(){}, this);
  	
  	this.on('dequeue', function(){}, this);
  	
  	this.on('ended', function(){}, this);
  },

  enqueue: function() {
  		this.trigger('enqueue', this);
  },
  
  dequeue: function() {
  		this.trigger('dequeue', this);
  }
  
});
