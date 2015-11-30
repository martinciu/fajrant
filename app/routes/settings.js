import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.session.get("settings");
  },

  actions: {
    save(model) {
      this.get("store").queryRecord("toggl-user", {}).then(
        (user) => {
          model.set("workspaceId", user.get("workspaceId"));
          model.set("userId", user.get("id"));
          this.session.save();
          this.transitionTo("toggl-summary");
        },
        () => {
          this.render("settings_error");
        }
      );
    }
  }
});
