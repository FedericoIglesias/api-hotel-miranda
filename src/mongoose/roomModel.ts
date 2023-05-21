import { model } from 'mongoose'
import { Schema } from 'mongoose';
import { StatusRoom, TypeRoom } from '../enum';

const roomSchema = new Schema({
    photo: [String],
    numberRoom: String,
    roomType: { type: TypeRoom },
    amenities: [String],
    price: Number,
    offerPercent: Number,
    status: {type:StatusRoom}
  });

  export const RoomModel = model('Room', roomSchema)

