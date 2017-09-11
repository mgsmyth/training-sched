'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'workouts',
      'training_day',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'workouts',
      'training_day'
    )
  }
};
