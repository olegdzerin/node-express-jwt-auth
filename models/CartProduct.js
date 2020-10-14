const { Sequelize, DataTypes, Op, Model} = require('sequelize');
  // const bcrypt = require('bcrypt');
  const dbURI = require('../env');
  
const cartProductModel = () => {
  const sequelize = new Sequelize(dbURI);
  // (async () => {
  //   sequelize.sync({force: true});
  // })
  const CartProduct = sequelize.define('cart_product', {
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
       
      },
      
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        
      },
     
  }, 
  );
  return CartProduct;
}
module.exports = {cartProductModel};




