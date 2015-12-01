import Ember from 'ember';
import Settings from '../models/settings';

export default Ember.Service.extend({
  settings: Settings.create(),

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
    if(localStorage.fajrantSettings) {
      let settingsAttributes = JSON.parse(localStorage.fajrantSettings);
      this.get("settings").setProperties(settingsAttributes);
    }
  }
});
