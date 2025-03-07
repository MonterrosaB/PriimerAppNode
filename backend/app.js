import express from "express";
import productRoutes from "./src/models/productModel.js"

const app = express();

// Definir rutas de funciones

app.use(express.json());

app.use("/api/product", productRoutes )

export default app;