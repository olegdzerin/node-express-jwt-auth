const  {Router} = require('express');
const router = Router();


const gender = ['', 'Переглянути для чоловіків', 'Переглянути для жінок'];
router.get('/', (req, res) =>  res.render('home'));
router.get('/women-home',  (req, res) => {   
    res.render('women-home', {gender:{women: gender[2]}, men: gender[0]});});

router.get('/men-home', (req, res) => { 
    res.render('women-home',{gender:{men: gender[1]},women: gender[0]});
});

module.exports = router;

