'use strict';
const {Model} = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  class MyPoke extends Model {
    static associate(models) {
    }
  }
  MyPoke.init({
    myPokeId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pokeId: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    picture: DataTypes.STRING,
    sessId: DataTypes.STRING,
    createdAt : {
        type : DataTypes.DATE,
        get : function() {
            return this.getDataValue('createdAt') != null ? moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss') : null
        }
    },
    updatedAt : {
        type : DataTypes.DATE,
        get : function() {
            return this.getDataValue('updatedAt') != null ? moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss') : null
        }
    },
  }, {
    sequelize,
    modelName: 'MyPoke',
    tableName: 'my_pokemon',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  });
  return MyPoke;
};