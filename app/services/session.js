import Ember from 'ember';

export default Ember.Service.extend({
  settings: false,

  init: function() {
    this._super(...arguments);
    this.load();
  },

  isAuthorized: function() {
    if (this.get("settings.userId")) {
      return true;
    } else {
      return false;
    }
  },

  save: function() {
    localStorage.fajrantSettings = JSON.stringify(this.get("settings"));
  },

  load: function() {
    let settingsAttributes = {};
    if(localStorage.fajrantSettings) {
      settingsAttributes = JSON.parse(localStorage.fajrantSettings);
    }
    let settings = Ember.Object.create(settingsAttributes);
    this.set("settings", settings);
  }
});
