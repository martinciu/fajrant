import Ember from 'ember';

export default Ember.Service.extend({
  settings: false,

  init: function() {
    this._super(...arguments);
    this.load();
  },

  isAuthorized: function() {
    if (this.get("settings.togglApiKey")) {
      return true;
    } else {
      return false;
    }
  },

  saveApiKey: function(apiKey) {
    this.settings.set("togglApiKey", apiKey);
    this.save();
  },

  load: function() {
    let settingsAttributes = {};
    if(localStorage.fajrantSettings) {
      settingsAttributes = JSON.parse(localStorage.fajrantSettings);
    }
    let settings = Ember.Object.create(settingsAttributes);
    this.set("settings", settings);
  },

  save: function() {
    localStorage.fajrantSettings = JSON.stringify(this.get("settings"));
  }
});
