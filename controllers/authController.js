const User = require('../models/User');
const jwt = require('jsonwebtoken');

//hanfle erros
const handleErrors = (err) => {
   
    console.log(err.message);
    // console.log(err._message);
    console.log(err.code);
    // dublicate error code
    let errors = {
        email: '',
        password: ''
    };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered';
    }
      // incorrect password
      if (err.message === 'incorrect password') {
        errors.password = 'that password is  incorrent';
    }
       
    
    if (err.code === 11000) {
       errors.email = 'this email is already registered';
        return error;
    }
    // validation errors
    if (err.message.includes('users validation failed')||
    err.message.includes(' Minimum pasword length is 6 characters') ) {
        //    console.log(Object.values(err.errors.email.properties.message));
        Object.values(err.errors).forEach(({
            properties
        }) => {
            error[properties.path] = properties.message;
        })
        // err.errors.email ? 
        // error.email = err.errors.email.properties.message:error.email = '';

        // err.errors.password ? 
        // error.password = err.errors.password.properties.message:error.password = '';
        // console.log(error.email);
        // console.log(error.password);


    }

    return errors;
}
const maxAge = 3*24*60*68
const createToken = (id) =>{
return jwt.sign({id}, 'net ninja secret',{
    expiresIn: maxAge
})
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log(req.body);
    try {
        const user = await User.create({
            email,
            password
        })
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly:true, maxAge: maxAge*1000})
        res.status(201).json({user: user._id});   
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
        //  handleErrors(err);

        //   res.status(400).send('error,user not created')
        res.status(400).json({errors})
    }
   
    
    }


module.exports.login_post = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log(email)
    try {
        const user = await User.login(email,password);
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly:true, maxAge: maxAge*1000})
        res.status(200).json({user: user._id})
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }

}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1});
    res.redirect('/')
    
}