import { faker } from "@faker-js/faker";
import * as bookingService from "../services/bookingsService";
import { AddNewBooking } from "../types";
import { StatusBook } from "../enum";

const createRandomBooking = (): AddNewBooking => {
  return {
    name: faker.person.fullName(),
    orderDate: new Date(faker.date.past()).getTime(),
    checkIn: new Date(faker.date.past()).getTime(),
    checkOut: new Date(faker.date.past()).getTime(),
    idRoom : faker.number.int({min:1, max:4}),
    status: faker.helpers.arrayElement([
      StatusBook.CheckIn,
      StatusBook.CheckOut,
      StatusBook.InProgress,
    ]),
  };
};

export const generateBooking = async (cant: number) => {
  for (let i = 0; i < cant; i++) {
    const booking = createRandomBooking();
    await bookingService.addBooking(booking);
  }
}