import { AddNewContact } from "../types"
import { parseName } from "./bookingsUtils"
import { parsePhone } from "./usersUtils"

const parseString = (obj: any, nameObj: string) =>{
    if(typeof obj !== 'string'){
        throw new Error (`${nameObj} no be string`)
    }
    return obj
}

const parse = (obj: any, nameObj: string, type: string ): any => {
    if( typeof obj !== type){
        throw new Error (`${nameObj} no be ${type}`)
    }
    return obj
}

export const verifyNewcontact = (obj:any): AddNewContact =>{

    const newContact: AddNewContact ={
        name: parseName(obj.name),
        email: parseString(obj.email, 'email'),
        phone: parse(obj.phone, 'phone', 'number'),
        date: parse(obj.date, 'date', 'date'),
        subject: parseString(obj.subject, "subject")
    }
    return newContact
}