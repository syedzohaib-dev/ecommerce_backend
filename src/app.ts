import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./utils/features.js";

// Importing Routes
import { errorMiddleware } from './middlewares/error.js';

import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";

dotenv.config();
const port = 3000;
const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("<h2>API Working With /api/v1</h2>")
})

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/product", productRoutes)

app.use("/uploads", express.static("uploads"))
app.use(errorMiddleware)
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port # ${port}`)
});
