import express from "express";
import * as usersService from '../services/usersService'
import { verifyNewUser } from "../utils/usersUtils";
import { verifyId } from "../functions";

const routerUser = express.Router();

routerUser.get("/", (req, res) => {
  res.send(usersService.getUsers());
});

routerUser.get("/:id", (req, res) => {
  try{
    const id = verifyId(req.params.id.toString())
    const User = usersService.getIdUser(id);
    return User !== undefined ? res.send(User) : res.send(404);
  }catch(e){
    res.send(400).send((<Error>e).message)
  }
});

routerUser.delete("/", (req, res) => {
    try{
        const id = verifyId(req.body);

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