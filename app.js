const express = require('express');
// const mongoose = require('mongoose');
var authRouters = require('./routes/authRouters');
const cookieParser = require('cookie-parser')
 const {requireAuth, checkUser} = require('./middleware/authMiddleware');
const {Sequelize, Model, DataTypes} = require('sequelize');

const app = express();
 

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())
// view engine
app.set('view engine', 'ejs');

// database connection

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
// routes
 app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRouters);

