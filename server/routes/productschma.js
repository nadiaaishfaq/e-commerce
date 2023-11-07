const express = require('express');
const router = express.Router();
const createdProduct = require("../controllers/product");
const upload = require('../middleware/upload');

router.post("/productItem", upload.single('image'), createdProduct);

module.exports = router;
