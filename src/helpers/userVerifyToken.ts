import jwt from "jsonwebtoken";
import User from "../model/user.model";
import {Request, Response, NextFunction} from 'express'

declare global {
    namespace Express {
        interface Request {
            admin?: any;
        }
    }
}

// ADMIN VERIFY TOKEN
export default adminVerifyToken = async(request: Request,response: Response,next: NextFunction) => {
    try {
        const authorization = req.headers['authorization'];
        if (authorization === undefined) {
            return res.json({ message: `Invalid Authorization ${console.error()}`});
        }
        let token = authorization.split(" ")[1];
        // console.log(token);
        if (token === undefined) {
            return res.status(401).json({ message: `Unauthorize ${console.error()}`})
        }else{
            let {adminId} = jwt.verify(token, 'Admin');
            // console.log(adminId);
            let admin = await User.findById(adminId);
            // console.log(admin);
            if (admin) {
                req.admin = admin;
                next();
            } else {
                return res.status(401).json({ message: `Invalid Admin(token) ${console.error()}`})
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ message: `Internal Servar Error From Admin Token`});
    }
}