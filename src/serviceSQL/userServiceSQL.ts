import { callDB } from "../mySQL";
import { AddNewUser, AddNewUserSQL, UserSQL } from "../types";

export const getUsers = async () => await callDB('SELECT * FROM users');

export const getIdUser = async (id: number) => {
  await callDB('SELECT * FROM users WHERE id=?', [id])
};

export const addUser = async (addNewUser: AddNewUserSQL) => {
    await callDB(
        "INSERT INTO users (name, email, startDate, description, phone, status, password) VALUES (?,?,?,?,?,?,?)",
        [
            addNewUser.name,
            addNewUser.email,
            addNewUser.startDate,
            addNewUser.description,
            addNewUser.phone,
            addNewUser.status,
            addNewUser.password,
        ])
};

export const deleteUser = async (id: number) => {
  await callDB("DELETE FROM users WHERE id= ?", [id])
};


export const updateUser = async (putUser: UserSQL) => {
    await callDB(
        'UPDATE users SET  name=?, email=?, startDate=?, description=?, phone=?, status=?, password=? WHERE id=?',
        [
            putUser.name,
            putUser.email,
            putUser.startDate,
            putUser.description,
            putUser.phone,
            putUser.status,
            putUser.password,
            putUser.id
        ]
    )
}