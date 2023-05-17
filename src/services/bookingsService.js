"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBooking = exports.deleteBooking = exports.addBooking = exports.getIdBooking = exports.getBookings = void 0;
var express_1 = require("express");
var mongo_1 = require("../mongo");
var bookingModel_1 = require("../mongoose/bookingModel");
var getBookings = function () {
    (0, mongo_1.connectMongoDB)();
    bookingModel_1.BookingModel.find({})
        .then(function (b) { return express_1.response.json(b); })
        .catch(function (error) { return express_1.response.json(error); });
};
exports.getBookings = getBookings;
var getIdBooking = function (id) {
    (0, mongo_1.connectMongoDB)();
    bookingModel_1.BookingModel.findById(id)
        .then(function (b) { return express_1.response.json(b); })
        .catch(function (error) { return express_1.response.json(error); });
};
exports.getIdBooking = getIdBooking;
var addBooking = function (addNewBooking) {
    (0, mongo_1.connectMongoDB)();
    var newBook = new bookingModel_1.BookingModel({
        name: addNewBooking.name,
        orderDate: addNewBooking.orderDate,
        checkIn: addNewBooking.checkIn,
        checkOut: addNewBooking.checkOut,
        status: addNewBooking.status,
    });
    newBook.save()
        .then(function (b) { return express_1.response.json(b); })
        .catch(function (error) { return express_1.response.json(error); });
};
exports.addBooking = addBooking;
var deleteBooking = function (id) {
    (0, mongo_1.connectMongoDB)();
    bookingModel_1.BookingModel.findByIdAndDelete(id)
        .then(function () { return express_1.response.json(200); })
        .catch(function (error) { return express_1.response.json(error); });
};
exports.deleteBooking = deleteBooking;
var putBooking = function (id, putKey) {
    (0, mongo_1.connectMongoDB)();
    bookingModel_1.BookingModel.findByIdAndUpdate(id, putKey)
        .then(function (b) { return express_1.response.json(b); })
        .catch(function (error) { return express_1.response.json(error); });
};
exports.putBooking = putBooking;
