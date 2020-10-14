const express = require('express');
var authRouters = require('./routes/authRouters');
var homeRouters = require('./routes/homeRouters');
var productsRouters = require('./routes/productsRouters');
var cart_productsRouters = require('./routes/cart_productsRouter');
 var cartRouters = require('./routes/cartRouters')

const cookieParser = require('cookie-parser')
const {
  requireAuth,
  checkUser
} = require('./middleware/authMiddleware');
const {
  Sequelize
} = require('sequelize');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())
app.set('view engine', 'ejs');
const dbURI = require('./env');
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

app.get('/', (req, res) => res.redirect('/home'))
 app.use('/home', homeRouters)
app.use('/products', requireAuth, productsRouters);

app.use('/cart-products', requireAuth, cart_productsRouters);
app.use('/cart', requireAuth, cartRouters)


app.use(authRouters);
app.use(requireAuth, homeRouters);
 
