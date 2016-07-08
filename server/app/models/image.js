var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Image schema
 */

var ImageSchema = new Schema({
  title: String,
  category: String,
  image: String
});


/**
 * Register
 */

var Image = mongoose.model('Image', ImageSchema);
module.exports = Image;
