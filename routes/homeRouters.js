const  {Router} = require('express');
const homeController = require('../controllers/homeController');
const router = Router();



router.get('/home', homeController.home_get);
router.get('/women-home', homeController.women_home_get);

router.get('/men-home', homeController.men_home_get);

module.exports = router;

