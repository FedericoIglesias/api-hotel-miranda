import bookingsData from "../data/bookings.json";
import { write } from "../functions";
import { AddNewBooking, Booking } from "../types";

let bookings = bookingsData;

export const getBookings = () => bookings;

export const getIdBooking = (id: number): Booking | undefined => {
  return bookings.find((bookings) => bookings.id === id);
};

export const addBooking = (addNewBooking: AddNewBooking): Booking => {
  const newBooking = {
    id: Math.max(...bookings.map((bookings) => bookings.id)) + 1,
    ...addNewBooking,
  };
  bookings.push(newBooking);
  write("src/data/bookings.json", bookings);
  return newBooking;
};

export const deleteBooking = (id: number): Booking[] => {
  bookings = bookings.filter((r) => r.id !== id);
  write("src/data/bookings.json", bookings);
  return bookings;
};
