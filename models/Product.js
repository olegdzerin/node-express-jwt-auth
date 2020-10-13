const { Sequelize, DataTypes, Op, Model, STRING} = require('sequelize');
const bcrypt = require('bcrypt');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"
  
const productsModel = () => {
  const sequelize = new Sequelize(dbURI);
  // (async () => {
  //   sequelize.sync({force: true});
  // })
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
  // (async () => {
  //   await User.sync({alter:true})
  // });

  return Product;
}
module.exports = {productsModel};




