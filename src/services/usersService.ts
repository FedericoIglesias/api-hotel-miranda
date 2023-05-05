import { AddNewUser, User } from "../types";
import usersData from "../data/users.json";
import { write } from "../functions";

let users: User[] = usersData as User[];

export const getUsers = (): User[] => users;

export const getIdUser = (id: number): User | undefined => {
  return users.find((users) => users.id === id);
};

export const addUser = (addNewUser: AddNewUser): User => {
  const newUser = {
    id: Math.max(...users.map((Users) => Users.id)) + 1,
    ...addNewUser,
  };
  users.push(newUser);
  write("src/data/Users.json", users);
  return newUser;
};

export const deleteUser = (id: number): User[] => {
  users = users.filter((r) => r.id !== id);
  write("src/data/users.json", users);
  return users;
};
