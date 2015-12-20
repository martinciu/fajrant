import Mirage from 'ember-cli-mirage';

export default function() {

  this.urlPrefix = 'https://toggl.com/';
  this.namespace = 'api';

  this.get('v8/me', function(db, request) {
    let apiKey = request.requestHeaders["Authorization"].split(" ")[1];
    let user = db['toggl-users'].where({ apiKey: apiKey })[0];
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
    let user = db['toggl-users'].where({ apiKey: apiKey })[0];
    if(!user) {
      return new Mirage.Response(403, {}, {});
    }
    return db['toggl-summaries'].where({ apiKey: apiKey})[0];
  });

  this.urlPrefix = 'http://fajrant-api.test/';
  this.namespace = '';

  this.get('users/:id', function(db, request) {
    let id = request.params.id;
    let users = db.users.where({ toggl_api_key: id });
    if(users.length === 0) {
      return new Mirage.Response(404, {}, {});
    } else {
      let user = users[0];
      return {
        user: {
          id: user.id,
          toggl_api_key: user.togglApiKey,
          toggl_user_id: user.togglUserId,
          workspace_id: user.workspaceId,
          name: user.name,
          email: user.email
        }
      };
    }
  });

  this.post('users', function(db, request) {
    let attributes = JSON.parse(request.requestBody).user;
    let user = db.users.insert(attributes);
    return {
      user: {
        id: user.id,
        toggl_user_id: user.togglUserId,
        workspace_id: user.workspaceId,
        name: user.name,
        email: user.email
      }
    };
  });

}
