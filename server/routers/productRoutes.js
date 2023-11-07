const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControllers')

router.post('/createProduct', productControllers.createProduct)
router.get('/getAllProducts', productControllers.getAllProducts)
router.get('/getProductById', productControllers.getProductById)
router.put('/updateById', productControllers.updateProductById)
router.delete('/deleteProduct', productControllers.deleteProduct)

module.exports = router