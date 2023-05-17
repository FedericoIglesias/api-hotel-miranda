"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
var fs = require("fs");
var write = function (path, obj) {
    fs.writeFileSync(path, JSON.stringify(obj, null, 1));
};
exports.write = write;
