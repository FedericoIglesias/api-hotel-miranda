import { faker } from "@faker-js/faker";
import { AddNewBookingSQL } from "../types";
import { StatusBooking } from "../enum";
import * as bookingService from "../serviceSQL/bookingsServiceSQL";

const createRandomBooking = (): AddNewBookingSQL => {
  return {
    name: faker.name.fullName(),
    orderDate: new Date(faker.date.past(3)).getTime(),
    checkIn: new Date(faker.date.past(2)).getTime(),
    checkOut: new Date(faker.date.past(1)).getTime(),
    idRoom : faker.datatype.number({min:1, max:4}),
    status: faker.helpers.arrayElement([
      StatusBooking.CheckIn,
      StatusBooking.CheckOut,
      StatusBooking.InProgress,
    ]),
  };
};

export const generateBooking = async (cant: number) => {
  for (let i = 0; i < cant; i++) {
    const booking = createRandomBooking();
    await bookingService.addBooking(booking);
  }
}
