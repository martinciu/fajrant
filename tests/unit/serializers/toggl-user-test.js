import { moduleForModel, test } from 'ember-qunit';

moduleForModel('toggl-user', 'Unit | Serializer | toggl user', {
  // Specify the other units that are required for this test.
  needs: ['serializer:toggl-user']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
