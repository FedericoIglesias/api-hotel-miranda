import { StatusBook } from "../enum";
import { parse } from "../functions";
import { AddNewBooking } from "../types";

const parseStatus = (statusFromReq: any): StatusBook => {
    if (!Object.values(StatusBook).includes(statusFromReq)) {
      throw new Error("Status not be StatusBook");
    }
    return statusFromReq;
  };
  

export const verifyNewBooking = (obj: any): AddNewBooking =>{
    const newBook = {
        name: parse(obj.name, 'name', 'string'),
        orderDate: parse(obj.orderDate, 'orderDate', 'date'),
        checkIn: parse(obj.checkIn, 'checkIn', 'date'),
        checkOut: parse(obj.checkOut, 'checkOut', 'date'),
        idRoom: parse(obj.idRoom,'idRoom', 'number'),
        status:  parseStatus(obj.status)
    }
    return newBook
} 