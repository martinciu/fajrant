import { moduleFor, test } from 'ember-qunit';
import moment from 'moment';

moduleFor('service:month', 'Unit | Service | month', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('init set month set', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get('startsOn').format(), "2015-11-01T00:00:00+01:00");
});

test('init set current month', function(assert) {
  let service = this.subject();

  assert.equal(service.get('startsOn').format(), moment().startOf("month").format());
});

test('it knows end of the month', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get('endsOn').format(), "2015-11-30T23:59:59+01:00");
});

// test('j  ')
