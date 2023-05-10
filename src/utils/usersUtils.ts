import { AddNewUser, AddNewUserSQL } from "../types";
import { parseName, parseStatus } from "./bookingsUtils";

const parseEmail = (emailFromReq: any): string =>{
if(typeof emailFromReq !== 'string'){
    throw new Error('Email no be string')
}
return emailFromReq
}
const parseStartDate = (startDateFromReq: any): string =>{
if(typeof startDateFromReq !== 'string'){
    throw new Error('StartDate no be string')
}
return startDateFromReq
}
const parseDescription = (descriptionFromReq: any): string =>{
if(typeof descriptionFromReq !== 'string'){
    throw new Error('Description no be string')
}
return descriptionFromReq
}
export const parsePhone = (phoneFromReq: any): string =>{
if(typeof phoneFromReq !== 'string'){
    throw new Error('Phone no be string')
}
return phoneFromReq
}
const parsePassword = (passwordFromReq: any): string =>{
if(typeof passwordFromReq !== 'string'){
    throw new Error('Password no be string')
}
return passwordFromReq
}


export const verifyNewUser = (obj: any): AddNewUserSQL => {
const newUser = {
    name: parseName(obj.name),
    email: parseEmail(obj.email),
    startDate: parseStartDate(obj.startDate),
    description: parseDescription(obj.description),
    phone: parsePhone(obj.phone),
    status: obj.status,
    // status: parseStatus(obj.status),
    password: parsePassword(obj.password),
}
return newUser
}