import { response } from "express";
import { parse } from "../functions"
import { AddNewContact } from "../types"
import Joi from "joi";



export const verifyNewcontact = async (obj:AddNewContact): Promise<any> =>{
    try{
        await validateContact.validateAsync(obj)
        return obj
    }catch (error){
        response.send(422).send(error)
    }
    
}



const validateContact = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    email: Joi.string().email({minDomainSegments:2 ,tlds: {allow: ['com']}}),
    phone: Joi.number().min(100000000).max(999999999),
    date: Joi.date().timestamp('javascript').required(),
    subject: Joi.string().max(30),
})