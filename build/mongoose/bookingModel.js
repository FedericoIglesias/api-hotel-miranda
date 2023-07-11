"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../enum");
const bookingSchema = new mongoose_1.Schema({
    name: String,
    orderDate: Number,
    checkIn: Number,
    checkOut: Number,
    idRoom: Number,
    status: { type: enum_1.StatusBook }
});
exports.BookingModel = (0, mongoose_1.model)('Booking', bookingSchema);
