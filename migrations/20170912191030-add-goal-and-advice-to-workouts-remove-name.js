'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('workouts', 'name').then(function () {
      queryInterface.addColumn('workouts', 'goal', Sequelize.STRING).then(function () {
        queryInterface.addColumn('workouts', 'advice', Sequelize.STRING)
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('workouts', 'name', Sequelize.STRING).then(function () {
      queryInterface.removeColumn('workouts', 'goal').then(function () {
        queryInterface.removeColumn('workouts', 'advice')
      })
    })
  }
};
