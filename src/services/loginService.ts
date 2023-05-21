import { response } from "express";
import { connectMongoDB } from "../mongo";
import { UserModel } from "../mongoose/userModel";
import { User } from "../types";
import jwt from "jsonwebtoken";
require("dotenv").config();

const wordSecret = process.env.KEY_TOKEN as string;

export const initialiSession = async (body: any) => {
  try {
    const user: User[] = await UserModel.find({ name: body.name });

    if (body.password !== user[0].password) {
      return "Name or Password invalid";
    }

    const token = jwt.sign({ id: user[0]._id, name: user[0].name }, wordSecret);

    return token;
  } catch (e) {
    response.status(400).send((<Error>e).message);
  }
};
