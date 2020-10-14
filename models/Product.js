const { Sequelize, DataTypes, Op, Model, STRING} = require('sequelize');
// const bcrypt = require('bcrypt');
const dbURI = require('../env');
  
const productsModel = () => {
  const sequelize = new Sequelize(dbURI);
  const Product = sequelize.define('product', {
      id: {
        type: DataTypes.INTEGER,
        
        primaryKey: true,
        autoIncrement: true,
        unique:true
      },
      
      category: {
        type: DataTypes.TEXT,
       allowNull: false
      
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: false
        
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
     
      },
      photo: {
       type: DataTypes.STRING
       
      },
      description: {
        type: DataTypes.STRING, 
      }
    
  }, );
  return Product;
}
module.exports = {productsModel};




