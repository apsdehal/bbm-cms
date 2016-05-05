
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var utils = require('../app/utils');
var path = require('path');

/**
 * Expose
 */

module.exports = function (app, passport) {
  app.get('/', function (req, res) {
    res.sendFile('index.html');
  });

  app.post('/user/login', function (req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).send('User not found');
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.status(200).json(utils.getVisibleUser(user));
      });
    })(req, res, next);
  });

  app.post('/user/signup',
    passport.authenticate('signup'),
    function (req, res) {
      return res.json(utils.getVisibleUser(req.user));
    }
  );

  app.get('/user/logout', function(req, res) {
    req.logout();
    res.json({'message': 'Logged out successfully'});
  });

  app.get('/user/loggedin', function (req, res) {
    if (req.isAuthenticated()) {
      return res.status(200).json(utils.getVisibleUser(req.user));
    } else {
      return res.status(401).json({message: 'User not logged in'});
    }
  })

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500);
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404);
  });
};
