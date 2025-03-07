const productController = {};

import productModel from "../models/productModel.js";

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
    res.json({message : "product saved"})
}

//DELETE

productController.deleteProduct = async (req, res) => {
    await productModel.findOneAndDelete(req.params.id)
    res.json({message : "product delete"})
}

//UPDATE

productController.updateProduct = async (req, res) => {
    const {name, description, price, stock} = req.body;

    await productModel.findByIdAndUpdate(req.params.id, {
           name,
            description,
            price,
            stock
        },{new : true}
    );
    res.json({ message : "product save"})
}

export default productController;