const jwt = require('jsonwebtoken');
const {
    Sequelize,
    DataTypes,
    Model,
    Op
} = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const {
    cartModel
} = require('../models/Cart');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"

module.exports.addToCart = async (req, res) => {
    const {
       castomer_id
    } = req.body;
    console.log("req.body" + req.body.name);
    try {
        await cartModel().sync();
        const user = await cartModel().create({
            castomer_id: castomer_id
        })
        res.status(201).json(
            user);
    } catch (err) {
      console.log(err);
    }

}

// module.exports.cart_get = (req, res) => {
  
//   console.log('.....cccccccccc');
//     // res.status(200).json({product: "goods"})
//     res.render('cart');
// }

// module.exports.women_home_get = (req, res) => {   
//     res.render('women-home')
// }

// module.exports.men_home_get = (req, res) => { 
//     res.render('men-home')
// }