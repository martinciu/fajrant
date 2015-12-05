import { test } from 'qunit';
import moduleForAcceptance from 'fajrant/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authorize');

test("authorize by valid api-key", function(assert) {
  let apiKey = "my-api-key";
  server.create("user", { apiKey: apiKey });

  visit("/settings");
  fillIn("input", apiKey);
  click("button[type=submit]");

  andThen(function() {
    assert.equal(currentURL(), "/");
    assert.equal(find("h1").text(), "Nope :(");
  });
});
