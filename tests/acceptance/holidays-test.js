import { test } from 'qunit';
import moduleForAcceptance from 'fajrant/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | holidays');

test('visiting /holidays', function(assert) {
  let apiKey = "workoholic-my-api-key";
  server.create("user", { apiKey: apiKey });
  server.create("summary", { apiKey: apiKey, total_grand: 10*54487000});

  visit("/holidays");

  andThen(function() {
    assert.equal(currentURL(), '/holidays');
    assert.equal(find("li.holiday").length, 5);
  });
});

test('listing holidays', function(assert) {
  let apiKey = "workoholic-my-api-key";
  server.create("user", { apiKey: apiKey });
  server.create("summary", { apiKey: apiKey, total_grand: 10*54487000});

  visit("/holidays");

  andThen(function() {
    assert.equal(find("ul.holidays li").length, 5);
  });
});
