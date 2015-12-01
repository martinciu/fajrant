import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").authorize();
  },

  model: function() {
    return this.store.queryRecord('toggl-summary', { since: "2015-11-01" });
  }
});
