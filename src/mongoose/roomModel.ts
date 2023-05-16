import { model } from 'mongoose'
import { Schema } from 'mongoose';
import { StatusRoom, TypeRoom } from '../enum';

const roomSchema = new Schema({
    photo: String,
    numberRoom: String,
    roomType: TypeRoom,
    amenities: String,
    price: Number,
    offerPercent: Number,
    status: StatusRoom
  });

  export const RoomModel = model('Room', roomSchema)

  // const room1 = new Room({
  //   photo: 'asd',
  //   numberRoom: 'asd',
  //   roomType: TypeRoom.Deluxe,
  //   amenities: 'asd',
  //   price: 0,
  //   offerPercent: 0,
  //   status: StatusRoom.Available
  // })