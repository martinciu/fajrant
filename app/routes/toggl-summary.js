import Ember from 'ember';

export default Ember.Route.extend({
  month: Ember.inject.service("month"),

  model: function() {
    let startOfTheMonth = this.get("month.startsOn").format("YYYY-MM-DD");
    return this.store.queryRecord('toggl-summary', { since: startOfTheMonth });
  }
});
