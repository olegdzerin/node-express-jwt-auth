const jwt = require('jsonwebtoken');
const {
    userModel
} = require('../models/User');

const {
    cartModel
} = require('../models/Cart');

const handleErrors = (err) => {
    let errors = {
        email: '',
        password: ''
    };
    if (err.original) {
        errors.email = err.original.detail;   
    }
    const a = [1,2,3,4]
    console.log( 'type'+typeof(a));
    if (!err.original) {
        if (err.errors.some((el => {
                return (el.message.includes("Validation isEmail on email failed") || el.message.includes("Validation len on password failed"))
            }))) {
            Object.values(err.errors).forEach((
                properties
            ) => {
                errors[properties.path] = properties.message;
            })
         }
     }

console.log(errors.email);
    return errors;
}
const maxAge = 3 * 24 * 60 * 68
const createToken = (id) => {
    return jwt.sign({
        id
    }, 'nodelogin secret', {
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
        name,
        email,
        password
    } = req.body;
    try {
        await userModel().sync();
        const user = await userModel().create({
            name: name,
            email: email,
            password: password
        })
         try{
            await cartModel().sync();
            await cartModel().create({
               customer_id: user.id
            });
          }catch(err){
             console.log('eeee' + err);
         }
        const token = createToken(user.id)
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
        res.status(201).json(
            user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json(errors)
    }
}


module.exports.login_post = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;
    console.log("req.body" + req.body.name);
    try {
        const User = userModel();
        const users = await User.findAll({
            where: {email: email},
            raw: true
        });
        const result = {};
        const isEmail = users.some((item) => {
            result.id = item.id;
            result.email = item.email;
            result.name = item.name;
            result.password = item.password;
            return ((item.name === name)&&
            (item.email === email)&&
            (item.password === password) );
        });
        if (isEmail) {
            console.log(isEmail);
            const token = createToken(result.id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: maxAge * 1000
            })


            res.status(201).json(
            result
            )
        } else {
            throw ("Введіть правельні дані або зарегіструйтеся")
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1
    });
    res.redirect('/')
}

