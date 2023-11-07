const Product = require("../models/product");

//create-product

const createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const product = new Product({
      name,
      description,
      price,
      quantity
    });
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Creating Product",
      error,
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('quantity');
    res.status(200).send({
      success: true,
      message: "All Products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Products",
      error,
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product)
      res.status(200).send({
        success: true,
        message: "Product Found",
        product,
      });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Product Not Found",
      error,
    });
  }
};
const updateProductById = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, quantity },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Product Updated Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Product Could Not Updating Successfully",
      error,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (product)
      res.status(200).send({
        success: true,
        message: "Product Deleted Successfully",
        product,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Deleting Deleting",
      error,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProduct,
};
