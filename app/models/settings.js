import DS from 'ember-data';

export default DS.Model.extend({
  togglApiKey: DS.attr("string"),
  userId: DS.attr("string"),
  workspaceId: DS.attr("string")
});
