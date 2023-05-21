import { NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authToken = (req: any, res: any, next: NextFunction) => {
    try{
        
        
        const authorization = req.get("authorization")

        

        if (!req.get("authorization")) {
            throw new Error ('No found Token')
        }
        
        let token = "";
        
        if (authorization?.toLowerCase().startsWith("bearer")) {
            token = authorization.substring(7);
        }
        
        const decodedToken = jwt.verify(token, process.env.KEY_TOKEN as string) ;
        
        if (!decodedToken) {
            throw new Error("Token missing or invalid");
        }
        
        req.body.info = decodedToken;
        
        console.log(req.body);
        

        next();
    } catch (e){
        res.status(400).send((<Error>e).message)
    }
};
