import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  total_grand() { return faker.random.number(); },
  apiKey() { return faker.random.uuid(); }
});
