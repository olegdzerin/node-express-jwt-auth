const express = require('express');
// const mongoose = require('mongoose');
var authRouters = require('./routes/authRouters');
var homeRouters = require('./routes/homeRouters');
var createDbRouters = require('./routes/createDbRouters');
var productsRouters = require('./routes/productsRouters');
var productsWomenRouter = require('./routes/products-women');
var productsMenRouter = require('./routes/products-men');
var cart_productsRouter = require('./routes/cart_productsRouter');
// var cartRouters = require('./routes/cartRouters')

const cookieParser = require('cookie-parser')
const {
  requireAuth,
  checkUser
} = require('./middleware/authMiddleware');
const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');




const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

app.set('view engine', 'ejs');



const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"


const sequelize = new Sequelize(dbURI);

sequelize.authenticate()
  .then(() => {
    app.listen(3000),
      console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
app.get('*', checkUser);

app.get('', (req, res) => res.redirect('/home'))

app.use('/products', requireAuth, productsRouters);
// app.use('/products-women', productsWomenRouter);
// app.use('/products-men', productsMenRouter);
// app.use('/cart', cartRouters); 

// app.use('/home-women', homeWomenRouter);
// app.use('/home-men', homeMenRouter);
// app.get('/db',(req,res) => {
//   console.log('router');
//    res.render('db');
// })
app.use('/cart-products', requireAuth, cart_productsRouter)
app.get('/p', (req, res) => res.render('products'));
app.get('/sm', (req, res) => res.render('sm'));
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRouters);
app.use(requireAuth, homeRouters);

app.use(requireAuth, createDbRouters);
