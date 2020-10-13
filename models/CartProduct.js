const { Sequelize, DataTypes, Op, Model} = require('sequelize');
const bcrypt = require('bcrypt');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"
  
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
  // (async () => {
  //   await User.sync({alter:true})
  // });

  return CartProduct;
}
module.exports = {cartProductModel};




