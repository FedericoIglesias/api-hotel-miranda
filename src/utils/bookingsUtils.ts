import { AddNewBooking, Booking } from "../types";


const parseName = (nameFromReq: any): string =>{
    if(typeof nameFromReq !== 'string'){
        throw new Error ('Name not be string')
    }
    return nameFromReq
}
const parseOrderDate = (ordeDateFromReq: any): string =>{
    if(typeof ordeDateFromReq !== 'string'){
        throw new Error ('ordeDate not be string')
    }
    return ordeDateFromReq
}
const parseCheckIn = (checkInFromReq: any): string =>{
    if(typeof checkInFromReq !== 'string'){
        throw new Error ('checkIn not be string')
    }
    return checkInFromReq
}
const parseCheckOut = (checkOutFromReq: any): string =>{
    if(typeof checkOutFromReq !== 'string'){
        throw new Error ('checkOut not be string')
    }
    return checkOutFromReq
}

const parseStatus = (statusFromReq: any): boolean =>{
    if(typeof statusFromReq !== 'boolean'){
        throw new Error ('status not be boolean')
    }
    return statusFromReq
}


export const verifyNewBooking = (obj: any): AddNewBooking =>{
    const newBook = {
        name: parseName(obj.name),
        orderDate: parseOrderDate(obj.orderDate),
        checkIn: parseCheckIn(obj.checkIn),
        checkOut: parseCheckOut(obj.checkOut),
        status:  parseStatus(obj.status)
    }
    return newBook
} 