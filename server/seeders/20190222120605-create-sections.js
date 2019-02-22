'use strict';
const faker = require('faker/locale/pl');

const Category = require('../models').Category;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [categories] = await Promise.all([Category.findAll()]);
    const categoriesId = categories.map(el => el.id);

    const fakeSections = Array(50)
      .fill()
      .map(
        element =>
          (element = {
            title: faker.lorem.words(),
            content: faker.lorem.text(),
            categoryId:
              categoriesId[Math.floor(Math.random() * categoriesId.length)],
            createdAt: new Date(),
            updatedAt: new Date()
          })
      );

    return queryInterface.bulkInsert('Sections', fakeSections);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sections', null, {});
  }
};
