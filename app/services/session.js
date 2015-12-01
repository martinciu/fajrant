import Ember from 'ember';
// import Settings from '../models/settings';

export default Ember.Service.extend({
  store: Ember.inject.service("store"),
  settings: null,

  authorize: function() {
    return this.set("settings", this.get("store").find("settings", "main"));
  }

});
