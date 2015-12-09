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

test('init set month from date', function(assert) {
  let currentDate = moment('2015-11-20');
  let service = this.subject({ currentDate: currentDate });

  assert.ok(service.get('startsOn').isSame(currentDate.startOf("month")));
});

test('init set current month', function(assert) {
  let service = this.subject();

  assert.ok(service.get('startsOn').isSame(moment().startOf("month")));
});

test('it knows end of the month', function(assert) {
  let currentDate = moment('2015-11-20');
  let service = this.subject({ currentDate: currentDate });

  assert.ok(service.get('endsOn').isSame(currentDate.endOf("month")));
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

test('it counts hoursScheduled', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get("hoursScheduled"), 120);
});

test('it counts hoursTotal', function(assert) {
  let service = this.subject({ currentDate: moment('2015-11-20') });

  assert.equal(service.get("hoursTotal"), 168);
});
