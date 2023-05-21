import { faker } from "@faker-js/faker";
import { AddNewRoom } from "../types";
import { StatusRoom, TypeRoom } from "../enum";
import * as roomService from "../services/roomsService";

const createRandomRoom = (): AddNewRoom => {
  return {
    photo: [faker.image.avatar(), faker.image.avatar(), faker.image.avatar()],
    numberRoom: faker.number.int({ max: 20 }),
    roomType: faker.helpers.arrayElement([
      TypeRoom.Deluxe,
      TypeRoom.DoubleBed,
      TypeRoom.SingleBed,
    ]),
    amenities: faker.helpers.arrayElements([
      "Wifi",
      "TV",
      "Air conditioner",
      "Breakfast",
      "Cleaning",
      "Grocery",
    ]),
    price: faker.number.int({ max: 1000, min: 500 }),
    offerPercent: faker.number.int({ max: 50 }),
    status: faker.helpers.arrayElement([
      StatusRoom.Available,
      StatusRoom.Booked,
    ]),
  };
};

export const generateRoom = async (cant: number) => {
  for (let i = 0; i < cant; i++) {
    const room = createRandomRoom();
    await roomService.addRoom(room);
  }
};
