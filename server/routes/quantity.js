const express = require('express')
const router=express.Router();
const quantityController = require("../controllers/quantity")




router.post("/quantity",quantityController.createdQuantity)
router.get("/product/:productionId/quantity",quantityController.getQuantityByProductId)


module.exports=router