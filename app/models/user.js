import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr("string"),
  workspaceId: DS.attr("string"),
  apiKey: DS.attr("string")
});
