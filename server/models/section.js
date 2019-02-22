'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    'Section',
    {
      title: DataTypes.TEXT,
      content: DataTypes.TEXT
    },
    {}
  );
  Section.associate = function(models) {
    Section.belongsTo(models.Category);
  };
  return Section;
};
