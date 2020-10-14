const jwt = require('jsonwebtoken');
 const {userModel} = require("../models/User");

const requireAuth = (req, res, next) => {
const token = req.cookies.jwt;

// check jwt exist & is verified
if (token) {
  jwt.verify(token, 'nodelogin secret', (err,decodedToken) => {
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
    res.redirect('/home')
}
}

//check curret user
const checkUser  =  (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);
   
    
    if (token) {
         jwt.verify(token, 'nodelogin secret', async (err,decodedToken) => {
            if (err) {
               console.log(`err.message:${err.message}`);
                next();
            }else{
                console.log(`decodedToken::${decodedToken}`);
               const User =  userModel();
               const user = await User.findAll({
                   where: {id: decodedToken.id},
                   raw: true
                }
             );
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

