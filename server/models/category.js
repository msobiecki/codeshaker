'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Category.associate = function(models) {
    Category.hasMany(models.Section, {
      sourceKey: 'id',
      foreignKey: 'categoryId',
      as: 'sections'
    });
  };
  return Category;
};
