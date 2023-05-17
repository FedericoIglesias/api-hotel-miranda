"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var enum_1 = require("../enum");
var roomSchema = new mongoose_2.Schema({
    photo: String,
    numberRoom: String,
    roomType: enum_1.TypeRoom,
    amenities: String,
    price: Number,
    offerPercent: Number,
    status: enum_1.StatusRoom
});
exports.RoomModel = (0, mongoose_1.model)('Room', roomSchema);
// const room1 = new Room({
//   photo: 'asd',
//   numberRoom: 'asd',
//   roomType: TypeRoom.Deluxe,
//   amenities: 'asd',
//   price: 0,
//   offerPercent: 0,
//   status: StatusRoom.Available
// })
