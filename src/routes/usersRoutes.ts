import express from "express";
import * as usersService from "../services/usersService";
import { verifyId } from "../functions";

const routerUser = express.Router();

routerUser.get("/", async (req, res) => {
  return res.json(await usersService.getUsers());
});

routerUser.get("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);
    const user = await usersService.getIdUser(id);
    return user !== undefined ? res.json(user) : res.send(404);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.delete("/", async (req, res) => {
  try {
    const id = verifyId(req.body.id);

    await usersService.deleteUser(id);

    return res.send(`Id ${id} was delete`);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.post("/", async (req, res) => {
  try {
    const createNewUser = await usersService.addUser(req.body);

    return res.json({ NewUSer: createNewUser });
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerUser.put("/", async (req, res) => {
  try {
    const user = await usersService.putUser(req.body.id, req.body.obj);
    return res.json({ user: user });
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerUser;
