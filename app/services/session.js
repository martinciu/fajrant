import Ember from 'ember';
import ENV from 'fajrant/config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  namespace: `fajrant-${ENV.environment}-session`,
  user: null,

  apiKey: Ember.computed({
    get(key) {
      return localStorage[this.namespace];
    },
    set(key, value) {
      localStorage[this.namespace] = value;
      return value;
    }
  }),

  authorize: function() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(this.get("apiKey")) {
        this.get("store").find("user", this.get("apiKey")).then((user) => {
          this.set("user", user);
          Ember.run(null, resolve, user);
        },
        () => {
          Ember.run(null, reject);
        });
      } else {
        Ember.run(null, reject);
      }
    });
  }

});
