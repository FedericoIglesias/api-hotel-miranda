import { faker } from "@faker-js/faker";
import { AddNewRoomSQL } from "../types";
import { StatusRoom, TypeRoom } from "../enum";
import * as roomService from '../serviceSQL/roomsServiceSQL'

const createRandomRoom = (): AddNewRoomSQL => {
   return {
    photo: faker.animal.bear(),
    numberRoom: faker.datatype.number({max: 20}),
    roomType: faker.helpers.arrayElement([TypeRoom.Deluxe, TypeRoom.DoubleBed, TypeRoom.SingleBed]),
    amenities: faker.helpers.arrayElements(['Wifi', 'TV', 'Air conditioner', 'Breakfast','Cleaning', 'Grocery']),
    price: faker.datatype.number({max: 1000 , min: 500}),
    offerPercent: faker.datatype.number({max: 50}),
    status: faker.helpers.arrayElement([StatusRoom.Available, StatusRoom.Booked])
}}


for(let i = 0; i < 10; i++ ){
    const room = createRandomRoom()
    roomService.addRoom(room)
}