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

// const {
//     param
// } = require('../routes/users');
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
        // const token = createToken(user.id)
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     maxAge: maxAge * 1000
        // })
        res.status(201).json(
            'user');
    } catch (err) {
        //const errors = handleErrors(err);
        // console.log('not conect to db::' + err);
        // console.log("code" + err.original.code);
        // console.log("detail" + err.original.detail);
        // console.log('errors' + errors.email);
        res.status(400).json(err)
        // console.log(err);
        // console.log(err.errors[0]);
        // res.status(400).json(err)
    };
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
        // const token = createToken(user.id)
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     maxAge: maxAge * 1000
        // })
        res.status(201).json(
            'user');
    } catch (err) {
        //const errors = handleErrors(err);
        // console.log('not conect to db::' + err);
        // console.log("code" + err.original.code);
        // console.log("detail" + err.original.detail);
        // console.log('errors' + errors.email);
        res.status(400).json(err)
        // console.log(err);
        // console.log(err.errors[0]);
        // res.status(400).json(err)
    }
}

module.exports.get_product = (req, res) => {
    const Product = productsModel(dbUrl);
    const id = req.params.id;

    async () => {
        const product = await Product.findOne({
            where: {
                id: id
            }
        });
        res.json(product)

    }

}

module.exports.create_cart = async (req, res) => {
  
    console.log("req.cart:::" );
    try {
        await cartModel().sync();
        const result = await cartModel().create({
         customer_id: customer_id
        });
        res.status(200).json(result)
      
    } catch (err) {
       console.log(err);
    };
}

module.exports.cart_get = async (req, res) => {
     const customer_id = req.params.id;
    console.log("req.params:::"+ customer_id );
    try {
        const result = await cartModel().findOne({
         where: {customer_id: customer_id}
        });
        res.status(200).json(result)
      
    } catch (err) {
       console.log(err);
    };
}



module.exports.create_cartProduct = async (req, res) => {
   
    try {
        await cartProductModel().sync();
        const result = await cartProductModel().create({
         cart_id: 100,
         product_id: 100
        });
        res.status(200).json(result)
      
    } catch (err) {
       console.log(err);
    };
}

module.exports.create_cartProduct_post = async (req, res) => {
      const {
          cart_id,
          product_id
      } = req.body;
    try {
        await cartProductModel().sync();
        const result = await cartProductModel().create({
         cart_id: cart_id,
         product_id: product_id
        });
        res.status(200).json(result)
      
    } catch (err) {
       console.log(err);
    };
}

module.exports.cartProduct_get = async (req, res) => {
      const cart_id = req.params.cart_id;
    try {
        await cartProductModel().sync();
        const result1 = await cartProductModel().findAll({
           attributes:['product_id'],
    //    where:{ cart_id: cart_id},
       raw:true
       
        });
        console.log(result1);
      //  res.status(200).json(result)
      const result2 = result1.map((item) =>{ return {id: item.product_id}});
      console.log(result2);
     // res.status(200).json(result2)
      try {
        await productsModel().sync();
        const result3 = await productsModel().findAll({
          
            where: {
                [Op.or]: result2,
             
            },
            raw:true
            
        });
        console.log(result3)

         res.status(200).json(result3)
       }catch(err) {
           console.log(err);
       }
      
    } catch (err) {
       console.log(err);
    };
}
