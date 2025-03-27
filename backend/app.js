import express from "express";
import productRoutes from "./src/routes/product.js"
import customerRoutes from "./src/routes/customer.js"
import reviewRoutes from "./src/routes/review.js"
import registerEmployeeRoutes from "./src/routes/registerEmployees.js"
import cookieParser from "cookie-parser";



const app = express();
//Postman acepte cookies
app.use(cookieParser())

// Definir rutas de funciones

app.use(express.json());

app.use("/api/product", productRoutes )
app.use("/api/customer", customerRoutes )
app.use("/api/review", reviewRoutes )
app.use("/api/registerEmployee", registerEmployeeRoutes)


export default app;