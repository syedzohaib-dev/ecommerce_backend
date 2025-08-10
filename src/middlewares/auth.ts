import type { NextFunction } from "express";
import { TryCatch } from "./error.js";
import ErrorHandler from "../utils/utilityclass.js";
import { User } from "../models/user.js";

//  Middlewale to make  sure only admin is Allow
export const adminOnly = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.query;

    if (!id) return next(new ErrorHandler("Please Login AS Admin", 401))

    const user = await User.findById(id)
    if (!user) return next(new ErrorHandler("Wrong ID", 401))

    if (user.role !== "admin") return next(new ErrorHandler("You Are Not Admin", 401))

    next()
})

