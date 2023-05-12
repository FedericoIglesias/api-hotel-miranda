import { OkPacket, RowDataPacket } from "mysql2";
import { callDB } from "../mySQL";
import { AddNewBookingSQL, BookingSQL } from "../types";


export const getBookings = async (): Promise<BookingSQL[]> => {
    let bookings: BookingSQL[]  = await callDB<BookingSQL[]>('SELECT * FROM bookings')
    return bookings
}

export const getIdBooking = async (id: number) => {
    const book = await callDB("SELECT * FROM bookings INNER JOIN rooms ON rooms.id=bookings.idRoom WHERE bookings.id =? ", [id]);
    return book
};

export const addBooking = async (addNewBooking: AddNewBookingSQL) => {
    await callDB(
        "INSERT INTO bookings (name, orderDate, checkIn, checkOut, idRoom, status) VALUES (?,?,?,?,?,?)",
        [
            addNewBooking.name,
            addNewBooking.orderDate,
            addNewBooking.checkIn,
            addNewBooking.checkOut,
            addNewBooking.idRoom,
            addNewBooking.status
        ])
};

export const deleteBooking = async (id: number) => {
    await callDB("DELETE FROM bookings WHERE id= ?", [id])
};

export const updateBooking = async (putBooking: any) => {
    await callDB(
        "UPDATE bookings SET name=?, orderDate=?, checkIn=?, checkOut=?, idRoom=?, status=?  WHERE id = ?", 
        [
            putBooking.name,
            putBooking.orderDate,
            putBooking.checkIn,
            putBooking.checkOut,
            putBooking.idRoom,
            putBooking.status,
            putBooking.id,
        ])
}