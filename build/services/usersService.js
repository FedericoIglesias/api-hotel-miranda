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
exports.putUser = exports.deleteUser = exports.addUser = exports.getIdUser = exports.getUsers = void 0;
const userModel_1 = require("../mongoose/userModel");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.UserModel.find({});
        return users;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getUsers = getUsers;
const getIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.UserModel.findById(id);
        return user !== null ? user : "Id no found";
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getIdUser = getIdUser;
const addUser = (addNewUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new userModel_1.UserModel({
            name: addNewUser.name,
            email: addNewUser.email,
            photo: addNewUser.photo,
            startDate: addNewUser.startDate,
            job: addNewUser.job,
            schedule: addNewUser.schedule,
            phone: addNewUser.phone,
            status: addNewUser.status,
            password: addNewUser.password,
        });
        yield newUser.save();
        return newUser;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.addUser = addUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel_1.UserModel.findByIdAndDelete(id);
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteUser = deleteUser;
const putUser = (id, putUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel_1.UserModel.findByIdAndUpdate(id, putUser);
        return yield userModel_1.UserModel.findById(id);
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.putUser = putUser;
