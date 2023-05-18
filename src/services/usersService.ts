import { AddNewUser, User } from "../types";
import { connectMongoDB } from "../mongo";
import { UserModel } from "../mongoose/userModel";

export const getUsers = async () => {
  try {
    await connectMongoDB();
    const users = await UserModel.find({});
    return users;
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const getIdUser = async (id: string) => {
  try {
    await connectMongoDB();
    const user = await UserModel.findById(id);
    return user !== null? user : 'Id no found';
  } catch (e) {
    throw new Error((<Error>e).message);
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
    throw new Error((<Error>e).message);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectMongoDB();
    await UserModel.findByIdAndDelete(id);
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};

export const putUser = async (id: string, putUser: AddNewUser) => {
  try {
    await connectMongoDB();
    await UserModel.findByIdAndUpdate(id, putUser);
    return await UserModel.findById(id);
  } catch (e) {
    throw new Error((<Error>e).message);
  }
};
