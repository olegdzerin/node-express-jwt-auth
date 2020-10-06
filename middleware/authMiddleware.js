const { request } = require("express");

const jwt = require('jsonwebtoken');
 const {definisionModel} = require("../models/User");

const requireAuth = (req, res, next) => {
const token = req.cookies.jwt;

// check jwt exist & is verified
if (token) {
  jwt.verify(token, 'net ninja secret', (err,decodedToken) => {
    if (err) {
        console.log(err.message);
        res.redirect('/login');
    }else{
        console.log(decodedToken);
        next();
    }
  })
}
else{
    res.redirect('/login')
}
}

//check curret user
const checkUser  =  (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);
   
    
    if (token) {
         jwt.verify(token, 'net ninja secret', async (err,decodedToken) => {
            if (err) {
               console.log(`err.message:${err.message}`);
                next();
            }else{
                console.log(`decodedToken::${decodedToken}`);
               const User =  definisionModel();
               const user = await User.findAll({
                   where: {id: decodedToken.id},
                   raw: true
                }
           
                );
               // user.map(el =>  el.get({ plain: true }));
                //  }).map(el => el.get({ plain: true }));
                
              //   console.log(`user::${user[0].email}`);
                // let user = await User.findById(decodedToken.id);
                res.locals.user = user[0];
                next();
            }
          })
    }
    else{
        res.locals.user = null;
        next();
    }
   
};
module.exports = { requireAuth, checkUser};

