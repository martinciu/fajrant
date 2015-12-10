import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractId: function(modelClass, payload) {
    return "main";
  }
});
