"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyId = exports.parse = void 0;
const parse = (obj, nameObj, type) => {
    if (typeof obj !== type) {
        throw new Error(`${nameObj} no be ${type}`);
    }
    return obj;
};
exports.parse = parse;
const parseId = (idFromReq) => {
    if (typeof idFromReq !== 'string') {
        throw new Error('Id should be string ');
    }
    if (idFromReq.length !== 24) {
        throw new Error('Id length should be 24 ');
    }
    return idFromReq;
};
const verifyId = (obj) => {
    const id = parseId(obj);
    return id;
};
exports.verifyId = verifyId;
