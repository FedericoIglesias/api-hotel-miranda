"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
var mongoose_1 = require("mongoose");
var enum_1 = require("../enum");
var bookingSchema = new mongoose_1.Schema({
    name: String,
    orderDate: Date,
    checkIn: Date,
    checkOut: Date,
    status: enum_1.StatusBook
});
exports.BookingModel = (0, mongoose_1.model)('Booking', bookingSchema);
