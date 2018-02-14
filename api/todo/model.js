var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: String,
  url: String,
  date: String,
  complete: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);