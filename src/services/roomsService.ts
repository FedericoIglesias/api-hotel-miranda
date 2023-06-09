import { response } from "express";
import { RoomModel } from "../mongoose/roomModel";
import { Room, AddNewRoom } from "../types";

export const getRooms = async () => {
  try {
    const rooms = await RoomModel.find({});
    return rooms;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const getIdRoom = async (id: string) => {
  try {
    const room = await RoomModel.findById(id);
    return room !== null ? room : "Id no found";
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const addRoom = async (addNewRoom: AddNewRoom) => {
  try {
    const newRoom = new RoomModel({
      photo: addNewRoom.photo,
      numberRoom: addNewRoom.numberRoom,
      roomType: addNewRoom.roomType,
      amenities: addNewRoom.amenities,
      price: addNewRoom.price,
      offerPercent: addNewRoom.offerPercent,
      status: addNewRoom.status,
    });
    const room = await newRoom.save();
    return room;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const deleteRoom = async (id: string) => {
  try {
    await RoomModel.findByIdAndDelete(id);
    return 'response.send(200)';
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const putRoom = async (id: string, obj: Room) => {
  try {
    await RoomModel.findByIdAndUpdate(id, obj);
    const room = await getIdRoom(id);
    return room;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};
