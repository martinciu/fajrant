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

  assert.equal(service.get('startsOn').unix(), "1446332400");
});

test('init set current month', function(assert) {
  let service = this.subject();

  assert.equal(service.get('startsOn').unix(), moment().startOf("month").unix());
});

test('it knows end of the month', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get('endsOn').unix(), "1448924399");
});

test('it counts work days total', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get("workDaysTotal"), 21);
});

test('it counts work days done', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get("workDaysDone"), 15);
});

test('it counts work days left', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get("workDaysLeft"), 6);
});
