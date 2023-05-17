import { faker } from "@faker-js/faker";
import * as bookingService from "../services/bookingsService";
import { AddNewBooking } from "../types";
import { StatusBook } from "../enum";

const createRandomBooking = (): AddNewBooking => {
  return {
    name: faker.name.fullName(),
    orderDate: new Date(faker.date.past(3)),
    checkIn: new Date(faker.date.past(2)),
    checkOut: new Date(faker.date.past(1)),
    idRoom : faker.datatype.number({min:1, max:4}),
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