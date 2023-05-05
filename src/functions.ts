import { Booking, Room } from "./types";
import * as fs from 'fs'

export const write = (path: string, obj: Booking[] | Room[]) => {
    fs.writeFileSync(path, JSON.stringify(obj, null , 1))
  };