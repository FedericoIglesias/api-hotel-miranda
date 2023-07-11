"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    photo: String,
    startDate: Number,
    job: String,
    schedule: String,
    phone: String,
    status: { type: enum_1.StatusUser },
    password: String
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
