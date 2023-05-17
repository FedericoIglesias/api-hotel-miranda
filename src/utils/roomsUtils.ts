import { StatusRoom, TypeRoom } from "../enum";
import { parse } from "../functions";
import { AddNewRoom } from "../types";

const parseRoomType = (roomTypeFromReq: any): TypeRoom => {
  if (!Object.values(TypeRoom).includes(roomTypeFromReq)) {
    throw new Error(`RoomType not be TypeRoom`);
  }
  return roomTypeFromReq;
};

const parseStatus = (statusFromReq: any): StatusRoom => {
  if (!Object.values(StatusRoom).includes(statusFromReq)) {
    throw new Error("Status not be StatusRoom");
  }
  return statusFromReq;
};


export const verifyNewRoom = (obj: any): AddNewRoom => {
  const createRoom: AddNewRoom = {
    photo: parse(obj.foto, 'photo', 'string'),
    numberRoom: parse(obj.numberRoom, 'numberRoom', 'number'),
    roomType: parseRoomType(obj.roomType),
    amenities: parse(obj.amenities, 'amenities', 'object'),
    price: parse(obj.price, 'price', 'number'),
    offerPercent: parse(obj.offerPercent, 'offerPercent', 'number'),
    status: parseStatus(obj.status),
  };

  return createRoom;
};


