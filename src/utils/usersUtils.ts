import { parse } from "../functions";
import { AddNewUser, AddNewUserSQL } from "../types";



export const verifyNewUser = (obj: any): AddNewUserSQL => {
const newUser = {
    name: parse(obj.name, 'name', 'string'),
    email: parse(obj.email, 'email', 'string'),
    startDate: parse(obj.startDate, 'startDate', 'number'),
    description: parse(obj.description, 'descrciption', 'string'),
    phone: parse(obj.phone, 'phone', 'string'),
    status: parse(obj.status, 'status', 'string'),
    password: parse(obj.password, 'password', 'string'),
}
return newUser
}