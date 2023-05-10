import { StatusRoom, TypeRoom } from "../enum";
import { AddNewRoom } from "../types";

const parsePhoto = (photoFromReq: any): string => {
  if (typeof photoFromReq !== "object") {
    throw new Error('Photo not be a object')
  }
  return photoFromReq;
};

const parseNumberRoom = (numberRoomFromReq: any): number => {
  if (typeof numberRoomFromReq !== "number") {
    throw new Error("NumberRoom no be string");
  }
  return numberRoomFromReq;
};

const parseRoomType = (roomTypeFromReq: any): TypeRoom => {
  if (!Object.values(TypeRoom).includes(roomTypeFromReq)) {
    throw new Error(`RoomType not be TypeRoom`);
  }
  return roomTypeFromReq;
};

const parseAmenities = (amenitiesFromReq: string): string => {
  if (typeof amenitiesFromReq !== "string") {
    throw new Error("Amenities not be string");
  }
  return amenitiesFromReq;
};

const parsePrice = (priceFromReq: any): number => {
  if (typeof priceFromReq !== "number") {
    throw new Error("price not be number");
  }
  return priceFromReq;
};

const parseOfferPercent = (OfferPercentFromReq: any): number => {
  if (typeof OfferPercentFromReq !== "number") {
    throw new Error("OfferPercenter not be number");
  }
  return OfferPercentFromReq;
};

const parseStatus = (statusFromReq: any): StatusRoom => {
  if (!Object.values(StatusRoom).includes(statusFromReq)) {
    throw new Error("Status not be StatusRoom");
  }
  return statusFromReq;
};


export const verifyNewRoom = (obj: any): AddNewRoom => {
  const createRoom: AddNewRoom = {
    photo: obj.photo,
    // photo: parseFoto(obj.photos),
    numberRoom: parseNumberRoom(obj.numberRoom),
    roomType: parseRoomType(obj.roomType),
    amenities: parseAmenities(obj.amenities),
    price: parsePrice(obj.price),
    offerPercent: parseOfferPercent(obj.offerPercent),
    status: parseStatus(obj.status),
  };

  return createRoom;
};


const parseId = (idFromReq: any):number => {
  if(typeof idFromReq !== 'number'){
    throw new Error ('Id should be number ')
  }

  return idFromReq
}

export const verifyIdDelete = (obj:any): number => {
  const idDelete = parseId(obj.id)
  
  return idDelete
}
