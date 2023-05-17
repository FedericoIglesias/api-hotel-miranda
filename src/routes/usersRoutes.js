"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersService = require("../services/usersService");
var roomsUtils_1 = require("../utils/roomsUtils");
var usersUtils_1 = require("../utils/usersUtils");
var routerUser = express_1.default.Router();
routerUser.get("/", function (req, res) {
    res.send(usersService.getUsers());
});
routerUser.get("/:id", function (req, res) {
    var User = usersService.getIdUser(+req.params.id);
    return User !== undefined ? res.send(User) : res.send(404);
});
routerUser.delete("/", function (req, res) {
    try {
        var id = (0, roomsUtils_1.verifyIdDelete)(req.body);
        var newUsers = usersService.deleteUser(id);
        res.send(newUsers);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerUser.post("/", function (req, res) {
    try {
        var veryfyUserReq = (0, usersUtils_1.verifyNewUser)(req.body);
        var createNewUser = usersService.addUser(veryfyUserReq);
        res.json(createNewUser);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
routerUser.put("/", function (req, res) { });
exports.default = routerUser;
