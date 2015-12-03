import Ember from 'ember';

export default Ember.Controller.extend({
  statusClass: function() {
    if(this.get("model.onTrack")) {
      return "yep";
    } else {
      return "nope";
    }
  }.property("model.onTrack"),
});
