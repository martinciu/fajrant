import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'fajrant/config/environment';

export default DS.Adapter.extend({
  namespace: `fajrant-${ENV.environment}-user`,

  queryRecord: function(store, type, query) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (localStorage[this.namespace]) {
        let data = JSON.parse(localStorage[this.namespace]);
        return Ember.run(null, resolve, data);
      } else {
        return Ember.run(null, reject);
      }
    });
  },

  findRecord: function(store, type, id, snapshot) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let data = {};
      if (localStorage[this.namespace]) {
        data = JSON.parse(localStorage[this.namespace]);
      }
      Ember.run(null, resolve, data);
    });
  },

  updateRecord: function(store, type, snapshot) {
    let data = this.serialize(snapshot);
    return new Ember.RSVP.Promise((resolve, reject) => {
      localStorage[this.namespace] = JSON.stringify(data);
      Ember.run(null, resolve, data);
    });
  },

  createRecord: function(store, type, snapshot) {
    let data = this.serialize(snapshot);
    return new Ember.RSVP.Promise((resolve, reject) => {
      localStorage[this.namespace] = JSON.stringify(data);
      Ember.run(null, resolve, data);
    });
  }
});