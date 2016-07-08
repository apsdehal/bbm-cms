
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var utils = require('../app/utils');
var path = require('path');
var Article = require('../app/models/article');
var Image = require('../app/models/image');


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


  app.post('/api/article/createMany', function (req, res) {
    createMany(req, res, Article);
  });

  app.get('/api/article/all', function (req, res) {
    getAll(req, res, Article);
  });

  app.delete('/api/article/all', function (req, res) {
    removeAll(req, res, Article);
  });


  app.put('/api/article/update', function (req, res) {
    updateModel(req, res, Article);
  });

  app.delete('/api/article/delete', function (req, res) {
    deleteModel(req, res, Article);
  });

  app.post('/api/image/createMany', function (req, res) {
    createMany(req, res, Image);
  });

  app.get('/api/image/all', function (req, res) {
    getAll(req, res, Image);
  });

  app.delete('/api/image/all', function (req, res) {
    removeAll(req, res, Image);
  });


  app.put('/api/image/update', function (req, res) {
    updateModel(req, res, Image);
  });

  app.delete('/api/image/delete', function (req, res) {
    deleteModel(req, res, Image);
  });

  function createMany(req, res, model) {
    var docs = JSON.parse(req.body.docs);
    model.collection.insert(docs, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Docs failed to insert', error: err});
      } else {
        return res.status(200).json({message: 'Docs successfully inserted'});
      }
    });
  }

  function getAll(req, res, model) {
    model.find({}, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Docs failed', error: err});
      } else {
        return res.status(200).json(docs);
      }
    })
  }

  function updateModel(req, res, model) {
    var doc = JSON.parse(req.body.doc);

    model.update({_id: doc._id}, doc, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Doc failed to update', error: err});
      } else {
        return res.status(200).json({message: 'Doc successfully updated'});
      }
    });
  }

  function deleteModel(req, res, model) {
    var id = req.query.id;
    console.log(id);
    model.remove({"_id": id}, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Doc failed to delete', error: err});
      } else {
        return res.status(200).json({message: 'Doc successfully deleted'});
      }
    });
  }

  function removeAll(req, res, model) {
    model.remove({}, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Docs failed to delete', error: err});
      } else {
        return res.status(200).json({message: 'Docs successfully deleted'});
      }
    });
  }


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
