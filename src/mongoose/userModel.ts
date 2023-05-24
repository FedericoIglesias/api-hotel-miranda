import { Schema, model } from "mongoose"
import { StatusUser } from "../enum"


const userSchema = new Schema ({
    name: String,
    email: String,
    photo: String,
    startDate: Number,
    job: String,
    schedule: String,
    phone: String,
    status: {type: StatusUser},
    password: String
  })


export const UserModel = model('User', userSchema)