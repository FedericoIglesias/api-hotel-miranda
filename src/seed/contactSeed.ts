import { faker } from "@faker-js/faker";
import * as contactService from '../services/contactService'
import { AddNewContact } from "../types";



function createRandomContact(): AddNewContact {

    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number("###-###-###"),
      date: new Date(faker.date.past()),
      subject: faker.lorem.word()
    };
  }

export const generateContact = async (cant: number) =>{
  for(let i = 0; i < cant; i++){
    const contact = createRandomContact()
    await contactService.addContact(contact)
  }
}

