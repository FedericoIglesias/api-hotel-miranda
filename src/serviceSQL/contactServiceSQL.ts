import { write } from "../functions";
import { callDB } from "../mySQL";
import { AddNewContact, Contact } from "../types";




export const getContacts = async () => await callDB('select * from contacts');


export const getIdContact = async (id: number) => {
  await callDB('select * from contacts where id=?', [id])
};


export const addContact = async (addNewContact: any ) => {
    await callDB(
        'insert into contacts (name, email, phone, date, subject) values (?,?,?,?,?)',
        [
            addNewContact.name,
            addNewContact.email,
            addNewContact.phone,
            addNewContact.date,
            addNewContact.subject,
        ]
    )
  }
  
  export const deleteContacts = async (id: number) =>{
    await callDB('delete from contacts where id=?', [id])
}

export const updateContact = async (putContact: any) =>{
    await callDB(
        'update contacts set name=?, email=?, phone=?, date=?, subject=? where id=?',
        [
            putContact.name,
            putContact.email,
            putContact.phone,
            putContact.date,
            putContact.subject,
            putContact.id
        ]
    )
}