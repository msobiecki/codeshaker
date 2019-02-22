'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    'Section',
    {
      title: DataTypes.TEXT,
      content: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER
    },
    {}
  );
  Section.associate = function(models) {
    Section.belongsTo(models.Category, {
      sourceKey: 'id',
      foreignKey: 'categoryId',
      as: 'category'
    });
  };
  return Section;
};
