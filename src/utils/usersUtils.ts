import { response } from "express";
import { AddNewUserSQL } from "../types";
import Joi from 'joi'

export const validateUser = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    email: Joi.string().email({minDomainSegments:2 ,tlds: {allow: ['com']}}).required(),
    startDate: Joi.date().timestamp('javascript').required(),
    description: Joi.string().max(200),
    phone: Joi.number().min(100000000).max(999999999).required(),
    status: Joi.string().required(),
    password: Joi.string().min(1).max(30).required()
})

export const verifyNewUser =  (schema: any)  => {
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
  


