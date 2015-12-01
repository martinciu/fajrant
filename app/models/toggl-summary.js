import DS from 'ember-data';

export default DS.Model.extend({
  total: DS.attr('duration'),

  month: Ember.inject.service("month"),

  time: function() {
    let d = this.get("total")
    return Math.round(d.asHours())+ ":" + d.minutes() + ":" + d.seconds();
  }.property("total"),

  status: function() {
    return this.get("month.workDaysDone") + "/" + this.get("month.workDaysTotal");
  }.property("total", "month"),



});
