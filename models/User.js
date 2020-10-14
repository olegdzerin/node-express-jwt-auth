const { Sequelize, DataTypes, Op, Model} = require('sequelize');
// const bcrypt = require('bcrypt');
//const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"
const dbURI = require('../env');
  
const userModel = () => {
  const sequelize = new Sequelize(dbURI);
 
  const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        
        primaryKey: true,
        autoIncrement: true,
        unique:true
      },
      
      name: {
        type: DataTypes.TEXT,
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

  return User;
}
module.exports = {userModel};




