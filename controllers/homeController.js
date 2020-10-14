
const gender = ['', 'Переглянути для чоловіків', 'Переглянути для жінок'];
module.exports.home_get = (req, res) => {
   // res.status(200).json({product: "goods"})
    res.render('home');
}

module.exports.women_home_get = (req, res) => {   
    res.render('women-home',{gender:{women: gender[2]}, men: gender[0]});
   
}

module.exports.men_home_get = (req, res) => { 
    res.render('women-home',{gender:{men: gender[1]},women: gender[0]});
}