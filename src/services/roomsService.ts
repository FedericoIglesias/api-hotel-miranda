import { response } from "express";
import roomsData from "../data/rooms.json";
import { write } from "../functions";
import { RoomModel } from "../mongoose/roomModel";
import { Room, AddNewRoom } from "../types";
import { connectMongoDB } from "../mongo";

export const getRooms = () => {
  connectMongoDB();
  RoomModel.find({}).then((r) => {
    response.json(r);
  });
};

export const getIdRoom = (numberRoom: number) => {
  connectMongoDB()
  RoomModel.find({ numberRoom }).then((r) => {
    response.json(r);
  });
};

export const addRoom = (addNewRoom: AddNewRoom) => {
  connectMongoDB()
  const newRoom = new RoomModel({
    photo: addNewRoom.photo ,
    numberRoom: addNewRoom.numberRoom ,
    roomType: addNewRoom.roomType ,
    amenities: addNewRoom.amenities ,
    price: addNewRoom.price ,
    offerPercent: addNewRoom.offerPercent ,
    status: addNewRoom.status ,
  });
  newRoom.save().then(saveRoom => {
    response.json(saveRoom)
  })
};

  export const deleteRoom = (numberRoom: number) =>{
    connectMongoDB()
    RoomModel.deleteOne({numberRoom}).then(() => {
      response.send(200)
    }).catch(error => response.json(error));
}


