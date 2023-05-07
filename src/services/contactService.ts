import { write } from "../functions";
import { AddNewContact, Contact } from "../types";
import contactData from "../data/contacts.json"

let contacts: Contact[] = contactData as Contact[] ;

export const getContacts = (): Contact[] => contacts;


export const getIdContact = (id: number): Contact | undefined => {
  return contacts.find((contacts) => contacts.id === id);
};


export const addContact = (addNewContact: AddNewContact ): Contact => {
    const newContact = {
        id: Math.max(...contacts.map((contacts) => contacts.id)) + 1,
        ...addNewContact
    }
    contacts.push(newContact)
    write('src/data/contacts.json', contacts)
    return newContact
  }
  
  export const deleteContacts = (id: number): Contact[] =>{
    contacts = contacts.filter(c => c.id !== id)
    write('src/data/contacts.json', contacts)
  return contacts
}