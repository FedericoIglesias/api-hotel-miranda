"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialiSession = void 0;
const express_1 = require("express");
const userModel_1 = require("../mongoose/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const wordSecret = process.env.KEY_TOKEN;
const initialiSession = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.UserModel.findOne({ name: body.name });
        if (user === null || body.password !== user.password) {
            return "Name or Password invalid";
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, name: user.name }, wordSecret, { expiresIn: '365 days' });
        return { token: token, name: user.name, email: user.email, photo: user.photo };
    }
    catch (e) {
        express_1.response.status(400).send(e.message);
    }
});
exports.initialiSession = initialiSession;
