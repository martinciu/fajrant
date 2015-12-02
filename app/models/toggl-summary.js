import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  total: DS.attr('duration'),

  month: Ember.inject.service("month"),

  status: function() {
    return this.get("month.workDaysDone") + "/" + this.get("month.workDaysTotal");
  }.property("total", "month")

});
