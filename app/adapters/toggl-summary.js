export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'reports/api/v2',
  headers: function() {
    if(this.session.isAuthorized()) {
      return { "Authorization": "Basic " + this.get('session.settings.togglApiKey') };
    }
  }.property("session.settings.togglApiKey"),

  pathForType: function(type) {
    return 'summary';
  }

});
