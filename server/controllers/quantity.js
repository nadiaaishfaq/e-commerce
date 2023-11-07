const Quantity = require('../models/quantity');

const createdQuantity = async (req, res, next) => {
    try {
        const { productId, value } = req.body;
        const quantity = new Quantity({
            productId,
            value
        });
        await quantity.save();
        res.status(201).json({ message: "Quantity Created Successfully" });
    } catch (error) {
        next(error);
    }
}

const getQuantityByProductId = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const quantities = await Quantity.find(productId).populate("productId");
        res.status(200).json({quantities});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createdQuantity,
    getQuantityByProductId
}
