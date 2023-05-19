import express from "express";
import * as roomsService from "../services/roomsService";
import { verifyNewRoom } from "../utils/roomsUtils";
import { verifyId } from "../functions";

const routerRoom = express.Router();

routerRoom.get("/", async (req, res) => {
  return res.json({ Rooms: await roomsService.getRooms() });
});

routerRoom.get("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);
    const room = await roomsService.getIdRoom(id);
    return room !== undefined ? res.json({ Room: room }) : res.send(404);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.delete("/", async (req, res) => {
  try {
    const id = verifyId(req.body.id);

    const newRooms = await roomsService.deleteRoom(id);

    return res.send(`Id ${id} was delete`)
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.post("/", async (req, res) => {
  try {
    const veryfyRoomReq = verifyNewRoom(req.body);

    const createNewRoom = await roomsService.addRoom(veryfyRoomReq);

    return res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.put("/", async (req, res) => {
  try {
    const room = await roomsService.putRoom(req.body.id, req.body.obj);
    return res.json({ Room: room });
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerRoom;
