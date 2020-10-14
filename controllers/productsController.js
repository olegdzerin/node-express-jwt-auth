const {
    productsModel
} = require('../models/Product');

module.exports.get_product = (req, res) => {
    const id = req.params.id;
    async () => {
        try {
            const product = await Product.findOne({
                where: {
                    id: id
                },
                row: true
            });
            res.json(product)
        } catch (err) {
            console.log(err);
        }
    }
}