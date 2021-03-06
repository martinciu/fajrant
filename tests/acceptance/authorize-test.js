import { test } from 'qunit';
import moduleForAcceptance from 'fajrant/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authorize');

test("authorize lazybones", function(assert) {
  let apiKey = "lazy-my-api-key";
  server.create("toggl-user", { apiKey: apiKey });
  server.create("toggl-summary", { apiKey: apiKey, total_grand: 54487000});

  visit("/api-key");
  fillIn("input", apiKey);
  click("button[type=submit]");

  andThen(function() {
    assert.equal(currentURL(), "/");
    assert.equal(find("h1").text(), "Nope :(");
    assert.ok(find("#app").hasClass("nope"));
  });
});

test("authorize workoholic", function(assert) {
  let apiKey = "workoholic-my-api-key";
  server.create("toggl-user", { apiKey: apiKey });
  server.create("toggl-summary", { apiKey: apiKey, total_grand: 10*54487000});

  visit("/api-key");
  fillIn("input", apiKey);
  click("button[type=submit]");

  andThen(function() {
    assert.equal(currentURL(), "/");
    assert.equal(find("h1").text(), "Yep!");
    assert.ok(find("#app").hasClass("yep"));
  });
});
