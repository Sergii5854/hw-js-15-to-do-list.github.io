const express = require('express');

const Todo = require('./model');

const router = express.Router();

router.get('/todo', function(req, res, next) {
  Todo.find({})
    .then(function(todo) {
  res.json(todo)
}).catch(next)
});

router.post('/todo', function (req, res, next) {
  new Todo(req.body.todo)
      .save()
      .then(function (todo) {
        res.json(todo)
      })
      .catch(next)
});

router.put('/todo/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    todo.text = req.body.todo.text || todo.text;
    todo.url = req.body.todo.url || todo.url;
    todo.date = req.body.todo.date || todo.date;
    todo.complete = req.body.todo.complete;
    todo.save(function (err, todo) {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json(todo)
    })
  })
});

router.delete('/todo/:id', function (req, res) {
  var id = req.params.id;
  Todo.remove({
    _id: id
  }, function () {
    res.json();
  })
});

module.exports = router;