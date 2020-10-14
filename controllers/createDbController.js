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

const {
   cartModel
} = require('../models/Cart');

const {
    cartProductModel
 } = require('../models/CartProduct');


const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"

module.exports.createDb_get = (req, res) => {
    console.log('createDb');
    res.render('dbs');
}

module.exports.createDb_post = async (req, res) => {
    const {
        category,
        gender,
        price,
        photoUrl,
        description
    } = req.body;
    console.log("req.bodyss:::" + req.body.category);
    try {
        await productsModel().sync();
        const user = await productsModel().create({
            category: category,
            gender: gender,
            price: price,
            photoUrl: photoUrl,
            description: description
        })
        console.log('id::' + user);
        res.status(201).json(
            'user');
    } catch (err) {
        res.status(400).json(err)

    };
}





