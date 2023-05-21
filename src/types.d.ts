import { Mongoose } from "./mongoose/roomModel";
import { StatusBook, StatusRoom, StatusUser, TypeRoom } from "./enum";

export interface Room {
  _id: number;
  photo: any;
  numberRoom: number;
  roomType: TypeRoom;
  amenities: string[];
  price: number;
  offerPercent: number;
  status: StatusRoom;
}
export interface RoomSchema extends Mongoose {
  _id: number;
  photo: any;
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
export interface BookingSchema extends Mongoose{
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
  email: string;
  startDate: number;
  description: string;
  phone: string;
  status: StatusUser;
  password: string;
}
export interface UserSchema extends Mongoose{
  id: number;
  name: string;
  email: string;
  startDate: number;
  description: string;
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
}
export interface ContactSchema extends Mongoose{
  _id: number;
  name: string;
  email: string;
  phone: string;
  date: number;
  subject: string;
}

export type AddNewContact = Omit<Contact, "_id">;
