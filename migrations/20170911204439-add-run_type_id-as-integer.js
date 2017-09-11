'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'workouts',
      'run_type_id',
       Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'workouts',
      'run_type_id'
    )
  }
};
