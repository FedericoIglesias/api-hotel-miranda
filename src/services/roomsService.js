"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.addRoom = exports.getIdRoom = exports.getRooms = void 0;
var express_1 = require("express");
var roomModel_1 = require("../mongoose/roomModel");
var mongo_1 = require("../mongo");
var getRooms = function () {
    (0, mongo_1.connectMongoDB)();
    roomModel_1.RoomModel.find({}).then(function (r) {
        express_1.response.json(r);
    });
};
exports.getRooms = getRooms;
var getIdRoom = function (numberRoom) {
    (0, mongo_1.connectMongoDB)();
    roomModel_1.RoomModel.find({ numberRoom: numberRoom }).then(function (r) {
        express_1.response.json(r);
    });
};
exports.getIdRoom = getIdRoom;
var addRoom = function (addNewRoom) {
    (0, mongo_1.connectMongoDB)();
    var newRoom = new roomModel_1.RoomModel({
        photo: addNewRoom.photo,
        numberRoom: addNewRoom.numberRoom,
        roomType: addNewRoom.roomType,
        amenities: addNewRoom.amenities,
        price: addNewRoom.price,
        offerPercent: addNewRoom.offerPercent,
        status: addNewRoom.status,
    });
    newRoom.save().then(function (saveRoom) {
        express_1.response.json(saveRoom);
    });
};
exports.addRoom = addRoom;
var deleteRoom = function (numberRoom) {
    (0, mongo_1.connectMongoDB)();
    roomModel_1.RoomModel.deleteOne({ numberRoom: numberRoom }).then(function () {
        express_1.response.send(200);
    }).catch(function (error) { return express_1.response.json(error); });
};
exports.deleteRoom = deleteRoom;
