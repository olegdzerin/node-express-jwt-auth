const jwt = require('jsonwebtoken');
const {
    Sequelize,
    DataTypes,
    Model,
    Op
} = require('sequelize');

const {
    productsModel
} = require('../models/Product');
// const {
//     param
// } = require('../routes/users');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"

module.exports.get_product = (req, res) => {
    //  const Product = productsModel(dbURI);
    const id = req.params.id;
    console.log("id:::" + id);
    async () => {
        try {
            const product = await Product.findOne({
                where: {
                    id: id
                },
                row: true
            });
            console.log("product:::" + product);
            res.json(product)
        } catch (err) {
            console.log(err);
        }


    }
    // res.json({id:id})

}