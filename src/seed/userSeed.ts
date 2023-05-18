import { faker } from "@faker-js/faker";
import { AddNewUser } from "../types";
import * as userService from '../services/usersService'
import { StatusUser } from "../enum";

 function createRandomUser(): AddNewUser {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    startDate: new Date(faker.date.past()).getTime(),
    description: faker.lorem.words(10),
    phone: faker.phone.number("###-###-###"),
    status: faker.helpers.arrayElement([StatusUser.Active, StatusUser.Inactive]),
    password: faker.internet.password(),
  };
}


export const  generateUser = async (cant: number) =>{
  for(let i = 0; i < cant; i++){
    const user = createRandomUser()
    await userService.addUser(user)
  }
}
