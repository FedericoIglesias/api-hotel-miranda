import { StatusRoom, TypeRoom } from "./enum";

export interface Room {
  id: number;
  photo: any;
  numberRoom: number;
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
  status: string; 
}
export interface BookingSQL {
  id?: number;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  status: string; 
}

export type AddNewBooking = Omit<Booking, "id">;
export type AddNewBookingSQL = Omit<BookingSQL, "id">;

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

export type AddNewUser = Omit<User, "id">;

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: number;
  date: string;
  subject: string;
}

export type AddNewContact = Omit<Contact, "id">;


interface RoomSQL extends RowDataPacket{
  
}