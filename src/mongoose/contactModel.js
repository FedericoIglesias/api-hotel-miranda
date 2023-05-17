"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
var mongoose_1 = require("mongoose");
var contactSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: Number,
    date: Date,
    subject: String,
});
exports.ContactModel = (0, mongoose_1.model)("Contact", contactSchema);
