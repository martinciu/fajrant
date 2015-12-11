import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'reports/api/v2',
  headers: function() {
    return { "Authorization": "Basic " + this.get('session.apiKey') };
  }.property("session.apiKey"),

  urlForQueryRecord: function(query, modelName) {
    query["user_agent"] = "fajrant";
    query["workspace_id"] = this.get("session.user.workspaceId");
    query["user_ids"] = this.get("session.user.userId");

    return this._super(query, modelName);
  },

  pathForType: function(type) {
    return 'summary';
  }

});
