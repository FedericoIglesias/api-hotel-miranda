import { StatusRoom, TypeRoom } from "./enum";

export interface Room {
  id: number;
  foto: any;
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

export type AddNewBooking = Omit<Booking, "id">;

export interface Users {
  id: number;
  name: string;
  email: string;
  startDate: string;
  description: string;
  conctac: number;
  status: boolean;
  password: string;
}

export type AddNewUsers = Omit<Users, "id">;

export interface Contact {
  id: number;
  name: string;
  email: string;
  contact: string;
  date: string;
  subject: string;
}

export type AddNewContact = Omit<Contact, "id">;
