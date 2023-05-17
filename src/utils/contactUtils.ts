import { parse } from "../functions"
import { AddNewContact } from "../types"

export const verifyNewcontact = (obj:any): AddNewContact =>{

    const newContact: AddNewContact ={
        name: parse(obj.name, 'name', 'string'),
        email: parse(obj.email, 'email','string'),
        phone: parse(obj.phone, 'phone', 'number'),
        date: parse(obj.date, 'date', 'date'),
        subject: parse(obj.subject, "subject", 'string')
    }
    return newContact
}