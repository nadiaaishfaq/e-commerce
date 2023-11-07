const mongoose = require('mongoose');

const quantitySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const Quantity = mongoose.model("Quantity", quantitySchema);

module.exports = Quantity;
