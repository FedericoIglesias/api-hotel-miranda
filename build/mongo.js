"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const connectionString = process.env.URL;
const connectMongoDB = () => {
    mongoose_1.default.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then(() => {
        console.log('Database connected');
    })
        .catch(error => {
        console.log(error);
    });
};
exports.connectMongoDB = connectMongoDB;
