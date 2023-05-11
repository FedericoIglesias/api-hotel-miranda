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

export const generateContact = async (cant: number) =>{
  for(let i = 0; i < cant; i++){
    const contact = createRandomContact()
    await contactService.addContact(contact)
  }
}
