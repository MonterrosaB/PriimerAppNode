const productController = {};

import productModel from "../models/productModel";

//SELECT
productController.getProducts = async (req, res) => {
    const products = await productModel.find()
    res.json(products)
}

//INSERT

productController.createProduct = async (req, res) => {
    const {name, description, price, stock} = req.body;
    
    const newProduct = new productModel({name, description, price, stock});
    await newProduct.save()
}