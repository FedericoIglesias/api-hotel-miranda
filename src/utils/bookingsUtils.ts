import Joi from "joi";
import { StatusBooking } from "../enum";

export const validateBook = Joi.object({
  name: Joi.string().max(30).min(1).required(),
  orderDate: Joi.date().timestamp("javascript").required(),
  checkIn: Joi.date().timestamp("javascript").required(),
  checkOut: Joi.date().timestamp("javascript").required(),
  idRoom: Joi.number().min(1).required(),
  status: Joi.string()
    .valid(
      StatusBooking.CheckIn,
      StatusBooking.CheckOut,
      StatusBooking.InProgress
    )
    .required(),
});


export const verifyNewBooking = (schema:any) => {
    const validate = (req: any, res: any) =>{
      let {error} = schema.validate(req.body);
      if(error){
        res.json(error.details)
      }else{
        res.send(200)
      }
    }
    return validate
};

