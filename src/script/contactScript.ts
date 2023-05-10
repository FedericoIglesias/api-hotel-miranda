import { faker } from "@faker-js/faker";
import * as contactService from '../serviceSQL/contactServiceSQL'
import { AddNewContactsSQL } from "../types";



function createRandomContact(): AddNewContactsSQL {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number("###-###-###"),
      date: new Date(faker.date.past()).getTime(),
      subject: faker.random.word()
    };
  }


  for(let i = 0; i < 10; i++){
    const contact = createRandomContact()
    contactService.addContact(contact)
  }
