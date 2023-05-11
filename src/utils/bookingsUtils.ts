import { StatusBooking } from "../enum";
import { parse } from "../functions";
import { AddNewBooking, AddNewBookingSQL, Booking } from "../types";


export const parseStatus = (statusFromReq: any): StatusBooking =>{
    if(!Object.values(StatusBooking).includes(statusFromReq)){
        throw new Error ('status not be string')
    }
    return statusFromReq
}


export const verifyNewBooking = (obj: any): AddNewBooking =>{
    const newBook = {
        name: parse(obj.name,'name','string'),
        orderDate: parse(obj.orderDate,'orderDate','number'),
        checkIn: parse(obj.checkIn,'checkIn','number'),
        checkOut: parse(obj.checkOut,'checkOut','number'),
        idRoom: parse(obj.idRoom, 'idRoom', 'number'),
        status:  parseStatus(obj.status)
    }
    return newBook
} 