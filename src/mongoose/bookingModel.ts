import { Schema, model } from "mongoose";
import { StatusBook } from "../enum";

const bookingSchema = new Schema({
    name: String,
    orderDate: Date,
    checkIn: Date,
    checkOut: Date,
    status: {type: StatusBook}
  })


export const BookingModel = model('Booking', bookingSchema)