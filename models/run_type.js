'use strict';
module.exports = (sequelize, DataTypes) => {
  var RunType = sequelize.define('run_type', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        RunType.hasMany(models.workout, { foreignKey: 'run_type_id' });
      }
    }
  });
  return RunType;
};
