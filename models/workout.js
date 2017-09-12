'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workout = sequelize.define('workout', {
    description: DataTypes.STRING,
    length: DataTypes.STRING,
    run_type_id: DataTypes.INTEGER,
    training_day: DataTypes.INTEGER,
    goal: DataTypes.STRING,
    advice: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Workout.hasOne(models.RunType, { foreign_key: 'run_type_id' });
      }
    }
  });
  return Workout;
};
