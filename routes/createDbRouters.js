const  {Router} = require('express');
const createDbController = require('../controllers/createDbController');
const router = Router();



router.get('/dbs', createDbController.createDb_get);
router.post('/dbs', createDbController.createDb_post);


 module.exports = router;