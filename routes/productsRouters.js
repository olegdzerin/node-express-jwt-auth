const express = require('express');
const router = express.Router();
const {
  productsModel
} = require('../models/Product');

var newData1;

router.get('/women', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'жіноча'
      },
       raw: true
     });
res.json(newData1)
})()
});

router.get('/men', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'чоловіча'
      },
      raw: true
    });
    res.json(newData1)
  })()
});

router.get('/women/jacket', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'жіноча',
        category: 'куртка'
      },
       raw: true
     });
res.json(newData1)
})()
});

router.get('/men/jacket', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'чоловіча',
        category: 'куртка'
      },
       raw: true
     });
res.json(newData1)
})()
});

router.get('/women/trousers', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'жіноча',
        category: 'штани'
      },
       raw: true
     });
   console.log('newData1:::::' + newData1[0]);
res.json(newData1)
})()
});

router.get('/men/trousers', function (req, res) {
  (async () => {
    newData1 = await productsModel().findAll({
      where: {
        gender: 'чоловіча',
        category: 'штани'
      },
       raw: true
     });
res.json(newData1)
})()
});

router.get('/:id', function(req, res) {
(async () => {
  const params = req.params.id;
  console.log("params:::" + params);
  result = await productsModel().findAll({
    where: {
      id: params
    },
     raw: true
   });
res.json(result)
})()
});

module.exports = router;