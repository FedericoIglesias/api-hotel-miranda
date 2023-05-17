"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var enum_1 = require("../enum");
var userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    startDate: Date,
    description: String,
    phone: Number,
    status: enum_1.StatusUser,
    password: String
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
