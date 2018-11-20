'use strict';
module.exports = (sequelize, DataTypes) => {
  var piece = sequelize.define('piece', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    img_url: DataTypes.STRING,
    availability: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  piece.associate = function(models) {
    // associations can be defined here
  };
  return piece;
};