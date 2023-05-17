"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var roomsService = require("../services/roomsService");
var roomsUtils_1 = require("../utils/roomsUtils");
var routerRoom = express_1.default.Router();
routerRoom.get("/", function (req, res) {
    res.send(roomsService.getRooms());
});
routerRoom.get("/:id", function (req, res) {
    var room = roomsService.getIdRoom(+req.params.id);
    return room !== undefined ? res.send(room) : res.send(404);
});
routerRoom.delete("/", function (req, res) {
    try {
        var id = (0, roomsUtils_1.verifyIdDelete)(req.body);
        var newRooms = roomsService.deleteRoom(id);
        res.send(newRooms);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerRoom.post("/", function (req, res) {
    try {
        var veryfyRoomReq = (0, roomsUtils_1.verifyNewRoom)(req.body);
        var createNewRoom = roomsService.addRoom(veryfyRoomReq);
        res.json(createNewRoom);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerRoom.put("/", function (req, res) { });
exports.default = routerRoom;
