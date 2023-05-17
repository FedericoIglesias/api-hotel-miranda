import { AddNewUser, User } from "../types";
import { connectMongoDB } from "../mongo";
import { UserModel } from "../mongoose/userModel";
import { response } from "express";

export const getUsers = async () => {
  try {
    await connectMongoDB();
    const users = await UserModel.find({});
    return users;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getIdUser = async (id: string) => {
  try{
    await connectMongoDB();  
    const user = UserModel.findById(id);
    return user;
  } catch (e){
    console.log(e);
  }
};

export const addUser = async (addNewUser: AddNewUser) => {
  try {
    await connectMongoDB();
    const newUser = new UserModel({
      name: addNewUser.name,
      email: addNewUser.email,
      startDate: addNewUser.startDate,
      description: addNewUser.description,
      phone: addNewUser.phone,
      status: addNewUser.status,
      password: addNewUser.password,
    });
    await newUser.save();
    return newUser;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (id: string) => {
  try{
    await connectMongoDB()
    await UserModel.findByIdAndDelete(id)
  } catch (e){
    console.log(e);
    
  }
};
