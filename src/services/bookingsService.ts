import { response } from "express";
import { connectMongoDB } from "../mongo";
import { BookingModel } from "../mongoose/bookingModel";
import { AddNewBooking, Booking } from "../types";

export const getBookings = () => {
  connectMongoDB();
  BookingModel.find({})
    .then((b) => response.json(b))
    .catch((error) => response.json(error));
};

export const getIdBooking = (id: string) => {
  connectMongoDB()
  BookingModel.findById(id)
  .then(b => response.json(b))
  .catch(error => response.json(error))
};

export const addBooking = (addNewBooking: AddNewBooking) => {
  connectMongoDB()
  const newBook = new BookingModel({
    name: addNewBooking.name ,
    orderDate: addNewBooking.orderDate ,
    checkIn: addNewBooking.checkIn ,
    checkOut: addNewBooking.checkOut ,
    status: addNewBooking.status ,
  })
  newBook.save()
  .then(b => response.json(b))
  .catch(error => response.json(error))
};

export const deleteBooking = (id: string) => {
  connectMongoDB()
  BookingModel.findByIdAndDelete(id)
  .then(() => response.json(200))
  .catch(error => response.json(error))
};

export const putBooking = (id: string, putKey: Partial<Booking>) => {
  connectMongoDB()
  BookingModel.findByIdAndUpdate(id, putKey)
  .then(b => response.json(b))
  .catch(error => response.json(error))
}