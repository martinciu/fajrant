/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fajrant',
    environment: environment,
    firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'connect-src': "'self' https://toggl.com https://auth.firebase.com wss://*.firebaseio.com",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self' http://fonts.gstatic.com",
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = { enabled: false };
    ENV.firebase = 'https://fajrant-development.firebaseio.com'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.firebase = 'https://fajrant-test.firebaseio.com'
  }

  if (environment === 'production') {
    ENV.firebase = 'https://fajrant-production.firebaseio.com'
  }

  return ENV;
};
