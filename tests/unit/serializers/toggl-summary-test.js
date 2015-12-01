import { moduleForModel, test } from 'ember-qunit';
import moment from 'moment';

moduleForModel('toggl-summary', 'Unit | Serializer | toggl summary', {
  // Specify the other units that are required for this test.
  needs: ['serializer:toggl-summary', 'transform:duration']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject({ total: moment.duration(10000) });

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
