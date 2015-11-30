export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'reports/api/v2',
  headers: function() {
    return { "Authorization": "Basic " + this.get('session.settings.togglApiKey') };
  }.property("session.settings.togglApiKey"),

  urlForQueryRecord: function(query, modelName) {
    query["user_agent"] = "fajrant"
    query["workspace_id"] = this.session.get("settings.workspaceId");
    query["user_ids"] = this.session.get("settings.userId");

    return this._super(query, modelName);
  },

  pathForType: function(type) {
    return 'summary';
  }

});
