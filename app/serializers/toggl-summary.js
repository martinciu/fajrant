import DS from 'ember-data';


export default DS.JSONSerializer.extend({
  attrs: {
    totalGrand: 'total_grand'
  },

  extractId: function(modelClass, payload) {
    return modelClass + payload + (new Date()).getTime();
  }
});
