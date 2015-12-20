import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr("string"),
  user: DS.belongsTo("user")
});