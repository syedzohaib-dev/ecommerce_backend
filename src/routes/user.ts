import express from "express"
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/user/new

app.post("/new", newUser);

//  Route - /api/vi/user/all
app.get("/all", adminOnly, getAllUsers)

//  Route - /api/v1/user/new1

//  Route - /api/vi/user/dynamicID


app.get("/:id", adminOnly, getUser)

// Route - Delete User
app.delete("/:id", adminOnly, deleteUser)

// ye ik aur tarika he Route likne ka ---> V 
// app.route("/:id").get(getUser).delete(deleteUser)


export default app;