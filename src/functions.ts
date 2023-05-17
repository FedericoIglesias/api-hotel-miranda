import { Booking, Contact, Room, User } from "./types";
import * as fs from 'fs'

export const write = (path: string, obj: Booking[] | Room[] | User[] | Contact[]) => {
    fs.writeFileSync(path, JSON.stringify(obj, null , 1))
  };

  export const parse = (obj: any, nameObj: string, type: string ): any => {
    if( typeof obj !== type){
        throw new Error (`${nameObj} no be ${type}`)
    }
    return obj
}


const parseId = (idFromReq: any): string => {
  if(typeof idFromReq !== 'string'){
    throw new Error ('Id should be string ')
  }
  return idFromReq
}

export const verifyIdDelete = (obj:any): string => {
  const idDelete = parseId(obj.id)
  
  return idDelete
}
