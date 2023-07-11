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
exports.putRoom = exports.deleteRoom = exports.addRoom = exports.getIdRoom = exports.getRooms = void 0;
const roomModel_1 = require("../mongoose/roomModel");
const getRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield roomModel_1.RoomModel.find({});
        return rooms;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getRooms = getRooms;
const getIdRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield roomModel_1.RoomModel.findById(id);
        return room !== null ? room : "Id no found";
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getIdRoom = getIdRoom;
const addRoom = (addNewRoom) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRoom = new roomModel_1.RoomModel({
            photo: addNewRoom.photo,
            numberRoom: addNewRoom.numberRoom,
            roomType: addNewRoom.roomType,
            amenities: addNewRoom.amenities,
            price: addNewRoom.price,
            offerPercent: addNewRoom.offerPercent,
            status: addNewRoom.status,
        });
        const room = yield newRoom.save();
        return room;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.addRoom = addRoom;
const deleteRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield roomModel_1.RoomModel.findByIdAndDelete(id);
        return 'response.send(200)';
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteRoom = deleteRoom;
const putRoom = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield roomModel_1.RoomModel.findByIdAndUpdate(id, obj);
        const room = yield (0, exports.getIdRoom)(id);
        return room;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.putRoom = putRoom;
