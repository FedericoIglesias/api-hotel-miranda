"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contactService = require("../services/contactService");
var roomsUtils_1 = require("../utils/roomsUtils");
var contactUtils_1 = require("../utils/contactUtils");
var routerContact = express_1.default.Router();
routerContact.get("/", function (req, res) {
    res.send(contactService.getContacts());
});
routerContact.get("/:id", function (req, res) {
    var contact = contactService.getIdContact(+req.params.id);
    return contact !== undefined ? res.send(contact) : res.send(404);
});
routerContact.delete("/", function (req, res) {
    try {
        var id = (0, roomsUtils_1.verifyIdDelete)(req.body);
        var newContacts = contactService.deleteContacts(id);
        res.send(newContacts);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerContact.post("/", function (req, res) {
    try {
        var veryfycontactReq = (0, contactUtils_1.verifyNewcontact)(req.body);
        var createNewContact = contactService.addContact(veryfycontactReq);
        res.json(createNewContact);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerContact.put("/", function (req, res) { });
exports.default = routerContact;
