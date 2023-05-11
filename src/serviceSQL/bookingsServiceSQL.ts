import { OkPacket, RowDataPacket } from "mysql2";
import { callDB } from "../mySQL";
import { AddNewBooking, AddNewBookingSQL, Booking } from "../types";


export const getBookings = async () => {
    let bookings: RowDataPacket[] = await callDB('SELECT * FROM bookings');
    return(
        bookings.forEach(element => {
            
        });
    )
}

export const getIdBooking = async (id: number) => {
  return await callDB("SELECT * FROM bookings WHERE id=?", [id]);
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
        "UPDATE bookings SET name=?, orderDate=?, checkIn=?, checkOut=?, status=?  WHERE id = ?", 
        [
            putBooking.name,
            putBooking.orderDate,
            putBooking.checkIn,
            putBooking.checkOut,
            putBooking.status,
            putBooking.id,
        ])
}