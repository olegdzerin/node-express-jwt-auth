//const mongoose = require('mongoose');
// const { isEmail} = require('validator');

const { Sequelize, DataTypes, Op, Model} = require('sequelize');
const bcrypt = require('bcrypt');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"
  
const definisionModel = () => {
  const sequelize = new Sequelize(dbURI);
  // (async () => {
  //   sequelize.sync({force: true});
  // })
  const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        
        primaryKey: true,
        autoIncrement: true,
        unique:true
      },
      
      name: {
        type: DataTypes.TEXT,
       // allowNull: false,
       // unique:true
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {isEmail: true},
        unique: true
      },
      password: {
        type: DataTypes.STRING(64),
        validate: {len: [6,100]}
      },
  }, );
  // (async () => {
  //   await User.sync({alter:true})
  // });

  return User;
}
module.exports = {definisionModel};




