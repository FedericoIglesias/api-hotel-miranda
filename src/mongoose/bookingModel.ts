import { Schema, model } from "mongoose";
import { StatusBook } from "../enum";

const bookingSchema = new Schema({
    name: String,
    orderDate: Number,
    checkIn: Number,
    checkOut: Number,
    idRoom: Number,
    status: {type: StatusBook}
  })


export const BookingModel = model('Booking', bookingSchema)