const express = require('express');

const TODO = require('./model');

const router = express.Router();

router.get('/todo', (req, res, next) => {
  TODO.find({})
      .then(todolist => {
        res.json({todolist})
      })
      .catch(next)
});

router.post('/todo', (req, res, next) => {
  new TODO(req.body.todo)
      .save()
      .then(todo => {
        res.json({todo})
      })
      .catch(next)
});

router.put('/todo/:id', function (req, res) {
  TODO.findById(req.params.id, (err, todo) => {
    todo.text = req.body.todo.text || todo.text
    todo.url = req.body.todo.url || todo.url
    todo.date = req.body.todo.date || todo.date
    todo.complete = req.body.todo.complete
    todo.save((err, todo) => {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json(todo)
    })
  })
});

router.delete('/todo/:id', function (req, res) {
  let id = req.params.id;
  TODO.remove({
    _id: id
  }, function () {
    res.json()
  })
});

module.exports = router;