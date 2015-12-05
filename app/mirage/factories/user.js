/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: 7,
  name: "James Bond",
  email: "007@mi6.gov.uk",
  workspaceId: 7

  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
