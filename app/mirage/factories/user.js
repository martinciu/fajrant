import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() { return faker.name.findName(); },
  email() { return faker.internet.email(); },
  workspaceId() { return faker.random.number(); },
  apiKey() { return faker.random.uuid(); }
});
