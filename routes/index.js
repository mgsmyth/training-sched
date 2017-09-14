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
      description: req.body.description,
      length: req.body.length,
      run_type_id: req.body.run_type_id,
      training_day: req.body.training_day,
      goal: req.body.goal,
      advice: req.body.advice
    }).then(function(workout) {
      res.json(workout);
    });
  });

routes.route('/runTypes')
  .get(function(req, res) {
    models.run_type.findAll({}).then(function(runTypes) {
      res.json(runTypes);
    });
  })
  .post(function(req, res) {
    models.run_type.create({
      name: req.body.name,
    }).then(function(runTypes) {
      res.json(runTypes);
    });
  });

module.exports = routes;
