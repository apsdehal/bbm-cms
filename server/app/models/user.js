
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  name: { type: String, default: ''},
  username: { type: String, default: ''},
  email: { type: String, default: '' },
  password: { type: String, default: ''},
  firstName: { type: String, default: ''},
  lastName: { type: String, default: '' },
  isSuperUser: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false }
});


/**
 * Register
 */

mongoose.model('User', UserSchema);
