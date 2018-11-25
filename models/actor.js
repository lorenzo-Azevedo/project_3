'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};