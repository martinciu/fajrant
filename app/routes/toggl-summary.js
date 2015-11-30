import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let queryParams = { user_agent: 'martinciu', workspace_id: 412497, since: '2015-11-01', user_ids: 1799179 };
    return this.store.queryRecord('toggl-summary', queryParams);
  },

  actions: {
    error: function(reason) {
      this.transitionTo("settings");
    }
  }
});
