import { response } from "express";
import { UserModel } from "../mongoose/userModel";
import { User } from "../types";
import jwt from "jsonwebtoken";
require("dotenv").config();

const wordSecret = process.env.KEY_TOKEN as string;

export const initialiSession = async (body: any) => {
  try {
    const user: User = await UserModel.findOne({ name: body.name });
    
    if (user === null || body.password !== user.password ) {
      return "Name or Password invalid";
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      wordSecret,
      {expiresIn: '1h'}
    );

    return token;
  } catch (e) {
    response.status(400).send((<Error>e).message);
  }
};
