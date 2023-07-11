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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBooking = exports.deleteBooking = exports.addBooking = exports.getIdBooking = exports.getBookings = void 0;
const express_1 = require("express");
const bookingModel_1 = require("../mongoose/bookingModel");
const getBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield bookingModel_1.BookingModel.find({});
        return bookings;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getBookings = getBookings;
const getIdBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookingModel_1.BookingModel.findById(id);
        return book !== null ? book : "no found id";
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getIdBooking = getIdBooking;
const addBooking = (addNewBooking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = new bookingModel_1.BookingModel({
            name: addNewBooking.name,
            orderDate: addNewBooking.orderDate,
            checkIn: addNewBooking.checkIn,
            checkOut: addNewBooking.checkOut,
            idRoom: addNewBooking.idRoom,
            status: addNewBooking.status,
        });
        const book = yield newBook.save();
        return book;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.addBooking = addBooking;
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield bookingModel_1.BookingModel.findByIdAndDelete(id);
        return express_1.response.send(200);
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteBooking = deleteBooking;
const putBooking = (id, putKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookingModel_1.BookingModel.findByIdAndUpdate(id, putKey);
        return book;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.putBooking = putBooking;
