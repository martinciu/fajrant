export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'reports/api/v2',
  headers: {
    'Authorization': 'Basic ***REMOVED***'
  },

  pathForType: function(type) {
    return 'summary';
  }

});
