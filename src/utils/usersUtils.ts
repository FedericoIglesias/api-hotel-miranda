import { StatusUser } from "../enum";
import { parse } from "../functions";
import { AddNewUser } from "../types";


const parseStatus = (statusFromReq: any): StatusUser => {
    if (!Object.values(StatusUser).includes(statusFromReq)) {
      throw new Error("Status not be StatusUser");
    }
    return statusFromReq;
  };
  

export const verifyNewUser = (obj: any): AddNewUser => {
const newUser = {
    name: parse(obj.name, 'name', 'string'),
    email: parse(obj.email, 'email', 'string'),
    startDate: parse(obj.startDate, 'startDate', 'number'),
    description: parse(obj.description, 'description', 'string'),
    phone: parse(obj.phone, 'phone', 'string'),
    status: parseStatus(obj.status),
    password: parse(obj.password, 'password', 'string'),
}
return newUser
}