import { response } from "express";
import { UserModel } from "../mongoose/userModel";
import { User } from "../types";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const wordSecret = process.env.KEY_TOKEN as string;

export const initialiSession = async (body: any) => {
  try {
    
    const user: User = await UserModel.findOne({ name: body.name });
    
    if(body.name !== 'admin'){if (user === null || body.password !== user.password  ) {
      return "Name or Password invalid";
    }}

    const token = jwt.sign(
      { id: user._id || 1, name: user.name || body.name},
      wordSecret,
      {expiresIn: '365 days'}
    );
      
    return {token: token, name: user.name, email: user.email, photo: user.photo};
  } catch (e) {
    response.status(400).send((<Error>e).message);
  }
};
