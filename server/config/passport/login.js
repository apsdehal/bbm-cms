
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var config = require('config');
var User = mongoose.model('User');

/**
 * Expose
 */

module.exports = new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    User.findOne({ 'username' :  username },
      function(err, user) {
        if (err)
          return done(err);

        if (!user){
          console.log('User Not Found with username '+username);
          return done(null, false,
                req.flash('message', 'User Not found.'));
        }

        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false,
              req.flash('message', 'Invalid Password'));
        }

        return done(null, user);
      }
    );
});

var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}
