import { Mongoose } from "./mongoose/roomModel";
import { StatusBook, StatusRoom, StatusUser, TypeJob, TypeRoom } from "./enum";

export interface Room {
  _id: number;
  photo: string[];
  numberRoom: number;
  roomType: TypeRoom;
  amenities: string[];
  price: number;
  offerPercent: number;
  status: StatusRoom;
}


export type AddNewRoom = Omit<Room, "_id">;

export interface Booking {
  _id: number;
  name: string;
  orderDate: number;
  checkIn: number;
  checkOut: number;
  idRoom: number;
  status: StatusBook;
}


export type AddNewBooking = Omit<Booking, "_id">;

export interface User {
  _id: number;
  name: string;
  photo: string
  email: string;
  startDate: number;
  job: TypeJob;
  schedule: string,
  phone: string;
  status: StatusUser;
  password: string;
}


export type AddNewUser = Omit<User, "_id">;

export interface Contact {
  _id: number;
  name: string;
  email: string;
  phone: string;
  date: number;
  subject: string;
  photo: string,
  comment: string
}

export type AddNewContact = Omit<Contact, "_id">;
