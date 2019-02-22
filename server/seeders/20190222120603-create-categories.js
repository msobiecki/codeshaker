'use strict';

const faker = require('faker/locale/pl');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fakeCategories = Array(10)
      .fill()
      .map(
        element =>
          (element = {
            name: faker.lorem.word(),
            createdAt: new Date(),
            updatedAt: new Date()
          })
      );

    return queryInterface.bulkInsert('Categories', fakeCategories);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
