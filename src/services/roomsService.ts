import { response } from "express";
import { RoomModel } from "../mongoose/roomModel";
import { Room, AddNewRoom } from "../types";
import { connectMongoDB } from "../mongo";

export const getRooms = async () => {
  try{
    await connectMongoDB();
    const rooms = await RoomModel.find({})
      return rooms
  }catch (e){
    console.log(e);
    return e
  }
};

export const getIdRoom = async (numberRoom: number) => {
  try{
    await connectMongoDB()
    const room = await RoomModel.find({ numberRoom })
    return room
    }catch (e){
      console.log(e);
      return e
    }
};

export const addRoom = async (addNewRoom: AddNewRoom) => {
  try{
    await connectMongoDB()
    const newRoom = new RoomModel({
      photo: addNewRoom.photo ,
      numberRoom: addNewRoom.numberRoom ,
      roomType: addNewRoom.roomType ,
      amenities: addNewRoom.amenities ,
      price: addNewRoom.price ,
      offerPercent: addNewRoom.offerPercent ,
      status: addNewRoom.status ,
    });
    const room = await newRoom.save()
    return room
  }catch (e){
    console.log(e);
    return e
  }
};

  export const deleteRoom = async (id: string) =>{
    try {
      await connectMongoDB()
      await RoomModel.deleteOne({id})
      return response.send(200)
  }catch (e){
    console.log(e);
    return e
  }

}


