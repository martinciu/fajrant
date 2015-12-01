import DS from 'ember-data';

export default DS.Model.extend({
  seconds: DS.attr('number'),

  hours: function() {
    return Math.floor(this.get("minutes")/60);
  }.property("seconds"),

  minutes: function() {
    return Math.floor(this.get("seconds")/60/1000);
  }.property("seconds"),

  time: function() {
    return this.get("hours") + ":" + (this.get("minutes") - this.get("hours")*60);
  }.property("seconds")

});
