"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNewUser = exports.parsePhone = void 0;
var bookingsUtils_1 = require("./bookingsUtils");
var parseEmail = function (emailFromReq) {
    if (typeof emailFromReq !== 'string') {
        throw new Error('Email no be string');
    }
    return emailFromReq;
};
var parseStartDate = function (startDateFromReq) {
    if (typeof startDateFromReq !== 'string') {
        throw new Error('StartDate no be string');
    }
    return startDateFromReq;
};
var parseDescription = function (descriptionFromReq) {
    if (typeof descriptionFromReq !== 'string') {
        throw new Error('Description no be string');
    }
    return descriptionFromReq;
};
var parsePhone = function (phoneFromReq) {
    if (typeof phoneFromReq !== 'string') {
        throw new Error('Phone no be string');
    }
    return phoneFromReq;
};
exports.parsePhone = parsePhone;
var parsePassword = function (passwordFromReq) {
    if (typeof passwordFromReq !== 'string') {
        throw new Error('Password no be string');
    }
    return passwordFromReq;
};
var verifyNewUser = function (obj) {
    var newUser = {
        name: (0, bookingsUtils_1.parseName)(obj.name),
        email: parseEmail(obj.email),
        startDate: parseStartDate(obj.startDate),
        description: parseDescription(obj.description),
        phone: (0, exports.parsePhone)(obj.phone),
        status: (0, bookingsUtils_1.parseStatus)(obj.status),
        password: parsePassword(obj.password),
    };
    return newUser;
};
exports.verifyNewUser = verifyNewUser;
