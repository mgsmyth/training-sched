'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workout = sequelize.define('workout', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    length: DataTypes.STRING,
    run_type_id: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        Workout.hasOne(models.RunType, { foreign_key: 'run_type_id' });
      }
    }
  });
  return Workout;
};
