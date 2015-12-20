import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel: function() {
    return this.get("session").authorize();
  },

  model: function() {
    return this.get("session.user.holidays");
  },

  actions: {
    error: function(error, transition) {
      return this.transitionTo("api-key");
    }
  },

});
