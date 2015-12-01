import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  findRecord: function(store, type, id, snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let data = {};
      if (localStorage.fajrantSettings) {
        data = JSON.parse(localStorage.fajrantSettings);
      }
      Ember.run(null, resolve, data);
    });
  },

  updateRecord: function(store, type, snapshot) {
    let data = this.serialize(snapshot);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      localStorage.fajrantSettings = JSON.stringify(data);
      Ember.run(null, resolve, data);
    });
  },

  createRecord: function(store, type, snapshot) {
    let data = this.serialize(snapshot);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      localStorage.fajrantSettings = JSON.stringify(data);
      Ember.run(null, resolve, data);
    });
  }

});
