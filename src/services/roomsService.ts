import roomsData from "../data/rooms.json";
import { Room, AddNewRoom } from "../types";


let rooms: Room[] = roomsData as Room[];

export const getRooms = (): Room[] => rooms;


export const getIdRoom = (id: number): Room | undefined => {
  return rooms.find((rooms) => rooms.id === id);
};


export const addRoom = (addNewRoom: AddNewRoom ): Room => {
    const newRoom = {
        id: Math.max(...rooms.map((rooms) => rooms.id)) + 1,
        ...addNewRoom
    }
    rooms.push(newRoom)
    return newRoom
}

export const deleteRoom = (id: number): Room[] =>{
  rooms = rooms.filter(r => r.id !== id)
  return rooms
}