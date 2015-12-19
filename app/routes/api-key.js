import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  authenticator: Ember.inject.service(),
  model: function() {
    return Ember.Object.create({ apiKey: this.get("session.apiKey") });
  },

  actions: {
    save(model) {
      let apiKey = model.get("apiKey");
      return this.get("authenticator").authenticate(apiKey).then(
        (togglUser) => {
          return this.store.find("user", apiKey).then(
            (user) => {
              return this.transitionTo("toggl-summary");
            },
            () => {
              let newUser = this.store.createRecord("user", {
                togglApiKey: apiKey,
                workspaceId: togglUser.get("workspaceId"),
                togglId: togglUser.get("id"),
                name: togglUser.get("name"),
                email: togglUser.get("email")
              });
              newUser.save().then(() => {
                return this.transitionTo("toggl-summary");
              });
            }
          );
        },
        () => function() {
          return this.render("api-key_error");
        }
      );
    }
  }
});
