import Mirage from 'ember-cli-mirage';

export default function() {

  this.urlPrefix = 'https://toggl.com/';
  this.namespace = 'api';

  this.get('v8/me', function(db, request) {
    let apiKey = request.requestHeaders["Authorization"].split(" ")[1];
    let user = db.users.where({ apiKey: apiKey })[0];
    if(!user) {
      return new Mirage.Response(403, {}, {});
    }
    return {
      data: {
        id: user.id,
        email: user.email,
        default_wid: user.workspaceId
      }
    };
  });

  this.namespace = 'reports/api';

  this.get('v2/summary', function(db, request) {
    let apiKey = request.requestHeaders["Authorization"].split(" ")[1];
    let user = db.users.where({ apiKey: apiKey })[0];
    if(!user) {
      return new Mirage.Response(403, {}, {});
    }
    return db.summaries.where({ apiKey: apiKey})[0];
  });
}
