export default DS.JSONAPIAdapter.extend({
  host: 'https://toggl.com',
  namespace: 'reports/api/v2',
  headers: {
    'Authorization': 'Basic Y2FiOGFlNTE4MDg1ZjA4YmIwZmE5OTE1ODJhOTU2NjA6YXBpX3Rva2Vu'
  },

  pathForType: function(type) {
    return 'summary';
  }

});
