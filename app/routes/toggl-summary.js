import Ember from 'ember';

export default Ember.Route.extend({
  month: Ember.inject.service("month"),

  beforeModel: function() {
    return this.get("session").authorize();
  },

  model: function() {
    let startOfTheMonth = this.get("month.startsOn").format("YYYY-MM-DD");
    return this.store.queryRecord('toggl-summary', { since: startOfTheMonth });
  },

  actions: {
    error: function(error, transition) {
      return this.transitionTo("api-key");
    }
  },
});
