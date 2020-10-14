const  {Router} = require('express');
const cartController = require('../controllers/cartController');
const router = Router();
 router.get('/:customer_id', cartController.cart_get);

  module.exports = router;