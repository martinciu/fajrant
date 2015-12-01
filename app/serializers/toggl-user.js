import DS from 'ember-data';
import uuid from "ember-uuid/utils/uuid-generator";

export default DS.JSONSerializer.extend({

  extractAttributes: function(modelClass, payload) {
    return {
      workspaceId: payload["data"]["default_wid"],
      name: payload["data"]["fullname"],
      email: payload["data"]["email"]
    };
  },

  extractId: function(modelClass, payload) {
    return payload["data"]["id"];
  }
});
