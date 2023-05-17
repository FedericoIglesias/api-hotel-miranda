"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNewBooking = exports.parseStatus = exports.parseName = void 0;
var parseName = function (nameFromReq) {
    if (typeof nameFromReq !== 'string') {
        throw new Error('Name not be string');
    }
    return nameFromReq;
};
exports.parseName = parseName;
var parseOrderDate = function (ordeDateFromReq) {
    if (typeof ordeDateFromReq !== 'string') {
        throw new Error('ordeDate not be string');
    }
    return ordeDateFromReq;
};
var parseCheckIn = function (checkInFromReq) {
    if (typeof checkInFromReq !== 'string') {
        throw new Error('checkIn not be string');
    }
    return checkInFromReq;
};
var parseCheckOut = function (checkOutFromReq) {
    if (typeof checkOutFromReq !== 'string') {
        throw new Error('checkOut not be string');
    }
    return checkOutFromReq;
};
var parseStatus = function (statusFromReq) {
    if (typeof statusFromReq !== 'boolean') {
        throw new Error('status not be boolean');
    }
    return statusFromReq;
};
exports.parseStatus = parseStatus;
var verifyNewBooking = function (obj) {
    var newBook = {
        name: (0, exports.parseName)(obj.name),
        orderDate: parseOrderDate(obj.orderDate),
        checkIn: parseCheckIn(obj.checkIn),
        checkOut: parseCheckOut(obj.checkOut),
        status: (0, exports.parseStatus)(obj.status)
    };
    return newBook;
};
exports.verifyNewBooking = verifyNewBooking;
