'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING
  },{
      defaultScope:{
      attributes: { 
        exclude: ['password_hash']
      }
    },
    sequelize,
    modelName: 'user',
  },  
  );
  return user;
};