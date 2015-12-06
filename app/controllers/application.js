import Ember from 'ember';

export default Ember.Controller.extend({
  summary: Ember.inject.controller("toggl-summary"),
  statusClass: Ember.computed.reads("summary.statusClass")
});
