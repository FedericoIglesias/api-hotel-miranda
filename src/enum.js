"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUser = exports.StatusBook = exports.TypeRoom = exports.StatusRoom = void 0;
var StatusRoom;
(function (StatusRoom) {
    StatusRoom["Booked"] = "Booked";
    StatusRoom["Available"] = "Available";
})(StatusRoom = exports.StatusRoom || (exports.StatusRoom = {}));
var TypeRoom;
(function (TypeRoom) {
    TypeRoom["SingleBed"] = "Single Bed";
    TypeRoom["DoubleBed"] = "Double Bed";
    TypeRoom["Deluxe"] = "Deluxe";
})(TypeRoom = exports.TypeRoom || (exports.TypeRoom = {}));
var StatusBook;
(function (StatusBook) {
    StatusBook["InProgress"] = "In Progress";
    StatusBook["CheckIn"] = "Check In";
    StatusBook["checkOut"] = "Check Out";
})(StatusBook = exports.StatusBook || (exports.StatusBook = {}));
var StatusUser;
(function (StatusUser) {
    StatusUser["Active"] = "Active";
    StatusUser["Inactive"] = "Inactive";
})(StatusUser = exports.StatusUser || (exports.StatusUser = {}));
