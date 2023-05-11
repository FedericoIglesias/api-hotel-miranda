import { faker } from "@faker-js/faker";
import { AddNewUserSQL } from "../types";
import * as userService from '../serviceSQL/userServiceSQL'

 function createRandomUser(): AddNewUserSQL {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    startDate: new Date(faker.date.past()).getTime(),
    description: faker.lorem.words(10),
    phone: faker.phone.number("###-###-###"),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    password: faker.internet.password(),
  };
}


export const  generateUser = async (cant: number) =>{
  for(let i = 0; i < cant; i++){
    const user = createRandomUser()
    await userService.addUser(user)
  }
}