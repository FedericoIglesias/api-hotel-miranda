import { faker } from "@faker-js/faker";
import { AddNewBookingSQL } from "../types";
import { StatusBooking } from "../enum";
import * as bookingService from '../serviceSQL/bookingsServiceSQL'

const createRandomBooking = ():AddNewBookingSQL =>{
    return {
        name: faker.name.fullName(),
        orderDate: new Date(faker.date.past(3)).getTime(),
        checkIn: new Date(faker.date.past(2)).getTime(),
        checkOut: new Date(faker.date.past(1)).getTime(),
        status: faker.helpers.arrayElement([StatusBooking.CheckIn, StatusBooking.CheckOut, StatusBooking.InProgress])
    }
}

for(let i = 0; i < 10; i++){
    const booking = createRandomBooking()
    bookingService.addBooking(booking)
}