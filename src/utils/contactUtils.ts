import { response } from "express";
import Joi from "joi";

export const validateContact = Joi.object({
  name: Joi.string().min(1).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com"] } }),
  phone: Joi.number().min(100000000).max(999999999),
  date: Joi.date().timestamp("javascript"),
  subject: Joi.string().max(30),
});

export const verifyNewcontact =  (schema: any) => {
    let validate = (req: any , res: any ) => {
      let {error} = schema.validate(req.body);
      if(error){
        res.json(error.details)
      }else{
        res.send(200)
      }
      
    }
    return validate
  }
