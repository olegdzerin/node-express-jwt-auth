const express = require('express');
const mongoose = require('mongoose');
var authRouters = require('./routes/authRouters');
const cookieParser = require('cookie-parser')
const {requireAuth, checkUser} = require('./middleware/authMiddleware');


const app = express();
 

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())
// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes

app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRouters);

//this for testing
// app.get('/set-cookies', (req,res)=> {
//  // res.setHeader('Set-Cookie', 'newUser=true');
//  // res.send('yuo go to the cookie')
//  res.cookie('newUser',true,{
//   maxAge:1000 * 60 * 60 * 24,
//  //  secure: true,
//  httpOnly:true
// })
// })
// app.get('/read-cookies', (req,res) => {
//   const cookies = req.cookies;
//   console.log(cookies);
//   res.json(cookies);
// });