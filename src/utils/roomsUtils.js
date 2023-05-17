"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIdDelete = exports.verifyNewRoom = void 0;
var enum_1 = require("../enum");
var parseFoto = function (fotoFromReq) {
    if (typeof fotoFromReq !== "object") {
        throw new Error('Photo not be a object');
    }
    return fotoFromReq;
};
var parseNumberRoom = function (numberRoomFromReq) {
    if (typeof numberRoomFromReq !== "string") {
        throw new Error("NumberRoom no be string");
    }
    return numberRoomFromReq;
};
var parseRoomType = function (roomTypeFromReq) {
    if (!Object.values(enum_1.TypeRoom).includes(roomTypeFromReq)) {
        throw new Error("RoomType not be TypeRoom");
    }
    return roomTypeFromReq;
};
var parseAmenities = function (amenitiesFromReq) {
    if (typeof amenitiesFromReq !== "string") {
        throw new Error("Amenities not be string");
    }
    return amenitiesFromReq;
};
var parsePrice = function (priceFromReq) {
    if (typeof priceFromReq !== "number") {
        throw new Error("price not be number");
    }
    return priceFromReq;
};
var parseOfferPercent = function (OfferPercentFromReq) {
    if (typeof OfferPercentFromReq !== "number") {
        throw new Error("OfferPercenter not be number");
    }
    return OfferPercentFromReq;
};
var parseStatus = function (statusFromReq) {
    if (!Object.values(enum_1.StatusRoom).includes(statusFromReq)) {
        throw new Error("Status not be StatusRoom");
    }
    return statusFromReq;
};
var verifyNewRoom = function (obj) {
    var createRoom = {
        foto: parseFoto(obj.foto),
        numberRoom: parseNumberRoom(obj.numberRoom),
        roomType: parseRoomType(obj.roomType),
        amenities: parseAmenities(obj.amenities),
        price: parsePrice(obj.price),
        offerPercent: parseOfferPercent(obj.offerPercent),
        status: parseStatus(obj.status),
    };
    return createRoom;
};
exports.verifyNewRoom = verifyNewRoom;
var parseId = function (idFromReq) {
    if (typeof idFromReq !== 'number') {
        throw new Error('Id should be number ');
    }
    return idFromReq;
};
var verifyIdDelete = function (obj) {
    var idDelete = parseId(obj.id);
    return idDelete;
};
exports.verifyIdDelete = verifyIdDelete;
