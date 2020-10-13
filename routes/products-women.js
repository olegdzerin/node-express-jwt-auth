const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const {
  Sequelize,
  DataTypes,
  Model,
  Op
} = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
// const {definisionModel} = require('../models/User');
const {
  productsModel
} = require('../models/Product');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"

var newData1;
// const newData1 = async () => {
//   await productsModel().findAll();
// }

router.get('/', function (req, res) {
         (async () => {
     newData1 = await productsModel().findAll({
      where: {
        gender: 'жіноча'
      },
       raw: true
     });
   // console.log('newData1' + newData1[0]);
     res.json(newData1)
    })()
  
});

module.exports = router;