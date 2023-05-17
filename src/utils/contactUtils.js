"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNewcontact = void 0;
var bookingsUtils_1 = require("./bookingsUtils");
var parseString = function (obj, nameObj) {
    if (typeof obj !== 'string') {
        throw new Error("".concat(nameObj, " no be string"));
    }
    return obj;
};
var parseNumber = function (obj, nameObj, type) {
    if (typeof obj !== type) {
        throw new Error("".concat(nameObj, " no be ").concat(type));
    }
    return obj;
};
var verifyNewcontact = function (obj) {
    var newContact = {
        name: (0, bookingsUtils_1.parseName)(obj.name),
        email: parseString(obj.email, 'email'),
        phone: parseNumber(obj.phone, 'phone', 'number'),
        date: parseString(obj.date, 'date'),
        subject: parseString(obj.subject, "subject")
    };
    return newContact;
};
exports.verifyNewcontact = verifyNewcontact;
