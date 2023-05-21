import { faker } from "@faker-js/faker";
import { AddNewUser } from "../types";
import * as userService from "../services/usersService";
import { StatusUser } from "../enum";
import bcrypt from "bcrypt";

const createRandomUser = async (): Promise<AddNewUser> => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    photo: faker.image.avatar(),
    startDate: new Date(faker.date.past()).getTime(),
    description: faker.lorem.words(10),
    phone: faker.phone.number("###-###-###"),
    status: faker.helpers.arrayElement([
      StatusUser.Active,
      StatusUser.Inactive,
    ]),
    password: await bcrypt.hash(faker.internet.password(), 10),
  };
};

export const generateUser = async (cant: number) => {
  for (let i = 0; i < cant; i++) {
    const user = await createRandomUser();
    await userService.addUser(user);
  }
};
