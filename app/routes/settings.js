import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.session.get("settings");
  },

  actions: {
    save(model) {
      this.session.saveApiKey(model.togglApiKey);
      this.transitionTo("toggl-summary");
    }
  }
});
