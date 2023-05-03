import { StatusRoom, TypeRoom } from "./enum"


export interface Room {
    id: number,
    foto: any,
    numberRoom: string
    roomType: TypeRoom
    amenities: string
    price: number
    offerPercent: number
    status: StatusRoom
}

export type AddNewRoom = Omit<Room, 'id'>