
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');
var utils = require('../../app/utils');

/**
 * Expose
 */

module.exports = new LocalStrategy({
  },
  function(username, password, done) {
    User.findOne({ 'username' :  username },
      function(err, user) {
        if (err)
          return done(err), null;

        if (!user){
          console.log('User Not Found with username ' + username);
          return done(null, false);
        }

        if (!utils.isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false);
        }

        return done(null, user);
      }
    );
});

