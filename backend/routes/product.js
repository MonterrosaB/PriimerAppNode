import express, { Router } from "express";
import productController from "../src/controllers/productController.js";

const router = express.Router();

router.Router("/")
.get(productController.getProducts)
.post(productController.createProduct);

router
.route("/:id")
.put(productController.updateProduct)
.delete(productController.deleteProduct);

export default router;