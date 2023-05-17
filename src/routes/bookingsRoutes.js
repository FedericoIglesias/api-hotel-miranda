"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookingsService = require("../services/bookingsService");
var bookingsUtils_1 = require("../utils/bookingsUtils");
var roomsUtils_1 = require("../utils/roomsUtils");
var routerBooking = express_1.default.Router();
routerBooking.get("/", function (req, res) {
    res.send(bookingsService.getBookings());
});
routerBooking.get("/:id", function (req, res) {
    var room = bookingsService.getIdBooking(+req.params.id);
    return room !== undefined ? res.send(room) : res.send(404);
});
routerBooking.delete("/", function (req, res) {
    try {
        var id = (0, roomsUtils_1.verifyIdDelete)(req.body);
        var newRooms = bookingsService.deleteBooking(id);
        res.send(newRooms);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerBooking.post("/", function (req, res) {
    try {
        var veryfyRoomReq = (0, bookingsUtils_1.verifyNewBooking)(req.body);
        var createNewRoom = bookingsService.addBooking(veryfyRoomReq);
        res.json(createNewRoom);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerBooking.put("/", function (req, res) { });
exports.default = routerBooking;
