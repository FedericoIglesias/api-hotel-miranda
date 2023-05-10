import { Room, AddNewRoom } from "../types";
import { callDB } from "../mySQL";

export const getRooms = async () => {
  const rooms: any = await callDB("SELECT * FROM rooms");
  const listRoom = rooms.map((r: any) => {
    return {
      ...r,
    };
  });
  return listRoom;
};

export const getIdRoom = async (id: number) => {
  return await callDB("SELECT * FROM rooms WHERE id=?", [id]);
};

export const addRoom = async (addNewRoom: AddNewRoom) => {
  const newRoom = await callDB(
    "INSERT INTO rooms (photo, numberRoom, roomType, amenities, price, offerPercent, status) VALUES (?,?,?,?,?,?,?)",
    [
      addNewRoom.photo,
      addNewRoom.numberRoom,
      addNewRoom.roomType,
      addNewRoom.amenities,
      addNewRoom.price,
      addNewRoom.offerPercent,
      addNewRoom.status,
    ]
  );
  return newRoom;
};

export const deleteRoom = async (id: number) => {
  const resp = await callDB("DELETE FROM rooms WHERE id= ?", [id]);
  return resp;
};

export const updateRoom = async (putRoom: Room) => {
  
  const resp = await callDB(
    "UPDATE rooms SET photo=?, numberRoom=?, roomType=?, amenities=?, price=?, offerPercent=?, status=?  WHERE id = ?",
    [
      putRoom.photo,
      putRoom.numberRoom,
      putRoom.roomType,
      putRoom.amenities,
      putRoom.price,
      putRoom.offerPercent,
      putRoom.status,
      putRoom.id
    ]
  );
};
