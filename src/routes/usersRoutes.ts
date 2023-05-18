import express from "express";
import * as usersService from "../services/usersService";
import { verifyNewUser } from "../utils/usersUtils";
import { verifyId } from "../functions";

const routerUser = express.Router();

routerUser.get("/", async (req, res) => {
  res.send(await usersService.getUsers());
});

routerUser.get("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);
    const user = await usersService.getIdUser(id);
    return user !== undefined ? res.send(user) : res.send(404);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.delete("/", async (req, res) => {
  try {
    const id = verifyId(req.body.id);

    const newUsers = await usersService.deleteUser(id);

    res.send(newUsers);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.post("/", async (req, res) => {
  try {
    const veryfyUserReq = verifyNewUser(req.body);

    const createNewUser = await usersService.addUser(veryfyUserReq);

    res.json(createNewUser);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.put("/", async (req, res) => {
  try {
    const user = await usersService.putUser(req.body.id, req.body.obj);
    res.json(user);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerUser;
