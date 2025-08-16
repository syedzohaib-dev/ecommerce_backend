import type { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middlewares/error.js";
import { type NewProductRequestBody } from "../types/types.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utilityclass.js";

export const newProduct = TryCatch(async (req: Request<{}, {}, NewProductRequestBody>, res: Response, next: NextFunction) => {


    const { name, price, stock, category } = req.body

    const photo = req.file
    if (!photo) return next(new ErrorHandler("Please add Photo", 400))

    if (!name || !price || !stock || !category) return next(new ErrorHandler("Please Enter All Fields", 400))

    await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo?.path,
    })

    return res.status(200).json({
        success: true,
        message: "Product Created Successfully"
    })

})

