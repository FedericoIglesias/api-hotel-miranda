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



for(let i = 0; i < 10; i++){
  const user = createRandomUser()
  userService.addUser(user)
}