const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProductsById);

router.get("/prodname/:prod_name/", productsController.getProductsByName);

module.exports = router;
