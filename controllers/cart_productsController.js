const {
    Op
} = require('sequelize');


const {
    productsModel
} = require('../models/Product');

const {
    cartModel
} = require('../models/Cart');

const {
    cartProductModel
} = require('../models/CartProduct');

module.exports.cart_products_get = async (req, res) => {
    const cart_id = req.params.cart_id;
    try {
        await cartProductModel().sync();
        const result1 = await cartProductModel().findAll({
                where:{ cart_id: cart_id},
            raw: true
        });
        console.log(result1);
        const result2 = result1.map((item) => {
            return {
                id: item.product_id
            }
        });
        console.log(result2);
        try {
            await productsModel().sync();
            const result3 = await productsModel().findAll({
                where: {
                    [Op.or]: result2,
                },
                raw: true
            });
            res.status(200).json(result3)
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    };
};

module.exports.cart_products_post = async (req, res) => {
    const {
        cart_id,
        product_id
    } = req.body;
  try {
      await cartProductModel().sync();
      const result = await cartProductModel().create({
       cart_id: cart_id,
       product_id: product_id
      });
      res.status(200).json(result)
    
  } catch (err) {
     console.log(err);
  };
}