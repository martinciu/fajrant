import Ember from 'ember';
import moment from 'moment';

export default Ember.Service.extend({
  startsOn: false,

  init: function() {
    // this.set("startsOn", moment().startOf("month"));
    this.set("startsOn", moment("2015-11-01"));
  },

  workDaysDone: function() {
    return Math.floor(moment.duration(moment().format("x") - this.get("startsOn").format("x")).asDays());
  }.property("startsOn"),

  workDaysLeft: function() {
    return this.get("workDaysTotal") - this.get("workDaysDone");
  }.property("workDaysDone", "workDaysTotal"),

  workDaysTotal: function() {
    let seconds = parseInt(this.get("endsOn").format("x")) - parseInt(this.get("startsOn").format("x"));
    return Math.ceil(moment.duration(seconds).asDays());
  }.property("startsOn", "endsOn"),

  endsOn: function() {
    return moment(this.get("startsOn")).endOf("month")
  }.property("startsOn")

});
