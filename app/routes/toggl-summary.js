import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.queryRecord('toggl-summary', { user_agent: 'martinciu', workspace_id: 412497, since: '2015-11-01', user_ids: 1799179 });
  }
});
