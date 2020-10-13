const jwt = require('jsonwebtoken');
const {
    Sequelize,
    DataTypes,
    Model,
    Op
} = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const {
    userModel
} = require('../models/User');

const {
    cartModel
} = require('../models/Cart');
const dbURI = "postgres://dzerinoleg1:3504@localhost:5432/nodelogin"



const handleErrors = (err) => {
    // console.log( 'EOG' + err.original.code);
    // dublicate error code
    let errors = {
        email: '',
        password: ''
    };
    if (err.original) {

      //  errors.email = 'this email is already registered';
        console.log("code:::::" + 23505);
        errors.email = err.original.detail;
        
    }
    const a = [1,2,3,4]
    console.log( 'type'+typeof(a));
    if (!err.original) {
        console.log('array');
        if (err.errors.some((el => {
                return (el.message.includes("Validation isEmail on email failed") || el.message.includes("Validation len on password failed"))
            }))) {
            Object.values(err.errors).forEach((
                properties
            ) => {
                errors[properties.path] = properties.message;
                console.log('propeties:::' + properties.path);
                console.log(errors.email);
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
    console.log("req.body" + req.body.name);
    try {
        await userModel().sync();
        const user = await userModel().create({
            name: name,
            email: email,
            password: password
        })
      
        console.log('id::' + user.id);
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
        // console.log('not conect to db::' + err);
        // console.log("code" + err.original.code);
        // console.log("detail" + err.original.detail);
        // console.log('errors' + errors.email);
        res.status(400).json(errors)
        // console.log(err);
        // console.log(err.errors[0]);
        // res.status(400).json(err)
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
            // attributes: ['id','name', 'email', 'password']
            // attributes: ['id', 'email']
            where: {email: email},
            raw: true
        });
        const result = {};
        console.log(users);
        console.log('email::' + email);
        const isEmail = users.some((item) => {
            result.id = item.id;
            result.email = item.email;
            result.name = item.name;
            result.password = item.password;
            return ((item.name === name)&&
            (item.email === email)&&
            (item.password === password) );
        });

        console.log(isEmail);
        if (isEmail) {
            const token = createToken(result.id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: maxAge * 1000
            })
            res.status(200).json(
            //     {
            //     id,
            //     name,
            //     email,
            //     token
            // }
            result
            )
        } else {
            throw ("it is erroer")
        }

    } catch (err) {
       //  const errors = handleErrors(err);
        console.log('not conect to db::' + err);
        res.status(400).json(err)
    }

}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1
    });
    res.redirect('/')
}

module.exports.db_get = (req, res) => {
    (async () => {
        await userModel().sync()
    })();
    res.redirect('/')
}