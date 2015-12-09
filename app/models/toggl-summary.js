import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  total: DS.attr('duration'),

  month: Ember.inject.service("month"),

  hoursScheduled: function() {
    return moment.duration(this.get("month.hoursScheduled")*3600*1000);
  }.property("month.hoursScheduled"),

  hoursWorked: function() {
    return this.get("total");
  }.property("total"),

  hoursDiff: function() {
    return moment.duration((this.get("hoursWorked").asSeconds() - this.get("hoursScheduled").asSeconds())*1000);
  }.property("hoursScheduled", "hoursWorked"),

  onTrack: function() {
    return this.get("hoursDiff") > 0;
  }.property("hoursDiff"),

});
