"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
    date: Number,
    subject: String,
    comment: String,
    photo: String
});
exports.ContactModel = (0, mongoose_1.model)("Contact", contactSchema);
