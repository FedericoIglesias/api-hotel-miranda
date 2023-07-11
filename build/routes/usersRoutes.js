"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const usersService = __importStar(require("../services/usersService"));
const functions_1 = require("../functions");
const routerUser = express_1.default.Router();
routerUser.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield usersService.getUsers());
}));
routerUser.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, functions_1.verifyId)(req.params.id);
        const user = yield usersService.getIdUser(id);
        return user !== undefined ? res.json(user) : res.send(404);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
}));
routerUser.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, functions_1.verifyId)(req.params.id);
        yield usersService.deleteUser(id);
        return res.send(`Id ${id} was delete`);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
}));
routerUser.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createNewUser = yield usersService.addUser(req.body);
        return res.json({ NewUSer: createNewUser });
    }
    catch (e) {
        res.status(400).send(e.message);
    }
}));
routerUser.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usersService.putUser(req.body.id, req.body.obj);
        return res.json({ user: user });
    }
    catch (e) {
        res.status(400).send(e.message);
    }
}));
exports.default = routerUser;
