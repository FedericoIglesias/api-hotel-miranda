"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    try {
        const authorization = req.get("authorization");
        if (!authorization) {
            throw new Error("No found Token");
        }
        let token = "";
        if (authorization === null || authorization === void 0 ? void 0 : authorization.toLowerCase().startsWith("bearer")) {
            token = authorization.substring(7);
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.KEY_TOKEN);
        if (!decodedToken) {
            throw new Error("Token missing or invalid");
        }
        req.body.info = decodedToken;
        next();
    }
    catch (e) {
        res.status(401).send(e.message);
    }
};
exports.authToken = authToken;
