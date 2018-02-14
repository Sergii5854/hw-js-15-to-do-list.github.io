var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var config = require('./api/config');
var todo = require('./api/todo/router');

require('./api/db');

app.listen(config.port, function() {
  console.log('Server running at port: ', config.port)
});

// added for development
app.get('/favicon.ico', function(req, res) {
  res.status(204)
});

app.use(bodyParser.json());

app.use('/api/v1', todo);

// error handling
app.use(function(req, res, next) {
  var err = new Error('Not Found ' ,req.path);
  err.status = 404;
  next(err)
});

app.use(function(error, req, res, next) {
  if (error) {
    console.log(error)
    return res.status(400).json(error)
  }
  next(error)
});

app.use(function(err, req, res, next)  {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  })
});

module.exports = app;
