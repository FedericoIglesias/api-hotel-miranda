import Joi from "joi";
import { StatusRoom, TypeRoom } from "../enum";

export const validateRoom = Joi.object({
  photo: Joi.string(),
  numberRoom: Joi.number().min(1),
  roomType: Joi.string().valid(TypeRoom.Deluxe, TypeRoom.DoubleBed, TypeRoom.SingleBed),
  amenities: Joi.string(),
  price: Joi.number().min(0),
  offerPercent: Joi.number().min(0).max(50),
  status: Joi.string().valid(StatusRoom.Available, StatusRoom.Booked),
})

export const verifyNewRoom = (schema: any) => {
const validate = (req: any, res: any) => {
  let {error} = schema.validate(req.body)
  if(error){
    res.json(error.details)
  }else{
    res.send(200)
  }
}
return validate
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
