import { Mongoose } from "./mongoose/roomModel";
import { StatusRoom, TypeRoom } from "./enum";

export interface Room {
  id: number;
  photo: any;
  numberRoom: string;
  roomType: TypeRoom;
  amenities: string;
  price: number;
  offerPercent: number;
  status: StatusRoom;
}
export interface RoomSchema extends Mongoose {
  id: number;
  photo: any;
  numberRoom: string;
  roomType: TypeRoom;
  amenities: string;
  price: number;
  offerPercent: number;
  status: StatusRoom;
}

export type AddNewRoom = Omit<Room, "id">;

export interface Booking {
  id: number;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  status: boolean;
}
export interface BookingSchema extends Mongoose{
  id: number;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  status: boolean;
}

export type AddNewBooking = Omit<Booking, "id">;

export interface User {
  id: number;
  name: string;
  email: string;
  startDate: string;
  description: string;
  phone: string;
  status: boolean;
  password: string;
}
export interface UserSchema extends Mongoose{
  id: number;
  name: string;
  email: string;
  startDate: string;
  description: string;
  phone: string;
  status: boolean;
  password: string;
}

export type AddNewUser = Omit<User, "id">;

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: number;
  date: string;
  subject: string;
}
export interface ContactSchema extends Mongoose{
  id: number;
  name: string;
  email: string;
  phone: number;
  date: string;
  subject: string;
}

export type AddNewContact = Omit<Contact, "id">;
