import { Schema, model } from "mongoose"
import { StatusUser } from "../enum"


const userSchema = new Schema ({
    name: String,
    email: String,
    startDate: Date,
    description: String,
    phone: Number,
    status: {type: StatusUser},
    password: String
  })


export const UserModel = model('User', userSchema)