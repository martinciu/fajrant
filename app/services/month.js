import Ember from 'ember';
import moment from 'moment';

export default Ember.Service.extend({
  currentDate: false,

  init: function() {
    if (!this.get("currentDate")) {
      this.set("currentDate", moment());
    }
  },

  startsOn: function() {
    return moment(this.get("currentDate")).startOf("month");
  }.property("currentDate"),

  endsOn: function() {
    return moment(this.get("startsOn")).endOf("month");
  }.property("startsOn"),

  workDaysDone: function() {
    return this.countWorkDays(this.get("startsOn"), this.get("currentDate"));
  }.property("startsOn"),

  workDaysLeft: function() {
    return this.get("workDaysTotal") - this.get("workDaysDone");
  }.property("workDaysDone", "workDaysTotal"),

  workDaysTotal: function() {
    return this.countWorkDays(this.get("startsOn"), this.get("endsOn"));
  }.property("startsOn", "endsOn"),

  countWorkDays: function(from, to) {
    let day = moment(from);
    let lastDay = moment(to);
    let workDays = 0;
    while(!day.isAfter(lastDay)) {
      if (day.isoWeekday() <= 5) {
        workDays += 1;
      }
      day.add(1, 'day');
    }
    return workDays;
  },

});
