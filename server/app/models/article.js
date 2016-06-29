var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Article schema
 */

var ArticleSchema = new Schema({
  author: String,
  content: String,
  description: String,
  imgUrl: String,
  link: String,
  title: String
});


/**
 * Register
 */

mongoose.model('Article', ArticleSchema);
