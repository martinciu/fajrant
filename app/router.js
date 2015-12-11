import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toggl-summary', { path: "/"});
  this.route('api-key');
});

export default Router;
