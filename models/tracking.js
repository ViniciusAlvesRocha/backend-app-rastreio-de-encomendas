'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Para mostrar que uma TRaking pertence a um usuário */
      Tracking.belongsTo(models.User)
      /* Para definir que uma Tralking pode ter varios produtos */
      Tracking.hasMany(models.Product)
    }
  }
  Tracking.init({
    code: DataTypes.STRING,
    local: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tracking',
  });
  return Tracking;
};