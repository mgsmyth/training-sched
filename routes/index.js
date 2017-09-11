const routes = require('express').Router();
const models = require('../models/index');

routes.route('/')
  .get(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  })
  .post(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('POST received, no action\n');
  });

routes.route('/workouts')
  .get(function(req, res) {
    models.workout.findAll({}).then(function(workouts) {
      res.json(workouts);
    });
  })
  .post(function(req, res) {
    models.workout.create({
      name: req.body.name,
      description: req.body.description,
      length: req.body.length,
    }).then(function(workout) {
      res.json(workout);
    });
  });

module.exports = routes;
