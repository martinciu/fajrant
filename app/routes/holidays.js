import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model: function() {
    return this.get("session.user.holidays");
    // return [
    //   { date: "1 dzien" },
    //   { date: "2 dzien" },
    //   { date: "3 dzien" },
    //   { date: "4 dzien" },
    //   { date: "5 dzien" }
    // ];
  }
});
