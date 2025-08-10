import type { Request, Response, NextFunction } from "express"
import ErrorHandler from "../utils/utilityclass.js"
import type { ControllerType } from "../types/types.js";


export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // err.message = err.message || "";
    // err.message ||= "Internal Server Error";
    // err.statusCode ||= 500

    const statusCode = (err instanceof ErrorHandler && err.statusCode) ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";


    return res.status(statusCode).json({
        success: false,
        message
    })

}


export const TryCatch =
    (func: ControllerType) =>
        (req: Request, res: Response, next: NextFunction) => {
            return Promise.resolve(func(req, res, next)).catch(next);
        };