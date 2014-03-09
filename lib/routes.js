'use strict';

var index = require('./controllers'),
  user = require('./controllers/user');

var middleware = require('./middleware');

module.exports = function(app) {

  //Server
  //app.get('/api/games', games.show)


  //Angular
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);

};
