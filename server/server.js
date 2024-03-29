
/**
 * Module dependencies
 */

var fs = require('fs');
var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/config');

var app = express();
var port = process.env.PORT || 3000;

// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});


// Connect to mongodb
var connect = function () {
  var options = {
    server: { socketOptions: { keepAlive: 1 } }
  };
  mongoose.connect(config.db, options);
};
connect();

var db = mongoose.connection;

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap passport config
require('./config/passport')(passport);

// Bootstrap application settings
require('./config/express')(app, passport);

// Bootstrap routes
require('./config/routes')(app, passport);


app.listen(port);
console.log('Express app started on port ' + port);
