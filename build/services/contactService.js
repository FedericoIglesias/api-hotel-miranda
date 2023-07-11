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
exports.putContacts = exports.deleteContacts = exports.addContact = exports.getIdContact = exports.getContacts = void 0;
const contactModel_1 = require("../mongoose/contactModel");
const express_1 = require("express");
const getContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield contactModel_1.ContactModel.find({});
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getContacts = getContacts;
const getIdContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactModel_1.ContactModel.findById(id);
        return contact !== null ? contact : "Id no found";
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getIdContact = getIdContact;
const addContact = (addNewContact) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newContact = new contactModel_1.ContactModel({
            name: addNewContact.name,
            email: addNewContact.email,
            phone: addNewContact.phone,
            date: addNewContact.date,
            subject: addNewContact.subject,
            comment: addNewContact.comment,
            photo: addNewContact.photo
        });
        const contact = yield newContact.save();
        return contact;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.addContact = addContact;
const deleteContacts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield contactModel_1.ContactModel.findByIdAndDelete(id);
        return express_1.response.send(200);
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteContacts = deleteContacts;
const putContacts = (id, putKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactModel_1.ContactModel.findByIdAndUpdate(id, putKey);
        return contact;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.putContacts = putContacts;
