import { test } from 'qunit';
import moduleForAcceptance from 'fajrant/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authorize');

test('visiting /authorize', function(assert) {
  server.create('user');
  visit('/settings');
  fillIn("input", 'my-api-key');
  click("button[type=submit]");

  andThen(function() {
    assert.equal(find("h1").text(), "Nope :(");
  });
});
