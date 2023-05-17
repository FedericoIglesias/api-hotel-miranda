"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putContacts = exports.deleteContacts = exports.addContact = exports.getIdContact = exports.getContacts = void 0;
var mongo_1 = require("../mongo");
var contactModel_1 = require("../mongoose/contactModel");
var express_1 = require("express");
var getContacts = function () {
    (0, mongo_1.connectMongoDB)();
    contactModel_1.ContactModel.find({}).then(function (c) {
        express_1.response.json(c);
    });
};
exports.getContacts = getContacts;
var getIdContact = function (id) {
    (0, mongo_1.connectMongoDB)();
    contactModel_1.ContactModel.findById(id).then(function (c) {
        express_1.response.json(c);
    });
};
exports.getIdContact = getIdContact;
var addContact = function (addNewContact) {
    (0, mongo_1.connectMongoDB)();
    var newContact = new contactModel_1.ContactModel({
        name: addNewContact.name,
        email: addNewContact.email,
        phone: addNewContact.phone,
        date: addNewContact.date,
        subject: addNewContact.subject,
    });
    newContact.save().then(function (c) {
        express_1.response.json(c);
    }).catch(function (error) {
        return express_1.response.json(error);
    });
};
exports.addContact = addContact;
var deleteContacts = function (id) {
    (0, mongo_1.connectMongoDB)();
    contactModel_1.ContactModel.findByIdAndDelete(id).then(function (c) {
        return express_1.response.send(200);
    }).catch(function (error) { return express_1.response.json(error); });
};
exports.deleteContacts = deleteContacts;
var putContacts = function (id, putKey) {
    (0, mongo_1.connectMongoDB)();
    contactModel_1.ContactModel.findByIdAndUpdate(id, putKey).then(function (c) {
        return express_1.response.json(c);
    }).catch(function (error) { return express_1.response.json(error); });
};
exports.putContacts = putContacts;
