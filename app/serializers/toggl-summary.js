import DS from 'ember-data';
import uuid from "ember-uuid/utils/uuid-generator";

export default DS.JSONSerializer.extend({
  attrs: {
    total: 'total_grand'
  },

  extractId: function(modelClass, payload) {
    return uuid.v1();
  }
});
