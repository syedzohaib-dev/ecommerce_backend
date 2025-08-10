import express from 'express';
import dotenv from "dotenv";
// Importing Routes
import { errorMiddleware } from './middlewares/error.js';
import userRoutes from "./routes/user.js";
import { connectDB } from "./utils/features.js";
dotenv.config();
const port = 3000;
const app = express();
app.use(express.json());
connectDB();
app.use("/api/v1/user", userRoutes);
app.use(errorMiddleware);
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port # ${port}`);
});
//# sourceMappingURL=app.js.map