import { Schema, model } from "mongoose"
import { StatusUser } from "../enum"


const userSchema = new Schema ({
    name: String,
    email: String,
    startDate: Number,
    description: String,
    phone: String,
    status: {type: StatusUser},
    password: String
  })


export const UserModel = model('User', userSchema)