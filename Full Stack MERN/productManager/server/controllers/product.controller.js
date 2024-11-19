const {Product} = require('../models/product.model.js');
module.exports.index = (req, res) => {
  res.json({ msg: "Hi Reem" });
};

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({ title, price, description })
    .then(product => response.json(product))
    .catch(err => response.status(400).json({ message: "Something went wrong", error: err }));
};
