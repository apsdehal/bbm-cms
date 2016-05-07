var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');
var bCrypt = require('bcrypt-nodejs');
var utils = require('../../app/utils');

module.exports = new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      User.findOne({'username': username}, function (err, user) {
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        if (user) {
          console.log('User already exists');
          return done(null, false,
             req.flash('message','User Already Exists'));
        } else {
          var newUser = new User();
          newUser.username = req.body.username
          newUser.password = utils.createHash(password);
          newUser.email = req.body.email;
          newUser.firstName = req.body.firstName;
          newUser.lastName = req.body.lastName;

          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);
              return done(err, null);
            }
            console.log('User Registration succesful');
            return done(null, newUser);
          });
        }
      });
    };

    process.nextTick(findOrCreateUser);
  }
);
