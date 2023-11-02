const Product = require('../models/product');

const createdProduct = async (req, res, next) => {
    try {


        const { name ,price,description} = req.body
        const productItem = new Product({
            name,
            price,
            description
        


        });
        if(req.file){
            productItem.image =req.file.path
        }

        await productItem.save();

        console.log(productItem + "=>>>>");

        res.status(201).json({ message: "Product Created Successfully" });
    } catch (error) {
        next(error);
    }
}




module.exports = createdProduct;
