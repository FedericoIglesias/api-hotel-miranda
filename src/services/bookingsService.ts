import { response } from "express";
import { BookingModel } from "../mongoose/bookingModel";
import { AddNewBooking, Booking } from "../types";

export const getBookings = async (): Promise<Booking[]> => {
  try {
    const bookings = await BookingModel.find({});
    return bookings;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const getIdBooking = async (id: string): Promise<Booking | string> => {
  try {
    const book = await BookingModel.findById(id);
    return book !== null ? book : "no found id";
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const addBooking = async (
  addNewBooking: AddNewBooking
): Promise<any> => {
  try {
    const newBook = new BookingModel({
      name: addNewBooking.name,
      orderDate: addNewBooking.orderDate,
      checkIn: addNewBooking.checkIn,
      checkOut: addNewBooking.checkOut,
      idRoom: addNewBooking.idRoom,
      status: addNewBooking.status,
    });
    const book = await newBook.save();
    return book;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};
export const deleteBooking = async (id: string) => {
  try {
    await BookingModel.findByIdAndDelete(id);
    return response.send(200);
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const putBooking = async (
  id: string,
  putKey: Partial<Booking>
): Promise<Partial<Booking>> => {
  try {
    const book = await BookingModel.findByIdAndUpdate(id, putKey);
    return book;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};
