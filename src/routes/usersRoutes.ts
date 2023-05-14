import express from "express";
// import * as usersService from '../servicesFS/usersService'
import * as usersService from '../serviceSQL/userServiceSQL'
import { verifyIdDelete } from "../utils/roomsUtils";
import { validateUser, verifyNewUser } from "../utils/usersUtils";
import { AddNewUser, AddNewUserSQL } from "../types";
import { validateContact } from "../utils/contactUtils";

const routerUser = express.Router();

routerUser.get("/", async (req, res) => {
  res.send(await usersService.getUsers());
});

routerUser.get("/:id", async (req, res) => {
  const User = await usersService.getIdUser(+req.params.id);
  return User !== undefined ? res.send(User) : res.send(404);
});

routerUser.delete("/", async (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newUsers = await usersService.deleteUser(id);

        res.send(newUsers)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerUser.post("/",verifyNewUser(validateUser),async (req, res) => {
  try {
    const veryfyUserReq = verifyNewUser(req.body) as AddNewUserSQL;

    const createNewUser = await usersService.addUser(veryfyUserReq);

    res.json(createNewUser);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.put("/", async (req, res) => {
  try{
    await usersService.updateUser(req.body)
    res.send(200)
  }catch(e){
    res.status(400).send((<Error>e).message);
  }

});

export default routerUser;