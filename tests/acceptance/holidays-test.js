import { test } from 'qunit';
import moduleForAcceptance from 'fajrant/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | holidays', {
  beforeEach: function() {
    window.localStorage.removeItem('fajrant-test-session');
  }
});

test('visiting /holidays not authorized', function(assert) {
  visit("/holidays");

  andThen(function() {
    assert.equal(currentURL(), '/api-key');
  });
});

test('visiting /holidays authorized', function(assert) {
  let apiKey = "workoholic-my-api-key";
  window.localStorage["fajrant-test-session"] = apiKey;
  server.create("user", { toggl_api_key: apiKey });

  visit("/holidays");

  andThen(function() {
    assert.equal(currentURL(), '/holidays');
  });
});
