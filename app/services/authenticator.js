import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  authenticate: function(apiKey) {
    this.set("session.apiKey", apiKey);
    return new Ember.RSVP.Promise((resolve, reject) => {
      let togglUser = this.get("store").queryRecord("togglUser", {});
      if(togglUser) {
        resolve(togglUser);
      } else {
        this.session.set("session.apiKey", null);
        reject();
      }
    });
  }
});
