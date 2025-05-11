"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    static associate(models) {
      Tracking.belongsTo(models.User);
      Tracking.hasMany(models.Product);
    }
  }
  Tracking.init(
    {
      code: DataTypes.STRING,
      local: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tracking",
    }
  );
  return Tracking;
};
