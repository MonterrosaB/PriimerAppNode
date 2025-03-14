import express from "express";
import productRoutes from "./src/routes/product.js"
import customerRoutes from "./src/routes/customer.js"
import reviewRoutes from "./src/routes/review.js"



const app = express();

// Definir rutas de funciones

app.use(express.json());

app.use("/api/product", productRoutes )
app.use("/api/customer", customerRoutes )
app.use("/api/review", reviewRoutes )


export default app;