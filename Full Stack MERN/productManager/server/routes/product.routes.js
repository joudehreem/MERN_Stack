const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
  app.get('/', ProductController.index);
  app.post('/api/product', ProductController.createProduct);
};
