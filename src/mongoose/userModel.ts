import { Schema, model } from "mongoose"
import { StatusUser } from "../enum"


const userSchema = new Schema ({
    name: String,
    email: String,
    startDate: Date,
    description: String,
    phone: Number,
    status: StatusUser,
    password: String
  })


export const User = model('User', userSchema)