var bCrypt = require('bcrypt-nodejs');

module.exports = {
  createHash: function(password){
   return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  },

  isValidPassword: function(user, password){
    return bCrypt.compareSync(password, user.password);
  },

  getVisibleUser: function(user) {
    var keys = ['username', 'firstName', 'lastName', 'email'];
    var newUser = {};

    keys.map(function (key) {
      newUser[key] = user[key];
    })

    return newUser;
  }
}
