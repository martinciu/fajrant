import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").authorize();
  },

  model: function() {
    return this.get("session.settings");
  },

  actions: {
    save(model) {
      this.get("store").queryRecord("toggl-user", {}).then(
        (user) => {
          model.setProperties({
            "workspaceId": user.get("workspaceId"),
            "userId": user.get("id")
          });
          model.save();
          this.transitionTo("toggl-summary");
        },
        () => {
          model.setProperties({
            "workspaceId": null,
            "userId": null
          });
          model.save();
          this.render("settings_error");
        }
      );
    }
  }
});
