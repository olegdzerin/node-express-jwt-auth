const { Sequelize, DataTypes, Op, Model} = require('sequelize');
// const bcrypt = require('bcrypt');
const dbURI = require('../env');
  
const cartModel = () => {
  const sequelize = new Sequelize(dbURI);
  // (async () => {
  //   sequelize.sync({force: true});
  // })
  const Cart = sequelize.define('cart', {
      id: {
        type: DataTypes.INTEGER,
        
        primaryKey: true,
        autoIncrement: true,
        unique:true
      },
      
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true
      },
     
  }, 
  );
  return Cart;
}
module.exports = {cartModel};




