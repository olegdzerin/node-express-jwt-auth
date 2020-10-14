const  {Router} = require('express');
const cart_productsController = require('../controllers/cart_productsController');
const router = Router();


router.get('/', (req, res) => {
  res.render('cart-products' , {title: "В кошику слідуючі товари", gender: {}})
});

 router.post('/', cart_productsController.cart_products_post);

 router.get('/:cart_id', cart_productsController.cart_products_get);



 module.exports = router;