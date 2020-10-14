const {
    cartModel
} = require('../models/Cart');

module.exports.cart_get = async (req, res) => {
    const customer_id = req.params.customer_id;
  
   try {
       const result = await cartModel().findOne({
        where: {customer_id: customer_id}
       });
       res.status(200).json(result)   
   } catch (err) {
      console.log(err);
   };
}

