import { AddNewContact } from "../types"
import { parseName } from "./bookingsUtils"
import { parsePhone } from "./usersUtils"

const parseString = (obj: any, nameObj: string): string =>{
    if(typeof obj !== 'string'){
        throw new Error (`${nameObj} no be string`)
    }
    return obj
}

const parseNumber = (obj: any, nameObj: string, type: string ): number => {
    if( typeof obj !== type){
        throw new Error (`${nameObj} no be ${type}`)
    }
    return obj
}

export const verifyNewcontact = (obj:any): AddNewContact =>{

    const newContact: AddNewContact ={
        name: parseName(obj.name),
        email: parseString(obj.email, 'email'),
        phone: parseNumber(obj.phone, 'phone', 'number'),
        date: parseString(obj.date, 'date'),
        subject: parseString(obj.subject, "subject")
    }
    return newContact
}