var Article = require('../models/article');
var Image = require('../models/image');

module.exports = function (app) {
  app.post('/api/article/createMany', function (req, res) {
    createMany(req, res, Article);
  });


  app.post('/api/article/update', function (req, res) {
    updateModel(req, res, Article);
  });

  app.post('/api/article/delete', function (req, res) {
    deleteModel(req, res, Article);
  });

  app.post('/api/image/createMany', function (req, res) {
    createMany(req, res, Image);
  });


  app.post('/api/image/update', function (req, res) {
    updateModel(req, res, Image);
  });

  app.post('/api/image/delete', function (req, res) {
    deleteModel(req, res, Image);
  });

  function createMany(req, res, model) {
    var docs = req.body.docs;
    model.collection.insert(docs, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Docs failed to insert', error: err});
      } else {
        return res.status(200).json({message: 'Docs successfully inserted'});
      }
    });
  }

  function updateModel(req, res, model) {
    var doc = req.body.doc;

    Article.update({"_id": doc._id}, doc, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Doc failed to update', error: err});
      } else {
        return res.status(200).json({message: 'Doc successfully updated'});
      }
    });
  }

  function deleteModel(req, res, model) {
    var doc = req.body.doc;

    Article.delete({"_id": doc._id}, function (err, docs) {
      if (err) {
        return res.status(500).json({message: 'Doc failed to delte', error: err});
      } else {
        return res.status(200).json({message: 'Doc successfully deleted'});
      }
    });
  }
}
