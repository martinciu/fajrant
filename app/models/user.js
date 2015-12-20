import DS from 'ember-data';

export default DS.Model.extend({
  togglId: DS.attr("number"),
  workspaceId: DS.attr("number"),
  togglApiKey: DS.attr("string"),
  name: DS.attr("string"),
  email: DS.attr("string"),
  holidays: DS.hasMany("holiday")
});
