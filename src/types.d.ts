import { RowDataPacket } from "mysql2";
import { StatusRoom, TypeRoom, StatusBooking } from "./enum";

export interface Room {
  id: number;
  photo: any;
  numberRoom: number;
  roomType: TypeRoom;
  amenities: string[];
  price: number;
  offerPercent: number;
  status: StatusRoom;
}
export interface RoomSQL extends RowDataPacket {
  id: number;
  photo: any;
  numberRoom: number;
  roomType: TypeRoom;
  amenities: string[];
  price: number;
  offerPercent: number;
  status: StatusRoom;
}

export type AddNewRoom = Omit<Room, "id">;
export type AddNewRoomSQL = Omit<RoomSQL, "id">;

export interface Booking {
  id: number;
  name: string;
  orderDate: number;
  checkIn: number;
  checkOut: number;
  idRoom: number;
  status: StatusBooking; 
}
export interface BookingSQL extends RowDataPacket {
  id: number;
  name: string;
  orderDate: number;
  checkIn: number;
  checkOut: number;
  idRoom: number;
  status: StatusBooking; 
}

export type AddNewBooking = Omit<Booking, "id">;
export type AddNewBookingSQL = Omit<BookingSQL, "id">;

export interface User {
  id: number;
  name: string;
  email: string;
  startDate: number;
  description: string;
  phone: number;
  status: string;
  password: string;
}
export interface UserSQL extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  startDate: number;
  description: string;
  phone: string;
  status: string;
  password: string;
}

export type AddNewUser = Omit<User, "id">;
export type AddNewUserSQL = Omit<UserSQL, "id">;

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: number;
  date: string;
  subject: string;
}
export interface ContactSQL extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: number;
  subject: string;
}

export type AddNewContact = Omit<Contact, "id">;
export type AddNewContactsSQL = Omit<ContactSQL, "id">;


