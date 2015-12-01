import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'api/v8',
  headers: function() {
    return { "Authorization": "Basic " + this.get('session.settings.togglApiKey') };
  }.property("session.settings.togglApiKey"),

  pathForType: function(type) {
    return 'me';
  }

});
