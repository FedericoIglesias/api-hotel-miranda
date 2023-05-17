"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var roomsRoutes_1 = require("./routes/roomsRoutes");
var bookingsRoutes_1 = require("./routes/bookingsRoutes");
var usersRoutes_1 = require("./routes/usersRoutes");
var contactRoutes_1 = require("./routes/contactRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/rooms", roomsRoutes_1.default);
app.use("/bookings", bookingsRoutes_1.default);
app.use("/users", usersRoutes_1.default);
app.use("/contacts", contactRoutes_1.default);
app.listen(port, function () {
    console.log("Server run in the port ".concat(port));
});
