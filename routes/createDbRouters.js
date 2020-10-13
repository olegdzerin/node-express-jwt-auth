const  {Router} = require('express');
const createDbController = require('../controllers/createDbController');
const router = Router();


// router.get('/dbs', (req,res) => {console.log('router')});
//router.get('/dbs', createDbController.createDb_get);
//  router.get('/login', authController.login_get);
// // router.get('/login', function(req, res,next){
// //     res.render('login')
// //});
  //router.post('/dbs', createDbController.createDb_post);
// router.post('/login', authController.login_post);
// router.get('/logout', authController.logout_get);


router.get('/getCart/:id', createDbController.cart_get);
 router.get('/dbCart', createDbController.create_cart);
 router.get('/dbCartProduct', createDbController.create_cartProduct);
 router.post('/dbCartProduct/:cart_id', createDbController.create_cartProduct_post);
 router.get('/dbCartProduct/:cart_id', createDbController.cartProduct_get);
  // router.get('/dbs/product/:id', createDbController.get_product);

 module.exports = router;