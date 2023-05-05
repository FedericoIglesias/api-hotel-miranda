import express from "express";
import * as usersService from '../services/usersService'
import { verifyIdDelete } from "../utils/roomsUtils";
import { verifyNewUser } from "../utils/usersUtils";

const routerUser = express.Router();

routerUser.get("/", (req, res) => {
  res.send(usersService.getUsers());
});

routerUser.get("/:id", (req, res) => {
  const User = usersService.getIdUser(+req.params.id);
  return User !== undefined ? res.send(User) : res.send(404);
});

routerUser.delete("/", (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newUsers = usersService.deleteUser(id);

        res.send(newUsers)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerUser.post("/", (req, res) => {
  try {
    const veryfyUserReq = verifyNewUser(req.body);

    const createNewUser = usersService.addUser(veryfyUserReq);

    res.json(createNewUser);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.put("/", (req, res) => {});

export default routerUser;