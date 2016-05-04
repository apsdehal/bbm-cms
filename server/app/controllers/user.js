var mongoose = require('mongoose');
var User = mongoose.model('User');

exports = {
  signup: function (req, res) {
    var user = {
      email: req.body.username,
      name: req.body.name,
      password: req.body.password
    };

    User.create(user, function (err, newUser) {
      if (err) {
        return next(err);
      }
      req.session.user = newUser;
      return res.send('Signed Up and Logged in');
    });
  }
}
