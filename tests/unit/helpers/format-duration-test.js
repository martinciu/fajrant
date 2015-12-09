import { formatDuration } from '../../../helpers/format-duration';
import { module, test } from 'qunit';
import moment from 'moment';

module('Unit | Helper | format duration');

test('it formats duration', function(assert) {
  let result = formatDuration([moment.duration(659287000)]);

  assert.equal(result, "183h08m");
});

test('it display absolute value', function(assert) {
  let result = formatDuration([moment.duration(-659287000)]);

  assert.equal(result, "183h08m");
});


