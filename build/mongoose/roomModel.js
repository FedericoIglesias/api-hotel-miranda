"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const enum_1 = require("../enum");
const roomSchema = new mongoose_2.Schema({
    photo: [String],
    numberRoom: String,
    roomType: { type: enum_1.TypeRoom },
    amenities: [String],
    price: Number,
    offerPercent: Number,
    status: { type: enum_1.StatusRoom }
});
exports.RoomModel = (0, mongoose_1.model)('Room', roomSchema);
