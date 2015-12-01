export function initialize(application) {
  application.inject('adapter', 'session', 'service:session');
  application.inject('route', 'session', 'service:session');
}

export default {
  name: 'session',
  initialize
};
