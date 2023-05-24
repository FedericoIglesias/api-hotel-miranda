import { faker } from "@faker-js/faker";
import { AddNewUser } from "../types";
import * as userService from "../services/usersService";
import { StatusUser, TypeJob } from "../enum";
import bcrypt from "bcrypt";

const createRandomUser = async (): Promise<AddNewUser> => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    photo: faker.image.avatar(),
    startDate: new Date(faker.date.past()).getTime(),
    job: faker.helpers.arrayElement([
      TypeJob.Cleaner,
      TypeJob.Manager,
      TypeJob.Receptionist
    ]),
    schedule: faker.date.weekday(),
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
  await userService.addUser({
name:"admin",
email: "admin@hotmail.com",
photo:"https://avatars.githubusercontent.com/u/11509470",
startDate: 1583105012514,
job:TypeJob.Manager,
schedule: "Tuesday",
phone: "816-379-399",
status: StatusUser.Active,
password: "admin",
  });
};
